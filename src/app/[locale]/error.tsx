'use client';

import { Button } from '@/_shared/components/ui/button';
import { Routes } from '@/_shared/routes/routes';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Error() {
   const t = useTranslations();
   return (
      <section className='h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-300 via-white to-purple-300 p-4'>
         <Image
            src='/error.svg'
            alt='Página não encontrada'
            width={300}
            height={300}
         />
         <div className='flex flex-col items-center justify-center gap-6 mt-10'>
            <div className='text-gray-800 font-bold text-xl text-center space-y-1'>
               <p>{t('ParagraphScreenError1')}</p>
               <p>{t('ParagraphScreenError2')}</p>
            </div>
            <div className='flex items-center gap-4'>
               <Button
                  animated
                  asChild
               >
                  <Link href={Routes.Home}>{t('ScreenHome')}</Link>
               </Button>
               <Button
                  animated
                  asChild
               >
                  <Link
                     href='https://wa.me/5522997823207?text='
                     target='_blank'
                  >
                     {t('Support')}
                  </Link>
               </Button>
            </div>
         </div>
      </section>
   );
}
