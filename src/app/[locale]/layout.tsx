import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';
import { Toaster } from 'sonner';
import { NextIntlClientProvider } from 'next-intl';
import { SidebarInset, SidebarProvider } from '@/_shared/components/ui/sidebar';
import { SidebarTemplate } from '@/modules/sidebar';
import { Header } from '@/_shared/components/ui/header';
import { Language } from '@/i18n/language';

const poppins = Poppins({
   variable: '--font-poppins',
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
   title: 'MesaHub',
   description: 'Sistema de gestão para restaurantes.',
};

export default async function RootLayout({
   children,
   params,
}: Readonly<{
   children: React.ReactNode;
   params: Promise<{ locale: string }>;
}>) {
   const { locale } = await params;

   return (
      <html lang={locale}>
         <body className={`${poppins.variable}`}>
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
                     <main>{children}</main>
                  </SidebarInset>
               </SidebarProvider>
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
