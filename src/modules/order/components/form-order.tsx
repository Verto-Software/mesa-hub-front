'use client';

import { DialogContent, DialogHeader, DialogTitle } from '@/_shared/components/ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { FormOrderSchema, OrderSchema } from '../schema';
import { FooterOrderAction } from './footer-order-action';
import { InputOrderName } from './input-order-name';
import { OrderNumber } from './input-order-number';
import { InputTextarea } from './input-textarea';

export function FormOrder() {
   const t = useTranslations();

   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
   } = useForm<FormOrderSchema>({
      resolver: zodResolver(OrderSchema()),
   });

   function handleSubmitNewOrder() {
      console.log('Comanda criada');
   }

   return (
      <DialogContent className='select-none'>
         <form
            className='space-y-4'
            onSubmit={handleSubmit(handleSubmitNewOrder)}
         >
            <DialogHeader>
               <DialogTitle>{t('AddNewOrder')}</DialogTitle>
            </DialogHeader>

            <div className='flex gap-2 flex-col md:flex-row'>
               <OrderNumber
                  register={register}
                  errors={errors}
               />
               <InputOrderName
                  register={register}
                  errors={errors}
               />
            </div>

            <InputTextarea
               register={register}
               errors={errors}
               watch={watch}
            />

            <FooterOrderAction />
         </form>
      </DialogContent>
   );
}
