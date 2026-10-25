import { ShieldCheck, HeartPulse } from "lucide-react";
import Reveal from "./Reveal";

const sectors = [
  {
    icon: ShieldCheck,
    audience: "Agencias de seguros",
    problem: "Pólizas que se vencen sin que nadie avise",
    description:
      "Una renovación que se pasa es un cliente que se va sin decir nada. El CRM vigila la fecha de cada póliza y le escribe al cliente con los días de antelación que tú elijas.",
    points: [
      "Avisos de renovación y de pagos por vencer",
      "Historial completo de cada asegurado",
      "Pólizas y documentos guardados en su ficha",
    ],
  },
  {
    icon: HeartPulse,
    audience: "Belleza y salud",
    problem: "Clientes que no vuelven por falta de seguimiento",
    description:
      "En spas y clínicas dentales el cliente no se pierde por precio, se pierde por silencio. El CRM detecta quién lleva tiempo sin volver y le escribe por ti.",
    points: [
      "Recordatorios de cita por correo o WhatsApp",
      "Mensaje a los clientes que no han vuelto",
      "Ficha e historial de cada paciente",
    ],
  },
];

// Las plantillas de sector del SaaS (`services/sectores.py`). Si se agrega
// una allá, se agrega aquí.
const otrosSectores = [
  "Barberías y peluquerías",
  "Consultorios y terapias",
  "Veterinarias",
  "Talleres y servicio técnico",
  "Lavaderos de autos",
  "Gimnasios y academias",
  "Tiendas y comercios",
  "Restaurantes y cafeterías",
  "Consultoría y servicios profesionales",
  "Inmobiliarias",
  "Colegios e institutos",
];

export default function Sectors() {
  return (
    <section id="sectores" className="scroll-mt-24 pb-24 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        {/* Panel embebido con margen a los lados: agrupa sin cortar la página
            de lado a lado como haría una banda a sangre. */}
        <Reveal variant="panel">
          <div className="rounded-[2rem] bg-surface px-7 py-16 sm:px-12 sm:py-20 lg:px-16">
            {/* Los retrasos escalonan el contenido detrás de la entrada del
                panel, que ya está animándose al mismo tiempo. */}
            <Reveal delay={0.18}>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Hecho para tu sector
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                No es un CRM genérico: al empezar eliges tu sector y arranca
                configurado para él. Estos son los dos problemas que más dinero
                cuestan a los negocios con los que más trabajamos.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
              {sectors.map((sector, i) => (
                <Reveal
                  key={sector.audience}
                  delay={0.3 + i * 0.12}
                  className="h-full"
                >
                  <div className="flex h-full flex-col rounded-2xl bg-background p-8 shadow-[0_2px_14px_-6px_rgba(10,15,26,0.10)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgba(10,15,26,0.22)] motion-reduce:transform-none sm:p-10">
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent-strong">
                        <sector.icon size={21} strokeWidth={1.75} />
                      </div>
                      <span className="text-sm font-medium uppercase tracking-wider text-accent-strong">
                        {sector.audience}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-medium leading-snug tracking-tight">
                      {sector.problem}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {sector.description}
                    </p>

                    <ul className="mt-8 flex flex-col gap-3 text-sm text-muted">
                      {sector.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span
                            aria-hidden
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-strong"
                          />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <p className="mt-14 text-sm font-medium text-foreground">
                También hay plantilla lista para:
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {otrosSectores.map((nombre) => (
                  <li
                    key={nombre}
                    className="rounded-full bg-background px-4 py-2 text-sm text-muted ring-1 ring-border"
                  >
                    {nombre}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
