#!/usr/bin/env node
/**
 * Quick-contact option everywhere a visitor can land, October 2026.
 *
 * Follow-up to scripts/apply-short-blog-forms.mjs (blog articles). Covers the
 * rest of the site, in every language:
 *   A. Product pages whose lead form asks for more than 5 required fields
 *      (wizards: health, home, car, liability, private clients…): a compact
 *      "quick contact" block is inserted just above the long form, inside the
 *      same card, with a divider ("or send the full request below"). The long
 *      form stays untouched as the second step.
 *   B. Content pages with no lead form at all (DE/NL/FR/ES articles, a few EN
 *      pages such as /en/international-health-insurance-portugal/): a short
 *      form is inserted before the second <h2> of the page body.
 * Excluded on purpose: TVDE pages, blog indexes/categories/pagination,
 * legal/thank-you pages, /alterarmediador/ (its own dedicated flow).
 *
 * Each language reuses the short form name it already has (all present in
 * HANDLED_FORMS and classified in lead-classification.mjs), with the same
 * field names, so the back office receives these leads exactly like the
 * existing short forms. Submission is fetch()-first with an inline thank-you
 * (and a GA4 generate_lead event); without JavaScript it falls back to a
 * native POST to the form's action.
 *
 * Idempotent (marker <!-- ar-quick-contact -->). Run:
 *   node scripts/apply-quick-contact.mjs && node scripts/apply-analytics-consent.mjs
 */
