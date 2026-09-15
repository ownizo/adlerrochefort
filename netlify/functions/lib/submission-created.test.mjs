import { test } from "node:test";
import assert from "node:assert/strict";
import { renderAllFields } from "../submission-created.mjs";

// Regression test for a bug found while verifying the quote-requests-sync.mjs
// crash fix (Especificação v2 hotfix) by bundling submission-created.mjs with
// esbuild the same way Netlify's node_bundler = "esbuild" does: the bundler
// emitted "Duplicate key" warnings for matricula/data_carta/rgpd that
// `node --check` and `node --test` never surface, because a duplicate key in
// an object literal is valid JS — the later one silently wins at runtime.
// Those three field names are intentionally shared (language-neutral) by the
// PT and EN Auto wizard pages (public/seguros/auto/, public/en/
// car-insurance-portugal/); an earlier edit appended their English wording
// into QUOTE_LABELS (the PT label table) instead of QUOTE_LABELS_EN, which
// clobbered the correct PT labels for every PT-language quote email.
test("renderAllFields keeps the PT label for fields shared with the EN wizard", () => {
  const html = renderAllFields({ matricula: "AA-00-AA", data_carta: "2020-01-01", rgpd: "sim" }, false);
  assert.match(html, /Matrícula/);
  assert.match(html, /Data de emissão da carta de condução/);
  assert.match(html, /Consentimento RGPD/);
  assert.doesNotMatch(html, /Registration plate/);
  assert.doesNotMatch(html, /Driving licence issue date/);
  assert.doesNotMatch(html, /GDPR consent/);
});

test("renderAllFields uses the EN label for the same shared fields when en=true", () => {
  const html = renderAllFields({ matricula: "AA-00-AA", data_carta: "2020-01-01", rgpd: "yes" }, true);
  assert.match(html, /Registration plate/);
  assert.match(html, /Driving licence issue date/);
  assert.match(html, /GDPR consent/);
  assert.doesNotMatch(html, /Matrícula/);
});
