/**
 * October 2026 HNW pages, Italian.
 *   IPMI_PAGE          /it/allianz-care-vs-cigna-global-assicurazione-sanitaria-internazionale/  (cluster: ipmi)
 *   CLASSIC_CARS_PAGE  /it/assicurazione-auto-epoca-alto-valore-portogallo-spagna/              (cluster: classic-cars)
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { sec, table, ul, p, PUBLISHED_OCT } from '../lib/hnw-oct-sections.mjs';

export const IPMI_PAGE = {
  slug: 'allianz-care-vs-cigna-global-assicurazione-sanitaria-internazionale',
  url: '/it/allianz-care-vs-cigna-global-assicurazione-sanitaria-internazionale/',
  cluster: 'ipmi',
  title: 'Allianz Care o Cigna Global: sanità internazionale | Adler & Rochefort',
  description:
    'Allianz Care o Cigna Global? Come si confrontano le due assicurazioni sanitarie internazionali per famiglie in Portogallo e Spagna: livelli, Stati Uniti, moduli.',
  keywords:
    'Allianz Care vs Cigna Global, assicurazione sanitaria internazionale Portogallo, assicurazione sanitaria internazionale Spagna, polizza sanitaria expat, Cigna Global Portogallo, Allianz Care Spagna, copertura sanitaria Stati Uniti',
  eyebrow: 'Sanità internazionale · Portogallo e Spagna',
  h1: 'Allianz Care o Cigna Global: l’assicurazione sanitaria internazionale per famiglie in Portogallo e Spagna',
  standfirst:
    'Per molte famiglie basta una polizza portoghese o spagnola. Chi vive tra Lisbona, Milano e New York, o vuole potersi curare nel miglior ospedale per ogni malattia, ha bisogno di un’assicurazione sanitaria internazionale. Mettiamo a confronto due dei piani su cui ci vengono poste più domande.',
  published: PUBLISHED_OCT,
  modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Allianz Care o Cigna Global' }],
  pullquote: 'La domanda non è quale polizza sia migliore. È dove volete potervi curare.',
  schemaType: 'Article',
  formHeading: 'Richiedete un confronto scritto',
  formBranch: 'IT · Salute',
  formSubject: 'Allianz Care o Cigna Global',
  formCta: 'Richiedere il confronto',
  formIntro:
    'Diteci chi deve essere assicurato, dove vive la famiglia e dove vorreste potervi curare — Italia e Stati Uniti compresi. Vi rispondiamo per iscritto con i due piani configurati per voi.',
  formPlaceholder:
    'Ad esempio: coppia di 52 e 49 anni con una figlia all’università a Londra, residenti a Cascais, spesso a Milano, con il desiderio di avere copertura anche negli Stati Uniti.',
  sections: [
    sec('plain', 'locale-o-internazionale', 'Polizza locale o assicurazione internazionale?', `${p('Le polizze sanitarie private portoghesi e spagnole sono costruite intorno a una rete nazionale di ospedali e cliniche. Funzionano bene per chi si cura dove vive, ma hanno limiti che pesano su una famiglia dalla vita internazionale:')}
${ul([
      '<strong>Massimali annui</strong> per garanzia, sufficienti per la quotidianità e talvolta stretti per una lunga cura oncologica o un intervento complesso.',
      '<strong>Copertura all’estero</strong> di solito limitata alle urgenze in viaggio: le cure programmate in un altro Paese restano fuori.',
      '<strong>Condizioni di adesione:</strong> in Portogallo le compagnie chiedono NIF e indirizzo portoghese per contraente e assicurati, e molti piani hanno un’età massima di ingresso.',
    ])}
${p('Un’assicurazione internazionale (IPMI) funziona al contrario: massimali in milioni, cure programmate nell’area scelta — Europa, mondo esclusi gli Stati Uniti o mondo intero, Italia compresa — e una polizza che segue la famiglia se si trasferisce di nuovo. Evacuazione e rimpatrio sanitario fanno parte del progetto.')}`),
    sec('tint', 'allianz-care', 'Allianz Care: la nuova gamma', `${p('Allianz Care è il marchio di sanità internazionale di Allianz Partners. Nel novembre 2025 ha lanciato una nuova gamma per privati e famiglie che vivono fuori dal proprio Paese da almeno dodici mesi, distribuita soprattutto nell’Unione europea e nel Regno Unito.')}
${ul([
      '<strong>Tre piani base: Base, Enhanced e Signature</strong>, tutti con ricovero, camera singola e rimpatrio sanitario inclusi.',
      '<strong>Maternità</strong> in Enhanced e Signature, dopo una carenza di dodici mesi.',
      '<strong>Cure ambulatoriali e odontoiatria</strong> come garanzie facoltative.',
      '<strong>Screening oncologici, check-up e terapia ormonale sostitutiva</strong> in tutta la gamma; psichiatria e psicoterapia ambulatoriali senza carenza.',
      '<strong>Un’area di copertura solo Europa</strong>, accanto alle opzioni mondiali.',
    ])}`),
    sec('plain', 'cigna-global', 'Cigna Global: un piano modulare', `${p('Cigna Global è la polizza internazionale individuale di Cigna Healthcare e si costruisce a strati:')}
${ul([
      '<strong>Tre livelli di copertura base: Silver, Gold e Platinum</strong> — ricovero, cure specialistiche in ospedale, oncologia e psichiatria in regime di ricovero. Platinum ha il massimale annuo più alto, senza tetto fisso.',
      '<strong>Quattro moduli facoltativi:</strong> ambulatoriale internazionale, evacuazione sanitaria, salute e benessere, vista e odontoiatria.',
      '<strong>Area di copertura:</strong> mondo esclusi gli Stati Uniti, o mondo inclusi gli Stati Uniti.',
      '<strong>Franchigia e scoperto</strong> a scelta, con un massimo annuo a carico dell’assicurato: la leva principale sul premio.',
      '<strong>Maternità</strong> in Gold e Platinum, dopo dodici mesi di copertura.',
    ])}`),
    sec('tint', 'confronto', 'Il confronto', `${table('Allianz Care e Cigna Global a confronto', ['', 'Allianz Care', 'Cigna Global'], [
      ['Livelli base', 'Base, Enhanced, Signature', 'Silver, Gold, Platinum'],
      ['Ricovero, camera singola', 'In tutti i piani', 'Nella copertura base'],
      ['Rimpatrio / evacuazione', 'Rimpatrio in tutti i piani', 'Modulo facoltativo di evacuazione'],
      ['Ambulatoriale', 'Facoltativo', 'Modulo facoltativo'],
      ['Odontoiatria', 'Facoltativa', 'Modulo facoltativo (con vista)'],
      ['Maternità', 'Enhanced e Signature, dopo 12 mesi', 'Gold e Platinum, dopo 12 mesi'],
      ['Area di copertura', 'Anche solo Europa, oltre alle opzioni mondiali', 'Mondo senza USA o con USA'],
      ['Leve sul premio', 'Livello, area, garanzie facoltative', 'Franchigia, scoperto, area, moduli'],
    ])}
${p('Massimali, carenze ed esclusioni dipendono dal livello e sono indicati nella tabella delle prestazioni di ciascuna compagnia. Le inviamo con ogni confronto.')}`),
    sec('plain', 'chi', 'A quale famiglia si adatta ciascuno', ul([
      '<strong>Una vita in Europa</strong> — casa a Lisbona o a Marbella, lavoro e scuola in Europa, viaggi frequenti in Italia: spesso Allianz Care con area Europa o mondo senza Stati Uniti, con il rimpatrio già incluso.',
      '<strong>Un piede negli Stati Uniti</strong> — una casa a Miami, figli che studiano a New York: serve la copertura mondiale con gli Stati Uniti, ed è lì che i premi dei due piani differiscono di più per lo stesso profilo. Conviene quotarli entrambi.',
      '<strong>Solo per il grande rischio:</strong> Cigna Global con franchigia alta e scoperto, pagando di tasca propria le spese correnti.',
      '<strong>Una storia clinica:</strong> entrambe le compagnie valutano un questionario sanitario e possono escludere una patologia preesistente o applicare un sovrappremio. La risposta può essere diversa per ciascuna.',
    ])),
    sec('tint', 'visti', 'Visti e residenza in Portogallo e Spagna', p(
      'In <strong>Portogallo</strong> l’assicurazione internazionale è usata spesso per dimostrare la copertura sanitaria nei visti di residenza come il D7 o il D8. Per il <strong>visto di residenza non lucrativa</strong> spagnolo, i consolati richiedono di norma una compagnia autorizzata a operare in Spagna, copertura completa e nessuno scoperto né carenza: non tutte le configurazioni di un piano internazionale rispettano questi requisiti, quindi il piano va impostato pensando al visto.',
      'Per chi vive tra i due Paesi, una polizza internazionale significa un solo contratto, la stessa copertura a Lisbona e a Madrid e nessun cambio di compagnia al prossimo trasloco.'
    )),
    sec('plain', 'lista', 'Lista di controllo', ul([
      'Decidete dove volete curarvi: Europa, mondo senza Stati Uniti o mondo intero.',
      'Scegliete prima il livello base, poi aggiungete ambulatoriale, odontoiatria ed evacuazione.',
      'Impostate la franchigia con consapevolezza: è la leva principale sul premio.',
      'Se pensate a un figlio, scegliete subito un livello con maternità: la carenza parte dal primo giorno.',
      'Dichiarate la storia clinica per intero e chiedete prima come la tratterebbe ciascuna compagnia.',
      'Per un visto spagnolo, configurate il piano sui requisiti del consolato prima di sottoscriverlo.',
    ])),
  ].join('\n'),
  faqTitle: 'Allianz Care e Cigna Global — domande',
  faq: [
    { q: 'È meglio Allianz Care o Cigna Global?', a: '<p>Nessuno dei due è migliore in assoluto. Allianz Care include ricovero e rimpatrio in tutti i piani e offre un’area solo Europa; Cigna Global è modulare, con franchigie e scoperti flessibili e la scelta tra copertura con o senza Stati Uniti. Contano il luogo in cui la famiglia vive, viaggia e vuole curarsi, e le condizioni che ciascuna compagnia offre per la sua storia clinica.</p>' },
    { q: 'Mi serve la copertura negli Stati Uniti?', a: '<p>Solo se prevedete di curarvi lì al di fuori di un’urgenza in viaggio. L’area con gli Stati Uniti è la più costosa in entrambi i piani e ha senso quando c’è una ragione concreta.</p>' },
    { q: 'Sono coperto anche in Italia?', a: '<p>Sì, con un’area mondiale o europea le cure programmate in Italia rientrano nella copertura, alle condizioni del piano.</p>' },
    { q: 'La maternità è coperta da subito?', a: '<p>No. Solo nei livelli superiori — Enhanced e Signature per Allianz Care, Gold e Platinum per Cigna Global — e dopo dodici mesi di copertura.</p>' },
  ],
  related: [
    { url: '/it/assicurazione-sanitaria-internazionale/', label: 'Assicurazione sanitaria in Portogallo' },
    { url: '/it/trasferirsi-in-portogallo-assicurazioni/', label: 'Trasferirsi in Portogallo' },
    { url: '/it/assicurazione-auto-epoca-alto-valore-portogallo-spagna/', label: 'Auto d’epoca e di alto valore' },
    { url: '/it/assicurazione-family-office/', label: 'Family office' },
  ],
};

export const CLASSIC_CARS_PAGE = {
  slug: 'assicurazione-auto-epoca-alto-valore-portogallo-spagna',
  url: '/it/assicurazione-auto-epoca-alto-valore-portogallo-spagna/',
  cluster: 'classic-cars',
  title: 'Auto d’epoca e di alto valore in Portogallo e Spagna | Adler & Rochefort',
  description:
    'Assicurare un’auto d’epoca o di alto valore in Portogallo e Spagna: veicoli storici, valore concordato, collezioni, uso in pista e targhe straniere.',
  keywords:
    'assicurazione auto d’epoca Portogallo, assicurazione auto storica Spagna, valore concordato auto, assicurazione collezione auto, assicurazione supercar Marbella, veicolo storico Spagna, targa italiana Portogallo',
  eyebrow: 'Private Clients · Automobili',
  h1: 'Auto d’epoca e di alto valore in Portogallo e Spagna: status storico, valore concordato e collezioni',
  standfirst:
    'Il clima risparmia la carrozzeria, le strade di montagna sembrano disegnate per una sportiva degli anni Sessanta e sulla Costa del Sol circolano più supercar che quasi ovunque in Europa. Una polizza auto ordinaria non è stata scritta per nessuna di queste vetture.',
  published: PUBLISHED_OCT,
  modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Auto d’epoca e di alto valore' }],
  pullquote: 'Dopo un danno totale, la polizza ordinaria paga quanto vale un’auto vecchia. Quella di un’auto d’epoca paga quanto vale la vostra.',
  schemaType: 'Article',
  formHeading: 'Richiedete un’analisi scritta delle vostre auto',
  formBranch: 'IT · Auto',
  formSubject: 'Auto d’epoca e di alto valore',
  formCta: 'Richiedere l’analisi',
  formIntro:
    'Inviateci l’elenco delle auto — marca, modello, anno, dove sono custodite e come vengono usate — e le perizie che avete. Vi rispondiamo per iscritto: quanto pagherebbe oggi la polizza dopo un danno totale e quanto dovrebbe pagare.',
  formPlaceholder:
    'Ad esempio: una Lancia Fulvia del 1971, una Ferrari degli anni Novanta su targa italiana, garage chiuso a Comporta, raduni del club due volte l’anno.',
  sections: [
    sec('plain', 'portogallo', 'Portogallo: i veicoli di interesse storico', p(
      'In Portogallo un’auto con almeno trent’anni, fuori produzione, in buono stato e senza modifiche significative può essere certificata come <em>veículo de interesse histórico</em> da enti riconosciuti — tra cui ACP Clássicos, il Clube Português de Automóveis Antigos e il Museu do Caramulo. I veicoli certificati con più di trent’anni sono esentati dalla revisione periodica dal 2018 e, a determinate condizioni, possono beneficiare dell’esenzione dalla tassa di circolazione (IUC), da verificare caso per caso. Per l’assicurazione il certificato è soprattutto una prova di originalità e di stato.'
    )),
    sec('tint', 'spagna', 'Spagna: il nuovo regolamento dei veicoli storici', `${p('Dal 1° ottobre 2024 in Spagna è in vigore un nuovo <em>Reglamento de Vehículos Históricos</em>:')}
${ul([
      'può essere storico il veicolo costruito o immatricolato per la prima volta da almeno trent’anni, fuori produzione e conservato in stato originale;',
      'molte auto mantengono la targa ordinaria ed espongono un contrassegno giallo con una «H»; altre sono registrate come storiche presso la Jefatura de Tráfico dopo una relazione tecnica;',
      'la revisione ITV si dirada: ogni due anni tra i 30 e i 40, ogni tre tra i 40 e i 45, ogni quattro oltre i 45; oltre i 60 anni è esentata;',
      'le modifiche non originali vanno certificate da un club o ente legato ai veicoli storici.',
    ])}`),
    sec('plain', 'valore', 'Valore concordato, non valore commerciale', `${ul([
      '<strong>Valore commerciale</strong> (<em>valor venal</em>): è ciò che paga una polizza ordinaria dopo un danno totale, stabilito dalla compagnia dopo il sinistro. Per un’auto d’epoca è quasi sempre basso.',
      '<strong>Valore concordato:</strong> si fissa alla sottoscrizione, sulla base di una perizia recente, fotografie e documenti, ed è ciò che si incassa in caso di danno totale.',
    ])}
${p('I valori delle buone auto d’epoca sono cambiati molto in quindici anni: il valore concordato va rivisto ogni pochi anni e dopo ogni restauro. Per una supercar moderna le domande sono altre: valore a nuovo nei primi anni, trattamento di optional e personalizzazioni, ricambi originali e officina ufficiale.')}`),
    sec('tint', 'collezione', 'Una collezione, non un elenco di auto', p(
      'Un collezionista raramente ha una sola auto. Una polizza collezione tratta il garage come un insieme: un unico contratto con valori concordati, auto ferme o in restauro coperte contro incendio, furto e danni senza pagare una circolazione che non usano, conducenti designati, trasporto su carrello o con vettore specializzato, e il garage stesso — antincendio e sicurezza — come parte del rischio. Alcuni prodotti per auto di lusso vengono sottoscritti solo insieme all’assicurazione della casa: una ragione in più per guardare al patrimonio nel suo insieme.'
    )),
    sec('plain', 'uso', 'Come viene usata l’auto', ul([
      '<strong>Chilometraggio e finalità:</strong> le polizze per auto d’epoca presuppongono un uso da tempo libero e chilometri annui limitati.',
      '<strong>Rally di regolarità, concorsi d’eleganza e raduni</strong> su strada aperta sono di norma assicurabili; gare cronometrate e circuito no.',
      '<strong>Track day</strong> — Autódromo do Algarve, Estoril, Ascari — esclusi da quasi tutte le polizze stradali: serve una copertura specifica per quella giornata.',
      '<strong>Furto keyless:</strong> per le auto moderne di alto valore le compagnie chiedono di garage, localizzatore e custodia delle chiavi.',
    ])),
    sec('tint', 'targhe', 'Targhe italiane e trasferimento', p(
      'Molte auto arrivano con il proprietario su targa italiana. In Portogallo e in Spagna chi diventa residente deve reimmatricolare l’auto entro termini definiti, con ispezione e imposte — in Portogallo con la procedura d’importazione e l’ISV, in Spagna presso la DGT. Fino ad allora va chiarito cosa consente la polizza italiana, per quanto tempo e cosa accade dopo un sinistro. Per un’auto d’epoca il trasferimento è spesso il momento giusto per affrontare insieme immatricolazione e status storico.'
    )),
    sec('plain', 'lista', 'Lista di controllo', ul([
      'Valore concordato per ogni auto, con una perizia di meno di tre anni.',
      'Ricambi originali e officine specializzate previsti in polizza.',
      'Auto ferme e auto dal restauratore incluse.',
      'Rally, raduni e trasporto su carrello confermati per iscritto; track day assicurati a parte.',
      'Garage, sicurezza e chiavi descritti con precisione.',
      'Targa straniera: tempi della reimmatricolazione e copertura fino ad allora concordati prima del trasferimento.',
    ])),
  ].join('\n'),
  faqTitle: 'Auto d’epoca e di alto valore — domande',
  faq: [
    { q: 'Un’auto d’epoca ha bisogno di un’assicurazione speciale?', a: '<p>La responsabilità civile obbligatoria vale per qualsiasi veicolo in circolazione. Cambia il resto della polizza: quella per un’auto d’epoca assicura a valore concordato, presuppone un uso limitato da tempo libero e riconosce gli eventi del club.</p>' },
    { q: 'Che differenza c’è tra valore concordato e valore commerciale?', a: '<p>Il valore concordato si fissa alla sottoscrizione, sulla base di una perizia, e si incassa dopo un danno totale. Il valore commerciale lo stabilisce la compagnia dopo il sinistro e per un’auto d’epoca è di solito molto più basso.</p>' },
    { q: 'I track day sono coperti?', a: '<p>Quasi mai da una polizza stradale. Gare e giornate in pista sono esclusioni abituali e richiedono una copertura specifica.</p>' },
    { q: 'Posso assicurare più auto con una sola polizza?', a: '<p>Sì. Una polizza collezione copre tutte le auto con valori concordati, conducenti designati e copertura per le auto ferme, in trasporto o in restauro.</p>' },
  ],
  related: [
    { url: '/it/assicurazione-auto-portogallo/', label: 'Assicurazione auto in Portogallo' },
    { url: '/it/assicurazione-casa-alto-valore/', label: 'Assicurazione casa di alto valore' },
    { url: '/it/allianz-care-vs-cigna-global-assicurazione-sanitaria-internazionale/', label: 'Allianz Care o Cigna Global' },
    { url: '/it/golf-ville-lusso-portogallo-spagna/', label: 'Golf e ville di lusso' },
  ],
};
