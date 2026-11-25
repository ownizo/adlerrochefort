# -*- coding: utf-8 -*-
"""IT travel insurance landings — 25 Nov 2026 (residents in Italy).
Built by scripts/build-travel-landings.py. Comparison service only."""

UI = {"it": dict(home_crumb="Assicurazione viaggio", others="Confronta l'assicurazione viaggio per tipo di viaggio",
                 guides="Guide all'assicurazione viaggio", tool_h="Confronta le polizze per questo viaggio",
                 tool_p="Prezzi in tempo reale di più assicuratori, ordinati prima per copertura medica. Modifica i campi secondo il tuo viaggio.",
                 faq_h="Domande frequenti", rel_h="Leggi anche", main_link="Tutti i viaggi: confronto assicurazioni viaggio premium",
                 who_h="Chi fa cosa", cta="Confronta le polizze premium")}
P = {"it": {}}
I = P["it"]
IPMI = "/it/assicurazione-sanitaria-internazionale/"

I["usa"] = dict(
    slug="stati-uniti", preset=dict(dest="US", intent="forTourism"),
    title="Assicurazione Viaggio Stati Uniti — Massimali Medici Alti | Adler & Rochefort",
    desc="Confronta le assicurazioni viaggio per gli Stati Uniti per spese mediche, rimpatrio e annullamento. Polizze premium di più assicuratori, ordinate per protezione. Online.",
    crumb="Stati Uniti", eyebrow="Assicurazione viaggio Stati Uniti",
    h1="Assicurazione viaggio per gli Stati Uniti: confronta prima i massimali medici",
    lead="Gli Stati Uniti hanno la sanità più cara al mondo per un visitatore. Confronta polizze di più assicuratori ordinate per copertura medica, con la destinazione già impostata.",
    sections=[
        ("Perché gli USA richiedono un'altra polizza", "<p>Non c'è un sistema pubblico a cui rivolgersi: gli ospedali fatturano a tariffe private e un ricovero con intervento può superare le sei cifre. Molte polizze «mondo» escludono USA e Canada se non si sceglie quella zona. L'ESTA è obbligatorio; l'assicurazione no.</p>"),
        ("Cosa confrontare", "<ul><li><strong>Massimale spese mediche</strong> alto o illimitato.</li><li><strong>Pagamento diretto</strong> all'ospedale.</li><li><strong>Rimpatrio a costo reale</strong>, aereo sanitario incluso.</li><li><strong>Responsabilità civile</strong>.</li><li><strong>Annullamento</strong> pari al costo non rimborsabile.</li></ul>"),
        ("Tessera sanitaria e carte di credito", "<p>La tessera europea non vale negli USA. Le coperture delle carte premium dipendono spesso dal pagamento con la carta e hanno massimali più bassi.</p>"),
    ],
    faq=[
        ("L'assicurazione è obbligatoria per gli USA?", "No, serve l'ESTA. Senza assicurazione paghi tutte le cure."),
        ("Che massimale scegliere?", "Il più alto ragionevolmente possibile, con pagamento diretto."),
        ("La tessera europea vale negli USA?", "No."),
    ],
)

I["annual"] = dict(
    slug="annuale-multiviaggio", preset=dict(intent="annual"),
    title="Assicurazione Viaggio Annuale Multiviaggio — Confronta | Adler & Rochefort",
    desc="Confronta le assicurazioni viaggio annuali multiviaggio per spese mediche, rimpatrio e annullamento. Una polizza premium per tutti i viaggi dell'anno.",
    crumb="Annuale multiviaggio", eyebrow="Assicurazione viaggio annuale",
    h1="Assicurazione viaggio annuale: una polizza premium per tutti i viaggi",
    lead="Tre o più viaggi l'anno — lavoro, seconda casa, famiglia all'estero o piacere: una polizza annuale copre ogni partenza.",
    sections=[
        ("Quando conviene", "<ul><li><strong>Trasferte frequenti</strong>.</li><li><strong>Proprietari di seconde case</strong> all'estero.</li><li><strong>Famiglie</strong> con weekend e un viaggio lungo l'anno.</li></ul>"),
        ("Cosa verificare", "<ul><li><strong>Giorni massimi per viaggio</strong>.</li><li><strong>Area geografica</strong> del viaggio più lontano.</li><li><strong>Annullamento</strong> per viaggio o per anno.</li><li><strong>Limiti di età</strong>.</li></ul>"),
        ("Annuale o assicurazione sanitaria internazionale?", "<p>Se vivi gran parte dell'anno all'estero, vedi l'<a href=\"" + IPMI + "\">assicurazione sanitaria internazionale</a>.</p>"),
    ],
    faq=[
        ("Quanti viaggi copre?", "Tutti quelli dei 12 mesi, entro i giorni massimi per viaggio."),
        ("Conviene rispetto a polizze singole?", "Spesso da circa tre viaggi l'anno."),
        ("Copre i viaggi in Italia?", "Di solito solo a condizioni, come una distanza minima da casa."),
    ],
)

