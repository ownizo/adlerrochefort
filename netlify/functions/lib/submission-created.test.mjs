import { test } from "node:test";
import assert from "node:assert/strict";
import { renderAllFields, quoteIntro } from "../submission-created.mjs";

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

// B3 (Especificação v2): the ISO code is what quote_requests stores
// (dados_comuns.nacionalidade), but a human reading the notification email
// shouldn't have to decode "AT" — show the country name instead, same
// lookup table the wizard's own combobox uses.
test("renderAllFields shows the country name for nacionalidade (PT), not the raw ISO code", () => {
  const html = renderAllFields({ nacionalidade: "AT" }, false);
  assert.match(html, /Áustria/);
  assert.doesNotMatch(html, />AT</);
});

test("renderAllFields shows the country name for nationality (EN), not the raw ISO code", () => {
  const html = renderAllFields({ nationality: "AT" }, true);
  assert.match(html, /Austria/);
  assert.doesNotMatch(html, />AT</);
});

test("renderAllFields falls back to the raw code for a nationality value not in the lookup table, rather than showing nothing", () => {
  const html = renderAllFields({ nacionalidade: "ZZ-not-a-real-code" }, false);
  assert.match(html, /ZZ-not-a-real-code/);
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

// Especificação v2, Fase 2 C4 (Saúde) — dados_dinamicos is excluded from the
// plain field loop (it's raw JSON, not a human-readable value), so without
// dedicated handling the email would say nothing about who is actually
// being insured. This is the regression test for that gap.
test("renderAllFields shows each pessoa segura block from dados_dinamicos (PT)", () => {
  const html = renderAllFields({
    nome: "Hugo Teste",
    dados_dinamicos: JSON.stringify([
      { nome: "Hugo Teste", data_nascimento: "1985-03-15", nif: "501442600" },
      { nome: "Maria Teste", data_nascimento: "2015-06-01", nif: "501442601" },
    ]),
  }, false);
  assert.match(html, /Pessoas a segurar/);
  assert.match(html, /Pessoa 1/);
  assert.match(html, /Hugo Teste/);
  assert.match(html, /1985-03-15/);
  assert.match(html, /501442600/);
  assert.match(html, /Pessoa 2/);
  assert.match(html, /Maria Teste/);
});

test("renderAllFields shows each person block from dados_dinamicos (EN)", () => {
  const html = renderAllFields({
    name: "Jane Smith",
    dados_dinamicos: JSON.stringify([{ nome: "Jane Smith", data_nascimento: "1980-01-01", nif: "501442600" }]),
  }, true);
  assert.match(html, /People to insure/);
  assert.match(html, /Person 1/);
  assert.match(html, /Jane Smith/);
});

test("renderAllFields never throws and shows nothing extra when dados_dinamicos is absent, empty, or malformed", () => {
  assert.doesNotThrow(() => renderAllFields({ nome: "X" }, false));
  assert.doesNotMatch(renderAllFields({ nome: "X", dados_dinamicos: "" }, false), /Pessoas a segurar/);
  assert.doesNotThrow(() => renderAllFields({ nome: "X", dados_dinamicos: "{not json" }, false));
  assert.doesNotMatch(renderAllFields({ nome: "X", dados_dinamicos: "{not json" }, false), /Pessoas a segurar/);
});

// Especificação v2, A3: RC's real turnaround is 48-72 working hours, not
// the 24h every other ramo promises. quoteIntro() is what the intake
// email's opening line comes from — this is the regression test for the
// bug the prompt reported (RC Yoga's email said 24h) and for it not
// leaking onto ramos that never asked for it.
test("quoteIntro promises 24h for a form with no slaHours (every ramo but RC)", () => {
  const text = quoteIntro({ page: "/seguros/auto/" }, "https://adlerrochefort.com/seguros/auto/");
  assert.match(text, /24 horas úteis/);
  assert.doesNotMatch(text, /48/);
});

test("quoteIntro promises 48-72h for a form with slaHours set (the 6 RC forms)", () => {
  const text = quoteIntro(
    { page: "/seguros/rc-yoga-pilates-bem-estar/", slaHours: "48 a 72" },
    "https://adlerrochefort.com/seguros/rc-yoga-pilates-bem-estar/"
  );
  assert.match(text, /48 a 72 horas úteis/);
  assert.doesNotMatch(text, /\b24 horas\b/);
});

test("quoteIntro never applies slaHours wording to an EN form (none of the 6 RC forms are EN today, but the branch must stay ramo-agnostic)", () => {
  const text = quoteIntro({ page: "/en/car-insurance-portugal/", en: true }, "https://adlerrochefort.com/en/car-insurance-portugal/");
  assert.match(text, /A reply within one working day was promised/);
});
