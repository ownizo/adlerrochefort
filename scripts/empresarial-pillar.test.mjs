import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const PILLAR_PATH = 'public/seguros/empresarial/index.html';

test('empresarial pillar form collects nome, empresa, NIF (required) and a required "ramos pretendidos" multi-select', () => {
  const html = readFileSync(PILLAR_PATH, 'utf8');
  const form = html.match(/<form name="cotacao-empresarial"[\s\S]*?<\/form>/)?.[0];
  assert.ok(form, 'cotacao-empresarial form not found');

  assert.match(form, /id="nome" name="nome"[^>]*required/);
  assert.match(form, /id="email" name="email"[^>]*required/);
  assert.match(form, /id="telefone" name="telefone"[^>]*required/);
  assert.match(form, /id="empresa" name="empresa"[^>]*required/);
  assert.match(form, /id="nif" name="nif"[^>]*required/, 'NIF da empresa must be required');

  // "Ramos pretendidos" replaces the old "Seguros já em vigor" group.
  assert.ok(!form.includes('Seguros já em vigor'), 'the old "seguros já em vigor" group should be removed');
  assert.ok(!/name="seguros_atuais"/.test(form), 'the old seguros_atuais field name should be gone');
  assert.ok(form.includes('Ramos pretendidos'));
  for (const ramo of ['Acidentes de trabalho', 'Multirriscos', 'Responsabilidade civil']) {
    assert.ok(
      new RegExp(`name="ramos_pretendidos" value="${ramo}"`).test(form),
      `missing ramos_pretendidos option: ${ramo}`
    );
  }
  assert.ok(form.includes('data-required-group="ramos_pretendidos"'), 'ramos_pretendidos group must be required');

  // Explicit RGPD consent checkbox, so consentimento.aceite gets recorded.
  assert.match(form, /name="rgpd" value="sim"[^>]*required/);
});

test('empresarial pillar promises 48-72h (not 24h) throughout the visible page and JSON-LD', () => {
  const html = readFileSync(PILLAR_PATH, 'utf8');
  assert.ok(!html.includes('24 horas úteis'), 'no stray 24h SLA copy should remain');
  assert.ok(!html.includes('24h úteis'), 'no stray 24h SLA copy should remain');
  const matches = html.match(/48 a 72 horas? úteis/g) || [];
  assert.ok(matches.length >= 4, `expected at least 4 mentions of the 48-72h SLA, found ${matches.length}`);
});

test('empresarial pillar has an "Antes de preencher" box with no capital figures', () => {
  const html = readFileSync(PILLAR_PATH, 'utf8');
  const box = html.match(/<div class="hero-form-note">\s*<h3>Antes de preencher<\/h3>[\s\S]*?<\/div>/)?.[0];
  assert.ok(box, 'missing "Antes de preencher" box');
  assert.ok(!/\b\d[\d.]*\s*€/.test(box), 'positioning box should not name a capital figure');
});
