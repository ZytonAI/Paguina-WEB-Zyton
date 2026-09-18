// Datos de la empresa que aparecen en las páginas legales. Tomados del
// certificado de existencia y representación legal de la Cámara de Comercio de
// Bogotá (matrícula 04155889). Al cambiarlos aquí se actualizan las tres
// páginas a la vez.
export const legalEntity = {
  razonSocial: "Zyton S.A.S.",
  nit: "902107450-4",
  direccion: "Carrera 6 #4-55",
  ciudad: "Cajicá (Cundinamarca)",
  email: "soporte@zytonai.com",
};

// Fecha de la última revisión de los textos legales (ISO, para <time>).
export const legalUpdatedAt = "2026-09-18";

export const legalDocuments = [
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/terminos", label: "Términos y condiciones" },
  { href: "/eliminacion-de-datos", label: "Eliminación de datos" },
] as const;
