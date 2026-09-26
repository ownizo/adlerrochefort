/**
 * /it/assicurazione-auto-portogallo/
 *
 * Search intent: "assicurazione auto Portogallo" — an Italian who either
 * brings an Italian-registered car or buys one here.
 *
 * Italian-specific angles: RC auto / furto e incendio / kasko map onto a
 * Portuguese split drawn elsewhere; the classe di merito and the electronic
 * attestato di rischio have to be documented before leaving (and a
 * Portuguese insurer's recognition is not guaranteed); the Italian RC auto
 * no longer renews tacitly, which is a trap during the import gap; the
 * radiazione per esportazione at the PRA is the last step, not the first;
 * and the CAI (constatazione amichevole) is the same European form as the
 * Portuguese Declaração Amigável. Acceptance statements are hedged. Short
 * form, pre-selected on "IT · Auto" (no wizard: see home.mjs).
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const MOTOR_PAGE = {
  slug: 'assicurazione-auto-portogallo',
  url: '/it/assicurazione-auto-portogallo/',
  cluster: 'motor',
  title: 'Assicurazione auto in Portogallo per italiani | Adler & Rochefort',
  description:
    'Assicurazione auto in Portogallo per italiani: RC auto e kasko, vetture di valore, targa italiana o portoghese, ISV e IMT, attestato di rischio.',
  keywords:
    'assicurazione auto Portogallo, RC auto Portogallo, portare auto in Portogallo, immatricolare auto Portogallo ISV, patente italiana Portogallo, attestato di rischio estero, classe di merito estero',
  eyebrow: 'Assicurazione auto',
  h1: 'Assicurazione auto in Portogallo: targa, coperture e la Sua storia assicurativa',
  standfirst:
    'La domanda raramente è se si può portare l’auto, ma se conviene — e come evitare il vuoto tra immatricolazione italiana e portoghese. Qui trova entrambe le cose, senza promesse che nessuna compagnia può fare.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Assicurazione auto' }],
  pullquote: 'La copertura deve continuare mentre cambia la targa — non dopo.',
  schemaType: 'Article',
  formHeading: 'Richiesta di assicurazione auto',
  formBranch: 'IT · Auto',
  formSubject: 'Assicurazione auto in Portogallo',
  formCta: 'Invii la richiesta',
  formIntro:
    'Ci indichi l’auto, la targa attuale e la Sua storia assicurativa. Le rispondiamo per iscritto con le coperture che consigliamo e i passaggi per non restare scoperto.',
  formPlaceholder:
    'Per esempio: Porsche Macan 2023 con targa italiana, trasferimento a Cascais in primavera, classe di merito 1 senza sinistri.',
  sections: `
<section class="section plain" aria-labelledby="coperture">
  <div class="container narrow article-body">
    <h2 id="coperture">RC auto, furto e incendio, kasko — e come ragiona il Portogallo</h2>
    <p>Le garanzie sono in gran parte le stesse che conosce dall’Italia, ma la struttura dell’offerta è diversa. Il Portogallo ha due blocchi di base e vende il resto come opzioni:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Garanzie auto italiane e i loro equivalenti portoghesi</caption>
        <thead>
          <tr><th scope="col">In Italia</th><th scope="col">In Portogallo</th><th scope="col">La differenza che si nota</th></tr>
        </thead>
        <tbody>
          <tr><td>RC auto</td><td><em>Responsabilidade civile automóvel</em></td><td>Obbligatoria e sostanzialmente equivalente: i danni che Lei causa a terzi.</td></tr>
          <tr><td>Furto e incendio</td><td>Garanzie opzionali separate</td><td>Furto, incendio, cristalli e assistenza si scelgono una per una.</td></tr>
          <tr><td>Kasko</td><td><em>Danos próprios</em></td><td>Danni al proprio veicolo. La franchigia è spesso in percentuale del valore dell’auto, con un minimo.</td></tr>
          <tr><td>Tutela legale</td><td><em>Proteção jurídica</em></td><td>Di norma un’opzione, non inclusa automaticamente.</td></tr>
          <tr><td>Assistenza stradale</td><td><em>Assistência em viagem</em></td><td>Opzione a livelli: traino, rimpatrio, auto sostitutiva.</td></tr>
          <tr><td>Infortuni del conducente</td><td>Garanzie separate</td><td>La copertura <em>ocupantes</em> per le persone a bordo va scelta espressamente.</td></tr>
        </tbody>
      </table>
    </div>
    <p>La conseguenza: un’offerta portoghese che somiglia alla Sua polizza italiana con kasko può coprire lo stesso — oppure mancare di tre cose che in Italia dava per scontate. Esaminiamo le opzioni una per una e Le diamo il confronto per iscritto, invece di mettere a confronto due importi finali.</p>
    <p>Per le vetture recenti e di maggior valore, tre punti vanno chiariti per iscritto: quale valore si considera in caso di perdita totale, se la riparazione avviene in officina autorizzata con ricambi originali, e come una franchigia in percentuale incide su quella specifica auto.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="targa">
  <div class="container narrow article-body">
    <h2 id="targa">Targa italiana o portoghese — e il vuoto nel mezzo</h2>
    <p>Finché l’auto ha targa italiana, la Sua polizza italiana si basa su un veicolo immatricolato in Italia e su un contraente residente in Italia. Dopo il trasferimento della residenza, quel presupposto non corrisponde più alla realtà. Una polizza portoghese, d’altra parte, si stipula di norma solo su una <em>matrícula</em> portoghese.</p>
    <div class="callout">
      <span class="callout-label">Ciò che funziona davvero</span>
      Comunichi il trasferimento alla Sua compagnia italiana con la data esatta e chieda <strong>per iscritto</strong> se, e per quanto tempo, la copertura resta valida dopo il trasferimento. Se quel periodo è più breve della reimmatricolazione — il che accade spesso — organizziamo una copertura per il periodo intermedio e facciamo decorrere la polizza portoghese definitiva dal giorno in cui viene rilasciata la <em>matrícula</em>. Attenzione: la RC auto italiana non si rinnova tacitamente, quindi non lasci scadere la polizza italiana prima che quella portoghese sia attiva.
    </div>
    <p>La cancellazione dal PRA per esportazione (<em>radiazione</em>) si fa solo quando l’immatricolazione portoghese è completata. Un’auto senza targa valida e senza assicurazione non può circolare, né in Italia né in Portogallo.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="importazione">
  <div class="container narrow article-body">
    <h2 id="importazione">ISV e reimmatricolazione tramite IMT — una panoramica</h2>
    <p>Siamo intermediari assicurativi, non spedizionieri. Questa è la panoramica che serve per decidere, non una guida operativa. In pratica quasi tutti si affidano a un <em>despachante</em> (agente doganale) per portarla a termine.</p>
    <h3>ISV — Imposto sobre Veículos</h3>
    <p>L’imposta portoghese sui veicoli, dovuta alla prima immatricolazione in Portogallo. Non ha un vero equivalente italiano: il calcolo si basa su due componenti — <strong>cilindrata</strong> ed <strong>emissioni di CO₂</strong> — con una riduzione in funzione dell’età del veicolo.</p>
    <p>Per questo il conto spesso sorprende. Un’auto recente di grossa cilindrata può generare un ISV considerevole, mentre una piccola utilitaria a benzina con qualche anno se la cava con relativamente poco — indipendentemente da quanto è costata. Per alcune vetture, vendere in Italia e acquistare qui è la scelta più ragionevole.</p>
    <p>In caso di trasferimento definitivo della residenza può essere possibile un’<strong>esenzione per cambio di residenza</strong>. Le condizioni sono rigorose — tra l’altro, da quanto tempo possiede l’auto prima del trasferimento e per quanto deve tenerla dopo — e la domanda è soggetta a termini che decorrono dalla Sua registrazione qui. Chi prima guida e poi si informa arriva tardi.</p>
    <h3>I passaggi presso l’IMT</h3>
    <ol>
      <li>Dichiarazione doganale (<em>Alfândega</em>) e pagamento dell’ISV, oppure domanda di esenzione.</li>
      <li>Ispezione tecnica: <em>inspeção técnica</em> per i veicoli importati, con verifica della conformità UE.</li>
      <li>Omologazione presso l’IMT e attribuzione della targa portoghese.</li>
      <li>Rilascio del <em>Documento Único Automóvel</em>, il documento di circolazione.</li>
    </ol>
    <p>Quando la <em>matrícula</em> è rilasciata, parte la polizza portoghese. È lì che la copertura diventa definitiva.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="storia">
  <div class="container narrow article-body">
    <h2 id="storia">La classe di merito e l’attestato di rischio</h2>
    <p>Anni senza sinistri in Italia hanno valore anche qui — ma il riconoscimento da parte di una compagnia portoghese <strong>non è garantito</strong> e dipende dalla compagnia. Non possiamo promettere che ogni compagnia li consideri per intero. La classe di merito italiana, come tale, non esiste in Portogallo: ciò che conta è la storia sinistri documentata.</p>
    <p>Che cosa fare: scarichi l’<strong>attestato di rischio</strong> dalla Sua area riservata, o lo chieda alla compagnia, <strong>prima che il contratto termini</strong>; meglio ancora, chieda anche una dichiarazione in inglese con gli anni senza sinistri, il contraente, il veicolo e gli eventuali sinistri. Dopo, la documentazione è più difficile da ottenere, e senza di essa trattiamo da una posizione chiaramente più debole.</p>
    <p>Se invece passa a un’auto acquistata qui e non ha la documentazione, parte di norma dal livello d’ingresso della compagnia. Non è un ostacolo — ma si nota sul premio dei primi anni, ed è motivo sufficiente per procurarsi l’attestato per tempo.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="patente">
  <div class="container narrow article-body">
    <h2 id="patente">La Sua patente italiana</h2>
    <p>La patente italiana è una patente UE ed è valida per guidare in Portogallo; non va convertita. Come residente, registra la patente presso l’<strong>IMT</strong> — non è una conversione, la patente resta la Sua, ma una registrazione con un termine che decorre dalla registrazione della residenza.</p>
    <p>Perché ne parliamo in una pagina sull’assicurazione: in un sinistro si verifica che il conducente fosse abilitato. Una patente valida ma non registrata di norma non impedisce l’indennizzo, ma è proprio il tipo di questione amministrativa in sospeso che rallenta una pratica quando serve che sia rapida. Se la patente scade mentre vive qui, il rinnovo non avviene più in Italia, ma presso l’IMT.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="incidente">
  <div class="container narrow article-body">
    <h2 id="incidente">In caso di incidente: <em>Declaração Amigável</em></h2>
    <p>È lo stesso modulo europeo che in Italia conosce come constatazione amichevole (CAI). In Portogallo si chiama <em>Declaração Amigável de Acidente Automóvel</em> e dovrebbe essere sempre in auto. La struttura è identica, ma si compila in portoghese, e il modulo compilato determina in pratica come viene valutata la responsabilità.</p>
    <ol class="process-steps">
      <li><div><strong>Metta in sicurezza il luogo</strong><span> e chiami le autorità se ci sono feriti o le parti non sono d’accordo. In caso di feriti: 112.</span></div></li>
      <li><div><strong>Compili il modulo insieme</strong><span> alla controparte — schizzo, caselle, targhe, compagnie e le due firme. Firmi solo ciò su cui è d’accordo.</span></div></li>
      <li><div><strong>Fotografi</strong><span> la posizione delle auto prima di spostarle, i danni, le targhe e la segnaletica.</span></div></li>
      <li><div><strong>Denunci entro il termine delle condizioni</strong><span>, di solito pochi giorni. Ci chiami: facciamo la denuncia per Lei e seguiamo la pratica.</span></div></li>
      <li><div><strong>Officina:</strong><span> verifichi se la polizza richiede un’officina della rete della compagnia prima di commissionare la riparazione.</span></div></li>
    </ol>
    <p>Se non ha il modulo in auto: documenti comunque tutto con foto e appunti, e ci contatti lo stesso giorno.</p>
  </div>
</section>`,
  faqTitle: 'Assicurazione auto in Portogallo — domande',
  faq: [
    {
      q: 'Posso assicurare in Portogallo la mia auto con targa italiana?',
      a: '<p>Finché l’auto ha targa italiana, la copertura si gestisce di norma tramite la compagnia italiana, con conferma scritta di quanto tempo resta valida dopo il trasferimento. Una normale polizza portoghese presuppone di regola una targa portoghese.</p>',
    },
    {
      q: 'Devo reimmatricolare l’auto in Portogallo?',
      a: '<p>Non subito, ma con la residenza stabile, di norma sì. Il percorso passa per la dichiarazione doganale e l’ISV (o l’esenzione per cambio di residenza), l’ispezione tecnica e l’omologazione presso l’IMT. Conti in settimane, non in giorni — e calcoli prima l’ISV.</p>',
    },
    {
      q: 'La mia classe di merito vale in Portogallo?',
      a: '<p>La classe di merito italiana, come tale, non esiste qui; conta la storia sinistri documentata, e il riconoscimento non è garantito — dipende dalla compagnia. Scarichi l’attestato di rischio e chieda una dichiarazione in inglese <em>prima</em> che il contratto termini.</p>',
    },
    {
      q: 'Che cosa corrisponde al furto e incendio?',
      a: '<p>Non un pacchetto unico. Il Portogallo ha la <em>responsabilidade civil</em> obbligatoria e la kasko (<em>danos próprios</em>), mentre furto, incendio, cristalli e assistenza si acquistano come opzioni separate. Per questo confrontiamo garanzia per garanzia, non importi finali.</p>',
    },
    {
      q: 'Quali documenti mi servono?',
      a: '<p>Tra gli altri: documento unico di circolazione (o, per le auto più datate, libretto e certificato di proprietà), attestato di rischio, registrazione della residenza e NIF e — in caso di importazione — i documenti doganali e dell’IMT. Le forniamo l’elenco completo per la Sua situazione concreta.</p>',
    },
    {
      q: 'Devo convertire la patente?',
      a: '<p>No, la patente italiana è una patente UE ed è valida per guidare. Come residente la registra presso l’IMT entro il termine che decorre dalla registrazione della residenza; la patente resta la Sua. Il rinnovo avviene poi presso l’IMT, non in Italia.</p>',
    },
  ],
  related: [
    { url: '/it/trasferirsi-in-portogallo-assicurazioni/', label: 'Trasferirsi in Portogallo: le assicurazioni nell’ordine giusto' },
    { url: '/it/assicurazione-casa-alto-valore/', label: 'Assicurazione casa di alto valore' },
  ],
};
