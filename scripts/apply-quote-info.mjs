#!/usr/bin/env node
/**
 * Replace the long quote forms with an information section, October 2026.
 *
 * Owner decision (Hugo, 17 Oct 2026): product pages keep only the short
 * contact form (scripts/apply-quick-contact.mjs). The long wizards are
 * removed and replaced by a plain list of the data that will be requested by
 * email to prepare the quote — information only, not a form.
 *
 * Lists per line of business, as stated by the owner:
 *   home:   full name, full address of the property, NIF, gross construction
 *           area, year of construction, own or second home, occupation, age,
 *           buildings sum, contents sum, valuables sum
 *   health: per person — name, age, NIF, full address, nationality
 *   car:    name, date of birth, full address, licence date, registration
 *   liability: full name, full address, NIF, activity, annual turnover
 *   private clients: the home list plus the list of valuables with values
 *           and any valuations (drafted, to be confirmed by the owner)
 * Not touched: life, business (no list agreed yet) and service intakes
 * (fiscal representation, relocation, expat insurance review).
 *
 * Also retitles the PT blog short-form link that pointed at the removed full
 * form ("Veja os dados que vamos pedir para a cotação") — done once by hand on
 * 17 Oct 2026; re-check it if apply-short-blog-forms.mjs is re-run on new articles.
 *
 * Idempotent (marker <!-- ar-quote-info -->). Run after
 * scripts/apply-quick-contact.mjs.
 */
