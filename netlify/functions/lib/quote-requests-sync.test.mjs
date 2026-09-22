import test from "node:test";
import assert from "node:assert/strict";

import { buildQuoteRequestRow, insertQuoteRequest } from "./quote-requests-sync.mjs";

function withEnv(vars, fn) {
  const previous = {};
  for (const key of Object.keys(vars)) previous[key] = process.env[key];
  Object.assign(process.env, vars);
  return Promise.resolve(fn()).finally(() => {
    for (const key of Object.keys(vars)) {
      if (previous[key] === undefined) delete process.env[key];
      else process.env[key] = previous[key];
    }
  });
}

test("builds a row for a name+email submission, mapping product to one of the four ramos", () => {
  const row = buildQuoteRequestRow("cotacao-habitacao", {
    nome: "Maria Silva",
    email: "maria@example.com",
    telefone: "912345678",
    nif: "501442600",
    codigo_postal: "8600-324",
  });
  assert.ok(row);
  assert.equal(row.ramo, "habitacao"); // product 'home' maps to 'habitacao'
  assert.equal(row.lingua, "pt");
  assert.equal(row.form_name, "cotacao-habitacao");
  assert.equal(row.dados_comuns.nome_completo, "Maria Silva");
  assert.equal(row.dados_comuns.email, "maria@example.com");
  assert.equal(row.dados_comuns.nif, "501442600");
  assert.equal(row.dados_comuns.codigo_postal, "8600-324");
  assert.equal(row.estado, "novo");
});

test("returns null when there is no name and no email — nothing worth a row", () => {
  assert.equal(buildQuoteRequestRow("cotacao-habitacao", { telefone: "912345678" }), null);
});

test("richer PII (NIF, morada, matrícula) lands here — the opposite of crm-sync.mjs's allowlist", () => {
  const row = buildQuoteRequestRow("seguro-auto", {
    nome: "Ana Costa",
    email: "ana@example.com",
    telemovel: "912345678",
    nif: "501442600",
    matricula: "AA-00-BB",
    morada: "Rua Exemplo, 123",
    codigo_postal: "1000-001",
  });
  assert.ok(row);
  assert.equal(row.dados_comuns.nif, "501442600");
  assert.equal(row.dados_comuns.morada, "Rua Exemplo, 123");
  assert.equal(row.dados_comuns.codigo_postal, "1000-001");
  // matricula isn't one of the lifted common fields — it's risk-specific,
  // so it stays in dados_risco, not dados_comuns.
  assert.equal(row.dados_risco.matricula, "AA-00-BB");
});

// Especificação v2 hotfix: a real submission recorded the plate as
// "55VB18" instead of "55-VB-18" — data-validate is opt-in per field, so a
// value can reach the server without ever passing through
// quote-validators.js's normalizePlate() in the browser first.
test("matricula is normalised to hyphenated form at save time, regardless of how it arrived", () => {
  const row = buildQuoteRequestRow("seguro-auto", {
    nome: "Ana Costa",
    email: "ana@example.com",
    matricula: "55VB18",
  });
  assert.equal(row.dados_risco.matricula, "55-VB-18");
});

test("matricula already hyphenated, or in any of the other three known shapes, is left exactly as it was", () => {
  const shapes = ["AA-00-AA", "00-AA-00", "00-00-AA", "AA-00-00"];
  for (const plate of shapes) {
    const row = buildQuoteRequestRow("seguro-auto", { nome: "Ana Costa", email: "ana@example.com", matricula: plate });
    assert.equal(row.dados_risco.matricula, plate);
  }
});

test("matricula that matches none of the four known shapes is kept as typed, not dropped", () => {
  const row = buildQuoteRequestRow("seguro-auto", {
    nome: "Ana Costa",
    email: "ana@example.com",
    matricula: "not a real plate",
  });
  assert.equal(row.dados_risco.matricula, "not a real plate");
});

