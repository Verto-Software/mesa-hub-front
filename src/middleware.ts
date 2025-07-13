import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
   locales: ['en-US', 'pt-BR'],
   defaultLocale: 'pt-BR',
   localeDetection: true,
   localePrefix: 'never',
});

export const config = {
   matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
