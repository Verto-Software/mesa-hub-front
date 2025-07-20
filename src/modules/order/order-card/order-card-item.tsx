'use client';

import { cn } from '@/_lib/utils';
import { Badge } from '@/_shared/components/ui/badge';
import { Card, CardContent, CardDescription } from '@/_shared/components/ui/card';
import { orders } from '@/_shared/data-mock';
import { Routes } from '@/_shared/routes/routes';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export function OrderCardItem() {
   const t = useTranslations();
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
                  className={cn(
                     order ? 'bg-emerald-50' : 'bg-red-50',
                     'cursor-pointer select-none active:scale-[0.99] active:brightness-100 hover:scale-105 transition-transform duration-300 mt-1'
                  )}
                  role='button'
                  tabIndex={0}
                  onClick={() => handleCardDetail(order.id)}
               >
                  <CardContent>
                     <div className='flex items-center justify-between'>
                        <p className='text-xl font-medium'>{order.number}</p>
                        <Badge className={cn(order ? 'bg-emerald-500' : 'bg-red-500')}>
                           {order ? t('Free') : t('Busy')}
                        </Badge>
                     </div>
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
