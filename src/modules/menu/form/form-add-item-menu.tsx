'use client';

import { DialogContent, DialogHeader, DialogTitle } from '@/_shared/components/ui/dialog';
import { formatPrice } from '@/_shared/utils/formatters-price';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { TFormAddItemMenu } from '../interface';
import { ButtonAddItemMenu } from './components/button-add-item-menu';
import { InputItemDescription } from './components/input-item-description';
import { InputItemName } from './components/input-item-name';
import { InputSalePrice } from './components/input-sale-price';
import { SelectCategory } from './components/select-category';
import { UploadImage } from './components/upload-image';
import { FormItemMenuSchema, ItemMenuSchema } from './schema';

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
