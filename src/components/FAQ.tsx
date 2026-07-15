import Reveal from "./Reveal";

const faqs = [
  {
    question: "¿Qué es ZytonAI?",
    answer:
      "Somos una agencia de automatización con inteligencia artificial. Diseñamos sistemas que dan seguimiento automático a cada lead o cliente potencial, para que ninguna oportunidad se pierda por falta de respuesta.",
  },
  {
    question: "¿Necesito cambiar mi CRM o mis herramientas actuales?",
    answer:
      "No. La automatización se integra con lo que ya usas (CRM, WhatsApp, correo, etc.). No migramos tus procesos ni te pedimos que cambies tu forma de trabajar.",
  },
  {
    question: "¿La IA responde igual que una persona de mi equipo?",
    answer:
      "La IA se entrena con la información de tu negocio para responder preguntas frecuentes y calificar leads las 24 horas. Los casos que requieren criterio humano se derivan a tu equipo.",
  },
  {
    question: "¿Cuánto tiempo toma implementarlo?",
    answer:
      "Depende de la complejidad de tus procesos actuales, pero el objetivo siempre es implementar sin interrumpir tu operación diaria.",
  },
  {
    question: "¿Solo funciona con WhatsApp?",
    answer:
      "No. Se puede conectar a WhatsApp, correo, formularios web y otros canales donde te lleguen leads, según lo que necesite tu negocio.",
  },
  {
    question: "¿Cómo sé qué resultados está dando la automatización?",
    answer:
      "Recibes reportes claros de qué leads están siendo atendidos, cuáles pasaron a un humano y qué resultados está dando el seguimiento automático.",
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

export default function FAQ() {
  return (
    <section id="faq" className="relative scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-border">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.05}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium marker:content-none">
                  {faq.question}
                  <span className="shrink-0 text-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
