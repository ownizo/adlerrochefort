#!/usr/bin/env node
// Form-scoped maintenance pass. Older PT/EN/DE/NL wizards are hand-authored
// source in public/ (see check-generator-freshness.mjs); market pages use the
// same correction in their renderer. Never regenerates surrounding page content.
import { globSync, readFileSync, writeFileSync } from 'node:fs';
import { correctQuotationHtml } from './lib/quotation-forms.mjs';
for(const path of globSync('public/**/index.html')) {
 const source=readFileSync(path,'utf8');
 const homepage=/^public\/(?:(?:en|de|nl|fr|pl|se|dk|zh|il)\/)?index.html$/.test(path);
 if(!homepage&&!source.includes('data-wizard')&&!/^public\/(en|de)\//.test(path))continue;
 const next=correctQuotationHtml(source,{homepage});
 if(next!==source){
  if(process.argv.includes('--check'))throw new Error(`${path}: quotation form drift`);
  writeFileSync(path,next);console.log(path);
 }
}
