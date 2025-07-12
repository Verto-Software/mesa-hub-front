import { useTranslations } from 'next-intl';
import { z } from 'zod';

export const AuthSchema = () => {
   const t = useTranslations();

   return z.object({
      email: z.string().min(1, t('EmailRequired')).email(t('EmailInvalid')),
      password: z
         .string()
         .min(6, t('PasswordMin'))
         .trim()
         .regex(/[A-Z]/, t('PasswordUpper'))
         .regex(/[a-z]/, t('PasswordLower'))
         .regex(/[0-9]/, t('PasswordNumber'))
         .regex(/[^A-Za-z0-9]/, t('PasswordSpecial')),
      firstname: z.string().min(1, t('FirstNameRequired')).trim().optional(),
      lastname: z.string().min(1, t('LastNameRequired')).trim().optional(),
   });
};

export type FormAuthSchema = z.infer<ReturnType<typeof AuthSchema>>;
