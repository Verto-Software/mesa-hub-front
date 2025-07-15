import { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
   title: 'Not found 404',
   description: 'Sistema de gestão para restaurantes.',
};

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
   const { locale } = await params;
   return (
      <html lang={locale}>
         <body>{children}</body>
      </html>
   );
}
