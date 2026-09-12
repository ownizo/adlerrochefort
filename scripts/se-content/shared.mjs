/**
 * Constants shared by every page in the Swedish cluster.
 *
 * Separate from the market descriptor to avoid an import cycle: the descriptor
 * imports the page modules, and the page modules import the breadcrumb root.
 *
 * LANG_POLICY is the working-language disclosure /de/ and /nl/ already carry,
 * written for a Swedish reader. Swedes are used to being served in English, so
 * the disclosure is less of a shock here than elsewhere — but the part that
 * matters is the second paragraph, about the policy itself being Portuguese.
 */
export const LANG_POLICY_SE = {
  heading: 'Vi arbetar på engelska',
  body: [
    'Den här sidan är på svenska eftersom ämnet gäller svenskar i Portugal. Själva arbetet sker däremot på engelska: offerter, förklaringar av villkor, korrespondens och skadeärenden — skriftligt, på engelska. Vi säger det direkt, eftersom en skadeanmälan är fel tillfälle att upptäcka det.',
    'Portugisiska försäkringsbolag utfärdar enligt lag sina försäkringsbrev på portugisiska. Vi ser till att du förstår exakt vad som står i dem — skriftligt, på engelska, innan du skriver under.',
  ],
};

/** /se/ is itself the hub, so product pages sit one level below it. */
export const BREADCRUMB_ROOT = [{ name: 'Startsida', url: '/se/' }];
