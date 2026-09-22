import { NextRequest, NextResponse } from "next/server";
import { crmConfig, esUrlDelCrm } from "@/lib/crm";

const GENERIC_ERROR = "No se pudo iniciar sesión. Verifica tus datos e intenta nuevamente.";
const RATE_LIMIT_ERROR = "Demasiados intentos. Espera unos minutos e intenta nuevamente.";
const UNAVAILABLE_ERROR = "El acceso al CRM no está disponible en este momento. Intenta más tarde.";

// Puente hacia el CRM. Llama servidor a servidor a `POST /auth/puente` de la
// API con el secreto compartido; la API valida las credenciales, averigua la
// empresa y devuelve a dónde mandar a la persona. Si el mismo usuario existe
// en varias empresas, la API responde 409 y acá se le pide a la persona que
// escriba la suya (`necesitaEmpresa`).
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
  }

  const { username, password, empresa } = (body ?? {}) as {
    username?: unknown;
    password?: unknown;
    empresa?: unknown;
  };

  if (typeof username !== "string" || typeof password !== "string" || !username || !password) {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
  }
  const subdominio =
    typeof empresa === "string" && empresa.trim() ? empresa.trim().toLowerCase() : undefined;

  const config = crmConfig();
  if (!config) {
    console.error("crm-login: falta CRM_BRIDGE_SECRET en el entorno");
    return NextResponse.json({ error: UNAVAILABLE_ERROR }, { status: 503 });
  }

  let crmResponse: Response;
  try {
    crmResponse = await fetch(`${config.apiBaseUrl}/auth/puente`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Zyton-Bridge-Secret": config.bridgeSecret,
      },
      body: JSON.stringify({ username, password, subdominio }),
      cache: "no-store",
    });
  } catch (err) {
    console.error("crm-login: fallo al contactar la API del CRM", err);
    return NextResponse.json({ error: UNAVAILABLE_ERROR }, { status: 502 });
  }

  if (crmResponse.status === 429) {
    return NextResponse.json({ error: RATE_LIMIT_ERROR }, { status: 429 });
  }

  if (crmResponse.status === 409) {
    const cuerpo = (await crmResponse.json().catch(() => null)) as {
      detail?: { necesita_empresa?: boolean; mensaje?: string };
    } | null;
    if (cuerpo?.detail?.necesita_empresa) {
      return NextResponse.json(
        {
          necesitaEmpresa: true,
          error: cuerpo.detail.mensaje ?? "Escribe el nombre de tu empresa para continuar.",
        },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 401 });
  }

  if (crmResponse.status === 503) {
    console.error("crm-login: la API dice que el puente no está configurado (PUENTE_WEB_SECRET)");
    return NextResponse.json({ error: UNAVAILABLE_ERROR }, { status: 503 });
  }

  if (!crmResponse.ok) {
    const errorBody = await crmResponse.json().catch(() => null);
    const detail = (errorBody as { detail?: unknown } | null)?.detail;
    // 401 y 403 traen un motivo pensado para la persona ("cuenta suspendida");
    // cualquier otro código se registra y se responde con el genérico.
    if ((crmResponse.status === 401 || crmResponse.status === 403) && typeof detail === "string") {
      return NextResponse.json({ error: detail }, { status: crmResponse.status });
    }
    console.error(
      `crm-login: la API respondió ${crmResponse.status} para username="${username}":`,
      errorBody
    );
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 401 });
  }

  const data = (await crmResponse.json().catch(() => null)) as { redirectUrl?: unknown } | null;
  const redirectUrl = data?.redirectUrl;

  if (typeof redirectUrl !== "string" || !esUrlDelCrm(redirectUrl, config)) {
    console.error("crm-login: la API respondió 200 sin un redirectUrl válido del CRM");
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
  }

  return NextResponse.json({ redirectUrl });
}
