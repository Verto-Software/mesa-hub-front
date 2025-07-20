'use client';

import { cn } from '@/_lib/utils';
import { Badge } from '@/_shared/components/ui/badge';
import { Button } from '@/_shared/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/_shared/components/ui/card';
import { Separator } from '@/_shared/components/ui/separator';
import { Routes } from '@/_shared/routes/routes';
import { Hash, Minus, Plus, SquareArrowLeft, Trash2, User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { TOrderCard } from '../../interface';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/_shared/components/ui/dialog';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function OrderCardDetail({
   orderItems,
   order,
   decrement,
   increment,
   removeItem,
   subtotal,
   clearItems,
}: TOrderCard) {
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const t = useTranslations();
   const { push } = useRouter();

   function handleOpenDialog() {
      setIsDialogOpen(true);
   }

   function handleCloseDialog() {
      setIsDialogOpen(false);
   }

   function confirmCloseOrder() {
      clearItems();
      setIsDialogOpen(false);
      push(Routes.Order);
   }

   return (
      <>
         <Card className='w-full flex flex-col md:h-[84vh] h-[50vh]'>
            <CardHeader className='flex items-center justify-between h-6 w-full'>
               <Link
                  href={Routes.Order}
                  className='text-gray-500 flex gap-3 border rounded-sm p-2 hover:bg-gray-50 font-bold hover:text-primary'
               >
                  <SquareArrowLeft />
                  Voltar
               </Link>
               <div className='flex gap-4'>
                  <p className='text-xl font-medium flex items-center gap-1'>
                     <User
                        size={18}
                        className='text-primary hover: group-hover:text-white'
                     />
                     {order?.name}
                  </p>
                  <p className='text-xl font-medium flex items-center gap-1'>
                     <Hash
                        size={14}
                        className='text-primary hover: group-hover:text-white'
                     />
                     {order?.number}
                  </p>
               </div>
            </CardHeader>
            <Separator className='-mb-6' />
            {orderItems?.length === 0 ? (
               <p className='flex items-center justify-center flex-1 text-gray-500 text-lg'>Não possui pedido</p>
            ) : (
               <CardContent className='flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden pb-3 pt-1 px-2'>
                  {orderItems?.map((orderItem) => (
                     <div
                        key={`${orderItem.id}-${orderItem.observation ?? ''}`}
                        className='flex items-center justify-between border p-2 px-3 rounded-md mt-2 hover:bg-gray-50'
                     >
                        <div>
                           <p className='font-medium'>{orderItem.item}</p>
                           <p className='flex items-center gap-1 text-emerald-500 font-medium'>
                              {orderItem.price.toLocaleString('pt-BR', {
                                 style: 'currency',
                                 currency: 'BRL',
                              })}{' '}
                              <span className=' text-sm font-medium text-gray-400'>cada</span>
                           </p>
                           {orderItem.observation && (
                              <p className='text-xs text-amber-500 font-semibold italic mt-1'>
                                 Obs: {orderItem.observation}
                              </p>
                           )}
                        </div>
                        <div className='flex gap-2'>
                           <div className='flex items-center gap-2'>
                              <Button
                                 animated
                                 className='cursor-pointer'
                                 size='icon'
                                 variant='secondary'
                                 onClick={() => decrement(orderItem.id)}
                              >
                                 <Minus />
                              </Button>
                              <span className='w-6 text-center'>{orderItem.quantity}</span>
                              <Button
                                 animated
                                 className='cursor-pointer'
                                 size='icon'
                                 variant='secondary'
                                 onClick={() => increment(orderItem.id)}
                              >
                                 <Plus />
                              </Button>
                           </div>
                           <div className='flex items-center justify-end gap-2 w-32'>
                              <span className='text-red-500 font-medium'>
                                 R$ {(orderItem.price * orderItem.quantity).toFixed(2)}
                              </span>
                              <Button
                                 className='cursor-pointer'
                                 size='icon'
                                 variant='ghost'
                                 animated
                                 onClick={() => removeItem(orderItem.id)}
                              >
                                 <Trash2 size={16} />
                              </Button>
                           </div>
                        </div>
                     </div>
                  ))}
               </CardContent>
            )}
            {orderItems.length === 0 ? null : (
               <>
                  <Separator className='-mt-6 -mb-6' />
                  <CardFooter className='w-full -mb-3'>
                     <div className='flex gap-3 mt-3 w-full'>
                        <div className='flex flex-row items-center gap-3 text-xl font-medium text-gray-700 w-full'>
                           <span className='text-gray-400'>Subtotal:</span>
                           <span className='text-emerald-500 font-bold'>R$ {subtotal}</span>
                        </div>
                        <Button
                           className='cursor-pointer'
                           animated
                           onClick={handleOpenDialog}
                        >
                           Fechar conta
                        </Button>
                     </div>
                  </CardFooter>
               </>
            )}
         </Card>

         <Dialog
            open={isDialogOpen}
            onOpenChange={setIsDialogOpen}
         >
            <DialogContent className='flex flex-col'>
               <DialogHeader>
                  <DialogTitle className='mt-5 leading-8'>
                     Deseja concluir o fechamento da conta do <span className='text-primary'>{order?.name}</span> da
                     comanda número <span className='text-primary'>{order?.number}</span>.
                  </DialogTitle>
               </DialogHeader>
               <DialogFooter>
                  <Button
                     className='cursor-pointer'
                     variant='secondary'
                     onClick={handleCloseDialog}
                     animated
                  >
                     Cancelar
                  </Button>
                  <Button
                     className='cursor-pointer'
                     onClick={confirmCloseOrder}
                     animated
                  >
                     Confirmar
                  </Button>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </>
   );
}
