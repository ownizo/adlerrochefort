"""Dansk. Fakta: scripts/cancer_cover/README.md. Arbejdssprog engelsk (UI lang_policy)."""
TABLE = (
    '<div class="ipmi-table cc-table"><table><thead><tr><th></th><th>MGEN</th><th>Médis</th><th>International (IPMI)</th></tr></thead><tbody>'
    "<tr><td>Passer til</td><td>Kunder med sygehistorik og kunder over 65</td><td>Raske kunder under 65, der ønsker en høj sum</td><td>Kunder, der vil kunne behandles i flere lande</td></tr>"
    "<tr><td>Tidligere sygdomme</td><td>Dækket efter 365 dage</td><td>Udelukket</td><td>Medicinsk risikovurdering</td></tr>"
    "<tr><td>Sum til kræft</td><td>Inden for planens dækninger</td><td>1.000.000 € til alvorlige sygdomme (mest omfattende variant)</td><td>Cigna Global: kræftbehandling betales fuldt ud i basisplanerne</td></tr>"
    "<tr><td>Behandlingssted</td><td>Portugal</td><td>Portugal</td><td>Overalt i det valgte område</td></tr>"
    "<tr><td>Alder ved tilmelding</td><td>Ingen grænse</td><td>Op til 65</td><td>Afhænger af selskabet</td></tr>"
    "<tr><td>Helbredsspørgeskema</td><td>Nej</td><td>Ja</td><td>Ja</td></tr>"
    "<tr><td>Krav</td><td>To eller flere personer, portugisisk NIF og adresse</td><td>Portugisisk NIF og adresse</td><td>Ingen portugisisk adresse krævet</td></tr>"
    "</tbody></table></div>"
)

