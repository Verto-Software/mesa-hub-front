import { Button } from '@/_shared/components/ui/button';
import { DialogClose, DialogFooter } from '@/_shared/components/ui/dialog';
import { useTranslations } from 'next-intl';
import { TButtonCreateOrder } from '../../interface';
import { Loading } from '@/_shared/components/ui/loading';

export function ButtonCreateOrder({ reset, isPending }: TButtonCreateOrder) {
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
            disabled={isPending}
            animated
         >
            {isPending ? <Loading /> : t('CreateOrder')}
         </Button>
      </DialogFooter>
   );
}
