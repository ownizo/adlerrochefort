#!/usr/bin/env node
/**
 * Block 5 — organisation schema, everywhere it is declared.
 *
 * The commercial hub at /seguros/ was generated with a complete InsuranceAgency
 * entity. The two homepages and eight older language and location pages predate
 * it and are missing three things:
 *
 *   * alternateName — the trading name and the registered company name are not
 *     the same, and only one of them appears in the ASF register;
 *   * identifier — the ASF registration number, which is the single most
 *     load-bearing fact about a regulated intermediary;
 *   * stable @id values, so the homepage, the hub and every landing page refer
 *     to one organisation rather than three lookalikes.
 *
 * The pass runs over every page carrying an InsuranceAgency node rather than a
 * hand-kept list, because the drift it exists to fix is what a hand-kept list
 * produces. Pages whose entity is already complete are left byte for byte.
 *
 * It also removes aggregateRating. A 5.0 from three reviews cannot be
 * substantiated, and the testimonials it was supposed to summarise were taken
 * down in block 0 — leaving the markup would assert a rating with nothing on
 * the page behind it.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// The ASF registration and the registered company name are the same in every
// language; only the label on the identifier is translated.
const PAGES = execSync('grep -rl \'"InsuranceAgency"\' public --include="*.html"', { cwd: ROOT })
  .toString()
  .trim()
  .split('\n')
  .filter(Boolean)
  .sort()
  .map((path) => ({ path, lang: path.startsWith('public/en/') ? 'en' : 'pt' }));

const report = [];

for (const { path: rel, lang } of PAGES) {
  const path = join(ROOT, rel);
  let html = await readFile(path, 'utf8');
  const before = html;
  const notes = [];

  html = html.replace(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    (whole, body) => {
      let json;
      try {
        json = JSON.parse(body);
      } catch {
        return whole;
      }

      if (json['@type'] === 'InsuranceAgency') {
        if (json.aggregateRating) {
          delete json.aggregateRating;
          notes.push('aggregateRating removed (unverifiable, no visible reviews)');
        }
        if (!json.alternateName) {
          json.alternateName = 'Ownizo, Unipessoal Lda.';
          notes.push('alternateName added');
        }
        if (!json.identifier) {
          json.identifier = {
            '@type': 'PropertyValue',
            name: lang === 'pt' ? 'Registo ASF' : 'ASF registration',
            value: '425591790/3',
          };
          notes.push('ASF identifier added');
        }
        if (!json['@id']) {
          json['@id'] = 'https://adlerrochefort.com/#organization';
          notes.push('@id added');
        }
        return `<script type="application/ld+json">\n${JSON.stringify(json, null, 2)}\n</script>`;
      }

      if (json['@type'] === 'WebSite') {
        if (!json['@id']) {
          json['@id'] = 'https://adlerrochefort.com/#website';
          json.publisher = { '@id': 'https://adlerrochefort.com/#organization' };
          notes.push('WebSite @id and publisher reference added');
        }
        return `<script type="application/ld+json">\n${JSON.stringify(json, null, 2)}\n</script>`;
      }

      return whole;
    }
  );

  if (html !== before) await writeFile(path, html);
  report.push([rel, notes]);
}

const changed = report.filter(([, notes]) => notes.length);
console.log(`pages declaring InsuranceAgency: ${report.length}`);
console.log(`pages already current:            ${report.length - changed.length}`);
console.log(`pages updated:                    ${changed.length}`);
for (const [rel, notes] of changed) console.log(`  ${rel}: ${notes.join('; ')}`);
