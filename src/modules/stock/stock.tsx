import { Button } from '@/_shared/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/_shared/components/ui/dialog';
import { Input } from '@/_shared/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/_shared/components/ui/select';
import { Textarea } from '@/_shared/components/ui/textarea';
import { Plus, Search, Upload } from 'lucide-react';
import { register } from 'module';
import { useTranslations } from 'next-intl';
import { OrderItem } from '../order/order-item';

export function Stock() {
   const t = useTranslations();

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
                     <form className='space-y-4'>
                        <DialogHeader>
                           <DialogTitle>{t('AddItemToStock')}</DialogTitle>
                        </DialogHeader>

                        <Input
                           type='text'
                           placeholder={t('ItemName')}
                        />

                        <Input
                           type='text'
                           placeholder='Quantidade de item'
                        />

                        <div className='flex flex-col md:flex-row gap-2'>
                           <Input
                              type='text'
                              placeholder={t('PurchasePrice')}
                           />
                           <Input
                              type='text'
                              placeholder={t('SellingPrice')}
                           />
                        </div>

                        <div className='flex gap-2'>
                           <Input
                              type='text'
                              placeholder='Estoque atual'
                           />
                           <Input
                              type='text'
                              placeholder='Estoque mínimo'
                           />
                           <Input
                              type='text'
                              placeholder='Estoque máximo'
                           />
                        </div>

                        <Input
                           type='text'
                           placeholder='Fornecedor'
                        />

                        <div>
                           <Textarea
                              className='break-all'
                              placeholder={t('ItemDescription')}
                              maxLength={200}
                           />
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
