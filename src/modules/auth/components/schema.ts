import { z } from "zod";

export const authSchema = z.object({
  email: z
    .string()
    .min(1, "O Email é obrigatório")
    .email("Formato de email inválido"),
  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número")
    .regex(
      /[^A-Za-z0-9]/,
      "A senha deve conter pelo menos um caractere especial"
    ),
  firstname: z.string().min(1, "Seu nome é obrigatório").optional(),
  lastname: z.string().min(1, "Seu sobrenome é obrigatório").optional(),
});

export type FormAuthSchema = z.infer<typeof authSchema>;
