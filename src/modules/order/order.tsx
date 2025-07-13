'use client';

import { Button } from '@/_shared/components/ui/button';
import { Plus, Search } from 'lucide-react';
import { OrderItem } from './order-item';
import { useTranslations } from 'next-intl';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/_shared/components/ui/dialog';
import { Input } from '@/_shared/components/ui/input';

export function Order() {
   const t = useTranslations();

   return (
      <section className='flex flex-col select-none'>
         <div className='flex items-center justify-between sticky top-[61px] w-full p-6 bg-white'>
            <div className='flex gap-6'>
               <h1 className='text-2xl'>{t('Orders')}</h1>
               <Dialog>
                  <form>
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
                           {t('NewOrder')}
                        </Button>
                     </DialogTrigger>
                     <DialogContent className='select-none'>
                        <DialogHeader>
                           <DialogTitle>{t('AddNewOrder')}</DialogTitle>
                        </DialogHeader>
                        <div className='flex gap-2'>
                           <Input
                              type='number'
                              placeholder={t('OrderNumber')}
                              min={0}
                           />
                           <Input
                              type='text'
                              placeholder={t('OrderName')}
                           />
                        </div>
                        <Input
                           type='text'
                           placeholder={t('ObservationOfTheOrder')}
                        />
                        <DialogFooter>
                           <DialogClose asChild>
                              <Button
                                 className='cursor-pointer'
                                 variant='outline'
                              >
                                 {t('Cancel')}
                              </Button>
                           </DialogClose>
                           <Button
                              className='cursor-pointer'
                              type='submit'
                              animated
                           >
                              {t('CreateOrder')}
                           </Button>
                        </DialogFooter>
                     </DialogContent>
                  </form>
               </Dialog>
            </div>
            <div className='relative w-96'>
               <Input
                  type='text'
                  placeholder='Buscar comanda'
                  className='pl-10'
               />
               <Search
                  size={18}
                  strokeWidth={2}
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
               />
            </div>
         </div>

         <div className='grid grid-cols-4 gap-6 px-6 pb-6'>
            {Array.from({ length: 30 }).map((_, i) => (
               <OrderItem key={i} />
            ))}
         </div>
      </section>
   );
}
