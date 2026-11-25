# -*- coding: utf-8 -*-
"""SE travel insurance landings and guide — 25 Nov 2026 (residents in Sweden).
Built by scripts/build-travel-landings.py. Comparison service only."""

UI = {"se": dict(home_crumb="Reseförsäkring", others="Jämför reseförsäkring efter typ av resa",
                 guides="Guider om reseförsäkring", tool_h="Jämför försäkringar för den här resan",
                 tool_p="Livepriser från flera försäkringsbolag, sorterade efter sjukvårdsskydd. Ändra fälten efter din resa.",
                 faq_h="Vanliga frågor", rel_h="Läs också", main_link="Alla resor: jämför premiumreseförsäkringar",
                 who_h="Vem gör vad", cta="Jämför premiumförsäkringar")}
P = {"se": {}}
V = P["se"]
IPMI = "/se/internationell-sjukvardsforsakring/"

V["usa"] = dict(
    slug="usa", preset=dict(dest="US", intent="forTourism"),
    title="Reseförsäkring USA — Jämför Höga Belopp för Vårdkostnader | Adler & Rochefort",
    desc="Jämför reseförsäkringar för USA: vårdkostnader, hemtransport och avbeställning. Premiumförsäkringar från flera bolag, sorterade efter skydd. Köp online.",
    crumb="USA", eyebrow="Reseförsäkring för USA",
    h1="Reseförsäkring för USA: jämför vårdkostnadsskyddet först",
    lead="USA har världens dyraste sjukvård för besökare. Jämför försäkringar från flera bolag, sorterade efter vårdskydd, med resmålet redan ifyllt.",
    sections=[
        ("Varför USA kräver en annan försäkring", "<p>Sjukhusen fakturerar privata priser och en inläggning med operation kan kosta miljontals kronor. Reseskyddet i hemförsäkringen har tidsgränser och belopp som inte alltid räcker. EU-kortet gäller inte i USA.</p>"),
        ("Vad du jämför", "<ul><li><strong>Vårdkostnader</strong>: högt eller obegränsat.</li><li><strong>Direktbetalning</strong> till sjukhuset.</li><li><strong>Hemtransport</strong> till faktisk kostnad.</li><li><strong>Ansvar</strong>.</li><li><strong>Avbeställning</strong>.</li></ul>"),
        ("ESTA krävs, försäkring inte", "<p>Därför är många resenärer underförsäkrade.</p>"),
    ],
    faq=[
        ("Är reseförsäkring obligatorisk för USA?", "Nej, men utan den betalar du all vård själv."),
        ("Räcker reseskyddet i hemförsäkringen?", "Jämför dess belopp och tidsgräns med erbjudandena här."),
        ("Gäller EU-kortet i USA?", "Nej."),
    ],
)

V["annual"] = dict(
    slug="arsresa", preset=dict(intent="annual"),
    title="Årsreseförsäkring — Jämför Premiumförsäkringar för Alla Resor | Adler & Rochefort",
    desc="Jämför årsreseförsäkringar: vårdkostnader, hemtransport och avbeställning. En premiumförsäkring för alla årets resor, flera bolag.",
    crumb="Årsresa", eyebrow="Årsreseförsäkring",
    h1="Årsreseförsäkring: en premiumförsäkring för alla årets resor",
    lead="Tre eller fler resor om året — i jobbet, till huset i Spanien eller Portugal, till familjen: en årsförsäkring täcker varje resa.",
    sections=[
        ("När den lönar sig", "<ul><li><strong>Täta tjänsteresor</strong>.</li><li><strong>Fritidshusägare utomlands</strong>.</li><li><strong>Familjer</strong> med flera resor.</li></ul>"),
        ("Vad du kontrollerar", "<ul><li><strong>Max antal dagar per resa</strong>.</li><li><strong>Geografiskt område</strong>.</li><li><strong>Avbeställning</strong> per resa.</li><li><strong>Åldersgränser</strong>.</li></ul>"),
        ("Årsresa eller internationell sjukvårdsförsäkring?", "<p>Bor du större delen av året utomlands, se <a href=\"" + IPMI + "\">internationell sjukvårdsförsäkring</a>.</p>"),
    ],
    faq=[
        ("Hur många resor ingår?", "Alla under 12 månader, inom gränsen för dagar per resa."),
        ("Är den billigare?", "Ofta från cirka tre resor om året."),
        ("Gäller den i Sverige?", "Oftast bara under vissa villkor."),
    ],
)

