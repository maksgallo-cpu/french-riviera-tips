// Rehype plugin: add rel="sponsored nofollow" + target/_blank to affiliate & external links.
// Wired in astro.config.mjs. Keeps every affiliate link compliant automatically at build time.
import { visit } from 'unist-util-visit';

const AFFILIATE_HOSTS = [
  'stay22.com',
  'expedia.',
  'booking.com',
  'tpm.lv',
  'tp.media',
  'travelpayouts',
  'welcomepickups.com',
  'thedriversnice.com',
  'aviasales.',
  'tripadvisor.',
  'get.stay22',
];

function isAffiliate(href) {
  return AFFILIATE_HOSTS.some((h) => href.includes(h));
}

export default function rehypeAffiliate() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'a' || !node.properties) return;
      const href = String(node.properties.href || '');
      if (!/^https?:\/\//i.test(href)) return; // internal links untouched
      node.properties.target = '_blank';
      if (isAffiliate(href)) {
        node.properties.rel = 'sponsored nofollow noopener';
      } else {
        node.properties.rel = 'noopener';
      }
    });
  };
}
