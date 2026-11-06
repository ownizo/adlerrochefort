// Housing audit (Nov 2026): property pages and their generators never present the
// individual home products of Hiscox, Liberty Mutual or Chubb, nor an insurer-specific
// condition as something the client will get. Insurers may be named only in the
// institutional "insurers and specialist partners" section.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { classifyPage, audit } from './home-insurer-audit.mjs';

const page = (body) => `<!doctype html><html><head><title>t</title></head><body>${body}</body></html>`;

test('a property page naming an insurer product is PROIBIDA', () => {
  const r = classifyPage('en/home-insurance-quote/index.html', page('<p>With Chubb, after a total loss the house is rebuilt even above the sum insured.</p>'));
  assert.equal(r.scope, 'property');
  assert.ok(r.hits.some((h) => h.cls === 'PROIBIDA' && h.term === 'Chubb'));
});

test('an insurer-specific condition without a brand is still caught', () => {
  const r = classifyPage('seguros/habitacao/index.html', page('<li>Reconstrução garantida após perda total.</li>'));
  assert.ok(r.hits.some((h) => h.kind === 'condition' && h.cls === 'PROIBIDA'));
  const r2 = classifyPage('de/hausversicherung-portugal/index.html', page('<p>Hausrat und Wertsachen ab 150.000 € für einen Hauptwohnsitz.</p>'));
  assert.ok(r2.hits.some((h) => h.kind === 'condition'));
});

test('the institutional partners section may name insurers', () => {
  const html = page('<section class="ar-partners-inst"><h2>Seguradoras e parceiros especializados</h2><p>Hiscox, Chubb, Liberty Mutual, Hispania e Innovarisk.</p></section><p>Analisamos o custo de reconstrução.</p>');
  const r = classifyPage('seguros/habitacao/index.html', html);
  assert.equal(r.hits.length, 0);
});

test('health pages keep their own editorial model', () => {
  const r = classifyPage('en/international-health-insurance/index.html', page('<p>APRIL International, part of the group, and Chubb travel cover.</p>'));
  assert.equal(r.scope, 'health');
  assert.ok(r.hits.every((h) => h.cls === 'PERMITIDA'));
});

test('motor pages may name the insurer, but not tie it to a home policy', () => {
  const ok = classifyPage('en/classic-car-insurance-spain/index.html', page('<p>We place this classic car policy with Hiscox in Spain.</p>'));
  assert.equal(ok.scope, 'motor');
  assert.ok(ok.hits.every((h) => h.cls === 'PERMITIDA'));
  const bad = classifyPage('en/blog/luxury-car-insurance-portugal/index.html', page('<p>Only available together with a Liberty home insurance policy.</p>'));
  assert.ok(bad.hits.some((h) => h.cls === 'PROIBIDA'));
});

test('the whole site and its generators: zero PROIBIDA, zero unresolved REVISAO', () => {
  const { pages, sources } = audit();
  const bad = [];
  for (const p of pages) for (const h of p.hits) if (h.cls !== 'PERMITIDA') bad.push(`${p.url} [${h.cls}] ${h.term} — ${h.ctx.slice(0, 100)}`);
  for (const s of sources) for (const h of s.hits) if (h.cls !== 'PERMITIDA') bad.push(`${s.file}:${h.line} [${h.cls}] ${h.term}`);
  assert.deepEqual(bad, []);
  // every exception carries a reason
  for (const p of pages) for (const h of p.hits) if (h.cls === 'PERMITIDA') assert.ok(h.reason || p.scope !== 'property', `${p.url}: ${h.term} permitted without a reason`);
  for (const s of sources) for (const h of s.hits) assert.ok(h.reason, `${s.file}:${h.line} permitted without a reason`);
});
