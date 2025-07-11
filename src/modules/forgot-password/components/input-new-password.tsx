import { Button } from '@/_ui/button';
import { Input } from '@/_ui/input';
import { Label } from '@/_ui/label';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { TInputNewPassword } from './interface';
import { useTranslations } from 'next-intl';

export function InputNewPassword({ toggleShowNewPassword, showNewPassword, register, errors }: TInputNewPassword) {
   const t = useTranslations();

   return (
      <div className='space-y-2'>
         <Label
            className='text-gray-800'
            htmlFor='newpassword'
         >
            {t('NewPassword')}
         </Label>
         <div className='relative'>
            <Lock
               className='absolute top-2.5 left-3 text-gray-400'
               size={16}
            />
            <Input
               className='pl-10 text-gray-800'
               id='newpassword'
               type={!showNewPassword ? 'password' : 'text'}
               placeholder={t('EnterANewPassword')}
               {...register('newpassword')}
            />
            {errors.newpassword?.message && <p className='text-xs text-red-500 mt-0.5'>{errors.newpassword?.message}</p>}
            <Button
               className='absolute top-0 right-0 text-gray-400 cursor-pointer hover:bg-transparent'
               variant='ghost'
               type='button'
               onClick={toggleShowNewPassword}
            >
               {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </Button>
         </div>
      </div>
   );
}
