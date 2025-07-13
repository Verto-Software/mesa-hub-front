import { Button } from '@/_shared/components/ui/button';
import { Plus } from 'lucide-react';
import { OrderItem } from './order-item';
import { useTranslations } from 'next-intl';

export function Order() {
   const t = useTranslations();

   return (
      <section className='flex flex-col select-none'>
         <div className='flex items-center justify-between sticky top-[61px] w-full p-6 bg-white'>
            <h1 className='text-2xl'>{t('Orders')}</h1>
            <Button className='cursor-pointer'>
               <Plus
                  size={15}
                  strokeWidth={2}
               />
               {t('NewOrder')}
            </Button>
         </div>

         <div className='grid grid-cols-4 gap-6 px-6 pb-6'>
            {Array.from({ length: 30 }).map((_, i) => (
               <OrderItem key={i} />
            ))}
         </div>
      </section>
   );
}
