import { createRequire } from "node:module";
import { classifySubmission, extractContact } from "./lead-classification.mjs";
import { applyDynamicFields } from "./dynamic-fields.mjs";

// public/js/quote-validators.js is a plain browser script (no ES module
// syntax — house style, see that file's own comment), but its bottom
// explicitly also exports via `module.exports` "for Node — a future
// server-side reuse". This is that reuse: normalizePlate() needs to run
// here too, not just in the browser, because a value that reaches this
// function did not necessarily pass through the client-side validator
// first (data-validate is opt-in per field, and best-effort submissions
// from any form sharing dados_risco's generic bag are accepted as-is — see
// the file-level comment below). createRequire, not a static import,
// because the file has no `export` statement — the same technique
// scripts/form-payload-test.mjs uses to load jsdom.
const QuoteValidators = createRequire(import.meta.url)("../../../public/js/quote-validators.js");

// -----------------------------------------------------------------------------
// quote-requests-sync.mjs — grava cada submissão relevante na tabela
// quote_requests (Supabase), em complemento ao pipeline existente (email +
// crm-sync.mjs). Chamado a partir de submission-created.mjs, sempre em
// try/catch, e nunca deve afetar a resposta ao Netlify Forms — mesma regra
// que crm-sync.mjs já segue para o CRM, ver o comentário no topo desse
// ficheiro e em submission-created.mjs.
//
// Diferença deliberada face a crm-sync.mjs: aquele módulo tem uma allowlist
// apertada (nome/email/telefone/UTM — nunca NIF, morada, matrícula) porque o
// destino é o CRM de terceiros (adlerpro). Este módulo é o destino
// *pensado* para os dados mais ricos — dados_risco guarda tudo o que o
// formulário enviou, para além do que já foi separado para dados_comuns.
//
// Fase 0 (Especificação dos Formulários de Cotação v2): "best-effort" no
// sentido de aceitar os campos que os formulários JÁ enviam hoje, mesmo que
// incompletos face à especificação (nem todos os ramos pedem NIF/data de
// nascimento ainda) — a tabela começa a receber linhas de todas as
// línguas/ramos desde já, sem esperar pelo wizard das fases seguintes.
//
// buildQuoteRequestRow é puro (sem I/O), testado sem rede em
// quote-requests-sync.test.mjs. insertQuoteRequest é quem fala com o
// Supabase e trata erros — nunca lança para o chamador.
// -----------------------------------------------------------------------------

function firstNonEmpty(values) {
  for (const v of values) {
    if (v != null && String(v).trim() !== "") return String(v).trim();
  }
  return undefined;
}

// classifySubmission()'s `product` vocabulary (lead-classification.mjs) is
// broader than the spec's four ramos — this maps the ones that clearly
// belong to one of the four; everything else is recorded under its own
// product name rather than forced into a wrong bucket. A later phase, once
// the wizard exists per ramo, sets `ramo` explicitly from a hidden field
// instead of relying on this inference at all.
const RAMO_BY_PRODUCT = {
  auto: "auto",
  tvde: "auto",
  home: "habitacao",
  "short-term-rental": "habitacao",
  condominium: "habitacao",
  health: "saude",
  "professional-liability": "profissional",
  "event-liability": "profissional",
};

// Field names already in use, across the PT/EN/NL/DE/FR/market-cluster forms
// (see netlify/functions/lib/lead-classification.mjs's own extractContact
// for the same style of cross-form fallback list), that map to a
// `dados_comuns` column rather than staying loose in `dados_risco`.
const COMMON_FIELD_ALIASES = {
  morada: ["morada", "address", "adres", "adresse", "hv_lage"],
  localidade: ["localidade", "town", "city"],
  codigo_postal: ["codigo_postal", "postcode", "postal_code", "cp"],
  data_nascimento: ["data_nascimento", "date_of_birth", "kv_geburtsdatum", "lv_geburtsdatum"],
  nacionalidade: ["nacionalidade", "nationality", "nationaliteit", "nationalite"],
  residente_fiscal_pt: ["residente_fiscal", "tax_resident_pt"],
  data_inicio: ["data_inicio", "vencimento", "start_date", "kv_termin"],
};

const NEVER_IN_DADOS_RISCO = new Set([
  "form-name",
  "bot-field",
  "nome",
  "name",
  "full_name",
  "naam",
  "email",
  "telefone",
  "telemovel",
  "phone",
  "telefoon",
  "einwilligung",
  "dados_dinamicos", // handled separately, see applyDynamicFields below
  // The wizard's free-text nationality search box (public/js/
  // quote-nationality.js) — the hidden "nacionalidade" field next to it,
  // already in COMMON_FIELD_ALIASES.nacionalidade below, carries the ISO
  // code that becomes dados_comuns.nacionalidade; the search text itself
  // would just be a redundant near-duplicate in dados_risco.
  "nacionalidade_nome",
  "nationality_name",
  ...Object.values(COMMON_FIELD_ALIASES).flat(),
]);

function pickFirst(data, aliases) {
  return firstNonEmpty(aliases.map((a) => data?.[a]));
}

/**
 * Constrói a linha a inserir em quote_requests, ou devolve `null` quando não
 * há dados de contacto suficientes para valer a pena guardar (nunca lança).
 */
