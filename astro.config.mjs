import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://openza.github.io',
  build: {
    assets: '_assets'
  },
  integrations: [sitemap()]
});
