/**
 * Rebuild value ("valor de reconstrução") — one page per language, October 2026.
 *
 * Brief (Hugo, 2 Oct 2026): a page that explains what the rebuild value is,
 * links to the APS SCRIM simulator so the client can recalculate it, says that
 * we place products that go beyond the traditional Portuguese generalist
 * insurers, and carries the home-insurance form. All languages.
 *
 * Revised Nov 2026 (housing audit): the "beyond the generalist insurers"
 * section and the matching FAQ are written as points we check in each wording
 * (rebuild value, proportional rule, total-loss settlement, walls and pools),
 * never as a condition the client will get.
 *
 * Consumers:
 *   * scripts/build-rebuild-value-pages.mjs — PT, EN, DE, NL, FR (hand-authored
 *     templates: the language's own home page is cloned so the page keeps that
 *     language's home form and chrome);
 *   * scripts/lib/rebuild-value-page.mjs — ES, IT, PL, SE, DK, ZH, IL (generated
 *     market clusters; the page joins each descriptor with cluster key
 *     'rebuild-value', which pairs them for hreflang).
 *
 * House rules kept: no insurer named, no prices, SCRIM described as indicative,
 * the above-rebuild settlement always "by agreement between insurer and
 * insured" and "in the products we place", never as a market-wide promise.
 * Example figures are the same in every language: rebuild 800,000, sum insured
 * 500,000 (62.5 %), loss 40,000 → 25,000.
 */

export const SCRIM_URL = 'https://scrim.segurnet.pt/';

/** url per language — also the hreflang group for the hand-authored pages. */
export const REBUILD_URLS = {
  pt: '/seguros/habitacao/valor-reconstrucao/',
  en: '/en/rebuild-value-home-insurance-portugal/',
  de: '/de/wiederaufbauwert-hausversicherung-portugal/',
  nl: '/nl/herbouwwaarde-woonverzekering-portugal/',
  fr: '/fr/valeur-reconstruction-assurance-habitation-portugal/',
  es: '/es/valor-reconstruccion-seguro-hogar/',
  it: '/it/valore-ricostruzione-assicurazione-casa-portogallo/',
  pl: '/pl/wartosc-odtworzeniowa-ubezpieczenie-domu-portugalia/',
  se: '/se/ateruppbyggnadsvarde-hemforsakring-portugal/',
  dk: '/dk/genopforelsesvaerdi-husforsikring-portugal/',
  zh: '/zh/rebuild-value-home-insurance-portugal/',
  il: '/il/rebuild-value-home-insurance-portugal/',
};

const scrim = (label) =>
  `<p class="scrim-cta"><a href="${SCRIM_URL}" target="_blank" rel="noopener" style="display:inline-block;padding:12px 22px;border-radius:999px;background:#292929;color:#fff;font-weight:600;text-decoration:none;">${label} &rarr;</a></p>`;

