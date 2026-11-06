# Catalogue line pages that were missing in some languages.
# Each entry: slug, h1, intro, 4 points (title, text), 2 FAQ (q, a)

HEAD = {  # (what we look at, related cover)
 'en':('What we look at','Related cover'), 'pt':('O que analisamos','Outras proteções'), 'de':('Worauf wir achten','Weitere Deckungen'),
 'es':('Lo que analizamos','Otras coberturas'), 'nl':('Waar wij naar kijken','Andere dekkingen'), 'fr':('Ce que nous examinons','Autres garanties'),
 'it':('Che cosa analizziamo','Altre coperture'), 'pl':('Co analizujemy','Inne ubezpieczenia'), 'se':('Det vi tittar på','Andra skydd'),
 'dk':('Det, vi ser på','Andre dækninger'), 'il':('מה אנחנו בודקים','כיסויים נוספים'), 'zh':('我们关注的要点','其他保障'),
}
PROF_LABEL = {
 'en':('Professional liability','Cover for advice and treatment, from €250,000, on a claims-made basis.'),
 'pt':('Responsabilidade civil profissional','Para quem aconselha ou trata, a partir de 250.000 €, em regime de reclamação.'),
 'de':('Berufshaftpflicht','Für Beratung und Behandlung, ab 250.000 €, nach dem Anspruchserhebungsprinzip.'),
 'es':('Responsabilidad civil profesional','Para quien asesora o trata, desde 250.000 €, en régimen de reclamación.'),
 'nl':('Beroepsaansprakelijkheid','Voor advies en behandeling, vanaf € 250.000, op claims-made-basis.'),
 'fr':('Responsabilité civile professionnelle','Pour le conseil et les soins, à partir de 250 000 €, en base réclamation.'),
 'it':('RC professionale','Per chi consiglia o tratta, da 250.000 €, in regime claims made.'),
 'pl':('OC zawodowa','Dla doradców i terapeutów, od 250 000 €, w systemie claims made.'),
 'se':('Ansvarsförsäkring för yrkesverksamhet','För rådgivning och behandling, från 250 000 €, enligt claims made.'),
 'dk':('Erhvervsansvar','For rådgivning og behandling, fra 250.000 €, efter claims made-princippet.'),
 'il':('אחריות מקצועית','למי שמייעץ או מטפל, מ־250,000 €, על בסיס הגשת תביעה.'),
 'zh':('职业责任险','适用于提供咨询与治疗的专业人士，保额自 25 万欧元起，按索赔发生制承保。'),
}
FO_LABEL = {'nl':('Family offices','Fiduciaire aansprakelijkheid, cyber, fraude en ontvoering voor families en hun structuren.')}

P = {}  # P[(line, lang)] = dict(slug, h1, intro, points, faq)

# ---------------- professional liability ----------------
P[('prof','fr')] = dict(slug='fr/responsabilite-civile-professionnelle', h1='Responsabilité civile professionnelle au Portugal et en Espagne',
 intro="Pour les thérapeutes, praticiens du bien-être et professions libérales qui exercent au Portugal ou en Espagne : une erreur, un conseil ou un soin peut engager une responsabilité bien supérieure aux honoraires qui l'ont précédé.",
 points=[("Les métiers que nous assurons","Thérapies non conventionnelles, massage, yoga, pilates et tai-chi, mais aussi avocats, architectes et ingénieurs, conseillers financiers, médecins et dentistes, agents immobiliers."),
         ("L'activité déclarée","Le contrat couvre l'activité décrite. Une nouvelle technique, un nouveau lieu ou une activité en ligne doivent être déclarés, sinon la garantie peut ne pas jouer."),
         ("Base réclamation","La plupart des contrats couvrent les réclamations présentées pendant la période d'assurance, avec une date de reprise du passé. La continuité entre contrats compte."),
         ("Plafonds","Nous travaillons à partir de 250 000 € par sinistre ; le bon plafond dépend de l'activité, du chiffre d'affaires et des exigences des clients ou des ordres professionnels.")],
 faq=[("L'assurance RC professionnelle est-elle obligatoire ?","Pour certaines professions réglementées, oui, avec un minimum fixé par la loi ou par l'ordre professionnel. Pour d'autres, elle ne l'est pas, mais les clients, les cliniques et les plateformes la demandent de plus en plus."),
      ("Que faut-il pour un devis ?","Le nom complet, l'adresse, le numéro fiscal, l'activité exacte et le chiffre d'affaires annuel. Nous répondons par écrit en 48 à 72 heures ouvrées.")])
