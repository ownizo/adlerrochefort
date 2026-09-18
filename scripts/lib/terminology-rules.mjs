/**
 * Exact-context terminology rules. EN/DE describe Ownizo, Unipessoal Lda.
 * as an insurance intermediary / non-tied insurance agent, never a broker.
 * EN_BROKER is retained as an import-compatible name for correction rules.
 * Generic legal definitions, third-party quotations and real-estate agents
 * must not be rewritten. PT/FR/NL rules remain outside this implementation.
 */

/**
 * public/alterarmediador/ quotes the category printed on the ASF certificate
 * and is left to be edited by hand. data/compliance-audit.json is the report a
 * pass of this kind writes; rewriting it would make the audit assert something
 * it never observed. terminology-rules.mjs is the rule table itself — sweeping
 * it would rewrite the left-hand side of every rule into its own right-hand
 * side and silently disarm the pass.
 *
 * The last two entries exclude the passes themselves for the same reason: the
 * /terminology\.mjs$/ pattern covers both terminology.mjs and
 * phase2-terminology.mjs. Their docblocks quote the wording being corrected in
 * order to explain the correction, and sweeping that prose would turn the
 * explanation into a description of the state it was written to end.
 */
export const EXCLUDE = [
  /alterarmediador/,
  /compliance-audit\.json$/,
  /terminology-rules\.mjs$/,
  /terminology\.mjs$/,
  /block0-compliance\.mjs$/,
];

/**
 * Regions that must survive byte for byte: published URL fragments.
 *
 * id="independent" is the one exception, excluded from the parking below. It is
 * the /en/about/ section heading, nothing links to it (no href="#independent"
 * exists anywhere in the tree), and Change 2 renames it to
 * id="agency-agreements" explicitly.
 */
export const PROTECTED = [
  /\sid="(?!independent")[^"]*(?:brok|independen)[^"]*"/gi,
  /\shref="#[^"]*(?:brok|independen)[^"]*"/gi,
];

