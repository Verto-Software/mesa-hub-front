'use client';

import { Badge } from '@/_shared/components/ui/badge';
import { Button } from '@/_shared/components/ui/button';
import { Card, CardContent, CardHeader } from '@/_shared/components/ui/card';
import { Printer } from 'lucide-react';
import Image from 'next/image';

interface MenuItem {
   id: string;
   name: string;
   category: string;
   price: number;
   description: string;
   image: string;
}

const cardapioItems: MenuItem[] = [
   {
      id: '1',
      name: 'Hambúrguer Artesanal',
      category: 'Lanches',
      price: 32.9,
      description: 'Pão brioche, blend 180g, queijo cheddar, alface, tomate e molho especial',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&h=80&fit=crop&crop=center',
   },
   {
      id: '2',
      name: 'Hambúrguer Artesanal',
      category: 'Bebida',
      price: 32,
      description: 'Pão brioche, blend 180g, queijo cheddar, alface, tomate e molho especial',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&h=80&fit=crop&crop=center',
   },
];

export function MenuView() {
   const groupedItems = cardapioItems.reduce((acc, item) => {
      if (!acc[item.category]) {
         acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
   }, {} as Record<string, MenuItem[]>);

   function handlePrint() {
      window.print();
   }

   return (
      <div className='min-h-screen bg-background w-full'>
         <div className='print:hidden bg-card border-b p-4 sticky top-0 z-10'>
            <Button
               onClick={handlePrint}
               className='cursor-pointer'
            >
               <Printer size={16} />
               Imprimir Cardápio
            </Button>
         </div>

         <div className='max-w-5xl mx-auto p-6 print:p-6'>
            <div className='text-center mb-8 print:mb-6'>
               <h1 className='text-xl font-medium mb-2'>Cardápio</h1>
               <div className='w-24 h-0.5 bg-primary mx-auto rounded'></div>
            </div>

            <div className='flex flex-col gap-6'>
               {Object.entries(groupedItems).map(([category, items]) => (
                  <Card
                     key={category}
                     className='category-section border-none hover:bg-gray-50 p-3 !rounded-md print:gap-2 active:scale-[0.99] hover:-translate-y-0.7 hover:shadow-lg transition-all duration-300 hover:border-none'
                  >
                     <CardHeader className='!p-0'>
                        <Badge className='bg-gray-100 !rounded-sm print:bg-white text-gray-800 text-base print:text-xl'>
                           {category}
                        </Badge>
                     </CardHeader>

                     <CardContent className='flex flex-col gap-6 !p-0'>
                        {items.map((item) => (
                           <div
                              key={item.id}
                              className='menu-item flex gap-3 items-center'
                           >
                              <Image
                                 src={item.image}
                                 alt={item.name}
                                 height={50}
                                 width={50}
                                 className='object-cover rounded-lg print:w-12 print:h-12'
                              />
                              <div className='flex-1 min-w-0'>
                                 <div className='flex items-center justify-between'>
                                    <h3 className='font-semibold text-lg print:text-base text-gray-700'>{item.name}</h3>
                                    <span className='font-semibold text-sm text-primary print:text-black mt-1'>
                                       R${' '}
                                       {item.price.toLocaleString('pt-BR', {
                                          minimumFractionDigits: 2,
                                          maximumFractionDigits: 2,
                                       })}
                                    </span>
                                 </div>
                                 <p className='text-gray-500 print:text-gray-600 text-sm mb-1'>{item.description}</p>
                              </div>
                           </div>
                        ))}
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </div>
   );
}