P[('prof','it')] = dict(slug='it/responsabilita-civile-professionale', h1='RC professionale in Portogallo e Spagna',
 intro="Per terapeuti, professionisti del benessere e liberi professionisti che lavorano in Portogallo o in Spagna: un errore, un consiglio o un trattamento può generare una responsabilità molto superiore all'onorario da cui è nato.",
 points=[("Le professioni che assicuriamo","Terapie non convenzionali, massaggio, yoga, pilates e tai chi, ma anche avvocati, architetti e ingegneri, consulenti finanziari, medici e dentisti, agenti immobiliari."),
         ("L'attività dichiarata","La polizza copre l'attività descritta. Una nuova tecnica, una nuova sede o un'attività online vanno dichiarate, altrimenti la copertura può non operare."),
         ("Regime claims made","La maggior parte delle polizze copre le richieste presentate durante il periodo assicurativo, con una data di retroattività. La continuità tra contratti conta."),
         ("Massimali","Lavoriamo da 250.000 € per sinistro; il massimale giusto dipende dall'attività, dal fatturato e da ciò che chiedono clienti e ordini professionali.")],
 faq=[("La RC professionale è obbligatoria?","Per alcune professioni regolamentate sì, con un minimo fissato dalla legge o dall'ordine. Per altre no, ma clienti, cliniche e piattaforme la chiedono sempre più spesso."),
      ("Che cosa serve per un preventivo?","Nome completo, indirizzo, codice fiscale portoghese o spagnolo, attività esatta e fatturato annuo. Rispondiamo per iscritto in 48–72 ore lavorative.")])
P[('prof','pl')] = dict(slug='pl/ubezpieczenie-oc-zawodowej', h1='Ubezpieczenie OC zawodowej w Portugalii i Hiszpanii',
 intro="Dla terapeutów, specjalistów wellness i wolnych zawodów pracujących w Portugalii lub Hiszpanii: błąd, porada czy zabieg mogą wywołać odpowiedzialność znacznie wyższą niż honorarium, od którego się zaczęło.",
 points=[("Zawody, które ubezpieczamy","Terapie niekonwencjonalne, masaż, joga, pilates i tai chi, a także prawnicy, architekci i inżynierowie, doradcy finansowi, lekarze i dentyści oraz pośrednicy nieruchomości."),
         ("Zgłoszona działalność","Polisa obejmuje opisaną działalność. Nową technikę, nowe miejsce pracy czy działalność online trzeba zgłosić, inaczej ochrona może nie zadziałać."),
         ("System claims made","Większość polis obejmuje roszczenia zgłoszone w okresie ubezpieczenia, z datą retroaktywną. Liczy się ciągłość między umowami."),
         ("Sumy gwarancyjne","Pracujemy od 250 000 € na szkodę; właściwa suma zależy od działalności, obrotu i wymagań klientów lub samorządu zawodowego.")],
 faq=[("Czy OC zawodowa jest obowiązkowa?","W niektórych zawodach regulowanych tak, z minimum określonym w przepisach lub przez samorząd zawodowy. W innych nie, ale klienci, kliniki i platformy coraz częściej jej wymagają."),
      ("Czego potrzeba do wyceny?","Imienia i nazwiska, adresu, numeru podatkowego, dokładnego opisu działalności i rocznego obrotu. Odpowiadamy na piśmie w ciągu 48–72 godzin roboczych.")])
