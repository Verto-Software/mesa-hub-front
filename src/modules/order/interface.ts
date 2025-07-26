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
   handleCloseDialog: () => void;
}

export interface TOrderItems {
   id: number;
   item: string;
   price: number;
   quantity: number;
   observation?: string;
}

export interface TOrder extends Pick<TOrderItems, 'id'> {
   name: string;
   number: number;
   description?: string;
}

export interface TOrderCard {
   removeItem: (itemId: number, observation?: string) => void;
   orderItems: TOrderItems[];
   subtotal: number;
   order?: TOrder;
   clearItems: () => void;
}

export interface TOrderCardMenu {
   menuItems: TOrderItems[];
   handleAddOrder: (item: TOrderItems) => void;
}
