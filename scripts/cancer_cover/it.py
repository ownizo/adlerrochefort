"""Italiano. Fatti: scripts/cancer_cover/README.md. Lingua di lavoro: inglese (UI lang_policy)."""
TABLE = (
    '<div class="ipmi-table cc-table"><table><thead><tr><th></th><th>MGEN</th><th>Médis</th><th>Internazionale (IPMI)</th></tr></thead><tbody>'
    "<tr><td>Adatta a</td><td>Clienti con storia clinica e clienti oltre i 65 anni</td><td>Clienti sani sotto i 65 anni che vogliono un capitale elevato</td><td>Clienti che vogliono curarsi in più di un paese</td></tr>"
    "<tr><td>Malattie preesistenti</td><td>Coperte dopo 365 giorni</td><td>Escluse</td><td>Valutate con l’assunzione medica</td></tr>"
    "<tr><td>Capitale per il cancro</td><td>Entro le coperture del piano</td><td>1.000.000 € per malattie gravi (opzione più completa)</td><td>Cigna Global: cure oncologiche pagate per intero nei piani base</td></tr>"
    "<tr><td>Dove si cura</td><td>Portogallo</td><td>Portogallo</td><td>Ovunque nell’area di copertura scelta</td></tr>"
    "<tr><td>Età di adesione</td><td>Nessun limite</td><td>Fino a 65 anni</td><td>Secondo l’assicuratore</td></tr>"
    "<tr><td>Questionario medico</td><td>No</td><td>Sì</td><td>Sì</td></tr>"
    "<tr><td>Requisiti</td><td>Due o più persone, NIF e indirizzo portoghesi</td><td>NIF e indirizzo portoghesi</td><td>Nessun indirizzo portoghese richiesto</td></tr>"
    "</tbody></table></div>"
)