export const REBUILD = {
  pt: {
    title: 'Valor de reconstrução da casa: quanto segurar | Adler & Rochefort',
    description:
      'O que é o valor de reconstrução, porque decide a indemnização, como recalculá-lo no simulador SCRIM e o que verificar numa apólice para habitações de valor elevado.',
    keywords: 'valor de reconstrução, capital seguro habitação, simulador SCRIM, regra proporcional, subseguro casa, multirriscos habitação capital, custo de reconstrução Portugal',
    eyebrow: 'Seguro de habitação',
    crumb: 'Valor de reconstrução',
    h1: 'Valor de reconstrução: o número que decide a indemnização',
    standfirst:
      'O capital do edifício não é o preço que pagou pela casa nem o valor da avaliação do banco. É o custo de a voltar a construir — e é dele que depende quanto recebe num sinistro.',
    sections: [
      {
        id: 'o-que-e',
        h2: 'O que é o valor de reconstrução',
        html: `<p>É o custo de reconstruir o mesmo edifício, no mesmo local, com características e acabamentos equivalentes, a preços de hoje. Inclui:</p>
<ul>
<li>a demolição e a remoção de escombros;</li>
<li>o projeto, as licenças e os honorários técnicos;</li>
<li>a construção com acabamentos equivalentes aos atuais;</li>
<li>o IVA.</li>
</ul>
<p>Não inclui o terreno, a localização, a vista nem o mercado — nada disso arde. Por isso não é o preço de compra, nem o valor patrimonial tributário (VPT), nem a avaliação bancária.</p>`,
      },
      {
        id: 'regra-proporcional',
        h2: 'Porque decide a indemnização: a regra proporcional',
        html: `<p>Numa apólice multirriscos corrente, se o capital do edifício for inferior ao valor de reconstrução, a seguradora aplica a <strong>regra proporcional</strong>: indemniza na mesma proporção em que a casa está segura — também nos sinistros pequenos.</p>
<p><strong>Exemplo:</strong> valor de reconstrução de 800.000 €, capital seguro de 500.000 € (62,5 %). Num sinistro de 40.000 €, a indemnização é de 25.000 €.</p>
<p>O erro contrário também custa: um capital excessivo paga prémio a mais, porque numa apólice corrente a indemnização nunca ultrapassa o dano real.</p>`,
      },
      {
        id: 'scrim',
        h2: 'Recalcule-o no simulador SCRIM',
        html: `<p>A Associação Portuguesa de Seguradores (APS) disponibiliza gratuitamente o <strong>SCRIM</strong>, um simulador do custo de reconstrução de imóveis em Portugal, com base técnica desenvolvida pelo FUNDEC, do Instituto Superior Técnico. Introduz a área, a qualidade, a localização e as características da casa e obtém uma estimativa.</p>
${scrim('Abrir o simulador SCRIM da APS')}
<ul>
<li>Use a <strong>área bruta de construção</strong>, não a área útil.</li>
<li>Acrescente o que um simulador dificilmente capta: muros e muros de suporte, piscina, anexos, casa de hóspedes, arranjos exteriores. É por isso que arredondamos sempre para cima.</li>
<li>O resultado é indicativo. Nas casas de valor mais elevado, a vistoria da seguradora fixa o valor consigo.</li>
</ul>
<p>Para imóveis em Espanha o SCRIM não se aplica: a avaliação bancária costuma indicar um «valor de seguro», que é o ponto de partida.</p>`,
      },
      {
        id: 'alem',
        h2: 'Para além das seguradoras generalistas',
        html: `<p>Para habitações de valor elevado existem apólices que vão além dos multirriscos tradicionais das seguradoras generalistas portuguesas. Não são equivalentes entre si, por isso, antes de recomendar uma, verificamos por escrito:</p>
<ul>
<li><strong>Como é fixado o valor de reconstrução</strong> — por vistoria da seguradora, por avaliação profissional ou com o simulador SCRIM — e como se dimensionam os capitais de recheio e de objetos de valor.</li>
<li><strong>Como se aplica a regra proporcional</strong> se um capital vier a revelar-se insuficiente.</li>
<li><strong>Como se indemniza uma perda total:</strong> se a indemnização fica limitada ao valor de reconstrução ou pode chegar ao capital do edifício, e em que termos.</li>
<li><strong>Muros, piscinas, anexos e jardins:</strong> se têm capitais próprios ou um sublimite.</li>
</ul>
<p style="font-size:14px;">As condições dependem da seguradora e do risco e só ficam confirmadas nas condições da apólice emitida.</p>`,
      },
    ],
    faq: [
      { q: 'O valor de reconstrução é o mesmo que o valor de mercado?', a: 'Não. O valor de mercado inclui o terreno, a localização e a procura; o valor de reconstrução é apenas o custo de voltar a construir o edifício. Podem ser muito diferentes, nos dois sentidos.' },
      { q: 'Sou obrigado a usar o valor do SCRIM?', a: 'Não. O SCRIM é uma referência indicativa e o capital é decidido por si. Mas, numa apólice corrente, um capital abaixo do valor de reconstrução leva à regra proporcional em qualquer sinistro.' },
      { q: 'Posso receber mais do que o valor de reconstrução?', a: 'Numa apólice corrente, não. Algumas apólices para habitações de valor elevado preveem que, em caso de perda total e mediante acordo entre a seguradora e o segurado, a indemnização possa chegar ao capital contratado para o edifício; se isso se aplica depende da seguradora e é confirmado por escrito antes de contar com isso.' },
      { q: 'De quanto em quanto tempo devo rever o capital?', a: 'Pelo menos uma vez por ano e sempre depois de obras. A atualização automática dos capitais acompanha a inflação, mas não corrige um valor de partida errado.' },
    ],
    formHeading: 'Peça-nos a revisão do capital da sua casa',
  },

  en: {
    title: 'Rebuild value: how much to insure your home for',
    description:
      'What the rebuild value is, why it decides your claim, how to recalculate it with the SCRIM simulator, and what to check in a high-value wording.',
    keywords: 'rebuild value Portugal, rebuild cost home insurance Portugal, sum insured building Portugal, SCRIM simulator, average clause Portugal, underinsurance home Portugal',
    eyebrow: 'Home insurance · Portugal',
    crumb: 'Rebuild value',
    h1: 'Rebuild value: the number that decides your claim',
    standfirst:
      'The sum insured on the building is not what you paid for the house, nor the bank’s valuation. It is the cost of building it again — and it decides how much you are paid after a loss.',
    sections: [
      {
        id: 'what-it-is',
        h2: 'What the rebuild value is',
        html: `<p>It is the cost of rebuilding the same building, on the same site, to an equivalent specification, at today’s prices. It includes:</p>
<ul>
<li>demolition and debris removal;</li>
<li>design, permits and professional fees;</li>
<li>construction to an equivalent finish;</li>
<li>VAT.</li>
</ul>
<p>It excludes the land, the location, the view and the market — none of that burns. So it is not the purchase price, the tax value (VPT) or the mortgage valuation.</p>`,
      },
      {
        id: 'average',
        h2: 'Why it decides the claim: the proportional rule',
        html: `<p>Under a standard Portuguese multi-risk policy, if the building sum insured is below the rebuild value, the insurer applies the <strong>proportional rule</strong> (<em>regra proporcional</em>, the equivalent of average): it pays in the same proportion as the house is insured — on small claims too.</p>
<p><strong>Example:</strong> rebuild value €800,000, sum insured €500,000 (62.5%). On a €40,000 loss, the settlement is €25,000.</p>
<p>The opposite mistake costs too: an excessive sum insured means paying premium for nothing, because under a standard policy the settlement never exceeds the actual loss.</p>`,
      },
      {
        id: 'scrim',
        h2: 'Recalculate it with the SCRIM simulator',
        html: `<p>The Portuguese Insurers’ Association (APS) offers <strong>SCRIM</strong>, a free rebuild-cost simulator for properties in Portugal, built on a technical method developed by FUNDEC at Instituto Superior Técnico. You enter area, quality, location and features and get an estimate. The simulator is in Portuguese.</p>
${scrim('Open the APS SCRIM simulator')}
<ul>
<li>Use the <strong>gross construction area</strong>, not the usable floor area.</li>
<li>Add what a simulator struggles to capture: boundary and retaining walls, pool, outbuildings, guest house, landscaping. That is why we always round up.</li>
<li>The result is indicative. For higher-value homes, the insurer’s on-site survey sets the figure with you.</li>
</ul>
<p>SCRIM does not apply to properties in Spain, where the mortgage valuation usually states an “insurance value” as the starting point.</p>`,
      },
      {
        id: 'beyond',
        h2: 'Beyond the generalist insurers',
        html: `<p>For high-value homes there are wordings that go further than the traditional multi-risk policies of Portugal’s generalist insurers. They are not interchangeable, so before recommending one we check, in writing:</p>
<ul>
<li><strong>How the rebuild value is set</strong> — by an insurer’s survey, a professional valuation or the SCRIM simulator — and how contents and valuables are sized.</li>
<li><strong>How the proportional rule applies</strong> if a sum insured turns out to be short.</li>
<li><strong>How a total loss is settled:</strong> whether the settlement is limited to the rebuild value or can reach the building sum insured, and on what terms.</li>
<li><strong>Walls, pools, outbuildings and gardens:</strong> whether they carry their own sums insured or a sub-limit.</li>
</ul>
<p style="font-size:14px;">Conditions depend on the insurer and the risk and are only confirmed in the wording of the policy issued.</p>`,
      },
    ],
    faq: [
      { q: 'Is the rebuild value the same as market value?', a: 'No. Market value includes the land, the location and demand; rebuild value is only the cost of reconstructing the building. The two can differ a lot, in either direction.' },
      { q: 'Do I have to use the SCRIM figure?', a: 'No. SCRIM is an indicative reference and the sum insured is your decision. But under a standard policy, a sum below the rebuild value triggers the proportional rule on every claim.' },
      { q: 'Can I be paid more than the rebuild value?', a: 'Not under a standard policy. Some high-value wordings provide that, after a total loss and by agreement between insurer and insured, the settlement can reach the building sum insured; whether that applies depends on the insurer and is confirmed in writing before you rely on it.' },
      { q: 'How often should I review the sum insured?', a: 'At least once a year and always after works. Automatic indexation follows inflation but does not fix a starting figure that was wrong.' },
    ],
    formHeading: 'Ask us to review the sum insured on your home',
  },

  de: {
    title: 'Wiederaufbauwert: richtig versichern in Portugal',
    description:
      'Was der Wiederaufbauwert ist, warum er die Entschädigung bestimmt, wie Sie ihn mit dem SCRIM-Rechner prüfen und worauf es bei einer Police für hochwertige Häuser ankommt.',
    keywords: 'Wiederaufbauwert Portugal, Versicherungssumme Haus Portugal, Unterversicherung Portugal, regra proporcional, SCRIM Rechner, Hausversicherung Portugal Versicherungssumme',
    eyebrow: 'Hausversicherung · Portugal',
    crumb: 'Wiederaufbauwert',
    h1: 'Wiederaufbauwert: die Zahl, die über die Entschädigung entscheidet',
    standfirst:
      'Die Versicherungssumme des Gebäudes ist weder Ihr Kaufpreis noch der Bankwert. Es sind die Kosten, das Haus neu zu bauen — und davon hängt ab, was Sie im Schadenfall erhalten.',
    sections: [
      {
        id: 'was-ist-das',
        h2: 'Was der Wiederaufbauwert ist',
        html: `<p>Es sind die Kosten, dasselbe Gebäude am selben Ort in gleichwertiger Ausführung zu heutigen Preisen neu zu errichten. Dazu gehören:</p>
<ul>
<li>Abriss und Schuttbeseitigung;</li>
<li>Planung, Genehmigungen und Honorare;</li>
<li>der Bau in gleichwertiger Ausstattung;</li>
<li>die Mehrwertsteuer.</li>
</ul>
<p>Nicht dazu gehören Grundstück, Lage, Aussicht und Markt — nichts davon brennt. Deshalb ist er weder der Kaufpreis noch der Steuerwert (VPT) noch das Bankgutachten.</p>`,
      },
      {
        id: 'regra-proporcional',
        h2: 'Warum er die Entschädigung bestimmt: die regra proporcional',
        html: `<p>In einer üblichen portugiesischen Multirisiko-Police gilt: Liegt die Gebäudesumme unter dem Wiederaufbauwert, wendet der Versicherer die <strong>regra proporcional</strong> an — die Unterversicherungsregel. Er zahlt im selben Verhältnis, in dem das Haus versichert ist, auch bei kleinen Schäden.</p>
<p><strong>Beispiel:</strong> Wiederaufbauwert 800.000 €, Versicherungssumme 500.000 € (62,5 %). Bei einem Schaden von 40.000 € beträgt die Entschädigung 25.000 €.</p>
<p>Der umgekehrte Fehler kostet ebenfalls: Eine zu hohe Summe bedeutet Prämie ohne Gegenwert, denn in einer üblichen Police übersteigt die Entschädigung nie den tatsächlichen Schaden.</p>`,
      },
      {
        id: 'scrim',
        h2: 'Mit dem SCRIM-Rechner nachrechnen',
        html: `<p>Der portugiesische Versichererverband APS stellt mit <strong>SCRIM</strong> kostenlos einen Rechner für die Wiederaufbaukosten von Immobilien in Portugal bereit, auf Grundlage einer Methode des FUNDEC am Instituto Superior Técnico. Sie geben Fläche, Qualität, Lage und Merkmale ein und erhalten eine Schätzung. Der Rechner ist auf Portugiesisch.</p>
${scrim('SCRIM-Rechner der APS öffnen')}
<ul>
<li>Verwenden Sie die <strong>Bruttogeschossfläche</strong>, nicht die Wohnfläche.</li>
<li>Rechnen Sie hinzu, was ein Rechner kaum erfasst: Mauern und Stützmauern, Pool, Nebengebäude, Gästehaus, Außenanlagen. Deshalb runden wir immer auf.</li>
<li>Das Ergebnis ist ein Richtwert. Bei hochwertigen Häusern legt die Besichtigung des Versicherers den Wert mit Ihnen fest.</li>
</ul>
<p>Für Immobilien in Spanien gilt SCRIM nicht; dort nennt das Bankgutachten in der Regel einen „valor de seguro“ als Ausgangspunkt.</p>`,
      },
      {
        id: 'mehr-als-standard',
        h2: 'Mehr als die Standardversicherer',
        html: `<p>Für hochwertige Immobilien gibt es Bedingungswerke, die über die klassischen Multirisiko-Policen der portugiesischen Standardversicherer hinausgehen. Sie sind nicht austauschbar; bevor wir eines empfehlen, prüfen wir schriftlich:</p>
<ul>
<li><strong>Wie der Wiederaufbauwert festgelegt wird</strong> — durch Besichtigung des Versicherers, ein Gutachten oder den SCRIM-Rechner — und wie die Summen für Hausrat und Wertsachen bemessen werden.</li>
<li><strong>Wie die Proportionalregel greift</strong>, wenn sich eine Summe als zu niedrig erweist.</li>
<li><strong>Wie ein Totalschaden reguliert wird:</strong> ob die Leistung auf den Wiederaufbauwert begrenzt ist oder bis zur Gebäudesumme reichen kann, und zu welchen Bedingungen.</li>
<li><strong>Mauern, Pools, Nebengebäude und Gärten:</strong> ob sie eigene Summen haben oder einem Sublimit unterliegen.</li>
</ul>
<p style="font-size:14px;">Die Bedingungen hängen von Versicherer und Risiko ab und gelten erst mit der ausgestellten Police.</p>`,
      },
    ],
    faq: [
      { q: 'Ist der Wiederaufbauwert dasselbe wie der Marktwert?', a: 'Nein. Der Marktwert umfasst Grundstück, Lage und Nachfrage; der Wiederaufbauwert nur die Kosten des Neubaus. Beide können stark voneinander abweichen — in beide Richtungen.' },
      { q: 'Muss ich den SCRIM-Wert verwenden?', a: 'Nein. SCRIM ist ein Richtwert, die Summe entscheiden Sie. In einer üblichen Police führt eine Summe unter dem Wiederaufbauwert aber bei jedem Schaden zur regra proporcional.' },
      { q: 'Kann ich mehr als den Wiederaufbauwert erhalten?', a: 'In einer üblichen Police nicht. Manche Bedingungswerke für hochwertige Immobilien sehen vor, dass die Entschädigung bei Totalschaden nach Vereinbarung zwischen Versicherer und Versichertem bis zur Gebäudesumme reichen kann; ob das gilt, hängt vom Versicherer ab und wird schriftlich bestätigt, bevor Sie sich darauf verlassen.' },
      { q: 'Wie oft sollte ich die Summe prüfen?', a: 'Mindestens einmal jährlich und immer nach Bauarbeiten. Die automatische Anpassung folgt der Inflation, korrigiert aber keinen falschen Ausgangswert.' },
    ],
    formHeading: 'Lassen Sie die Versicherungssumme Ihres Hauses prüfen',
  },

  nl: {
    title: 'Herbouwwaarde: hoeveel verzekeren in Portugal | Adler & Rochefort',
    description:
      'Wat de herbouwwaarde is, waarom die de uitkering bepaalt, hoe u haar narekent met de SCRIM-calculator en waar u op let bij een polis voor een hoogwaardige woning.',
    keywords: 'herbouwwaarde Portugal, verzekerd bedrag woning Portugal, onderverzekering Portugal, evenredigheidsregel, SCRIM calculator, woonverzekering Portugal herbouwwaarde',
    eyebrow: 'Woonverzekering · Portugal',
    crumb: 'Herbouwwaarde',
    h1: 'Herbouwwaarde: het bedrag dat de uitkering bepaalt',
    standfirst:
      'Het verzekerd bedrag voor het gebouw is niet wat u voor het huis betaalde en ook niet de taxatie van de bank. Het zijn de kosten om het opnieuw te bouwen — en daarvan hangt af wat u bij schade ontvangt.',
    sections: [
      {
        id: 'wat-is-het',
        h2: 'Wat de herbouwwaarde is',
        html: `<p>Het zijn de kosten om hetzelfde gebouw, op dezelfde plek, in gelijkwaardige uitvoering, tegen de prijzen van vandaag opnieuw te bouwen. Daaronder vallen:</p>
<ul>
<li>sloop en afvoer van puin;</li>
<li>ontwerp, vergunningen en honoraria;</li>
<li>de bouw in gelijkwaardige afwerking;</li>
<li>btw.</li>
</ul>
<p>Grond, ligging, uitzicht en markt horen er niet bij — niets daarvan brandt af. Het is dus niet de koopprijs, niet de fiscale waarde (VPT) en niet de bankwaardering.</p>`,
      },
      {
        id: 'evenredigheidsregel',
        h2: 'Waarom zij de uitkering bepaalt: de evenredigheidsregel',
        html: `<p>In een gewone Portugese multirisicopolis geldt: ligt het verzekerd bedrag onder de herbouwwaarde, dan past de verzekeraar de <strong>evenredigheidsregel</strong> (<em>regra proporcional</em>) toe. Hij keert uit in dezelfde verhouding waarin het huis verzekerd is — ook bij kleine schades.</p>
<p><strong>Voorbeeld:</strong> herbouwwaarde € 800.000, verzekerd bedrag € 500.000 (62,5%). Bij een schade van € 40.000 is de uitkering € 25.000.</p>
<p>De omgekeerde fout kost ook geld: een te hoog bedrag is premie zonder tegenprestatie, want in een gewone polis is de uitkering nooit hoger dan de werkelijke schade.</p>`,
      },
      {
        id: 'scrim',
        h2: 'Reken haar na met de SCRIM-calculator',
        html: `<p>De Portugese verzekeraarsvereniging APS biedt met <strong>SCRIM</strong> gratis een calculator voor de herbouwkosten van woningen in Portugal, gebaseerd op een methode van FUNDEC van het Instituto Superior Técnico. U vult oppervlakte, kwaliteit, ligging en kenmerken in en krijgt een schatting. De calculator is in het Portugees.</p>
${scrim('Open de SCRIM-calculator van de APS')}
<ul>
<li>Gebruik de <strong>bruto bouwoppervlakte</strong>, niet de woonoppervlakte.</li>
<li>Tel erbij op wat een calculator nauwelijks meeneemt: muren en keermuren, zwembad, bijgebouwen, gastenverblijf, tuinaanleg. Daarom ronden wij altijd naar boven af.</li>
<li>De uitkomst is indicatief. Bij woningen van hogere waarde stelt de inspectie van de verzekeraar het bedrag samen met u vast.</li>
</ul>
<p>Voor woningen in Spanje geldt SCRIM niet; daar vermeldt de bankwaardering meestal een „valor de seguro” als vertrekpunt.</p>`,
      },
      {
        id: 'meer-dan-standaard',
        h2: 'Meer dan de standaardverzekeraars',
        html: `<p>Voor woningen van hoge waarde bestaan er voorwaarden die verder gaan dan de traditionele multirriscos-polissen van de Portugese algemene verzekeraars. Ze zijn niet uitwisselbaar; voordat wij er een aanbevelen, controleren wij schriftelijk:</p>
<ul>
<li><strong>Hoe de herbouwwaarde wordt vastgesteld</strong> — door een inspectie van de verzekeraar, een taxatie of de SCRIM-calculator — en hoe de bedragen voor inboedel en kostbaarheden worden bepaald.</li>
<li><strong>Hoe de evenredigheidsregel werkt</strong> als een verzekerd bedrag te laag blijkt.</li>
<li><strong>Hoe een totaal verlies wordt afgewikkeld:</strong> of de uitkering beperkt blijft tot de herbouwwaarde of kan oplopen tot het verzekerde bedrag van het gebouw, en onder welke voorwaarden.</li>
<li><strong>Muren, zwembaden, bijgebouwen en tuinen:</strong> of zij een eigen verzekerd bedrag hebben of een sublimiet.</li>
</ul>
<p style="font-size:14px;">De voorwaarden hangen af van de verzekeraar en het risico en staan pas vast in de afgegeven polis.</p>`,
      },
    ],
    faq: [
      { q: 'Is de herbouwwaarde hetzelfde als de marktwaarde?', a: 'Nee. De marktwaarde omvat grond, ligging en vraag; de herbouwwaarde alleen de kosten van herbouw. Ze kunnen sterk verschillen, in beide richtingen.' },
      { q: 'Moet ik het SCRIM-bedrag gebruiken?', a: 'Nee. SCRIM is indicatief en het verzekerd bedrag kiest u zelf. Maar in een gewone polis leidt een bedrag onder de herbouwwaarde bij elke schade tot de evenredigheidsregel.' },
      { q: 'Kan ik meer dan de herbouwwaarde ontvangen?', a: 'In een gewone polis niet. Sommige voorwaarden voor woningen van hoge waarde bepalen dat de uitkering bij totaal verlies, in overleg tussen verzekeraar en verzekerde, kan oplopen tot het verzekerde bedrag van het gebouw; of dat geldt, hangt af van de verzekeraar en wordt schriftelijk bevestigd voordat u erop rekent.' },
      { q: 'Hoe vaak moet ik het bedrag laten nakijken?', a: 'Minstens één keer per jaar en altijd na een verbouwing. Automatische indexering volgt de inflatie, maar corrigeert geen verkeerd startbedrag.' },
    ],
    formHeading: 'Laat het verzekerd bedrag van uw woning nakijken',
  },

  fr: {
    title: 'Valeur de reconstruction au Portugal : combien assurer',
    description:
      'La valeur de reconstruction : pourquoi elle décide de l’indemnité, comment la recalculer avec le simulateur SCRIM et ce qu’il faut vérifier dans un contrat haut de gamme.',
    keywords: 'valeur de reconstruction Portugal, capital assuré habitation Portugal, règle proportionnelle, sous-assurance Portugal, simulateur SCRIM, assurance habitation Portugal',
    eyebrow: 'Assurance habitation · Portugal',
    crumb: 'Valeur de reconstruction',
    h1: 'Valeur de reconstruction : le chiffre qui décide de l’indemnité',
    standfirst:
      'Le capital du bâtiment n’est ni le prix payé pour la maison ni l’évaluation de la banque. C’est le coût pour la reconstruire — et c’est de lui que dépend ce que vous recevez après un sinistre.',
    sections: [
      {
        id: 'definition',
        h2: 'Ce qu’est la valeur de reconstruction',
        html: `<p>C’est le coût pour reconstruire le même bâtiment, au même endroit, avec des caractéristiques et des finitions équivalentes, aux prix d’aujourd’hui. Elle comprend :</p>
<ul>
<li>la démolition et l’évacuation des gravats ;</li>
<li>la conception, les permis et les honoraires ;</li>
<li>la construction avec des finitions équivalentes ;</li>
<li>la TVA.</li>
</ul>
<p>Elle exclut le terrain, l’emplacement, la vue et le marché — rien de cela ne brûle. Ce n’est donc ni le prix d’achat, ni la valeur fiscale (VPT), ni l’évaluation bancaire.</p>`,
      },
      {
        id: 'regle-proportionnelle',
        h2: 'Pourquoi elle décide de l’indemnité : la règle proportionnelle',
        html: `<p>Dans une police multirisque portugaise classique, si le capital du bâtiment est inférieur à la valeur de reconstruction, l’assureur applique la <strong>règle proportionnelle</strong> (<em>regra proporcional</em>) : il indemnise dans la même proportion que la maison est assurée — y compris pour les petits sinistres.</p>
<p><strong>Exemple :</strong> valeur de reconstruction 800 000 €, capital assuré 500 000 € (62,5 %). Pour un sinistre de 40 000 €, l’indemnité est de 25 000 €.</p>
<p>L’erreur inverse coûte aussi : un capital excessif, c’est une prime sans contrepartie, car dans une police classique l’indemnité ne dépasse jamais le dommage réel.</p>`,
      },
      {
        id: 'scrim',
        h2: 'La recalculer avec le simulateur SCRIM',
        html: `<p>L’Association portugaise des assureurs (APS) met gratuitement à disposition <strong>SCRIM</strong>, un simulateur du coût de reconstruction des biens au Portugal, fondé sur une méthode du FUNDEC de l’Instituto Superior Técnico. Vous indiquez la surface, la qualité, l’emplacement et les caractéristiques et obtenez une estimation. Le simulateur est en portugais.</p>
${scrim('Ouvrir le simulateur SCRIM de l’APS')}
<ul>
<li>Utilisez la <strong>surface brute de construction</strong>, pas la surface habitable.</li>
<li>Ajoutez ce qu’un simulateur saisit mal : murs et murs de soutènement, piscine, dépendances, maison d’amis, aménagements extérieurs. C’est pourquoi nous arrondissons toujours au-dessus.</li>
<li>Le résultat est indicatif. Pour les maisons de grande valeur, la visite de l’assureur fixe le chiffre avec vous.</li>
</ul>
<p>SCRIM ne s’applique pas aux biens situés en Espagne, où l’évaluation bancaire indique généralement une « valor de seguro » comme point de départ.</p>`,
      },
      {
        id: 'au-dela',
        h2: 'Au-delà des assureurs généralistes',
        html: `<p>Pour les résidences de grande valeur, il existe des contrats qui vont au-delà des multirisques traditionnelles des assureurs généralistes portugais. Ils ne sont pas interchangeables ; avant d’en recommander un, nous vérifions par écrit :</p>
<ul>
<li><strong>Comment la valeur de reconstruction est fixée</strong> — par une visite de l’assureur, une expertise ou le simulateur SCRIM — et comment sont dimensionnés les capitaux du contenu et des objets de valeur.</li>
<li><strong>Comment s’applique la règle proportionnelle</strong> si un capital se révèle insuffisant.</li>
<li><strong>Comment une perte totale est indemnisée :</strong> si l’indemnité est limitée à la valeur de reconstruction ou peut atteindre le capital du bâtiment, et à quelles conditions.</li>
<li><strong>Murs, piscines, dépendances et jardins :</strong> s’ils disposent de capitaux propres ou d’une sous-limite.</li>
</ul>
<p style="font-size:14px;">Les conditions dépendent de l’assureur et du risque et ne sont confirmées que dans les conditions de la police émise.</p>`,
      },
    ],
    faq: [
      { q: 'La valeur de reconstruction est-elle la valeur de marché ?', a: 'Non. La valeur de marché inclut le terrain, l’emplacement et la demande ; la valeur de reconstruction, seulement le coût pour rebâtir. Les deux peuvent beaucoup différer, dans un sens comme dans l’autre.' },
      { q: 'Dois-je utiliser le chiffre de SCRIM ?', a: 'Non. SCRIM est une référence indicative et le capital est votre décision. Mais dans une police classique, un capital inférieur à la valeur de reconstruction entraîne la règle proportionnelle à chaque sinistre.' },
      { q: 'Puis-je recevoir plus que la valeur de reconstruction ?', a: 'Pas avec une police classique. Certains contrats pour résidences de grande valeur prévoient qu’en cas de perte totale, d’un commun accord entre l’assureur et l’assuré, l’indemnité puisse atteindre le capital assuré du bâtiment ; cela dépend de l’assureur et se confirme par écrit avant d’en tenir compte.' },
      { q: 'À quelle fréquence revoir le capital ?', a: 'Au moins une fois par an et toujours après des travaux. L’indexation automatique suit l’inflation, mais ne corrige pas un chiffre de départ erroné.' },
    ],
    formHeading: 'Faites revoir le capital de votre maison',
  },

  es: {
    title: 'Valor de reconstrucción: cuánto asegurar su casa',
    description:
      'Qué es el valor de reconstrucción, por qué decide la indemnización, cómo recalcularlo con el simulador SCRIM y qué revisar en una póliza para viviendas de alto valor.',
    keywords: 'valor de reconstrucción, suma asegurada vivienda Portugal, simulador SCRIM, regla proporcional, infraseguro, coste de reconstrucción Portugal, seguro hogar Portugal latinoamericanos',
    eyebrow: 'Portugal · Seguro de hogar',
    crumb: 'Valor de reconstrucción',
    h1: 'Valor de reconstrucción: la cifra que decide la indemnización',
    standfirst:
      'La suma asegurada del edificio no es lo que pagó por la casa ni la tasación del banco. Es lo que costaría volver a construirla — y de ella depende cuánto cobra en un siniestro.',
    sections: [
      {
        id: 'que-es',
        h2: 'Qué es el valor de reconstrucción',
        html: `<p>Es el coste de reconstruir el mismo edificio, en el mismo lugar, con características y acabados equivalentes, a precios de hoy. Incluye:</p>
<ul>
<li>la demolición y el desescombro;</li>
<li>el proyecto, las licencias y los honorarios técnicos;</li>
<li>la construcción con acabados equivalentes;</li>
<li>el IVA.</li>
</ul>
<p>No incluye el terreno, la ubicación, la vista ni el mercado — nada de eso se quema. Por eso no es el precio de compra, ni el valor fiscal (VPT), ni la tasación del banco.</p>`,
      },
      {
        id: 'regla-proporcional',
        h2: 'Por qué decide la indemnización: la regla proporcional',
        html: `<p>En una póliza multirriesgo corriente, si la suma del edificio es inferior al valor de reconstrucción, la aseguradora aplica la <strong>regla proporcional</strong>: indemniza en la misma proporción en que está asegurada la casa — también en los siniestros pequeños.</p>
<p><strong>Ejemplo:</strong> valor de reconstrucción de 800.000 €, suma asegurada de 500.000 € (62,5 %). En un siniestro de 40.000 €, la indemnización es de 25.000 €.</p>
<p>El error contrario también cuesta: una suma excesiva es prima pagada sin contrapartida, porque en una póliza corriente la indemnización nunca supera el daño real.</p>`,
      },
      {
        id: 'scrim',
        h2: 'Recalcúlelo con el simulador SCRIM',
        html: `<p>La Asociación Portuguesa de Aseguradores (APS) ofrece gratis el <strong>SCRIM</strong>, un simulador del coste de reconstrucción de inmuebles en Portugal, con una metodología del FUNDEC del Instituto Superior Técnico. Introduce la superficie, la calidad, la ubicación y las características y obtiene una estimación. El simulador está en portugués.</p>
${scrim('Abrir el simulador SCRIM de la APS')}
<ul>
<li>Use la <strong>superficie construida bruta</strong>, no la útil.</li>
<li>Añada lo que un simulador difícilmente capta: muros y muros de contención, piscina, anexos, casa de invitados, jardín. Por eso nosotros redondeamos siempre hacia arriba.</li>
<li>El resultado es indicativo. En las casas de mayor valor, la inspección de la aseguradora fija la cifra con usted.</li>
</ul>
<p>Para inmuebles en España el SCRIM no se aplica: la tasación hipotecaria suele indicar un «valor de seguro», que es el punto de partida. Véase <a href="/es/seguro-hogar-espana/">seguro de hogar en España</a>.</p>`,
      },
      {
        id: 'mas-alla',
        h2: 'Más allá de las aseguradoras generalistas',
        html: `<p>Para viviendas de alto valor existen pólizas que van más allá de los multirriesgos tradicionales de las aseguradoras generalistas portuguesas. No son intercambiables; antes de recomendar una, comprobamos por escrito:</p>
<ul>
<li><strong>Cómo se fija el valor de reconstrucción</strong> — por inspección de la aseguradora, por tasación o con el simulador SCRIM — y cómo se dimensionan las sumas de contenido y de objetos de valor.</li>
<li><strong>Cómo se aplica la regla proporcional</strong> si una suma resulta insuficiente.</li>
<li><strong>Cómo se indemniza una pérdida total:</strong> si la indemnización queda limitada al valor de reconstrucción o puede llegar a la suma del continente, y en qué términos.</li>
<li><strong>Muros, piscinas, anexos y jardines:</strong> si tienen sumas propias o un sublímite.</li>
</ul>
<p style="font-size:14px;">Las condiciones dependen de la aseguradora y del riesgo y solo quedan confirmadas en las condiciones de la póliza emitida.</p>`,
      },
    ],
    faq: [
      { q: '¿El valor de reconstrucción es lo mismo que el valor de mercado?', a: 'No. El valor de mercado incluye el terreno, la ubicación y la demanda; el de reconstrucción, solo el coste de volver a construir. Pueden ser muy distintos, en los dos sentidos.' },
      { q: '¿Estoy obligado a usar la cifra del SCRIM?', a: 'No. El SCRIM es una referencia indicativa y la suma la decide usted. Pero en una póliza corriente, una suma inferior al valor de reconstrucción lleva a la regla proporcional en cualquier siniestro.' },
      { q: '¿Puedo cobrar más que el valor de reconstrucción?', a: 'En una póliza corriente, no. Algunos condicionados para viviendas de alto valor prevén que, en caso de pérdida total y mediante acuerdo entre la aseguradora y el asegurado, la indemnización pueda llegar a la suma asegurada del continente; si se aplica depende de la aseguradora y se confirma por escrito antes de contar con ello.' },
      { q: '¿Cada cuánto debo revisar la suma?', a: 'Al menos una vez al año y siempre después de obras. La actualización automática sigue a la inflación, pero no corrige una cifra de partida equivocada.' },
    ],
    formHeading: 'Pídanos la revisión de la suma asegurada de su casa',
  },

  it: {
    title: 'Valore di ricostruzione: quanto assicurare la casa',
    description:
      'Cos’è il valore di ricostruzione, perché decide l’indennizzo, come ricalcolarlo con il simulatore SCRIM e che cosa verificare in una polizza per abitazioni di alto valore.',
    keywords: 'valore di ricostruzione Portogallo, somma assicurata casa Portogallo, regola proporzionale, sottoassicurazione, simulatore SCRIM, assicurazione casa Portogallo',
    eyebrow: 'Assicurazione casa · Portogallo',
    crumb: 'Valore di ricostruzione',
    h1: 'Valore di ricostruzione: la cifra che decide l’indennizzo',
    standfirst:
      'La somma assicurata dell’edificio non è il prezzo pagato per la casa né la perizia della banca. È il costo per ricostruirla — e da essa dipende quanto ricevete dopo un sinistro.',
    sections: [
      {
        id: 'cos-e',
        h2: 'Cos’è il valore di ricostruzione',
        html: `<p>È il costo per ricostruire lo stesso edificio, nello stesso luogo, con caratteristiche e finiture equivalenti, ai prezzi di oggi. Comprende:</p>
<ul>
<li>la demolizione e lo sgombero delle macerie;</li>
<li>il progetto, i permessi e gli onorari tecnici;</li>
<li>la costruzione con finiture equivalenti;</li>
<li>l’IVA.</li>
</ul>
<p>Non comprende il terreno, la posizione, la vista né il mercato — niente di tutto ciò brucia. Per questo non è il prezzo d’acquisto, né il valore fiscale (VPT), né la perizia bancaria.</p>`,
      },
      {
        id: 'regola-proporzionale',
        h2: 'Perché decide l’indennizzo: la regola proporzionale',
        html: `<p>In una polizza multirischio portoghese ordinaria, se la somma dell’edificio è inferiore al valore di ricostruzione, l’assicuratore applica la <strong>regola proporzionale</strong> (<em>regra proporcional</em>): indennizza nella stessa proporzione in cui la casa è assicurata — anche nei sinistri piccoli.</p>
<p><strong>Esempio:</strong> valore di ricostruzione 800.000 €, somma assicurata 500.000 € (62,5%). Per un sinistro di 40.000 €, l’indennizzo è di 25.000 €.</p>
<p>Anche l’errore opposto costa: una somma eccessiva è premio pagato senza contropartita, perché in una polizza ordinaria l’indennizzo non supera mai il danno reale.</p>`,
      },
      {
        id: 'scrim',
        h2: 'Ricalcolatelo con il simulatore SCRIM',
        html: `<p>L’Associazione portoghese degli assicuratori (APS) mette a disposizione gratuitamente <strong>SCRIM</strong>, un simulatore del costo di ricostruzione degli immobili in Portogallo, basato su una metodologia del FUNDEC dell’Instituto Superior Técnico. Inserite superficie, qualità, posizione e caratteristiche e ottenete una stima. Il simulatore è in portoghese.</p>
${scrim('Aprire il simulatore SCRIM dell’APS')}
<ul>
<li>Usate la <strong>superficie lorda costruita</strong>, non quella utile.</li>
<li>Aggiungete ciò che un simulatore coglie a fatica: muri e muri di contenimento, piscina, dependance, casa per gli ospiti, sistemazioni esterne. Per questo arrotondiamo sempre per eccesso.</li>
<li>Il risultato è indicativo. Per le case di maggior valore, il sopralluogo dell’assicuratore fissa la cifra con voi.</li>
</ul>
<p>Per gli immobili in Spagna SCRIM non si applica: la perizia bancaria indica di solito un «valor de seguro» come punto di partenza.</p>`,
      },
      {
        id: 'oltre',
        h2: 'Oltre gli assicuratori generalisti',
        html: `<p>Per le abitazioni di alto valore esistono polizze che vanno oltre le multirischio tradizionali degli assicuratori generalisti portoghesi. Non sono intercambiabili; prima di raccomandarne una verifichiamo per iscritto:</p>
<ul>
<li><strong>Come viene fissato il valore di ricostruzione</strong> — con il sopralluogo dell’assicuratore, una perizia o il simulatore SCRIM — e come si dimensionano le somme per contenuto e oggetti di valore.</li>
<li><strong>Come si applica la regola proporzionale</strong> se una somma si rivela insufficiente.</li>
<li><strong>Come viene liquidata una perdita totale:</strong> se l’indennizzo resta limitato al valore di ricostruzione o può arrivare alla somma del fabbricato, e a quali condizioni.</li>
<li><strong>Muri, piscine, dependance e giardini:</strong> se hanno somme proprie o un sottolimite.</li>
</ul>
<p style="font-size:14px;">Le condizioni dipendono dall’assicuratore e dal rischio e sono confermate solo nelle condizioni della polizza emessa.</p>`,
      },
    ],
    faq: [
      { q: 'Il valore di ricostruzione è il valore di mercato?', a: 'No. Il valore di mercato include terreno, posizione e domanda; quello di ricostruzione solo il costo per ricostruire. Possono differire molto, in entrambe le direzioni.' },
      { q: 'Devo usare la cifra di SCRIM?', a: 'No. SCRIM è un riferimento indicativo e la somma la decidete voi. Ma in una polizza ordinaria una somma inferiore al valore di ricostruzione comporta la regola proporzionale in ogni sinistro.' },
      { q: 'Posso ricevere più del valore di ricostruzione?', a: 'Non con una polizza ordinaria. Alcune condizioni per abitazioni di alto valore prevedono che, in caso di perdita totale e previo accordo tra assicuratore e assicurato, l’indennizzo possa arrivare alla somma assicurata del fabbricato; se si applica dipende dall’assicuratore e viene confermato per iscritto prima di farvi affidamento.' },
      { q: 'Ogni quanto rivedere la somma?', a: 'Almeno una volta l’anno e sempre dopo lavori. L’indicizzazione automatica segue l’inflazione, ma non corregge una cifra di partenza sbagliata.' },
    ],
    formHeading: 'Fate verificare la somma assicurata della vostra casa',
  },

  pl: {
    title: 'Wartość odtworzeniowa domu w Portugalii | Adler & Rochefort',
    description:
      'Czym jest wartość odtworzeniowa, dlaczego decyduje o odszkodowaniu, jak przeliczyć ją w symulatorze SCRIM i co sprawdzić w polisie dla domu o wysokiej wartości.',
    keywords: 'wartość odtworzeniowa Portugalia, suma ubezpieczenia domu Portugalia, zasada proporcji, niedoubezpieczenie, symulator SCRIM, ubezpieczenie domu Portugalia',
    eyebrow: 'Ubezpieczenie domu · Portugalia',
    crumb: 'Wartość odtworzeniowa',
    h1: 'Wartość odtworzeniowa: kwota, która decyduje o odszkodowaniu',
    standfirst:
      'Suma ubezpieczenia budynku to nie cena, jaką Państwo zapłacili, ani wycena banku. To koszt ponownej budowy — i od niego zależy, ile otrzymają Państwo po szkodzie.',
    sections: [
      {
        id: 'czym-jest',
        h2: 'Czym jest wartość odtworzeniowa',
        html: `<p>To koszt odbudowy tego samego budynku, w tym samym miejscu, o równorzędnych cechach i wykończeniu, według dzisiejszych cen. Obejmuje:</p>
<ul>
<li>rozbiórkę i wywóz gruzu;</li>
<li>projekt, pozwolenia i honoraria;</li>
<li>budowę w równorzędnym standardzie;</li>
<li>VAT.</li>
</ul>
<p>Nie obejmuje gruntu, lokalizacji, widoku ani rynku — nic z tego nie płonie. Dlatego nie jest to cena zakupu, wartość podatkowa (VPT) ani wycena bankowa.</p>`,
      },
      {
        id: 'zasada-proporcji',
        h2: 'Dlaczego decyduje o odszkodowaniu: zasada proporcji',
        html: `<p>W typowej portugalskiej polisie multirisk, jeśli suma ubezpieczenia budynku jest niższa od wartości odtworzeniowej, ubezpieczyciel stosuje <strong>zasadę proporcji</strong> (<em>regra proporcional</em>): wypłaca w takiej proporcji, w jakiej dom jest ubezpieczony — także przy małych szkodach.</p>
<p><strong>Przykład:</strong> wartość odtworzeniowa 800 000 €, suma ubezpieczenia 500 000 € (62,5%). Przy szkodzie 40 000 € odszkodowanie wynosi 25 000 €.</p>
<p>Odwrotny błąd też kosztuje: zbyt wysoka suma to składka bez pokrycia, bo w typowej polisie odszkodowanie nigdy nie przekracza rzeczywistej szkody.</p>`,
      },
      {
        id: 'scrim',
        h2: 'Proszę przeliczyć ją w symulatorze SCRIM',
        html: `<p>Portugalskie stowarzyszenie ubezpieczycieli (APS) udostępnia bezpłatnie <strong>SCRIM</strong> — symulator kosztu odbudowy nieruchomości w Portugalii, oparty na metodzie FUNDEC z Instituto Superior Técnico. Wystarczy podać powierzchnię, standard, lokalizację i cechy budynku, by otrzymać szacunek. Symulator jest po portugalsku.</p>
${scrim('Otwórz symulator SCRIM (APS)')}
<ul>
<li>Proszę podać <strong>powierzchnię zabudowy brutto</strong>, nie użytkową.</li>
<li>Proszę doliczyć to, czego symulator nie uwzględnia: mury i mury oporowe, basen, budynki gospodarcze, dom gościnny, zagospodarowanie terenu. Dlatego zawsze zaokrąglamy w górę.</li>
<li>Wynik jest orientacyjny. Przy domach o wyższej wartości kwotę ustala z Państwem oględziny ubezpieczyciela.</li>
</ul>
<p>SCRIM nie dotyczy nieruchomości w Hiszpanii — tam wycena bankowa zwykle podaje „valor de seguro” jako punkt wyjścia.</p>`,
      },
      {
        id: 'wiecej',
        h2: 'Więcej niż ubezpieczyciele ogólni',
        html: `<p>Dla domów o wysokiej wartości istnieją polisy wykraczające poza tradycyjne polisy multirriscos portugalskich ubezpieczycieli ogólnych. Nie są one wymienne; zanim jakąś zarekomendujemy, sprawdzamy na piśmie:</p>
<ul>
<li><strong>Jak ustalana jest wartość odtworzeniowa</strong> — na podstawie oględzin ubezpieczyciela, wyceny lub symulatora SCRIM — i jak dobiera się sumy dla ruchomości i przedmiotów wartościowych.</li>
<li><strong>Jak działa zasada proporcji</strong>, jeśli suma ubezpieczenia okaże się zbyt niska.</li>
<li><strong>Jak likwidowana jest szkoda całkowita:</strong> czy odszkodowanie jest ograniczone do wartości odtworzeniowej, czy może sięgnąć sumy ubezpieczenia budynku, i na jakich warunkach.</li>
<li><strong>Mury, baseny, budynki gospodarcze i ogrody:</strong> czy mają własne sumy ubezpieczenia, czy podlimit.</li>
</ul>
<p style="font-size:14px;">Warunki zależą od ubezpieczyciela i ryzyka i są potwierdzane dopiero w warunkach wystawionej polisy.</p>`,
      },
    ],
    faq: [
      { q: 'Czy wartość odtworzeniowa to wartość rynkowa?', a: 'Nie. Wartość rynkowa obejmuje grunt, lokalizację i popyt; odtworzeniowa — tylko koszt odbudowy. Mogą się bardzo różnić, w obie strony.' },
      { q: 'Czy muszę przyjąć wynik SCRIM?', a: 'Nie. SCRIM jest orientacyjny, a sumę wybierają Państwo. W typowej polisie suma niższa od wartości odtworzeniowej oznacza jednak zasadę proporcji przy każdej szkodzie.' },
      { q: 'Czy można otrzymać więcej niż wartość odtworzeniową?', a: 'W typowej polisie nie. Niektóre warunki dla nieruchomości o wysokiej wartości przewidują, że przy szkodzie całkowitej i w porozumieniu między ubezpieczycielem a ubezpieczonym odszkodowanie może sięgnąć sumy ubezpieczenia budynku; czy tak jest, zależy od ubezpieczyciela i jest potwierdzane na piśmie, zanim można na tym polegać.' },
      { q: 'Jak często weryfikować sumę?', a: 'Co najmniej raz w roku i zawsze po remoncie. Automatyczna indeksacja nadąża za inflacją, ale nie naprawia błędnej kwoty wyjściowej.' },
    ],
    formHeading: 'Prosimy o weryfikację sumy ubezpieczenia domu',
  },

  se: {
    title: 'Återuppbyggnadsvärde: hur mycket försäkra i Portugal',
    description:
      'Vad återuppbyggnadsvärdet är, varför det avgör ersättningen, hur du räknar om det i SCRIM-simulatorn och vad du ska kontrollera i en försäkring för ett hem med högt värde.',
    keywords: 'återuppbyggnadsvärde Portugal, försäkringsbelopp hus Portugal, proportionalitetsregeln, underförsäkring, SCRIM simulator, hemförsäkring Portugal',
    eyebrow: 'Hemförsäkring · Portugal',
    crumb: 'Återuppbyggnadsvärde',
    h1: 'Återuppbyggnadsvärdet: siffran som avgör ersättningen',
    standfirst:
      'Byggnadens försäkringsbelopp är varken vad du betalade för huset eller bankens värdering. Det är kostnaden för att bygga upp det igen — och den avgör vad du får efter en skada.',
    sections: [
      {
        id: 'vad-ar-det',
        h2: 'Vad återuppbyggnadsvärdet är',
        html: `<p>Det är kostnaden för att bygga upp samma byggnad, på samma plats, med likvärdiga egenskaper och ytskikt, till dagens priser. Det omfattar:</p>
<ul>
<li>rivning och bortforsling;</li>
<li>projektering, tillstånd och arvoden;</li>
<li>byggnation i likvärdig standard;</li>
<li>moms.</li>
</ul>
<p>Mark, läge, utsikt och marknad ingår inte — inget av det brinner. Därför är det varken köpeskillingen, taxeringsvärdet (VPT) eller bankens värdering.</p>`,
      },
      {
        id: 'proportionalitet',
        h2: 'Varför det avgör ersättningen: proportionalitetsregeln',
        html: `<p>I en vanlig portugisisk allriskförsäkring gäller: om byggnadens belopp är lägre än återuppbyggnadsvärdet tillämpar försäkringsbolaget <strong>proportionalitetsregeln</strong> (<em>regra proporcional</em>). Det betalar i samma proportion som huset är försäkrat — även vid små skador.</p>
<p><strong>Exempel:</strong> återuppbyggnadsvärde 800 000 €, försäkringsbelopp 500 000 € (62,5 %). Vid en skada på 40 000 € blir ersättningen 25 000 €.</p>
<p>Det omvända misstaget kostar också: ett för högt belopp är premie utan motprestation, eftersom ersättningen i en vanlig försäkring aldrig överstiger den faktiska skadan.</p>`,
      },
      {
        id: 'scrim',
        h2: 'Räkna om det i SCRIM-simulatorn',
        html: `<p>Den portugisiska försäkringsbranschens förening APS erbjuder gratis <strong>SCRIM</strong>, en simulator för återuppbyggnadskostnaden för fastigheter i Portugal, byggd på en metod från FUNDEC vid Instituto Superior Técnico. Du anger yta, standard, läge och egenskaper och får en uppskattning. Simulatorn är på portugisiska.</p>
${scrim('Öppna APS SCRIM-simulator')}
<ul>
<li>Använd <strong>bruttoarean</strong>, inte boytan.</li>
<li>Lägg till det en simulator har svårt att fånga: murar och stödmurar, pool, uthus, gästhus, trädgårdsanläggning. Därför avrundar vi alltid uppåt.</li>
<li>Resultatet är vägledande. För hus med högre värde fastställer försäkringsbolagets besiktning siffran tillsammans med dig.</li>
</ul>
<p>SCRIM gäller inte fastigheter i Spanien, där bankvärderingen oftast anger ett ”valor de seguro” som utgångspunkt.</p>`,
      },
      {
        id: 'mer-an-standard',
        h2: 'Mer än de vanliga försäkringsbolagen',
        html: `<p>För hem med högt värde finns försäkringar som går längre än de traditionella multirriscos-försäkringarna hos Portugals allmänna försäkringsbolag. De är inte utbytbara; innan vi rekommenderar en kontrollerar vi skriftligt:</p>
<ul>
<li><strong>Hur återuppbyggnadsvärdet fastställs</strong> — genom försäkringsbolagets besiktning, en värdering eller SCRIM-simulatorn — och hur beloppen för lösöre och värdeföremål bestäms.</li>
<li><strong>Hur proportionalitetsregeln tillämpas</strong> om ett belopp visar sig vara för lågt.</li>
<li><strong>Hur en totalskada regleras:</strong> om ersättningen begränsas till återuppbyggnadsvärdet eller kan nå byggnadens försäkringsbelopp, och på vilka villkor.</li>
<li><strong>Murar, pooler, uthus och trädgårdar:</strong> om de har egna försäkringsbelopp eller en underbegränsning.</li>
</ul>
<p style="font-size:14px;">Villkoren beror på försäkringsbolag och risk och bekräftas först i den utfärdade försäkringens villkor.</p>`,
      },
    ],
    faq: [
      { q: 'Är återuppbyggnadsvärdet samma sak som marknadsvärdet?', a: 'Nej. Marknadsvärdet omfattar mark, läge och efterfrågan; återuppbyggnadsvärdet bara kostnaden för att bygga om. De kan skilja sig mycket, åt båda hållen.' },
      { q: 'Måste jag använda SCRIM-värdet?', a: 'Nej. SCRIM är vägledande och beloppet väljer du. Men i en vanlig försäkring leder ett belopp under återuppbyggnadsvärdet till proportionalitetsregeln vid varje skada.' },
      { q: 'Kan jag få mer än återuppbyggnadsvärdet?', a: 'Inte i en vanlig försäkring. Vissa villkor för hus med högt värde anger att ersättningen vid totalskada, efter överenskommelse mellan försäkringsbolag och försäkringstagare, kan nå byggnadens försäkringsbelopp; om det gäller beror på försäkringsbolaget och bekräftas skriftligt innan du räknar med det.' },
      { q: 'Hur ofta ska beloppet ses över?', a: 'Minst en gång per år och alltid efter renovering. Automatisk indexering följer inflationen men rättar inte ett felaktigt startvärde.' },
    ],
    formHeading: 'Låt oss se över försäkringsbeloppet för ditt hus',
  },

  dk: {
    title: 'Genopførelsesværdi: hvor meget skal huset forsikres for',
    description:
      'Hvad genopførelsesværdien er, hvorfor den afgør erstatningen, hvordan du regner den i SCRIM-simulatoren, og hvad du skal tjekke i en police til en bolig af høj værdi.',
    keywords: 'genopførelsesværdi Portugal, forsikringssum hus Portugal, proportionalitetsreglen, underforsikring, SCRIM simulator, husforsikring Portugal',
    eyebrow: 'Husforsikring · Portugal',
    crumb: 'Genopførelsesværdi',
    h1: 'Genopførelsesværdien: tallet, der afgør erstatningen',
    standfirst:
      'Bygningens forsikringssum er hverken det, du betalte for huset, eller bankens vurdering. Det er prisen for at bygge det op igen — og den afgør, hvad du får efter en skade.',
    sections: [
      {
        id: 'hvad-er-det',
        h2: 'Hvad genopførelsesværdien er',
        html: `<p>Det er prisen for at genopføre den samme bygning, på samme sted, med tilsvarende egenskaber og finish, i dagens priser. Den omfatter:</p>
<ul>
<li>nedrivning og bortskaffelse af affald;</li>
<li>projektering, tilladelser og honorarer;</li>
<li>byggeriet i tilsvarende standard;</li>
<li>moms.</li>
</ul>
<p>Grund, beliggenhed, udsigt og marked indgår ikke — intet af det brænder. Derfor er den hverken købsprisen, den skattemæssige værdi (VPT) eller bankens vurdering.</p>`,
      },
      {
        id: 'proportionalitet',
        h2: 'Hvorfor den afgør erstatningen: proportionalitetsreglen',
        html: `<p>I en almindelig portugisisk multirisikopolice gælder: Er bygningens sum lavere end genopførelsesværdien, anvender selskabet <strong>proportionalitetsreglen</strong> (<em>regra proporcional</em>). Det betaler i samme forhold, som huset er forsikret — også ved små skader.</p>
<p><strong>Eksempel:</strong> genopførelsesværdi 800.000 €, forsikringssum 500.000 € (62,5 %). Ved en skade på 40.000 € er erstatningen 25.000 €.</p>
<p>Den omvendte fejl koster også: En for høj sum er præmie uden modydelse, for i en almindelig police overstiger erstatningen aldrig den faktiske skade.</p>`,
      },
      {
        id: 'scrim',
        h2: 'Regn den om i SCRIM-simulatoren',
        html: `<p>Den portugisiske forsikringsbranches forening APS stiller gratis <strong>SCRIM</strong> til rådighed — en simulator for genopførelsesprisen på ejendomme i Portugal, bygget på en metode fra FUNDEC ved Instituto Superior Técnico. Du indtaster areal, standard, beliggenhed og egenskaber og får et skøn. Simulatoren er på portugisisk.</p>
${scrim('Åbn APS’ SCRIM-simulator')}
<ul>
<li>Brug <strong>bruttoetagearealet</strong>, ikke boligarealet.</li>
<li>Læg det til, en simulator har svært ved at fange: mure og støttemure, pool, udhuse, gæstehus, haveanlæg. Derfor runder vi altid op.</li>
<li>Resultatet er vejledende. For huse af højere værdi fastsætter selskabets besigtigelse tallet sammen med dig.</li>
</ul>
<p>SCRIM gælder ikke ejendomme i Spanien, hvor bankens vurdering som regel angiver en „valor de seguro“ som udgangspunkt.</p>`,
      },
      {
        id: 'mere-end-standard',
        h2: 'Mere end de almindelige selskaber',
        html: `<p>Til boliger af høj værdi findes der policer, der går videre end de traditionelle multirriscos-policer hos de portugisiske almindelige selskaber. De er ikke indbyrdes udskiftelige; før vi anbefaler en, kontrollerer vi skriftligt:</p>
<ul>
<li><strong>Hvordan genopførelsesværdien fastsættes</strong> — ved selskabets besigtigelse, en vurdering eller SCRIM-simulatoren — og hvordan summerne for indbo og værdigenstande bestemmes.</li>
<li><strong>Hvordan reglen om forholdsmæssig nedsættelse anvendes</strong>, hvis en sum viser sig at være for lav.</li>
<li><strong>Hvordan en totalskade erstattes:</strong> om erstatningen er begrænset til genopførelsesværdien eller kan nå bygningens forsikringssum, og på hvilke vilkår.</li>
<li><strong>Mure, pools, udhuse og haver:</strong> om de har egne forsikringssummer eller en underbegrænsning.</li>
</ul>
<p style="font-size:14px;">Betingelserne afhænger af selskab og risiko og bekræftes først i den udstedte polices vilkår.</p>`,
      },
    ],
    faq: [
      { q: 'Er genopførelsesværdien det samme som markedsværdien?', a: 'Nej. Markedsværdien omfatter grund, beliggenhed og efterspørgsel; genopførelsesværdien kun prisen for at bygge op igen. De kan være meget forskellige, i begge retninger.' },
      { q: 'Skal jeg bruge SCRIM-tallet?', a: 'Nej. SCRIM er vejledende, og summen bestemmer du. Men i en almindelig police fører en sum under genopførelsesværdien til proportionalitetsreglen ved hver skade.' },
      { q: 'Kan jeg få mere end genopførelsesværdien?', a: 'Ikke i en almindelig police. Nogle vilkår til boliger af høj værdi fastsætter, at erstatningen ved totalskade efter aftale mellem selskab og sikrede kan nå bygningens forsikringssum; om det gælder, afhænger af selskabet og bekræftes skriftligt, før du regner med det.' },
      { q: 'Hvor ofte skal summen gennemgås?', a: 'Mindst én gang om året og altid efter ombygning. Automatisk indeksering følger inflationen, men retter ikke et forkert udgangspunkt.' },
    ],
    formHeading: 'Få gennemgået forsikringssummen for dit hus',
  },

  zh: {
    title: '重建价值：葡萄牙房屋应投保多少 | Adler & Rochefort',
    description:
      '什么是重建价值、为何它决定理赔金额、如何用 SCRIM 模拟器重新计算，以及高价值住宅保单需要核查的要点。',
    keywords: '葡萄牙 重建价值, 葡萄牙 房屋保险 保额, 比例赔付原则, 不足额保险, SCRIM 模拟器, 葡萄牙 房屋保险',
    eyebrow: '房屋保险 · 葡萄牙',
    crumb: '重建价值',
    h1: '重建价值：决定理赔金额的那个数字',
    standfirst:
      '建筑物的保额既不是您买房的价格，也不是银行的评估值，而是把房子重新建起来的成本——理赔时能拿到多少，取决于它。',
    sections: [
      {
        id: 'definition',
        h2: '什么是重建价值',
        html: `<p>重建价值是指按今天的价格，在同一地点、以同等特征和装修标准重建同一栋建筑的成本。它包括：</p>
<ul>
<li>拆除与清运废墟；</li>
<li>设计、许可和专业费用；</li>
<li>同等装修标准的建造；</li>
<li>增值税。</li>
</ul>
<p>它不包括土地、地段、景观和市场因素——这些都不会被烧毁。因此，它既不是购买价格，也不是税务价值（VPT），更不是银行评估值。</p>`,
      },
      {
        id: 'proportional',
        h2: '为何它决定理赔：比例赔付原则',
        html: `<p>在普通的葡萄牙综合险保单中，如果建筑物保额低于重建价值，保险公司会适用<strong>比例赔付原则</strong>（<em>regra proporcional</em>）：按房屋被投保的比例赔付——小额损失也一样。</p>
<p><strong>举例：</strong>重建价值 800,000 欧元，保额 500,000 欧元（62.5%）。发生 40,000 欧元的损失，赔付为 25,000 欧元。</p>
<p>反过来的错误同样有代价：保额过高只是多付保费，因为在普通保单中，赔付永远不会超过实际损失。</p>`,
      },
      {
        id: 'scrim',
        h2: '用 SCRIM 模拟器重新计算',
        html: `<p>葡萄牙保险业协会（APS）免费提供 <strong>SCRIM</strong>——葡萄牙房产重建成本模拟器，其技术方法由里斯本高等理工学院（Instituto Superior Técnico）下属的 FUNDEC 开发。输入面积、品质、地点和房屋特征即可获得估算。模拟器为葡萄牙语。</p>
${scrim('打开 APS 的 SCRIM 模拟器')}
<ul>
<li>请使用<strong>建筑总面积</strong>，而不是使用面积。</li>
<li>请加上模拟器难以涵盖的部分：围墙与挡土墙、泳池、附属建筑、客房、庭院景观。因此我们总是向上取整。</li>
<li>结果仅供参考。对于价值较高的房屋，保险公司的实地查勘会与您一起确定数额。</li>
</ul>
<p>SCRIM 不适用于西班牙的房产；在西班牙，银行评估报告通常会给出“valor de seguro”（保险价值）作为起点。</p>`,
      },
      {
        id: 'beyond',
        h2: '超越普通保险公司',
        html: `<p>对于高价值住宅，有些保单的保障范围超出葡萄牙普通保险公司的传统综合险。这些保单并不等同，因此在推荐之前，我们会以书面形式核查：</p>
<ul>
<li><strong>重建价值如何确定</strong>——通过保险公司的现场查勘、专业评估或 SCRIM 模拟器——以及室内财物和贵重物品的保额如何确定。</li>
<li><strong>比例赔付规则如何适用</strong>，如果某项保额被证明不足。</li>
<li><strong>全损如何理赔：</strong>赔付是以重建价值为限，还是可达建筑物保额，以及适用的条件。</li>
<li><strong>围墙、泳池、附属建筑和花园：</strong>是否设有单独保额或分项限额。</li>
</ul>
<p style="font-size:14px;">具体条件取决于保险公司和风险，仅以正式签发保单的条款为准。</p>`,
      },
    ],
    faq: [
      { q: '重建价值等于市场价值吗？', a: '不等于。市场价值包含土地、地段和供需；重建价值只是重新建造建筑的成本。两者可能相差很大，高低皆有可能。' },
      { q: '我必须使用 SCRIM 的数字吗？', a: '不必。SCRIM 仅供参考，保额由您决定。但在普通保单中，保额低于重建价值会导致每次理赔都适用比例赔付原则。' },
      { q: '我能获得超过重建价值的赔付吗？', a: '普通保单不能。部分高价值住宅保单规定，发生全损时，经保险公司与被保险人协商同意，赔付可达建筑物的约定保额；是否适用取决于保险公司，并会在您依赖之前以书面形式确认。' },
      { q: '多久应复核一次保额？', a: '至少每年一次，装修或改建后务必复核。自动指数调整只跟随通胀，无法纠正一开始就错误的数额。' },
    ],
    formHeading: '请我们复核您房屋的保额',
  },

  il: {
    title: 'ערך שחזור: על כמה לבטח בית בפורטוגל | Adler & Rochefort',
    description:
      'מהו ערך השחזור, מדוע הוא קובע את הפיצוי, איך לחשב אותו מחדש בסימולטור SCRIM, ומה לבדוק בפוליסה לבית בעל ערך גבוה.',
    keywords: 'ערך שחזור פורטוגל, סכום ביטוח בית פורטוגל, כלל היחסיות, ביטוח חסר, סימולטור SCRIM, ביטוח דירה פורטוגל',
    eyebrow: 'ביטוח דירה · פורטוגל',
    crumb: 'ערך שחזור',
    h1: 'ערך השחזור: המספר שקובע את הפיצוי',
    standfirst:
      'סכום הביטוח של המבנה אינו המחיר ששילמתם על הבית ואינו שמאות הבנק. זו עלות הבנייה מחדש — וממנה נגזר כמה תקבלו אחרי נזק.',
    sections: [
      {
        id: 'what-it-is',
        h2: 'מהו ערך השחזור',
        html: `<p>זו העלות לבנות מחדש את אותו מבנה, באותו מקום, במאפיינים ובגימור שווי ערך, במחירי היום. היא כוללת:</p>
<ul>
<li>הריסה ופינוי פסולת;</li>
<li>תכנון, היתרים ושכר טרחה מקצועי;</li>
<li>בנייה בגימור שווה ערך;</li>
<li>מע"מ.</li>
</ul>
<p>היא אינה כוללת את הקרקע, המיקום, הנוף והשוק — שום דבר מאלה לא נשרף. לכן זה אינו מחיר הרכישה, אינו הערך לצורכי מס (VPT) ואינו שמאות הבנק.</p>`,
      },
      {
        id: 'proportional',
        h2: 'מדוע הוא קובע את הפיצוי: כלל היחסיות',
        html: `<p>בפוליסה מקיפה רגילה בפורטוגל, אם סכום הביטוח של המבנה נמוך מערך השחזור, המבטח מפעיל את <strong>כלל היחסיות</strong> (<em>regra proporcional</em>): הוא משלם באותו יחס שבו הבית מבוטח — גם בנזקים קטנים.</p>
<p><strong>דוגמה:</strong> ערך שחזור 800,000 €, סכום ביטוח 500,000 € (62.5%). בנזק של 40,000 € הפיצוי הוא 25,000 €.</p>
<p>גם הטעות ההפוכה עולה כסף: סכום מופרז הוא פרמיה ללא תמורה, כי בפוליסה רגילה הפיצוי לעולם אינו עולה על הנזק בפועל.</p>`,
      },
      {
        id: 'scrim',
        h2: 'חשבו אותו מחדש בסימולטור SCRIM',
        html: `<p>איגוד חברות הביטוח בפורטוגל (APS) מציע בחינם את <strong>SCRIM</strong> — סימולטור לעלות שחזור נכסים בפורטוגל, המבוסס על שיטה של FUNDEC מ-Instituto Superior Técnico. מזינים שטח, רמת גימור, מיקום ומאפיינים ומקבלים הערכה. הסימולטור בפורטוגזית.</p>
${scrim('פתיחת סימולטור SCRIM של APS')}
<ul>
<li>השתמשו ב<strong>שטח הבנוי ברוטו</strong>, לא בשטח השימושי.</li>
<li>הוסיפו את מה שסימולטור מתקשה לכלול: חומות וקירות תמך, בריכה, מבני עזר, בית אירוח, פיתוח חצר. לכן אנחנו תמיד מעגלים כלפי מעלה.</li>
<li>התוצאה אינדיקטיבית. בבתים בעלי ערך גבוה, בדיקת המבטח בשטח קובעת את הסכום יחד איתכם.</li>
</ul>
<p>SCRIM אינו חל על נכסים בספרד; שם שמאות הבנק מציינת בדרך כלל „valor de seguro“ כנקודת מוצא.</p>`,
      },
      {
        id: 'beyond',
        h2: 'מעבר לחברות הביטוח הכלליות',
        html: `<p>לבתים בעלי ערך גבוה קיימות פוליסות שמרחיקות לכת יותר מפוליסות המולטי־סיכון המסורתיות של חברות הביטוח הכלליות בפורטוגל. הן אינן שקולות זו לזו, ולכן לפני שאנו ממליצים על אחת מהן אנו בודקים בכתב:</p>
<ul>
<li><strong>איך נקבע ערך השחזור</strong> — בסקר של המבטח, בהערכה מקצועית או בסימולטור SCRIM — ואיך נקבעים סכומי התכולה ופריטי הערך.</li>
<li><strong>איך חל כלל היחסיות</strong> אם סכום ביטוח מתברר כנמוך מדי.</li>
<li><strong>איך מפוצה אובדן מוחלט:</strong> האם הפיצוי מוגבל לערך השחזור או יכול להגיע לסכום הביטוח של המבנה, ובאילו תנאים.</li>
<li><strong>חומות, בריכות, מבני עזר וגינות:</strong> האם יש להם סכומי ביטוח משלהם או תת־גבול.</li>
</ul>
<p style="font-size:14px;">התנאים תלויים במבטח ובסיכון ומאושרים רק בתנאי הפוליסה שהונפקה.</p>`,
      },
    ],
    faq: [
      { q: 'האם ערך השחזור זהה לשווי השוק?', a: 'לא. שווי השוק כולל קרקע, מיקום וביקוש; ערך השחזור — רק את עלות הבנייה מחדש. הם יכולים להיות שונים מאוד, לשני הכיוונים.' },
      { q: 'האם אני חייב להשתמש במספר של SCRIM?', a: 'לא. SCRIM הוא נקודת ייחוס בלבד, והסכום הוא החלטה שלכם. אבל בפוליסה רגילה, סכום נמוך מערך השחזור מוביל לכלל היחסיות בכל נזק.' },
      { q: 'האם אפשר לקבל יותר מערך השחזור?', a: 'לא בפוליסה רגילה. חלק מהפוליסות לבתים בעלי ערך גבוה קובעות שבאובדן מוחלט, ובהסכמה בין המבטח למבוטח, הפיצוי יכול להגיע לסכום הביטוח של המבנה; האם זה חל תלוי במבטח, והדבר מאושר בכתב לפני שמסתמכים עליו.' },
      { q: 'באיזו תדירות לבדוק את הסכום?', a: 'לפחות פעם בשנה ותמיד לאחר שיפוץ. הצמדה אוטומטית עוקבת אחר האינפלציה, אך אינה מתקנת נקודת מוצא שגויה.' },
    ],
    formHeading: 'בקשו מאיתנו לבדוק את סכום הביטוח של ביתכם',
  },
};
