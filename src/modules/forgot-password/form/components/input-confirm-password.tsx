import { Eye, EyeOff, Lock } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Label } from '@/_shared/components/ui/label';
import { Input } from '@/_shared/components/ui/input';
import { Button } from '@/_shared/components/ui/button';
import { TInputConfirmNewPassword } from '../../interface';

export function InputConfirmNewPassword({
   toggleShowConfirmPassword,
   showConfirmPassword,
   register,
   errors,
}: TInputConfirmNewPassword) {
   const t = useTranslations();

   return (
      <div className='space-y-2'>
         <Label
            className='text-gray-800'
            htmlFor='confirmpassword'
         >
            {t('ConfirmPassword')}
         </Label>
         <div className='relative'>
            <Lock
               className='absolute top-2.5 left-3 text-gray-400'
               size={16}
            />
            <Input
               className='pl-10 text-gray-800'
               id='confirmpassword'
               type={!showConfirmPassword ? 'password' : 'text'}
               placeholder={t('ConfirmNewPassword')}
               {...register('confirmpassword')}
            />
            {errors.confirmpassword?.message && (
               <p className='text-xs text-red-500 mt-0.5'>{errors.confirmpassword?.message}</p>
            )}
            <Button
               className='absolute top-0 right-0 text-gray-400 cursor-pointer hover:bg-transparent'
               variant='ghost'
               type='button'
               onClick={toggleShowConfirmPassword}
            >
               {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </Button>
         </div>
      </div>
   );
}
