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
import { toast } from 'sonner';

export function FormCreateNewOrder({ handleCloseDialog }: TFormOrder) {
   const t = useTranslations();

   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
      reset,
   } = useForm<FormOrderSchema>({
      resolver: zodResolver(OrderSchema()),
      mode: 'onBlur',
   });

   async function handleSubmitNewOrder(data: FormOrderSchema) {
      try {
         const response = await fetch('http://localhost:5008/api/Orders', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Accept: '*/*',
            },
            body: JSON.stringify({
               number: data.number,
               name: data.name,
               description: data.description,
            }),
         });

         if (!response.ok) {
            throw new Error(`Erro ao criar a ordem: ${response.statusText}`);
         }

         toast.success('Comanda criada com sucesso!');
         handleCloseDialog();
         reset();
      } catch (error) {
         console.error('Erro ao criar ordem:', error);
      }
   }

   return (
      <DialogContent className='select-none'>
         <form onSubmit={handleSubmit(handleSubmitNewOrder)}>
            <fieldset className='space-y-5'>
               <DialogHeader>
                  <DialogTitle>
                     <legend>{t('AddNewOrder')}</legend>
                  </DialogTitle>
               </DialogHeader>
               <div className='flex gap-2 flex-col md:flex-row w-full'>
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
            </fieldset>
         </form>
      </DialogContent>
   );
}
