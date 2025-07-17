'use client';

import { Dialog } from '@/_shared/components/ui/dialog';
import { useState } from 'react';
import { ButtonOpenDialogAddNewOrder } from './form/components/button-open-dialog-add-new-order';
import { InputSearchOrder } from './input-search-order';
import { FormCreateNewOrder } from './form/form-create-new-order';
import { OrderCardItem } from './order-card/order-card-item';

export function Order() {
   const [open, setOpen] = useState(false);

   function handleCloseDialog() {
      setOpen(false);
   }

   return (
      <section className='flex flex-col select-none'>
         <div className='flex items-center justify-between sticky top-[77px] w-full p-6 bg-white z-10'>
            <div className='flex gap-6 flex-col md:flex-row'>
               <Dialog
                  open={open}
                  onOpenChange={setOpen}
               >
                  <ButtonOpenDialogAddNewOrder />
                  <FormCreateNewOrder handleCloseDialog={handleCloseDialog} />
               </Dialog>
            </div>
            <InputSearchOrder />
         </div>

         <OrderCardItem />
      </section>
   );
}
