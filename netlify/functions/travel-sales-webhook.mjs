/**
 * /api/travel/hellosafe-webhook — HelloSafe Atlas sales webhook (November 2026).
 *
 * HelloSafe POSTs sale.confirmed / sale.cancelled for every travel policy
 * credited to Adler & Rochefort (API link, tracked link or widget). Only ids,
 * amounts, statuses and dates are sent — never traveller data.
 *
 * Setup: in the HelloSafe dashboard (API > Webhooks) set the URL to
 * https://adlerrochefort.com/api/travel/hellosafe-webhook and put the webhook
 * secret in the Netlify env var HELLOSAFE_WEBHOOK_SECRET. Each verified event
 * is emailed to the team via Resend. Answers 2xx quickly; HelloSafe retries
 * anything else and deduplicates on event id.
 */
import { Resend } from 'resend';
import { verifyWebhook } from './lib/atlas.mjs';

const money = (m) => (m && typeof m.amountInCents === 'number'
  ? `${(m.amountInCents / 100).toFixed(2)} ${m.currency || ''}`.trim() : '—');

export default async (req) => {
  if (req.method !== 'POST') return new Response(null, { status: 405 });
  const raw = await req.text();
  const ok = verifyWebhook(raw, req.headers.get('x-atlas-timestamp'), req.headers.get('x-atlas-signature'),
    process.env.HELLOSAFE_WEBHOOK_SECRET);
  if (!ok) return new Response(null, { status: 401 });

  let evt;
  try { evt = JSON.parse(raw); } catch { return new Response(null, { status: 400 }); }
  const d = evt.data || {};
  const line = {
    event: 'hellosafe_sale', type: evt.type, id: evt.id, live: evt.livemode,
    orderId: d.orderId, status: d.status, insurer: d.insurer, premium: money(d.premium), commission: money(d.commission),
  };
  console.log(JSON.stringify(line));

  if (process.env.RESEND_API_KEY) {
    const label = evt.type === 'sale.cancelled' ? 'Venda cancelada' : 'Nova venda';
    try {
      await new Resend(process.env.RESEND_API_KEY).emails.send({
        from: 'leads@adlerrochefort.com',
        to: 'insurance@adlerrochefort.com',
        subject: `${label} — seguro de viagem HelloSafe${evt.livemode === false ? ' (teste)' : ''}`,
        text: [
          `${label} (${evt.type})`,
          `Seguradora: ${d.insurer || '—'}`,
          `Prémio pago: ${money(d.paid)}`,
          `Prémio base: ${money(d.premium)}`,
          `Comissão: ${money(d.commission)}`,
          `Estado: ${d.status || '—'}${d.reason ? ' (' + d.reason + ')' : ''}`,
          `Order: ${d.orderId || '—'}  ·  Link: ${d.linkCode || '—'}  ·  Click: ${d.clickRef || '—'}`,
          `Vendida em: ${d.soldAt || '—'}`,
          `Evento: ${evt.id}`,
        ].join('\n'),
      });
    } catch (err) {
      console.log(JSON.stringify({ event: 'hellosafe_sale_email_failed', message: String(err && err.message) }));
    }
  }
  return new Response(null, { status: 204 });
};

export const config = { path: '/api/travel/hellosafe-webhook' };
