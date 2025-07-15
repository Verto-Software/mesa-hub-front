import { Dialog, DialogContent } from '@/_shared/components/ui/dialog';
import { AddItemAction } from './form/components/add-item-action';
import { InputSearch } from './form/components/input-search';
import { FormAddStock } from './form/form-add-stock';

export function Stock() {
   return (
      <section className='flex flex-col select-none'>
         <div className='flex items-center justify-between sticky top-[61px] w-full p-6 bg-white'>
            <div className='flex gap-6 flex-col md:flex-row'>
               <Dialog>
                  <AddItemAction />
                  <DialogContent className='select-none'>
                     <FormAddStock />
                  </DialogContent>
               </Dialog>
               <InputSearch />
            </div>
         </div>
      </section>
   );
}
