import test from "node:test";
import assert from "node:assert/strict";

import { classifySubmission, extractContact, CRM_HANDLED_FORMS } from "./lead-classification.mjs";
import { HANDLED_FORMS } from "../submission-created.mjs";

test("fixed-branch individual forms classify as individual", () => {
  assert.equal(classifySubmission("cotacao-habitacao", {}).entityType, "individual");
  assert.equal(classifySubmission("cotacao-tvde", {}).entityType, "individual");
  assert.equal(classifySubmission("seguro-auto", {}).entityType, "individual");
  assert.equal(classifySubmission("contacto", {}).entityType, "individual");
  assert.equal(classifySubmission("expat-health-quote", {}).entityType, "individual");
});

test("explicitly business/condominium forms never classify as individual", () => {
  assert.equal(classifySubmission("cotacao-frota", {}).entityType, "business");
  assert.equal(classifySubmission("cotacao-empresarial", {}).entityType, "business");
  assert.equal(classifySubmission("auditoria-condominio", {}).entityType, "condominium");
  assert.equal(classifySubmission("condominium-audit", {}).entityType, "condominium");
});

test("unknown form names are ambiguous, never individual by default", () => {
  const result = classifySubmission("some-unlisted-form", {});
  assert.equal(result.entityType, "ambiguous");
});

test("shared branch forms (cotacao-blog/analise-gratuita) classify per selected branch", () => {
  assert.equal(
    classifySubmission("analise-gratuita", { tipo_seguro: "Frota de empresa" }).entityType,
    "business",
  );
  assert.equal(
    classifySubmission("analise-gratuita", { tipo_seguro: "Condomínio" }).entityType,
    "condominium",
  );
  assert.equal(
    classifySubmission("analise-gratuita", { tipo_seguro: "Habitação" }).entityType,
    "individual",
  );
  assert.equal(
    classifySubmission("cotacao-blog", { "tipo-seguro": "TVDE (Uber, Bolt, Free Now)" }).entityType,
    "individual",
  );
  // EN equivalents, different field name
  assert.equal(
    classifySubmission("quote-blog", { "insurance-type": "Business combined (multirriscos)" }).entityType,
    "business",
  );
});

test("a shared branch form with no recognizable branch value is ambiguous, not individual", () => {
  assert.equal(classifySubmission("analise-gratuita", {}).entityType, "ambiguous");
  assert.equal(classifySubmission("analise-gratuita", { tipo_seguro: "Outro" }).entityType, "ambiguous");
  assert.equal(
    classifySubmission("analise-gratuita", { tipo_seguro: "Something never listed" }).entityType,
    "ambiguous",
  );
});

test("Responsabilidade Civil Profissional with no business signal classifies as individual (Massagistas/Acupuntura/Naturopatia/TNC etc.)", () => {
  // No profession field filled at all — still individual (name+email are the
  // baseline requirement, guaranteed upstream by buildCrmLeadPayload).
  assert.equal(
    classifySubmission("cotacao-blog", { "tipo-seguro": "Responsabilidade Civil Profissional" }).entityType,
    "individual",
  );
  // The TNC article (seguro-responsabilidade-civil-terapeuticas-nao-convencionais)
  // preselects this exact branch — a masseur/acupuncturist/naturopath filling
  // in their own activity, no company field, must sync as individual.
  for (const profession of ["Massoterapia", "Acupuntura", "Naturopatia", "Osteopatia"]) {
    assert.equal(
      classifySubmission("cotacao-blog", {
        "tipo-seguro": "Responsabilidade Civil Profissional",
        rcp_profissao: profession,
      }).entityType,
      "individual",
      `expected "${profession}" to classify as individual`,
    );
  }
  // EN equivalent, different field name (pi_profession) and branch label.
  assert.equal(
    classifySubmission("quote-blog", {
      "insurance-type": "Professional indemnity",
      pi_profession: "Massage therapy",
    }).entityType,
    "individual",
  );
});

