/** URL pública del sitio (sin barra final). Sobrescribe con VITE_SITE_URL en .env si cambia el dominio. */
export function getSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL ?? "https://construccionesyserviciosortiz.com";
  return raw.replace(/\/$/, "");
}
