import { BREADCRUMB_ROOT } from './shared.mjs';

/**
 * German Phase 2 — four satellites named in the strategy brief's own
 * slug-level plan. Each mirrors an already-built, fact-checked sibling
 * rather than researching fresh ground:
 *   - Vorerkrankungen: extends the Kranken pillar's mutualista/MGEN section,
 *     and points at the EN MGEN cluster built this round for the depth this
 *     page does not repeat.
 *   - S1-Formular: mirrors scripts/nl-content/health.mjs's
 *     s1-formulier-cak-portugal entry — same EU-coordination mechanism,
 *     same "what it gives, what it doesn't, why it complements rather than
 *     replaces a private policy" structure, translated and re-verified
 *     against this session's own DVKA research rather than re-derived.
 *   - Nicht legalisierte Immobilie: mirrors
 *     scripts/nl-content/housing.mjs's niet-gelegaliseerde-woning entry —
 *     same rústico/urbano, caderneta predial, licença de utilização facts.
 *   - ISV-Befreiung: expands the Auto page's own ISV section into the
 *     dedicated exemption mechanics, mirroring
 *     scripts/nl-content/motor.mjs's auto-importeren entry.
 */

const VORERKRANKUNGEN_PAGE = {
  slug: 'vorerkrankungen-krankenversicherung-portugal',
  url: '/de/vorerkrankungen-krankenversicherung-portugal/',
  title: 'Krankenversicherung mit Vorerkrankungen in Portugal | Adler & Rochefort',
  description:
    'Was eine Vorerkrankung für Ihre portugiesische Krankenversicherung bedeutet: die Gesundheitsprüfung, wann eine Vorerkrankung ausgeschlossen statt abgelehnt wird, und die mutualistische Alternative, wenn die reguläre Aufnahme nicht gelingt.',
  keywords:
    'Krankenversicherung Vorerkrankungen Portugal, Gesundheitsprüfung Krankenversicherung Portugal, Vorerkrankung ausgeschlossen Portugal, MGEN Vorerkrankung, private Krankenversicherung Vorerkrankung Portugal',
  eyebrow: 'Krankenversicherung',
  h1: 'Krankenversicherung mit Vorerkrankungen in Portugal',
  standfirst:
    'Eine Vorerkrankung schließt eine private Krankenversicherung in Portugal nicht automatisch aus. Sie verändert, wie die Gesundheitsprüfung verläuft und welches Ergebnis realistisch ist — und manchmal, welcher Weg überhaupt noch offensteht.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lissabon · Lagos · Spanien',
  heroCta: 'Deckung prüfen lassen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Vorerkrankungen' }],
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-13T09:00:00+00:00',
  schemaType: 'WebPage',
  formHeading: 'Deckung mit Vorerkrankung anfragen',
  formBranch: 'Krankenversicherung',
  formSubject: 'Krankenversicherung mit Vorerkrankung',
  formCta: 'Deckung prüfen lassen',
  // Especificação v2, A1/A2: no clinical detail invited here on purpose —
  // "Art der Vorerkrankung" (what condition) and "aktuelle Behandlung"
  // (current treatment) used to be in formPlaceholder, exactly the kind of
  // question a public lead form must never ask. Age and prior insurer
  // response are enough to start; the condition itself is discussed
  // separately, same as scripts/{dk,se,pl,zh,il}-content/health.mjs already
  // say explicitly.
  formIntro:
    'Nennen Sie uns Ihr Alter und ob Sie bereits eine Absage von einem Versicherer erhalten haben — die Vorerkrankung selbst besprechen wir separat, nie über das Formular.',
  formPlaceholder:
    'Zum Beispiel: Ihr Alter, ob Sie bereits eine Absage von einem Versicherer erhalten haben, und ob ein Wechsel von Ihrer bisherigen Versicherung infrage kommt.',
  sections: `
<section class="section plain" aria-labelledby="gesundheitspruefung">
  <div class="container narrow article-body">
    <h2 id="gesundheitspruefung">Die Gesundheitsprüfung, und was eine Vorerkrankung damit macht</h2>
    <p>Bei einer regulären portugiesischen Krankenversicherung füllen Sie eine Gesundheitserklärung aus. Eine bestehende Vorerkrankung führt dabei zu einem von drei Ergebnissen: Ausschluss der Erkrankung selbst bei sonst normaler Deckung, Mitversicherung gegen einen Prämienaufschlag, oder — bei schwereren Fällen — Ablehnung der gesamten Aufnahme. Welches der drei zutrifft, entscheidet der einzelne Versicherer anhand seiner eigenen Risikoprüfung, nicht ein einheitlicher Marktstandard.</p>
    <p>Vollständigkeit ist dabei nicht verhandelbar: Eine Vorerkrankung zu verschweigen wird beim ersten damit zusammenhängenden Schadenfall sichtbar — und dann steht nicht der einzelne Schadenfall zur Debatte, sondern die Police insgesamt.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="ausschluss">
  <div class="container narrow article-body">
    <h2 id="ausschluss">Ausschluss ist nicht dasselbe wie Ablehnung</h2>
    <p>Ein Ausschluss der spezifischen Erkrankung bedeutet: Die Police deckt Sie normal für alles andere, nur die benannte Erkrankung ist herausgenommen. Das ist ein grundlegend anderes Ergebnis als eine vollständige Ablehnung, und beide werden im Alltag oft verwechselt. Bevor Sie ein Angebot mit Ausschluss ablehnen, lohnt es sich zu prüfen, wie eng der Ausschluss tatsächlich gefasst ist — manche Versicherer schließen nur die Erkrankung selbst aus, andere auch alle absehbaren Folgeerkrankungen.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="mutualista">
  <div class="container narrow article-body">
    <h2 id="mutualista">Wenn die reguläre Aufnahme nicht gelingt: die mutualistische Route</h2>
    <p>Führt die Gesundheitsprüfung zur Ablehnung oder zu einem nicht akzeptablen Ausschluss, ist die mutualistische Route — wie bei <strong>MGEN</strong> — oft der nächste realistische Schritt. Dort erfolgt die Aufnahme über die Mitgliedschaft statt über individuelle Risikoprüfung: keine Gesundheitsfragen, kein Höchstaufnahmealter. Der Ausgleich dafür ist eine Wartezeit von 365 Tagen, bevor eine bereits bestehende Erkrankung gedeckt wird. Details zum Mechanismus stehen auf unserer Seite zur <a href="/de/krankenversicherung-portugal/">Krankenversicherung in Portugal</a>.</p>
    <p>Für eine vertiefte, englischsprachige Behandlung dieses Themas — einschließlich eines direkten Vergleichs von MGEN, Médis, Allianz und APRIL nach Aufnahmekriterien statt nach Preis, und der Wartezeiten je nach Leistungsart — verweisen wir auf unseren englischen Artikel <a href="/en/blog/mgen-medis-allianz-april-acceptance-comparison/" hreflang="en">MGEN, Médis, Allianz and APRIL: Compared on Acceptance, Not Price</a> (Englisch).</p>
  </div>
</section>

<section class="section tint" aria-labelledby="ablauf">
  <div class="container narrow article-body">
    <h2 id="ablauf">Der praktische Ablauf</h2>
    <p>Stellen Sie eine klinische Zusammenfassung der Vorerkrankung zusammen — Diagnose, Behandlungsverlauf, aktuelle Medikation — und klären Sie zunächst, wie ein regulärer Versicherer damit umgeht: vollständige Ablehnung, Ausschluss der Erkrankung, oder Annahme gegen Aufschlag. Erst wenn diese Prüfung kein akzeptables Ergebnis liefert, wird die mutualistische Route zur eigentlichen Option — mit dem Hinweis, dass deren 365-Tage-Frist ab dem tatsächlichen Versicherungsbeginn läuft und daher so früh wie möglich gestartet werden sollte.</p>
  </div>
</section>`,
  faqTitle: 'Vorerkrankungen und Krankenversicherung — häufige Fragen',
  faq: [
    {
      q: 'Schließt eine Vorerkrankung eine Krankenversicherung in Portugal aus?',
      a: '<p>Nicht automatisch. Je nach Versicherer und Erkrankung führt die Gesundheitsprüfung zu einem Ausschluss der Erkrankung, einem Prämienaufschlag oder in schwereren Fällen zur Ablehnung.</p>',
    },
    {
      q: 'Was bedeutet ein Ausschluss konkret?',
      a: '<p>Die Police deckt Sie normal für alles außer der ausgeschlossenen Erkrankung selbst. Prüfen Sie, wie eng der Ausschluss gefasst ist, bevor Sie das Angebot ablehnen.</p>',
    },
    {
      q: 'Was, wenn ich abgelehnt werde?',
      a: '<p>Dann ist die mutualistische Route (z. B. MGEN) meist der nächste Schritt — Aufnahme über Mitgliedschaft statt Gesundheitsprüfung, mit einer 365-tägigen Wartezeit für die Vorerkrankung. Details auf unserer Krankenversicherungsseite.</p>',
    },
    {
      q: 'Soll ich die Vorerkrankung lieber nicht angeben?',
      a: '<p>Nein. Unvollständige Angaben werden beim ersten damit zusammenhängenden Schadenfall sichtbar, und dann steht die gesamte Police zur Disposition, nicht nur der einzelne Schadenfall.</p>',
    },
  ],
  related: [
    { url: '/de/krankenversicherung-portugal/', label: 'Krankenversicherung in Portugal' },
    { url: '/de/umzug-deutschland-portugal-versicherung/', label: 'Versicherungen beim Umzug von Deutschland nach Portugal' },
    { url: '/en/blog/mgen-medis-allianz-april-acceptance-comparison/', label: 'MGEN, Médis, Allianz and APRIL: Compared on Acceptance, Not Price (Englisch)', hreflang: 'en' },
  ],
};

