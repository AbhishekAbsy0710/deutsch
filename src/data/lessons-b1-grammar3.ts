import { Lesson } from "./lessons";

export const lessonsB1Grammar3: Record<string, Lesson> = {
  "lb1_17": {
    id: "lb1_17",
    title: "Genitive Prepositions",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Prepositions That Demand the Genitive",
        explanation: "These prepositions FORCE the Genitive case. They're common in formal writing, news, and official documents. In spoken German, many people use Dative instead — but the exam expects Genitive!",
        examples: [
          { de: "wegen des Regens (because of the rain)", en: "spoken: wegen dem Regen" },
          { de: "während des Unterrichts (during the lesson)", en: "spoken: während dem Unterricht" },
          { de: "trotz des schlechten Wetters (despite the bad weather)", en: "spoken: trotz dem schlechten Wetter" },
          { de: "innerhalb einer Woche (within a week)", en: "time or space boundary" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "wegen", phonetic: "vay-gen", meaning: "because of (+ Gen)", example: { de: "Wegen des Staus kam ich zu spät.", en: "Because of the traffic jam I was late." } },
          { word: "während", phonetic: "vay-rent", meaning: "during (+ Gen)", example: { de: "Während der Pause esse ich.", en: "During the break I eat." } },
          { word: "trotz", phonetic: "trots", meaning: "despite (+ Gen)", example: { de: "Trotz der Kälte ging er raus.", en: "Despite the cold he went out." } },
          { word: "innerhalb", phonetic: "in-ner-halp", meaning: "within (+ Gen)", example: { de: "Innerhalb eines Monats.", en: "Within a month." } },
          { word: "außerhalb", phonetic: "ow-ser-halp", meaning: "outside of (+ Gen)", example: { de: "Außerhalb der Stadt.", en: "Outside of the city." } },
          { word: "statt / anstatt", phonetic: "shtat", meaning: "instead of (+ Gen)", example: { de: "Statt des Kaffees trinke ich Tee.", en: "Instead of coffee I drink tea." } },
          { word: "aufgrund", phonetic: "owf-groont", meaning: "due to / because of (+ Gen)", example: { de: "Aufgrund des Wetters bleiben wir hier.", en: "Due to the weather we are staying here." } },
          { word: "infolge", phonetic: "in-fol-ge", meaning: "as a result of (+ Gen)", example: { de: "Infolge des Unfalls gab es Stau.", en: "As a result of the accident there was a traffic jam." } },
          { word: "mangels", phonetic: "mang-els", meaning: "for lack of (+ Gen)", example: { de: "Mangels Beweisen wurde er freigesprochen.", en: "For lack of evidence he was acquitted." } },
          { word: "zwecks", phonetic: "tsveks", meaning: "for the purpose of (+ Gen)", example: { de: "Zwecks Klärung rufen wir an.", en: "We are calling for the purpose of clarification." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "",
        sentenceAfter: " des schlechten Wetters gingen wir wandern.",
        missingWord: "Trotz",
        translation: "Despite the bad weather, we went hiking."
      }
    ]
  },
  "lb1_18": {
    id: "lb1_18",
    title: "Genitive in Everyday German (Formal vs. Colloquial)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "The Genitive Is 'Dying' — But Not for Exams!",
        explanation: "In spoken German, the Genitive is increasingly replaced by Dative (wegen dem Regen instead of wegen des Regens) or by 'von + Dativ' (das Auto von meinem Bruder instead of das Auto meines Bruders). BUT: the exam and formal writing still require Genitive. Know both!",
        examples: [
          { de: "Formal: Das Auto meines Bruders ist rot.", en: "My brother's car is red. (Genitive)" },
          { de: "Spoken: Das Auto von meinem Bruder ist rot.", en: "My brother's car is red. (von + Dativ)" },
          { de: "Names + -s: Marias Auto / Toms Haus", en: "Like English 's — just add -s to names (no apostrophe!)" },
          { de: "Names ending in s/z: Thomas' Auto / Fritz' Buch", en: "Add apostrophe only if name ends in s, ß, x, z" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "des Hauses", phonetic: "des how-zes", meaning: "of the house", example: { de: "Die Tür des Hauses ist blau.", en: "The door of the house is blue." } },
          { word: "des Mannes", phonetic: "des man-nes", meaning: "of the man", example: { de: "Das Auto des Mannes.", en: "The car of the man." } },
          { word: "der Frau", phonetic: "dair frow", meaning: "of the woman", example: { de: "Die Tasche der Frau.", en: "The bag of the woman." } },
          { word: "der Kinder", phonetic: "dair kin-der", meaning: "of the children", example: { de: "Das Spielzeug der Kinder.", en: "The toys of the children." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which is grammatically CORRECT for formal writing?",
        options: [
          "Das Haus von dem Lehrer.",
          "Das Haus des Lehrers.",
          "Das Haus dem Lehrer.",
          "Des Lehrer das Haus."
        ],
        correctIndex: 1,
        explanation: "In formal/written German, use Genitive: 'des Lehrers'. 'Von dem Lehrer' is spoken/informal."
      }
    ]
  },
  "lb1_19": {
    id: "lb1_19",
    title: "Adjective Declension — All Three Tables",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "The Logic Behind Adjective Endings",
        explanation: "Adjective endings depend on THREE factors: 1) What comes BEFORE the adjective (definite/indefinite/nothing), 2) The GENDER of the noun, 3) The CASE. The golden rule: SOMEONE must show the gender. If the article doesn't, the adjective must!",
        examples: [
          { de: "After definite (der/die/das): der große Mann", en: "Endings: -e or -en (weak declension)" },
          { de: "After indefinite (ein/eine): ein großer Mann", en: "Endings: strong in Nom/Acc, weak in Dat/Gen" },
          { de: "No article: großer Mann, kaltes Wasser", en: "Endings: same as definite article (strong declension)" }
        ]
      },
      {
        type: "grammar",
        title: "The Cheat Sheet",
        explanation: "After DEFINITE articles: use -e in Nominative (all) and Accusative (fem/neut), use -en everywhere else. After INDEFINITE articles: same, except masc Nom = -er, neut Nom/Acc = -es. No article: adjective takes the article's ending.",
        examples: [
          { de: "der kalte Kaffee / die kalte Milch / das kalte Wasser", en: "After definite → -e in Nom" },
          { de: "ein kalter Kaffee / eine kalte Milch / ein kaltes Wasser", en: "After indefinite → -er/-e/-es in Nom" },
          { de: "kalter Kaffee / kalte Milch / kaltes Wasser", en: "No article → strong ending" },
          { de: "den kalten Kaffee / die kalte Milch / das kalte Wasser", en: "Accusative: masc changes to -en" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "der gute Mann", phonetic: "dair goo-te man", meaning: "the good man (weak)", example: { de: "Der gute Mann hilft mir.", en: "The good man helps me." } },
          { word: "ein guter Mann", phonetic: "ayn goo-ter man", meaning: "a good man (mixed)", example: { de: "Er ist ein guter Mann.", en: "He is a good man." } },
          { word: "guter Wein", phonetic: "goo-ter vyn", meaning: "good wine (strong)", example: { de: "Das ist guter Wein.", en: "That is good wine." } },
          { word: "den guten Mann", phonetic: "den goo-ten man", meaning: "the good man (Accusative)", example: { de: "Ich sehe den guten Mann.", en: "I see the good man." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Ich trinke ____ Kaffee.' (heiß, no article, Akkusativ maskulin)",
        options: ["heißer", "heißen", "heiße", "heißes"],
        correctIndex: 1,
        explanation: "No article + Akkusativ + maskulin = strong ending -en (like 'den'). 'Ich trinke heißen Kaffee.'"
      }
    ]
  },
  "lb1_20": {
    id: "lb1_20",
    title: "Partizip I as Adjective (Present Participle)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "The '-ing' Adjective: Infinitiv + d",
        explanation: "Partizip I = Infinitive + 'd'. It works like an adjective describing an ONGOING action: 'the laughing child' = 'das lachende Kind'. It's declined like any adjective.",
        examples: [
          { de: "lachen → lachend → das lachende Kind", en: "the laughing child (who IS laughing)" },
          { de: "schlafen → schlafend → der schlafende Hund", en: "the sleeping dog" },
          { de: "fahren → fahrend → die fahrenden Autos", en: "the driving/moving cars" },
          { de: "brennen → brennend → das brennende Haus", en: "the burning house" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "winken → winkend", phonetic: "vin-ken → vin-kent", meaning: "waving", example: { de: "Das winkende Kind.", en: "The waving child." } },
          { word: "singen → singend", phonetic: "zing-en → zing-ent", meaning: "singing", example: { de: "Der singende Vogel.", en: "The singing bird." } },
          { word: "fliegen → fliegend", phonetic: "flee-gen → flee-gent", meaning: "flying", example: { de: "Das fliegende Auto.", en: "The flying car." } },
          { word: "weinen → weinend", phonetic: "vy-nen → vy-nent", meaning: "crying", example: { de: "Das weinende Baby.", en: "The crying baby." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Das ",
        sentenceAfter: " Kind hat mich geweckt.",
        missingWord: "weinende",
        translation: "The crying child woke me up. (weinen → weinend)"
      }
    ]
  },
  "lb1_21": {
    id: "lb1_21",
    title: "Partizip II as Adjective (Past Participle)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Describing Completed States",
        explanation: "Partizip II (the 'ge-' form) can also be used as an adjective. It describes a COMPLETED action or resulting state. It gets adjective endings just like Partizip I.",
        examples: [
          { de: "lesen → gelesen → das gelesene Buch", en: "the read book (that HAS BEEN read)" },
          { de: "schließen → geschlossen → die geschlossene Tür", en: "the closed door" },
          { de: "kochen → gekocht → das gekochte Ei", en: "the boiled egg" },
          { de: "brechen → gebrochen → der gebrochene Arm", en: "the broken arm" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "schreiben → geschrieben", phonetic: "shry-ben → ge-shree-ben", meaning: "written", example: { de: "Das geschriebene Wort.", en: "The written word." } },
          { word: "waschen → gewaschen", phonetic: "va-shen → ge-va-shen", meaning: "washed", example: { de: "Das gewaschene Hemd.", en: "The washed shirt." } },
          { word: "verstecken → versteckt", phonetic: "fer-shtek-ken → fer-shtekt", meaning: "hidden", example: { de: "Der versteckte Schatz.", en: "The hidden treasure." } },
          { word: "reparieren → repariert", phonetic: "re-pa-ree-ren → re-pa-reert", meaning: "repaired", example: { de: "Das reparierte Fahrrad.", en: "The repaired bicycle." } }
        ]
      },
      {
        type: "grammar",
        title: "Partizip I vs. Partizip II Adjective",
        explanation: "Partizip I = active/ongoing: 'the sleeping child' (doing the action). Partizip II = passive/completed: 'the broken glass' (action already done TO it).",
        examples: [
          { de: "das kochende Wasser (Partizip I) = boiling water (actively boiling)", en: "Action happening NOW" },
          { de: "das gekochte Wasser (Partizip II) = boiled water (already done)", en: "Action COMPLETED" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'The repaired car' — repariert. Which is correct?",
        options: ["das reparierte Auto", "das reparierende Auto", "das repariertes Auto", "das reparierend Auto"],
        correctIndex: 0,
        explanation: "Partizip II as adjective: das reparierTE Auto (neuter Nom, after definite article → -e ending). 'Reparierende' would mean 'the currently-repairing car'."
      }
    ]
  },
  "lb1_22": {
    id: "lb1_22",
    title: "Pronominaladverbien (da- and wo- Compounds)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "da + Preposition = About That/It",
        explanation: "When referring to THINGS (not people), German combines 'da-' with a preposition instead of using a pronoun. 'Darüber' = about that. 'Dafür' = for that. If the preposition starts with a vowel, add an 'r': da-r-auf, da-r-über.",
        examples: [
          { de: "Wir sprechen darüber. (über das Thema)", en: "We're talking about it." },
          { de: "Ich freue mich darauf. (auf die Party)", en: "I'm looking forward to it." },
          { de: "Er denkt daran. (an das Problem)", en: "He thinks about it." },
          { de: "Ich habe damit nichts zu tun.", en: "I have nothing to do with it." }
        ]
      },
      {
        type: "grammar",
        title: "wo + Preposition = About What?",
        explanation: "For questions about things, use 'wo-' + preposition. 'Worüber?' = about what? 'Wofür?' = for what? Same vowel rule: wo-r-über, wo-r-auf.",
        examples: [
          { de: "Worüber sprichst du? → Darüber.", en: "What are you talking about? → About that." },
          { de: "Worauf wartest du? → Darauf.", en: "What are you waiting for? → For that." },
          { de: "Womit arbeitest du? → Damit.", en: "What do you work with? → With that." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "darauf / worauf", phonetic: "da-rowf / vo-rowf", meaning: "on/for that / on/for what", example: { de: "Worauf wartest du? — Darauf!", en: "What are you waiting for?" } },
          { word: "darüber / worüber", phonetic: "da-rü-ber / vo-rü-ber", meaning: "about that / about what", example: { de: "Worüber lachst du? — Darüber!", en: "What are you laughing about?" } },
          { word: "dafür / wofür", phonetic: "da-für / vo-für", meaning: "for that / for what", example: { de: "Wofür brauchst du das?", en: "What do you need that for?" } },
          { word: "damit / womit", phonetic: "da-mit / vo-mit", meaning: "with that / with what", example: { de: "Womit kann ich Ihnen helfen?", en: "What can I help you with?" } },
          { word: "daran / woran", phonetic: "da-ran / vo-ran", meaning: "about that / about what (an)", example: { de: "Woran denkst du?", en: "What are you thinking about?" } },
          { word: "davon / wovon", phonetic: "da-fon / vo-fon", meaning: "of/from that / of/from what", example: { de: "Wovon träumst du?", en: "What do you dream of?" } },
          { word: "daraus / woraus", phonetic: "da-rows / vo-rows", meaning: "from that / from what", example: { de: "Woraus besteht das?", en: "What is it made of?" } },
          { word: "darin / worin", phonetic: "da-rin / vo-rin", meaning: "in that / in what", example: { de: "Worin liegt das Problem?", en: "Wherein lies the problem?" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Ich interessiere mich für Kunst.' — How do you ask 'What do you interest yourself for?'",
        options: ["Für was interessierst du dich?", "Wofür interessierst du dich?", "Was interessierst du dich?", "Worauf interessierst du dich?"],
        correctIndex: 1,
        explanation: "'Sich interessieren FÜR' → wo + für = 'Wofür?'. The preposition matches the verb."
      }
    ]
  },
  "lb1_23": {
    id: "lb1_23",
    title: "Relative Clauses with Prepositions",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Preposition + Relative Pronoun",
        explanation: "When a relative clause contains a verb with a fixed preposition, the preposition comes BEFORE the relative pronoun. For THINGS, you can also use 'wo-' compounds.",
        examples: [
          { de: "Der Mann, MIT DEM ich gesprochen habe, ist mein Chef.", en: "The man with whom I spoke is my boss." },
          { de: "Die Stadt, IN DER ich wohne, ist klein.", en: "The city in which I live is small." },
          { de: "Das Thema, ÜBER DAS wir gesprochen haben, war interessant.", en: "The topic about which we spoke was interesting." },
          { de: "Das, WORÜBER ich mich freue, ist die Reise.", en: "What I'm happy about is the trip. (wo-compound)" }
        ]
      },
      {
        type: "grammar",
        title: "wo- Compound in Relative Clauses",
        explanation: "When referring to indefinite things ('das/etwas/alles/nichts'), use 'wo-' + preposition instead of preposition + relative pronoun.",
        examples: [
          { de: "Das ist etwas, WORAUF ich mich freue.", en: "That's something I look forward to." },
          { de: "Alles, WORAN ich denke, ist der Urlaub.", en: "Everything I think about is the vacation." },
          { de: "Es gibt nichts, WOFÜR ich mich schäme.", en: "There's nothing I'm ashamed of." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "mit dem", phonetic: "mit daim", meaning: "with whom / with which (masc/neut Dat)", example: { de: "Der Mann, mit dem ich sprach.", en: "The man with whom I spoke." } },
          { word: "für die", phonetic: "für dee", meaning: "for whom / for which (fem/pl Acc)", example: { de: "Die Frau, für die ich arbeite.", en: "The woman for whom I work." } },
          { word: "in der", phonetic: "in dair", meaning: "in which (fem Dat)", example: { de: "Die Stadt, in der ich lebe.", en: "The city in which I live." } },
          { word: "an den", phonetic: "an den", meaning: "of whom / about which (masc Acc)", example: { de: "Der Film, an den ich dachte.", en: "The movie I thought of." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Die Firma, ____ ____ ich arbeite, ist groß.' (arbeiten bei + Dativ)",
        options: ["in der", "bei der", "für die", "über die"],
        correctIndex: 1,
        explanation: "'Arbeiten BEI + Dativ' → the preposition 'bei' comes before the relative pronoun 'der' (feminine Dative)."
      }
    ]
  },
  "lb1_24": {
    id: "lb1_24",
    title: "Indirekte Rede (Reported Speech)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Reporting What Someone Said",
        explanation: "Indirect speech reports what someone else said. In formal German, use Konjunktiv I (er sei, er habe, er werde). In everyday German, Konjunktiv II or regular Indikativ is fine. At B1, you should RECOGNIZE Konjunktiv I and USE Konjunktiv II for reported speech.",
        examples: [
          { de: "Direkt: Er sagt: 'Ich BIN krank.'", en: "Direct: He says, 'I AM sick.'" },
          { de: "Indirekt (formal): Er sagt, er SEI krank.", en: "Formal: He says he IS (Konj. I) sick." },
          { de: "Indirekt (informal): Er sagt, er IST krank / er WÄRE krank.", en: "Informal: He says he is/would be sick." },
          { de: "Formal: Sie sagte, sie HABE keine Zeit.", en: "She said she had (Konj. I) no time." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "sei", phonetic: "zy", meaning: "is (Konjunktiv I of sein)", example: { de: "Er sagt, er sei müde.", en: "He says he is tired. (reported)" } },
          { word: "habe", phonetic: "hah-be", meaning: "has (Konjunktiv I of haben)", example: { de: "Sie meint, sie habe recht.", en: "She thinks she's right. (reported)" } },
          { word: "werde", phonetic: "vair-de", meaning: "will (Konjunktiv I of werden)", example: { de: "Er sagt, er werde kommen.", en: "He says he will come. (reported)" } },
          { word: "könne", phonetic: "kön-ne", meaning: "can (Konjunktiv I of können)", example: { de: "Sie sagt, sie könne es machen.", en: "She says she can do it. (reported)" } },
          { word: "müsse", phonetic: "müs-se", meaning: "must (Konjunktiv I of müssen)", example: { de: "Er sagt, er müsse gehen.", en: "He says he must go. (reported)" } },
          { word: "wolle", phonetic: "vol-le", meaning: "wants to (Konjunktiv I of wollen)", example: { de: "Sie sagt, sie wolle schlafen.", en: "She says she wants to sleep. (reported)" } },
          { word: "solle", phonetic: "zol-le", meaning: "should (Konjunktiv I of sollen)", example: { de: "Der Arzt sagt, er solle ruhen.", en: "The doctor says he should rest. (reported)" } },
          { word: "dürfe", phonetic: "dür-fe", meaning: "may (Konjunktiv I of dürfen)", example: { de: "Sie sagt, sie dürfe das nicht.", en: "She says she may not do that. (reported)" } }
        ]
      },
      {
        type: "grammar",
        title: "Where You See This",
        explanation: "Konjunktiv I is mainly used in NEWS, NEWSPAPERS, and FORMAL REPORTS. In the exam, you'll see it in reading comprehension texts. You don't need to produce it actively, but you must understand it.",
        examples: [
          { de: "Die Regierung teilte mit, die Lage sei stabil.", en: "The government announced the situation was stable." },
          { de: "Experten berichten, das Klima werde sich verändern.", en: "Experts report that the climate will change." }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Der Minister sagt, er ____ optimistisch.' — Which form for reported speech?",
        options: ["ist", "sei", "wäre", "wird"],
        correctIndex: 1,
        explanation: "In formal reported speech (news/newspapers), use Konjunktiv I: 'sei'. This signals that you're reporting someone else's words."
      }
    ]
  }
};
