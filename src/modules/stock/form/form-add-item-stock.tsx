'use client';

import { DialogContent } from '@/_shared/components/ui/dialog';
import { formatPrice } from '@/_shared/utils/formatters-price';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { ButtonAddItemStock } from './components/button-add-item-stock';
import { InputCurrentStock } from './components/input-current-stock';
import { InputItemDescription } from './components/input-item-description';
import { InputItemName } from './components/input-item-name';
import { InputItemQuantity } from './components/input-item-quantity';
import { InputMaximumStock } from './components/input-maximum-stock';
import { InputMinimumStock } from './components/input-minimum-stock';
import { InputPrices } from './components/input-prices';
import { InputSupplier } from './components/input-supplier';
import { FormStockSchema, StockSchema } from './schema';

export function FormAddItemStock() {
   const t = useTranslations();

   const {
      register,
      handleSubmit,
      watch,
      reset,
      setValue,
      control,
      formState: { errors },
   } = useForm<FormStockSchema>({
      resolver: zodResolver(StockSchema()),
      mode: 'all',
      defaultValues: {
         currentstock: '',
         itemdescription: '',
         itemname: '',
         itemquantity: '',
         maximumstock: '',
         minimumstock: '',
         purchaseprice: '',
         sellingprice: '',
         supplier: '',
      },
   });

   const sellingprice = watch('sellingprice');
   const purchaseprice = watch('purchaseprice');

   const handlePriceChange = (field: 'purchaseprice' | 'sellingprice', value: string) => {
      const formatted = formatPrice(value);
      setValue(field, formatted);
   };

   function handleSendFormStock(data: FormStockSchema) {
      console.log('Form enviado!', data);
      reset();
   }

   return (
      <DialogContent className='select-none'>
         <form onSubmit={handleSubmit(handleSendFormStock)}>
            <fieldset className='space-y-3'>
               <legend className='font-medium text-xl'>{t('AddItemToStock')}</legend>
               <InputItemName
                  errors={errors}
                  register={register}
               />
               <InputItemQuantity
                  errors={errors}
                  register={register}
               />
               <InputPrices
                  errors={errors}
                  register={register}
                  handlePriceChange={handlePriceChange}
                  purchaseprice={purchaseprice}
                  sellingprice={sellingprice}
                  control={control}
               />
               <div className='flex gap-2'>
                  <InputCurrentStock
                     errors={errors}
                     register={register}
                  />
                  <InputMinimumStock
                     errors={errors}
                     register={register}
                  />
                  <InputMaximumStock
                     errors={errors}
                     register={register}
                  />
               </div>
               <InputSupplier
                  errors={errors}
                  register={register}
               />
               <InputItemDescription
                  errors={errors}
                  register={register}
                  watch={watch}
               />
               <ButtonAddItemStock />
            </fieldset>
         </form>
      </DialogContent>
   );
}
