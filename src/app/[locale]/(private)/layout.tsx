import { Header } from '@/_shared/components/ui/header';
import { SidebarInset, SidebarProvider } from '@/_shared/components/ui/sidebar';
import { Language } from '@/i18n/language';
import { SidebarTemplate } from '@/modules/sidebar/sidebar';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Toaster } from 'sonner';
import '../../globals.css';
import { Providers } from './providers/providers';

export const metadata: Metadata = {
   title: 'MesaHub',
   description: 'Sistema de gestão para restaurantes.',
};

export default async function RootLayout({
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
            <SidebarProvider>
               <SidebarTemplate />
               <SidebarInset>
                  <Header />
                  {children}
               </SidebarInset>
            </SidebarProvider>
         </NextIntlClientProvider>
      </Providers>
   );
}
