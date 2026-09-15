-- Formulários de Cotação v2 — correção de schema (Fase 0, lacuna de autoria).
--
-- A migração original desta tabela (20260914120000_add_quote_requests_table.sql)
-- e netlify/functions/lib/quote-requests-sync.mjs foram criados no mesmo
-- commit (ef03edb, "Fase 0 — fundação dos Formulários de Cotação v2"), mas
-- só o código passou a escrever submission_id — modelado deliberadamente
-- sobre o precedente já existente em website_leads.submission_id (projeto
-- uqjxjymvhuvtwbqtesbr, CRM "adlerpro"; ver o comentário junto à chamada de
-- insertQuoteRequest em submission-created.mjs). A migração nunca incluiu a
-- coluna correspondente — lapso da própria Fase 0, não uma alteração
-- posterior do código nem uma divergência entre o que está aplicado em
-- produção e o que este ficheiro descreve (confirmados idênticos em todas as
-- restantes colunas, tipos, nullability, defaults, RLS e política).
--
-- Efeito sem esta coluna: todo o insert em quote_requests falhava com
-- PGRST204 ("Could not find the 'submission_id' column..."), capturado pelo
-- try/catch best-effort de insertQuoteRequest — nunca bloqueou email nem CRM
-- sync, mas a tabela nunca recebeu uma única linha por esta razão, mesmo
-- depois de corrigidos os env vars (SUPABASE_URL/SERVICE_ROLE_KEY) e o crash
-- de bundling do esbuild (createRequire cruzado de diretório).
--
-- Aplicar da mesma forma que a migração original: à mão, via SQL Editor do
-- Supabase ou mcp__supabase__execute_sql numa sessão sem --read-only — este
-- repositório não tem pipeline de migrações para o projeto partilhado.

alter table public.quote_requests
  add column if not exists submission_id text;

comment on column public.quote_requests.submission_id is
  'ID da submissão Netlify Forms de origem (webhook payload), para cruzar com website_leads.submission_id no CRM adlerpro. Nullable: formulários antigos sem este campo continuam a gravar sem ele.';