// ---------------------------------------------------------------------------
// Change 1 — correct English self-description
// ---------------------------------------------------------------------------
// Only phrases in which "intermediary" refers to Adler & Rochefort. Generic
// references to the profession and quoted definitions are absent on purpose.
export const EN_BROKER = [
  ["Insurance Intermediaryage", "Insurance Agency"],
  [
    "insurance brokerage",
    "insurance agency"
  ],
  [
    "Insurance Brokerage",
    "Insurance Agency"
  ],
  [
    "English explanation via broker",
    "English explanation via an intermediary"
  ],
  [
    "Independent insurance broker",
    "Independent insurance intermediary"
  ],
  [
    "independent insurance broker",
    "independent insurance intermediary"
  ],
  [
    "Use a broker</strong>",
    "Use an independent intermediary</strong>"
  ],
  [
    "a broker registered with the ASF works for you",
    "an intermediary registered with the ASF works for you"
  ],
  [
    "a broker registered with the ASF can access",
    "an intermediary registered with the ASF can access"
  ],
  [
    "an independent local broker",
    "an independent local intermediary"
  ],
  [
    "An independent broker",
    "An independent intermediary"
  ],
  [
    "an independent broker",
    "an independent intermediary"
  ],
  [
    "ASF-registered, English-speaking insurance broker",
    "ASF-registered, English-speaking insurance intermediary"
  ],
  [
    "English-speaking, ASF-registered insurance broker",
    "English-speaking, ASF-registered insurance intermediary"
  ],
  [
    "ASF-registered Portuguese insurance broker",
    "ASF-registered Portuguese insurance intermediary"
  ],
  [
    "Insurance broker registered with the ASF",
    "Insurance intermediary registered with the ASF"
  ],
  [
    "insurance broker registered with the ASF",
    "insurance intermediary registered with the ASF"
  ],
  [
    "registered insurance broker, authorised by the ASF",
    "registered insurance intermediary, authorised by the ASF"
  ],
  [
    "ASF-registered insurance broker",
    "ASF-registered insurance intermediary"
  ],
  [
    "ASF-registered broker",
    "ASF-registered intermediary"
  ],
  [
    "ASF-authorised insurance broker",
    "ASF-authorised insurance intermediary"
  ],
  [
    "ASF-authorised broker",
    "ASF-authorised intermediary"
  ],
  [
    "ASF-registered independent broker",
    "ASF-registered independent mediator"
  ],
  [
    "ASF-registered broker",
    "ASF-registered mediator"
  ],
  [
    "insurance broker authorised by the ASF analyses",
    "insurance intermediary authorised by the ASF analyses"
  ],
  [
    "Registered broker",
    "Registered intermediary"
  ],
  [
    "Registered insurance broker, supervised by the ASF",
    "Registered insurance intermediary, supervised by the ASF"
  ],
  [
    "registered insurance broker advising international residents",
    "registered insurance intermediary advising international residents"
  ],
  [
    "We are an insurance broker registered and authorised by the Portuguese Insurance and Pension Funds Supervisory Authority",
    "We are an insurance intermediary registered and authorised by the Portuguese Insurance and Pension Funds Supervisory Authority"
  ],
  [
    "acts as an insurance broker registered with the Portuguese Insurance and Pension Funds Supervisory Authority",
    "acts as an insurance intermediary registered with the Portuguese Insurance and Pension Funds Supervisory Authority"
  ],
  [
    "an insurance broker registered with the Portuguese authority (ASF)",
    "an insurance intermediary registered with the Portuguese authority (ASF)"
  ],
  [
    "Ownizo, Unipessoal Lda., ASF-registered insurance broker n.º 425591790/3",
    "Ownizo, Unipessoal Lda., an insurance intermediary registered with Portugal's ASF under no. 425591790/3"
  ],
  [
    "A technology-driven insurance broker is not a technology company",
    "A technology-driven insurance intermediary is not a technology company"
  ],
  [
    "looking for a broker who truly understands",
    "looking for an insurance intermediary who truly understands"
  ],
  [
    "ASF-registered%20broker",
    "ASF-registered%20intermediary"
  ],
  [
    "English-speaking Insurance Broker",
    "English-speaking Insurance Intermediary"
  ],
  [
    "English-speaking insurance broker",
    "English-speaking insurance intermediary"
  ],
  [
    "English-speaking broker",
    "English-speaking intermediary"
  ],
  [
    "Expat Insurance Broker",
    "Expat Insurance Intermediary"
  ],
  [
    "Insurance Brokers in the Algarve",
    "Insurance Intermediaries in the Algarve"
  ],
  [
    "insurance broker in the Algarve",
    "insurance intermediary in the Algarve"
  ],
  [
    "insurance broker in Lagos",
    "insurance intermediary in Lagos"
  ],
  [
    "insurance broker in Portugal for expats",
    "insurance intermediary in Portugal for expats"
  ],
  [
    "a broker like Adler &amp; Rochefort",
    "an insurance intermediary like Adler &amp; Rochefort"
  ],
  [
    "broker like Adler &amp; Rochefort",
    "insurance intermediary like Adler &amp; Rochefort"
  ],
  [
    "an Algarve broker",
    "an Algarve intermediary"
  ],
  [
    "a Portuguese broker",
    "a Portuguese intermediary"
  ],
  [
    "Our registration as an insurance broker in Portugal",
    "Our registration as an insurance intermediary in Portugal"
  ],
  [
    "brokers",
    "independent intermediaries"
  ],
  [
    "one of our brokers",
    "one of our intermediaries"
  ],
  [
    "One of our brokers",
    "One of our intermediaries"
  ],
  [
    "our experience as specialist brokers",
    "our experience as specialist intermediaries"
  ],
  [
    "we remain your broker",
    "we remain your intermediary"
  ],
  [
    "this broker does not advise on",
    "this intermediary does not advise on"
  ],
  [
    "apart from other brokers",
    "apart from other intermediaries"
  ],
  [
    "Talk to a broker now on WhatsApp.",
    "Talk to an insurance intermediary now on WhatsApp."
  ],
  [
    "Talk it through with an English-speaking broker on WhatsApp.",
    "Talk it through with an English-speaking insurance intermediary on WhatsApp."
  ],
  [
    "Having a specialised broker managing this process",
    "Having a specialised insurance intermediary managing this process"
  ],
  [
    "A specialised broker is not a cost",
    "A specialised intermediary is not a cost"
  ],
  [
    "A broker who works for you.",
    "An intermediary who works for you."
  ],
  [
    "Why using a broker delivers better results",
    "Why using an intermediary delivers better results"
  ],
  [
    "How a broker helps with a difficult history",
    "How an intermediary helps with a difficult history"
  ],
  [
    "The role of a specialised broker",
    "The role of a specialised intermediary"
  ],
  [
    "The role of the specialist broker in real property",
    "The role of the specialist intermediary in real property"
  ],
  [
    "the role of an independent broker",
    "the role of an independent intermediary"
  ],
  [
    "The role of the insurance broker in TVDE activity",
    "The role of the insurance intermediary in TVDE activity"
  ],
  [
    "insurance broker portugal, AI insurance broker",
    "insurance intermediary portugal, AI insurance intermediary"
  ],
  [
    "tourism insurance broker",
    "tourism insurance intermediary"
  ],
  [
    "Lagos expat insurance broker",
    "Lagos expat insurance intermediary"
  ],
  [
    "insurance broker technology, adler rochefort",
    "insurance intermediary technology, adler rochefort"
  ],
  [
    "english speaking insurance broker portugal",
    "english speaking insurance intermediary portugal"
  ],
  [
    "English speaking insurance broker portugal",
    "English speaking insurance intermediary portugal"
  ],
  [
    "insurance broker Portugal, expat insurance Portugal",
    "insurance intermediary Portugal, expat insurance Portugal"
  ],
  [
    "Unipessoal Lda., insurance broker registered with the Autoridade",
    "Unipessoal Lda., insurance intermediary registered with the Autoridade"
  ],
  [
    "Unipessoal Lda., an insurance broker registered with the Autoridade",
    "Unipessoal Lda., an insurance intermediary registered with the Autoridade"
  ],
  [
    "ASF-registered insurance broker",
    "ASF-registered insurance agent"
  ],
  [
    "ASF-registered broker",
    "ASF-registered insurance agent"
  ],
  [
    "insurance intermediaryage",
    "insurance agency"
  ],
  [
    "English explanation vian intermediary",
    "English explanation via an intermediary"
  ]
];