PAGE = {
    "title": "Kræft og sundhedsforsikring i Portugal | Adler & Rochefort",
    "desc": "Sådan dækker portugisiske og internationale sundhedsforsikringer kræftbehandling: summer, karenstid, tidligere sygdomme og behandling i udlandet.",
    "eyebrow": "Sundhedsforsikring · Kræftdækning",
    "crumb": "Kræft og sundhedsforsikring",
    "h1": "Kræft og sundhedsforsikring i Portugal: lokal og international dækning",
    "lead": "De fleste sundhedsforsikringer dækker kræft. De reelle forskelle ligger i, hvor meget de betaler, hvornår dækningen træder i kraft, og hvor du kan blive behandlet. Denne guide forklarer, hvordan portugisiske og internationale sundhedsforsikringer håndterer kræft, og hvilken løsning der passer til hvilken situation.",
    "facts": [
        "Kræftbehandling er dækket af både lokale og internationale policer, inden for hver polices summer, karenstider og undtagelser.",
        "Portugisiske selskaber udelukker normalt tidligere sygdomme og optager ikke nye kunder over 65.",
        "MGEN er undtagelsen: tidligere sygdomme dækkes efter 365 dages karens, uden helbredsspørgeskema og uden øvre aldersgrænse.",
        "Médis har i den mest omfattende variant 1.000.000 € til alvorlige sygdomme, inklusive kræft, med 180 dages karens.",
        "Internationale planer (Allianz Care, Cigna Global) dækker behandling i hele det valgte område; sygehistorikken vurderes medicinsk.",
        "Til et tilbud: fulde navn, fødselsdato, nationalitet og bopælsland. Gratis for dig.",
    ],
    "sections": [
        ("Hvorfor kræftdækning er det første spørgsmål",
         "<p>Kræftbehandling er lang og dyr. Operation, kemoterapi, stråleterapi og målrettet medicin kan vare i måneder eller år. En police, der virker generøs til almindelig behandling, kan nå sin maksimale sum midt i forløbet.</p>"
         "<p>Det nyttige spørgsmål er derfor ikke, om policen dækker kræft, men hvor meget den betaler, fra hvornår, ved hvilken historik og i hvilket land.</p>"),
        ("Sådan dækker portugisiske forsikringer kræft",
         "<p>Portugisiske policer dækker kræftbehandling op til summen for hver dækning, primært i Portugal. Fire forhold afgør, hvor godt du er beskyttet:</p>"
         "<ul><li><strong>Forsikringssum.</strong> Hospitalsindlæggelse og ambulant behandling har årlige maksimumsbeløb. Nogle planer har en særskilt sum til alvorlige sygdomme, afgørende ved lange forløb.</li>"
         "<li><strong>Karenstid.</strong> Dækning for alvorlige sygdomme træder ofte først i kraft efter flere måneder. En diagnose i den periode er ikke dækket.</li>"
         "<li><strong>Tidligere sygdomme.</strong> Portugisiske selskaber udelukker normalt sygdomme, der fandtes før policens start. En tidligere kræft eller symptomer under udredning er sædvanligvis ikke dækket.</li>"
         "<li><strong>Alder og krav.</strong> De fleste selskaber optager kun nye kunder op til 65 år. Hver forsikret skal have portugisisk adresse og portugisisk skattenummer (NIF).</li></ul>"
         "<p>To selskaber, vi samarbejder med, håndterer disse grænser anderledes: MGEN for tidligere sygdomme og Médis for summen.</p>"),
        ("MGEN: tidligere sygdomme dækket efter 365 dage",
         "<p>MGEN er undtagelsen på det portugisiske marked. Tidligere sygdomme udelukkes ikke, men dækkes efter en karenstid på 365 dage. Det er vigtigt for alle med kræft i sygehistorien eller en tilstand, der senere kan knyttes til kræft.</p>"
         "<ul><li><strong>Intet helbredsspørgeskema</strong> ved tilmelding.</li>"
         "<li><strong>Ingen øvre aldersgrænse</strong> for tilmelding. MGEN er derfor den vigtigste lokale mulighed efter 65.</li>"
         "<li><strong>Mindst to forsikrede</strong> fra samme husstand. MGEN kan ikke tegnes af en enkelt person.</li>"
         "<li><strong>Portugisisk NIF og adresse</strong> for hver forsikret, med dokumentation for adresse.</li></ul>"
         "<p>De 365 dage regnes fra policens start. At tegne tidligt er den bedste beskyttelse.</p>"),
        ("Médis: høje summer til alvorlige sygdomme",
         "<p>Médis er en af de stærkeste lokale muligheder, når forsikringssummen er det vigtigste. Den mest omfattende variant indeholder en dækning for alvorlige sygdomme (Doenças Graves) på 1.000.000 €, inklusive kræft, ud over hospitals- og ambulant dækning.</p>"
         "<ul><li><strong>1.000.000 € til alvorlige sygdomme</strong> i den mest omfattende variant.</li>"
         "<li><strong>Karenstid på 180 dage</strong> for denne dækning.</li>"
         "<li><strong>Støtte inden for onkologi</strong>, herunder proteser og ortoser, psykologisk støtte og hjemmesygepleje.</li>"
         "<li><strong>Ubegrænset second opinion.</strong></li>"
         "<li><strong>Tidligere sygdomme er udelukket</strong>, som hos de fleste portugisiske selskaber.</li></ul>"
         "<p>Médis passer til raske kunder under 65, der ønsker en stor reserve til en alvorlig diagnose. Vi formidler Médis via vores agenturaftale med Zurich.</p>"),
        ("International sundhedsforsikring: behandling der, hvor du er",
         "<p>Internationale planer er til dem, der bor uden for deres statsborgerskabsland, flytter mellem lande eller vil kunne blive behandlet uden for Portugal. En diagnose behøver ikke at ændre, hvor du bor, eller hvilken onkolog du vælger.</p>"
         "<ul><li><strong><a href=\"/dk/international-sundhedsforsikring/cigna-global/\">Cigna Global</a>.</strong> Kræftbehandling er en del af basisdækningen i Silver, Gold og Platinum og betales fuldt ud. Silver har et årligt maksimum på 1.000.000 USD; Platinum det højeste årlige maksimum, uden fast loft.</li>"
         "<li><strong><a href=\"/dk/international-sundhedsforsikring/allianz-care/\">Allianz Care</a>.</strong> Hospitalsbehandling indgår i alle planer, og kræftscreening er dækket i hele sortimentet. Ud over de globale muligheder findes et område kun for Europa.</li></ul>"
         "<p>Tre forhold fungerer anderledes. Du vælger et <strong>dækningsområde</strong>, og behandling er dækket overalt i det. <strong>Tidligere sygdomme</strong> vurderes medicinsk: selskabet kan dække, udelukke eller lægge et tillæg på. Og der <strong>kræves ingen portugisisk adresse</strong>.</p>"),
        ("Hvilken løsning passer til dig", TABLE),
        ("Fem spørgsmål før du tegner",
         "<ol><li>Hvor stor er den årlige sum til kræftbehandling, og findes der en separat sum til alvorlige sygdomme?</li>"
         "<li>Hvor lang er karenstiden, før kræft er dækket?</li>"
         "<li>Hvordan håndteres mine eksisterende sygdomme og min sygehistorik?</li>"
         "<li>Kan jeg blive behandlet uden for Portugal, og på hvilke vilkår?</li>"
         "<li>Er kræftmedicin, opfølgende scanninger og ambulant behandling dækket lige så godt som indlæggelse?</li></ol>"
         "<p>Svarene står i forsikringsbetingelserne, ikke i præmien. Det er her, en mægler gør en forskel.</p>"),
        ("Sådan hjælper Adler &amp; Rochefort",
         "<p>Vi udvælger tilbud efter dækning, summer og skadebehandling, aldrig efter den laveste præmie. Ved kræft afgør det valg, hvor godt du er beskyttet.</p>"
         "<p>Som EU-reguleret mægler registreret hos den portugisiske tilsynsmyndighed (ASF) samarbejder vi med flere lokale og internationale selskaber. Vi sammenligner deres vilkår ud fra din alder, sygehistorik og dine planer og forklarer forskellene skriftligt.</p>"),
    ],
    "faq": [
        ("Dækker en sundhedsforsikring i Portugal kræft?", "Ja. Lokale og internationale policer dækker kræftbehandling inden for deres summer, karenstider og undtagelser."),
        ("Jeg har haft kræft. Kan jeg stadig blive forsikret?", "Hos de fleste portugisiske selskaber er en tidligere kræft udelukket. MGEN dækker tidligere sygdomme efter 365 dages karens. Internationale selskaber vurderer hver sag individuelt."),
        ("Jeg er over 65. Hvilke muligheder har jeg?", "De fleste portugisiske selskaber optager ikke nye kunder over 65. MGEN har ingen aldersgrænse, hvis mindst to personer fra samme husstand tilmeldes. Internationale planer er en anden mulighed, efter medicinsk risikovurdering."),
        ("Kan jeg blive behandlet i Danmark, hvis jeg bor i Portugal?", "Med en international sundhedsforsikring ja, hvis Danmark ligger i dit dækningsområde. Portugisiske policer er primært tilrettelagt for behandling i Portugal."),
        ("Hvad sker der ved en diagnose i karenstiden?", "Diagnosen er ikke dækket. Derfor betyder policens startdato lige så meget som forsikringssummen."),
    ],
    "related": [
        ("/dk/sundhedsforsikring-portugal/", "Sundhedsforsikring i Portugal"),
        ("/dk/international-sundhedsforsikring/", "International sundhedsforsikring"),
        ("/dk/allianz-care-vs-cigna-global-sundhedsforsikring/", "Allianz Care eller Cigna Global"),
    ],
    "form_h2": "Få et skriftligt tilbud",
    "form_lead": "Fortæl os, hvem der skal forsikres, og hvor du bor. Vi sammenligner lokale og internationale muligheder for din situation og svarer skriftligt.",
    "sources_label": "Kilder",
    "sources": [
        ("Médis: ansøgning Seguro de Saúde (april 2025)", "https://www.medis.pt/media/7572/proposta-individuais-pt_medis-editavel.pdf"),
        ("Cigna Global: internationale sundhedsplaner", "https://www.cignaglobal.com/"),
        ("Allianz Partners: nye Care-planer (november 2025)", "https://allianzcare.com/en/about-us/news/allianz-international-health-insurance-plans-update.html"),
    ],
}
