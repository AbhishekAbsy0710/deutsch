import { Lesson } from "./lessons";

export const lessonsB2Final: Record<string, Lesson> = {
  "lb2_60": {
    id: "lb2_60",
    title: "Erweiterte Wortbildung (Advanced Word Formation)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Nominalkomposita, Derivation & Konversion",
        explanation: "German loves building long compound words. At B2, you must understand AND produce them. Three main processes: (1) Komposition: combining words (Umwelt+Schutz = Umweltschutz), (2) Derivation: adding prefixes/suffixes (ver+stehen = verstehen, Freund+schaft = Freundschaft), (3) Konversion: changing word class without adding anything (laufen → das Laufen).",
        examples: [
          { de: "Komposition: Arbeit + Nehmer = Arbeitnehmer (employee)", en: "Compound: Work + taker = employee" },
          { de: "Derivation: un- + möglich = unmöglich (impossible)", en: "Prefix derivation: un- + possible = impossible" },
          { de: "Konversion: schwimmen (v.) → das Schwimmen (n.)", en: "Conversion: to swim → swimming (noun)" },
          { de: "Fugenzeichen: Arbeit-s-platz (the 's' connects the parts)", en: "Linking element: The 's' in Arbeitsplatz is a Fugen-s." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "-ung (Nominalisierung)", phonetic: "oong", meaning: "turns verbs into nouns", example: { de: "entscheiden → die Entscheidung", en: "to decide → the decision" } },
          { word: "-heit / -keit (Adjektiv → Nomen)", phonetic: "hyt / kyt", meaning: "turns adjectives into nouns", example: { de: "gesund → die Gesundheit; möglich → die Möglichkeit", en: "healthy → health; possible → possibility" } },
          { word: "-bar (Verb → Adjektiv)", phonetic: "bar", meaning: "turns verbs into '-able' adjectives", example: { de: "machen → machbar; lösen → lösbar", en: "doable; solvable" } },
          { word: "-los (= without)", phonetic: "lohs", meaning: "without / -less", example: { de: "arbeitslos, hoffnungslos, sinnlos", en: "unemployed, hopeless, pointless" } },
          { word: "un- (negation prefix)", phonetic: "un", meaning: "un- / not", example: { de: "unmöglich, unglaublich, unzufrieden", en: "impossible, unbelievable, dissatisfied" } },
          { word: "Fugen-s / Fugen-n", phonetic: "foo-gen", meaning: "linking element in compounds", example: { de: "Arbeit-s-platz, Straße-n-bahn", en: "workplace, tram (note the linking elements)" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What is 'die Meinungsfreiheit' broken down into?",
        options: ["Meinung + s + Freiheit", "Mein + ung + s + frei + heit", "Meinung + Freiheit", "Meinen + Frei + heit"],
        correctIndex: 0,
        explanation: "Meinung (opinion) + Fugen-s + Freiheit (freedom) = Meinungsfreiheit (freedom of opinion). Understanding these components helps you decode unknown compound nouns."
      }
    ]
  },
  "lb2_61": {
    id: "lb2_61",
    title: "Stilregister — Informal, Formal & Academic",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Switching Registers Like a Native Speaker",
        explanation: "German has three main registers: Umgangssprache (colloquial), Standardsprache (formal/neutral), and Bildungssprache/Fachsprache (academic/specialized). At B2, you must recognize all three AND produce Standardsprache and basic Bildungssprache.",
        examples: [
          { de: "Umgangssprache: Ich hab keinen Bock drauf.", en: "Colloquial: I don't feel like it." },
          { de: "Standardsprache: Ich habe kein Interesse daran.", en: "Standard: I have no interest in it." },
          { de: "Bildungssprache: Das Interesse meinerseits ist nicht vorhanden.", en: "Academic: Interest on my part is not present." },
          { de: "Umgangssprache: Das ist echt krass!", en: "Colloquial: That's really extreme/crazy!" },
          { de: "Standardsprache: Das ist wirklich bemerkenswert.", en: "Standard: That is truly remarkable." },
          { de: "Bildungssprache: Dies ist in höchstem Maße beachtenswert.", en: "Academic: This is noteworthy to the highest degree." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Umgangssprache", phonetic: "um-gangs-shpra-khe", meaning: "colloquial language", example: { de: "Im Alltag verwendet man Umgangssprache.", en: "In everyday life, one uses colloquial language." } },
          { word: "die Fachsprache", phonetic: "fakh-shpra-khe", meaning: "technical/specialized language", example: { de: "Fachsprache findet man in wissenschaftlichen Texten.", en: "Technical language is found in scientific texts." } },
          { word: "umgangssprachlich", phonetic: "um-gangs-shprakh-likh", meaning: "colloquial", example: { de: "'Kohle' ist umgangssprachlich für Geld.", en: "'Kohle' is colloquial for money." } },
          { word: "gehoben", phonetic: "ge-hoh-ben", meaning: "elevated / formal (register)", example: { de: "'Antlitz' ist ein gehobener Ausdruck für 'Gesicht'.", en: "'Antlitz' is a formal expression for 'face'." } }
        ]
      }
    ]
  },
  "lb2_62": {
    id: "lb2_62",
    title: "Redewendungen B2 (Advanced Idioms)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Idioms That Make You Sound Native",
        explanation: "At B2, using idioms appropriately shows mastery. These expressions are commonly used in everyday German and appear in B2 reading texts. Learn them in CONTEXT, not as isolated words.",
        examples: [
          { de: "auf der Kippe stehen = unsicher/in Gefahr sein", en: "to be on the edge / to be uncertain" },
          { de: "in die Bresche springen = für jemanden einspringen", en: "to step into the breach / to fill in for someone" },
          { de: "den Nagel auf den Kopf treffen = genau das Richtige sagen", en: "to hit the nail on the head" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "auf der Kippe stehen", phonetic: "owf dair ki-pe shtay-en", meaning: "to be on the edge / touch and go", example: { de: "Das Projekt steht auf der Kippe.", en: "The project is on the edge (of failing)." } },
          { word: "in die Bresche springen", phonetic: "in dee bre-she shpring-en", meaning: "to step into the breach", example: { de: "Als sie krank wurde, sprang er in die Bresche.", en: "When she got sick, he stepped in." } },
          { word: "den Nagel auf den Kopf treffen", phonetic: "den nah-gel owf den kopf tref-fen", meaning: "to hit the nail on the head", example: { de: "Damit haben Sie den Nagel auf den Kopf getroffen!", en: "You hit the nail on the head with that!" } },
          { word: "aus dem Ruder laufen", phonetic: "ows dem roo-der low-fen", meaning: "to get out of hand / out of control", example: { de: "Die Situation drohte, aus dem Ruder zu laufen.", en: "The situation threatened to get out of hand." } },
          { word: "auf Augenhöhe", phonetic: "owf ow-gen-hö-uh", meaning: "at eye level / on equal terms", example: { de: "Wir verhandeln auf Augenhöhe.", en: "We negotiate on equal terms." } },
          { word: "unter einen Hut bringen", phonetic: "oon-ter ay-nen hoot bring-en", meaning: "to reconcile / to combine", example: { de: "Familie und Beruf unter einen Hut zu bringen ist schwer.", en: "Combining family and career is difficult." } },
          { word: "ins kalte Wasser springen", phonetic: "ins kal-te vas-ser shpring-en", meaning: "to take the plunge / jump in the deep end", example: { de: "Bei meinem ersten Job bin ich ins kalte Wasser gesprungen.", en: "At my first job, I jumped in the deep end." } },
          { word: "die Katze im Sack kaufen", phonetic: "dee kat-se im zak kow-fen", meaning: "to buy a pig in a poke / buy blindly", example: { de: "Ohne Probefahrt kaufe ich nicht die Katze im Sack.", en: "Without a test drive, I won't buy sight unseen." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What does 'Das Projekt steht auf der Kippe' mean?",
        options: ["The project is finished.", "The project is on the edge of failing.", "The project is at the top.", "The project is standing upright."],
        correctIndex: 1,
        explanation: "'Auf der Kippe stehen' = to be teetering / on the edge. It could go either way — success or failure."
      }
    ]
  },
  "lb2_63": {
    id: "lb2_63",
    title: "Falsche Freunde B2 (False Friends)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Words That Look Like English But Mean Something Different",
        explanation: "B2 learners often make errors with 'false friends' — German words that look/sound like English words but have different meanings. These are especially dangerous in B2 writing where precision matters.",
        examples: [
          { de: "konsequent ≠ consequent → konsequent = consistent/persistent", en: "Er ist sehr konsequent. = He is very consistent/persistent." },
          { de: "sympathisch ≠ sympathetic → sympathisch = likeable/nice", en: "Sie ist sehr sympathisch. = She is very likeable." },
          { de: "genial ≠ genial → genial = brilliant/genius-level", en: "Das ist eine geniale Idee! = That's a brilliant idea!" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "konsequent", phonetic: "kon-ze-kvent", meaning: "consistent / persistent (NOT consequent)", example: { de: "Sie verfolgt ihr Ziel konsequent.", en: "She pursues her goal consistently." } },
          { word: "sympathisch", phonetic: "züm-pah-tish", meaning: "likeable / pleasant (NOT sympathetic)", example: { de: "Er ist ein sehr sympathischer Mensch.", en: "He is a very likeable person." } },
          { word: "genial", phonetic: "ge-nee-ahl", meaning: "brilliant / genius (NOT genial)", example: { de: "Einstein war genial.", en: "Einstein was brilliant/a genius." } },
          { word: "das Gymnasium", phonetic: "güm-nah-zee-um", meaning: "academic high school (NOT gym)", example: { de: "Mein Sohn geht aufs Gymnasium.", en: "My son goes to academic high school." } },
          { word: "bekommen", phonetic: "be-ko-men", meaning: "to receive / to get (NOT to become)", example: { de: "Ich bekomme morgen ein Paket.", en: "I will receive a package tomorrow." } },
          { word: "aktuell", phonetic: "ak-too-el", meaning: "current / up-to-date (NOT actual)", example: { de: "Das ist eine aktuelle Nachricht.", en: "That is a current/recent piece of news." } },
          { word: "sensibel", phonetic: "zen-zee-bel", meaning: "sensitive (NOT sensible)", example: { de: "Er ist ein sensibler Mensch.", en: "He is a sensitive person." } },
          { word: "eventuell", phonetic: "e-ven-too-el", meaning: "possibly / perhaps (NOT eventually)", example: { de: "Eventuell komme ich morgen.", en: "I might come tomorrow." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What does 'aktuell' mean in German?",
        options: ["Actual / real", "Current / up-to-date", "Accurate", "Active"],
        correctIndex: 1,
        explanation: "'aktuell' = current, topical, up-to-date. 'Actual' in English = 'tatsächlich' or 'eigentlich' in German. Classic false friend!"
      }
    ]
  },
  "lb2_64": {
    id: "lb2_64",
    title: "Korrekte Zeichensetzung (Punctuation Rules)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "German Punctuation You Must Master for B2 Writing",
        explanation: "German punctuation differs significantly from English. At B2, correct comma usage is essential for scoring well in Schreiben. Key rules: (1) ALWAYS comma before 'dass', 'weil', 'wenn', 'obwohl', etc. (2) ALWAYS comma before relative clauses. (3) Comma before 'um...zu', 'ohne...zu', 'anstatt...zu'. (4) NO comma before 'und'/'oder' connecting main clauses (usually).",
        examples: [
          { de: "Komma vor Nebensatz: Ich glaube, dass das richtig ist.", en: "Comma before subordinate clause: I think that is correct." },
          { de: "Komma vor Relativsatz: Der Mann, der dort steht, ist mein Chef.", en: "Comma before relative clause: The man who stands there is my boss." },
          { de: "Komma vor Infinitivgruppe: Er bat mich, ihm zu helfen.", en: "Comma before infinitive clause: He asked me to help him." },
          { de: "Doppelpunkt: Er sagte: 'Ich komme morgen.'", en: "Colon before direct speech: He said: 'I'll come tomorrow.'" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "das Komma", phonetic: "ko-ma", meaning: "comma", example: { de: "Vor 'dass' steht immer ein Komma.", en: "There is always a comma before 'dass'." } },
          { word: "der Doppelpunkt", phonetic: "do-pel-poonkt", meaning: "colon", example: { de: "Vor der direkten Rede steht ein Doppelpunkt.", en: "A colon comes before direct speech." } },
          { word: "das Semikolon", phonetic: "ze-mi-ko-lon", meaning: "semicolon", example: { de: "Das Semikolon verbindet eng verwandte Hauptsätze.", en: "The semicolon connects closely related main clauses." } },
          { word: "das Ausrufezeichen", phonetic: "ows-roo-fe-tsy-khen", meaning: "exclamation mark", example: { de: "Achtung! (Ausrufezeichen nach Imperativen)", en: "Attention! (exclamation mark after imperatives)" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which sentence has CORRECT punctuation?",
        options: [
          "Ich glaube dass das richtig ist.",
          "Ich glaube, dass das richtig ist.",
          "Ich glaube das, dass richtig ist.",
          "Ich glaube, das das richtig ist."
        ],
        correctIndex: 1,
        explanation: "Comma ALWAYS before 'dass'. This is the most important German punctuation rule."
      }
    ]
  },
  "lb2_65": {
    id: "lb2_65",
    title: "B2 Abschluss — Gesamtwiederholung & Prüfungstipps",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Your B2 Toolkit — Everything in One Place",
        explanation: "You have now completed the B2 curriculum. Here is your complete B2 toolkit: (1) GRAMMAR: Konjunktiv I+II, Passiversatzformen, Nominalisierung, Partizipialattribute, all Konnektoren, Subjektive Modalverben. (2) VOCABULARY: 10+ thematic areas from politics to technology. (3) COMMUNICATION: Argumentation, debating, negotiation, formal register. (4) EXAM: All 4 modules (Lesen, Hören, Schreiben, Sprechen) with strategies.",
        examples: [
          { de: "Prüfungstipp 1: Zeitmanagement — Teilen Sie Ihre Zeit pro Aufgabe ein.", en: "Exam tip 1: Time management — allocate your time per task." },
          { de: "Prüfungstipp 2: Konnektoren — Verwenden Sie in jedem Text mindestens 5 verschiedene.", en: "Exam tip 2: Connectors — use at least 5 different ones in every text." },
          { de: "Prüfungstipp 3: Lesen — Lesen Sie die Fragen VOR dem Text.", en: "Exam tip 3: Reading — read questions BEFORE the text." },
          { de: "Prüfungstipp 4: Sprechen — Struktur ist wichtiger als Perfektion.", en: "Exam tip 4: Speaking — structure is more important than perfection." }
        ]
      },
      {
        type: "speaking",
        phrase: "Ich habe das B2-Niveau erreicht und bin nun in der Lage, mich fließend und spontan zu verständigen, ohne häufig nach Worten suchen zu müssen.",
        translation: "I have reached the B2 level and am now able to communicate fluently and spontaneously, without frequently having to search for words.",
        phonetic: "ikh hah-be das bay-tsvay ni-voh er-raykht unt bin noon in dair lah-ge mikh flee-sent unt shpon-tahn tsoo fer-shten-di-gen oh-ne hoy-fikh nakh vor-ten zoo-khen tsoo müs-sen",
        tip: "This is the CEFR B2 can-do statement in German. You should be able to say this with confidence!"
      },
      {
        type: "listening",
        phrase: "Herzlichen Glückwunsch! Sie haben das B2-Niveau abgeschlossen und sind bereit für den Goethe-Zertifikat B2!",
        translation: "Congratulations! You have completed the B2 level and are ready for the Goethe-Zertifikat B2!",
        speed: "normal"
      }
    ]
  }
};