// ---------------------------------------------------------------------------
// Change 2 — "independent" as a standalone label
// ---------------------------------------------------------------------------
// Historical inputs remain exact matches; all EN outputs use agent or
// intermediary. Both historical and current inputs are handled idempotently.
export const EN_INDEPENDENCE = [
  [
    "Independent — we compare Allianz, Médis, APRIL &amp; AdvanceCare",
    "Not tied to one insurer — Allianz, Médis, APRIL &amp; AdvanceCare"
  ],
  [
    "Independent &mdash; we compare Allianz, M&eacute;dis, APRIL &amp; AdvanceCare",
    "Not tied to one insurer &mdash; Allianz, M&eacute;dis, APRIL &amp; AdvanceCare"
  ],
  [
    "Independent — we compare Zurich, Allianz, Hiscox &amp; Liberty Mutual",
    "Not tied to one insurer — Zurich, Allianz, Hiscox &amp; Liberty Mutual"
  ],
  [
    "Independent &mdash; we compare Zurich, Allianz, Hiscox &amp; Liberty Mutual",
    "Not tied to one insurer &mdash; Zurich, Allianz, Hiscox &amp; Liberty Mutual"
  ],
  [
    "<span class=\"ar-trust-item\">Independent — we compare the market</span>",
    "<span class=\"ar-trust-item\">Not tied to a single insurer</span>"
  ],
  [
    "Independent and ASF-registered.",
    "Not tied to a single insurer, and ASF-registered."
  ],
  [
    "        <div class=\"hero-stat-num\">100%</div>\n        <div class=\"hero-stat-label\">Independent · we compare the market</div>",
    "        <div class=\"hero-stat-num\">7</div>\n        <div class=\"hero-stat-label\">Insurers · agency agreements in place</div>"
  ],
  [
    "<div class=\"why-pillar-title\">Independent — we compare the market</div>",
    "<div class=\"why-pillar-title\">Not tied to a single insurer</div>"
  ],
  [
    "<!-- 5. INDEPENDENT BY DESIGN -->",
    "<!-- 5. AGENCY AGREEMENTS -->"
  ],
  [
    "aria-labelledby=\"independent\"",
    "aria-labelledby=\"agency-agreements\""
  ],
  [
    "<h2 id=\"independent\">Independent <em>by design</em></h2>",
    "<h2 id=\"agency-agreements\">Agency agreements, <em>not a single insurer</em></h2>"
  ],
  [
    "an independent, ASF-registered broker",
    "an ASF-registered intermediary"
  ],
  [
    "Independent, ASF-registered insurance broker",
    "ASF-registered insurance intermediary"
  ],
  [
    "independent, ASF-registered insurance broker",
    "ASF-registered insurance intermediary"
  ],
  [
    "independent, ASF-registered broker",
    "ASF-registered intermediary"
  ],
  [
    "ASF-registered independent insurance broker",
    "ASF-registered insurance intermediary"
  ],
  [
    "ASF-registered independent broker",
    "ASF-registered intermediary"
  ],
  [
    "independent ASF-registered insurance broker",
    "ASF-registered insurance intermediary"
  ],
  [
    "We're an independent insurance broker registered with the ASF",
    "We're an insurance intermediary registered with the ASF"
  ],
  [
    "an independent insurance broker registered with the ASF",
    "an insurance intermediary registered with the ASF"
  ],
  [
    "<strong>independent insurance broker</strong>",
    "<strong>insurance intermediary</strong>"
  ],
  [
    "Independent insurance broker, free quote in 24h.",
    "ASF-registered insurance intermediary, free quote in 24h."
  ],
  [
    "Independent insurance broker, free quote.",
    "ASF-registered insurance intermediary, free quote."
  ],
  [
    "Independent insurance broker, all in English.",
    "ASF-registered insurance intermediary, all in English."
  ],
  [
    "Independent broker, free quote in 24h.",
    "ASF-registered insurance intermediary, free quote in 24h."
  ],
  [
    "Independent broker, free quote.",
    "ASF-registered insurance intermediary, free quote."
  ],
  [
    "Independent broker, all in English.",
    "ASF-registered insurance intermediary, all in English."
  ],
  [
    "independent advice, no jargon.",
    "not tied to a single insurer, no jargon."
  ],
  [
    "\"description\": \"Independent, English-speaking adviser",
    "\"description\": \"English-speaking adviser"
  ],
  [
    "Independent multi-risk home cover for expats",
    "Multi-risk home cover for expats"
  ],
  [
    "We are independent. Send us your details",
    "We are not tied to a single insurer. Send us your details"
  ],
  [
    "Independent insurance advice for expats and businesses in the Algarve.",
    "ASF-registered insurance intermediary for expats and businesses in the Algarve."
  ],
  [
    "<div>Independent insurance broker</div>",
    "<div>Not tied to a single insurer</div>"
  ],
  [
    "<strong>Independent and English-speaking</strong>, based in Lagos, Algarve.",
    "<strong>English-speaking and not tied to a single insurer</strong>, based in Lagos, Algarve."
  ],
  [
    "where an independent insurance broker comes in",
    "where an intermediary comes in"
  ],
  [
    "An independent insurance broker",
    "An insurance intermediary"
  ],
  [
    "an independent insurance broker",
    "an insurance intermediary"
  ],
  [
    "an independent local broker",
    "a local intermediary"
  ],
  [
    "An independent broker",
    "An intermediary"
  ],
  [
    "an independent broker",
    "an intermediary"
  ],
  [
    "an ASF-registered broker",
    "an ASF-registered intermediary"
  ],
  [
    "ASF-registered insurance broker",
    "ASF-registered insurance intermediary"
  ],
  [
    "ASF-registered insurance broker",
    "ASF-registered insurance intermediary"
  ],
  [
    "ASF-registered broker",
    "ASF-registered intermediary"
  ],
  [
    "ASF-registered insurance broker",
    "ASF-registered insurance intermediary"
  ],
  [
    "ASF-registered broker",
    "ASF-registered intermediary"
  ],
  [
    "ASF-registered insurance broker",
    "ASF-registered insurance intermediary"
  ],
  [
    "We're an insurance broker registered with the ASF",
    "We're an insurance intermediary registered with the ASF"
  ],
  [
    "an insurance broker registered with the ASF",
    "an insurance intermediary registered with the ASF"
  ],
  [
    "<strong>insurance broker</strong>",
    "<strong>insurance intermediary</strong>"
  ],
  [
    "ASF-registered insurance broker, free quote in 24h.",
    "ASF-registered insurance intermediary, free quote in 24h."
  ],
  [
    "ASF-registered insurance broker, free quote.",
    "ASF-registered insurance intermediary, free quote."
  ],
  [
    "ASF-registered insurance broker, all in English.",
    "ASF-registered insurance intermediary, all in English."
  ],
  [
    "ASF-registered insurance broker, free quote in 24h.",
    "ASF-registered insurance intermediary, free quote in 24h."
  ],
  [
    "ASF-registered insurance broker, free quote.",
    "ASF-registered insurance intermediary, free quote."
  ],
  [
    "ASF-registered insurance broker, all in English.",
    "ASF-registered insurance intermediary, all in English."
  ],
  [
    "ASF-registered insurance broker for expats and businesses in the Algarve.",
    "ASF-registered insurance intermediary for expats and businesses in the Algarve."
  ],
  [
    "where a broker comes in",
    "where an intermediary comes in"
  ],
  [
    "An insurance broker",
    "An insurance intermediary"
  ],
  [
    "an insurance broker",
    "an insurance intermediary"
  ],
  [
    "a local broker",
    "a local intermediary"
  ],
  [
    "A broker",
    "An intermediary"
  ],
  [
    "a broker",
    "an intermediary"
  ]
];

