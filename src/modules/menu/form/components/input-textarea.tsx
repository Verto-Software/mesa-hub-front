import { Textarea } from '@/_shared/components/ui/textarea';
import { TInputTextArea } from '../../interface';
import { useTranslations } from 'next-intl';

export function InputTextArea({ register, errors, watch }: TInputTextArea) {
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
