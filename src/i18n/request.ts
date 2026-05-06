import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Esperamos el locale (Fix para Next.js 15)
  let locale = await requestLocale;

  // Validación de seguridad
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // Intentamos la ruta relativa directa. 
    // Si tus mensajes están en src/messages, esta es la ruta correcta desde src/i18n
    messages: (await import(`../messages/${locale}.json`)).default
  };
});