// Directorio propio: mapea el username de cada usuario final al CRM de su empresa.
// Los usernames deben ser únicos entre TODOS los clientes (cada CRM asigna los suyos
// de forma independiente, así que la unicidad global es lo que evita ambigüedad acá).
//
// El bridgeSecret nunca se guarda en este archivo ni en el repo: cada entrada solo
// apunta al nombre de la env var que lo contiene, y el valor se lee en runtime desde
// las variables de entorno del backend (.env.local en desarrollo, config de Vercel en
// producción).
type CrmDirectoryEntry = {
  username: string;
  crmBaseUrl: string;
  bridgeSecretEnvVar: string;
};

const CRM_DIRECTORY: CrmDirectoryEntry[] = [
  // GVG Seguros
  {
    username: "CamilaGVG",
    crmBaseUrl: "https://gvg-crm.zytonai.com",
    bridgeSecretEnvVar: "CRM_BRIDGE_SECRET_GVG",
  },
  {
    username: "ClaudiaGVG",
    crmBaseUrl: "https://gvg-crm.zytonai.com",
    bridgeSecretEnvVar: "CRM_BRIDGE_SECRET_GVG",
  },
  {
    username: "DayanaGVG",
    crmBaseUrl: "https://gvg-crm.zytonai.com",
    bridgeSecretEnvVar: "CRM_BRIDGE_SECRET_GVG",
  },
  {
    username: "samuel",
    crmBaseUrl: "https://gvg-crm.zytonai.com",
    bridgeSecretEnvVar: "CRM_BRIDGE_SECRET_GVG",
  },
];

export type CrmClientConfig = {
  crmBaseUrl: string;
  bridgeSecret: string;
};

export function lookupCrmClient(username: string): CrmClientConfig | null {
  const entry = CRM_DIRECTORY.find((c) => c.username === username);
  if (!entry) return null;

  const bridgeSecret = process.env[entry.bridgeSecretEnvVar];
  if (!bridgeSecret) return null;

  return { crmBaseUrl: entry.crmBaseUrl, bridgeSecret };
}
