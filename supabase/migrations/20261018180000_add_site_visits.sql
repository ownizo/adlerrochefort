-- Cookieless page-view counter for adlerrochefort.com (October 2026).
--
-- Written by netlify/functions/metrics-track.mjs (service role, server side
-- only). Since 16 Oct 2026 GA4 runs under Consent Mode v2 with everything
-- denied by default, so it only sees visitors who accept cookies; this table
-- counts every page view a real browser makes, with no cookie and no personal
-- data: no IP, no user agent string, no identifier that outlives the browser
-- tab (session_id is a random value kept in sessionStorage).
--
-- Read by the backoffice (admin.adlerrochefort.com, "Visitas do site") through
-- site_visits_summary(), admins only.

create table if not exists public.site_visits (
  id               bigint generated always as identity primary key,
  created_at       timestamptz not null default now(),
  visit_id         text not null unique,
  session_id       text,
  path             text not null,
  lang             text,
  is_landing       boolean not null default false,
  referrer_host    text,
  source           text,
  medium           text,
  campaign         text,
  country          text,
  device           text,
  duration_seconds integer
);

create index if not exists site_visits_created_at_idx on public.site_visits (created_at desc);

alter table public.site_visits enable row level security;

drop policy if exists site_visits_select on public.site_visits;
create policy site_visits_select on public.site_visits
  for select to authenticated using (is_admin());

-- One call returns everything the backoffice screen needs for the last p_days
-- days (Lisbon calendar days, today included).
create or replace function public.site_visits_summary(p_days integer default 30)
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  since timestamptz := date_trunc('day', now() at time zone 'Europe/Lisbon') at time zone 'Europe/Lisbon'
                       - make_interval(days => greatest(p_days, 1) - 1);
  result jsonb;
begin
  if not is_admin() then
    raise exception 'not allowed';
  end if;

  with v as (
    select *, (created_at at time zone 'Europe/Lisbon')::date as d
    from site_visits where created_at >= since
  ),
  days as (
    select generate_series((since at time zone 'Europe/Lisbon')::date,
                           (now() at time zone 'Europe/Lisbon')::date, interval '1 day')::date as d
  ),
  leads as (
    select (created_at at time zone 'Europe/Lisbon')::date as d, count(*) as n
    from website_leads where created_at >= since group by 1
  )
  select jsonb_build_object(
    'since', since,
    'daily', (select coalesce(jsonb_agg(jsonb_build_object(
                 'date', days.d,
                 'page_views', (select count(*) from v where v.d = days.d),
                 'visits', (select count(distinct coalesce(v.session_id, v.visit_id)) from v where v.d = days.d),
                 'from_google', (select count(*) from v where v.d = days.d and v.is_landing and v.source = 'google' and v.medium = 'organic'),
                 'from_ai', (select count(*) from v where v.d = days.d and v.is_landing and v.medium = 'ai-assistant'),
                 'leads', coalesce((select n from leads where leads.d = days.d), 0)
               ) order by days.d), '[]'::jsonb) from days),
    'sources', (select coalesce(jsonb_agg(x order by (x->>'visits')::int desc), '[]'::jsonb) from (
                  select jsonb_build_object('source', coalesce(source, '(direct)'), 'medium', coalesce(medium, '(none)'),
                                            'visits', count(*)) as x
                  from v where is_landing group by source, medium order by count(*) desc limit 15) s),
    'pages', (select coalesce(jsonb_agg(x order by (x->>'views')::int desc), '[]'::jsonb) from (
                  select jsonb_build_object('path', path, 'views', count(*),
                                            'landings', count(*) filter (where is_landing)) as x
                  from v group by path order by count(*) desc limit 25) p),
    'countries', (select coalesce(jsonb_agg(x order by (x->>'visits')::int desc), '[]'::jsonb) from (
                  select jsonb_build_object('country', coalesce(country, '??'),
                                            'visits', count(distinct coalesce(session_id, visit_id))) as x
                  from v group by country order by count(distinct coalesce(session_id, visit_id)) desc limit 15) c),
    'languages', (select coalesce(jsonb_agg(x order by (x->>'views')::int desc), '[]'::jsonb) from (
                  select jsonb_build_object('lang', coalesce(lang, 'pt'), 'views', count(*)) as x
                  from v group by lang) l),
    'devices', (select coalesce(jsonb_object_agg(coalesce(device, 'other'), n), '{}'::jsonb) from (
                  select device, count(*) as n from v group by device) dv),
    'avg_duration_seconds', (select coalesce(round(avg(duration_seconds)), 0) from v where duration_seconds between 1 and 3600)
  ) into result;

  return result;
end;
$$;

grant execute on function public.site_visits_summary(integer) to authenticated;
