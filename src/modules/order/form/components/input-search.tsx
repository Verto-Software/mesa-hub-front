import { Input } from '@/_shared/components/ui/input';
import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function InputSearch() {
   const t = useTranslations();

   return (
      <div className='relative w-fit'>
         <Input
            type='text'
            placeholder={t('SearchOrder')}
            className='pl-10'
         />
         <Search
            size={18}
            strokeWidth={2}
            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
         />
      </div>
   );
}
