import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { recentUrls, INDEXNOW_KEY } from "../netlify/functions/deploy-succeeded.mjs";

test("recentUrls keeps only pages modified within the window", () => {
  const xml = `<urlset>
  <url><loc>https://adlerrochefort.com/a/</loc><lastmod>2026-10-14</lastmod></url>
  <url><loc>https://adlerrochefort.com/b/</loc><lastmod>2026-10-01</lastmod></url>
  <url><loc>https://adlerrochefort.com/c/</loc></url>
  <url><loc>https://example.com/d/</loc><lastmod>2026-10-14</lastmod></url>
  </urlset>`;
  assert.deepEqual(recentUrls(xml, new Date("2026-10-14T12:00:00Z"), 3), ["https://adlerrochefort.com/a/"]);
});

test("IndexNow key file is published with the key as its only content", () => {
  const path = new URL(`../public/${INDEXNOW_KEY}.txt`, import.meta.url);
  assert.ok(existsSync(path));
  assert.equal(readFileSync(path, "utf8"), INDEXNOW_KEY);
});
