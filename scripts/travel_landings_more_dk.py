# -*- coding: utf-8 -*-
"""DK travel insurance landings and guide — 25 Nov 2026 (residents in Denmark).
Built by scripts/build-travel-landings.py. Comparison service only."""

UI = {"dk": dict(home_crumb="Rejseforsikring", others="Sammenlign rejseforsikring efter rejsetype",
                 guides="Guider om rejseforsikring", tool_h="Sammenlign forsikringer til denne rejse",
                 tool_p="Livepriser fra flere forsikringsselskaber, sorteret efter sygedækning. Tilpas felterne til din rejse.",
                 faq_h="Ofte stillede spørgsmål", rel_h="Læs også", main_link="Alle rejser: sammenlign premium rejseforsikringer",
                 who_h="Hvem gør hvad", cta="Sammenlign premium forsikringer")}
P = {"dk": {}}
K = P["dk"]
IPMI = "/dk/international-sundhedsforsikring/"

K["usa"] = dict(
    slug="usa", preset=dict(dest="US", intent="forTourism"),
    title="Rejseforsikring USA — Sammenlign Høj Sygedækning | Adler & Rochefort",
    desc="Sammenlign rejseforsikringer til USA: sygdomsudgifter, hjemtransport og afbestilling. Premium forsikringer fra flere selskaber, sorteret efter beskyttelse.",
    crumb="USA", eyebrow="Rejseforsikring til USA",
    h1="Rejseforsikring til USA: sammenlign sygedækningen først",
    lead="USA har verdens dyreste sundhedsvæsen for besøgende. Sammenlign forsikringer sorteret efter sygedækning, med destinationen udfyldt.",
    sections=[
        ("Hvorfor USA kræver en anden forsikring", "<p>Hospitalerne fakturerer privatpriser, og en indlæggelse med operation kan koste millioner af kroner. Det blå EU-sygesikringskort gælder ikke i USA.</p>"),
        ("Hvad du sammenligner", "<ul><li><strong>Sygdomsudgifter</strong>: høj eller ubegrænset.</li><li><strong>Direkte betaling</strong> til hospitalet.</li><li><strong>Hjemtransport</strong> til faktisk pris.</li><li><strong>Ansvar</strong>.</li><li><strong>Afbestilling</strong>.</li></ul>"),
        ("ESTA er krævet, forsikring ikke", "<p>Derfor er mange rejsende underforsikrede.</p>"),
    ],
    faq=[
        ("Er rejseforsikring obligatorisk i USA?", "Nej, men uden den betaler du al behandling selv."),
        ("Gælder det blå kort i USA?", "Nej."),
        ("Hvor høj sygedækning?", "Så høj som rimeligt muligt, med direkte betaling."),
    ],
)

K["annual"] = dict(
    slug="aarsrejseforsikring", preset=dict(intent="annual"),
    title="Årsrejseforsikring — Sammenlign Premium Forsikringer | Adler & Rochefort",
    desc="Sammenlign årsrejseforsikringer: sygdomsudgifter, hjemtransport og afbestilling. Én premium forsikring til alle årets rejser.",
    crumb="Årsrejse", eyebrow="Årsrejseforsikring",
    h1="Årsrejseforsikring: én premium forsikring til alle årets rejser",
    lead="Tre eller flere rejser om året — arbejde, sommerhus i Spanien eller Portugal, familie: én årsforsikring dækker hver rejse.",
    sections=[
        ("Hvornår det kan betale sig", "<ul><li><strong>Hyppige forretningsrejser</strong>.</li><li><strong>Ejere af feriebolig i udlandet</strong>.</li><li><strong>Familier</strong> med flere rejser.</li></ul>"),
        ("Hvad du tjekker", "<ul><li><strong>Maks. dage pr. rejse</strong>.</li><li><strong>Geografisk område</strong>.</li><li><strong>Afbestilling</strong> pr. rejse.</li><li><strong>Aldersgrænser</strong>.</li></ul>"),
        ("Årsrejse eller international sundhedsforsikring?", "<p>Bor du det meste af året i udlandet, se <a href=\"" + IPMI + "\">international sundhedsforsikring</a>.</p>"),
    ],
    faq=[
        ("Hvor mange rejser dækker den?", "Alle i 12 måneder, inden for grænsen pr. rejse."),
        ("Er den billigere?", "Ofte fra omkring tre rejser om året."),
        ("Gælder den i Danmark?", "Typisk kun under bestemte betingelser."),
    ],
)

