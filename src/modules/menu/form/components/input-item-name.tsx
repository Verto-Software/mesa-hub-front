import { Input } from '@/_shared/components/ui/input';
import { TInputItemName } from '../../interface';
import { useTranslations } from 'next-intl';

export function InputItemName({ errors, register }: TInputItemName) {
   const t = useTranslations();

   return (
      <div className='w-full'>
         <Input
            className={errors.itemname?.message ? 'border-red-500' : ''}
            type='text'
            placeholder={t('ItemName')}
            {...register('itemname')}
         />
         {errors.itemname?.message && <p className='text-red-500 text-xs mt-1'>{errors.itemname.message}</p>}
      </div>
   );
}
