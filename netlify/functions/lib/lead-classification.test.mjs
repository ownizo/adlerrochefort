import test from "node:test";
import assert from "node:assert/strict";

import { classifySubmission, extractContact, CRM_HANDLED_FORMS } from "./lead-classification.mjs";

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
