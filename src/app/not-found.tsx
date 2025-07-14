import { Button } from '@/_shared/components/ui/button';
import { Routes } from '@/_shared/routes/routes';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFoundPage() {
   const t = useTranslations();

   return (
      <section className='h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-300 via-white to-purple-300 p-4'>
         <Image
            src='/not-found.svg'
            alt='Página não encontrada'
            width={300}
            height={300}
         />
         <div className='flex flex-col items-center justify-center gap-6 mt-10'>
            <p className='text-gray-800 font-bold text-lg text-center'>{t('Looking')}</p>
            <Button
               animated
               asChild
            >
               <Link href={Routes.Home}>{t('ScreenHome')}</Link>
            </Button>
         </div>
      </section>
   );
}