I["ski"] = dict(
    slug="sci", preset=dict(intent="forTourism", sports=True),
    title="Assicurazione Sci — Confronta Soccorso in Pista e Spese Mediche | Adler & Rochefort",
    desc="Confronta le assicurazioni viaggio per sci e snowboard: soccorso, spese mediche, rimpatrio, responsabilità civile e attrezzatura. Polizze premium ordinate per protezione.",
    crumb="Sci", eyebrow="Assicurazione viaggio sci",
    h1="Assicurazione sci: confronta soccorso, spese mediche e responsabilità civile",
    lead="Sci e snowboard sono tra le cause più frequenti di sinistri in viaggio, e molte polizze standard li escludono. Confronta polizze con l'opzione sport invernali già selezionata.",
    sections=[
        ("Cosa deve pagare", "<ul><li><strong>Soccorso ed evacuazione</strong>, anche in elicottero.</li><li><strong>Spese mediche</strong> in cliniche di montagna.</li><li><strong>Rimpatrio</strong> dopo una frattura.</li><li><strong>Responsabilità civile</strong> in caso di scontro — sulle piste italiane l'RC è obbligatoria.</li><li><strong>Attrezzatura, skipass e lezioni</strong>.</li></ul>"),
        ("Fuoripista", "<p>Molte polizze coprono solo piste segnalate e aperte; fuoripista, scialpinismo ed eliski possono essere esclusi.</p>"),
        ("Alpi, Nord America e Giappone", "<p>In Svizzera e Austria soccorso e cliniche private costano molto anche con la tessera europea. In USA, Canada e Giappone il massimale medico deve essere alto.</p>"),
    ],
    faq=[
        ("Un'assicurazione viaggio normale copre lo sci?", "Spesso no, o solo con l'opzione sport invernali, qui selezionata."),
        ("Il soccorso in elicottero è coperto?", "In molte polizze con opzione sport, entro il massimale di soccorso."),
        ("La tessera europea copre il soccorso in montagna?", "No."),
    ],
)

I["cruise"] = dict(
    slug="crociera", preset=dict(intent="cruise"),
    title="Assicurazione Crociera — Confronta Evacuazione e Medico di Bordo | Adler & Rochefort",
    desc="Confronta le assicurazioni crociera: cure a bordo, evacuazione in mare, partenza persa e annullamento. Polizze premium di più assicuratori.",
    crumb="Crociera", eyebrow="Assicurazione viaggio crociera",
    h1="Assicurazione crociera: confronta evacuazione e cure a bordo",
    lead="Il centro medico della nave fattura come una clinica privata e un'evacuazione può costare più della crociera.",
    sections=[
        ("Dove differiscono", "<ul><li><strong>Cure a bordo</strong>: la tessera europea di solito non è accettata in mare.</li><li><strong>Evacuazione medica</strong>.</li><li><strong>Partenza persa</strong> e raggiungimento del porto successivo.</li><li><strong>Annullamento</strong> sul prezzo della crociera.</li></ul>"),
        ("Area giusta", "<p>Una crociera nei Caraibi da Miami richiede la zona USA.</p>"),
        ("L'assicurazione della compagnia", "<p>Comoda, ma confronta i massimali con le offerte qui.</p>"),
    ],
    faq=[
        ("Paga il medico di bordo?", "Le polizze crociera di solito sì, entro il massimale."),
        ("L'evacuazione è coperta?", "Nella maggior parte delle polizze, come rimpatrio e trasporto sanitario."),
        ("Serve la zona USA per i Caraibi?", "Se parti o scendi in un porto statunitense, sì."),
    ],
)

