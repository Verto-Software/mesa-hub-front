import { Order } from '@/modules/order/order';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Comanda',
};

export default function OrderPage() {
   return <Order />;
}
