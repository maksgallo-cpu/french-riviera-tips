// Central site + navigation data. Edit here to change nav everywhere.

export const SITE = {
  name: 'French Riviera Tips',
  url: 'https://www.frenchrivieratips.com',
  tagline: "Your complete guide to the Côte d'Azur",
  description:
    "Independent local guides to the French Riviera — destinations, hotels, activities, events and hidden gems from Nice, Cannes, Monaco & beyond.",
  author: 'Max',
  authorFull: 'Massimiliano Gallo',
  twitter: '',
};

// Affiliate identifiers — used across the whole site.
export const AFFILIATE = {
  // Stay22 "Allez" script ID: auto-monetizes every Booking/Expedia/Hotels.com/etc
  // link on the site, tracked to your account. Installed in BaseLayout <head>.
  stay22ScriptId: '69501e83581ec595fcb2c24d',
  // Stay22 embed/map partner id (used in map iframes).
  stay22Aid: 'frt25',
  // Travelpayouts marker (flight & other TP widgets).
  travelpayoutsMarker: '695055',
};

// Primary theme nav (order matters).
export const THEMES = [
  { label: 'Hotels', href: '/hotels' },
  { label: 'Activities', href: '/activities' },
  { label: 'Events', href: '/events' },
  { label: 'Hidden Gems', href: '/hidden-gems' },
  { label: 'Tips', href: '/tips' },
  { label: 'About', href: '/about' },
];

// Place → hosted photo (used on destination cards). Nice = owner photo; others Unsplash.
export const PLACE_PHOTO = {
  'Nice': '/images/nice-promenade.png',
  'Cannes': '/images/dest/cannes.jpg',
  'Monaco': '/images/dest/monaco.jpg',
  'Èze': '/images/dest/eze.jpg',
  'Antibes': '/images/dest/antibes.jpg',
  'Saint-Paul-de-Vence': '/images/dest/saint-paul-de-vence.jpg',
  'Villefranche-sur-Mer': '/images/secret-beach-la-darse-in-villefranche-sur-mer-c.jpg',
  'Saint-Jean-Cap-Ferrat': '/images/parking-in-villefranche-sur-mer-cap-ferrat-the-ultimate-guide-to-free-and-cheap-spots-c.jpg',
  'Biot': '/images/discover-biot-a-charming-medieval-village-in-the-alpes-maritimes-c.jpg',
  'Théoule-sur-Mer': '/images/theoule-sur-mer-a-hidden-gem-of-the-french-riviera-c.jpg',
  'Roquebrune-Cap-Martin': '/images/roquebrune-cap-martin-where-medieval-charm-meets-azure-splendor-c.jpg',
  'Saint-Tropez': '/images/les-voiles-de-saint-tropez-2026-the-complete-visitor-s-guide.jpg',
};

// Slugify a place name to its /destinations/<slug> URL.
export function placeSlug(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Destinations mega-menu, grouped by zone.
export const DEST_ZONES = [
  { label: 'AROUND NICE', places: ['Nice', 'Villefranche-sur-Mer', 'Saint-Jean-Cap-Ferrat', 'Èze'] },
  { label: 'CANNES & WEST', places: ['Cannes', 'Antibes', 'Biot', 'Théoule-sur-Mer'] },
  { label: 'MONACO & EAST', places: ['Monaco', 'Roquebrune-Cap-Martin'] },
  { label: 'VILLAGES', places: ['Saint-Paul-de-Vence', 'Saint-Tropez'] },
];

// All places (flat) for building static [city] pages.
export const ALL_PLACES = DEST_ZONES.flatMap((z) => z.places);

// Theme → accent colour (used for pills/badges on cards).
export const THEME_COLOR = {
  Destinations: 'var(--azure)',
  Hotels: 'var(--coral)',
  Activities: 'oklch(0.60 0.12 150)',
  Events: 'oklch(0.58 0.16 325)',
  'Hidden Gems': 'oklch(0.55 0.10 200)',
  Tips: 'oklch(0.60 0.12 78)',
};

export const THEME_META = {
  Destinations: { title: 'Destinations', blurb: 'Towns & villages worth your time on the Côte d\u2019Azur.' },
  Hotels: { title: 'Hotels', blurb: 'Where to stay on the French Riviera — every budget, with live prices.' },
  Activities: { title: 'Activities', blurb: 'Beaches, water sports, culture and day trips across the coast.' },
  Events: { title: 'Events & Festivals', blurb: 'Complete visitor guides to the Riviera\u2019s headline events.' },
  'Hidden Gems': { title: 'Hidden Gems', blurb: 'Secret beaches and quiet villages only locals know.' },
  Tips: { title: 'Tips', blurb: 'Parking, budget, transport and the practical know-how that saves your trip.' },
};
