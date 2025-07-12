import { Button } from '@/_ui/button';
import { useTranslations } from 'next-intl';

export function LoginWithGoogle() {
   const t = useTranslations();

   return (
      <>
         <div className='flex items-center justify-center gap-2 text-gray-800'>
            <div className='w-full border-t border-gray-200' />
            <span className='bg-white text-gray-400 text-nowrap text-sm'>{t('orContinueWith')}</span>
            <div className='w-full border-t border-gray-200' />
         </div>
         <Button
            className='cursor-pointer mt-2'
            type='button'
            variant='secondary'
            animated
         >
            Google
         </Button>
      </>
   );
}