I["nomad"] = dict(
    slug="nomadi-digitali", preset=dict(intent="digitalNomad"),
    title="Assicurazione Viaggio Nomadi Digitali — Confronta | Adler & Rochefort",
    desc="Confronta le assicurazioni viaggio per nomadi digitali e lavoratori da remoto: spese mediche, rimpatrio e responsabilità civile per mesi all'estero.",
    crumb="Nomadi digitali", eyebrow="Assicurazione viaggio nomadi digitali",
    h1="Assicurazione per nomadi digitali: mesi all'estero, ben coperti",
    lead="Primavera a Lisbona, estate a Bali, inverno a Città del Messico: uno stile di vita, non una vacanza.",
    sections=[
        ("Cosa deve fare", "<ul><li><strong>Periodi lunghi</strong>, spesso rinnovabili.</li><li><strong>Più paesi</strong>, USA compresi.</li><li><strong>Spese mediche alte e rimpatrio</strong>.</li><li><strong>Responsabilità civile</strong>.</li><li><strong>Attrezzatura</strong> con massimali bassi.</li></ul>"),
        ("Visti nomadi", "<p>Il visto D8 portoghese e il visto nomade spagnolo chiedono una copertura sanitaria; verifica il testo esatto del consolato.</p>"),
        ("Quando serve un'assicurazione sanitaria", "<p>Vedi l'<a href=\"" + IPMI + "\">assicurazione sanitaria internazionale</a>.</p>"),
    ],
    faq=[
        ("Posso sottoscriverla già partito?", "Alcune polizze sì, spesso con carenza."),
        ("Sono coperto in Italia?", "In genere solo per brevi rientri."),
        ("Il portatile è coperto?", "Nel bagaglio, con massimale basso per oggetto."),
    ],
)

I["longstay"] = dict(
    slug="lunghi-soggiorni", preset=dict(intent="expat"),
    title="Assicurazione Viaggio Lunghi Soggiorni — Confronta | Adler & Rochefort",
    desc="Confronta le assicurazioni per lunghi soggiorni: inverni in Portogallo o Spagna, anno sabbatico, mesi prima di un trasferimento. Spese mediche e rimpatrio.",
    crumb="Lunghi soggiorni", eyebrow="Assicurazione lunghi soggiorni",
    h1="Assicurazione per lunghi soggiorni: dall'inverno in Algarve ai mesi prima del trasferimento",
    lead="Un anno sabbatico, un inverno al sole o la transizione prima di trasferirsi in Portogallo o Spagna.",
    sections=[
        ("Per chi", "<ul><li><strong>Chi sverna</strong> tre-sei mesi all'estero.</li><li><strong>Anni sabbatici</strong>.</li><li><strong>Nuovi residenti</strong> in attesa del permesso.</li></ul>"),
        ("Cosa confrontare", "<ul><li><strong>Durata massima</strong> e proroga.</li><li><strong>Spese mediche</strong> e pagamento diretto.</li><li><strong>Rimpatrio</strong> a costo reale.</li><li><strong>Malattie preesistenti</strong>: dichiararle.</li></ul>"),
        ("Il limite", "<p>Quando un altro paese diventa residenza, serve un'<a href=\"" + IPMI + "\">assicurazione sanitaria</a> lì.</p>"),
    ],
    faq=[
        ("Quanto può durare?", "Alcuni mesi, fino a un anno, secondo la polizza."),
        ("Posso tornare a casa nel frattempo?", "Spesso per brevi rientri."),
        ("Vale per un visto?", "A volte per il primo periodo; verifica col consolato."),
    ],
)

