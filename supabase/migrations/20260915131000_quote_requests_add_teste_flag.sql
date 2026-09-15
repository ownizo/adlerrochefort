-- Formulários de Cotação v2, restantes línguas — Parte 0, ponto 3 (modo de
-- teste).
--
-- O Hugo deixa de fazer submissões manuais nesta fase, em nenhuma língua —
-- o modo de teste passa a ser a única via de validação, por ramo/língua, à
-- medida que cada árvore é convertida para wizard. Uma submissão em modo de
-- teste continua a gravar em quote_requests (é isso que a torna verificável
-- por leitura direta, sem depender do email nem do CRM sync, que o modo de
-- teste explicitamente não dispara) — só precisa de se distinguir de uma
-- submissão real, para nunca ser tratada como um pedido de cotação
-- verdadeiro pelo backoffice.
--
-- Aplicar da mesma forma que as duas migrações anteriores desta tabela: à
-- mão, via SQL Editor do Supabase ou mcp__supabase__execute_sql numa sessão
-- sem --read-only — este repositório não tem pipeline de migrações para o
-- projeto partilhado (uqjxjymvhuvtwbqtesbr).

alter table public.quote_requests
  add column if not exists teste boolean not null default false;

comment on column public.quote_requests.teste is
  'true quando a linha resultou de uma submissão em modo de teste (netlify/functions/lib/quote-requests-sync.mjs, ver TEST_MODE_SENTINEL em submission-created.mjs) — nunca um pedido de cotação real. O backoffice deve filtrar teste = false antes de tratar qualquer linha como um lead genuíno.';

-- Índice parcial: as consultas do dia-a-dia do backoffice filtram sempre por
-- teste = false (ou nem sequer selecionam a coluna, esperando que seja
-- sempre falsa); um índice sobre o subconjunto teste = true é o que ajuda
-- especificamente a encontrar e limpar linhas de teste, que é a única
-- consulta em que este valor pesa.
create index if not exists quote_requests_teste_idx
  on public.quote_requests (created_at)
  where teste;
