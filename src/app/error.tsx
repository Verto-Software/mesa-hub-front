'use client';

import { Button } from '@/_ui/button';
import { Routes } from '@/routes/routes';
import Image from 'next/image';
import Link from 'next/link';

export default function Error() {
   return (
      <section className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-300 via-white to-purple-300 p-4'>
         <Image
            src='/error.svg'
            alt='Página não encontrada'
            width={300}
            height={300}
         />
         <div className='flex flex-col items-center justify-center gap-6 mt-10'>
            <div className='text-gray-800 font-bold text-xl text-center space-y-1'>
               <p>Desculpe, estamos enfrentando um problema técnico.</p>
               <p>Se o problema persistir, entre em contato com o nosso suporte.</p>
            </div>
            <div className='flex items-center gap-4'>
               <Button
                  animated
                  asChild
               >
                  <Link href={Routes.Home}>Tela de início</Link>
               </Button>
               <Button
                  animated
                  asChild
               >
                  <Link
                     href='https://wa.me/5522997823207?text='
                     target='_blank'
                  >
                     Suporte
                  </Link>
               </Button>
            </div>
         </div>
      </section>
   );
}
