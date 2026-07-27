import { getCollection } from 'astro:content';
import { SITE, ALL_PLACES, placeSlug } from '../lib/site.js';

export const prerender = true;

export async function GET() {
  const posts = await getCollection('posts', (p) => !p.data.draft);

  const staticPaths = [
    '/',
    '/destinations',
    '/hotels',
    '/activities',
    '/events',
    '/hidden-gems',
    '/tips',
    '/about',
    '/credits',
    '/affiliate-disclosure',
    '/privacy',
    '/cookies',
    '/legal-notices',
    '/accessibility',
  ];

  // Place pages: curated list + any place used on a post.
  const placeSlugs = new Set(ALL_PLACES.map(placeSlug));
  for (const p of posts) placeSlugs.add(placeSlug(p.data.place));
  const placePaths = [...placeSlugs].map((s) => `/destinations/${s}`);

  const postEntries = posts.map((p) => ({
    path: `/post/${p.slug}`,
    lastmod: new Date(p.data.updatedDate || p.data.pubDate).toISOString(),
  }));

  const urls = [
    ...staticPaths.map((path) => ({ path, lastmod: null })),
    ...placePaths.map((path) => ({ path, lastmod: null })),
    ...postEntries,
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${new URL(u.path, SITE.url).href}</loc>${
        u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''
      }</url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
