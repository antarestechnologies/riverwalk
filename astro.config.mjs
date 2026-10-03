// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Update this when the site goes live at its final domain.
  site: 'https://riverwalkmarinadecatur.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
  // The Hard Dock restaurant closed; keep old links from 404ing.
  redirects: { '/hard-dock/': '/' },
});
