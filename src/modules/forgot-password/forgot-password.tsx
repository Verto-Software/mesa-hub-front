'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/_ui/card';
import { Button } from '@/_ui/button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema, FormResetPasswordSchema } from './components/schema';
import { InputNewPassword } from './components/input-new-password';
import { InputConfirmNewPassword } from './components/input-confirm-password';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Routes } from '@/routes/routes';

export function ForgotPassword() {
   const [showNewPassword, setShowNewPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const { push } = useRouter();

   const {
      register,
      handleSubmit,
      formState: { errors, isValid },
      reset,
   } = useForm<FormResetPasswordSchema>({
      resolver: zodResolver(resetPasswordSchema),
      mode: 'all',
   });

   function toggleShowNewPassword() {
      setShowNewPassword(!showNewPassword);
   }

   function toggleShowConfirmPassword() {
      setShowConfirmPassword(!showConfirmPassword);
   }

   function handleSubmitResetPassword(data: FormResetPasswordSchema) {
      if (data.newpassword && data.confirmpassword) {
         toast.success('Parabéns! Sua nova senha foi criada com sucesso.');
         push(Routes.Home);
      }
      reset();
   }

   return (
      <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 p-4'>
         <div className='w-full max-w-md'>
            <Card className='shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-fade-in'>
               <CardContent>
                  <form
                     className='flex flex-col gap-6'
                     onSubmit={handleSubmit(handleSubmitResetPassword)}
                  >
                     <fieldset className='flex flex-col gap-6'>
                        <legend className='text-center text-gray-800 text-xl mb-6'>Redefinir Senha</legend>
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
                           Redefinir Senha
                        </Button>
                     </fieldset>
                  </form>
               </CardContent>
               <CardFooter className='w-full flex items-center justify-center gap-2 text-gray-800'>
                  <p className='text-sm'>Lembrou da senha?</p>
                  <Button
                     className='!p-0 font-medium cursor-pointer'
                     type='submit'
                     variant='link'
                     asChild
                  >
                     <Link href={Routes.Auth}>Fazer login</Link>
                  </Button>
               </CardFooter>
            </Card>
         </div>
      </section>
   );
}
