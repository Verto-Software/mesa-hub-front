'use client';

import { Button } from '@/_shared/components/ui/button';
import { Card, CardContent, CardFooter } from '@/_shared/components/ui/card';
import { Routes } from '@/_shared/routes/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { InputConfirmNewPassword } from './components/input-confirm-password';
import { InputNewPassword } from './components/input-new-password';
import { FormResetPasswordSchema, resetPasswordSchema } from './schema';

export function ForgotPassword() {
   const t = useTranslations();
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
      <section className='select-none min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 p-4'>
         <div className='w-full max-w-md'>
            <Card className='shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-fade-in'>
               <CardContent>
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
               </CardContent>
               <CardFooter className='w-full flex items-center justify-center gap-2 text-gray-800'>
                  <p className='text-sm'>{t('DidYouRememberPassword')}</p>
                  <Button
                     className='!p-0 font-medium cursor-pointer'
                     type='submit'
                     variant='link'
                     asChild
                  >
                     <Link href={Routes.Auth}>{t('Login')}</Link>
                  </Button>
               </CardFooter>
            </Card>
         </div>
      </section>
   );
}
