// Reviewed self-description phrases only. Never replace a bare broker/Makler:
// real-estate agents, other intermediaries and legal definitions are not us.
import { EN_BROKER, EN_INDEPENDENCE, EN_RELATIONSHIP, DE_INDEPENDENCE } from '../lib/terminology-rules.mjs';
export function normalisePrivateClientLanguage(text, lang) {
 const extraEN = [
 ['One broker, several risks, reviewed together — high-value homes, cars, art and collections.','One coordinated review of homes, possessions, health and family responsibilities.'],
 ['Collections &amp; Valuables</a>','Private Clients</a>'],
 ['Collections & Valuables</a>','Private Clients</a>'],
 ];
 const extraDE = [
 ['href="/de/private-clients-portugal/">Private Clients','href="/de/private-clients/">Private Clients · Portugal &amp; Spanien'],
 ];
 const rules=lang==='de'?[...DE_INDEPENDENCE,...extraDE]:[...EN_BROKER,...EN_INDEPENDENCE,...EN_RELATIONSHIP,...extraEN];
 // Keep URLs and existing fragment identifiers stable, including SEO slugs.
 const formCopy=[];
 text=text.replace(/<form\b[^>]*>[\s\S]*?<\/form>|<div class="lp-form-trust">[\s\S]*?<\/div>/g,m=>`__QUOTE_COPY_${formCopy.push(m)-1}__`);
 const parked=[];
 text=text.replace(/\b(?:href|id|src)="[^"]*"/g,m=>`__PC_ATTR_${parked.push(m)-1}__`);
 for(const [from,to] of rules) text=text.split(from).join(to);
 text=text.replace(/__PC_ATTR_(\d+)__/g,(_,i)=>parked[Number(i)]);
 text=text.replace(/__QUOTE_COPY_(\d+)__/g,(_,i)=>formCopy[Number(i)]);
 return text;
}
