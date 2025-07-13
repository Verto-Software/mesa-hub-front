'use client';

import { usePathname } from 'next/navigation';
import { SidebarTrigger } from './sidebar';
import { useTranslations } from 'next-intl';

export function Header() {
   const pathname = usePathname();
   const t = useTranslations();

   const removeTheBar = pathname.split('/');
   const lastSegment = removeTheBar[removeTheBar.length - 1];
   const firstCapitalLetter = lastSegment?.charAt(0).toUpperCase() + lastSegment?.slice(1);

   const translateTitle = t(firstCapitalLetter) || t('Home');

   return (
      <header className='shrink-0 border-b flex items-center gap-3 p-4 select-none'>
         <SidebarTrigger className='cursor-pointer' />
         <h1 className='text-lg font-semibold'>{translateTitle}</h1>
      </header>
   );
}
