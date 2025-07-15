import { User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Label } from '@/_shared/components/ui/label';
import { Input } from '@/_shared/components/ui/input';
import { TInputLastName } from '../../interface';

export function InputLastName({ register, errors }: TInputLastName) {
   const t = useTranslations();
   return (
      <div className='space-y-2 animated-right'>
         <Label
            className='text-gray-800'
            htmlFor='lastname'
         >
            {t('LastName')}
         </Label>
         <div className='relative'>
            <User
               className='absolute top-2.5 left-3 text-gray-400'
               size={16}
            />
            <Input
               className='pl-10 text-gray-800 autofill:none'
               id='lastname'
               type='text'
               placeholder={t('EnterYourLastName')}
               {...register('lastname')}
            />
            {errors.lastname?.message && <p className='text-xs text-red-500 mt-0.5'>{errors.lastname?.message}</p>}
         </div>
      </div>
   );
}
