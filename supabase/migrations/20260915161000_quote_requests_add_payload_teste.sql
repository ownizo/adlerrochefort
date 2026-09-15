-- Formulários de Cotação v2, restantes línguas — Parte 1, ponto 1.
--
-- A leitura de logs da função não devolve conteúdo útil nesta sessão (várias
-- tentativas via `netlify logs`, sempre uma única linha INFO vazia,
-- independentemente da janela pedida) — o que deixava a Parte 4 sem forma de
-- verificar os payloads de email/CRM de uma submissão em modo de teste.
-- Alternativa: gravar o payload construído num campo próprio da própria
-- linha de quote_requests, legível por leitura direta em vez de depender de
-- qualquer ferramenta de logs.
--
-- Aplicar da mesma forma que as três migrações anteriores desta tabela: à
-- mão, via SQL Editor do Supabase ou mcp__supabase__execute_sql numa sessão
-- sem --read-only — este repositório não tem pipeline de migrações para o
-- projeto partilhado (uqjxjymvhuvtwbqtesbr).

alter table public.quote_requests
  add column if not exists payload_teste jsonb;

comment on column public.quote_requests.payload_teste is
  'Só preenchido quando teste = true: { email: { subject, html }, crm: { payload, skippedReason } } — os dois payloads que uma submissão real enviaria (email + CRM), construídos e gravados aqui em vez de enviados, para que a sua construção continue verificável por leitura direta mesmo sem envio. Ver isTestModeSubmission() em netlify/functions/lib/lead-classification.mjs e o handler em netlify/functions/submission-created.mjs.';

-- Defesa em profundidade: mesmo que um bug futuro no código tentasse
-- preencher este campo numa linha real, o insert falha em vez de gravar.
-- `not valid` porque quote_requests pode já ter linhas antigas que, sendo
-- teste = false, nunca tiveram payload_teste (sempre null nelas, portanto
-- sempre válidas) — mas não vale a pena pagar o custo de uma validação
-- completa da tabela para o confirmar; `validate constraint` corre depois,
-- sem bloquear leituras/escritas entretanto.
alter table public.quote_requests
  add constraint quote_requests_payload_teste_only_when_teste
  check (teste or payload_teste is null) not valid;

alter table public.quote_requests
  validate constraint quote_requests_payload_teste_only_when_teste;
