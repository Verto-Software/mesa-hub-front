import { useTranslations } from 'next-intl';

export function Home() {
   const t = useTranslations();

   return (
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 p-4'>
         <h1 className='text-2xl'>{t('Title')}</h1>
      </div>
   );
}
