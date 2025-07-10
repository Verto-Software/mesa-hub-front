'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/_ui/card';
import { Button } from '@/_ui/button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema, resetSchema } from './components/schema';
import { InputNewPassword } from './components/input-new-password';
import { InputConfirmNewPassword } from './components/input-confirm-password';
import Link from 'next/link';
import { Routes } from '@/routes';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function ForgotPassword() {
   const [showNewPassword, setShowNewPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const { push } = useRouter();

   const {
      register,
      handleSubmit,
      formState: { errors, isValid },
      reset,
   } = useForm<resetSchema>({
      resolver: zodResolver(resetPasswordSchema),
      mode: 'all',
   });

   function toggleShowNewPassword() {
      setShowNewPassword(!showNewPassword);
   }

   function toggleShowConfirmPassword() {
      setShowConfirmPassword(!showConfirmPassword);
   }

   function handleSubmitResetPassword(data: resetSchema) {
      if (data.newpassword === 'Coxinh@123' && data.confirmpassword === 'Coxinh@123') {
         toast.success('Parabéns! Sua nova senha foi criada com sucesso.');
         push(Routes.home);
      }
      reset();
   }

   return (
      <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 p-4'>
         <div className='w-full max-w-md'>
            <Card className='shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-fade-in'>
               <CardHeader className='text-center text-2xl font-medium text-gray-500'>
                  <p className='text-center text-2xl font-medium text-gray-500'>Redefinir senha</p>
               </CardHeader>
               <CardContent>
                  <form
                     className='flex flex-col gap-6'
                     onSubmit={handleSubmit(handleSubmitResetPassword)}
                  >
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
                  </form>
               </CardContent>
               <CardFooter className='w-full flex items-center justify-center gap-2 text-gray-500'>
                  <p>Lembrou da senha?</p>
                  <Button
                     className='!p-0 font-medium cursor-pointer'
                     type='submit'
                     variant='link'
                     asChild
                  >
                     <Link href={Routes.auth}>Fazer login</Link>
                  </Button>
               </CardFooter>
            </Card>
         </div>
      </section>
   );
}
