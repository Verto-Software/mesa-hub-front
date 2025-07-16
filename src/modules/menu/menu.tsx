'use client';

import { Dialog } from '@/_shared/components/ui/dialog';
import { useState } from 'react';
import { ButtonViewMenu } from './button-view-menu';
import { ButtonOpenDialogAddItem } from './form/components/button-open-dialog-add-item';
import { FormAddItemMenu } from './form/form-add-item-menu';
import { InputSearch } from './input-search-item';
import { TableItems } from './table/table-items';

export function Menu() {
   const [open, setOpen] = useState(false);

   function handleCloseDialog() {
      setOpen(false);
   }

   return (
      <section className='flex flex-col select-none'>
         <div className='flex items-center justify-between sticky top-[77px] w-full p-6 bg-white z-10'>
            <div className='flex gap-6 flex-col md:flex-row '>
               <Dialog
                  open={open}
                  onOpenChange={setOpen}
               >
                  <ButtonOpenDialogAddItem />
                  <FormAddItemMenu handleCloseDialog={handleCloseDialog} />
               </Dialog>
            </div>
            <div className='flex gap-3'>
               <InputSearch />
               <ButtonViewMenu />
            </div>
         </div>
         <TableItems />
      </section>
   );
}
