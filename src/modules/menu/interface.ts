import { Control, FieldErrors, UseFormRegister, UseFormReset, UseFormWatch } from 'react-hook-form';
import { FormItemMenuSchema } from './form/schema';

export interface TInputFields {
   register: UseFormRegister<FormItemMenuSchema>;
   errors: FieldErrors<FormItemMenuSchema>;
}

export interface TButtonAddItemMenu {
   reset: UseFormReset<FormItemMenuSchema>;
}

export interface TUploadImage extends Pick<TInputFields, 'register'> {}

export interface TInputSalePrice extends TInputFields {
   saleprice: string | undefined;
   handlePriceChange: (field: 'saleprice', value: string) => void;
}

export interface TInputItemDescription extends TInputFields {
   watch: UseFormWatch<FormItemMenuSchema>;
}

export interface TSelectCategory extends Pick<TInputFields, 'errors'> {
   control: Control<FormItemMenuSchema>;
}

export interface TInputItemName extends TInputFields {}

export interface TFormAddItemMenu {
   handleCloseDialog: () => void;
}

export interface TItemsMenu {
   id: string;
   image: string;
   name: string;
   category: string;
   price: number;
   description: string;
}
