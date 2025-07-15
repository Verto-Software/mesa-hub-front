import { Button } from '@/_shared/components/ui/button';
import { useTranslations } from 'next-intl';
import { TFormForgotPassword } from '../interface';
import { InputConfirmNewPassword } from './components/input-confirm-password';
import { InputNewPassword } from './components/input-new-password';

export function FormForgotPassword({
   handleSubmit,
   handleSubmitResetPassword,
   toggleShowNewPassword,
   showNewPassword,
   register,
   errors,
   toggleShowConfirmPassword,
   showConfirmPassword,
   isValid,
}: TFormForgotPassword) {
   const t = useTranslations();

   return (
      <form
         className='flex flex-col gap-6'
         onSubmit={handleSubmit(handleSubmitResetPassword)}
      >
         <fieldset className='flex flex-col gap-6'>
            <legend className='text-center text-gray-800 text-xl mb-6'>{t('ResetPassword')}</legend>
            <InputNewPassword
               toggleShowNewPassword={toggleShowNewPassword}
               showNewPassword={showNewPassword}
               register={register}
               errors={errors}
            />
            <InputConfirmNewPassword
               toggleShowConfirmPassword={toggleShowConfirmPassword}
               showConfirmPassword={showConfirmPassword}
               register={register}
               errors={errors}
            />
            <Button
               className='cursor-pointer'
               type='submit'
               disabled={!isValid}
            >
               {t('ResetPassword')}
            </Button>
         </fieldset>
      </form>
   );
}
