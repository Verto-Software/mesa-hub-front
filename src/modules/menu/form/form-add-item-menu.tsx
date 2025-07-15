'use client';

import { DialogContent, DialogHeader, DialogTitle } from '@/_shared/components/ui/dialog';
import { Input } from '@/_shared/components/ui/input';
import { formatPrice } from '@/_shared/utils/formatters-price';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { ButtonAddItemMenu } from './components/button-add-item-menu';
import { InputSalePrice } from './components/input-sale-price';
import { InputItemDescription } from './components/input-item-description';
import { SelectCategory } from './components/select-category';
import { UploadImage } from './components/upload-image';
import { FormItemSchema, ItemSchema } from './schema';
import { TFormAddItemMenu } from '../interface';

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
   } = useForm<FormItemSchema>({
      resolver: zodResolver(ItemSchema()),
      mode: 'all',
      defaultValues: {
         itemname: '',
         category: '',
         itemdescription: '',
         saleprice: '',
      },
   });

   const saleprice = watch('saleprice');

   const handlePriceChange = (field: 'saleprice', value: string) => {
      const formatted = formatPrice(value);
      setValue(field, formatted);
   };

   function handleAddItemMenu(data: FormItemSchema) {
      console.log('Dados do formulário:', data);
      reset();
      handleCloseDialog();
   }

   return (
      <DialogContent className='select-none'>
         <form
            onSubmit={handleSubmit(handleAddItemMenu)}
            className='space-y-4'
         >
            <DialogHeader>
               <DialogTitle>{t('AddItemToMenu')}</DialogTitle>
            </DialogHeader>

            <div className='w-full'>
               <Input
                  className={errors.itemname?.message ? 'border-red-500' : ''}
                  type='text'
                  placeholder={t('ItemName')}
                  {...register('itemname')}
               />
               {errors.itemname?.message && <p className='text-red-500 text-xs mt-1'>{errors.itemname.message}</p>}
            </div>
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
         </form>
      </DialogContent>
   );
}
