import { Input } from '@/_shared/components/ui/input';
import { TInputPrice } from '../interface';
import { useTranslations } from 'next-intl';

export function InputPrices({ register, errors }: TInputPrice) {
   const t = useTranslations();

   return (
      <div className='flex flex-col md:flex-row gap-2'>
         <div className='w-full'>
            <Input
               type='text'
               placeholder={t('PurchasePrice')}
               {...register('purchaseprice')}
            />
            {errors.purchaseprice?.message && <p className='text-red-500 text-xs mt-1'>{errors.purchaseprice.message}</p>}
         </div>
         <div className='w-full'>
            <Input
               type='text'
               placeholder={t('SellingPrice')}
               {...register('sellingprice')}
            />
            {errors.sellingprice?.message && <p className='text-red-500 text-xs mt-1'>{errors.sellingprice.message}</p>}
         </div>
      </div>
   );
}