P[('prof','se')] = dict(slug='se/ansvarsforsakring-yrkesverksamhet', h1='Ansvarsförsäkring för yrkesverksamhet i Portugal och Spanien',
 intro="För terapeuter, friskvårdsutövare och fria yrken som arbetar i Portugal eller Spanien: ett misstag, ett råd eller en behandling kan ge ett ansvar långt större än arvodet det började med.",
 points=[("Yrken vi försäkrar","Alternativa terapier, massage, yoga, pilates och tai chi, men också advokater, arkitekter och ingenjörer, finansiella rådgivare, läkare och tandläkare samt fastighetsmäklare."),
         ("Den anmälda verksamheten","Försäkringen gäller den verksamhet som beskrivs. En ny metod, en ny lokal eller verksamhet online måste anmälas, annars kan skyddet utebli."),
         ("Claims made","De flesta försäkringar gäller krav som framställs under försäkringstiden, med ett retroaktivt datum. Kontinuiteten mellan avtal spelar roll."),
         ("Försäkringsbelopp","Vi arbetar från 250 000 € per skada; rätt belopp beror på verksamheten, omsättningen och vad kunder och yrkesorganisationer kräver.")],
 faq=[("Är ansvarsförsäkring för yrkesverksamhet obligatorisk?","För vissa reglerade yrken ja, med ett minimum enligt lag eller yrkesorganisation. För andra inte, men kunder, kliniker och plattformar kräver den allt oftare."),
      ("Vad behövs för en offert?","Fullständigt namn, adress, skattenummer, exakt verksamhet och årsomsättning. Vi svarar skriftligt inom 48–72 arbetstimmar.")])
P[('prof','dk')] = dict(slug='dk/erhvervsansvarsforsikring', h1='Erhvervsansvarsforsikring i Portugal og Spanien',
 intro="For terapeuter, wellnessbehandlere og liberale erhverv, der arbejder i Portugal eller Spanien: en fejl, et råd eller en behandling kan udløse et ansvar langt større end det honorar, det startede med.",
 points=[("De erhverv, vi forsikrer","Alternative behandlingsformer, massage, yoga, pilates og tai chi, men også advokater, arkitekter og ingeniører, finansielle rådgivere, læger og tandlæger samt ejendomsmæglere."),
         ("Den oplyste aktivitet","Policen dækker den beskrevne aktivitet. En ny metode, et nyt sted eller aktivitet online skal oplyses, ellers kan dækningen bortfalde."),
         ("Claims made","De fleste policer dækker krav, der rejses i forsikringsperioden, med en tilbagevirkende dato. Kontinuiteten mellem aftaler har betydning."),
         ("Forsikringssummer","Vi arbejder fra 250.000 € pr. skade; den rette sum afhænger af aktiviteten, omsætningen og kravene fra kunder og brancheorganisationer.")],
 faq=[("Er erhvervsansvarsforsikring obligatorisk?","For visse regulerede erhverv ja, med et minimum fastsat ved lov eller af brancheorganisationen. For andre ikke, men kunder, klinikker og platforme kræver den oftere og oftere."),
      ("Hvad skal der til for et tilbud?","Fulde navn, adresse, skattenummer, den præcise aktivitet og årsomsætningen. Vi svarer skriftligt inden for 48–72 arbejdstimer.")])
P[('prof','il')] = dict(slug='il/professional-liability-insurance', h1='ביטוח אחריות מקצועית בפורטוגל ובספרד',
 intro="למטפלים, לאנשי מקצוע בתחום הבריאות המשלימה ולבעלי מקצועות חופשיים שעובדים בפורטוגל או בספרד: טעות, עצה או טיפול עלולים ליצור אחריות גבוהה בהרבה מהשכר שממנו התחילו.",
 points=[("המקצועות שאנחנו מבטחים","טיפולים משלימים, עיסוי, יוגה, פילאטיס וטאי צ'י, וגם עורכי דין, אדריכלים ומהנדסים, יועצים פיננסיים, רופאים ורופאי שיניים ומתווכי נדל\"ן."),
         ("הפעילות המוצהרת","הפוליסה מכסה את הפעילות שתוארה. שיטה חדשה, מקום עבודה חדש או פעילות מקוונת צריכים להיות מוצהרים, אחרת הכיסוי עלול לא לחול."),
         ("בסיס הגשת תביעה","רוב הפוליסות מכסות תביעות שמוגשות בתקופת הביטוח, עם תאריך רטרואקטיבי. הרציפות בין חוזים חשובה."),
         ("גבולות אחריות","אנחנו עובדים מ־250,000 € למקרה; הגבול הנכון תלוי בפעילות, במחזור ובדרישות של לקוחות ושל גופים מקצועיים.")],
 faq=[("האם ביטוח אחריות מקצועית הוא חובה?","בחלק מהמקצועות המוסדרים כן, עם מינימום שנקבע בחוק או על ידי הגוף המקצועי. באחרים לא, אבל לקוחות, מרפאות ופלטפורמות דורשים אותו יותר ויותר."),
      ("מה צריך כדי לקבל הצעה?","שם מלא, כתובת, מספר זיהוי לצורכי מס, תיאור מדויק של הפעילות והמחזור השנתי. אנחנו עונים בכתב תוך 48–72 שעות עבודה.")])
