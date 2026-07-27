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

// Primary theme nav (order matters).
export const THEMES = [
  { label: 'Hotels', href: '/hotels' },
  { label: 'Activities', href: '/activities' },
  { label: 'Events', href: '/events' },
  { label: 'Hidden Gems', href: '/hidden-gems' },
  { label: 'Tips', href: '/tips' },
  { label: 'About', href: '/about' },
];

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
