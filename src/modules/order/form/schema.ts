import z from 'zod';

export function OrderSchema() {
   return z.object({
      number: z.number().min(1, 'Número obrigatório'),
      name: z.string().optional(),
      description: z.string().optional(),
   });
}

export type FormOrderSchema = z.infer<ReturnType<typeof OrderSchema>>;
