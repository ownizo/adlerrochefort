/**
 * /se/flytta-till-portugal-forsakring/
 *
 * Search intent: "flytta till Portugal försäkring" — the sequencing question.
 * This is the cluster's anchor guide: it does not re-explain each product but
 * orders them in time and names the three gaps that open during a move.
 *
 * Swedish-specific: utflyttningsanmälan to Skatteverket is the single event
 * that silently invalidates the Swedish policies' premise, personnummer vs NIF,
 * and the fact that Swedish home/car cover is written on Swedish residency.
 */
import { BREADCRUMB_ROOT } from './shared.mjs';

export const MOVING_PAGE = {
  slug: 'flytta-till-portugal-forsakring',
  url: '/se/flytta-till-portugal-forsakring/',
  cluster: 'moving',
  title: 'Flytta till Portugal: försäkringar i rätt ordning | Adler & Rochefort',
  description:
    'Vad som händer med svenska försäkringar vid utflyttning, de tre glappen som uppstår under flytten, och i vilken ordning sjukvård, hem och bil bör ordnas i Portugal.',
  keywords:
    'flytta till Portugal försäkring, utflyttning Sverige försäkringar, försäkring vid flytt utomlands, svenska försäkringar utomlands, NIF Portugal, uppehållsregistrering Portugal',
  eyebrow: 'Guide',
  h1: 'Flytta till Portugal: vad som händer med dina försäkringar, och i vilken ordning',
  standfirst:
    'Det mesta som går fel vid en flytt går fel på grund av tidsordningen, inte av val av bolag. Här är de tre glappen som uppstår under en flytt till Portugal och hur du stänger dem.',
  published: '2026-09-12T09:00:00+00:00',
  modified: '2026-09-12T09:00:00+00:00',
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Flytta till Portugal' }],
  pullquote: 'Ingen säger upp sina försäkringar. Man flyttar bara, och en dag stämmer inte längre det de bygger på.',
  schemaType: 'Article',
  formHeading: 'Planera försäkringarna för flytten',
  formBranch: '',
  formSubject: 'Flytt till Portugal — försäkringar',
  formCta: 'Boka ett samtal',
  formIntro:
    'Berätta var i flytten du står och vilket datum du siktar på. Vi svarar med vad som behöver ordnas, i vilken ordning.',
  formPlaceholder:
    'Till exempel: flyttar i februari till Lissabon, två vuxna, hyr första året, tar med bilen. Vad ordnar vi först?',
  sections: `
<section class="section plain" aria-labelledby="utflyttning">
  <div class="container narrow article-body">
    <h2 id="utflyttning">Händelsen som ändrar allt: utflyttningsanmälan</h2>
    <p>Vid flytt utomlands för längre tid än ett år gör man en utflyttningsanmälan till Skatteverket. Formellt är det en adressuppgift. Försäkringsmässigt är det den händelse som drar undan grunden för i stort sett varje försäkring du har i Sverige — för de är skrivna på svensk bosättning.</p>
    <p>Det som gör detta besvärligt är att inget går sönder synligt. Premien fortsätter dras, försäkringsbrevet ser oförändrat ut, appen fungerar. Skillnaden visar sig först vid skada, i den bedömning som görs då.</p>
    <div class="callout">
      <span class="callout-label">Den enda regel som betyder något</span>
      Meddela varje svenskt bolag flytten <strong>skriftligt</strong>, med exakt datum, och be om ett <strong>skriftligt svar</strong> om vad som gäller efter utflyttningen: upphör skyddet, fortsätter det under en övergångstid, eller kan försäkringen skrivas om? Det svaret, per försäkring, är underlaget för hela tidplanen. Säg aldrig upp något först och ordna anslutningen sedan.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="glapp">
  <div class="container narrow article-body">
    <h2 id="glapp">De tre glappen</h2>
    <h3>1. Sjukvårdsglappet</h3>
    <p>Vid utflyttningen upphör normalt kopplingen till svensk socialförsäkring, och EU-kortet gäller tillfällig vistelse — inte bosättning. Samtidigt tar registreringen i SNS tid: NIF, uppehållsregistrering, adressbevis, vårdcentral. Mellan de två ligger en period där du i praktiken står utan väg in i vården annat än akut. Kontrollera också om EU-intyget S1 gäller dig — för pensionärer med svensk pension ändrar det hela bilden. Se <a href="/se/sjukvardsforsakring-portugal/">sjukvårdsförsäkring i Portugal</a>.</p>
    <h3>2. Hemglappet</h3>
    <p>Den svenska hemförsäkringen täcker en bostad i Sverige och lösöret där. Flyttgodset under transport är en tredje sak, som normalt varken ligger i den svenska hemförsäkringen eller i den nya portugisiska — utan i flyttfirmans ansvar eller i en separat transportförsäkring. Fråga flyttfirman skriftligt vilket belopp deras ansvar är begränsat till; det är nästan alltid lägre än godsets värde. Se <a href="/se/hemforsakring-portugal/">hemförsäkring i Portugal</a>.</p>
    <h3>3. Bilglappet</h3>
    <p>Den svenska bilförsäkringen vilar på svensk registrering och bosättning; en portugisisk försäkring kan normalt bara skrivas på en portugisisk <em>matrícula</em>. Importen tar veckor. Utan planering blir mellanperioden en period av körning på oklar grund. Se <a href="/se/bilforsakring-portugal/">bilförsäkring i Portugal</a>.</p>
    <p>Till detta kommer en fjärde sak som inte är ett glapp utan en frånvaro: ansvarsskyddet du haft inne i den svenska hemförsäkringen finns inte automatiskt i den portugisiska. Se <a href="/se/ansvarsforsakring-portugal/">ansvarsförsäkring i Portugal</a>.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="ordning">
  <div class="container narrow article-body">
    <h2 id="ordning">Ordningen som fungerar</h2>
    <h3>Före flytten — tre till sex månader</h3>
    <ol class="process-steps">
      <li><div><strong>NIF</strong><span> (portugisiskt skattenummer) — förutsättningen för nästan allt: hyresavtal, bankkonto, fastighetsköp, försäkring.</span></div></li>
      <li><div><strong>Skriftliga svar</strong><span> från varje svenskt bolag om vad som gäller efter utflyttningen.</span></div></li>
      <li><div><strong>Intyg om skadefria år</strong><span> från bilförsäkringsbolaget, gärna på engelska. Begär det medan avtalet löper.</span></div></li>
      <li><div><strong>Din ställning hos Försäkringskassan</strong><span> klarlagd skriftligt, och kontrollerat om S1 gäller dig.</span></div></li>
      <li><div><strong>Sjukvårdsförsäkring</strong><span> tecknad medan hälsan är oproblematisk — hälsoprövningen blir inte enklare av att man väntar.</span></div></li>
      <li><div><strong>ISV-kalkyl</strong><span> om bilen ska med. För äldre bilar av vanliga modeller är det ofta billigare att sälja i Sverige.</span></div></li>
    </ol>
    <h3>Vid flytten</h3>
    <ol class="process-steps">
      <li><div><strong>Flyttfirmans ansvar</strong><span> skriftligt, och separat transportförsäkring om beloppet är för lågt.</span></div></li>
      <li><div><strong>Hemförsäkring på den portugisiska bostaden</strong><span> från inflyttningsdagen — även vid hyra, där hyresvärden försäkrar byggnaden men inte ditt lösöre eller ditt ansvar.</span></div></li>
      <li><div><strong>Bilen</strong><span>: svenskt skydd bekräftat under mellanperioden, portugisisk försäkring startad på <em>matrículans</em> datum.</span></div></li>
      <li><div><strong>Utflyttningsanmälan</strong><span> till Skatteverket, med de försäkringsfrågorna redan avklarade.</span></div></li>
    </ol>
    <h3>Efter flytten — de första månaderna</h3>
    <ol class="process-steps">
      <li><div><strong>Uppehållsregistrering</strong><span> hos behörig myndighet, och därefter registrering i SNS på vårdcentralen.</span></div></li>
      <li><div><strong>Körkortet registrerat</strong><span> hos IMT inom den frist som räknas från uppehållsregistreringen.</span></div></li>
      <li><div><strong>Bilimporten</strong><span> avslutad: tull, ISV eller befrielse, teknisk kontroll, homologering.</span></div></li>
      <li><div><strong>Ansvarsskydd</strong><span> kontrollerat — privat, och för yrkesverksamhet om du arbetar härifrån.</span></div></li>
      <li><div><strong>Genomgång efter sex månader</strong><span>: bostad, adress och verksamhet ser sällan ut som planen gjorde.</span></div></li>
    </ol>
  </div>
</section>

<section class="section tint" aria-labelledby="handlingar">
  <div class="container narrow article-body">
    <h2 id="handlingar">Handlingar som är värda att ha på engelska</h2>
    <p>Portugisiska bolag arbetar på portugisiska, vi arbetar på engelska, och svenska handlingar är obrukbara för båda. Det som är svårt eller omöjligt att få i efterhand:</p>
    <ul>
      <li><strong>Intyg om skadefria år</strong> från bilförsäkringsbolaget, med antal år och eventuella skador.</li>
      <li><strong>Skadehistorik</strong> från hemförsäkringen, om du haft skador.</li>
      <li><strong>Vaccinationsuppgifter</strong> och relevanta journalutdrag för familjens medlemmar.</li>
      <li><strong>Skriftlig bekräftelse</strong> från varje bolag om vad som gäller efter utflyttningen.</li>
      <li><strong>Registreringsbevis</strong> och köpehandling för fordonet.</li>
    </ul>
    <p>Praktisk ordning: begär allt detta medan avtalen fortfarande löper, be om engelska där det går, och spara i ett moln du kommer åt härifrån.</p>
  </div>
</section>`,
  faqTitle: 'Flytta till Portugal — frågor om försäkring',
  faq: [
    {
      q: 'Kan jag behålla mina svenska försäkringar?',
      a: '<p>Vissa kan skrivas om, andra upphör i praktiken när svensk bosättning inte längre föreligger. Svaret skiljer sig per försäkring och bolag, och det enda tillförlitliga är ett skriftligt svar från bolaget med ditt exakta utflyttningsdatum angivet. Säg inte upp något innan anslutningen är ordnad.</p>',
    },
    {
      q: 'Vad ordnar jag först?',
      a: '<p>NIF, eftersom nästan allt annat förutsätter det. Sedan sjukvårdsförsäkringen — den är den enda som blir svårare av att vänta, eftersom hälsoprövningen sker vid tecknandet. Hem och bil följer bostadens och registreringens datum.</p>',
    },
    {
      q: 'Täcker min hemförsäkring flyttgodset under transporten?',
      a: '<p>Normalt inte, och inte heller den nya portugisiska försäkringen. Godset under transport ligger i flyttfirmans ansvar, som ofta är beloppsbegränsat, eller i en separat transportförsäkring. Begär firmans ansvarsbelopp skriftligt och jämför med godsets värde.</p>',
    },
    {
      q: 'Behöver jag hemförsäkring om jag hyr?',
      a: '<p>Ja, för ditt eget lösöre och ditt ansvar. Hyresvärden försäkrar normalt byggnaden, inte det du har inne i den och inte skada du orsakar. Hyresavtal här innehåller ofta också ett krav på egen försäkring.</p>',
    },
    {
      q: 'Gäller EU-kortet under flytten?',
      a: '<p>EU-kortet är avsett för tillfällig vistelse, inte för den som flyttat sin bosättning. Under perioden mellan utflyttning och SNS-registrering är det just därför ett glapp uppstår, och det är ett av skälen att teckna sjukvårdsförsäkringen före flytten.</p>',
    },
  ],
  related: [
    { url: '/se/sjukvardsforsakring-portugal/', label: 'Sjukvårdsförsäkring i Portugal' },
    { url: '/se/bilforsakring-portugal/', label: 'Bilförsäkring i Portugal' },
    { url: '/se/hemforsakring-portugal/', label: 'Hemförsäkring i Portugal' },
  ],
};
