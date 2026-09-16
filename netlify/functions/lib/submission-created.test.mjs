import { test } from "node:test";
import assert from "node:assert/strict";
import handler, { renderAllFields, quoteIntro, buildIntakeEmail, HANDLED_FORMS } from "../submission-created.mjs";
import { TEST_MODE_SENTINEL } from "./lead-classification.mjs";

/** A minimal stand-in for the Netlify Forms `submission-created` event
 *  Request the default export expects — only `.json()` is ever called on
 *  it. */
function mockRequest(payload) {
  return { json: async () => ({ payload }) };
}

/** Runs `fn` with console.log intercepted, returning every line logged
 *  during the call alongside fn's own return value — used below to assert
 *  on what the handler actually logged without silencing real test output
 *  for anything else. */
async function captureLogs(fn) {
  const lines = [];
  const original = console.log;
  console.log = (...args) => lines.push(args.join(" "));
  try {
    const result = await fn();
    return { result, lines };
  } finally {
    console.log = original;
  }
}

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

test("quoteIntro defaults to 'one working day' for an EN form with no slaHours", () => {
  const text = quoteIntro({ page: "/en/car-insurance-portugal/", en: true }, "https://adlerrochefort.com/en/car-insurance-portugal/");
  assert.match(text, /A reply within one working day was promised/);
});

// Especificação v2, C2: "professional-liability-quote-wizard" (/en/
// professional-liability-insurance-portugal/) is the first EN HANDLED_FORMS
// entry to set slaHours — the EN branch above used to ignore slaHours
// entirely and always say "one working day" (~24h), which would have been a
// silent wrong promise for this 48-72h form. Regression test for that fix.
test("quoteIntro honours slaHours on an EN form too, translating the PT-style '48 a 72' into English wording", () => {
  const text = quoteIntro(
    { page: "/en/professional-liability-insurance-portugal/", en: true, slaHours: "48 a 72" },
    "https://adlerrochefort.com/en/professional-liability-insurance-portugal/"
  );
  assert.match(text, /A reply within 48 to 72 business hours was promised/);
  assert.doesNotMatch(text, /one working day/);
});

// Especificação v2, "restantes línguas" Parte 0 ponto 3 / Parte 4 — the
// test-mode mechanism the Hugo now uses instead of manual submissions.
// buildIntakeEmail is pure (extracted from the default handler precisely so
// test mode can build the same content a real send would, without sending);
// covered directly here in addition to through the handler below.
test("buildIntakeEmail builds the same subject/html shape for a quote form regardless of who calls it", () => {
  const formConfig = HANDLED_FORMS["cotacao-rc-yoga"];
  const data = { nome: "Hugo Teste", email: "hugo@example.com", nif: "501442600" };
  const { subject, html } = buildIntakeEmail(formConfig, data, { created_at: "2026-09-15T10:00:00Z" });
  assert.match(subject, /Hugo Teste/);
  assert.match(html, /Novo pedido de análise/);
  assert.match(html, /48 a 72 horas úteis/);
  assert.match(html, /Hugo Teste/);
});

