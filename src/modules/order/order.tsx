'use client';

import { Button } from '@/_shared/components/ui/button';
import { Plus, Search } from 'lucide-react';
import { OrderItem } from './order-item';
import { useTranslations } from 'next-intl';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/_shared/components/ui/dialog';
import { Input } from '@/_shared/components/ui/input';
import { Textarea } from '@/_shared/components/ui/textarea';
import { useState } from 'react';

export function Order() {
   const t = useTranslations();
   const [typedLetters, setTypedLetters] = useState('');

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
                        {t('NewOrder')}
                     </Button>
                  </DialogTrigger>

                  <DialogContent className='select-none'>
                     <form className='space-y-4'>
                        <DialogHeader>
                           <DialogTitle>{t('AddNewOrder')}</DialogTitle>
                        </DialogHeader>

                        <div className='flex gap-2 flex-col md:flex-row'>
                           <Input
                              type='number'
                              placeholder={t('OrderNumber')}
                              min={0}
                           />
                           <Input
                              type='text'
                              className='break-words'
                              placeholder={t('OrderName')}
                           />
                        </div>

                        <div>
                           <Textarea
                              className='break-all'
                              placeholder={t('ObservationOfTheOrder')}
                              maxLength={200}
                              value={typedLetters}
                              onChange={(e) => setTypedLetters(e.target.value)}
                           />
                           <p className='text-right text-xs text-gray-400 mt-1'>
                              {typedLetters.length}/{200}
                           </p>
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
                              {t('CreateOrder')}
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
