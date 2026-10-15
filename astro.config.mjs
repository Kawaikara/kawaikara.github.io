import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const publicSiteUrl = process.env.PUBLIC_SITE_URL ?? 'https://kawaikara.faby.day';

export default defineConfig({
  site: publicSiteUrl,
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx()],
});
