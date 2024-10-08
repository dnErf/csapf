import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

import preact from '@astrojs/preact';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), db()],
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  vite: {
    ssr: {
      external: ['node:buffer']
    }
  }
});