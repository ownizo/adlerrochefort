/**
 * /se/marinor-yachter-portugal-spanien/ (cluster key nautical)
 *
 * Pillar article, September 2026. The subject comes first: the sea, sailing
 * and yachting in the great marinas of Portugal and Spain (~45%), then the
 * waterfront homes and marina apartments (~30%), then protection of the
 * yacht, the crew and the house on the water (~25%) with a CTA to a written
 * assessment.
 *
 * Swedish hooks: a sailing nation formed in the archipelagos and on the west
 * coast, Swedish boats on the ARC, and the Swedish communities on the Costa
 * del Sol and in Mallorca. Berths kept general (long-term concession rights,
 * not freehold); compulsory third-party liability kept general. "Du". No
 * insurer names, no prices.
 *
 * Form: shared short form. Yacht is not one of the four shared branches, so
 * the "other" option is preselected (as on /il/ and /zh/); the hidden subject
 * field carries the yacht context to the inbox.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const NAUTICAL_PAGE = {
  slug: 'marinor-yachter-portugal-spanien',
  url: '/se/marinor-yachter-portugal-spanien/',
  cluster: 'nautical',
  title: 'Marinor och yachter i Portugal och Spanien | Adler & Rochefort',
  description:
    'Marinorna i Portugal och Spanien — från Vilamoura och Cascais till Palma, Ibiza och Puerto Banús — bostäder vid vattnet och skyddet för båt, besättning och hus.',
  keywords:
    'marinor Portugal, marinor Spanien, båtplats Mallorca, Palma de Mallorca marina, Puerto Banús, Vilamoura marina, Cascais marina, båtförsäkring Spanien, yachtförsäkring, kaskoförsäkring båt, bostad vid marina, ARC Las Palmas',
  eyebrow: 'Portugal och Spanien · Marinor och yachter',
  h1: 'Marinor och yachter i Portugal och Spanien — havet, husen vid vattnet och skyddet',
  standfirst:
    'Svenskar lär sig segla i skärgården och på västkusten. På Iberiska halvön får seglingen en annan skala: Atlanten och Medelhavet, marinor där världens vackraste båtar ligger, och hus med utsikt över den egna båtplatsen.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Marinor och yachter i Portugal och Spanien' }],
  pullquote:
    'En yacht försäkras till ett värde man kommit överens om i förväg — dagen för skadan är fel tillfälle att diskutera vad den var värd.',
  schemaType: 'Article',
  formHeading: 'Berätta om din båt och ditt hus vid vattnet',
  formBranch: 'SE · Annat',
  formSubject: 'Båt och bostad vid vattnet — skriftlig genomgång',
  formCta: 'Be om en skriftlig genomgång',
  formIntro:
    'Beskriv båten och hur den används: typ, längd, hemmahamn, fartområde, besättning och eventuell charter. Har du ett hus eller en lägenhet vid marinan, beskriv gärna den också. Du får ett skriftligt svar.',
  formPlaceholder:
    'Till exempel: segelbåt 16 m, hemmahamn Palma, vi seglar Balearerna på sommaren och planerar ARC nästa år, lägenhet i Puerto Portals, jolle med utombordare.',
  sections: `
<section class="section plain" aria-labelledby="havet">
  <div class="container narrow article-body">
    <h2 id="havet">Atlanten och Medelhavet</h2>
    <p>Portugal och Spanien delar på två helt olika hav. Atlanten betyder oceandyning, en stadig nordlig vind på sommaren och rutter som leder vidare: till Madeira, till Azorerna, till Kanarieöarna och därifrån över till Karibien. Medelhavet betyder Balearernas vikar, korta överfarter mellan öarna, ankringsplatser i turkost vatten och en säsong som på Mallorca varar från maj till oktober.</p>
    <p>Svenska båtar finns på båda. Den som seglat Gotland Runt eller legat i Marstrand en julivecka känner igen stämningen i Palma eller Lagos — bara med längre säsong och varmare vatten. Allt fler svenska familjer har i dag båten i Palma, i Puerto Banús eller i Vilamoura och tillbringar inte två veckor utan flera månader vid den. Här är de viktigaste marinorna i båda länderna, hur bostäderna vid vattnet fungerar — och till sist det du bör tänka på när båt och hus ligger bredvid varandra.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="portugal">
  <div class="container narrow article-body">
    <h2 id="portugal">Portugal</h2>
    <h3>Algarve: Vilamoura, Lagos, Portimão</h3>
    <p><strong>Vilamoura</strong> är Algarves största och mest kända marina — en hamnbassäng omgiven av restauranger, lägenheter och golfbanor, med platser för stora motoryachter. <strong>Lagos</strong> i väster är seglarnas hamn: härifrån ger sig många båtar av söderut mot Madeira och Kanarieöarna, och klippkusten vid Ponta da Piedade är en av Europas vackraste. <strong>Portimão</strong>, vid floden Arades mynning, kombinerar marina med vatten där det regelbundet seglas kappseglingar.</p>
    <h3>Lissabon och Cascais</h3>
    <p><strong>Cascais</strong> har en lång kappseglingstradition och har haft tävlingar på högsta nivå. I själva Lissabon ligger båtarna i <strong>Doca de Alcântara</strong>, under 25 april-bron, och i <strong>Marina do Parque das Nações</strong> i stadens östra del. Tejoflodens mynning är ett av Europas vackraste stadsnära seglingsvatten, med Belém och Lissabons kullar som fond.</p>
    <h3>Tróia och Setúbal</h3>
    <p>På andra sidan Sados mynning ligger marinan i <strong>Tróia</strong> — lugn, på en halvö med sandstränder, nära Comporta och flodens bofasta delfiner.</p>
    <h3>Madeira och Azorerna</h3>
    <p>På Madeira ligger båtarna i <strong>Funchal</strong> och i <strong>Calheta</strong> på västkusten. På Azorerna är hamnen i <strong>Horta</strong> på Faial en legend: rastplatsen för seglare som korsar Atlanten, med traditionen att måla besättningens minnesbild på kajen och en bar som alla som kommit hit besöker.</p>
    <h3>Atlanten och ARC-rutten</h3>
    <p>Många båtar som övervintrar i Karibien inleder säsongen på hösten i Portugal: från Lissabon eller Lagos till Madeira, vidare till Kanarieöarna, där ARC — kappseglingen över Atlanten för långfärdsbåtar — startar i november. Skandinaviska båtar är sedan länge en stor del av fältet.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="spanien-hav">
  <div class="container narrow article-body">
    <h2 id="spanien-hav">Spanien</h2>
    <h3>Palma de Mallorca</h3>
    <p>Palma är en av Medelhavets yachthuvudstäder. <strong>Club de Mar</strong> och <strong>Real Club Náutico de Palma</strong> — arrangör av kappseglingen Copa del Rey — ligger i staden; västerut finns <strong>Puerto Portals</strong>, marinan med butiker och restauranger, och <strong>Port Adriano</strong>, utformad med Philippe Starck, med platser för superyachter. Palma är också Medelhavets verkstad: varv, refit, skeppare och besättningar.</p>
    <h3>Ibiza</h3>
    <p><strong>Marina Ibiza</strong> och <strong>Ibiza Magna</strong> mitt emot gamla stan Dalt Vila. På sommaren utgångspunkten för Formentera och dess vikar.</p>
    <h3>Costa del Sol: Puerto Banús och Sotogrande</h3>
    <p><strong>Puerto Banús</strong> i Marbella är marinan där båten också är ett visitkort. <strong>Sotogrande</strong> är lugnare, med hus direkt vid marinans kanaler och båtplatsen nedanför terrassen.</p>
    <h3>Barcelona och Valencia</h3>
    <p><strong>OneOcean Port Vell</strong> i Barcelona tar emot några av Medelhavets största yachter. Barcelona var 2024 värd för den 37:e America’s Cup; tidigare, 2007 och 2010, seglades America’s Cup i <strong>Valencia</strong>.</p>
    <h3>Kanarieöarna och Costa Brava</h3>
    <p><strong>Las Palmas de Gran Canaria</strong> är ARC:s starthamn — varje höst förbereder sig hundratals båtar här för Atlantöverfarten. I norr, på <strong>Costa Brava</strong>, passar vikar, klippor och små hamnar för kustsegling och motorbåtar.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="husen">
  <div class="container narrow article-body">
    <h2 id="husen">Husen vid vattnet och vid marinan</h2>
    <p>För en seglarfamilj ligger det perfekta huset inom synhåll från båten. På den exklusiva marknaden betyder det oftast en <strong>lägenhet eller penthouse vid marinan</strong> — i Vilamoura, Puerto Portals eller Port Adriano — eller en <strong>villa vid vattnet</strong>: i Sotogrande vid marinans kanaler, på Algarves klippor, vid Mallorcas och Costa Bravas vikar.</p>
    <p>Egen brygga eller kaj vid huset är ovanligt och alltid en fråga om regler: strandzonen är särskilt skyddad i båda länderna, och privata bryggor kräver tillstånd. Där de finns ska de finnas med i försäkringen — och i ansvarsskyddet. Ungefär som strandskyddet hemma, men med varje lands egna regler.</p>
    <p>Båtplatsen i marinan är sällan en egendom i vanlig mening. Oftast är det en långsiktig nyttjanderätt inom den koncession marinans operatör fått, för ett visst antal år — värt att förstå villkoren innan man behandlar den som en fastighet.</p>
    <p>Huset vid marinan fungerar som ett hus i ett bostadsområde: <em>comunidad</em> eller ägarförening, gemensamma delar, bevakning, ibland concierge. Och som ett seglarhus: långa perioder utan boende på sommaren när familjen är på sjön, och på vintern när den är hemma i Sverige.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="skyddet">
  <div class="container narrow">
    <h2 id="skyddet">Skydda båten, besättningen och huset vid vattnet</h2>
    <ul class="hub-list">
      <li class="hub-item"><h3>Kasko till överenskommet värde</h3><p>Skrov, maskin och utrustning försäkrade till ett värde som bestäms när försäkringen tecknas, inte beräknas efter skadan. För båtar med högt värde grunden för en lugn skadereglering.</p></li>
      <li class="hub-item"><h3>Ansvar — obligatoriskt och tillräckligt</h3><p>Ansvarsförsäkring för fritidsbåtar är obligatorisk i båda länderna. Lagens minimum motsvarar sällan risken med en stor båt i en fullsatt marina; beloppet väljs efter båt och fartområde.</p></li>
      <li class="hub-item"><h3>Skeppare och besättning</h3><p>En anställd skeppare och besättning innebär arbetsgivaransvar, bland annat olycksfalls- och sjukvårdsskydd. För kommersiella yachter tillkommer kraven i sjöarbetskonventionen MLC.</p></li>
      <li class="hub-item"><h3>Privat bruk eller charter</h3><p>Charter kräver kommersiell registrering och en annan försäkring. Att hyra ut båten på en privat försäkring kan äventyra hela skyddet.</p></li>
      <li class="hub-item"><h3>Fartområde och säsong</h3><p>Försäkringen anger var du får segla: Medelhavet, Atlantkusten, en oceanöverfart. I Karibien gäller begränsningar under orkansäsongen; vinterupplägg ska anmälas.</p></li>
      <li class="hub-item"><h3>Jolle, vattenskoter, leksaker</h3><p>Jolle, vattenskotrar, paddelbrädor och dykutrustning — med rätt belopp och ansvar, särskilt när gäster använder dem.</p></li>
      <li class="hub-item"><h3>Personliga saker ombord</h3><p>Smycken, klockor, elektronik och konst ombord behöver eget skydd; båtförsäkringen har ofta ett tak.</p></li>
      <li class="hub-item"><h3>Huset vid vattnet</h3><p>Storm, högvatten och översvämning, saltkorrosion, bryggan och ansvaret för den. I Spanien täcks extraordinära risker av Consorcio de Compensación de Seguros; i Portugal är jordskalvsskydd ett tillval.</p></li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="checklista">
  <div class="container narrow article-body">
    <h2 id="checklista">Kort checklista</h2>
    <ul>
      <li>Är båten försäkrad till ett överenskommet värde, och är det aktuellt?</li>
      <li>Motsvarar ansvarsbeloppet båtens storlek och fartområde?</li>
      <li>Omfattar fartområdet de planerade seglatserna, även Atlantöverfarten?</li>
      <li>Har skeppare och besättning de försäkringar som krävs?</li>
      <li>Har eventuell charter kommersiell registrering och rätt försäkring?</li>
      <li>Är jolle, vattenskotrar och personliga saker med?</li>
      <li>Har huset vid marinan skydd mot storm och översvämning, och bryggan ansvarsskydd?</li>
    </ul>
  </div>
</section>

<section class="section plain" aria-labelledby="genomgang">
  <div class="container narrow article-body">
    <h2 id="genomgang">Skriftlig genomgång</h2>
    <p>Adler &amp; Rochefort är en försäkringsförmedlare för privatpersoner och familjer med betydande tillgångar, med kontor i Lissabon och Lagos, registrerad hos ASF (nr 425591790/3) och verksam i Spanien med stöd av EU:s frihet att tillhandahålla tjänster. Båt och hus vid vattnet ser vi på tillsammans, med samma rådgivare från första kontakt till skadereglering. För ovanliga båtar arbetar vi med specialistmarknader och samarbetande förmedlare.</p>
    <p>Skicka båtens och husets försäkringar i dag. Du får skriftligt svar på vad de täcker, var luckorna finns och vad som är värt att ändra före säsongen.</p>
    <p><a href="#offert" class="btn-cta">Be om en skriftlig genomgång</a></p>
    <p class="legal-note">Sidan är allmän information och inte juridisk rådgivning om båtregistrering, koncessioner eller anställning av besättning. Vilket skydd som gäller beror på försäkringsbolagets riskbedömning och på villkoren i den försäkring som faktiskt utfärdas.</p>
  </div>
</section>`,
  faqTitle: 'Marinor och yachter — frågor',
  faq: [
    {
      q: 'Vilka marinor i Portugal och Spanien är viktigast?',
      a: '<p>I Portugal Vilamoura, Lagos och Portimão i Algarve, Cascais och Lissabon, samt Funchal på Madeira och Horta på Azorerna. I Spanien Palma de Mallorca med Club de Mar, Puerto Portals och Port Adriano, Ibiza, Puerto Banús och Sotogrande, Barcelona och Las Palmas på Kanarieöarna.</p>',
    },
    {
      q: 'Är ansvarsförsäkring för båten obligatorisk?',
      a: '<p>Ja. I både Portugal och Spanien måste fritidsbåtar ha ansvarsförsäkring. Lagens minimum motsvarar dock sällan risken med en stor båt, så beloppet väljs efter båt och fartområde.</p>',
    },
    {
      q: 'Kan jag chartra ut båten på min privata försäkring?',
      a: '<p>Nej. Charter kräver kommersiell registrering och en försäkring som omfattar charterverksamhet. Att hyra ut båten på en privat försäkring kan äventyra skyddet vid en skada.</p>',
    },
    {
      q: 'Äger jag båtplatsen i marinan?',
      a: '<p>Oftast inte i vanlig mening. Vanligen är det en långsiktig nyttjanderätt inom marinaoperatörens koncession, för ett visst antal år. Villkoren bör kontrolleras med en jurist före köpet.</p>',
    },
    {
      q: 'Gäller försäkringen över Atlanten?',
      a: '<p>Bara om fartområdet omfattar det. En oceanöverfart, till exempel med ARC från Kanarieöarna, måste anmälas, och i Karibien gäller begränsningar under orkansäsongen.</p>',
    },
  ],
  related: [
    { url: '/se/golf-bostader-portugal-spanien/', label: 'Golf i Portugal och Spanien' },
    { url: '/se/hemforsakring-portugal/', label: 'Hemförsäkring för värdefulla bostäder i Portugal' },
    { url: '/se/hemforsakring-spanien/', label: 'Hemförsäkring i Spanien' },
    { url: '/se/ansvarsforsakring-portugal/', label: 'Ansvarsförsäkring för familjen' },
    { url: '/se/ansvarsforsakring-spanien/', label: 'Ansvarsförsäkring för familjen i Spanien' },
  ],
};
