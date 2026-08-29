#!/usr/bin/env node
/**
 * Builds /en/blog/importing-a-car-to-portugal/ — the informational guide to the
 * customs, ISV and matrícula sequence, and to what happens to the motor policy
 * while it is running.
 *
 * The motor cluster answers "what cover do I need" in several places and
 * "how do I get the car onto Portuguese plates" in none of them: the expatriate
 * guide has a section, the complete guide has a paragraph, and both stop at the
 * point where the reader has to deal with the Autoridade Tributária and the
 * IMT. This is the article they were both deferring to.
 *
 * It is deliberately informational. There is no quote form and no commercial
 * H1: the single conversion route is the link to /en/car-insurance-portugal/,
 * which is the one English commercial motor page and stays that way.
 *
 * The page is spliced from track-days-performance-driving-motor-policy-exclusion,
 * which is the established shape for a motor article with no featured image —
 * same chrome, same author block, same footer, same scripts. Only the head
 * metadata, the visible title strings and the body are replaced. Run:
 *
 *   node scripts/build-import-article.mjs
 *
 * then, because the article has to reach the listings and the post-processors:
 *
 *   node scripts/extract-articles.mjs
 *   node scripts/build-articles-data.mjs
 *   node scripts/generate-blog.mjs
 *   node scripts/hreflang.mjs && node scripts/lang-switcher.mjs
 *   node scripts/generate-sitemap.mjs
 *
 * Every deadline quoted below was checked against gov.pt, the Autoridade
 * Tributária's customs information portal and the IMT in August 2026, and the
 * copy routes the reader to those sources rather than presenting an
 * administrative period as permanent. Nothing here is an insurer's underwriting
 * practice dressed up as law.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TEMPLATE_SLUG = 'track-days-performance-driving-motor-policy-exclusion';
const TEMPLATE = readFileSync(join(ROOT, 'public/en/blog', TEMPLATE_SLUG, 'index.html'), 'utf8');

const SLUG = 'importing-a-car-to-portugal';
const URL_PATH = `/en/blog/${SLUG}/`;
const ORIGIN = 'https://adlerrochefort.com';
const PUBLISHED = '2026-08-24';
const STAMP = `${PUBLISHED}T09:00:00+00:00`;
const DATE_LABEL = 'Published 24 August 2026';
// Set from the body word count at the bottom of this file: the label on the
// page and the reading time in data/articles.json are the same number.
const READING = '11 min read';

const TITLE_TAG =
  'Importing a Car to Portugal: DAV, ISV, Matr&iacute;cula and Insurance | Adler &amp; Rochefort';
const HEADLINE =
  'Importing a car to Portugal: customs, ISV, matr&iacute;cula and what happens to your insurance';
const DESCRIPTION =
  'The customs declaration, the ISV, the inspection and the Portuguese plate, in the order they actually happen &mdash; and where the motor policy fits while the paperwork is running.';
const KEYWORDS =
  'importing a car to Portugal, DAV declara&ccedil;&atilde;o aduaneira de ve&iacute;culo, ISV Portugal, matr&iacute;cula imported vehicle, legalizar carro Portugal, ISV exemption transfer of residence, foreign plates Portugal insurance';

// ---------------------------------------------------------------------------
// Body
// ---------------------------------------------------------------------------
const BODY = `
    <p>Bringing a car with you is one of the last things people plan and one of the first things that goes wrong. The vehicle arrives, the paperwork does not start, and by the time anybody looks it up the first deadline has already passed. The sequence itself is not complicated &mdash; a customs declaration, a tax, an inspection, a plate &mdash; but each step has its own clock, and the clocks start at different moments.</p>

    <p>This guide sets out that sequence, says where the motor policy fits into it, and is explicit about the points where the answer genuinely depends on your own circumstances rather than on a rule that applies to everyone. It is general information, not advice on your case: the deadlines below are administrative and are revised from time to time, so every one of them is linked to the authority that publishes it.</p>

    <nav class="article-toc" aria-label="Table of contents">
      <div class="article-toc-title">In this article</div>
      <ol>
      <li><a href="#which-route">First, work out which route you are on</a></li>
      <li><a href="#dav">Step 1 &mdash; the customs declaration (DAV)</a></li>
      <li><a href="#isv">Step 2 &mdash; the ISV, and whether you are exempt</a></li>
      <li><a href="#matricula">Step 3 &mdash; homologation, inspection and the matr&iacute;cula</a></li>
      <li><a href="#driving-meanwhile">Driving the car while the paperwork is running</a></li>
      <li><a href="#insurance">Where the insurance fits</a></li>
      <li><a href="#not-importing">Foreign-registered cars that are not being imported</a></li>
      <li><a href="#mistakes">Common mistakes</a></li>
      <li><a href="#depends">What this depends on in your case</a></li>
      </ol>
    </nav>

    <h2 id="which-route">First, work out which route you are on</h2>

    <p>&ldquo;Importing a car&rdquo; covers several situations that are handled differently, and a lot of bad advice comes from someone describing their own route as if it were the only one. Before anything else, establish which of these you are in:</p>

    <ul>
      <li><strong>You are moving your residence to Portugal and bringing a car you already own.</strong> This is the route with a possible tax exemption attached, and it has conditions you may already have met or already missed.</li>
      <li><strong>You are already resident and buying a vehicle abroad to bring here.</strong> The registration process is the same; the exemption is not available.</li>
      <li><strong>The vehicle comes from another EU member state</strong>, where it was already in free circulation, or <strong>from outside the EU</strong>, where customs import formalities apply in addition to the vehicle tax.</li>
      <li><strong>You are visiting, or the car is staying on foreign plates.</strong> Then you are not importing at all &mdash; see <a href="#not-importing">below</a>.</li>
    </ul>

    <p>The steps that follow describe the ordinary case of a light passenger vehicle being brought into Portugal and put onto Portuguese plates. Motorcycles, motorhomes, goods vehicles, heavy vehicles and vehicles over a certain age each have their own variations.</p>

    <h2 id="dav">Step 1 &mdash; the customs declaration (DAV)</h2>

    <p>The vehicle's tax position is opened by a <em>Declara&ccedil;&atilde;o Aduaneira de Ve&iacute;culo</em>, the DAV, submitted electronically through the Portal das Finan&ccedil;as. The deadline is the one people most often miss, because it does not run from the purchase or from your move:</p>

    <blockquote>The DAV must be submitted within 20 working days of the vehicle entering Portugal.</blockquote>

    <p>The Portuguese government's own service page states the period as &ldquo;no prazo m&aacute;ximo de 20 dias &uacute;teis, ap&oacute;s a entrada do ve&iacute;culo em Portugal&rdquo;. Twenty <em>working</em> days is roughly four calendar weeks, and it is counted from the day the car crossed the border, not from the day you got round to thinking about it. Confirm the current position on <a href="https://www.gov.pt/servicos/tratar-do-imposto-de-um-veiculo-comprado-no-estrangeiro" target="_blank" rel="noopener">gov.pt</a> before you rely on a date.</p>

    <p>The declaration identifies the vehicle and its technical characteristics, so you will need the foreign registration document and the vehicle's homologation or conformity data. The original foreign registration certificate is deposited as part of the process &mdash; you do not keep it and hand it over later.</p>

    <h2 id="isv">Step 2 &mdash; the ISV, and whether you are exempt</h2>

    <p>The <em>Imposto sobre Ve&iacute;culos</em> is assessed on the basis of the DAV. It is calculated from engine capacity and CO<sub>2</sub> emissions, with a reduction for the vehicle's age &mdash; which is why two cars that cost the same abroad can attract very different amounts here, and why nobody can tell you the figure without the technical data. The Autoridade Tribut&aacute;ria's customs portal states the payment period:</p>

    <blockquote>&ldquo;O prazo de pagamento do ISV &eacute; de 10 dias &uacute;teis a contar da notifica&ccedil;&atilde;o da liquida&ccedil;&atilde;o.&rdquo;</blockquote>

    <p>Ten working days from being notified of the assessment, not from submitting the declaration. The rules are set out in the C&oacute;digo do ISV, approved by Lei n.&ordm; 22-A/2007, and summarised on the <a href="https://info-aduaneiro.portaldasfinancas.gov.pt/pt/informacao_aduaneira/Veiculos/regularizacao/Pages/faq-isv-reg-descricao.aspx" target="_blank" rel="noopener">ISV regularisation pages</a> of the Portal das Finan&ccedil;as.</p>

    <h3>The transfer-of-residence exemption</h3>

    <p>If you are moving your residence to Portugal and bringing a car you already own, the ISV exemption in articles 58.&ordm; to 61.&ordm; of the C&oacute;digo do ISV may apply. It is not automatic, it is not granted on the strength of having moved, and it has to be requested. The conditions published by <a href="https://www.gov.pt/servicos/pedir-a-isencao-do-imposto-sobre-veiculos-quando-se-vem-morar-para-portugal" target="_blank" rel="noopener">gov.pt</a> are, in summary:</p>

    <ul>
      <li>you are over 18;</li>
      <li>you lived abroad for at least six months;</li>
      <li>you owned the vehicle in the country of origin for at least six months at the moment residence is transferred, counted from the date of the document that proves ownership, or from the date of the leasing contract;</li>
      <li>the vehicle was bought in the country of origin or a previous country of residence, with the taxes due there paid, and with no tax benefit taken on bringing it here;</li>
      <li>one vehicle per person; and</li>
      <li>the request is made <strong>within twelve months of the date you transfer your residence to Portugal</strong>.</li>
    </ul>

    <p>The request itself is free. What catches people out is what comes after it: under article 47.&ordm; of the C&oacute;digo do ISV, a vehicle admitted with an exemption cannot be sold, given away, rented or lent for twelve months from the date the exemption is granted, and a disposal after that but within five years can still attract tax in proportion to the time remaining. Those are two separate twelve-month periods with two different starting points &mdash; twelve months from the move to <em>ask</em>, twelve months from the grant before you can <em>dispose</em> &mdash; and conflating them is one of the more expensive mistakes in this process.</p>

    <p class="article-note" style="font-size:14px;color:#526984;">Checked in August 2026 against gov.pt and the Autoridade Tribut&aacute;ria's customs information portal. Amounts, periods and country lists in this area are administrative and are revised; we state the shape of the process and link to the authority for the numbers rather than quoting a figure that may have moved.</p>

    <h2 id="matricula">Step 3 &mdash; homologation, inspection and the matr&iacute;cula</h2>

    <p>Once the tax position is settled the vehicle still has no Portuguese identity. That comes from the IMT, and the route depends on what documentation the vehicle carries:</p>

    <ul>
      <li><strong>With a European Certificate of Conformity (CoC).</strong> New light vehicles with European type-approval take the simplified route: the national type-approval number is obtained from the IMT first, because the customs step needs it, and the vehicle is then presented for a registration inspection at a category B inspection centre.</li>
      <li><strong>Without a CoC but with a model already recorded nationally.</strong> The IMT publishes an online lookup for models already registered in the national system; the declaration it produces has replaced the old modelo 9 form in most cases. An inspection certificate (modelo 112) from a licensed technical inspection centre is required alongside the authenticated foreign registration certificate.</li>
      <li><strong>Without a CoC and without a national type-approval.</strong> A national type-approval has to be requested, supported by the foreign approval documentation, before the registration can be attributed.</li>
    </ul>

    <p>The IMT charges a fee for attributing the registration, and the amount differs between those routes. The definitive document list and the current fees are on the <a href="https://www.imt-ip.pt/sites/IMTT/Portugues/Veiculos/Matriculas/VeiculosUsados/Ligeiros/Paginas/MatriculaparaLigeirosUsados.aspx" target="_blank" rel="noopener">IMT's registration pages</a> &mdash; that is the page to work from, not a forum post.</p>

    <blockquote>After the vehicle's tax position is regularised there are 60 days to pay the registration fee at the IMT and request the registration certificate.</blockquote>

    <p>That 60-day window is stated on the government's <a href="https://www.gov.pt/servicos/pedir-atribuicao-de-matricula-para-um-veiculo" target="_blank" rel="noopener">matr&iacute;cula service page</a>, together with the point that the request has to come from whoever was responsible for bringing the vehicle into the country. The registration certificate is issued by the IMT only once the tax has been paid.</p>

    <h2 id="driving-meanwhile">Driving the car while the paperwork is running</h2>

    <p>There is a defined window in which a vehicle still on valid foreign plates may be driven here while its position is being regularised. The Autoridade Tribut&aacute;ria states that circulation is permitted for vehicles carrying valid foreign registration, provided the vehicle carries a copy of the DAV and is driven by the owner, their spouse or their de facto partner &mdash; running from the end of the DAV submission period until the tax payment deadline expires.</p>

    <p>Two things follow from that, and both matter more than they look:</p>

    <ul>
      <li><strong>The permission is conditional.</strong> A colleague, a friend or an adult child driving the car during that window is outside it, whatever the insurance says.</li>
      <li><strong>It is a window, not a state.</strong> It closes on the payment deadline, and a vehicle found circulating outside these rules can be notified and, ultimately, seized.</li>
    </ul>

    <h2 id="insurance">Where the insurance fits</h2>

    <p>Compulsory motor third-party liability cover is not suspended while a car is being legalised. What changes is which policy is doing the work.</p>

    <ul>
      <li><strong>While the car is on foreign plates.</strong> The contract that answers is normally the foreign policy, or a green card where the vehicle comes from outside the EU/EEA. Whether that policy continues to respond once the vehicle is permanently in Portugal, and for how long, is a question for that insurer &mdash; ask in writing, and keep the reply.</li>
      <li><strong>While the registration is in progress.</strong> Insurers in the Portuguese market can generally arrange cover against the vehicle identification number or the pending Portuguese plate, so there is no uninsured gap between the foreign policy ending and the Portuguese one starting. This is the stage to plan rather than improvise.</li>
      <li><strong>Once the matr&iacute;cula is issued.</strong> The vehicle needs a policy written against the Portuguese registration. Cover written for the old foreign plate is no longer the right contract for it, and the plate has to be notified to the insurer.</li>
    </ul>

    <p>Keep the foreign registration document, the DAV and the proof of the registration request together. Insurers use them to identify the vehicle and to date your risk correctly, and the same bundle is what an underwriter asks for when you want a foreign claims record taken into account.</p>

    <p>On that last point, a distinction worth being clear about: the registration process is administrative law, decided by the Autoridade Tribut&aacute;ria and the IMT. Whether a Portuguese insurer recognises your no-claims record from abroad is an underwriting decision made by each company on its own terms, not an entitlement that comes with the plate. Our guide to <a href="/en/blog/car-insurance-expatriates/">car insurance for expatriates</a> goes through what a bonus-malus certificate needs to show.</p>

    <h2 id="not-importing">Foreign-registered cars that are not being imported</h2>

    <p>Not every foreign-plated car in Portugal is an import in progress. A vehicle brought here temporarily by a visitor, or one that stays registered abroad because its owner remains resident elsewhere, is a different question, and the answer turns on residence rather than on the car. Once you are resident here, a vehicle kept permanently in Portugal is expected to be on Portuguese plates, and the temporary-admission routes have their own conditions and their own limits.</p>

    <p>The insurance consequence is the practical one: a Portuguese motor policy is written for a vehicle registered in Portugal. If the plate stays foreign, the cover normally stays foreign too, and it is worth confirming with that insurer what it will and will not do for a car that now lives here. The <a href="/en/blog/car-insurance-complete-guide/#pillar-2-how-to-insure-a-car-with-foreign-plates">complete guide to car insurance in Portugal</a> covers the foreign-plate scenarios in more detail.</p>

    <h2 id="mistakes">Common mistakes</h2>

    <ul>
      <li><strong>Counting the first deadline from the wrong date.</strong> The 20 working days run from the vehicle entering Portugal, not from the purchase, the shipping date or your residence permit.</li>
      <li><strong>Assuming the ISV exemption comes with the move.</strong> It has to be requested, within twelve months, and the six-month residence and six-month ownership conditions have to have been met before you moved &mdash; which is not something you can fix afterwards.</li>
      <li><strong>Selling, lending or renting an exempt vehicle too soon.</strong> Twelve months from the grant of the exemption, with a tapering exposure for five years.</li>
      <li><strong>Letting the foreign policy lapse first.</strong> Cancelling abroad before the Portuguese cover is in place creates exactly the gap the whole process is meant to avoid.</li>
      <li><strong>Letting someone else drive during the interim window.</strong> The permission is limited to the owner, their spouse or their de facto partner.</li>
      <li><strong>Budgeting for the car and not for the ISV.</strong> A vehicle that looked cheap abroad can attract a substantial tax here, and the calculation depends on emissions and age rather than on what you paid.</li>
      <li><strong>Taking a forum answer about a different origin country as universal.</strong> An EU vehicle in free circulation and a vehicle arriving from outside the EU do not go through the same formalities.</li>
    </ul>

    <h2 id="depends">What this depends on in your case</h2>

    <p>There is no single import procedure, and the honest version of this article has to say where it stops being general. The steps, the documents and the amounts differ according to:</p>

    <ul>
      <li><strong>Country of origin</strong> &mdash; another EU member state, where the vehicle is already in free circulation, or a third country, where customs import formalities apply as well.</li>
      <li><strong>Your residence status</strong> &mdash; whether you are transferring residence, already resident, or neither.</li>
      <li><strong>Vehicle type</strong> &mdash; light passenger, goods, motorcycle, motorhome, heavy vehicle, agricultural.</li>
      <li><strong>Vehicle age and emissions</strong> &mdash; which drive the ISV, and which also decide whether the car is treated as a classic, where the registration route and the insurance valuation are both different. See <a href="/en/blog/classic-collector-cars-portugal-matriculation-agreed-value/">classic and collector cars in Portugal</a>.</li>
      <li><strong>Documentation</strong> &mdash; whether the vehicle has a European Certificate of Conformity, a nationally recorded model, or neither.</li>
    </ul>

    <p>Where those variables land is what the Autoridade Tribut&aacute;ria and the IMT decide, on the documents. What we can do is make sure the cover lines up with it: that the foreign policy is not cancelled too early, that the interim is insured, and that the Portuguese policy starts against the right plate on the right day.</p>

    <div class="article-contact">
      <h2>Insuring a car through the registration process</h2>
      <p>If you are bringing a vehicle to Portugal, or are part-way through legalising one, Adler &amp; Rochefort can arrange the Portuguese cover so that it starts when the foreign policy ends rather than after it. We are an English-speaking, ASF-registered broker; the customs and IMT steps themselves stay with you and the authorities.</p>
      <div class="article-contact-actions" style="display:flex;flex-wrap:wrap;gap:14px;align-items:center;">
        <a href="/en/car-insurance-portugal/#quote-form" class="contact-link">Get a car insurance quote</a>
        <a href="https://wa.me/351928226570?text=Hi%2C%20I%20read%20your%20article%20about%20importing%20a%20car%20to%20Portugal%20and%20would%20like%20more%20information." target="_blank" rel="noopener" class="ar-btn ar-btn-wa"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg><span class="ar-sticky-wa-text">Message us on WhatsApp</span></a>
      </div>
    </div>

    <p class="article-disclaimer">This article is provided for general information and does not constitute personalised advice or a statement of your tax position; the customs, ISV and registration treatment of any vehicle depends on its own facts and is decided by the Autoridade Tribut&aacute;ria and the IMT. Deadlines and procedures in this area are revised from time to time &mdash; check the linked official sources before acting. Adler &amp; Rochefort is a commercial brand of Ownizo, Unipessoal Lda., mediador registado na ASF n.&ordm; 425591790/3.</p>

    <!-- cluster-links -->
    <p style="border-top:1px solid #DAD5C8;padding-top:18px;margin:36px 0 0;font-size:14px;line-height:1.7;color:#526984;"><strong>More on this subject:</strong> <a href="/en/car-insurance-portugal/" style="color:#17243D;font-weight:600;">Car insurance in Portugal</a> &middot; <a href="/en/blog/car-insurance-expatriates/" style="color:#17243D;font-weight:600;">Car insurance for expatriates in Portugal: what you need to know</a> &middot; <a href="/en/blog/car-insurance-complete-guide/" style="color:#17243D;font-weight:600;">How to choose the best car insurance in Portugal: complete guide 2026</a></p>
    <!-- /cluster-links -->
`;

// ---------------------------------------------------------------------------
// FAQ — the visible block and the FAQPage JSON-LD are generated from the same
// array, so the two cannot drift apart.
// ---------------------------------------------------------------------------
const FAQ = [
  {
    q: 'How long do I have to declare an imported car in Portugal?',
    a: 'The Declara&ccedil;&atilde;o Aduaneira de Ve&iacute;culo must be submitted within 20 working days of the vehicle entering Portugal. The period runs from the vehicle&rsquo;s arrival, not from the purchase or from your move, and it is published on gov.pt.',
  },
  {
    q: 'Can I drive the car while it is being legalised?',
    a: 'Within limits. The Autoridade Tribut&aacute;ria permits circulation on valid foreign plates while the position is being regularised, provided the vehicle carries a copy of the DAV and is driven by the owner, their spouse or their de facto partner &mdash; from the end of the DAV submission period until the tax payment deadline expires.',
  },
  {
    q: 'Is the ISV exemption automatic when I move to Portugal?',
    a: 'No. The transfer-of-residence exemption in articles 58.&ordm; to 61.&ordm; of the C&oacute;digo do ISV has to be requested within twelve months of transferring residence, and depends on conditions including at least six months living abroad and at least six months&rsquo; ownership of the vehicle before the move. gov.pt publishes the current conditions.',
  },
  {
    q: 'Can I sell the car after getting the ISV exemption?',
    a: 'Not immediately. Under article 47.&ordm; of the C&oacute;digo do ISV a vehicle admitted with an exemption cannot be sold, given away, rented or lent for twelve months from the date the exemption is granted, and a later disposal within five years can still attract tax in proportion to the time remaining.',
  },
  {
    q: 'Do I need Portuguese insurance before the plate is issued?',
    a: 'You need valid motor third-party liability cover throughout. While the car is still on foreign plates that is normally the foreign policy or a green card; insurers in the Portuguese market can generally cover the interim against the vehicle identification number or the pending plate, and the policy is then written against the Portuguese registration once it is issued.',
  },
  {
    q: 'Will my no-claims record from abroad be recognised?',
    a: 'Possibly, but it is an underwriting decision by each insurer rather than something the registration process confers. A bonus-malus or no-claims certificate from your previous insurer is what an underwriter will ask for; how much weight it carries varies between companies.',
  },
];

const faqHtml =
  `<section class="ar-cv ar-faq">\n  <h2>Frequently asked questions</h2>\n` +
  FAQ.map(
    (f) =>
      `  <details class="ar-faq-item">\n    <summary>${f.q}</summary>\n    <div class="ar-faq-answer">${f.a}</div>\n  </details>\n`
  ).join('') +
  `</section>\n`;

const RELATED = [
  ['/en/blog/car-insurance-expatriates/', 'Car Insurance', 'Car insurance for expatriates in Portugal: what you need to know'],
  ['/en/blog/car-insurance-complete-guide/', 'Car Insurance', 'How to choose the best car insurance in Portugal: complete guide 2026'],
  ['/en/blog/classic-collector-cars-portugal-matriculation-agreed-value/', 'Motor Insurance', 'Classic and collector cars in Portugal: matriculation and agreed value'],
];

const relatedHtml =
  `<section class="related-section">\n  <h2 class="related-title">Related articles</h2>\n  <div class="related-grid">\n` +
  RELATED.map(
    ([href, tag, title]) =>
      `    <a href="${href}" class="related-card">\n      <div class="related-card-tag">${tag}</div>\n      <div class="related-card-title">${title}</div>\n    </a>\n`
  ).join('') +
  `  </div>\n</section>\n`;

// ---------------------------------------------------------------------------
// Splice
// ---------------------------------------------------------------------------

/** Literal replace that does not interpret `$` sequences in the replacement. */
function swap(haystack, needle, replacement) {
  if (!haystack.includes(needle)) throw new Error(`template string not found: ${needle.slice(0, 80)}`);
  return haystack.split(needle).join(replacement);
}

