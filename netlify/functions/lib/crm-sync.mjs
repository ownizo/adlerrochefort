import { classifySubmission, extractContact } from "./lead-classification.mjs";

// -----------------------------------------------------------------------------
// crm-sync.mjs — sincronização best-effort de leads de PESSOAS SINGULARES para
// o CRM (admin.adlerrochefort.com, repo adlerpro). Chamado a partir de
// submission-created.mjs, sempre em try/catch, DEPOIS do email de notificação
// já ter sido enviado. Nunca deve afetar a resposta ao Netlify Forms nem a
// experiência do visitante — ver README no topo de submission-created.mjs.
//
// buildCrmLeadPayload é puro (sem I/O) e testado sem rede em
// crm-sync.test.mjs, incluindo o teste de privacidade que garante que campos
// como `saude_preexistentes`/`health_preexisting` nunca chegam ao payload.
// sendLeadToCrm é quem faz o pedido HTTP e trata timeout/erros.
// -----------------------------------------------------------------------------

// mesma validação básica de formato usada em adlerpro/src/lib/email.ts —
// repos separados, sem módulo partilhado, mas a MESMA regra (trim + lowercase
// + regex simples), documentada nos dois lados.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeEmail(email) {
  return String(email ?? "").trim().toLowerCase();
}

function isValidEmail(email) {
  return email.length > 0 && EMAIL_RE.test(email);
}

/**
 * Constrói o payload allowlisted para o intake endpoint, ou devolve `null`
 * com o motivo pelo qual a submissão foi ignorada (nunca lança).
 *
 * Só devolve payload quando: entityType === 'individual' E nome E email
 * válido estão presentes — ver requisito "requisito mínimo".
 */
export function buildCrmLeadPayload(formName, data, { submissionId, sourceUrl } = {}) {
  const classification = classifySubmission(formName, data);
  if (classification.entityType !== "individual") {
    return { payload: null, skippedReason: `entity_type_${classification.entityType}` };
  }

  const { name, email: rawEmail, phone } = extractContact(data);
  const email = normalizeEmail(rawEmail);

  if (!name) return { payload: null, skippedReason: "missing_name" };
  if (!isValidEmail(email)) return { payload: null, skippedReason: "missing_or_invalid_email" };

  const metadata = {};
  if (classification.branchLabel) metadata.branchLabel = classification.branchLabel;
  if (data?.lang) metadata.lang = String(data.lang).trim().slice(0, 20);

  const payload = {
    submissionId,
    name,
    email,
    phone,
    formName,
    market: classification.market,
    product: classification.product,
    source: data?.source || formName,
    sourceUrl: data?.source_url || sourceUrl,
    utm: {
      source: data?.utm_source,
      medium: data?.utm_medium,
      campaign: data?.utm_campaign,
      content: data?.utm_content,
      term: data?.utm_term,
    },
    metadata: Object.keys(metadata).length > 0 ? metadata : undefined,
  };

  return { payload, skippedReason: null };
}

// Log técnico apenas — nunca nome/email/telefone/payload em bruto.
function logEvent(event, fields = {}) {
  const parts = Object.entries(fields)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => `${k}=${v}`);
  console.log(`[crm-sync] ${event}${parts.length ? " " + parts.join(" ") : ""}`);
}

const DEFAULT_TIMEOUT_MS = 5000;

/**
 * Envia o lead para o intake endpoint do CRM. Best-effort: qualquer falha
 * (rede, timeout, 401, 5xx) é apanhada e logada, nunca propagada — ver
 * chamador em submission-created.mjs.
 */
export async function sendLeadToCrm(formName, data, { submissionId, sourceUrl } = {}) {
  const { payload, skippedReason } = buildCrmLeadPayload(formName, data, { submissionId, sourceUrl });
  if (!payload) {
    logEvent("CRM_SYNC_SKIPPED", { reason: skippedReason, submissionId });
    return;
  }

  const url = process.env.CRM_LEAD_INTAKE_URL;
  const secret = process.env.CRM_LEAD_INTAKE_SECRET;
  if (!url || !secret) {
    logEvent("CRM_SYNC_SKIPPED", { reason: "not_configured", submissionId });
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!res.ok) {
      logEvent("CRM_SYNC_FAILED", { reason: `http_${res.status}`, submissionId });
      return;
    }

    const result = await res.json().catch(() => null);
    if (result?.duplicateSubmission) {
      logEvent("CRM_SYNC_OK", { outcome: "duplicate_submission", submissionId });
    } else {
      logEvent("CRM_SYNC_OK", {
        outcome: result?.clientCreated ? "client_created" : "client_reused",
        submissionId,
      });
    }
  } catch (err) {
    const reason = err?.name === "AbortError" ? "timeout" : "network_error";
    logEvent("CRM_SYNC_FAILED", { reason, submissionId });
  } finally {
    clearTimeout(timeout);
  }
}