const S1_PAGE = {
  slug: 's1-formular-rentner-portugal',
  url: '/de/s1-formular-rentner-portugal/',
  title: 'Das S1-Formular für Rentner in Portugal: Was es gibt, und was nicht | Adler & Rochefort',
  description:
    'Mit deutscher Rente in Portugal: wie das S1-Formular und die Koordination über die DVKA funktionieren, was der Zugang zum SNS konkret bedeutet, was er nicht abdeckt, und warum er eine private Police ergänzt statt ersetzt.',
  keywords:
    'S1 Formular Portugal, DVKA Rentner Portugal, deutsche Rente Krankenversicherung Portugal, SNS Zugang Rentner, gesetzliche Krankenkasse Portugal Rentner',
  eyebrow: 'S1 & Rentner',
  h1: 'Das S1-Formular für Rentner: Was es gibt, und was nicht',
  standfirst:
    'Wer ausschließlich eine deutsche gesetzliche Rente bezieht und nach Portugal zieht, bleibt gesundheitlich in deutscher Verantwortung. Das S1-Formular öffnet dafür den Zugang zum portugiesischen SNS — ein echter Anspruch, und genau so viel, wie das portugiesische System geben kann. Nicht mehr.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lissabon · Lagos · Spanien',
  heroCta: 'Beratung anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'S1-Formular für Rentner' }],
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-13T09:00:00+00:00',
  pullquote: 'Das S1 gibt Ihnen die Warteliste eines portugiesischen Residenten. Nicht mehr, und auch nicht weniger.',
  schemaType: 'Article',
  formHeading: 'Beratung zu S1 und Zusatzversicherung',
  formBranch: 'Krankenversicherung',
  formSubject: 'S1-Formular und Zusatzdeckung',
  formCta: 'Beratung anfragen',
  // Especificação v2, A1/A2: "ob es etwas Medizinisches zu melden gibt"
  // removed — the placeholder below never asked for it in the first place,
  // so the intro shouldn't either.
  formIntro:
    'Haben Sie bereits ein S1 oder beantragen es gerade? Nennen Sie uns Ihr Alter — wir sagen Ihnen, was eine sinnvolle Zusatzdeckung kostet.',
  formPlaceholder:
    'Zum Beispiel: Ihr Alter, ob Sie bereits ein S1 haben oder beantragen, ob Ihr Ehepartner mitversichert werden muss, und in welcher Gemeinde Sie wohnen.',
  sections: `
<section class="section plain" aria-labelledby="wie-funktioniert">
  <div class="container narrow article-body">
    <h2 id="wie-funktioniert">Wie die Regelung funktioniert</h2>
    <p>Innerhalb der europäischen Koordinierung der sozialen Sicherheit gilt ein einfaches Prinzip: Das Land, das Ihre Rente zahlt, trägt die Kosten Ihrer Gesundheitsversorgung. Leben Sie in Portugal und beziehen ausschließlich eine deutsche gesetzliche Rente, bleibt Deutschland dieses Land.</p>
    <p>In der Praxis läuft das so ab:</p>
    <ol>
      <li>Sie beantragen bei Ihrer deutschen gesetzlichen Krankenkasse das <strong>S1-Formular</strong>. Das Verfahren wird auf deutscher Seite über die <strong>Deutsche Verbindungsstelle Krankenversicherung – Ausland (DVKA)</strong> koordiniert.</li>
      <li>Sie registrieren das S1 bei der portugiesischen <em>Segurança Social</em>.</li>
      <li>Sie melden sich anschließend bei Ihrem <em>Centro de Saúde</em> an.</li>
    </ol>
    <p>Ab diesem Zeitpunkt haben Sie Anspruch auf medizinische Versorgung in Portugal zu denselben Bedingungen wie ein portugiesischer Resident, auf Kosten der deutschen Seite. Das ist ein vollwertiger Anspruch, keine Kulanzregelung.</p>
    <div class="callout">
      <span class="callout-label">Auf die Reihenfolge achten</span>
      Die Registrierung des S1 bei der Segurança Social und die Anmeldung beim Centro de Saúde sind zwei getrennte Schritte. Wer nur den ersten erledigt, ist administrativ korrekt registriert und hat trotzdem noch keinen Hausarzt.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="was-es-gibt">
  <div class="container narrow article-body">
    <h2 id="was-es-gibt">Was das S1 gibt, und was nicht</h2>
    <p>Dieser Gegensatz ist der Kern dieser Seite. Das S1 öffnet den Zugang zum SNS — mit allen Eigenschaften des SNS, auch den weniger angenehmen.</p>
    <h3>Was das S1 gibt</h3>
    <ul>
      <li>Zugang zum SNS zu gleichen Bedingungen wie ein portugiesischer Resident</li>
      <li>Notfallversorgung und Krankenhausaufenthalt im öffentlichen System</li>
      <li>Hausärztliche Versorgung und bezuschusste Medikamente</li>
    </ul>
    <h3>Was das S1 nicht gibt</h3>
    <ul>
      <li>Behandlung in privaten Kliniken und Krankenhäusern</li>
      <li>Freie Arzt-, Facharzt- oder Klinikwahl</li>
      <li>Einen Termin innerhalb angemessener Zeit für nicht-akute Versorgung</li>
      <li>Zahnbehandlung, bis auf wenige Ausnahmen</li>
      <li>Deckung für Familienangehörige ohne eigenen Anspruch</li>
    </ul>
    <p>Der letzte Punkt verdient besondere Beachtung. Ein Ehepartner ohne eigene deutsche gesetzliche Rente ist nicht automatisch mitversichert. Klären Sie diese Frage bei Ihrer Krankenkasse beziehungsweise der DVKA vor dem Umzug, nicht danach.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="ergaenzung">
  <div class="container narrow article-body">
    <h2 id="ergaenzung">Das S1 ergänzt eine private Police, es ersetzt sie nicht</h2>
    <p>Das S1 wird oft als Schlussstein der Auswanderung dargestellt: geregelt, erledigt, versichert. Administrativ stimmt das. Praktisch nicht. Der Engpass ist derselbe wie für jeden anderen SNS-Nutzer: die Wartezeit für nicht-akute Versorgung. Eine Star-Operation, eine Hüfte, ein MRT, eine Überweisung zum Kardiologen — genau die Versorgung, die mit zunehmendem Alter häufiger wird, ist die, bei der das öffentliche System am längsten braucht. Das S1 ändert daran nichts, denn es gibt Ihnen dieselbe Position in derselben Warteschlange.</p>
    <p>Die Kombination, die in der Praxis funktioniert: <strong>das S1 für Notfall, Hausarzt und Medikamente — eine private Police für Geschwindigkeit und Wahlfreiheit.</strong> Da die schweren Kosten bereits vom öffentlichen System getragen werden, muss die private Police oft weniger umfassend sein, als wenn Sie gar kein S1 hätten. Das senkt die Prämie.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="altersgrenze">
  <div class="container narrow article-body">
    <h2 id="altersgrenze">Die Altersgrenze, und warum Sie nicht warten sollten</h2>
    <p>Hier liegt der Punkt, der diese Gruppe am härtesten trifft. Portugiesische Versicherer haben ein Höchstaufnahmealter für neue Policen mit medizinischer Prüfung. Wer darüber liegt, wird nicht mehr aufgenommen — unabhängig vom Gesundheitszustand, unabhängig davon, dass nie ein Schaden gemeldet wurde.</p>
    <p>Die Folge: Das S1 wird oft als die sichere Wahl angesehen — Sie haben ja Deckung —, während genau die Jahre des Wartens die Tür zur privaten Zusatzdeckung schließen. Wer mit 66 ankommt und denkt "das regle ich später", kann mit 72 feststellen, dass später nicht mehr existiert.</p>
    <p>Die mutualistische Route (wie MGEN) kennt diese Altersgrenze nicht in derselben Form, da die Aufnahme dort auf Mitgliedschaft statt auf individueller Risikoprüfung beruht. Details dazu auf unserer Seite zur <a href="/de/krankenversicherung-portugal/">Krankenversicherung in Portugal</a>.</p>
  </div>
</section>`,
  faqTitle: 'S1-Formular für Rentner — häufige Fragen',
  faq: [
    {
      q: 'Wer hat Anspruch auf ein S1 für Portugal?',
      a: '<p>Grundsätzlich, wer in Portugal wohnt und ausschließlich eine deutsche gesetzliche Rente bezieht, ohne durch Arbeit oder eine lokale Rente in Portugal versicherungspflichtig zu sein. Beantragen Sie das S1 bei Ihrer deutschen gesetzlichen Krankenkasse.</p>',
    },
    {
      q: 'Ist mein Ehepartner automatisch mitversichert?',
      a: '<p>Nicht automatisch. Ein Ehepartner ohne eigene deutsche gesetzliche Rente hat unter Umständen einen abgeleiteten Anspruch als Familienangehöriger, aber das ist nicht selbstverständlich. Klären Sie dies vor dem Umzug bei Ihrer Krankenkasse oder der DVKA.</p>',
    },
    {
      q: 'Kann ich mit dem S1 in eine private Klinik?',
      a: '<p>Nicht auf Kosten des S1. Es gibt Ihnen Zugang zum öffentlichen System zu denselben Bedingungen wie ein portugiesischer Resident. Behandlung in einer privaten Klinik zahlen Sie selbst, außer Sie haben zusätzlich eine private Police, die das abdeckt.</p>',
    },
    {
      q: 'Ich bin bereits über 70. Kann ich noch privat zusatzversichern?',
      a: '<p>Bei regulären Versicherern wahrscheinlich nicht, da diese ein Höchstaufnahmealter für neue Policen haben. Die mutualistische Route kennt diese Grenze nicht auf dieselbe Weise, da die Aufnahme auf Mitgliedschaft beruht.</p>',
    },
  ],
  related: [
    { url: '/de/krankenversicherung-portugal/', label: 'Krankenversicherung in Portugal' },
    { url: '/de/umzug-deutschland-portugal-versicherung/', label: 'Versicherungen beim Umzug von Deutschland nach Portugal' },
    { url: '/de/vorerkrankungen-krankenversicherung-portugal/', label: 'Krankenversicherung mit Vorerkrankungen' },
  ],
};