P[('prof','zh')] = dict(slug='zh/professional-liability-insurance', h1='葡萄牙与西班牙职业责任险',
 intro="面向在葡萄牙或西班牙执业的治疗师、身心健康从业者及自由职业者：一次失误、一条建议或一次治疗，可能带来远超服务费的赔偿责任。",
 points=[("我们承保的职业","非传统疗法、按摩、瑜伽、普拉提与太极，以及律师、建筑师与工程师、财务顾问、医生与牙医、房地产经纪人。"),
         ("申报的业务范围","保单只保障所描述的业务。新增疗法、新的执业地点或线上业务都需要申报，否则保障可能不适用。"),
         ("索赔发生制","多数保单承保在保险期间内提出的索赔，并设有追溯日期。前后保单之间的连续性很重要。"),
         ("保额","我们的起点为每次事故 25 万欧元；合适的保额取决于业务、营业额以及客户或行业协会的要求。")],
 faq=[("职业责任险是强制的吗？","部分受监管职业是强制的，最低保额由法律或行业协会规定；其他职业并非强制，但客户、诊所和平台越来越多地要求提供。"),
      ("报价需要哪些资料？","全名、地址、税号、具体业务以及年营业额。我们会在 48–72 个工作小时内书面答复。")])

# ---------------- family office ----------------
FO_EN = None
P[('fo','nl')] = dict(slug='nl/family-office-verzekering', h1='Verzekering voor family offices in Portugal en Spanje',
 intro="Wanneer het vermogen van een familie in een holding, een trust of een family office zit, worden de beslissingen van wie die structuur beheert een eigen risico — naast de huizen, de collecties en de mensen.",
 points=[("Bestuurders en de holding","De aansprakelijkheid van bestuurders van de familieholding (D&O) en van wie de structuur beheert, ook wanneer het om familieleden gaat."),
         ("Trustees en protectors","Fiduciaire aansprakelijkheid voor trustees, protectors en adviseurs die over het vermogen beslissen."),
         ("Fraude en cyber","Betalingsfraude, social engineering en cyberaanvallen gericht op de familie en haar medewerkers."),
         ("Ontvoering en afpersing","Crisisadviseurs, onderhandeling en bijkomende kosten, binnen wat de wet in elk land toestaat.")],
 faq=[("Moet u het totale vermogen kennen?","Nee. Wij vragen naar de structuren, de activiteiten en de risico's, niet naar het totale vermogen."),
      ("Wordt dit apart van de rest geregeld?","Het wordt samen met de huizen, de collecties en de gezondheid van de familie bekeken, zodat er geen gaten of dubbele dekkingen ontstaan.")])
P[('fo','pl')] = dict(slug='pl/ubezpieczenie-family-office', h1='Ubezpieczenie family office w Portugalii i Hiszpanii',
 intro="Gdy majątek rodziny znajduje się w holdingu, trustach lub family office, decyzje osób zarządzających tą strukturą stają się osobnym ryzykiem — obok domów, kolekcji i ludzi.",
 points=[("Zarząd i holding","Odpowiedzialność członków zarządu rodzinnego holdingu (D&O) i osób zarządzających strukturą, także gdy są członkami rodziny."),
         ("Trustees i protectors","Odpowiedzialność powiernicza trustees, protectors i doradców podejmujących decyzje o majątku."),
         ("Oszustwa i cyber","Oszustwa płatnicze, socjotechnika i cyberataki wymierzone w rodzinę i jej współpracowników."),
         ("Porwanie i wymuszenie","Doradcy kryzysowi, negocjacje i koszty towarzyszące, w granicach dopuszczonych przez prawo każdego kraju.")],
 faq=[("Czy muszą Państwo znać cały majątek?","Nie. Pytamy o struktury, działalność i ryzyka, a nie o łączną wartość majątku."),
      ("Czy to jest organizowane osobno?","Analizujemy to razem z domami, kolekcjami i zdrowiem rodziny, aby nie powstały luki ani podwójne ubezpieczenia.")])
