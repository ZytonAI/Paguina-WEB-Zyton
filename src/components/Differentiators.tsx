import { Puzzle, Bot, Wrench, ScanText, HeartPulse } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

const pillars = [
  {
    icon: Puzzle,
    title: "Personalización real",
    description:
      "La mayoría de CRM te obliga a acomodar tu negocio a su estructura. Nosotros lo armamos alrededor de tu operación, con las secciones que de verdad vas a usar y ninguna más.",
  },
  {
    icon: Bot,
    title: "IA conversacional y canales unificados",
    description:
      "WhatsApp e Instagram llegan a una sola bandeja, y un asistente con IA que conoce tu catálogo responde precios, mira tu agenda, agenda citas y registra a los interesados como leads. Cuando hace falta criterio humano, pasa la conversación a tu equipo.",
  },
];

const examples = [
  {
    icon: ScanText,
    sector: "Agencias de seguros",
    problem: "¿Tu cartera vive en un Excel?",
    solution:
      "Subes tu lista de asegurados tal como está y el CRM reconoce las columnas; la planilla de cobros también se carga desde Excel. Cada póliza que registras con su fecha queda vigilada para el aviso de renovación.",
  },
  {
    icon: HeartPulse,
    sector: "Belleza y salud",
    problem: "¿Las fichas de tus pacientes siguen en papel?",
    solution:
      "Armamos la ficha con las casillas que tú usas y cada documento escaneado queda en el historial de la persona, junto a sus citas y sus pagos. Tu equipo deja de buscar en carpetas antes de atender.",
  },
];

export default function Differentiators() {
  return (
    <section id="diferencia" className="scroll-mt-24 pb-24 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Qué nos hace diferentes
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Tres cosas que no encuentras en un CRM genérico.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-14 lg:mt-20 lg:grid-cols-2 lg:gap-x-20">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent-strong">
                <pillar.icon size={21} strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Tercer diferenciador: el más importante. Se destaca con un panel
            tintado en vez de un borde grueso, para no cargar más la página. */}
        <Reveal delay={0.16} variant="panel">
          <div className="mt-20 rounded-[2rem] bg-accent/[0.05] px-7 py-14 ring-1 ring-accent/15 sm:px-12 sm:py-16 lg:px-16">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-xl bg-accent-strong text-white">
                <Wrench size={22} strokeWidth={1.75} />
              </div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-strong">
                Lo más importante
              </span>
            </div>

            <h3 className="mt-7 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Desarrollo personalizado de soluciones
            </h3>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              No te entregamos un software y te deseamos suerte. Si hay una tarea
              que te consume horas cada semana, en el plan A medida la
              construimos para ti dentro del CRM.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
              {examples.map((example) => (
                <div
                  key={example.sector}
                  className="rounded-2xl bg-background p-8 shadow-[0_2px_14px_-6px_rgba(10,15,26,0.10)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(10,15,26,0.22)] motion-reduce:transform-none sm:p-9"
                >
                  <div className="flex items-center gap-2.5 text-accent-strong">
                    <example.icon size={18} strokeWidth={1.75} aria-hidden />
                    <span className="text-xs font-medium uppercase tracking-wider">
                      {example.sector}
                    </span>
                  </div>
                  <p className="mt-5 text-lg font-medium leading-snug">
                    {example.problem}
                  </p>
                  <p className="mt-3 leading-relaxed text-muted">
                    {example.solution}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-12 max-w-2xl leading-relaxed text-muted">
              ¿Tu cuello de botella es otro?{" "}
              <Link
                href="/contacto"
                className="font-medium text-accent-strong underline underline-offset-4 hover:text-[#0f4fb8]"
              >
                Cuéntanos cuál es
              </Link>{" "}
              y diseñamos la solución a tu medida.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