K["ski"] = dict(
    slug="skiferie", preset=dict(intent="forTourism", sports=True),
    title="Rejseforsikring Skiferie — Sammenlign Redning og Sygedækning | Adler & Rochefort",
    desc="Sammenlign rejseforsikringer til skiferie: redning, behandling, hjemtransport, ansvar og udstyr. Premium forsikringer sorteret efter beskyttelse.",
    crumb="Skiferie", eyebrow="Rejseforsikring til skiferie",
    h1="Forsikring til skiferien: sammenlign redning, behandling og ansvar",
    lead="Skiulykker er blandt de hyppigste skader på rejsen. Sammenlign forsikringer med vintersport allerede valgt.",
    sections=[
        ("Hvad den skal betale", "<ul><li><strong>Redning</strong>, også med helikopter.</li><li><strong>Behandling</strong> på private klinikker i Alperne.</li><li><strong>Hjemtransport</strong> efter et brud.</li><li><strong>Ansvar</strong> ved kollision.</li><li><strong>Udstyr og liftkort</strong>.</li></ul>"),
        ("Offpist", "<p>Mange forsikringer dækker kun afmærkede, åbne pister. Offpist, toptur og heliski kan være undtaget.</p>"),
        ("Alperne, Nordamerika og Japan", "<p>I Alperne bliver redning og private klinikker dyre selv med det blå kort.</p>"),
    ],
    faq=[
        ("Dækker en almindelig rejseforsikring ski?", "Ofte ikke, eller kun med vintersporttillæg, her valgt."),
        ("Er helikopterredning dækket?", "I mange forsikringer med sporttillæg, inden for beløbet."),
        ("Dækker det blå kort redning?", "Nej."),
    ],
)

K["cruise"] = dict(
    slug="krydstogt", preset=dict(intent="cruise"),
    title="Rejseforsikring Krydstogt — Sammenlign Evakuering og Skibslæge | Adler & Rochefort",
    desc="Sammenlign forsikringer til krydstogt: behandling om bord, evakuering til søs, forsinket afgang og afbestilling.",
    crumb="Krydstogt", eyebrow="Rejseforsikring til krydstogt",
    h1="Krydstogtsforsikring: sammenlign evakuering og behandling om bord",
    lead="Skibets klinik fakturerer som en privatklinik, og en evakuering kan koste mere end rejsen.",
    sections=[
        ("Hvor forsikringerne adskiller sig", "<ul><li><strong>Behandling om bord</strong>: det blå kort gælder oftest ikke til søs.</li><li><strong>Evakuering</strong>.</li><li><strong>Forpasset afgang</strong>.</li><li><strong>Afbestilling</strong>.</li></ul>"),
        ("Rigtigt område", "<p>Et Caribien-krydstogt fra Miami kræver USA-zonen.</p>"),
        ("Rederiets forsikring", "<p>Sammenlign dens beløb med tilbuddene her.</p>"),
    ],
    faq=[
        ("Betaler forsikringen skibslægen?", "Krydstogtsforsikringer gør typisk, inden for beløbet."),
        ("Er evakuering dækket?", "I de fleste, som hjemtransport."),
        ("Skal jeg have USA-zonen til Caribien?", "Hvis du starter eller går i land i en amerikansk havn, ja."),
    ],
)

K["nomad"] = dict(
    slug="digitale-nomader", preset=dict(intent="digitalNomad"),
    title="Rejseforsikring til Digitale Nomader — Sammenlign | Adler & Rochefort",
    desc="Sammenlign rejseforsikringer til digitale nomader og fjernarbejdere: sygdomsudgifter, hjemtransport og ansvar i flere måneder.",
    crumb="Digitale nomader", eyebrow="Rejseforsikring til digitale nomader",
    h1="Rejseforsikring til digitale nomader: måneder væk, korrekt forsikret",
    lead="Foråret i Lissabon, sommeren på Bali, vinteren i Mexico City — en livsstil, ikke en ferie.",
    sections=[
        ("Hvad den skal kunne", "<ul><li><strong>Lange perioder</strong>.</li><li><strong>Flere lande</strong>.</li><li><strong>Høj sygedækning og hjemtransport</strong>.</li><li><strong>Ansvar</strong>.</li><li><strong>Udstyr</strong> med lave grænser.</li></ul>"),
        ("Nomadevisum", "<p>Portugals D8 og Spaniens nomadevisum kræver sygedækning; tjek konsulatets præcise krav.</p>"),
        ("Hvornår der skal sundhedsforsikring til", "<p>Se <a href=\"" + IPMI + "\">international sundhedsforsikring</a>.</p>"),
    ],
    faq=[
        ("Kan jeg købe den efter afrejse?", "Nogle forsikringer tillader det, ofte med karenstid."),
        ("Gælder den i Danmark?", "Oftest kun ved korte besøg."),
        ("Er min computer dækket?", "Inden for bagagedækningen, med lav grænse."),
    ],
)