function region(html, startMark, endMark) {
  const start = html.indexOf(startMark);
  if (start === -1) throw new Error(`region start not found: ${startMark}`);
  const end = html.indexOf(endMark, start + startMark.length);
  if (end === -1) throw new Error(`region end not found: ${endMark}`);
  return { start, end };
}

const ENTITIES = {
  amp: '&', mdash: '—', ndash: '–', euro: '€', rsquo: '’', lsquo: '‘',
  ldquo: '“', rdquo: '”', middot: '·', ordm: 'º', ordf: 'ª', hellip: '…',
  aacute: 'á', eacute: 'é', iacute: 'í', oacute: 'ó', uacute: 'ú',
  atilde: 'ã', otilde: 'õ', ccedil: 'ç', agrave: 'à', ecirc: 'ê',
  acirc: 'â', ocirc: 'ô', nbsp: ' ', quot: '"',
};

/** Entity-free, markup-free version of a string, for use inside JSON-LD. */
const decode = (s) =>
  s.replace(/<[^>]+>/g, '').replace(/&([a-z]+);/g, (m, name) => {
    if (!(name in ENTITIES)) throw new Error(`unmapped entity in JSON-LD source: &${name};`);
    return ENTITIES[name];
  });

const T = {
  title: 'Track days and performance driving: the exclusion hiding in your motor policy | Adler &amp; Rochefort',
  headline: 'Track days and performance driving: the exclusion hiding in your motor policy',
  desc: 'Why track days, timed events and performance driving can fall outside ordinary motor insurance, even when the car is fully comprehensive.',
  keywords: 'private staff insurance Portugal, travelling nanny insurance, domestic staff abroad insurance, household staff travel cover Portugal, work accident insurance abroad Portugal',
  url: `${ORIGIN}/en/blog/${TEMPLATE_SLUG}/`,
  path: `/en/blog/${TEMPLATE_SLUG}/`,
  stamp: '2026-07-05T09:00:00+00:00',
  dateLine: '<div class="article-date"><time datetime="2026-07-05">Published 5 July 2026</time> &middot; 8 min read</div>',
  topics: 'casa_geral,auto_geral,empresas_obrigatorios',
};