export const PT_INDEPENDENCE = [
  ['Aconselhamento independente.', 'Não estamos ligados a uma única seguradora.'],
  ['Um mediador independente', 'Um mediador'],
  ['Mediador de seguros independente em Lisboa e no Algarve', 'Mediador de seguros em Lisboa e no Algarve'],
  ['Mediador de seguros independente para empresas', 'Mediador de seguros para empresas'],
  ['Como mediador de seguros independente, a Adler &amp; Rochefort', 'Como mediador de seguros, a Adler &amp; Rochefort'],
  // The appositive commas have to move together: dropping "independente" alone
  // leaves "…como a Adler & Rochefort, apresenta…", a comma splice.
  [
    'Um mediador de seguros independente, como a Adler &amp; Rochefort,',
    'Um mediador de seguros como a Adler &amp; Rochefort',
  ],
  ['Um mediador de seguros como a Adler &amp; Rochefort, apresenta', 'Um mediador de seguros como a Adler &amp; Rochefort apresenta'],
  ['Um mediador de seguros como a Adler &amp; Rochefort, não representa', 'Um mediador de seguros como a Adler &amp; Rochefort não representa'],
  ['Um mediador de seguros independente, como a Adler &amp; Rochefort', 'Um mediador de seguros como a Adler &amp; Rochefort'],
  ['É aqui que entra o mediador de seguros independente.', 'É aqui que entra o mediador de seguros.'],
];

