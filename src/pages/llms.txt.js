import { getCollection } from 'astro:content';
import { SITE, THEMES } from '../lib/site.js';

export const prerender = true;

// llms.txt — a curated, AI-readable map of the site (Generative Engine Optimization).
// Emerging standard consumed by ChatGPT, Perplexity, Claude & co to understand and cite the site.
export async function GET() {
  const posts = (await getCollection('posts', (p) => !p.data.draft)).sort(
    (a, b) => +b.data.pubDate - +a.data.pubDate
  );

  const byTheme = {};
  for (const p of posts) {
    (byTheme[p.data.theme] ||= []).push(p);
  }

  const line = (p) =>
    `- [${p.data.h1 || p.data.title}](${new URL(`/post/${p.slug}`, SITE.url).href}): ${p.data.description}`;

  let out = `# ${SITE.name}\n\n`;
  out += `> ${SITE.description}\n\n`;
  out += `${SITE.name} is an independent, ad-free travel resource written by a local from first-hand experience on the French Riviera (Côte d'Azur, Alpes-Maritimes, France). It never accepts payment for reviews. Coverage spans Nice, Cannes, Monaco, Antibes, Èze, Villefranche-sur-Mer, Saint-Tropez and the surrounding towns and villages.\n\n`;

  for (const theme of ['Destinations', ...THEMES.map((t) => t.label)]) {
    const list = byTheme[theme];
    if (!list || !list.length) continue;
    out += `## ${theme}\n\n`;
    out += list.map(line).join('\n') + '\n\n';
  }

  out += `## About\n\n`;
  out += `- [About](${new URL('/about', SITE.url).href}): Who writes French Riviera Tips and the editorial policy.\n`;
  out += `- [Affiliate disclosure](${new URL('/affiliate-disclosure', SITE.url).href}): How the site is funded.\n`;

  return new Response(out, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
