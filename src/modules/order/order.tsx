'use client';

import { Button } from '@/_shared/components/ui/button';
import { Plus } from 'lucide-react';
import { OrderItem } from './order-item';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/_shared/components/ui/dialog';
import { Input } from '@/_shared/components/ui/input';

export function Order() {
   const t = useTranslations();

   return (
      <>
         <section className='flex flex-col select-none'>
            <div className='flex items-center justify-between sticky top-[61px] w-full p-6 bg-white'>
               <h1 className='text-2xl'>{t('Orders')}</h1>
               <Dialog>
                  <form>
                     <DialogTrigger asChild>
                        <Button className='cursor-pointer'>
                           <Plus
                              size={15}
                              strokeWidth={2}
                           />
                           {t('NewOrder')}
                        </Button>
                     </DialogTrigger>
                     <DialogContent>
                        <DialogHeader>
                           <DialogTitle>Adicionar nova comanda</DialogTitle>
                        </DialogHeader>
                        <div className='flex gap-2'>
                           <Input
                              type='number'
                              placeholder='Número da comanda'
                           />
                           <Input
                              type='text'
                              placeholder='Nome da comanda'
                           />
                        </div>
                        <Input
                           type='text'
                           placeholder='Observação da comanda'
                        />
                        <DialogFooter>
                           <DialogClose asChild>
                              <Button
                                 className='cursor-pointer'
                                 variant='outline'
                              >
                                 Cancelar
                              </Button>
                           </DialogClose>
                           <Button
                              className='cursor-pointer'
                              type='submit'
                              animated
                           >
                              Criar comanda
                           </Button>
                        </DialogFooter>
                     </DialogContent>
                  </form>
               </Dialog>
            </div>

            <div className='grid grid-cols-4 gap-6 px-6 pb-6'>
               {Array.from({ length: 30 }).map((_, i) => (
                  <OrderItem key={i} />
               ))}
            </div>
         </section>
      </>
   );
}
