import { Mail } from 'lucide-react';
import { TInputEmail } from './interface';
import { useTranslations } from 'next-intl';
import { Label } from '@/_shared/components/ui/label';
import { Input } from '@/_shared/components/ui/input';

export function InputEmail({ register, errors }: TInputEmail) {
   const t = useTranslations();

   return (
      <div className='space-y-2'>
         <Label
            className='text-gray-800'
            htmlFor='email'
         >
            Email
         </Label>
         <div className='relative'>
            <Mail
               className='absolute top-2.5 left-3 text-gray-400'
               size={16}
            />
            <Input
               className='pl-10 text-gray-800 autofill:none'
               id='email'
               type='email'
               placeholder={t('EnterYourEmail')}
               {...register('email')}
            />
            {errors.email?.message && <p className='text-xs text-red-500 mt-0.5'>{errors.email?.message}</p>}
         </div>
      </div>
   );
}
