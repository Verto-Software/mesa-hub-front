import { useTranslations } from 'next-intl';
import { TInputSalePrice } from '../../interface';
import { Input } from '@/_shared/components/ui/input';

export function InputSalePrice({ errors, register, saleprice, handlePriceChange }: TInputSalePrice) {
   const t = useTranslations();

   return (
      <div className='flex w-full flex-col gap-1'>
         <Input
            className={errors.saleprice?.message ? 'border-red-500' : ''}
            type='text'
            placeholder={t('SellingPrice')}
            {...register('saleprice')}
            value={saleprice || ''}
            onChange={(e) => handlePriceChange('saleprice', e.target.value)}
         />
         {errors.saleprice?.message && <p className='text-red-500 text-xs'>{errors.saleprice.message}</p>}
      </div>
   );
}
