import { cn } from '@/_lib/utils';
import { Badge } from '@/_shared/components/ui/badge';
import { Button } from '@/_shared/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/_shared/components/ui/card';
import { Separator } from '@/_shared/components/ui/separator';
import { Routes } from '@/_shared/routes/routes';
import { Minus, Plus, SquareArrowLeft, Trash2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { TOrderCard } from '../../interface';

export function OrderCardDetail({ orderItems, order, decrement, increment, removeItem, subtotal }: TOrderCard) {
   const t = useTranslations();

   return (
      <Card className='w-full flex flex-col h-[84vh]'>
         <CardHeader className='flex items-center justify-between h-6 w-full'>
            <Link
               href={Routes.Order}
               className='text-gray-500 flex gap-1'
            >
               <SquareArrowLeft className='text-gray-500' />
               Voltar
            </Link>
            <div className='flex gap-4'>
               <p className='font-medium text-gray-400'>
                  Cliente: <span className='font-bold text-gray-700'>{order?.name}</span>
               </p>
               <p className='font-medium text-gray-400'>
                  Comanda: <span className='font-bold text-gray-700'>{order?.number}</span>
               </p>
               <Badge className={cn(orderItems.length > 0 ? 'bg-red-500' : 'bg-emerald-500')}>
                  {orderItems.length > 0 ? t('Busy') : t('Free')}
               </Badge>
            </div>
         </CardHeader>
         <Separator className='-mb-6' />
         <CardContent className='flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden pb-3 pt-1'>
            {orderItems?.map((orderItem) => (
               <div
                  className='flex items-center justify-between border p-2 px-4 rounded-md mt-2 hover:bg-gray-50'
                  key={orderItem.id}
               >
                  <div>
                     <p>{orderItem.item}</p>
                     <span>
                        {orderItem.price.toLocaleString('pt-BR', {
                           style: 'currency',
                           currency: 'BRL',
                        })}
                     </span>
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
         <CardFooter className='w-full -mb-3'>
            <div className='flex gap-3 mt-3 w-full'>
               <div className='flex flex-row items-center justify-between text-xl font-medium text-gray-700 w-full'>
                  <span>Subtotal:</span>
                  <span className='text-emerald-500 font-bold'>R$ {subtotal}</span>
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
   );
}
