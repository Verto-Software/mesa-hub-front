import { Button } from '@/_shared/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/_shared/components/ui/card';
import { Separator } from '@/_shared/components/ui/separator';
import { Plus } from 'lucide-react';
import { InputSearchOrder } from '../../input-search-order';
import { TOrderCardMenu } from '../../interface';

export function OrderCardMenu({ menuItems, handleAddOrder }: TOrderCardMenu) {
   return (
      <Card className='w-full flex flex-col h-[84vh] pb-0 '>
         <CardHeader className='flex items-center justify-between h-6'>
            <CardTitle className='text-gray-500'>Cardápio</CardTitle>
            <InputSearchOrder />
         </CardHeader>
         <Separator className='-mb-6' />
         <CardContent className='flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden pb-3 pt-1 px-2'>
            {menuItems.map((menuItem) => (
               <div
                  className='flex items-center justify-between border p-2 px-3 rounded-md mt-2 hover:bg-gray-50'
                  key={menuItem.id}
               >
                  <div>
                     <p>{menuItem.item}</p>
                     <span>
                        {menuItem.price.toLocaleString('pt-BR', {
                           style: 'currency',
                           currency: 'BRL',
                        })}
                     </span>
                  </div>
                  <div className='flex items-center gap-2'>
                     <Button
                        animated
                        className='cursor-pointer'
                        size='icon'
                        variant='default'
                        onClick={() => handleAddOrder(menuItem)}
                     >
                        <Plus />
                     </Button>
                  </div>
               </div>
            ))}
         </CardContent>
      </Card>
   );
}
