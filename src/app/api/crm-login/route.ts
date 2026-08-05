import { NextRequest, NextResponse } from "next/server";
import { lookupCrmClient } from "@/lib/crm-directory";

const GENERIC_ERROR = "No se pudo iniciar sesión. Verifica tus datos e intenta nuevamente.";
const RATE_LIMIT_ERROR = "Demasiados intentos. Espera unos minutos e intenta nuevamente.";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
  }

  const { username, password } = (body ?? {}) as {
    username?: unknown;
    password?: unknown;
  };

  if (typeof username !== "string" || typeof password !== "string" || !username || !password) {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
  }

  const client = lookupCrmClient(username);
  if (!client) {
    // Username no registrado en el directorio: mismo error genérico que credenciales
    // inválidas, para no revelar qué usernames existen.
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 401 });
  }

  let crmResponse: Response;
  try {
    crmResponse = await fetch(`${client.crmBaseUrl}/api/auth/external-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Zyton-Bridge-Secret": client.bridgeSecret,
      },
      body: JSON.stringify({ username, password }),
    });
  } catch (err) {
    console.error("crm-login: fallo al contactar el CRM", err);
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
  }

  if (crmResponse.status === 429) {
    return NextResponse.json({ error: RATE_LIMIT_ERROR }, { status: 429 });
  }

  if (!crmResponse.ok) {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 401 });
  }

  const data = (await crmResponse.json().catch(() => null)) as { redirectUrl?: unknown } | null;
  const redirectUrl = data?.redirectUrl;

  if (typeof redirectUrl !== "string") {
    console.error("crm-login: el CRM respondió 200 sin redirectUrl válido");
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
  }

  // El redirectUrl debe apuntar al mismo origen que el CRM configurado para este
  // cliente: evita que una respuesta inesperada del CRM mande al usuario a otro sitio.
  try {
    const redirectOrigin = new URL(redirectUrl).origin;
    const crmOrigin = new URL(client.crmBaseUrl).origin;
    if (redirectOrigin !== crmOrigin) {
      console.error("crm-login: redirectUrl con origen distinto al crmBaseUrl configurado");
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
  }

  return NextResponse.json({ redirectUrl });
}
