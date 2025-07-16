'use client';

import { useTranslations } from 'next-intl';
import { TFormAddItemMenu } from '../interface';
import { FormItemMenuSchema, ItemMenuSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { DialogContent, DialogHeader, DialogTitle } from '@/_shared/components/ui/dialog';
import { Input } from '@/_shared/components/ui/input';
import { SelectCategory } from './components/select-category';
import { InputSalePrice } from './components/input-sale-price';
import { InputItemDescription } from './components/input-item-description';
import { UploadImage } from './components/upload-image';
import { ButtonAddItemMenu } from './components/button-add-item-menu';
import { formatPrice } from '@/_shared/utils/formatters-price';
import { InputItemName } from './components/input-item-name';

export function FormAddItemMenu({ handleCloseDialog }: TFormAddItemMenu) {
   const t = useTranslations();

   const {
      register,
      handleSubmit,
      watch,
      setValue,
      formState: { errors },
      reset,
      control,
   } = useForm<FormItemMenuSchema>({
      resolver: zodResolver(ItemMenuSchema()),
      mode: 'onBlur',
      defaultValues: {
         category: '',
         image: '',
         itemdescription: '',
         itemname: '',
         saleprice: '',
      },
   });

   const saleprice = watch('saleprice');

   const handlePriceChange = (field: 'saleprice', value: string) => {
      const formatted = formatPrice(value);
      setValue(field, formatted);
   };

   function handleAddItemMenu(data: FormItemMenuSchema) {
      console.log('Dados do formulário:', data);
      reset();
      handleCloseDialog();
   }

   return (
      <DialogContent className='select-none'>
         <form onSubmit={handleSubmit(handleAddItemMenu)}>
            <fieldset className='space-y-4'>
               <DialogHeader>
                  <DialogTitle>
                     <legend>{t('AddItemToMenu')}</legend>
                  </DialogTitle>
               </DialogHeader>

               <InputItemName
                  errors={errors}
                  register={register}
               />

               <div className='flex gap-2 flex-col md:flex-row'>
                  <SelectCategory
                     control={control}
                     errors={errors}
                  />

                  <InputSalePrice
                     register={register}
                     errors={errors}
                     saleprice={saleprice}
                     handlePriceChange={handlePriceChange}
                  />
               </div>

               <InputItemDescription
                  errors={errors}
                  register={register}
                  watch={watch}
               />

               <UploadImage register={register} />

               <ButtonAddItemMenu reset={reset} />
            </fieldset>
         </form>
      </DialogContent>
   );
}
