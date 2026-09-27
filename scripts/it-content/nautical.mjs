/**
 * /it/marine-yacht-portogallo-spagna/  (cluster: nautical)
 *
 * Pillar article, September 2026. The sea comes first: the marinas and
 * sailing grounds of Portugal and Spain (~45%), then the waterfront homes and
 * berths (~30%), then protecting the yacht, the crew, the house and the family
 * (~25%), closing on a written assessment.
 *
 * Italian reader: knows Porto Cervo, Portofino and the Barcolana, followed
 * Luna Rossa in Barcelona in 2024, and often owns a yacht built in an Italian
 * yard. Less familiar with the Portuguese Atlantic, Madeira and the Azores.
 * Formal Lei. Compulsory-insurance and crewing rules kept general. The Italian
 * language policy lives in shared.mjs; nothing here contradicts it.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

const section = (band, id, inner) => `
<section class="section ${band}" aria-labelledby="${id}">
  <div class="container narrow article-body">
${inner}
  </div>
</section>`;

export const NAUTICAL_PAGE = {
  slug: 'marine-yacht-portogallo-spagna',
  url: '/it/marine-yacht-portogallo-spagna/',
  cluster: 'nautical',
  title: 'Marine e yacht in Portogallo e Spagna | Adler & Rochefort',
  description:
    'Da Palma e Puerto Banús a Vilamoura, Cascais e Horta: le grandi marine della penisola iberica, le case sul mare e come proteggere lo yacht e la famiglia.',
  keywords:
    'marine Portogallo, marina di Vilamoura, marina di Cascais, Club de Mar Palma, Puerto Portals, Port Adriano, Puerto Banús, Sotogrande porto, ARC Las Palmas, Horta Azzorre, assicurazione yacht, assicurazione barca Spagna, casa sul mare Portogallo',
  eyebrow: 'Private Clients · Nautica',
  h1: 'Marine e yacht in Portogallo e in Spagna: dal Mediterraneo all’Atlantico',
  standfirst:
    'Palma e Puerto Banús, Vilamoura e Cascais, Horta e Las Palmas: una guida ai porti e alle acque che definiscono la nautica nella penisola iberica, alle case che guardano il pontile e a ciò che conviene avere in ordine prima di mollare gli ormeggi.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Marine e yacht' }],
  pullquote:
    'Il mare non distingue tra Mediterraneo e Atlantico. La polizza sì — ed è bene sapere dove traccia il confine.',
  schemaType: 'Article',
  formHeading: 'Richieda una valutazione scritta per lo yacht e la casa',
  formBranch: 'IT · Yacht e casa sul mare',
  formSubject: 'Yacht, barca e casa sul mare',
  formCta: 'Invii la richiesta',
  formIntro:
    'Ci descriva l’imbarcazione, dove si trova l’ormeggio, in quali acque naviga e se la noleggia, oppure ci invii le polizze attuali della barca e della casa. Le rispondiamo per iscritto. Le condizioni definitive dipendono dalla sottoscrizione e dalla polizza effettivamente emessa.',
  formPlaceholder:
    'Per esempio: motoryacht di 24 metri costruito in Italia, ormeggio a Port Adriano, comandante professionista, rimessaggio invernale a Palma; appartamento sul porto di Vilamoura.',
  sections: `${section(
    'plain',
    'mare',
    `    <h2 id="mare">Due mari, una penisola</h2>
    <p>Poche coste al mondo offrono tanta varietà in così poche miglia. A est, il Mediterraneo delle Baleari e della Costa del Sol: cale d’acqua trasparente, porti ricchi di storia e una stagione che va da maggio a ottobre. A ovest e a sud, l’Atlantico portoghese: vento costante, onda vera e una tradizione di navigazione oceanica che parte da Lisbona e prosegue fino a Madeira e alle Azzorre.</p>
    <p>Chi ha seguito Luna Rossa a Barcellona nel 2024 conosce già una parte di questa storia: la Spagna ha ospitato la America’s Cup a Valencia nel 2007 e nel 2010, e a Barcellona per la 37ª edizione. Ogni estate la Copa del Rey riunisce a Palma una delle flotte più spettacolari del Mediterraneo — un po’ ciò che la Maxi Yacht Rolex Cup è per Porto Cervo. Il Portogallo, dal canto suo, è lo scalo naturale di chi attraversa l’Atlantico. Questa guida percorre i due paesi dall’acqua, poi dalla banchina, e si chiude con ciò che conviene avere in ordine.</p>`
  )}
${section(
    'tint',
    'portogallo',
    `    <h2 id="portogallo">Portogallo: la costa atlantica e le isole</h2>
    <h3>Vilamoura, Lagos e Portimão</h3>
    <p>La <strong>marina di Vilamoura</strong> è il grande porto turistico dell’Algarve, circondata da ristoranti, alberghi e appartamenti, a due passi dai campi da golf. Più a ovest, la <strong>marina di Lagos</strong>, al riparo della città storica, è punto di partenza e d’arrivo di molte traversate oceaniche, e <strong>Portimão</strong> offre ancoraggi e una marina ben protetta accanto alla Praia da Rocha.</p>
    <h3>Cascais e Lisbona</h3>
    <p>La <strong>marina di Cascais</strong>, davanti alla cittadella, è la base della vela agonistica portoghese e ha ospitato regate internazionali di primo piano. A Lisbona il Tago offre uno degli ingressi più belli d’Europa: la <strong>Doca de Alcântara</strong>, sotto il ponte 25 de Abril, e la <strong>marina del Parque das Nações</strong>, nella parte moderna della città. Sull’altra sponda dell’estuario, <strong>Tróia</strong> apre la strada alla penisola e alla Comporta.</p>
    <h3>Madeira e Azzorre</h3>
    <p>A Madeira, <strong>Funchal</strong> e la <strong>marina di Calheta</strong>, sulla costa soleggiata del sud, sono scali dal clima mite tutto l’anno. Alle Azzorre, <strong>Horta</strong>, sull’isola di Faial, è la tappa leggendaria della navigazione transatlantica: la tradizione vuole che ogni equipaggio lasci dipinto il proprio emblema sulla banchina prima di ripartire, e il caffè del porto custodisce decenni di racconti di traversata.</p>
    <h3>La rotta dell’Atlantico</h3>
    <p>Ogni autunno decine di yacht scendono lungo la costa portoghese verso Madeira e le Canarie per attraversare fino ai Caraibi con gli alisei. Molti prenderanno il via della ARC da Las Palmas. Per l’armatore, il Portogallo è insieme destinazione e tappa.</p>`
  )}
${section(
    'plain',
    'spagna',
    `    <h2 id="spagna">Spagna: dal Mediterraneo alle Canarie</h2>
    <h3>Palma di Maiorca</h3>
    <p>Palma è la capitale nautica del Mediterraneo occidentale e uno dei grandi poli mondiali dei superyacht. Il <strong>Club de Mar</strong> accoglie alcune delle unità più grandi del Mediterraneo; il <strong>Real Club Náutico de Palma</strong> organizza la Copa del Rey; <strong>Puerto Portals</strong> è il punto d’incontro mondano dell’estate e <strong>Port Adriano</strong>, a El Toro, unisce ormeggi per grandi yacht a un’architettura molto curata. A Palma si riparano, si ristrutturano e si svernano molti yacht del Mediterraneo, compresi tanti usciti dai cantieri italiani.</p>
    <h3>Ibiza</h3>
    <p><strong>Marina Ibiza</strong> e <strong>Ibiza Magna</strong>, di fronte a Dalt Vila, sono la base di una stagione che si vive tanto in acqua quanto a terra, con Formentera all’orizzonte.</p>
    <h3>La Costa del Sol</h3>
    <p><strong>Puerto Banús</strong> è da decenni l’immagine del lusso di Marbella, con gli yacht allineati lungo il lungomare. Più a ovest, il porto di <strong>Sotogrande</strong> offre una nautica più tranquilla, integrata nella comunità residenziale, con case e appartamenti affacciati direttamente sui pontili.</p>
    <h3>Barcellona, Valencia e Costa Brava</h3>
    <p><strong>OneOcean Port Vell</strong>, nel cuore di Barcellona, è una delle marine per grandi yacht più importanti del Mediterraneo e la base della America’s Cup del 2024. Valencia conserva l’impronta delle edizioni del 2007 e del 2010. E la <strong>Costa Brava</strong>, con le sue cale e i piccoli porti, resta la navigazione estiva di molte famiglie catalane.</p>
    <h3>Canarie</h3>
    <p><strong>Las Palmas de Gran Canaria</strong> è il punto di partenza della ARC, il grande rally transatlantico verso i Caraibi: ogni novembre il porto si riempie di equipaggi di mezzo mondo che preparano la traversata.</p>`
  )}
${section(
    'tint',
    'vivere',
    `    <h2 id="vivere">Vivere sul mare: case, appartamenti e posti barca</h2>
    <p>La vita nautica si compra anche a terra. Nelle mete appena descritte ci sono tre modi abituali di farlo:</p>
    <ul>
      <li><strong>L’appartamento in marina.</strong> A Vilamoura, a Puerto Portals, a Port Adriano o nel porto di Sotogrande: la terrazza sull’acqua e la barca a pochi passi.</li>
      <li><strong>La villa fronte mare.</strong> In prima linea a Cascais, nel sud di Maiorca, sulla Costa del Sol o lungo la costa portoghese, a volte con accesso diretto all’acqua.</li>
      <li><strong>La casa con pontile.</strong> Dove la normativa costiera lo consente, una casa con pontile o approdo privato. In entrambi i paesi il demanio marittimo limita molto ciò che si può costruire e mantenere sulla riva, e ogni caso dipende dalla relativa autorizzazione.</li>
    </ul>
    <p>Il posto barca merita una nota a parte. Come in molti porti italiani, nella maggior parte delle marine spagnole e portoghesi non si acquista la proprietà dello specchio d’acqua, ma un diritto d’uso di lunga durata legato alla concessione del porto. È un bene di valore, che si compra, si vende e si affitta, ma durata, trasferimento e obblighi dipendono dal regolamento di ciascun porto.</p>
    <p>E la vita sul mare ha le sue esigenze: la salsedine, che mette alla prova serramenti, climatizzazione e domotica; le mareggiate invernali, violente sia in Atlantico sia nel Mediterraneo; case chiuse per mesi mentre la famiglia naviga o vive altrove.</p>`
  )}
${section(
    'plain',
    'proteggere',
    `    <h2 id="proteggere">Proteggere lo yacht, l’equipaggio e la casa</h2>
    <ul>
      <li><strong>Corpi e macchine a valore concordato.</strong> Il valore dello yacht si stabilisce alla sottoscrizione, così che in caso di perdita totale non si discuta su quanto valesse.</li>
      <li><strong>Responsabilità civile.</strong> Come in Italia per le unità a motore, anche in Portogallo e in Spagna la RC delle imbarcazioni da diporto è obbligatoria, con requisiti che dipendono dal tipo di unità. I minimi di legge sono bassi per uno yacht di pregio: conviene un massimale adeguato al rischio reale.</li>
      <li><strong>Equipaggio e comandante.</strong> Chi ingaggia l’equipaggio ne è il datore di lavoro, con gli obblighi previdenziali e assicurativi del caso. Sugli yacht commerciali di una certa dimensione si applicano inoltre le norme internazionali sul lavoro marittimo (MLC).</li>
      <li><strong>Uso privato o noleggio.</strong> Noleggiare lo yacht è un’attività commerciale: richiede l’iscrizione adeguata e una polizza che la preveda. Una polizza da diporto privato non copre un charter.</li>
      <li><strong>Limiti di navigazione.</strong> La polizza stabilisce dove la barca può navigare. Passare dal Mediterraneo all’Atlantico, attraversare verso i Caraibi o navigare nella stagione degli uragani richiede un’estensione — altrimenti si resta scoperti. Anche il rimessaggio invernale va dichiarato.</li>
      <li><strong>Tender e giocattoli d’acqua.</strong> Tender, moto d’acqua, <em>seabob</em> e simili devono comparire in polizza, con la relativa responsabilità civile.</li>
      <li><strong>Effetti personali a bordo.</strong> Gioielli, orologi, apparecchiature e abbigliamento della famiglia e degli ospiti.</li>
      <li><strong>Responsabilità in porto.</strong> Danni ad altre barche, al pontile o alle strutture; molte marine chiedono di dimostrare un massimale minimo.</li>
      <li><strong>La casa sul mare.</strong> Mareggiate, alluvioni e la corrosione da salsedine (che di norma è considerata usura, non sinistro); e, se c’è un pontile, la responsabilità verso chi lo usa.</li>
      <li><strong>La famiglia.</strong> Una responsabilità civile della famiglia con validità mondiale completa il quadro, senza sostituire quella della barca.</li>
    </ul>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Rischi catastrofali e nautica in Portogallo e in Spagna</caption>
        <thead>
          <tr><th scope="col">Aspetto</th><th scope="col">In Portogallo</th><th scope="col">In Spagna</th></tr>
        </thead>
        <tbody>
          <tr><td>Rischi catastrofali sulla casa</td><td>Nessun sistema pubblico equivalente; il terremoto è facoltativo e va sottoscritto espressamente</td><td>Il <em>Consorcio de Compensación de Seguros</em> copre alluvione, terremoto o tempesta ciclonica atipica tramite l’addizionale delle polizze danni</td></tr>
          <tr><td>RC dell’imbarcazione</td><td>Obbligatoria per le imbarcazioni da diporto</td><td>Obbligatoria per le imbarcazioni da diporto</td></tr>
          <tr><td>Noleggio</td><td>Licenza di attività e copertura adeguata</td><td>Iscrizione e copertura specifiche per l’uso commerciale</td></tr>
        </tbody>
      </table>
    </div>`
  )}
${section(
    'tint',
    'lista',
    `    <h2 id="lista">Una breve lista di controllo prima della stagione</h2>
    <ul>
      <li>Valore concordato dello yacht aggiornato; tender e giocattoli elencati.</li>
      <li>Massimale di RC adeguato alla lunghezza e alle richieste della marina.</li>
      <li>Limiti di navigazione e rimessaggio coerenti con i programmi dell’anno.</li>
      <li>Uso privato o noleggio dichiarato correttamente.</li>
      <li>Equipaggio e comandante: contratto, datore di lavoro e coperture in regola.</li>
      <li>La casa sul mare: mareggiate, alluvioni, assenze e pontile.</li>
      <li>In Portogallo, garanzia terremoto sottoscritta; in Spagna, sapere che cosa copre il Consorcio.</li>
    </ul>`
  )}
${section(
    'plain',
    'avviso',
    `    <h2 id="avviso" class="visually-hidden">Avvertenza</h2>
    <div class="callout">
      <span class="callout-label">Avvertenza</span>
      Questa guida ha carattere informativo e non costituisce un’offerta né una consulenza legale. Assicurazioni obbligatorie, iscrizione delle unità e obblighi verso l’equipaggio dipendono dalla bandiera, dall’uso e dalle dimensioni dello yacht e vanno verificati caso per caso. La copertura dipende sempre dalla sottoscrizione del rischio da parte della compagnia e dalle condizioni della polizza effettivamente emessa.
    </div>`
  )}`,
  faqTitle: 'Marine e yacht — domande',
  faq: [
    {
      q: 'In Portogallo e in Spagna l’assicurazione della barca è obbligatoria?',
      a: '<p>Sì. In entrambi i paesi la responsabilità civile delle imbarcazioni da diporto è obbligatoria. I minimi di legge, però, sono modesti per uno yacht di pregio: conviene un massimale adeguato al rischio e la copertura dei corpi a valore concordato.</p>',
    },
    {
      q: 'Posso noleggiare lo yacht qualche settimana con la polizza attuale?',
      a: '<p>No. Il charter è un’attività commerciale che richiede l’iscrizione adeguata e una polizza che la preveda. Noleggiare con una polizza da diporto privato può lasciare senza copertura la barca, l’equipaggio e gli ospiti.</p>',
    },
    {
      q: 'Vorrei attraversare verso i Caraibi con la ARC. Che cosa devo verificare?',
      a: '<p>Anzitutto i limiti di navigazione: la maggior parte delle polizze mediterranee non copre la traversata atlantica né i Caraibi senza un’estensione, e spesso esclude o condiziona la stagione degli uragani. Poi l’equipaggio, le dotazioni di sicurezza richieste e gli effetti personali a bordo.</p>',
    },
    {
      q: 'Il posto barca in marina è di mia proprietà?',
      a: '<p>Nella maggior parte dei porti turistici si acquista un diritto d’uso di lunga durata, legato alla concessione del porto, non la proprietà. Le condizioni dipendono dal regolamento di ciascun porto; prima di un acquisto è bene esaminarle con un legale.</p>',
    },
    {
      q: 'La polizza della casa copre i danni da salsedine?',
      a: '<p>Di norma no: la corrosione progressiva è considerata usura e manutenzione. Una buona polizza deve invece coprire il danno improvviso di una mareggiata, di un’alluvione o dell’ingresso di acqua di mare, alle condizioni pattuite.</p>',
    },
  ],
  related: [
    { url: '/it/', label: 'Assicurazioni per grandi patrimoni — Portogallo e Spagna' },
    { url: '/it/assicurazione-casa-alto-valore/', label: 'Assicurazione casa di alto valore' },
    { url: '/it/responsabilita-civile-famiglia/', label: 'Responsabilità civile della famiglia' },
    { url: '/it/assicurazione-affitto-villa-lusso/', label: 'Affitto di ville di lusso' },
    { url: '/it/golf-ville-lusso-portogallo-spagna/', label: 'Golf e ville di lusso in Portogallo e in Spagna' },
  ],
};
