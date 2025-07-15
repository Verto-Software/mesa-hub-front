import { Button } from '@/_shared/components/ui/button';
import { DialogClose, DialogFooter } from '@/_shared/components/ui/dialog';
import { useTranslations } from 'next-intl';
import { TFooterAction } from '../interface';

export function FooterAction({ reset }: TFooterAction) {
   const t = useTranslations();

   return (
      <DialogFooter className='!flex lg!flex-col'>
         <DialogClose asChild>
            <Button
               className='cursor-pointer flex-1'
               type='button'
               variant='outline'
               onClick={() => reset()}
            >
               {t('Cancel')}
            </Button>
         </DialogClose>
         <Button
            className='cursor-pointer flex-1'
            type='submit'
            animated
         >
            {t('AddItem')}
         </Button>
      </DialogFooter>
   );
}
