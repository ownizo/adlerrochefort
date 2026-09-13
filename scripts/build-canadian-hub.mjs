#!/usr/bin/env node
/**
 * Builds the Canadian-audience hub — /en/insurance-for-canadians-portugal/ —
 * from canadian-hub.data.mjs, using the same landing.mjs renderer as
 * /seguros/*, /en/insurance/tvde/, the US hub and the Irish hub.
 *
 * Related reading pulls the 3 new satellites this hub was built to collect,
 * straight from data/articles.json — the same pattern the other two hubs use.
 *
 * Run: node scripts/build-canadian-hub.mjs
 */
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ROOT, writePage } from './lib/chrome.mjs';
import { landingPage, quoteForm } from './lib/landing.mjs';
import { HUB, GDPR } from './canadian-hub.data.mjs';

const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));
const enBySlug = new Map(data.articles.en.filter((a) => a.status === 'published').map((a) => [a.slug, a]));

const RELATED_SLUGS = [
  'canadian-provincial-health-coverage-portugal',
  'canadian-driving-record-car-insurance-portugal',
  'canadian-non-resident-property-insurance-portugal',
];
const related = RELATED_SLUGS.map((s) => enBySlug.get(s)).filter(Boolean);

if (related.length !== RELATED_SLUGS.length) {
  const missing = RELATED_SLUGS.filter((s) => !enBySlug.has(s));
  console.warn(`Warning: ${missing.length} related slug(s) not yet published — related-reading grid will be short: ${missing.join(', ')}`);
}

HUB.form = quoteForm({
  formName: 'canadian-hub-review',
  branch: 'Insurance for Canadians',
  title: 'Get an Insurance Review',
  subtitle: 'Tell us the essentials. We reply within 24 working hours.',
  submit: 'Request my review →',
  micro: GDPR,
  lang: 'en',
  fields: [
    { name: 'name', label: 'Full name', required: true, placeholder: 'Your full name' },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@email.com' },
    { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', placeholder: 'Optional' },
    {
      name: 'situation',
      label: 'What brings you to Portugal?',
      type: 'select',
      placeholder: 'Select an option',
      options: ['Buying property', 'Relocating / applying for residency', 'Already living here', 'Not sure yet'],
    },
    {
      name: 'products',
      label: 'What do you need help with?',
      type: 'checkboxes',
      options: ['Home insurance', 'Health insurance', 'Car insurance', 'Landlord insurance', 'Something else'],
    },
    { name: 'message', label: 'Message', type: 'textarea', full: true, placeholder: 'Anything else we should know? (optional)' },
  ],
});

const written = await writePage(HUB.url.replace(/^\/|\/$/g, ''), landingPage(HUB, related));
console.log(written);
