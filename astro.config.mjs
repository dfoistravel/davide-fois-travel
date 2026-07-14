import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSite = repositoryName.endsWith('.github.io');
const base = isUserSite || !repositoryName ? '/' : `/${repositoryName}`;

export default defineConfig({
  site: process.env.SITE_URL || 'https://TUO-USERNAME.github.io',
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
