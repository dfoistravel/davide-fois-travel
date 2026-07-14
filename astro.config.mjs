import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'davide-fois-travel';
const isUserSite = repositoryName.endsWith('.github.io');
const base = isUserSite ? '/' : `/${repositoryName}`;

export default defineConfig({
  site: process.env.SITE_URL || 'https://dfoistravel.github.io',
  base,
  trailingSlash: 'always',
  integrations: [sitemap()]
});
