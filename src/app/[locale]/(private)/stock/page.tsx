import { Stock } from '@/modules/stock/stock';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Estoque',
};

export default function StockPage() {
   return <Stock />;
}
