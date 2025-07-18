'use client';

import { cn } from '@/_lib/utils';
import { Badge } from '@/_shared/components/ui/badge';
import { Button } from '@/_shared/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/_shared/components/ui/card';
import { Separator } from '@/_shared/components/ui/separator';
import { Routes } from '@/_shared/routes/routes';
import { InputSearch } from '@/modules/menu/input-search-item';
import { Minus, Plus, SquareArrowLeft, Trash2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

interface TOrderItems {
   id: string;
   item: string;
   price: number;
   quantity: number;
}

interface TMenuItems {
   id: string;
   item: string;
   price: number;
}

export function OrderCardDetail() {
   const [orderItems, setOrderItems] = useState<TOrderItems[]>([]);
   const params = useParams();
   const id = params?.order;
   const t = useTranslations();

   const orders = [
      {
         id: '1',
         name: 'Marlon',
         number: '10',
         status: 'free',
         description: '',
      },
      {
         id: '2',
         name: 'Fulano',
         number: '75',
         status: 'busy',
         description: '',
      },
   ];

   const menuItems = [
      { id: '1', item: 'Batata frita', price: 15 },
      { id: '2', item: 'Hamburguer', price: 25 },
   ];

   const order = orders.find((order) => order.id === id);

   const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

   function increment(itemId: string) {
      setOrderItems((prev) =>
         prev.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item))
      );
   }

   function decrement(itemId: string) {
      setOrderItems((prev) =>
         prev
            .map((item) => (item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item))
            .filter((item) => item.quantity > 0)
      );
   }

   function removeItem(itemId: string) {
      setOrderItems((prev) => prev.filter((item) => item.id !== itemId));
   }

   function addToPedido(menuItems: TMenuItems) {
      setOrderItems((prev) => {
         const existingItem = prev.find((item) => item.id === menuItems.id);
         if (existingItem) {
            return prev.map((item) => (item.id === menuItems.id ? { ...item, quantity: item.quantity + 1 } : item));
         } else {
            return [...prev, { ...menuItems, quantity: 1 }];
         }
      });
   }

   return (
      <section className='p-6 w-full h-full flex gap-6'>
         {orderItems.length === 0 ? null : (
            <Card className='w-full flex flex-col h-[84vh]'>
               <CardHeader className='flex items-center justify-between h-6'>
                  <div className='flex items-start gap-5'>
                     <Link href={Routes.Order}>
                        <SquareArrowLeft className='text-gray-500' />
                     </Link>
                     <p className='font-medium text-gray-400'>
                        Cliente: <span className='font-bold text-gray-700'>{order?.name}</span>
                     </p>
                     <p className='font-medium text-gray-400'>
                        Comanda: <span className='font-bold text-gray-700'>{order?.number}</span>
                     </p>
                  </div>
                  <Badge className={cn(order?.status === 'busy' ? 'bg-red-500' : 'bg-emerald-500')}>
                     {order?.status === 'busy' ? t('Busy') : t('Free')}
                  </Badge>
               </CardHeader>
               <Separator className='-mb-6' />
               <CardContent className='flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden py-5'>
                  {orderItems.map((orderItem) => (
                     <div
                        className='flex items-center justify-between border p-2 px-4 rounded-md mt-2'
                        key={orderItem.id}
                     >
                        <div>
                           <p>{orderItem.item}</p>
                           <span>{orderItem.price}</span>
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
                              <span>R$ {(orderItem.price * orderItem.quantity).toFixed(2)}</span>
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
               <Separator className='-mt-6 -mb-6' />
               <CardFooter className='w-full'>
                  <div className='flex flex-col gap-3 mt-3 w-full'>
                     <div className='flex items-center justify-between text-xl font-medium text-gray-700'>
                        <span>Subtotal:</span>
                        <span>R$ {subtotal}</span>
                     </div>
                     <Button
                        className='cursor-pointer'
                        animated
                     >
                        Fechar conta
                     </Button>
                  </div>
               </CardFooter>
            </Card>
         )}
         <Card className='w-full flex flex-col h-[84vh] pb-0'>
            <CardHeader className='flex items-center justify-between h-6'>
               <CardTitle>Cardápio</CardTitle>
               <InputSearch />
            </CardHeader>
            <Separator className='-mb-6' />
            <CardContent className='flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden pb-3 pt-1'>
               {menuItems.map((menuItem) => (
                  <div
                     className='flex items-center justify-between border p-2 px-4 rounded-md mt-2'
                     key={menuItem.id}
                  >
                     <div>
                        <p>{menuItem.item}</p>
                        <span>R$ {menuItem.price}</span>
                     </div>
                     <div className='flex items-center gap-2'>
                        <Button
                           animated
                           className='cursor-pointer'
                           size='icon'
                           variant='default'
                           onClick={() => addToPedido(menuItem)}
                        >
                           <Plus />
                        </Button>
                     </div>
                  </div>
               ))}
            </CardContent>
         </Card>
      </section>
   );
}
