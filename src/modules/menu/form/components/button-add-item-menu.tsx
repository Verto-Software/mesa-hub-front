import { Button } from '@/_shared/components/ui/button';
import { DialogClose, DialogFooter } from '@/_shared/components/ui/dialog';
import { useTranslations } from 'next-intl';
import { TButtonAddItemMenu } from '../../interface';

export function ButtonAddItemMenu({ reset }: TButtonAddItemMenu) {
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
