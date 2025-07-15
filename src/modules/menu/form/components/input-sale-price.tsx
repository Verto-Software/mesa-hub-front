import { Input } from '@/_shared/components/ui/input';
import { TInputSalePrice } from '../../interface';
import { useTranslations } from 'next-intl';

export function InputSalePrice({ errors, register, salePrice, handlePriceChange }: TInputSalePrice) {
   const t = useTranslations();

   return (
      <div className='flex w-full flex-col gap-1'>
         <Input
            className={errors.salePrice?.message ? 'border-red-500' : ''}
            type='text'
            placeholder={t('SellingPrice')}
            {...register('salePrice')}
            value={salePrice}
            onChange={(e) => handlePriceChange('salePrice', e.target.value)}
         />
         {errors.salePrice?.message && <p className='text-red-500 text-xs'>{errors.salePrice.message}</p>}
      </div>
   );
}
