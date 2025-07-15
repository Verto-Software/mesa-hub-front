import { Dialog } from '@/_shared/components/ui/dialog';
import { ButtonOpenDialogAddStock } from './form/components/button-open-dialog-add-stock';
import { InputSearchItem } from './input-search-item';
import { FormAddItemStock } from './form/form-add-item-stock';

export function Stock() {
   return (
      <section className='flex flex-col select-none'>
         <div className='flex items-center justify-between sticky top-[61px] w-full p-6 bg-white'>
            <div className='flex gap-6 flex-col md:flex-row'>
               <Dialog>
                  <ButtonOpenDialogAddStock />
                  <FormAddItemStock />
               </Dialog>
               <InputSearchItem />
            </div>
         </div>
      </section>
   );
}
