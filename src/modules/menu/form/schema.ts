import { useTranslations } from 'next-intl';
import z from 'zod';

export function ItemSchema() {
   const t = useTranslations();

   return z.object({
      itemname: z.string().min(1, t('NameIsRequired')),
      category: z.string().min(1, t('CategoryIsMandatory')),
      itemdescription: z.string().optional(),
      purchasePrice: z.string().min(1, t('PurchasePriceIsMandatory')),
      salePrice: z.string().min(1, t('SellingPriceIsMandatory')),
      image: z.any().optional(),
   });
}

export type FormItemSchema = z.infer<ReturnType<typeof ItemSchema>>;
