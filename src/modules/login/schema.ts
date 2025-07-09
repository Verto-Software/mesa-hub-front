import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(1, "A senha deve ter no mínimo 6 dígitos"),
});

export type FormLoginSchema = z.infer<typeof loginSchema>;
