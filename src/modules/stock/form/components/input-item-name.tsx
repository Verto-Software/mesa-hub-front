import { Input } from '@/_shared/components/ui/input';
import { useTranslations } from 'next-intl';
import { TInputName } from '../../interface';

export function InputItemName({ register, errors }: TInputName) {
   const t = useTranslations();

   return (
      <div className='w-full'>
         <Input
            type='text'
            placeholder={t('ItemName')}
            {...register('itemname')}
         />
         {errors.itemname?.message && <p className='text-red-500 text-xs mt-1'>{errors.itemname.message}</p>}
      </div>
   );
}
