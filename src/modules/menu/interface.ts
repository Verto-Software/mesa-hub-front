import { Control, FieldErrors, UseControllerProps, UseFormRegister, UseFormReset, UseFormWatch } from 'react-hook-form';
import { FormItemSchema } from './form/schema';

export interface TInputFields {
   register: UseFormRegister<FormItemSchema>;
   errors: FieldErrors<FormItemSchema>;
}

export interface TFooterAction {
   reset: UseFormReset<FormItemSchema>;
}

export interface TUploadImage extends Pick<TInputFields, 'register'> {}

export interface TInputSalePrice extends TInputFields {
   salePrice: string | undefined;
   handlePriceChange: (field: 'salePrice', value: string) => void;
}

export interface TInputTextArea extends TInputFields {
   watch: UseFormWatch<FormItemSchema>;
}

export interface TSelectCategory extends Pick<TInputFields, 'errors'> {
   control: Control<FormItemSchema>;
}

export interface TInputItemName extends TInputFields {}
