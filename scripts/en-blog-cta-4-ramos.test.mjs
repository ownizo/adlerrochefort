import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// EN blog articles routed to the 4 already-solid EN quote wizards.
const RAMO_MAP = {
  'car-insurance-portugal': [
    'car-insurance-complete-guide',
    'car-insurance-expatriates',
    'individual-car-insurance',
    'tvde-insurance-portugal',
  ],
  'health-insurance-quote': [
    'allianz-april-medis-health-insurance-portugal-2026',
    'health-insurance-expats-portugal',
    'health-insurance-portugal-americans',
    'health-insurance-portugal',
    'pre-existing-conditions-health-insurance-portugal',
  ],
  'home-insurance-quote': [
    'holiday-home-insurance-portugal',
    'home-insurance-legalization',
    'home-insurance-multi-risk',
    'home-insurance-protect-property',
  ],
  'professional-liability-insurance-portugal': [
    'liability-insurance-complementary-therapies',
    'professional-indemnity-insurance',
  ],
};

const SLA_48_72 = new Set(['professional-liability-insurance-portugal']);

test('EN blog CTAs link straight to their EN pillar wizard, with no embedded form', () => {
  const failures = [];
  for (const [page, slugs] of Object.entries(RAMO_MAP)) {
    for (const slug of slugs) {
      const path = `public/en/blog/${slug}/index.html`;
      const html = readFileSync(path, 'utf8');
      if (html.includes('name="quote-blog"')) failures.push(`${path}: still has the raw embedded generic form`);
      const linkRe = new RegExp(`href="/en/${page}/\\?source=blog%3A${slug}#quote-form"`);
      if (!linkRe.test(html)) failures.push(`${path}: missing ?source=blog:<slug> link to /en/${page}/`);
      if (html.includes('Get 3 quotes within 24 hours')) failures.push(`${path}: still has the generic "Get 3 quotes within 24 hours" title`);
      if (SLA_48_72.has(page)) {
        if (!html.includes('Reply within 48 to 72 business hours')) failures.push(`${path}: expected the 48-72h SLA, matching the professional-liability pillar`);
      } else {
        if (!html.includes('Reply within 24 business hours')) failures.push(`${path}: expected the 24h SLA, matching its pillar`);
      }
    }
  }
  assert.deepEqual(failures, []);
});

test('the 4 EN destination wizards collect source_url and are wired to the right ramo/SLA in the backend', () => {
  const html = readFileSync('netlify/functions/submission-created.mjs', 'utf8');
  for (const formName of [
    'car-insurance-quote-wizard',
    'health-insurance-quote-wizard',
    'home-insurance-quote-wizard',
    'professional-liability-quote-wizard',
  ]) {
    assert.ok(html.includes(`"${formName}"`), `HANDLED_FORMS missing an entry for ${formName}`);
  }
});