let html = TEMPLATE;

// Head and every visible copy of the title, in that order: the longest strings
// first so a shorter one never eats part of a longer one.
html = swap(html, T.title, TITLE_TAG);
html = swap(html, T.desc, DESCRIPTION);
html = swap(html, T.keywords, KEYWORDS);
html = swap(html, T.headline, HEADLINE);
html = swap(html, T.url, `${ORIGIN}${URL_PATH}`);
html = swap(html, T.path, URL_PATH);
html = swap(html, T.stamp, STAMP);
html = swap(html, T.dateLine, `<div class="article-date"><time datetime="${PUBLISHED}">${DATE_LABEL}</time> &middot; ${READING}</div>`);

// The swaps above put the HTML-entity form of the new strings everywhere,
// including inside the JSON-LD. JSON-LD is not HTML, so an `&iacute;` there is
// literal text: resolve the entities back inside those blocks only. `decode`
// throws on anything not in the map rather than letting it through.
html = html.replace(
  /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  (_m, json) => `<script type="application/ld+json">${decode(json)}</script>`
);

// Chat widget: this article is about registration and expatriate motor cover.
html = swap(html, `data-topics="${T.topics}"`, 'data-topics="auto_geral,auto_expatriados"');

// Sticky bar: the car pillar rather than the generic contact anchor, and copy
// that matches what the button actually does.
html = swap(
  html,
  '<div class="ar-sticky-cta-label">Talk to us<small>English-speaking, ASF-registered</small></div>',
  '<div class="ar-sticky-cta-label">Free quote in 24h<small>English-speaking, ASF-registered broker</small></div>'
);
html = swap(
  html,
  '  <a href="/en/#contact" class="ar-btn ar-btn-primary">Contact us</a>',
  '  <a href="/en/car-insurance-portugal/#quote-form" class="ar-btn ar-btn-primary">Free quote</a>'
);
html = swap(
  html,
  'text=Hi%2C%20I%20read%20your%20article%20about%20track%20days%20and%20performance%20driving%3A%20the%20exclusion%20hiding%20in%20your%20motor%20policy%20and%20would%20like%20more%20information.',
  'text=Hi%2C%20I%20read%20your%20article%20about%20importing%20a%20car%20to%20Portugal%20and%20would%20like%20more%20information.'
);

