import { useTranslations } from 'next-intl';
import z from 'zod';

export function ItemMenuSchema() {
   const t = useTranslations();

   return z.object({
      itemname: z.string().min(1, t('NameIsRequired')),
      category: z.string().min(1, t('CategoryIsMandatory')),
      itemdescription: z.string().optional(),
      saleprice: z.string().min(1, t('SellingPriceIsMandatory')),
      image: z.string().optional(),
   });
}

export type FormItemMenuSchema = z.infer<ReturnType<typeof ItemMenuSchema>>;