P[('fo','se')] = dict(slug='se/family-office-forsakring', h1='Försäkring för family offices i Portugal och Spanien',
 intro="När familjens förmögenhet ligger i ett holdingbolag, en trust eller ett family office blir besluten hos dem som förvaltar strukturen en egen risk — vid sidan av husen, samlingarna och människorna.",
 points=[("Styrelsen och holdingbolaget","Ansvaret för styrelseledamöter i familjens holdingbolag (D&O) och för dem som förvaltar strukturen, även när de är familjemedlemmar."),
         ("Trustees och protectors","Förvaltaransvar för trustees, protectors och rådgivare som fattar beslut om förmögenheten."),
         ("Bedrägeri och cyber","Betalningsbedrägerier, social manipulation och cyberattacker riktade mot familjen och dess medarbetare."),
         ("Kidnappning och utpressning","Krisrådgivare, förhandling och tillhörande kostnader, inom vad lagen i varje land tillåter.")],
 faq=[("Behöver ni känna till hela förmögenheten?","Nej. Vi frågar om strukturerna, verksamheten och riskerna, inte om den totala förmögenheten."),
      ("Ordnas detta separat?","Det ses över tillsammans med husen, samlingarna och familjens hälsa, så att det inte uppstår luckor eller dubbla skydd.")])
P[('fo','dk')] = dict(slug='dk/family-office-forsikring', h1='Forsikring af family offices i Portugal og Spanien',
 intro="Når familiens formue ligger i et holdingselskab, en trust eller et family office, bliver beslutningerne hos dem, der forvalter strukturen, en selvstændig risiko — ved siden af husene, samlingerne og menneskene.",
 points=[("Bestyrelsen og holdingselskabet","Ansvaret for bestyrelsesmedlemmer i familiens holdingselskab (D&O) og for dem, der forvalter strukturen, også når de er familiemedlemmer."),
         ("Trustees og protectors","Forvalteransvar for trustees, protectors og rådgivere, der træffer beslutninger om formuen."),
         ("Svindel og cyber","Betalingssvindel, social manipulation og cyberangreb rettet mod familien og dens medarbejdere."),
         ("Kidnapning og afpresning","Kriserådgivere, forhandling og tilknyttede omkostninger, inden for hvad loven i hvert land tillader.")],
 faq=[("Skal I kende hele formuen?","Nej. Vi spørger til strukturerne, aktiviteterne og risiciene, ikke til den samlede formue."),
      ("Ordnes det separat?","Det gennemgås sammen med husene, samlingerne og familiens helbred, så der ikke opstår huller eller dobbeltdækninger.")])
P[('fo','il')] = dict(slug='il/family-office-insurance', h1='ביטוח למשרדי משפחה בפורטוגל ובספרד',
 intro="כשהון המשפחה מוחזק בחברת אחזקות, בנאמנות או במשרד משפחתי, ההחלטות של מי שמנהל את המבנה הופכות לסיכון בפני עצמו — לצד הבתים, האוספים והאנשים.",
 points=[("הדירקטוריון וחברת האחזקות","אחריות דירקטורים ונושאי משרה בחברת האחזקות המשפחתית (D&O) ושל מי שמנהל את המבנה, גם כשהם בני משפחה."),
         ("נאמנים ו־protectors","אחריות נאמנים, protectors ויועצים שמקבלים החלטות לגבי ההון."),
         ("הונאה וסייבר","הונאות תשלום, הנדסה חברתית ומתקפות סייבר שמכוונות למשפחה ולעובדיה."),
         ("חטיפה וסחיטה","יועצי משבר, משא ומתן והוצאות נלוות, במסגרת מה שהחוק בכל מדינה מתיר.")],
 faq=[("האם אתם צריכים לדעת את היקף ההון הכולל?","לא. אנחנו שואלים על המבנים, הפעילות והסיכונים, לא על ההון הכולל."),
      ("האם זה מסודר בנפרד?","זה נבדק יחד עם הבתים, האוספים והבריאות של המשפחה, כדי שלא יהיו פערים או כיסויים כפולים.")])
