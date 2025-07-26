'use client';

import { menuItems } from '@/_shared/data-mock';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useOrders } from '@/hooks/useOrders';
import { TOrderItems } from '../../interface';
import { OrderCardDetail } from './order-card-detail';
import { OrderCardMenu } from './order-card-menu';

export function OrderCard() {
   const [orderItems, setOrderItems] = useState<TOrderItems[]>([]);
   const params = useParams();
   const { data: orders } = useOrders();

   const orderId = params?.order ? Number(params.order) : null;
   const order = orders?.find((order) => order.id === orderId);

   const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

   function removeItem(itemId: number, observation?: string) {
      setOrderItems((prev) => prev.filter((item) => !(item.id === itemId && item.observation === observation)));
   }

   function handleAddOrder(menuItem: TOrderItems & { observation?: string }) {
      setOrderItems((prev) => {
         const existingItem = prev.find(
            (item) => item.id === menuItem.id && item.observation?.trim() === menuItem.observation?.trim()
         );

         if (existingItem) {
            return prev.map((item) =>
               item.id === menuItem.id && item.observation?.trim() === menuItem.observation?.trim()
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
            );
         } else {
            return [...prev, { ...menuItem, quantity: 1 }];
         }
      });
   }

   function clearItems() {
      setOrderItems([]);
   }

   return (
      <section className='md:p-6 p-2 w-full h-full flex gap-6 select-none flex-col md:flex-row'>
         <OrderCardDetail
            order={order}
            orderItems={orderItems}
            subtotal={subtotal}
            removeItem={removeItem}
            clearItems={clearItems}
         />
         <OrderCardMenu
            handleAddOrder={handleAddOrder}
            menuItems={menuItems}
         />
      </section>
   );
}