export const NL_INDEPENDENCE = [
  ['Onafhankelijk verzekeringsagent in Lagos, Algarve', 'Verzekeringsagent in Lagos, Algarve'],
  ['onafhankelijk verzekeringsagent in Lagos', 'verzekeringsagent in Lagos'],
  ['Onafhankelijke verzekeringsbemiddelaar', 'Verzekeringsbemiddelaar'],
  ['onafhankelijke verzekeringsbemiddelaar', 'verzekeringsbemiddelaar'],
  [
    'Onafhankelijk betekent hier iets concreets: wij zijn niet gebonden aan één maatschappij en leggen hetzelfde dossier voor aan meerdere verzekeraars.',
    'Wij zijn niet gebonden aan één maatschappij en leggen hetzelfde dossier voor aan meerdere verzekeraars.',
  ],
  [
    'Als onafhankelijk agent leggen wij het risico voor aan meerdere maatschappijen',
    'Wij zijn niet gebonden aan één maatschappij en leggen het risico voor aan meerdere maatschappijen',
  ],
  [
    'Als onafhankelijke bemiddelaar zijn wij aan geen enkele aanbieder gebonden — wij kiezen de oplossing die bij u past.',
    'Wij zijn niet gebonden aan één maatschappij — wij kiezen de oplossing die bij u past.',
  ],
  [
    '<div><strong>Onafhankelijk.</strong> <span>Wij vergelijken de verzekeraars en werken voor u — niet voor één maatschappij.</span></div>',
    '<div><strong>Niet gebonden aan één maatschappij.</strong> <span>Wij werken met agentuurovereenkomsten bij meerdere verzekeraars.</span></div>',
  ],
  ['Adler &amp; Rochefort is uw onafhankelijke bemiddelaar', 'Adler &amp; Rochefort is uw verzekeringsbemiddelaar'],
  [
    'Waarom een onafhankelijke agent hier geld waard is',
    'Waarom meerdere agentuurovereenkomsten hier geld waard zijn',
  ],
];

