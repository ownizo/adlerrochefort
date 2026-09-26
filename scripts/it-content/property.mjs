/**
 * /it/comprare-casa-portogallo-spagna-assicurazione/
 *
 * Search intent: "comprare casa in Portogallo assicurazione" and "comprare
 * casa in Spagna assicurazione" — the transaction timeline, for Italians
 * buying a main residence in Lisbon/Cascais/Porto or a second home in the
 * Algarve, the Baleari, the Costa del Sol or Madrid.
 *
 * Italian hooks: compromesso and rogito map onto CPCV/arras and escritura;
 * the rendita catastale has its counterparts in the Portuguese VPT and the
 * Spanish valor catastral — neither is a sum insured; in Italy the notary
 * checks the conformità catastale at the rogito, whereas in Portugal
 * unregistered extensions are common and surface in claims; and the bank's
 * insurance requirement is met by a policy the buyer chooses — in Spain
 * often traded against a rate discount (bonificación), which is arithmetic,
 * not an obligation.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const PROPERTY_PAGE = {
  slug: 'comprare-casa-portogallo-spagna-assicurazione',
  url: '/it/comprare-casa-portogallo-spagna-assicurazione/',
  cluster: 'property',
  title: 'Comprare casa in Portogallo o Spagna: polizze | Adler & Rochefort',
  description:
    'Comprare casa in Portogallo o Spagna: che cosa chiede la banca, che cosa vale dall’escritura e i tre valori dell’immobile che non coincidono.',
  keywords:
    'comprare casa Portogallo assicurazione, comprare casa Spagna assicurazione, mutuo Portogallo assicurazione, escritura Portogallo, contrato de arras, CPCV Portogallo, valor catastral, casa vacanze Spagna assicurazione',
  eyebrow: 'Guida',
  h1: 'Comprare casa in Portogallo o in Spagna: l’assicurazione in ogni fase dell’acquisto',
  standfirst:
    'In un acquisto immobiliare in Portogallo o in Spagna, l’assicurazione arriva di solito per ultima, quando tutto il resto è deciso — e a quel punto la banca ha già una proposta sul tavolo. Ecco che cosa vale e quando, e quali decisioni spettano a Lei.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Comprare casa' }],
  pullquote: 'La banca ha un interesse legittimo a che la casa sia assicurata. Quale compagnia scriva la polizza è un’altra questione.',
  schemaType: 'Article',
  formHeading: 'L’assicurazione per il Suo acquisto',
  formBranch: 'IT · Casa',
  formSubject: 'Acquisto immobiliare — assicurazione',
  formCta: 'Richieda una valutazione scritta',
  formIntro:
    'Ci dica a che punto è l’acquisto e di che immobile si tratta. Le rispondiamo per iscritto con ciò che deve essere pronto per il giorno dell’escritura.',
  formPlaceholder:
    'Per esempio: villa con piscina a Marbella, contrato de arras firmato, escritura a novembre; arredi e alcune opere d’arte arrivano dall’Italia.',
  sections: `
<section class="section plain" aria-labelledby="fasi">
  <div class="container narrow article-body">
    <h2 id="fasi">Che cosa vale e quando</h2>
    <p>Le fasi le conosce già: una proposta, un compromesso, il rogito. Cambiano i nomi — e con essi il momento in cui l’assicurazione diventa necessaria.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">La questione assicurativa in ogni fase di un acquisto immobiliare in Portogallo e in Spagna</caption>
        <thead>
          <tr><th scope="col">Fase dell’acquisto</th><th scope="col">La questione assicurativa</th><th scope="col">Chi decide</th></tr>
        </thead>
        <tbody>
          <tr><td>Offerta e trattativa</td><td>Nessun obbligo ancora, ma stato e anno di costruzione dell’immobile determinano che cosa si potrà assicurare.</td><td>Lei</td></tr>
          <tr><td>Compromesso (<em>CPCV</em> in Portogallo, <em>contrato de arras</em> in Spagna)</td><td>La banca indica di norma quale assicurazione deve esistere all’erogazione. Legga quella clausola ora, non dopo.</td><td>Banca e Lei</td></tr>
          <tr><td>Domanda di mutuo</td><td>Viene richiesta la polizza danni sull’immobile, e quasi sempre un’assicurazione vita collegata al mutuo.</td><td>La banca pone il requisito</td></tr>
          <tr><td>Rogito (<em>escritura</em>)</td><td>La polizza deve essere valida da quel giorno — il rischio passa a Lei quando diventa proprietario.</td><td>Lei</td></tr>
          <tr><td>Dopo l’acquisto</td><td>Contenuto, responsabilità civile, eventuale locazione e verifica rispetto alla polizza del condominio.</td><td>Lei</td></tr>
        </tbody>
      </table>
    </div>
    <p>La conseguenza più comune di arrivare tardi: si sottoscrive ciò che è più rapido, non ciò che è più adatto, e ci si convive per anni perché nessuno lo riesamina.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="banca">
  <div class="container narrow article-body">
    <h2 id="banca">Che cosa chiede la banca — e che cosa non può imporre</h2>
    <p>Con un mutuo presso una banca portoghese o spagnola, l’assicurazione sarà richiesta, ed è giustificato: l’immobile è la garanzia del finanziamento.</p>
    <h3>Che cosa chiede di norma la banca</h3>
    <ul>
      <li><strong>Una polizza danni sull’immobile</strong> — <em>multirriscos habitação</em> in Portogallo, <em>seguro de hogar</em> in Spagna — con la banca beneficiaria per la parte del finanziamento.</li>
      <li><strong>Un’assicurazione vita</strong> collegata al mutuo, spesso con questionario sanitario e limiti di età.</li>
      <li><strong>Una somma assicurata</strong> almeno pari al finanziamento o al valore dell’edificio secondo la perizia della banca.</li>
      <li><strong>La prova</strong> che la polizza è valida dal giorno dell’<em>escritura</em>.</li>
    </ul>
    <h3>Che cosa spetta a Lei</h3>
    <p>Il requisito è che la polizza esista, non che sia acquistata presso la banca. In Spagna le banche offrono spesso uno sconto sul tasso (<em>bonificación</em>) in cambio di polizze stipulate con loro: è un calcolo economico da fare con i numeri in mano, non un obbligo. Una polizza firmata allo sportello nello stesso incontro del mutuo è scelta perché si adatta al processo della banca. Non per questo è inadeguata, ma la copertura non è mai stata confrontata con la Sua situazione.</p>
    <div class="callout">
      <span class="callout-label">Il senso di questa pagina</span>
      Non sosteniamo che la polizza della banca sia cattiva. Diciamo che è stata scelta senza che nessuno ponesse le domande: il costo di ricostruzione è corretto, i danni da acqua sono coperti nella forma che conta per questo edificio, il terremoto è incluso, come sono trattati i periodi di disabitazione, c’è una responsabilità civile, e che cosa succede alla polizza quando il mutuo è estinto? Possiamo predisporre una polizza che soddisfi i requisiti della banca e sia al tempo stesso costruita sulla Sua casa. Se la banca insiste sulla propria, leggiamo con Lei ciò che propone.
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="valori">
  <div class="container narrow article-body">
    <h2 id="valori">Tre valori, e solo uno appartiene alla polizza</h2>
    <p>Durante l’acquisto incontrerà tre importi diversi per lo stesso immobile, e vengono confusi quasi sempre:</p>
    <ul>
      <li><strong>Il prezzo d’acquisto</strong> — ciò che ha pagato. Comprende la posizione, il terreno, la vista e il mercato. Nessuno di questi brucia.</li>
      <li><strong>Il valore fiscale</strong> — in Portogallo il <em>valor patrimonial tributário</em> (VPT) indicato nella <em>caderneta predial</em>, base dell’imposta IMI; in Spagna il <em>valor catastral</em>, base dell’IBI. Il ruolo è simile a quello della rendita catastale italiana: di norma ben inferiore al valore di mercato, e non pensato come somma assicurata.</li>
      <li><strong>Il costo di ricostruzione</strong> — quanto costa ricostruire l’edificio nello stesso luogo, ai prezzi di oggi, comprese demolizione e progettazione. <strong>È il numero su cui deve basarsi la polizza.</strong></li>
    </ul>
    <p>Gli errori in entrambe le direzioni costano. Una somma troppo bassa comporta la riduzione proporzionale in caso di sinistro — metà somma, metà indennizzo, anche per un piccolo danno. Una somma troppo alta fa pagare un premio senza contropartita, perché l’indennizzo non supera mai il danno effettivo.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="condominio">
  <div class="container narrow article-body">
    <h2 id="condominio">Appartamento: il condominio non è quello italiano</h2>
    <p>La parola è quasi la stessa — <em>condomínio</em> in Portogallo, <em>comunidad de propietarios</em> in Spagna — ma la polizza comune spesso no. Chieda le condizioni della polizza condominiale prima di stipulare la Sua: senza di esse sta indovinando che cosa è già coperto.</p>
    <ul>
      <li><strong>La polizza comune è spesso più ristretta</strong> di una globale fabbricati italiana. In Portogallo il minimo di legge è l’incendio; una copertura più ampia è una scelta che l’assemblea deve aver fatto.</li>
      <li><strong>Il confine tra parti comuni e private</strong> passa per gli impianti che causano più spesso danni da acqua. Le colonne montanti possono essere comuni, mentre le tubazioni dentro la Sua unità sono Sue.</li>
      <li><strong>La Sua unità è un bene immobile autonomo</strong>, una <em>fração autónoma</em>. Ciò che vi ha installato — cucina, bagni, pavimenti — è Suo da assicurare.</li>
      <li><strong>Le decisioni si prendono in assemblea</strong> (<em>assembleia de condóminos</em>), eseguite da un <em>administrador</em>. I verbali vale la pena chiederli prima dell’acquisto: mostrano i problemi noti dell’edificio.</li>
    </ul>
    <p>Veda <a href="/it/assicurazione-casa-alto-valore/">l’assicurazione casa</a> per il confronto in tabella e la sezione sui danni da acqua.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="prima">
  <div class="container narrow article-body">
    <h2 id="prima">Prima dell’acquisto: la verifica tecnica spetta a Lei</h2>
    <p>In Italia il notaio verifica al rogito la conformità catastale, e l’acquirente è abituato a contare su quel controllo. In Portogallo, soprattutto negli immobili più vecchi e nelle proprietà rurali, ampliamenti non registrati sono frequenti — e ciò che non risulta nei documenti è difficile da farsi indennizzare. Lo stato dell’immobile è una verifica a carico dell’acquirente, e ciò che emerge incide sia sul premio sia su che cosa si può assicurare.</p>
    <ul>
      <li><strong>Anno di costruzione e ultima ristrutturazione</strong> — tetto, impianto elettrico e idraulico sono le tre voci che determinano premio ed esclusioni.</li>
      <li><strong>Tetto e smaltimento delle acque</strong> — tracce di umidità pregressa sono tra le cause più frequenti di un’offerta condizionata.</li>
      <li><strong>Piscina, muri di contenimento e terrazze</strong> — non rientrano automaticamente nella copertura del fabbricato e possono dover essere indicati a parte.</li>
      <li><strong>Distanza da boschi e vegetazione</strong> — rilevante in alcune zone del Portogallo e della Spagna, e può incidere sulle condizioni.</li>
      <li><strong>Sinistri precedenti sull’immobile</strong> — li chieda al venditore, e si faccia dare la risposta per iscritto.</li>
      <li><strong>Licenze e documenti catastali</strong> — <em>caderneta predial</em> e <em>licença de utilização</em> in Portogallo, <em>nota simple</em> e <em>cédula de habitabilidad</em> o documento equivalente in Spagna, secondo la comunità autonoma.</li>
      <li><strong>Quanto spesso la casa resterà vuota</strong> — l’informazione decisiva se l’immobile sarà una casa vacanze.</li>
    </ul>
    <p>Molti acquirenti incaricano un ingegnere o un architetto di una perizia. Per una casa datata è di solito una spesa ben fatta — non da ultimo perché il rischio di ciò che nessuno ha controllato resta Suo.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="dopo">
  <div class="container narrow article-body">
    <h2 id="dopo">Dopo l’<em>escritura</em>: le cinque cose</h2>
    <ol class="process-steps">
      <li><div><strong>Verifichi che la polizza valga dal giorno dell’<em>escritura</em></strong><span>, non da quello del pagamento.</span></div></li>
      <li><div><strong>Aggiunga il contenuto</strong><span> quando la casa è arredata — e iscriva a parte, a valore concordato, opere d’arte, gioielli e orologi.</span></div></li>
      <li><div><strong>Verifichi la responsabilità civile</strong><span> — non è automaticamente inclusa, e la RC capofamiglia italiana non va data per scontata.</span></div></li>
      <li><div><strong>Dichiari la locazione</strong><span>, se è nei piani. Una locazione turistica non dichiarata è una causa ricorrente di mancato indennizzo. Veda <a href="/it/responsabilita-civile-famiglia/">responsabilità civile</a>.</span></div></li>
      <li><div><strong>Riveda la somma una volta l’anno</strong><span> — i costi di costruzione cambiano, e l’indicizzazione della polizza non sempre segue la realtà.</span></div></li>
    </ol>
  </div>
</section>`,
  faqTitle: 'Comprare casa in Portogallo o in Spagna — domande sull’assicurazione',
  faq: [
    {
      q: 'Devo stipulare l’assicurazione con la banca che mi concede il mutuo?',
      a: '<p>La banca richiede di norma che una polizza esista, con la banca beneficiaria per la parte del finanziamento. Che debba essere stipulata con la banca è un’altra questione. In Spagna lo sconto sul tasso in cambio di polizze della banca è un calcolo da fare, non un obbligo. Predisponiamo una polizza che soddisfi il requisito e, se la banca insiste, leggiamo con Lei ciò che propone prima della firma.</p>',
    },
    {
      q: 'Per quale somma va assicurato l’edificio?',
      a: '<p>Per il costo di ricostruzione — quanto costa ricostruire l’edificio ai prezzi di oggi — non per il prezzo d’acquisto né per il valore fiscale (VPT in Portogallo, <em>valor catastral</em> in Spagna). Una somma troppo bassa comporta la riduzione proporzionale in ogni sinistro; una somma troppo alta fa pagare un premio senza contropartita.</p>',
    },
    {
      q: 'Da quando deve valere la polizza?',
      a: '<p>Dal giorno dell’<em>escritura</em>, quando si trasferiscono la proprietà e quindi il rischio. Con un mutuo, la banca chiede di norma la prova prima dell’erogazione, quindi la polizza dovrebbe essere pronta qualche giorno prima.</p>',
    },
    {
      q: 'Compro un appartamento — basta la polizza del condominio?',
      a: '<p>Di norma no. Copre le parti comuni dell’edificio, spesso a un livello limitato. La Sua unità, ciò che vi ha installato, il contenuto e la responsabilità civile restano fuori. Chieda le condizioni della polizza condominiale prima di stipulare la Sua, così non indovina che cosa è già coperto.</p>',
    },
    {
      q: 'Il notaio verifica lo stato dell’immobile, come in Italia?',
      a: '<p>Non nello stesso modo. In Italia il notaio verifica al rogito la conformità catastale; in Portogallo ampliamenti non registrati sono frequenti, e ciò che non risulta nei documenti è difficile da farsi indennizzare. La verifica tecnica spetta all’acquirente, e per una casa datata una perizia di un ingegnere o di un architetto è di solito una spesa ben fatta.</p>',
    },
    {
      q: 'Compriamo una casa che useremo solo qualche mese l’anno. Cambia qualcosa?',
      a: '<p>Sì, in modo sostanziale. I periodi di disabitazione sono trattati separatamente nelle condizioni portoghesi e spagnole, spesso con obblighi di custodia o limiti per determinati tipi di danno. Dichiari l’uso reale fin dall’inizio invece di descrivere la casa come abitazione principale.</p>',
    },
  ],
  related: [
    { url: '/it/assicurazione-casa-alto-valore/', label: 'Assicurazione casa di alto valore' },
    { url: '/it/guida-assicurazioni-portogallo/', label: 'Guida alle assicurazioni in Portogallo' },
  ],
};
