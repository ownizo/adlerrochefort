#!/usr/bin/env node
/**
 * Block 7.4 — NAP consistency.
 *
 * Name, address and phone are what a search engine uses to decide that the
 * business on this page is the same business as the one in the map pack. A
 * second spelling of the city, or a phone number written two ways, splits one
 * business into two weaker ones.
 *
 * This checks the visible markup and every JSON-LD block against a single
 * canonical record, and reports rather than rewrites: the corrections that were
 * needed are already applied, and an audit that silently edits is an audit you
 * cannot trust twice.
 *
 * Two address shapes are legitimate and both are accepted:
 *   * national pages carry both offices;
 *   * Algarve and Lagos pages carry the Lagos office only, which is the correct
 *     signal for a page about cover in the Algarve.
 * What is not legitimate is the same office written differently on two pages.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');

const NAP = {
  name: 'Adler & Rochefort',
  legalName: 'Ownizo, Unipessoal Lda.',
  telephone: '+351928226570',
  telephoneDisplay: '+351 928 226 570',
  email: 'insurance@adlerrochefort.com',
  asf: '425591790/3',
  offices: {
    lisboa: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. do Atlântico 16, Esc. 5.07',
      addressLocality: 'Lisboa',
      postalCode: '1990-019',
      addressCountry: 'PT',
    },
    lagos: {
      '@type': 'PostalAddress',
      streetAddress: 'Varandas de São João 4',
      addressLocality: 'Lagos',
      addressRegion: 'Algarve',
      postalCode: '8600-324',
      addressCountry: 'PT',
    },
  },
};

/** An address is consistent if every field it declares matches the record. */
function checkAddress(a, where, issues) {
  const office = /Atlântico/.test(a.streetAddress || '') ? 'lisboa' : /Varandas/.test(a.streetAddress || '') ? 'lagos' : null;
  if (!office) {
    issues.push({ ...where, field: 'streetAddress', found: a.streetAddress, expected: 'one of the two offices' });
    return;
  }
  for (const [k, v] of Object.entries(NAP.offices[office])) {
    if (k === 'addressRegion' && a[k] === undefined) continue; // optional, but must be right if present
    if (a[k] !== v) issues.push({ ...where, office, field: k, found: a[k] ?? '(absent)', expected: v });
  }
}

const issues = [];
const stats = {
  pages: 0,
  ldBlocks: 0,
  businessNodes: 0,
  addressesChecked: 0,
  pagesWithVisiblePhone: 0,
  pagesWithVisibleEmail: 0,
  pagesWithVisibleAddress: 0,
  shapeBoth: 0,
  shapeLagosOnly: 0,
  shapeNoAddress: 0,
};

