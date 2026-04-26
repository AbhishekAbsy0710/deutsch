import { Lesson } from "./lessons";

export const lessonsB1Grammar4: Record<string, Lesson> = {
  "lb1_25": {
    id: "lb1_25",
    title: "Nomen-Verb-Verbindungen (Fixed Noun-Verb Combos)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "German's Formal Phrasal Verbs",
        explanation: "German has fixed combinations of nouns + verbs that function as a unit. They're extremely common in formal/written language and exams. Think of them as 'power phrases' that make you sound more advanced.",
        examples: [
          { de: "eine Entscheidung treffen = entscheiden", en: "to make a decision (not 'machen'!)" },
          { de: "eine Frage stellen = fragen", en: "to ask a question (not 'fragen eine Frage'!)" },
          { de: "Rücksicht nehmen auf = rücksichtsvoll sein", en: "to be considerate of" },
          { de: "eine Rolle spielen = wichtig sein", en: "to play a role / to matter" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "eine Entscheidung treffen", phonetic: "ent-shy-doong tref-fen", meaning: "to make a decision", example: { de: "Wir müssen eine Entscheidung treffen.", en: "We must make a decision." } },
          { word: "eine Frage stellen", phonetic: "frah-ge shtel-len", meaning: "to ask a question", example: { de: "Darf ich eine Frage stellen?", en: "May I ask a question?" } },
          { word: "Rücksicht nehmen auf", phonetic: "rük-zikht nay-men", meaning: "to be considerate of", example: { de: "Nimm Rücksicht auf andere!", en: "Be considerate of others!" } },
          { word: "Bescheid sagen/geben", phonetic: "be-shyt zah-gen", meaning: "to let someone know", example: { de: "Sag mir Bescheid, wenn du kommst.", en: "Let me know when you're coming." } },
          { word: "Wert legen auf", phonetic: "vairt lay-gen", meaning: "to value / attach importance to", example: { de: "Ich lege Wert auf Pünktlichkeit.", en: "I value punctuality." } },
          { word: "in Frage kommen", phonetic: "in frah-ge", meaning: "to be an option / to come into question", example: { de: "Das kommt nicht in Frage!", en: "That's out of the question!" } },
          { word: "zur Verfügung stehen", phonetic: "tsoor fer-fü-goong", meaning: "to be available", example: { de: "Ich stehe Ihnen zur Verfügung.", en: "I'm at your disposal." } },
          { word: "einen Beitrag leisten", phonetic: "by-trahk lys-ten", meaning: "to make a contribution", example: { de: "Jeder kann einen Beitrag leisten.", en: "Everyone can make a contribution." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Können Sie mir bitte ",
        sentenceAfter: " sagen, wann der Kurs beginnt?",
        missingWord: "Bescheid",
        translation: "Can you please let me know when the course starts?"
      }
    ]
  },
  "lb1_26": {
    id: "lb1_26",
    title: "Advanced Connectors (Konnektoren-Inventar)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Beyond und/aber/weil",
        explanation: "B1 requires a rich toolkit of connectors to express complex relationships. These make your writing and speaking sound sophisticated and earn you exam points.",
        examples: [
          { de: "deshalb / deswegen / darum / daher = therefore", en: "Result: all four mean 'therefore' (V2 word order)" },
          { de: "trotzdem / dennoch = nevertheless", en: "Concession: 'despite that' (V2 word order)" },
          { de: "außerdem = besides / furthermore", en: "Addition: adds another point" },
          { de: "allerdings = however / though", en: "Restriction: softer than 'aber'" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "deshalb / deswegen", phonetic: "des-halp / des-vay-gen", meaning: "therefore / that's why", example: { de: "Ich war müde, deshalb bin ich früh ins Bett.", en: "I was tired, therefore I went to bed early." } },
          { word: "trotzdem", phonetic: "trots-daim", meaning: "nevertheless / anyway", example: { de: "Es regnete. Trotzdem ging ich raus.", en: "It rained. Nevertheless I went out." } },
          { word: "außerdem", phonetic: "ow-ser-daim", meaning: "furthermore / besides", example: { de: "Außerdem bin ich auch noch krank.", en: "Furthermore, I'm also sick." } },
          { word: "allerdings", phonetic: "al-ler-dings", meaning: "however / though / admittedly", example: { de: "Es ist günstig, allerdings nicht perfekt.", en: "It's cheap, however not perfect." } },
          { word: "einerseits...andererseits", phonetic: "ay-ner-zyts...an-derer-zyts", meaning: "on the one hand...on the other", example: { de: "Einerseits ist es teuer, andererseits ist es gut.", en: "On the one hand it's expensive, on the other it's good." } },
          { word: "folglich", phonetic: "folk-likh", meaning: "consequently", example: { de: "Er lernte nie, folglich fiel er durch.", en: "He never studied, consequently he failed." } },
          { word: "nämlich", phonetic: "naim-likh", meaning: "namely / you see (reason)", example: { de: "Ich kann nicht. Ich bin nämlich krank.", en: "I can't. You see, I'm sick." } },
          { word: "zwar...aber", phonetic: "tsvar...ah-ber", meaning: "admittedly...but", example: { de: "Es ist zwar teuer, aber gut.", en: "It's admittedly expensive, but good." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which connector means 'on the one hand...on the other hand'?",
        options: ["entweder...oder", "einerseits...andererseits", "weder...noch", "sowohl...als auch"],
        correctIndex: 1,
        explanation: "'Einerseits...andererseits' = on the one hand...on the other. It's essential for B1 Sprechen presentations (Vorteile/Nachteile)."
      }
    ]
  },
  "lb1_27": {
    id: "lb1_27",
    title: "je...desto / je...umso (The More...The More)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Proportional Comparisons",
        explanation: "'Je + comparative...desto/umso + comparative' expresses that two things change proportionally. 'Je' clause = subordinate (verb at end), 'desto/umso' clause = main clause (verb immediately after desto).",
        examples: [
          { de: "Je mehr ich lerne, desto besser verstehe ich.", en: "The more I study, the better I understand." },
          { de: "Je älter man wird, umso weiser wird man.", en: "The older you get, the wiser you become." },
          { de: "Je früher, desto besser!", en: "The sooner, the better!" },
          { de: "Je länger er wartet, desto nervöser wird er.", en: "The longer he waits, the more nervous he gets." }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Je mehr ich übe, ",
        sentenceAfter: " besser werde ich.",
        missingWord: "desto",
        translation: "The more I practice, the better I get."
      }
    ]
  },
  "lb1_28": {
    id: "lb1_28",
    title: "als ob / als wenn (As If)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Describing Appearances vs. Reality",
        explanation: "'Als ob' + Konjunktiv II expresses that something SEEMS a certain way but ISN'T really. The verb goes to the end after 'als ob'. With just 'als' (no ob), the verb comes IMMEDIATELY after 'als'.",
        examples: [
          { de: "Er tut so, als ob er schlafen würde.", en: "He acts as if he were sleeping." },
          { de: "Er tut so, als würde er schlafen. (without 'ob')", en: "Same meaning, different structure." },
          { de: "Sie sieht aus, als ob sie geweint hätte.", en: "She looks as if she had been crying." },
          { de: "Es klingt, als ob er recht hätte.", en: "It sounds as if he were right." }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Er spricht so, als ob er alles ____.' (wissen, Konjunktiv II)",
        options: ["wusste", "wüsste", "weiß", "gewusst"],
        correctIndex: 1,
        explanation: "'Als ob' requires Konjunktiv II: wüsste (would know). It signals something that ISN'T necessarily true."
      }
    ]
  },
  "lb1_29": {
    id: "lb1_29",
    title: "brauchen + zu + Infinitive",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "The Softer 'müssen nicht'",
        explanation: "'Brauchen...zu' works like a negative modal verb. It means 'don't need to' (= müssen nicht). It's ONLY used in negative sentences or with 'nur'. NEVER in positive!",
        examples: [
          { de: "Du brauchst das nicht zu machen. (= Du musst das nicht machen.)", en: "You don't need to do that." },
          { de: "Du brauchst nur zu fragen. (= Du musst nur fragen.)", en: "You only need to ask." },
          { de: "Er braucht heute nicht zu kommen.", en: "He doesn't need to come today." },
          { de: "⚠️ Du brauchst zu lernen. ❌ (WRONG — never positive!)", en: "Correct: Du musst lernen. ✅" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which usage of 'brauchen' is CORRECT?",
        options: [
          "Du brauchst das zu machen.",
          "Du brauchst das nicht zu machen.",
          "Du brauchst machen das.",
          "Du brauchst das gemacht."
        ],
        correctIndex: 1,
        explanation: "'Brauchen...zu' is ONLY used negatively or with 'nur'. 'Du brauchst das NICHT zu machen.' ✅"
      }
    ]
  },
  "lb1_30": {
    id: "lb1_30",
    title: "Verbs with Two Objects (Dative + Accusative)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Giving, Showing, Telling — Two Objects",
        explanation: "Certain verbs take TWO objects: a person (Dative = indirect object) and a thing (Accusative = direct object). The order: Dative person BEFORE Accusative thing. But if both are pronouns, Accusative comes FIRST!",
        examples: [
          { de: "Ich gebe DEM Mann (Dat) DAS Buch (Acc).", en: "I give the man the book." },
          { de: "Ich gebe ES (Acc) IHM (Dat). ← pronouns reverse!", en: "I give it to him. (Acc pronoun before Dat pronoun)" },
          { de: "Er zeigt MIR (Dat) DEN Weg (Acc).", en: "He shows me the way." },
          { de: "Sie schickt IHREM Freund (Dat) EINE Nachricht (Acc).", en: "She sends her friend a message." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "geben + Dat + Acc", phonetic: "gay-ben", meaning: "to give sb sth", example: { de: "Gib mir das Salz!", en: "Give me the salt!" } },
          { word: "zeigen + Dat + Acc", phonetic: "tsy-gen", meaning: "to show sb sth", example: { de: "Zeig mir dein Foto!", en: "Show me your photo!" } },
          { word: "schicken + Dat + Acc", phonetic: "shik-ken", meaning: "to send sb sth", example: { de: "Ich schicke dir eine E-Mail.", en: "I'll send you an email." } },
          { word: "erklären + Dat + Acc", phonetic: "er-klay-ren", meaning: "to explain sth to sb", example: { de: "Erkläre mir die Aufgabe!", en: "Explain the task to me!" } },
          { word: "empfehlen + Dat + Acc", phonetic: "emp-fay-len", meaning: "to recommend sth to sb", example: { de: "Ich empfehle Ihnen das Restaurant.", en: "I recommend the restaurant to you." } },
          { word: "leihen + Dat + Acc", phonetic: "ly-en", meaning: "to lend sb sth", example: { de: "Leihst du mir dein Auto?", en: "Will you lend me your car?" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Both objects are pronouns: 'Ich gebe ____ ____.' (ihm, es)",
        options: ["ihm es", "es ihm", "es ihn", "ihm er"],
        correctIndex: 1,
        explanation: "When both objects are pronouns, Accusative comes FIRST: 'es ihm' (not 'ihm es')."
      }
    ]
  },
  "lb1_31": {
    id: "lb1_31",
    title: "Complex Sentence Word Order",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "When Multiple Clauses Collide",
        explanation: "At B1, you need to handle sentences with multiple subordinate clauses, embedded clauses, and mixed structures. The key: each clause follows its own rules (main = V2, subordinate = verb at end).",
        examples: [
          { de: "Ich glaube, [dass er kommt], [weil er es versprochen hat].", en: "Two subordinate clauses — each with verb at end." },
          { de: "[Wenn es regnet], [obwohl die Sonne scheint], nennt man das 'Sonnenschein-Regen'.", en: "Two front-loaded subordinate clauses, then V2 main clause." },
          { de: "Der Mann, [den ich gestern getroffen habe], [der in Berlin lebt], ist mein Cousin.", en: "Embedded relative clauses." }
        ]
      },
      {
        type: "grammar",
        title: "The TMP Rule Reminder (Position of Adverbials)",
        explanation: "Within a clause, adverbials follow this order: TIME (wann?) — MANNER (wie?) — PLACE (wo/wohin?). This is the expanded TeKaMoLo from A2, now applied in complex sentences.",
        examples: [
          { de: "Ich fahre [morgen] [mit dem Zug] [nach Berlin].", en: "TIME — MANNER — PLACE" },
          { de: "Er hat [gestern] [schnell] [im Supermarkt] eingekauft.", en: "When — How — Where" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which sentence structure is correct?",
        options: [
          "Ich glaube, dass er, weil er krank ist, nicht kommen wird.",
          "Ich glaube, dass er nicht wird kommen, weil er krank ist.",
          "Ich glaube, er krank ist, dass nicht kommen wird.",
          "Dass er krank ist, nicht kommen wird, ich glaube."
        ],
        correctIndex: 0,
        explanation: "An embedded clause ('weil er krank ist') can sit inside another subordinate clause ('dass er nicht kommen wird'). Each keeps its own verb-at-end rule."
      }
    ]
  }
};
