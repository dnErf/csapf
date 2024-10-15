import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  vite: {
    ssr: {
      external: ['node:buffer','node:crypto']
    }
  }
});