// Body.
{
  const r = region(html, '  <div class="article-body">\n', '\n    <div class="article-contact">');
  const bodyEnd = html.indexOf('  </div>\n</article>', r.start);
  if (bodyEnd === -1) throw new Error('article-body close not found');
  html =
    html.slice(0, r.start) +
    '  <div class="article-body">\n' +
    BODY +
    '  </div>\n' +
    faqHtml +
    '</article>' +
    html.slice(bodyEnd + '  </div>\n</article>'.length);
}

// The template's FAQ placeholder is satisfied by the block above.
html = swap(
  html,
  `<!-- TODO: FAQ a redigir — 4 to 6 frequently asked questions about "${HEADLINE}", each with a short factual answer. When published, add the matching FAQPage JSON-LD block. -->\n\n`,
  ''
);

// Related articles.
{
  const start = html.indexOf('<section class="related-section">');
  const end = html.indexOf('</section>', start) + '</section>\n'.length;
  if (start === -1) throw new Error('related-section not found');
  html = html.slice(0, start) + relatedHtml + html.slice(end);
}

// FAQPage JSON-LD, immediately after the BreadcrumbList block so the head keeps
// the order the rest of the cluster uses.
{
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: decode(f.q),
      acceptedAnswer: { '@type': 'Answer', text: decode(f.a) },
    })),
  };
  const marker = '<!-- Schema.org BreadcrumbList -->';
  const at = html.indexOf(marker);
  if (at === -1) throw new Error('BreadcrumbList marker not found');
  const close = html.indexOf('</script>', at) + '</script>'.length;
  html =
    html.slice(0, close) +
    '\n\n<!-- Schema.org FAQPage -->\n<script type="application/ld+json">\n' +
    JSON.stringify(faqLd, null, 2) +
    '\n</script>' +
    html.slice(close);
}

