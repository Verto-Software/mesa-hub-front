import { Textarea } from '@/_shared/components/ui/textarea';
import { useTranslations } from 'next-intl';
import { TItemDescription } from '../../interface';

export function InputItemDescription({ register, errors, watch }: TItemDescription) {
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
         {errors.itemdescription?.message && (
            <p className='text-red-500 text-xs mt-1'>{errors.itemdescription.message}</p>
         )}
         <p className='text-right text-xs text-gray-400 mt-1'>{itemdescription?.length || 0}/200</p>
      </div>
   );
}