const NICHT_LEGALISIERT_PAGE = {
  slug: 'nicht-legalisierte-immobilie-versichern-portugal',
  url: '/de/nicht-legalisierte-immobilie-versichern-portugal/',
  title: 'Eine nicht legalisierte Immobilie in Portugal versichern | Adler & Rochefort',
  description:
    'Rústico mit bestehender Bebauung kaufen: was versicherbar ist und was nicht, was im Schadenfall passiert, welche Dokumente Sie vor der escritura prüfen, und was die Bank bei einer Finanzierung verlangt.',
  keywords:
    'nicht legalisierte Immobilie Portugal versichern, caderneta predial, licença de utilização, rústico Bebauung Portugal, Hausversicherung Legalisierung Portugal',
  eyebrow: 'Legalisierung',
  h1: 'Eine nicht legalisierte Immobilie versichern',
  standfirst:
    'Auf dem Grundstück steht ein Haus, Sie kaufen es beim Notar, und erst Monate später stellt sich heraus, dass das Gebäude formal nicht existiert. Das ist in Portugal keine Seltenheit und auch keine Katastrophe — es bestimmt aber, was Sie versichern können und was im Schadenfall passiert.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lissabon · Lagos · Spanien',
  heroCta: 'Versicherung vergleichen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'Nicht legalisierte Immobilie' }],
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-13T09:00:00+00:00',
  pullquote: 'Was nicht in der caderneta steht, existiert für den Versicherer nicht.',
  schemaType: 'WebPage',
  formHeading: 'Nicht legalisierte Immobilie versichern',
  formBranch: 'Hausversicherung',
  formSubject: 'Immobilie ohne vollständige Legalisierung',
  formCta: 'Versicherung vergleichen',
  formIntro:
    'Unsicher, ob die Bebauung vollständig registriert ist? Senden Sie uns, was Sie haben — caderneta predial, certidão oder den Kaufvertrag —, wir sagen Ihnen, was versicherbar ist.',
  formPlaceholder:
    'Zum Beispiel: Gemeinde, ob das Grundstück rústico oder urbano ist, ob eine licença de utilização vorliegt, welche Teile registriert sind, und ob eine Finanzierung geplant ist.',
  sections: `
<section class="section plain" aria-labelledby="wie-entsteht">
  <div class="container narrow article-body">
    <h2 id="wie-entsteht">Wie diese Situation entsteht</h2>
    <p>Im portugiesischen Hinterland und in Teilen der Algarve ist die Bebauung über Jahrzehnte mit der Nutzung mitgewachsen. Ein Stall wurde zum Schuppen, der Schuppen bekam ein Dach und ein Fenster, eine Küche kam dazu, und irgendwann wohnte dort jemand. Bei der Gemeinde wurde das nicht immer nachgetragen — oft weil das Grundstück <em>rústico</em> ist (landwirtschaftliche Fläche, auf der Wohnnutzung formal nicht zulässig ist), sodass die Bebauung nie genehmigungsfähig gewesen wäre.</p>
    <p>Das führt zu drei Situationen unterschiedlichen Schweregrads:</p>
    <ul>
      <li><strong>Vollständig legal.</strong> Das Grundstück ist <em>urbano</em>, das Gebäude steht in der caderneta predial urbana, und es gibt eine <em>licença de utilização</em> — die Nutzungsgenehmigung, die die Bestimmung des Gebäudes festlegt.</li>
      <li><strong>Registriert, aber ohne Genehmigung.</strong> Das Gebäude ist steuerlich erfasst, aber es fehlt die Nutzungsgenehmigung, oder diese deckt eine andere Nutzung als Wohnen ab. Häufig bei älterer Bausubstanz.</li>
      <li><strong>Nicht registriert.</strong> Das Gebäude existiert nirgends amtlich. Für Finanzamt und Kataster ist das Grundstück unbebaut — <em>rústico</em>, mit entsprechend niedrigerer Bemessung.</li>
    </ul>
    <p>Was es erschwert: Der Notar prüft bei der Übertragung, was in der Urkunde steht, nicht was tatsächlich auf dem Grundstück steht. Sie können vollkommen rechtsgültig Eigentümer eines Grundstücks werden, auf dem ein Gebäude steht, das administrativ nicht existiert.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="was-versicherbar">
  <div class="container narrow article-body">
    <h2 id="was-versicherbar">Was versicherbar ist, und was nicht</h2>
    <p>Die Grundregel ist einfacher, als man hofft: <strong>ein Versicherer versichert ein Gebäude, das nachweislich existiert und dessen Nutzung der erklärten entspricht.</strong> Fehlt die Registrierung, fehlt die Grundlage für die Versicherungssumme.</p>
    <h3>In der Regel versicherbar</h3>
    <ul>
      <li><strong>Hausrat</strong> — Ihr Eigentum gehört Ihnen, unabhängig vom Status des Gebäudes</li>
      <li><strong>Haftpflicht</strong> als Eigentümer oder Bewohner</li>
      <li>Bebauung, die registriert ist, der aber die Nutzungsgenehmigung fehlt — bei manchen Versicherern und nach Prüfung</li>
      <li>Immobilien, bei denen ein Legalisierungsverfahren läuft, teils befristet und unter der Bedingung des Abschlusses</li>
    </ul>
    <h3>In der Regel nicht versicherbar</h3>
    <ul>
      <li>Die <strong>Gebäudeversicherungssumme</strong> eines nirgends registrierten Gebäudes</li>
      <li>Bebauung auf <em>rústico</em>, die formal nicht genehmigungsfähig ist</li>
      <li>Erweiterungen und Anbauten, die nach der Registrierung errichtet und nie nachgetragen wurden</li>
      <li>Gewerbliche Nutzung — Vermietung — ohne die entsprechende Genehmigung</li>
    </ul>
    <p>Die mittlere Kategorie ist der interessante Fall. Versicherer unterscheiden sich erheblich darin, was sie bei einem registrierten Gebäude ohne Nutzungsgenehmigung akzeptieren — ein weiterer Grund, das Dossier mehreren Gesellschaften vorzulegen, statt nach einem "Nein" zu schließen, dass es unmöglich ist.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="im-schadenfall">
  <div class="container narrow article-body">
    <h2 id="im-schadenfall">Was im Schadenfall passiert</h2>
    <p>Der Vertragsabschluss ist selten das Problem. Portugiesische Versicherer schicken bei einer gewöhnlichen Hausversicherung vor der Annahme keinen Gutachter vorbei; sie gehen von Ihren Angaben aus. Das Problem entsteht beim <strong>Schadenfall</strong>, denn dann schaut tatsächlich jemand nach.</p>
    <p>Der Gutachter stellt den Ist-Zustand fest und vergleicht ihn mit dem Versicherten. Weicht das voneinander ab, gibt es drei Ergebnisse, mit steigendem Schweregrad:</p>
    <ol>
      <li><strong>Der nicht registrierte Teil fällt aus der Entschädigung heraus.</strong> Der Anbau, in dem das Feuer begann, wird nicht erstattet; der Rest schon.</li>
      <li><strong>Die regra proporcional betrifft den gesamten Schaden.</strong> Die angegebene Summe bezog sich auf ein kleineres Gebäude, als tatsächlich existiert, und die Entschädigung wird anteilig gekürzt — auch für den registrierten Teil.</li>
      <li><strong>Der Versicherer beruft sich auf eine falsche Risikoangabe.</strong> Weicht die tatsächliche Situation wesentlich von der erklärten ab — ein Wohnhaus, wo ein Schuppen versichert war, oder Wohnnutzung auf einem als unbebaut geführten Grundstück —, kann die Deckung insgesamt infrage stehen.</li>
    </ol>
    <div class="callout">
      <span class="callout-label">Die einzig vernünftige Linie</span>
      Geben Sie die tatsächliche Situation an, auch wenn sie unübersichtlich ist. Ein Versicherer, der vorab weiß, dass die Nutzungsgenehmigung fehlt, und trotzdem eine Police ausstellt, hat dieses Risiko akzeptiert. Ein Versicherer, der das erst beim Schaden erfährt, hat das nicht. Der Unterschied zwischen beiden ist die gesamte Entschädigung.
    </div>
  </div>
</section>

<section class="section tint" aria-labelledby="pruefung">
  <div class="container narrow article-body">
    <h2 id="pruefung">Wie Sie es vor dem Kauf prüfen</h2>
    <p>Das ist eine Stunde Arbeit und verhindert den Großteil der Probleme auf dieser Seite. Fordern Sie diese Dokumente an, oder lassen Sie es Ihren Anwalt tun:</p>
    <ul>
      <li><strong>Caderneta predial</strong> — der steuerliche Auszug bei den Finanças. Prüfen Sie, ob das Grundstück <em>urbano</em> oder <em>rústico</em> ist, und ob die angegebene Fläche der tatsächlichen entspricht. Steht ein Gebäude von 60 m² registriert und Sie messen 140, sind 80 m² administrativ nicht vorhanden.</li>
      <li><strong>Certidão permanente do registo predial</strong> — der Grundbuchauszug. Er zeigt Eigentum, Hypotheken und Belastungen.</li>
      <li><strong>Licença de utilização</strong> — die Nutzungsgenehmigung der câmara mit der Zweckbestimmung. Für Bauten vor 1951 existiert sie oft nicht; eine Bestätigung der Gemeinde über das Alter genügt dann meist.</li>
      <li><strong>Planta de localização</strong> und die genehmigten Baupläne bei der câmara. Vergleichen Sie diese mit der Realität: der Anbau, der Pool und die Garage, die zwar existieren, aber nicht im Plan stehen.</li>
    </ul>
    <p>Finden Sie eine Abweichung, ist das kein Grund abzuspringen. Es ist ein Verhandlungspunkt beim Preis und eine Frage, wer das Legalisierungsverfahren bezahlt. Eine <em>legalização</em> über einen Architekten und die câmara ist bei Altbauten auf urbano oft machbar; auf rústico ist das wesentlich schwieriger und manchmal ausgeschlossen. Lassen Sie das vor der <em>escritura</em> prüfen, nicht danach.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="hypothek">
  <div class="container narrow article-body">
    <h2 id="hypothek">Mit einer Finanzierung ist die Entscheidung bereits getroffen</h2>
    <p>Finanzieren Sie über eine portugiesische Bank, wird die Frage einfach: Die Bank verlangt eine legalisierte Immobilie mit Nutzungsgenehmigung und eine Hausversicherung mit der Bank als Begünstigter bis zur Höhe des Darlehens. Ohne Legalisierung kommt die Bewertung nicht durch, und die Finanzierung kommt nicht zustande.</p>
    <p>Das macht den Finanzierungsweg in dieser Hinsicht sicherer: Die Bank führt eine Prüfung durch, die Sie sonst selbst hätten durchführen müssen. Es macht ihn auch unflexibler — eine Immobilie, die Sie bar mit akzeptablem Risiko kaufen könnten, ist mit Finanzierung schlicht keine Option, bis das Verfahren abgeschlossen ist.</p>
    <p>Achten Sie dabei auf die von der Bank angebotene Versicherung. Diese stammt fast immer von einer einzigen Gesellschaft, die Versicherungssumme wird an die Darlehenshöhe statt an den Wiederaufbauwert gekoppelt, und das ist nicht derselbe Betrag. Sie sind frei, die Police anderswo abzuschließen, solange die Bank als Begünstigte eingetragen ist und die Deckung den gestellten Anforderungen entspricht. Siehe auch unsere Seite zur <a href="/de/hausversicherung-portugal/">Hausversicherung und zum Wiederaufbauwert</a>.</p>
  </div>
</section>`,
  faqTitle: 'Nicht legalisierte Immobilie — häufige Fragen',
  faq: [
    {
      q: 'Kann ich eine nicht legalisierte Immobilie versichern?',
      a: '<p>Teilweise. Hausrat und Haftpflicht sind in der Regel versicherbar, da sie nicht vom Status des Gebäudes abhängen. Die Gebäudeversicherungssumme eines nirgends registrierten Gebäudes in der Regel nicht. Steht das Gebäude in der caderneta, fehlt aber die Nutzungsgenehmigung, unterscheidet sich das je nach Versicherer.</p>',
    },
    {
      q: 'Was passiert im Schadenfall, wenn ein Teil nicht registriert ist?',
      a: '<p>Im günstigsten Fall fällt nur dieser Teil aus der Entschädigung heraus. Häufiger greift die regra proporcional, weil die angegebene Summe auf ein kleineres Gebäude bezogen war, und die gesamte Entschädigung wird anteilig gekürzt.</p>',
    },
    {
      q: 'Wie prüfe ich, ob die Immobilie legalisiert ist?',
      a: '<p>Fordern Sie die caderneta predial bei den Finanças an, die certidão permanente beim Grundbuch, und die licença de utilização bei der câmara. Vergleichen Sie die registrierte mit der tatsächlichen Fläche. Tun Sie dies vor der escritura.</p>',
    },
    {
      q: 'Kann ich eine nicht legalisierte Immobilie mit Finanzierung kaufen?',
      a: '<p>In der Regel nicht. Eine portugiesische Bank verlangt eine legalisierte Immobilie mit Nutzungsgenehmigung und eine Hausversicherung mit der Bank als Begünstigter. Ohne Legalisierung kommt die Bewertung nicht durch.</p>',
    },
  ],
  related: [
    { url: '/de/hausversicherung-portugal/', label: 'Hausversicherung in Portugal' },
    { url: '/en/blog/home-insurance-legalization/', label: 'Home Insurance and Legalization (Englisch)', hreflang: 'en' },
  ],
};

