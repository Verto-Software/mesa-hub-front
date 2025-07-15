import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { FormOrderSchema } from '../schema';

interface TInputField {
   register: UseFormRegister<FormOrderSchema>;
   errors: FieldErrors<FormOrderSchema>;
}

export interface TOrderNumber extends TInputField {}
export interface TInputOrderName extends TInputField {}
export interface TInputTextarea extends TInputField {
   watch: UseFormWatch<FormOrderSchema>;
}
