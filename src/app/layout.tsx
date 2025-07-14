import { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
   title: 'Not found 404',
   description: 'Sistema de gestão para restaurantes.',
};

export default function LocaleLayout({ children }: { children: ReactNode }) {
   return (
      <html lang='pt-BR'>
         <body>{children}</body>
      </html>
   );
}
