'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/_shared/components/ui/button';
import { DialogHeader, DialogFooter } from '@/_shared/components/ui/dialog';
import { Input } from '@/_shared/components/ui/input';
import { Textarea } from '@/_shared/components/ui/textarea';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from '@/_shared/components/ui/dialog';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/_shared/components/ui/select';
import { Plus, Search, Upload } from 'lucide-react';
import { formatPrice } from '@/_shared/utils/formatters-price';
import { useTranslations } from 'next-intl';
import { Controller, useForm } from 'react-hook-form';
import { OrderItem } from '../order/order-item';
import { Label } from '@/_shared/components/ui/label';
import { FormItemSchema, ItemSchema } from './schema';

export function Menu() {
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
         name: '',
         category: '',
         description: '',
         purchasePrice: '',
         salePrice: '',
      },
   });

   const description = watch('description');
   const purchasePrice = watch('purchasePrice');
   const salePrice = watch('salePrice');

   const handlePriceChange = (field: 'purchasePrice' | 'salePrice', value: string) => {
      const formatted = formatPrice(value);
      setValue(field, formatted);
   };

   const handleAddItem = (data: FormItemSchema) => {
      console.log('Dados do formulário:', data);
      reset();
   };

   return (
      <section className='flex flex-col select-none'>
         <div className='flex items-center justify-between sticky top-[61px] w-full p-6 bg-white'>
            <div className='flex gap-6 flex-col md:flex-row'>
               <Dialog>
                  <DialogTrigger asChild>
                     <Button
                        className='cursor-pointer'
                        variant='secondary'
                        animated
                     >
                        <Plus
                           size={15}
                           strokeWidth={2}
                        />
                        {t('AddItem')}
                     </Button>
                  </DialogTrigger>

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
                              className={errors.name?.message ? 'border-red-500' : ''}
                              type='text'
                              placeholder={t('ItemName')}
                              {...register('name')}
                           />
                           {errors.name?.message && <p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>}
                        </div>
                        <div className='flex gap-2 flex-col md:flex-row'>
                           <div className='w-full'>
                              <Controller
                                 name='category'
                                 control={control}
                                 rules={{ required: t('CategoryIsMandatory') }}
                                 render={({ field, fieldState }) => (
                                    <>
                                       <Select
                                          onValueChange={field.onChange}
                                          value={field.value}
                                       >
                                          <SelectTrigger className={`w-full ${errors.category?.message ? 'border-red-500' : ''}`}>
                                             <SelectValue placeholder={t('Category')} />
                                          </SelectTrigger>
                                          <SelectContent>
                                             <SelectItem value='drink'>{t('Drink')}</SelectItem>
                                             <SelectItem value='desserts'>{t('Desserts')}</SelectItem>
                                             <SelectItem value='food'>{t('Food')}</SelectItem>
                                          </SelectContent>
                                       </Select>
                                       {fieldState.error?.message && <p className='text-red-500 text-xs mt-1'>{fieldState.error.message}</p>}
                                    </>
                                 )}
                              />
                           </div>
                           <div className='flex w-full flex-col gap-1'>
                              <Input
                                 className={errors.salePrice?.message ? 'border-red-500' : ''}
                                 id='salePrice'
                                 type='text'
                                 placeholder={t('SellingPrice')}
                                 {...register('salePrice')}
                                 value={salePrice}
                                 onChange={(e) => handlePriceChange('salePrice', e.target.value)}
                              />
                              {errors.salePrice?.message && <p className='text-red-500 text-xs'>{errors.salePrice.message}</p>}
                           </div>
                        </div>

                        <div>
                           <Textarea
                              className='break-all'
                              placeholder={t('ItemDescription')}
                              maxLength={200}
                              {...register('description')}
                           />
                           <p className='text-right text-xs text-gray-400 mt-1'>{description?.length || 0}/200</p>
                        </div>

                        <div className='space-y-2'>
                           <div className='border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors border-gray-300 hover:border-gray-400'>
                              <Upload className='mx-auto h-8 w-8 text-gray-400 mb-2' />
                              <p className='text-sm text-gray-600'>{t('ClickToAddAnImage')}</p>
                              <p className='text-xs text-gray-400 mt-1'>PNG, JPG {t('until')} 5MB</p>
                           </div>
                           <input
                              className='hidden'
                              type='file'
                              accept='image/jpeg,image/jpg,image/png'
                              {...register('image')}
                           />
                        </div>

                        {/* <div className='flex gap-2'>
                           <div className='flex w-full flex-col gap-1'>
                              <Label htmlFor='purchasePrice'>{t('PurchasePrice')}</Label>
                              <Input
                                 className={errors.purchasePrice?.message ? 'border-red-500' : ''}
                                 id='purchasePrice'
                                 type='text'
                                 placeholder='R$ 0,00'
                                 {...register('purchasePrice')}
                                 value={purchasePrice}
                                 onChange={(e) => handlePriceChange('purchasePrice', e.target.value)}
                              />
                              {errors.purchasePrice?.message && <p className='text-red-500 text-xs'>{errors.purchasePrice.message}</p>}
                           </div>
                        </div> */}

                        <DialogFooter className='!flex lg!flex-col'>
                           <DialogClose asChild>
                              <Button
                                 className='cursor-pointer flex-1'
                                 type='button'
                                 variant='outline'
                                 onClick={() => reset()}
                              >
                                 {t('Cancel')}
                              </Button>
                           </DialogClose>
                           <Button
                              className='cursor-pointer flex-1'
                              type='submit'
                              animated
                           >
                              {t('AddItem')}
                           </Button>
                        </DialogFooter>
                     </form>
                  </DialogContent>
               </Dialog>

               <div className='relative w-fit'>
                  <Input
                     type='text'
                     placeholder={t('SearchOrder')}
                     className='pl-10'
                  />
                  <Search
                     size={18}
                     strokeWidth={2}
                     className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                  />
               </div>
            </div>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-6'>
            {Array.from({ length: 30 }).map((_, i) => (
               <OrderItem key={i} />
            ))}
         </div>
      </section>
   );
}