// ---------------------------------------------------------------------------
// Checks — nothing reaches public/ that fails one of these.
// ---------------------------------------------------------------------------
const h1s = html.match(/<h1[^>]*>/g) || [];
if (h1s.length !== 1) throw new Error(`expected exactly one H1, found ${h1s.length}`);

for (const block of html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || []) {
  const json = block.replace(/^<script[^>]*>/, '').replace(/<\/script>$/, '');
  JSON.parse(json);
}

const visibleFaq = (html.match(/<summary>([\s\S]*?)<\/summary>/g) || []).length;
if (visibleFaq !== FAQ.length) throw new Error(`FAQ parity: ${visibleFaq} visible vs ${FAQ.length} declared`);

for (const id of BODY.match(/href="#([a-z0-9-]+)"/g) || []) {
  const anchor = id.slice(7, -1);
  if (!BODY.includes(`id="${anchor}"`)) throw new Error(`anchor #${anchor} has no target`);
}

if (html.includes(TEMPLATE_SLUG)) throw new Error('template slug still present in output');

const dir = join(ROOT, 'public/en/blog', SLUG);
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'index.html'), html);
console.log(`wrote ${URL_PATH} (${html.length} bytes, ${FAQ.length} FAQs)`);

// ---------------------------------------------------------------------------
// Registration.
//
// data/articles.extracted.json is what data/articles.json is built from, and it
// is written by scripts/extract-articles.mjs, which re-crawls every article.
// That crawl currently produces a large diff against what is committed — word
// counts, tags and several categories have drifted since it last ran — so
// running it to publish one article would bury this change in a hundred
// unrelated ones. Instead this writes the single record for this article, in
// exactly the shape and sort order the extractor uses, and leaves every other
// entry byte-identical. Run extract-articles.mjs when that drift is being dealt
// with on purpose.
// ---------------------------------------------------------------------------
const EXTRACTED = join(ROOT, 'data', 'articles.extracted.json');

