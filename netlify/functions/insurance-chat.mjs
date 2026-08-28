import Anthropic from "@anthropic-ai/sdk";
import { getStore } from "@netlify/blobs";
import { Resend } from "resend";
import { calcularEstimativa } from "./lib/pricing-rules.mjs";
import { getRagContext } from "./lib/rag-snippets.mjs";
import { getSystemPrompt } from "./lib/system-prompts.mjs";

// Cost-sensitive customer-facing widget: no extended thinking, medium effort,
// non-streaming (replies are short). See netlify/functions/lib/ for the
// deterministic pricing engine and curated RAG excerpts the model must use.
const MODEL = "claude-opus-4-8";
const MAX_TOOL_ITERATIONS = 4;
const MAX_MESSAGES = 30;
const MAX_MESSAGE_CHARS = 4000;
const RATE_LIMIT_MAX = 20;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

const TOOLS = [
  {
    name: "calcular_estimativa",
    description:
      "Calcula uma faixa de prémio indicativa com base nos dados recolhidos do utilizador. Usar sempre que houver dados suficientes (idade, cidade/zona, tipo de seguro) para dar uma estimativa. Nunca inventar o valor — usar sempre o resultado desta ferramenta.",
    input_schema: {
      type: "object",
      properties: {
        tipo_seguro: { type: "string", enum: ["saude", "auto", "casa", "vida", "condominio"] },
        idade: { type: "integer" },
        cidade: { type: "string" },
        pais_origem: { type: "string" },
        regime: { type: "string", enum: ["individual", "grupo"] },
        ja_tem_seguro: { type: "boolean" },
      },
      required: ["tipo_seguro", "idade", "cidade"],
    },
  },
  {
    name: "registar_lead",
    description:
      "Regista o pedido do utilizador assim que houver nome + pelo menos um contacto (email ou telefone) + tipo de seguro, e depois de a nota de RGPD já ter sido apresentada. Chamar no máximo uma vez por conversa.",
    input_schema: {
      type: "object",
      properties: {
        nome: { type: "string" },
        email: { type: "string" },
        telefone: { type: "string" },
        tipo_seguro: { type: "string" },
        idade: { type: "integer" },
        cidade: { type: "string" },
        estimativa_min_eur: { type: "integer" },
        estimativa_max_eur: { type: "integer" },
      },
      required: ["nome", "tipo_seguro"],
    },
  },
];

function corsHeaders() {
  return { "Content-Type": "application/json", "Cache-Control": "no-store" };
}

