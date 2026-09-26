/**
 * /it/assicurazione-sanitaria-internazionale/
 *
 * Search intent: "assicurazione sanitaria Portogallo" / "assicurazione
 * sanitaria internazionale" — an Italian family working out how healthcare
 * access works in Portugal (and Spain) and whether private cover is needed.
 *
 * Italian-specific hooks: the SSN and the tessera sanitaria (whose back is the
 * TEAM, the Italian EHIC) are the reference frame; registration in AIRE is the
 * event that ends the SSN registration with the ASL; the TEAM is what people
 * wrongly keep relying on; and the S1 matters for INPS pensioners. We do not
 * interpret Italian rules — every statement about them is hedged and points
 * to the ASL / INPS. Underwriting and pre-existing conditions hedged
 * throughout. Short form, pre-selected on "IT · Salute" (no wizard: see
 * home.mjs).
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const HEALTH_PAGE = {
  slug: 'assicurazione-sanitaria-internazionale',
  url: '/it/assicurazione-sanitaria-internazionale/',
  cluster: 'health',
  title: 'Assicurazione sanitaria internazionale | Adler & Rochefort',
  description:
    'Assicurazione sanitaria privata internazionale per famiglie in Portogallo e Spagna: libera scelta del medico, cure all’estero, SNS, AIRE e tessera TEAM.',
  keywords:
    'assicurazione sanitaria Portogallo, assicurazione sanitaria internazionale, assicurazione sanitaria famiglia Portogallo, sanità privata Portogallo, SNS Portogallo, AIRE assistenza sanitaria, tessera TEAM Portogallo, modello S1 Portogallo, italiani a Lisbona sanità',
  eyebrow: 'Assicurazione sanitaria internazionale',
  h1: 'Assicurazione sanitaria in Portogallo: copertura privata internazionale per la famiglia',
  standfirst:
    'Per una famiglia che vive tra Portogallo, Spagna e Italia, l’assicurazione sanitaria significa libera scelta di medico e ospedale — anche fuori dal Portogallo. Ecco come funziona una polizza internazionale, come si affianca al servizio pubblico e che cosa chiede la compagnia prima di assicurare.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Assicurazione sanitaria' }],
  pullquote: 'L’assicurazione sanitaria si sottoscrive quando si sta bene. Dopo, si compra solo ciò che la compagnia decide di offrire.',
  schemaType: 'Article',
  formHeading: 'Richiesta di assicurazione sanitaria',
  formBranch: 'IT · Salute',
  formSubject: 'Assicurazione sanitaria internazionale',
  formCta: 'Invii la richiesta',
  formIntro:
    'Ci indichi chi deve essere assicurato, l’età di ciascuno e dove vive e viaggia la famiglia. Non ci invii informazioni mediche: la dichiarazione sullo stato di salute si compila direttamente con la compagnia, al momento dell’adesione.',
  formPlaceholder:
    'Per esempio: due adulti (46 e 43 anni) e due figli, residenti a Lisbona, spesso in Italia e in Spagna; cerchiamo una copertura europea con libera scelta dell’ospedale.',
  sections: `
<section class="section plain" aria-labelledby="internazionale">
  <div class="container narrow article-body">
    <h2 id="internazionale">Assicurazione sanitaria internazionale per famiglie</h2>
    <p>Una polizza sanitaria portoghese è di solito costruita per un solo paese e una sola rete di strutture. Per una famiglia con case in più paesi, figli a scuola o all’università all’estero e soggiorni regolari in Italia, raramente basta. Qui il punto di partenza naturale è una <strong>assicurazione sanitaria privata internazionale</strong>:</p>
    <ul>
      <li><strong>Libera scelta di medico e ospedale</strong> — in Portogallo, in Spagna e all’estero, non solo all’interno di una rete locale.</li>
      <li><strong>Massimali annui elevati</strong> per ricoveri, interventi e malattie gravi, così che la copertura non si esaurisca a metà di un percorso di cura.</li>
      <li><strong>Area geografica su misura</strong> — Europa o tutto il mondo, con o senza Stati Uniti.</li>
      <li><strong>Evacuazione e rimpatrio</strong> quando le cure necessarie non sono disponibili dove ci si trova.</li>
      <li><strong>Un’unica polizza per tutta la famiglia</strong>, che segue i trasferimenti da un paese all’altro.</li>
    </ul>
    <p>Quale soluzione sia adatta — internazionale o portoghese, ampia o più mirata — dipende da dove la famiglia vive e viaggia, dall’età e dalla valutazione sanitaria. Confrontiamo le condizioni e Le diamo la raccomandazione per iscritto. Il servizio pubblico portoghese e il SSN italiano sono spiegati qui sotto, perché determinano che cosa la polizza privata deve integrare.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="sns">
  <div class="container narrow article-body">
    <h2 id="sns">SNS — il servizio sanitario pubblico portoghese</h2>
    <p>Il <em>Serviço Nacional de Saúde</em> è il servizio sanitario pubblico portoghese, accessibile a chi risiede legalmente nel paese. Vi si accede iscrivendosi al centro di salute (<em>centro de saúde</em>) del proprio indirizzo — di norma con NIF, documento d’identità, prova di residenza e titolo di soggiorno o certificato di registrazione UE. Con l’iscrizione si riceve un <em>número de utente</em>, il numero di assistito, e, secondo disponibilità, l’assegnazione a un <em>médico de família</em>.</p>
    <p>La logica è familiare a chi viene dal SSN: il medico di famiglia è la porta d’ingresso e l’invio porta allo specialista. La differenza pratica è che l’assegnazione a un medico non è automatica e in alcune zone si attende. I tempi per le visite specialistiche e gli interventi programmati variano molto tra regioni e specialità.</p>
    <p>Le cure urgenti sono accessibili in ogni caso e le compartecipazioni del SNS (<em>taxas moderadoras</em>) sono basse, con ampie esenzioni. Non è quindi un sistema da cui assicurarsi: è un sistema di cui si vogliono poter evitare le code quando un problema è importante ma non urgente.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="aire">
  <div class="container narrow article-body">
    <h2 id="aire">AIRE, tessera TEAM e modello S1</h2>
    <p>È la parte che più spesso si salta perché sembra una formalità. Decide invece se nei primi mesi Lei ha accesso alle cure.</p>
    <h3>L’iscrizione all’AIRE</h3>
    <p>Chi trasferisce la residenza all’estero per più di dodici mesi è tenuto a iscriversi all’Anagrafe degli Italiani Residenti all’Estero. L’iscrizione comporta di regola la cancellazione dal Servizio Sanitario Nazionale presso la propria ASL, e con essa il diritto all’assistenza sanitaria ordinaria in Italia; per alcune categorie restano prestazioni limitate durante i soggiorni temporanei. Conviene chiarire per iscritto la propria situazione con l’ASL <em>prima</em> del trasferimento. Siamo intermediari assicurativi e non interpretiamo la normativa italiana: lo segnaliamo perché è la data che decide dove cade la lacuna.</p>
    <h3>La tessera TEAM</h3>
    <p>Il retro della tessera sanitaria è la TEAM, la tessera europea di assicurazione malattia. Serve per i <strong>soggiorni temporanei</strong> — vacanze, viaggi di lavoro, brevi visite — e non è un titolo di cura per chi ha trasferito la residenza in un altro paese. Dopo il trasferimento in Portogallo e la cancellazione dal SSN, la tessera non svolge più quella funzione, anche se è ancora nel portafoglio con una data di scadenza futura.</p>
    <h3>Il modello S1</h3>
    <p>Per alcune categorie — in particolare i pensionati con pensione italiana e i lavoratori distaccati — esiste un meccanismo europeo per cui il diritto alle cure si trasferisce: il modello S1, rilasciato dall’ente del paese che resta competente. Registrato in Portogallo, dà accesso al SNS alle stesse condizioni dei residenti. È coordinamento della sicurezza sociale, non un’assicurazione privata: non rilasciamo questi attestati e non assistiamo nelle pratiche presso INPS o ASL. Lo citiamo perché molti pensionati italiani non conoscono questa possibilità, e perché cambia l’intero calcolo.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="privata">
  <div class="container narrow article-body">
    <h2 id="privata">Com’è fatta una polizza privata</h2>
    <p>L’assicurazione sanitaria privata portoghese si basa di solito su una <strong>rete convenzionata</strong> (<em>rede convencionada</em>): all’interno della rete si paga una piccola quota fissa per visita o esame; fuori rete vale il rimborso secondo tariffa, di norma con una quota a carico più alta. La rete è quindi una delle prime domande che poniamo. Una polizza con un ottimo tariffario e nessun ospedale nel raggio di cento chilometri non è una buona polizza.</p>
    <p>La copertura comprende tipicamente visite e accertamenti, ricoveri e interventi e, a seconda della formula, cure dentarie, gravidanza e parto, fisioterapia, medicine alternative, cure all’estero e second opinion. Ogni modulo ha il proprio massimale annuo e la propria compartecipazione.</p>
    <ul>
      <li><strong>Massimale annuo (<em>capital</em>)</strong> — distinto per cure ambulatoriali e ospedaliere, spesso con importi molto diversi.</li>
      <li><strong>Compartecipazione (<em>copagamento</em>)</strong> — importo o percentuale per prestazione; all’interno della rete di solito contenuta.</li>
      <li><strong>Periodi di carenza (<em>períodos de carência</em>)</strong> — veda sotto.</li>
      <li><strong>Copertura geografica</strong> — se la polizza vale durante i soggiorni in Italia, e in quale forma.</li>
      <li><strong>Età di ingresso ed età massima</strong> — limiti diversi da compagnia a compagnia, spesso decisivi.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="carenza">
  <div class="container narrow article-body">
    <h2 id="carenza">Carenze, valutazione sanitaria e patologie preesistenti</h2>
    <h3>Periodi di carenza</h3>
    <p>Quasi tutte le polizze sanitarie portoghesi prevedono periodi di carenza: intervalli dalla sottoscrizione durante i quali alcune coperture non sono ancora utilizzabili. Tipicamente più brevi per le visite, più lunghi per gli interventi programmati, i più lunghi per gravidanza e parto. La durata esatta dipende da compagnia e formula ed è indicata nelle condizioni — la comunichiamo sempre per iscritto prima della sottoscrizione, perché decide se la polizza ha senso proprio adesso.</p>
    <h3>Valutazione sanitaria (<em>questionário clínico</em>)</h3>
    <p>Alla sottoscrizione si compila un questionario sanitario. A volte vengono richiesti documenti clinici o una visita. Su questa base la compagnia decide: accettazione a condizioni normali, accettazione con esclusione di determinate patologie, accettazione con sovrappremio, oppure rifiuto. Non influiamo su questa decisione e non promettiamo alcun esito.</p>
    <div class="callout">
      <span class="callout-label">Il punto più importante di questa pagina</span>
      Le patologie presenti prima della sottoscrizione (<em>doenças pré-existentes</em>) sono nelle polizze sanitarie portoghesi <strong>di norma escluse</strong>. Esistono formule e piani collettivi in cui una parte può essere inclusa dopo un periodo o dopo una valutazione individuale — dipende da compagnia, formula ed esito della valutazione, e non è mai stabilito in anticipo. Allo stesso tempo, le omissioni nel questionario sanitario sono la via più rapida verso il rifiuto di un sinistro. Rispondiamo con esattezza e cerchiamo la copertura effettivamente possibile.
    </div>
    <h3>Perché l’età conta così tanto</h3>
    <p>Il premio cresce con l’età, e oltre certi limiti alcune compagnie non sottoscrivono più nuove polizze. C’è poi una ragione più semplice: più si aspetta, più è probabile che qualcosa sia già stato diagnosticato e diventi quindi una patologia preesistente. Un sessantenne in buona salute ha di norma un mercato aperto. La stessa persona due anni e una diagnosi dopo, non necessariamente.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="famiglia">
  <div class="container narrow article-body">
    <h2 id="famiglia">Copertura per la famiglia</h2>
    <p>Una polizza familiare copre di norma il coniuge o il convivente e i figli fino a una certa età, spesso con uno sconto in base al numero di persone. Gli aspetti con maggiore rilevanza pratica:</p>
    <ul>
      <li><strong>Ogni persona è valutata separatamente.</strong> È del tutto possibile che una sia accettata a condizioni normali e un’altra con l’esclusione di una patologia specifica.</li>
      <li><strong>Figli</strong> — verifichi se vaccinazioni, controlli e cure dentarie sono inclusi, e fino a che età il figlio può restare nella polizza familiare.</li>
      <li><strong>Figli che studiano all’estero</strong> — la copertura geografica deve seguirli, non solo il paese di residenza dei genitori.</li>
      <li><strong>Gravidanza e parto</strong> hanno di norma la carenza più lunga. La pianificazione familiare è uno dei pochi casi in cui la data di sottoscrizione va calcolata sul serio.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="soggiorno">
  <div class="container narrow article-body">
    <h2 id="soggiorno">Assicurazione e pratiche di soggiorno</h2>
    <p>Per i cittadini italiani, come cittadini dell’Unione, la registrazione della residenza in Portogallo segue regole diverse da quelle dei visti. Ma riceviamo spesso la domanda da familiari non comunitari o per pratiche specifiche, e la risposta deve essere prudente. <strong>Non possiamo confermare che una polizza soddisfi i requisiti di una determinata pratica di soggiorno o di visto.</strong> I requisiti sono fissati dalle autorità, variano secondo il tipo di domanda e la situazione del richiedente e possono cambiare. La valutazione spetta all’autorità, l’interpretazione delle regole a un consulente legale.</p>
    <p>Che cosa possiamo fare: procurare un’assicurazione sanitaria con una determinata copertura, determinati massimali e una determinata area geografica, e consegnare la documentazione e la conferma per iscritto. Se il Suo consulente indica un requisito minimo di copertura, adattiamo l’offerta a quel requisito e segnaliamo con chiarezza che cosa la polizza copre e che cosa no.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="checklist">
  <div class="container narrow article-body">
    <h2 id="checklist">Checklist</h2>
    <ol class="process-steps">
      <li><div><strong>Iscrizione al SNS</strong><span> completata o pianificata: <em>centro de saúde</em>, <em>número de utente</em>.</span></div></li>
      <li><div><strong>La Sua posizione italiana</strong><span> chiarita per iscritto con l’ASL, e verificato se il modello S1 La riguarda.</span></div></li>
      <li><div><strong>La rete convenzionata</strong><span> comprende ospedali e cliniche a distanza ragionevole da casa.</span></div></li>
      <li><div><strong>I periodi di carenza</strong><span> sono noti per ogni copertura che conta — soprattutto per interventi programmati o gravidanza.</span></div></li>
      <li><div><strong>Il questionario sanitario</strong><span> è stato compilato con esattezza, e la decisione della compagnia è per iscritto prima dell’avvio della polizza.</span></div></li>
      <li><div><strong>Massimale annuo e compartecipazione</strong><span> sono chiari, separatamente per cure ambulatoriali e ospedaliere.</span></div></li>
      <li><div><strong>Soggiorni in Italia</strong><span>: sa se e come la polizza copre fuori dal Portogallo.</span></div></li>
    </ol>
  </div>
</section>`,
  faqTitle: 'Assicurazione sanitaria in Portogallo — domande',
  faq: [
    {
      q: 'Che differenza c’è tra un’assicurazione sanitaria internazionale e una portoghese?',
      a: '<p>Una polizza portoghese è di solito costruita su una rete locale di strutture e copre principalmente in Portogallo. Una polizza internazionale offre libera scelta di medico e ospedale in più paesi, massimali annui più elevati e spesso evacuazione e rimpatrio. Per le famiglie che vivono tra più paesi è in genere la soluzione più adatta; che cosa si possa sottoscrivere dipende da età e valutazione sanitaria.</p>',
    },
    {
      q: 'Ho diritto alle cure pubbliche come residente in Portogallo?',
      a: '<p>Chi risiede legalmente può iscriversi al SNS presso il centro di salute del proprio indirizzo e ottenere un <em>número de utente</em>. I documenti richiesti variano leggermente tra centri; di norma NIF, documento d’identità, prova di residenza e certificato di registrazione. Le condizioni di accesso sono stabilite dalle autorità, non dalla compagnia assicurativa.</p>',
    },
    {
      q: 'Una polizza privata copre una malattia che ho già?',
      a: '<p>Di norma no: le patologie presenti prima della sottoscrizione sono per lo più escluse nelle polizze sanitarie portoghesi. In alcune formule e nei piani collettivi una parte può essere inclusa dopo un periodo o dopo una valutazione individuale, ma dipende da compagnia e formula e non è mai garantito. Compiliamo sempre il questionario con esattezza e cerchiamo la copertura effettivamente possibile.</p>',
    },
    {
      q: 'Posso usare la tessera TEAM dopo il trasferimento?',
      a: '<p>No. La TEAM vale per i soggiorni temporanei, non per chi ha trasferito la residenza. Dopo il trasferimento la base è l’iscrizione al SNS come residente e, in alcuni casi — per esempio i pensionati con pensione italiana — il modello S1.</p>',
    },
    {
      q: 'Che cosa succede con il SSN quando mi iscrivo all’AIRE?',
      a: '<p>Di regola l’iscrizione all’AIRE comporta la cancellazione dal Servizio Sanitario Nazionale presso la propria ASL; per alcune categorie restano prestazioni limitate durante i soggiorni in Italia. Non interpretiamo la normativa italiana: verifichi la Sua situazione per iscritto con l’ASL prima del trasferimento, e scelga una polizza che copra anche i soggiorni in Italia se sono frequenti.</p>',
    },
    {
      q: 'Quanto durano i periodi di carenza?',
      a: '<p>Variano tra compagnie e formule: più brevi per le visite, più lunghi per gli interventi programmati, i più lunghi per gravidanza e parto. La durata esatta risulta dalle condizioni dell’offerta concreta, e la comunichiamo per iscritto prima della sottoscrizione.</p>',
    },
    {
      q: 'La polizza mi copre quando sono in Italia?',
      a: '<p>Dipende dalla copertura geografica. Alcune polizze sanitarie portoghesi coprono le cure all’estero con rimborso successivo, altre si limitano ai casi urgenti, altre valgono solo in Portogallo. Una polizza internazionale può includere l’Italia a pieno titolo. È una delle prime domande che poniamo, perché è decisiva per chi rientra regolarmente.</p>',
    },
  ],
  related: [
    { url: '/it/trasferirsi-in-portogallo-assicurazioni/', label: 'Trasferirsi in Portogallo: le assicurazioni nell’ordine giusto' },
    { url: '/it/guida-assicurazioni-portogallo/', label: 'Guida alle assicurazioni in Portogallo' },
  ],
};
