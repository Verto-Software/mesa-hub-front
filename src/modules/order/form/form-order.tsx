'use client';

import { DialogContent, DialogHeader, DialogTitle } from '@/_shared/components/ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { ButtonCreateOrder } from './components/button-create-order';
import { InputOrderDescription } from './components/input-order-description';
import { InputOrderName } from './components/input-order-name';
import { OrderNumber } from './components/input-order-number';
import { FormOrderSchema, OrderSchema } from './schema';
import { TFormOrder } from '../interface';

export function FormOrder({ onSuccess }: TFormOrder) {
   const t = useTranslations();

   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
      reset,
   } = useForm<FormOrderSchema>({
      resolver: zodResolver(OrderSchema()),
   });

   function handleSubmitNewOrder(data: FormOrderSchema) {
      console.log('Comanda criada', data);
      onSuccess();
      reset();
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
            <InputOrderDescription
               register={register}
               errors={errors}
               watch={watch}
            />
            <ButtonCreateOrder reset={reset} />
         </form>
      </DialogContent>
   );
}
