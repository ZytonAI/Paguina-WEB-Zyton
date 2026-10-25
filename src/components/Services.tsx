import { Database, MessagesSquare, Bell, SlidersHorizontal } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Database,
    title: "Toda tu información en un solo lugar",
    description:
      "Clientes, pagos, citas, documentos y conversaciones dejan de estar repartidos entre cuadernos, hojas de cálculo y chats. Si ya los tienes en Excel, los subes y quedan en el CRM.",
  },
  {
    icon: MessagesSquare,
    title: "Tus canales unificados",
    description:
      "Los mensajes de WhatsApp e Instagram llegan a una sola bandeja, al lado de la ficha del cliente. Los contactos de tus formularios y de tus anuncios de Meta entran solos como leads.",
  },
  {
    icon: Bell,
    title: "Recordatorios que no se te pasan",
    description:
      "Pagos por vencer, renovaciones, citas próximas, cumpleaños y clientes que no han vuelto disparan un mensaje automático por correo o WhatsApp.",
  },
  {
    icon: SlidersHorizontal,
    title: "Se adapta a tu operación",
    description:
      "Eliges tu sector y el CRM arranca con la ficha, el embudo, el catálogo y los mensajes de ese tipo de negocio. Ves solo los módulos que usas y los demás los apagas.",
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
