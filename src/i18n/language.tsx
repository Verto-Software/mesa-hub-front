'use client';

import { useLocale } from 'next-intl';
import { usePathname, Link } from '@/i18n/navigation';
import Image from 'next/image';

export function Language() {
   const locale = useLocale();
   const pathname = usePathname();
   const otherLocale = locale === 'pt-BR' ? 'en-US' : 'pt-BR';

   return (
      <Link
         href={pathname}
         locale={otherLocale}
         aria-label={`Switch to ${otherLocale}`}
         className='w-full flex justify-end p-4 fixed top-0 left-0 z-50'
      >
         <Image
            src={otherLocale === 'pt-BR' ? '/flag/br-flag.svg' : '/flag/us-flag.svg'}
            alt={otherLocale}
            width={24}
            height={24}
         />
      </Link>
   );
}
