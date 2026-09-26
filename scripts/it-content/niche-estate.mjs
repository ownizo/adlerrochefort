/**
 * /it/assicurazione-tenuta-vigneto/
 *
 * Search intent: "assicurazione tenuta agricola Portogallo", "assicurazione
 * vigneto Spagna", "assicurazione cantina" — Italian owners (and buyers) of a
 * quinta or herdade in the Douro, Alentejo, Comporta or Sintra, or a finca in
 * Rioja, Ribera del Duero, Andalusia, Mallorca or the Empordà.
 *
 * Italian angle: an Italian reader often already knows the tenuta/cantina
 * model — residence, agriturismo, winery and wine sales under one owner — and
 * the problem it creates: a patchwork of policies. Both Iberian countries run
 * state-supported agricultural insurance (mentioned generally, as a separate
 * layer, like the Italian assicurazioni agevolate). Workers' accident cover is
 * handled differently in PT (compulsory private policy) and ES (Social
 * Security, with complementary accident cover often required by the
 * collective agreement) — stated carefully.
 *
 * Placed through specialist markets and co-brokerage partners where needed.
 * No insurer named, no prices. Short form pre-selected on the estate branch.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const ESTATE_PAGE = {
  slug: 'assicurazione-tenuta-vigneto',
  url: '/it/assicurazione-tenuta-vigneto/',
  cluster: 'niche-estate',
  title: 'Assicurazione tenute, quintas e vigneti | Adler & Rochefort',
  description:
    'Tenute e vigneti in Portogallo e Spagna: residenza, cantina, stock di vino, incendi boschivi, enoturismo e personale in un programma coerente.',
  keywords:
    'assicurazione tenuta agricola Portogallo, assicurazione vigneto, assicurazione cantina vino, assicurazione quinta Douro, assicurazione herdade Alentejo, assicurazione finca Spagna, enoturismo responsabilità civile, assicurazione stock vino, incendio boschivo assicurazione',
  eyebrow: 'Coperture specialistiche · Tenute e vigneti',
  h1: 'Tenute, quintas e vigneti: un’unica proprietà, un’unica copertura',
  standfirst:
    'Una tenuta è insieme casa, azienda agricola, cantina e spesso struttura ricettiva. Di solito è anche assicurata con polizze separate che non si parlano. Mettiamo in ordine il quadro in Portogallo e in Spagna — dalla villa padronale allo stock in barricaia.',
  published: '2026-09-26T18:00:00+00:00',
  modified: '2026-09-26T18:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Tenute e vigneti' }],
  pullquote:
    'In una tenuta il sinistro più pericoloso è quello che cade tra due polizze — e ciascuna compagnia indica l’altra.',
  schemaType: 'Article',
  formHeading: 'Richieda una valutazione scritta della tenuta',
  formBranch: 'IT · Tenute e vigneti',
  formSubject: 'Tenuta, quinta o vigneto',
  formCta: 'Invii la richiesta',
  formIntro:
    'Ci descriva la proprietà e le attività che vi si svolgono, oppure ci invii le polizze attuali. Le rispondiamo per iscritto: che cosa è coperto, dove si sovrappongono o si interrompono le polizze e che cosa consigliamo. Le condizioni definitive dipendono dalla sottoscrizione e dalla polizza effettivamente emessa.',
  formPlaceholder:
    'Per esempio: quinta nel Douro con casa padronale e due case per ospiti, 25 ettari di vigneto, cantina con barricaia, degustazioni e matrimoni da maggio a ottobre, sei dipendenti fissi più stagionali.',
  sections: `
<section class="section plain" aria-labelledby="per-chi">
  <div class="container narrow article-body">
    <h2 id="per-chi">Per chi è pensata</h2>
    <p>Lavoriamo per proprietari che vivono o soggiornano nella tenuta e, allo stesso tempo, la fanno produrre. In Portogallo: le <em>quintas</em> del Douro, le <em>herdades</em> dell’Alentejo, le proprietà di Comporta e le tenute storiche di Sintra. In Spagna: le <em>fincas</em> e le <em>bodegas</em> di Rioja e Ribera del Duero, i <em>cortijos</em> andalusi, le <em>possessions</em> di Maiorca e le tenute dell’Empordà.</p>
    <p>Chi viene da una tenuta in Toscana, nelle Langhe o in Franciacorta conosce bene lo schema: una polizza per la casa, una per l’azienda agricola, una per la cantina, magari una per l’agriturismo, ognuna stipulata in un momento diverso e con un intermediario diverso. In Portogallo e in Spagna la tentazione è ripetere lo stesso mosaico. Noi partiamo dalla proprietà nel suo insieme.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="rischi">
  <div class="container narrow article-body">
    <h2 id="rischi">I rischi, e che cosa cambia tra Portogallo e Spagna</h2>
    <p>Il rischio che accomuna l’entroterra portoghese e quello spagnolo è l’<strong>incendio boschivo</strong>. Una tenuta circondata da macchia, pineta o eucalipto ha un’esposizione che una villa in città non conosce, e le compagnie la valutano con attenzione: fasce di protezione, pulizia del terreno, riserve d’acqua, accessi per i mezzi di soccorso. Accanto all’incendio contano la grandine sul vigneto, la siccità, il gelo tardivo e, per la cantina, l’interruzione di corrente nel momento sbagliato.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <caption class="visually-hidden">Tenute e vigneti: differenze tra Portogallo e Spagna</caption>
        <thead>
          <tr><th scope="col">Aspetto</th><th scope="col">In Portogallo</th><th scope="col">In Spagna</th></tr>
        </thead>
        <tbody>
          <tr><td>Assicurazione del raccolto</td><td>Sistema di assicurazioni agricole con contributo pubblico, come strato separato</td><td>Sistema di <em>seguros agrarios</em> con contributo pubblico, molto diffuso nel settore vitivinicolo</td></tr>
          <tr><td>Infortuni dei lavoratori</td><td>Assicurazione privata contro gli infortuni sul lavoro (<em>acidentes de trabalho</em>), obbligatoria per il datore di lavoro</td><td>Coperti dalla <em>Seguridad Social</em>; il contratto collettivo di settore richiede spesso una polizza infortuni integrativa, e la RC del datore di lavoro è raccomandata</td></tr>
          <tr><td>Incendio boschivo</td><td>Obblighi di pulizia del terreno attorno agli edifici; esposizione elevata nell’interno e al Centro</td><td>Esposizione elevata nell’interno e in Andalusia; regole regionali sulla prevenzione</td></tr>
          <tr><td>Catastrofi naturali</td><td>Fenomeni sismici e alluvioni come garanzie da concordare</td><td>Rischi straordinari coperti dal <em>Consorcio de Compensación de Seguros</em> attraverso la polizza</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section plain" aria-labelledby="comprende">
  <div class="container narrow">
    <div class="article-body">
      <h2 id="comprende">Che cosa comprende un programma ben costruito</h2>
      <p>Un unico quadro, anche quando le polizze restano più d’una: stesse somme, stesse definizioni, nessuna zona grigia tra la casa e l’azienda.</p>
    </div>
    <div class="feature-grid" style="margin-top:12px;margin-bottom:28px;">
      <div class="feature-card">
        <h3>Casa padronale e dépendance</h3>
        <p>Villa principale, case per ospiti e per il personale, annessi, muri di cinta e terrazzamenti, assicurati al costo di ricostruzione — compresi i materiali tradizionali di un edificio storico.</p>
      </div>
      <div class="feature-card">
        <h3>Acqua e infrastrutture</h3>
        <p>Pozzi, cisterne, vasche e piccole dighe, impianti di irrigazione, cancelli e strade interne: spesso dimenticati, costosi da ripristinare.</p>
      </div>
      <div class="feature-card">
        <h3>Contenuto e arte</h3>
        <p>Arredi, opere d’arte e collezioni della casa padronale, con gli oggetti di valore a valore concordato come in una <a href="/it/assicurazione-casa-alto-valore/">residenza di alto valore</a>.</p>
      </div>
      <div class="feature-card">
        <h3>Stock di vino</h3>
        <p>Vino in botte, in barricaia e in bottiglia. La base di valutazione va scelta: costo di produzione o valore di mercato. Per le annate pregiate conviene un valore concordato.</p>
      </div>
      <div class="feature-card">
        <h3>Cantina e deperimento</h3>
        <p>Tini, presse, linee di imbottigliamento e impianti di refrigerazione, compreso il deterioramento del vino per guasto agli impianti o interruzione di energia.</p>
      </div>
      <div class="feature-card">
        <h3>Macchinari agricoli</h3>
        <p>Trattori, vendemmiatrici e attrezzature, contro danni, incendio e furto — dentro e fuori dalla proprietà.</p>
      </div>
      <div class="feature-card">
        <h3>Responsabilità civile e da prodotto</h3>
        <p>RC verso visitatori, clienti e vicini per degustazioni, visite, eventi e matrimoni; RC prodotto per il vino venduto; RC ambientale per inquinamento accidentale.</p>
      </div>
      <div class="feature-card">
        <h3>Interruzione di attività</h3>
        <p>La perdita di margine della cantina e dell’attività ricettiva dopo un sinistro coperto — un incendio a settembre non tocca solo gli edifici.</p>
      </div>
    </div>
    <div class="article-body">
      <p>Il raccolto sulla pianta è di norma un capitolo a sé, coperto dai sistemi di assicurazione agricola con contributo pubblico dei due paesi, come in Italia le polizze agevolate. Lo coordiniamo con il resto del programma, perché le date di sottoscrizione e le definizioni non coincidono.</p>
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="lacune">
  <div class="container narrow article-body">
    <h2 id="lacune">Che cosa va storto più spesso</h2>
    <ul>
      <li><strong>La polizza casa che non sa della cantina.</strong> Una normale <em>multirriscos habitação</em> o un <em>seguro de hogar</em> non sono scritti per un’attività produttiva o ricettiva. Se nella stessa proprietà si producono vino o si ospitano eventi, va dichiarato.</li>
      <li><strong>Lo stock valutato al costo.</strong> Una barricaia di annate pregiate indennizzata al costo di produzione vale molto meno di quanto il proprietario pensi.</li>
      <li><strong>Eventi senza RC adeguata.</strong> Un matrimonio con duecento ospiti, i fuochi d’artificio, un catering esterno: la responsabilità ricade spesso sul proprietario se i contratti non sono chiari.</li>
      <li><strong>Personale stagionale non assicurato.</strong> In Portogallo l’assicurazione contro gli infortuni sul lavoro è obbligatoria anche per chi lavora solo durante la vendemmia.</li>
      <li><strong>Somme sul fabbricato ferme all’acquisto.</strong> Muri in pietra, tetti in coppi e travi in legno costano da ricostruire molto più di quanto suggerisca il prezzo pagato.</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="ci-serve">
  <div class="container narrow article-body">
    <h2 id="ci-serve">Che cosa ci serve per ottenere condizioni</h2>
    <ol class="process-steps">
      <li><div><strong>Planimetria e descrizione degli edifici</strong><span> — superfici, anno e tipo di costruzione, uso di ciascun edificio.</span></div></li>
      <li><div><strong>Le attività</strong><span> — produzione, vendita diretta, enoturismo, alloggio, eventi — con volumi e stagionalità indicativi.</span></div></li>
      <li><div><strong>Lo stock</strong><span> — quantità in botte e in bottiglia, annate, e la base di valutazione preferita.</span></div></li>
      <li><div><strong>Prevenzione incendi</strong><span> — fasce di protezione, riserve d’acqua, idranti, distanza dai vigili del fuoco.</span></div></li>
      <li><div><strong>Personale</strong><span> — dipendenti fissi e stagionali, mansioni, eventuali contratti con terzi.</span></div></li>
      <li><div><strong>Polizze in corso e sinistri</strong><span> degli ultimi cinque anni.</span></div></li>
    </ol>
  </div>
</section>

<section class="section tint" aria-labelledby="come">
  <div class="container narrow article-body">
    <h2 id="come">Come lavoriamo</h2>
    <ol class="process-steps">
      <li><div><strong>Valutazione scritta.</strong><span> Analizziamo le polizze esistenti e Le indichiamo per iscritto dove si sovrappongono, dove si interrompono e che cosa manca.</span></div></li>
      <li><div><strong>Mercati specializzati.</strong><span> La parte residenziale si colloca nel nostro portafoglio di compagnie; stock di vino, RC da prodotto e coperture agricole richiedono spesso mercati specializzati e partner di co-brokerage. Glielo diciamo apertamente.</span></div></li>
      <li><div><strong>Un unico consulente.</strong><span> Un solo interlocutore per casa, azienda e cantina — e per la tenuta in Spagna, se c’è.</span></div></li>
      <li><div><strong>Sinistri.</strong><span> Denunciamo il sinistro, seguiamo il perito e coordiniamo le compagnie coinvolte, perché nessuna rimandi all’altra.</span></div></li>
    </ol>
    <div class="callout">
      <span class="callout-label">Avvertenza</span>
      Le informazioni su obblighi e sistemi pubblici in Portogallo e in Spagna hanno carattere generale e non costituiscono consulenza legale o giuslavoristica. L’esistenza e l’ampiezza della copertura dipendono dalla sottoscrizione del rischio e dalle condizioni della polizza effettivamente emessa.
    </div>
  </div>
</section>`,
  faqTitle: 'Tenute e vigneti — domande',
  faq: [
    {
      q: 'Posso assicurare casa, cantina ed enoturismo con un’unica polizza?',
      a: '<p>A volte sì, più spesso con un programma di due o tre polizze coordinate: stesse somme, stesse definizioni e nessuna zona scoperta tra l’una e l’altra. Ciò che conta è che una compagnia sappia dell’altra e che ogni attività sia dichiarata.</p>',
    },
    {
      q: 'Come si assicura il vino in cantina?',
      a: '<p>Come stock, con una base di valutazione scelta in anticipo: costo di produzione o valore di mercato. Per le annate pregiate conviene un valore concordato. A parte si considera il deterioramento del vino dovuto a guasti degli impianti o a interruzioni di energia.</p>',
    },
    {
      q: 'Il raccolto è compreso?',
      a: '<p>Di norma no. Sia il Portogallo sia la Spagna hanno sistemi di assicurazione agricola con contributo pubblico per grandine, gelo e altri eventi sul raccolto. È uno strato separato, che coordiniamo con le polizze sugli edifici e sulla cantina.</p>',
    },
    {
      q: 'Organizziamo matrimoni e degustazioni. Che cosa serve?',
      a: '<p>Una responsabilità civile che comprenda espressamente visitatori ed eventi, con massimali adeguati, e una RC prodotto per il vino venduto. Conviene anche verificare le coperture di catering, allestitori e altri fornitori, e che cosa dicono i contratti con gli sposi.</p>',
    },
    {
      q: 'La tenuta è in una zona a rischio incendi. È ancora assicurabile?',
      a: '<p>Nella grande maggioranza dei casi sì, ma le condizioni dipendono dalla prevenzione: fasce di protezione, pulizia del terreno, riserve d’acqua e accessi. Una descrizione accurata di queste misure fa la differenza sia sull’accettazione sia sulle condizioni.</p>',
    },
  ],
  related: [
    { url: '/it/', label: 'Assicurazioni per grandi patrimoni — Portogallo e Spagna' },
    { url: '/it/assicurazione-casa-alto-valore/', label: 'Assicurazione casa di alto valore' },
    { url: '/it/assicurazione-cavalli/', label: 'Cavalli, scuderie e proprietà equestri' },
    { url: '/it/assicurazione-affitto-villa-lusso/', label: 'Affitto di ville di lusso' },
  ],
};
