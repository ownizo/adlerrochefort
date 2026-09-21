import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...walk(p));
    else if (p.endsWith('.html')) out.push(p);
  }
  return out;
}

// The fixed set of PT blog articles whose own CTA routes straight to an RC
// pillar's wizard (data/quotation) — not merely a page that mentions or
// cross-links to one in passing ("Continuar neste tema", category listings).
const RC_ARTICLE_PATHS = [
  'public/blog/responsabilidade-civil-massagistas/index.html',
  'public/blog/responsabilidade-civil-medicina-tradicional-chinesa/index.html',
  'public/blog/responsabilidade-civil-num-evento-portugal/index.html',
  'public/blog/responsabilidade-civil-profissional/index.html',
  'public/blog/seguro-responsabilidade-civil-acupuntores/index.html',
  'public/blog/seguro-responsabilidade-civil-naturopatas/index.html',
  'public/blog/seguro-responsabilidade-civil-terapeuticas-nao-convencionais/index.html',
];
function isRcArticle(path) {
  return RC_ARTICLE_PATHS.includes(path);
}

test('wizard/honeypot pages always load their stylesheet', () => {
  const failures = [];
  for (const path of walk('public')) {
    const html = readFileSync(path, 'utf8');
    if (!html.includes('data-wizard') && !html.includes('contact-form-honeypot')) continue;
    if (!html.includes('/css/ar-quote-wizard.css')) failures.push(path);
  }
  assert.deepEqual(failures, []);
});

test('Netlify honeypot is hidden by the wizard stylesheet', () => {
  const css = readFileSync('public/css/ar-quote-wizard.css', 'utf8');
  assert.match(css, /\.contact-form-honeypot\s*\{[^}]*display\s*:\s*none\s*!important\s*;/s);
});

// With the blog CTAs linking straight to these pillars, this box is what
// the visitor actually reads before filling in the wizard — it carries the
// same no-capital rule as the blog articles' box.
const RC_PILLAR_PATHS_WITH_BOX = [
  'public/seguros/rc-massagistas/index.html',
  'public/seguros/rc-profissoes-especificas/index.html',
  'public/seguros/rc-terapeuticas-nao-convencionais/index.html',
  'public/seguros/rc-yoga-pilates-bem-estar/index.html',
  'public/seguros/responsabilidade-civil-profissional/index.html',
];

test('RC pillar "Antes de preencher" boxes never name a capital figure', () => {
  const failures = [];
  for (const path of RC_PILLAR_PATHS_WITH_BOX) {
    const html = readFileSync(path, 'utf8');
    const box = html.match(/<h3>Antes de preencher<\/h3>\s*(?:<p>.*?<\/p>\s*)+<\/div>/s)?.[0];
    if (!box) { failures.push(`${path}: missing "Antes de preencher" box`); continue; }
    if (/\b\d[\d.]*\s*€/.test(box)) failures.push(`${path}: box names a capital figure`);
  }
  const events = readFileSync('public/seguros/responsabilidade-civil-eventos/index.html', 'utf8');
  if (events.includes('Antes de preencher')) failures.push('responsabilidade-civil-eventos: should not carry the RC qualification box');
  assert.deepEqual(failures, []);
});

test('PT RC articles have no 3-quotation promise, and carry the positioning box except events', () => {
  const failures = [];
  for (const path of walk('public/blog')) {
    const html = readFileSync(path, 'utf8');
    if (!isRcArticle(path)) continue;
    if (html.includes('Receba 3 cotações')) failures.push(`${path}: 3 cotações`);
    const isEvents = path.includes('responsabilidade-civil-num-evento-portugal');
    const hasBox = html.includes('quotation-before-fill');
    if (isEvents && hasBox) failures.push(`${path}: events should not carry the RC qualification box`);
    if (!isEvents && !hasBox) failures.push(`${path}: missing qualification box`);
    if (!isEvents && hasBox && /\b\d[\d.]*\s*€/.test(html.match(/<div class="hero-form-note quotation-before-fill"[\s\S]*?<\/div>/)?.[0] || '')) {
      failures.push(`${path}: qualification box names a capital figure`);
    }
  }
  assert.deepEqual(failures, []);
});
