import { Input } from '@/_shared/components/ui/input';
import { useTranslations } from 'next-intl';
import { TInputOrderName } from '../../interface';

export function InputOrderName({ register, errors }: TInputOrderName) {
   const t = useTranslations();

   return (
      <div>
         <Input
            type='text'
            className='break-words'
            placeholder={t('OrderName')}
            {...register('ordername')}
         />
         {errors.ordername?.message && <p className='text-red-500 text-xs mt-1'>{errors.ordername.message}</p>}
      </div>
   );
}
