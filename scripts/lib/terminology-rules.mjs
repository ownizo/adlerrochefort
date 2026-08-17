/**
 * Regulatory terminology rules — the single source of truth.
 *
 * Three passes read these tables: scripts/phase2-terminology.mjs, which applied
 * them, and scripts/terminology.mjs and scripts/block0-compliance.mjs, the
 * repeatable enforcement passes. They live here rather than in each script
 * because the drift this pass had to correct came from exactly that: the two
 * enforcement scripts carried their own PT/EN/NL tables, no FR or DE table at
 * all, and had come to disagree with each other about which noun was correct.
 *
 * Adler & Rochefort is registered with the ASF as an *agente de seguros*
 * (no. 425591790/3) holding agency agreements with several insurers. Peer firms
 * in the same registered category market themselves as "brokers" in English, so
 * the noun is kept in every language: broker (EN), courtier (FR),
 * Versicherungsmakler/Makler (DE), mediador de seguros (PT),
 * verzekeringsagent/verzekeringsbemiddelaar (NL). Schema.org @type
 * "InsuranceAgency", and every URL slug, stay as they are.
 *
 * What the tables correct is narrower:
 *
 *   EN_BROKER          English standardises on "broker".
 *   *_INDEPENDENCE     "Independent" as a standalone label is replaced by the
 *                      concrete fact behind it — agency agreements with several
 *                      insurers. One table per language; FR and DE are included,
 *                      which is what was missing before.
 *   *_RELATIONSHIP     "We work for you, not the insurer" rephrased without
 *                      asserting whose agent we are.
 *
 * Every rule is an exact string, ordered longest-first within its table. There
 * is deliberately no bare "intermediary" -> "broker" rule: the previous pass ran
 * the mirror of one and produced "intermediaryage" (from "brokerage") and
 * "vian intermediary" (from "via broker"). Generic references to the profession
 * and quoted statutory definitions are absent on purpose — a phrase no rule
 * matches is left alone and reported, never guessed at.
 *
 * This file must stay out of any sweep that applies these rules: rewriting it
 * with itself would turn each rule's left-hand side into its right-hand side and
 * silently disarm the pass. EXCLUDE below carries that guard.
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
// Change 1 — align English on "broker"
// ---------------------------------------------------------------------------
// Only phrases in which "intermediary" refers to Adler & Rochefort. Generic
// references to the profession and quoted definitions are absent on purpose.
export const EN_BROKER = [
  // Words an earlier pass corrupted, restored to what they were. "brokerage"
  // is the original noun, not a new coinage: the old pass rewrote the "broker"
  // stem inside "brokerage" and left "…intermediaryage" behind.
  ['insurance intermediaryage', 'insurance brokerage'],
  ['Insurance Intermediaryage', 'Insurance Brokerage'],
  ['English explanation vian intermediary', 'English explanation via broker'],

  // Self-designation carrying the "independent" label. Listed here rather than
  // in Change 2 so the noun is corrected first; the label is then stripped by
  // the Change 2 rules below, which match on "broker".
  ['Independent insurance intermediary', 'Independent insurance broker'],
  ['independent insurance intermediary', 'independent insurance broker'],
  ['Use an independent intermediary</strong>', 'Use a broker</strong>'],
  // Two forms of the same sentence: one where the Change 3 clause is still
  // present (EN_RELATIONSHIP strips it afterwards) and one where it has already
  // gone. Without the first, the noun stays "intermediary" whenever the
  // relationship clause sits between it and "can access".
  [
    'an intermediary registered with the ASF works for you',
    'a broker registered with the ASF works for you',
  ],
  ['an intermediary registered with the ASF can access', 'a broker registered with the ASF can access'],
  ['an independent local intermediary', 'an independent local broker'],
  ['An independent intermediary', 'An independent broker'],
  ['an independent intermediary', 'an independent broker'],

  // Firm self-designation.
  ['ASF-registered, English-speaking insurance intermediary', 'ASF-registered, English-speaking insurance broker'],
  ['English-speaking, ASF-registered insurance intermediary', 'English-speaking, ASF-registered insurance broker'],
  ['ASF-registered Portuguese insurance intermediary', 'ASF-registered Portuguese insurance broker'],
  ['Insurance intermediary registered with the ASF', 'Insurance broker registered with the ASF'],
  ['insurance intermediary registered with the ASF', 'insurance broker registered with the ASF'],
  ['registered insurance intermediary, authorised by the ASF', 'registered insurance broker, authorised by the ASF'],
  ['ASF-registered insurance intermediary', 'ASF-registered insurance broker'],
  ['ASF-registered intermediary', 'ASF-registered broker'],
  ['ASF-authorised insurance intermediary', 'ASF-authorised insurance broker'],
  ['ASF-authorised intermediary', 'ASF-authorised broker'],
  ['ASF-registered independent mediator', 'ASF-registered independent broker'],
  ['ASF-registered mediator', 'ASF-registered broker'],
  ['insurance intermediary authorised by the ASF analyses', 'insurance broker authorised by the ASF analyses'],
  ['Registered intermediary', 'Registered broker'],
  ['Registered insurance intermediary, supervised by the ASF', 'Registered insurance broker, supervised by the ASF'],
  ['registered insurance intermediary advising international residents', 'registered insurance broker advising international residents'],
  [
    'We are an insurance intermediary registered and authorised by the Portuguese Insurance and Pension Funds Supervisory Authority',
    'We are an insurance broker registered and authorised by the Portuguese Insurance and Pension Funds Supervisory Authority',
  ],
  [
    'acts as an insurance intermediary registered with the Portuguese Insurance and Pension Funds Supervisory Authority',
    'acts as an insurance broker registered with the Portuguese Insurance and Pension Funds Supervisory Authority',
  ],
  [
    'an insurance intermediary registered with the Portuguese authority (ASF)',
    'an insurance broker registered with the Portuguese authority (ASF)',
  ],
  ['A technology-driven insurance intermediary is not a technology company', 'A technology-driven insurance broker is not a technology company'],
  ['looking for an insurance intermediary who truly understands', 'looking for a broker who truly understands'],

  // The WhatsApp share link's prefilled message. Encoded, so the replacement
  // must not introduce a space.
  ['ASF-registered%20intermediary', 'ASF-registered%20broker'],

  // Named self-description.
  ['English-speaking Insurance Intermediary', 'English-speaking Insurance Broker'],
  ['English-speaking insurance intermediary', 'English-speaking insurance broker'],
  ['English-speaking intermediary', 'English-speaking broker'],
  ['Expat Insurance Intermediary', 'Expat Insurance Broker'],
  ['Insurance Intermediaries in the Algarve', 'Insurance Brokers in the Algarve'],
  ['insurance intermediary in the Algarve', 'insurance broker in the Algarve'],
  ['insurance intermediary in Lagos', 'insurance broker in Lagos'],
  ['insurance intermediary in Portugal for expats', 'insurance broker in Portugal for expats'],
  ['an insurance intermediary like Adler &amp; Rochefort', 'a broker like Adler &amp; Rochefort'],
  ['insurance intermediary like Adler &amp; Rochefort', 'broker like Adler &amp; Rochefort'],
  ['an Algarve intermediary', 'an Algarve broker'],
  ['a Portuguese intermediary', 'a Portuguese broker'],
  ['Our registration as an insurance intermediary in Portugal', 'Our registration as an insurance broker in Portugal'],

  // First person — unambiguously us.
  ['independent intermediaries', 'brokers'],
  ['one of our intermediaries', 'one of our brokers'],
  ['One of our intermediaries', 'One of our brokers'],
  ['our experience as specialist intermediaries', 'our experience as specialist brokers'],
  ['we remain your intermediary', 'we remain your broker'],
  ['this intermediary does not advise on', 'this broker does not advise on'],
  ['apart from other intermediaries', 'apart from other brokers'],

  // Service copy about what we do.
  ['Talk to an insurance intermediary now on WhatsApp.', 'Talk to a broker now on WhatsApp.'],
  [
    'Talk it through with an English-speaking insurance intermediary on WhatsApp.',
    'Talk it through with an English-speaking broker on WhatsApp.',
  ],
  ['Having a specialised insurance intermediary managing this process', 'Having a specialised broker managing this process'],
  ['A specialised intermediary is not a cost', 'A specialised broker is not a cost'],
  ['An intermediary who works for you.', 'A broker who works for you.'],

  // Headings whose anchor id already says "broker". Rewriting the text back to
  // "broker" makes heading and fragment agree again; the ids are untouched.
  ['Why using an intermediary delivers better results', 'Why using a broker delivers better results'],
  ['How an intermediary helps with a difficult history', 'How a broker helps with a difficult history'],
  ['The role of a specialised intermediary', 'The role of a specialised broker'],
  ['The role of the specialist intermediary in real property', 'The role of the specialist broker in real property'],
  ['the role of an independent intermediary', 'the role of an independent broker'],
  // Both the table-of-contents link and the heading itself. The id it links to
  // is "…the-insurance-broker-in-tvde-activity", so the anchor is the evidence
  // that the earlier pass rewrote the visible text away from "broker" here.
  // "The role of an insurance intermediary: why it makes a difference" in the
  // car-insurance article looks similar but has no id, and reads as the
  // profession generally rather than as us, so it is left alone and reported.
  [
    'The role of the insurance intermediary in TVDE activity',
    'The role of the insurance broker in TVDE activity',
  ],

  // Meta keywords.
  ['insurance intermediary portugal, AI insurance intermediary', 'insurance broker portugal, AI insurance broker'],
  ['tourism insurance intermediary', 'tourism insurance broker'],
  ['Lagos expat insurance intermediary', 'Lagos expat insurance broker'],
  ['insurance intermediary technology, adler rochefort', 'insurance broker technology, adler rochefort'],
  ['english speaking insurance intermediary portugal', 'english speaking insurance broker portugal'],
  ['English speaking insurance intermediary portugal', 'English speaking insurance broker portugal'],
  [
    'insurance intermediary Portugal, expat insurance Portugal',
    'insurance broker Portugal, expat insurance Portugal',
  ],

  // The legal-entity notice, which names the authority in full rather than as
  // "the ASF". Every rule above keys on "the ASF", which is why these two
  // sentences kept the old noun while the identical sentence elsewhere on the
  // same pages was corrected. Note that in a formal notice of this kind
  // "insurance intermediary" is the term the IDD itself uses for the registered
  // person, so this is the one pair of replacements worth a second look before
  // deploy — it is flagged in the report.
  [
    'Unipessoal Lda., insurance intermediary registered with the Autoridade',
    'Unipessoal Lda., insurance broker registered with the Autoridade',
  ],
  [
    'Unipessoal Lda., an insurance intermediary registered with the Autoridade',
    'Unipessoal Lda., an insurance broker registered with the Autoridade',
  ],
];

// ---------------------------------------------------------------------------
// Change 2 — "independent" as a standalone label
// ---------------------------------------------------------------------------
// Runs after Change 1, so the English rules below match "broker", not
// "intermediary". Shorter contexts (badges, footers, hero stats) take the first
// clause only; full sentences take both clauses.
export const EN_INDEPENDENCE = [
  // The ar-trust-strip component, all four variants. Both the literal em dash
  // and the &mdash; entity are listed: 13 of the 81 pages use the entity.
  [
    'Independent — we compare Allianz, Médis, APRIL &amp; AdvanceCare',
    'Not tied to one insurer — Allianz, Médis, APRIL &amp; AdvanceCare',
  ],
  [
    'Independent &mdash; we compare Allianz, M&eacute;dis, APRIL &amp; AdvanceCare',
    'Not tied to one insurer &mdash; Allianz, M&eacute;dis, APRIL &amp; AdvanceCare',
  ],
  [
    'Independent — we compare Zurich, Allianz, Hiscox &amp; Liberty Mutual',
    'Not tied to one insurer — Zurich, Allianz, Hiscox &amp; Liberty Mutual',
  ],
  [
    'Independent &mdash; we compare Zurich, Allianz, Hiscox &amp; Liberty Mutual',
    'Not tied to one insurer &mdash; Zurich, Allianz, Hiscox &amp; Liberty Mutual',
  ],
  [
    '<span class="ar-trust-item">Independent — we compare the market</span>',
    '<span class="ar-trust-item">Not tied to a single insurer</span>',
  ],

  // Homepage hero.
  ['Independent and ASF-registered.', 'Not tied to a single insurer, and ASF-registered.'],
  [
    `        <div class="hero-stat-num">100%</div>
        <div class="hero-stat-label">Independent · we compare the market</div>`,
    `        <div class="hero-stat-num">7</div>
        <div class="hero-stat-label">Insurers · agency agreements in place</div>`,
  ],
  [
    '<div class="why-pillar-title">Independent — we compare the market</div>',
    '<div class="why-pillar-title">Not tied to a single insurer</div>',
  ],

  // /en/about/ — heading, section id and aria-labelledby.
  ['<!-- 5. INDEPENDENT BY DESIGN -->', '<!-- 5. AGENCY AGREEMENTS -->'],
  ['aria-labelledby="independent"', 'aria-labelledby="agency-agreements"'],
  [
    '<h2 id="independent">Independent <em>by design</em></h2>',
    '<h2 id="agency-agreements">Agency agreements, <em>not a single insurer</em></h2>',
  ],

  // Self-description.
  ['an independent, ASF-registered broker', 'an ASF-registered broker'],
  ['Independent, ASF-registered insurance broker', 'ASF-registered insurance broker'],
  ['independent, ASF-registered insurance broker', 'ASF-registered insurance broker'],
  ['independent, ASF-registered broker', 'ASF-registered broker'],
  ['ASF-registered independent insurance broker', 'ASF-registered insurance broker'],
  ['ASF-registered independent broker', 'ASF-registered broker'],
  ['independent ASF-registered insurance broker', 'ASF-registered insurance broker'],
  ["We're an independent insurance broker registered with the ASF", "We're an insurance broker registered with the ASF"],
  ['an independent insurance broker registered with the ASF', 'an insurance broker registered with the ASF'],
  ['<strong>independent insurance broker</strong>', '<strong>insurance broker</strong>'],

  // Meta, OpenGraph and Twitter descriptions.
  ['Independent insurance broker, free quote in 24h.', 'ASF-registered insurance broker, free quote in 24h.'],
  ['Independent insurance broker, free quote.', 'ASF-registered insurance broker, free quote.'],
  ['Independent insurance broker, all in English.', 'ASF-registered insurance broker, all in English.'],
  // The same three descriptions in the wording block0-compliance.mjs used to
  // write. They no longer exist in the tree; the rules are here so that a
  // reintroduction lands on the corrected form rather than being swept back.
  ['Independent broker, free quote in 24h.', 'ASF-registered insurance broker, free quote in 24h.'],
  ['Independent broker, free quote.', 'ASF-registered insurance broker, free quote.'],
  ['Independent broker, all in English.', 'ASF-registered insurance broker, all in English.'],
  ['independent advice, no jargon.', 'not tied to a single insurer, no jargon.'],
  ['"description": "Independent, English-speaking adviser', '"description": "English-speaking adviser'],
  ['Independent multi-risk home cover for expats', 'Multi-risk home cover for expats'],
  ['We are independent. Send us your details', 'We are not tied to a single insurer. Send us your details'],
  [
    'Independent insurance advice for expats and businesses in the Algarve.',
    'ASF-registered insurance broker for expats and businesses in the Algarve.',
  ],

  // Two short self-descriptive labels: a landing-page trust badge and a bullet
  // in a list of reasons to use us. Both are the standalone label Change 2
  // removes, in a context short enough to take the first clause only. The
  // tag-bearing left-hand sides keep these away from the prose rules below.
  ['<div>Independent insurance broker</div>', '<div>Not tied to a single insurer</div>'],
  [
    '<strong>Independent and English-speaking</strong>, based in Lagos, Algarve.',
    '<strong>English-speaking and not tied to a single insurer</strong>, based in Lagos, Algarve.',
  ],

  // Generic "independent broker" forms, longest first. These only reach text
  // that Change 1 has already corrected to "broker", so both changes land in
  // one place.
  ['where an independent insurance broker comes in', 'where a broker comes in'],
  ['An independent insurance broker', 'An insurance broker'],
  ['an independent insurance broker', 'an insurance broker'],
  ['an independent local broker', 'a local broker'],
  ['An independent broker', 'A broker'],
  ['an independent broker', 'a broker'],
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
];

export const DE_INDEPENDENCE = [
  ['Unabhängige Beratung auf Deutsch.', 'Nicht an einen Versicherer gebunden. Beratung auf Deutsch.'],
  ['Unabhängiger, deutschsprachiger Versicherungsmakler', 'Deutschsprachiger Versicherungsmakler'],
  ['Unabhängiger Versicherungsmakler', 'Versicherungsmakler'],
  ['Ihr unabhängiger, deutschsprachiger Makler', 'Ihr deutschsprachiger Makler'],
  [
    'Als unabhängiger Makler sind wir keinem Anbieter verpflichtet',
    'Als Makler sind wir nicht an einen einzigen Versicherer gebunden',
  ],
  [
    '<div><strong>Unabhängig.</strong> <span>Wir vergleichen die Versicherer und arbeiten für Sie — nicht für ein einzelnes Unternehmen.</span></div>',
    '<div><strong>Nicht an einen Versicherer gebunden.</strong> <span>Wir arbeiten mit Agenturverträgen bei mehreren Gesellschaften.</span></div>',
  ],
];

// ---------------------------------------------------------------------------
// Change 3 — the "we work for you, not the insurer" claim
// ---------------------------------------------------------------------------
export const EN_RELATIONSHIP = [
  ['we work for you, not the insurer', 'we place your case across the insurers we represent'],
  [
    'works for you, not for the insurer, and can access conditions and pricing not offered directly to the public',
    'can access conditions and pricing not offered directly to the public',
  ],
  // The "unlike a tied agent" framing, which defines the firm against its own
  // registered category. The left-hand side is the wording *after* the tables
  // above have run: on the page it reads "an independent intermediary works for
  // you", which EN_BROKER and then EN_INDEPENDENCE normalise to "a broker works
  // for you" before this table is reached. Matching the page wording instead
  // would leave the rule dead and the pass would not converge in one run.
  [
    'Unlike an agent tied to a single insurer, a broker works for you — comparing products, negotiating terms and supporting you in claims management, always defending your interests.',
    'A broker holding agreements with several insurers can compare products, negotiate terms and support you through a claim — rather than presenting the products of one company only.',
  ],
  [
    'the intermediary works for you, not for the insurer',
    'the broker places your case across the insurers it represents',
  ],

  // Grammatical variants of the same claim, matched after Changes 1 and 2 have
  // turned "an independent intermediary" into "a broker". Sentences that make a
  // related claim in *different* words ("acts as your advocate", "Unlike an
  // agent representing a single insurer") are deliberately left alone and
  // reported instead — rewriting those is a copy decision, not a replacement.
  [
    'a broker works for you, not for the insurance company.',
    'a broker places your case across the insurers it represents.',
  ],
  [
    'A broker works for you rather than for a single insurer:',
    'A broker places your case across the insurers it represents:',
  ],
  // Same claim again, this time with the ASF authorisation in front of it. The
  // sentence before it ("independent advice earns its keep") makes a Change 2
  // claim that no exact replacement fits without rewriting the sentence, so it
  // is reported instead of changed.
  [
    'An ASF-authorised broker works for you, not for a single insurer:',
    'An ASF-authorised broker places your case across the insurers it represents:',
  ],
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
