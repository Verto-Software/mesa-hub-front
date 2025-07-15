import { Textarea } from '@/_shared/components/ui/textarea';
import { useTranslations } from 'next-intl';
import { TInputItemDescription } from '../../interface';

export function InputItemDescription({ register, errors, watch }: TInputItemDescription) {
   const t = useTranslations();
   const description = watch('itemdescription');

   return (
      <div>
         <Textarea
            className='break-all'
            placeholder={t('ItemDescription')}
            maxLength={200}
            {...register('itemdescription')}
         />
         {errors.itemdescription?.message && <p className='text-red-500 text-xs mt-1'>{errors.itemdescription.message}</p>}
         <p className='text-right text-xs text-gray-400 mt-1'>{description?.length || 0}/200</p>
      </div>
   );
}
