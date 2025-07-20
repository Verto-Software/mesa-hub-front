import { Button } from '@/_shared/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/_shared/components/ui/card';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/_shared/components/ui/dialog';
import { Input } from '@/_shared/components/ui/input';
import { Separator } from '@/_shared/components/ui/separator';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { InputSearchOrder } from '../../input-search-order';
import { TOrderCardMenu, TOrderItems } from '../../interface';

export function OrderCardMenu({ menuItems, handleAddOrder }: TOrderCardMenu) {
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [selectedItem, setSelectedItem] = useState<TOrderItems | null>(null);
   const [observation, setObservation] = useState('');

   function openDialog(item: TOrderItems) {
      setSelectedItem(item);
      setIsDialogOpen(true);
   }

   function confirmAdd() {
      if (selectedItem) {
         handleAddOrder({ ...selectedItem, observation });
         setObservation('');
         setSelectedItem(null);
         setIsDialogOpen(false);
      }
   }

   return (
      <>
         <Card className='w-full flex flex-col h-[84vh] pb-0'>
            <CardHeader className='flex items-center justify-between h-6'>
               <CardTitle className='text-gray-500'>Cardápio</CardTitle>
               <InputSearchOrder />
            </CardHeader>
            <Separator className='-mb-6' />
            <CardContent className='flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden pb-3 pt-1 px-2'>
               {menuItems.map((menuItem) => (
                  <div
                     key={menuItem.id}
                     className='flex items-center justify-between border p-2 px-3 rounded-md mt-2 hover:bg-gray-50'
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
                     <Button
                        className='cursor-pointer'
                        onClick={() => openDialog(menuItem)}
                     >
                        <Plus />
                     </Button>
                  </div>
               ))}
            </CardContent>
         </Card>

         <Dialog
            open={isDialogOpen}
            onOpenChange={setIsDialogOpen}
         >
            <DialogContent>
               <DialogHeader>
                  <DialogTitle className='text-lg font-semibold text-gray-500'>Adicionar item ao pedido</DialogTitle>
               </DialogHeader>
               {selectedItem && (
                  <>
                     <div>
                        <p className='font-medium'>{selectedItem.item}</p>
                        <p className='text-sm text-gray-500'>
                           {selectedItem.price.toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                           })}
                        </p>
                     </div>
                     <Input
                        type='text'
                        placeholder='Observação'
                        value={observation}
                        onChange={(e) => setObservation(e.target.value)}
                     />
                     <DialogFooter className='flex justify-end gap-2'>
                        <Button
                           className='cursor-pointer'
                           variant='outline'
                           onClick={() => setIsDialogOpen(false)}
                           animated
                        >
                           Cancelar
                        </Button>
                        <Button
                           animated
                           className='cursor-pointer'
                           onClick={confirmAdd}
                        >
                           Adicionar
                        </Button>
                     </DialogFooter>
                  </>
               )}
            </DialogContent>
         </Dialog>
      </>
   );
}
