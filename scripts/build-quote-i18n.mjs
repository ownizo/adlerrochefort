#!/usr/bin/env node
// Only these marked data objects are generated; browser behaviour stays hand-authored.
import { readFile, writeFile } from 'node:fs/promises';
import { loadAll } from './lib/i18n.mjs';
const tables = await loadAll();
export function browserCopy(tables, health = false) {
 return Object.fromEntries(Object.entries(tables).map(([lang,t]) => [lang, health ? {
  name:t.ramos.saude.pessoa_nome, dob:t.ramos.saude.pessoa_nascimento,
  nif:t.ramos.saude.pessoa_nif, nifPlaceholder:'123456789',
  remove:t.ramos.saude.pessoa_remover, person:t.ramos.saude.pessoa_label,
  count:t.ramos.saude.pessoas_numero
 } : t.common.runtime]));
}
for (const [file,health] of [['ar-quote-form.js',false],['quote-health-persons.js',true]]) {
 const path = new URL('../public/js/'+file,import.meta.url);
 const source = await readFile(path,'utf8');
 const next = source.replace(/  var COPY = \{[\s\S]*?\n(?:  )?\};/, () => '  var COPY = '+JSON.stringify(browserCopy(tables,health),null,2)+';');
 if (process.argv.includes('--check')) {
  if(source !== next) throw new Error(`${file}: run node scripts/build-quote-i18n.mjs`);
 } else await writeFile(path,next);
}