K["longstay"] = dict(
    slug="laengere-ophold", preset=dict(intent="expat"),
    title="Rejseforsikring til Længere Ophold — Sammenlign | Adler & Rochefort",
    desc="Sammenlign forsikringer til længere ophold: vinter i Spanien eller Portugal, sabbatår, månederne før en flytning.",
    crumb="Længere ophold", eyebrow="Rejseforsikring til længere ophold",
    h1="Forsikring til længere ophold: fra vinteren i Spanien til månederne før flytningen",
    lead="Et sabbatår, en vinter på Costa del Sol eller overgangen før en flytning.",
    sections=[
        ("For hvem", "<ul><li><strong>Overvintrere</strong>.</li><li><strong>Sabbatår</strong>.</li><li><strong>Nye beboere</strong> før lokal forsikring.</li></ul>"),
        ("Hvad du sammenligner", "<ul><li><strong>Maks. varighed</strong>.</li><li><strong>Sygedækning</strong> og direkte betaling.</li><li><strong>Hjemtransport</strong>.</li><li><strong>Eksisterende sygdomme</strong>: oplys dem.</li></ul>"),
        ("Grænsen for en rejseforsikring", "<p>Når et andet land bliver hjem, skal der en <a href=\"" + IPMI + "\">sundhedsforsikring</a> til.</p>"),
    ],
    faq=[
        ("Hvor længe?", "Nogle måneder til et år."),
        ("Må jeg rejse hjem undervejs?", "Ofte på korte besøg."),
        ("Dækker min rejseforsikring via indboforsikringen hele vinteren?", "Ofte ikke: se vores guide om overvintring."),
    ],
)

K["cancel"] = dict(
    slug="afbestilling", preset=dict(intent="cancellation"),
    title="Afbestillingsforsikring til Dyre Rejser — Sammenlign | Adler & Rochefort",
    desc="Sammenlign afbestillingsforsikringer til safari, villaer, bådcharter og fjernrejser: beløb, dækkede årsager og afbrudt rejse.",
    crumb="Afbestilling", eyebrow="Afbestillingsforsikring",
    h1="Afbestillingsforsikring til rejser, du ikke vil miste",
    lead="En safari, en villa til familien, et bådcharter: depositummer uden refusion vokser hurtigt.",
    sections=[
        ("Tilpas beløbet", "<p>Beløbet skal dække hele den ikke-refunderbare pris for alle rejsende.</p>"),
        ("Hvad du sammenligner", "<ul><li><strong>Dækkede årsager</strong>.</li><li><strong>Afbrudt rejse</strong>.</li><li><strong>Købstidspunkt</strong>: ved første betaling.</li><li><strong>Selvrisiko</strong>.</li></ul>"),
        ("Kun afbestilling eller fuld pakke", "<p>Til USA og fjernrejser: sammenlign fulde pakker.</p>"),
    ],
    faq=[
        ("Hvornår køber jeg?", "Ved booking eller første betaling."),
        ("Dækker den, hvis jeg fortryder?", "Nej."),
        ("Dækker den depositum for villa?", "Hvis det er ikke-refunderbar rejseudgift inden for beløbet."),
    ],
)

