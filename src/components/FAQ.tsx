import Reveal from "./Reveal";

const faqs = [
  {
    question: "¿Qué es ZytonAI?",
    answer:
      "Es un CRM que unifica la información de tu negocio en un solo lugar: clientes, pagos, citas, documentos y conversaciones. Arranca con la plantilla de tu sector, se ajusta a cómo ya trabajas y, en el plan A medida, desarrollamos lo que tu proceso necesite dentro del mismo sistema.",
  },
  {
    question: "¿En qué se diferencia de otros CRM?",
    answer:
      "La mayoría te obliga a acomodar tu negocio a su estructura y termina llena de módulos que nadie abre. Aquí eliges qué módulos ves, la ficha del cliente lleva las casillas que tú defines, el CRM va con tu marca y, en el plan Pro, un asistente con IA atiende tu WhatsApp e Instagram.",
  },
  {
    question: "¿Necesito cambiar mis herramientas actuales?",
    answer:
      "No. Conectas tu número de WhatsApp Business, tu Instagram, tu Google Calendar, tus anuncios de Meta y los formularios de tu web, y si tienes los clientes en Excel los subes tal cual. No te pedimos cambiar tu forma de trabajar.",
  },
  {
    question: "¿Para qué tipo de negocio está pensado?",
    answer:
      "Para negocios colombianos que atienden clientes y les dan seguimiento. Hay plantilla lista para corredurías de seguros, spas y centros de estética, clínicas odontológicas, consultorios, barberías, veterinarias, talleres, lavaderos, gimnasios, tiendas, restaurantes, consultorías, inmobiliarias y colegios. Si el tuyo no está, empiezas con la plantilla general y la ajustas.",
  },
  {
    question: "¿La IA responde igual que una persona de mi equipo?",
    answer:
      "No, y no lo pretende. El asistente responde las 24 horas con la información que le das: tu catálogo y precios, tus horarios y tu agenda. Puede agendar citas, registrar a un interesado como lead y decirle a un cliente cuántos sellos lleva o si tiene un pago pendiente. Cuando la pregunta se sale de eso, marca la conversación para que la tome una persona de tu equipo.",
  },
  {
    // Mismas cifras que `plans.py` del SaaS (RESPUESTAS_IA_POR_PLAN y
    // PAQUETES_RESPUESTAS_IA): si cambian allá, cambian aquí.
    question: "¿Cuántas respuestas puede dar el asistente con IA?",
    // Trae precios: en la portada no sale, los precios viven en /precios.
    conPrecios: true,
    answer:
      "El plan Pro incluye 6.000 respuestas al mes, que alcanzan para el día a día de la mayoría de negocios. El CRM te avisa cuando vas por el 80 %, y si te hacen falta compras un paquete de 1.000 ($20.000) o de 3.000 ($50.000) respuestas extra, válido para ese mes. Si llegas al tope sin comprar más, el asistente deja de contestar y los mensajes le llegan a tu equipo como siempre.",
  },
  {
    // Se dice en la venta, y no cuando el cliente lo descubre: ZytonAI no es
    // un proveedor tecnológico de la DIAN y el recibo del CRM no tiene
    // validez fiscal. Prometerlo a medias sería peor que no ofrecerlo.
    question: "¿ZytonAI emite facturas electrónicas ante la DIAN?",
    answer:
      "No. El CRM genera un comprobante de venta con tu marca y consecutivo propio, que sirve como constancia para el cliente y como control interno, pero no tiene validez fiscal. La factura electrónica la sigues emitiendo con tu facturador o tu contador, y para que eso no sea trabajo doble el CRM te exporta las ventas del mes en un archivo listo para cargar.",
  },
  {
    question: "¿Cuánto tiempo toma implementarlo?",
    answer:
      "Al pagar respondes un cuestionario corto sobre tu negocio y el CRM queda configurado con la plantilla de tu sector ese mismo día. Lo que más tarda es conectar WhatsApp, que depende de la aprobación de Meta. Te acompañamos en la puesta en marcha para que no interrumpa tu operación.",
  },
  {
    question: "¿Cómo sé qué resultados está dando?",
    answer:
      "El tablero te muestra ventas, recaudo, cartera, clientes nuevos y el avance de tu embudo, y lo armas con las gráficas que te importan. Cada mensaje automático queda registrado con su estado, y en la bandeja ves qué conversaciones atendió el asistente y cuáles pasó a tu equipo.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ({
  /**
   * Emite el schema FAQPage. Solo debe activarse en una URL del sitio
   * (/faq) para no duplicar el mismo marcado en dos páginas.
   */
  withJsonLd = false,
  /** Oculta las preguntas que dan precios (en la portada). */
  sinPrecios = false,
}: {
  withJsonLd?: boolean;
  sinPrecios?: boolean;
}) {
  const visibles = sinPrecios ? faqs.filter((faq) => !faq.conPrecios) : faqs;
  return (
    <>
      <div className="divide-y divide-border border-t border-border">
        {visibles.map((faq, i) => (
          <Reveal key={faq.question} delay={i * 0.05}>
            <details className="group py-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium marker:content-none">
                {faq.question}
                <span className="shrink-0 text-2xl leading-none text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">{faq.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
      {withJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </>
  );
}
