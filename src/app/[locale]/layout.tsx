import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';
import { Toaster } from 'sonner';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import { LanguageSwitcher } from '@/_ui/LanguageSwitcher';

const poppins = Poppins({
   variable: '--font-poppins',
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
   title: 'MesaHub',
   description: 'Sistema de gestão para restaurantes.',
};

export default function RootLayout({
   children,
   params: { locale },
}: Readonly<{
   children: React.ReactNode;
   params: { locale: string };
}>) {
   const messages = useMessages();
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
               <LanguageSwitcher />
               {children}
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
