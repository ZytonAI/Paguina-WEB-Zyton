import { Database, MessagesSquare, Bell, SlidersHorizontal } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Database,
    title: "Toda tu información en un solo lugar",
    description:
      "Clientes, historial, documentos y conversaciones dejan de estar repartidos entre cuadernos, hojas de cálculo y chats.",
  },
  {
    icon: MessagesSquare,
    title: "Tus canales unificados",
    description:
      "WhatsApp, correo, formularios y redes llegan a una sola bandeja. Tu equipo deja de saltar entre aplicaciones.",
  },
  {
    icon: Bell,
    title: "Recordatorios que no se te pasan",
    description:
      "Pólizas por vencer, citas próximas y clientes sin contactar generan un aviso automático antes de que el problema exista.",
  },
  {
    icon: SlidersHorizontal,
    title: "Se adapta a tu operación",
    description:
      "Ves solo lo que tu negocio usa, no un menú de veinte módulos que nadie abre.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            ¿Qué hacemos?
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Un CRM que ordena tu negocio en lugar de complicarlo.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:gap-x-20 lg:gap-y-16">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className="flex items-center justify-center rounded-xl bg-accent/10 text-accent-strong size-11">
                <service.icon size={21} strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
