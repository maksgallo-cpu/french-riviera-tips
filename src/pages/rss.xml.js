import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../lib/site.js';

export async function GET(context) {
  const posts = (await getCollection('posts', (p) => !p.data.draft)).sort(
    (a, b) => +b.data.pubDate - +a.data.pubDate
  );
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.h1,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/post/${p.slug}/`,
    })),
  });
}
