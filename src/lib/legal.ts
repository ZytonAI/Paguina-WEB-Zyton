// Datos de la empresa que aparecen en las páginas legales. Los valores entre
// corchetes están pendientes de rellenar; al hacerlo aquí se actualizan las
// tres páginas a la vez.
export const legalEntity = {
  razonSocial: "[RAZÓN SOCIAL]",
  nit: "[NIT]",
  direccion: "[DIRECCIÓN]",
  ciudad: "[CIUDAD]",
  email: "soporte@zytonai.com",
};

// Fecha de la última revisión de los textos legales (ISO, para <time>).
export const legalUpdatedAt = "2026-09-16";

export const legalDocuments = [
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/terminos", label: "Términos y condiciones" },
  { href: "/eliminacion-de-datos", label: "Eliminación de datos" },
] as const;
