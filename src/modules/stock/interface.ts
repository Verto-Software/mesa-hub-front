import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { FormStockSchema } from './form/schema';

export interface TInputField {
   register: UseFormRegister<FormStockSchema>;
   errors: FieldErrors<FormStockSchema>;
}
export interface TInputTextarea extends TInputField {
   watch: UseFormWatch<FormStockSchema>;
}
export interface TInputQuantity extends TInputField {}
export interface TInputName extends TInputField {}
export interface TInputPrice extends TInputField {
   sellingprice: string | undefined;
   purchaseprice: string | undefined;
   handlePriceChange: (field: 'sellingprice' | 'purchaseprice', value: string) => void;
}
export interface TInputSupplier extends TInputField {}
export interface TInputMaximumStock extends TInputField {}
export interface TInputMinimumStock extends TInputField {}
export interface TInputCurrentStock extends TInputField {}
