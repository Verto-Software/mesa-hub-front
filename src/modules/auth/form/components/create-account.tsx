import { Button } from '@/_shared/components/ui/button';
import { useTranslations } from 'next-intl';
import { TCreateAccount } from '../../interface';

export function CreateAccount({ handleCreateAccount, isRegister }: TCreateAccount) {
   const t = useTranslations();

   return (
      <div className='flex items-center justify-center gap-2 text-gray-800'>
         <p className='text-sm'>{isRegister ? t('HaveAccount') : t('NotHaveAccount')}</p>
         <Button
            className='!p-0 font-medium cursor-pointer text-sm'
            type='button'
            variant='link'
            asChild
            onClick={handleCreateAccount}
         >
            <p>{isRegister ? t('Login') : t('CreateAccount')}</p>
         </Button>
      </div>
   );
}
