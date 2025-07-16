import { MenuView } from '@/modules/menu-view/menu-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Cardápio',
};

export default function MenuViewPage() {
   return <MenuView />;
}
