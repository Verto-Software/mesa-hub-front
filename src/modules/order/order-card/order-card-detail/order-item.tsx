import { Button } from '@/_shared/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';

export function OrderItem() {
   return (
      <div className='flex items-center justify-between border p-2 px-4 rounded-md mt-3'>
         <div>
            <p>Batata Frita</p>
            <span>R$ 15,90</span>
         </div>
         <div className='flex gap-8'>
            <div className='flex items-center gap-4'>
               <Button
                  animated
                  className='cursor-pointer'
                  size='icon'
                  variant='secondary'
               >
                  <Minus />
               </Button>
               <span>1</span>
               <Button
                  animated
                  className='cursor-pointer'
                  size='icon'
                  variant='secondary'
               >
                  <Plus />
               </Button>
            </div>
            <div className='flex items-center gap-4'>
               <span>R$ 15,90</span>
               <Button
                  className='cursor-pointer'
                  size='icon'
                  variant='ghost'
                  animated
               >
                  <Trash2 size={16} />
               </Button>
            </div>
         </div>
      </div>
   );
}
