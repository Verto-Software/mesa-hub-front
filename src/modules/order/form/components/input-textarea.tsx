import { Textarea } from '@/_shared/components/ui/textarea';
import { useTranslations } from 'next-intl';
import { TInputTextarea } from './interface';

export function InputTextarea({ register, errors, watch }: TInputTextarea) {
   const t = useTranslations();
   const orderdescription = watch('orderdescription');

   return (
      <div>
         <Textarea
            className='break-all'
            placeholder={t('ItemDescription')}
            {...register('orderdescription')}
            maxLength={200}
         />
         {errors.orderdescription?.message && <p className='text-red-500 text-xs mt-1'>{errors.orderdescription.message}</p>}
         <p className='text-right text-xs text-gray-400 mt-1'>{orderdescription?.length || 0}/200</p>
      </div>
   );
}
