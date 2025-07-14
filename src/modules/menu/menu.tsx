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

const itemSchema = z.object({
   name: z.string().min(1, 'Nome é obrigatório'),
   category: z.string().min(1, 'Categoria é obrigatória'),
   description: z.string().max(200, 'Máximo 200 caracteres'),
   purchasePrice: z.string().min(1, 'Preço de compra é obrigatório'),
   salePrice: z.string().min(1, 'Preço de venda é obrigatório'),
   image: z.any().optional(),
});

type ItemFormData = z.infer<typeof itemSchema>;

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
   } = useForm<ItemFormData>({
      resolver: zodResolver(itemSchema),
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

   const handleAddItem = (data: ItemFormData) => {
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
                        className='space-y-5'
                     >
                        <DialogHeader>
                           <DialogTitle>Adicionar novo item</DialogTitle>
                        </DialogHeader>

                        <div className='flex gap-2'>
                           <div>
                              <Input
                                 className={errors.name?.message ? 'border-red-500' : ''}
                                 placeholder='Nome do item'
                                 {...register('name')}
                              />
                              {errors.name?.message && <p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>}
                           </div>

                           <div>
                              <Controller
                                 name='category'
                                 control={control}
                                 rules={{ required: 'Categoria é obrigatória' }}
                                 render={({ field, fieldState }) => (
                                    <>
                                       <Select
                                          onValueChange={field.onChange}
                                          value={field.value}
                                       >
                                          <SelectTrigger className={errors.category?.message ? 'border-red-500' : ''}>
                                             <SelectValue placeholder='Categoria' />
                                          </SelectTrigger>
                                          <SelectContent>
                                             <SelectItem value='drink'>Bebida</SelectItem>
                                             <SelectItem value='desserts'>Sobremesas</SelectItem>
                                             <SelectItem value='food'>Comidas</SelectItem>
                                          </SelectContent>
                                       </Select>
                                       {fieldState.error?.message && <p className='text-red-500 text-xs mt-1'>{fieldState.error.message}</p>}
                                    </>
                                 )}
                              />
                           </div>
                        </div>

                        <div>
                           <Textarea
                              placeholder='Descrição do item'
                              maxLength={200}
                              {...register('description')}
                           />
                           <p className='text-right text-xs text-gray-400 mt-1'>{description?.length || 0}/200</p>
                        </div>

                        <div className='space-y-2'>
                           <div className='border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors border-gray-300 hover:border-gray-400'>
                              <Upload className='mx-auto h-8 w-8 text-gray-400 mb-2' />
                              <p className='text-sm text-gray-600'>Clique para adicionar uma imagem</p>
                              <p className='text-xs text-gray-400 mt-1'>PNG, JPG até 5MB</p>
                           </div>
                           <input
                              className='hidden'
                              type='file'
                              accept='image/jpeg,image/jpg,image/png'
                              {...register('image')}
                           />
                        </div>

                        <div className='flex gap-2'>
                           <div className='flex w-full flex-col gap-1'>
                              <Label htmlFor='purchasePrice'>Preço de compra</Label>
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

                           <div className='flex w-full flex-col gap-1'>
                              <Label htmlFor='salePrice'>Preço de venda</Label>
                              <Input
                                 className={errors.salePrice?.message ? 'border-red-500' : ''}
                                 id='salePrice'
                                 type='text'
                                 placeholder='R$ 0,00'
                                 {...register('salePrice')}
                                 value={salePrice}
                                 onChange={(e) => handlePriceChange('salePrice', e.target.value)}
                              />
                              {errors.salePrice?.message && <p className='text-red-500 text-xs'>{errors.salePrice.message}</p>}
                           </div>
                        </div>

                        <DialogFooter>
                           <DialogClose asChild>
                              <Button
                                 className='cursor-pointer'
                                 type='button'
                                 variant='outline'
                                 onClick={() => reset()}
                              >
                                 Cancelar
                              </Button>
                           </DialogClose>
                           <Button
                              className='cursor-pointer'
                              type='submit'
                              animated
                           >
                              Adicionar novo item
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
