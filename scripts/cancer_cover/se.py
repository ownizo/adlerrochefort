"""Svenska. Fakta: scripts/cancer_cover/README.md. Arbetsspråk engelska (UI lang_policy)."""
TABLE = (
    '<div class="ipmi-table cc-table"><table><thead><tr><th></th><th>MGEN</th><th>Médis</th><th>Internationell (IPMI)</th></tr></thead><tbody>'
    "<tr><td>Passar för</td><td>Kunder med sjukdomshistorik och kunder över 65</td><td>Friska kunder under 65 som vill ha högt belopp</td><td>Kunder som vill få vård i fler än ett land</td></tr>"
    "<tr><td>Tidigare sjukdomar</td><td>Täcks efter 365 dagar</td><td>Undantas</td><td>Medicinsk riskbedömning</td></tr>"
    "<tr><td>Belopp för cancer</td><td>Inom planens moment</td><td>1 000 000 € för allvarliga sjukdomar (mest omfattande alternativet)</td><td>Cigna Global: cancervård betalas fullt ut i grundplanerna</td></tr>"
    "<tr><td>Var du får vård</td><td>Portugal</td><td>Portugal</td><td>Var som helst inom valt område</td></tr>"
    "<tr><td>Ålder vid anslutning</td><td>Ingen gräns</td><td>Upp till 65</td><td>Beror på bolaget</td></tr>"
    "<tr><td>Hälsodeklaration</td><td>Nej</td><td>Ja</td><td>Ja</td></tr>"
    "<tr><td>Krav</td><td>Två eller fler personer, portugisiskt NIF och adress</td><td>Portugisiskt NIF och adress</td><td>Ingen portugisisk adress krävs</td></tr>"
    "</tbody></table></div>"
)