K["group"] = dict(
    slug="gruppe", preset=dict(intent="groupTravel"),
    title="Grupperejseforsikring — Bryllup, Golf og Firmarejser | Adler & Rochefort",
    desc="Sammenlign grupperejseforsikringer: bryllup i udlandet, golfgrupper, familietræf og firmarejser. Én søgning for hele gruppen.",
    crumb="Gruppe", eyebrow="Grupperejseforsikring",
    h1="Grupperejseforsikring: én søgning for alle",
    lead="Et bryllup på Mallorca, en golfuge i Algarve, en firmarejse til Madrid.",
    sections=[
        ("Typiske grupperejser", "<ul><li><strong>Bryllup i udlandet</strong>.</li><li><strong>Golfgrupper</strong>.</li><li><strong>Flere generationer</strong>.</li><li><strong>Firmarejser</strong>.</li></ul>"),
        ("Hvad du tjekker", "<ul><li><strong>Gruppestørrelse</strong>.</li><li><strong>Aldre</strong>.</li><li><strong>Afbestilling</strong> for én person.</li><li><strong>Ansvar</strong>.</li></ul>"),
        ("Gæster fra andre lande", "<p>Hver gæst sammenligner med sit eget bopælsland.</p>"),
    ],
    faq=[
        ("Hvor mange pr. tilbud?", "Op til 12."),
        ("Samme forsikring til alle?", "Inden for samme tilbud, ja."),
        ("Kan svenske gæster købe?", "Ja, med Sverige som bopælsland."),
    ],
)

K["study"] = dict(
    slug="studerende", preset=dict(intent="studyInternship"),
    title="Forsikring til Studier i Udlandet — Sammenlign | Adler & Rochefort",
    desc="Sammenlign forsikringer til studier, praktik eller au pair i udlandet: sygedækning, hjemtransport og ansvar for hele studieåret.",
    crumb="Studerende", eyebrow="Forsikring til studier i udlandet",
    h1="Studier i udlandet: et år væk, korrekt forsikret",
    lead="Et semester i London, en kandidat i USA, praktik i Singapore. Universiteter sætter minimumskrav; forældre vil ofte mere.",
    sections=[
        ("Universitetets krav", "<ul><li><strong>Minimum</strong> er en tærskel.</li><li><strong>Høj sygedækning</strong> i USA og Canada.</li><li><strong>Hjemtransport</strong> og pårørendes rejse.</li><li><strong>Ansvar</strong>.</li></ul>"),
        ("USA", "<p>Mange universiteter kræver egen forsikring eller en waiver.</p>"),
        ("Praktik og au pair", "<p>Sammenligningen omfatter studier, praktik og au pair.</p>"),
    ],
    faq=[
        ("Godkender universitetet forsikringen?", "Sammenlign beløbene med de skriftlige krav."),
        ("Kan forældre købe?", "Ja, med den studerendes oplysninger."),
        ("Dækker den hele året?", "Maks. varighed står i hvert tilbud."),
    ],
)

K["winter"] = dict(
    slug="overvintring-spanien-portugal", kind="guide", preset=dict(dest="ES", intent="expat"),
    title="Overvintring i Spanien eller Portugal: Hvad Dækker Det Blå Kort? | Adler & Rochefort",
    desc="Overvintrer du på Costa del Sol eller i Algarve? Hvad det blå EU-sygesikringskort og rejseforsikringen i indboforsikringen dækker, og hvordan du sammenligner til hele vinteren.",
    crumb="Overvintring", eyebrow="Overvintring: blåt kort eller rejseforsikring?",
    h1="Overvintring i Spanien eller Portugal: hvad det blå kort dækker — og hvad det ikke gør",
    lead="Mange danskere tilbringer vinteren i Spanien eller Portugal. Det blå kort og indboforsikringens rejsedækning følger med — men begge har grænser.",
    sections=[
        ("Hvad det blå kort gør", "<p>Det blå EU-sygesikringskort giver adgang til <strong>offentlig behandling</strong> på samme vilkår som lokale borgere. Det betaler ikke privatklinikker eller hjemtransport til Danmark.</p>"),
        ("Rejsedækningens varighed", "<p>Rejseforsikringer i indbo- eller årsforsikringer har ofte en grænse for, hvor længe én rejse må vare. Tjek dine betingelser: efter grænsen er du uden dækning.</p>"),
        ("Sammenlign en forsikring til hele vinteren", "<p>En forsikring til længere ophold med høj sygedækning og hjemtransport til faktisk pris. Sammenligningen er sat til Spanien; skift til Portugal eller flere lande.</p>"),
    ],
    faq=[
        ("Dækker det blå kort privathospitaler i Spanien?", "Nej, kun offentlig behandling på lokale vilkår."),
        ("Er hjemtransport dækket af det blå kort?", "Nej."),
        ("Hvor længe må én rejse vare på min årsforsikring?", "Det afhænger af selskabet. Tjek betingelserne før afrejse."),
    ],
)
