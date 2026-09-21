import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const { JSDOM } = createRequire(import.meta.url)('jsdom');

// The fixed set of PT blog articles whose own CTA routes straight to an RC
// (or TVDE) pillar's wizard — not merely a page that mentions or cross-links
// to one in passing ("Continuar neste tema", category listings).
const RC_ARTICLE_PATHS = [
  'public/blog/responsabilidade-civil-massagistas/index.html',
  'public/blog/responsabilidade-civil-medicina-tradicional-chinesa/index.html',
  'public/blog/responsabilidade-civil-num-evento-portugal/index.html',
  'public/blog/responsabilidade-civil-profissional/index.html',
  'public/blog/seguro-responsabilidade-civil-acupuntores/index.html',
  'public/blog/seguro-responsabilidade-civil-naturopatas/index.html',
  'public/blog/seguro-responsabilidade-civil-terapeuticas-nao-convencionais/index.html',
];
const TVDE_ARTICLE_PATH = 'public/blog/seguro-tvde-portugal/index.html';

// Scoped to the RC pillars this fix touches, not every wizard page on the
// site — a broader sweep (2026-09-21 audit) found ~22 other wizard pages
// (EN product pages, /seguros/saude/) with the same missing-stylesheet gap,
// outside today's RC-only scope.
test('RC pillar wizard/honeypot pages load their stylesheet', () => {
  const failures = [];
  for (const path of [
    'public/seguros/rc-massagistas/index.html',
    'public/seguros/rc-profissoes-especificas/index.html',
    'public/seguros/rc-terapeuticas-nao-convencionais/index.html',
    'public/seguros/rc-yoga-pilates-bem-estar/index.html',
    'public/seguros/responsabilidade-civil-profissional/index.html',
    'public/seguros/responsabilidade-civil-eventos/index.html',
  ]) {
    const html = readFileSync(path, 'utf8');
    if (!html.includes('/css/ar-quote-wizard.css')) failures.push(path);
  }
  assert.deepEqual(failures, []);
});

test('Netlify honeypot is hidden by the wizard stylesheet', () => {
  const css = readFileSync('public/css/ar-quote-wizard.css', 'utf8');
  assert.match(css, /\.contact-form-honeypot\s*\{[^}]*display\s*:\s*none\s*!important\s*;/s);
});

test('PT RC blog CTAs link straight to their pillar wizard, with no embedded form and no capital promise', () => {
  const failures = [];
  for (const path of [...RC_ARTICLE_PATHS, TVDE_ARTICLE_PATH]) {
    const html = readFileSync(path, 'utf8');
    if (html.includes('name="cotacao-blog"')) failures.push(`${path}: still has the raw embedded generic form`);
    if (!/href="\/seguros\/[a-z-]+\/\?source=blog%3A[a-z0-9-]+#pedido"/.test(html)) failures.push(`${path}: missing ?source=blog:<slug> link to a pillar wizard`);
    if (path !== TVDE_ARTICLE_PATH && html.includes('Receba 3 cotações')) failures.push(`${path}: still has the generic "Receba 3 cotações" promise`);
    if (path === TVDE_ARTICLE_PATH && !html.includes('Receba 3 cotações')) failures.push(`${path}: TVDE should keep its own CTA title, not the RC one`);
    const isEvents = path.includes('responsabilidade-civil-num-evento-portugal');
    const hasBox = html.includes('quotation-before-fill');
    if (isEvents && hasBox) failures.push(`${path}: events should not carry a positioning box`);
    if (!isEvents && !hasBox) failures.push(`${path}: missing "Antes de preencher" positioning box`);
    if (!isEvents && hasBox && /\b\d[\d.]*\s*€/.test(html.match(/<div class="hero-form-note quotation-before-fill"[\s\S]*?<\/div>/)?.[0] || '')) {
      failures.push(`${path}: positioning box names a capital figure`);
    }
    // RC deadline: 48-72h. TVDE keeps the site-wide 24h SLA (auto, not RC).
    const wantsSla = path === TVDE_ARTICLE_PATH ? '24h úteis' : '48 a 72 horas úteis';
    if (!html.includes(`Resposta em ${wantsSla}`)) failures.push(`${path}: cta-topo-micro missing "Resposta em ${wantsSla}"`);
  }
  assert.deepEqual(failures, []);
});

// With the blog CTAs linking straight to these pillars, this box is what
// the visitor actually reads before filling in the wizard — same no-capital
// rule as the blog articles' box.
const RC_PILLAR_PATHS_WITH_BOX = [
  'public/seguros/rc-massagistas/index.html',
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
  if (events.includes('Antes de preencher')) failures.push('responsabilidade-civil-eventos: should not carry a positioning box');
  assert.deepEqual(failures, []);
});

// 2026-09-21: completed the wizard on every RC pillar the blog CTAs point
// to — full identification block (with the 18-years-old rule on the
// policyholder), no capital field anywhere.
const ALL_RC_PILLAR_PATHS = [
  'public/seguros/rc-massagistas/index.html',
  'public/seguros/rc-profissoes-especificas/index.html',
  'public/seguros/rc-terapeuticas-nao-convencionais/index.html',
  'public/seguros/rc-yoga-pilates-bem-estar/index.html',
  'public/seguros/responsabilidade-civil-profissional/index.html',
  'public/seguros/responsabilidade-civil-eventos/index.html',
];
const REQUIRED_COMMON_FIELDS = ['nome', 'nif', 'data_nascimento', 'morada', 'localidade', 'codigo_postal', 'telefone', 'email', 'nacionalidade_nome', 'residente_fiscal', 'faturacao_anual', 'data_inicio', 'rgpd'];

test('every RC pillar wizard collects the complete common field set, with no capital field', () => {
  const failures = [];
  for (const path of ALL_RC_PILLAR_PATHS) {
    const html = readFileSync(path, 'utf8');
    const dom = new JSDOM(html);
    const form = dom.window.document.querySelector('form[data-wizard]');
    if (!form) { failures.push(`${path}: no data-wizard form`); continue; }
    for (const name of REQUIRED_COMMON_FIELDS) {
      const el = form.elements[name];
      if (!el) failures.push(`${path}: missing field "${name}"`);
      else if (!el.required && name !== 'nacionalidade_nome') failures.push(`${path}: "${name}" is not required`);
    }
    const dob = form.elements['data_nascimento'];
    if (dob && dob.dataset.validate !== 'birth-date-adult') failures.push(`${path}: data_nascimento must use data-validate="birth-date-adult" (18-year rule), found "${dob.dataset.validate}"`);
    if (/\bcapital\b/i.test(html.replace(/<style[\s\S]*?<\/style>/g, ''))) {
      // Case-insensitive is intentional but scoped to form controls only —
      // editorial body copy on the page is allowed to discuss capital.
      const capitalField = [...form.querySelectorAll('input, select, textarea')].find(el => /capital/i.test(el.name || '') || /capital/i.test(el.id || ''));
      if (capitalField) failures.push(`${path}: form still has a capital field (${capitalField.name || capitalField.id})`);
    }
    dom.window.close();
  }
  assert.deepEqual(failures, []);
});
