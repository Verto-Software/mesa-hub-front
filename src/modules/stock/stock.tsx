'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/_shared/components/ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { AddItemAction } from './components/add-item-action';
import { InputCurrentStock } from './components/input-current-stock';
import { InputItemName } from './components/input-item-name';
import { InputItemQuantity } from './components/input-item-quantity';
import { InputMaximumStock } from './components/input-maximum-stock';
import { InputMinimumStock } from './components/input-minimum-stock';
import { InputPrices } from './components/input-prices';
import { InputSearch } from './components/input-search';
import { InputSupplier } from './components/input-supplier';
import { InputTextarea } from './components/input-textarea';
import { FormStockSchema, StockSchema } from './schema';
import { StockActions } from './components/stock-action';

export function Stock() {
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
      <section className='flex flex-col select-none'>
         <div className='flex items-center justify-between sticky top-[61px] w-full p-6 bg-white'>
            <div className='flex gap-6 flex-col md:flex-row'>
               <Dialog>
                  <AddItemAction />
                  <DialogContent className='select-none'>
                     <form onSubmit={handleSubmit(handleSendFormStock)}>
                        <fieldset className='space-y-3'>
                           <legend className='sr-only'>{t('AddItemToStock')}</legend>
                           <DialogHeader>
                              <DialogTitle>{t('AddItemToStock')}</DialogTitle>
                           </DialogHeader>
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
                  </DialogContent>
               </Dialog>
               <InputSearch />
            </div>
         </div>
      </section>
   );
}
