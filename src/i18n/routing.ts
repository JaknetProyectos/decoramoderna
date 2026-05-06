import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['es', 'en'], // Idiomas soportados
  defaultLocale: 'es'    // Idioma por defecto
});
 
// Estos son los componentes que usarás en lugar de los de Next.js
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);