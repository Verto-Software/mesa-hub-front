'use client';

import { cn } from '@/_lib/utils';
import { Badge } from '@/_shared/components/ui/badge';
import { Card, CardContent, CardDescription } from '@/_shared/components/ui/card';
import { useTranslations } from 'next-intl';

export function OrderItem() {
   const t = useTranslations();

   // Mockado
   const ocupado = false;

   return (
      <Card
         className={cn(ocupado ? 'bg-red-50' : 'bg-emerald-50', 'cursor-pointer select-none active:scale-[0.99] active:brightness-100')}
         role='button'
         tabIndex={0}
         onClick={() => console.log('Clicou')}
      >
         <CardContent>
            <div className='flex items-center justify-between'>
               <p className='text-xl font-medium'>105</p>
               <Badge className={cn(ocupado ? 'bg-red-500' : 'bg-emerald-500')}>{ocupado ? t('Busy') : t('Free')}</Badge>
            </div>
            <p className='text-xl font-medium mt-3'>Marlon</p>
            <CardDescription>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </CardDescription>
         </CardContent>
      </Card>
   );
}
