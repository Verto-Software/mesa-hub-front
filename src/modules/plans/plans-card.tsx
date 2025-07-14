import { Badge } from '@/_shared/components/ui/badge';
import { Button } from '@/_shared/components/ui/button';
import { Card, CardContent } from '@/_shared/components/ui/card';
import { Check, Star } from 'lucide-react';

interface TPlansCard {
   title: string;
   description: string;
   price: number;
   put: string;
   benefits: string[];
   choose: string;
   popular?: boolean;
}

export function PlansCard({ title, description, price, put, benefits, choose, popular }: TPlansCard) {
   return (
      <Card className='mt-10 w-[22rem] hover:border-[#8347eb] hover:scale-105 transition-transform duration-300 cursor-pointer relative'>
         <CardContent className='flex flex-col items-center justify-between h-full min-h-[400px] gap-3'>
            {popular && (
               <Badge className='bg-[#8347eb] text-white absolute -top-3'>
                  <Star className='text-yellow-400 fill-yellow-400' />
                  Mais popular
               </Badge>
            )}
            <h1 className='font-bold text-xl'>{title}</h1>
            <p className='text-gray-400'>{description}</p>
            <div className='flex items-center'>
               <span className='text-2xl text-[#8347eb] font-bold'>R${price}</span>
               <span className='text-gray-400'>/{put}</span>
            </div>
            <ul className='flex flex-col items-start gap-2 flex-1'>
               {benefits.map((benefit) => (
                  <li
                     key={benefit}
                     className='flex items-center gap-2'
                  >
                     <Check
                        size={20}
                        className='text-[#8347eb]'
                     />
                     <p className='text-gray-800'>{benefit}</p>
                  </li>
               ))}
            </ul>
            <Button
               className='cursor-pointer'
               animated
            >
               {choose}
            </Button>
         </CardContent>
      </Card>
   );
}
