/**
 * /pl/ubezpieczenie-odpowiedzialnosci-cywilnej-hiszpania/ (es-liability)
 *
 * Search intent: "OC w życiu prywatnym Hiszpania", "odpowiedzialność cywilna
 * Hiszpania właściciel domu" — a Polish household with a villa, pool, staff,
 * a dog or a boat in Spain.
 *
 * The Polish hook: in Poland OC w życiu prywatnym rides along in a household
 * policy, and in Spain responsabilidad civil familiar often does too — but
 * with limits that are modest against an HNW household's exposure. So the
 * page moves from "is it included?" to "is the limit right, and where does it
 * apply?" Spain-specific points: empleadas de hogar and Social Security,
 * dangerous-breed dogs and the 2023 animal-welfare law, boats, letting.
 */
import { BREADCRUMB_ROOT, withSibling } from './shared.mjs';

export const ES_LIABILITY_PAGE = {
  slug: 'ubezpieczenie-odpowiedzialnosci-cywilnej-hiszpania',
  url: '/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-hiszpania/',
  cluster: 'es-liability',
  title: 'Odpowiedzialność cywilna rodziny w Hiszpanii | Adler & Rochefort',
  description:
    'OC rodziny w Hiszpanii: limity z polisy domowej a sumy w milionach euro, zasięg światowy, basen, personel domowy, psy, łodzie i wynajem. Wyjaśnione na piśmie.',
  keywords:
    'odpowiedzialność cywilna Hiszpania, OC w życiu prywatnym Hiszpania, responsabilidad civil familiar, OC właściciela domu Hiszpania, OC psa Hiszpania, empleada de hogar ubezpieczenie, OC rodziny miliony euro',
  eyebrow: 'Hiszpania · Odpowiedzialność cywilna rodziny',
  h1: 'Odpowiedzialność cywilna rodziny w Hiszpanii: nie czy jest, ale na jaką kwotę',
  standfirst:
    'W Hiszpanii, podobnie jak w Polsce, OC w życiu prywatnym często jest częścią polisy domowej. Pytanie brzmi więc nie „czy”, ale „do jakiej sumy, gdzie i za kogo”. Przy willi z basenem, personelem domowym i gośćmi przez całe lato limit z typowej polisy bywa niewspółmierny do ryzyka.',
  published: '2026-09-27T09:00:00+00:00',
  modified: '2026-09-27T09:00:00+00:00',
  breadcrumb: [
    ...BREADCRUMB_ROOT,
    { name: 'Hiszpania', url: '/pl/ubezpieczenia-hiszpania-przewodnik/' },
    { name: 'Odpowiedzialność cywilna' },
  ],
  pullquote:
    'Wypadek gościa w basenie nie pyta o sumę gwarancyjną. Odpowiedzialność jest taka, jaka jest — polisa albo do niej dorasta, albo nie.',
  schemaType: 'Article',
  formHeading: 'Zapytaj o odpowiedzialność cywilną rodziny w Hiszpanii',
  formBranch: 'PL · OC ogólna',
  formSubject: 'Odpowiedzialność cywilna rodziny w Hiszpanii',
  formCta: 'Poproś o pisemną ocenę',
  formIntro:
    'Proszę opisać gospodarstwo domowe: nieruchomości, basen, personel, zwierzęta, łódź, wynajem. Przeanalizujemy obecne limity i odpowiemy pisemnie.',
  formPlaceholder:
    'Na przykład: willa w Estepona z basenem, gosposia na pół etatu, dwa psy, łódź w porcie w Marbelli, obecna polisa domowa z OC do 300 000 EUR.',
  sections: `
<section class="section plain" aria-labelledby="w-polisie-domowej">
  <div class="container narrow article-body">
    <h2 id="w-polisie-domowej">OC w hiszpańskiej polisie domowej</h2>
    <p>Hiszpańska polisa domowa zawiera zwykle dwa rodzaje odpowiedzialności: <strong><em>responsabilidad civil inmobiliaria</em></strong> — jako właściciela nieruchomości (dachówka spadająca na przechodnia, zalanie sąsiada) — oraz często <strong><em>responsabilidad civil familiar</em></strong> — za szkody wyrządzone w życiu prywatnym przez Państwa i domowników, także poza domem.</p>
    <p>Dwie rzeczy warto sprawdzić od razu:</p>
    <ul>
      <li><strong>Suma gwarancyjna.</strong> Typowe limity w polisach masowych wystarczają przy zalanym suficie sąsiada. Przy poważnej szkodzie osobowej — trwałym uszczerbku na zdrowiu gościa — mogą okazać się niewystarczające.</li>
      <li><strong>Zakres osób i miejsc.</strong> Czy OC rodzinna obejmuje dzieci studiujące za granicą, drugi dom w Portugalii, podróże? Czy dotyczy Państwa jako najemców w innym kraju?</li>
    </ul>
  </div>
</section>

<section class="section tint" aria-labelledby="program-rodzinny">
  <div class="container narrow article-body">
    <h2 id="program-rodzinny">Program OC rodziny o wysokiej sumie</h2>
    <p>Dla gospodarstw o znacznym majątku lokujemy odpowiedzialność cywilną rodziny jako osobny program albo jako część polisy dla majątków o wysokiej wartości:</p>
    <ul>
      <li><strong>Sumy gwarancyjne rzędu kilku milionów euro</strong>, dopasowane do majątku, który w razie wyroku byłby zagrożony.</li>
      <li><strong>Zasięg światowy</strong> — Hiszpania, Portugalia, Polska, podróże.</li>
      <li><strong>Koszty obrony ponad sumę</strong> — pokrywane obok sumy gwarancyjnej, a nie z niej.</li>
      <li><strong>Wszystkie rezydencje</strong> — jako właściciel, najemca lub użytkownik.</li>
      <li><strong>Domownicy i osoby związane z domem</strong> — dzieci, także studiujące poza domem, oraz osoby okazjonalnie opiekujące się zwierzętami.</li>
    </ul>
    <p class="legal-note">Zakres, limity i wyłączenia zależą od ubezpieczyciela i są potwierdzane wyłącznie w dokumentacji wystawionej polisy. OC zawodowa i OC z tytułu działalności gospodarczej to osobne ubezpieczenia.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="ryzyka-es">
  <div class="container narrow article-body">
    <h2 id="ryzyka-es">Sytuacje, o które pytamy w Hiszpanii</h2>
    <h3>Basen i goście</h3>
    <p>Najczęstsze źródło poważnych roszczeń w domach wakacyjnych. Wypadki dzieci, poślizgnięcia, skoki do płytkiej wody. Ogrodzenie i zasady korzystania mają znaczenie — także przy ocenie odpowiedzialności.</p>
    <h3>Personel domowy (<em>empleadas de hogar</em>)</h3>
    <p>Gosposia, ogrodnik, opiekunka do dzieci czy kierowca zatrudnieni bezpośrednio przez Państwa muszą być zgłoszeni do hiszpańskiego ubezpieczenia społecznego, w specjalnym systemie dla pracowników domowych. To obowiązek pracodawcy, niezależny od polisy. Polisa OC obejmuje z kolei szkody wyrządzone przez personel osobom trzecim oraz — zależnie od warunków — Państwa odpowiedzialność wobec pracownika po wypadku.</p>
    <h3>Psy</h3>
    <p>Właściciele psów ras uznanych za potencjalnie niebezpieczne (<em>perros potencialmente peligrosos</em>) potrzebują w Hiszpanii licencji i obowiązkowego ubezpieczenia OC. Ustawa o dobrostanie zwierząt z 2023 roku przewiduje obowiązek OC dla wszystkich właścicieli psów; jego praktyczne stosowanie zależy od przepisów wykonawczych, które warto sprawdzać na bieżąco. Sprawdzamy, czy OC rodzinna obejmuje Państwa psy i czy spełnia wymogi.</p>
    <h3>Łodzie i skutery wodne</h3>
    <p>Jednostki pływające mają w Hiszpanii własne obowiązkowe OC, zależne od rodzaju i mocy. OC rodzinna zwykle ich nie obejmuje lub obejmuje tylko małe jednostki bez silnika.</p>
    <h3>Wynajem</h3>
    <p>Wynajem krótkoterminowy to działalność, którą zwykła OC rodzinna wyłącza. Potrzebny jest wariant uwzględniający OC wobec gości — zob. <a href="/pl/ubezpieczenie-wynajem-willi/">wynajem luksusowej willi</a>.</p>
  </div>
</section>`,
  faqTitle: 'Odpowiedzialność cywilna w Hiszpanii — pytania',
  faq: [
    {
      q: 'Czy moja hiszpańska polisa domowa zawiera OC w życiu prywatnym?',
      a: '<p>Często tak — jako <em>responsabilidad civil familiar</em>, obok OC właściciela nieruchomości. Kluczowe są jednak suma gwarancyjna i zakres osób oraz miejsc. Przeglądamy obecną polisę i mówimy na piśmie, czy limit odpowiada Państwa sytuacji.</p>',
    },
    {
      q: 'Jaka suma gwarancyjna jest właściwa?',
      a: '<p>Nie ma jednej liczby. Punktem odniesienia jest majątek, który w razie wyroku byłby zagrożony, oraz ekspozycja: basen, personel, goście, psy, łódź, wynajem. Dla gospodarstw o znacznym majątku mówimy zwykle o sumach rzędu kilku milionów euro, z kosztami obrony ponad sumę.</p>',
    },
    {
      q: 'Czy muszę ubezpieczyć psa w Hiszpanii?',
      a: '<p>Dla ras uznanych za potencjalnie niebezpieczne OC jest obowiązkowe, obok licencji. Ustawa o dobrostanie zwierząt z 2023 roku przewiduje obowiązek OC dla wszystkich właścicieli psów; jego stosowanie zależy od przepisów wykonawczych. Sprawdzamy, czy Państwa polisa obejmuje psy i czy spełnia wymogi.</p>',
    },
    {
      q: 'Zatrudniam gosposię. Czy wystarczy polisa?',
      a: '<p>Nie. Pracownik domowy musi być zgłoszony do hiszpańskiego ubezpieczenia społecznego — to obowiązek pracodawcy. Polisa OC jest uzupełnieniem: obejmuje szkody wyrządzone przez personel osobom trzecim i, zależnie od warunków, Państwa odpowiedzialność wobec pracownika.</p>',
    },
    {
      q: 'Czy OC rodzinna obejmuje moją działalność zawodową?',
      a: '<p>Nie. Odpowiedzialność cywilna w życiu prywatnym wyłącza działalność zawodową i gospodarczą. OC zawodowa to osobne ubezpieczenie, dopasowane do rodzaju działalności.</p>',
    },
  ],
  related: [
    { url: '/pl/ubezpieczenie-domu-hiszpania/', label: 'Ubezpieczenie domu w Hiszpanii' },
    { url: '/pl/ubezpieczenia-hiszpania-przewodnik/', label: 'Przewodnik po ubezpieczeniach w Hiszpanii' },
  ],
};

withSibling(ES_LIABILITY_PAGE, {
  id: 'rodzenstwo-portugalia',
  label: 'Portugalia',
  heading: 'Mają Państwo dom także w Portugalii?',
  body: 'W portugalskim <em>multirriscos habitação</em> OC w życiu prywatnym bywa ograniczona do szkód wyrządzonych sąsiadom albo całkowicie pominięta. Jak ułożyć OC rodziny w Portugalii — na osobnej stronie.',
  url: '/pl/ubezpieczenie-odpowiedzialnosci-cywilnej-portugalia/',
  cta: 'Odpowiedzialność cywilna rodziny w Portugalii',
});
