import { Button } from '@/_ui/button';
import { Routes } from '@/routes/routes';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFoundPage() {
   return (
      <section className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-300 via-white to-purple-400 p-4'>
         <Image
            src='/not-found.svg'
            alt='Página não encontrada'
            width={400}
            height={400}
         />
         <div className='flex flex-col items-center justify-center gap-6 mt-10'>
            <p className='text-gray-800 font-bold text-xl'>404 — Até nós estamos procurando essa página!</p>
            <Button
               animated
               asChild
            >
               <Link href={Routes.Home}>Tela de início</Link>
            </Button>
         </div>
      </section>
   );
}