test("localidade (Especificação v2, Passo 1) is lifted to dados_comuns like morada/codigo_postal, not left in dados_risco", () => {
  const row = buildQuoteRequestRow("seguro-auto", {
    nome: "Ana Costa",
    email: "ana@example.com",
    localidade: "Lagos",
  });
  assert.equal(row.dados_comuns.localidade, "Lagos");
  assert.equal("localidade" in row.dados_risco, false);
});

test("dados_risco carries whatever the form actually sent, minus plumbing and the fields already lifted to dados_comuns", () => {
  const row = buildQuoteRequestRow("seguro-auto", {
    nome: "Ana Costa",
    email: "ana@example.com",
    "form-name": "seguro-auto",
    "bot-field": "",
    matricula: "AA-00-BB",
    cobertura: "Terceiros",
    sinistros_3_anos: "Não",
  });
  assert.deepEqual(row.dados_risco, { matricula: "AA-00-BB", cobertura: "Terceiros", sinistros_3_anos: "Não" });
  assert.equal("form-name" in row.dados_risco, false);
  assert.equal("bot-field" in row.dados_risco, false);
  assert.equal("nome" in row.dados_risco, false); // lifted into dados_comuns already
});

test("empty/undefined field values are dropped from dados_risco rather than stored as noise", () => {
  const row = buildQuoteRequestRow("seguro-auto", {
    nome: "Ana Costa",
    email: "ana@example.com",
    mensagem: "",
    seguro_atual: undefined,
  });
  assert.deepEqual(row.dados_risco, {});
});

test("ramo maps business-multirisk to empresarial (Phase 12 empresarial pillar rebuild)", () => {
  const row = buildQuoteRequestRow("cotacao-empresarial", {
    nome: "Empresa Lda",
    email: "geral@empresa.pt",
    empresa: "Empresa Lda",
    nif: "501442600",
    ramos_pretendidos: ["Multirriscos", "Responsabilidade civil"],
    rgpd: "sim",
  });
  assert.equal(row.ramo, "empresarial");
  assert.equal(row.consentimento.aceite, true);
});

test("EN business-insurance-quote resolves to the same ramo=empresarial as its PT counterpart", () => {
  const row = buildQuoteRequestRow("business-insurance-quote", {
    name: "Test Company Ltd",
    email: "info@testcompany.com",
    company: "Test Company Ltd",
    nif: "501442600",
    ramos_pretendidos: ["Multi-risk insurance", "Public liability"],
    rgpd: "yes",
  });
  assert.equal(row.ramo, "empresarial");
  assert.equal(row.lingua, "en");
  assert.equal(row.consentimento.aceite, true);
});

test("ramo falls back to the classifier's raw product name for forms outside the four core ramos", () => {
  const row = buildQuoteRequestRow("cotacao-frota", {
    nome: "Empresa Lda",
    email: "geral@empresa.pt",
  });
  // 'fleet' has no entry in RAMO_BY_PRODUCT — Fase 0 still records the row,
  // just not forced into one of the four ramos the spec defines.
  assert.equal(row.ramo, "fleet");
});

test("language resolution: fixed-language page, then submitted lang field, then pt default — same order as crm-sync.mjs", () => {
  const en = buildQuoteRequestRow("home-insurance-quote", { name: "John Smith", email: "john@example.com" });
  assert.equal(en.lingua, "en");

  const nl = buildQuoteRequestRow("lead-nl", { naam: "Jan Jansen", email: "jan@example.nl", lang: "nl" });
  assert.equal(nl.lingua, "nl");

  const pt = buildQuoteRequestRow("contacto", { nome: "Maria Silva", email: "maria@example.com" });
  assert.equal(pt.lingua, "pt");
});

test("submissionId is carried through untouched, for idempotency downstream", () => {
  const row = buildQuoteRequestRow(
    "contacto",
    { nome: "Maria Silva", email: "maria@example.com" },
    { submissionId: "abc-123" },
  );
  assert.equal(row.submission_id, "abc-123");
});

