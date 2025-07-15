import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormResetPasswordSchema } from './schema';

export interface FormField {
   register: UseFormRegister<FormResetPasswordSchema>;
   errors: FieldErrors<FormResetPasswordSchema>;
}

export interface TInputNewPassword extends FormField {
   toggleShowNewPassword: () => void;
   showNewPassword: boolean;
}

export interface TInputConfirmNewPassword extends FormField {
   toggleShowConfirmPassword: () => void;
   showConfirmPassword: boolean;
}
