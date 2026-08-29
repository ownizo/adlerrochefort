import test from "node:test";
import assert from "node:assert/strict";

import { buildCrmLeadPayload, sendLeadToCrm } from "./crm-sync.mjs";

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

test("builds a valid payload for a name+email individual lead", () => {
  const { payload, skippedReason } = buildCrmLeadPayload("cotacao-habitacao", {
    nome: "Maria Silva",
    email: " MARIA@EXAMPLE.COM ",
    telefone: "912345678",
    source_url: "https://adlerrochefort.com/seguros/habitacao/",
  });
  assert.equal(skippedReason, null);
  assert.ok(payload);
  assert.equal(payload.email, "maria@example.com"); // normalized: trim + lowercase
  assert.equal(payload.name, "Maria Silva");
  assert.equal(payload.formName, "cotacao-habitacao");
  assert.equal(payload.product, "home");
  assert.equal(payload.market, "PT");
  assert.equal(payload.sourceUrl, "https://adlerrochefort.com/seguros/habitacao/");
});

test("skips business/condominium forms without producing a payload", () => {
  assert.equal(
    buildCrmLeadPayload("cotacao-frota", { frota_empresa: "Acme Lda", email: "geral@acme.pt" }).payload,
    null,
  );
  assert.equal(
    buildCrmLeadPayload("auditoria-condominio", { condominio_nome: "Edifício Sol", email: "adm@sol.pt" })
      .payload,
    null,
  );
});

test("skips when name is missing — never invents one", () => {
  const result = buildCrmLeadPayload("contacto", { email: "someone@example.com" });
  assert.equal(result.payload, null);
  assert.equal(result.skippedReason, "missing_name");
});

test("skips when email is missing or invalid — never invents one", () => {
  assert.equal(buildCrmLeadPayload("contacto", { nome: "Maria" }).skippedReason, "missing_or_invalid_email");
  assert.equal(
    buildCrmLeadPayload("contacto", { nome: "Maria", email: "not-an-email" }).skippedReason,
    "missing_or_invalid_email",
  );
});

test("carries the chosen branch as a small, non-sensitive metadata label for shared forms", () => {
  const { payload } = buildCrmLeadPayload("analise-gratuita", {
    nome: "Maria Silva",
    email: "maria@example.com",
    tipo_seguro: "Saúde",
  });
  assert.deepEqual(payload.metadata, { branchLabel: "Saúde" });
});

test("PRIVACY: health/DOB/ID fields present in the raw form data never reach the CRM payload", () => {
  const { payload } = buildCrmLeadPayload("analise-gratuita", {
    nome: "Maria Silva",
    email: "maria@example.com",
    tipo_seguro: "Saúde",
    saude_idade: "42",
    saude_pessoas: "3",
    saude_preexistentes: "Diabetes tipo 2, hipertensão",
    health_preexisting: "asthma, diabetes",
  });
  const serialized = JSON.stringify(payload);
  assert.equal(serialized.includes("Diabetes"), false);
  assert.equal(serialized.includes("asthma"), false);
  assert.equal(serialized.includes("hipertensão"), false);
  assert.equal(serialized.includes("42"), false);
});

test("PRIVACY: life-branch DOB (vida_nascimento / life_dob) never reaches the CRM payload", () => {
  const { payload } = buildCrmLeadPayload("cotacao-blog", {
    nome: "João Santos",
    email: "joao@example.com",
    "tipo-seguro": "Vida e Crédito Habitação",
    vida_nascimento: "1975-03-14",
    vida_banco: "Banco XYZ",
    vida_capital: "150000",
  });
  const serialized = JSON.stringify(payload);
  assert.equal(serialized.includes("1975-03-14"), false);
  assert.equal(serialized.includes("Banco XYZ"), false);
  assert.equal(serialized.includes("150000"), false);
  assert.equal(payload.product, "life");
});

test("PRIVACY: ID documents (NIF, cartão de cidadão, matrícula) from the auto form never reach the CRM payload", () => {
  const { payload } = buildCrmLeadPayload("seguro-auto", {
    nome: "Ana Costa",
    email: "ana@example.com",
    telemovel: "912345678",
    nif: "123456789",
    cartaoCidadao: "12345678 9 ZZ0",
    matricula: "AA-00-BB",
    morada: "Rua Exemplo, 123",
    codigoPostal: "1000-001",
  });
  const serialized = JSON.stringify(payload);
  assert.equal(serialized.includes("123456789"), false);
  assert.equal(serialized.includes("12345678 9 ZZ0"), false);
  assert.equal(serialized.includes("AA-00-BB"), false);
  assert.equal(serialized.includes("Rua Exemplo"), false);
  assert.equal(serialized.includes("1000-001"), false);
  assert.equal(payload.name, "Ana Costa");
  assert.equal(payload.email, "ana@example.com");
});

test("Responsabilidade Civil Profissional syncs as individual for a specific-profession lead (e.g. Acupuntura) with no business signal", () => {
  const { payload, skippedReason } = buildCrmLeadPayload("cotacao-blog", {
    nome: "Rita Ferreira",
    email: "rita@example.com",
    "tipo-seguro": "Responsabilidade Civil Profissional",
    rcp_profissao: "Acupuntura",
  });
  assert.equal(skippedReason, null);
  assert.ok(payload);
  assert.equal(payload.product, "professional-liability");
});

