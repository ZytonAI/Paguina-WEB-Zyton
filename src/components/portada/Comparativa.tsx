import Image from "next/image";
import { Check, Minus } from "lucide-react";
import Reveal from "../Reveal";

// Contra las otras formas de llevar el negocio, por categoría y no por marca:
// decir qué hace o no hace un producto ajeno con nombre propio obliga a
// tenerlo verificado y al día. Lo de las columnas ajenas es lo típico de cada
// categoría, no una afirmación sobre un producto concreto.
const alternativas = ["Cuaderno y agenda", "Excel + WhatsApp", "CRM internacional", "App de citas"];

// true = lo hace, false = no lo hace, texto = a medias y cómo.
type Valor = boolean | string;

const filas: { que: string; otros: [Valor, Valor, Valor, Valor] }[] = [
  {
    que: "La ficha completa de cada cliente: pagos, citas, documentos y chats",
    otros: [false, "A medias", true, "Solo citas"],
  },
  {
    que: "Recordatorios de cita, pago y renovación sin acordarte",
    otros: [false, false, "Configurándolo tú", "Solo citas"],
  },
  {
    que: "Todo el equipo atiende el mismo WhatsApp desde su computador",
    otros: [false, false, "Con integración aparte", false],
  },
  {
    que: "Alguien que conteste a las 10 de la noche",
    otros: [false, false, "Pago aparte", false],
  },
  {
    que: "Saber hoy cuánto te deben y quién",
    otros: ["A mano", "A mano", "A medias", false],
  },
  {
    que: "Tu logo y tus colores en todo",
    otros: [false, false, "Planes altos", false],
  },
  {
    que: "Recibos con tu marca y consecutivo",
    otros: ["A mano", "A mano", "A medias", "A medias"],
  },
];

function Celda({ v }: { v: Valor }) {
  if (v === true) return <Check size={18} strokeWidth={2.5} className="text-foreground/70" />;
  if (v === false) return <Minus size={18} className="text-muted/60" />;
  return <span className="text-xs leading-tight text-muted">{v}</span>;
}

const columnas = "grid grid-cols-[minmax(200px,1.6fr)_repeat(4,minmax(96px,1fr))_minmax(110px,1fr)]";

export default function Comparativa() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <Reveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Un solo lugar en vez de cinco
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Así se compara con las otras formas de llevar un negocio.
          </p>
        </Reveal>

        <Reveal variant="panel" delay={0.1}>
          {/* En el celular la tabla se desliza de lado dentro de su caja; la
              página no. */}
          <div className="mt-14 overflow-x-auto rounded-3xl ring-1 ring-border">
            <div className="min-w-[760px]">
              <div className={`${columnas} items-end bg-surface text-sm`}>
                <div className="sticky left-0 bg-surface p-5" />
                {alternativas.map((a) => (
                  <div key={a} className="px-3 py-5 text-center text-xs font-medium text-muted sm:text-sm">
                    {a}
                  </div>
                ))}
                <div className="flex flex-col items-center gap-1.5 rounded-t-2xl bg-accent-strong p-4 text-center text-sm font-semibold text-white">
                  <Image src="/logo-mark.png" alt="" width={26} height={26} className="brightness-0 invert" />
                  ZytonAI
                </div>
              </div>

              {filas.map((f, i) => (
                <div
                  key={f.que}
                  className={`${columnas} items-center border-t border-border/60 text-sm ${i % 2 ? "bg-surface/50" : "bg-background"}`}
                >
                  <div className={`sticky left-0 px-5 py-4 leading-snug ${i % 2 ? "bg-[#fafbfd]" : "bg-background"}`}>
                    {f.que}
                  </div>
                  {f.otros.map((v, j) => (
                    <div key={j} className="flex justify-center px-3 py-4 text-center">
                      <Celda v={v} />
                    </div>
                  ))}
                  <div className="flex h-full items-center justify-center bg-accent-strong/[0.06] py-4">
                    <span className="flex size-7 items-center justify-center rounded-full bg-accent-strong text-white">
                      <Check size={15} strokeWidth={3} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-muted">
            La bandeja de WhatsApp y el asistente con IA son del plan Pro. En las
            otras columnas, lo habitual de cada tipo de herramienta.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
