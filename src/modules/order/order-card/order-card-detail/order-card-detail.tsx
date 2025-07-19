'use client';

import { Button } from '@/_shared/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/_shared/components/ui/card';
import { Separator } from '@/_shared/components/ui/separator';
import { InputSearch } from '@/modules/menu/input-search-item';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { TMenuItems, TOrder, TOrderItems } from '../../interface';
import { OrderCard } from './order-card';

export function OrderCardDetail() {
   const [orderItems, setOrderItems] = useState<TOrderItems[]>([]);
   const params = useParams();
   const id = params?.order;

   const orders: TOrder[] = [
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

   const menuItems: TMenuItems[] = [
      { id: '1', item: 'Batata frita', price: 15 },
      { id: '2', item: 'Hamburguer', price: 25 },
      { id: '3', item: 'Hamburguer', price: 25 },
      { id: '4', item: 'Hamburguer', price: 25 },
      { id: '5', item: 'Hamburguer', price: 25 },
      { id: '6', item: 'Hamburguer', price: 25 },
      { id: '7', item: 'Hamburguer', price: 25 },
      { id: '8', item: 'Hamburguer', price: 25 },
      { id: '9', item: 'Hamburguer', price: 25 },
      { id: '10', item: 'Hamburguer', price: 25 },
      { id: '11', item: 'Hamburguer', price: 25 },
      { id: '12', item: 'Hamburguer', price: 25 },
      { id: '13', item: 'Hamburguer', price: 25 },
      { id: '14', item: 'Hamburguer', price: 25 },
      { id: '15', item: 'Hamburguer', price: 25 },
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
         <OrderCard
            order={order}
            orderItems={orderItems}
            subtotal={subtotal}
            increment={increment}
            decrement={decrement}
            removeItem={removeItem}
         />
         <Card className='w-full flex flex-col h-[84vh] pb-0 '>
            <CardHeader className='flex items-center justify-between h-6'>
               <CardTitle className='text-gray-500'>Cardápio</CardTitle>
               <InputSearch />
            </CardHeader>
            <Separator className='-mb-6' />
            <CardContent className='flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden pb-3 pt-1'>
               {menuItems.map((menuItem) => (
                  <div
                     className='flex items-center justify-between border p-2 px-4 rounded-md mt-2 hover:bg-gray-50'
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
