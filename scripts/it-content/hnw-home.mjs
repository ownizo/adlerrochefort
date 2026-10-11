/**
 * High-value home conditions (October 2026), Italian — four pages.
 * Clusters home-conditions / art-beyond / family-protection / home-declare.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';
import { sec, ul, p, PUBLISHED_OCT } from '../lib/hnw-oct-sections.mjs';
import { homeSlug, homeUrl } from '../lib/hnw-home-urls.mjs';

const C = 'it-IT';
const base = (key, crumb) => ({
  slug: homeSlug(key, C), url: homeUrl(key, C), cluster: key,
  published: PUBLISHED_OCT, modified: PUBLISHED_OCT,
  breadcrumb: [...BREADCRUMB_ROOT, { name: crumb }],
  schemaType: 'Article', formBranch: 'IT · Casa', formCta: 'Richiedere l’analisi',
});
const rel = (key, label) => ({ url: homeUrl(key, C), label });
const AVV = sec('plain', 'avvertenza', 'Avvertenza', p('Informazione generale di un intermediario assicurativo, non una consulenza personalizzata. La copertura dipende dall’accettazione del rischio da parte della compagnia e dalle condizioni della polizza emessa.'));

export const HOME_PAGES = [
  {
    ...base('home-conditions', 'Casa di alto valore: le condizioni'),
    title: 'Assicurazione casa di alto valore: le condizioni | Adler & Rochefort',
    description: 'Cosa cambia un’assicurazione casa per grandi patrimoni in Portogallo e Spagna: ricostruzione garantita, nessuna regola proporzionale, franchigia esclusa nei grandi sinistri.',
    keywords: 'assicurazione casa di lusso Portogallo, assicurazione villa Spagna, nessuna regola proporzionale, ricostruzione garantita, alloggio alternativo, ricerca guasti, assicurazione casa grandi patrimoni',
    eyebrow: 'Private Clients · Casa',
    h1: 'Assicurazione casa di alto valore in Portogallo e Spagna: le condizioni, clausola per clausola',
    standfirst: 'La polizza casa ordinaria è pensata per l’abitazione media. In una villa a Comporta, Quinta do Lago o Marbella mostra i suoi limiti proprio quando il sinistro è grande. Le condizioni Private Clients che collochiamo sono costruite al contrario.',
    pullquote: 'La regola proporzionale non si discute il giorno del sinistro. Si elimina prima.',
    formHeading: 'Richiedete un’analisi scritta della vostra polizza',
    formSubject: 'Casa di alto valore — condizioni',
    formIntro: 'Inviateci la polizza attuale. Vi rispondiamo per iscritto, clausola per clausola: cosa avete, cosa manca e cosa significa in caso di sinistro.',
    formPlaceholder: 'Ad esempio: villa a Comporta con dépendance e piscina, polizza attuale della banca, opere d’arte e orologi non specificati.',
    sections: [
      sec('plain', 'capitale', 'Il capitale: perizia e ricostruzione garantita', ul([
        '<strong>Perizia gratuita</strong> di un tecnico della compagnia: costo di ricostruzione, capitali per contenuto e oggetti di valore, raccomandazioni di prevenzione.',
        '<strong>Ricostruzione garantita:</strong> accettate le raccomandazioni, dopo un danno totale la casa viene ricostruita anche se il costo supera il capitale.',
        '<strong>Nessuna regola proporzionale:</strong> un danno parziale è pagato per intero, senza riduzione per sottoassicurazione.',
        '<strong>Costo reale:</strong> stesso progetto e qualità dei materiali, onorari, nuove norme edilizie, sgombero macerie, con indicizzazione annuale.',
      ])),
      sec('tint', 'terreno', 'La casa, le pertinenze e il terreno', ul([
        '<strong>Altre costruzioni</strong> — dépendance, garage, muri — un ulteriore 20 % del capitale della casa, senza sottolimite per muri di sostegno o di cinta.',
        '<strong>Alberi, arbusti e prati</strong> fino al 10 %; <strong>stabilizzazione del terreno</strong> con un ulteriore 10 % del danno.',
        '<strong>Ricerca e riparazione guasti senza sottolimite</strong>, più l’acqua o il gasolio persi.',
        '<strong>La casa di oggi:</strong> contributo a un sistema di rilevamento perdite, al fotovoltaico o alla geotermia in ricostruzione, a un generatore dopo un black-out da tempesta; serrature senza limite e senza franchigia; adattamento della casa per invalidità permanente.',
      ])),
      sec('plain', 'alloggio', 'Quando la casa non è abitabile', ul([
        '<strong>Alloggio equivalente</strong>, compresi animali e cavalli, per tutto il tempo necessario, senza franchigia né limite di tempo fisso per la casa.',
        '<strong>Perdita di canoni</strong> ed <strong>evacuazione</strong> disposta dalle autorità per danni a un immobile vicino.',
      ])),
      sec('tint', 'contenuto', 'Il contenuto, in casa e fuori', `${ul([
        '<strong>All risks in tutto il mondo</strong>: niente polizza bagaglio separata.',
        '<strong>Fino al 25 % oltre il capitale del contenuto</strong>; valore a nuovo senza degrado; beni di ospiti e personale; nuovi acquisti per 90 giorni; annullamento di eventi privati e tensostrutture.',
      ])}
${p('Attenzione: il contenuto non specificato ha limiti speciali per contanti, gioielli e orologi, argenteria, collezioni e vino. Ciò che ha valore va specificato come oggetto di valore, a valore concordato.')}`),
      sec('plain', 'sinistro', 'Il sinistro', ul([
        '<strong>Nessuna franchigia nei grandi sinistri:</strong> la franchigia di base non si applica ai sinistri coperti oltre 10.000 €.',
        '<strong>Indennizzo a scelta:</strong> in denaro o riparazione con fornitori e artigiani di vostra scelta, senza penalità.',
        '<strong>Riparazioni urgenti</strong> oltre il capitale e gestione del sinistro da parte della compagnia stessa.',
      ])),
      AVV,
    ].join('\n'),
    faqTitle: 'Casa di alto valore — domande',
    faq: [
      { q: 'La regola proporzionale si applica?', a: '<p>Non nelle condizioni Private Clients che collochiamo: un danno parziale è pagato per intero.</p>' },
      { q: 'Per quanto tempo è pagato l’alloggio alternativo?', a: '<p>Per la casa, per tutto il tempo necessario a renderla di nuovo abitabile, senza franchigia.</p>' },
      { q: 'C’è una franchigia nei grandi sinistri?', a: '<p>La franchigia di base non si applica ai sinistri oltre 10.000 €; restano le franchigie speciali, come quella per casa disabitata.</p>' },
    ],
    related: [rel('art-beyond', 'Arte e gioielli oltre il valore concordato'), rel('family-protection', 'Protezione della famiglia'), rel('home-declare', 'Cosa dichiarare alla compagnia'), { url: '/it/assicurazione-casa-alto-valore/', label: 'Assicurazione casa di alto valore' }],
  },
  {
    ...base('art-beyond', 'Arte e gioielli'),
    title: 'Arte e gioielli oltre il valore concordato | Adler & Rochefort',
    description: 'Il valore concordato è solo l’inizio: sottostima, titolo viziato, opere su commissione, prestiti e nuovi acquisti in una polizza Private Clients.',
    keywords: 'assicurazione arte Portogallo, assicurazione opere d’arte Spagna, valore concordato arte, titolo viziato provenienza, prestito museo assicurazione, assicurazione gioielli',
    eyebrow: 'Private Clients · Arte e collezioni',
    h1: 'Arte e gioielli oltre il valore concordato: sottostima, provenienza, commissioni e prestiti',
    standfirst: 'Assicurare i pezzi importanti a valore concordato è la prima regola. Le condizioni Private Clients che collochiamo vanno oltre.',
    pullquote: 'La data della perizia fa parte della vostra copertura.',
    formHeading: 'Richiedete un’analisi scritta della collezione',
    formSubject: 'Arte e gioielli — valore concordato',
    formIntro: 'Inviateci l’elenco, le date delle perizie e la polizza attuale. Vi diciamo per iscritto cosa verrebbe pagato oggi.',
    formPlaceholder: 'Ad esempio: dipinti del Novecento italiano periziati nel 2020, orologi non specificati, un’opera in prestito a una mostra a Lisbona.',
    sections: [
      sec('plain', 'mercato', 'Quando il mercato è salito', ul([
        '<strong>Arte:</strong> se un’opera specificata vale più del capitale ed è stata periziata nei cinque anni precedenti il sinistro, la polizza paga il valore di mercato fino al doppio del capitale, con un massimo aggiuntivo di 5 milioni di euro.',
        '<strong>Gioielli, orologi e altri oggetti di valore:</strong> stesso principio con finestra di due anni, fino al capitale totale della categoria.',
      ])),
      sec('tint', 'parziale', 'Danno parziale e deprezzamento', p('Sono pagati il restauro, senza degrado, e la perdita di valore che resta. Per coppie e set di arte o gioielli si può consegnare il pezzo superstite ed essere indennizzati per l’intero set.')),
      sec('plain', 'titolo', 'Titolo viziato', p('Se un terzo sostiene che un’opera acquistata durante la copertura fosse rubata o mai venduta legittimamente, la polizza paga la difesa legale e, se la pretesa è accolta, la perdita dell’opera — entro un limite annuo e con una ragionevole verifica della provenienza.')),
      sec('tint', 'commissioni', 'Commissioni, prestiti e nuovi acquisti', ul([
        '<strong>Opere in corso</strong> danneggiate prima del completamento o incompiute per morte dell’artista: materiali e lavoro pattuito.',
        '<strong>Opere ricevute in prestito</strong> per i primi sette giorni; <strong>vostri prestiti</strong> a musei coperti se comunicati prima.',
        '<strong>Nuovi acquisti</strong> automaticamente per 90 giorni, fino a un quarto del capitale della categoria; <strong>furto da parte del personale domestico</strong> coperto.',
      ])),
      AVV,
    ].join('\n'),
    faqTitle: 'Arte e gioielli — domande',
    faq: [
      { q: 'E se il mio dipinto vale più del capitale?', a: '<p>Con una perizia di meno di cinque anni, la polizza paga il valore di mercato fino al doppio del capitale, con un massimo aggiuntivo di 5 milioni di euro.</p>' },
      { q: 'Cosa copre il titolo viziato?', a: '<p>La difesa legale contro chi rivendica la proprietà di un’opera specificata e la perdita dell’opera se la pretesa è accolta, con limite annuo.</p>' },
    ],
    related: [rel('home-conditions', 'Casa di alto valore: le condizioni'), { url: '/it/assicurazione-casa-alto-valore/', label: 'Assicurazione casa di alto valore' }],
  },
  {
    ...base('family-protection', 'Protezione della famiglia'),
    title: 'Protezione della famiglia nell’assicurazione casa | Adler & Rochefort',
    description: 'Carjacking, rapina in casa, stalking, sottrazione di minori, cyberbullismo e spese di sequestro: la protezione della famiglia in una polizza casa Private Clients.',
    keywords: 'protezione famiglia assicurazione, assicurazione carjacking, rapina in casa assicurazione, stalking assicurazione, spese sequestro assicurazione, cyberbullismo assicurazione',
    eyebrow: 'Private Clients · Famiglia',
    h1: 'Protezione della famiglia nell’assicurazione casa: carjacking, rapina, stalking e spese di sequestro',
    standfirst: 'Alcuni rischi di una famiglia con patrimonio non hanno nulla a che fare con l’edificio. Le migliori polizze casa li coprono comunque.',
    pullquote: 'È assicurata la vostra famiglia, o solo la vostra casa?',
    formHeading: 'Richiedete una verifica discreta e scritta',
    formSubject: 'Protezione della famiglia',
    formIntro: 'Inviateci le polizze casa e responsabilità civile. Vi diciamo per iscritto, con discrezione, cosa manca.',
    formPlaceholder: 'Ad esempio: famiglia di quattro persone a Lisbona, viaggi frequenti, autista e collaboratrice domestica.',
    sections: [
      sec('plain', 'copre', 'Cosa copre la protezione della famiglia', `${ul([
        '<strong>Carjacking</strong> — un familiare allontanato o trattenuto con la forza durante il furto di un’auto.',
        '<strong>Rapina in casa</strong> — violenza o minaccia di un intruso nell’abitazione, in una residenza temporanea, sulla barca o nel camper, con la famiglia o ospiti presenti.',
        '<strong>Rapina con violenza</strong> fuori casa.',
        '<strong>Stalking</strong> da parte di chi è già soggetto a un ordine di protezione del tribunale.',
        '<strong>Sottrazione di minori</strong> di 13 anni; <strong>dirottamento</strong> per oltre quattro ore su un mezzo pubblico; <strong>air rage e road rage</strong>.',
      ])}
${p('A seconda del caso: spese mediche, sostegno psicologico, convalescenza, consulenti e vigilanza, potenziamento della sicurezza di casa, trasferimento temporaneo e un capitale per invalidità permanente o morte. In tutto il mondo, salvo i Paesi con avviso di viaggio ufficiale.')}`),
      sec('tint', 'sequestro', 'Sequestro: cosa consente la legge', p('In Portogallo la legge (art. 14 del Decreto-Lei 72/2008) vieta di assicurare il rischio di sequestro in sé. Si coprono però le <strong>spese</strong>: negoziatore, consulenti di sicurezza e comunicazione, viaggi e alloggio della famiglia, avvocati, cure mediche e psicologiche, redditi persi e ricompense per informazioni. Per famiglie esposte, conviene anche una <a href="/it/assicurazione-rapimento-estorsione/">polizza rapimento ed estorsione</a> dedicata.')),
      sec('plain', 'cyber', 'Cyberbullismo e reputazione', p('In caso di molestie ripetute online che portino a un licenziamento, a una sanzione scolastica o a oltre una settimana di assenza: consulente di comunicazione, perito forense informatico, esperto di cybersicurezza, gestione della reputazione, stipendio perso e trasferimento temporaneo.')),
      sec('tint', 'rc', 'La responsabilità civile intorno', `${ul(['Responsabilità civile della famiglia in tutto il mondo fino a 10 milioni di euro, spese legali in aggiunta.', 'Golf, trampolini e gonfiabili, golf car e quad nella proprietà, personale domestico per colpa del datore di lavoro, carte e assegni falsificati.'])}
${p('Esclusi: barche da 26 piedi o oltre 50 CV, incarichi di amministratore retribuiti (D&amp;O), attività professionali e cani pericolosi.')}`),
      AVV,
    ].join('\n'),
    faqTitle: 'Protezione della famiglia — domande',
    faq: [
      { q: 'Una polizza casa copre davvero il carjacking?', a: '<p>Nelle condizioni Private Clients che collochiamo, sì: spese mediche, sostegno psicologico e un capitale per invalidità permanente, tra l’altro.</p>' },
      { q: 'Si può assicurare il sequestro?', a: '<p>In Portogallo il rischio in sé no; le spese che ne seguono sì.</p>' },
    ],
    related: [rel('home-conditions', 'Casa di alto valore: le condizioni'), { url: '/it/assicurazione-rapimento-estorsione/', label: 'Rapimento ed estorsione' }],
  },
  {
    ...base('home-declare', 'Cosa dichiarare'),
    title: 'Cosa dichiarare alla compagnia | Adler & Rochefort',
    description: 'Affitto, lavori, mesi di casa chiusa, prestiti di opere, sicurezza: cosa richiede di dichiarare un’assicurazione casa di alto valore e cosa fare dopo un sinistro.',
    keywords: 'aggravamento del rischio assicurazione casa, cosa dichiarare compagnia, casa disabitata assicurazione, lavori assicurazione casa, affitto casa vacanze assicurazione',
    eyebrow: 'Private Clients · Casa',
    h1: 'Cosa dichiarare alla compagnia: gli obblighi dietro un’assicurazione casa di alto valore',
    standfirst: 'La maggior parte dei sinistri respinti o ridotti in questo segmento non dipende dalle esclusioni, ma da qualcosa che è cambiato e non è mai stato dichiarato. La lista pratica.',
    pullquote: 'La migliore polizza del mercato può fallire per ciò che non è stato dichiarato.',
    formHeading: 'Ci occupiamo noi delle dichiarazioni',
    formSubject: 'Dichiarazioni alla compagnia',
    formIntro: 'Diteci cosa cambierà — lavori, affitto, una lunga assenza. Lo comunichiamo per iscritto alla compagnia e vi confermiamo le condizioni.',
    formPlaceholder: 'Ad esempio: ristrutturiamo cucina e bagni in primavera e la casa resterà chiusa da gennaio a marzo.',
    sections: [
      sec('plain', 'prima', 'Dichiarare prima', ul(['Cambio di occupazione: affitto, anche breve.', 'Cambio di uso: attività professionale o ospiti paganti.', 'Lavori con costo previsto oltre 250.000 €.', 'Prestito di opere o oggetti di valore a gallerie, musei o fiere.'])),
      sec('tint', 'subito', 'Dichiarare subito', `${ul(['Deterioramento dell’immobile, compresi segni di cedimento o frana.', 'Qualsiasi modifica della sicurezza: allarme scollegato, contratto di vigilanza disdetto, cassaforte rimossa.', 'Cambio rilevante di professione, imputazione o condanna (salvo circolazione) o insolvenza di un familiare.'])}
${p('L’aggravamento del rischio va comunicato entro 14 giorni.')}`),
      sec('plain', 'chiusa', 'I mesi di casa chiusa', ul(['<strong>Casa disabitata:</strong> se è rimasta per oltre 30 giorni consecutivi sostanzialmente vuota senza avviso, la franchigia sale al 5 % del capitale.', '<strong>Gelo:</strong> i danni da tubi gelati sono esclusi dopo oltre 60 giorni di disabitazione, salvo riscaldamento acceso o impianto svuotato.'])),
      sec('tint', 'sinistro', 'Dopo un sinistro', ul(['Comunicate subito — e, in caso di furto o di un evento di protezione della famiglia, anche alle autorità.', 'Proteggete l’immobile e conservate le fatture delle riparazioni urgenti; le altre solo con accordo.', 'Conservate i beni danneggiati, preparate un inventario con fatture e presentate una dichiarazione firmata entro 60 giorni dalla richiesta.', 'Iniziate la riparazione di un danno parziale entro 180 giorni, altrimenti si paga la ricostruzione al netto del deprezzamento.', 'Non riconoscete responsabilità verso terzi senza accordo scritto.'])),
      AVV,
    ].join('\n'),
    faqTitle: 'Dichiarazioni — domande',
    faq: [
      { q: 'Devo avvisare se affitto la casa?', a: '<p>Sì, prima, anche per affitti brevi. La compagnia può adeguare condizioni o premio.</p>' },
      { q: 'E se la casa resta vuota per qualche mese?', a: '<p>Dopo oltre 30 giorni sostanzialmente vuota senza avviso, la franchigia sale al 5 % del capitale; il gelo è escluso dopo 60 giorni senza riscaldamento o svuotamento.</p>' },
    ],
    related: [rel('home-conditions', 'Casa di alto valore: le condizioni'), { url: '/it/assicurazione-affitto-villa-lusso/', label: 'Affitto di ville di lusso' }],
  },
];
