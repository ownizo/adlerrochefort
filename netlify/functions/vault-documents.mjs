import { getStore } from "@netlify/blobs";

function corsHeaders(contentType = "application/json") {
  return {
    "Content-Type": contentType,
    "Cache-Control": "no-store",
  };
}

async function validateSession(req) {
  const url = new URL(req.url);
  const token =
    url.searchParams.get("token") ||
    req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) return null;

  const sessions = getStore("vault-sessions");
  const session = await sessions.get(token, { type: "json" }).catch(() => null);

  if (!session || new Date(session.expiresAt) < new Date()) {
    return null;
  }
  return session;
}

async function validateAdmin(req) {
  const session = await validateSession(req);
  if (!session || session.type !== "admin") return null;
  return session;
}

export default async (req) => {
  const headers = corsHeaders();
  const url = new URL(req.url);

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  // POST - Upload document
  if (req.method === "POST") {
    const admin = await validateAdmin(req);
    if (!admin) {
      return new Response(JSON.stringify({ error: "Acesso restrito a administradores" }), { status: 403, headers });
    }

    let formData;
    try {
      formData = await req.formData();
    } catch {
      return new Response(JSON.stringify({ error: "Dados de formulário inválidos" }), { status: 400, headers });
    }

    const file = formData.get("file");
    const insuranceId = formData.get("insuranceId");

    // Mode 1: Upload to insurance record directly (per-policy documents)
    if (file && insuranceId) {
      const insuranceStore = getStore("vault-insurance");
      const record = await insuranceStore.get(insuranceId, { type: "json" }).catch(() => null);
      if (!record) {
        return new Response(JSON.stringify({ error: "Apólice não encontrada" }), { status: 404, headers });
      }

      const docId = crypto.randomUUID();
      const docs = getStore("vault-documents");
      const fileBuffer = await file.arrayBuffer();

      await docs.set(docId, new Uint8Array(fileBuffer), {
        metadata: {
          filename: file.name,
          contentType: file.type || "application/octet-stream",
          size: file.size,
          uploadedAt: new Date().toISOString(),
        },
      });

      if (!record.documentos) record.documentos = [];
      record.documentos.push({
        id: docId,
        name: file.name,
        size: file.size,
        contentType: file.type || "application/octet-stream",
        uploadedAt: new Date().toISOString(),
      });
      record.updatedAt = new Date().toISOString();

      await insuranceStore.set(insuranceId, JSON.stringify(record));

      return new Response(
        JSON.stringify({
          success: true,
          document: { id: docId, name: file.name, size: file.size },
        }),
        { status: 201, headers }
      );
    }

    // Mode 2: Upload to client portal policy (existing flow)
    const clientUsername = formData.get("username");
    const policyId = formData.get("policyId");

    if (!file || !clientUsername || !policyId) {
      return new Response(
        JSON.stringify({ error: "Ficheiro, username e policyId são obrigatórios" }),
        { status: 400, headers }
      );
    }

    const clients = getStore("vault-clients");
    const client = await clients.get(clientUsername.toLowerCase(), { type: "json" }).catch(() => null);
    if (!client) {
      return new Response(JSON.stringify({ error: "Cliente não encontrado" }), { status: 404, headers });
    }

    const policy = client.policies.find((p) => p.id === policyId);
    if (!policy) {
      return new Response(JSON.stringify({ error: "Apólice não encontrada" }), { status: 404, headers });
    }

    // Store the document
    const docId = crypto.randomUUID();
    const docs = getStore("vault-documents");
    const fileBuffer = await file.arrayBuffer();

    await docs.set(docId, new Uint8Array(fileBuffer), {
      metadata: {
        filename: file.name,
        contentType: file.type || "application/octet-stream",
        size: file.size,
        uploadedAt: new Date().toISOString(),
      },
    });

    // Add document reference to policy
    policy.documents.push({
      id: docId,
      name: file.name,
      size: file.size,
      contentType: file.type || "application/octet-stream",
      uploadedAt: new Date().toISOString(),
    });

    await clients.set(clientUsername.toLowerCase(), JSON.stringify(client));

    return new Response(
      JSON.stringify({
        success: true,
        document: { id: docId, name: file.name, size: file.size },
      }),
      { status: 201, headers }
    );
  }

  // GET - Download document
  if (req.method === "GET") {
    const session = await validateSession(req);
    if (!session) {
      return new Response(JSON.stringify({ error: "Não autorizado" }), { status: 401, headers });
    }

    const docId = url.searchParams.get("id");
    if (!docId) {
      return new Response(JSON.stringify({ error: "ID do documento é obrigatório" }), { status: 400, headers });
    }

    // Verify client has access to this document
    if (session.type === "client") {
      const clients = getStore("vault-clients");
      const client = await clients.get(session.username, { type: "json" }).catch(() => null);
      if (!client) {
        return new Response(JSON.stringify({ error: "Não autorizado" }), { status: 403, headers });
      }

      // Check portal-native policies
      let hasAccess = client.policies.some((p) => p.documents.some((d) => d.id === docId));

      // Also check insurance records with visivelPortal enabled
      if (!hasAccess) {
        const insuranceStore = getStore("vault-insurance");
        const { blobs: insBlobs } = await insuranceStore.list();
        const insResults = await Promise.all(
          insBlobs.map(blob => insuranceStore.get(blob.key, { type: "json" }).catch(() => null))
        );
        const uname = session.username.toLowerCase();
        const cname = (client.name || '').toLowerCase();
        const cemail = (client.email || '').toLowerCase();
        hasAccess = insResults.some(r => {
          if (!r) return false;
          const code = (r.codigoCliente || '').toLowerCase();
          const codeNoDash = code.replace(/-/g, '');
          const isClientMatch = r.visivelPortal && (
            (code && code === uname) ||
            (codeNoDash && codeNoDash === uname) ||
            (code && cname && code === cname) ||
            (cemail && r.tomadorEmail && r.tomadorEmail.toLowerCase() === cemail)
          );
          const isSharedMatch = Array.isArray(r.partilharCom) && r.partilharCom.some(u => u.toLowerCase() === uname);
          if (!isClientMatch && !isSharedMatch) return false;
          return (r.documentos || []).some(d => d.id === docId);
        });
      }

      if (!hasAccess) {
        return new Response(JSON.stringify({ error: "Sem acesso a este documento" }), { status: 403, headers });
      }
    }

    const docs = getStore("vault-documents");
    const { data, metadata } = await docs.getWithMetadata(docId, { type: "arrayBuffer" }).catch(() => ({
      data: null,
      metadata: null,
    }));

    if (!data) {
      return new Response(JSON.stringify({ error: "Documento não encontrado" }), { status: 404, headers });
    }

    const isPreview = url.searchParams.get("preview") === "true";
    const disposition = isPreview ? "inline" : "attachment";

    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": metadata?.contentType || "application/octet-stream",
        "Content-Disposition": `${disposition}; filename="${metadata?.filename || "document"}"`,
        "Cache-Control": "private, no-cache",
      },
    });
  }

  // DELETE - Delete document
  if (req.method === "DELETE") {
    const admin = await validateAdmin(req);
    if (!admin) {
      return new Response(JSON.stringify({ error: "Acesso restrito a administradores" }), { status: 403, headers });
    }

    const docId = url.searchParams.get("id");
    const insuranceId = url.searchParams.get("insuranceId");

    // Mode 1: Delete from insurance record
    if (docId && insuranceId) {
      const insuranceStore = getStore("vault-insurance");
      const record = await insuranceStore.get(insuranceId, { type: "json" }).catch(() => null);
      if (record) {
        record.documentos = (record.documentos || []).filter((d) => d.id !== docId);
        record.updatedAt = new Date().toISOString();
        await insuranceStore.set(insuranceId, JSON.stringify(record));
      }

      const docs = getStore("vault-documents");
      await docs.delete(docId).catch(() => {});

      return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    }

    // Mode 2: Delete from client portal policy (existing flow)
    const clientUsername = url.searchParams.get("username");
    const policyId = url.searchParams.get("policyId");

    if (!docId || !clientUsername || !policyId) {
      return new Response(
        JSON.stringify({ error: "ID, username e policyId são obrigatórios" }),
        { status: 400, headers }
      );
    }

    // Remove from client policy
    const clients = getStore("vault-clients");
    const client = await clients.get(clientUsername.toLowerCase(), { type: "json" }).catch(() => null);
    if (client) {
      const policy = client.policies.find((p) => p.id === policyId);
      if (policy) {
        policy.documents = policy.documents.filter((d) => d.id !== docId);
        await clients.set(clientUsername.toLowerCase(), JSON.stringify(client));
      }
    }

    // Delete the document blob
    const docs = getStore("vault-documents");
    await docs.delete(docId).catch(() => {});

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  }

  return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers });
};

export const config = {
  path: "/api/vault/documents",
};