P[('fo','zh')] = dict(slug='zh/family-office-insurance', h1='葡萄牙与西班牙家族办公室保险',
 intro="当家族财富放在控股公司、信托或家族办公室中，管理这一架构的人所做的决定本身就成为一项风险——与住宅、收藏和家人并列。",
 points=[("董事会与控股公司","家族控股公司董事及高管责任（D&O），以及管理架构者的责任，即使他们是家族成员。"),
         ("受托人与保护人","受托人、保护人及参与财富决策的顾问的受托责任。"),
         ("欺诈与网络风险","针对家族及其员工的支付欺诈、社会工程攻击与网络攻击。"),
         ("绑架与勒索","危机顾问、谈判及相关费用，以各国法律允许的范围为限。")],
 faq=[("你们需要了解家族的全部资产吗？","不需要。我们询问的是架构、业务与风险，而不是资产总额。"),
      ("这部分是单独安排的吗？","我们会与住宅、收藏和家人的医疗保障一并审视，避免出现保障缺口或重复投保。")])

# ---------------- homes in Spain ----------------
P[('homes_es','pt')] = dict(slug='seguros/habitacao-espanha', h1='Seguro de residências de elevado valor em Espanha',
 intro="Para moradias, apartamentos e casas de férias em Espanha, colocamos a proteção junto de seguradoras especializadas em clientes particulares. A apólice parte do custo de reconstrução da casa, com o recheio, a arte e os objetos de valor bem declarados — e lê-se em conjunto com o Consorcio.",
 points=[("Custo de reconstrução, não valor de mercado","O capital do edifício deve refletir o custo de reconstruir a casa, incluindo piscina, muros e anexos — não o preço de compra nem o valor de mercado."),
         ("O Consorcio de Compensación de Seguros","Em Espanha, os riscos extraordinários — inundações, sismos e tempestades acima de certa intensidade — são cobertos pelo Consorcio. A apólice privada cobre o resto."),
         ("Casas de férias e arrendamento","Os períodos sem ninguém em casa e o arrendamento turístico têm de ser declarados; em várias regiões o arrendamento exige licença."),
         ("Objetos de valor","Joias, relógios e coleções são especificados em valor acordado. Em Espanha podem também ser seguros numa apólice própria, separada da casa.")],
 faq=[("Trabalham em Espanha?","Sim. A Adler & Rochefort está registada na ASF (n.º 425591790/3) e trabalha em Espanha ao abrigo da livre prestação de serviços na União Europeia."),
      ("Existe um valor mínimo?","Cada seguradora especializada fixa o seu próprio patamar de entrada, em função do custo de reconstrução, do recheio e dos objetos de valor. Abaixo disso, dizemos-lhe por escrito se uma boa apólice de mercado é a melhor resposta.")])
P[('homes_es','it')] = dict(slug='it/assicurazione-casa-alto-valore-spagna', h1='Assicurazione casa di pregio in Spagna',
 intro="Per ville, appartamenti e case vacanza in Spagna collochiamo la copertura presso assicuratori specializzati nella clientela privata. La polizza parte dal costo di ricostruzione della casa, con contenuto, arte e oggetti di valore dichiarati correttamente — e va letta insieme al Consorcio.",
 points=[("Costo di ricostruzione, non valore di mercato","La somma per il fabbricato deve riflettere il costo di ricostruire la casa, piscina, muri e dépendance inclusi — non il prezzo d'acquisto."),
         ("Il Consorcio de Compensación de Seguros","In Spagna i rischi straordinari — alluvioni, terremoti e tempeste oltre una certa intensità — sono coperti dal Consorcio. La polizza privata copre il resto."),
         ("Case vacanza e affitti","I periodi di inabitazione e l'affitto turistico vanno dichiarati; in diverse regioni l'affitto richiede una licenza."),
         ("Oggetti di valore","Gioielli, orologi e collezioni sono elencati a valore concordato. In Spagna possono anche essere assicurati con una polizza propria, separata dalla casa.")],
 faq=[("Lavorate in Spagna?","Sì. Adler & Rochefort è registrato presso l'ASF (n. 425591790/3) e opera in Spagna in libera prestazione di servizi nell'Unione europea."),
      ("Esiste un valore minimo?","Ogni assicuratore specializzato fissa la propria soglia di accesso, in base al costo di ricostruzione, al contenuto e agli oggetti di valore. Al di sotto, Le diciamo per iscritto se una buona polizza standard è la risposta migliore.")])
