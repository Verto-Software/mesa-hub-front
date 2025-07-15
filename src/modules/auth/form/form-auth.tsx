import { Button } from '@/_shared/components/ui/button';
import { useTranslations } from 'next-intl';
import { TFormAuth } from '../interface';
import { InputEmail } from './components/input-email';
import { InputFirstName } from './components/input-first-name';
import { InputLastName } from './components/input-last-name';
import { InputPassword } from './components/input-password';

export function FormAuth({
   register,
   handleSubmit,
   errors,
   isValid,
   toggleShowPassword,
   handleSubmitFormLogin,
   isRegister,
   showPassword,
}: TFormAuth) {
   const t = useTranslations();

   return (
      <form onSubmit={handleSubmit(handleSubmitFormLogin)}>
         <fieldset className='flex flex-col gap-6'>
            <legend className='text-center text-gray-800 text-xl mb-6'>
               {isRegister ? t('Register') : t('Login')}
            </legend>
            {isRegister ? (
               <>
                  <InputFirstName
                     register={register}
                     errors={errors}
                  />
                  <InputLastName
                     register={register}
                     errors={errors}
                  />
               </>
            ) : null}
            <InputEmail
               register={register}
               errors={errors}
            />
            <InputPassword
               register={register}
               errors={errors}
               showPassword={showPassword}
               toggleShowPassword={toggleShowPassword}
               isRegister={isRegister}
            />
            <Button
               className='cursor-pointer'
               type='submit'
               animated
               disabled={!isValid}
            >
               {isRegister ? t('Register') : t('Login')}
            </Button>
         </fieldset>
      </form>
   );
}