export const FR_INDEPENDENCE = [
  ['Conseil indépendant en français.', 'Non liés à un seul assureur. Conseil en français.'],
  ['Courtier en assurances indépendant et francophone', 'Courtier en assurances francophone'],
  ['Courtier en assurances indépendant', 'Courtier en assurances'],
  ['votre courtier indépendant et francophone', 'votre courtier francophone'],
  [
    'En tant que courtier indépendant, nous ne sommes liés à aucun assureur',
    'En tant que courtier, nous ne sommes pas liés à un seul assureur',
  ],
  [
    "<div><strong>Indépendants.</strong> <span>Nous comparons les assureurs et travaillons pour vous — pas pour une seule compagnie.</span></div>",
    "<div><strong>Non liés à un seul assureur.</strong> <span>Nous disposons d'accords d'agence auprès de plusieurs compagnies.</span></div>",
  ],

  // Tightened per instruction: describes the commercial relationship (no
  // exclusivity contract, several insurers) rather than implying
  // whole-of-market analysis. Supersedes the "nous choisissons la solution
  // qui vous convient" framing above once Change 2's own rule has already
  // landed on "En tant que courtier, nous ne sommes pas liés à un seul
  // assureur" — this rule catches the full sentence as found on the page.
  [
    'En tant que courtier, nous ne sommes pas liés à un seul assureur — nous choisissons la solution qui vous convient.',
    "Nous ne sommes liés par aucun contrat d'exclusivité et travaillons avec plusieurs assureurs.",
  ],
];

