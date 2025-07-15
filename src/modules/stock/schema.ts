import z from 'zod';

export function StockSchema() {
   return z.object({
      itemname: z.string().min(1, 'Nome do item é obrigatório'),
      itemquantity: z.string().min(1, 'Quantidade de item é obrigatório'),
      purchaseprice: z.string().optional(),
      sellingprice: z.string().min(1, 'Preço de venda é obrigatório'),
      currentstock: z.string().optional(),
      minimumstock: z.string().optional(),
      maximumstock: z.string().optional(),
      supplier: z.string().optional(),
      itemdescription: z.string().min(1, 'Descrição do item é obrigatório'),
   });
}

export type FormStockSchema = z.infer<ReturnType<typeof StockSchema>>;