test("consentimento.versao_politica is stamped with the current privacy policy version, not null (Especificação v2, B2)", () => {
  const row = buildQuoteRequestRow("contacto", { nome: "Maria Silva", email: "maria@example.com", rgpd: "sim" });
  assert.equal(typeof row.consentimento.versao_politica, "string");
  assert.notEqual(row.consentimento.versao_politica, null);
  assert.match(row.consentimento.versao_politica, /^\d{4}-\d{2}-\d{2}$/);
});

test("insertQuoteRequest never throws when Supabase env vars are not configured", async () => {
  await withEnv({ SUPABASE_URL: "", SUPABASE_SERVICE_ROLE_KEY: "" }, async () => {
    await assert.doesNotReject(
      insertQuoteRequest("contacto", { nome: "Maria Silva", email: "maria@example.com" }),
    );
  });
});

test("insertQuoteRequest never throws when the Supabase REST endpoint is unreachable (network error)", async () => {
  const originalFetch = global.fetch;
  global.fetch = async () => {
    throw new Error("simulated network failure");
  };
  try {
    await withEnv(
      { SUPABASE_URL: "https://example.invalid.supabase.co", SUPABASE_SERVICE_ROLE_KEY: "x" },
      async () => {
        await assert.doesNotReject(
          insertQuoteRequest("contacto", { nome: "Maria Silva", email: "maria@example.com" }),
        );
      },
    );
  } finally {
    global.fetch = originalFetch;
  }
});

test("insertQuoteRequest never throws when Supabase rejects with a 4xx, and posts to the REST endpoint with the service-role key — never a browser-facing anon key", async () => {
  const originalFetch = global.fetch;
  let calledUrl;
  let calledHeaders;
  global.fetch = async (url, options) => {
    calledUrl = url;
    calledHeaders = options.headers;
    return new Response(JSON.stringify({ message: "permission denied" }), { status: 401 });
  };
  try {
    await withEnv(
      { SUPABASE_URL: "https://example.invalid.supabase.co", SUPABASE_SERVICE_ROLE_KEY: "service-role-secret" },
      async () => {
        await assert.doesNotReject(
          insertQuoteRequest("contacto", { nome: "Maria Silva", email: "maria@example.com" }),
        );
      },
    );
  } finally {
    global.fetch = originalFetch;
  }
  assert.equal(calledUrl, "https://example.invalid.supabase.co/rest/v1/quote_requests");
  assert.equal(calledHeaders.apikey, "service-role-secret");
  assert.equal(calledHeaders.Authorization, "Bearer service-role-secret");
});

test("insertQuoteRequest skips silently (no request sent) when there is no name/email to build a row from", async () => {
  const originalFetch = global.fetch;
  let called = false;
  global.fetch = async () => {
    called = true;
    return new Response(null, { status: 200 });
  };
  try {
    await withEnv(
      { SUPABASE_URL: "https://example.invalid.supabase.co", SUPABASE_SERVICE_ROLE_KEY: "x" },
      async () => {
        await insertQuoteRequest("contacto", { telefone: "912345678" });
      },
    );
  } finally {
    global.fetch = originalFetch;
  }
  assert.equal(called, false);
});

// Especificação v2, "restantes línguas" Parte 0 ponto 3 / Parte 4 — the
// `teste` column (supabase/migrations/20260915131000_quote_requests_add_
// teste_flag.sql). A test-mode submission must still land a row, just
// flagged, so it is verifiable by direct read without ever being mistaken
// for a real lead by the backoffice.
test("buildQuoteRequestRow stamps teste=true when isTest is passed, teste=false otherwise (never undefined)", () => {
  const base = { nome: "Hugo Teste", email: "hugo@example.com" };
  assert.equal(buildQuoteRequestRow("cotacao-rc-yoga", base, { isTest: true }).teste, true);
  assert.equal(buildQuoteRequestRow("cotacao-rc-yoga", base, { isTest: false }).teste, false);
  assert.equal(buildQuoteRequestRow("cotacao-rc-yoga", base, {}).teste, false);
  assert.equal(buildQuoteRequestRow("cotacao-rc-yoga", base).teste, false);
});

