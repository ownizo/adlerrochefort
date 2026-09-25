/**
 * Two sections the localised homepages share, and the insurer list they draw on.
 *
 * Both of these already existed on the established pages — the portrait band on
 * /nl/ ("Voor wie wij er zijn") and the insurer panel on /nl/ and /de/ — but as
 * hand-written markup inside each page's own content file. The Polish, Swedish,
 * Danish and Chinese homepages were missing both, and copying the markup a
 * further four times would have made six places to keep in step. So the markup
 * moved here once and the copy stayed where copy belongs: in each market's page
 * record.
 *
 * What is deliberately NOT here is the design. Both functions emit the classes
 * the corpus already styles — `.intro-media` and `.brands`/`.brand-chip`, in
 * public/css/ar-cluster.css and public/css/ar-de.css — so these sections
 * inherit the established look rather than introducing a second one.
 *
 * Consumers: scripts/lib/market-cluster.mjs (PL/SE/DK/ZH) and
 * scripts/de-content/hub.mjs (DE, which the panel was lifted from).
 */

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ─────────────── the insurer panel ─────────────── */

/**
 * The insurers the site says it compares — the only list, so there is nothing
 * for a second one to drift from.
 *
 * These seven are exactly the chips the established panel already renders on
 * /nl/ and /de/; the list was read off those pages rather than composed, and
 * nothing has been added to it. Adding a name here is a claim about a real
 * agency agreement, so it is a decision about the business and not about the
 * markup.
 *
 * The names are trade names and are never translated — Zurich is Zurich in
 * Polish, Swedish, Danish and Chinese. Only the heading and the lead above the
 * row are localised.
 */
export const INSURERS = ['Hiscox', 'Allianz', 'Zurich', 'MGEN', 'Asisa', 'APRIL', 'Chubb', 'Hispania', 'Innovarisk'];

/**
 * Render the insurer panel.
 *
 * @param {string} heading    Localised heading. May contain <em> for the accent.
 * @param {string} lead       Localised standfirst. Says "within our portfolio",
 *                            never "every insurer" or "the whole market" —
 *                            the panel is seven names, and the copy above it
 *                            has to be true of seven names.
 * @param {string} id         id for the heading, referenced by aria-labelledby.
 * @param {string} band       'tint' | 'plain' | '' — the section's background,
 *                            so the caller can keep its own band alternation.
 */
export function insurerPanel({ heading, lead, id = 'insurers', band = '' }) {
  const chips = INSURERS.map((n) => `      <span class="brand-chip">${esc(n)}</span>`).join('\n');
  return `<section class="section brands${band ? ` ${band}` : ''}" aria-labelledby="${esc(id)}">
  <div class="container">
    <h2 id="${esc(id)}">${heading}</h2>
    <p class="lead">${lead}</p>
    <div class="brands-row">
${chips}
    </div>
  </div>
</section>`;
}

/* ─────────────── the portrait band ─────────────── */

/**
 * The portrait asset. One file, already on the site and already used by the
 * Portuguese, English, French and Dutch homepages — not a new image, not a
 * copy of an existing one under a second name.
 *
 * The intrinsic dimensions are declared, rather than the 220x260 display box
 * the Dutch page happens to declare, so the ratio the browser reserves before
 * the file arrives is the ratio the file actually has (928x1024). `.intro-media
 * img` sizes it to the column; the attributes only have to prevent the shift.
 */
export const PORTRAIT = { src: '/images/hugo-goncalves.jpg', width: 928, height: 1024 };

/**
 * Render the "for whom we are here" band: heading and short copy on one side,
 * the portrait on the other, stacking below 860px. Same component the Dutch
 * homepage uses, which is why it needs no new CSS.
 *
 * @param {string} heading  Localised heading. May contain <em>.
 * @param {string} body     Localised copy — one <p class="lead">.
 * @param {string} alt      Localised alt text. The site's strategy for this
 *                          asset is to describe the role, not the person
 *                          ("insurance adviser for expats in Portugal"), which
 *                          is also what keeps it from becoming a speculative
 *                          identity description.
 * @param {string} id       id for the heading, referenced by aria-labelledby.
 * @param {string} band     'tint' | 'plain' | '' — see insurerPanel.
 */
export function audienceBand({ heading, body, alt, id = 'audience', band = 'plain' }) {
  return `<section class="section${band ? ` ${band}` : ''}" aria-labelledby="${esc(id)}">
  <div class="container">
    <div class="intro-media">
      <div>
        <h2 id="${esc(id)}">${heading}</h2>
        <p class="lead">${body}</p>
      </div>
      <img src="${PORTRAIT.src}" alt="${esc(alt)}" width="${PORTRAIT.width}" height="${PORTRAIT.height}" loading="lazy" decoding="async">
    </div>
  </div>
</section>`;
}

/**
 * The background band that should follow `html`, given that the localised
 * homepages alternate cream and white section by section. Reading the last band
 * out of the page's own markup means a market that adds or removes a section
 * keeps its rhythm without anyone having to remember to flip a flag.
 */
export function nextBand(html) {
  const found = String(html).match(/<section class="section (plain|tint)"/g);
  const last = found && found[found.length - 1];
  return last && last.includes('plain') ? 'tint' : 'plain';
}
