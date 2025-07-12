import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Routes } from '@/routes/routes';
import { Eye, EyeOff, Lock } from 'lucide-react';
import Link from 'next/link';
import { TInputPassword } from './interface';
import { useTranslations } from 'next-intl';

export function InputPassword({ register, errors, showPassword, toggleShowPassword, isRegister }: TInputPassword) {
   const t = useTranslations();
   return (
      <div className='space-y-2'>
         <Label
            className='text-gray-800'
            htmlFor='password'
         >
            {t('Password')}
         </Label>
         <div className='relative'>
            <Lock
               className='absolute top-2.5 left-3 text-gray-400'
               size={16}
            />
            <Input
               className='pl-10 text-gray-800'
               id='password'
               type={showPassword ? 'text' : 'password'}
               placeholder={t('EnterYourPassword')}
               {...register('password')}
            />
            {errors.password?.message && <p className='text-xs text-red-500 mt-0.5'>{errors.password?.message}</p>}
            <Button
               className='absolute top-0 right-0 text-gray-400 cursor-pointer hover:bg-transparent'
               type='button'
               variant='ghost'
               onClick={toggleShowPassword}
            >
               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </Button>
         </div>
         {!isRegister ? (
            <div className='text-right'>
               <Button
                  className='!p-0 cursor-pointer text-sm'
                  type='button'
                  variant='link'
                  asChild
               >
                  <Link href={Routes.ForgotPassword}>{t('ForgotYourPassword')}</Link>
               </Button>
            </div>
         ) : null}
      </div>
   );
}
