'use client';

import { Card, CardContent, CardDescription } from '@/_shared/components/ui/card';
import { Routes } from '@/_shared/routes/routes';
import { useOrders } from '@/hooks/useOrders';
import { Hash, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function OrderCardItem() {
   const router = useRouter();
   const { data: orders } = useOrders();

   function handleCardDetail(id: number) {
      router.push(`${Routes.Order}/${id}`);
   }

   return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-6'>
         {orders
            ?.sort((a, b) => Number(a.number) - Number(b.number))
            .map((order) => {
               return (
                  <Card
                     key={order.id}
                     className='cursor-pointer select-none active:scale-[0.99] hover:-translate-y-0.8 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 mt-0.5'
                     role='button'
                     tabIndex={0}
                     onClick={() => handleCardDetail(order.id)}
                  >
                     <CardContent>
                        <div className='flex items-center w-full justify-between flex-wrap'>
                           <p className='text-md font-medium flex items-center gap-2'>
                              <Hash
                                 size={14}
                                 className='text-gray-500 hover: group-hover:text-white'
                              />
                              {order.number}
                           </p>
                           <p className='text-md font-medium flex items-center gap-1'>
                              <User
                                 size={18}
                                 className='text-gray-500 hover: group-hover:text-white'
                              />
                              {order.name}
                           </p>
                        </div>
                        {order.description && (
                           <CardDescription className='mt-3 group-hover:text-white '>
                              <p className='break-words whitespace-normal'>{order.description}</p>
                           </CardDescription>
                        )}
                     </CardContent>
                  </Card>
               );
            })}
      </div>
   );
}
