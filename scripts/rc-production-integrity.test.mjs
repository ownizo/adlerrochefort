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
