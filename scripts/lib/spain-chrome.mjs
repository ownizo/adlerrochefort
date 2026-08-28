/**
 * Shared, side-effect-free chrome for the Spain cluster and the international
 * insurance-review page: the footer, the WhatsApp icon, and the regulatory
 * provider identity used in every Service JSON-LD block on those pages.
 *
 * Split out of build-spain-cluster.mjs (Phase 5) so build-insurance-review.mjs
 * can reuse the exact same footer and provider identity without importing a
 * script that has side effects of its own — every build-*.mjs script in this
 * repo runs its generation/validation/write sequence at module-load time, so
 * importing one from another re-runs that sequence, in the wrong order, as a
 * side effect of wanting three constants. This file has none: importing it
 * only defines the constants below.
 */

// Not the Portugal footer. Shows both markets' product links plus contact —
// genuinely neutral, which is why the review page reuses it unmodified.
export const FOOTER = `
<footer>
  <div class="footer-top">
    <div>
      <div class="footer-brand-name">Adler <em>&amp;</em> Rochefort</div>
      <p class="footer-brand-desc">English-speaking insurance broker, registered with Portugal's ASF. We help international residents and property owners in Portugal and Spain work out what cover they need, and arrange it in English.</p>
    </div>
    <div>
      <div class="footer-col-title">Spain</div>
      <ul class="footer-col-links">
        <li><a href="/en/expat-insurance-spain/">Insurance for expats in Spain</a></li>
        <li><a href="/en/health-insurance-spain/">Health Insurance</a></li>
        <li><a href="/en/home-insurance-spain/">Home Insurance</a></li>
        <li><a href="/en/landlord-insurance-spain/">Landlord Insurance</a></li>
        <li><a href="/en/car-insurance-spain/">Car Insurance</a></li>
        <li><a href="/en/life-insurance-spain/">Life Insurance</a></li>
        <li><a href="/en/private-clients-spain/">Private Clients</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Portugal</div>
      <ul class="footer-col-links">
        <li><a href="/en/expat-insurance-portugal/">Insurance for expats in Portugal</a></li>
        <li><a href="/en/home-insurance-quote/">Home Insurance</a></li>
        <li><a href="/en/car-insurance-portugal/">Car Insurance</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Contact</div>
      <ul class="footer-col-links">
        <li><a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a></li>
        <li><a href="https://wa.me/351928226570" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
        <li><a href="tel:+351928226570">+351 928 226 570</a></li>
        <li>Varandas de S&atilde;o Jo&atilde;o 4, 8600-324 Lagos, Portugal</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">&copy; 2026 Adler &amp; Rochefort &middot; All rights reserved</div>
    <div class="footer-legal">
      <a href="/en/privacy-policy/">Privacy Policy</a>
      <a href="/en/terms-and-conditions/">Terms &amp; Conditions</a>
      <a href="https://www.asf.com.pt/canal-de-den%C3%BAncias" target="_blank" rel="noopener noreferrer">ASF Reporting Channel</a>
    </div>
  </div>
  <div class="footer-regulatory">
    <p>Adler &amp; Rochefort is a commercial brand of Ownizo, Unipessoal Lda.</p>
    <p>Ownizo, Unipessoal Lda. is registered with the Portuguese Insurance and Pension Funds Supervisory Authority (ASF) under no. 425591790/3, and operates in Spain on a cross-border basis from that registration.</p>
  </div>
</footer>`;

export const WHATSAPP_SVG =
  '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

// The real, verified regulatory identity: Ownizo/ASF/Lagos. No Spanish
// address, phone or registration number is invented anywhere in this file.
export const PROVIDER = {
  '@type': 'InsuranceAgency',
  name: 'Adler & Rochefort',
  legalName: 'Ownizo, Unipessoal Lda.',
  identifier: 'ASF 425591790/3',
  url: 'https://adlerrochefort.com/en/',
  email: 'insurance@adlerrochefort.com',
  telephone: '+351928226570',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Varandas de São João 4',
    postalCode: '8600-324',
    addressLocality: 'Lagos',
    addressRegion: 'Algarve',
    addressCountry: 'PT',
  },
};