V["ski"] = dict(
    slug="skidresa", preset=dict(intent="forTourism", sports=True),
    title="Reseförsäkring Skidresa — Jämför Räddning och Vårdkostnader | Adler & Rochefort",
    desc="Jämför reseförsäkringar för skidresor: fjällräddning, vård, hemtransport, ansvar och utrustning. Premiumförsäkringar sorterade efter skydd.",
    crumb="Skidresa", eyebrow="Reseförsäkring för skidresa",
    h1="Försäkring för skidresan: jämför räddning, vård och ansvar",
    lead="Skidåkning är en av de vanligaste orsakerna till skador på resan. Jämför försäkringar med vintersportalternativet redan valt.",
    sections=[
        ("Vad den ska betala", "<ul><li><strong>Räddning</strong>, även med helikopter.</li><li><strong>Vård</strong> på privata kliniker i Alperna.</li><li><strong>Hemtransport</strong> efter en fraktur.</li><li><strong>Ansvar</strong> vid kollision.</li><li><strong>Utrustning och liftkort</strong>.</li></ul>"),
        ("Offpist", "<p>Många försäkringar täcker bara preparerade, öppna pister. Offpist, topptur och heliski kan vara undantagna.</p>"),
        ("Alperna, Nordamerika och Japan", "<p>I Alperna blir räddning och privata kliniker dyra även med EU-kort. I USA, Kanada och Japan behövs högt vårdbelopp.</p>"),
    ],
    faq=[
        ("Täcker en vanlig reseförsäkring skidåkning?", "Ofta inte, eller bara med vintersporttillägg, här valt."),
        ("Ingår helikopterräddning?", "I många försäkringar med sporttillägg, inom beloppet för räddning."),
        ("Täcker EU-kortet fjällräddning?", "Nej."),
    ],
)

V["cruise"] = dict(
    slug="kryssning", preset=dict(intent="cruise"),
    title="Reseförsäkring Kryssning — Jämför Evakuering och Skeppsläkare | Adler & Rochefort",
    desc="Jämför försäkringar för kryssningar: vård ombord, evakuering till sjöss, missad avgång och avbeställning.",
    crumb="Kryssning", eyebrow="Reseförsäkring för kryssning",
    h1="Kryssningsförsäkring: jämför evakuering och vård ombord",
    lead="Fartygets mottagning debiterar som en privatklinik och en evakuering kan kosta mer än resan.",
    sections=[
        ("Var försäkringarna skiljer sig", "<ul><li><strong>Vård ombord</strong>: EU-kortet gäller oftast inte till sjöss.</li><li><strong>Evakuering</strong>.</li><li><strong>Missad avgång</strong>.</li><li><strong>Avbeställning</strong>.</li></ul>"),
        ("Rätt område", "<p>En Karibienkryssning från Miami kräver USA-zonen.</p>"),
        ("Rederiets försäkring", "<p>Jämför dess belopp med erbjudandena här.</p>"),
    ],
    faq=[
        ("Betalar försäkringen skeppsläkaren?", "Kryssningsförsäkringar brukar göra det, inom vårdbeloppet."),
        ("Ingår evakuering?", "I de flesta försäkringar, som hemtransport."),
        ("Behövs USA-zonen för Karibien?", "Om du startar eller går i land i en amerikansk hamn, ja."),
    ],
)

V["nomad"] = dict(
    slug="digitala-nomader", preset=dict(intent="digitalNomad"),
    title="Reseförsäkring för Digitala Nomader — Jämför | Adler & Rochefort",
    desc="Jämför reseförsäkringar för digitala nomader och distansarbetare: vårdkostnader, hemtransport och ansvar under månader utomlands.",
    crumb="Digitala nomader", eyebrow="Reseförsäkring för digitala nomader",
    h1="Reseförsäkring för digitala nomader: månader borta, rätt försäkrad",
    lead="Våren i Lissabon, sommaren på Bali, vintern i Mexico City — en livsstil, inte en semester.",
    sections=[
        ("Vad den ska klara", "<ul><li><strong>Långa perioder</strong>, ofta förlängningsbara.</li><li><strong>Flera länder</strong>.</li><li><strong>Höga vårdbelopp och hemtransport</strong>.</li><li><strong>Ansvar</strong>.</li><li><strong>Utrustning</strong> med låga gränser per föremål.</li></ul>"),
        ("Nomadvisum", "<p>Portugals D8 och Spaniens nomadvisum kräver sjukvårdsskydd; kontrollera konsulatets exakta krav.</p>"),
        ("När sjukvårdsförsäkring behövs", "<p>Se <a href=\"" + IPMI + "\">internationell sjukvårdsförsäkring</a>.</p>"),
    ],
    faq=[
        ("Kan jag köpa den när jag redan rest?", "Vissa försäkringar tillåter det, ofta med karens."),
        ("Gäller den i Sverige?", "Oftast bara vid korta besök."),
        ("Är min dator försäkrad?", "Inom resgodsbeloppet, med låg gräns."),
    ],
)