test("Responsabilidade Civil Profissional with a clear business signal classifies as business", () => {
  // Fixed `empresa`/`company` field (analise-gratuita/free-analysis) filled in.
  assert.equal(
    classifySubmission("analise-gratuita", {
      tipo_seguro: "Responsabilidade Civil Profissional",
      empresa: "Clínica Bem-Estar",
    }).entityType,
    "business",
  );
  assert.equal(
    classifySubmission("free-analysis", {
      insurance_type: "Professional indemnity",
      company: "Wellness Clinic",
    }).entityType,
    "business",
  );
  // A company-shaped profession/activity free-text field, even without a
  // dedicated company field (cotacao-blog/quote-blog have none).
  for (const profession of ["Clínica de Fisioterapia, Lda", "Consultoria Jurídica Unipessoal", "Acme Sociedade de Advogados"]) {
    assert.equal(
      classifySubmission("cotacao-blog", {
        "tipo-seguro": "Responsabilidade Civil Profissional",
        rcp_profissao: profession,
      }).entityType,
      "business",
      `expected "${profession}" to classify as business`,
    );
  }
});

test("classification never confuses a person's name/activity for a business keyword substring", () => {
  // Regression guard for the \b word-boundary in BUSINESS_ENTITY_KEYWORDS:
  // words that merely contain "sa"/"lda" as a substring must not trip it.
  assert.equal(
    classifySubmission("cotacao-blog", {
      "tipo-seguro": "Responsabilidade Civil Profissional",
      rcp_profissao: "Massagista",
    }).entityType,
    "individual",
  );
});

test("an unrecognized/future branch value (e.g. a hypothetical 'Organização de Eventos') stays ambiguous, never individual by default", () => {
  assert.equal(
    classifySubmission("cotacao-blog", { "tipo-seguro": "Organização de Eventos" }).entityType,
    "ambiguous",
  );
  assert.equal(
    classifySubmission("quote-blog", { "insurance-type": "Event organisation" }).entityType,
    "ambiguous",
  );
});

test("extractContact reads across the different field-name conventions", () => {
  assert.deepEqual(extractContact({ nome: "Maria Silva", email: "maria@example.com", telefone: "912345678" }), {
    name: "Maria Silva",
    email: "maria@example.com",
    phone: "912345678",
  });
  assert.deepEqual(extractContact({ name: "John Doe", email: "john@example.com", phone: "+44 1234" }), {
    name: "John Doe",
    email: "john@example.com",
    phone: "+44 1234",
  });
  assert.deepEqual(extractContact({ naam: "Jan Jansen", email: "jan@example.nl" }), {
    name: "Jan Jansen",
    email: "jan@example.nl",
    phone: undefined,
  });
});

test("extractContact never invents a name or email from unrelated fields", () => {
  assert.deepEqual(extractContact({ empresa: "Acme Lda" }), {
    name: undefined,
    email: undefined,
    phone: undefined,
  });
});

test("CRM_HANDLED_FORMS matches exactly the forms this function classifies", () => {
  // Regression guard: every key needs a real classification decision, not a
  // silent 'ambiguous' fallback for a form nobody reviewed.
  assert.ok(CRM_HANDLED_FORMS.has("cotacao-habitacao"));
  assert.ok(CRM_HANDLED_FORMS.has("cotacao-frota"));
  assert.ok(CRM_HANDLED_FORMS.has("auditoria-condominio"));
  assert.equal(CRM_HANDLED_FORMS.has("insurance-chat"), false);
});

// ── Coverage: every HANDLED_FORMS key must have an explicit CRM decision ────
// This is the guard requested to stop the exact failure mode we hit with the
// rebase: a form is added to HANDLED_FORMS (so its email works), but nobody
// updates FORM_CLASSIFICATION, so the CRM silently never receives it. A
// classification of 'business'/'condominium'/'ambiguous' is a perfectly fine,
// deliberate answer — what fails this test is a form with NO answer at all.
test("CRM coverage: every form in HANDLED_FORMS (email flow) has an explicit CRM classification", () => {
  const missing = Object.keys(HANDLED_FORMS).filter((formName) => !CRM_HANDLED_FORMS.has(formName));
  assert.deepEqual(
    missing,
    [],
    `Form(s) wired to the email flow but missing from lead-classification.mjs FORM_CLASSIFICATION: ${missing.join(", ")}. ` +
      "Add an entry (even if it resolves to 'business'/'condominium'/'ambiguous') before merging.",
  );
});

