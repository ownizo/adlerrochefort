// Reviewed self-description phrases only. Never replace a bare broker/Makler:
// real-estate agents, other intermediaries and legal definitions are not us.
import { EN_BROKER, EN_INDEPENDENCE, EN_RELATIONSHIP, DE_INDEPENDENCE } from '../lib/terminology-rules.mjs';
export function normalisePrivateClientLanguage(text, lang) {
 const extraEN = [
 ['English-Speaking Insurance Broker','English-Speaking Insurance Intermediary'],
 ['English-Speaking Broker','English-Speaking Insurance Intermediary'],
 ['One broker across both markets','One insurance intermediary across both markets'],
 ['one broker','one insurance intermediary'],
 ['insurance broker portugal','insurance intermediary portugal'],
 ['insurance broker for expats spain','insurance intermediary for expats spain'],
 ['international insurance broker','international insurance intermediary'],
 ['Adler &amp; Rochefort broker','Adler &amp; Rochefort insurance agent'],
 ['This is broker support','This is intermediary support'],
 ['Insurance brokerage','Insurance mediation'],
 ['Why Use an Insurance Broker','Why Use an Insurance Intermediary'],
 ['insurance broker?</em>','insurance intermediary?</em>'],
 ['Broker vs. direct','Intermediary vs. direct'],
 ['Broker <em>or direct','Intermediary <em>or direct'],
 ['the broker route','the intermediary route'],
 ['The broker route','The intermediary route'],
 ['the broker actually holds','the intermediary actually holds'],
 ['Registered broker','Registered insurance agent'],
 ['One broker, several risks, reviewed together — high-value homes, cars, art and collections.','One coordinated review of homes, possessions, health and family responsibilities.'],
 ['Insurance advice with a real broker behind it','Insurance advice with a registered agent behind it'],
 ['with a real broker behind it','with a registered agent behind it'],
 ['Why Use a Broker','Why Use an Insurance Intermediary'],
 ['Why use a broker','Why use an insurance intermediary'],
 ['Why use an insurance broker','Why use an insurance intermediary'],
 ['English-speaking insurance broker','English-speaking insurance intermediary'],
 ['English-speaking Insurance Broker','English-speaking Insurance Intermediary'],
 ['We are an insurance broker','We are an insurance agent'],
 ['insurance broker Portugal, insurance broker Spain','insurance intermediary Portugal, insurance intermediary Spain'],
 ['insurance broker Portugal','insurance intermediary Portugal'],
 ['English speaking insurance broker','English speaking insurance intermediary'],
 ['Collections &amp; Valuables</a>','Private Clients</a>'],
 ['Collections & Valuables</a>','Private Clients</a>'],
 ];
 const extraDE = [
 ['Versicherungsmakler','Versicherungsvermittler'],
 ['Als Makler sind wir','Als Versicherungsvermittler sind wir'],
 ['Maklerwechsel','Vermittlerwechsel'],
 ['href="/de/private-clients-portugal/">Private Clients','href="/de/private-clients/">Private Clients · Portugal &amp; Spanien'],
 ];
 const rules=lang==='de'?[...DE_INDEPENDENCE,...extraDE]:[...EN_BROKER,...EN_INDEPENDENCE,...EN_RELATIONSHIP,...extraEN];
 // Keep URLs and existing fragment identifiers stable, including SEO slugs.
 const parked=[];
 text=text.replace(/\b(?:href|id|src)="[^"]*"/g,m=>`__PC_ATTR_${parked.push(m)-1}__`);
 for(const [from,to] of rules) text=text.split(from).join(to);
 text=text.replace(/__PC_ATTR_(\d+)__/g,(_,i)=>parked[Number(i)]);
 return text;
}
