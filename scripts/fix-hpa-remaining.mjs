#!/usr/bin/env node
/**
 * HPA → CUF, the five occurrences that were still standing.
 *
 * Not an acronym swap. Each of these treats HPA as a network alongside CUF,
 * which stopped being true in June 2026 when the Algarve units began trading
 * under the CUF brand — an enumeration that lists both is wrong about the
 * market, not just about a name, and substituting the letters would leave the
 * same claim in place. So the enumerations lose the duplicate member, and the
 * unit references become CUF with "formerly HPA" in parentheses, which is what
 * a reader who knew the old name needs in order to recognise the same hospital.
 *
 * Every replacement asserts its hit count; already-applied is tolerated,
 * anything else fails loudly rather than half-correcting a page.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const PUBLIC = '/opt/build/repo/public';

const EDITS = [
  [
    'blog/seguro-saude-expatriados-portugal/index.html',
    [
      // The brief's own example: four names where there are now three.
      [
        'CUF, Lusíadas, Hospital da Luz, HPA Algarve',
        'CUF, Lusíadas e Hospital da Luz',
        1,
      ],
      // Same list, minus the CUF that was never there — HPA was the Algarve
      // entry, so it becomes CUF and the sentence keeps three groups.
      [
        'incluindo Lusíadas, Hospital da Luz e HPA.',
        'incluindo CUF, Lusíadas e Hospital da Luz.',
        1,
      ],
    ],
  ],
  [
    'en/blog/health-insurance-portugal/index.html',
    [
      [
        'including groups such as CUF, Luz Sa&uacute;de, Lus&iacute;adas and, across the Algarve specifically, the HPA / Grupo HPA Sa&uacute;de units in Alvor, Lagos, Faro and G&aacute;mbelas.',
        'including groups such as CUF, Luz Sa&uacute;de and Lus&iacute;adas — and, across the Algarve specifically, the CUF units in Alvor, Lagos, Faro and G&aacute;mbelas (formerly HPA).',
        1,
      ],
      [
        'such as the HPA units in Alvor, Lagos or G&aacute;mbelas,',
        'such as the CUF units in Alvor, Lagos or G&aacute;mbelas (formerly HPA),',
        1,
      ],
    ],
  ],
  [
    'en/blog/pre-existing-conditions-health-insurance-portugal/index.html',
    [
      // The heading named a brand that no longer exists; the point of the item
      // is the pairing, not the operator, so it now says that.
      [
        '<strong>The HPA and private network via the SNS combination</strong>',
        '<strong>The private network and SNS combination</strong>',
        1,
      ],
      [
        'through networks such as the HPA / Grupo HPA Sa&uacute;de units in Alvor, Lagos and G&aacute;mbelas,',
        'through networks such as the CUF units in Alvor, Lagos and G&aacute;mbelas (formerly HPA),',
        1,
      ],
    ],
  ],
];

let failed = false;
for (const [rel, rules] of EDITS) {
  const file = join(PUBLIC, rel);
  let html = await readFile(file, 'utf8');
  const before = html;
  for (const [from, to, expected] of rules) {
    const hits = html.split(from).length - 1;
    if (hits !== expected) {
      const done = html.split(to).length - 1;
      if (hits === 0 && done >= expected) {
        console.log(`  = ${rel}: already applied`);
        continue;
      }
      console.error(`  ! ${rel}: expected ${expected}, found ${hits} — ${from.slice(0, 60)}`);
      failed = true;
      continue;
    }
    html = html.split(from).join(to);
    console.log(`  ✓ ${rel}: ${hits}× ${from.slice(0, 55)}…`);
  }
  if (html !== before) await writeFile(file, html);
}
process.exitCode = failed ? 1 : 0;