test("Responsabilidade Civil Profissional is skipped (no payload) when the submission is clearly a business", () => {
  const result = buildCrmLeadPayload("analise-gratuita", {
    nome: "Rita Ferreira",
    email: "rita@example.com",
    tipo_seguro: "Responsabilidade Civil Profissional",
    empresa: "Clínica Bem-Estar, Lda",
  });
  assert.equal(result.payload, null);
  assert.equal(result.skippedReason, "entity_type_business");
});

test("carries the submissionId through untouched, for idempotency downstream", () => {
  const { payload } = buildCrmLeadPayload(
    "contacto",
    { nome: "Maria Silva", email: "maria@example.com" },
    { submissionId: "abc-123" },
  );
  assert.equal(payload.submissionId, "abc-123");
});

test("sendLeadToCrm never throws when CRM env vars are not configured", async () => {
  await withEnv({ CRM_LEAD_INTAKE_URL: "", CRM_LEAD_INTAKE_SECRET: "" }, async () => {
    await assert.doesNotReject(
      sendLeadToCrm("contacto", { nome: "Maria Silva", email: "maria@example.com" }),
    );
  });
});

test("sendLeadToCrm never throws when the CRM endpoint is unreachable (network error)", async () => {
  const originalFetch = global.fetch;
  global.fetch = async () => {
    throw new Error("simulated network failure");
  };
  try {
    await withEnv(
      { CRM_LEAD_INTAKE_URL: "https://admin.adlerrochefort.invalid/api/lead-intake", CRM_LEAD_INTAKE_SECRET: "x" },
      async () => {
        await assert.doesNotReject(
          sendLeadToCrm("contacto", { nome: "Maria Silva", email: "maria@example.com" }),
        );
      },
    );
  } finally {
    global.fetch = originalFetch;
  }
});

test("sendLeadToCrm never throws when the CRM rejects with 401 (wrong secret)", async () => {
  const originalFetch = global.fetch;
  let calledAuthHeader;
  global.fetch = async (_url, options) => {
    calledAuthHeader = options.headers.Authorization;
    return new Response(JSON.stringify({ error: "unauthorized" }), { status: 401 });
  };
  try {
    await withEnv(
      { CRM_LEAD_INTAKE_URL: "https://admin.adlerrochefort.invalid/api/lead-intake", CRM_LEAD_INTAKE_SECRET: "wrong-secret" },
      async () => {
        await assert.doesNotReject(
          sendLeadToCrm("contacto", { nome: "Maria Silva", email: "maria@example.com" }),
        );
      },
    );
  } finally {
    global.fetch = originalFetch;
  }
  assert.equal(calledAuthHeader, "Bearer wrong-secret");
});

test("Spain forms produce a payload with market ES and language EN in metadata, never market EN", () => {
  const { payload, skippedReason } = buildCrmLeadPayload("home-insurance-quote-spain", {
    name: "Laura Fernández",
    email: "laura@example.com",
    country: "Spain",
  });
  assert.equal(skippedReason, null);
  assert.equal(payload.market, "ES");
  assert.equal(payload.product, "home");
  assert.deepEqual(payload.metadata, { language: "EN" });
});

test("international-insurance-review payload carries market PT or ES from the country field, language always in metadata", () => {
  const pt = buildCrmLeadPayload("international-insurance-review", {
    name: "Anna Weber",
    email: "anna@example.com",
    country: "Portugal",
  });
  assert.equal(pt.payload.market, "PT");
  assert.deepEqual(pt.payload.metadata, { language: "EN" });

  const es = buildCrmLeadPayload("international-insurance-review", {
    name: "Anna Weber",
    email: "anna@example.com",
    country: "Spain",
  });
  assert.equal(es.payload.market, "ES");
});

test("NL/FR/DE forms carry their submitted `lang` field into metadata.language, market stays PT", () => {
  const { payload } = buildCrmLeadPayload("lead-nl", {
    naam: "Jan Jansen",
    email: "jan@example.nl",
    lang: "nl",
  });
  assert.equal(payload.market, "PT");
  assert.deepEqual(payload.metadata, { language: "NL" });
});

test("cotacao-rc-eventos never produces a payload without a business signal (ambiguous, not individual)", () => {
  const result = buildCrmLeadPayload("cotacao-rc-eventos", {
    nome: "Marta Costa",
    email: "marta@example.com",
    ev_tipo: "Casamento",
  });
  assert.equal(result.payload, null);
  assert.equal(result.skippedReason, "entity_type_ambiguous");
});

test("PRIVACY: free-text notes/description fields on the new RC forms never reach the CRM payload", () => {
  const { payload, skippedReason } = buildCrmLeadPayload("cotacao-rc-massagistas", {
    nome: "Sofia Martins",
    email: "sofia@example.com",
    mas_tipo: "Massagem terapêutica",
    mensagem: "Tenho uma lesão no ombro direito e tomo anti-inflamatórios diariamente",
  });
  assert.equal(skippedReason, null);
  assert.ok(payload);
  assert.equal(JSON.stringify(payload).includes("ombro"), false);
  assert.equal(JSON.stringify(payload).includes("anti-inflamatórios"), false);
});
