/**
 * /it/guida-assicurazioni-portogallo/
 *
 * Search intent: "assicurazioni Portogallo" in its broadest form — the pillar
 * page for readers who do not yet know which product they need. It explains
 * how the Portuguese market works as a system (actors, documents, concepts,
 * claims, renewal) and routes to the product pages.
 *
 * Italian reference points (IVASS, the RUI and its sections for agenti and
 * broker, the reclamo to the company and then to IVASS) are named only to
 * help the reader place ASF, the agente/corretor distinction and the livro de
 * reclamações — not as claims about how Italian bodies operate in detail.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const GUIDE_PAGE = {
  slug: 'guida-assicurazioni-portogallo',
  url: '/it/guida-assicurazioni-portogallo/',
  cluster: 'guide',
  title: 'Guida alle assicurazioni in Portogallo | Adler & Rochefort',
  description:
    'Il mercato assicurativo portoghese: soggetti, parti della polizza, concetti chiave, sinistro, rinnovo — e sette domande da porre a ogni intermediario.',
  keywords:
    'assicurazioni Portogallo, guida assicurazioni Portogallo, compagnie assicurative portoghesi, ASF Portogallo, intermediario assicurativo Portogallo, apólice Portogallo, denuncia sinistro Portogallo',
  eyebrow: 'Guida',
  h1: 'Guida alle assicurazioni in Portogallo: come funziona il mercato',
  standfirst:
    'Questa pagina non spiega i singoli prodotti, ma il sistema in cui si inseriscono: chi sono i soggetti, che cosa c’è in una polizza portoghese, quali concetti determinano l’indennizzo e come si svolge davvero un sinistro.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Guida alle assicurazioni' }],
  pullquote: 'Una polizza non si giudica il giorno in cui si firma, ma il giorno in cui deve pagare.',
  schemaType: 'Article',
  formHeading: 'Ci ponga una domanda sulle assicurazioni in Portogallo',
  formBranch: '',
  formSubject: 'Domanda generale — assicurazioni in Portogallo',
  formCta: 'Invii la domanda',
  formIntro:
    'Se non sa ancora quale prodotto riguardi la Sua domanda, non è un problema. Descriva la situazione e capiremo noi che cosa è rilevante.',
  formPlaceholder:
    'Per esempio: abbiamo una polizza stipulata tramite una banca portoghese da quattro anni e non sappiamo che cosa copra davvero.',
  sections: `
<section class="section plain" aria-labelledby="soggetti">
  <div class="container narrow article-body">
    <h2 id="soggetti">I soggetti, e chi fa che cosa</h2>
    <ul>
      <li><strong><em>Seguradora</em> — la compagnia.</strong> Assume il rischio, scrive le condizioni, decide sul sinistro. Il mercato comprende compagnie portoghesi e grandi gruppi internazionali; un nome noto può quindi trovarsi anche qui, ma il prodotto è portoghese, con condizioni portoghesi.</li>
      <li><strong><em>Agente de seguros</em> — l’agente.</strong> Intermedia per una o più compagnie, consiglia il cliente e lo assiste nei sinistri. È il nostro ruolo: Adler &amp; Rochefort è registrata come <em>agente de seguros</em> presso l’ASF con il numero 425591790/3, e lavoriamo con più compagnie.</li>
      <li><strong><em>Corretor</em> — il broker.</strong> Un’altra categoria regolamentata di intermediari, con una posizione in parte diversa nei confronti delle compagnie. La distinzione ricorda quella tra la sezione A (agenti) e la sezione B (broker) del RUI italiano.</li>
      <li><strong>Banche e agenzie immobiliari.</strong> Intermediano assicurazioni accanto alla propria attività. È legittimo e comune, ma la scelta è ristretta, e il prodotto è scelto perché si adatta al loro processo.</li>
      <li><strong>ASF — <em>Autoridade de Supervisão de Seguros e Fundos de Pensões</em>.</strong> L’autorità di vigilanza su assicurazioni e fondi pensione, il corrispettivo portoghese dell’IVASS. Il registro degli intermediari è pubblico. Verifichi sempre che chi La assiste vi compaia.</li>
    </ul>
    <p>Un intermediario non Le costa di più: la remunerazione è compresa nel premio ed è pagata dalla compagnia, sia che sottoscriva tramite un intermediario sia direttamente. La differenza è che qualcuno legge le condizioni per Lei e La assiste quando serve.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="polizza">
  <div class="container narrow article-body">
    <h2 id="polizza">Com’è fatta una polizza portoghese</h2>
    <p>Una <em>apólice</em> è raramente un documento unico: sono tre, con un rango diverso — la struttura è quella che conosce dalle polizze italiane.</p>
    <ol class="process-steps">
      <li><div><strong><em>Condições gerais</em> — le condizioni generali.</strong><span> La base stampata del prodotto: definizioni, esclusioni generali, obblighi, procedura di sinistro. Valgono per tutta la durata del contratto.</span></div></li>
      <li><div><strong><em>Condições especiais</em> — le condizioni speciali.</strong><span> Le regole per ciascuna garanzia: che cosa comprende la copertura danni da acqua, come è definito il furto, quali esclusioni valgono per la responsabilità civile.</span></div></li>
      <li><div><strong><em>Condições particulares</em> — le condizioni particolari.</strong><span> Contraente, oggetto, somme assicurate, franchigie, garanzie scelte, premio, durata. <strong>È il foglio che descrive la Sua situazione</strong>, e l’unico che riguarda solo Lei.</span></div></li>
    </ol>
    <p>In caso di contrasto tra i documenti, le condizioni speciali e particolari prevalgono di norma su quelle generali. Conseguenza pratica: se ha letto solo la brochure del prodotto, non ha letto la Sua polizza. Esaminiamo con Lei le <em>condições particulares</em> riga per riga, prima della sottoscrizione.</p>
    <p>Le polizze delle compagnie portoghesi sono emesse in portoghese. Non è qualcosa a cui un intermediario possa rinunciare. Ciò che possiamo fare è assicurarci che Lei capisca esattamente che cosa vi è scritto — per iscritto, in italiano, prima della firma.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="concetti">
  <div class="container narrow article-body">
    <h2 id="concetti">Cinque concetti che determinano l’indennizzo</h2>
    <h3><em>Capital seguro</em> — somma assicurata</h3>
    <p>Il massimo che la compagnia paga per il bene assicurato. Per l’edificio si fissa al costo di ricostruzione, per il contenuto al valore a nuovo dell’insieme. È il numero più importante dell’intero contratto.</p>
    <h3><em>Regra proporcional</em> — regola proporzionale</h3>
    <p>Lo stesso principio che conosce dal codice civile italiano. Se la somma è pari a metà del valore reale, anche un piccolo danno viene indennizzato a metà. È il motivo per cui discutiamo di somme prima che di premi.</p>
    <h3><em>Franquia</em> — franchigia o scoperto</h3>
    <p>La Sua quota di ogni sinistro. Nelle condizioni portoghesi è spesso espressa in percentuale della somma assicurata o del danno, con un minimo — ciò che in Italia si chiamerebbe scoperto, più che franchigia. Una percentuale su un bene costoso diventa una cifra più alta di quanto sembri sulla carta.</p>
    <h3><em>Período de carência</em> — periodo di carenza</h3>
    <p>Il tempo dalla sottoscrizione prima che una determinata garanzia sia utilizzabile. Ricorre soprattutto nell’assicurazione sanitaria, ma anche in alcuni altri prodotti.</p>
    <h3><em>Exclusões</em> — esclusioni</h3>
    <p>Ciò che non è coperto. Divise tra esclusioni generali (nelle condizioni generali) ed esclusioni per garanzia (nelle speciali). Si leggono prima della sottoscrizione, perché è l’unico momento in cui la scelta del prodotto può ancora tenerne conto.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="sinistro">
  <div class="container narrow article-body">
    <h2 id="sinistro">Come si svolge un sinistro</h2>
    <ol class="process-steps">
      <li><div><strong>Denunci entro il termine delle condizioni.</strong><span> I termini sono brevi e indicati per garanzia — spesso pochi giorni, talvolta otto. In caso di furto o atti vandalici si richiede di norma la denuncia alle autorità (<em>participação</em>), da presentare subito.</span></div></li>
      <li><div><strong>Limiti il danno.</strong><span> Chiuda l’acqua, metta al sicuro ciò che altrimenti si danneggerebbe ulteriormente. È un obbligo delle condizioni, non una cortesia.</span></div></li>
      <li><div><strong>Documenti.</strong><span> Foto prima di qualsiasi riparazione, ricevute, preventivi, referti. La documentazione raccolta dopo è una documentazione più debole.</span></div></li>
      <li><div><strong>Perizia (<em>peritagem</em>).</strong><span> La compagnia invia di norma un perito. La sua relazione determina l’esito, ed è sempre in portoghese. Qui La assistiamo noi.</span></div></li>
      <li><div><strong>Decisione e indennizzo.</strong><span> Indennizzo in denaro o riparazione tramite la rete della compagnia, secondo prodotto e scelta.</span></div></li>
      <li><div><strong>In caso di rifiuto o di indennizzo insufficiente:</strong><span> chieda la decisione per iscritto, con il riferimento alla clausola delle condizioni, e chieda un riesame. Molte pratiche si risolvono in questa fase, con la documentazione giusta.</span></div></li>
    </ol>
    <p>Se la questione resta irrisolta, esiste il <em>livro de reclamações</em> — il registro nazionale dei reclami, anche in forma elettronica — e poi il reclamo all’ASF. È un percorso analogo al reclamo alla compagnia e poi all’IVASS che conosce dall’Italia, ma si svolge in portoghese. Apriamo e seguiamo queste pratiche per i nostri clienti.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="rinnovo">
  <div class="container narrow article-body">
    <h2 id="rinnovo">Rinnovo, indicizzazione e disdetta</h2>
    <p>Le polizze portoghesi hanno di norma durata annuale con rinnovo automatico. Tre aspetti meritano attenzione:</p>
    <ul>
      <li><strong>La clausola di indicizzazione.</strong> Molte polizze adeguano ogni anno somme e premio a un indice. In linea di principio è un bene — ma se l’adeguamento resta sotto l’andamento reale dei costi di costruzione, si scivola lentamente nella sottoassicurazione senza che nulla sembri sbagliato.</li>
      <li><strong>Il termine di disdetta.</strong> La disdetta va di norma inviata per iscritto un certo tempo prima della scadenza. Il termine è nelle condizioni. Un termine mancato significa, in pratica, un altro anno.</li>
      <li><strong>Il pagamento del premio.</strong> Il mancato pagamento può far cessare la copertura. Le compagnie portoghesi raramente inviano più solleciti, e l’addebito diretto (<em>débito direto</em>) è quindi una misura di prudenza più che una comodità.</li>
    </ul>
    <p>La nostra prassi con i clienti: una revisione annuale di somme, franchigie e cambiamenti nella Sua situazione. Non per cambiare compagnia ogni anno, ma perché una polizza giusta tre anni fa raramente lo è oggi.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="sette">
  <div class="container narrow article-body">
    <h2 id="sette">Sette domande da porre a qualsiasi intermediario</h2>
    <p>Anche a noi. Se non riceve risposte chiare, farebbe bene a rivolgersi altrove.</p>
    <ol class="process-steps">
      <li><div><strong>È registrato presso l’ASF, e con quale numero?</strong><span> Il registro è pubblico e consultabile.</span></div></li>
      <li><div><strong>Con quali compagnie può collocare?</strong><span> Una sola compagnia non è di per sé un problema, ma va detto chiaramente.</span></div></li>
      <li><div><strong>Riceverò le condizioni prima della sottoscrizione, in una lingua che capisco?</strong><span> Noi Le consegniamo una spiegazione scritta in italiano.</span></div></li>
      <li><div><strong>Come è stata calcolata la somma assicurata?</strong><span> Se il numero viene dal prezzo d’acquisto, probabilmente è sbagliato.</span></div></li>
      <li><div><strong>Quali sono le tre esclusioni più importanti di questa polizza?</strong><span> Se non sa indicarle, le condizioni non sono state lette.</span></div></li>
      <li><div><strong>Che cosa succede quando denuncio un sinistro — con chi parlo?</strong><span> La risposta dice quanto vale la consulenza.</span></div></li>
      <li><div><strong>Come segue la polizza nel tempo?</strong><span> Un contratto che nessuno guarda diventa sbagliato da solo.</span></div></li>
    </ol>
  </div>
</section>

<section class="section plain" aria-labelledby="prodotti">
  <div class="container narrow article-body">
    <h2 id="prodotti">Ai prodotti</h2>
    <ul class="hub-list">
      <li class="hub-item">
        <h3><a href="/it/assicurazione-casa-alto-valore/">Assicurazione casa di alto valore</a></h3>
        <p>Sopralluogo, ricostruzione, contenuto e arte a valore concordato — e le basi portoghesi: danni da acqua, terremoto e seconda casa.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/it/assicurazione-sanitaria-internazionale/">Assicurazione sanitaria internazionale</a></h3>
        <p>Copertura privata internazionale per la famiglia, SNS, carenze, valutazione sanitaria e che cosa succede con il SSN dopo l’AIRE.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/it/assicurazione-auto-portogallo/">Assicurazione auto in Portogallo</a></h3>
        <p>Targa, coperture, ISV e reimmatricolazione, attestato di rischio.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/it/responsabilita-civile-famiglia/">Responsabilità civile della famiglia</a></h3>
        <p>Massimali milionari, in tutto il mondo, e la RC professionale come polizza distinta.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/it/trasferirsi-in-portogallo-assicurazioni/">Trasferirsi in Portogallo</a></h3>
        <p>L’ordine giusto, l’iscrizione all’AIRE e le tre lacune che si aprono durante un trasferimento.</p>
      </li>
      <li class="hub-item">
        <h3><a href="/it/comprare-casa-portogallo-spagna-assicurazione/">Comprare casa in Portogallo o in Spagna</a></h3>
        <p>Che cosa chiede la banca, i tre valori dell’immobile e la verifica tecnica prima dell’acquisto.</p>
      </li>
    </ul>
  </div>
</section>`,
  faqTitle: 'Assicurazioni in Portogallo — domande generali',
  faq: [
    {
      q: 'Rivolgersi a un intermediario costa di più?',
      a: '<p>No. La remunerazione dell’intermediario è compresa nel premio ed è pagata dalla compagnia, sia che si sottoscriva direttamente sia tramite un intermediario. La differenza è che qualcuno legge le condizioni, fissa con Lei le somme e La assiste nel sinistro.</p>',
    },
    {
      q: 'Posso avere la polizza in italiano?',
      a: '<p>Le polizze delle compagnie portoghesi sono emesse in portoghese, quelle delle compagnie spagnole in spagnolo. La nostra lingua di lavoro ufficiale è l’inglese; per iscritto comunichiamo con Lei in italiano, con l’aiuto della traduzione assistita dall’intelligenza artificiale, e prima della firma Le consegniamo una spiegazione scritta in italiano di coperture, somme, franchigie ed esclusioni.</p>',
    },
    {
      q: 'Come verifico che una compagnia o un intermediario siano in regola?',
      a: '<p>Attraverso il registro pubblico dell’ASF di compagnie e intermediari, dove risultano registrazione, categoria e rami in cui l’intermediario può operare. La nostra registrazione: <em>agente de seguros</em> n. 425591790/3.</p>',
    },
    {
      q: 'Che cosa faccio se la compagnia rifiuta il mio sinistro?',
      a: '<p>Chieda la decisione per iscritto, con il riferimento alla clausola delle condizioni su cui si basa, e chieda un riesame con documentazione integrativa. Se non basta, esistono il <em>livro de reclamações</em> e il reclamo all’ASF. Apriamo e seguiamo queste pratiche per i nostri clienti.</p>',
    },
    {
      q: 'Perché i premi portoghesi sono talvolta più bassi di quelli italiani?',
      a: '<p>In parte per un diverso livello dei costi e una diversa frequenza dei sinistri — ma anche perché la copertura è spesso più ristretta, e garanzie che in Italia si danno per acquisite qui si vendono a parte. Confronti quindi copertura con copertura, non importo finale con importo finale.</p>',
    },
    {
      q: 'Posso tenere una compagnia italiana per la casa in Portogallo?',
      a: '<p>Di solito no. L’assicurazione di un immobile viene normalmente stipulata con una compagnia autorizzata nel paese in cui l’immobile si trova, e la gestione dei sinistri presuppone una presenza locale. Si faccia dare una risposta scritta dalla Sua compagnia italiana prima di dare per scontato che qualcosa valga anche qui.</p>',
    },
  ],
  related: [
    { url: '/it/assicurazione-casa-alto-valore/', label: 'Assicurazione casa di alto valore' },
    { url: '/it/trasferirsi-in-portogallo-assicurazioni/', label: 'Trasferirsi in Portogallo: le assicurazioni nell’ordine giusto' },
  ],
};