const pick = (s, re) => {
  const m = s.match(re);
  return m ? m[1].replace(/\s+/g, ' ').trim() : null;
};
const unescapeHtml = (s) =>
  s == null
    ? s
    : s
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&rsquo;/g, '\u2019')
        .replace(/&nbsp;/g, ' ');

const head = html.slice(0, html.indexOf('</head>') + 7);
const articleBody = html.slice(
  html.indexOf('<div class="article-body">'),
  html.indexOf('<section class="ar-cv ar-faq">')
);
const record = {
  slug: SLUG,
  path: URL_PATH,
  title: unescapeHtml(pick(head, /<title>([\s\S]*?)<\/title>/)),
  h1: unescapeHtml(pick(html, /<h1[^>]*>([\s\S]*?)<\/h1>/)),
  description: unescapeHtml(pick(head, /<meta name="description" content="([\s\S]*?)"\s*\/?>/)),
  ogTitle: unescapeHtml(pick(head, /<meta property="og:title" content="([\s\S]*?)"\s*\/?>/)),
  ogImage: pick(head, /<meta property="og:image" content="([\s\S]*?)"\s*\/?>/),
  published: pick(head, /<meta property="article:published_time" content="([\s\S]*?)"\s*\/?>/),
  modified: pick(head, /<meta property="article:modified_time" content="([\s\S]*?)"\s*\/?>/),
  canonical: pick(head, /<link rel="canonical" href="([\s\S]*?)"\s*\/?>/),
  hreflangPt: pick(head, /<link rel="alternate" hreflang="pt-PT" href="([\s\S]*?)"\s*\/?>/),
  hreflangEn: pick(head, /<link rel="alternate" hreflang="en(?:-GB)?" href="([\s\S]*?)"\s*\/?>/) || `${ORIGIN}${URL_PATH}`,
  tag: unescapeHtml(pick(html, /<div class="article-tag">([\s\S]*?)<\/div>/)),
  dateLabel: unescapeHtml(pick(html, /<div class="article-date">([\s\S]*?)<\/div>/)),
  featuredImage: pick(html, /<img src="(\/images\/blog\/[^"]+)"[^>]*class="article-featured-image"/),
  noindex: /content="noindex/.test(head),
  // The extractor counts every word in the file, stylesheet and JSON-LD
  // included, which on this template inflates the reading time by roughly ten
  // minutes. Counting the article body instead keeps data/articles.json in
  // agreement with the reading time printed on the page.
  words: articleBody.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length,
};

const extracted = JSON.parse(readFileSync(EXTRACTED, 'utf8'));
extracted.en = extracted.en.filter((a) => a.slug !== SLUG).concat(record);
extracted.en.sort((a, b) => a.slug.localeCompare(b.slug));
const minutes = Math.max(3, Math.round(record.words / 220));
if (READING !== `${minutes} min read`) {
  throw new Error(`reading time on the page (${READING}) does not match ${minutes} min from ${record.words} words`);
}

writeFileSync(EXTRACTED, JSON.stringify(extracted, null, 2) + '\n');
console.log(`registered ${SLUG} in data/articles.extracted.json (${record.words} words)`);
