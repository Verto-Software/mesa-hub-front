'use client';

import { Dialog, DialogContent } from '@/_shared/components/ui/dialog';
import { useState } from 'react';
import { NewOrderAction } from './form/components/new-order-action';
import { FormOrder } from './form/form-order';
import { InputSearch } from './form/components/input-search';
import { OrderCardItem } from './form/components/order-card-item';

export function Order() {
   const [open, setOpen] = useState(false);

   return (
      <section className='flex flex-col select-none'>
         <div className='flex items-center justify-between sticky top-[61px] w-full p-6 bg-white'>
            <div className='flex gap-6 flex-col md:flex-row'>
               <Dialog
                  open={open}
                  onOpenChange={setOpen}
               >
                  <NewOrderAction />
                  <FormOrder onSuccess={() => setOpen(false)} />
               </Dialog>
               <InputSearch />
            </div>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-6'>
            {Array.from({ length: 20 }).map((_, i) => (
               <OrderCardItem key={i} />
            ))}
         </div>
      </section>
   );
}
