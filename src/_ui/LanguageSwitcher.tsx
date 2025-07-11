'use client';

import { useLocale } from 'next-intl';
import { usePathname, Link } from '@/i18n/navigation';

export function LanguageSwitcher() {
   const locale = useLocale();
   const pathname = usePathname();
   const otherLocale = locale === 'pt-BR' ? 'en-US' : 'pt-BR';

   return (
      <Link
         href={pathname}
         locale={otherLocale}
         className='px-4 py-2 rounded bg-blue-600 text-white'
      >
         {otherLocale === 'pt-BR' ? 'Português' : 'English'}
      </Link>
   );
}
