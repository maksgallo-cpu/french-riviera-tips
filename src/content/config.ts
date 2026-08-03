import { defineCollection, z } from 'astro:content';

// One collection: blog posts. Matches the Wix content exactly + SEO fields.
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    // SEO <title> — MANDATORY structure: "French Riviera Tips | <keywords> | <place>"
    title: z.string(),
    // On-page H1 (kept identical to the original article headline).
    h1: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    // Theme axis (primary nav): Destinations | Hotels | Activities | Events | Hidden Gems | Tips
    theme: z.enum(['Destinations', 'Hotels', 'Activities', 'Events', 'Hidden Gems', 'Tips']),
    // Place axis (city/town category pages).
    place: z.string(),
    // Every category the post belongs to (used for cross-listing + old-URL redirects).
    categories: z.array(z.string()).default([]),
    heroImage: z.string(),
    heroAlt: z.string().default(''),
    readTime: z.string().default(''),
    author: z.string().default('Max'),
    // Optional Stay22 map embed URL shown in the article body.
    stay22Embed: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Optional FAQ pairs → rendered as a section + FAQPage JSON-LD for rich results.
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
