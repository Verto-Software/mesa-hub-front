import { FieldErrors, UseFormRegister } from "react-hook-form";
import { resetSchema } from "./schema";

export interface TInputNewPassword {
  toggleShowNewPassword: () => void;
  showNewPassword: boolean;
  register: UseFormRegister<resetSchema>;
  errors: FieldErrors<resetSchema>;
}

export interface TInputConfirmNewPassword {
  toggleShowConfirmPassword: () => void;
  showConfirmPassword: boolean;
  register: UseFormRegister<resetSchema>;
  errors: FieldErrors<resetSchema>;
}