function getClientIp(req) {
  return (
    req.headers.get("x-nf-client-connection-ip") ||
    (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
    "unknown"
  );
}

async function checkRateLimit(ip) {
  const store = getStore("insurance-chat-rate-limit");
  const now = Date.now();
  const record = (await store.get(ip, { type: "json" }).catch(() => null)) || {
    count: 0,
    windowStart: now,
  };

  if (now - record.windowStart > RATE_LIMIT_WINDOW_MS) {
    record.count = 0;
    record.windowStart = now;
  }
  record.count += 1;
  await store.set(ip, JSON.stringify(record));
  return record.count <= RATE_LIMIT_MAX;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

async function registarLead(input, idioma, transcriptMessages, mercado) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const isSpain = mercado === "spain";

  const transcriptText = transcriptMessages
    .filter((m) => typeof m.content === "string")
    .map((m) => `${m.role === "user" ? "Utilizador" : "Assistente"}: ${m.content}`)
    .join("\n\n");

  const html = `
    <p><strong>Mercado:</strong> ${isSpain ? "Spain" : "Portugal"}</p>
    <p><strong>Nome:</strong> ${escapeHtml(input.nome || "-")}</p>
    <p><strong>Email:</strong> ${escapeHtml(input.email || "-")}</p>
    <p><strong>Telefone:</strong> ${escapeHtml(input.telefone || "-")}</p>
    <p><strong>Tipo de seguro:</strong> ${escapeHtml(input.tipo_seguro || "-")}</p>
    <p><strong>Idade:</strong> ${escapeHtml(input.idade ?? "-")}</p>
    <p><strong>Cidade:</strong> ${escapeHtml(input.cidade || "-")}</p>
    <p><strong>Estimativa:</strong> ${isSpain ? "n/a — not priced for Spain" : `${escapeHtml(input.estimativa_min_eur ?? "-")}€ - ${escapeHtml(input.estimativa_max_eur ?? "-")}€`}</p>
    <p><strong>Idioma da página:</strong> ${idioma.toUpperCase()}</p>
    <p><strong>Data:</strong> ${new Date().toISOString()}</p>
    <hr/>
    <pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(transcriptText)}</pre>
  `;

  await resend.emails.send({
    from: "leads@adlerrochefort.com",
    to: "insurance@adlerrochefort.com",
    subject: `Novo lead (chat)${isSpain ? " — ES" : ""} — ${input.tipo_seguro || "seguro"} — ${input.nome || "sem nome"}`,
    html,
  });
}

export default async (req) => {
  const headers = corsHeaders();

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers });
  }

  const ip = getClientIp(req);
  const allowed = await checkRateLimit(ip).catch(() => true);
  if (!allowed) {
    return new Response(
      JSON.stringify({ error: "Demasiados pedidos. Tente novamente mais tarde." }),
      { status: 429, headers }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Dados inválidos" }), { status: 400, headers });
  }

  const { messages, lang, topics, leadSent, market } = body || {};
  const idioma = lang === "en" ? "en" : "pt";
  // "spain" only when the widget explicitly says so (Spain pages set
  // data-market="spain"); every existing page sends nothing, which keeps the
  // Portuguese behaviour below byte-for-byte unchanged.
  const mercado = market === "spain" ? "spain" : "portugal";

  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) {
    return new Response(JSON.stringify({ error: "Conversa inválida" }), { status: 400, headers });
  }

  const sanitized = messages
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_CHARS) }));

  if (sanitized.length === 0) {
    return new Response(JSON.stringify({ error: "Conversa inválida" }), { status: 400, headers });
  }

  const systemPrompt =
    getSystemPrompt(idioma, mercado) +
    "\n\n---\nContexto de apoio (excertos verificados de artigos do site — usar como base para responder a perguntas sobre seguradoras e coberturas):\n" +
    getRagContext(idioma, Array.isArray(topics) ? topics : undefined, mercado);

  const anthropic = new Anthropic();

  let workingMessages = sanitized;
  let leadRegistado = Boolean(leadSent);
  let finalText = "";

  try {
    for (let turn = 0; turn < MAX_TOOL_ITERATIONS; turn++) {
      const response = await anthropic.messages.create({
        model: MODEL,
        max_tokens: 1024,
        system: [{ type: "text", text: systemPrompt, cache_control: { type: "ephemeral" } }],
        tools: TOOLS,
        output_config: { effort: "medium" },
        messages: workingMessages,
      });

      finalText = response.content
        .filter((b) => b.type === "text")
        .map((b) => b.text)
        .join("\n")
        .trim();

      if (response.stop_reason !== "tool_use") break;

      workingMessages = [...workingMessages, { role: "assistant", content: response.content }];

      const toolResults = [];
      for (const block of response.content) {
        if (block.type !== "tool_use") continue;

        if (block.name === "calcular_estimativa") {
          const result = calcularEstimativa(block.input);
          toolResults.push({ type: "tool_result", tool_use_id: block.id, content: JSON.stringify(result) });
        } else if (block.name === "registar_lead") {
          if (!leadRegistado) {
            await registarLead(block.input, idioma, workingMessages, mercado).catch((err) => {
              console.error("registar_lead email failed", err);
            });
            leadRegistado = true;
          }
          toolResults.push({ type: "tool_result", tool_use_id: block.id, content: JSON.stringify({ success: true }) });
        } else {
          toolResults.push({
            type: "tool_result",
            tool_use_id: block.id,
            content: "Ferramenta desconhecida",
            is_error: true,
          });
        }
      }
      workingMessages = [...workingMessages, { role: "user", content: toolResults }];
    }
  } catch (err) {
    console.error("insurance-chat error", err);
    if (err instanceof Anthropic.RateLimitError) {
      return new Response(
        JSON.stringify({
          error: idioma === "en" ? "Service busy, please try again shortly." : "Serviço ocupado, tente novamente dentro de momentos.",
        }),
        { status: 429, headers }
      );
    }
    return new Response(
      JSON.stringify({
        error: idioma === "en" ? "Something went wrong. Please try again." : "Ocorreu um erro. Tente novamente.",
      }),
      { status: 500, headers }
    );
  }

  return new Response(JSON.stringify({ reply: finalText, leadSent: leadRegistado }), { status: 200, headers });
};

export const config = {
  path: "/api/insurance-chat",
};
