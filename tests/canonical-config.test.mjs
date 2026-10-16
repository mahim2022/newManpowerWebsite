import assert from 'node:assert/strict';
import { normalizeCanonicalUrl } from '../lib/constants.ts';

assert.equal(
  normalizeCanonicalUrl('https://bangladeshlaboursupply.page'),
  'https://www.recruitfrombangladesh.me',
  'Alternate-domain URLs must normalize back to the preferred canonical host.',
);

assert.equal(
  normalizeCanonicalUrl('https://www.recruitfrombangladesh.me/'),
  'https://www.recruitfrombangladesh.me',
  'Preferred canonical URLs should be normalized without a trailing slash.',
);

console.log('Canonical URL checks passed.');
