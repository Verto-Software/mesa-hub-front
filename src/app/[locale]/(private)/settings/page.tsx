import { Settings } from '@/modules/settings/settings';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Configurações',
};

export default function SettingsPage() {
   return <Settings />;
}