test("test-mode submission (name = TEST_MODE_SENTINEL): logs both the email and CRM payloads, sends neither, still attempts the quote_requests write", async () => {
  const req = mockRequest({
    form_name: "cotacao-rc-yoga",
    id: "sub-test-1",
    created_at: "2026-09-15T10:00:00Z",
    data: {
      nome: TEST_MODE_SENTINEL,
      email: "agente-teste@example.com",
      nif: "501442600",
      morada: "Rua Teste 123",
      codigo_postal: "8600-100",
      rgpd: "sim",
    },
  });

  const { result: response, lines } = await captureLogs(() => handler(req));

  assert.equal(response.status, 200);
  assert.equal(await response.text(), "OK");

  const joined = lines.join("\n");
  assert.match(joined, /TEST MODE formName=cotacao-rc-yoga/);
  assert.match(joined, /TEST_EMAIL subject=/);
  assert.match(joined, /TEST_EMAIL_HTML/);
  assert.match(joined, /TEST_CRM_PAYLOAD/);

  // Neither real path was taken: no CRM_SYNC_* line (only sendLeadToCrm's
  // logEvent emits those, and test mode never calls it), and no "Failed to
  // send intake notification email" (only a real resend.emails.send() call
  // could produce that, and test mode never constructs a Resend client).
  assert.doesNotMatch(joined, /CRM_SYNC_(OK|FAILED|SKIPPED)/);
  assert.doesNotMatch(joined, /Failed to send intake notification email/);

  // The logged CRM payload is still the real, privacy-restricted one
  // (crm-sync.mjs's buildCrmLeadPayload is untouched) — confirm none of the
  // fields it must never carry leaked into the log line.
  const crmLine = lines.find((l) => l.includes("TEST_CRM_PAYLOAD"));
  assert.ok(crmLine);
  for (const forbidden of ["501442600", "Rua Teste 123", "8600-100"]) {
    assert.doesNotMatch(crmLine, new RegExp(forbidden.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  // quote_requests write was attempted (not skipped for lack of contact
  // data) — with no SUPABASE_URL/SERVICE_ROLE_KEY set in this test process,
  // it logs SKIPPED reason=not_configured rather than making a network
  // call; the isTest=true -> teste=true wiring itself is covered directly
  // in quote-requests-sync.test.mjs.
  assert.match(joined, /\[quote-requests-sync\] SKIPPED reason=not_configured/);
});

test("a normal (non-test) submission never logs any TEST_* line, and still attempts the real email/CRM paths", async () => {
  const req = mockRequest({
    form_name: "cotacao-rc-yoga",
    id: "sub-real-1",
    created_at: "2026-09-15T10:00:00Z",
    data: { nome: "Maria Real", email: "maria@example.com", nif: "501442600", rgpd: "sim" },
  });

  const { result: response, lines } = await captureLogs(() => handler(req));

  assert.equal(response.status, 200);
  const joined = lines.join("\n");
  assert.doesNotMatch(joined, /TEST MODE/);
  assert.doesNotMatch(joined, /TEST_EMAIL/);
  assert.doesNotMatch(joined, /TEST_CRM_PAYLOAD/);
  // Real paths attempted (and skipped only for lack of env vars, same as
  // every other test in this suite runs without credentials configured).
  assert.match(joined, /RESEND_API_KEY not set/);
  assert.match(joined, /\[quote-requests-sync\] SKIPPED reason=not_configured/);
});

// Especificação v2, "restantes línguas" Parte 1 ponto 1 — payload_teste
// end-to-end through the real handler, with Supabase env vars set and
// fetch mocked, so this confirms what actually lands in the row body, not
// just the console.log lines (which the other test-mode test already
// covers). The two channels must agree: what gets logged is what gets
// written.
test("test-mode submission writes payload_teste onto the quote_requests row, matching what was logged", async () => {
  const originalFetch = global.fetch;
  const originalUrl = process.env.SUPABASE_URL;
  const originalKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  process.env.SUPABASE_URL = "https://example.invalid.supabase.co";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "service-role-secret";
  let postedBody;
  global.fetch = async (url, options) => {
    postedBody = JSON.parse(options.body);
    return new Response(null, { status: 201 });
  };

  const req = mockRequest({
    form_name: "cotacao-rc-yoga",
    id: "sub-test-2",
    created_at: "2026-09-15T10:00:00Z",
    data: { nome: TEST_MODE_SENTINEL, email: "agente-teste@example.com", nif: "501442600", rgpd: "sim" },
  });

  const { result: response, lines } = await captureLogs(() => handler(req));

  global.fetch = originalFetch;
  if (originalUrl === undefined) delete process.env.SUPABASE_URL;
  else process.env.SUPABASE_URL = originalUrl;
  if (originalKey === undefined) delete process.env.SUPABASE_SERVICE_ROLE_KEY;
  else process.env.SUPABASE_SERVICE_ROLE_KEY = originalKey;

  assert.equal(response.status, 200);
  assert.equal(postedBody.teste, true);
  assert.ok(postedBody.payload_teste, "row body must carry payload_teste for a test-mode row");
  assert.match(postedBody.payload_teste.email.subject, /Hugo Teste|TESTE-AGENTE-NAO-PROCESSAR/);
  assert.equal(typeof postedBody.payload_teste.email.html, "string");
  assert.ok(postedBody.payload_teste.crm, "crm key must be present even when the payload itself is null");

  // The logged subject and the written subject are the exact same string —
  // the two verification channels (log line, database column) must never
  // disagree about what was actually constructed.
  const loggedSubjectLine = lines.find((l) => l.includes("TEST_EMAIL subject="));
  assert.ok(loggedSubjectLine);
  assert.equal(loggedSubjectLine.includes(JSON.stringify(postedBody.payload_teste.email.subject)), true);
});

// Especificação v2, "restantes línguas" Parte A ponto 2 — regression test
// for the real bug the first de-autoversicherung-wizard test-mode
// submission surfaced: renderAllFields/quoteIntro read English/Portuguese
// labels for a German wizard form (via `en: true`, the de-angebot-anfrage/
// nl-offerte-aanvraag convention this wizard's HANDLED_FORMS entry
// inherited by copying that pattern) instead of German. Fixed by adding
// `lang: "de"` to the form config and a `lang === "de"` branch, checked
// before `en`, in all three functions.
test("a German wizard form (formConfig.lang === 'de') renders German labels, not English or Portuguese", () => {
  const formConfig = HANDLED_FORMS["de-autoversicherung-wizard"];
  assert.equal(formConfig.lang, "de");
  const html = renderAllFields(
    { nome: "Hans Müller", matricula: "AA-00-AA", data_carta: "2005-06-15", rgpd: "sim", nacionalidade: "DE" },
    Boolean(formConfig.en),
    formConfig.lang
  );
  assert.match(html, /Kennzeichen/);
  assert.match(html, /Datum der Führerscheinausstellung/);
  assert.match(html, /DSGVO-Einwilligung/);
  assert.match(html, /Deutschland/); // German country name, not "Germany"
  assert.doesNotMatch(html, /Registration plate/);
  assert.doesNotMatch(html, /Driving licence issue date/);
  assert.doesNotMatch(html, /GDPR consent/);
  assert.doesNotMatch(html, />Germany</);
});

test("quoteIntro promises 24 Arbeitsstunden in German for a lang: 'de' form with no slaHours", () => {
  const text = quoteIntro({ page: "/de/autoversicherung-portugal/", lang: "de", en: true }, "https://adlerrochefort.com/de/autoversicherung-portugal/");
  assert.match(text, /24 Arbeitsstunden/);
  assert.doesNotMatch(text, /one working day/);
  assert.doesNotMatch(text, /24 horas úteis/);
});

test("test-mode submission on the DE Auto wizard writes German labels into payload_teste.email", async () => {
  const req = mockRequest({
    form_name: "de-autoversicherung-wizard",
    id: "sub-test-de-1",
    created_at: "2026-09-15T10:00:00Z",
    data: {
      nome: TEST_MODE_SENTINEL,
      email: "agente-teste@example.com",
      nif: "501442600",
      matricula: "AA-00-AA",
      data_carta: "2005-06-15",
      rgpd: "sim",
    },
  });
  const { lines } = await captureLogs(() => handler(req));
  const htmlLine = lines.find((l) => l.startsWith("[submission-created] TEST_EMAIL_HTML"));
  assert.ok(htmlLine);
  assert.match(htmlLine, /Kennzeichen/);
  assert.doesNotMatch(htmlLine, /Registration plate/);
});

// Especificação v2, Parte 2 continuação (NL) — same regression-test shape as
// the DE tests above, for the first NL dedicated wizard form.
test("a Dutch wizard form (formConfig.lang === 'nl') renders Dutch labels, not English or Portuguese", () => {
  const formConfig = HANDLED_FORMS["nl-woonverzekering-wizard"];
  assert.equal(formConfig.lang, "nl");
  const html = renderAllFields(
    { nome: "Jan de Vries", capital_edificio: "250000", rgpd: "ja", nacionalidade: "NL" },
    Boolean(formConfig.en),
    formConfig.lang
  );
  assert.match(html, /Verzekerd bedrag gebouw/);
  assert.match(html, /AVG-toestemming/);
  assert.match(html, /Nederland/); // Dutch country name, not "Netherlands"
  assert.doesNotMatch(html, /Building insured sum/);
  assert.doesNotMatch(html, /GDPR consent/);
  assert.doesNotMatch(html, />Netherlands</);
});

test("quoteIntro promises 24 uur in Dutch for a lang: 'nl' form with no slaHours", () => {
  const text = quoteIntro({ page: "/nl/woonverzekering-portugal/", lang: "nl" }, "https://adlerrochefort.com/nl/woonverzekering-portugal/");
  assert.match(text, /24 uur/);
  assert.doesNotMatch(text, /one working day/);
  assert.doesNotMatch(text, /24 Arbeitsstunden/);
});

test("test-mode submission on the NL Habitação wizard writes Dutch labels into payload_teste.email", async () => {
  const req = mockRequest({
    form_name: "nl-woonverzekering-wizard",
    id: "sub-test-nl-1",
    created_at: "2026-09-16T10:00:00Z",
    data: {
      nome: TEST_MODE_SENTINEL,
      email: "agente-teste@example.com",
      nif: "501442600",
      capital_edificio: "250000",
      capital_conteudo: "40000",
      rgpd: "ja",
    },
  });
  const { lines } = await captureLogs(() => handler(req));
  const htmlLine = lines.find((l) => l.startsWith("[submission-created] TEST_EMAIL_HTML"));
  assert.ok(htmlLine);
  assert.match(htmlLine, /Verzekerd bedrag gebouw/);
  assert.doesNotMatch(htmlLine, /Building insured sum/);
});

// Especificação v2, Parte 2 continuação (NL) — nl-zorgverzekering-wizard is
// the first NL form to carry dados_dinamicos (the "pessoa segura"
// repeater); confirms DYNAMIC_BLOCKS_COPY.nl renders in Dutch.
test("a Dutch Saúde wizard's dynamic-blocks section (dados_dinamicos) renders in Dutch", () => {
  const formConfig = HANDLED_FORMS["nl-zorgverzekering-wizard"];
  assert.equal(formConfig.lang, "nl");
  const html = renderAllFields(
    {
      nome: "Jan de Vries",
      rgpd: "ja",
      dados_dinamicos: JSON.stringify([{ nome: "Klara de Vries", data_nascimento: "2015-06-01", nif: "200000012" }]),
    },
    Boolean(formConfig.en),
    formConfig.lang
  );
  assert.match(html, /Te verzekeren personen/);
  assert.match(html, /Geboortedatum/);
  assert.doesNotMatch(html, /People to insure/);
  assert.doesNotMatch(html, /Zu versichernde Personen/);
});

// Especificação v2, Parte 2 continuação (NL) — third and final NL wizard in
// this pass; confirms the 48-72h SLA (not the default 24h) carries through
// in Dutch too, same as the DE RC Profissional form.
test("quoteIntro promises 48 tot 72 werkuren in Dutch for a lang: 'nl' form with slaHours set", () => {
  const formConfig = HANDLED_FORMS["nl-zzp-beroepsaansprakelijkheid-wizard"];
  assert.equal(formConfig.lang, "nl");
  assert.equal(formConfig.slaHours, "48 a 72");
  const text = quoteIntro(formConfig, "https://adlerrochefort.com/nl/zzp-beroepsaansprakelijkheid-portugal/");
  assert.match(text, /48 tot 72 werkuren/);
  assert.doesNotMatch(text, /24 uur/);
  assert.doesNotMatch(text, /48 bis 72 Arbeitsstunden/);
});

test("test-mode submission on the NL RC Profissional wizard writes Dutch labels into payload_teste.email", async () => {
  const req = mockRequest({
    form_name: "nl-zzp-beroepsaansprakelijkheid-wizard",
    id: "sub-test-nl-2",
    created_at: "2026-09-16T10:00:00Z",
    data: {
      nome: TEST_MODE_SENTINEL,
      email: "agente-teste@example.com",
      nif: "501442600",
      faturacao_anual: "85000",
      rgpd: "ja",
    },
  });
  const { lines } = await captureLogs(() => handler(req));
  const htmlLine = lines.find((l) => l.startsWith("[submission-created] TEST_EMAIL_HTML"));
  assert.ok(htmlLine);
  assert.match(htmlLine, /Jaaromzet/);
  assert.match(htmlLine, /48 tot 72 werkuren/);
  assert.doesNotMatch(htmlLine, /Annual turnover/);
});

// Especificação v2, Parte D2 — Bedrijfsverzekering NL, built from scratch
// (no dedicated NL page existed for this ramo before). Confirms the
// company-facing labels render in Dutch and the ramo_* checkbox fields
// (present only when checked) each get their own label.
test("test-mode submission on the NL Bedrijfsverzekering wizard writes Dutch labels for the company fields into payload_teste.email", async () => {
  const req = mockRequest({
    form_name: "nl-bedrijfsverzekering-wizard",
    id: "sub-test-nl-3",
    created_at: "2026-09-16T10:00:00Z",
    data: {
      nome: TEST_MODE_SENTINEL,
      email: "agente-teste@example.com",
      nif: "501442600",
      nome_empresa: "De Vries Consultancy Lda.",
      nif_empresa: "501442600",
      ramo_multirriscos: "sim",
      rgpd: "ja",
    },
  });
  const { lines } = await captureLogs(() => handler(req));
  const htmlLine = lines.find((l) => l.startsWith("[submission-created] TEST_EMAIL_HTML"));
  assert.ok(htmlLine);
  assert.match(htmlLine, /Bedrijfsnaam/);
  assert.match(htmlLine, /NIF van het bedrijf/);
  assert.match(htmlLine, /Multirisicoverzekering/);
  assert.match(htmlLine, /48 tot 72 werkuren/);
});

// Especificação v2, Parte D1 — Lebensversicherung DE, built from the
// generic "Lebensversicherung" branch (page already existed, only the
// form itself was dedicated). Confirms the label renders in German and,
// deliberately, that no health/lifestyle field ever appears.
test("test-mode submission on the DE Lebensversicherung wizard writes German labels into payload_teste.email, with no health fields", async () => {
  const req = mockRequest({
    form_name: "de-lebensversicherung-wizard",
    id: "sub-test-de-2",
    created_at: "2026-09-16T10:00:00Z",
    data: {
      nome: TEST_MODE_SENTINEL,
      email: "agente-teste@example.com",
      nif: "501442600",
      capital: "150000",
      rgpd: "sim",
    },
  });
  const { lines } = await captureLogs(() => handler(req));
  const htmlLine = lines.find((l) => l.startsWith("[submission-created] TEST_EMAIL_HTML"));
  assert.ok(htmlLine);
  assert.match(htmlLine, /Gewünschtes Kapital/);
  assert.doesNotMatch(htmlLine, /Sum insured/i);
  assert.doesNotMatch(htmlLine, /(smoking|raucher|fumador)/i);
});

// Especificação v2, Parte D3 — Private Clients DE, built from the generic
// "Private Clients" branch. Only two wizard steps (no ramo-specific
// fields) — confirms the transversal block alone still renders correctly
// in German with the right SLA.
test("test-mode submission on the DE Private Clients wizard writes German labels into payload_teste.email", async () => {
  const req = mockRequest({
    form_name: "de-private-clients-wizard",
    id: "sub-test-de-3",
    created_at: "2026-09-16T10:00:00Z",
    data: {
      nome: TEST_MODE_SENTINEL,
      email: "agente-teste@example.com",
      nif: "501442600",
      rgpd: "sim",
    },
  });
  const { lines } = await captureLogs(() => handler(req));
  const htmlLine = lines.find((l) => l.startsWith("[submission-created] TEST_EMAIL_HTML"));
  assert.ok(htmlLine);
  assert.match(htmlLine, /24 Arbeitsstunden/);
  assert.match(htmlLine, /DSGVO-Einwilligung/);
});

// Especificação v2, Parte B — PL/SE/DK/ZH share one generator and are
// converted together. Same regression-test shape as the DE/NL tests above,
// one per language, for the first ramo (Home).
test("a Polish wizard form (formConfig.lang === 'pl') renders Polish labels, not English or Portuguese", () => {
  const formConfig = HANDLED_FORMS["pl-ubezpieczenie-domu-wizard"];
  assert.equal(formConfig.lang, "pl");
  const html = renderAllFields(
    { nome: "Jan Kowalski", capital_edificio: "250000", rgpd: "sim", nacionalidade: "PL" },
    Boolean(formConfig.en),
    formConfig.lang
  );
  assert.match(html, /Suma ubezpieczenia budynku/);
  assert.match(html, /Polska/); // Polish country name, not "Poland"
  assert.doesNotMatch(html, /Building insured sum/);
  assert.doesNotMatch(html, />Poland</);
});

test("a Swedish wizard form (formConfig.lang === 'sv') renders Swedish labels", () => {
  const formConfig = HANDLED_FORMS["se-hemforsakring-wizard"];
  assert.equal(formConfig.lang, "sv");
  const html = renderAllFields(
    { nome: "Erik Andersson", capital_edificio: "250000", rgpd: "sim", nacionalidade: "SE" },
    Boolean(formConfig.en),
    formConfig.lang
  );
  assert.match(html, /Försäkringsbelopp byggnad/);
  assert.match(html, /Sverige/);
});

test("a Danish wizard form (formConfig.lang === 'da') renders Danish labels", () => {
  const formConfig = HANDLED_FORMS["dk-husforsikring-wizard"];
  assert.equal(formConfig.lang, "da");
  const html = renderAllFields(
    { nome: "Anders Nielsen", capital_edificio: "250000", rgpd: "sim", nacionalidade: "DK" },
    Boolean(formConfig.en),
    formConfig.lang
  );
  assert.match(html, /Forsikringssum bygning/);
  assert.match(html, /Danmark/);
});

test("a Chinese wizard form (formConfig.lang === 'zh') renders Chinese labels", () => {
  const formConfig = HANDLED_FORMS["zh-home-insurance-wizard"];
  assert.equal(formConfig.lang, "zh");
  const html = renderAllFields(
    { nome: "Li Wei", capital_edificio: "250000", rgpd: "sim", nacionalidade: "CN" },
    Boolean(formConfig.en),
    formConfig.lang
  );
  assert.match(html, /建筑保险金额/);
  assert.match(html, /中国/);
});

test("quoteIntro renders the 24h SLA in Polish, Swedish, Danish and Chinese for lang forms with no slaHours", () => {
  assert.match(
    quoteIntro({ page: "/pl/ubezpieczenie-domu-portugalia/", lang: "pl" }, "https://adlerrochefort.com/pl/ubezpieczenie-domu-portugalia/"),
    /24 godzin roboczych/
  );
  assert.match(
    quoteIntro({ page: "/se/hemforsakring-portugal/", lang: "sv" }, "https://adlerrochefort.com/se/hemforsakring-portugal/"),
    /24 arbetstimmar/
  );
  assert.match(
    quoteIntro({ page: "/dk/husforsikring-portugal/", lang: "da" }, "https://adlerrochefort.com/dk/husforsikring-portugal/"),
    /24 arbejdstimer/
  );
  assert.match(
    quoteIntro({ page: "/zh/home-insurance-portugal/", lang: "zh" }, "https://adlerrochefort.com/zh/home-insurance-portugal/"),
    /24个工作小时/
  );
});

// Especificação v2, Parte B — PL/SE/DK/ZH share one generator and are
// converted together. Health (Saúde) is the second of the four ramos;
// confirms DYNAMIC_BLOCKS_COPY.pl/sv/da/zh each render in their own
// language.
test("a PL/SE/DK/ZH Saúde wizard's dynamic-blocks section (dados_dinamicos) renders in the page's own language", () => {
  const cases = [
    { form: "pl-ubezpieczenie-zdrowotne-wizard", heading: /Osoby do ubezpieczenia/, dob: /Data urodzenia/, name: "Anna Kowalska" },
    { form: "se-sjukvardsforsakring-wizard", heading: /Personer som ska försäkras/, dob: /Födelsedatum/, name: "Anna Andersson" },
    { form: "dk-sundhedsforsikring-wizard", heading: /Personer der skal forsikres/, dob: /Fødselsdato/, name: "Anna Nielsen" },
    { form: "zh-health-insurance-wizard", heading: /需投保人员/, dob: /出生日期/, name: "李娜" },
  ];
  for (const c of cases) {
    const formConfig = HANDLED_FORMS[c.form];
    const html = renderAllFields(
      {
        nome: "Teste",
        rgpd: "sim",
        dados_dinamicos: JSON.stringify([{ nome: c.name, data_nascimento: "2015-06-01", nif: "200000012" }]),
      },
      Boolean(formConfig.en),
      formConfig.lang
    );
    assert.match(html, c.heading, `${c.form}: heading`);
    assert.match(html, c.dob, `${c.form}: dob label`);
    assert.match(html, new RegExp(c.name), `${c.form}: person name`);
    assert.doesNotMatch(html, /People to insure/, `${c.form}: no English leak`);
  }
});