/**
 * FR pairing: "Courtier en assurances" stays (Change 2 above already strips
 * "indépendant" from it); these pair the noun with the ASF registration
 * number wherever it appears in the hero or footer. The top bar already
 * carries the pairing and needs no rule.
 */
export const FR_ASF_PAIRING = [
  [
    "Adler &amp; Rochefort est votre courtier francophone : nous comparons le marché pour vous et vous expliquons tout clairement en français — en assurance santé, habitation et auto.",
    "Adler &amp; Rochefort est votre courtier francophone, enregistré auprès de l'ASF sous le nº 425591790/3 : nous comparons le marché pour vous et vous expliquons tout clairement en français — en assurance santé, habitation et auto.",
  ],
  [
    'Courtier en assurances pour les expatriés et les entreprises en Algarve, Portugal. Un conseil clair en français, aux normes internationales.',
    "Courtier en assurances pour les expatriés et les entreprises en Algarve, Portugal — enregistré auprès de l'ASF sous le nº 425591790/3. Un conseil clair en français, aux normes internationales.",
  ],
];

export const DE_INDEPENDENCE = [
  [
    "Unabhängige Beratung auf Deutsch.",
    "Nicht an einen Versicherer gebunden. Beratung auf Deutsch."
  ],
  [
    "Unabhängiger, deutschsprachiger Versicherungsmakler",
    "Deutschsprachiger Versicherungsvermittler"
  ],
  [
    "Unabhängiger Versicherungsmakler",
    "Versicherungsvermittler"
  ],
  [
    "Ihr unabhängiger, deutschsprachiger Makler",
    "Ihr deutschsprachiger Versicherungsvermittler"
  ],
  [
    "Als unabhängiger Makler sind wir keinem Anbieter verpflichtet",
    "Als Versicherungsvermittler sind wir nicht an einen einzigen Versicherer gebunden"
  ],
  [
    "<div><strong>Unabhängig.</strong> <span>Wir vergleichen die Versicherer und arbeiten für Sie — nicht für ein einzelnes Unternehmen.</span></div>",
    "<div><strong>Nicht an einen Versicherer gebunden.</strong> <span>Wir arbeiten mit Agenturverträgen bei mehreren Gesellschaften.</span></div>"
  ],
  [
    "Versicherungsmakler für Expats und Unternehmen an der Algarve, Portugal. Klare Beratung, in unserem Versichererportfolio.",
    "Versicherungsvermittler für Expats und Unternehmen an der Algarve, Portugal — bei der ASF registriert unter Nr. 425591790/3. Klare Beratung, in unserem Versichererportfolio."
  ],
  [
    "Deutschsprachiger Versicherungsmakler",
    "Deutschsprachiger Versicherungsvermittler"
  ],
  [
    "Versicherungsmakler",
    "Versicherungsvermittler"
  ],
  [
    "Ihr deutschsprachiger Makler",
    "Ihr deutschsprachiger Versicherungsvermittler"
  ],
  [
    "Als Makler sind wir nicht an einen einzigen Versicherer gebunden",
    "Als Versicherungsvermittler sind wir nicht an einen einzigen Versicherer gebunden"
  ],
  [
    "Versicherungsmakler für Expats und Unternehmen an der Algarve, Portugal — bei der ASF registriert unter Nr. 425591790/3. Klare Beratung, in unserem Versichererportfolio.",
    "Versicherungsvermittler für Expats und Unternehmen an der Algarve, Portugal — bei der ASF registriert unter Nr. 425591790/3. Klare Beratung, in unserem Versichererportfolio."
  ]
];

