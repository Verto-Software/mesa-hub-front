// src/app/[locale]/(public)/auth/layout.tsx
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { Toaster } from 'sonner';
import { Language } from '@/i18n/language';

const poppins = Poppins({
   variable: '--font-poppins',
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
   title: 'MesaHub - Login',
   description: 'Faça login no MesaHub',
};

export default async function AuthLayout({
   children,
   params,
}: Readonly<{
   children: React.ReactNode;
   params: Promise<{ locale: string }>;
}>) {
   const { locale } = await params;

   return (
      <html lang={locale}>
         <body className={poppins.variable}>
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
               <main>{children}</main>
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
