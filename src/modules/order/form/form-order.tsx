'use client';

import { DialogContent, DialogHeader, DialogTitle } from '@/_shared/components/ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { FormOrderSchema, OrderSchema } from './schema';
import { FooterOrderAction } from './components/footer-order-action';
import { InputOrderName } from './components/input-order-name';
import { OrderNumber } from './components/input-order-number';
import { InputTextarea } from './components/input-textarea';

interface TFormOrder {
   onSuccess: () => void;
}

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

            <InputTextarea
               register={register}
               errors={errors}
               watch={watch}
            />

            <FooterOrderAction reset={reset} />
         </form>
      </DialogContent>
   );
}
