/**
 * /it/golf-ville-lusso-portogallo-spagna/  (cluster: golf)
 *
 * Pillar article, September 2026. The subject comes first: the great golf
 * destinations of Portugal and Spain (~45%), then the high-value homes in the
 * golf communities (~30%), and only at the end protecting the house, the
 * contents and the family (~25%), closing on a written assessment.
 *
 * Italian reader: remembers the 2023 Ryder Cup at Marco Simone, plays at
 * home in a circolo (Acquasanta, Villa d'Este, Pevero in Costa Smeralda) and
 * is weighing the Algarve, Comporta or Cascais against the Costa del Sol or
 * Mallorca. Formal Lei. The Italian language policy (English as working
 * language, written Italian with AI-assisted translation) lives in
 * shared.mjs; nothing here contradicts it. No insurer named, no prices.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

const section = (band, id, inner) => `
<section class="section ${band}" aria-labelledby="${id}">
  <div class="container narrow article-body">
${inner}
  </div>
</section>`;

export const GOLF_PAGE = {
  slug: 'golf-ville-lusso-portogallo-spagna',
  url: '/it/golf-ville-lusso-portogallo-spagna/',
  cluster: 'golf',
  title: 'Golf e ville di lusso in Portogallo e Spagna | Adler & Rochefort',
  description:
    'Dal Triangolo d’Oro dell’Algarve a Valderrama e La Zagaleta: i grandi campi da golf di Portogallo e Spagna, i loro resort e come proteggere la villa.',
  keywords:
    'golf Portogallo, golf Algarve, Quinta do Lago, Vale do Lobo, Valderrama, Sotogrande, La Zagaleta, Finca Cortesin, villa su campo da golf, resort di golf di lusso, assicurazione villa golf, responsabilità civile golfista',
  eyebrow: 'Private Clients · Golf',
  h1: 'Golf in Portogallo e in Spagna: i grandi percorsi e le ville che li circondano',
  standfirst:
    'Dal Triangolo d’Oro dell’Algarve alla Costa del Sol, dalla Comporta a Maiorca: una guida ai percorsi che hanno reso la penisola iberica una delle capitali europee del golf, alle comunità nate intorno a essi e a ciò che conviene avere in ordine quando la casa affaccia sul fairway.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Golf e ville di lusso' }],
  pullquote:
    'La villa sul campo si compra per il golf. Si assicura per tutto il resto: il condominio, le assenze, la macchia mediterranea e gli ospiti.',
  schemaType: 'Article',
  formHeading: 'Richieda una valutazione scritta per la Sua villa sul golf',
  formBranch: 'IT · Villa in un resort di golf',
  formSubject: 'Villa in un resort di golf',
  formCta: 'Invii la richiesta',
  formIntro:
    'Ci indichi dove si trova la casa, in quale comunità, quanti mesi l’anno la usa e se la affitta, oppure ci invii le polizze attuali — la Sua e, se esiste, quella del condominio. Le rispondiamo per iscritto. Le condizioni definitive dipendono dalla sottoscrizione e dalla polizza effettivamente emessa.',
  formPlaceholder:
    'Per esempio: villa a Quinta do Lago, usata da marzo a giugno e in ottobre, giardiniere e custode, alcune opere d’arte e una cantina; polizza del condominio e polizza propria sottoscritte separatamente.',
  sections: `${section(
    'plain',
    'penisola',
    `    <h2 id="penisola">La penisola del golf</h2>
    <p>Chi ha seguito la Ryder Cup del 2023 al Marco Simone sa quanto un grande evento possa cambiare il rapporto di un paese con il golf. La Spagna lo ha vissuto un quarto di secolo prima: nel 1997 Valderrama ospitò la prima Ryder Cup disputata nell’Europa continentale, e da allora la Costa del Sol è diventata una meta obbligata per chi gioca sul serio. Il Portogallo ha costruito in cinquant’anni qualcosa di diverso ma altrettanto solido: l’Algarve è il golf d’inverno di mezza Europa, con green veloci a gennaio e l’Atlantico sullo sfondo.</p>
    <p>Molte famiglie italiane che giocano all’Acquasanta, a Villa d’Este o al Pevero, in Costa Smeralda, valutano oggi una casa nell’Algarve, alla Comporta o a Cascais accanto a una villa a Marbella o a Maiorca. Questa guida attraversa i due paesi con lo sguardo del giocatore, poi con quello del proprietario, e si chiude con ciò che più spesso resta in sospeso.</p>`
  )}
${section(
    'tint',
    'portogallo',
    `    <h2 id="portogallo">Portogallo: dall’Algarve a Madeira</h2>
    <h3>Il Triangolo d’Oro dell’Algarve</h3>
    <p>Tra Almancil e Vilamoura si concentrano tre nomi che ogni golfista conosce. <strong>Quinta do Lago</strong> riunisce i percorsi North, South e Laranjal tra pinete e la laguna della Ria Formosa; il South ha ospitato più volte l’Open di Portogallo. <strong>Vale do Lobo</strong> ha il Royal e l’Ocean, e sul Royal una delle buche più fotografate d’Europa: un par tre da giocare sopra le falesie color ocra. <strong>Vilamoura</strong> è la storia del golf in Algarve: l’Old Course, della fine degli anni Sessanta, resta un percorso di pini e pazienza, mentre il Victoria è stato per anni la sede del Portugal Masters del circuito europeo.</p>
    <h3>Monte Rei e Palmares</h3>
    <p>A est, vicino al confine spagnolo, <strong>Monte Rei</strong> è un Signature di Jack Nicklaus in una valle silenziosa con la serra alle spalle, spesso citato tra i migliori percorsi del paese. All’altro capo dell’Algarve, a Lagos, <strong>Palmares</strong> alterna buche tra le dune vicino alla spiaggia e buche in collina sulla baia, riprogettate da Robert Trent Jones Jr.</p>
    <h3>La Comporta</h3>
    <p>A sud di Lisbona, tra risaie e dune, la Comporta è passata da rifugio discreto a una delle mete residenziali più ricercate d’Europa — qualcuno la paragona alla Capalbio di una volta. Il percorso <strong>Dunas</strong>, di David McLay Kidd, e <strong>Costa Terra</strong>, firmato da Tom Fazio, hanno portato un golf di livello internazionale su una costa che tiene, soprattutto, a non sembrare un resort.</p>
    <h3>Cascais, Sintra ed Estoril</h3>
    <p>A mezz’ora da Lisbona, <strong>Oitavos Dunes</strong> si gioca tra dune e vento atlantico con il Cabo da Roca come riferimento; <strong>Penha Longa</strong>, ai piedi della serra di Sintra, unisce golf e patrimonio storico; <strong>Quinta da Marinha</strong> è il circolo di quartiere di molte famiglie di Cascais. È golf di città: diciotto buche il martedì mattina e a mezzogiorno si è in ufficio.</p>
    <h3>La costa occidentale e Óbidos</h3>
    <p>A nord di Lisbona, <strong>Praia d’El Rey</strong> corre lungo l’oceano, <strong>West Cliffs</strong> si affaccia sulle scogliere e <strong>Royal Óbidos</strong> porta la firma di Seve Ballesteros, tra i suoi ultimi progetti. Una costa meno nota ai giocatori italiani, e proprio per questo più tranquilla.</p>
    <h3>Madeira</h3>
    <p>Sull’isola, <strong>Palheiro</strong> domina Funchal dall’alto e <strong>Santo da Serra</strong>, per anni sede dell’Open di Madeira, si gioca tra le nuvole con vista sulla costa orientale. Golf d’altura, alla lettera, con un clima mite tutto l’anno.</p>`
  )}
${section(
    'plain',
    'spagna',
    `    <h2 id="spagna">Spagna: dalla Costa del Golf alle isole</h2>
    <h3>Sotogrande e Valderrama</h3>
    <p><strong>Valderrama</strong>, ridisegnato da Robert Trent Jones Sr., è il circolo della Ryder Cup del 1997, con le sue querce da sughero e green che non perdonano. Accanto, il <strong>Real Club de Golf Sotogrande</strong>, dello stesso architetto e degli anni Sessanta, è tra i circoli più rispettati di Spagna. Sotogrande, con il porto e il polo, resta la comunità residenziale di riferimento della zona.</p>
    <h3>Marbella, Benahavís e Casares</h3>
    <p>Sulla Costa del Sol, che gli spagnoli chiamano volentieri Costa del Golf, convivono percorsi per ogni gusto. <strong>Finca Cortesin</strong>, a Casares, ha ospitato la Solheim Cup del 2023. <strong>La Zagaleta</strong>, a Benahavís, è una tenuta privata con due percorsi riservati ai proprietari e una delle comunità residenziali più esclusive d’Europa. A Nueva Andalucía, <strong>Las Brisas</strong>, anch’esso di Robert Trent Jones Sr., è il cuore della cosiddetta valle del golf di Marbella.</p>
    <h3>Maiorca</h3>
    <p>Sull’isola, <strong>Son Muntaner</strong>, a pochi minuti da Palma, e <strong>Alcanada</strong>, ad Alcúdia, con il faro e la baia in quasi ogni buca, spiegano perché tanti proprietari a Maiorca giochino in primavera e in autunno.</p>
    <h3>Catalogna e Madrid</h3>
    <p><strong>PGA Catalunya</strong>, a Caldes de Malavella, vicino a Girona, con il suo percorso Stadium, ha ospitato l’Open di Spagna ed è la porta della Costa Brava per chi gioca. A Madrid il golf è di circolo: il <strong>Real Club de la Puerta de Hierro</strong>, fondato alla fine dell’Ottocento, e <strong>La Moraleja</strong>, con i suoi percorsi all’interno di una delle comunità residenziali chiuse più consolidate di Spagna.</p>
    <h3>Canarie e Costa Blanca</h3>
    <p>A Tenerife, <strong>Abama</strong> scende a terrazze verso l’Atlantico con La Gomera di fronte: è il golf d’inverno del sud d’Europa. Sulla Costa Blanca, <strong>Las Colinas</strong>, a Orihuela Costa, ha dato vita a una comunità residenziale intorno a un percorso di valle molto curato.</p>`
  )}
${section(
    'tint',
    'vivere',
    `    <h2 id="vivere">Vivere sul campo: ville, comunità e resort</h2>
    <p>La casa sul golf non è un prodotto unico. Nelle mete appena descritte convivono tre forme di proprietà molto diverse, ognuna con le proprie regole:</p>
    <ul>
      <li><strong>La villa sul fairway.</strong> Una casa indipendente affacciata sul percorso, spesso con piscina, giardino, dépendance e personale: a Quinta do Lago, Vale do Lobo, Sotogrande o Las Brisas.</li>
      <li><strong>La comunità chiusa.</strong> Accessi controllati, vigilanza privata, strade interne e regole severe su costruzione e uso: La Zagaleta, Monte Rei, Costa Terra, La Moraleja.</li>
      <li><strong>L’appartamento nel resort.</strong> Un’unità all’interno del complesso, spesso con un programma di affitto gestito dal resort quando il proprietario non la usa.</li>
    </ul>
    <p>Quasi sempre c’è di mezzo un condominio, anche se lo si chiama diversamente. In Spagna la <em>comunidad de propietarios</em>, regolata dalla legge sulla proprietà orizzontale e dal proprio statuto; in Portogallo la <em>propriedade horizontal</em> con il regolamento di condominio, oppure un’associazione di proprietari nelle comunità di ville. La comunità fissa le regole — lavori, affitti, animali, rumore, uso dei buggy — gestisce le parti comuni e di solito assicura queste ultime, un po’ come la polizza globale fabbricati di un condominio italiano. In Portogallo, inoltre, l’assicurazione incendio dell’edificio in proprietà orizzontale è obbligatoria.</p>
    <p>Anche la vita quotidiana è diversa: vigilanza, giardinieri e manutenzione delle piscine, a carico della comunità o del proprietario; buggy che percorrono le strade interne; case chiuse per mesi tra una visita e l’altra. Niente di tutto questo è un problema. È però qualcosa che la polizza deve conoscere.</p>`
  )}
${section(
    'plain',
    'proteggere',
    `    <h2 id="proteggere">Proteggere la casa, il contenuto e la famiglia</h2>
    <p>Quando esaminiamo le polizze di una villa sul golf, ritornano sempre le stesse domande:</p>
    <ul>
      <li><strong>Il costo di ricostruzione.</strong> In una comunità di pregio, con materiali e vincoli estetici esigenti, ricostruire costa molto più della media della zona. La somma assicurata deve partire da quel costo, idealmente da una perizia.</li>
      <li><strong>La polizza del condominio e la Sua.</strong> Quella della comunità copre le parti comuni e talvolta la struttura; quasi mai gli interni, le migliorie, il contenuto o la Sua responsabilità di proprietario. Vanno lette insieme, senza vuoti né doppioni.</li>
      <li><strong>Incendi boschivi e tempeste.</strong> Molti percorsi confinano con pinete o colline: l’entroterra dell’Algarve e le montagne dell’Andalusia hanno conosciuto incendi gravi. Le mareggiate e le tempeste di vento completano il quadro.</li>
      <li><strong>Le lunghe assenze.</strong> Le condizioni limitano spesso furto e danni da acqua quando la casa resta disabitata oltre un certo periodo, talvolta con l’obbligo di allarme collegato o di chiudere l’acqua.</li>
      <li><strong>Arte e contenuto.</strong> Opere, gioielli, orologi e cantina meritano un elenco valorizzato e, spesso, una copertura a valore concordato.</li>
      <li><strong>La responsabilità civile del golfista.</strong> Una palla fuori traiettoria può ferire un altro giocatore o rompere una vetrata. La responsabilità civile della famiglia, con validità mondiale, risponde di questi danni in campo e fuori; va verificato che l’attività sportiva non sia esclusa.</li>
      <li><strong>L’attrezzatura in viaggio.</strong> Sacca e bastoni in aereo o in auto, per una gara in Scozia o una settimana a Marrakech: copertura degli effetti personali fuori casa.</li>
      <li><strong>Il buggy.</strong> In campo lo copre di solito il circolo; se il Suo percorre le strade della comunità, può servire una copertura propria.</li>
      <li><strong>L’affitto tramite il resort.</strong> Un programma di affitto è un uso commerciale e va dichiarato.</li>
      <li><strong>La hole in one.</strong> Se organizza un torneo benefico o aziendale con un’auto in palio, esiste un’assicurazione che copre il premio.</li>
    </ul>
    <p>Infine i rischi catastrofali, dove i due paesi funzionano in modo molto diverso:</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Rischi catastrofali e condominio in Portogallo e in Spagna</caption>
        <thead>
          <tr><th scope="col">Aspetto</th><th scope="col">In Portogallo</th><th scope="col">In Spagna</th></tr>
        </thead>
        <tbody>
          <tr><td>Rischi catastrofali</td><td>Nessun sistema pubblico equivalente: il terremoto è una garanzia facoltativa, da sottoscrivere espressamente</td><td>Il <em>Consorcio de Compensación de Seguros</em> copre alluvione, terremoto o tempesta ciclonica atipica tramite un’addizionale inclusa nelle polizze danni</td></tr>
          <tr><td>Condominio</td><td><em>Propriedade horizontal</em> e regolamento; assicurazione incendio dell’edificio obbligatoria</td><td><em>Comunidad de propietarios</em> e statuto</td></tr>
          <tr><td>Polizza propria</td><td>Interni, migliorie, contenuto e responsabilità del proprietario, con attenzione al terremoto e alle assenze</td><td>Interni, migliorie, contenuto e responsabilità del proprietario</td></tr>
        </tbody>
      </table>
    </div>`
  )}
${section(
    'tint',
    'lista',
    `    <h2 id="lista">Una breve lista di controllo</h2>
    <ul>
      <li>Somma assicurata basata sul costo di ricostruzione, non sul prezzo d’acquisto.</li>
      <li>Polizza del condominio letta insieme alla propria, con confini chiari.</li>
      <li>Periodi di assenza dichiarati e misure di sicurezza concordate per iscritto.</li>
      <li>Arte, gioielli e cantina elencati e valorizzati.</li>
      <li>Responsabilità civile della famiglia con validità mondiale, senza esclusione del golf.</li>
      <li>L’eventuale affitto dichiarato; buggy e personale considerati.</li>
      <li>In Portogallo, garanzia terremoto sottoscritta; in Spagna, sapere che cosa copre il Consorcio.</li>
    </ul>`
  )}
${section(
    'plain',
    'avviso',
    `    <h2 id="avviso" class="visually-hidden">Avvertenza</h2>
    <div class="callout">
      <span class="callout-label">Avvertenza</span>
      Questa guida ha carattere informativo e non costituisce un’offerta né una consulenza legale. La copertura dipende sempre dalla sottoscrizione del rischio da parte della compagnia e dalle condizioni della polizza effettivamente emessa; massimali, franchigie ed esclusioni variano da caso a caso.
    </div>`
  )}`,
  faqTitle: 'Golf e ville di lusso — domande',
  faq: [
    {
      q: 'La polizza del condominio copre la mia villa?',
      a: '<p>Di norma solo in parte. La polizza della comunità copre le parti comuni e, a seconda dello statuto, la struttura. Interni, migliorie, contenuto, opere d’arte e la Sua responsabilità di proprietario restano spesso fuori e richiedono una polizza propria, coordinata con quella del condominio.</p>',
    },
    {
      q: 'Se la mia palla ferisce un altro giocatore, chi paga?',
      a: '<p>Lei risponde dei danni causati per colpa. Una responsabilità civile della famiglia con validità mondiale gestisce la richiesta di risarcimento, comprese le spese di difesa, purché il golf non sia escluso. È tra le prime cose che verifichiamo.</p>',
    },
    {
      q: 'Restiamo lontani dalla casa per mesi. Cambia qualcosa?',
      a: '<p>Sì. Le condizioni limitano spesso furto e danni da acqua quando la casa resta disabitata oltre un certo numero di giorni, e possono richiedere un allarme collegato o la chiusura dell’acqua. L’uso reale va dichiarato e le misure concordate per iscritto.</p>',
    },
    {
      q: 'Posso affittare l’appartamento tramite il programma del resort?',
      a: '<p>Sì, ma è un uso commerciale e va dichiarato. La polizza del resort protegge il resort; la Sua unità, il contenuto e la Sua responsabilità di proprietario richiedono una polizza che ammetta l’affitto.</p>',
    },
    {
      q: 'Che differenza c’è tra Portogallo e Spagna per terremoti e alluvioni?',
      a: '<p>In Spagna il Consorcio de Compensación de Seguros copre i rischi catastrofali tramite un’addizionale inclusa nelle polizze danni. In Portogallo non esiste un sistema equivalente e il terremoto è una garanzia facoltativa, che conviene sottoscrivere espressamente.</p>',
    },
  ],
  related: [
    { url: '/it/', label: 'Assicurazioni per grandi patrimoni — Portogallo e Spagna' },
    { url: '/it/assicurazione-casa-alto-valore/', label: 'Assicurazione casa di alto valore' },
    { url: '/it/responsabilita-civile-famiglia/', label: 'Responsabilità civile della famiglia' },
    { url: '/it/assicurazione-affitto-villa-lusso/', label: 'Affitto di ville di lusso' },
    { url: '/it/marine-yacht-portogallo-spagna/', label: 'Marine e yacht in Portogallo e in Spagna' },
  ],
};
