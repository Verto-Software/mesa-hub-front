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

export interface TItemMenu {
   id: string;
   itemname: string;
   itemquantity: string;
   purchaseprice: number;
   sellingprice: number;
   currentstock: string;
   minimumstock: string;
   maximumstock: string;
   supplier: string;
   category: string;
   itemdescription: string;
   readonly status: 'Low' | 'Normal';
}
