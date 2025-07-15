'use client';

import { DialogContent, DialogHeader, DialogTitle } from '@/_shared/components/ui/dialog';
import { Input } from '@/_shared/components/ui/input';
import { formatPrice } from '@/_shared/utils/formatters-price';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { FooterAction } from './components/footer-action';
import { InputSalePrice } from './components/input-sale-price';
import { InputTextArea } from './components/input-textarea';
import { SelectCategory } from './components/select-category';
import { UploadImage } from './components/upload-image';
import { FormItemSchema, ItemSchema } from './schema';

export function FormAddItem() {
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
         purchasePrice: '',
         salePrice: '',
      },
   });

   const salePrice = watch('salePrice');

   const handlePriceChange = (field: 'purchasePrice' | 'salePrice', value: string) => {
      const formatted = formatPrice(value);
      setValue(field, formatted);
   };

   function handleAddItem(data: FormItemSchema) {
      console.log('Dados do formulário:', data);
      reset();
   }

   return (
      <DialogContent className='select-none'>
         <form
            onSubmit={handleSubmit(handleAddItem)}
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
                  salePrice={salePrice}
                  handlePriceChange={handlePriceChange}
               />
            </div>

            <InputTextArea
               errors={errors}
               register={register}
               watch={watch}
            />

            <UploadImage register={register} />

            <FooterAction reset={reset} />
         </form>
      </DialogContent>
   );
}
