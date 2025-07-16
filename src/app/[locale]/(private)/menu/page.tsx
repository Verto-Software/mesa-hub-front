import { Menu } from '@/modules/menu/menu';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Menu',
};

export default function MenuPage() {
   return <Menu />;
}
