/**
 * Rebuild value ("valor de reconstrução") — one page per language, October 2026.
 *
 * Brief (Hugo, 2 Oct 2026): a page that explains what the rebuild value is,
 * links to the APS SCRIM simulator so the client can recalculate it, says that
 * we place products that go beyond the traditional Portuguese generalist
 * insurers — in a total loss, by agreement between insurer and insured, the
 * settlement can reach the maximum sum insured, above the rebuild value — and
 * carries the home-insurance form. All languages.
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
      'O que é o valor de reconstrução, porque decide a indemnização, como recalculá-lo no simulador SCRIM e as apólices que, em perda total, podem pagar acima dele.',
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
        html: `<p>Dispomos de produtos que vão além das apólices multirriscos tradicionais das seguradoras generalistas portuguesas, pensados para habitações de valor elevado:</p>
<ul>
<li><strong>Vistoria sem custo</strong> para fixar o valor de reconstrução e os capitais de recheio e objetos de valor.</li>
<li><strong>Sem regra proporcional</strong> quando são aceites os capitais recomendados: um sinistro parcial é pago por inteiro.</li>
<li><strong>Acima do valor de reconstrução:</strong> em caso de perda total, mediante acordo entre a seguradora e o segurado, a indemnização pode chegar ao capital máximo contratado para o edifício, acima do valor de reconstrução.</li>
<li><strong>Muros, piscinas, anexos e jardins</strong> com capitais próprios, não reduzidos a um valor simbólico.</li>
</ul>
<p style="font-size:14px;">As condições dependem da seguradora e do risco e só ficam confirmadas nas condições da apólice emitida.</p>`,
      },
    ],
    faq: [
      { q: 'O valor de reconstrução é o mesmo que o valor de mercado?', a: 'Não. O valor de mercado inclui o terreno, a localização e a procura; o valor de reconstrução é apenas o custo de voltar a construir o edifício. Podem ser muito diferentes, nos dois sentidos.' },
      { q: 'Sou obrigado a usar o valor do SCRIM?', a: 'Não. O SCRIM é uma referência indicativa e o capital é decidido por si. Mas, numa apólice corrente, um capital abaixo do valor de reconstrução leva à regra proporcional em qualquer sinistro.' },
      { q: 'Posso receber mais do que o valor de reconstrução?', a: 'Numa apólice corrente, não. Nos produtos que colocamos para habitações de valor elevado, em caso de perda total e mediante acordo entre a seguradora e o segurado, a indemnização pode chegar ao capital máximo contratado, acima do valor de reconstrução.' },
      { q: 'De quanto em quanto tempo devo rever o capital?', a: 'Pelo menos uma vez por ano e sempre depois de obras. A atualização automática dos capitais acompanha a inflação, mas não corrige um valor de partida errado.' },
    ],
    formHeading: 'Peça-nos a revisão do capital da sua casa',
  },

  en: {
    title: 'Rebuild value: how much to insure your home for',
    description:
      'What the rebuild value is, why it decides your claim, how to recalculate it with the SCRIM simulator, and the policies that can pay above it after a total loss.',
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
        html: `<p>We place products that go beyond the traditional multi-risk policies of Portugal’s generalist insurers, designed for high-value homes:</p>
<ul>
<li><strong>On-site survey at no cost</strong> to set the rebuild value and the contents and valuables sums insured.</li>
<li><strong>No proportional rule</strong> once the recommended sums are accepted: a partial loss is paid in full.</li>
<li><strong>Above the rebuild value:</strong> after a total loss, by agreement between insurer and insured, the settlement can reach the maximum building sum insured, above the rebuild value.</li>
<li><strong>Walls, pools, outbuildings and gardens</strong> with their own sums insured, not reduced to a token amount.</li>
</ul>
<p style="font-size:14px;">Conditions depend on the insurer and the risk and are only confirmed in the wording of the policy issued.</p>`,
      },
    ],
    faq: [
      { q: 'Is the rebuild value the same as market value?', a: 'No. Market value includes the land, the location and demand; rebuild value is only the cost of reconstructing the building. The two can differ a lot, in either direction.' },
      { q: 'Do I have to use the SCRIM figure?', a: 'No. SCRIM is an indicative reference and the sum insured is your decision. But under a standard policy, a sum below the rebuild value triggers the proportional rule on every claim.' },
      { q: 'Can I be paid more than the rebuild value?', a: 'Not under a standard policy. Under the high-value products we place, after a total loss and by agreement between insurer and insured, the settlement can reach the maximum sum insured, above the rebuild value.' },
      { q: 'How often should I review the sum insured?', a: 'At least once a year and always after works. Automatic indexation follows inflation but does not fix a starting figure that was wrong.' },
    ],
    formHeading: 'Ask us to review the sum insured on your home',
  },

  de: {
    title: 'Wiederaufbauwert: richtig versichern in Portugal',
    description:
      'Was der Wiederaufbauwert ist, warum er die Entschädigung bestimmt, wie Sie ihn mit dem SCRIM-Rechner prüfen und welche Policen bei Totalschaden mehr leisten.',
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
        html: `<p>Wir platzieren Produkte, die über die üblichen Multirisiko-Policen der portugiesischen Standardversicherer hinausgehen — für hochwertige Immobilien:</p>
<ul>
<li><strong>Kostenlose Besichtigung</strong>, um Wiederaufbauwert sowie Hausrat- und Wertsachensummen festzulegen.</li>
<li><strong>Keine regra proporcional</strong>, wenn die empfohlenen Summen übernommen werden: Ein Teilschaden wird voll bezahlt.</li>
<li><strong>Über den Wiederaufbauwert hinaus:</strong> Bei Totalschaden kann die Entschädigung nach Vereinbarung zwischen Versicherer und Versichertem bis zur vereinbarten Höchstsumme des Gebäudes reichen — über dem Wiederaufbauwert.</li>
<li><strong>Mauern, Pools, Nebengebäude und Gärten</strong> mit eigenen Summen statt symbolischer Beträge.</li>
</ul>
<p style="font-size:14px;">Die Bedingungen hängen von Versicherer und Risiko ab und gelten erst mit der ausgestellten Police.</p>`,
      },
    ],
    faq: [
      { q: 'Ist der Wiederaufbauwert dasselbe wie der Marktwert?', a: 'Nein. Der Marktwert umfasst Grundstück, Lage und Nachfrage; der Wiederaufbauwert nur die Kosten des Neubaus. Beide können stark voneinander abweichen — in beide Richtungen.' },
      { q: 'Muss ich den SCRIM-Wert verwenden?', a: 'Nein. SCRIM ist ein Richtwert, die Summe entscheiden Sie. In einer üblichen Police führt eine Summe unter dem Wiederaufbauwert aber bei jedem Schaden zur regra proporcional.' },
      { q: 'Kann ich mehr als den Wiederaufbauwert erhalten?', a: 'In einer üblichen Police nicht. In den Produkten für hochwertige Immobilien, die wir platzieren, kann die Entschädigung bei Totalschaden nach Vereinbarung zwischen Versicherer und Versichertem bis zur vereinbarten Höchstsumme reichen.' },
      { q: 'Wie oft sollte ich die Summe prüfen?', a: 'Mindestens einmal jährlich und immer nach Bauarbeiten. Die automatische Anpassung folgt der Inflation, korrigiert aber keinen falschen Ausgangswert.' },
    ],
    formHeading: 'Lassen Sie die Versicherungssumme Ihres Hauses prüfen',
  },

  nl: {
    title: 'Herbouwwaarde: hoeveel verzekeren in Portugal | Adler & Rochefort',
    description:
      'Wat de herbouwwaarde is, waarom die de uitkering bepaalt, hoe u haar narekent met de SCRIM-calculator en welke polissen bij totaal verlies meer uitkeren.',
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
        html: `<p>Wij plaatsen producten die verder gaan dan de gebruikelijke multirisicopolissen van de Portugese algemene verzekeraars, ontworpen voor woningen van hoge waarde:</p>
<ul>
<li><strong>Kosteloze inspectie</strong> om de herbouwwaarde en de bedragen voor inboedel en kostbaarheden vast te stellen.</li>
<li><strong>Geen evenredigheidsregel</strong> als de aanbevolen bedragen worden aanvaard: een gedeeltelijke schade wordt volledig vergoed.</li>
<li><strong>Boven de herbouwwaarde:</strong> bij totaal verlies kan de uitkering, in overleg tussen verzekeraar en verzekerde, oplopen tot het maximaal verzekerde bedrag van het gebouw — boven de herbouwwaarde.</li>
<li><strong>Muren, zwembaden, bijgebouwen en tuinen</strong> met eigen bedragen, niet teruggebracht tot een symbolisch bedrag.</li>
</ul>
<p style="font-size:14px;">De voorwaarden hangen af van de verzekeraar en het risico en staan pas vast in de afgegeven polis.</p>`,
      },
    ],
    faq: [
      { q: 'Is de herbouwwaarde hetzelfde als de marktwaarde?', a: 'Nee. De marktwaarde omvat grond, ligging en vraag; de herbouwwaarde alleen de kosten van herbouw. Ze kunnen sterk verschillen, in beide richtingen.' },
      { q: 'Moet ik het SCRIM-bedrag gebruiken?', a: 'Nee. SCRIM is indicatief en het verzekerd bedrag kiest u zelf. Maar in een gewone polis leidt een bedrag onder de herbouwwaarde bij elke schade tot de evenredigheidsregel.' },
      { q: 'Kan ik meer dan de herbouwwaarde ontvangen?', a: 'In een gewone polis niet. In de producten voor woningen van hoge waarde die wij plaatsen, kan de uitkering bij totaal verlies, in overleg tussen verzekeraar en verzekerde, oplopen tot het maximaal verzekerde bedrag.' },
      { q: 'Hoe vaak moet ik het bedrag laten nakijken?', a: 'Minstens één keer per jaar en altijd na een verbouwing. Automatische indexering volgt de inflatie, maar corrigeert geen verkeerd startbedrag.' },
    ],
    formHeading: 'Laat het verzekerd bedrag van uw woning nakijken',
  },

  fr: {
    title: 'Valeur de reconstruction au Portugal : combien assurer',
    description:
      'La valeur de reconstruction : pourquoi elle décide de l’indemnité, comment la recalculer avec le simulateur SCRIM et quelles polices paient au-delà.',
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
        html: `<p>Nous plaçons des produits qui vont au-delà des polices multirisques traditionnelles des assureurs généralistes portugais, conçus pour les résidences de grande valeur :</p>
<ul>
<li><strong>Visite sans frais</strong> pour fixer la valeur de reconstruction et les capitaux du contenu et des objets de valeur.</li>
<li><strong>Pas de règle proportionnelle</strong> lorsque les capitaux recommandés sont acceptés : un sinistre partiel est payé intégralement.</li>
<li><strong>Au-delà de la valeur de reconstruction :</strong> en cas de perte totale, d’un commun accord entre l’assureur et l’assuré, l’indemnité peut atteindre le capital maximal souscrit pour le bâtiment, au-delà de la valeur de reconstruction.</li>
<li><strong>Murs, piscines, dépendances et jardins</strong> avec leurs propres capitaux, et non réduits à un montant symbolique.</li>
</ul>
<p style="font-size:14px;">Les conditions dépendent de l’assureur et du risque et ne sont confirmées que dans les conditions de la police émise.</p>`,
      },
    ],
    faq: [
      { q: 'La valeur de reconstruction est-elle la valeur de marché ?', a: 'Non. La valeur de marché inclut le terrain, l’emplacement et la demande ; la valeur de reconstruction, seulement le coût pour rebâtir. Les deux peuvent beaucoup différer, dans un sens comme dans l’autre.' },
      { q: 'Dois-je utiliser le chiffre de SCRIM ?', a: 'Non. SCRIM est une référence indicative et le capital est votre décision. Mais dans une police classique, un capital inférieur à la valeur de reconstruction entraîne la règle proportionnelle à chaque sinistre.' },
      { q: 'Puis-je recevoir plus que la valeur de reconstruction ?', a: 'Pas avec une police classique. Avec les produits pour résidences de grande valeur que nous plaçons, en cas de perte totale et d’un commun accord entre l’assureur et l’assuré, l’indemnité peut atteindre le capital maximal souscrit.' },
      { q: 'À quelle fréquence revoir le capital ?', a: 'Au moins une fois par an et toujours après des travaux. L’indexation automatique suit l’inflation, mais ne corrige pas un chiffre de départ erroné.' },
    ],
    formHeading: 'Faites revoir le capital de votre maison',
  },

  es: {
    title: 'Valor de reconstrucción: cuánto asegurar su casa',
    description:
      'Qué es el valor de reconstrucción, por qué decide la indemnización, cómo recalcularlo con el simulador SCRIM y qué pólizas pagan más en pérdida total.',
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
        html: `<p>Disponemos de productos que van más allá de las pólizas multirriesgo tradicionales de las aseguradoras generalistas portuguesas, pensados para viviendas de alto valor:</p>
<ul>
<li><strong>Inspección sin coste</strong> para fijar el valor de reconstrucción y las sumas de contenido y objetos de valor.</li>
<li><strong>Sin regla proporcional</strong> cuando se aceptan las sumas recomendadas: un siniestro parcial se paga íntegro.</li>
<li><strong>Por encima del valor de reconstrucción:</strong> en caso de pérdida total, mediante acuerdo entre la aseguradora y el asegurado, la indemnización puede llegar a la suma máxima contratada para el edificio, por encima del valor de reconstrucción.</li>
<li><strong>Muros, piscinas, anexos y jardines</strong> con sumas propias, no reducidos a un importe simbólico.</li>
</ul>
<p style="font-size:14px;">Las condiciones dependen de la aseguradora y del riesgo y solo quedan confirmadas en las condiciones de la póliza emitida.</p>`,
      },
    ],
    faq: [
      { q: '¿El valor de reconstrucción es lo mismo que el valor de mercado?', a: 'No. El valor de mercado incluye el terreno, la ubicación y la demanda; el de reconstrucción, solo el coste de volver a construir. Pueden ser muy distintos, en los dos sentidos.' },
      { q: '¿Estoy obligado a usar la cifra del SCRIM?', a: 'No. El SCRIM es una referencia indicativa y la suma la decide usted. Pero en una póliza corriente, una suma inferior al valor de reconstrucción lleva a la regla proporcional en cualquier siniestro.' },
      { q: '¿Puedo cobrar más que el valor de reconstrucción?', a: 'En una póliza corriente, no. En los productos para viviendas de alto valor que colocamos, en caso de pérdida total y mediante acuerdo entre la aseguradora y el asegurado, la indemnización puede llegar a la suma máxima contratada.' },
      { q: '¿Cada cuánto debo revisar la suma?', a: 'Al menos una vez al año y siempre después de obras. La actualización automática sigue a la inflación, pero no corrige una cifra de partida equivocada.' },
    ],
    formHeading: 'Pídanos la revisión de la suma asegurada de su casa',
  },

  it: {
    title: 'Valore di ricostruzione: quanto assicurare la casa',
    description:
      'Cos’è il valore di ricostruzione, perché decide l’indennizzo, come ricalcolarlo con il simulatore SCRIM e quali polizze pagano oltre in caso di perdita totale.',
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
        html: `<p>Collochiamo prodotti che vanno oltre le polizze multirischio tradizionali degli assicuratori generalisti portoghesi, pensati per abitazioni di alto valore:</p>
<ul>
<li><strong>Sopralluogo gratuito</strong> per fissare il valore di ricostruzione e le somme per contenuto e oggetti di valore.</li>
<li><strong>Nessuna regola proporzionale</strong> se si accettano le somme raccomandate: un sinistro parziale è pagato per intero.</li>
<li><strong>Oltre il valore di ricostruzione:</strong> in caso di perdita totale, previo accordo tra assicuratore e assicurato, l’indennizzo può arrivare alla somma massima assicurata per l’edificio, oltre il valore di ricostruzione.</li>
<li><strong>Muri, piscine, dependance e giardini</strong> con somme proprie, non ridotte a un importo simbolico.</li>
</ul>
<p style="font-size:14px;">Le condizioni dipendono dall’assicuratore e dal rischio e sono confermate solo nelle condizioni della polizza emessa.</p>`,
      },
    ],
    faq: [
      { q: 'Il valore di ricostruzione è il valore di mercato?', a: 'No. Il valore di mercato include terreno, posizione e domanda; quello di ricostruzione solo il costo per ricostruire. Possono differire molto, in entrambe le direzioni.' },
      { q: 'Devo usare la cifra di SCRIM?', a: 'No. SCRIM è un riferimento indicativo e la somma la decidete voi. Ma in una polizza ordinaria una somma inferiore al valore di ricostruzione comporta la regola proporzionale in ogni sinistro.' },
      { q: 'Posso ricevere più del valore di ricostruzione?', a: 'Non con una polizza ordinaria. Con i prodotti per abitazioni di alto valore che collochiamo, in caso di perdita totale e previo accordo tra assicuratore e assicurato, l’indennizzo può arrivare alla somma massima assicurata.' },
      { q: 'Ogni quanto rivedere la somma?', a: 'Almeno una volta l’anno e sempre dopo lavori. L’indicizzazione automatica segue l’inflazione, ma non corregge una cifra di partenza sbagliata.' },
    ],
    formHeading: 'Fate verificare la somma assicurata della vostra casa',
  },

  pl: {
    title: 'Wartość odtworzeniowa domu w Portugalii | Adler & Rochefort',
    description:
      'Czym jest wartość odtworzeniowa, dlaczego decyduje o odszkodowaniu, jak przeliczyć ją w symulatorze SCRIM i które polisy przy szkodzie całkowitej płacą więcej.',
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
        html: `<p>Oferujemy produkty wykraczające poza tradycyjne polisy multirisk portugalskich ubezpieczycieli ogólnych, przeznaczone dla nieruchomości o wysokiej wartości:</p>
<ul>
<li><strong>Bezpłatne oględziny</strong>, by ustalić wartość odtworzeniową oraz sumy dla wyposażenia i przedmiotów wartościowych.</li>
<li><strong>Bez zasady proporcji</strong> po przyjęciu zalecanych sum: szkoda częściowa jest wypłacana w całości.</li>
<li><strong>Powyżej wartości odtworzeniowej:</strong> przy szkodzie całkowitej, w porozumieniu między ubezpieczycielem a ubezpieczonym, odszkodowanie może sięgnąć maksymalnej sumy ubezpieczenia budynku — powyżej wartości odtworzeniowej.</li>
<li><strong>Mury, baseny, budynki gospodarcze i ogrody</strong> z własnymi sumami, a nie symboliczną kwotą.</li>
</ul>
<p style="font-size:14px;">Warunki zależą od ubezpieczyciela i ryzyka i są potwierdzane dopiero w warunkach wystawionej polisy.</p>`,
      },
    ],
    faq: [
      { q: 'Czy wartość odtworzeniowa to wartość rynkowa?', a: 'Nie. Wartość rynkowa obejmuje grunt, lokalizację i popyt; odtworzeniowa — tylko koszt odbudowy. Mogą się bardzo różnić, w obie strony.' },
      { q: 'Czy muszę przyjąć wynik SCRIM?', a: 'Nie. SCRIM jest orientacyjny, a sumę wybierają Państwo. W typowej polisie suma niższa od wartości odtworzeniowej oznacza jednak zasadę proporcji przy każdej szkodzie.' },
      { q: 'Czy można otrzymać więcej niż wartość odtworzeniową?', a: 'W typowej polisie nie. W produktach dla nieruchomości o wysokiej wartości, które oferujemy, przy szkodzie całkowitej i w porozumieniu między ubezpieczycielem a ubezpieczonym odszkodowanie może sięgnąć maksymalnej sumy ubezpieczenia.' },
      { q: 'Jak często weryfikować sumę?', a: 'Co najmniej raz w roku i zawsze po remoncie. Automatyczna indeksacja nadąża za inflacją, ale nie naprawia błędnej kwoty wyjściowej.' },
    ],
    formHeading: 'Prosimy o weryfikację sumy ubezpieczenia domu',
  },

  se: {
    title: 'Återuppbyggnadsvärde: hur mycket försäkra i Portugal',
    description:
      'Vad återuppbyggnadsvärdet är, varför det avgör ersättningen, hur du räknar om det i SCRIM-simulatorn och vilka försäkringar som vid totalskada kan betala mer.',
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
        html: `<p>Vi förmedlar produkter som går längre än de traditionella allriskförsäkringarna hos Portugals breda försäkringsbolag, utformade för hus med högt värde:</p>
<ul>
<li><strong>Kostnadsfri besiktning</strong> för att fastställa återuppbyggnadsvärdet och beloppen för lösöre och värdeföremål.</li>
<li><strong>Ingen proportionalitetsregel</strong> när de rekommenderade beloppen accepteras: en delskada ersätts fullt ut.</li>
<li><strong>Över återuppbyggnadsvärdet:</strong> vid totalskada kan ersättningen, efter överenskommelse mellan försäkringsbolag och försäkringstagare, nå byggnadens högsta försäkringsbelopp — över återuppbyggnadsvärdet.</li>
<li><strong>Murar, pooler, uthus och trädgårdar</strong> med egna belopp, inte nedskurna till symboliska summor.</li>
</ul>
<p style="font-size:14px;">Villkoren beror på försäkringsbolag och risk och bekräftas först i den utfärdade försäkringens villkor.</p>`,
      },
    ],
    faq: [
      { q: 'Är återuppbyggnadsvärdet samma sak som marknadsvärdet?', a: 'Nej. Marknadsvärdet omfattar mark, läge och efterfrågan; återuppbyggnadsvärdet bara kostnaden för att bygga om. De kan skilja sig mycket, åt båda hållen.' },
      { q: 'Måste jag använda SCRIM-värdet?', a: 'Nej. SCRIM är vägledande och beloppet väljer du. Men i en vanlig försäkring leder ett belopp under återuppbyggnadsvärdet till proportionalitetsregeln vid varje skada.' },
      { q: 'Kan jag få mer än återuppbyggnadsvärdet?', a: 'Inte i en vanlig försäkring. I produkterna för hus med högt värde som vi förmedlar kan ersättningen vid totalskada, efter överenskommelse mellan försäkringsbolag och försäkringstagare, nå det högsta försäkringsbeloppet.' },
      { q: 'Hur ofta ska beloppet ses över?', a: 'Minst en gång per år och alltid efter renovering. Automatisk indexering följer inflationen men rättar inte ett felaktigt startvärde.' },
    ],
    formHeading: 'Låt oss se över försäkringsbeloppet för ditt hus',
  },

  dk: {
    title: 'Genopførelsesværdi: hvor meget skal huset forsikres for',
    description:
      'Hvad genopførelsesværdien er, hvorfor den afgør erstatningen, hvordan du regner den i SCRIM-simulatoren, og hvilke policer der ved totalskade betaler mere.',
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
        html: `<p>Vi formidler produkter, der går videre end de traditionelle multirisikopolicer hos Portugals brede forsikringsselskaber — udformet til boliger af høj værdi:</p>
<ul>
<li><strong>Gratis besigtigelse</strong> for at fastsætte genopførelsesværdien og summerne for indbo og værdigenstande.</li>
<li><strong>Ingen proportionalitetsregel</strong>, når de anbefalede summer accepteres: En delskade erstattes fuldt ud.</li>
<li><strong>Over genopførelsesværdien:</strong> Ved totalskade kan erstatningen efter aftale mellem selskab og sikrede nå bygningens maksimale forsikringssum — over genopførelsesværdien.</li>
<li><strong>Mure, pools, udhuse og haver</strong> med egne summer, ikke skåret ned til symbolske beløb.</li>
</ul>
<p style="font-size:14px;">Betingelserne afhænger af selskab og risiko og bekræftes først i den udstedte polices vilkår.</p>`,
      },
    ],
    faq: [
      { q: 'Er genopførelsesværdien det samme som markedsværdien?', a: 'Nej. Markedsværdien omfatter grund, beliggenhed og efterspørgsel; genopførelsesværdien kun prisen for at bygge op igen. De kan være meget forskellige, i begge retninger.' },
      { q: 'Skal jeg bruge SCRIM-tallet?', a: 'Nej. SCRIM er vejledende, og summen bestemmer du. Men i en almindelig police fører en sum under genopførelsesværdien til proportionalitetsreglen ved hver skade.' },
      { q: 'Kan jeg få mere end genopførelsesværdien?', a: 'Ikke i en almindelig police. I de produkter til boliger af høj værdi, vi formidler, kan erstatningen ved totalskade efter aftale mellem selskab og sikrede nå den maksimale forsikringssum.' },
      { q: 'Hvor ofte skal summen gennemgås?', a: 'Mindst én gang om året og altid efter ombygning. Automatisk indeksering følger inflationen, men retter ikke et forkert udgangspunkt.' },
    ],
    formHeading: 'Få gennemgået forsikringssummen for dit hus',
  },

  zh: {
    title: '重建价值：葡萄牙房屋应投保多少 | Adler & Rochefort',
    description:
      '什么是重建价值、为何它决定理赔金额、如何用 SCRIM 模拟器重新计算，以及在全损时可赔付超过重建价值的保单。',
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
        html: `<p>我们提供的产品超越葡萄牙普通综合保险公司的传统综合险保单，专为高价值住宅设计：</p>
<ul>
<li><strong>免费实地查勘</strong>，确定重建价值以及室内财产和贵重物品的保额。</li>
<li><strong>接受建议保额即不适用比例赔付原则</strong>：部分损失全额赔付。</li>
<li><strong>超过重建价值：</strong>发生全损时，经保险公司与被保险人协商同意，赔付可达建筑物的最高约定保额，高于重建价值。</li>
<li><strong>围墙、泳池、附属建筑和花园</strong>有各自的保额，而非象征性金额。</li>
</ul>
<p style="font-size:14px;">具体条件取决于保险公司和风险，仅以正式签发保单的条款为准。</p>`,
      },
    ],
    faq: [
      { q: '重建价值等于市场价值吗？', a: '不等于。市场价值包含土地、地段和供需；重建价值只是重新建造建筑的成本。两者可能相差很大，高低皆有可能。' },
      { q: '我必须使用 SCRIM 的数字吗？', a: '不必。SCRIM 仅供参考，保额由您决定。但在普通保单中，保额低于重建价值会导致每次理赔都适用比例赔付原则。' },
      { q: '我能获得超过重建价值的赔付吗？', a: '普通保单不能。在我们安排的高价值住宅产品中，发生全损时，经保险公司与被保险人协商同意，赔付可达最高约定保额。' },
      { q: '多久应复核一次保额？', a: '至少每年一次，装修或改建后务必复核。自动指数调整只跟随通胀，无法纠正一开始就错误的数额。' },
    ],
    formHeading: '请我们复核您房屋的保额',
  },

  il: {
    title: 'ערך שחזור: על כמה לבטח בית בפורטוגל | Adler & Rochefort',
    description:
      'מהו ערך השחזור, מדוע הוא קובע את הפיצוי, איך לחשב אותו מחדש בסימולטור SCRIM, ואילו פוליסות יכולות לשלם מעבר לו באובדן מוחלט.',
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
        html: `<p>אנו משווקים מוצרים שהולכים מעבר לפוליסות המקיפות המסורתיות של חברות הביטוח הכלליות בפורטוגל, ומיועדים לבתים בעלי ערך גבוה:</p>
<ul>
<li><strong>בדיקה בשטח ללא עלות</strong> לקביעת ערך השחזור וסכומי התכולה ופריטי הערך.</li>
<li><strong>ללא כלל היחסיות</strong> כאשר מתקבלים הסכומים המומלצים: נזק חלקי משולם במלואו.</li>
<li><strong>מעבר לערך השחזור:</strong> באובדן מוחלט, בהסכמה בין המבטח למבוטח, הפיצוי יכול להגיע עד לסכום הביטוח המרבי של המבנה — מעל ערך השחזור.</li>
<li><strong>חומות, בריכות, מבני עזר וגינות</strong> עם סכומים משלהם, לא סכום סמלי.</li>
</ul>
<p style="font-size:14px;">התנאים תלויים במבטח ובסיכון ומאושרים רק בתנאי הפוליסה שהונפקה.</p>`,
      },
    ],
    faq: [
      { q: 'האם ערך השחזור זהה לשווי השוק?', a: 'לא. שווי השוק כולל קרקע, מיקום וביקוש; ערך השחזור — רק את עלות הבנייה מחדש. הם יכולים להיות שונים מאוד, לשני הכיוונים.' },
      { q: 'האם אני חייב להשתמש במספר של SCRIM?', a: 'לא. SCRIM הוא נקודת ייחוס בלבד, והסכום הוא החלטה שלכם. אבל בפוליסה רגילה, סכום נמוך מערך השחזור מוביל לכלל היחסיות בכל נזק.' },
      { q: 'האם אפשר לקבל יותר מערך השחזור?', a: 'לא בפוליסה רגילה. במוצרים לבתים בעלי ערך גבוה שאנו משווקים, באובדן מוחלט ובהסכמה בין המבטח למבוטח, הפיצוי יכול להגיע לסכום הביטוח המרבי.' },
      { q: 'באיזו תדירות לבדוק את הסכום?', a: 'לפחות פעם בשנה ותמיד לאחר שיפוץ. הצמדה אוטומטית עוקבת אחר האינפלציה, אך אינה מתקנת נקודת מוצא שגויה.' },
    ],
    formHeading: 'בקשו מאיתנו לבדוק את סכום הביטוח של ביתכם',
  },
};
