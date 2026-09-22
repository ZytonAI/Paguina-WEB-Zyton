// Configuración del puente hacia el CRM (el SaaS de ZytonAI).
//
// La web no sabe de empresas: manda usuario y contraseña a la API del CRM,
// servidor a servidor, y la API decide a qué empresa pertenece esa persona y
// devuelve la URL de su CRM (`https://<empresa>.zytonai.com/acceso#…`).
//
// El secreto nunca va en el repo: se lee en runtime de las variables de
// entorno (.env.local en desarrollo, config de Vercel en producción) y tiene
// que ser el mismo que PUENTE_WEB_SECRET en la API.
export type CrmConfig = {
  apiBaseUrl: string;
  bridgeSecret: string;
  appBaseDomain: string;
};

export function crmConfig(): CrmConfig | null {
  const bridgeSecret = process.env.CRM_BRIDGE_SECRET;
  if (!bridgeSecret) return null;
  return {
    apiBaseUrl: (process.env.CRM_API_URL ?? "https://api.zytonai.com").replace(/\/+$/, ""),
    bridgeSecret,
    appBaseDomain: (process.env.CRM_APP_BASE_DOMAIN ?? "zytonai.com").toLowerCase(),
  };
}

// Solo aceptamos mandar al usuario a un subdominio del CRM: si la API
// respondiera con otro sitio (o alguien la suplantara), no se redirige.
// En desarrollo (CRM_APP_BASE_DOMAIN=localhost) el CRM corre por http.
export function esUrlDelCrm(url: string, config: CrmConfig): boolean {
  try {
    const u = new URL(url);
    // Con puerto: en desarrollo la API y el CRM son los dos `localhost`.
    const apiHost = new URL(config.apiBaseUrl).host;
    const esLocal = config.appBaseDomain === "localhost";
    const protocoloOk = u.protocol === "https:" || (esLocal && u.protocol === "http:");
    return (
      protocoloOk &&
      u.host !== apiHost &&
      (u.hostname === config.appBaseDomain || u.hostname.endsWith(`.${config.appBaseDomain}`))
    );
  } catch {
    return false;
  }
}
