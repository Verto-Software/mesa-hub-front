import { Button } from '@/_shared/components/ui/button';
import { DialogTrigger } from '@/_shared/components/ui/dialog';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ButtonOpenDialogAddItem() {
   const t = useTranslations();

   return (
      <DialogTrigger asChild>
         <Button
            className='cursor-pointer'
            variant='secondary'
            animated
         >
            <Plus
               size={15}
               strokeWidth={2}
            />
            {t('AddItem')}
         </Button>
      </DialogTrigger>
   );
}