// And the reverse direction — a stale classification entry for a form that
// was removed/renamed should not silently linger unnoticed either.
test("CRM coverage: FORM_CLASSIFICATION has no stale entries for forms no longer in HANDLED_FORMS", () => {
  const stale = [...CRM_HANDLED_FORMS].filter((formName) => !(formName in HANDLED_FORMS));
  assert.deepEqual(stale, [], `Classified form(s) no longer present in HANDLED_FORMS: ${stale.join(", ")}`);
});

// ── Fail-safe: an entirely unknown form (never added to either structure)
// must never resolve to 'individual' just because it looks like a person's
// name+email submission. This is the runtime backstop the coverage test
// above cannot fully replace (it only catches drift between the two maps,
// not a form nobody wired up anywhere yet). ─────────────────────────────────
test("fail-safe: a completely unknown form is always ambiguous, never individual, even with name+email present", () => {
  const result = classifySubmission("some-form-nobody-registered-anywhere", {
    name: "Maria Silva",
    email: "maria@example.com",
  });
  assert.equal(result.entityType, "ambiguous");
});

// ── RC Profissional dedicated form (cotacao-rc-profissional) ────────────────
test("cotacao-rc-profissional: individual professional with no business signal", () => {
  assert.equal(
    classifySubmission("cotacao-rc-profissional", {
      nome: "Rui Almeida",
      email: "rui@example.com",
      rcp_profissao: "Engenharia",
    }).entityType,
    "individual",
  );
  // The dual-purpose "empresa ou nome individual" field: a personal name (or
  // "N/A"/empty) here must NOT be treated as a business signal by itself —
  // only an actual company-shaped value should.
  assert.equal(
    classifySubmission("cotacao-rc-profissional", {
      nome: "Rui Almeida",
      email: "rui@example.com",
      rcp_profissao: "Consultoria",
      empresa: "Rui Almeida",
    }).entityType,
    "individual",
  );
});

test("cotacao-rc-profissional: business signal in `empresa` or in the profession text", () => {
  assert.equal(
    classifySubmission("cotacao-rc-profissional", {
      nome: "Rui Almeida",
      email: "rui@example.com",
      rcp_profissao: "Consultoria",
      empresa: "Almeida Consultoria, Lda",
    }).entityType,
    "business",
  );
  assert.equal(
    classifySubmission("cotacao-rc-profissional", {
      nome: "Rui Almeida",
      email: "rui@example.com",
      rcp_profissao: "Sociedade de Advocacia Almeida & Associados",
    }).entityType,
    "business",
  );
});

// ── TNC / Massagistas — always individual, no signal field exists at all ──
test("cotacao-rc-tnc and cotacao-rc-massagistas: always individual (no business-signal field on these forms)", () => {
  for (const activity of ["Acupunctura", "Naturopatia", "Medicina Tradicional Chinesa", "Osteopatia"]) {
    assert.equal(
      classifySubmission("cotacao-rc-tnc", {
        nome: "Sofia Martins",
        email: "sofia@example.com",
        tnc_atividade: activity,
      }).entityType,
      "individual",
      `expected TNC activity "${activity}" to classify as individual`,
    );
  }
  assert.equal(
    classifySubmission("cotacao-rc-massagistas", {
      nome: "Sofia Martins",
      email: "sofia@example.com",
      mas_tipo: "Massagem terapêutica",
    }).entityType,
    "individual",
  );
});

// ── Profissões Específicas — contextual, same pattern as RC Profissional ──
test("cotacao-rc-profissoes-especificas: individual when no business signal", () => {
  assert.equal(
    classifySubmission("cotacao-rc-profissoes-especificas", {
      nome: "Carla Nunes",
      email: "carla@example.com",
      pe_atividade: "Consultoria",
    }).entityType,
    "individual",
  );
});

test("cotacao-rc-profissoes-especificas: business signal via pe_empresa, pe_atividade or pe_outra", () => {
  assert.equal(
    classifySubmission("cotacao-rc-profissoes-especificas", {
      nome: "Carla Nunes",
      email: "carla@example.com",
      pe_atividade: "Sociedade de Advogados",
    }).entityType,
    "business",
  );
  assert.equal(
    classifySubmission("cotacao-rc-profissoes-especificas", {
      nome: "Carla Nunes",
      email: "carla@example.com",
      pe_atividade: "Outra profissão",
      pe_empresa: "Nunes & Associados, Lda",
    }).entityType,
    "business",
  );
});

