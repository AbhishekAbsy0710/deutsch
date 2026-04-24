import { Lesson } from "./lessons";

export const lessonsB1: Record<string, Lesson> = {
  "l46": {
    id: "l46",
    title: "The Genitive Case",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Possession (The 'of' Case)",
        explanation: "The Genitive case shows ownership (e.g., 'the car of the man'). The articles change significantly, and masculine/neuter nouns also get an '-s' or '-es' at the end of the noun itself.",
        examples: [
          { de: "das Auto des Mannes", en: "the car of the man (der -> des + es)" },
          { de: "die Tasche der Frau", en: "the bag of the woman (die -> der)" },
          { de: "das Spielzeug des Kindes", en: "the toy of the child (das -> des + es)" },
          { de: "die Autos der Eltern", en: "the cars of the parents (die -> der)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "des", phonetic: "des", meaning: "of the (masc/neut)", example: { de: "Das ist das Haus des Lehrers.", en: "That is the house of the teacher." } },
          { word: "der", phonetic: "dair", meaning: "of the (fem/plural)", example: { de: "Das ist das Auto der Mutter.", en: "That is the car of the mother." } },
          { word: "wegen", phonetic: "vay-gen", meaning: "because of (+ Genitive)", example: { de: "Wegen des Regens...", en: "Because of the rain..." } },
          { word: "während", phonetic: "vay-rent", meaning: "during (+ Genitive)", example: { de: "Während des Essens...", en: "During the meal..." } },
        ]
      },
      {
        type: "quiz-mcq",
        question: "How do you say 'the dog of the child' (das Kind)?",
        options: ["der Hund dem Kind", "der Hund das Kind", "der Hund des Kindes", "der Hund der Kinder"],
        correctIndex: 2,
        explanation: "Because 'Kind' is neuter (das), the Genitive article is 'des', and you must add '-es' to the noun: des Kindes."
      }
    ]
  },
  "l47": {
    id: "l47",
    title: "Subordinating Conjunctions",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Verb to the End!",
        explanation: "Unlike ADUSO (aber, denn, und...), subordinating conjunctions (like weil, dass, wenn) act like a magnet that pulls the conjugated verb to the VERY END of the clause.",
        examples: [
          { de: "Ich lerne Deutsch, WEIL ich in Berlin wohne.", en: "I learn German, because I live in Berlin. ('wohne' goes to the end)" },
          { de: "Ich glaube, DASS er krank ist.", en: "I believe that he is sick." },
          { de: "Ich weiß nicht, OB sie kommt.", en: "I don't know if she is coming." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "weil", phonetic: "vyle", meaning: "because (verb to end)", example: { de: "..., weil ich müde bin.", en: "...because I am tired." } },
          { word: "dass", phonetic: "das", meaning: "that (verb to end)", example: { de: "Ich hoffe, dass du kommst.", en: "I hope that you come." } },
          { word: "wenn", phonetic: "ven", meaning: "if / whenever", example: { de: "Wenn es regnet, bleibe ich hier.", en: "If it rains, I stay here." } },
          { word: "ob", phonetic: "op", meaning: "if / whether (yes/no)", example: { de: "Ich frage mich, ob er kommt.", en: "I wonder whether he is coming." } },
          { word: "obwohl", phonetic: "op-vohl", meaning: "although", example: { de: "Obwohl es kalt ist, gehe ich.", en: "Although it is cold, I go." } },
        ]
      },
      {
        type: "listening",
        phrase: "Ich lerne Deutsch, weil ich in Deutschland arbeite.",
        translation: "I learn German because I work in Germany.",
        speed: "normal"
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ich denke, ",
        sentenceAfter: " das eine gute Idee ist.",
        missingWord: "dass",
        translation: "I think that is a good idea."
      }
    ]
  },
  "l48": {
    id: "l48",
    title: "Comma Splicing & Sentence Structure",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Starting with a Subordinate Clause",
        explanation: "If you start a sentence with a subordinate clause (Wenn es regnet...), the ENTIRE clause acts as 'Position 1' for the main sentence. Therefore, the main sentence must immediately start with its verb in 'Position 2'. This creates a 'verb comma verb' effect.",
        examples: [
          { de: "[Wenn es regnet], [bleibe] ich zu Hause.", en: "If it rains, I stay at home." },
          { de: "[Weil ich müde bin], [gehe] ich schlafen.", en: "Because I am tired, I go to sleep." }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which sentence is correct?",
        options: [
          "Weil ich krank bin, ich bleibe im Bett.",
          "Weil ich krank bin, bleibe ich im Bett.",
          "Ich bleibe im Bett, weil bin ich krank.",
          "Weil ich bin krank, bleibe ich im Bett."
        ],
        correctIndex: 1,
        explanation: "The subordinate clause 'Weil ich krank bin' pushes 'bin' to the end. Since the whole clause is in Position 1, the main clause must start with the verb 'bleibe' in Position 2."
      }
    ]
  },
  "l49": {
    id: "l49",
    title: "Reflexive Verbs",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Actions directed at yourself",
        explanation: "Many German verbs are reflexive, meaning the subject and the object are the same person. You must use a reflexive pronoun (mich, dich, sich, uns, euch, sich).",
        examples: [
          { de: "Ich freue mich.", en: "I am happy / I look forward to." },
          { de: "Du ärgerst dich.", en: "You are angry." },
          { de: "Er interessiert sich für Kunst.", en: "He is interested in art." },
          { de: "Wir beeilen uns.", en: "We hurry (ourselves) up." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "sich freuen", phonetic: "zikh froy-en", meaning: "to be happy / look forward to", example: { de: "Ich freue mich auf das Wochenende.", en: "I look forward to the weekend." } },
          { word: "sich ärgern", phonetic: "zikh air-gern", meaning: "to get angry", example: { de: "Er ärgert sich über den Fehler.", en: "He is angry about the mistake." } },
          { word: "sich erinnern", phonetic: "zikh er-in-nern", meaning: "to remember", example: { de: "Ich erinnere mich nicht.", en: "I don't remember." } },
          { word: "sich interessieren", phonetic: "zikh in-te-re-see-ren", meaning: "to be interested", example: { de: "Sie interessiert sich für Musik.", en: "She is interested in music." } },
          { word: "sich beeilen", phonetic: "zikh be-eye-len", meaning: "to hurry", example: { de: "Wir müssen uns beeilen!", en: "We have to hurry!" } },
        ]
      },
      {
        type: "listening",
        phrase: "Ich freue mich auf das Wochenende.",
        translation: "I am looking forward to the weekend.",
        speed: "normal"
      }
    ]
  },
  "l50": {
    id: "l50",
    title: "Verbs with Fixed Prepositions",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Verben mit Präpositionen",
        explanation: "Just like in English ('wait FOR', 'think OF'), German verbs are often locked to specific prepositions. You must memorize which preposition to use AND which case it forces.",
        examples: [
          { de: "warten AUF (+ Accusative)", en: "to wait for (Ich warte auf dich.)" },
          { de: "denken AN (+ Accusative)", en: "to think of (Ich denke an dich.)" },
          { de: "sprechen MIT (+ Dative)", en: "to speak with (Ich spreche mit dir.)" },
          { de: "träumen VON (+ Dative)", en: "to dream of (Ich träume von einem Haus.)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "warten auf", phonetic: "var-ten owf", meaning: "to wait for (+ Acc)", example: { de: "Ich warte auf den Bus.", en: "I am waiting for the bus." } },
          { word: "denken an", phonetic: "den-ken an", meaning: "to think of (+ Acc)", example: { de: "Denk an mich!", en: "Think of me!" } },
          { word: "bitten um", phonetic: "bit-ten oom", meaning: "to ask for (+ Acc)", example: { de: "Ich bitte um Hilfe.", en: "I ask for help." } },
          { word: "träumen von", phonetic: "troy-men fon", meaning: "to dream of (+ Dat)", example: { de: "Er träumt von Geld.", en: "He dreams of money." } },
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ich warte schon eine Stunde ",
        sentenceAfter: " dich!",
        missingWord: "auf",
        translation: "I've been waiting for you for an hour!"
      }
    ]
  },
  "l51": {
    id: "l51",
    title: "Relative Clauses",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Using 'who', 'which', and 'that'",
        explanation: "Relative clauses describe a noun in more detail (e.g. The man WHO is reading...). In German, the relative pronoun matches the gender/number of the noun it describes, and the case of its role IN THE RELATIVE CLAUSE. Crucially, relative clauses push the verb to the END.",
        examples: [
          { de: "Der Mann, [der] ein Buch liest, ist mein Vater.", en: "The man [who] is reading a book is my father." },
          { de: "Das Auto, [das] ich kaufe, ist rot.", en: "The car [that] I am buying is red." },
          { de: "Die Frau, [der] ich helfe, ist nett.", en: "The woman [whom] I help is nice. (Dative 'der' because helfen requires Dative)" }
        ]
      },
      {
        type: "listening",
        phrase: "Das ist das Buch, das ich gelesen habe.",
        translation: "That is the book that I have read.",
        speed: "slow"
      },
      {
        type: "quiz-mcq",
        question: "Der Mann, ____ dort steht, ist mein Bruder.",
        options: ["den", "dem", "das", "der"],
        correctIndex: 3,
        explanation: "The man is masculine (der), and he is the subject of the standing action in the relative clause, so it remains Nominative: 'der'."
      }
    ]
  },
  "l52": {
    id: "l52",
    title: "Infinitive with 'zu'",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Saying 'to do' something",
        explanation: "When combining two verbs without a modal verb, German uses 'zu' + Infinitive at the end of the sentence. (Like English 'I try TO sleep'). If the verb is separable, 'zu' goes right in the middle!",
        examples: [
          { de: "Ich versuche, zu schlafen.", en: "I try to sleep." },
          { de: "Es ist wichtig, Deutsch zu lernen.", en: "It is important to learn German." },
          { de: "Ich habe vergessen, dich an[zu]rufen.", en: "I forgot to call you. (an-zu-rufen)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "versuchen", phonetic: "fer-zoo-khen", meaning: "to try", example: { de: "Ich versuche es.", en: "I try it." } },
          { word: "vergessen", phonetic: "fer-ges-sen", meaning: "to forget", example: { de: "Ich habe es vergessen.", en: "I forgot it." } },
          { word: "wichtig", phonetic: "vikh-tikh", meaning: "important", example: { de: "Das ist sehr wichtig.", en: "That is very important." } },
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Hast du vergessen, Milch ",
        sentenceAfter: " kaufen?",
        missingWord: "zu",
        translation: "Did you forget to buy milk?"
      }
    ]
  },
  "l53": {
    id: "l53",
    title: "The Passive Voice",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Das Passiv",
        explanation: "The passive voice is used when the ACTION is more important than WHO is doing it. In English we use 'to be' + Past Participle (The house IS built). In German, we use 'werden' (to become) + Past Participle.",
        examples: [
          { de: "Active: Der Mann baut das Haus.", en: "The man builds the house." },
          { de: "Passive: Das Haus wird (von dem Mann) gebaut.", en: "The house is built (by the man)." },
          { de: "Das Auto wird repariert.", en: "The car is being repaired." }
        ]
      },
      {
        type: "conjugation-drill",
        verb: "werden",
        translation: "to become (used for Passive and Future)",
        tense: "Present",
        pronouns: ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"],
        correctForms: ["werde", "wirst", "wird", "werden", "werdet", "werden"],
        hint: "Watch out for the vowel shift in 'du' and 'er/sie/es'."
      },
      {
        type: "listening",
        phrase: "Die Brücke wird dieses Jahr repariert.",
        translation: "The bridge is being repaired this year.",
        speed: "normal"
      }
    ]
  },
  "l54": {
    id: "l54",
    title: "The Plusquamperfekt",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "The Past Perfect",
        explanation: "To talk about something that happened BEFORE another event in the past, use the Plusquamperfekt. It is formed just like the Perfekt, but you use the simple past of the auxiliary verb (hatte or war).",
        examples: [
          { de: "Ich hatte das Buch schon gelesen, bevor der Film begann.", en: "I HAD already read the book, before the movie began." },
          { de: "Als er ankam, war sie schon gegangen.", en: "When he arrived, she HAD already gone." }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Translate: 'I had eaten.'",
        options: ["Ich habe gegessen.", "Ich hatte gegessen.", "Ich aß.", "Ich esse."],
        correctIndex: 1,
        explanation: "'hatte' (had) + 'gegessen' (eaten) forms the Past Perfect."
      }
    ]
  },
  "l55": {
    id: "l55",
    title: "N-Declension (Weak Nouns)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "The N-Deklination",
        explanation: "Certain masculine nouns are 'weak'. If they are NOT in the Nominative case, they must take an extra '-n' or '-en' at the end of the word. These are often people, animals, or nationalities ending in -e, -ent, -ist.",
        examples: [
          { de: "der Junge (Nom) -> Ich sehe den Jungen (Acc).", en: "the boy -> I see the boy." },
          { de: "der Student (Nom) -> Ich helfe dem Studenten (Dat).", en: "the student -> I help the student." },
          { de: "der Herr (Nom) -> Das Auto des Herrn (Gen).", en: "the gentleman/mr -> the car of the gentleman." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "der Junge", phonetic: "yoong-uh", meaning: "the boy", example: { de: "Der Junge spielt.", en: "The boy plays." } },
          { word: "der Kunde", phonetic: "koon-duh", meaning: "the customer", example: { de: "Ich helfe dem Kunden.", en: "I help the customer." } },
          { word: "der Kollege", phonetic: "ko-lay-guh", meaning: "the colleague", example: { de: "Ich spreche mit dem Kollegen.", en: "I speak with the colleague." } },
          { word: "der Polizist", phonetic: "po-li-tsist", meaning: "the police officer", example: { de: "Fragen Sie den Polizisten.", en: "Ask the police officer." } },
        ]
      }
    ]
  },
  "l56": {
    id: "l56",
    title: "Work & Professional Life",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "der Lebenslauf", phonetic: "lay-bens-lowf", meaning: "the resume/CV", example: { de: "Ich schicke meinen Lebenslauf.", en: "I send my resume." } },
          { word: "die Bewerbung", phonetic: "be-vair-boong", meaning: "the application", example: { de: "Ich schreibe eine Bewerbung.", en: "I write an application." } },
          { word: "das Vorstellungsgespräch", phonetic: "for-shtel-loongs-ge-shpraykh", meaning: "the job interview", example: { de: "Morgen habe ich ein Vorstellungsgespräch.", en: "Tomorrow I have a job interview." } },
          { word: "der Vertrag", phonetic: "fer-trahk", meaning: "the contract", example: { de: "Ich unterschreibe den Vertrag.", en: "I sign the contract." } },
          { word: "verdienen", phonetic: "fer-dee-nen", meaning: "to earn", example: { de: "Wie viel verdienst du?", en: "How much do you earn?" } },
          { word: "kündigen", phonetic: "kün-di-gen", meaning: "to quit / resign / fire", example: { de: "Er hat seinen Job gekündigt.", en: "He quit his job." } },
        ]
      },
      {
        type: "speaking",
        phrase: "Ich möchte mich für diese Stelle bewerben.",
        translation: "I would like to apply for this position.",
        phonetic: "ikh mökh-tuh mikh für dee-zuh shtel-luh be-vair-ben",
        tip: "sich bewerben um/für = to apply for a job."
      }
    ]
  },
  "l57": {
    id: "l57",
    title: "Expressing Opinions",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Meinung", phonetic: "my-noong", meaning: "the opinion", example: { de: "Meiner Meinung nach ist das falsch.", en: "In my opinion, that is wrong." } },
          { word: "denken", phonetic: "den-ken", meaning: "to think", example: { de: "Ich denke, dass...", en: "I think that..." } },
          { word: "glauben", phonetic: "glow-ben", meaning: "to believe", example: { de: "Ich glaube, er hat recht.", en: "I believe he is right." } },
          { word: "zustimmen", phonetic: "tsoo-shtim-men", meaning: "to agree (+ Dat)", example: { de: "Da stimme ich dir zu.", en: "I agree with you there." } },
          { word: "recht haben", phonetic: "rekht ha-ben", meaning: "to be right", example: { de: "Du hast völlig recht.", en: "You are completely right." } },
        ]
      },
      {
        type: "grammar",
        title: "Meiner Meinung nach...",
        explanation: "To say 'in my opinion', German uses 'Meiner Meinung nach'. Because this is a prepositional phrase taking up Position 1, the verb must immediately follow it in Position 2.",
        examples: [
          { de: "[Meiner Meinung nach] [ist] das eine gute Idee.", en: "In my opinion, that is a good idea." }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Da ",
        sentenceAfter: " ich dir völlig zu.",
        missingWord: "stimme",
        translation: "I completely agree with you on that."
      }
    ]
  },
  "l58": {
    id: "l58",
    title: "Environment & Nature",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Umwelt", phonetic: "oom-velt", meaning: "the environment", example: { de: "Wir müssen die Umwelt schützen.", en: "We must protect the environment." } },
          { word: "der Müll", phonetic: "müll", meaning: "the trash / garbage", example: { de: "Trennen Sie den Müll?", en: "Do you separate the trash?" } },
          { word: "schützen", phonetic: "shüt-tsen", meaning: "to protect", example: { de: "Umweltschutz ist wichtig.", en: "Environmental protection is important." } },
          { word: "verschmutzen", phonetic: "fer-shmoot-tsen", meaning: "to pollute", example: { de: "Die Luft ist verschmutzt.", en: "The air is polluted." } },
          { word: "das Klima", phonetic: "klee-ma", meaning: "the climate", example: { de: "Der Klimawandel ist ein Problem.", en: "Climate change is a problem." } },
        ]
      },
      {
        type: "listening",
        phrase: "Wir müssen erneuerbare Energien nutzen, um das Klima zu schützen.",
        translation: "We must use renewable energies to protect the climate.",
        speed: "normal"
      }
    ]
  },
  "l59": {
    id: "l59",
    title: "Media & Technology",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "der Bildschirm", phonetic: "bilt-sheerm", meaning: "the screen / monitor", example: { de: "Mein Bildschirm ist kaputt.", en: "My screen is broken." } },
          { word: "die Tastatur", phonetic: "tas-ta-toor", meaning: "the keyboard", example: { de: "Ich brauche eine neue Tastatur.", en: "I need a new keyboard." } },
          { word: "die Nachricht", phonetic: "nakh-rikht", meaning: "the message / news", example: { de: "Hast du meine Nachricht bekommen?", en: "Did you get my message?" } },
          { word: "herunterladen", phonetic: "he-roon-ter-lah-den", meaning: "to download", example: { de: "Ich lade die App herunter.", en: "I am downloading the app." } },
          { word: "speichern", phonetic: "shpy-khern", meaning: "to save (data)", example: { de: "Hast du das Dokument gespeichert?", en: "Did you save the document?" } },
        ]
      },
      {
        type: "grammar",
        title: "Denglish",
        explanation: "In modern technology, German adopts many English words and applies German grammar rules to them.",
        examples: [
          { de: "downloaden -> Er hat die Datei downgeloadet.", en: "He downloaded the file." },
          { de: "googeln -> Ich habe das gegoogelt.", en: "I googled that." }
        ]
      }
    ]
  },
  "l60": {
    id: "l60",
    title: "Housing & Real Estate",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Miete", phonetic: "mee-tuh", meaning: "the rent", example: { de: "Die Miete in München ist hoch.", en: "Rent in Munich is high." } },
          { word: "der Vermieter", phonetic: "fer-mee-ter", meaning: "the landlord", example: { de: "Mein Vermieter ist sehr nett.", en: "My landlord is very nice." } },
          { word: "der Mieter", phonetic: "mee-ter", meaning: "the tenant", example: { de: "Wir suchen neue Mieter.", en: "We are looking for new tenants." } },
          { word: "einziehen", phonetic: "yn-tsee-en", meaning: "to move in", example: { de: "Wann können wir einziehen?", en: "When can we move in?" } },
          { word: "umziehen", phonetic: "oom-tsee-en", meaning: "to move (change residence)", example: { de: "Ich ziehe nächsten Monat um.", en: "I am moving next month." } },
          { word: "der Vertrag", phonetic: "fer-trahk", meaning: "the contract", example: { de: "Der Mietvertrag ist unterschrieben.", en: "The lease is signed." } },
        ]
      },
      {
        type: "speaking",
        phrase: "Die Wohnung ist hell und ruhig, aber die Miete ist hoch.",
        translation: "The apartment is bright and quiet, but the rent is high.",
        phonetic: "dee vo-noong ist hel oont roo-ikh, ah-ber dee mee-tuh ist hokh",
        tip: "'Wohnung' (apartment) and 'Miete' (rent) are essential vocab for living in Germany."
      }
    ]
  }
};
