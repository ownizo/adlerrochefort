#!/usr/bin/env node
/**
 * export-vault.mjs
 *
 * Exports Netlify Blobs stores to local JSON files:
 *   vault-clients   → clients.json
 *   vault-insurance → insurance.json
 *   vault-documents → documents.json  (binary content encoded as base64)
 *
 * Required environment variables:
 *   NETLIFY_SITE_ID    – the site's ID (Settings → General → Site ID)
 *   NETLIFY_AUTH_TOKEN – a Netlify personal access token with Blobs read access
 */

import { getStore } from "@netlify/blobs";
import { writeFile } from "fs/promises";

const SITE_ID = process.env.NETLIFY_SITE_ID;
const TOKEN   = process.env.NETLIFY_AUTH_TOKEN;

if (!SITE_ID || !TOKEN) {
  console.error("Error: NETLIFY_SITE_ID and NETLIFY_AUTH_TOKEN must be set.");
  process.exit(1);
}

function store(name) {
  return getStore({ name, siteID: SITE_ID, token: TOKEN });
}

async function exportJSON(storeName, outputFile) {
  const s = store(storeName);
  const { blobs } = await s.list();

  const records = await Promise.all(
    blobs.map(blob => s.get(blob.key, { type: "json" }).catch(() => null))
  );

  const data = records.filter(Boolean);
  await writeFile(outputFile, JSON.stringify(data, null, 2));
  console.log(`✓ ${storeName}: ${data.length} registos → ${outputFile}`);
}

async function exportDocuments(outputFile) {
  const s = store("vault-documents");
  const { blobs } = await s.list();

  const records = await Promise.all(
    blobs.map(async blob => {
      try {
        const { data, metadata } = await s.getWithMetadata(blob.key, { type: "arrayBuffer" });
        return {
          id: blob.key,
          metadata,
          content: Buffer.from(data).toString("base64"),
        };
      } catch {
        return null;
      }
    })
  );

  const data = records.filter(Boolean);
  await writeFile(outputFile, JSON.stringify(data, null, 2));
  console.log(`✓ vault-documents: ${data.length} documentos → ${outputFile}`);
}

async function main() {
  console.log("A exportar Netlify Blobs...\n");

  await Promise.all([
    exportJSON("vault-clients",   "clients.json"),
    exportJSON("vault-insurance", "insurance.json"),
    exportDocuments("documents.json"),
  ]);

  console.log("\nExportação concluída.");
}

main().catch(err => {
  console.error("Erro:", err.message);
  process.exit(1);
});
