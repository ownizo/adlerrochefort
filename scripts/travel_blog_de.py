# -*- coding: utf-8 -*-
"""DE copy for the travel-insurance article series (November 2026).

Stand-alone pages under /de/<slug>/, rendered by
scripts/build-travel-blog-articles.py. Same rules as travel_blog_en.py: no
insurer names or wording claims, no fixed response times, no offer of calls.
"""

TQ = '/de/reiseversicherung/#tq'

ARTICLES = [
# ---------------------------------------------------------------------------
dict(
    slug='reiseversicherung-visum-d7-d8-portugal',
    title='Reiseversicherung für das Visum D7 und D8 in Portugal: Was das Konsulat verlangt',
    meta_title='Visum D7 und D8 Portugal: welche Reiseversicherung?',
    desc='Für die portugiesischen Aufenthaltsvisa D7 und D8 verlangen die Konsulate eine Reiseversicherung mit Behandlungskosten, Notfallhilfe und Rücktransport. Was das bedeutet und was danach kommt.',
    sub='Jede Checkliste für ein portugiesisches Aufenthaltsvisum nennt dasselbe Dokument: eine gültige Reiseversicherung für notwendige Behandlungskosten, dringende medizinische Hilfe und einen möglichen Rücktransport. Dieser Schritt lässt sich online in wenigen Minuten erledigen — wenn man das Richtige kauft.',
    crumb='Visum D7 / D8',
    hero_link=('/de/internationale-krankenversicherung/', 'Internationale Krankenversicherung'),
    sections='''<section class="lp-section">
  <h2>Was in der Checkliste steht</h2>
  <p>Die Checklisten von VFS Global für portugiesische Aufenthaltsvisa — D7 für Rentner und Personen mit passivem Einkommen, D8 für Remote-Arbeit und die übrigen nationalen Visa — enthalten dieselbe Anforderung: eine <em>gültige Reiseversicherung, die notwendige Behandlungskosten einschließlich dringender medizinischer Hilfe und eines möglichen Rücktransports deckt</em>.</p>
  <p>Auf dem Nachweis müssen also drei Leistungen erkennbar sein: Behandlungskosten, Notfallhilfe und Rücktransport. Fehlt eine davon, wird das Dokument am häufigsten beanstandet.</p>
</section>

<section class="lp-section">
  <h2>Warum eine Reiseversicherung und keine Krankenversicherung</h2>
  <p>Verlangt wird ein Schutz für die Anreise und die erste Zeit in Portugal, bevor Sie dort einen Aufenthaltstitel haben. Eine portugiesische Krankenversicherung ist für Einwohner gemacht: Sie setzt eine portugiesische Adresse und Steuernummer (NIF) voraus und enthält keinen Rücktransport. Eine internationale Krankenversicherung kann Evakuierung und Rücktransport einschließen, ist aber ein langfristiger Vertrag mit Gesundheitsprüfung, die Zeit braucht.</p>
  <p>Eine Reiseversicherung mit Behandlungskosten und Rücktransport ist das Dokument für genau diese Phase. Auf unserer Seite <a href="/de/reiseversicherung/">Reiseversicherung online</a> wählen Sie als Reiseart <strong>Auslandsaufenthalt (1 Jahr)</strong> oder <strong>Digitaler Nomade / Remote-Arbeit</strong>, geben Portugal als Ziel an und vergleichen die Angebote nach Behandlungskosten und Rücktransport, bevor Sie abschließen.</p>
</section>

<section class="lp-section">
  <h2>Wie lange die Police laufen sollte</h2>
  <p>Die Checklisten nennen keine einheitliche Dauer, und die Praxis der Konsulate und VFS-Zentren ist unterschiedlich. Manche verlangen Schutz für die Gültigkeit des Visums (vier Monate beim Aufenthaltsvisum), andere für einen längeren Zeitraum bis zum Termin für den Aufenthaltstitel in Portugal. Lesen Sie vor dem Kauf die aktuelle Checkliste Ihres Konsulats — und wählen Sie im Zweifel den längeren Zeitraum.</p>
</section>

<section class="lp-section">
  <h2>Was Sie auf dem Nachweis prüfen sollten</h2>
  <ul class="lp-list">
    <li><strong>Die drei Leistungen namentlich:</strong> Behandlungskosten im Ausland, Notfallhilfe, medizinischer Rücktransport.</li>
    <li><strong>Portugal im Geltungsbereich</strong>, und der Schengen-Raum, wenn Sie dort reisen.</li>
    <li><strong>Die Daten</strong> stimmen mit den Reisedaten im Antrag überein.</li>
    <li><strong>Alle Antragsteller namentlich</strong>, auch mitreisende Kinder.</li>
    <li><strong>Die Unterlagen</strong> (IPID und Bedingungen) sind bei jedem Angebot verlinkt — lesen Sie sie vor der Zahlung.</li>
  </ul>
</section>

<section class="lp-section">
  <h2>Was nach dem Visum kommt</h2>
  <p>Sobald Sie in Portugal leben, ist die Reiseversicherung nicht mehr das richtige Instrument: Sie deckt eine Reise, nicht das Leben vor Ort. Sie brauchen dann eine Jahres-Krankenversicherung — inländisch, international oder beides. Die Wahl hängt von Alter, Vorerkrankungen und davon ab, ob Sie auch außerhalb Portugals behandelt werden möchten. Siehe <a href="/de/internationale-krankenversicherung/inlaendisch-oder-international/">inländisch oder international?</a> und <a href="/de/internationale-krankenversicherung/">internationale Krankenversicherung</a>.</p>
  <p>Für das Visum: <a href="{tq}">Reiseversicherung online vergleichen</a>. Für das Leben in Portugal danach: Schreiben Sie uns Alter, Staatsangehörigkeit und künftigen Wohnort, wir antworten schriftlich mit den Optionen.</p>
</section>
''',
    faq=[
        ('Wird eine Reiseversicherung für das Visum D7 akzeptiert?',
         'Die Checklisten der Konsulate verlangen eine Reiseversicherung für Behandlungskosten, dringende medizinische Hilfe und möglichen Rücktransport. Die Anforderungen legt jedes Konsulat fest; prüfen Sie die aktuelle Checkliste.'),
        ('Brauche ich nach dem Aufenthaltstitel noch eine Krankenversicherung?',
         'Ja. Die Reiseversicherung deckt Reisen. Als Einwohner Portugals brauchen Sie eine Jahres-Krankenversicherung, inländisch oder international.'),
        ('Wie lange muss die Reiseversicherung gelten?',
         'Das ist je nach Konsulat unterschiedlich. Manche verlangen die Gültigkeit des Visums, andere einen längeren Zeitraum. Im Zweifel für den längeren Zeitraum abschließen.'),
    ],
    related=[('/de/reiseversicherung/', 'Reiseversicherung online'),
             ('/de/internationale-krankenversicherung/', 'Internationale Krankenversicherung'),
             ('/de/krankenversicherung-portugal-spanien/', 'Krankenversicherung Portugal & Spanien')],
),
# ---------------------------------------------------------------------------
dict(
    slug='schengen-visum-reiseversicherung-portugal-spanien',
    title='Reiseversicherung für das Schengen-Visum: Portugal und Spanien',
    meta_title='Schengen-Visum Portugal & Spanien: Reiseversicherung',
    desc='Für ein Schengen-Visum nach Portugal oder Spanien ist eine Reisekrankenversicherung von mindestens 30.000 € Pflicht, gültig im ganzen Schengen-Raum für den gesamten Aufenthalt. So schließen Sie sie richtig ab.',
    sub='Wer für Portugal oder Spanien ein Visum braucht, muss eine Reisekrankenversicherung vorlegen — das Konsulat prüft sie. Die Regeln sind in allen Schengen-Staaten gleich und genau festgelegt.',
    crumb='Schengen-Visum',
    hero_link=('#faq', 'Häufige Fragen'),
    sections='''<section class="lp-section">
  <h2>Die drei Regeln</h2>
  <p>Der EU-Visakodex legt für jedes Schengen-Visum für kurze Aufenthalte dieselbe Versicherungspflicht fest, ob der Antrag bei einem portugiesischen oder spanischen Konsulat gestellt wird:</p>
  <ol class="lp-steps">
    <li><strong>Mindestens 30.000 €</strong> für Behandlungskosten, Notfallbehandlung im Krankenhaus und medizinischen Rücktransport, einschließlich Überführung im Todesfall.</li>
    <li><strong>Gültig in allen Schengen-Staaten</strong>, nicht nur im Hauptreiseziel.</li>
    <li><strong>Gültig für den gesamten Aufenthalt</strong> — jeden Tag des beantragten Visums.</li>
  </ol>
</section>

<section class="lp-section">
  <h2>Wer sie braucht</h2>
  <p>Die Pflicht gilt für Staatsangehörige von Ländern, die für den Schengen-Raum ein Visum benötigen — etwa Familienangehörige von Einwohnern, Geschäftsreisende, Teilnehmer kurzer Kurse oder Kaufinteressenten für Immobilien. Häufig sind es Eltern oder Verwandte, die eine in Portugal oder Spanien lebende Familie besuchen. Bürger der EU, der Schweiz und visumfreier Staaten beantragen kein Schengen-Visum.</p>
</section>

<section class="lp-section">
  <h2>Eine passende Police abschließen</h2>
  <p>Wählen Sie auf unserer Seite <a href="/de/reiseversicherung/">Reiseversicherung online</a> die Reiseart <strong>Schengen-Visumantrag</strong>. Die dafür angezeigten Tarife erfüllen die Mindestdeckung von 30.000 €. Prüfen Sie vor der Zahlung:</p>
  <ul class="lp-list">
    <li>Reiseziel ist der <strong>Schengen-Raum</strong>, nicht ein einzelnes Land;</li>
    <li>die Daten umfassen den <strong>gesamten Visumzeitraum</strong>, Ein- und Ausreisetag eingeschlossen;</li>
    <li>der Nachweis nennt <strong>Behandlungskosten und Rücktransport</strong> und jeden Reisenden.</li>
  </ul>
  <p>30.000 € sind ein Minimum, keine Empfehlung. Ein Sturz oder ein Herzereignis in einer Privatklinik in Lissabon oder Madrid kann teurer werden; die Angebote auf unserer Seite sind deshalb zuerst nach Behandlungskosten sortiert. Ältere Reisende sollten genau lesen, wie jeder Tarif bestehende Erkrankungen behandelt — die Regeln sind je nach Versicherer verschieden.</p>
  <p><a href="{tq}">Schengen-Reiseversicherung online vergleichen</a>, Tarif wählen und den Nachweis nach der Zahlung erhalten.</p>
</section>
''',
    faq=[
        ('Wie hoch muss die Deckung für ein Schengen-Visum sein?',
         'Mindestens 30.000 € für Behandlungskosten, Notfallbehandlung und Rücktransport, gültig in allen Schengen-Staaten für den gesamten Aufenthalt.'),
        ('Reicht eine Versicherung nur für Portugal oder Spanien?',
         'Nein. Der Visakodex verlangt Gültigkeit im gesamten Schengen-Raum.'),
        ('Kann ich die Versicherung vor der Visumerteilung abschließen?',
         'Ja, das Konsulat verlangt sie mit dem Antrag. Prüfen Sie die Stornobedingungen der Police für den Fall einer Ablehnung.'),
    ],
    related=[('/de/reiseversicherung/', 'Reiseversicherung online'),
             ('/de/reiseversicherung-visum-d7-d8-portugal/', 'Visum D7 und D8'),
             ('/de/gkv-ehic-ausland-portugal-spanien-reiseversicherung/', 'GKV und EHIC im Urlaub')],
),
# ---------------------------------------------------------------------------
dict(
    slug='digitale-nomaden-visum-spanien-versicherung',
    title='Digital-Nomad-Visum Spanien: Welche Versicherung Sie wirklich brauchen',
    meta_title='Digital-Nomad-Visum Spanien: welche Versicherung?',
    desc='Für das spanische Telearbeitsvisum wird eine Krankenversicherung bei einem in Spanien zugelassenen Versicherer verlangt, keine Reiseversicherung. Was das bedeutet und wo die Reiseversicherung trotzdem passt.',
    sub='Das spanische Telearbeitsvisum wird oft mit dem portugiesischen D8 verwechselt. Die Versicherungspflicht ist nicht dieselbe: Für Spanien reicht eine Reiseversicherung nicht.',
    crumb='Digital-Nomad-Visum Spanien',
    hero_link=('/de/internationale-krankenversicherung/digitale-nomaden/', 'Krankenversicherung für Nomaden'),
    sections='''<section class="lp-section">
  <h2>Was Spanien verlangt</h2>
  <p>Für das internationale Telearbeitsvisum und die entsprechende Aufenthaltserlaubnis nach dem Startup-Gesetz (Ley 28/2022) verlangt Spanien eine <strong>öffentliche oder private Krankenversicherung bei einem in Spanien zugelassenen Versicherer</strong>, für Antragsteller und mitreisende Familienangehörige, für die Dauer des Aufenthalts. In der Praxis werden private Vollversicherungen akzeptiert — Krankenhaus, Fachärzte und Hausarzt, gültig in Spanien, ohne die Grenzen eines Reisetarifs. Vielen Antragstellern wird zudem gesagt, die Police dürfe keine Zuzahlungen (<em>copagos</em>) enthalten.</p>
</section>

<section class="lp-section">
  <h2>Warum eine Reiseversicherung nicht reicht</h2>
  <p>Eine Reiseversicherung deckt Notfälle während einer Reise und den Rücktransport. Sie ist nicht dafür gemacht, laufende Behandlungen am Wohnort zu bezahlen, und sie ist keine Krankenversicherung im Sinne der spanischen Anforderung. Hier unterscheiden sich Spanien und Portugal: Portugal verlangt für das Aufenthaltsvisum eine Reiseversicherung mit Rücktransport, Spanien für die Telearbeitserlaubnis von Anfang an eine Krankenversicherung.</p>
</section>

<section class="lp-section">
  <h2>Die beiden Wege, die passen</h2>
  <ul class="lp-list">
    <li><strong>Spanische Krankenversicherung</strong> — ein Tarif für Einwohner Spaniens, mit Ärzte- und Kliniknetz vor Ort.</li>
    <li><strong>Internationale Krankenversicherung</strong> — Schutz in Spanien und anderen Ländern, oft gewählt von Menschen, die beruflich reisen oder im Heimatland behandelt werden möchten. Auch sie muss die spanische Anforderung erfüllen; deshalb zählen die Zulassung des Versicherers in Spanien und der Versicherungsnachweis.</li>
  </ul>
  <p>Die Anforderungen werden von der zuständigen Stelle oft streng ausgelegt. Lesen Sie die aktuellen Vorgaben für Ihren Antrag, bevor Sie wählen. Wir nennen schriftlich, welchen Tarif wir vorschlagen und warum. Siehe auch <a href="/de/internationale-krankenversicherung/digitale-nomaden/">Krankenversicherung für digitale Nomaden</a>.</p>
</section>

<section class="lp-section">
  <h2>Wo die Reiseversicherung trotzdem passt</h2>
  <p>Rund um das Visum bleibt sie nützlich, nicht statt des Visums: für die Erkundungsreise, für die Wochen in Spanien, bevor die Krankenversicherung beginnt, und für Reisen außerhalb Spaniens, wenn Ihr Tarif auf Spanien beschränkt ist. Dafür: <a href="{tq}">Reiseversicherung online vergleichen</a>.</p>
</section>
''',
    faq=[
        ('Wird eine Reiseversicherung für das Digital-Nomad-Visum Spanien akzeptiert?',
         'Verlangt wird eine öffentliche oder private Krankenversicherung bei einem in Spanien zugelassenen Versicherer. Eine Reiseversicherung erfüllt das nicht.'),
        ('Kann ich eine internationale Krankenversicherung verwenden?',
         'Ja, wenn sie die spanische Anforderung erfüllt, einschließlich der Zulassung des Versicherers in Spanien. Prüfen Sie den Nachweis vor dem Antrag anhand der aktuellen Vorgaben.'),
        ('Ist das portugiesische D8 gleich geregelt?',
         'Nein. Für die portugiesischen Aufenthaltsvisa verlangen die Konsulate eine Reiseversicherung mit Behandlungskosten und Rücktransport; die Krankenversicherung folgt, wenn Sie in Portugal leben.'),
    ],
    related=[('/de/internationale-krankenversicherung/digitale-nomaden/', 'Krankenversicherung für digitale Nomaden'),
             ('/de/krankenversicherung-portugal-spanien/', 'Krankenversicherung Portugal & Spanien'),
             ('/de/reiseversicherung/', 'Reiseversicherung online')],
),
# ---------------------------------------------------------------------------
dict(
    slug='versicherungsluecke-ankunft-aufenthaltstitel-portugal-spanien',
    title='Versichert ab dem ersten Tag: zwischen Ankunft und Aufenthaltstitel',
    meta_title='Versichert bis zum Aufenthaltstitel in Portugal oder Spanien',
    desc='Zwischen Ankunft in Portugal oder Spanien und dem Aufenthaltstitel liegen Wochen oder Monate, in denen manche Krankenversicherungen noch nicht abgeschlossen werden können. So bleiben Sie versichert.',
    sub='Visum, Flüge und Mietvertrag sind da. Was vielen Familien fehlt, ist eine Versicherung, die am Tag der Ankunft gilt und bis zur Aufenthaltskarte schützt.',
    crumb='Bis zum Aufenthaltstitel',
    hero_link=('/de/internationale-krankenversicherung/', 'Internationale Krankenversicherung'),
    sections='''<section class="lp-section">
  <h2>Woher die Lücke kommt</h2>
  <p>Inländische Krankenversicherungen in Portugal werden an Einwohner vergeben: Die Versicherer verlangen für jede versicherte Person, auch für Kinder, eine portugiesische Adresse und eine Steuernummer (NIF), und manche verlangen den Aufenthaltstitel selbst. Aufenthaltstitel brauchen Zeit. So entsteht ein Zeitraum — manchmal kurz, manchmal mehrere Monate —, in dem Sie im Land leben, aber noch nicht jede Police abschließen können. In Spanien ist es ähnlich: Inländische Tarife sind für Einwohner Spaniens geschrieben.</p>
</section>

<section class="lp-section">
  <h2>Drei Wege, die Lücke zu schließen</h2>
  <ol class="lp-steps">
    <li><strong>Die Reiseversicherung des Visums verlängern.</strong> Eine Reiseversicherung mit Behandlungskosten und Rücktransport, für einen ausreichend langen Zeitraum, schützt bei Notfällen während der Eingewöhnung. Routinebehandlungen deckt sie nicht. <a href="{tq}">Langzeit- und Auswanderungstarife online vergleichen</a>.</li>
    <li><strong>Internationale Krankenversicherung vor dem Umzug beginnen.</strong> Sie braucht weder Adresse noch Aufenthaltstitel im Land, sondern Geburtsdatum, Staatsangehörigkeit und künftiges Wohnsitzland. Die Gesundheitsprüfung vor Beginn braucht Zeit — planen Sie Wochen, nicht Tage.</li>
    <li><strong>Eine inländische Police abschließen, sobald der Versicherer sie annimmt.</strong> Inländische Tarife haben Wartezeiten für manche Leistungen; je früher der Beginn, desto früher enden sie. Welcher Versicherer vor und welcher erst nach dem Aufenthaltstitel annimmt, ist verschieden.</li>
  </ol>
</section>

<section class="lp-section">
  <h2>Die Reihenfolge, die wir empfehlen</h2>
  <p>Für die meisten Familien: Reiseversicherung ab dem Reisetag, parallel die Krankenversicherung (international oder inländisch) vorbereiten, und die Reiseversicherung behalten, bis die Krankenversicherung begonnen hat und die wichtigen Wartezeiten vorbei sind. Für Menschen über 65 oder mit Vorerkrankungen wird die Auswahl enger; die Entscheidung gehört vor den Umzug. Siehe <a href="/de/internationale-krankenversicherung/inlaendisch-oder-international/">inländisch oder international?</a> und <a href="/de/internationale-krankenversicherung/rentner-im-ausland/">Krankenversicherung für Rentner im Ausland</a>.</p>
</section>
''',
    faq=[
        ('Kann ich vor dem Aufenthaltstitel eine portugiesische Krankenversicherung abschließen?',
         'Manche Versicherer nehmen Anträge mit portugiesischer Adresse und NIF schon vor dem Aufenthaltstitel an, andere verlangen den Titel. Jede versicherte Person braucht eine NIF.'),
        ('Deckt mich die Reiseversicherung, bis der Aufenthaltstitel da ist?',
         'Sie deckt medizinische Notfälle und Rücktransport für den gebuchten Zeitraum. Sie ersetzt keine Krankenversicherung, wenn Sie im Land leben.'),
        ('Wie früh sollte ich die internationale Krankenversicherung beantragen?',
         'Mehrere Wochen vorher. Internationale Tarife werden vor Beginn geprüft, und Angebote gelten nur kurz vor dem Beginndatum.'),
    ],
    related=[('/de/internationale-krankenversicherung/', 'Internationale Krankenversicherung'),
             ('/de/reiseversicherung-visum-d7-d8-portugal/', 'Visum D7 und D8'),
             ('/de/reiseversicherung/', 'Reiseversicherung online')],
),
# ---------------------------------------------------------------------------
dict(
    slug='reiseversicherung-oder-internationale-krankenversicherung-vielreisende',
    title='Reiseversicherung oder internationale Krankenversicherung? Ein Leitfaden für Vielreisende',
    meta_title='Reiseversicherung oder internationale Krankenversicherung?',
    desc='Wer in Portugal oder Spanien lebt und viel reist, braucht vielleicht eine Reiseversicherung, eine internationale Krankenversicherung oder beides. Unterschiede, Überschneidungen und wie Sie nicht doppelt zahlen.',
    sub='Eine Familie, die in Lissabon oder Marbella lebt und ein Viertel des Jahres anderswo verbringt, hat oft zwei Policen, die sich teilweise überschneiden — und trotzdem eine Lücke. Die beiden Produkte beantworten verschiedene Fragen.',
    crumb='Reise- oder Krankenversicherung',
    hero_link=('/de/internationale-krankenversicherung/', 'Internationale Krankenversicherung'),
    sections='''<section class="lp-section">
  <h2>Zwei verschiedene Fragen</h2>
  <p>Die <strong>Reiseversicherung</strong> beantwortet: <em>Was passiert, wenn auf dieser Reise etwas schiefgeht?</em> Sie zahlt Notfallbehandlung im Ausland und den Rücktransport und kann Storno, Gepäck und Haftpflicht umfassen. Sie endet mit der Reise und ist nicht für geplante oder laufende Behandlungen gemacht.</p>
  <p>Die <strong>internationale Krankenversicherung</strong> beantwortet: <em>Wo und wie werde ich behandelt, wo immer ich bin?</em> Sie ist eine Jahres-Krankenversicherung für geplante und laufende Behandlungen im Wohnsitzland und, je nach gewähltem Geltungsbereich, in anderen Ländern — mit Evakuierung und Rücktransport in vielen Tarifen als Option.</p>
</section>

<section class="lp-section">
  <h2>Im Vergleich</h2>
  <ul class="lp-list">
    <li><strong>Geplante Behandlung</strong> (Operation, Krebsbehandlung, Facharzt): internationale Krankenversicherung im Rahmen des Tarifs. Reiseversicherung: nein.</li>
    <li><strong>Notfall im Ausland:</strong> beide, je nach Geltungsbereich des Krankentarifs.</li>
    <li><strong>Rücktransport und Assistance:</strong> Kern der Reiseversicherung; in vielen internationalen Tarifen optional oder enthalten.</li>
    <li><strong>Storno, Gepäck, Haftpflicht im Ausland:</strong> nur die Reiseversicherung.</li>
    <li><strong>Bestehende Erkrankungen:</strong> von jedem Versicherer in beiden Produkten anders geregelt — Bedingungen lesen.</li>
  </ul>
</section>

<section class="lp-section">
  <h2>Eine von beiden, oder beide</h2>
  <p><strong>Ist Ihre Krankenversicherung inländisch</strong> (portugiesisch oder spanisch), ist sie für Behandlungen am Wohnort gemacht. Für Auslandsreisen brauchen Sie eine Reiseversicherung — eine <a href="/de/jahresreiseversicherung-ferienhausbesitzer-portugal-spanien/">Jahresreiseversicherung</a>, wenn Sie mehrmals im Jahr reisen.</p>
  <p><strong>Ist Ihre Krankenversicherung international mit weltweitem Schutz</strong>, deckt sie Behandlungen im Ausland bereits. Eine Reiseversicherung kann trotzdem sinnvoll sein für Storno, Gepäck und Haftpflicht — ohne den medizinischen Teil doppelt zu bezahlen.</p>
  <p><strong>Schließt Ihr internationaler Tarif die USA aus</strong>, eine übliche Wahl für eine tragbare Prämie, braucht eine Reise dorthin eine Reiseversicherung mit hohen Behandlungskosten.</p>
  <p>Schicken Sie uns Ihre aktuelle Police und wie Ihr Jahr wirklich aussieht; wir antworten schriftlich, was gedeckt ist, wo Sie doppelt zahlen und wo eine Lücke bleibt. Für eine Reise jetzt: <a href="{tq}">Reiseversicherung online vergleichen</a>.</p>
</section>
''',
    faq=[
        ('Ersetzt eine internationale Krankenversicherung die Reiseversicherung?',
         'Für Behandlungen im Ausland kann sie das, im Rahmen ihres Geltungsbereichs. Storno, Gepäck und Haftpflicht im Ausland deckt sie nicht.'),
        ('Deckt die Reiseversicherung mich an meinem Wohnort?',
         'Nein. Die Reiseversicherung deckt Reisen außerhalb des Wohnsitzlandes.'),
        ('Lohnt es sich, die USA auszuschließen?',
         'Das senkt die Prämie. Reisen Sie dann in die USA, schließen Sie für jede Reise eine Reiseversicherung mit hohen Behandlungskosten ab.'),
    ],
    related=[('/de/internationale-krankenversicherung/', 'Internationale Krankenversicherung'),
             ('/de/krankenversicherung-portugal-spanien/', 'Krankenversicherung Portugal & Spanien'),
             ('/de/reiseversicherung/', 'Reiseversicherung online')],
),
# ---------------------------------------------------------------------------
dict(
    slug='jahresreiseversicherung-ferienhausbesitzer-portugal-spanien',
    title='Jahresreiseversicherung für Ferienhausbesitzer in Portugal und Spanien',
    meta_title='Jahresreiseversicherung für Ferienhausbesitzer',
    desc='Wer mehrmals im Jahr zur Villa in Portugal oder Spanien fliegt, zahlt mit Einzelreise-Policen mehr und riskiert Lücken. Was eine Jahresreiseversicherung deckt und welche drei Punkte Sie prüfen sollten.',
    sub='Eigentümer, die fünf- oder sechsmal im Jahr zwischen München, Zürich oder Hamburg und einem Haus an der Algarve, auf Mallorca oder an der Costa del Sol pendeln, kaufen oft für jede Reise eine Police — oder gar keine. Eine Jahrespolice ist meist einfacher und sicherer.',
    crumb='Jahresreiseversicherung',
    hero_link=('/de/ferienhausversicherung-spanien/', 'Ferienhaus in Spanien'),
    sections='''<section class="lp-section">
  <h2>Warum eine Jahrespolice</h2>
  <p>Eine Jahresreiseversicherung deckt alle Reisen in einem Zeitraum von zwölf Monaten, im Rahmen ihrer Bedingungen. Für Eigentümer, die mehrmals im Jahr ins Ferienhaus reisen, beseitigt sie das Risiko der einen, in Eile gebuchten Reise ohne Schutz — und ist oft günstiger als die Summe der Einzelpolicen.</p>
</section>

<section class="lp-section">
  <h2>Drei Punkte, die Sie prüfen sollten</h2>
  <ol class="lp-steps">
    <li><strong>Höchstdauer je Reise.</strong> Jahrestarife decken Reisen bis zu einer Höchstdauer, die je nach Tarif verschieden ist. Wird aus dem Frühjahr ein zehnwöchiger Aufenthalt, kann sie überschritten sein. Wählen Sie nach dem längsten Aufenthalt, nicht nach dem durchschnittlichen.</li>
    <li><strong>Behandlungskosten und Rücktransport.</strong> Der Sturz auf der Terrasse oder ein Herzereignis auf dem Golfplatz sind die Schäden, die zählen. Die Angebote auf unserer Seite sind zuerst nach Behandlungskosten sortiert.</li>
    <li><strong>Reiserücktritt.</strong> Ob er enthalten ist, bis zu welchem Betrag je Reise und aus welchen Gründen. Für Eigentümer sind die Flüge oft der kleinere Posten; Feste, Gäste und Personal rund um den Aufenthalt können mehr kosten.</li>
  </ol>
</section>

<section class="lp-section">
  <h2>Der Wohnsitz bestimmt die Police</h2>
  <p>Reiseversicherungen werden nach Wohnsitzland abgeschlossen. Leben Sie in Deutschland, Österreich oder der Schweiz und reisen zu Ihrem Haus in Spanien, schließen Sie als Einwohner dieses Landes ab. Sind Sie nach Portugal gezogen und besuchen die Familie, schließen Sie als Einwohner Portugals ab — und die Reise nach Hause ist eine Auslandsreise. Auf unserer Seite <a href="/de/reiseversicherung/">Reiseversicherung online</a> wählen Sie <strong>Jahresreiseschutz</strong>, geben Ihr Wohnsitzland an und vergleichen.</p>
</section>

<section class="lp-section">
  <h2>Das Haus ist eine eigene Police</h2>
  <p>Die Reiseversicherung schützt die Reisenden. Die Villa, der Hausrat, die leeren Monate und die Gäste sind Sache der Gebäude- und Hausratversicherung. Wenn Sie sie nicht geprüft haben, seit Sie weniger Zeit dort verbringen, lesen Sie <a href="/de/leerstand-ferienhaus-versicherung-portugal-spanien/">die Leerstandsklausel im Ferienhaus</a> und sehen Sie <a href="/de/ferienhausversicherung-spanien/">Ferienhausversicherung Spanien</a> und <a href="/de/ferienhausversicherung-portugal/">Ferienhausversicherung Portugal</a>.</p>
  <p><a href="{tq}">Jahrestarife online vergleichen</a>. Für das Haus selbst schreiben Sie uns Lage, Wiederaufbauwert und wie das Jahr aussieht; wir antworten schriftlich.</p>
</section>
''',
    faq=[
        ('Deckt eine Jahresreiseversicherung Reisen jeder Länge?',
         'Nein. Jeder Tarif legt eine Höchstdauer je Reise fest, die im Angebot steht. Wählen Sie einen Tarif, der Ihren längsten Aufenthalt deckt.'),
        ('Kann ich eine Jahresreiseversicherung abschließen, wenn ich in Portugal lebe?',
         'Wählen Sie Portugal als Wohnsitzland. Angezeigt werden die Angebote für Einwohner Portugals.'),
        ('Deckt die Reiseversicherung mein Haus?',
         'Nein. Gebäude und Hausrat werden über eine Wohngebäude- bzw. Hausratversicherung versichert.'),
    ],
    related=[('/de/reiseversicherung/', 'Reiseversicherung online'),
             ('/de/ferienhausversicherung-spanien/', 'Ferienhausversicherung Spanien'),
             ('/de/ferienhausversicherung-portugal/', 'Ferienhausversicherung Portugal')],
),
# ---------------------------------------------------------------------------
dict(
    slug='reiseversicherung-schmuck-uhren-grenzen',
    title='Deckt die Reiseversicherung Schmuck und Uhren?',
    meta_title='Deckt die Reiseversicherung Schmuck und Uhren?',
    desc='Die Gepäckversicherung einer Reisepolice hat Grenzen je Gegenstand und für Wertsachen, die weit unter dem Wert einer guten Uhr oder eines Schmuckstücks liegen. Was sie zahlt und wie Sie Wertsachen auf Reisen versichern.',
    sub='Eine Uhr für 40.000 € und ein Ring für das Doppelte reisen im Handgepäck in den Urlaub. Die Reisepolice, die mit den Flügen gekauft wurde, war nie dafür gedacht, sie zu bezahlen.',
    crumb='Schmuck und Uhren auf Reisen',
    hero_link=('/de/schmuck-uhren-versicherung-portugal-spanien/', 'Kunst, Schmuck und Uhren'),
    sections='''<section class="lp-section">
  <h2>Wofür die Gepäckversicherung gemacht ist</h2>
  <p>Der Gepäckteil einer Reisepolice zahlt für Kleidung, Toilettenartikel und persönliche Gegenstände, die auf der Reise verloren gehen, gestohlen oder beschädigt werden. Er hat eine Gesamtgrenze je Reisendem und darin niedrigere Grenzen für einzelne Gegenstände und für „Wertsachen" — die Kategorie, in der Schmuck und Uhren meist stehen. Die Grenzen sind je nach Tarif verschieden; auf unserer Seite <a href="/de/reiseversicherung/">Reiseversicherung online</a> zeigt jedes Angebot seine Gepäckgrenze vor dem Abschluss.</p>
</section>

<section class="lp-section">
  <h2>Die Grenzen, auf die es ankommt</h2>
  <ul class="lp-list">
    <li><strong>Grenze je Gegenstand:</strong> der Höchstbetrag für einen einzelnen Gegenstand, gleich was er gekostet hat.</li>
    <li><strong>Grenze für Wertsachen:</strong> eine gemeinsame Obergrenze für Schmuck, Uhren, Kameras und Ähnliches.</li>
    <li><strong>Bedingungen:</strong> Viele Tarife schließen unbeaufsichtigte Wertsachen, Wertsachen im Hotelzimmer außerhalb des Safes oder im aufgegebenen Gepäck aus.</li>
    <li><strong>Nachweise:</strong> Belege oder Wertgutachten und eine Polizeimeldung kurz nach einem Diebstahl.</li>
  </ul>
  <p>Für das normale Gepäck reichen diese Grenzen. Für eine Sammlung nicht — und das ist so gewollt, kein Mangel der Police.</p>
</section>

<section class="lp-section">
  <h2>Der richtige Schutz für Wertsachen</h2>
  <p>Wertvoller Schmuck und Uhren werden in einer Wertsachen- oder Allgefahrenpolice versichert, die die Stücke mit vereinbartem Wert aufführt und sie überall deckt, wo Sie sie tragen, zu Hause und im Ausland. In Portugal platzieren wir diesen Schutz zusammen mit einer Wohngebäude- und Hausratversicherung; in Spanien gibt es eine eigenständige Police für Schmuck und Uhren. Siehe <a href="/de/schmuck-uhren-versicherung-portugal-spanien/">Kunst, Schmuck und Uhren</a>.</p>
</section>

<section class="lp-section">
  <h2>Praktisch, auf Reisen</h2>
  <ol class="lp-steps">
    <li>Wertvolle Stücke bei sich oder im Safe behalten, nie im aufgegebenen Gepäck.</li>
    <li>Aktuelle Wertgutachten und Fotos aufbewahren, nicht im Gepäck.</li>
    <li>Prüfen, ob die Wertsachenpolice die Reiseländer und die Dauer im Ausland deckt.</li>
    <li>Die Reiseversicherung für das abschließen, was sie gut kann: Behandlungskosten, Rücktransport, Storno und normales Gepäck — <a href="{tq}">online vergleichen</a>.</li>
  </ol>
</section>
''',
    faq=[
        ('Zahlt die Reiseversicherung eine gestohlene Uhr?',
         'Bis zu den Grenzen des Tarifs je Gegenstand und für Wertsachen, und nur wenn die Bedingungen erfüllt waren. Bei einer wertvollen Uhr liegen diese Grenzen meist weit unter ihrem Wert.'),
        ('Deckt die Hausratversicherung Schmuck im Ausland?',
         'Nur wenn die Police weltweiten Schutz für Wertsachen enthält. Prüfen Sie Bedingungen, Grenzen und Sicherheitsauflagen.'),
        ('Kann man Schmuck allein versichern?',
         'In Spanien ja, mit einer eigenständigen Police. In Portugal platzieren wir Schmuck und Uhren zusammen mit einer Wohngebäude- und Hausratversicherung.'),
    ],
    related=[('/de/schmuck-uhren-versicherung-portugal-spanien/', 'Kunst, Schmuck und Uhren'),
             ('/de/reiseversicherung/', 'Reiseversicherung online'),
             ('/de/private-clients/', 'Private Clients')],
),
# ---------------------------------------------------------------------------
dict(
    slug='golfreise-versicherung-portugal-spanien',
    title='Golfreise nach Portugal oder Spanien: Was die Reiseversicherung abdecken sollte',
    meta_title='Golfreise Portugal & Spanien: welche Reiseversicherung?',
    desc='Golfreisen an die Algarve, die Costa del Sol oder nach Mallorca: Behandlungskosten, Storno vorausbezahlter Greenfees, Schläger auf dem Transport und Haftpflicht auf dem Platz. Was eine Reisepolice deckt.',
    sub='Die Algarve, die Costa del Sol und Mallorca empfangen das ganze Jahr Golfer. Die meisten Reisepolicen decken die Reise — das Golfspiel darin weniger gut, als viele annehmen.',
    crumb='Golfreise',
    hero_link=('/de/blog/golf-immobilien-portugal-spanien/', 'Golfimmobilien versichern'),
    sections='''<section class="lp-section">
  <h2>Zuerst die Behandlungskosten</h2>
  <p>Die teuersten Schäden auf Golfreisen sind nicht verlorene Bälle oder gebrochene Schläger, sondern Stürze, Hitzeerkrankungen und Herzereignisse, oft bei Spielern über sechzig. Behandlungskosten und Rücktransport sind die ersten beiden Punkte im Vergleich; die Angebote auf unserer Seite <a href="/de/reiseversicherung/">Reiseversicherung online</a> sind deshalb zuerst danach sortiert.</p>
</section>

<section class="lp-section">
  <h2>Schläger und Ausrüstung</h2>
  <p>Golfschläger gelten meist als Gepäck, mit einer Grenze je Gegenstand, die unter dem Wert eines kompletten Satzes liegen kann, und mit Bedingungen für Ausrüstung im Frachtraum oder im Auto. Manche Tarife bieten einen eigenen Schutz für Sportausrüstung und deren Miete, wenn die Schläger verspätet ankommen. Lesen Sie den Gepäckteil des gewählten Tarifs oder versichern Sie die Schläger über eine Police, die sie auch außer Haus deckt.</p>
</section>

<section class="lp-section">
  <h2>Vorausbezahlte Greenfees und Storno</h2>
  <p>Startzeiten, Golfpakete und Turniere werden oft im Voraus und ohne Erstattung bezahlt. Die Reiserücktrittsversicherung zahlt vorausbezahlte Kosten, wenn Sie aus einem in der Police genannten Grund nicht reisen können, bis zur versicherten Summe. Kreuzen Sie beim Vergleich den Reiserücktritt an und geben Sie den vollen Reisepreis einschließlich Golf an, damit die Grenze stimmt.</p>
</section>

<section class="lp-section">
  <h2>Haftpflicht auf dem Platz</h2>
  <p>Ein Ball, der einen Mitspieler verletzt oder ein Auto beschädigt, ist ein Haftpflichtschaden. Viele Reisepolicen enthalten eine Privathaftpflicht im Ausland; prüfen Sie Summe und Ausschlüsse. Wer in Spanien lebt, findet die dauerhafte Lösung in einer <a href="/de/privathaftpflicht-spanien/">Privathaftpflicht</a>. Und wer eine Golfimmobilie besitzt, liest <a href="/de/blog/golf-immobilien-portugal-spanien/">Golfimmobilien in Portugal und Spanien versichern</a>.</p>
  <p><a href="{tq}">Reiseversicherung für die Golfreise online vergleichen</a>, mit Reiserücktritt für die Greenfees. Für eine Gruppe oder ein Turnier schreiben Sie uns die Einzelheiten.</p>
</section>
''',
    faq=[
        ('Ist Golf in einer normalen Reiseversicherung gedeckt?',
         'Golf gehört meist nicht zu den Sportarten, die eine eigene Option brauchen; prüfen Sie trotzdem die Liste im Tarif. Am stärksten unterscheiden sich die Tarife bei Ausrüstung, vorausbezahlten Gebühren und Haftpflicht.'),
        ('Sind meine Schläger gedeckt, wenn die Fluggesellschaft sie verliert?',
         'Meist über das Gepäck, bis zu den Grenzen des Tarifs, in manchen Tarifen mit Verspätungsschutz. Melden Sie den Verlust am Flughafen und bewahren Sie die Meldung auf.'),
        ('Deckt der Reiserücktritt vorausbezahlte Greenfees?',
         'Ja, wenn sie im versicherten Reisepreis enthalten sind und Sie aus einem in der Police genannten Grund stornieren.'),
    ],
    related=[('/de/reiseversicherung/', 'Reiseversicherung online'),
             ('/de/blog/golf-immobilien-portugal-spanien/', 'Golfimmobilien versichern'),
             ('/de/privathaftpflicht-spanien/', 'Privathaftpflicht Spanien')],
),
# ---------------------------------------------------------------------------
dict(
    slug='gkv-ehic-ausland-portugal-spanien-reiseversicherung',
    title='GKV und EHIC im Urlaub in Portugal und Spanien: Was sie zahlen und was nicht',
    meta_title='GKV und EHIC in Portugal & Spanien: reicht das?',
    desc='Mit der EHIC auf der Gesundheitskarte werden gesetzlich Versicherte in Portugal und Spanien im staatlichen System behandelt — zu den dortigen Bedingungen. Privatkliniken und Rücktransport zahlt die GKV nicht.',
    sub='Portugal und Spanien gehören zu den beliebtesten Reisezielen deutscher Urlauber. Die Europäische Krankenversicherungskarte auf der Rückseite der Gesundheitskarte ist nützlich — und wird oft mit einer Reiseversicherung verwechselt.',
    crumb='GKV und EHIC im Urlaub',
    hero_link=('/de/krankenversicherung-portugal-spanien/', 'Krankenversicherung Portugal & Spanien'),
    sections='''<section class="lp-section">
  <h2>Was die EHIC leistet</h2>
  <p>Die Europäische Krankenversicherungskarte (EHIC), meist auf der Rückseite der elektronischen Gesundheitskarte, gibt gesetzlich Versicherten Zugang zu medizinisch notwendigen Behandlungen im <strong>staatlichen</strong> Gesundheitssystem Portugals und Spaniens — zu denselben Bedingungen wie für Einheimische. Wo diese einen Eigenanteil zahlen, zahlen Sie ihn auch.</p>
</section>

<section class="lp-section">
  <h2>Was sie nicht leistet</h2>
  <ul class="lp-list">
    <li><strong>Privatkliniken und Privatärzte:</strong> In Urlaubsregionen an der Algarve, an der Costa del Sol oder auf den Inseln werden Touristen oft zuerst dorthin gebracht. Die EHIC gilt dort nicht, und die Kosten werden von der Krankenkasse höchstens teilweise erstattet.</li>
    <li><strong>Rücktransport nach Deutschland:</strong> Ein medizinisch sinnvoller Rücktransport aus dem Ausland ist keine Leistung der gesetzlichen Krankenversicherung.</li>
    <li><strong>Alles außer Medizin:</strong> Reiserücktritt, Gepäck, Haftpflicht, zusätzliche Unterkunft.</li>
  </ul>
</section>

<section class="lp-section">
  <h2>Warum eine Reiseversicherung dazugehört</h2>
  <p>Eine Reiseversicherung mit Behandlungskosten und Rücktransport zahlt, was die EHIC nicht zahlt, und organisiert die Hilfe vor Ort. Auf unserer Seite <a href="/de/reiseversicherung/">Reiseversicherung online</a> wählen Sie Deutschland, Österreich oder die Schweiz als Wohnsitzland und vergleichen nach Behandlungskosten und Rücktransport. Privat Versicherte prüfen die Auslandsklausel ihres Tarifs: Dauer und Umfang des Schutzes im Ausland sind je nach Vertrag verschieden.</p>
</section>

<section class="lp-section">
  <h2>Ferienhausbesitzer und lange Aufenthalte</h2>
  <p>Wer ein Haus in Portugal oder Spanien besitzt, aber in Deutschland lebt, bleibt für die Reiseversicherung Einwohner Deutschlands; meist passt eine <a href="/de/jahresreiseversicherung-ferienhausbesitzer-portugal-spanien/">Jahresreiseversicherung</a>. Prüfen Sie die Höchstdauer je Reise gegen Ihren längsten Aufenthalt. Wer seinen Wohnsitz nach Portugal oder Spanien verlegt, braucht dort eine Krankenversicherung: siehe <a href="/de/krankenversicherung-portugal-spanien/">Krankenversicherung Portugal & Spanien</a>.</p>
  <p>EHIC einpacken und vor der Abreise <a href="{tq}">Reiseversicherung online vergleichen</a>.</p>
</section>
''',
    faq=[
        ('Gilt die EHIC in Portugal und Spanien?',
         'Ja. Sie gibt Zugang zu medizinisch notwendigen Behandlungen im staatlichen System, zu den dortigen Bedingungen.'),
        ('Zahlt die gesetzliche Krankenkasse den Rücktransport aus dem Urlaub?',
         'Nein. Der Rücktransport aus dem Ausland ist keine Leistung der GKV; er ist über eine Reiseversicherung abzusichern.'),
        ('Gilt die EHIC in Privatkliniken?',
         'Nein. Sie gilt nur im staatlichen Gesundheitssystem.'),
    ],
    related=[('/de/reiseversicherung/', 'Reiseversicherung online'),
             ('/de/jahresreiseversicherung-ferienhausbesitzer-portugal-spanien/', 'Jahresreiseversicherung'),
             ('/de/schengen-visum-reiseversicherung-portugal-spanien/', 'Schengen-Visum')],
),
]
