import { getStore } from "@netlify/blobs";

function corsHeaders() {
  return {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  };
}

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + "#vault-salt-adler-rochefort#");
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default async (req) => {
  const headers = corsHeaders();

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Dados inválidos" }), { status: 400, headers });
  }

  const {
    nome,
    nif,
    cartaoCidadao,
    morada,
    codigoPostal,
    dataCartaConducao,
    numCartaConducao,
    matricula,
    email,
    telemovel,
  } = body;

  // Validate required fields
  if (!nome || !nif || !cartaoCidadao || !morada || !codigoPostal || !dataCartaConducao || !numCartaConducao || !matricula || !email || !telemovel) {
    return new Response(JSON.stringify({ error: "Todos os campos são obrigatórios" }), { status: 400, headers });
  }

  // Validate NIF (9 digits)
  if (!/^\d{9}$/.test(nif.trim())) {
    return new Response(JSON.stringify({ error: "NIF inválido" }), { status: 400, headers });
  }

  // Validate email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return new Response(JSON.stringify({ error: "Email inválido" }), { status: 400, headers });
  }

  const leadId = crypto.randomUUID();
  const timestamp = new Date().toISOString();

  // 1. Store the lead in the leads store
  const leads = getStore("leads-auto");
  const leadData = {
    id: leadId,
    nome: nome.trim(),
    nif: nif.trim(),
    cartaoCidadao: cartaoCidadao.trim(),
    morada: morada.trim(),
    codigoPostal: codigoPostal.trim(),
    dataCartaConducao: dataCartaConducao.trim(),
    numCartaConducao: numCartaConducao.trim(),
    matricula: matricula.trim().toUpperCase(),
    email: email.trim().toLowerCase(),
    telemovel: telemovel.trim(),
    source: "landing-seguro-auto",
    status: "novo",
    createdAt: timestamp,
  };

  await leads.set(leadId, JSON.stringify(leadData));

  // 2. Also create a client in the CRM (vault-clients) for the backoffice
  const clients = getStore("vault-clients");

  // Use NIF as the username/key for uniqueness
  const clientKey = nif.trim();
  const existing = await clients.get(clientKey, { type: "json" }).catch(() => null);

  if (!existing) {
    // Generate a temporary password from NIF + first 4 chars of CC
    const tempPassword = nif.trim() + cartaoCidadao.trim().slice(0, 4);
    const passwordHash = await hashPassword(tempPassword);

    const newClient = {
      username: clientKey,
      passwordHash,
      name: nome.trim(),
      email: email.trim().toLowerCase(),
      company: "",
      nif: nif.trim(),
      cartaoCidadao: cartaoCidadao.trim(),
      morada: morada.trim(),
      codigoPostal: codigoPostal.trim(),
      telemovel: telemovel.trim(),
      dataCartaConducao: dataCartaConducao.trim(),
      numCartaConducao: numCartaConducao.trim(),
      matricula: matricula.trim().toUpperCase(),
      source: "landing-seguro-auto",
      policies: [],
      createdAt: timestamp,
    };

    await clients.set(clientKey, JSON.stringify(newClient));
  }

  return new Response(
    JSON.stringify({ success: true, message: "Lead registado com sucesso" }),
    { status: 201, headers }
  );
};

export const config = {
  path: "/api/lead-auto",
};
