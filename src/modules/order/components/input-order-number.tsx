import { Input } from '@/_shared/components/ui/input';
import { useTranslations } from 'next-intl';
import { TOrderNumber } from './interface';

export function OrderNumber({ register, errors }: TOrderNumber) {
   const t = useTranslations();

   return (
      <div>
         <Input
            type='number'
            placeholder={t('OrderNumber')}
            min={0}
            {...register('ordernumber')}
         />
         {errors.ordernumber?.message && <p className='text-red-500 text-xs mt-1'>{errors.ordernumber.message}</p>}
      </div>
   );
}
