import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormAuthSchema } from "./schema";

export interface TInputPassword {
  register: UseFormRegister<FormAuthSchema>;
  errors: FieldErrors<FormAuthSchema>;
  showPassword: boolean;
  toggleShowPassword: () => void;
  isRegister: boolean;
}

export interface TInputField {
  register: UseFormRegister<FormAuthSchema>;
  errors: FieldErrors<FormAuthSchema>;
}

export interface TInputLastName extends TInputField {}

export interface TInputFirstName extends TInputField {}

export interface TInputEmail extends TInputField {}

export interface TCreateAccount {
  handleCreateAccount: () => void;
  isRegister: boolean;
}
