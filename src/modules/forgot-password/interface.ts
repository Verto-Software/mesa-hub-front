import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { FormResetPasswordSchema } from './form/schema';

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

export interface TFormForgotPassword extends FormField, TInputNewPassword, TInputConfirmNewPassword {
   handleSubmit: UseFormHandleSubmit<FormResetPasswordSchema>;
   handleSubmitResetPassword: SubmitHandler<FormResetPasswordSchema>;
   isValid: boolean;
}
