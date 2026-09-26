/**
 * /it/assicurazione-casa-alto-valore/
 *
 * Search intent: "assicurazione casa Portogallo" / "assicurazione villa" — an
 * Italian insuring a high-value home in Portugal (and, often, a second one in
 * Spain).
 *
 * Italian-specific angles: the Italian home is insured in pieces (incendio e
 * scoppio, furto, RC capofamiglia, globale fabbricati) while Portugal bundles
 * building and contents in one multirriscos habitação; "condominio" is the
 * same word in both languages but the Portuguese building policy is often
 * only the legally required fire cover, far narrower than an Italian
 * globale fabbricati with ricerca guasti; and Italians already know seismic
 * risk and the regola proporzionale (art. 1907 c.c.), so the page builds on
 * that familiarity instead of explaining it from zero.
 *
 * No `wizard` here, unlike /dk/: the per-page quote wizard needs a
 * data/i18n/quote-form/it.json table and four more registered form names. The
 * page uses the shared it-richiesta short form, pre-selected on "IT · Casa".
 * Coverage framework: same content as COV (house, contents, valuables,
 * liability, family + disclaimer) — insurer-neutral, no prices.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const HOME_PAGE = {
  slug: 'assicurazione-casa-alto-valore',
  url: '/it/assicurazione-casa-alto-valore/',
  cluster: 'home',
  title: 'Assicurazione casa di pregio in Portogallo | Adler & Rochefort',
  description:
    'Ville e case di alto valore in Portogallo e Spagna: sopralluogo, niente regola proporzionale, ricostruzione garantita e arte a valore concordato.',
  keywords:
    'assicurazione casa Portogallo, assicurazione villa Portogallo, assicurazione casa alto valore, assicurazione casa Spagna, assicurazione opere d’arte Portogallo, multirriscos habitação, costo di ricostruzione, condominio Portogallo assicurazione, seconda casa Portogallo assicurazione, terremoto Portogallo assicurazione',
  eyebrow: 'Residenze di alto valore',
  h1: 'Assicurazione casa in Portogallo per residenze di alto valore',
  standfirst:
    'Una villa o un palazzo di pregio va assicurato con condizioni scritte per quel tipo di immobile: sopralluogo, ricostruzione senza tetto, contenuto e arte a valore concordato, responsabilità civile milionaria. Ecco su che cosa insistiamo — e le basi portoghesi su cui tutto poggia.',
  published: '2026-09-26T09:00:00+00:00',
  modified: '2026-09-26T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Assicurazione casa' }],
  pullquote: 'La somma assicurata determina l’indennizzo. Per questo si fissa per prima — e per iscritto.',
  schemaType: 'Article',
  formHeading: 'Richieda una valutazione scritta della Sua casa',
  formBranch: 'IT · Casa',
  formSubject: 'Assicurazione casa di alto valore',
  formCta: 'Invii la richiesta',
  formIntro:
    'Ci descriva l’immobile, oppure ci invii la polizza attuale. Le rispondiamo per iscritto con le somme che consigliamo, le lacune che vediamo e le condizioni che riteniamo adatte.',
  formPlaceholder:
    'Per esempio: villa del 2008 a Cascais con piscina e dépendance, circa 450 m², arredi e alcuni dipinti; polizza attuale della banca, in scadenza a marzo.',
  sections: `
<section class="section plain" aria-labelledby="polizza">
  <div class="container narrow article-body">
    <h2 id="polizza">Una polizza, due parti</h2>
    <p>La polizza casa portoghese si chiama <em>multirriscos habitação</em> ed è costruita su due parti, acquistabili separatamente o insieme:</p>
    <ul>
      <li><strong><em>Edifício</em> — il fabbricato.</strong> Murature, tetto, pavimenti, impianti fissi, cucina e bagni: tutto ciò che resta al suo posto se capovolgesse la casa. Se possiede un appartamento, è la Sua unità e ciò che vi ha installato.</li>
      <li><strong><em>Recheio</em> — il contenuto.</strong> Mobili, elettrodomestici, elettronica, abiti, biciclette, attrezzi: tutto ciò che cadrebbe.</li>
    </ul>
    <p>Chi viene dall’Italia è abituato a garanzie distinte — incendio e scoppio per il fabbricato, furto per il contenuto, la RC capofamiglia a parte. Qui convivono in un unico documento. È più semplice, ma significa anche che due somme vanno fissate correttamente nello stesso contratto, e che non si può dare per scontato che una parte ci sia solo perché c’è l’altra.</p>
    <p>In Spagna lo schema è simile: il <em>seguro de hogar</em> distingue <em>continente</em> e <em>contenido</em>. Se ha una casa in entrambi i paesi, conviene che le due polizze siano costruite con la stessa logica e le stesse somme di riferimento.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="alto-valore">
  <div class="container">
    <div class="article-body" style="max-width:760px;">
      <h2 id="alto-valore">Le condizioni che collochiamo per le residenze di alto valore</h2>
      <p>Una villa, un palazzo storico o una proprietà con piscina e foresteria richiedono condizioni diverse da una normale <em>multirriscos habitação</em>. Di seguito le condizioni di riferimento delle polizze private client che collochiamo. Prima di raccomandare una polizza la confrontiamo per iscritto con questo quadro — e Le indichiamo con precisione dove un’offerta non lo rispetta.</p>
    </div>
    <div class="article-body"><h3>La casa</h3></div>
    <div class="feature-grid" style="margin-top:12px;margin-bottom:28px;">
      <div class="feature-card">
        <h3>Sopralluogo e costo di ricostruzione</h3>
        <p>Per le residenze di maggior valore la compagnia effettua un sopralluogo senza costi per Lei, conferma il costo di ricostruzione, consiglia le somme per contenuto e oggetti di valore e suggerisce misure di prevenzione.</p>
      </div>
      <div class="feature-card">
        <h3>Rinuncia alla regola proporzionale</h3>
        <p>Accettate le somme raccomandate, la compagnia rinuncia alla riduzione proporzionale: un danno parziale viene pagato per intero, anche se nel frattempo i costi di costruzione sono aumentati.</p>
      </div>
      <div class="feature-card">
        <h3>Ricostruzione garantita</h3>
        <p>Dopo un sinistro totale la casa viene ricostruita anche se il costo supera la somma assicurata sul fabbricato — a condizione che siano state accettate le somme raccomandate dal sopralluogo.</p>
      </div>
      <div class="feature-card">
        <h3>Alloggio alternativo equivalente</h3>
        <p>Un alloggio temporaneo di pari livello, anche per animali domestici e cavalli, per tutto il tempo in cui la casa non è abitabile — non i pochi mesi tipici delle polizze standard.</p>
      </div>
      <div class="feature-card">
        <h3>Giardino, muri e dépendance</h3>
        <p>Alberi, siepi e prati, muri di cinta e di contenimento, piscine, dépendance e foresterie con somme proprie — non limitate a un importo simbolico.</p>
      </div>
      <div class="feature-card">
        <h3>Acqua, gas e ricerca del guasto</h3>
        <p>Localizzazione e riparazione delle perdite da impianti idrici, del gas o del gasolio senza sottolimiti separati, oltre all’acqua o al combustibile dispersi.</p>
      </div>
      <div class="feature-card">
        <h3>Indennizzo a Sua scelta</h3>
        <p>Indennizzo in denaro o riparazione tramite i fornitori, gli artigiani e i restauratori che sceglie Lei, senza penalizzazioni per l’una o l’altra opzione.</p>
      </div>
      <div class="feature-card">
        <h3>Nessuna franchigia nei grandi sinistri</h3>
        <p>Oltre un’entità di danno prestabilita la franchigia viene meno del tutto — proprio dove altrimenti peserebbe di più.</p>
      </div>
      <div class="feature-card">
        <h3>La casa moderna</h3>
        <p>Pannelli solari, batterie e gruppi di continuità, adeguamento ecologico in caso di ricostruzione e sostituzione delle serrature se le chiavi vengono perse o rubate.</p>
      </div>
      <div class="feature-card">
        <h3>Adattamento per invalidità</h3>
        <p>Modifiche all’abitazione se un familiare subisce un’invalidità permanente a seguito di infortunio o malattia.</p>
      </div>
    </div>
    <div class="article-body"><h3>Il contenuto</h3></div>
    <div class="feature-grid" style="margin-top:12px;margin-bottom:28px;">
      <div class="feature-card">
        <h3>Tutti i rischi, in tutto il mondo</h3>
        <p>I beni personali sono coperti contro tutti i rischi — a casa, in viaggio e in un’altra residenza — senza sottolimiti separati per ciò che porta con sé.</p>
      </div>
      <div class="feature-card">
        <h3>Contenuto oltre la somma assicurata</h3>
        <p>Accettate le somme raccomandate, l’indennizzo può superare la somma sul contenuto entro un margine concordato in anticipo, se il valore reale risulta più alto.</p>
      </div>
      <div class="feature-card">
        <h3>Nessun sottolimite dove conta</h3>
        <p>Danni accidentali e smarrimento, furto da cantine e locali accessori, arredi da giardino — senza i sottolimiti che svuotano una copertura standard.</p>
      </div>
      <div class="feature-card">
        <h3>Beni degli ospiti e nuovi acquisti</h3>
        <p>I beni dei Suoi ospiti sono protetti e i nuovi acquisti sono coperti automaticamente per un periodo di comunicazione.</p>
      </div>
      <div class="feature-card">
        <h3>Eventi in casa</h3>
        <p>Annullamento di eventi e strutture temporanee — tensostrutture, palchi — per ricevimenti organizzati a casa.</p>
      </div>
    </div>
    <div class="article-body"><h3>Oggetti di valore e collezioni</h3></div>
    <div class="feature-grid" style="margin-top:12px;margin-bottom:28px;">
      <div class="feature-card">
        <h3>Valore concordato</h3>
        <p>Arte, gioielli, orologi e collezioni iscritti a un valore stabilito all’inizio della polizza sulla base di una stima: è l’importo pagato in caso di perdita totale, senza discussioni sul deprezzamento.</p>
      </div>
      <div class="feature-card">
        <h3>Nessuna franchigia</h3>
        <p>Gli oggetti di valore assicurati a valore concordato o dichiarato non hanno franchigia.</p>
      </div>
      <div class="feature-card">
        <h3>Deprezzamento dopo il restauro</h3>
        <p>Se un oggetto viene restaurato ma perde valore di mercato, la differenza viene indennizzata — e le riparazioni non hanno un tetto di spesa.</p>
      </div>
      <div class="feature-card">
        <h3>Protezione dalla sottostima</h3>
        <p>Se un oggetto stimato da un professionista risulta valere più della somma assicurata al momento del sinistro, la polizza paga oltre il valore concordato entro un margine stabilito.</p>
      </div>
      <div class="feature-card">
        <h3>Nuovi acquisti e cantine</h3>
        <p>I nuovi oggetti sono coperti automaticamente per un periodo, e le collezioni di vini e distillati hanno condizioni di conservazione proprie.</p>
      </div>
    </div>
    <div class="article-body"><h3>Responsabilità civile</h3></div>
    <div class="feature-grid" style="margin-top:12px;margin-bottom:28px;">
      <div class="feature-card">
        <h3>Massimali adeguati alla famiglia</h3>
        <p>Responsabilità civile della famiglia con massimali di diversi milioni di euro, in tutto il mondo.</p>
      </div>
      <div class="feature-card">
        <h3>Spese di difesa oltre il massimale</h3>
        <p>Le spese legali di difesa sono pagate in aggiunta al massimale e non lo riducono.</p>
      </div>
      <div class="feature-card">
        <h3>Chi è assicurato</h3>
        <p>Il nucleo familiare, compresi i figli che studiano fuori casa e chi occasionalmente accudisce i Suoi animali; ospiti e personale domestico in relazione all’abitazione.</p>
      </div>
      <div class="feature-card">
        <h3>Tutte le residenze</h3>
        <p>Come proprietario, locatario o utilizzatore — in Portogallo, in Spagna o ovunque la famiglia abbia una casa.</p>
      </div>
    </div>
    <div class="article-body"><h3>La famiglia</h3></div>
    <div class="feature-grid" style="margin-top:12px;margin-bottom:28px;">
      <div class="feature-card">
        <h3>Sequestro ed estorsione</h3>
        <p>Spese legate al sequestro di un familiare e al riscatto, compresi consulenti specializzati e ricompense per informazioni.</p>
      </div>
      <div class="feature-card">
        <h3>Carjacking e rapina in casa</h3>
        <p>Assistenza e indennizzo dopo carjacking, rapina aggravata in casa, aggressione, road rage o air rage.</p>
      </div>
      <div class="feature-card">
        <h3>Minacce e stalking</h3>
        <p>Consulenza per la sicurezza, trasferimento temporaneo e assistenza legale quando un familiare viene minacciato o perseguitato.</p>
      </div>
      <div class="feature-card">
        <h3>Cyberbullismo e reputazione</h3>
        <p>Psicologo, consulente di sicurezza informatica, avvocato e, se necessario, le spese per un cambio di scuola dopo episodi ripetuti di cyberbullismo.</p>
      </div>
      <div class="feature-card">
        <h3>Supporto psicologico</h3>
        <p>Supporto professionale alla famiglia dopo ciascuno di questi eventi.</p>
      </div>
    </div>
    <p class="article-body" style="max-width:760px;margin:8px 0 0;font-size:14px;color:var(--muted);">Queste sono le condizioni di riferimento delle polizze private client che collochiamo. Coperture, somme, franchigie ed esclusioni variano secondo la compagnia e il rischio e sono confermate solo nei documenti di polizza emessi a Suo nome.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="rc">
  <div class="container narrow article-body">
    <h2 id="rc">La responsabilità civile non arriva da sola</h2>
    <p>In Italia molti hanno una RC capofamiglia, spesso aggiunta alla polizza casa o acquistata a parte, con massimali intorno al milione di euro. Dopo il trasferimento in Portogallo vale la pena chiedersi due cose: se quella polizza copre ancora la vita qui, e se il massimale è adeguato alla famiglia che è oggi.</p>
    <p>In una <em>multirriscos habitação</em> portoghese il quadro è diverso:</p>
    <ul>
      <li><strong>La responsabilità civile (<em>responsabilidade civil</em>)</strong> compare come opzione, oppure con una somma di base che copre la responsabilità legata all’abitazione — tipicamente i danni ai vicini dello stesso edificio. È cosa diversa da una RC della vita privata che segue Lei e la Sua famiglia fuori casa.</li>
      <li><strong>La tutela legale (<em>proteção jurídica</em>)</strong> è di norma un’opzione autonoma e raramente è inclusa di serie.</li>
    </ul>
    <p>Ne parliamo qui e non solo nella pagina sulla <a href="/it/responsabilita-civile-famiglia/">responsabilità civile</a> perché è nella polizza casa che la si cerca. Se la copertura Le è importante, va richiesta: non arriva da sola.</p>
    <p>Nelle polizze private client che collochiamo per le residenze di alto valore, invece, la responsabilità civile della famiglia è una componente fissa: massimali di diversi milioni di euro, in tutto il mondo, con le spese di difesa oltre il massimale. È una delle differenze più nette rispetto a una polizza standard.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="ricostruzione">
  <div class="container narrow article-body">
    <h2 id="ricostruzione">Il costo di ricostruzione: il numero da cui dipende tutto</h2>
    <p>La somma assicurata sul fabbricato deve essere il <strong>costo di ricostruzione a nuovo</strong>: quanto costa ricostruire lo stesso edificio nello stesso luogo, ai prezzi di oggi, comprese demolizione, sgombero e progettazione. Non è il prezzo d’acquisto e non è il valore fiscale.</p>
    <div class="callout">
      <span class="callout-label">Perché non è un dettaglio</span>
      Se la somma è troppo bassa, la compagnia applica la <em>regra proporcional</em> — la stessa regola proporzionale che conosce dal codice civile italiano. Se l’edificio è assicurato per la metà del costo di ricostruzione, riceverà metà dell’indennizzo, anche per un piccolo danno ben al di sotto della somma. Se la somma è troppo alta, paga un premio per qualcosa che non potrà mai incassare, perché l’indennizzo non supera mai il danno effettivo.
    </div>
    <p>Il prezzo d’acquisto comprende il terreno, la posizione, la vista e il mercato. Nessuno dei quattro brucia. Una casa a Cascais e una simile nell’entroterra possono costare molto diversamente all’acquisto e quasi lo stesso da ricostruire.</p>
    <p>Per il contenuto il principio è il valore a nuovo: quanto costerebbe ricomprare tutto. L’esercizio che funziona è passare stanza per stanza e annotare le cifre. Il totale supera quasi sempre la stima iniziale.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="condominio">
  <div class="container narrow article-body">
    <h2 id="condominio">Appartamento: stessa parola, non la stessa polizza</h2>
    <p>Se possiede un appartamento, possiede una <em>fração autónoma</em> — un’unità immobiliare autonoma — e una quota delle parti comuni. La parola <em>condomínio</em> è quasi identica all’italiano, ed è proprio questo a trarre in inganno.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Il condominio in Italia confrontato con il condomínio in Portogallo</caption>
        <thead>
          <tr><th scope="col"></th><th scope="col">Condominio in Italia</th><th scope="col"><em>Condomínio</em> in Portogallo</th></tr>
        </thead>
        <tbody>
          <tr><td>Polizza dell’edificio</td><td>Globale fabbricati, di solito ampia</td><td><em>Seguro de condomínio</em>, spesso al minimo di legge (incendio)</td></tr>
          <tr><td>Ampiezza</td><td>Spesso include ricerca guasti, acqua condotta e RC verso terzi</td><td>Molto variabile; una copertura più ampia è una scelta che l’assemblea deve aver fatto</td></tr>
          <tr><td>Il Suo fabbisogno</td><td>Contenuto e RC; il fabbricato è spesso già coperto</td><td><em>Multirriscos</em> sulla Sua unità, incluse le parti installate, più contenuto e RC</td></tr>
          <tr><td>Decisioni</td><td>Assemblea condominiale e amministratore</td><td><em>Assembleia de condóminos</em> e un <em>administrador</em> esecutivo</td></tr>
          <tr><td>Spese comuni</td><td>Spese condominiali ordinarie e straordinarie deliberate</td><td><em>Quota de condomínio</em> più un fondo comune di riserva, spesso modesto</td></tr>
        </tbody>
      </table>
    </div>
    <p>Il punto pratico: chieda le condizioni della polizza del <em>condomínio</em> prima di stipulare la Sua. Senza di esse sta indovinando che cosa è già coperto. In molti edifici la polizza comune è più ristretta di quanto un italiano si aspetti, e il confine tra parti comuni e private passa proprio per gli impianti che causano più spesso danni da acqua.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="danni">
  <div class="container narrow article-body">
    <h2 id="danni">Danni da acqua e terremoto — le due sezioni da leggere con cura</h2>
    <h3>Danni da acqua (<em>danos por água</em>)</h3>
    <p>Il sinistro più frequente nelle case portoghesi, e quello con le condizioni più dettagliate. Le condizioni distinguono di norma tra:</p>
    <ul>
      <li><strong>Rottura di tubazioni fisse</strong> — di solito coperta, ma spesso con un limite di età dell’impianto.</li>
      <li><strong>Infiltrazioni e perdite lente</strong> — spesso escluse, proprio perché si sviluppano nel tempo.</li>
      <li><strong>Acqua piovana da tetto o facciata</strong> — trattata a parte e legata allo stato di manutenzione dell’edificio.</li>
      <li><strong>Il costo di ricerca e riparazione del guasto</strong> — non sempre compreso nella copertura del danno conseguente. Lo chieda espressamente.</li>
      <li><strong>Danni all’unità del vicino</strong> — riguardano la responsabilità civile, non la parte danni.</li>
    </ul>
    <h3>Terremoto (<em>fenómenos sísmicos</em>)</h3>
    <p>Un rischio che un italiano non ha bisogno di vedersi spiegare. Il Portogallo ha una sismicità reale: la regione di Lisbona e l’Algarve sono le zone storicamente più esposte, e il 1755 è parte della memoria della città. La copertura è <strong>di norma un’opzione</strong>, non una parte standard: se non è stata scelta, il danno non è coperto.</p>
    <p>Il sovrappremio è in genere modesto rispetto alla somma sul fabbricato. Se la copertura sia opportuna per il Suo edificio dipende da posizione, anno e tipo di costruzione — e dalla Sua capacità di ricostruire con mezzi propri. Le indichiamo il sovrappremio, così può decidere su un numero e non su un’impressione. In Spagna il quadro è diverso: i rischi catastrofali, terremoto compreso, sono coperti dal <em>Consorcio de Compensación de Seguros</em> tramite le polizze danni ordinarie.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="seconda-casa">
  <div class="container narrow article-body">
    <h2 id="seconda-casa">Seconda casa e periodi di disabitazione</h2>
    <p>Se la casa è usata alcuni mesi l’anno, il rischio è diverso da quello di un’abitazione principale, e le condizioni portoghesi e spagnole lo trattano separatamente.</p>
    <ul>
      <li><strong>Il limite di disabitazione continuativa</strong> è indicato in giorni nelle condizioni. Superato quel limite, alcune garanzie possono essere ridotte o sospese — tipicamente furto e danni da acqua.</li>
      <li><strong>Obblighi di custodia</strong> o di chiusura del rubinetto generale possono essere richiesti, e diventano condizione per l’indennizzo.</li>
      <li><strong>I sistemi di protezione</strong> — serrature, persiane, allarme — entrano nella valutazione della garanzia furto.</li>
      <li><strong>La locazione, anche per poche settimane,</strong> va dichiarata. Veda <a href="/it/responsabilita-civile-famiglia/">responsabilità civile</a> per l’<em>alojamento local</em>.</li>
    </ul>
    <p>In Portogallo non esiste un meccanismo che trasferisca al venditore la responsabilità per i vizi scoperti dopo l’acquisto in modo semplice e assicurabile. Lo stato dell’immobile è una verifica a carico dell’acquirente — e ciò che emerge influisce sia sul premio sia su che cosa si può assicurare. Veda <a href="/it/comprare-casa-portogallo-spagna-assicurazione/">comprare casa in Portogallo o in Spagna</a>.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="banca">
  <div class="container narrow article-body">
    <h2 id="banca">La polizza della banca</h2>
    <p>Se ha un mutuo presso una banca portoghese, la banca richiederà un’assicurazione sull’immobile con sé stessa come beneficiaria per la parte del finanziamento. È giustificato: l’immobile è la garanzia. È lo stesso principio dell’incendio e scoppio che in Italia accompagna il mutuo.</p>
    <p>Il requisito è che la polizza esista, non che sia acquistata presso la banca. Una polizza firmata allo sportello nello stesso incontro del mutuo è scelta perché si adatta al processo della banca. Non per questo è inadeguata, ma nessuno l’ha confrontata con la Sua casa: il costo di ricostruzione è corretto, i danni da acqua sono coperti nella forma che conta per questo edificio, il terremoto è incluso, come sono trattati i periodi di disabitazione, c’è una responsabilità civile?</p>
    <p>Possiamo predisporre una polizza che soddisfi i requisiti della banca e che, allo stesso tempo, sia costruita sulla Sua casa. Se la banca insiste sulla propria, leggiamo con Lei ciò che propone.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="checklist">
  <div class="container narrow article-body">
    <h2 id="checklist">Checklist prima della firma</h2>
    <ol class="process-steps">
      <li><div><strong>Il costo di ricostruzione</strong><span> è calcolato sui costi di costruzione, non sul prezzo d’acquisto né sul valore fiscale.</span></div></li>
      <li><div><strong>La somma sul contenuto</strong><span> è stata stimata stanza per stanza, non indovinata.</span></div></li>
      <li><div><strong>Arte, gioielli e orologi</strong><span> sono elencati singolarmente a valore concordato, sulla base di una stima aggiornata.</span></div></li>
      <li><div><strong>La responsabilità civile</strong><span> è stata inclusa e Lei conosce il massimale.</span></div></li>
      <li><div><strong>La tutela legale</strong><span> è inclusa, oppure consapevolmente esclusa.</span></div></li>
      <li><div><strong>La sezione danni da acqua</strong><span> è stata letta, compresi i limiti di età degli impianti e il costo di ricerca del guasto.</span></div></li>
      <li><div><strong>La copertura terremoto</strong><span> è stata scelta o esclusa sulla base di un sovrappremio concreto.</span></div></li>
      <li><div><strong>I periodi di disabitazione</strong><span> sono dichiarati secondo l’uso reale della casa.</span></div></li>
      <li><div><strong>La polizza del condomínio</strong><span> è stata richiesta, se si tratta di un appartamento, per non pagare due volte né lasciare lacune.</span></div></li>
      <li><div><strong>La franchigia</strong><span> è nota per ciascuna garanzia — e Lei sa se è un importo fisso o una percentuale.</span></div></li>
    </ol>
  </div>
</section>`,
  faqTitle: 'Assicurazione casa in Portogallo — domande',
  faq: [
    {
      q: 'L’assicurazione casa è obbligatoria in Portogallo?',
      a: '<p>Per gli edifici in condominio la legge prevede l’assicurazione contro l’incendio, di solito gestita dal <em>condomínio</em>. Per le case indipendenti non esiste un obbligo generale, salvo che la banca lo richieda come condizione del mutuo. I requisiti precisi dipendono dal tipo di immobile e dalle condizioni del finanziamento.</p>',
    },
    {
      q: 'Che cosa distingue una polizza per una casa di alto valore da una polizza casa ordinaria?',
      a: '<p>Le condizioni. La compagnia effettua un sopralluogo e stabilisce il costo di ricostruzione, rinuncia alla regola proporzionale se sono accettate le somme raccomandate e garantisce la ricostruzione dopo un sinistro totale. Il contenuto è coperto contro tutti i rischi in tutto il mondo, arte e gioielli a valore concordato senza franchigia, e la responsabilità civile della famiglia con massimali di diversi milioni di euro. Il contenuto preciso dipende dalla compagnia e dal rischio ed è confermato solo nella polizza emessa.</p>',
    },
    {
      q: 'Per quale somma va assicurato l’edificio?',
      a: '<p>Per il costo di ricostruzione — quanto costa ricostruire l’edificio ai prezzi di oggi — non per il prezzo d’acquisto né per il valore fiscale. Una somma troppo bassa comporta la riduzione proporzionale in ogni sinistro; una somma troppo alta fa pagare un premio senza contropartita.</p>',
    },
    {
      q: 'La responsabilità civile è inclusa, come nella mia polizza casa italiana?',
      a: '<p>Non in modo automatico. Nelle polizze casa portoghesi la responsabilità civile è un’opzione oppure è limitata alla responsabilità legata all’abitazione. Verifichiamo che cosa prevede esattamente la Sua polizza e con quale massimale, prima che Lei dia per scontato di essere coperto.</p>',
    },
    {
      q: 'La polizza copre il terremoto?',
      a: '<p>In Portogallo solo se è stata scelta la copertura per <em>fenómenos sísmicos</em>, che di norma è un’opzione. Il sovrappremio è in genere modesto rispetto alla somma sul fabbricato, e glielo indichiamo per iscritto. In Spagna i rischi catastrofali, compreso il terremoto, sono coperti dal <em>Consorcio de Compensación de Seguros</em> attraverso le polizze danni ordinarie.</p>',
    },
    {
      q: 'Sono in affitto. Mi serve un’assicurazione?',
      a: '<p>Sì, per il Suo contenuto e la Sua responsabilità civile. Il proprietario assicura normalmente l’edificio, non i Suoi beni né i danni che Lei causa — per esempio una perdita dalla lavatrice che danneggia l’appartamento sottostante. I contratti di locazione qui prevedono spesso anche l’obbligo di un’assicurazione propria.</p>',
    },
    {
      q: 'Viviamo qui solo d’inverno. C’è qualcosa di particolare?',
      a: '<p>Sì. I periodi di disabitazione sono definiti nelle condizioni e, superato il limite, le garanzie furto e danni da acqua possono essere ridotte. Alcune compagnie richiedono la custodia o la chiusura del rubinetto generale. Dichiari l’uso reale fin dall’inizio: altrimenti l’incongruenza emerge solo al momento del sinistro.</p>',
    },
  ],
  related: [
    { url: '/it/comprare-casa-portogallo-spagna-assicurazione/', label: 'Comprare casa in Portogallo o in Spagna: l’assicurazione passo per passo' },
    { url: '/it/responsabilita-civile-famiglia/', label: 'Responsabilità civile della famiglia' },
  ],
};
