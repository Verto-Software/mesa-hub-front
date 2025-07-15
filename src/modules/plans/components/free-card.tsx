import { Card, CardDescription, CardHeader, CardTitle } from '@/_shared/components/ui/card';
import { Clock, Sparkles } from 'lucide-react';

export function FreeCard() {
   return (
      <Card className='w-full lg:w-3/5 bg-emerald-50 broder border-emerald-200 mt-6'>
         <CardHeader className='flex items-center gap-4'>
            <div className='flex items-center flex-col gap-3'>
               <Clock
                  size={16}
                  className='text-gray-500'
               />
               <Sparkles className='text-emerald-500' />
            </div>
            <div className='flex flex-col gap-3'>
               <CardTitle className='flex items-center gap-4.5 text-gray-700'>Teste grátis por 7 dias!</CardTitle>
               <CardDescription className='flex items-center gap-3 text-gray-700'>
                  Explore todas as funcionalidades sem compromisso. No final, escolha o plano perfeito pra sua operação.
               </CardDescription>
            </div>
         </CardHeader>
      </Card>
   );
}
