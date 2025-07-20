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
   id: string;
   item: string;
   price: number;
   quantity: number;
   observation?: string;
}

export interface TMenuItems extends Pick<TOrderItems, 'item' | 'price'>, Pick<TOrder, 'id'> {
   observation: string;
}

export interface TOrder extends Pick<TOrderItems, 'id'> {
   name: string;
   number: string;
   status: 'busy' | 'free';
   description?: string;
}

export interface TOrderCard {
   increment: (itemId: string) => void;
   decrement: (itemId: string) => void;
   removeItem: (itemId: string) => void;
   orderItems: TOrderItems[];
   subtotal: number;
   order?: TOrder;
   clearItems: () => void;
}

export interface TOrderCardMenu {
   menuItems: TMenuItems[];
   handleAddOrder: (item: TMenuItems) => void;
}
