# Extraction queue & confirmed data — French Riviera Tips migration

Author on all posts: **Max G** (display as **Max**, first person). Wix account: massimiliano.gallo.940.
Article URL pattern `/post/<slug>` → **replicated identically** in Astro (zero article redirects).
Stay22 affiliate deep-link pattern: `https://expedia.stay22.com/frt25/<id>` → render `rel="sponsored nofollow"`.
Stay22 map embeds: `https://www.stay22.com/embed/<id>`.

## Status  — 9 / 14 saved
- [x] best-hotels-near-nice-port-top-3-accommodation-picks  → saved
- [x] french-riviera-on-a-budget  → saved
- [x] nice-vieux-port-a-real-village  → saved
- [x] roquebrune-cap-martin-where-medieval-charm-meets-azure-splendor  → saved
- [x] theoule-sur-mer-a-hidden-gem-of-the-french-riviera  → saved
- [x] secret-beach-la-darse-in-villefranche-sur-mer  → saved
- [x] cannes-the-glamour-capital-of-the-french-riviera  → saved
- [x] parking-in-villefranche-sur-mer-cap-ferrat-the-ultimate-guide-to-free-and-cheap-spots  → saved
- [x] discover-biot-a-charming-medieval-village-in-the-alpes-maritimes  → saved
- [x] les-plage-electroniques-2026-ultimate-guide           → saved
- [x] les-voiles-de-saint-tropez-2026-the-complete-visitor-s-guide  → saved
- [x] complete-guide-to-the-monaco-f1-grand-prix-2026        → saved
- [x] festival-de-cannes-2026-the-ultimate-traveller-s-guide → saved
- [x] nice-carnival-2026-vive-la-reine-complete-guide        → saved (URL confirmed)

## ⚠ NEWLY DISCOVERED — not in original 14, still to extract
- [ ] how-to-get-around-the-french-riviera-from-menton-to-saint-tropez  (Tips/Getting around)
- [ ] arriving-in-style-your-ultimate-guide-to-private-pickups-at-nice-and-cannes-airports  (Tips · transfers · The Drivers Nice)
Total real article count is therefore ~16, not 14.

## Confirmed hero images (Wix static — download into /public/images or keep hotlinked)
- les-plage-electroniques: a1c2e8_e6d5f914db56447c999d412f9d2d6b83~mv2.webp
- les-voiles-saint-tropez: a1c2e8_7ef9c741d7194959ba8c64ef627b7c8f~mv2.jpg
- monaco-f1: a1c2e8_57573a0f6df145f58d4ad32722def7e3~mv2.jpg
- festival-de-cannes: a1c2e8_d929a4b7e940466daec0fa3987b34e6d~mv2.webp
- biot: a1c2e8_0c64d6f5ea714af980357874a40f815f~mv2.png
- parking-villefranche: a1c2e8_b43a35e7acaf4db5bcd508bcc8b40bff~mv2.jpeg
- cannes-glamour: a1c2e8_d8a5b152b72a49e1ac8f20e4fa297c1c~mv2.jpg
- roquebrune: a1c2e8_90012b6dbafc4fe4ad6e657269fcbec7~mv2.png
- theoule: a1c2e8_ab9e461c9c7a42ce844f53fe91a8ae69~mv2.jpg
- nice-vieux-port: a1c2e8_9643c3436875455493cd67a7a68039b8~mv2.jpg
- best-hotels-nice-port: a1c2e8_100a301172a548329a8f0348cbe4f048~mv2.jpg (saved)
- budget (site hero/logo): a1c2e8_5adf72ec416641d39663e721a0cc8ff0~mv2.png (saved)
Full URL form: https://static.wixstatic.com/media/<file>/v1/fill/w_1024,h_683,al_c/<file>

## Homepage content to port (confirmed exact copy)
- Hero H1/H2: "French Riviera Tips — Your Complete Guide to the Côte d'Azur"
  Subhead: "Where the Mediterranean sparkles under endless sunshine, medieval villages crown hilltops, and every corner reveals a new adventure. Discover the authentic French Riviera with local insights from Nice, Cannes, Monaco & beyond…"
- Why Choose Us: Local Expertise · Honest Recommendations ("We don't accept payment for reviews") · Always Up to Date · For Every Traveler (exact copy captured in fetch).
- Unforgettable Experiences: Trekking & Adventure · Water Sports · Culture & Heritage · Gastronomy.
- Iconic Destinations: Nice, Cannes, Monaco, Èze, Antibes, Saint-Paul-de-Vence (each with one-line desc + TripAdvisor link).
- FAQ: 5 Q&A captured verbatim (best time / getting around / iconic vs hidden gems / activities / budget). Reuse for FAQPage schema + expand.

## Static pages
- Legal Notices, Accessibility, Privacy Policy, Cookies Policy — "by Adrigal Web".

## Notes
- Each post page also lists multiple categories + a big tag list (SEO). Port tags as-is.
- "NaN out of 5 stars" rating widget is a Wix artefact — drop it.
- Restaurants category parked (some posts still tagged Restaurants → keep tag, route to /tips).