import { readFileSync, writeFileSync, globSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MARK = '<!-- ar-quick-contact -->';
const EXCLUDE = [
  /tvde/i, /(^|\/)blog\/(index\.html)?$/, /\/categoria\//, /\/category\//, /\/pagina\/\d+\//, /\/page\/\d+\//,
  /^blog\/$/, /^en\/blog\/$/, /privacy|privacidade|terms|termos|thank-you|obrigado|bedankt|descarregar|alterarmediador/,
];

const HEALTH = /saude|health|kranken|zorg|salud|sante|santé|salute|zdrow|sjukv|sundhed|ipmi|medic|s1-|vorerkrank|international/i;
const IPMI = /international|internacional|ipmi|cigna|allianz-care|expat-visa|visa|global/i;
const PRIVATE = /private|patrim|family-office|art|kunst|schmuck|joia|jewel|classic|oldtimer|klassieke|luxus|luxury|yacht|iate|jacht|golf|pferd|horse|caballo|aviation|flugzeug|aviacao|entfuehrung|kidnap|weingut|vineyard|elevado-valor|high-value|hoogwaardige|bauversicherung/i;
const HOME = /habitacao|home|haus|woon|hogar|habitation|casa|dom|hem|bolig|landlord|vermiet|rental|earthquake|flood|aardbeving|bosbrand|leerstand|vivienda|unterversicherung|wiederaufbau|rebuild|herbouw|evenredig|vve|condomin|alojamento|unoccupied/i;
const CAR = /auto|car-|carro|bil|samoch|motor|schadevrije/i;
const LIAB = /rc-|liability|haftpflicht|aansprakelijk|responsab|ansvar|odpowiedz|indemnity|malpractice|advogad|lawyer|architect|arquitet|engenheir|consultor|financial-adv|real-estate|mediadores|massag|yoga|terapeut|therapeut|eventos/i;
const BUSINESS = /empresa|business|bedrijf|unternehm|empresarial/i;
const LIFE = /vida|life|leben|levens/i;

// type keys -> per-language option values (must exist in lead-classification).
const L = {
  pt: {
    form: 'cotacao-blog', action: '/obrigado/', name: 'nome', phone: 'telefone', type: 'tipo-seguro', msg: 'mensagem', consent: ['rgpd', 'sim'],
    types: { ipmi: 'Saúde internacional (expatriados)', health: 'Saúde', private: 'Private Clients (casa de elevado valor, arte, automóveis)', home: 'Habitação', car: 'Automóvel', liab: 'Responsabilidade Civil Profissional', business: 'Multirriscos Empresarial', life: 'Vida e Crédito Habitação', other: 'Outro' },
    t: { qh: 'Contacto rápido', qs: 'Deixe só o essencial e respondemos em 24 horas úteis. Pedimos o resto por email.', h: 'Peça uma proposta — leva menos de um minuto', s: 'Diga-nos o essencial. Respondemos por escrito em 24 horas úteis.', n: 'Nome *', e: 'Email *', p: 'Telefone / WhatsApp', m: 'O que precisa? (opcional)', ok: 'Aceito que os meus dados sejam usados para preparar esta proposta, ao abrigo do RGPD. *', b: 'Pedir contacto →', or: 'ou envie já o pedido completo', thanks: 'Obrigado. Recebemos o seu pedido e respondemos em 24 horas úteis.', err: 'Não foi possível enviar. Tente de novo ou fale connosco pelo WhatsApp: +351 928 226 570.' },
  },
  en: {
    form: 'quote-blog', action: '/en/thank-you/', name: 'name', phone: 'phone', type: 'tipo-seguro', msg: 'message', consent: ['rgpd', 'yes'],
    types: { ipmi: 'International health insurance (IPMI)', health: 'Health', private: 'Private client (high-value home, art, cars)', home: 'Home', car: 'Car', liab: 'Professional indemnity', business: 'Business combined (multirriscos)', life: 'Life & mortgage protection', other: 'Other' },
    t: { qh: 'Quick contact', qs: 'Leave just the essentials and we reply within 24 working hours. We ask for the rest by email.', h: 'Ask for a quote — it takes under a minute', s: 'Tell us the essentials. We reply in writing within 24 working hours.', n: 'Full name *', e: 'Email *', p: 'Phone / WhatsApp', m: 'What do you need? (optional)', ok: 'I agree to my details being used to prepare this quote, under the GDPR. *', b: 'Request a call-back →', or: 'or send the full request now', thanks: 'Thank you. We have your request and will reply within 24 working hours.', err: 'Sending failed. Please try again or message us on WhatsApp: +351 928 226 570.' },
  },
  de: {
    form: 'de-angebot-anfrage', action: '/de/#angebot', name: 'name', phone: 'telefon', type: 'versicherungsart', msg: 'nachricht', consent: ['einwilligung', 'ja'],
    hidden: { language: 'de', market: 'germany', subject: 'Neue Anfrage (DE) — Kurzkontakt' },
    types: { ipmi: 'Krankenversicherung', health: 'Krankenversicherung', private: 'Private Clients', home: 'Hausversicherung', car: 'Autoversicherung', liab: 'Berufshaftpflicht', business: 'Unternehmen', life: 'Lebensversicherung', other: 'Sonstiges' },
    t: { qh: 'Schnellkontakt', qs: 'Nur das Wesentliche – wir antworten innerhalb von 24 Arbeitsstunden und fragen den Rest per E-Mail nach.', h: 'Angebot anfragen – in unter einer Minute', s: 'Nur das Wesentliche. Wir antworten schriftlich innerhalb von 24 Arbeitsstunden.', n: 'Name *', e: 'E-Mail *', p: 'Telefon / WhatsApp', m: 'Worum geht es? (optional)', ok: 'Ich bin einverstanden, dass meine Angaben zur Erstellung dieses Angebots verwendet werden (DSGVO). *', b: 'Kontakt anfordern →', or: 'oder gleich die vollständige Anfrage senden', thanks: 'Vielen Dank. Wir haben Ihre Anfrage erhalten und antworten innerhalb von 24 Arbeitsstunden.', err: 'Senden fehlgeschlagen. Bitte erneut versuchen oder per WhatsApp schreiben: +351 928 226 570.' },
  },
  nl: {
    form: 'lead-nl', action: '/nl/bedankt/', name: 'name', phone: 'phone', type: 'insurance_type', msg: 'message', consent: ['toestemming', 'ja'],
    hidden: { lang: 'nl' },
    types: { ipmi: 'Zorgverzekering', health: 'Zorgverzekering', private: 'Woon/opstal', home: 'Woon/opstal', car: 'Auto', liab: 'Meerdere/advies', business: 'Meerdere/advies', life: 'Meerdere/advies', other: 'Meerdere/advies' },
    t: { qh: 'Snel contact', qs: 'Alleen het essentiële – we antwoorden binnen 24 werkuren en vragen de rest per e-mail.', h: 'Offerte aanvragen – in minder dan een minuut', s: 'Alleen het essentiële. We antwoorden schriftelijk binnen 24 werkuren.', n: 'Naam *', e: 'E-mail *', p: 'Telefoon / WhatsApp', m: 'Waar gaat het om? (optioneel)', ok: 'Ik ga akkoord met het gebruik van mijn gegevens voor deze offerte (AVG). *', b: 'Contact aanvragen →', or: 'of stuur meteen de volledige aanvraag', thanks: 'Dank u. We hebben uw aanvraag ontvangen en antwoorden binnen 24 werkuren.', err: 'Verzenden mislukt. Probeer opnieuw of stuur een WhatsApp: +351 928 226 570.' },
  },
  fr: {
    form: 'lead-fr', action: '/fr/#devis', name: 'name', phone: 'phone', type: 'insurance_type', msg: 'message', consent: ['consentement', 'oui'],
    hidden: { lang: 'fr' },
    types: { ipmi: 'Santé', health: 'Santé', private: 'Habitation', home: 'Habitation', car: 'Auto', liab: 'Plusieurs/conseil', business: 'Plusieurs/conseil', life: 'Plusieurs/conseil', other: 'Plusieurs/conseil' },
    t: { qh: 'Contact rapide', qs: 'L’essentiel seulement – réponse sous 24 heures ouvrées, le reste par e-mail.', h: 'Demander un devis – en moins d’une minute', s: 'L’essentiel seulement. Réponse écrite sous 24 heures ouvrées.', n: 'Nom *', e: 'E-mail *', p: 'Téléphone / WhatsApp', m: 'De quoi avez-vous besoin ? (facultatif)', ok: 'J’accepte que mes données soient utilisées pour préparer ce devis (RGPD). *', b: 'Être recontacté →', or: 'ou envoyez directement la demande complète', thanks: 'Merci. Nous avons bien reçu votre demande et répondons sous 24 heures ouvrées.', err: 'Échec de l’envoi. Réessayez ou écrivez-nous sur WhatsApp : +351 928 226 570.' },
  },
  es: {
    form: 'es-solicitud', action: '/es/#solicitud', name: 'name', phone: 'phone', type: 'insurance_type', msg: 'message', consent: ['consent', 'yes'],
    hidden: { language: 'es', market: 'spain-es', subject: 'Nueva solicitud (ES) — contacto rápido' }, pi: true,
    types: { ipmi: 'Español · Salud', health: 'Español · Salud', private: 'Español · Hogar', home: 'Español · Hogar', car: 'Español · Coche', liab: 'Español · Responsabilidad civil', business: 'Español · Responsabilidad civil', life: 'Español · Vida e hipoteca', other: 'Español · Hogar' },
    t: { qh: 'Contacto rápido', qs: 'Solo lo esencial: respondemos en 24 horas hábiles y le pedimos el resto por email.', h: 'Pida una propuesta: menos de un minuto', s: 'Solo lo esencial. Respondemos por escrito en 24 horas hábiles.', n: 'Nombre *', e: 'Email *', p: 'Teléfono / WhatsApp', m: '¿Qué necesita? (opcional)', ok: 'Acepto que mis datos se usen para preparar esta propuesta (RGPD). *', b: 'Solicitar contacto →', or: 'o envíe ya la solicitud completa', thanks: 'Gracias. Hemos recibido su solicitud y respondemos en 24 horas hábiles.', err: 'No se pudo enviar. Inténtelo de nuevo o escríbanos por WhatsApp: +351 928 226 570.' },
  },
  it: {
    form: 'it-richiesta', action: '/it/#richiesta', name: 'name', phone: 'phone', type: 'insurance_type', msg: 'message', consent: ['consent', 'yes'],
    hidden: { language: 'it', market: 'italy', subject: 'Nuova richiesta (IT) — contatto rapido' }, pi: true,
    types: { ipmi: 'IT · Salute', health: 'IT · Salute', private: 'IT · Casa', home: 'IT · Casa', car: 'IT · Auto', liab: 'IT · Responsabilità civile', business: 'IT · Responsabilità civile', life: 'IT · Casa', other: 'IT · Casa' },
    t: { qh: 'Contatto rapido', qs: 'Solo l’essenziale: rispondiamo entro 24 ore lavorative e chiediamo il resto via email.', h: 'Richieda una proposta: meno di un minuto', s: 'Solo l’essenziale. Rispondiamo per iscritto entro 24 ore lavorative.', n: 'Nome *', e: 'Email *', p: 'Telefono / WhatsApp', m: 'Di cosa ha bisogno? (facoltativo)', ok: 'Acconsento all’uso dei miei dati per preparare questa proposta (GDPR). *', b: 'Richiedi contatto →', or: 'oppure invii subito la richiesta completa', thanks: 'Grazie. Abbiamo ricevuto la richiesta e rispondiamo entro 24 ore lavorative.', err: 'Invio non riuscito. Riprovi o ci scriva su WhatsApp: +351 928 226 570.' },
  },
  pl: {
    form: 'pl-zapytanie-ofertowe', action: '/pl/#oferta', name: 'name', phone: 'phone', type: 'insurance_type', msg: 'message', consent: ['consent', 'yes'],
    hidden: { language: 'pl', market: 'poland', subject: 'Nowe zapytanie (PL) — szybki kontakt' }, pi: true,
    types: { ipmi: 'PL · Zdrowie', health: 'PL · Zdrowie', private: 'PL · Dom', home: 'PL · Dom', car: 'PL · Samochód', liab: 'PL · OC ogólna', business: 'PL · OC ogólna', life: 'PL · Inne', other: 'PL · Inne' },
    t: { qh: 'Szybki kontakt', qs: 'Tylko najważniejsze – odpowiadamy w ciągu 24 godzin roboczych, resztę ustalimy e-mailem.', h: 'Zapytaj o ofertę – w niecałą minutę', s: 'Tylko najważniejsze. Odpowiadamy na piśmie w ciągu 24 godzin roboczych.', n: 'Imię i nazwisko *', e: 'E-mail *', p: 'Telefon / WhatsApp', m: 'Czego Pan/Pani potrzebuje? (opcjonalnie)', ok: 'Zgadzam się na wykorzystanie moich danych do przygotowania oferty (RODO). *', b: 'Poproś o kontakt →', or: 'lub od razu wyślij pełne zapytanie', thanks: 'Dziękujemy. Otrzymaliśmy zapytanie i odpowiemy w ciągu 24 godzin roboczych.', err: 'Nie udało się wysłać. Spróbuj ponownie lub napisz na WhatsApp: +351 928 226 570.' },
  },
  se: {
    form: 'se-offertforfragan', action: '/se/#offert', name: 'name', phone: 'phone', type: 'insurance_type', msg: 'message', consent: ['consent', 'yes'],
    hidden: { language: 'sv', market: 'sweden', subject: 'Ny förfrågan (SE) — snabbkontakt' }, pi: true,
    types: { ipmi: 'SE · Sjukvård', health: 'SE · Sjukvård', private: 'SE · Hem', home: 'SE · Hem', car: 'SE · Bil', liab: 'SE · Ansvar', business: 'SE · Ansvar', life: 'SE · Annat', other: 'SE · Annat' },
    t: { qh: 'Snabbkontakt', qs: 'Bara det viktigaste – vi svarar inom 24 arbetstimmar och frågar efter resten via e-post.', h: 'Begär offert – på under en minut', s: 'Bara det viktigaste. Vi svarar skriftligt inom 24 arbetstimmar.', n: 'Namn *', e: 'E-post *', p: 'Telefon / WhatsApp', m: 'Vad behöver du? (valfritt)', ok: 'Jag godkänner att mina uppgifter används för att ta fram offerten (GDPR). *', b: 'Bli kontaktad →', or: 'eller skicka hela förfrågan direkt', thanks: 'Tack. Vi har tagit emot din förfrågan och svarar inom 24 arbetstimmar.', err: 'Det gick inte att skicka. Försök igen eller skriv på WhatsApp: +351 928 226 570.' },
  },
  dk: {
    form: 'dk-forespoergsel', action: '/dk/#tilbud', name: 'name', phone: 'phone', type: 'insurance_type', msg: 'message', consent: ['consent', 'yes'],
    hidden: { language: 'da', market: 'denmark', subject: 'Ny forespørgsel (DK) — hurtig kontakt' }, pi: true,
    types: { ipmi: 'DK · Sundhed', health: 'DK · Sundhed', private: 'DK · Bolig', home: 'DK · Bolig', car: 'DK · Bil', liab: 'DK · Ansvar', business: 'DK · Ansvar', life: 'DK · Andet', other: 'DK · Andet' },
    t: { qh: 'Hurtig kontakt', qs: 'Kun det vigtigste – vi svarer inden for 24 arbejdstimer og beder om resten pr. e-mail.', h: 'Bed om et tilbud – på under et minut', s: 'Kun det vigtigste. Vi svarer skriftligt inden for 24 arbejdstimer.', n: 'Navn *', e: 'E-mail *', p: 'Telefon / WhatsApp', m: 'Hvad har du brug for? (valgfrit)', ok: 'Jeg accepterer, at mine oplysninger bruges til at udarbejde tilbuddet (GDPR). *', b: 'Bliv kontaktet →', or: 'eller send hele forespørgslen nu', thanks: 'Tak. Vi har modtaget din forespørgsel og svarer inden for 24 arbejdstimer.', err: 'Afsendelsen mislykkedes. Prøv igen eller skriv på WhatsApp: +351 928 226 570.' },
  },
  il: {
    form: 'il-bakashat-hatzaa', action: '/il/#hatzaa', name: 'name', phone: 'phone', type: 'insurance_type', msg: 'message', consent: ['consent', 'yes'],
    hidden: { language: 'he', market: 'israel', subject: 'פנייה חדשה (IL) — יצירת קשר מהירה' }, pi: true,
    types: { ipmi: 'IL · Health', health: 'IL · Health', private: 'IL · Home', home: 'IL · Home', car: 'IL · Motor', liab: 'IL · Liability', business: 'IL · Liability', life: 'IL · Other', other: 'IL · Other' },
    t: { qh: 'יצירת קשר מהירה', qs: 'רק את העיקר – נחזור אליכם תוך 24 שעות עבודה ונבקש את השאר במייל.', h: 'בקשו הצעה – בפחות מדקה', s: 'רק את העיקר. נשיב בכתב תוך 24 שעות עבודה.', n: 'שם מלא *', e: 'אימייל *', p: 'טלפון / WhatsApp', m: 'במה מדובר? (רשות)', ok: 'אני מסכים/ה לשימוש בפרטיי לצורך הכנת ההצעה (GDPR). *', b: 'בקשו שיחזרו אליכם ←', or: 'או שלחו עכשיו את הבקשה המלאה', thanks: 'תודה. קיבלנו את הבקשה ונשיב תוך 24 שעות עבודה.', err: 'השליחה נכשלה. נסו שוב או כתבו לנו ב-WhatsApp: ‎+351 928 226 570.' },
  },
  zh: {
    form: 'zh-baojia-shenqing', action: '/zh/#baojia', name: 'name', phone: 'phone', type: 'insurance_type', msg: 'message', consent: ['consent', 'yes'],
    hidden: { language: 'zh', market: 'china', subject: '新咨询 (ZH) — 快速联系' }, pi: true,
    types: { ipmi: 'ZH · Health', health: 'ZH · Health', private: 'ZH · Home', home: 'ZH · Home', car: 'ZH · Motor', liab: 'ZH · Liability', business: 'ZH · Liability', life: 'ZH · Other', other: 'ZH · Other' },
    t: { qh: '快速联系', qs: '只需填写基本信息——我们会在24个工作小时内回复，其余信息通过电子邮件补充。', h: '申请报价——不到一分钟', s: '只需填写基本信息。我们会在24个工作小时内书面回复。', n: '姓名 *', e: '电子邮件 *', p: '电话 / WhatsApp', m: '您的需求？（选填）', ok: '我同意为准备本报价而使用我的个人信息（GDPR）。*', b: '请联系我 →', or: '或立即提交完整申请', thanks: '谢谢。我们已收到您的申请，将在24个工作小时内回复。', err: '发送失败。请重试，或通过 WhatsApp 联系我们：+351 928 226 570。' },
  },
};

function langOf(rel) {
  const seg = rel.split('/')[0];
  return L[seg] ? seg : 'pt';
}
function typeKey(path) {
  if (IPMI.test(path) && HEALTH.test(path)) return 'ipmi';
  if (/international-health|seguro-medico-internacional|internationale-kranken|expat-visa/.test(path)) return 'ipmi';
  if (PRIVATE.test(path)) return 'private';
  if (HEALTH.test(path)) return 'health';
  if (LIAB.test(path)) return 'liab';
  if (HOME.test(path)) return 'home';
  if (CAR.test(path)) return 'car';
  if (BUSINESS.test(path)) return 'business';
  if (LIFE.test(path)) return 'life';
  return 'other';
}
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const STYLE = `<style id="ar-short-form-style">
.arsf{background:#fff;border:1px solid #EBE9E8;border-radius:16px;padding:22px 22px 18px;margin:24px 0;text-align:left;color:#292929}
.arsf h3{margin:0 0 4px;font-size:19px;line-height:1.3}
.arsf p.arsf-sub{margin:0 0 14px;font-size:14px;color:#555}
.arsf-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px 12px}
.arsf-f{display:flex;flex-direction:column;gap:4px;min-width:0}
.arsf-f.full{grid-column:1/-1}
.arsf label{font-size:12.5px;font-weight:600;color:#333}
.arsf input,.arsf select,.arsf textarea{font:inherit;font-size:15px;padding:10px 12px;border:1px solid #D9D6D3;border-radius:10px;background:#fff;color:#292929;width:100%;box-sizing:border-box}
.arsf textarea{min-height:70px;resize:vertical}
.arsf .arsf-ok{display:flex;gap:8px;align-items:flex-start;font-size:12.5px;font-weight:400;color:#444;margin-top:4px}
.arsf .arsf-ok input{width:auto;margin-top:2px}
.arsf button{margin-top:12px;border:0;border-radius:999px;padding:12px 22px;font:inherit;font-weight:600;font-size:15px;background:#292929;color:#fff;cursor:pointer}
.arsf .arsf-alt{display:block;margin-top:10px;font-size:13px;color:#555}
@media(max-width:640px){.arsf-grid{grid-template-columns:1fr}}
</style>`;
const QSTYLE = `<style id="ar-quick-contact-style">
.arsf.arqc{margin:0 0 18px;padding:18px;background:#FAF9F7}
.arsf.arqc h3{font-size:17px}
.arqc-or{display:flex;align-items:center;gap:10px;margin:14px 0 4px;font-size:12.5px;color:#777;text-transform:uppercase;letter-spacing:.04em}
.arqc-or:before,.arqc-or:after{content:"";flex:1;height:1px;background:#E2DFDC}
.arsf-done{font-size:15px;line-height:1.5;margin:6px 0 0}
.arsf.arsf label{text-transform:none;letter-spacing:0;font-size:12.5px;font-weight:600}
.arsf.arsf .arsf-ok{text-transform:none;letter-spacing:0;font-weight:400}
</style>`;
const JS = `<script id="ar-quick-contact-js">
(function(){
  document.addEventListener('submit', function(e){
    var f = e.target; if (!f || !f.closest || !f.closest('.arsf[data-arqc]')) return;
    if (!window.fetch || !window.URLSearchParams) return; // native POST fallback
    e.preventDefault();
    var box = f.closest('.arsf'), btn = f.querySelector('button'); if (btn) btn.disabled = true;
    if (window.ArAttribution) window.ArAttribution.fill(f);
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(new FormData(f)).toString() })
      .then(function(r){ if (!r.ok) throw new Error('HTTP ' + r.status);
        var p = document.createElement('p'); p.className = 'arsf-done'; p.setAttribute('role','status'); p.textContent = box.getAttribute('data-thanks');
        f.replaceWith(p);
        if (typeof gtag === 'function') gtag('event', 'generate_lead', { form_name: f.getAttribute('name'), form_location: box.getAttribute('data-arqc') });
      })
      .catch(function(){ if (btn) btn.disabled = false; alert(box.getAttribute('data-err')); });
  }, false);
})();
</script>`;

function block(lang, rel, kind) {
  const c = L[lang], T = c.t;
  const slug = rel.replace(/^public\//, '').replace(/index\.html$/, '');
  const tval = c.types[typeKey(slug)];
  const id = (k) => (`arqc-${k}-` + slug.replace(/[^a-z0-9]+/gi, '-')).slice(0, 80);
  const quick = kind === 'quick';
  const hidden = Object.entries({ ...(c.hidden || {}), ...(c.pi ? { product_interest: tval } : {}) })
    .map(([k, v]) => `<input type="hidden" name="${k}" value="${esc(v)}">`).join('');
  const utm = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].map((n) => `<input type="hidden" name="${n}" value="">`).join('');
  const typeField = `<input type="hidden" name="${c.type}" value="${esc(tval)}">`;
  const SLA = { pt: ['24 horas úteis', '48 a 72 horas úteis'], en: ['24 working hours', '48–72 working hours'], de: ['24 Arbeitsstunden', '48–72 Arbeitsstunden'], nl: ['24 werkuren', '48–72 werkuren'], fr: ['24 heures ouvrées', '48–72 heures ouvrées'], es: ['24 horas hábiles', '48–72 horas hábiles'], it: ['24 ore lavorative', '48–72 ore lavorative'], pl: ['24 godzin roboczych', '48–72 godzin roboczych'], se: ['24 arbetstimmar', '48–72 arbetstimmar'], dk: ['24 arbejdstimer', '48–72 arbejdstimer'], il: ['24 שעות עבודה', '48–72 שעות עבודה'], zh: ['24个工作小时', '48–72个工作小时'] };
  // Liability and business quotes take 48–72 working hours (RC, empresarial).
  const slow = ['liab', 'business'].includes(typeKey(slug));
  const sla = (txt) => (slow ? String(txt).split(SLA[lang][0]).join(SLA[lang][1]) : txt);
  return sla(`${MARK}
<div class="arsf${quick ? ' arqc' : ''}" data-arqc="${quick ? 'quick_contact' : 'content_page'}" data-thanks="${esc(T.thanks)}" data-err="${esc(T.err)}">
  <h3>${quick ? T.qh : T.h}</h3>
  <p class="arsf-sub">${quick ? T.qs : T.s}</p>
  <form name="${c.form}" method="POST" action="${c.action}" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="${c.form}">${utm}${hidden}${typeField}
    <input type="hidden" name="source" value="${quick ? 'quick-contact:' : 'page:'}${esc(slug.replace(/\/$/, ''))}">
    <input type="hidden" name="source_url" value="https://adlerrochefort.com/${esc(slug)}">
    <p style="display:none"><label>Bot: <input name="bot-field"></label></p>
    <div class="arsf-grid">
      <div class="arsf-f"><label for="${id('n')}">${T.n}</label><input id="${id('n')}" type="text" name="${c.name}" autocomplete="name" required></div>
      <div class="arsf-f"><label for="${id('e')}">${T.e}</label><input id="${id('e')}" type="email" name="email" autocomplete="email" required></div>
      <div class="arsf-f${quick ? ' full' : ''}"><label for="${id('p')}">${T.p}</label><input id="${id('p')}" type="tel" name="${c.phone}" autocomplete="tel"></div>
      ${quick ? '' : `<div class="arsf-f full"><label for="${id('m')}">${T.m}</label><textarea id="${id('m')}" name="${c.msg}"></textarea></div>`}
    </div>
    <label class="arsf-ok"><input type="checkbox" name="${c.consent[0]}" value="${c.consent[1]}" required> ${T.ok}</label>
    <button type="submit">${T.b}</button>
  </form>
  ${quick ? `<div class="arqc-or">${T.or}</div>` : ''}
</div>`);
}

function addAssets(s) {
  if (!s.includes('id="ar-short-form-style"')) s = s.replace('</head>', STYLE + '\n</head>');
  if (!s.includes('id="ar-quick-contact-style"')) s = s.replace('</head>', QSTYLE + '\n</head>');
  if (!s.includes('id="ar-quick-contact-js"')) s = s.replace(/<\/body>(?![\s\S]*<\/body>)/, JS + '\n</body>');
  return s;
}

const done = { quick: [], content: [] }, skipped = [];
for (const rel of globSync('public/**/index.html', { cwd: ROOT }).sort()) {
  const path = rel.slice('public/'.length);
  if (EXCLUDE.some((re) => re.test(path))) continue;
  const f = join(ROOT, rel);
  let s = readFileSync(f, 'utf8');
  if (s.includes(MARK) || s.includes('<!-- ar-short-form -->')) continue;
  const lang = langOf(path);
  const forms = [...s.matchAll(/<form\b[^>]*>[\s\S]*?<\/form>/g)].filter((m) => m[0].includes('form-name'));
  if (forms.length) {
    const req = Math.min(...forms.map((m) => (m[0].match(/\srequired/g) || []).length));
    if (req <= 5) continue; // already has a short form
    // insert before the first long lead form
    const target = forms.find((m) => (m[0].match(/\srequired/g) || []).length > 5);
    s = s.slice(0, target.index) + block(lang, rel, 'quick') + '\n' + s.slice(target.index);
    writeFileSync(f, addAssets(s)); done.quick.push(path);
  } else {
    const start = s.indexOf('<main') >= 0 ? s.indexOf('<main') : Math.max(s.indexOf('<article'), 0);
    const re = /<h2[\s>]/g; re.lastIndex = start; let hit = 0, idx = -1, mm;
    while ((mm = re.exec(s))) { if (++hit === 2) { idx = mm.index; break; } }
    if (idx < 0) { const e = s.lastIndexOf('</main>'); idx = e; }
    if (idx < 0) { skipped.push(path); continue; }
    s = s.slice(0, idx) + block(lang, rel, 'content') + '\n' + s.slice(idx);
    writeFileSync(f, addAssets(s)); done.content.push(path);
  }
}
console.log(`quick-contact above long forms: ${done.quick.length}`);
console.log(`short form on pages without one: ${done.content.length}`);
console.log('skipped:', skipped.join(', ') || 'none');
if (process.argv.includes('--list')) console.log(JSON.stringify(done, null, 1));
