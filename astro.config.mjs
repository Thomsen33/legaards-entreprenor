// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Endeligt domæne – bruges til canonical-links, sitemap og schema.
  site: 'https://legaards.dk',
  // Samme URL-format som det nuværende WordPress-site: /nedbrydning/
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