test("insertQuoteRequest posts teste=true in the row body when isTest is passed through, still to the same REST endpoint with the service-role key", async () => {
  const originalFetch = global.fetch;
  let calledUrl;
  let calledBody;
  global.fetch = async (url, options) => {
    calledUrl = url;
    calledBody = JSON.parse(options.body);
    return new Response(null, { status: 201 });
  };
  try {
    await withEnv(
      { SUPABASE_URL: "https://example.invalid.supabase.co", SUPABASE_SERVICE_ROLE_KEY: "service-role-secret" },
      async () => {
        await insertQuoteRequest("cotacao-rc-yoga", { nome: "Hugo Teste", email: "hugo@example.com" }, {
          submissionId: "sub-123",
          isTest: true,
        });
      },
    );
  } finally {
    global.fetch = originalFetch;
  }
  assert.equal(calledUrl, "https://example.invalid.supabase.co/rest/v1/quote_requests");
  assert.equal(calledBody.teste, true);
  assert.equal(calledBody.submission_id, "sub-123");
});

// Especificação v2, "restantes línguas" Parte 1 ponto 1 — payload_teste,
// replacing function-log reading (unreliable in this project's sessions so
// far) as the way to verify a test-mode submission's email/CRM payloads:
// they get written onto the row itself instead, readable by direct query.
test("buildQuoteRequestRow stamps payload_teste with testPayload when isTest is true, and omits the key entirely otherwise", () => {
  const base = { nome: "Hugo Teste", email: "hugo@example.com" };
  const testPayload = { email: { subject: "x", html: "<p>y</p>" }, crm: { payload: { name: "Hugo Teste" }, skippedReason: null } };

  const testRow = buildQuoteRequestRow("cotacao-rc-yoga", base, { isTest: true, testPayload });
  assert.deepEqual(testRow.payload_teste, testPayload);

  // payload_teste is `undefined` (not absent) on the JS object for a real
  // row — JSON.stringify is what actually omits an `undefined` value from
  // the wire body insertQuoteRequest posts, so that is what this checks,
  // the same way the request body itself gets built.
  const realRow = buildQuoteRequestRow("cotacao-rc-yoga", base, { isTest: false, testPayload });
  assert.equal(
    "payload_teste" in JSON.parse(JSON.stringify(realRow)),
    false,
    "a real row must never carry payload_teste on the wire, even if a caller mistakenly passed testPayload alongside isTest: false"
  );

  const defaultRow = buildQuoteRequestRow("cotacao-rc-yoga", base);
  assert.equal("payload_teste" in JSON.parse(JSON.stringify(defaultRow)), false);
});

test("insertQuoteRequest posts payload_teste in the row body for a test-mode call, and never includes the key for a normal one", async () => {
  const originalFetch = global.fetch;
  const bodies = [];
  global.fetch = async (url, options) => {
    bodies.push(JSON.parse(options.body));
    return new Response(null, { status: 201 });
  };
  const testPayload = { email: { subject: "Novo pedido", html: "<p>...</p>" }, crm: { payload: { name: "Hugo Teste", email: "hugo@example.com" }, skippedReason: null } };
  try {
    await withEnv(
      { SUPABASE_URL: "https://example.invalid.supabase.co", SUPABASE_SERVICE_ROLE_KEY: "service-role-secret" },
      async () => {
        await insertQuoteRequest("cotacao-rc-yoga", { nome: "Hugo Teste", email: "hugo@example.com" }, {
          isTest: true,
          testPayload,
        });
        await insertQuoteRequest("cotacao-rc-yoga", { nome: "Maria Real", email: "maria@example.com" }, {
          isTest: false,
        });
      },
    );
  } finally {
    global.fetch = originalFetch;
  }
  assert.equal(bodies.length, 2);
  assert.deepEqual(bodies[0].payload_teste, testPayload);
  assert.equal("payload_teste" in bodies[1], false);
});
