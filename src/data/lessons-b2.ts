import { Lesson } from "./lessons";

export const lessonsB2: Record<string, Lesson> = {
  "l61": {
    id: "l61",
    title: "Konjunktiv II (Present/Future)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "The Subjunctive II",
        explanation: "Konjunktiv II is used to express wishes, unreal situations, or very polite requests ('I would', 'I could', 'If I were'). It is mostly formed using 'würde' + Infinitive at the end, but 'haben', 'sein', and modal verbs use their own special forms ('hätte', 'wäre', 'könnte').",
        examples: [
          { de: "Ich würde ein Auto kaufen.", en: "I would buy a car." },
          { de: "Wenn ich reich wäre...", en: "If I were rich..." },
          { de: "Ich hätte gern einen Kaffee.", en: "I would like to have a coffee." },
          { de: "Könnten Sie mir helfen?", en: "Could you help me?" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "ich wäre", phonetic: "ikh vai-ruh", meaning: "I would be / if I were", example: { de: "Ich wäre froh.", en: "I would be glad." } },
          { word: "ich hätte", phonetic: "ikh het-tuh", meaning: "I would have / if I had", example: { de: "Ich hätte Zeit.", en: "I would have time." } },
          { word: "ich würde", phonetic: "ikh vür-duh", meaning: "I would", example: { de: "Ich würde gehen.", en: "I would go." } },
          { word: "ich könnte", phonetic: "ikh kön-tuh", meaning: "I could", example: { de: "Ich könnte dir helfen.", en: "I could help you." } },
        ]
      },
      {
        type: "quiz-mcq",
        question: "How do you politely ask 'Could you please open the window?'",
        options: ["Können Sie das Fenster aufmachen?", "Könnten Sie das Fenster aufmachen?", "Würden Sie das Fenster aufmachen können?", "Könntest Sie das Fenster aufmachen?"],
        correctIndex: 1,
        explanation: "Könnten (could) is the Konjunktiv II form of können (can) and is the most polite way to ask a question."
      }
    ]
  },
  "l62": {
    id: "l62",
    title: "Konjunktiv II (The Past)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Unreal Past (I would have...)",
        explanation: "To talk about things that DID NOT happen in the past (If I had known, I would have come), you use the Konjunktiv II forms 'hätte' or 'wäre' + the Past Participle.",
        examples: [
          { de: "Ich HÄTTE das Auto GEKAUFT.", en: "I would have bought the car." },
          { de: "Wir WÄREN nach Berlin GEFLOGEN.", en: "We would have flown to Berlin. (sein is used because fliegen is a motion verb)" },
          { de: "Wenn ich Zeit gehabt hätte, wäre ich gekommen.", en: "If I had had time, I would have come." }
        ]
      },
      {
        type: "speaking",
        phrase: "Ich hätte das nicht gemacht.",
        translation: "I wouldn't have done that.",
        phonetic: "ikh het-tuh das nikht ge-makht",
        tip: "A very common phrase to express regret or disagreement about a past action."
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Wenn ich das gewusst hätte, ",
        sentenceAfter: " ich dir geholfen.",
        missingWord: "hätte",
        translation: "If I had known that, I would have helped you."
      }
    ]
  },
  "l63": {
    id: "l63",
    title: "Passive Voice with Modal Verbs",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "It MUST be done",
        explanation: "When you mix the passive voice (werden + participle) with a modal verb (müssen, können, etc.), the modal verb takes Position 2, the Past Participle goes to the end, and 'werden' goes to the VERY end in its infinitive form.",
        examples: [
          { de: "Das Auto MUSS repariert WERDEN.", en: "The car must be repaired." },
          { de: "Das Problem KANN gelöst WERDEN.", en: "The problem can be solved." },
          { de: "Die Rechnung SOLL bezahlt WERDEN.", en: "The bill should be paid." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "reparieren", phonetic: "re-pa-ree-ren", meaning: "to repair", example: { de: "Es muss repariert werden.", en: "It must be repaired." } },
          { word: "lösen", phonetic: "lö-zen", meaning: "to solve", example: { de: "Das Problem muss gelöst werden.", en: "The problem must be solved." } },
          { word: "erledigen", phonetic: "er-lay-di-gen", meaning: "to take care of / handle", example: { de: "Das muss sofort erledigt werden.", en: "That must be taken care of immediately." } },
        ]
      },
      {
        type: "listening",
        phrase: "Die Hausaufgaben müssen bis morgen gemacht werden.",
        translation: "The homework must be done by tomorrow.",
        speed: "normal"
      }
    ]
  },
  "l64": {
    id: "l64",
    title: "Da-Words (Prepositional Adverbs)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "dafür, darüber, damit...",
        explanation: "In German, you cannot use prepositions with 'it' or 'that' when referring to objects or concepts (e.g. 'I am waiting for it'). Instead, you combine 'da-' with the preposition. If the preposition starts with a vowel, use 'dar-'.",
        examples: [
          { de: "Ich warte auf den Bus -> Ich warte DARAUF.", en: "I am waiting for it. (auf starts with a vowel, so dar+auf)" },
          { de: "Ich bin zufrieden mit dem Auto -> Ich bin DAMIT zufrieden.", en: "I am satisfied with it. (da+mit)" },
          { de: "Wir sprechen über das Problem -> Wir sprechen DARÜBER.", en: "We are talking about it." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "dafür", phonetic: "da-für", meaning: "for it / for that", example: { de: "Ich bin dafür.", en: "I am for it. (I agree)" } },
          { word: "dagegen", phonetic: "da-gay-gen", meaning: "against it", example: { de: "Ich bin dagegen.", en: "I am against it." } },
          { word: "damit", phonetic: "da-mit", meaning: "with it", example: { de: "Was machst du damit?", en: "What are you doing with it?" } },
          { word: "darüber", phonetic: "da-rü-ber", meaning: "about it", example: { de: "Lass uns darüber sprechen.", en: "Let's talk about it." } },
          { word: "daran", phonetic: "da-ran", meaning: "of it / on it", example: { de: "Ich erinnere mich daran.", en: "I remember it." } },
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Er interessiert sich für Kunst. Er liest ein Buch ",
        sentenceAfter: ".",
        missingWord: "darüber",
        translation: "He is interested in art. He is reading a book about it."
      }
    ]
  },
  "l65": {
    id: "l65",
    title: "Wo-Words",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "worauf, womit, worüber...",
        explanation: "Just like 'da-' words replace objects, 'wo-' words are used to ask QUESTIONS about objects combined with prepositions. 'What are you waiting for?' becomes 'For what are you waiting?' -> 'Worauf wartest du?'",
        examples: [
          { de: "Worauf wartest du?", en: "What are you waiting for? (warten auf)" },
          { de: "Womit schreibst du?", en: "What are you writing with? (schreiben mit)" },
          { de: "Worüber sprecht ihr?", en: "What are you talking about? (sprechen über)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "womit", phonetic: "vo-mit", meaning: "with what", example: { de: "Womit öffne ich das?", en: "What do I open this with?" } },
          { word: "worauf", phonetic: "vo-rowf", meaning: "for what / on what", example: { de: "Worauf freust du dich?", en: "What are you looking forward to?" } },
          { word: "woran", phonetic: "vo-ran", meaning: "of what / at what", example: { de: "Woran denkst du?", en: "What are you thinking of?" } },
        ]
      },
      {
        type: "listening",
        phrase: "Worüber lacht ihr?",
        translation: "What are you laughing about?",
        speed: "normal"
      }
    ]
  },
  "l66": {
    id: "l66",
    title: "Participles as Adjectives",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Partizip I und II",
        explanation: "You can turn verbs into adjectives. Partizip I (verb + 'd') describes an ONGOING action (the crying baby). Partizip II (ge- form) describes a COMPLETED action (the stolen car). Because they act as adjectives before a noun, they take normal adjective endings!",
        examples: [
          { de: "lachen (to laugh) -> lachend -> das lachende Kind", en: "the laughing child" },
          { de: "kochen (to boil) -> kochend -> das kochende Wasser", en: "the boiling water" },
          { de: "stehlen (to steal) -> gestohlen -> das gestohlene Auto", en: "the stolen car" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "How do you say 'the sleeping dog'?",
        options: ["der geschlafene Hund", "der schlafende Hund", "der schlafend Hund", "der schläfte Hund"],
        correctIndex: 1,
        explanation: "schlafen + d = schlafend (ongoing action). Add the '-e' ending for Nominative masculine after 'der' = schlafende."
      }
    ]
  },
  "l67": {
    id: "l67",
    title: "Noun-Verb Collocations",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Nomen-Verb-Verbindungen",
        explanation: "In business and academic German, simple verbs are often replaced by elegant noun-verb combinations. Instead of saying 'to decide' (entscheiden), they say 'to make a decision' (eine Entscheidung treffen).",
        examples: [
          { de: "beenden -> zu Ende bringen", en: "to bring to an end" },
          { de: "fragen -> eine Frage stellen", en: "to ask a question" },
          { de: "kritisieren -> Kritik üben an", en: "to exercise criticism on" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "eine Entscheidung treffen", phonetic: "y-nuh ent-shy-doong tref-fen", meaning: "to make a decision", example: { de: "Wir müssen eine Entscheidung treffen.", en: "We must make a decision." } },
          { word: "in Betracht ziehen", phonetic: "in be-trakht tsee-en", meaning: "to take into consideration", example: { de: "Das müssen wir in Betracht ziehen.", en: "We must take that into consideration." } },
          { word: "zur Verfügung stehen", phonetic: "tsoor fer-fü-goong shtay-en", meaning: "to be available", example: { de: "Ich stehe Ihnen zur Verfügung.", en: "I am available to you." } },
          { word: "unter Druck stehen", phonetic: "oon-ter drook shtay-en", meaning: "to be under pressure", example: { de: "Der Manager steht unter Druck.", en: "The manager is under pressure." } },
        ]
      }
    ]
  },
  "l68": {
    id: "l68",
    title: "Two-Part Conjunctions",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Doppelkonjunktionen",
        explanation: "These are conjunctions that come in pairs, used to link ideas more elegantly.",
        examples: [
          { de: "weder ... noch", en: "neither ... nor (Ich trinke weder Kaffee noch Tee.)" },
          { de: "entweder ... oder", en: "either ... or (Wir gehen entweder ins Kino oder ins Theater.)" },
          { de: "sowohl ... als auch", en: "both ... and (Er spricht sowohl Deutsch als auch Englisch.)" },
          { de: "nicht nur ... sondern auch", en: "not only ... but also" },
          { de: "je ... desto", en: "the ... the (Je mehr ich lerne, desto besser spreche ich.)" }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Er spricht nicht nur Deutsch, ",
        sentenceAfter: " auch Spanisch.",
        missingWord: "sondern",
        translation: "He speaks not only German, but also Spanish."
      }
    ]
  },
  "l69": {
    id: "l69",
    title: "Advanced Subordinate Clauses",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "indem, ohne dass, anstatt dass",
        explanation: "More complex ways to link ideas. 'Indem' means 'by doing something'. 'Ohne zu' means 'without doing something'. 'Anstatt zu' means 'instead of doing something'.",
        examples: [
          { de: "Man lernt, indem man übt.", en: "One learns BY practicing." },
          { de: "Er ging, ohne ein Wort zu sagen.", en: "He left WITHOUT saying a word." },
          { de: "Anstatt zu arbeiten, schläft er.", en: "INSTEAD OF working, he sleeps." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "indem", phonetic: "in-dem", meaning: "by (doing something)", example: { de: "Du hilfst, indem du zuhörst.", en: "You help by listening." } },
          { word: "ohne ... zu", phonetic: "oh-nuh ... tsoo", meaning: "without (doing something)", example: { de: "Sie ging, ohne zu bezahlen.", en: "She left without paying." } },
          { word: "anstatt ... zu", phonetic: "an-shtat ... tsoo", meaning: "instead of (doing something)", example: { de: "Anstatt zu helfen, schaut er fern.", en: "Instead of helping, he watches TV." } },
        ]
      }
    ]
  },
  "l70": {
    id: "l70",
    title: "Politics & Society",
    module: "B2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Regierung", phonetic: "re-gee-roong", meaning: "the government", example: { de: "Die Regierung plant neue Gesetze.", en: "The government is planning new laws." } },
          { word: "die Gesellschaft", phonetic: "ge-zel-shaft", meaning: "the society", example: { de: "Unsere Gesellschaft verändert sich.", en: "Our society is changing." } },
          { word: "die Wahl", phonetic: "vahl", meaning: "the election / choice", example: { de: "Nächstes Jahr ist die Wahl.", en: "Next year is the election." } },
          { word: "das Gesetz", phonetic: "ge-zets", meaning: "the law", example: { de: "Das neue Gesetz ist umstritten.", en: "The new law is controversial." } },
          { word: "der Bürger", phonetic: "bür-ger", meaning: "the citizen", example: { de: "Jeder Bürger hat Rechte.", en: "Every citizen has rights." } },
        ]
      },
      {
        type: "speaking",
        phrase: "Die Politiker diskutieren über das neue Gesetz.",
        translation: "The politicians are discussing the new law.",
        phonetic: "dee po-li-ti-ker dis-koo-tee-ren ü-ber das noy-uh ge-zets",
        tip: "In B2 exams, you will often have to give your opinion on a societal topic."
      }
    ]
  },
  "l71": {
    id: "l71",
    title: "Economy & Finance",
    module: "B2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Wirtschaft", phonetic: "virt-shaft", meaning: "the economy", example: { de: "Die Wirtschaft wächst.", en: "The economy is growing." } },
          { word: "das Unternehmen", phonetic: "oon-ter-nay-men", meaning: "the company / enterprise", example: { de: "Er leitet ein großes Unternehmen.", en: "He manages a large company." } },
          { word: "der Erfolg", phonetic: "er-folk", meaning: "the success", example: { de: "Das Projekt war ein großer Erfolg.", en: "The project was a huge success." } },
          { word: "die Steuer", phonetic: "shtoy-er", meaning: "the tax", example: { de: "Wir zahlen hohe Steuern.", en: "We pay high taxes." } },
          { word: "investieren", phonetic: "in-ves-tee-ren", meaning: "to invest", example: { de: "Sie investieren in Technologie.", en: "They are investing in technology." } },
        ]
      },
      {
        type: "listening",
        phrase: "Das Unternehmen plant, neue Mitarbeiter einzustellen.",
        translation: "The company plans to hire new employees.",
        speed: "normal"
      }
    ]
  },
  "l72": {
    id: "l72",
    title: "Arts & Culture",
    module: "B2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Kunst", phonetic: "koonst", meaning: "the art", example: { de: "Ich interessiere mich für moderne Kunst.", en: "I am interested in modern art." } },
          { word: "die Ausstellung", phonetic: "ows-shtel-loong", meaning: "the exhibition", example: { de: "Wir gehen in die Ausstellung.", en: "We are going to the exhibition." } },
          { word: "das Meisterwerk", phonetic: "my-ster-vairk", meaning: "the masterpiece", example: { de: "Das Gemälde ist ein Meisterwerk.", en: "The painting is a masterpiece." } },
          { word: "beeindruckend", phonetic: "be-yn-drook-ent", meaning: "impressive", example: { de: "Der Film war sehr beeindruckend.", en: "The film was very impressive." } },
        ]
      }
    ]
  },
  "l73": {
    id: "l73",
    title: "Science & Research",
    module: "B2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Wissenschaft", phonetic: "vis-sen-shaft", meaning: "science", example: { de: "Die Wissenschaft macht Fortschritte.", en: "Science is making progress." } },
          { word: "forschen", phonetic: "for-shen", meaning: "to research", example: { de: "Sie forschen an einem Medikament.", en: "They are researching a medication." } },
          { word: "das Ergebnis", phonetic: "er-gap-nis", meaning: "the result", example: { de: "Das Ergebnis der Studie ist klar.", en: "The result of the study is clear." } },
          { word: "die Entwicklung", phonetic: "ent-vik-loong", meaning: "the development", example: { de: "Das ist eine wichtige Entwicklung.", en: "That is an important development." } },
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Die Wissenschaftler haben ein neues Medikament ",
        sentenceAfter: ".",
        missingWord: "entwickelt",
        translation: "The scientists have developed a new medication."
      }
    ]
  },
  "l74": {
    id: "l74",
    title: "Expressing Probability",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "How sure are you?",
        explanation: "B2 speakers don't just say 'yes' or 'no'. They express degrees of certainty.",
        examples: [
          { de: "sicherlich (100%)", en: "certainly" },
          { de: "wahrscheinlich (80%)", en: "probably" },
          { de: "vermutlich (70%)", en: "presumably" },
          { de: "vielleicht (50%)", en: "perhaps / maybe" },
          { de: "möglicherweise (30%)", en: "possibly" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "sicherlich", phonetic: "zi-kher-likh", meaning: "certainly", example: { de: "Er kommt sicherlich.", en: "He is certainly coming." } },
          { word: "wahrscheinlich", phonetic: "var-shyn-likh", meaning: "probably", example: { de: "Es wird wahrscheinlich regnen.", en: "It will probably rain." } },
          { word: "vermutlich", phonetic: "fer-moot-likh", meaning: "presumably", example: { de: "Sie ist vermutlich im Büro.", en: "She is presumably in the office." } },
        ]
      }
    ]
  },
  "l75": {
    id: "l75",
    title: "B2 Review: Expressing Nuance",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Mastering the Details",
        explanation: "At the B2 level, communication is about nuance. You should be able to hypothesize using Konjunktiv II, describe items clearly using Relative Clauses, connect thoughts logically with Two-Part Conjunctions, and structure your arguments using Noun-Verb Collocations.",
        examples: [
          { de: "Je mehr ich lerne, desto besser verstehe ich die Nuancen der deutschen Sprache, worauf ich sehr stolz bin.", en: "The more I learn, the better I understand the nuances of the German language, of which I am very proud." }
        ]
      },
      {
        type: "listening",
        phrase: "Herzlichen Glückwunsch! Sie haben das B2-Niveau erreicht.",
        translation: "Congratulations! You have reached the B2 level.",
        speed: "normal"
      }
    ]
  }
};
