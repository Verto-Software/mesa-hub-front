import { Control, FieldErrors, UseControllerProps, UseFormRegister, UseFormReset, UseFormWatch } from 'react-hook-form';
import { FormItemSchema } from './form/schema';

export interface TInputFields {
   register: UseFormRegister<FormItemSchema>;
   errors: FieldErrors<FormItemSchema>;
}

export interface TButtonAddItemMenu {
   reset: UseFormReset<FormItemSchema>;
}

export interface TUploadImage extends Pick<TInputFields, 'register'> {}

export interface TInputSalePrice extends TInputFields {
   saleprice: string | undefined;
   handlePriceChange: (field: 'saleprice', value: string) => void;
}

export interface TInputItemDescription extends TInputFields {
   watch: UseFormWatch<FormItemSchema>;
}

export interface TSelectCategory extends Pick<TInputFields, 'errors'> {
   control: Control<FormItemSchema>;
}

export interface TInputItemName extends TInputFields {}

export interface TFormAddItemMenu {
   handleCloseDialog: () => void;
}
