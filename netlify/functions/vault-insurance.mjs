import { getStore } from "@netlify/blobs";

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

export default async (req) => {
  const headers = corsHeaders();
  const url = new URL(req.url);

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  // All operations require admin authentication
  const admin = await validateAdmin(req);
  if (!admin) {
    return new Response(JSON.stringify({ error: "Acesso restrito a administradores" }), { status: 403, headers });
  }

  const store = getStore("vault-insurance");

  // Helper: generate next client code
  async function getNextClientCode(allRecords) {
    let maxNum = 0;
    for (const r of allRecords) {
      if (r.codigoCliente) {
        const match = r.codigoCliente.match(/^CLI-(\d+)$/);
        if (match) {
          const n = parseInt(match[1], 10);
          if (n > maxNum) maxNum = n;
        }
      }
    }
    return 'CLI-' + String(maxNum + 1).padStart(4, '0');
  }

  // GET - List all records or get single record
  if (req.method === "GET") {
    const recordId = url.searchParams.get("id");

    if (recordId) {
      const record = await store.get(recordId, { type: "json" }).catch(() => null);
      if (!record) {
        return new Response(JSON.stringify({ error: "Registo não encontrado" }), { status: 404, headers });
      }
      return new Response(JSON.stringify({ record }), { status: 200, headers });
    }

    // List all records (fetch in parallel for speed)
    const { blobs } = await store.list();
    const results = await Promise.all(
      blobs.map(blob => store.get(blob.key, { type: "json" }).catch(() => null))
    );
    const records = results.filter(Boolean);

    // Sort by creation date (newest first)
    records.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return new Response(JSON.stringify({ records }), { status: 200, headers });
  }

  // POST - Create, update, delete records and manage claims
  if (req.method === "POST") {
    let body;
    try {
      body = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: "Corpo do pedido inválido" }), { status: 400, headers });
    }

    const { action } = body;

    // Create record
    if (action === "create") {
      const id = crypto.randomUUID();
      const now = new Date().toISOString();

      // Load all records to determine next client code (parallel)
      const { blobs: allBlobs } = await store.list();
      const allResults = await Promise.all(
        allBlobs.map(blob => store.get(blob.key, { type: "json" }).catch(() => null))
      );
      const allRecords = allResults.filter(Boolean);
      const codigoCliente = body.codigoCliente || await getNextClientCode(allRecords);

      const record = {
        id,
        codigoCliente,
        tomadorNome: body.tomadorNome || "",
        tomadorNIF: body.tomadorNIF || "",
        tomadorMorada: body.tomadorMorada || "",
        tomadorCodigoPostal: body.tomadorCodigoPostal || "",
        tomadorCidade: body.tomadorCidade || "",
        tomadorTelefone: body.tomadorTelefone || "",
        tomadorEmail: body.tomadorEmail || "",
        numeroApolice: body.numeroApolice || "",
        ramo: body.ramo || "",
        seguradora: body.seguradora || "",
        produto: body.produto || "",
        premioTotal: parseFloat(body.premioTotal) || 0,
        frequenciaPagamento: body.frequenciaPagamento || "anual",
        comissaoPercentagem: parseFloat(body.comissaoPercentagem) || 0,
        comissaoValor: parseFloat(body.comissaoValor) || 0,
        dataInicio: body.dataInicio || "",
        dataFim: body.dataFim || "",
        dataRenovacao: body.dataRenovacao || "",
        estado: body.estado || "ativa",
        pago: body.pago || "nao",
        visivelPortal: !!body.visivelPortal,
        partilharCom: Array.isArray(body.partilharCom) ? body.partilharCom : [],
        coMediacao: body.coMediacao || "",
        notas: body.notas || "",
        sinistros: [],
        createdAt: now,
        updatedAt: now,
      };

      if (!record.tomadorNome || !record.numeroApolice) {
        return new Response(
          JSON.stringify({ error: "Nome do tomador e número da apólice são obrigatórios" }),
          { status: 400, headers }
        );
      }

      await store.set(id, JSON.stringify(record));
      return new Response(JSON.stringify({ success: true, record }), { status: 201, headers });
    }

    // Update record
    if (action === "update") {
      const { id } = body;
      if (!id) {
        return new Response(JSON.stringify({ error: "ID é obrigatório" }), { status: 400, headers });
      }

      const existing = await store.get(id, { type: "json" }).catch(() => null);
      if (!existing) {
        return new Response(JSON.stringify({ error: "Registo não encontrado" }), { status: 404, headers });
      }

      const fields = [
        "tomadorNome", "tomadorNIF", "tomadorMorada", "tomadorCodigoPostal",
        "tomadorCidade", "tomadorTelefone", "tomadorEmail", "numeroApolice",
        "ramo", "seguradora", "produto", "frequenciaPagamento",
        "dataInicio", "dataFim", "dataRenovacao", "estado", "notas",
        "codigoCliente", "pago", "coMediacao",
      ];

      for (const field of fields) {
        if (body[field] !== undefined) existing[field] = body[field];
      }

      // Boolean fields
      if (body.visivelPortal !== undefined) existing.visivelPortal = !!body.visivelPortal;

      // Array fields
      if (body.partilharCom !== undefined) existing.partilharCom = Array.isArray(body.partilharCom) ? body.partilharCom : [];

      // Numeric fields
      if (body.premioTotal !== undefined) existing.premioTotal = parseFloat(body.premioTotal) || 0;
      if (body.comissaoPercentagem !== undefined) existing.comissaoPercentagem = parseFloat(body.comissaoPercentagem) || 0;
      if (body.comissaoValor !== undefined) existing.comissaoValor = parseFloat(body.comissaoValor) || 0;

      existing.updatedAt = new Date().toISOString();

      await store.set(id, JSON.stringify(existing));
      return new Response(JSON.stringify({ success: true, record: existing }), { status: 200, headers });
    }

    // Delete record
    if (action === "delete") {
      const { id } = body;
      if (!id) {
        return new Response(JSON.stringify({ error: "ID é obrigatório" }), { status: 400, headers });
      }

      await store.delete(id).catch(() => {});
      return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    }

    // Add claim
    if (action === "add-claim") {
      const { id, claim } = body;
      if (!id || !claim) {
        return new Response(JSON.stringify({ error: "Dados incompletos" }), { status: 400, headers });
      }

      const record = await store.get(id, { type: "json" }).catch(() => null);
      if (!record) {
        return new Response(JSON.stringify({ error: "Registo não encontrado" }), { status: 404, headers });
      }

      const newClaim = {
        id: crypto.randomUUID(),
        data: claim.data || "",
        descricao: claim.descricao || "",
        valorEstimado: parseFloat(claim.valorEstimado) || 0,
        estado: claim.estado || "aberto",
        resolucao: claim.resolucao || "",
        createdAt: new Date().toISOString(),
      };

      if (!record.sinistros) record.sinistros = [];
      record.sinistros.push(newClaim);
      record.updatedAt = new Date().toISOString();

      await store.set(id, JSON.stringify(record));
      return new Response(JSON.stringify({ success: true, claim: newClaim, record }), { status: 201, headers });
    }

    // Update claim
    if (action === "update-claim") {
      const { id, claimId, claim } = body;
      if (!id || !claimId) {
        return new Response(JSON.stringify({ error: "Dados incompletos" }), { status: 400, headers });
      }

      const record = await store.get(id, { type: "json" }).catch(() => null);
      if (!record) {
        return new Response(JSON.stringify({ error: "Registo não encontrado" }), { status: 404, headers });
      }

      const idx = (record.sinistros || []).findIndex((s) => s.id === claimId);
      if (idx === -1) {
        return new Response(JSON.stringify({ error: "Sinistro não encontrado" }), { status: 404, headers });
      }

      const existing = record.sinistros[idx];
      if (claim.data !== undefined) existing.data = claim.data;
      if (claim.descricao !== undefined) existing.descricao = claim.descricao;
      if (claim.valorEstimado !== undefined) existing.valorEstimado = parseFloat(claim.valorEstimado) || 0;
      if (claim.estado !== undefined) existing.estado = claim.estado;
      if (claim.resolucao !== undefined) existing.resolucao = claim.resolucao;

      record.updatedAt = new Date().toISOString();
      await store.set(id, JSON.stringify(record));
      return new Response(JSON.stringify({ success: true, record }), { status: 200, headers });
    }

    // Delete claim
    if (action === "delete-claim") {
      const { id, claimId } = body;
      if (!id || !claimId) {
        return new Response(JSON.stringify({ error: "Dados incompletos" }), { status: 400, headers });
      }

      const record = await store.get(id, { type: "json" }).catch(() => null);
      if (!record) {
        return new Response(JSON.stringify({ error: "Registo não encontrado" }), { status: 404, headers });
      }

      record.sinistros = (record.sinistros || []).filter((s) => s.id !== claimId);
      record.updatedAt = new Date().toISOString();

      await store.set(id, JSON.stringify(record));
      return new Response(JSON.stringify({ success: true, record }), { status: 200, headers });
    }

    return new Response(JSON.stringify({ error: "Ação inválida" }), { status: 400, headers });
  }

  return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers });
};

export const config = {
  path: "/api/vault/insurance",
};