const ISV_PAGE = {
  slug: 'isv-befreiung-fahrzeugimport-portugal',
  url: '/de/isv-befreiung-fahrzeugimport-portugal/',
  title: 'ISV-Befreiung beim Fahrzeugimport nach Portugal | Adler & Rochefort',
  description:
    'Die Befreiung von der portugiesischen Kfz-Zulassungssteuer (ISV) bei Wohnsitzverlegung nach Portugal: die Voraussetzungen, die Fristen, und warum wer zuerst fährt und später fragt, zu spät ist.',
  keywords:
    'ISV Befreiung Portugal, Kfz Steuer Befreiung Umzug Portugal, Fahrzeugimport Portugal Steuer, ISV Wohnsitzverlegung, Auto mitbringen Portugal Steuer',
  eyebrow: 'Autoversicherung',
  h1: 'Die ISV-Befreiung beim Fahrzeugimport',
  standfirst:
    'Ziehen Sie dauerhaft nach Portugal um, kann eine Befreiung von der Kfz-Zulassungssteuer (ISV) für Ihr mitgebrachtes Fahrzeug gelten. Die Voraussetzungen sind streng und fristgebunden — wer erst fährt und sich später informiert, ist zu spät dran.',
  heroMeta: 'Registrierter Versicherungsmakler · ASF Nr. 425591790/3 · Lissabon · Lagos · Spanien',
  heroCta: 'Angebot anfragen',
  hreflang: {},
  langLinks: {},
  breadcrumb: [...BREADCRUMB_ROOT, { name: 'ISV-Befreiung' }],
  published: '2026-09-13T09:00:00+00:00',
  modified: '2026-09-13T09:00:00+00:00',
  schemaType: 'WebPage',
  formHeading: 'Angebot für Ihr importiertes Fahrzeug',
  formBranch: 'Autoversicherung',
  formSubject: 'ISV-Befreiung und Fahrzeugversicherung',
  formCta: 'Angebot anfragen',
  formIntro:
    'Planen Sie, Ihr Fahrzeug bei der Auswanderung mitzubringen? Nennen Sie uns Fahrzeug und geplanten Umzugstermin — wir sagen Ihnen, wie die Versicherung während der Übergangszeit organisiert wird.',
  formPlaceholder:
    'Zum Beispiel: Marke, Modell, Baujahr, wie lange Sie das Fahrzeug bereits besitzen, und geplantes Datum der Wohnsitzverlegung.',
  sections: `
<section class="section plain" aria-labelledby="was-ist-isv">
  <div class="container narrow article-body">
    <h2 id="was-ist-isv">Was die ISV ist, zur Erinnerung</h2>
    <p>Die <strong>ISV — Imposto sobre Veículos</strong> — ist die portugiesische Kfz-Zulassungssteuer, fällig bei der Erstzulassung in Portugal. Die Berechnung basiert auf Hubraum und CO&#8322;-Ausstoß, mit einem Abschlag nach Fahrzeugalter. Details zur Berechnung selbst stehen auf unserer Seite zur <a href="/de/autoversicherung-portugal/">Autoversicherung in Portugal</a>. Diese Seite geht auf die Befreiung selbst ein — wann sie greift und was sie voraussetzt.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="voraussetzungen">
  <div class="container narrow article-body">
    <h2 id="voraussetzungen">Die Voraussetzungen der Befreiung wegen Wohnsitzverlegung</h2>
    <p>Verlegen Sie Ihren gewöhnlichen Wohnsitz dauerhaft nach Portugal, kann für ein mitgebrachtes Fahrzeug eine <strong>Befreiung von der ISV</strong> gelten. Diese Befreiung ist an mehrere Bedingungen geknüpft, die typischerweise umfassen:</p>
    <ul>
      <li>Das Fahrzeug muss vor der Wohnsitzverlegung bereits eine bestimmte Mindestzeit auf Ihren Namen zugelassen gewesen sein.</li>
      <li>Sie müssen es nach der Einfuhr für eine bestimmte Mindestzeit weiter halten, ohne es zu verkaufen oder zu übertragen.</li>
      <li>Der Antrag ist an eine Frist gebunden, die mit Ihrer Registrierung als Resident in Portugal zu laufen beginnt.</li>
    </ul>
    <div class="callout">
      <span class="callout-label">[VERIFY]</span>
      Die exakten Mindesthaltefristen vor und nach der Einfuhr sowie die genaue Antragsfrist sind an die jeweils aktuelle Regelung gebunden und sollten vor der Einfuhr direkt bei der Alfândega oder über einen despachante bestätigt werden, statt sich auf eine allgemeine Angabe zu verlassen.
    </div>
    <p>Wer zuerst fährt und sich erst später informiert, ist zu spät dran: Die Frist beginnt mit der Registrierung, nicht mit der Antragstellung, und eine rückwirkende Befreiung ist nicht der Normalfall.</p>
  </div>
</section>

<section class="section plain" aria-labelledby="ablauf">
  <div class="container narrow article-body">
    <h2 id="ablauf">Der Ablauf beim IMT</h2>
    <ol>
      <li>Zollanmeldung (<em>Alfândega</em>) und Antrag auf die Befreiung, mit Nachweis der Wohnsitzverlegung.</li>
      <li>Technische Prüfung: <em>Inspeção Técnica</em> für Importfahrzeuge, mit Kontrolle der EU-Konformität.</li>
      <li>Homologation beim IMT und Zuteilung des portugiesischen Kennzeichens.</li>
      <li>Ausstellung des <em>Documento Único Automóvel</em>.</li>
    </ol>
    <p>Für die Durchführung arbeitet praktisch jeder mit einem <em>despachante</em> (Zollagenten) — wir sind Versicherungsmakler, kein Zollagent, und diese Seite ersetzt keine steuerliche Beratung zum Einzelfall.</p>
  </div>
</section>

<section class="section tint" aria-labelledby="versicherung">
  <div class="container narrow article-body">
    <h2 id="versicherung">Was das für Ihre Versicherung bedeutet</h2>
    <p>Solange das Fahrzeug deutsch zugelassen bleibt, muss die deutsche Kfz-Versicherung fortbestehen, bis die portugiesische Police mit der neuen matrícula beginnt — eine Deckungslücke zwischen beiden ist der teuerste und am leichtesten vermeidbare Fehler in diesem Prozess. Details zur Übergangsdeckung und zur Schadenfreiheitsklasse stehen auf unserer Seite zur <a href="/de/autoversicherung-portugal/">Autoversicherung in Portugal</a>.</p>
  </div>
</section>`,
  faqTitle: 'ISV-Befreiung — häufige Fragen',
  faq: [
    {
      q: 'Bekomme ich automatisch eine ISV-Befreiung, wenn ich nach Portugal ziehe?',
      a: '<p>Nein. Die Befreiung wegen Wohnsitzverlegung ist an Voraussetzungen geknüpft — unter anderem, wie lange Sie das Fahrzeug bereits besaßen und wie lange Sie es danach behalten müssen — und muss fristgerecht beantragt werden.</p>',
    },
    {
      q: 'Wann beginnt die Antragsfrist zu laufen?',
      a: '<p>Mit Ihrer Registrierung als Resident in Portugal, nicht mit der Einfuhr des Fahrzeugs oder der Antragstellung selbst. Informieren Sie sich vor der Einfuhr, nicht danach.</p>',
    },
    {
      q: 'Brauche ich einen despachante?',
      a: '<p>Für die praktische Durchführung arbeitet nahezu jeder mit einem despachante (Zollagenten). Wir beraten zur Versicherungsseite, nicht zur steuerlichen Abwicklung.</p>',
    },
    {
      q: 'Ist mein Fahrzeug während der Einfuhr versichert?',
      a: '<p>Nur, solange Ihr deutscher Versicherer die Fortdauer der Deckung nach der Abmeldung schriftlich bestätigt. Vermeiden Sie eine Lücke zwischen deutscher und portugiesischer Police — Details auf unserer Seite zur Autoversicherung.</p>',
    },
  ],
  related: [
    { url: '/de/autoversicherung-portugal/', label: 'Autoversicherung in Portugal' },
    { url: '/de/umzug-deutschland-portugal-versicherung/', label: 'Versicherungen beim Umzug von Deutschland nach Portugal' },
  ],
};

export const PHASE2_PAGES = [VORERKRANKUNGEN_PAGE, S1_PAGE, NICHT_LEGALISIERT_PAGE, ISV_PAGE];
