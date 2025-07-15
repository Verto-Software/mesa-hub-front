import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { FormAuthSchema } from './form/components/schema';

export interface TInputField {
   register: UseFormRegister<FormAuthSchema>;
   errors: FieldErrors<FormAuthSchema>;
}

export interface TInputPassword extends TInputField {
   showPassword: boolean;
   toggleShowPassword: () => void;
   isRegister: boolean;
}

export interface TInputLastName extends TInputField {}

export interface TInputFirstName extends TInputField {}

export interface TInputEmail extends TInputField {}

export interface TCreateAccount extends Pick<TInputPassword, 'isRegister'> {
   handleCreateAccount: () => void;
   isRegister: boolean;
}

export interface TFormAuth extends TInputField, TInputPassword {
   handleSubmit: UseFormHandleSubmit<FormAuthSchema>;
   isValid: boolean;
   handleSubmitFormLogin: SubmitHandler<FormAuthSchema>;
}
