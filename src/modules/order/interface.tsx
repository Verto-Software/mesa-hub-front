import { FieldErrors, UseFormRegister, UseFormReset, UseFormWatch } from 'react-hook-form';
import { FormOrderSchema } from './form/schema';

interface TInputField {
   register: UseFormRegister<FormOrderSchema>;
   errors: FieldErrors<FormOrderSchema>;
}

export interface TInputOrderDEscription extends TInputField {
   watch: UseFormWatch<FormOrderSchema>;
}

export interface TButtonCreateOrder {
   reset: UseFormReset<FormOrderSchema>;
}

export interface TOrderNumber extends TInputField {}

export interface TInputOrderName extends TInputField {}

export interface TFormOrder {
   onSuccess: () => void;
}
