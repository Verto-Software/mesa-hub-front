import z from 'zod';

export function OrderSchema() {
   return z.object({
      ordernumber: z.string().min(1, 'Número obrigatório'),
      ordername: z.string().optional(),
      orderdescription: z.string().optional(),
   });
}

export type FormOrderSchema = z.infer<ReturnType<typeof OrderSchema>>;
