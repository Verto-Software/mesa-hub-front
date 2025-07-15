import { Textarea } from '@/_shared/components/ui/textarea';
import { TInputTextarea } from '../../interface';
import { useTranslations } from 'next-intl';

export function InputTextarea({ register, errors, watch }: TInputTextarea) {
   const t = useTranslations();
   const itemdescription = watch('itemdescription');

   return (
      <div>
         <Textarea
            className='break-all'
            placeholder={t('ItemDescription')}
            {...register('itemdescription')}
            maxLength={200}
         />
         {errors.itemdescription?.message && <p className='text-red-500 text-xs mt-1'>{errors.itemdescription.message}</p>}
         <p className='text-right text-xs text-gray-400 mt-1'>{itemdescription?.length || 0}/200</p>
      </div>
   );
}
