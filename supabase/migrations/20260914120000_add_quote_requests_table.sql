-- Formulários de Cotação v2 — Fase 0.
--
-- NÃO é aplicada automaticamente por nada neste repositório: o site
-- adlerrochefort.com não tem pipeline de migrações para o projeto Supabase
-- partilhado (uqjxjymvhuvtwbqtesbr, também usado pelo CRM "adlerpro", num
-- repositório separado). Este ficheiro existe aqui só para revisão e para
-- ficar versionado ao lado do código que passa a depender da tabela
-- (netlify/functions/submission-created.mjs). Aplicar à mão — dashboard do
-- Supabase (SQL Editor) ou `supabase db push` a partir de onde as migrações
-- desse projeto forem realmente geridas — ou via mcp__supabase__apply_migration
-- numa sessão cuja ligação MCP não esteja em --read-only.
--
-- Depois de aplicar: correr mcp__supabase__get_advisors(type: "security") e
-- confirmar que não aparece nenhum aviso novo para esta tabela, antes de
-- dar a Fase 0 por concluída (ver /home/hugo/.claude/plans/witty-swinging-metcalfe.md).
--
-- Desenho: ver "Desvios propostos" nº 1 e 2 do plano acima. Sem política de
-- insert para `anon` — o insert só acontece a partir de
-- submission-created.mjs (servidor), autenticado com a service-role key
-- (variável de ambiente SUPABASE_SERVICE_ROLE_KEY no Netlify), que ignora
-- RLS por definição. A única política aqui é de leitura, para o backoffice.

create table if not exists public.quote_requests (
  id                uuid primary key default gen_random_uuid(),
  created_at        timestamptz not null default now(),
  ramo              text not null,   -- auto | habitacao | saude | profissional
  lingua            text not null,   -- pt | en | nl | de | fr | pl | sv | da | zh | he
  form_name         text not null,   -- nome do formulário Netlify de origem (rastreabilidade)
  dados_comuns      jsonb not null default '{}'::jsonb,
  dados_risco       jsonb not null default '{}'::jsonb,
  pessoas_seguras   jsonb,           -- array; só preenchido em saúde
  consentimento     jsonb not null default '{}'::jsonb,  -- { aceite, timestamp, ip, versao_politica }
  estado            text not null default 'novo'         -- novo | em_cotacao | proposta_enviada | fechado
);

comment on table public.quote_requests is
  'Pedidos de cotação recebidos pelo site adlerrochefort.com, em complemento ao pipeline existente (Netlify Forms -> submission-created.mjs -> email + CRM sync). Ver netlify/functions/lib/quote-requests-sync.mjs.';

alter table public.quote_requests enable row level security;

-- Leitura restrita ao backoffice, mesmo padrão de website_leads_select.
create policy quote_requests_select
  on public.quote_requests
  for select
  to authenticated
  using (is_admin());

-- Deliberadamente sem política para `anon`: nenhum insert nem select direto
-- do browser. Ver o comentário no topo do ficheiro.
