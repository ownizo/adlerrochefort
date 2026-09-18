#!/usr/bin/env node
// Sole page renderer for the EN/DE Private Client experience. No PT writes.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { PRIVATE_CLIENT_PAGES, renderPrivateClient } from './private-client/render.mjs';
for (const page of PRIVATE_CLIENT_PAGES) {
 const dir = fileURLToPath(new URL(`../public${page.url}`,import.meta.url));
 await mkdir(dir,{recursive:true});
 await writeFile(`${dir}index.html`,renderPrivateClient(page));
 console.log(`wrote ${page.url}`);
}