PAGE = {
    "title": "Cancer och sjukvårdsförsäkring i Portugal | Adler & Rochefort",
    "desc": "Så ersätter portugisiska och internationella sjukvårdsförsäkringar cancerbehandling: belopp, karenstider, tidigare sjukdomar och vård utomlands.",
    "eyebrow": "Sjukvårdsförsäkring · Cancerskydd",
    "crumb": "Cancer och sjukvårdsförsäkring",
    "h1": "Cancer och sjukvårdsförsäkring i Portugal: lokalt och internationellt skydd",
    "lead": "De flesta sjukvårdsförsäkringar täcker cancer. De verkliga skillnaderna ligger i hur mycket de betalar, när skyddet börjar gälla och var du kan få vård. Den här guiden förklarar hur portugisiska och internationella sjukvårdsförsäkringar hanterar cancer, och vilken lösning som passar vilken situation.",
    "facts": [
        "Cancerbehandling täcks av både lokala och internationella försäkringar, inom varje försäkrings belopp, karenstider och undantag.",
        "Portugisiska försäkringsbolag undantar normalt tidigare sjukdomar och tar inte emot nya kunder över 65.",
        "MGEN är undantaget: tidigare sjukdomar täcks efter 365 dagars karens, utan hälsodeklaration och utan övre åldersgräns.",
        "Médis har i sitt mest omfattande alternativ 1 000 000 € för allvarliga sjukdomar, inklusive cancer, med 180 dagars karens.",
        "Internationella planer (Allianz Care, Cigna Global) täcker vård i hela det valda området; sjukdomshistoriken bedöms medicinskt.",
        "För ett förslag: fullständigt namn, födelsedatum, nationalitet och bosättningsland. Kostnadsfritt för dig.",
    ],
    "sections": [
        ("Varför cancerskyddet är den första frågan",
         "<p>Cancerbehandling är lång och dyr. Operation, cellgifter, strålning och målriktade läkemedel kan pågå i månader eller år. En försäkring som verkar generös för vanlig vård kan nå sitt maxbelopp mitt i behandlingen.</p>"
         "<p>Den användbara frågan är alltså inte om försäkringen täcker cancer, utan hur mycket den betalar, från när, för vilken historik och i vilket land.</p>"),
        ("Så täcker portugisiska försäkringar cancer",
         "<p>Portugisiska försäkringar betalar cancerbehandling upp till beloppet för varje moment, främst i Portugal. Fyra punkter avgör hur bra skyddet är:</p>"
         "<ul><li><strong>Försäkringsbelopp.</strong> Sjukhusvård och öppenvård har årliga maxbelopp. Vissa planer har ett separat belopp för allvarliga sjukdomar, avgörande vid långa behandlingar.</li>"
         "<li><strong>Karenstider.</strong> Skyddet för allvarliga sjukdomar börjar ofta gälla först efter flera månader. En diagnos under den tiden täcks inte.</li>"
         "<li><strong>Tidigare sjukdomar.</strong> Portugisiska bolag undantar normalt sjukdomar som fanns före avtalets start. En tidigare cancer, eller symtom som redan utreds, täcks vanligen inte.</li>"
         "<li><strong>Ålder och krav.</strong> De flesta bolag tar bara emot nya kunder upp till 65 år. Varje försäkrad behöver portugisisk adress och portugisiskt skattenummer (NIF).</li></ul>"
         "<p>Två bolag vi arbetar med hanterar dessa gränser annorlunda: MGEN för tidigare sjukdomar och Médis för beloppet.</p>"),
        ("MGEN: tidigare sjukdomar täcks efter 365 dagar",
         "<p>MGEN är undantaget på den portugisiska marknaden. Tidigare sjukdomar undantas inte utan täcks efter en karenstid på 365 dagar. Det är viktigt för den som har cancer i sjukdomshistorien, eller ett tillstånd som senare kan kopplas till cancer.</p>"
         "<ul><li><strong>Ingen hälsodeklaration</strong> vid anslutning.</li>"
         "<li><strong>Ingen övre åldersgräns</strong> för anslutning. MGEN är därför det främsta lokala alternativet efter 65.</li>"
         "<li><strong>Minst två försäkrade</strong> i samma hushåll. MGEN går inte att teckna för en ensam person.</li>"
         "<li><strong>Portugisiskt NIF och adress</strong> för varje försäkrad, med adressbevis.</li></ul>"
         "<p>De 365 dagarna räknas från försäkringens start. Att teckna tidigt är det bästa skyddet.</p>"),
        ("Médis: höga belopp för allvarliga sjukdomar",
         "<p>Médis är ett av de starkaste lokala alternativen när beloppet är det viktigaste. Det mest omfattande alternativet innehåller ett skydd för allvarliga sjukdomar (Doenças Graves) på 1 000 000 €, inklusive cancer, utöver sjukhus- och öppenvård.</p>"
         "<ul><li><strong>1 000 000 € för allvarliga sjukdomar</strong> i det mest omfattande alternativet.</li>"
         "<li><strong>Karenstid på 180 dagar</strong> för detta skydd.</li>"
         "<li><strong>Stöd inom onkologi</strong>, bland annat proteser och ortoser, psykologiskt stöd och hemsjukvård.</li>"
         "<li><strong>Obegränsad second opinion.</strong></li>"
         "<li><strong>Tidigare sjukdomar undantas</strong>, som hos de flesta portugisiska bolag.</li></ul>"
         "<p>Médis passar friska kunder under 65 som vill ha en stor reserv för en allvarlig diagnos. Vi förmedlar Médis via vårt agentavtal med Zurich.</p>"),
        ("Internationell sjukvårdsförsäkring: vård där du är",
         "<p>Internationella planer är till för den som bor utanför sitt medborgarskapsland, flyttar mellan länder eller vill kunna få vård utanför Portugal. En diagnos behöver inte ändra var du bor eller vilken onkolog du väljer.</p>"
         "<ul><li><strong><a href=\"/se/internationell-sjukvardsforsakring/cigna-global/\">Cigna Global</a>.</strong> Cancervård ingår i grundskyddet i Silver, Gold och Platinum och betalas fullt ut. Silver har ett årligt maxbelopp på 1 000 000 USD; Platinum det högsta årsbeloppet, utan fast tak.</li>"
         "<li><strong><a href=\"/se/internationell-sjukvardsforsakring/allianz-care/\">Allianz Care</a>.</strong> Sjukhusvård ingår i alla planer och cancerscreening täcks i hela utbudet. Utöver de globala alternativen finns ett område som bara gäller Europa.</li></ul>"
         "<p>Tre saker fungerar annorlunda. Du väljer ett <strong>geografiskt område</strong> och vård täcks var som helst inom det. <strong>Tidigare sjukdomar</strong> bedöms medicinskt: bolaget kan täcka, undanta eller ta ut ett tillägg. Och <strong>ingen portugisisk adress krävs</strong>.</p>"),
        ("Vilken lösning passar dig", TABLE),
        ("Fem frågor innan du tecknar",
         "<ol><li>Hur stort är det årliga beloppet för cancerbehandling, och finns ett separat belopp för allvarliga sjukdomar?</li>"
         "<li>Hur lång är karenstiden innan cancer täcks?</li>"
         "<li>Hur hanteras mina befintliga sjukdomar och min sjukdomshistorik?</li>"
         "<li>Kan jag få vård utanför Portugal, och på vilka villkor?</li>"
         "<li>Täcks cancerläkemedel, uppföljande undersökningar och öppenvårdsterapier lika bra som sjukhusvistelser?</li></ol>"
         "<p>Svaren finns i villkoren, inte i premien. Det är där en mäklare gör skillnad.</p>"),
        ("Så hjälper Adler &amp; Rochefort",
         "<p>Vi väljer förslag efter skydd, belopp och skadehantering, aldrig efter lägsta premie. Vid cancer avgör det valet hur väl du är skyddad.</p>"
         "<p>Som EU-reglerad mäklare registrerad hos den portugisiska tillsynsmyndigheten (ASF) arbetar vi med flera lokala och internationella bolag. Vi jämför deras villkor utifrån din ålder, sjukdomshistorik och dina planer, och förklarar skillnaderna skriftligt.</p>"),
    ],
    "faq": [
        ("Täcker sjukvårdsförsäkring i Portugal cancer?", "Ja. Lokala och internationella försäkringar täcker cancerbehandling inom sina belopp, karenstider och undantag."),
        ("Jag har haft cancer tidigare. Kan jag ändå få skydd?", "Hos de flesta portugisiska bolag undantas en tidigare cancer. MGEN täcker tidigare sjukdomar efter 365 dagars karens. Internationella bolag bedömer varje fall individuellt."),
        ("Jag är över 65. Vilka alternativ har jag?", "De flesta portugisiska bolag tar inte emot nya kunder över 65. MGEN har ingen åldersgräns om minst två personer i samma hushåll ansluter. Internationella planer är ett annat alternativ, efter medicinsk riskbedömning."),
        ("Kan jag få vård i Sverige om jag bor i Portugal?", "Med en internationell sjukvårdsförsäkring ja, om Sverige ingår i ditt område. Portugisiska försäkringar är främst utformade för vård i Portugal."),
        ("Vad händer vid en diagnos under karenstiden?", "Diagnosen täcks inte. Därför är startdatumet lika viktigt som beloppet."),
    ],
    "related": [
        ("/se/sjukvardsforsakring-portugal/", "Sjukvårdsförsäkring i Portugal"),
        ("/se/internationell-sjukvardsforsakring/", "Internationell sjukvårdsförsäkring"),
        ("/se/allianz-care-vs-cigna-global-sjukvardsforsakring/", "Allianz Care eller Cigna Global"),
    ],
    "form_h2": "Begär ett skriftligt förslag",
    "form_lead": "Berätta vem som ska försäkras och var du bor. Vi jämför lokala och internationella alternativ för din situation och svarar skriftligt.",
    "sources_label": "Källor",
    "sources": [
        ("Médis: ansökan Seguro de Saúde (april 2025)", "https://www.medis.pt/media/7572/proposta-individuais-pt_medis-editavel.pdf"),
        ("Cigna Global: internationella sjukvårdsplaner", "https://www.cignaglobal.com/"),
        ("Allianz Partners: nya Care-planer (november 2025)", "https://allianzcare.com/en/about-us/news/allianz-international-health-insurance-plans-update.html"),
    ],
}
