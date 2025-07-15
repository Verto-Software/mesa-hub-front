import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/_shared/components/ui/select';
import { useTranslations } from 'next-intl';
import { Controller } from 'react-hook-form';
import { TSelectCategory } from '../interface';

export function SelectCategory({ control, errors }: TSelectCategory) {
   const t = useTranslations();

   return (
      <div className='w-full'>
         <Controller
            name='category'
            control={control}
            rules={{ required: t('CategoryIsMandatory') }}
            render={({ field, fieldState }) => (
               <>
                  <Select
                     onValueChange={field.onChange}
                     value={field.value}
                  >
                     <SelectTrigger className={`w-full ${errors.category?.message ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder={t('Category')} />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectItem value='drink'>{t('Drink')}</SelectItem>
                        <SelectItem value='desserts'>{t('Desserts')}</SelectItem>
                        <SelectItem value='food'>{t('Food')}</SelectItem>
                     </SelectContent>
                  </Select>
                  {fieldState.error?.message && <p className='text-red-500 text-xs mt-1'>{fieldState.error.message}</p>}
               </>
            )}
         />
      </div>
   );
}