// ---------------------------------------------------------------------------
// Change 3 — the "we work for you, not the insurer" claim
// ---------------------------------------------------------------------------
export const EN_RELATIONSHIP = [
  [
    "we work for you, not the insurer",
    "we place your case across the insurers we represent"
  ],
  [
    "works for you, not for the insurer, and can access conditions and pricing not offered directly to the public",
    "can access conditions and pricing not offered directly to the public"
  ],
  [
    "Unlike an agent tied to a single insurer, a broker works for you — comparing products, negotiating terms and supporting you in claims management, always defending your interests.",
    "An intermediary holding agreements with several insurers can compare products, negotiate terms and support you through a claim — rather than presenting the products of one company only."
  ],
  [
    "the intermediary works for you, not for the insurer",
    "the intermediary places your case across the insurers it represents"
  ],
  [
    "a broker works for you, not for the insurance company.",
    "an intermediary places your case across the insurers it represents."
  ],
  [
    "A broker works for you rather than for a single insurer:",
    "An intermediary places your case across the insurers it represents:"
  ],
  [
    "An ASF-authorised broker works for you, not for a single insurer:",
    "An ASF-authorised intermediary places your case across the insurers it represents:"
  ],
  [
    "A broker holding agreements with several insurers can compare products, negotiate terms and support you through a claim — rather than presenting the products of one company only.",
    "An intermediary holding agreements with several insurers can compare products, negotiate terms and support you through a claim — rather than presenting the products of one company only."
  ],
  [
    "the broker places your case across the insurers it represents",
    "the intermediary places your case across the insurers it represents"
  ],
  [
    "a broker places your case across the insurers it represents.",
    "an intermediary places your case across the insurers it represents."
  ],
  [
    "A broker places your case across the insurers it represents:",
    "An intermediary places your case across the insurers it represents:"
  ],
  [
    "An ASF-authorised broker places your case across the insurers it represents:",
    "An ASF-authorised intermediary places your case across the insurers it represents:"
  ]
];

export const PT_RELATIONSHIP = [
  ['trabalha para si — não para a seguradora', 'apresenta o seu caso às seguradoras com quem trabalhamos'],
  [
    'Ao contrário de um agente que representa uma única seguradora, um mediador como a Adler &amp; Rochefort trabalha para si — comparando propostas de múltiplas seguradoras de forma imparcial e recomendando a solução que melhor se adapta ao seu perfil.',
    'Um mediador com acordos de agência junto de várias seguradoras pode comparar propostas, negociar condições e acompanhá-lo num sinistro — em vez de apresentar apenas os produtos de uma companhia.',
  ],
  [
    'Um mediador autorizado pela ASF trabalha para si, não para uma seguradora:',
    'Um mediador autorizado pela ASF apresenta o seu caso às seguradoras com quem trabalha:',
  ],
];

/**
 * Reviewed exceptions for block0-compliance.mjs's residual-terminology audit
 * (the `intermediar(y|ies)` half of it — matches no EN_BROKER rule's exact
 * left-hand side, so this pass never rewrites them, but the audit's separate
 * regex keeps surfacing them for review on every run regardless). Each entry
 * is a stable substring guaranteed to fall inside that regex's ±60-character
 * match window, checked against the two live occurrences on
 * public/en/index.html before being added here — not guessed at.
 *
 * These are read-only: nothing in the tables above rewrites this text, and
 * nothing should. Listing them here only tells the audit to stop flagging
 * wording that has already been reviewed and confirmed as not a status claim.
 */
export const EN_INTERMEDIARY_REVIEWED = [
  [
    'the role of the insurance intermediary in Portugal',
    'Biographical prose about an approach ("redefining the role of..."), not a statement of status. Claims no registration and no category; "intermediary" is a common noun here, not a regulatory designation.',
  ],
  [
    'What does an insurance intermediary do and why should I use one?',
    'Generic category explanation — same case as the PL/SE/DK guide pages. Explains what the role does, not our registration.',
  ],
  [
    'An insurance intermediary is a professional authorised by the ASF',
    'Generic category explanation, the FAQ answer that follows the question above — defines the profession, our own role is described separately as an insurance intermediary.',
  ],
];
