import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import rehypeAffiliate from './src/lib/affiliate-rehype.mjs';

// French Riviera Tips — Astro config
// Static site (SSG) + a small server island for Keystatic admin.
export default defineConfig({
  site: 'https://www.frenchrivieratips.com',
  output: 'hybrid',
  integrations: [
    react(),
    keystatic(),
    sitemap({
      // Keep article URLs weighted highest; exclude the admin route.
      filter: (page) => !page.includes('/keystatic'),
    }),
  ],
  markdown: {
    // Add rel="sponsored nofollow" + target=_blank to affiliate/external links at build.
    rehypePlugins: [rehypeAffiliate],
  },
});
