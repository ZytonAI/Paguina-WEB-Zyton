import Reveal from "./Reveal";

const faqs = [
  {
    question: "¿Qué es ZytonAI?",
    answer:
      "Es un CRM que unifica la información de tu negocio en un solo lugar: clientes, historial, documentos y conversaciones. Se configura alrededor de cómo ya trabajas, y cuando hace falta desarrollamos soluciones a la medida dentro del mismo sistema.",
  },
  {
    question: "¿En qué se diferencia de otros CRM?",
    answer:
      "La mayoría te obliga a acomodar tu negocio a su estructura y termina llena de módulos que nadie abre. Nosotros armamos el CRM alrededor de tu operación, sumamos IA conversacional sobre tus canales y desarrollamos a la medida lo que tu negocio necesite.",
  },
  {
    question: "¿Necesito cambiar mis herramientas actuales?",
    answer:
      "No. El CRM se conecta con lo que ya usas (WhatsApp, correo, formularios y otras herramientas). No te pedimos migrar tus procesos ni cambiar tu forma de trabajar.",
  },
  {
    question: "¿Para qué tipo de negocio está pensado?",
    answer:
      "Trabajamos principalmente con agencias de seguros y con negocios de belleza y salud, como spas y clínicas dentales. Son los sectores donde más pesa perder clientes por una póliza vencida o por falta de seguimiento.",
  },
  {
    question: "¿La IA responde igual que una persona de mi equipo?",
    answer:
      "La IA se entrena con la información de tu negocio para responder preguntas frecuentes y clasificar conversaciones las 24 horas. Los casos que requieren criterio humano se derivan a tu equipo.",
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
      "Depende de la complejidad de tus procesos actuales y de cuánto haya que desarrollar a la medida, pero el objetivo siempre es implementar sin interrumpir tu operación diaria.",
  },
  {
    question: "¿Cómo sé qué resultados está dando?",
    answer:
      "Recibes reportes claros de qué clientes están siendo atendidos, cuáles pasaron a un humano y qué renovaciones o citas se recuperaron gracias a los recordatorios automáticos.",
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
}: {
  withJsonLd?: boolean;
}) {
  return (
    <>
      <div className="divide-y divide-border border-t border-border">
        {faqs.map((faq, i) => (
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