import { readFileSync, writeFileSync, globSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MARK = '<!-- ar-quote-info -->';

function typeOf(formName) {
  if (/fiscal|relocation|expat-insurance-review|lebens|life|empresarial|business|bedrijf/.test(formName)) return null;
  if (/private-client/.test(formName)) return 'private';
  if (/saude|health|kranken|zorg|sundhed|sjukvard|zdrowot/.test(formName)) return 'health';
  if (/habitacao|home|haus|woon|husforsikring|hemforsakring|domu|landlord/.test(formName)) return 'home';
  if (/auto|car|bil|samochod/.test(formName)) return 'car';
  if (/rc-|liability|haftpflicht|ansvar|zzp|odpowiedzialnosci|professional/.test(formName)) return 'liab';
  return null;
}

const I = {
  pt: { h: 'O que vamos pedir para a sua cotação', p: 'Depois do primeiro contacto pedimos-lhe estes dados por email. Se os tiver à mão, pode enviá-los já para <a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a>.', per: 'Por cada pessoa a segurar:',
    home: ['Nome completo', 'Morada completa do imóvel', 'NIF', 'Área bruta de construção', 'Ano de construção', 'Habitação própria ou secundária', 'Profissão', 'Idade', 'Capital do edifício', 'Capital do recheio', 'Capital de objetos de valor'],
    health: ['Nome', 'Idade', 'NIF', 'Morada completa', 'Nacionalidade'],
    car: ['Nome', 'Data de nascimento', 'Morada completa', 'Data da carta de condução', 'Matrícula'],
    liab: ['Nome completo', 'Morada completa', 'NIF', 'Atividade exercida', 'Faturação anual'],
    privateExtra: 'Lista dos bens a segurar (arte, joias, relógios, automóveis), com valores e avaliações, se existirem' },
  en: { h: 'What we will ask for your quote', p: 'After the first contact we ask for these details by email. If you have them to hand, you can send them now to <a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a>.', per: 'For each person to be insured:',
    home: ['Full name', 'Full address of the property', 'Portuguese tax number (NIF)', 'Gross construction area', 'Year of construction', 'Main or second home', 'Occupation', 'Age', 'Buildings sum insured', 'Contents sum insured', 'Valuables sum insured'],
    health: ['Name', 'Age', 'Portuguese tax number (NIF)', 'Full address', 'Nationality'],
    car: ['Name', 'Date of birth', 'Full address', 'Driving licence issue date', 'Registration number'],
    liab: ['Full name', 'Full address', 'Portuguese tax number (NIF)', 'Activity', 'Annual turnover'],
    privateExtra: 'List of the items to insure (art, jewellery, watches, cars), with values and any valuations' },
  de: { h: 'Welche Angaben wir für Ihr Angebot benötigen', p: 'Nach dem ersten Kontakt fragen wir diese Angaben per E-Mail an. Wenn Sie sie zur Hand haben, können Sie sie gleich an <a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a> senden.', per: 'Für jede zu versichernde Person:',
    home: ['Vollständiger Name', 'Vollständige Adresse der Immobilie', 'Portugiesische Steuernummer (NIF)', 'Bruttogeschossfläche', 'Baujahr', 'Haupt- oder Zweitwohnsitz', 'Beruf', 'Alter', 'Versicherungssumme Gebäude', 'Versicherungssumme Hausrat', 'Versicherungssumme Wertsachen'],
    health: ['Name', 'Alter', 'Portugiesische Steuernummer (NIF)', 'Vollständige Adresse', 'Staatsangehörigkeit'],
    car: ['Name', 'Geburtsdatum', 'Vollständige Adresse', 'Ausstellungsdatum des Führerscheins', 'Kennzeichen'],
    liab: ['Vollständiger Name', 'Vollständige Adresse', 'Portugiesische Steuernummer (NIF)', 'Ausgeübte Tätigkeit', 'Jahresumsatz'],
    privateExtra: 'Liste der zu versichernden Werte (Kunst, Schmuck, Uhren, Fahrzeuge) mit Werten und ggf. Gutachten' },
  nl: { h: 'Welke gegevens we vragen voor uw offerte', p: 'Na het eerste contact vragen we deze gegevens per e-mail. Heeft u ze bij de hand, stuur ze dan gerust al naar <a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a>.', per: 'Per te verzekeren persoon:',
    home: ['Volledige naam', 'Volledig adres van de woning', 'Portugees fiscaal nummer (NIF)', 'Bruto bebouwde oppervlakte', 'Bouwjaar', 'Hoofd- of tweede woning', 'Beroep', 'Leeftijd', 'Verzekerd bedrag opstal', 'Verzekerd bedrag inboedel', 'Verzekerd bedrag kostbaarheden'],
    health: ['Naam', 'Leeftijd', 'Portugees fiscaal nummer (NIF)', 'Volledig adres', 'Nationaliteit'],
    car: ['Naam', 'Geboortedatum', 'Volledig adres', 'Afgiftedatum rijbewijs', 'Kenteken'],
    liab: ['Volledige naam', 'Volledig adres', 'Portugees fiscaal nummer (NIF)', 'Activiteit', 'Jaaromzet'],
    privateExtra: 'Lijst van te verzekeren bezittingen (kunst, sieraden, horloges, auto’s) met waarden en eventuele taxaties' },
  fr: { h: 'Les informations demandées pour votre devis', p: 'Après le premier contact, nous vous demandons ces informations par e-mail. Si vous les avez sous la main, vous pouvez les envoyer dès maintenant à <a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a>.', per: 'Pour chaque personne à assurer :',
    home: ['Nom complet', 'Adresse complète du bien', 'Numéro fiscal portugais (NIF)', 'Surface brute construite', 'Année de construction', 'Résidence principale ou secondaire', 'Profession', 'Âge', 'Capital bâtiment', 'Capital mobilier', 'Capital objets de valeur'],
    health: ['Nom', 'Âge', 'Numéro fiscal portugais (NIF)', 'Adresse complète', 'Nationalité'],
    car: ['Nom', 'Date de naissance', 'Adresse complète', 'Date d’obtention du permis', 'Immatriculation'],
    liab: ['Nom complet', 'Adresse complète', 'Numéro fiscal portugais (NIF)', 'Activité exercée', 'Chiffre d’affaires annuel'],
    privateExtra: 'Liste des biens à assurer (art, bijoux, montres, voitures), avec valeurs et expertises éventuelles' },
  es: { h: 'Qué datos le pediremos para su presupuesto', p: 'Tras el primer contacto le pedimos estos datos por email. Si los tiene a mano, puede enviarlos ya a <a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a>.', per: 'Por cada persona asegurada:',
    home: ['Nombre completo', 'Dirección completa del inmueble', 'Número fiscal (NIF/NIE)', 'Superficie construida bruta', 'Año de construcción', 'Vivienda habitual o segunda residencia', 'Profesión', 'Edad', 'Capital del continente', 'Capital del contenido', 'Capital de objetos de valor'],
    health: ['Nombre', 'Edad', 'Número fiscal (NIF/NIE)', 'Dirección completa', 'Nacionalidad'],
    car: ['Nombre', 'Fecha de nacimiento', 'Dirección completa', 'Fecha del carné de conducir', 'Matrícula'],
    liab: ['Nombre completo', 'Dirección completa', 'Número fiscal (NIF/NIE)', 'Actividad', 'Facturación anual'],
    privateExtra: 'Lista de los bienes a asegurar (arte, joyas, relojes, coches), con valores y tasaciones, si las hay' },
  it: { h: 'Quali dati le chiederemo per il preventivo', p: 'Dopo il primo contatto le chiediamo questi dati via email. Se li ha a portata di mano, può inviarli subito a <a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a>.', per: 'Per ogni persona da assicurare:',
    home: ['Nome completo', 'Indirizzo completo dell’immobile', 'Codice fiscale portoghese (NIF)', 'Superficie lorda costruita', 'Anno di costruzione', 'Abitazione principale o secondaria', 'Professione', 'Età', 'Capitale fabbricato', 'Capitale contenuto', 'Capitale oggetti di valore'],
    health: ['Nome', 'Età', 'Codice fiscale portoghese (NIF)', 'Indirizzo completo', 'Nazionalità'],
    car: ['Nome', 'Data di nascita', 'Indirizzo completo', 'Data della patente', 'Targa'],
    liab: ['Nome completo', 'Indirizzo completo', 'Codice fiscale portoghese (NIF)', 'Attività svolta', 'Fatturato annuo'],
    privateExtra: 'Elenco dei beni da assicurare (arte, gioielli, orologi, auto), con valori ed eventuali perizie' },
  pl: { h: 'Jakie dane będą potrzebne do wyceny', p: 'Po pierwszym kontakcie poprosimy o te dane e-mailem. Jeśli ma je Pan/Pani pod ręką, można je wysłać od razu na <a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a>.', per: 'Dla każdej ubezpieczanej osoby:',
    home: ['Imię i nazwisko', 'Pełny adres nieruchomości', 'Portugalski numer podatkowy (NIF)', 'Powierzchnia zabudowy brutto', 'Rok budowy', 'Mieszkanie główne czy drugie', 'Zawód', 'Wiek', 'Suma ubezpieczenia budynku', 'Suma ubezpieczenia wyposażenia', 'Suma ubezpieczenia przedmiotów wartościowych'],
    health: ['Imię i nazwisko', 'Wiek', 'Portugalski numer podatkowy (NIF)', 'Pełny adres', 'Obywatelstwo'],
    car: ['Imię i nazwisko', 'Data urodzenia', 'Pełny adres', 'Data wydania prawa jazdy', 'Numer rejestracyjny'],
    liab: ['Imię i nazwisko', 'Pełny adres', 'Portugalski numer podatkowy (NIF)', 'Wykonywana działalność', 'Roczny obrót'],
    privateExtra: 'Lista przedmiotów do ubezpieczenia (sztuka, biżuteria, zegarki, samochody) z wartościami i ewentualnymi wycenami' },
  se: { h: 'Vilka uppgifter vi behöver för offerten', p: 'Efter den första kontakten ber vi om dessa uppgifter via e-post. Har du dem till hands kan du skicka dem direkt till <a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a>.', per: 'För varje person som ska försäkras:',
    home: ['Fullständigt namn', 'Fullständig adress till bostaden', 'Portugisiskt skattenummer (NIF)', 'Bruttoarea', 'Byggår', 'Permanent bostad eller fritidsbostad', 'Yrke', 'Ålder', 'Försäkringsbelopp byggnad', 'Försäkringsbelopp lösöre', 'Försäkringsbelopp värdesaker'],
    health: ['Namn', 'Ålder', 'Portugisiskt skattenummer (NIF)', 'Fullständig adress', 'Medborgarskap'],
    car: ['Namn', 'Födelsedatum', 'Fullständig adress', 'Datum för körkort', 'Registreringsnummer'],
    liab: ['Fullständigt namn', 'Fullständig adress', 'Portugisiskt skattenummer (NIF)', 'Verksamhet', 'Årsomsättning'],
    privateExtra: 'Lista över det som ska försäkras (konst, smycken, klockor, bilar) med värden och eventuella värderingar' },
  dk: { h: 'Hvilke oplysninger vi skal bruge til tilbuddet', p: 'Efter den første kontakt beder vi om disse oplysninger pr. e-mail. Har du dem ved hånden, kan du sende dem med det samme til <a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a>.', per: 'For hver person, der skal forsikres:',
    home: ['Fulde navn', 'Fuld adresse på boligen', 'Portugisisk skattenummer (NIF)', 'Bruttoetageareal', 'Byggeår', 'Helårs- eller fritidsbolig', 'Erhverv', 'Alder', 'Forsikringssum bygning', 'Forsikringssum indbo', 'Forsikringssum værdigenstande'],
    health: ['Navn', 'Alder', 'Portugisisk skattenummer (NIF)', 'Fuld adresse', 'Statsborgerskab'],
    car: ['Navn', 'Fødselsdato', 'Fuld adresse', 'Dato for kørekort', 'Registreringsnummer'],
    liab: ['Fulde navn', 'Fuld adresse', 'Portugisisk skattenummer (NIF)', 'Aktivitet', 'Årlig omsætning'],
    privateExtra: 'Liste over det, der skal forsikres (kunst, smykker, ure, biler), med værdier og eventuelle vurderinger' },
  il: { h: 'אילו פרטים נבקש לצורך ההצעה', p: 'לאחר הפנייה הראשונה נבקש את הפרטים האלה במייל. אם הם בהישג יד, אפשר לשלוח אותם כבר עכשיו ל-<a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a>.', per: 'עבור כל אדם מבוטח:',
    home: ['שם מלא', 'כתובת מלאה של הנכס', 'מספר זיהוי מס פורטוגלי (NIF)', 'שטח בנוי ברוטו', 'שנת בנייה', 'דירה עיקרית או שנייה', 'מקצוע', 'גיל', 'סכום ביטוח למבנה', 'סכום ביטוח לתכולה', 'סכום ביטוח לחפצי ערך'],
    health: ['שם', 'גיל', 'מספר זיהוי מס פורטוגלי (NIF)', 'כתובת מלאה', 'אזרחות'],
    car: ['שם', 'תאריך לידה', 'כתובת מלאה', 'תאריך הוצאת רישיון נהיגה', 'מספר רישוי'],
    liab: ['שם מלא', 'כתובת מלאה', 'מספר זיהוי מס פורטוגלי (NIF)', 'תחום פעילות', 'מחזור שנתי'],
    privateExtra: 'רשימת הפריטים לביטוח (אמנות, תכשיטים, שעונים, רכבים) עם ערכים והערכות שמאי, אם קיימות' },
  zh: { h: '报价所需的资料', p: '首次联系后，我们会通过电子邮件索取以下资料。如果您手头已有，也可以直接发送至 <a href="mailto:insurance@adlerrochefort.com">insurance@adlerrochefort.com</a>。', per: '每位被保险人：',
    home: ['全名', '房产完整地址', '葡萄牙税号（NIF）', '建筑总面积', '建造年份', '自住或第二居所', '职业', '年龄', '建筑保额', '室内财产保额', '贵重物品保额'],
    health: ['姓名', '年龄', '葡萄牙税号（NIF）', '完整地址', '国籍'],
    car: ['姓名', '出生日期', '完整地址', '驾照签发日期', '车牌号'],
    liab: ['全名', '完整地址', '葡萄牙税号（NIF）', '从事的业务', '年营业额'],
    privateExtra: '需投保物品清单（艺术品、珠宝、手表、汽车），附价值及现有评估' },
};

const STYLE = `<style id="ar-quote-info-style">
.arqi{background:#fff;border:1px solid #EBE9E8;border-radius:16px;padding:20px 22px;margin:4px 0 0;color:#292929;text-align:left}
.arqi h3{margin:0 0 6px;font-size:17px;line-height:1.3;text-transform:none;letter-spacing:0}
.arqi p{margin:0 0 10px;font-size:14px;color:#555;text-transform:none;letter-spacing:0}
.arqi ul{margin:0;padding-left:20px;columns:2;column-gap:28px;font-size:14.5px;line-height:1.7}
.arqi li{break-inside:avoid}
@media(max-width:640px){.arqi ul{columns:1}}
</style>`;

const QUICK_HEAD = {
  pt: ['Contacto rápido', 'Peça uma proposta — leva menos de um minuto'], en: ['Quick contact', 'Ask for a quote — it takes under a minute'],
  de: ['Schnellkontakt', 'Angebot anfragen – in unter einer Minute'], nl: ['Snel contact', 'Offerte aanvragen – in minder dan een minuut'],
  fr: ['Contact rapide', 'Demander un devis – en moins d’une minute'], es: ['Contacto rápido', 'Pida una propuesta: menos de un minuto'],
  it: ['Contatto rapido', 'Richieda una proposta: meno di un minuto'], pl: ['Szybki kontakt', 'Zapytaj o ofertę – w niecałą minutę'],
  se: ['Snabbkontakt', 'Begär offert – på under en minut'], dk: ['Hurtig kontakt', 'Bed om et tilbud – på under et minut'],
  il: ['יצירת קשר מהירה', 'בקשו הצעה – בפחות מדקה'], zh: ['快速联系', '申请报价——不到一分钟'],
};

const done = [], kept = [];
for (const rel of globSync('public/**/index.html', { cwd: ROOT }).sort()) {
  const f = join(ROOT, rel);
  let s = readFileSync(f, 'utf8');
  if (!s.includes('data-arqc="quick_contact"') || s.includes(MARK)) continue;
  const seg = rel.split('/')[1];
  const lang = I[seg] ? seg : 'pt';
  const forms = [...s.matchAll(/<form\b[^>]*>[\s\S]*?<\/form>/g)]
    .filter((m) => m[0].includes('form-name') && (m[0].match(/\srequired/g) || []).length > 5);
  if (!forms.length) continue;
  const fname = forms[0][0].match(/name="form-name" value="([^"]+)"/)[1];
  const type = typeOf(fname);
  if (!type) { kept.push(`${rel} (${fname})`); continue; }
  const L = I[lang];
  const items = type === 'private' ? [...L.home, L.privateExtra] : L[type];
  const info = `${MARK}
<div class="arqi">
  <h3>${L.h}</h3>
  <p>${L.p}</p>
  ${type === 'health' ? `<p><strong>${L.per}</strong></p>` : ''}
  <ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul>
</div>`;
  // Replace every long form on the page (from last to first, so indexes hold).
  for (const m of forms.slice().reverse()) {
    s = s.slice(0, m.index) + (m === forms[0] ? info : '') + s.slice(m.index + m[0].length);
  }
  // The quick block is now the only form: drop the "or send the full request" divider
  // and give it the main heading.
  s = s.replace(/\s*<div class="arqc-or">[^<]*<\/div>/, '');
  const [qh, h] = QUICK_HEAD[lang];
  s = s.replace(`<h3>${qh}</h3>`, `<h3>${h}</h3>`);
  if (!s.includes('id="ar-quote-info-style"')) s = s.replace('</head>', STYLE + '\n</head>');
  writeFileSync(f, s);
  done.push(`${rel.slice(7)} [${type}]`);
}
console.log(`long forms replaced by the information section: ${done.length}`);
console.log(`kept (no agreed list yet, or a service intake): ${kept.length}\n  ${kept.join('\n  ')}`);
