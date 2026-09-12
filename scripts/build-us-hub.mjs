#!/usr/bin/env node
/**
 * Builds the US-audience hub — /en/insurance-for-americans-in-portugal/ —
 * from us-hub.data.mjs, using the same landing.mjs renderer as /seguros/*
 * and /en/insurance/tvde/ (per instruction: "commercial landing page,
 * landing.mjs, like Spain's").
 *
 * Related reading pulls the 4 existing articles this hub was built to
 * collect, plus the 4 new satellites, straight from data/articles.json —
 * the same pattern generate-landings.mjs uses for its EN related cards.
 *
 * Run: node scripts/build-us-hub.mjs
 */
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ROOT, writePage } from './lib/chrome.mjs';
import { landingPage, quoteForm } from './lib/landing.mjs';
import { HUB, GDPR } from './us-hub.data.mjs';

const data = JSON.parse(await readFile(join(ROOT, 'data', 'articles.json'), 'utf8'));
const enBySlug = new Map(data.articles.en.filter((a) => a.status === 'published').map((a) => [a.slug, a]));

const RELATED_SLUGS = [
  'us-buyers-property-cover-portugal',
  'property-title-risk-portugal',
  'health-insurance-portugal-americans',
  'health-insurance-portugal-usa',
  'us-umbrella-vs-portuguese-liability-insurance',
  'us-driving-record-car-insurance-portugal',
  'making-a-claim-portugal-us-perspective',
  'insurance-before-residency-d7-d8-golden-visa',
];
const related = RELATED_SLUGS.map((s) => enBySlug.get(s)).filter(Boolean);

if (related.length !== RELATED_SLUGS.length) {
  const missing = RELATED_SLUGS.filter((s) => !enBySlug.has(s));
  console.warn(`Warning: ${missing.length} related slug(s) not yet published — related-reading grid will be short: ${missing.join(', ')}`);
}

HUB.form = quoteForm({
  formName: 'us-hub-review',
  branch: 'Insurance for Americans',
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
