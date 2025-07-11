import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormResetPasswordSchema } from './schema';

export interface TInputNewPassword {
   toggleShowNewPassword: () => void;
   showNewPassword: boolean;
   register: UseFormRegister<FormResetPasswordSchema>;
   errors: FieldErrors<FormResetPasswordSchema>;
}

export interface TInputConfirmNewPassword {
   toggleShowConfirmPassword: () => void;
   showConfirmPassword: boolean;
   register: UseFormRegister<FormResetPasswordSchema>;
   errors: FieldErrors<FormResetPasswordSchema>;
}
