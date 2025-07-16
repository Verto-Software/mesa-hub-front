import { Button } from '@/_shared/components/ui/button';
import { Routes } from '@/_shared/routes/routes';
import Link from 'next/link';

export function ButtonViewMenu() {
   return (
      <Button asChild>
         <Link
            href={Routes.MenuView}
            target='_blank'
         >
            Ver cardápio
         </Link>
      </Button>
   );
}
