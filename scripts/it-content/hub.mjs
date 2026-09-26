/**
 * /it/ — the Italian market homepage, which is also the cluster hub.
 *
 * Audience: Italian families living in Lisbon, Cascais or Porto (often tax
 * residents), Italians buying in Spain (one of the largest foreign buyer
 * nationalities there) and Italians with a second home in the Algarve.
 *
 * The angle that makes this page Italian rather than translated: in Italy a
 * home is insured in pieces — "incendio e scoppio" (often the one the bank
 * demands with the mutuo), "furto" as a separate guarantee, the "RC
 * capofamiglia" as its own small policy, and the building's "globale
 * fabbricati" bought by the condominio. Portugal bundles building and
 * contents into one multirriscos habitação; Spain's seguro de hogar bundles
 * even more. And the vocabulary is deceptively familiar — "regola
 * proporzionale", "premio", "condominio" all exist in Italian — which is
 * exactly why the differences get missed.
 */
export const HUB_PAGE = {
  slug: 'it',
  url: '/it/',
  cluster: 'hub',
  isHub: true,
  title: 'Grandi patrimoni in Portogallo: assicurazioni | Adler & Rochefort',
  description:
    'Assicurazioni per famiglie italiane con patrimoni importanti in Portogallo e Spagna: casa, arte, RC milionaria e salute. Uffici a Lisbona e Lagos.',
  ogTitle: 'Assicurazioni per grandi patrimoni — Portogallo e Spagna',
  ogDescription:
    'Residenze, arte e collezioni, responsabilità civile e tutela della famiglia in Portogallo e Spagna. Sottoscrizione individuale e consulenza scritta.',
  keywords:
    'assicurazione Portogallo, assicurazioni Portogallo italiani, assicurazione casa Portogallo, assicurazione casa Spagna, assicurazione opere d’arte, private client assicurazione, assicurazione sanitaria internazionale, italiani a Lisbona assicurazione, intermediario assicurativo Portogallo',
  eyebrow: 'Private clients · Portogallo e Spagna',
  h1: 'Assicurazioni per<br><em>grandi patrimoni.</em>',
  standfirst:
    'Residenze, arte e collezioni, responsabilità civile e tutela della famiglia, in Portogallo e in Spagna. Sottoscrizione individuale, consulenza per iscritto e un unico interlocutore — dal primo contatto al sinistro.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T18:00:00+00:00',
  breadcrumb: [{ name: 'Home', url: '/it/' }],
  pullquote:
    'Una polizza non si giudica il giorno in cui si firma, ma il giorno in cui deve pagare.',
  schemaType: 'WebPage',
  formHeading: 'Richieda una valutazione scritta',
  formBranch: '',
  formSubject: 'Richiesta generale (IT)',
  formCta: 'Invii la richiesta',
  formIntro:
    'Ci dica che cosa desidera assicurare, oppure ci invii le polizze attuali. Le rispondiamo per iscritto: che cosa coprono, dove sono le lacune e che cosa Le consigliamo.',
  formPlaceholder:
    'Per esempio: appartamento a Lisbona e villa a Maiorca, una piccola collezione di dipinti, due figli che studiano all’estero — vorremmo una revisione delle polizze.',
  sections: `
<section class="section plain" aria-labelledby="chi">
  <div class="container narrow article-body">
    <h2 id="chi">Un intermediario per clienti privati in Portogallo e in Spagna</h2>
    <p>Adler &amp; Rochefort è un intermediario assicurativo portoghese, registrato presso l’autorità di vigilanza ASF con il n. 425591790/3, con uffici a <strong>Lisbona e Lagos</strong>. Lavoriamo per famiglie con patrimoni importanti in tutto il Portogallo e — in regime di libera prestazione di servizi nell’Unione europea — in Spagna.</p>
    <p>Il nostro lavoro si concentra sui rischi per i quali una polizza standard non basta:</p>
    <ul>
      <li><strong>Residenze di alto valore</strong> — ville, palazzi storici e proprietà con piscina, dépendance e foresteria, assicurate al reale costo di ricostruzione.</li>
      <li><strong>Arte, gioielli, orologi e collezioni</strong> — a valore concordato e senza franchigia.</li>
      <li><strong>Responsabilità civile della famiglia</strong> — con massimali milionari, in tutto il mondo, e spese di difesa in aggiunta al massimale.</li>
      <li><strong>Assicurazione sanitaria internazionale</strong> per famiglie che vivono e viaggiano tra più paesi.</li>
      <li><strong>Automobili</strong>, comprese vetture recenti e di maggior valore.</li>
    </ul>
    <p>Ogni rischio viene sottoscritto individualmente, la consulenza è data per iscritto e Lei ha lo stesso consulente dal primo contatto fino all’eventuale sinistro.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="pezzi">
  <div class="container narrow article-body">
    <h2 id="pezzi">In Italia la casa si assicura a pezzi. Qui no.</h2>
    <p>Chi ha una casa in Italia conosce bene lo schema: la polizza <strong>incendio e scoppio</strong>, spesso sottoscritta perché la banca la richiede con il mutuo; il <strong>furto</strong> come garanzia a parte; la <strong>RC capofamiglia</strong> come piccola polizza separata; e, se si vive in condominio, la <strong>globale fabbricati</strong> stipulata dall’amministratore per l’intero edificio.</p>
    <p>Il Portogallo e la Spagna ragionano diversamente. In Portogallo un’unica polizza, la <em>multirriscos habitação</em>, copre l’edificio (<em>edifício</em>) e il contenuto (<em>recheio</em>); la responsabilità civile e la tutela legale sono spesso opzioni. In Spagna il <em>seguro de hogar</em> multirischio distingue <em>continente</em> e <em>contenido</em> e di norma include già una responsabilità civile, ma con massimali pensati per l’appartamento medio, non per una villa.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Come si assicura la casa in Italia, in Portogallo e in Spagna</caption>
        <thead>
          <tr><th scope="col">In Italia</th><th scope="col">In Portogallo</th><th scope="col">In Spagna</th></tr>
        </thead>
        <tbody>
          <tr><td>Incendio e scoppio — il fabbricato</td><td><em>Edifício</em>, parte della <em>multirriscos habitação</em></td><td><em>Continente</em>, parte del <em>seguro de hogar</em></td></tr>
          <tr><td>Contenuto e furto, spesso garanzie separate</td><td><em>Recheio</em>, nella stessa polizza; il furto è una garanzia al suo interno</td><td><em>Contenido</em>, nella stessa polizza</td></tr>
          <tr><td>RC capofamiglia, polizza a sé</td><td>Opzione (<em>responsabilidade civil</em>), spesso limitata all’abitazione</td><td>Di norma inclusa, con massimali contenuti</td></tr>
          <tr><td>Globale fabbricati del condominio</td><td><em>Seguro de condomínio</em>, spesso solo l’incendio obbligatorio per legge</td><td>Polizza della <em>comunidad de propietarios</em>, ampiezza variabile</td></tr>
          <tr><td>Polizza terremoto, facoltativa</td><td><em>Fenómenos sísmicos</em>, opzione</td><td>Rischi catastrofali coperti dal <em>Consorcio de Compensación de Seguros</em></td></tr>
        </tbody>
      </table>
    </div>
    <p>La conseguenza per chi compra “la stessa cosa che aveva in Italia”: si ritrova con una copertura strutturata in un altro modo, con massimali di responsabilità civile pensati per un bilocale e non per una proprietà con piscina, personale di servizio e ospiti.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="parole">
  <div class="container narrow article-body">
    <h2 id="parole">Parole che sembrano italiane — e quasi lo sono</h2>
    <p>Per un italiano il lessico assicurativo portoghese e spagnolo è sorprendentemente familiare. Proprio per questo le piccole differenze sfuggono.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Termini assicurativi in portoghese e spagnolo e il loro significato in italiano</caption>
        <thead>
          <tr><th scope="col">Portoghese · Spagnolo</th><th scope="col">Italiano</th><th scope="col">Che cosa cambia</th></tr>
        </thead>
        <tbody>
          <tr><td><em>Apólice · Póliza</em></td><td>Polizza</td><td>Condizioni generali, speciali e particolari. Sono le particolari a descrivere il Suo caso.</td></tr>
          <tr><td><em>Prémio · Prima</em></td><td>Premio</td><td>Identico: ciò che Lei paga.</td></tr>
          <tr><td><em>Franquia · Franquicia</em></td><td>Franchigia o scoperto</td><td>In Portogallo è spesso in percentuale: quello che in Italia chiameremmo scoperto.</td></tr>
          <tr><td><em>Capital seguro · Suma asegurada</em></td><td>Somma assicurata</td><td>Il numero più importante del contratto.</td></tr>
          <tr><td><em>Regra proporcional · Regla proporcional</em></td><td>Regola proporzionale</td><td>Lo stesso principio dell’art. 1907 del codice civile: metà somma, metà indennizzo.</td></tr>
          <tr><td><em>Exclusões · Exclusiones</em></td><td>Esclusioni</td><td>Si leggono prima, non dopo. È l’unico momento in cui si può ancora scegliere.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="assicuriamo">
  <div class="container narrow article-body">
    <h2 id="assicuriamo">Che cosa assicuriamo</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/it/assicurazione-casa-alto-valore/">Residenze di alto valore</a></h3>
        <p>Sopralluogo e costo di ricostruzione, rinuncia alla regola proporzionale, ricostruzione garantita, contenuto in tutto il mondo e oggetti di valore a valore concordato — più le basi portoghesi e spagnole: condominio, danni da acqua, terremoto e seconda casa.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/en/private-clients/" hreflang="en">Arte, collezioni e l’intero nucleo familiare (in inglese)</a></h3>
        <p>Il programma private client nel suo insieme: arte e collezioni, gioielli e orologi, cantina, tutela della famiglia e più residenze in un’unica copertura coerente.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/it/assicurazione-sanitaria-internazionale/">Assicurazione sanitaria internazionale</a></h3>
        <p>Copertura sanitaria privata per la famiglia: libera scelta di medico e ospedale, cure in Portogallo, in Spagna e all’estero, il servizio pubblico accanto — e che cosa succede con il SSN dopo l’iscrizione all’AIRE.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/it/assicurazione-auto-portogallo/">Assicurazione auto</a></h3>
        <p>RC auto e kasko, targa italiana o portoghese, ISV e reimmatricolazione tramite IMT, e che fine fa la Sua classe di merito — anche per vetture recenti e di valore.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/it/responsabilita-civile-famiglia/">Responsabilità civile della famiglia</a></h3>
        <p>RC della vita privata con massimali milionari, in tutto il mondo e con spese di difesa oltre il massimale — e la RC professionale come polizza distinta.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="specialistiche">
  <div class="container narrow article-body">
    <h2 id="specialistiche">Coperture specialistiche</h2>
    <p>Alcuni rischi di una famiglia con un patrimonio importante non rientrano in nessuna polizza standard. Li collochiamo attraverso mercati specializzati e partner di co-brokerage, in Portogallo e in Spagna, con lo stesso metodo: valutazione scritta, un unico consulente, assistenza nel sinistro.</p>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/it/assicurazione-rapimento-estorsione/">Rapimento, riscatto ed estorsione (K&amp;R)</a></h3>
        <p>Consulenti di crisi 24 ore su 24, rimborso di riscatti ed estorsioni, famiglia, personale e ospiti — con la riservatezza che questa copertura richiede.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/it/assicurazione-tenuta-vigneto/">Tenute, quintas e vigneti</a></h3>
        <p>Casa padronale, cantina, stock di vino, incendio boschivo, enoturismo ed eventi in un unico programma coerente.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/it/assicurazione-costruzione-villa/">Costruzione e ristrutturazione di una villa</a></h3>
        <p>Polizza CAR, responsabilità del committente, la casa esistente durante i lavori, la decennale spagnola e il passaggio alla polizza casa.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/it/assicurazione-affitto-villa-lusso/">Affitto di ville di lusso</a></h3>
        <p>Danni degli ospiti, perdita di affitti, RC per piscina, barche ed eventi, personale — e le regole dell’Alojamento Local e delle licenze regionali spagnole.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/it/assicurazione-cavalli/">Cavalli e scuderie</a></h3>
        <p>Mortalità e furto a valore concordato, spese veterinarie, scuderie e la responsabilità oggettiva del proprietario.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/it/assicurazione-aviazione-privata/">Aviazione privata e droni</a></h3>
        <p>Corpi a valore concordato, RC verso terzi e passeggeri, equipaggio e droni sulla tenuta — esclusivamente tramite mercati aeronautici.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/it/assicurazione-cyber-frode-famiglia/">Cyber, frodi e furto d’identità</a></h3>
        <p>Frodi sui bonifici durante l’acquisto di casa, estorsione informatica, furto d’identità e molestie online, con assistenza 24 ore su 24.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="guide">
  <div class="container narrow article-body">
    <h2 id="guide">Tre guide sulla situazione, non sul prodotto</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/it/trasferirsi-in-portogallo-assicurazioni/">Trasferirsi in Portogallo</a></h3>
        <p>L’ordine giusto: che cosa sistemare prima della partenza, che cosa solo con il NIF in mano, e dove si aprono le lacune — AIRE compresa.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/it/comprare-casa-portogallo-spagna-assicurazione/">Comprare casa in Portogallo o in Spagna</a></h3>
        <p>Che cosa chiede la banca, che cosa vale dal giorno della <em>escritura</em> e i tre valori dello stesso immobile che non coincidono.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/it/guida-assicurazioni-portogallo/">Guida alle assicurazioni in Portogallo</a></h3>
        <p>Come funziona il mercato: i soggetti, le parti della polizza, il sinistro, il rinnovo e la disdetta.</p>
      </li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="seconda-casa">
  <div class="container narrow article-body">
    <h2 id="seconda-casa">Residenza a Lisbona, seconda casa al mare</h2>
    <p>Molte famiglie italiane che seguiamo hanno una combinazione precisa: la residenza principale a Lisbona, Cascais o Porto e una seconda casa in Algarve, alle Baleari, sulla Costa del Sol o in Italia. La seconda casa, usata alcuni mesi all’anno, non è un dettaglio per la compagnia: è un rischio diverso, e le condizioni lo trattano separatamente.</p>
    <p>Che cosa significa in pratica:</p>
    <ul>
      <li><strong>I periodi di disabitazione</strong> sono definiti nelle condizioni, di solito come un numero di giorni consecutivi. Oltre quel limite alcune garanzie possono essere ridotte o sospese.</li>
      <li><strong>I danni da acqua</strong> sono il sinistro più frequente in una casa vuota, e il più costoso, perché vengono scoperti tardi. Alcune compagnie richiedono la chiusura del rubinetto generale o un servizio di custodia.</li>
      <li><strong>Il furto</strong> viene valutato in base ai sistemi di protezione e alla durata dell’assenza.</li>
      <li><strong>La locazione turistica</strong>, anche per poche settimane l’anno, va dichiarata. Una normale polizza casa non è scritta per un’attività ricettiva.</li>
    </ul>
    <p>Dichiari l’uso reale fin dall’inizio. Una polizza stipulata come abitazione principale ma usata come casa vacanze è il tipo di incongruenza che emerge solo al momento del sinistro — quando è ormai tardi per correggerla.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="metodo">
  <div class="container narrow article-body">
    <h2 id="metodo">Come lavoriamo</h2>
    <ol class="process-steps">
      <li><div><strong>Partiamo dalla situazione, non dal prodotto.</strong><span> Dove vive, per quanto tempo, che cosa possiede, chi deve essere assicurato e di che cosa si occupa. Il prodotto discende dalle risposte.</span></div></li>
      <li><div><strong>Fissiamo le somme prima di parlare di premio.</strong><span> Costo di ricostruzione per l’edificio, valore a nuovo per il contenuto, stime per arte e gioielli. Una somma sbagliata rende inadeguata qualsiasi polizza.</span></div></li>
      <li><div><strong>Le esclusioni gliele spieghiamo per iscritto.</strong><span> In italiano, prima della firma: le esclusioni principali di quella specifica polizza.</span></div></li>
      <li><div><strong>Raccogliamo offerte nel nostro portafoglio di compagnie</strong><span> e Le spieghiamo per iscritto dove le coperture differiscono.</span></div></li>
      <li><div><strong>Denunciamo il sinistro per Lei.</strong><span> In portoghese o in spagnolo, con il perito della compagnia, e seguiamo la pratica fino alla chiusura.</span></div></li>
      <li><div><strong>Rivediamo le polizze una volta l’anno.</strong><span> Case, indirizzi e attività raramente restano come previsto.</span></div></li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="errori">
  <div class="container narrow article-body">
    <h2 id="errori">Cinque errori che vediamo spesso</h2>
    <ul>
      <li><strong>Dare per scontato che la RC capofamiglia italiana copra la vita qui.</strong> Dopo il trasferimento della residenza, è una domanda da porre per iscritto alla compagnia italiana — e i massimali, anche quando vale, sono raramente adeguati.</li>
      <li><strong>Assicurare l’edificio al prezzo d’acquisto.</strong> Il prezzo comprende il terreno, la posizione e la vista. Nessuno dei tre brucia. La somma deve essere il costo di ricostruzione.</li>
      <li><strong>Accettare la polizza della banca senza leggerla.</strong> La banca ha un interesse legittimo a che l’immobile sia assicurato. Non ha verificato se la copertura è adatta a Lei.</li>
      <li><strong>Rimandare l’assicurazione sanitaria.</strong> La valutazione dello stato di salute avviene alla sottoscrizione. Ogni mese che passa è un mese in cui qualcosa può diventare una patologia preesistente.</li>
      <li><strong>Disdire la polizza auto italiana prima che quella portoghese sia attiva.</strong> La reimmatricolazione richiede settimane, e nel frattempo nessuno è coperto.</li>
    </ul>
  </div>
</section>`,
  // La fascia con il ritratto e l'elenco delle compagnie sottostanti sono
  // generati da scripts/lib/site-sections.mjs; qui vive solo il testo italiano.
  audience: {
    heading: 'Per chi <em>lavoriamo</em>',
    body:
      'Lavoriamo per famiglie private con patrimoni importanti in Portogallo e in Spagna — famiglie con più residenze, collezionisti, imprenditori e pensionati che hanno portato a sud tutta o parte della propria vita. Dagli uffici di Lisbona e Lagos ci occupiamo dell’intero lato assicurativo: consulenza, sottoscrizione individuale, assistenza continuativa e supporto in caso di sinistro, con lo stesso consulente dall’inizio alla fine.',
    alt: 'Consulente assicurativo per clienti privati con patrimoni importanti in Portogallo e in Spagna',
  },
  insurers: {
    heading: 'Compagnie e partner di co-brokerage <em>con cui lavoriamo</em>',
    lead:
      'Non siamo legati a un’unica compagnia. Prestiamo consulenza nell’ambito del nostro portafoglio di compagnie assicurative e raccomandiamo per iscritto la copertura adatta alla famiglia e al patrimonio.',
  },
  faqTitle: 'Assicurazioni in Portogallo — domande frequenti',
  faq: [
    {
      q: 'Parlate italiano?',
      a: '<p>La nostra lingua di lavoro ufficiale è l’inglese. Per iscritto comunichiamo con Lei in italiano, con l’aiuto della traduzione assistita dall’intelligenza artificiale: preventivi, spiegazione delle condizioni e corrispondenza Le arrivano in italiano. Le conversazioni, al telefono o di persona, si svolgono in inglese o in portoghese. Con le compagnie trattiamo in portoghese o in spagnolo. Siamo un intermediario portoghese con uffici a Lisbona e Lagos e clienti in tutto il Portogallo e in Spagna.</p>',
    },
    {
      q: 'Per chi lavorate?',
      a: '<p>Per famiglie private con patrimoni importanti in Portogallo e in Spagna: residenze di alto valore, arte e collezioni, responsabilità civile della famiglia con massimali milionari, assicurazione sanitaria internazionale e automobili. Ogni rischio è sottoscritto individualmente, la consulenza è scritta e Lei ha un unico consulente dal primo contatto al sinistro.</p>',
    },
    {
      q: 'Lavorate anche in Spagna?',
      a: '<p>Sì. Siamo registrati in Portogallo presso l’ASF con il n. 425591790/3 e operiamo in Spagna in regime di libera prestazione di servizi nell’Unione europea. Molti nostri clienti hanno una casa in entrambi i paesi, e avere tutto presso lo stesso consulente è un vantaggio concreto.</p>',
    },
    {
      q: 'Posso tenere la mia assicurazione italiana per la casa in Portogallo?',
      a: '<p>Di solito no. L’assicurazione di un immobile viene normalmente stipulata con una compagnia autorizzata a operare nel paese in cui l’immobile si trova, e la gestione dei sinistri presuppone una presenza locale. Si faccia dare una risposta scritta dalla Sua compagnia italiana prima di dare per scontato che qualcosa valga anche qui.</p>',
    },
    {
      q: 'Quanto costa rivolgersi a un intermediario?',
      a: '<p>Nulla oltre al premio. La remunerazione dell’intermediario è compresa nel premio ed è pagata dalla compagnia, sia che Lei sottoscriva direttamente sia tramite noi. La differenza è che qualcuno legge le condizioni, fissa con Lei le somme e segue il sinistro.</p>',
    },
    {
      q: 'Mi serve un’assicurazione sanitaria privata se sono iscritto al servizio sanitario portoghese?',
      a: '<p>Non è un’alternativa. Il servizio pubblico (SNS) dà accesso alle cure, comprese quelle urgenti. Una polizza privata offre tempi di attesa più brevi per visite e accertamenti e la possibilità di scegliere la struttura. La maggior parte dei nostri clienti usa entrambi. Veda <a href="/it/assicurazione-sanitaria-internazionale/">l’assicurazione sanitaria internazionale</a>.</p>',
    },
    {
      q: 'Usiamo la casa tre mesi l’anno. Cambia qualcosa?',
      a: '<p>Sì, in modo sostanziale. I periodi di disabitazione sono trattati separatamente nelle condizioni, spesso con l’obbligo di custodia o con limiti per determinati tipi di danno. Dichiari fin dall’inizio l’uso reale invece di descrivere la casa come abitazione principale.</p>',
    },
  ],
  related: [
    { url: '/it/trasferirsi-in-portogallo-assicurazioni/', label: 'Trasferirsi in Portogallo: le assicurazioni nell’ordine giusto' },
    { url: '/it/guida-assicurazioni-portogallo/', label: 'Guida alle assicurazioni in Portogallo' },
  ],
};