V["longstay"] = dict(
    slug="langvistelse", preset=dict(intent="expat"),
    title="Reseförsäkring för Långvistelse — Jämför | Adler & Rochefort",
    desc="Jämför försäkringar för långvistelse: vinter i Spanien eller Portugal, sabbatsår, månaderna före en flytt. Vård, hemtransport och ansvar.",
    crumb="Långvistelse", eyebrow="Reseförsäkring för långvistelse",
    h1="Försäkring för långvistelse: från vintern i Spanien till månaderna före flytten",
    lead="Ett sabbatsår, en vinter på Costa del Sol eller övergången före en flytt.",
    sections=[
        ("För vem", "<ul><li><strong>Övervintrare</strong> i tre till sex månader.</li><li><strong>Sabbatsår</strong>.</li><li><strong>Nya invånare</strong> före lokal försäkring.</li></ul>"),
        ("Vad du jämför", "<ul><li><strong>Maxtid</strong> och förlängning.</li><li><strong>Vårdbelopp</strong> och direktbetalning.</li><li><strong>Hemtransport</strong>.</li><li><strong>Befintliga sjukdomar</strong>: uppge dem.</li></ul>"),
        ("Gränsen för en reseförsäkring", "<p>När ett annat land blir hem behövs en <a href=\"" + IPMI + "\">sjukvårdsförsäkring</a> där.</p>"),
    ],
    faq=[
        ("Hur länge?", "Några månader till ett år, beroende på försäkring."),
        ("Får jag åka hem emellan?", "Ofta för korta besök."),
        ("Räcker hemförsäkringens reseskydd?", "Se vår guide om övervintring: det har ofta en tidsgräns."),
    ],
)

V["cancel"] = dict(
    slug="avbestallning", preset=dict(intent="cancellation"),
    title="Avbeställningsskydd för Dyra Resor — Jämför | Adler & Rochefort",
    desc="Jämför avbeställningsskydd för safari, villor, båtcharter och långresor: belopp, giltiga skäl och avbruten resa.",
    crumb="Avbeställning", eyebrow="Avbeställningsskydd",
    h1="Avbeställningsskydd för resor du inte har råd att förlora",
    lead="En safari, en villa för familjen, en båtcharter: ej återbetalningsbara handpenningar växer snabbt.",
    sections=[
        ("Anpassa beloppet", "<p>Beloppet ska täcka hela den ej återbetalningsbara kostnaden för alla resenärer.</p>"),
        ("Vad du jämför", "<ul><li><strong>Giltiga skäl</strong>.</li><li><strong>Avbruten resa</strong>.</li><li><strong>När du köper</strong>: vid första betalningen.</li><li><strong>Självrisk</strong>.</li></ul>"),
        ("Bara avbeställning eller helt paket", "<p>För USA och långresor: jämför hela paket.</p>"),
    ],
    faq=[
        ("När köper jag avbeställningsskydd?", "Vid bokning eller första betalning."),
        ("Gäller det om jag ångrar mig?", "Nej."),
        ("Ingår handpenning för villa?", "Om det är ej återbetalningsbar resekostnad inom beloppet."),
    ],
)