I["cancel"] = dict(
    slug="annullamento", preset=dict(intent="cancellation"),
    title="Assicurazione Annullamento per Viaggi di Alto Valore — Confronta | Adler & Rochefort",
    desc="Confronta le assicurazioni annullamento per safari, ville, charter di yacht e viaggi a lungo raggio: massimale, cause coperte e interruzione.",
    crumb="Annullamento", eyebrow="Assicurazione annullamento viaggio",
    h1="Assicurazione annullamento per i viaggi che non puoi permetterti di perdere",
    lead="Un lodge in Africa, una villa per la famiglia, un charter di yacht: gli acconti non rimborsabili si sommano in fretta.",
    sections=[
        ("Adatta il massimale", "<p>Deve coprire tutto il costo non rimborsabile per tutti i viaggiatori.</p>"),
        ("Cosa confrontare", "<ul><li><strong>Cause coperte</strong>: elenco o qualsiasi causa documentata.</li><li><strong>Interruzione</strong>.</li><li><strong>Quando sottoscrivere</strong>: al primo acconto.</li><li><strong>Franchigia</strong>.</li></ul>"),
        ("Solo annullamento o completa", "<p>Per USA e lungo raggio confronta le polizze complete.</p>"),
    ],
    faq=[
        ("Quando sottoscriverla?", "Alla prenotazione o al primo acconto."),
        ("Copre un ripensamento?", "No."),
        ("Copre gli acconti di villa o charter?", "Se sono costi non rimborsabili entro il massimale."),
    ],
)

I["group"] = dict(
    slug="gruppi", preset=dict(intent="groupTravel"),
    title="Assicurazione Viaggio di Gruppo — Matrimoni, Golf, Incentive | Adler & Rochefort",
    desc="Confronta le assicurazioni viaggio di gruppo: matrimoni all'estero, gruppi di golf, riunioni di famiglia e viaggi aziendali. Una sola ricerca per tutti.",
    crumb="Gruppi", eyebrow="Assicurazione viaggio di gruppo",
    h1="Assicurazione viaggio di gruppo: una sola ricerca per tutti",
    lead="Un matrimonio a Maiorca, una settimana di golf in Algarve, un incentive aziendale a Madrid.",
    sections=[
        ("Viaggi tipici", "<ul><li><strong>Matrimoni all'estero</strong>.</li><li><strong>Gruppi di golf</strong>.</li><li><strong>Viaggi multigenerazionali</strong>.</li><li><strong>Incentive aziendali</strong>.</li></ul>"),
        ("Cosa verificare", "<ul><li><strong>Dimensione del gruppo</strong>.</li><li><strong>Età</strong>.</li><li><strong>Annullamento</strong> se un membro non parte.</li><li><strong>Responsabilità civile</strong>.</li></ul>"),
        ("Ospiti da altri paesi", "<p>Ognuno usa il comparatore con il proprio paese di residenza.</p>"),
    ],
    faq=[
        ("Quante persone per preventivo?", "Fino a 12."),
        ("Tutti con la stessa polizza?", "Nello stesso preventivo sì."),
        ("Ospiti residenti all'estero?", "Sì, con il loro paese di residenza."),
    ],
)

I["study"] = dict(
    slug="studenti", preset=dict(intent="studyInternship"),
    title="Assicurazione Studenti all'Estero — Confronta | Adler & Rochefort",
    desc="Confronta le assicurazioni per studio, stage o au pair all'estero: spese mediche, rimpatrio e responsabilità civile per tutto l'anno accademico.",
    crumb="Studenti", eyebrow="Assicurazione studenti all'estero",
    h1="Assicurazione studenti: un anno all'estero, ben coperto",
    lead="Un semestre a Londra, un master negli USA, uno stage a Singapore. Le università fissano minimi; i genitori vogliono di più.",
    sections=[
        ("Cosa chiede l'università", "<ul><li><strong>Il minimo</strong> è una soglia.</li><li><strong>Spese mediche alte</strong> in USA e Canada.</li><li><strong>Rimpatrio</strong> e viaggio di un familiare.</li><li><strong>Responsabilità civile</strong>.</li></ul>"),
        ("Stati Uniti", "<p>Molte università chiedono il proprio piano o una waiver con massimali minimi.</p>"),
        ("Stage e au pair", "<p>Il comparatore include studio, stage e au pair.</p>"),
    ],
    faq=[
        ("L'università la accetterà?", "Confronta i massimali con i requisiti scritti."),
        ("Possono sottoscriverla i genitori?", "Sì, con i dati dello studente."),
        ("Copre tutto l'anno?", "La durata massima è indicata in ogni offerta."),
    ],
)
