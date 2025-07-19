import { Control, FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { FormStockSchema } from './form/schema';

export interface TInputField {
   register: UseFormRegister<FormStockSchema>;
   errors: FieldErrors<FormStockSchema>;
}
export interface TItemDescription extends TInputField {
   watch: UseFormWatch<FormStockSchema>;
}
export interface TInputPrices extends TInputField {
   sellingprice: string | undefined;
   purchaseprice: string | undefined;
   handlePriceChange: (field: 'sellingprice' | 'purchaseprice', value: string) => void;
   control: Control<FormStockSchema>;
}

export type TInputQuantity = TInputField;
export type TInputName = TInputField;
export type TInputSupplier = TInputField;
export type TInputMaximumStock = TInputField;
export type TInputMinimumStock = TInputField;
export type TInputCurrentStock = TInputField;

export interface TFormAddItemStock {
   handleCloseDialog: () => void;
}