// ── Organização de Eventos — contextual: preserves the individual contact
// whenever there is no business signal, rather than losing the lead. Not an
// attempt to determine who legally organises the event — just whether this
// contact can be registered in individual_clients at this stage. ──────────
test("cotacao-rc-eventos: individual when there is no business signal (preserve the contact, not discard it)", () => {
  assert.equal(
    classifySubmission("cotacao-rc-eventos", {
      nome: "Marta Costa",
      email: "marta@example.com",
      ev_tipo: "Casamento",
    }).entityType,
    "individual",
  );
});

test("cotacao-rc-eventos: business when the name/organiser field carries a company signal", () => {
  assert.equal(
    classifySubmission("cotacao-rc-eventos", {
      nome: "Eventos Almeida, Lda",
      email: "geral@eventosalmeida.pt",
      ev_tipo: "Feira",
    }).entityType,
    "business",
  );
});

// ── Private Clients / Landlord (PT) ─────────────────────────────────────────
test("private-clients-review (PT) is always individual", () => {
  const result = classifySubmission("private-clients-review", { nome: "Beatriz Lopes", email: "beatriz@example.com" });
  assert.equal(result.entityType, "individual");
  assert.equal(result.market, "PT");
  assert.equal(result.product, "private-clients");
});

test("landlord-insurance-quote (PT market, EN language) is individual, not business, and market is PT not EN", () => {
  const result = classifySubmission("landlord-insurance-quote", { name: "James Carter", email: "james@example.com" });
  assert.equal(result.entityType, "individual");
  assert.equal(result.market, "PT");
  assert.equal(result.language, "EN");
});

// ── Re-confirm the business/condominium forms are unaffected by this pass ──
test("cotacao-frota and cotacao-empresarial are still business; auditoria-condominio still condominium", () => {
  assert.equal(classifySubmission("cotacao-frota", {}).entityType, "business");
  assert.equal(classifySubmission("cotacao-empresarial", {}).entityType, "business");
  assert.equal(classifySubmission("auditoria-condominio", {}).entityType, "condominium");
  assert.equal(classifySubmission("condominium-audit", {}).entityType, "condominium");
});

// ── market vs. language: no EN-language PT-market form leaks "EN" into market
test("no form ever resolves market to 'EN' — EN is a language, not a market", () => {
  for (const formName of Object.keys(HANDLED_FORMS)) {
    // Skip forms with no fixed sample data need — every classification is
    // exercised with an empty payload here (contextual/branch ones just fall
    // back to their base market or undefined, never 'EN').
    const result = classifySubmission(formName, {});
    assert.notEqual(result.market, "EN", `${formName} resolved market to 'EN' — market/language must not be conflated`);
  }
});

// ── Spain cluster ────────────────────────────────────────────────────────
test("Spain forms classify as individual with market ES", () => {
  const spainForms = [
    "expat-insurance-review-spain",
    "home-insurance-quote-spain",
    "landlord-insurance-quote-spain",
    "health-insurance-quote-spain",
    "car-insurance-quote-spain",
    "life-insurance-review-spain",
    "mortgage-protection-review-spain",
    "private-client-review-spain",
  ];
  for (const formName of spainForms) {
    const result = classifySubmission(formName, { name: "Laura Fernández", email: "laura@example.com" });
    assert.equal(result.entityType, "individual", `${formName} should be individual`);
    assert.equal(result.market, "ES", `${formName} should have market ES`);
  }
});

// ── international-insurance-review: market is derived from `country`,
// language (English copy) never overrides it. ──────────────────────────────
test("international-insurance-review: market PT or ES depending on the selected country, never EN", () => {
  const pt = classifySubmission("international-insurance-review", { name: "Anna Weber", email: "anna@example.com", country: "Portugal" });
  assert.equal(pt.entityType, "individual");
  assert.equal(pt.market, "PT");
  assert.equal(pt.language, "EN");

  const es = classifySubmission("international-insurance-review", { name: "Anna Weber", email: "anna@example.com", country: "Spain" });
  assert.equal(es.entityType, "individual");
  assert.equal(es.market, "ES");
});

test("international-insurance-review: unrecognized/missing country leaves market undefined rather than guessing", () => {
  const result = classifySubmission("international-insurance-review", { name: "Anna Weber", email: "anna@example.com" });
  assert.equal(result.market, undefined);
});
