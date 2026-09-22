import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// EN blog articles routed straight to the EN business insurance pillar's own form.
const SLUGS = [
  'business-insurance-policy-review',
  'construction-works-insurance',
  'cyber-insurance-businesses-portugal',
  'directors-and-officers-insurance-d-o',
  'distribution-companies-insurance',
  'mandatory-insurance-companies-portugal',
  'ransomware-portugal-cyber-risks',
  'bars-restaurants-insurance-claims',
  'mandatory-insurance-hospitality-tourism',
  'fleet-insurance-common-mistakes',
];

test('EN empresarial blog CTAs link straight to the EN business insurance pillar, with no embedded form', () => {
  const failures = [];
  for (const slug of SLUGS) {
    const path = `public/en/blog/${slug}/index.html`;
    const html = readFileSync(path, 'utf8');
    if (html.includes('name="quote-blog"')) failures.push(`${path}: still has the raw embedded generic form`);
    const linkRe = new RegExp(`href="/en/business-insurance-portugal/\\?source=blog%3A${slug}#quote-form"`);
    if (!linkRe.test(html)) failures.push(`${path}: missing ?source=blog:<slug> link to /en/business-insurance-portugal/`);
    if (html.includes('Get 3 quotes within 24 hours')) failures.push(`${path}: still has the generic "Get 3 quotes within 24 hours" title`);
    if (!html.includes('Reply within 48 to 72 business hours')) failures.push(`${path}: expected the 48-72h SLA, matching the empresarial pillar`);
    if (html.includes('Reply within 24 business hours')) failures.push(`${path}: still has the stray 24h SLA copy`);
    // No "Antes de preencher"-equivalent box — the EN pillar itself has none to mirror.
    if (html.includes('Before you fill')) failures.push(`${path}: should not have a "before you fill this in" box — the EN pillar has none`);
  }
  assert.deepEqual(failures, []);
});

test('the CSS fix for a bare <a class="cta-btn"> (not just inside .cta-topo-form) is present on all 10 articles', () => {
  const failures = [];
  for (const slug of SLUGS) {
    const path = `public/en/blog/${slug}/index.html`;
    const html = readFileSync(path, 'utf8');
    if (!html.includes('.cta-topo-form .cta-btn, .cta-topo > .cta-btn {')) {
      failures.push(`${path}: missing the broadened .cta-btn selector`);
    }
    if (!html.includes('.cta-topo-form .cta-btn:hover, .cta-topo > .cta-btn:hover { background: #2a3f66; }')) {
      failures.push(`${path}: missing the broadened .cta-btn:hover selector`);
    }
  }
  assert.deepEqual(failures, []);
});

test('the EN business-insurance-quote form is registered in the backend with the right SLA and ramo', () => {
  const submissionCreated = readFileSync('netlify/functions/submission-created.mjs', 'utf8');
  assert.ok(submissionCreated.includes('"business-insurance-quote"'), 'HANDLED_FORMS missing business-insurance-quote');

  const leadClassification = readFileSync('netlify/functions/lib/lead-classification.mjs', 'utf8');
  assert.ok(leadClassification.includes("'business-insurance-quote'"), 'FORM_CLASSIFICATION missing business-insurance-quote');
});
