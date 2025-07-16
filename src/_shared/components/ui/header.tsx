'use client';

import { usePathname } from 'next/navigation';
import { SidebarTrigger } from './sidebar';
import { useTranslations } from 'next-intl';
import { Separator } from './separator';
import { ButtonFullScreen } from './button-full-screen';

export function Header() {
   const pathname = usePathname();
   const t = useTranslations();

   const removeTheBar = pathname.split('/');
   const lastSegment = removeTheBar[removeTheBar.length - 1];
   const firstCapitalLetter = lastSegment?.charAt(0).toUpperCase() + lastSegment?.slice(1);

   const translateTitle = t(firstCapitalLetter) || t('Home');

   return (
      <header className='flex items-center gap-4 border-b p-5 select-none sticky top-0 bg-white z-10 print:hidden'>
         <SidebarTrigger className='cursor-pointer' />
         <Separator orientation='vertical' />
         <h1 className='text-2xl font-semibold mb-1'>{translateTitle}</h1>
         <ButtonFullScreen className='cursor-pointer w-8 h-8 ml-auto' />
      </header>
   );
}
