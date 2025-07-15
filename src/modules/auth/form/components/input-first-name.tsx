import { User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Label } from '@/_shared/components/ui/label';
import { Input } from '@/_shared/components/ui/input';
import { TInputFirstName } from '../../interface';

export function InputFirstName({ register, errors }: TInputFirstName) {
   const t = useTranslations();

   return (
      <div className='space-y-2 animated-right'>
         <Label
            className='text-gray-800'
            htmlFor='firstname'
         >
            {t('FirstName')}
         </Label>
         <div className='relative'>
            <User
               className='absolute top-2.5 left-3 text-gray-400'
               size={16}
            />
            <Input
               className='pl-10 text-gray-800 autofill:none'
               id='firstname'
               type='text'
               placeholder={t('EnterYourFirstName')}
               {...register('firstname')}
            />
            {errors.firstname?.message && <p className='text-xs text-red-500 mt-0.5'>{errors.firstname?.message}</p>}
         </div>
      </div>
   );
}
