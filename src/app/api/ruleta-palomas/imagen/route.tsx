import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Imagen individual de la ruleta de palomas (public/ruleta-palomas/).
// Se dibuja en el servidor porque Safari bloquea leer el canvas en el navegador.

// Misma estructura que CARAS en public/ruleta-palomas/index.html
const CARAS = [
  { nombre: "Cara 1", cols: 6, filas: 7 },
  { nombre: "Cara 2", cols: 5, filas: 7 },
];
const TOTAL = CARAS.reduce((a, c) => a + c.cols * c.filas, 0);

const W = 1080;
const H = 1350;
const M = 70;

export async function GET(req: Request) {
  const q = new URL(req.url).searchParams;
  const nombre = (q.get("n") || "Socio").slice(0, 60);
  const palomas = Math.max(0, Math.min(99999, parseInt(q.get("p") || "0", 10) || 0));
  const fecha = (q.get("f") || "").slice(0, 40);
  const color = /^[0-9a-fA-F]{6}$/.test(q.get("col") || "") ? `#${q.get("col")}` : "#1d4ed8";
  const cajones = [...new Set((q.get("c") || "").split(",").map((x) => parseInt(x, 10)))]
    .filter((n) => n >= 1 && n <= TOTAL)
    .sort((a, b) => a - b);

  const [medium, black] = await Promise.all([
    readFile(join(process.cwd(), "assets/fuentes/Geist-Medium.ttf")),
    readFile(join(process.cwd(), "assets/fuentes/Geist-Black.ttf")),
  ]);

  // Fichas: el tamano se ajusta a cuantos cajones tenga
  const areaW = W - 2 * M;
  const areaH = 280;
  const gap = 16;
  let t = 150;
  let porFila = 1;
  for (; t > 40; t -= 4) {
    porFila = Math.max(1, Math.floor((areaW + gap) / (t + gap)));
    if (Math.ceil(cajones.length / porFila) * (t + gap) - gap <= areaH) break;
  }

  // Mapa del camion: misma celda para las dos caras
  const mapaY = 760;
  const sep = 40;
  const colsTot = CARAS.reduce((a, c) => a + c.cols, 0);
  const filasMax = Math.max(...CARAS.map((c) => c.filas));
  const cel = Math.floor(Math.min((areaW - sep * (CARAS.length - 1)) / colsTot, (H - mapaY - 80 - 44) / filasMax));
  const mios = new Set(cajones);
  const tamNombre = nombre.length <= 14 ? 88 : nombre.length <= 22 ? 70 : 54;

  let desde = 1;
  const caras = CARAS.map((c) => {
    const inicio = desde;
    desde += c.cols * c.filas;
    return { ...c, inicio };
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(180deg, #1f2a37 0%, #0b1220 100%)",
          color: "#fff",
          fontFamily: "Geist",
          position: "relative",
        }}
      >
        <div style={{ height: 14, width: "100%", background: color, display: "flex" }} />
        <div style={{ display: "flex", flexDirection: "column", padding: `50px ${M}px 0` }}>
          <div style={{ fontSize: 30, fontWeight: 500, color: "rgba(255,255,255,.6)", letterSpacing: 2 }}>SORTEO DE CAJONES</div>
          <div style={{ fontSize: 40, fontWeight: 500, marginTop: 6 }}>{fecha}</div>

          <div style={{ display: "flex", marginTop: 40, alignItems: "stretch" }}>
            <div style={{ width: 12, background: color, borderRadius: 6, display: "flex" }} />
            <div style={{ display: "flex", flexDirection: "column", marginLeft: 28 }}>
              <div style={{ fontSize: tamNombre, fontWeight: 900, lineHeight: 1.05 }}>{nombre}</div>
              <div style={{ fontSize: 32, fontWeight: 500, color: "rgba(255,255,255,.7)", marginTop: 10 }}>
                {`${palomas} palomas  ·  ${cajones.length} ${cajones.length === 1 ? "cajón" : "cajones"}`}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: 440,
            left: M,
            width: areaW,
            height: areaH,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            gap,
          }}
        >
          {cajones.map((n) => (
            <div
              key={n}
              style={{
                width: t,
                height: t,
                borderRadius: t * 0.18,
                background: color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: Math.round(t * 0.46),
                fontWeight: 900,
              }}
            >
              {String(n)}
            </div>
          ))}
        </div>

        <div style={{ position: "absolute", top: mapaY, left: M, width: areaW, display: "flex", justifyContent: "center", gap: sep }}>
          {caras.map((c) => (
            <div key={c.nombre} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 26, fontWeight: 500, color: "rgba(255,255,255,.75)", marginBottom: 12 }}>{c.nombre}</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "3px solid rgba(255,255,255,.35)",
                  borderRadius: 10,
                  padding: 4,
                }}
              >
                {Array.from({ length: c.filas }, (_, f) => (
                  <div key={f} style={{ display: "flex" }}>
                    {Array.from({ length: c.cols }, (_, k) => {
                      const n = c.inicio + f * c.cols + k;
                      const mio = mios.has(n);
                      return (
                        <div key={n} style={{ width: cel, height: cel, padding: 3, display: "flex" }}>
                          <div
                            style={{
                              flex: 1,
                              borderRadius: 6,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: Math.round(cel * 0.36),
                              fontWeight: mio ? 900 : 500,
                              background: mio ? color : "transparent",
                              border: mio ? "none" : "2px solid rgba(255,255,255,.18)",
                              color: mio ? "#fff" : "rgba(255,255,255,.35)",
                            }}
                          >
                            {String(n)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 34,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            fontSize: 24,
            fontWeight: 500,
            color: "rgba(255,255,255,.35)",
          }}
        >
          Ruleta de Palomas
        </div>
      </div>
    ),
    {
      width: W,
      height: H,
      fonts: [
        { name: "Geist", data: medium, weight: 500, style: "normal" },
        { name: "Geist", data: black, weight: 900, style: "normal" },
      ],
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Robots-Tag": "noindex, nofollow",
      },
    },
  );
}