for (const rel of globSync('**/*.html', { cwd: PUBLIC }).sort()) {
  const html = await readFile(join(PUBLIC, rel), 'utf8');
  const url = '/' + rel.replace(/index\.html$/, '');
  stats.pages += 1;

  // --- visible markup ---------------------------------------------------------
  // Every rendering of the number that is not the canonical display form or the
  // canonical tel: href is a second version of the business.
  for (const m of html.matchAll(/\+351[  ]?9\d{2}[  ]?\d{3}[  ]?\d{3}/g)) {
    if (m[0] !== NAP.telephoneDisplay && m[0] !== NAP.telephone) {
      issues.push({ url, kind: 'visible phone', found: m[0], expected: NAP.telephoneDisplay });
    }
  }
  for (const m of html.matchAll(/href="tel:([^"]*)"/g)) {
    if (m[1] !== NAP.telephone) issues.push({ url, kind: 'tel: href', found: m[1], expected: NAP.telephone });
  }
  for (const m of html.matchAll(/[\w.%+-]+@adlerrochefort\.com/g)) {
    if (m[0] !== NAP.email) issues.push({ url, kind: 'email', found: m[0], expected: NAP.email });
  }
  if (html.includes(NAP.telephoneDisplay) || html.includes('tel:' + NAP.telephone)) stats.pagesWithVisiblePhone += 1;
  if (html.includes(NAP.email)) stats.pagesWithVisibleEmail += 1;
  if (/Atl[âa]ntico|Varandas/.test(html)) stats.pagesWithVisibleAddress += 1;

  // The ASF number is the regulatory half of the identity and has to read the
  // same way wherever it appears.
  for (const m of html.matchAll(/425\s?591\s?790(\/\d)?/g)) {
    if (m[0] !== '425591790/3' && m[0] !== '425591790') {
      issues.push({ url, kind: 'ASF number', found: m[0], expected: NAP.asf });
    }
  }

  // --- structured data --------------------------------------------------------
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    stats.ldBlocks += 1;
    let json;
    try {
      json = JSON.parse(m[1]);
    } catch (e) {
      issues.push({ url, kind: 'ld+json parse error', found: e.message.slice(0, 80), expected: 'valid JSON' });
      continue;
    }
    const walk = (node) => {
      if (!node || typeof node !== 'object') return;
      if (Array.isArray(node)) return node.forEach(walk);
      if (['InsuranceAgency', 'FinancialService'].includes(node['@type'])) {
        stats.businessNodes += 1;
        const where = { url, kind: 'ld+json ' + node['@type'] };
        if (node.name !== NAP.name) issues.push({ ...where, field: 'name', found: node.name, expected: NAP.name });
        if (node.telephone && node.telephone !== NAP.telephone) {
          issues.push({ ...where, field: 'telephone', found: node.telephone, expected: NAP.telephone });
        }
        if (node.email && node.email !== NAP.email) {
          issues.push({ ...where, field: 'email', found: node.email, expected: NAP.email });
        }
        if (node.legalName && node.legalName !== NAP.legalName) {
          issues.push({ ...where, field: 'legalName', found: node.legalName, expected: NAP.legalName });
        }
        if (!node.telephone) issues.push({ ...where, field: 'telephone', found: '(absent)', expected: NAP.telephone });

        const addr = node.address;
        if (!addr) stats.shapeNoAddress += 1;
        else if (Array.isArray(addr)) stats.shapeBoth += 1;
        else stats.shapeLagosOnly += 1;
        for (const a of [addr].flat().filter(Boolean)) {
          stats.addressesChecked += 1;
          checkAddress(a, where, issues);
        }
        if (!addr) issues.push({ ...where, field: 'address', found: '(absent)', expected: 'at least one office' });
      }
      Object.values(node).forEach(walk);
    };
    walk(json);
  }
}

const byKind = {};
for (const i of issues) byKind[i.kind] = (byKind[i.kind] || 0) + 1;

await writeFile(
  join(ROOT, 'data', 'nap-report.json'),
  JSON.stringify({ generated: 'run scripts/nap.mjs to refresh', canonical: NAP, stats, issueCount: issues.length, byKind, issues }, null, 2) + '\n'
);

console.log(`pages scanned:                 ${stats.pages}`);
console.log(`ld+json blocks parsed:         ${stats.ldBlocks}  (0 parse errors expected below)`);
console.log(`business nodes checked:        ${stats.businessNodes}`);
console.log(`  carrying both offices:       ${stats.shapeBoth}`);
console.log(`  carrying the Lagos office:   ${stats.shapeLagosOnly}`);
console.log(`  carrying no address:         ${stats.shapeNoAddress}`);
console.log(`postal addresses validated:    ${stats.addressesChecked}`);
console.log(`pages showing the phone:       ${stats.pagesWithVisiblePhone}`);
console.log(`pages showing the email:       ${stats.pagesWithVisibleEmail}`);
console.log(`pages showing an address:      ${stats.pagesWithVisibleAddress}`);
console.log(`\ninconsistencies:               ${issues.length}`);
for (const [k, n] of Object.entries(byKind)) console.log(`  ${k}: ${n}`);
issues.slice(0, 25).forEach((i) => console.log(`  ${i.url}  ${i.kind}${i.field ? ' / ' + i.field : ''}: "${i.found}" != "${i.expected}"`));
