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

// Same bug class, found again independently: the Habitação branch (#167) was
// written before the fix above and reproduced the exact same mistake for its
// own nine language-neutral fields (shared by public/seguros/habitacao/ and
// public/en/home-insurance-quote/), appending their English wording into
// QUOTE_LABELS instead of QUOTE_LABELS_EN. Caught this time by the same
// esbuild bundling check before any deploy — see the comment in
// submission-created.mjs next to these entries.
test("renderAllFields keeps the PT label for Habitação fields shared with the EN wizard", () => {
  const html = renderAllFields(
    {
      regime_ocupacao: "alojamento_local",
      al_regime: "tempo_inteiro",
      ano_construcao: "1990",
      area_bruta: "150",
      casas_banho: "2",
      obras_ano: "2015",
      obras_descricao: "Renovação completa",
      capital_edificio: "200000",
      capital_conteudo: "40000",
    },
    false
  );
  assert.match(html, /Regime de ocupação/);
  assert.match(html, /Regime de Alojamento Local/);
  assert.match(html, /Ano de construção/);
  assert.match(html, /Área bruta de construção/);
  assert.match(html, /N\.º de casas de banho/);
  assert.match(html, /Ano das obras/);
  assert.match(html, /Descrição das obras/);
  assert.match(html, /Capital seguro do edifício/);
  assert.match(html, /Capital seguro do conteúdo/);
  assert.doesNotMatch(html, /Occupancy/);
  assert.doesNotMatch(html, /Sum insured/);
});

test("renderAllFields uses the EN label for the same Habitação fields when en=true", () => {
  const html = renderAllFields(
    {
      regime_ocupacao: "short_term_rental",
      al_regime: "full_time",
      capital_edificio: "200000",
      capital_conteudo: "40000",
    },
    true
  );
  assert.match(html, /Occupancy/);
  assert.match(html, /Short-term rental regime/);
  assert.match(html, /Sum insured — building/);
  assert.match(html, /Sum insured — contents/);
  assert.doesNotMatch(html, /Regime de ocupação/);
});