export function buildQuoteRequestRow(formName, data, { language, submissionId } = {}) {
  const classification = classifySubmission(formName, data);
  const { name, email, phone } = extractContact(data);
  if (!name && !email) return null;

  const ramo = RAMO_BY_PRODUCT[classification.product] || classification.product || "outro";
  // Same resolution order as crm-sync.mjs's buildCrmLeadPayload: an explicit
  // override, then the classifier's own language (set for fixed-language
  // pages like /en/*), then the `lang` field the NL/FR/DE/market-cluster
  // landing pages submit themselves — never inferred from anything else.
  const lingua = String(
    language || classification.language || (data?.lang ? String(data.lang).trim() : undefined) || "pt"
  ).toLowerCase();

  const dados_comuns = {
    nome_completo: name,
    email,
    telefone: phone,
    nif: data?.nif,
    morada: pickFirst(data, COMMON_FIELD_ALIASES.morada),
    localidade: pickFirst(data, COMMON_FIELD_ALIASES.localidade),
    codigo_postal: pickFirst(data, COMMON_FIELD_ALIASES.codigo_postal),
    data_nascimento: pickFirst(data, COMMON_FIELD_ALIASES.data_nascimento),
    nacionalidade: pickFirst(data, COMMON_FIELD_ALIASES.nacionalidade),
    residente_fiscal_pt: pickFirst(data, COMMON_FIELD_ALIASES.residente_fiscal_pt),
    data_inicio: pickFirst(data, COMMON_FIELD_ALIASES.data_inicio),
  };
  for (const k of Object.keys(dados_comuns)) {
    if (dados_comuns[k] === undefined) delete dados_comuns[k];
  }

  const dados_risco = {};
  for (const [k, v] of Object.entries(data || {})) {
    if (NEVER_IN_DADOS_RISCO.has(k)) continue;
    if (v === undefined || v === null || String(v).trim() === "") continue;
    dados_risco[k] = v;
  }

  // Normalise the plate to AA-00-AA/00-AA-00/etc. (Especificação v2 §8) at
  // the point of saving, not just on the client: a value can reach here
  // without ever passing through public/js/quote-validators.js in the
  // browser — data-validate is opt-in per field, and dados_risco is a
  // best-effort generic bag for whatever a form sends (see the file-level
  // comment above). Confirmed in production: a plate arrived as "55VB18"
  // instead of "55-VB-18". normalizePlate() returns null for a value that
  // doesn't match one of the four known shapes at all — kept as originally
  // typed then, for a human to look at, rather than silently dropped.
  if (typeof dados_risco.matricula === "string") {
    dados_risco.matricula = QuoteValidators.normalizePlate(dados_risco.matricula) || dados_risco.matricula;
  }

  // Checkbox values arrive as whatever string the field's `value` attribute
  // declares — never the JS boolean `true` — and that string varies by
  // language/page: "sim" (the wizard's own PT pages), "yes" (EN), "ja" (the
  // DE cluster's existing einwilligung field). A form with no such field yet
  // (most of the site, still Fase 1's "accept what forms already send")
  // simply leaves this undefined — never assumed true.
  const CONSENT_TRUE_VALUES = new Set(["sim", "yes", "ja", "true"]);
  const consentValue = pickFirst(data, ["rgpd", "consentimento_rgpd", "einwilligung"]);

  const row = {
    ramo,
    lingua,
    form_name: formName,
    dados_comuns,
    dados_risco,
    pessoas_seguras: null, // preenchido abaixo por applyDynamicFields quando ramo === 'saude'
    consentimento: {
      aceite: consentValue ? CONSENT_TRUE_VALUES.has(consentValue.toLowerCase()) : undefined,
      timestamp: new Date().toISOString(),
      ip: null, // não disponível de forma fiável no payload do webhook Netlify Forms
      versao_politica: null, // por fixar quando a versão da política passar a ser rastreada
    },
    estado: "novo",
    submission_id: submissionId,
  };

  return applyDynamicFields(row, ramo, data?.dados_dinamicos);
}

const DEFAULT_TIMEOUT_MS = 5000;

function logEvent(event, fields = {}) {
  const parts = Object.entries(fields)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => `${k}=${v}`);
  console.log(`[quote-requests-sync] ${event}${parts.length ? " " + parts.join(" ") : ""}`);
}

/**
 * Insere a linha via REST do Supabase, autenticado com a service-role key —
 * nunca a chave anon, e nunca a partir do browser (ver a migração em
 * supabase/migrations/, RLS sem política de insert para `anon`).
 * Best-effort: qualquer falha (env não configurado, rede, 4xx/5xx) é
 * apanhada e logada, nunca propagada — mesmo padrão de crm-sync.mjs.
 */
export async function insertQuoteRequest(formName, data, opts = {}) {
  const row = buildQuoteRequestRow(formName, data, opts);
  if (!row) {
    logEvent("SKIPPED", { reason: "no_contact_data", formName });
    return;
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    logEvent("SKIPPED", { reason: "not_configured", formName });
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);

  try {
    const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/quote_requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
      signal: controller.signal,
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      logEvent("FAILED", { reason: `http_${res.status}`, formName, detail: detail.slice(0, 200) });
      return;
    }

    logEvent("OK", { formName, ramo: row.ramo, lingua: row.lingua });
  } catch (err) {
    const reason = err?.name === "AbortError" ? "timeout" : "network_error";
    logEvent("FAILED", { reason, formName });
  } finally {
    clearTimeout(timeout);
  }
}
