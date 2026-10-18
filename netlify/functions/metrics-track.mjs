/**
 * /api/metrics/track — cookieless visit counter (October 2026).
 *
 * public/js/ar-analytics-tracker.js has posted here on every page since the
 * summer, but no function answered, so every beacon was a 404 and nothing
 * was counted. This stores one site_visits row per page view (visit-start)
 * and adds the time on page when the tab is hidden (visit-end).
 *
 * Always answers 204 quickly: a counter must never slow a page down or show
 * an error to a visitor. Failures are logged, not surfaced.
 */
import { buildVisit } from './lib/site-visit.mjs';

const TIMEOUT_MS = 2500;

async function rest(path, init) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return { ok: false, status: 'not_configured' };
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${url.replace(/\/$/, '')}/rest/v1/${path}`, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: 'return=minimal',
        ...(init.headers || {}),
      },
      signal: controller.signal,
    });
    return { ok: res.ok, status: res.status };
  } catch (err) {
    return { ok: false, status: err?.name === 'AbortError' ? 'timeout' : 'network_error' };
  } finally {
    clearTimeout(t);
  }
}

export default async (req, context) => {
  const done = () => new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } });
  if (req.method !== 'POST') return done();

  let body;
  try {
    body = JSON.parse(await req.text());
  } catch {
    return done();
  }

  const visit = buildVisit(body, {
    userAgent: req.headers.get('user-agent') || '',
    country: context?.geo?.country?.code || '',
  });
  if (!visit) return done();

  let r;
  if (visit.kind === 'start') {
    r = await rest('site_visits?on_conflict=visit_id', {
      method: 'POST',
      headers: { Prefer: 'return=minimal,resolution=ignore-duplicates' },
      body: JSON.stringify(visit.row),
    });
  } else {
    r = await rest(`site_visits?visit_id=eq.${encodeURIComponent(visit.visitId)}`, {
      method: 'PATCH',
      body: JSON.stringify({ duration_seconds: visit.duration }),
    });
  }
  if (!r.ok) console.log(JSON.stringify({ event: 'site_visit_failed', kind: visit.kind, status: r.status }));
  return done();
};

export const config = {
  path: '/api/metrics/track',
};
