'use client';

import { cn } from '@/_lib/utils';
import { Badge } from '@/_shared/components/ui/badge';
import { Card, CardContent, CardDescription } from '@/_shared/components/ui/card';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export function OrderCardItem() {
   const t = useTranslations();
   const router = useRouter();

   const cards = [
      {
         id: '1',
         name: 'Marlon',
         number: '10',
         status: 'free',
         description: '',
      },
      {
         id: '2',
         name: 'Homem Aranha',
         number: '75',
         status: 'busy',
         description: '',
      },
   ];

   function handleCardDetail(id: string) {
      router.push(`/order/${id}`);
   }

   return (
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6'>
         {cards.map((card) => (
            <Card
               key={card.id}
               className={cn(
                  card.status === 'busy' ? 'bg-red-50' : 'bg-emerald-50',
                  'cursor-pointer select-none active:scale-[0.99] active:brightness-100 hover:scale-105 transition-transform duration-300 mt-1'
               )}
               role='button'
               tabIndex={0}
               onClick={() => handleCardDetail(card.id)}
            >
               <CardContent>
                  <div className='flex items-center justify-between'>
                     <p className='text-xl font-medium'>{card.number}</p>
                     <Badge className={cn(card.status === 'busy' ? 'bg-red-500' : 'bg-emerald-500')}>
                        {card.status === 'busy' ? t('Busy') : t('Free')}
                     </Badge>
                  </div>
                  <p className='text-xl font-medium mt-3'>{card.name}</p>
                  <CardDescription>
                     <p>{card.description}</p>
                  </CardDescription>
               </CardContent>
            </Card>
         ))}
      </div>
   );
}
