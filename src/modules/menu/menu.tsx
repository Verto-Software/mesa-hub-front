'use client';

import { Dialog } from '@/_shared/components/ui/dialog';
import { useState } from 'react';
import { ButtonOpenDialogAddItem } from './form/components/button-open-dialog-add-item';
import { FormAddItemMenu } from './form/form-add-item-menu';
import { InputSearch } from './input-search-item';

export function Menu() {
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
                  <ButtonOpenDialogAddItem />
                  <FormAddItemMenu handleCloseDialog={handleCloseDialog} />
               </Dialog>

               <InputSearch />
            </div>
         </div>
      </section>
   );
}
