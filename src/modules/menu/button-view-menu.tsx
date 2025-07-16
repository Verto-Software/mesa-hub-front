import { Button } from '@/_shared/components/ui/button';
import { Routes } from '@/_shared/routes/routes';
import { Eye } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function ButtonViewMenu() {
   const t = useTranslations();

   return (
      <Button asChild>
         <Link
            href={Routes.MenuView}
            target='_blank'
         >
            <Eye />
            {t('Menu')}
         </Link>
      </Button>
   );
}
