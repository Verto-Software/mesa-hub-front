import { Language } from '@/i18n/language';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Toaster } from 'sonner';
import '../../globals.css';
import { Providers } from '../(private)/providers/providers';

export const metadata: Metadata = {
   title: 'MesaHub - Login',
   description: 'Faça login no MesaHub',
};

export default async function AuthLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <Providers>
         <NextIntlClientProvider>
            <Toaster
               position='top-right'
               theme='system'
               richColors
               closeButton
               duration={3000}
               visibleToasts={1}
            />
            <Language />
            {children}
         </NextIntlClientProvider>
      </Providers>
   );
}