V["group"] = dict(
    slug="grupp", preset=dict(intent="groupTravel"),
    title="Gruppreseförsäkring — Bröllop, Golf och Företagsresor | Adler & Rochefort",
    desc="Jämför gruppreseförsäkringar: bröllop utomlands, golfgrupper, familjeträffar och företagsresor. En sökning för hela gruppen.",
    crumb="Grupp", eyebrow="Gruppreseförsäkring",
    h1="Gruppreseförsäkring: en sökning för alla",
    lead="Ett bröllop på Mallorca, en golfvecka i Algarve, en kickoff i Madrid.",
    sections=[
        ("Typiska gruppresor", "<ul><li><strong>Bröllop utomlands</strong>.</li><li><strong>Golfgrupper</strong>.</li><li><strong>Flera generationer</strong>.</li><li><strong>Företagsresor</strong>.</li></ul>"),
        ("Vad du kontrollerar", "<ul><li><strong>Gruppstorlek</strong>.</li><li><strong>Åldrar</strong>.</li><li><strong>Avbeställning</strong> för en person.</li><li><strong>Ansvar</strong>.</li></ul>"),
        ("Gäster från andra länder", "<p>Var och en jämför med sitt eget bosättningsland.</p>"),
    ],
    faq=[
        ("Hur många per offert?", "Upp till 12."),
        ("Samma försäkring för alla?", "Inom samma offert ja."),
        ("Kan norska gäster köpa?", "Ja, med Norge som bosättningsland."),
    ],
)

V["study"] = dict(
    slug="studenter", preset=dict(intent="studyInternship"),
    title="Försäkring för Studier Utomlands — Jämför | Adler & Rochefort",
    desc="Jämför försäkringar för studier, praktik eller au pair utomlands: vård, hemtransport och ansvar för hela läsåret.",
    crumb="Studenter", eyebrow="Försäkring för studier utomlands",
    h1="Studier utomlands: ett år borta, rätt försäkrad",
    lead="En termin i London, en master i USA, praktik i Singapore. Universiteten sätter minimikrav; föräldrar vill ofta mer.",
    sections=[
        ("Universitetets krav", "<ul><li><strong>Minimikravet</strong> är en tröskel.</li><li><strong>Höga vårdbelopp</strong> i USA och Kanada.</li><li><strong>Hemtransport</strong> och anhörigs resa.</li><li><strong>Ansvar</strong>.</li></ul>"),
        ("USA", "<p>Många universitet kräver egen försäkring eller ett waiver-formulär.</p>"),
        ("Praktik och au pair", "<p>Jämförelsen omfattar studier, praktik och au pair.</p>"),
    ],
    faq=[
        ("Godkänner universitetet försäkringen?", "Jämför beloppen med de skriftliga kraven."),
        ("Kan föräldrar köpa?", "Ja, med studentens uppgifter."),
        ("Gäller hela läsåret?", "Maxtiden anges i varje erbjudande."),
    ],
)

V["winter"] = dict(
    slug="overvintring-spanien-portugal", kind="guide", preset=dict(dest="ES", intent="expat"),
    title="Övervintra i Spanien eller Portugal: Räcker Hemförsäkringens Reseskydd? | Adler & Rochefort",
    desc="Övervintrar du på Costa del Sol eller i Algarve? Var hemförsäkringens reseskydd och EU-kortet tar slut och hur du jämför en reseförsäkring för hela vintern.",
    crumb="Övervintring", eyebrow="Övervintring: hemförsäkring eller reseförsäkring?",
    h1="Övervintra i Spanien eller Portugal: när hemförsäkringens reseskydd inte räcker",
    lead="Många svenskar tillbringar vintern i Spanien eller Portugal. Reseskyddet i hemförsäkringen följer med — men bara en tid.",
    sections=[
        ("Reseskyddets tidsgräns", "<p>Reseskyddet i hemförsäkringen gäller normalt bara de första veckorna av en resa — ofta 45 dagar, ibland längre med tillägg. Kontrollera ditt villkor: efter gränsen är du utan skydd för vård, hemtransport och ansvar.</p>"),
        ("Vad EU-kortet gör och inte gör", "<ul><li>Det ger tillgång till <strong>offentlig vård</strong> på lokala villkor.</li><li>Det betalar inte <strong>privata kliniker</strong> eller <strong>hemtransport</strong> till Sverige.</li><li>Det gäller inte på <strong>kryssningsfartyg</strong>.</li></ul>"),
        ("Jämför en försäkring för hela vintern", "<p>En långvistelseförsäkring för hela perioden, med högt vårdbelopp och hemtransport till faktisk kostnad. Jämförelsen är förinställd på Spanien; ändra till Portugal eller flera länder.</p>"),
    ],
    faq=[
        ("Hur länge gäller hemförsäkringens reseskydd?", "Det beror på bolaget — ofta 45 dagar. Kontrollera ditt villkor före avresa."),
        ("Kan jag förlänga under resan?", "Vissa försäkringar tillåter det; villkoren står i varje erbjudande."),
        ("Påverkar en lång vistelse min folkbokföring?", "Kontrollera reglerna för din situation om du är borta en stor del av året."),
    ],
)
