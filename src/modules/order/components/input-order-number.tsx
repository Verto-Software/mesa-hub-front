import { Input } from '@/_shared/components/ui/input';
import { useTranslations } from 'next-intl';

export function OrderNumber() {
   const t = useTranslations();

   return (
      <Input
         type='number'
         placeholder={t('OrderNumber')}
         min={0}
      />
   );
}
