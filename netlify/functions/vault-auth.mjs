import { getStore } from "@netlify/blobs";

const ADMIN_USERNAME = "Adler";
const ADMIN_PASSWORD_HASH = "a]#vault#admin#2024";
const SESSION_DURATION_CLIENT = 24 * 60 * 60 * 1000;
const SESSION_DURATION_ADMIN = 8 * 60 * 60 * 1000;

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + "#vault-salt-adler-rochefort#");
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function getAdminHash() {
  return await hashPassword("Adler1234");
}

function corsHeaders() {
  return {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  };
}

export default async (req) => {
  const headers = corsHeaders();

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  if (req.method === "GET") {
    const url = new URL(req.url);
    const token = url.searchParams.get("token") || req.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
      return new Response(JSON.stringify({ valid: false }), { status: 401, headers });
    }

    const sessions = getStore("vault-sessions");
    const session = await sessions.get(token, { type: "json" }).catch(() => null);

    if (!session || new Date(session.expiresAt) < new Date()) {
      if (session) await sessions.delete(token);
      return new Response(JSON.stringify({ valid: false }), { status: 401, headers });
    }

    return new Response(
      JSON.stringify({ valid: true, type: session.type, username: session.username, name: session.name }),
      { status: 200, headers }
    );
  }

  if (req.method === "POST") {
    let body;
    try {
      body = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid request body" }), { status: 400, headers });
    }

    const { action, username, password } = body;

    if (action === "admin-login") {
      const adminHash = await getAdminHash();
      const inputHash = await hashPassword(password);

      if (username !== ADMIN_USERNAME || inputHash !== adminHash) {
        return new Response(JSON.stringify({ error: "Credenciais inválidas" }), { status: 401, headers });
      }

      const token = crypto.randomUUID();
      const sessions = getStore("vault-sessions");
      await sessions.set(
        token,
        JSON.stringify({
          type: "admin",
          username: ADMIN_USERNAME,
          name: "Administrador",
          createdAt: new Date().toISOString(),
          expiresAt: new Date(Date.now() + SESSION_DURATION_ADMIN).toISOString(),
        })
      );

      return new Response(
        JSON.stringify({ success: true, token, user: { name: "Administrador", username: ADMIN_USERNAME } }),
        { status: 200, headers }
      );
    }

    if (action === "login") {
      if (!username || !password) {
        return new Response(JSON.stringify({ error: "Username e password são obrigatórios" }), { status: 400, headers });
      }

      const clients = getStore("vault-clients");
      const client = await clients.get(username.toLowerCase(), { type: "json" }).catch(() => null);

      if (!client) {
        return new Response(JSON.stringify({ error: "Credenciais inválidas" }), { status: 401, headers });
      }

      const inputHash = await hashPassword(password);
      if (inputHash !== client.passwordHash) {
        return new Response(JSON.stringify({ error: "Credenciais inválidas" }), { status: 401, headers });
      }

      const token = crypto.randomUUID();
      const now = new Date();
      const sessions = getStore("vault-sessions");
      await sessions.set(
        token,
        JSON.stringify({
          type: "client",
          username: client.username,
          name: client.name,
          createdAt: now.toISOString(),
          expiresAt: new Date(Date.now() + SESSION_DURATION_CLIENT).toISOString(),
        })
      );

      // Log this login event
      const loginLogs = getStore("vault-login-logs");
      const logKey = client.username.toLowerCase();
      const existingLogs = await loginLogs.get(logKey, { type: "json" }).catch(() => null);
      const logs = existingLogs || { username: client.username, entries: [] };
      logs.entries.push({
        timestamp: now.toISOString(),
        ip: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown",
        userAgent: req.headers.get("user-agent") || "unknown",
      });
      // Keep only the last 100 entries
      if (logs.entries.length > 100) {
        logs.entries = logs.entries.slice(-100);
      }
      await loginLogs.set(logKey, JSON.stringify(logs));

      return new Response(
        JSON.stringify({ success: true, token, user: { name: client.name, username: client.username } }),
        { status: 200, headers }
      );
    }

    if (action === "logout") {
      const token = body.token;
      if (token) {
        const sessions = getStore("vault-sessions");
        await sessions.delete(token);
      }
      return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    }

    return new Response(JSON.stringify({ error: "Invalid action" }), { status: 400, headers });
  }

  return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers });
};

export const config = {
  path: "/api/vault/auth",
};
