import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, globSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { HANDLED_FORMS, renderAllFields } from './submission-created.mjs';

const PUBLIC = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'public');

// Fields that never reach the notification body, or whose label is not this
// check's business (nacionalidade_nome is the combobox's search text, which
// displayValue drops in favour of the ISO code next to it).
const INTERNAL = new Set([
  'form-name', 'bot-field', 'source', 'source_url', 'subject', 'lang', 'language',
  'market', 'landing_page', 'product_interest', 'dados_dinamicos', 'ramo', 'nacionalidade_nome',
]);

/** form-name -> the field names its published HTML actually submits. */
function fieldsByForm() {
  const byForm = new Map();
  for (const rel of globSync('**/index.html', { cwd: PUBLIC })) {
    const html = readFileSync(join(PUBLIC, rel), 'utf8');
    for (const form of html.matchAll(/<form\b[\s\S]*?<\/form>/g)) {
      const name = form[0].match(/name="form-name" value="([^"]+)"/)?.[1];
      if (!name) continue;
      const set = byForm.get(name) || new Set();
      for (const f of form[0].matchAll(/\bname="([a-z_]+)"/g)) if (!INTERNAL.has(f[1])) set.add(f[1]);
      byForm.set(name, set);
    }
  }
  return byForm;
}

// A label that comes back equal to its own humanised key means no table had
// an entry for that field — harmless when the field name is already English
// ("phone" -> "Phone"), and a leak when it is not: an English notification
// that says "Ramos pretendidos", "Seguro atual" or "Consentement" is showing
// the visitor's field name to a team that reads the inbox in English. This is
// the sweep that found those four; it now keeps them fixed.
const NON_ENGLISH_TOKENS = /^(nome|ramos|seguro|morada|localidade|nacionalidade|telefone|empresa|consent(ement|imento)?|toestemming|einwilligung|zgoda|samtycke|vencimento|data|valor|volume|apolice)([_-]|$)/i;

test('no English-language notification email labels a field with its raw non-English name', () => {
  const leaks = [];
  for (const [formName, fields] of fieldsByForm()) {
    const cfg = HANDLED_FORMS[formName];
    if (!cfg?.quote) continue;
    // Only forms whose email is written in English: `lang` selects a
    // language-specific table, and a Dutch email may of course say "Naam".
    if (cfg.lang || !cfg.en) continue;

    const data = Object.fromEntries([...fields].map((f) => [f, 'x']));
    if (!Object.keys(data).length) continue;
    const labels = [...renderAllFields(data, cfg.en, cfg.lang).matchAll(/<strong>([^<]+)<\/strong>/g)]
      .map((m) => m[1].replace(/:$/, ''));

    Object.keys(data).forEach((key, i) => {
      const label = labels[i];
      if (!label) return;
      const humanised = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
      if (label === humanised && NON_ENGLISH_TOKENS.test(key)) {
        leaks.push(`${formName}: "${key}" renders as "${label}"`);
      }
    });
  }
  assert.deepEqual([...new Set(leaks)], []);
});
