import { config, fields, collection } from '@keystatic/core';

// Keystatic — the no-code visual editor for Max.
// Runs at /keystatic. Edits are saved as Markdown into src/content/posts and
// committed to GitHub, which triggers a Netlify rebuild automatically.
export default config({
  storage: {
    kind: 'github',
    repo: 'REPLACE_WITH/your-repo', // e.g. maxg/french-riviera-tips
  },
  ui: {
    brand: { name: 'French Riviera Tips' },
  },
  collections: {
    posts: collection({
      label: 'Articles',
      slugField: 'h1',
      path: 'src/content/posts/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.text({
          label: 'SEO title',
          description: 'Structure: French Riviera Tips | keywords | place',
        }),
        h1: fields.slug({ name: { label: 'Article headline (H1)' } }),
        description: fields.text({ label: 'Meta description', multiline: true }),
        pubDate: fields.date({ label: 'Published date' }),
        updatedDate: fields.date({ label: 'Updated date' }),
        theme: fields.select({
          label: 'Theme',
          options: [
            { label: 'Destinations', value: 'Destinations' },
            { label: 'Hotels', value: 'Hotels' },
            { label: 'Activities', value: 'Activities' },
            { label: 'Events', value: 'Events' },
            { label: 'Hidden Gems', value: 'Hidden Gems' },
            { label: 'Tips', value: 'Tips' },
          ],
          defaultValue: 'Destinations',
        }),
        place: fields.text({ label: 'Place (city/town)' }),
        categories: fields.array(fields.text({ label: 'Category' }), {
          label: 'Categories', itemLabel: (p) => p.value,
        }),
        heroImage: fields.text({ label: 'Hero image URL' }),
        heroAlt: fields.text({ label: 'Hero image alt text' }),
        readTime: fields.text({ label: 'Read time (e.g. 5 min read)' }),
        author: fields.text({ label: 'Author', defaultValue: 'Max' }),
        stay22Embed: fields.text({ label: 'Stay22 map embed URL (optional)' }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags', itemLabel: (p) => p.value,
        }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        body: fields.markdoc({ label: 'Article body' }),
      },
    }),
  },
});
