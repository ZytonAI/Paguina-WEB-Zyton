import { NextRequest, NextResponse } from "next/server";

const ERROR = "No pudimos enviar tu mensaje. Escríbenos por WhatsApp y te respondemos enseguida.";

// Formulario de contacto -> lead en el CRM interno del equipo (crm.zytonai.com,
// `POST /api/leads/web`), servidor a servidor con un secreto compartido. Ahí
// se crea el lead (o se anota en el que ya existía) y le llega un Telegram al
// Dueño. Antes el formulario solo pintaba «gracias» y no mandaba nada.
//
// `sitio` es una trampa para bots: el campo está oculto, una persona nunca lo
// llena. Si viene lleno se contesta «ok» sin mandar nada, para que el bot no
// aprenda a esquivarlo.
export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) ?? {};
  } catch {
    return NextResponse.json({ error: ERROR }, { status: 400 });
  }

  const texto = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  if (texto(body.sitio, 200)) return NextResponse.json({ ok: true });

  const datos = {
    nombre: texto(body.nombre, 120),
    email: texto(body.email, 160),
    empresa: texto(body.empresa, 160),
    telefono: texto(body.telefono, 40),
    mensaje: texto(body.mensaje, 2000),
  };
  if (!datos.nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)) {
    return NextResponse.json({ error: "Revisa tu nombre y tu correo." }, { status: 400 });
  }

  const secreto = process.env.WEB_LEADS_SECRET;
  const base = (process.env.CRM_INTERNO_URL || "https://crm.zytonai.com").replace(/\/$/, "");
  if (!secreto) {
    console.error("contacto: falta WEB_LEADS_SECRET en el entorno");
    return NextResponse.json({ error: ERROR }, { status: 503 });
  }

  try {
    const r = await fetch(`${base}/api/leads/web`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${secreto}` },
      body: JSON.stringify(datos),
      signal: AbortSignal.timeout(10_000),
    });
    if (!r.ok) {
      console.error("contacto: el CRM respondió", r.status);
      return NextResponse.json({ error: ERROR }, { status: 502 });
    }
  } catch (e) {
    console.error("contacto: no se pudo llamar al CRM", e);
    return NextResponse.json({ error: ERROR }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