P[('homes_es','fr')] = dict(slug='fr/assurance-residence-grande-valeur-espagne', h1='Assurance des résidences de grande valeur en Espagne',
 intro="Pour les villas, appartements et maisons de vacances en Espagne, nous plaçons la protection auprès d’assureurs spécialisés dans la clientèle privée. Le contrat part du coût de reconstruction de la maison, avec le mobilier, les œuvres et les objets de valeur correctement déclarés — et se lit avec le Consorcio.",
 points=[("Coût de reconstruction, pas valeur de marché","Le capital bâtiment doit refléter le coût de reconstruction de la maison, piscine, murs et dépendances compris — pas le prix d'achat."),
         ("Le Consorcio de Compensación de Seguros","En Espagne, les risques extraordinaires — inondations, séismes et tempêtes au-delà d'une certaine intensité — relèvent du Consorcio. Le contrat privé couvre le reste."),
         ("Maisons de vacances et location","Les périodes d'inoccupation et la location touristique doivent être déclarées ; dans plusieurs régions, la location exige une licence."),
         ("Objets de valeur","Bijoux, montres et collections sont déclarés en valeur agréée. En Espagne, ils peuvent aussi être assurés par un contrat distinct de la maison.")],
 faq=[("Intervenez-vous en Espagne ?","Oui. Adler & Rochefort est enregistré auprès de l'ASF (n° 425591790/3) et intervient en Espagne en libre prestation de services au sein de l'Union européenne."),
      ("Existe-t-il une valeur minimale ?","Chaque assureur spécialisé fixe son propre seuil d’entrée, selon le coût de reconstruction, le mobilier et les objets de valeur. En dessous, nous vous disons par écrit si un bon contrat standard est la meilleure réponse.")])

# ---------------- homes in Portugal (FR) ----------------
P[('homes_pt','fr')] = dict(slug='fr/assurance-residence-grande-valeur-portugal', h1='Assurance des résidences de grande valeur au Portugal',
 intro="Pour les villas, quintas et appartements de prestige au Portugal, nous plaçons la protection auprès d’assureurs spécialisés dans la clientèle privée. Le point de départ est toujours le coût de reconstruction, pas le prix d'achat.",
 points=[("Coût de reconstruction","Le capital bâtiment doit refléter le coût de reconstruction, murs, piscine et dépendances compris. Un capital trop bas expose à la règle proportionnelle."),
         ("Séisme","Au Portugal, la garantie séisme n'est pas automatique : elle s'ajoute au contrat, en général avec sa propre franchise."),
         ("Appartements en copropriété","La copropriété assure la structure et les parties communes ; l'intérieur, le mobilier, les œuvres et votre responsabilité d'occupant demandent un contrat à part."),
         ("Maisons inoccupées","Une résidence secondaire vide une partie de l'année doit avoir des conditions d'inoccupation qui correspondent à son usage réel.")],
 faq=[("Existe-t-il une valeur minimale ?","Chaque assureur spécialisé fixe son propre seuil d’entrée, selon le coût de reconstruction, le mobilier et les objets de valeur. En dessous, nous vous disons par écrit si un bon contrat standard est la meilleure réponse."),
      ("Dans quelle langue travaillez-vous ?","Notre langue de travail est l'anglais : propositions, explication des conditions, correspondance et sinistres se font en anglais, par écrit.")])

# ---------------- art, jewellery & watches (FR) ----------------
P[('art','fr')] = dict(slug='fr/assurance-art-bijoux-montres', h1='Assurance des œuvres d\'art, bijoux et montres au Portugal et en Espagne',
 intro="Une collection ou quelques pièces de grande valeur ne se protègent pas avec la garantie mobilier d'un contrat habitation standard. Elles se déclarent une à une, en valeur agréée, avec les conditions écrites avant tout sinistre.",
 points=[("Valeur agréée","Chaque pièce déclarée l'est pour une valeur convenue sur la base d'une estimation récente ; c'est ce montant qui est payé en cas de perte totale."),
         ("Estimations à jour","Au-delà d'un certain seuil, l'assureur demande une estimation récente ou une preuve équivalente. Les valeurs doivent suivre le marché."),
         ("Sécurité","Coffre-fort, alarme et télésurveillance peuvent être exigés selon les valeurs ; ces conditions sont inscrites au contrat."),
         ("Portugal et Espagne","Au Portugal, les bijoux et montres s'assurent avec le contrat habitation ; en Espagne, ils peuvent aussi l'être par un contrat distinct.")],
 faq=[("Mes bijoux sont-ils couverts en voyage ?","Cela dépend du contrat : certaines garanties suivent les pièces hors du domicile et à l'étranger, dans les limites indiquées aux conditions particulières."),
      ("Que faut-il pour une proposition ?","La liste des pièces, les estimations disponibles avec leurs dates, l'adresse et vos contrats actuels.")])

