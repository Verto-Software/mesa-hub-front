'use client';

import { Card, CardContent, CardDescription } from '@/_shared/components/ui/card';
import { orders } from '@/_shared/data-mock';
import { Routes } from '@/_shared/routes/routes';
import { useRouter } from 'next/navigation';

export function OrderCardItem() {
   const router = useRouter();

   function handleCardDetail(id: string) {
      router.push(`${Routes.Order}/${id}`);
   }

   return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-6'>
         {orders.map((order) => {
            return (
               <Card
                  key={order.id}
                  className='cursor-pointer select-none active:scale-[0.99] active:brightness-100 hover:scale-105 transition-transform duration-300 mt-1 hover:bg-primary hover:text-white bg-secondary'
                  role='button'
                  tabIndex={0}
                  onClick={() => handleCardDetail(order.id)}
               >
                  <CardContent>
                     <p className='text-xl font-medium'>{order.number}</p>
                     <p className='text-xl font-medium mt-3'>{order.name}</p>
                     <CardDescription>
                        <p>{order.description}</p>
                     </CardDescription>
                  </CardContent>
               </Card>
            );
         })}
      </div>
   );
}
