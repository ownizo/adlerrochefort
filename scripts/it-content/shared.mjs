/**
 * Constants shared by every page in the Italian cluster.
 *
 * Separate from the market descriptor to avoid an import cycle: the descriptor
 * imports the page modules, and the page modules import the breadcrumb root.
 *
 * LANG_POLICY is the working-language disclosure, written for an Italian
 * reader and deliberately different from the Danish/Swedish/Polish one. The
 * owner's instruction, kept honest: the firm's official working language is
 * English; in writing we communicate in Italian with AI-assisted translation,
 * so quotes, explanations of the conditions and correspondence reach the
 * client in Italian; conversations are in English; policies are issued in
 * Portuguese or Spanish and explained before signing. Every other Italian
 * string that touches language (formLangNote, successBody, the hub FAQ, the
 * guide FAQ, the process steps) must say the same thing — change them together.
 */
export const LANG_POLICY_IT = {
  heading: 'In che lingua lavoriamo',
  body: [
    'La nostra lingua di lavoro ufficiale è l’inglese. Per iscritto, però, comunichiamo con Lei in italiano, con l’aiuto della traduzione assistita dall’intelligenza artificiale: preventivi, spiegazione delle condizioni e corrispondenza Le arrivano in italiano, e la differenza si nota appena. Le conversazioni, al telefono o di persona, si svolgono in inglese o in portoghese. Lo diciamo con chiarezza fin dall’inizio, perché il momento di un sinistro è quello sbagliato per scoprirlo.',
    'Le compagnie portoghesi e spagnole emettono le polizze nella propria lingua. Prima della firma Le spieghiamo per iscritto, in italiano, che cosa vi è scritto esattamente: coperture, somme assicurate, franchigie ed esclusioni.',
  ],
};

/** /it/ is itself the hub, so product pages sit one level below it. */
export const BREADCRUMB_ROOT = [{ name: 'Home', url: '/it/' }];
