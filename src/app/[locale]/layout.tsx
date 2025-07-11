import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';
import { Toaster } from 'sonner';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import { Language } from '@/_ui/language';

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
   const messages = await getMessages();

   if (!messages) notFound();

   return (
      <html lang={locale}>
         <body className={`${poppins.variable}`}>
            <NextIntlClientProvider
               locale={locale}
               messages={messages}
            >
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
         </body>
      </html>
   );
}
