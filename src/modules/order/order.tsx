'use client';

import { Dialog } from '@/_shared/components/ui/dialog';
import { useState } from 'react';
import { ButtonOpenDialogAddNewOrder } from './form/components/button-open-dialog-add-new-order';
import { InputOrderSearch } from './form/components/input-order-search';
import { FormCreateNewOrder } from './form/form-create-new-order';
import { OrderCardItem } from './order-card-item';

export function Order() {
   const [open, setOpen] = useState(false);

   function handleCloseDialog() {
      setOpen(false);
   }

   return (
      <section className='flex flex-col select-none'>
         <div className='flex items-center justify-between sticky top-[61px] w-full p-6 bg-white'>
            <div className='flex gap-6 flex-col md:flex-row'>
               <Dialog
                  open={open}
                  onOpenChange={setOpen}
               >
                  <ButtonOpenDialogAddNewOrder />
                  <FormCreateNewOrder handleCloseDialog={handleCloseDialog} />
               </Dialog>
               <InputOrderSearch />
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
