import { Dialog } from '@/_shared/components/ui/dialog';
import { Input } from '@/_shared/components/ui/input';
import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { AddItemAction } from './components/add-item-action';
import { FormAddItem } from './form-add-item';

export function Menu() {
   const t = useTranslations();

   return (
      <section className='flex flex-col select-none'>
         <div className='flex items-center justify-between sticky top-[61px] w-full p-6 bg-white'>
            <div className='flex gap-6 flex-col md:flex-row'>
               <Dialog>
                  <AddItemAction />

                  <FormAddItem />
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
      </section>
   );
}
