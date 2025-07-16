import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
   images: {
      domains: ['png.pngtree.com', 'images.unsplash.com'],
   },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