PAGE = {
    "title": "Cancro e assicurazione sanitaria in Portogallo | Adler & Rochefort",
    "desc": "Come le assicurazioni sanitarie portoghesi e internazionali pagano le cure oncologiche: capitali, periodi di carenza, malattie preesistenti e cure all’estero.",
    "eyebrow": "Assicurazione sanitaria · Copertura del cancro",
    "crumb": "Cancro e assicurazione sanitaria",
    "h1": "Cancro e assicurazione sanitaria in Portogallo: copertura locale e internazionale",
    "lead": "Quasi tutte le assicurazioni sanitarie coprono il cancro. Le vere differenze sono quanto pagano, da quando parte la copertura e dove ci si può curare. Questa guida spiega come le assicurazioni portoghesi e quelle internazionali trattano il cancro, e quale soluzione si adatta a ciascuna situazione.",
    "facts": [
        "Le cure oncologiche sono coperte dalle polizze locali e internazionali, entro i capitali, le carenze e le esclusioni di ciascuna.",
        "Gli assicuratori portoghesi di norma escludono le malattie preesistenti e non accettano nuovi assicurati oltre i 65 anni.",
        "MGEN è l’eccezione: le malattie preesistenti sono coperte dopo 365 giorni di carenza, senza questionario medico e senza limite di età.",
        "Médis prevede, nell’opzione più completa, 1.000.000 € per malattie gravi, cancro compreso, con 180 giorni di carenza.",
        "I piani internazionali (Allianz Care, Cigna Global) coprono le cure ovunque nell’area scelta; la storia clinica è valutata con l’assunzione medica.",
        "Per una proposta: nome completo, data di nascita, nazionalità e paese di residenza. Nessun costo per lei.",
    ],
    "sections": [
        ("Perché la copertura del cancro è la prima domanda",
         "<p>Le cure oncologiche sono lunghe e costose. Chirurgia, chemioterapia, radioterapia e farmaci mirati possono durare mesi o anni. Una polizza che sembra generosa per le cure di routine può esaurire il capitale a metà del trattamento.</p>"
         "<p>La domanda utile non è se la polizza copre il cancro, ma quanto paga, da quando, con quale storia clinica e in quale paese.</p>"),
        ("Come le assicurazioni portoghesi coprono il cancro",
         "<p>Le polizze portoghesi pagano le cure oncologiche fino al capitale di ciascuna copertura, soprattutto in Portogallo. Quattro punti decidono la qualità della protezione:</p>"
         "<ul><li><strong>Capitale.</strong> Ricovero e cure ambulatoriali hanno limiti annuali. Alcuni piani aggiungono un capitale specifico per le malattie gravi, decisivo nelle cure lunghe.</li>"
         "<li><strong>Periodi di carenza.</strong> La copertura per malattie gravi di solito parte solo dopo alcuni mesi. Una diagnosi in quel periodo non è coperta.</li>"
         "<li><strong>Malattie preesistenti.</strong> Gli assicuratori portoghesi di norma escludono qualsiasi condizione precedente alla polizza. Un cancro passato, o sintomi già in accertamento, normalmente non sono coperti.</li>"
         "<li><strong>Età e requisiti.</strong> La maggior parte accetta nuovi assicurati solo fino a 65 anni. Ogni assicurato deve avere indirizzo e codice fiscale portoghesi (NIF).</li></ul>"
         "<p>Due assicuratori con cui lavoriamo affrontano questi limiti in modo diverso: MGEN sulle malattie preesistenti, Médis sul capitale.</p>"),
        ("MGEN: malattie preesistenti coperte dopo 365 giorni",
         "<p>MGEN è l’eccezione sul mercato portoghese. Non esclude le malattie preesistenti: applica una carenza di 365 giorni, dopo la quale sono coperte. È importante per chi ha una storia oncologica, o una condizione che potrebbe in futuro essere collegata al cancro.</p>"
         "<ul><li><strong>Nessun questionario medico</strong> all’adesione.</li>"
         "<li><strong>Nessun limite massimo di età</strong> per aderire: MGEN è la principale opzione locale oltre i 65 anni.</li>"
         "<li><strong>Almeno due assicurati</strong> dello stesso nucleo familiare. Non è disponibile per una sola persona.</li>"
         "<li><strong>NIF e indirizzo portoghesi</strong> per ogni assicurato, con prova di residenza.</li></ul>"
         "<p>I 365 giorni decorrono dall’inizio della polizza. Iniziare presto è la migliore protezione.</p>"),
        ("Médis: capitali elevati per le malattie gravi",
         "<p>Médis è una delle opzioni locali più solide quando il capitale è la priorità. L’opzione più completa include una copertura per malattie gravi (Doenças Graves) di 1.000.000 €, cancro compreso, oltre a ricovero e cure ambulatoriali.</p>"
         "<ul><li><strong>1.000.000 € per malattie gravi</strong> nell’opzione più completa.</li>"
         "<li><strong>Carenza di 180 giorni</strong> per questa copertura.</li>"
         "<li><strong>Supporto oncologico</strong>, con protesi e ortesi, supporto psicologico e assistenza infermieristica a domicilio.</li>"
         "<li><strong>Secondo parere medico illimitato.</strong></li>"
         "<li><strong>Malattie preesistenti escluse</strong>, come nella maggior parte degli assicuratori portoghesi.</li></ul>"
         "<p>Médis è adatta a clienti sani sotto i 65 anni che vogliono un’ampia riserva per una diagnosi grave. Collochiamo Médis tramite il nostro accordo di agenzia con Zurich.</p>"),
        ("Assicurazione sanitaria internazionale: curarsi dove si trova",
         "<p>I piani internazionali sono pensati per chi vive fuori dal paese di nazionalità, si sposta tra paesi o vuole la libertà di curarsi fuori dal Portogallo. Una diagnosi non deve cambiare dove vive né l’oncologo che sceglie.</p>"
         "<ul><li><strong><a href=\"/it/assicurazione-medica-internazionale/cigna-global/\">Cigna Global</a>.</strong> Le cure oncologiche fanno parte della copertura base di Silver, Gold e Platinum e sono pagate per intero. Silver ha un limite annuo di 1.000.000 US$; Platinum il limite annuo più alto, senza tetto fisso.</li>"
         "<li><strong><a href=\"/it/assicurazione-medica-internazionale/allianz-care/\">Allianz Care</a>.</strong> Il ricovero è incluso in ogni piano e gli screening oncologici sono coperti in tutta la gamma. Accanto alle opzioni mondiali esiste un’area di copertura solo Europa.</li></ul>"
         "<p>Tre punti funzionano diversamente. Lei sceglie un’<strong>area di copertura</strong> e le cure sono coperte ovunque al suo interno. Le <strong>malattie preesistenti</strong> sono valutate con l’assunzione medica: l’assicuratore può coprirle, escluderle o applicare un sovrappremio. E <strong>non serve un indirizzo portoghese</strong>.</p>"),
        ("Quale soluzione fa per lei", TABLE),
        ("Cinque domande prima di sottoscrivere",
         "<ol><li>Qual è il capitale annuo per le cure oncologiche, ed esiste un capitale separato per le malattie gravi?</li>"
         "<li>Quanto dura la carenza prima che il cancro sia coperto?</li>"
         "<li>Come vengono trattate le mie condizioni attuali e la mia storia clinica?</li>"
         "<li>Posso curarmi fuori dal Portogallo, e a quali condizioni?</li>"
         "<li>Farmaci oncologici, esami di controllo e terapie ambulatoriali sono coperti come il ricovero?</li></ol>"
         "<p>Le risposte sono nelle condizioni di polizza, non nel premio. È lì che un broker fa la differenza.</p>"),
        ("Come aiuta Adler &amp; Rochefort",
         "<p>Selezioniamo le proposte per coperture, capitali e gestione dei sinistri, mai per il premio più basso. Di fronte al cancro, questa scelta decide la qualità della sua protezione.</p>"
         "<p>Broker regolamentato nell’UE e registrato presso l’autorità di vigilanza portoghese (ASF), lavoriamo con diversi assicuratori locali e internazionali. Confrontiamo le loro condizioni per la sua età, storia clinica e progetti, e spieghiamo le differenze per iscritto.</p>"),
    ],
    "faq": [
        ("L’assicurazione sanitaria in Portogallo copre il cancro?", "Sì. Le polizze locali e internazionali coprono le cure oncologiche, entro i rispettivi capitali, carenze ed esclusioni."),
        ("Ho già avuto un cancro. Posso ancora assicurarmi?", "Presso la maggior parte degli assicuratori portoghesi, un cancro precedente è escluso. MGEN copre le malattie preesistenti dopo una carenza di 365 giorni. Gli assicuratori internazionali valutano ogni caso."),
        ("Ho più di 65 anni. Quali opzioni ho?", "La maggior parte degli assicuratori portoghesi non accetta nuovi assicurati oltre i 65 anni. MGEN non ha limiti di età, purché aderiscano almeno due persone dello stesso nucleo. I piani internazionali sono un’altra strada, soggetta ad assunzione medica."),
        ("Posso curarmi in Italia se vivo in Portogallo?", "Con un’assicurazione sanitaria internazionale sì, se l’Italia è nella sua area di copertura. Le polizze portoghesi sono pensate soprattutto per cure in Portogallo."),
        ("Cosa succede se la diagnosi arriva durante la carenza?", "La diagnosi resta fuori dalla copertura. Per questo la data di inizio della polizza conta quanto il capitale."),
    ],
    "related": [
        ("/it/assicurazione-medica-internazionale/", "Assicurazione medica internazionale per espatriati"),
        ("/it/allianz-care-vs-cigna-global-assicurazione-sanitaria-internazionale/", "Allianz Care o Cigna Global"),
        ("/it/trasferirsi-in-portogallo-assicurazioni/", "Trasferirsi in Portogallo: le assicurazioni"),
    ],
    "form_h2": "Richiedi una proposta scritta",
    "form_lead": "Ci dica chi deve essere assicurato e dove vive. Confrontiamo le opzioni locali e internazionali per la sua situazione e rispondiamo per iscritto.",
    "sources_label": "Fonti",
    "sources": [
        ("Médis: modulo Seguro de Saúde (aprile 2025)", "https://www.medis.pt/media/7572/proposta-individuais-pt_medis-editavel.pdf"),
        ("Cigna Global: piani sanitari internazionali", "https://www.cignaglobal.com/"),
        ("Allianz Partners: nuovi piani Care (novembre 2025)", "https://allianzcare.com/en/about-us/news/allianz-international-health-insurance-plans-update.html"),
    ],
}