# ---------------- classic & high-value cars (FR) ----------------
P[('cars','fr')] = dict(slug='fr/assurance-voitures-collection-prestige', h1='Assurance des voitures de collection et de prestige au Portugal et en Espagne',
 intro="Une voiture de collection ou de grande valeur ne s'assure pas comme une voiture de tous les jours. Ce qui compte, c'est la valeur convenue, l'usage réel et la manière dont la voiture est gardée.",
 points=[("Valeur agréée","Le véhicule est assuré pour une valeur convenue sur la base d'une estimation, et non selon une cote de marché."),
         ("Responsabilité civile","La responsabilité civile automobile est obligatoire pour chaque véhicule et peut faire l'objet d'un contrat distinct de la garantie dommages."),
         ("Usage et kilométrage","Les contrats de collection prévoient souvent un usage limité et un kilométrage annuel maximal ; l'usage réel doit être déclaré."),
         ("Immatriculation et garde","Les conditions d'immatriculation et le lieu de garde de la voiture font partie de l'acceptation du risque.")],
 faq=[("Puis-je assurer plusieurs voitures sur un même contrat ?","Souvent oui, chacune avec sa propre valeur agréée, selon l'assureur et la collection."),
      ("Que faut-il pour une proposition ?","Les documents du véhicule, une estimation récente, le lieu de garde et l'usage prévu.")])

# ---------------- family liability ----------------
P[('liability','pt')] = dict(slug='seguros/responsabilidade-civil-familiar', h1='Responsabilidade civil familiar para patrimónios elevados',
 intro="Quanto maior o património, maior a exposição: um convidado que se magoa na piscina, um acidente causado por um filho, um dano provocado pelo pessoal doméstico. A responsabilidade civil familiar tem de acompanhar o património, não o mínimo de uma apólice-tipo.",
 points=[("Capitais à medida","Os capitais começam muitas vezes nos vários milhões de euros e definem-se em função do património e da forma como a família vive."),
         ("Quem fica coberto","O agregado familiar, incluindo filhos a estudar fora, e quem trabalha na casa — dentro dos limites de cada apólice."),
         ("Todas as casas","A residência principal, as segundas habitações em Portugal e Espanha, a piscina e os eventos em casa."),
         ("Custos de defesa","A forma como os custos de defesa são tratados — dentro ou para além do capital — varia de seguradora para seguradora e fica escrita na apólice.")],
 faq=[("Está incluída no seguro de casa?","Muitas vezes existe uma parcela na apólice de habitação, com capitais baixos. Para patrimónios elevados, faz sentido um capital próprio e adequado."),
      ("Cobre fora de Portugal?","Depende da apólice: algumas cobrem a família em todo o mundo, outras só em determinados países. É um dos pontos que confirmamos por escrito.")])
P[('liability','fr')] = dict(slug='fr/responsabilite-civile-familiale', h1='Responsabilité civile familiale pour les patrimoines importants',
 intro="Plus le patrimoine est important, plus l'exposition l'est aussi : un invité qui se blesse à la piscine, un accident causé par un enfant, un dommage causé par le personnel de maison. La responsabilité civile familiale doit suivre le patrimoine, pas le minimum d'un contrat standard.",
 points=[("Plafonds à la mesure","Les plafonds commencent souvent à plusieurs millions d'euros et se fixent selon le patrimoine et le mode de vie de la famille."),
         ("Qui est couvert","Le foyer, y compris les enfants qui étudient ailleurs, et les personnes qui travaillent à la maison — dans les limites de chaque contrat."),
         ("Toutes les maisons","La résidence principale, les résidences secondaires au Portugal et en Espagne, la piscine et les réceptions à la maison."),
         ("Frais de défense","Le traitement des frais de défense — à l'intérieur ou en plus du plafond — varie d'un assureur à l'autre et figure au contrat.")],
 faq=[("Est-elle incluse dans l'assurance habitation ?","Souvent, une part existe dans le contrat habitation, avec des plafonds bas. Pour un patrimoine important, un plafond propre et adapté s'impose."),
      ("Couvre-t-elle hors du Portugal ?","Selon le contrat : certains couvrent la famille dans le monde entier, d'autres dans certains pays seulement. C'est l'un des points que nous confirmons par écrit.")])
