import { Input } from '@/_shared/components/ui/input';
import { useTranslations } from 'next-intl';

export function InputOrderName() {
   const t = useTranslations();

   return (
      <Input
         type='text'
         className='break-words'
         placeholder={t('OrderName')}
      />
   );
}
