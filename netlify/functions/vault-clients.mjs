import { getStore } from "@netlify/blobs";

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + "#vault-salt-adler-rochefort#");
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function corsHeaders() {
  return {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  };
}

async function validateAdmin(req) {
  const token =
    new URL(req.url).searchParams.get("token") ||
    req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) return null;

  const sessions = getStore("vault-sessions");
  const session = await sessions.get(token, { type: "json" }).catch(() => null);

  if (!session || session.type !== "admin" || new Date(session.expiresAt) < new Date()) {
    return null;
  }
  return session;
}

async function validateSession(req) {
  const token =
    new URL(req.url).searchParams.get("token") ||
    req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) return null;

  const sessions = getStore("vault-sessions");
  const session = await sessions.get(token, { type: "json" }).catch(() => null);

  if (!session || new Date(session.expiresAt) < new Date()) {
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

  // GET - List all clients (admin) or get own data (client)
  if (req.method === "GET") {
    const session = await validateSession(req);
    if (!session) {
      return new Response(JSON.stringify({ error: "Não autorizado" }), { status: 401, headers });
    }

    const clients = getStore("vault-clients");
    const clientId = url.searchParams.get("id");

    if (session.type === "admin") {
      if (clientId) {
        const client = await clients.get(clientId, { type: "json" }).catch(() => null);
        if (!client) {
          return new Response(JSON.stringify({ error: "Cliente não encontrado" }), { status: 404, headers });
        }
        const { passwordHash, ...safeClient } = client;
        return new Response(JSON.stringify({ client: safeClient }), { status: 200, headers });
      }

      // List all clients (parallel fetch for speed)
      const { blobs } = await clients.list();
      const results = await Promise.all(
        blobs.map(blob => clients.get(blob.key, { type: "json" }).catch(() => null))
      );
      const allClients = results.filter(Boolean).map(client => {
        const { passwordHash, ...safeClient } = client;
        return safeClient;
      });
      return new Response(JSON.stringify({ clients: allClients }), { status: 200, headers });
    }

    // Client - get own data
    const client = await clients.get(session.username, { type: "json" }).catch(() => null);
    if (!client) {
      return new Response(JSON.stringify({ error: "Cliente não encontrado" }), { status: 404, headers });
    }
    const { passwordHash, ...safeClient } = client;

    // Also fetch insurance records visible in the portal for this client
    const insuranceStore = getStore("vault-insurance");
    const { blobs: insBlobs } = await insuranceStore.list();
    const insResults = await Promise.all(
      insBlobs.map(blob => insuranceStore.get(blob.key, { type: "json" }).catch(() => null))
    );
    const uname = session.username.toLowerCase();
    const cname = (safeClient.name || '').toLowerCase();
    const cemail = (safeClient.email || '').toLowerCase();
    const visiblePolicies = insResults.filter(r => {
      if (!r || !r.visivelPortal) return false;
      const code = (r.codigoCliente || '').toLowerCase();
      const codeNoDash = code.replace(/-/g, '');
      return (
        (code && code === uname) ||
        (codeNoDash && codeNoDash === uname) ||
        (code && cname && code === cname) ||
        (cemail && r.tomadorEmail && r.tomadorEmail.toLowerCase() === cemail)
      );
    }).map(r => ({
      id: r.id,
      name: [r.ramo, r.seguradora, r.numeroApolice].filter(Boolean).join(' — ') || r.numeroApolice || 'Apólice',
      premium: r.premioTotal ? r.premioTotal.toFixed(2) + ' EUR' : '',
      startDate: r.dataInicio || '',
      endDate: r.dataFim || '',
      description: [
        r.produto ? 'Produto: ' + r.produto : '',
        r.frequenciaPagamento ? 'Pagamento: ' + r.frequenciaPagamento : '',
        r.notas || '',
      ].filter(Boolean).join('\n'),
      documents: r.documentos || [],
      estado: r.estado || 'ativa',
    }));

    // Fetch policies shared with this client via partilharCom
    const sharedPolicies = insResults.filter(r => {
      if (!r || !Array.isArray(r.partilharCom)) return false;
      return r.partilharCom.some(u => u.toLowerCase() === uname);
    }).map(r => ({
      id: r.id,
      name: [r.ramo, r.seguradora, r.numeroApolice].filter(Boolean).join(' — ') || r.numeroApolice || 'Apólice',
      premium: r.premioTotal ? r.premioTotal.toFixed(2) + ' EUR' : '',
      startDate: r.dataInicio || '',
      endDate: r.dataFim || '',
      description: [
        r.produto ? 'Produto: ' + r.produto : '',
        r.frequenciaPagamento ? 'Pagamento: ' + r.frequenciaPagamento : '',
        r.notas || '',
      ].filter(Boolean).join('\n'),
      documents: r.documentos || [],
      estado: r.estado || 'ativa',
      partilhada: true,
    }));

    // Merge: portal-native policies + visible insurance policies + shared policies (deduplicate by id)
    const seenIds = new Set();
    const allPolicies = [...(safeClient.policies || []), ...visiblePolicies, ...sharedPolicies];
    const mergedPolicies = allPolicies.filter(p => {
      if (seenIds.has(p.id)) return false;
      seenIds.add(p.id);
      return true;
    });
    safeClient.policies = mergedPolicies;

    return new Response(JSON.stringify({ client: safeClient }), { status: 200, headers });
  }

  // POST - Create or update client, manage policies, reset password
  if (req.method === "POST") {
    const admin = await validateAdmin(req);
    if (!admin) {
      return new Response(JSON.stringify({ error: "Acesso restrito a administradores" }), { status: 403, headers });
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid request body" }), { status: 400, headers });
    }

    const clients = getStore("vault-clients");
    const { action } = body;

    // Get login logs for a client
    if (action === "get-login-logs") {
      const { username } = body;
      if (!username) {
        return new Response(JSON.stringify({ error: "Username é obrigatório" }), { status: 400, headers });
      }
      const loginLogs = getStore("vault-login-logs");
      const logs = await loginLogs.get(username.toLowerCase(), { type: "json" }).catch(() => null);
      return new Response(JSON.stringify({ logs: logs ? logs.entries : [] }), { status: 200, headers });
    }

    // Create client
    if (action === "create") {
      const { username, password, name, email, company } = body;
      if (!username || !password || !name) {
        return new Response(JSON.stringify({ error: "Username, password e nome são obrigatórios" }), {
          status: 400,
          headers,
        });
      }

      const key = username.toLowerCase();
      const existing = await clients.get(key, { type: "json" }).catch(() => null);
      if (existing) {
        return new Response(JSON.stringify({ error: "Username já existe" }), { status: 409, headers });
      }

      const passwordHash = await hashPassword(password);
      const newClient = {
        username: key,
        passwordHash,
        name,
        email: email || "",
        company: company || "",
        policies: [],
        createdAt: new Date().toISOString(),
      };

      await clients.set(key, JSON.stringify(newClient));
      const { passwordHash: _, ...safeClient } = newClient;
      return new Response(JSON.stringify({ success: true, client: safeClient }), { status: 201, headers });
    }

    // Update client
    if (action === "update") {
      const { username, name, email, company } = body;
      if (!username) {
        return new Response(JSON.stringify({ error: "Username é obrigatório" }), { status: 400, headers });
      }

      const key = username.toLowerCase();
      const client = await clients.get(key, { type: "json" }).catch(() => null);
      if (!client) {
        return new Response(JSON.stringify({ error: "Cliente não encontrado" }), { status: 404, headers });
      }

      if (name !== undefined) client.name = name;
      if (email !== undefined) client.email = email;
      if (company !== undefined) client.company = company;

      await clients.set(key, JSON.stringify(client));
      const { passwordHash, ...safeClient } = client;
      return new Response(JSON.stringify({ success: true, client: safeClient }), { status: 200, headers });
    }

    // Reset password
    if (action === "reset-password") {
      const { username, newPassword } = body;
      if (!username || !newPassword) {
        return new Response(JSON.stringify({ error: "Username e nova password são obrigatórios" }), {
          status: 400,
          headers,
        });
      }

      const key = username.toLowerCase();
      const client = await clients.get(key, { type: "json" }).catch(() => null);
      if (!client) {
        return new Response(JSON.stringify({ error: "Cliente não encontrado" }), { status: 404, headers });
      }

      client.passwordHash = await hashPassword(newPassword);
      await clients.set(key, JSON.stringify(client));
      return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    }

    // Add policy
    if (action === "add-policy") {
      const { username, policy } = body;
      if (!username || !policy || !policy.name) {
        return new Response(JSON.stringify({ error: "Dados da apólice incompletos" }), { status: 400, headers });
      }

      const key = username.toLowerCase();
      const client = await clients.get(key, { type: "json" }).catch(() => null);
      if (!client) {
        return new Response(JSON.stringify({ error: "Cliente não encontrado" }), { status: 404, headers });
      }

      const newPolicy = {
        id: crypto.randomUUID(),
        name: policy.name,
        premium: policy.premium || "",
        startDate: policy.startDate || "",
        endDate: policy.endDate || "",
        description: policy.description || "",
        documents: [],
        createdAt: new Date().toISOString(),
      };

      client.policies.push(newPolicy);
      await clients.set(key, JSON.stringify(client));
      return new Response(JSON.stringify({ success: true, policy: newPolicy }), { status: 201, headers });
    }

    // Update policy
    if (action === "update-policy") {
      const { username, policyId, policy } = body;
      if (!username || !policyId) {
        return new Response(JSON.stringify({ error: "Dados incompletos" }), { status: 400, headers });
      }

      const key = username.toLowerCase();
      const client = await clients.get(key, { type: "json" }).catch(() => null);
      if (!client) {
        return new Response(JSON.stringify({ error: "Cliente não encontrado" }), { status: 404, headers });
      }

      const policyIndex = client.policies.findIndex((p) => p.id === policyId);
      if (policyIndex === -1) {
        return new Response(JSON.stringify({ error: "Apólice não encontrada" }), { status: 404, headers });
      }

      const existing = client.policies[policyIndex];
      if (policy.name !== undefined) existing.name = policy.name;
      if (policy.premium !== undefined) existing.premium = policy.premium;
      if (policy.startDate !== undefined) existing.startDate = policy.startDate;
      if (policy.endDate !== undefined) existing.endDate = policy.endDate;
      if (policy.description !== undefined) existing.description = policy.description;

      await clients.set(key, JSON.stringify(client));
      return new Response(JSON.stringify({ success: true, policy: existing }), { status: 200, headers });
    }

    // Delete policy
    if (action === "delete-policy") {
      const { username, policyId } = body;
      if (!username || !policyId) {
        return new Response(JSON.stringify({ error: "Dados incompletos" }), { status: 400, headers });
      }

      const key = username.toLowerCase();
      const client = await clients.get(key, { type: "json" }).catch(() => null);
      if (!client) {
        return new Response(JSON.stringify({ error: "Cliente não encontrado" }), { status: 404, headers });
      }

      // Delete associated documents
      const policy = client.policies.find((p) => p.id === policyId);
      if (policy && policy.documents.length > 0) {
        const docs = getStore("vault-documents");
        for (const doc of policy.documents) {
          await docs.delete(doc.id).catch(() => {});
        }
      }

      client.policies = client.policies.filter((p) => p.id !== policyId);
      await clients.set(key, JSON.stringify(client));
      return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    }

    return new Response(JSON.stringify({ error: "Ação inválida" }), { status: 400, headers });
  }

  // PUT - Client self-service (update display name, change password)
  if (req.method === "PUT") {
    const session = await validateSession(req);
    if (!session || session.type !== "client") {
      return new Response(JSON.stringify({ error: "Não autorizado" }), { status: 401, headers });
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid request body" }), { status: 400, headers });
    }

    const clients = getStore("vault-clients");
    const client = await clients.get(session.username, { type: "json" }).catch(() => null);
    if (!client) {
      return new Response(JSON.stringify({ error: "Cliente não encontrado" }), { status: 404, headers });
    }

    const { action } = body;

    // Update display name
    if (action === "update-name") {
      const { name } = body;
      if (!name || !name.trim()) {
        return new Response(JSON.stringify({ error: "O nome é obrigatório" }), { status: 400, headers });
      }
      client.name = name.trim();
      await clients.set(session.username, JSON.stringify(client));

      // Update session name
      const sessions = getStore("vault-sessions");
      const token = new URL(req.url).searchParams.get("token") || req.headers.get("authorization")?.replace("Bearer ", "");
      if (token) {
        const sess = await sessions.get(token, { type: "json" }).catch(() => null);
        if (sess) {
          sess.name = client.name;
          await sessions.set(token, JSON.stringify(sess));
        }
      }

      return new Response(JSON.stringify({ success: true, name: client.name }), { status: 200, headers });
    }

    // Change password
    if (action === "change-password") {
      const { currentPassword, newPassword } = body;
      if (!currentPassword || !newPassword) {
        return new Response(JSON.stringify({ error: "Password atual e nova password são obrigatórias" }), { status: 400, headers });
      }
      if (newPassword.length < 6) {
        return new Response(JSON.stringify({ error: "A nova password deve ter pelo menos 6 caracteres" }), { status: 400, headers });
      }

      const currentHash = await hashPassword(currentPassword);
      if (currentHash !== client.passwordHash) {
        return new Response(JSON.stringify({ error: "Password atual incorreta" }), { status: 403, headers });
      }

      client.passwordHash = await hashPassword(newPassword);
      await clients.set(session.username, JSON.stringify(client));
      return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    }

    return new Response(JSON.stringify({ error: "Ação inválida" }), { status: 400, headers });
  }

  // DELETE - Delete client
  if (req.method === "DELETE") {
    const admin = await validateAdmin(req);
    if (!admin) {
      return new Response(JSON.stringify({ error: "Acesso restrito a administradores" }), { status: 403, headers });
    }

    const clientId = url.searchParams.get("id");
    if (!clientId) {
      return new Response(JSON.stringify({ error: "ID do cliente é obrigatório" }), { status: 400, headers });
    }

    const clients = getStore("vault-clients");
    const client = await clients.get(clientId, { type: "json" }).catch(() => null);
    if (!client) {
      return new Response(JSON.stringify({ error: "Cliente não encontrado" }), { status: 404, headers });
    }

    // Delete all associated documents
    const docs = getStore("vault-documents");
    for (const policy of client.policies) {
      for (const doc of policy.documents) {
        await docs.delete(doc.id).catch(() => {});
      }
    }

    await clients.delete(clientId);
    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  }

  return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers });
};

export const config = {
  path: "/api/vault/clients",
};
