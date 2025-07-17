import { cn } from '@/_lib/utils';
import { Badge } from '@/_shared/components/ui/badge';
import { Button } from '@/_shared/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/_shared/components/ui/card';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { OrderItem } from './order-item';

interface TOrderCardDetail {
   params: { id: string };
}

export function OrderCardDetail({ params }: TOrderCardDetail) {
   const { id } = params;
   const t = useTranslations();

   const orders = [
      {
         id: '1',
         name: 'Marlon',
         number: '10',
         status: 'busy',
         description: '',
      },
      {
         id: '2',
         name: 'Homem Aranha',
         number: '75',
         status: 'busy',
         description: '',
      },
      {
         description: '',
         id: '3',
         name: 'Pantera',
         number: '10',
         status: 'free',
      },
      {
         id: '4',
         name: 'Elvis',
         number: 'Superman',
         status: 'busy',
         description: '',
      },
   ];

   const order = orders.find((order) => order.id === id);

   if (!order) return <div>Pedido não encontrado</div>;

   return (
      <section className='p-6 w-full h-full'>
         <Card className='w-1/2 flex flex-col h-full'>
            <CardHeader className='flex items-center justify-between'>
               <div className='flex flex-col items-start'>
                  <p>Cliente: {order.name}</p>
                  <p>Comanda: {order.number}</p>
               </div>
               <Badge className={cn(order.status === 'busy' ? 'bg-red-500' : 'bg-emerald-500')}>
                  {order.status === 'busy' ? t('Busy') : t('Free')}
               </Badge>
            </CardHeader>
            <CardContent className='flex-1'>
               <h2>Itens do Pedido</h2>
               {Array.from({ length: 5 }).map((_, index) => (
                  <OrderItem key={index} />
               ))}
            </CardContent>
            <CardFooter className='w-full'>
               <div className='flex flex-col gap-3 mt-3 w-full'>
                  <div className='flex items-center justify-between'>
                     <span>Subtotal:</span>
                     <span>R$ 15,90</span>
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
      </section>
   );
}
