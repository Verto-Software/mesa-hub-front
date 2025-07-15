import { z } from 'zod';

export const resetPasswordSchema = z
   .object({
      newpassword: z
         .string()
         .min(6, 'A senha deve ter no mínimo 6 caracteres')
         .trim()
         .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
         .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
         .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
         .regex(/[^A-Za-z0-9]/, 'A senha deve conter pelo menos um caractere especial'),
      confirmpassword: z
         .string()
         .min(6, 'A senha deve ter no mínimo 6 caracteres')
         .trim()
         .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
         .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
         .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
         .regex(/[^A-Za-z0-9]/, 'A senha deve conter pelo menos um caractere especial'),
   })
   .refine((data) => data.newpassword === data.confirmpassword, {
      message: 'As senhas devem ser iguais',
      path: ['confirmpassword'],
   });

export type FormResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
