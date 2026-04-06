import { getStore } from "@netlify/blobs";

const IX_ACCOUNT = "ownizounipessoall-1";
const IX_API_KEY = "54f1a16cc8f7183bd955b65f9706fc5c3b44bee4";
const IX_BASE = `https://${IX_ACCOUNT}.app.invoicexpress.com`;

function corsHeaders() {
  return {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  };
}

async function validateAdmin(req) {
  const url = new URL(req.url);
  const token =
    url.searchParams.get("token") ||
    req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) return null;

  const sessions = getStore("vault-sessions");
  const session = await sessions.get(token, { type: "json" }).catch(() => null);

  if (!session || session.type !== "admin" || new Date(session.expiresAt) < new Date()) {
    return null;
  }
  return session;
}

async function ixFetch(path, options = {}) {
  const separator = path.includes("?") ? "&" : "?";
  const url = `${IX_BASE}${path}${separator}api_key=${IX_API_KEY}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }
  return { status: res.status, data, ok: res.ok };
}

export default async (req) => {
  const headers = corsHeaders();
  const url = new URL(req.url);

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  const admin = await validateAdmin(req);
  if (!admin) {
    return new Response(JSON.stringify({ error: "Acesso restrito a administradores" }), { status: 403, headers });
  }

  // GET — list or get invoices/documents
  if (req.method === "GET") {
    const action = url.searchParams.get("action");

    // List all invoices with optional filters
    if (action === "list" || !action) {
      const page = url.searchParams.get("page") || "1";
      const perPage = url.searchParams.get("per_page") || "25";
      const status = url.searchParams.get("status") || "";
      const text = url.searchParams.get("text") || "";
      const dateFrom = url.searchParams.get("date_from") || "";
      const dateTo = url.searchParams.get("date_to") || "";
      const docType = url.searchParams.get("doc_type") || "";

      let params = `page=${page}&per_page=${perPage}`;
      if (text) params += `&text=${encodeURIComponent(text)}`;
      if (status) params += `&status[]=${encodeURIComponent(status)}`;
      if (dateFrom) params += `&date[from]=${encodeURIComponent(dateFrom)}`;
      if (dateTo) params += `&date[to]=${encodeURIComponent(dateTo)}`;
      if (docType) params += `&type[]=${encodeURIComponent(docType)}`;

      const endpoint = "/invoices.json?" + params;
      const result = await ixFetch(endpoint);
      return new Response(JSON.stringify(result.data), { status: result.status, headers });
    }

    // Get single invoice
    if (action === "get") {
      const docId = url.searchParams.get("doc_id");
      const type = url.searchParams.get("type") || "invoices";
      if (!docId) {
        return new Response(JSON.stringify({ error: "doc_id é obrigatório" }), { status: 400, headers });
      }
      const result = await ixFetch(`/${type}/${docId}.json`);
      return new Response(JSON.stringify(result.data), { status: result.status, headers });
    }

    // Generate PDF
    if (action === "pdf") {
      const docId = url.searchParams.get("doc_id");
      const type = url.searchParams.get("type") || "invoices";
      if (!docId) {
        return new Response(JSON.stringify({ error: "doc_id é obrigatório" }), { status: 400, headers });
      }
      const result = await ixFetch(`/${type}/${docId}/generate-pdf.json`, { method: "PUT" });

      // InvoiceXpress may return 202 with the PDF not ready yet
      if (result.status === 202 || (result.data && result.data.output && result.data.output.pdfUrl)) {
        return new Response(JSON.stringify(result.data), { status: 200, headers });
      }
      return new Response(JSON.stringify(result.data), { status: result.status, headers });
    }

    // List clients
    if (action === "clients") {
      const page = url.searchParams.get("page") || "1";
      const perPage = url.searchParams.get("per_page") || "50";
      const result = await ixFetch(`/clients.json?page=${page}&per_page=${perPage}`);
      return new Response(JSON.stringify(result.data), { status: result.status, headers });
    }

    // List sequences
    if (action === "sequences") {
      const result = await ixFetch("/sequences.json");
      return new Response(JSON.stringify(result.data), { status: result.status, headers });
    }

    return new Response(JSON.stringify({ error: "Ação GET inválida" }), { status: 400, headers });
  }

  // POST — create, update, change state, send email
  if (req.method === "POST") {
    let body;
    try {
      body = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: "Corpo do pedido inválido" }), { status: 400, headers });
    }

    const { action } = body;

    // Create invoice (or invoice_receipt, simplified_invoice, credit_note, debit_note)
    if (action === "create") {
      const docType = body.doc_type || "invoices";
      const typeKey = docType === "invoices" ? "invoice"
        : docType === "invoice_receipts" ? "invoice_receipt"
        : docType === "simplified_invoices" ? "simplified_invoice"
        : docType === "credit_notes" ? "credit_note"
        : docType === "debit_notes" ? "debit_note"
        : "invoice";

      const payload = { [typeKey]: body.document };
      const result = await ixFetch(`/${docType}.json`, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      return new Response(JSON.stringify(result.data), { status: result.status, headers });
    }

    // Update invoice
    if (action === "update") {
      const docId = body.doc_id;
      const docType = body.doc_type || "invoices";
      const typeKey = docType === "invoices" ? "invoice"
        : docType === "invoice_receipts" ? "invoice_receipt"
        : docType === "simplified_invoices" ? "simplified_invoice"
        : docType === "credit_notes" ? "credit_note"
        : docType === "debit_notes" ? "debit_note"
        : "invoice";

      if (!docId) {
        return new Response(JSON.stringify({ error: "doc_id é obrigatório" }), { status: 400, headers });
      }
      const payload = { [typeKey]: body.document };
      const result = await ixFetch(`/${docType}/${docId}.json`, {
        method: "PUT",
        body: JSON.stringify(payload),
      });
      return new Response(JSON.stringify(result.data || { success: true }), { status: result.status, headers });
    }

    // Change state (finalize, cancel, etc.)
    if (action === "change-state") {
      const docId = body.doc_id;
      const docType = body.doc_type || "invoices";
      const newState = body.state; // "finalized", "canceled", "settled", "unsettled", "deleted"

      if (!docId || !newState) {
        return new Response(JSON.stringify({ error: "doc_id e state são obrigatórios" }), { status: 400, headers });
      }

      const typeKey = docType === "invoices" ? "invoice"
        : docType === "invoice_receipts" ? "invoice_receipt"
        : docType === "simplified_invoices" ? "simplified_invoice"
        : docType === "credit_notes" ? "credit_note"
        : docType === "debit_notes" ? "debit_note"
        : "invoice";

      const payload = { [typeKey]: { state: newState } };
      const result = await ixFetch(`/${docType}/${docId}/change-state.json`, {
        method: "PUT",
        body: JSON.stringify(payload),
      });
      return new Response(JSON.stringify(result.data || { success: true }), { status: result.status, headers });
    }

    // Send by email
    if (action === "send-email") {
      const docId = body.doc_id;
      const docType = body.doc_type || "invoices";
      if (!docId) {
        return new Response(JSON.stringify({ error: "doc_id é obrigatório" }), { status: 400, headers });
      }

      const payload = {
        message: {
          client: { email: body.email || "" },
          subject: body.subject || "",
          body: body.body || "",
        },
      };
      const result = await ixFetch(`/${docType}/${docId}/email-document.json`, {
        method: "PUT",
        body: JSON.stringify(payload),
      });
      return new Response(JSON.stringify(result.data || { success: true }), { status: result.status, headers });
    }

    // Create client in InvoiceXpress
    if (action === "create-client") {
      const payload = { client: body.client };
      const result = await ixFetch("/clients.json", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      return new Response(JSON.stringify(result.data), { status: result.status, headers });
    }

    // Generate payment (receipt)
    if (action === "generate-payment") {
      const docId = body.doc_id;
      const docType = body.doc_type || "invoices";
      if (!docId) {
        return new Response(JSON.stringify({ error: "doc_id é obrigatório" }), { status: 400, headers });
      }
      const payload = {
        partial_payment: {
          amount: body.amount,
          payment_mechanism: body.payment_mechanism || "MB",
        },
      };
      const result = await ixFetch(`/${docType}/${docId}/partial-payments.json`, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      return new Response(JSON.stringify(result.data), { status: result.status, headers });
    }

    return new Response(JSON.stringify({ error: "Ação POST inválida" }), { status: 400, headers });
  }

  return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers });
};

export const config = {
  path: "/api/vault/billing",
};
