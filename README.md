# French Riviera Tips — Migration & Deploy Runbook

Goal: move off Wix to **Astro + Keystatic + GitHub + Netlify** (all free), keep content exact,
lose zero SEO. This file is the step-by-step. Nothing here requires paying for a new subscription.

---

## Where things stand
- Content extraction: **16 of 16 articles** done — clean Markdown in `src/content/posts/`, exact
  text, hero images and affiliate links preserved.
- Repo foundation built: `package.json`, `astro.config.mjs`, content schema, Keystatic config,
  `_redirects` (301s), `robots.txt`, favicon.
- **Templates built** (all from the approved design):
  - `src/layouts/BaseLayout.astro` — SEO head, Open Graph/Twitter, JSON-LD, canonical, header + footer.
  - `src/pages/index.astro` — homepage funnel (hero → themes → destinations → events → latest →
    tips → hidden gems → why-us → author → where-to-stay → FAQ → newsletter) + FAQPage/WebSite/Org schema.
  - `src/pages/post/[slug].astro` — article (breadcrumb, tags, TOC from H2s, sticky Stay22 widget,
    inline Stay22 map, author box, related posts) + Article + BreadcrumbList schema.
  - `src/pages/[theme].astro` — Hotels / Activities / Events / Hidden Gems / Tips listing pages.
  - `src/pages/destinations/index.astro` + `destinations/[city].astro` — place pages (all 12 towns).
  - `about`, `affiliate-disclosure`, `privacy`, `cookies`, `legal-notices`, `accessibility`, `404`, `rss.xml`.
- Components: `Header` (mega menu), `Footer`, `PostCard`, `Newsletter`, `Stay22Map`, `AffiliateDisclosure`.
- Design tokens + prose styles: `src/styles/global.css`. Nav/site data: `src/lib/site.js`.

## Local preview (optional — needs Node 18+)
```
cd astro-site
npm install
npm run dev     # → http://localhost:4321
```
(This preview environment can't run the Astro build; it compiles on Netlify or your machine.)

## The 5 phases (as agreed)
1. **Extract** every article from Wix → clean Markdown in `src/content/posts/` (exact text,
   headings, images, affiliate links). No rewriting.
2. **Build** the Astro site + Keystatic visual editor + templates from the approved design.
3. **Deploy** to GitHub + Netlify → private test URL (`*.netlify.app`) to review before switching.
4. **Switch domain**: point `frenchrivieratips.com` DNS from Wix → Netlify. Keep Wix live until
   confirmed → zero downtime.
5. **Protect SEO**: `/post/<slug>` replicated 1:1 (no article redirects); old category URLs 301'd
   (`public/_redirects`); resubmit sitemap in Search Console; re-add GA4 + GSC; structured data
   (Article, FAQPage, BreadcrumbList).

---

## What YOU do (Max) — no coding

### A. Create the free accounts (if you don't have them)
1. **GitHub** (github.com) — free. This stores the site.
2. **Netlify** (netlify.com) — free. Sign in *with GitHub*. This hosts & auto-publishes.

### B. First deploy (I hand you a ready repo)
1. Create a new empty GitHub repo, e.g. `french-riviera-tips`.
2. Upload the contents of this `astro-site/` folder to that repo
   (GitHub web UI: "Add file → Upload files", or I can guide the Git steps).
3. In Netlify: "Add new site → Import from GitHub" → pick the repo.
   Build command: `npm run build`  ·  Publish directory: `dist`.
4. Netlify gives you a test URL like `frenchrivieratips.netlify.app`. **Review everything here.**

### C. Turn on the visual editor (Keystatic)
1. In `keystatic.config.tsx`, set `repo: 'YOUR_GITHUB_USER/french-riviera-tips'`.
2. Visit `your-test-url/keystatic` → log in with GitHub → edit articles like a document.
   Saving commits to GitHub → Netlify rebuilds in ~1 min. No code, ever.

### D. Go live (the switch)
1. Only after you're happy with the test site.
2. In Netlify: "Domain settings → Add custom domain" → `frenchrivieratips.com`.
3. At your **registrar** (where you bought the domain), point DNS to Netlify:
   - Either set Netlify DNS (nameservers), or
   - Add the A / CNAME records Netlify shows you.
4. Wix stays up until DNS fully switches (a few hours) → **no downtime**.
5. Netlify auto-provisions a free HTTPS certificate.

### E. After go-live (SEO safety net)
1. Google **Search Console**: confirm the property, submit `https://www.frenchrivieratips.com/sitemap-index.xml`.
2. Check a few old category URLs redirect (301) and every `/post/...` still resolves.
3. Re-add your **GA4** tag (drop the ID into the site config — I'll wire the slot).
4. Watch indexing for 1–2 weeks; fix any 404s via `_redirects`.

## What I still do here
- Wire the **GA4** measurement ID + newsletter provider action when you supply them.
- Optionally download the Wix hero images into `public/images/` (currently hotlinked from Wix CDN —
  works, but self-hosting is faster + survives a Wix shutdown).
- Cross-check `_redirects` against the live sitemap once deployed.

## Two placeholders to fill before/at deploy
- `keystatic.config.tsx` → `repo:` still `REPLACE_WITH/your-repo` — set to your real GitHub repo.
- `src/components/Newsletter.astro` → `FORM_ACTION` empty — paste your Mailchimp/Brevo/Buttondown
  form URL. Same for a GA4 slot in `BaseLayout.astro` when you have the ID.

## Affiliate compliance (baked in)
- All `expedia.stay22.com` / Travelpayouts links render with `rel="sponsored nofollow"`.
- Visible affiliate disclosure on every article (already in the design).
