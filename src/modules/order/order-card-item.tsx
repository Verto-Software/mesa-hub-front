'use client';

import { cn } from '@/_lib/utils';
import { Badge } from '@/_shared/components/ui/badge';
import { Card, CardContent, CardDescription } from '@/_shared/components/ui/card';
import { useTranslations } from 'next-intl';

export function OrderCardItem() {
   const t = useTranslations();

   const cards = [
      {
         id: '1',
         name: 'Marlon',
         number: '10',
         description: '',
         status: 'free',
      },
      {
         id: '2',
         name: 'Elvis',
         number: '75',
         description: '',
         status: 'busy',
      },
      {
         id: '3',
         name: 'Superman',
         number: '132',
         description: '',
         status: 'busy',
      },
      {
         id: '4',
         name: 'Virginia',
         number: '102',
         description: '',
         status: 'free',
      },
      {
         id: '5',
         name: 'Homem Aranha',
         number: '3',
         description: '',
         status: 'busy',
      },
      {
         id: '6',
         name: 'Pantera',
         number: '47',
         description: '',
         status: 'free',
      },
      {
         id: '7',
         name: 'Batman',
         number: '88',
         description: '',
         status: 'busy',
      },
      {
         id: '8',
         name: 'Mulher Maravilha',
         number: '21',
         description: '',
         status: 'busy',
      },
      {
         id: '9',
         name: 'Flash',
         number: '156',
         description:
            'Perferendis adipisci rem ipsam nesciunt facilis iste aliquid, hic obcaecati accusamus officia, necessitatibus reprehenderit delectus incidunt quod, soluta molestias commodi? ',
         status: 'free',
      },
      {
         id: '10',
         name: 'Aquaman',
         number: '94',
         description: '',
         status: 'busy',
      },
      {
         id: '11',
         name: 'Lanterna Verde',
         number: '67',
         description: '',
         status: 'free',
      },
      {
         id: '12',
         name: 'Capitão América',
         number: '15',
         description: '',
         status: 'free',
      },
      {
         id: '13',
         name: 'Homem de Ferro',
         number: '203',
         description: '',
         status: 'busy',
      },
      {
         id: '14',
         name: 'Thor',
         number: '81',
         description: '',
         status: 'free',
      },
      {
         id: '15',
         name: 'Hulk',
         number: '42',
         description: '',
         status: 'busy',
      },
      {
         id: '16',
         name: 'Viúva Negra',
         number: '178',
         description: '',
         status: 'free',
      },
      {
         id: '17',
         name: 'Gavião Arqueiro',
         number: '29',
         description: '',
         status: 'free',
      },
      {
         id: '18',
         name: 'Doutor Estranho',
         number: '114',
         description: '',
         status: 'busy',
      },
      {
         id: '19',
         name: 'Capitã Marvel',
         number: '63',
         description: '',
         status: 'free',
      },
      {
         id: '20',
         name: 'Wolverine',
         number: '97',
         description: '',
         status: 'free',
      },
   ];

   return (
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-6'>
         {cards.map((card) => (
            <Card
               className={cn(
                  card.status === 'busy' ? 'bg-red-50' : 'bg-emerald-50',
                  'cursor-pointer select-none active:scale-[0.99] active:brightness-100 hover:scale-105 transition-transform duration-300 mt-1'
               )}
               role='button'
               tabIndex={0}
               onClick={() => console.log('Clicou')}
            >
               <CardContent key={card.id}>
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
