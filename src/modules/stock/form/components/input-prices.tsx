import { Input } from '@/_shared/components/ui/input';
import { useTranslations } from 'next-intl';
import { TInputPrices } from '../../interface';

export function InputPrices({ register, errors, sellingprice, purchaseprice, handlePriceChange }: TInputPrices) {
   const t = useTranslations();

   return (
      <div className='flex flex-col md:flex-row gap-2'>
         <div className='w-full'>
            <Input
               type='text'
               placeholder={t('PurchasePrice')}
               {...register('purchaseprice')}
               value={purchaseprice || ''}
               onChange={(e) => handlePriceChange('purchaseprice', e.target.value)}
            />
            {errors.purchaseprice?.message && <p className='text-red-500 text-xs mt-1'>{errors.purchaseprice.message}</p>}
         </div>
         <div className='w-full'>
            <Input
               type='text'
               placeholder={t('SellingPrice')}
               {...register('sellingprice')}
               value={sellingprice || ''}
               onChange={(e) => handlePriceChange('sellingprice', e.target.value)}
            />
            {errors.sellingprice?.message && <p className='text-red-500 text-xs mt-1'>{errors.sellingprice.message}</p>}
         </div>
      </div>
   );
}
