'use client';

import { Button } from '@/_shared/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/_shared/components/ui/dialog';
import { Input } from '@/_shared/components/ui/input';
import { Textarea } from '@/_shared/components/ui/textarea';
import { Plus, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { OrderItem } from '../order/order-item';
import { useForm } from 'react-hook-form';
import { FormStockSchema, StockSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';

export function Stock() {
   const t = useTranslations();

   const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors, isValid },
   } = useForm<FormStockSchema>({
      resolver: zodResolver(StockSchema()),
   });

   const itemdescription = watch('itemdescription');

   function handleSendFormStock(data: FormStockSchema) {
      console.log('Form enviado!', data);
      reset();
   }

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
                        className='space-y-4'
                        onSubmit={handleSubmit(handleSendFormStock)}
                     >
                        <DialogHeader>
                           <DialogTitle>{t('AddItemToStock')}</DialogTitle>
                        </DialogHeader>

                        <div>
                           <Input
                              type='text'
                              placeholder={t('ItemName')}
                              {...register('itemname')}
                           />
                           {errors.itemname?.message && <p className='text-red-500 text-xs mt-1'>{errors.itemname.message}</p>}
                        </div>

                        <div>
                           <Input
                              type='text'
                              placeholder='Quantidade de item'
                              {...register('itemquantity')}
                           />
                           {errors.itemquantity?.message && <p className='text-red-500 text-xs mt-1'>{errors.itemquantity.message}</p>}
                        </div>

                        <div className='flex flex-col md:flex-row gap-2'>
                           <div className='w-full'>
                              <Input
                                 type='text'
                                 placeholder={t('PurchasePrice')}
                                 {...register('purchaseprice')}
                              />
                              {errors.purchaseprice?.message && <p className='text-red-500 text-xs mt-1'>{errors.purchaseprice.message}</p>}
                           </div>
                           <div className='w-full'>
                              <Input
                                 type='text'
                                 placeholder={t('SellingPrice')}
                                 {...register('sellingprice')}
                              />
                              {errors.sellingprice?.message && <p className='text-red-500 text-xs mt-1'>{errors.sellingprice.message}</p>}
                           </div>
                        </div>

                        <div className='flex gap-2'>
                           <div>
                              <Input
                                 type='text'
                                 placeholder='Estoque atual'
                                 {...register('currentstock')}
                              />
                              {errors.currentstock?.message && <p className='text-red-500 text-xs mt-1'>{errors.currentstock.message}</p>}
                           </div>
                           <div>
                              <Input
                                 type='text'
                                 placeholder='Estoque mínimo'
                                 {...register('minimumstock')}
                              />
                              {errors.minimumstock?.message && <p className='text-red-500 text-xs mt-1'>{errors.minimumstock.message}</p>}
                           </div>
                           <div>
                              <Input
                                 type='text'
                                 placeholder='Estoque máximo'
                                 {...register('maximumstock')}
                              />
                              {errors.maximumstock?.message && <p className='text-red-500 text-xs mt-1'>{errors.maximumstock.message}</p>}
                           </div>
                        </div>

                        <div>
                           <Input
                              type='text'
                              placeholder='Fornecedor'
                              {...register('supplier')}
                           />
                           {errors.supplier?.message && <p className='text-red-500 text-xs mt-1'>{errors.supplier.message}</p>}
                        </div>

                        <div>
                           <Textarea
                              className='break-all'
                              placeholder={t('ItemDescription')}
                              {...register('itemdescription')}
                              maxLength={200}
                           />
                           {errors.itemdescription?.message && <p className='text-red-500 text-xs mt-1'>{errors.itemdescription.message}</p>}
                           <p className='text-right text-xs text-gray-400 mt-1'>{itemdescription?.length || 0}/200</p>
                        </div>

                        <DialogFooter className='!flex lg!flex-col'>
                           <DialogClose asChild>
                              <Button
                                 className='cursor-pointer flex-1'
                                 type='button'
                                 variant='outline'
                              >
                                 {t('Cancel')}
                              </Button>
                           </DialogClose>
                           <DialogClose asChild>
                              <Button
                                 className='cursor-pointer flex-1'
                                 type='submit'
                                 animated
                                 disabled={!isValid}
                              >
                                 {t('AddItem')}
                              </Button>
                           </DialogClose>
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
