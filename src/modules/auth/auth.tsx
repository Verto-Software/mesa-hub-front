'use client';

import { Button } from '@/_shared/components/ui/button';
import { Card, CardContent, CardFooter } from '@/_shared/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/_shared/components/ui/tooltip';
import { useFullscreen } from '@/_shared/hooks/useFullScreen';
import { Routes } from '@/_shared/routes/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Expand, Shrink } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { CreateAccount } from './components/create-account';
import { InputEmail } from './components/input-email';
import { InputFirstName } from './components/input-first-name';
import { InputLastName } from './components/input-last-name';
import { InputPassword } from './components/input-password';
import { LoginWithGoogle } from './components/login-with-google';
import { AuthSchema, FormAuthSchema } from './components/schema';

export function Auth() {
   const t = useTranslations();
   const [showPassword, setShowPassword] = useState(false);
   const [isRegister, setRegister] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors, isValid },
      reset,
   } = useForm<FormAuthSchema>({
      resolver: zodResolver(AuthSchema()),
      mode: 'all',
   });

   const { push } = useRouter();
   const { isFullscreen, toggleFullscreen } = useFullscreen();

   function toggleShowPassword() {
      setShowPassword(!showPassword);
   }

   function handleCreateAccount() {
      setRegister(!isRegister);
   }

   function handleSubmitFormLogin(data: FormAuthSchema) {
      const register = isRegister ? data.firstname && data.lastname && data.email && data.password : data.email === 'teste@teste.com' && data.password === 'Coxinh@123';

      if (register) {
         isRegister && toast.success('Sua conta foi criada com sucesso!');

         push(Routes.Home);
         reset();
      } else {
         if (!isRegister) {
            toast.error('Verifique seu e-mail e senha! Tente novamente.');
         }
      }
   }

   return (
      <section className='select-none min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 p-4'>
         <div className='w-full max-w-md'>
            <Card className='w-full shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-fade-in'>
               <CardContent>
                  <form onSubmit={handleSubmit(handleSubmitFormLogin)}>
                     <fieldset className='flex flex-col gap-6'>
                        <legend className='text-center text-gray-800 text-xl mb-6'>{isRegister ? t('Register') : t('Login')}</legend>
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
               </CardContent>
               <CardFooter>
                  <div className='flex flex-col w-full gap-2'>
                     <CreateAccount
                        handleCreateAccount={handleCreateAccount}
                        isRegister={isRegister}
                     />
                     <LoginWithGoogle />
                  </div>
               </CardFooter>
            </Card>
         </div>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button
                  className='cursor-pointer w-fit'
                  onClick={toggleFullscreen}
               >
                  {isFullscreen ? <Shrink /> : <Expand />}
               </Button>
            </TooltipTrigger>
            <TooltipContent side='right'>
               <p>{isFullscreen ? 'Sair do modo tela cheia' : 'Ativar modo tela cheia'}</p>
            </TooltipContent>
         </Tooltip>
      </section>
   );
}
