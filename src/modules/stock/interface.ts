import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { FormStockSchema } from './schema';

export interface TInputField {
   register: UseFormRegister<FormStockSchema>;
   errors: FieldErrors<FormStockSchema>;
}

export interface TInputQuantity extends TInputField {}
export interface TInputName extends TInputField {}
export interface TInputPrice extends TInputField {}
export interface TInputSupplier extends TInputField {}
export interface TStockActions {
   isValid: boolean;
}
export interface TInputTextarea extends TInputField {
   watch: UseFormWatch<FormStockSchema>;
}
export interface TInputMaximumStock extends TInputField {}
export interface TInputMinimumStock extends TInputField {}
export interface TInputCurrentStock extends TInputField {}
