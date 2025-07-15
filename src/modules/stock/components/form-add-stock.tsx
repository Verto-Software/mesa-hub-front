'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { FormStockSchema, StockSchema } from '../schema';
import { InputCurrentStock } from './input-current-stock';
import { InputItemName } from './input-item-name';
import { InputItemQuantity } from './input-item-quantity';
import { InputMaximumStock } from './input-maximum-stock';
import { InputMinimumStock } from './input-minimum-stock';
import { InputPrices } from './input-prices';
import { InputSupplier } from './input-supplier';
import { InputTextarea } from './input-textarea';
import { StockActions } from './stock-action';

export function FormAddStock() {
   const t = useTranslations();

   const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
   } = useForm<FormStockSchema>({
      resolver: zodResolver(StockSchema()),
   });

   function handleSendFormStock(data: FormStockSchema) {
      console.log('Form enviado!', data);
      reset();
   }
   return (
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
            <InputTextarea
               errors={errors}
               register={register}
               watch={watch}
            />
            <StockActions />
         </fieldset>
      </form>
   );
}
