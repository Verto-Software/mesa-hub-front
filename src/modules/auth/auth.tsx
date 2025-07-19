'use client';

import { Card, CardContent, CardFooter } from '@/_shared/components/ui/card';
import { Routes } from '@/_shared/routes/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { CreateAccount } from './form/components/create-account';
import { LoginWithGoogle } from './form/components/login-with-google';
import { FormAuth } from './form/form-auth';
import { AuthSchema, FormAuthSchema } from './form/schema';

export function Auth() {
   const [showPassword, setShowPassword] = useState(false);
   const [isRegister, setRegister] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors, isValid },
      reset,
   } = useForm<FormAuthSchema>({
      resolver: zodResolver(AuthSchema()),
      mode: 'onBlur',
   });

   const { push } = useRouter();

   function toggleShowPassword() {
      setShowPassword(!showPassword);
   }

   function handleCreateAccount() {
      setRegister(!isRegister);
   }

   function handleSubmitFormLogin(data: FormAuthSchema) {
      const isValid = isRegister
         ? data.firstname && data.lastname && data.email && data.password
         : data.email === 'teste@teste.com' && data.password === 'Coxinh@123';

      if (isValid) {
         isRegister && toast.success('Sua conta foi criada com sucesso!');

         push(Routes.Order);
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
                  <FormAuth
                     errors={errors}
                     handleSubmit={handleSubmit}
                     handleSubmitFormLogin={handleSubmitFormLogin}
                     isValid={isValid}
                     register={register}
                     toggleShowPassword={toggleShowPassword}
                     isRegister={isRegister}
                     showPassword={showPassword}
                  />
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
      </section>
   );
}
