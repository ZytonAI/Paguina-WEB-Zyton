export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  icon: string;
  content: ContentBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "cada-minuto-sin-responder-un-lead-te-cuesta-una-venta",
    title: "Cada minuto sin responder un lead te cuesta una venta",
    description:
      "Por qué la velocidad de respuesta es el factor que más influye en si un lead se convierte en cliente, y cómo la automatización con IA resuelve ese cuello de botella.",
    date: "2026-06-02",
    icon: "clock",
    content: [
      {
        type: "p",
        text: "Cuando alguien escribe a tu negocio preguntando por un producto o servicio, está comparando opciones en ese mismo momento. Si tu competencia responde primero, esa venta ya se fue, sin importar qué tan bueno sea lo que ofreces.",
      },
      {
        type: "h2",
        text: "La primera respuesta gana la venta",
      },
      {
        type: "p",
        text: "En ventas B2B y B2C, quien responde primero suele quedarse con la conversación. No porque el cliente sea impaciente sin razón, sino porque en el momento en que pregunta ya está listo para decidir. Cada minuto que pasa sin respuesta es una ventana para que se enfríe el interés o para que otra opción se la gane.",
      },
      {
        type: "list",
        items: [
          "El lead pierde el impulso de compra si nadie le responde a tiempo.",
          "La competencia que sí responde rápido se queda con la conversación.",
          "Un mensaje tarde puede sentirse como falta de interés en atenderlo.",
        ],
      },
      {
        type: "h2",
        text: "Por qué tu equipo no puede cubrir esto solo",
      },
      {
        type: "p",
        text: "Este problema no es de falta de interés del equipo comercial, es de capacidad. Nadie puede estar disponible las 24 horas para responder cada mensaje que llega por WhatsApp, correo o un formulario web, sobre todo fuera de horario laboral o en temporadas de alta demanda. Contratar más personas para cubrir ese horario no siempre es rentable ni la solución más rápida.",
      },
      {
        type: "quote",
        text: "El problema casi nunca es la calidad de tu equipo comercial. Es que ningún humano puede estar disponible las 24 horas para responder al instante.",
      },
      {
        type: "h2",
        text: "Cómo la automatización cierra la brecha",
      },
      {
        type: "p",
        text: "La automatización con inteligencia artificial resuelve esto sin reemplazar a tu equipo: responde al instante, registra al interesado como lead y solo escala a una persona cuando la conversación realmente lo requiere. El resultado es que cada contacto recibe atención inmediata, sin que eso implique contratar más gente ni cambiar de herramientas.",
      },
      {
        type: "p",
        text: "En ZytonAI diseñamos este tipo de seguimiento automático para que se integre a las herramientas que ya usas, sin cambiar tus procesos ni tu CRM. La idea no es automatizar por automatizar, sino asegurarte de que ningún lead se enfríe por falta de respuesta a tiempo.",
      },
    ],
  },
  {
    slug: "automatizar-seguimiento-de-leads-sin-cambiar-tu-crm",
    title: "Cómo automatizar el seguimiento de leads sin cambiar tu forma de trabajar",
    description:
      "La automatización con IA no exige empezar de cero. Así es como se conecta a lo que ya usas para dar seguimiento automático a cada cliente potencial.",
    date: "2026-06-20",
    icon: "plug",
    content: [
      {
        type: "p",
        text: "Uno de los frenos más comunes para adoptar IA en un negocio es pensar que hay que empezar de cero: volver a teclear todos los clientes, cambiar de número, reentrenar al equipo. Ese cambio de raíz casi nunca es necesario.",
      },
      {
        type: "h2",
        text: "La automatización se conecta a lo que ya tienes",
      },
      {
        type: "p",
        text: "En ZytonAI el seguimiento se monta sobre lo que ya tienes: tu número de WhatsApp Business, tu Instagram, los formularios de tu web y tus anuncios de Meta. Los clientes que llevas en Excel se suben tal como están, y la IA trabaja sobre ese flujo en lugar de reemplazarlo.",
      },
      {
        type: "list",
        items: [
          "Tus clientes de Excel entran en minutos, sin teclearlos de nuevo.",
          "Funciona sobre tu WhatsApp, tu Instagram y los formularios de tu web.",
          "Tu número y tus cuentas siguen siendo los mismos.",
        ],
      },
      {
        type: "h2",
        text: "Lo que cambia es el resultado, no el proceso",
      },
      {
        type: "p",
        text: "Tu equipo sigue trabajando como siempre, pero ahora cada mensaje nuevo recibe una respuesta inmediata: el asistente contesta precios, ofrece horarios libres, agenda la cita y registra al interesado como lead. Nada se pierde por falta de tiempo o de cobertura horaria, y las conversaciones que sí necesitan criterio humano llegan marcadas a la bandeja de tu equipo.",
      },
      {
        type: "quote",
        text: "No se trata de cambiar cómo trabajas, sino de que nada se te escape mientras trabajas como siempre.",
      },
      {
        type: "h2",
        text: "Visibilidad real de lo que está pasando",
      },
      {
        type: "p",
        text: "Además, tener visibilidad de qué está pasando con cada lead es clave: cada lead queda con su origen (formulario, anuncio o conversación), en la bandeja ves qué atendió el asistente y qué pasó a una persona, y el tablero te muestra cómo avanza tu embudo, para que ajustes el proceso con datos reales en vez de suposiciones.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
