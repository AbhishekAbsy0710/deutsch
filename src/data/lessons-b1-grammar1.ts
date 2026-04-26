import { Lesson } from "./lessons";

export const lessonsB1Grammar1: Record<string, Lesson> = {
  "lb1_01": {
    id: "lb1_01",
    title: "Präteritum Mastery (Irregular Verbs)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Why Präteritum Matters at B1",
        explanation: "At A2 you learned 'war' and 'hatte'. At B1, you MUST know the Präteritum of ALL common irregular verbs. It's the standard for written narration, news, and formal contexts. Perfekt is for speaking, Präteritum is for writing.",
        examples: [
          { de: "Er ging nach Hause. (gehen → ging)", en: "He went home." },
          { de: "Sie sprach drei Sprachen. (sprechen → sprach)", en: "She spoke three languages." },
          { de: "Wir fuhren nach Berlin. (fahren → fuhr)", en: "We drove to Berlin." },
          { de: "Er fand die Lösung. (finden → fand)", en: "He found the solution." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "gehen → ging", phonetic: "ging", meaning: "went", example: { de: "Er ging zur Arbeit.", en: "He went to work." } },
          { word: "kommen → kam", phonetic: "kahm", meaning: "came", example: { de: "Sie kam um acht Uhr.", en: "She came at eight." } },
          { word: "sprechen → sprach", phonetic: "shprakh", meaning: "spoke", example: { de: "Er sprach sehr leise.", en: "He spoke very quietly." } },
          { word: "fahren → fuhr", phonetic: "foor", meaning: "drove", example: { de: "Wir fuhren mit dem Zug.", en: "We traveled by train." } },
          { word: "geben → gab", phonetic: "gahp", meaning: "gave", example: { de: "Sie gab mir das Buch.", en: "She gave me the book." } },
          { word: "nehmen → nahm", phonetic: "nahm", meaning: "took", example: { de: "Er nahm den Bus.", en: "He took the bus." } },
          { word: "lesen → las", phonetic: "lahs", meaning: "read (past)", example: { de: "Ich las die Zeitung.", en: "I read the newspaper." } },
          { word: "schreiben → schrieb", phonetic: "shreep", meaning: "wrote", example: { de: "Sie schrieb einen Brief.", en: "She wrote a letter." } },
          { word: "sitzen → saß", phonetic: "zahs", meaning: "sat", example: { de: "Er saß am Tisch.", en: "He sat at the table." } },
          { word: "stehen → stand", phonetic: "shtant", meaning: "stood", example: { de: "Sie stand vor der Tür.", en: "She stood at the door." } },
          { word: "tragen → trug", phonetic: "trook", meaning: "wore/carried", example: { de: "Sie trug ein rotes Kleid.", en: "She wore a red dress." } },
          { word: "schlafen → schlief", phonetic: "shleef", meaning: "slept", example: { de: "Das Kind schlief ein.", en: "The child fell asleep." } }
        ]
      },
      {
        type: "conjugation-drill",
        verb: "gehen (Präteritum)",
        translation: "to go (simple past)",
        tense: "Präteritum",
        pronouns: ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"],
        correctForms: ["ging", "gingst", "ging", "gingen", "gingt", "gingen"],
        hint: "No vowel change between ich/er forms — they're the same!"
      },
      {
        type: "quiz-mcq",
        question: "Which is the correct Präteritum? 'Sie ____ den ganzen Tag.' (lesen)",
        options: ["las", "leste", "list", "gelesen"],
        correctIndex: 0,
        explanation: "lesen → las (irregular). The Präteritum of strong verbs changes the stem vowel."
      }
    ]
  },
  "lb1_02": {
    id: "lb1_02",
    title: "Konjunktiv II Expanded (Wishes & Polite Forms)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Beyond 'würde': Real Konjunktiv II Forms",
        explanation: "At A2 you learned 'würde + infinitive' and 'hätte/wäre'. At B1, you need MORE forms: könnte, müsste, dürfte, sollte, wüsste, bräuchte, käme, ginge, ließe. These sound more natural than 'würde'.",
        examples: [
          { de: "Könntest du mir helfen? (not: Würdest du mir helfen können?)", en: "Could you help me?" },
          { de: "Das wäre toll! (not: Das würde toll sein!)", en: "That would be great!" },
          { de: "Wenn ich reich wäre, würde ich ein Haus kaufen.", en: "If I were rich, I would buy a house." },
          { de: "An deiner Stelle würde ich zum Arzt gehen.", en: "In your place, I would go to the doctor." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "wäre", phonetic: "vay-re", meaning: "would be", example: { de: "Es wäre schön, dich zu sehen.", en: "It would be nice to see you." } },
          { word: "hätte", phonetic: "het-te", meaning: "would have", example: { de: "Ich hätte gern einen Kaffee.", en: "I would like a coffee." } },
          { word: "könnte", phonetic: "könn-te", meaning: "could", example: { de: "Könnten Sie das wiederholen?", en: "Could you repeat that?" } },
          { word: "müsste", phonetic: "müss-te", meaning: "would have to", example: { de: "Ich müsste eigentlich lernen.", en: "I should actually be studying." } },
          { word: "dürfte", phonetic: "dürf-te", meaning: "would be allowed / probably", example: { de: "Das dürfte stimmen.", en: "That's probably right." } },
          { word: "wüsste", phonetic: "vüss-te", meaning: "would know", example: { de: "Ich wüsste gern, warum.", en: "I would like to know why." } },
          { word: "gäbe", phonetic: "gay-be", meaning: "would give / there would be", example: { de: "Wenn es mehr Zeit gäbe...", en: "If there were more time..." } },
          { word: "käme", phonetic: "kay-me", meaning: "would come", example: { de: "Wenn er käme, wäre ich froh.", en: "If he came, I would be happy." } }
        ]
      },
      {
        type: "grammar",
        title: "Wishes with 'wenn...nur'",
        explanation: "To express wishes, use 'Wenn ich nur...' + Konjunktiv II. The verb goes to the end. You can also drop 'wenn' and start with the verb.",
        examples: [
          { de: "Wenn ich nur mehr Zeit hätte!", en: "If only I had more time!" },
          { de: "Hätte ich nur mehr Geld!", en: "If only I had more money! (no 'wenn')" },
          { de: "Wenn es nur nicht so kalt wäre!", en: "If only it weren't so cold!" }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "An deiner Stelle ",
        sentenceAfter: " ich zum Arzt gehen.",
        missingWord: "würde",
        translation: "In your place, I would go to the doctor."
      }
    ]
  },
  "lb1_03": {
    id: "lb1_03",
    title: "Konjunktiv II Past (Regrets & Hypotheticals)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "What IF Something Had Happened?",
        explanation: "To talk about unreal situations in the PAST ('If I had known...', 'I would have gone...'), use hätte/wäre + Partizip II. This is like English 'would have + past participle'.",
        examples: [
          { de: "Wenn ich das gewusst hätte, wäre ich gekommen.", en: "If I had known that, I would have come." },
          { de: "Ich hätte dir geholfen, wenn du mich gefragt hättest.", en: "I would have helped you if you had asked me." },
          { de: "Er wäre nicht gefallen, wenn er aufgepasst hätte.", en: "He wouldn't have fallen if he had been careful." }
        ]
      },
      {
        type: "grammar",
        title: "Expressing Regret",
        explanation: "Use this structure to express regret: 'Ich hätte...' (I should have/wish I had).",
        examples: [
          { de: "Ich hätte mehr lernen sollen.", en: "I should have studied more." },
          { de: "Du hättest anrufen sollen.", en: "You should have called." },
          { de: "Wir hätten früher losfahren sollen.", en: "We should have left earlier." }
        ]
      },
      {
        type: "quiz-mcq",
        question: "How do you say: 'If I had known, I would have stayed.'?",
        options: [
          "Wenn ich wusste, bleibe ich.",
          "Wenn ich gewusst hätte, wäre ich geblieben.",
          "Wenn ich wüsste, würde ich bleiben.",
          "Ich habe gewusst und bin geblieben."
        ],
        correctIndex: 1,
        explanation: "Past hypothetical = hätte/wäre + Partizip II in BOTH clauses. 'gewusst hätte' (had known) + 'wäre geblieben' (would have stayed)."
      }
    ]
  },
  "lb1_04": {
    id: "lb1_04",
    title: "Passive Voice in All Tenses",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Passive: The Full Picture",
        explanation: "The passive voice uses 'werden' + Partizip II. You already know Präsens Passive. Now learn it in ALL tenses. The agent (who does it) uses 'von + Dativ'.",
        examples: [
          { de: "Präsens: Das Haus wird gebaut.", en: "The house is being built." },
          { de: "Präteritum: Das Haus wurde gebaut.", en: "The house was built." },
          { de: "Perfekt: Das Haus ist gebaut worden.", en: "The house has been built." },
          { de: "Plusquamperfekt: Das Haus war gebaut worden.", en: "The house had been built." },
          { de: "Futur: Das Haus wird gebaut werden.", en: "The house will be built." }
        ]
      },
      {
        type: "grammar",
        title: "Key Detail: worden vs. geworden",
        explanation: "In Passive Perfekt, 'werden' becomes 'worden' (NOT 'geworden'!). 'Geworden' means 'became' (Aktiv). 'Worden' is for passive only.",
        examples: [
          { de: "Passiv: Das Auto ist repariert WORDEN.", en: "The car has been repaired. (passive)" },
          { de: "Aktiv: Er ist Arzt GEWORDEN.", en: "He has become a doctor. (active, 'became')" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which sentence is Passive Perfekt?",
        options: [
          "Das Buch ist gelesen geworden.",
          "Das Buch ist gelesen worden.",
          "Das Buch wird gelesen worden.",
          "Das Buch hat gelesen worden."
        ],
        correctIndex: 1,
        explanation: "Passive Perfekt = ist + Partizip II + WORDEN (not geworden!). 'ist gelesen worden' = has been read."
      }
    ]
  },
  "lb1_05": {
    id: "lb1_05",
    title: "Passive with Modal Verbs",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Modal + Passive = Power Combo",
        explanation: "Combine modal verbs with passive to express necessity, possibility, or permission in passive voice. Structure: Modal verb (conjugated) + Partizip II + werden (infinitive).",
        examples: [
          { de: "Das muss gemacht werden.", en: "That must be done." },
          { de: "Das kann repariert werden.", en: "That can be repaired." },
          { de: "Der Patient soll untersucht werden.", en: "The patient should be examined." },
          { de: "Das darf nicht vergessen werden.", en: "That must not be forgotten." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "muss...werden", phonetic: "moos...vair-den", meaning: "must be (done)", example: { de: "Die Arbeit muss erledigt werden.", en: "The work must be completed." } },
          { word: "kann...werden", phonetic: "kan...vair-den", meaning: "can be (done)", example: { de: "Das Problem kann gelöst werden.", en: "The problem can be solved." } },
          { word: "soll...werden", phonetic: "zol...vair-den", meaning: "should be (done)", example: { de: "Die E-Mail soll heute geschickt werden.", en: "The email should be sent today." } },
          { word: "darf nicht...werden", phonetic: "darf nikht...vair-den", meaning: "must not be (done)", example: { de: "Das Fenster darf nicht geöffnet werden.", en: "The window must not be opened." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Die Aufgabe ",
        sentenceAfter: " bis morgen erledigt werden.",
        missingWord: "muss",
        translation: "The task must be completed by tomorrow."
      }
    ]
  },
  "lb1_06": {
    id: "lb1_06",
    title: "Zustandspassiv vs. Vorgangspassiv",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Two Types of Passive",
        explanation: "German has TWO passives! The Vorgangspassiv (werden + PP) describes the PROCESS/ACTION. The Zustandspassiv (sein + PP) describes the resulting STATE. Think: 'The door is BEING opened' vs. 'The door IS open'.",
        examples: [
          { de: "Vorgangspassiv: Die Tür wird geöffnet.", en: "The door is being opened. (action happening NOW)" },
          { de: "Zustandspassiv: Die Tür ist geöffnet.", en: "The door is open. (result/state)" },
          { de: "Vorgangspassiv: Das Auto wird repariert.", en: "The car is being repaired. (action)" },
          { de: "Zustandspassiv: Das Auto ist repariert.", en: "The car is repaired. (done, result)" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Das Geschäft ist geschlossen.' — Is this Vorgangs- or Zustandspassiv?",
        options: ["Vorgangspassiv (action)", "Zustandspassiv (state)", "Active voice", "Perfekt"],
        correctIndex: 1,
        explanation: "'ist geschlossen' = IS closed (state). If it were 'wird geschlossen' = IS BEING closed (action)."
      }
    ]
  },
  "lb1_07": {
    id: "lb1_07",
    title: "'lassen' — The Swiss Army Knife Verb",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Three Meanings of 'lassen'",
        explanation: "'Lassen' is incredibly useful. It means: 1) to let/allow, 2) to have something done (causative), 3) to leave something. It works like a modal verb with infinitive at the end.",
        examples: [
          { de: "1. Lass mich in Ruhe! (= Let me alone!)", en: "to let / to allow" },
          { de: "2. Ich lasse mein Auto reparieren. (= I'm having my car repaired)", en: "to have something done (causative)" },
          { de: "3. Ich habe mein Handy zu Hause gelassen.", en: "I left my phone at home." },
          { de: "Lass uns gehen! = Let's go!", en: "'Lass uns...' = Let's..." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "lassen (lässt, ließ, gelassen)", phonetic: "las-sen", meaning: "to let / to have done / to leave", example: { de: "Lass das!", en: "Stop that! / Leave it!" } },
          { word: "sich...lassen", phonetic: "zikh...las-sen", meaning: "can be (done) — possibility", example: { de: "Das lässt sich machen.", en: "That can be done. / That's doable." } },
          { word: "Lass uns...", phonetic: "las oons", meaning: "Let's...", example: { de: "Lass uns ins Kino gehen!", en: "Let's go to the cinema!" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Ich lasse mir die Haare schneiden.' means:",
        options: ["I cut my hair myself.", "I'm having my hair cut (by someone).", "I let my hair grow.", "I leave my hair."],
        correctIndex: 1,
        explanation: "'Sich etwas machen lassen' = to have something done for you. It's the causative use — someone else does it."
      }
    ]
  },
  "lb1_08": {
    id: "lb1_08",
    title: "Futur I for Assumptions & Predictions",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Futur I ≠ Just Future!",
        explanation: "At A2 you learned 'werden + Infinitiv' for the future. But at B1, you discover its SECRET USE: expressing assumptions/guesses about the present! Words like 'wohl', 'wahrscheinlich', 'sicher' strengthen this.",
        examples: [
          { de: "Future: Morgen werde ich früh aufstehen.", en: "Tomorrow I will get up early." },
          { de: "Assumption: Er wird wohl krank sein. (= He's probably sick NOW)", en: "He is probably sick." },
          { de: "Assumption: Sie wird sicher schon zu Hause sein.", en: "She's surely already at home." },
          { de: "Promise: Ich werde das nie vergessen!", en: "I will never forget this!" }
        ]
      },
      {
        type: "grammar",
        title: "Signal Words for Assumptions",
        explanation: "When you see 'werden' + 'wohl/sicher/wahrscheinlich', it's almost always an assumption about NOW, not a prediction about the future.",
        examples: [
          { de: "Er wird wohl im Büro sein. (= He's probably at the office now)", en: "wohl = probably" },
          { de: "Das wird schon stimmen. (= That's probably correct)", en: "schon = probably/surely (emphasis)" },
          { de: "Sie werden sicher Hunger haben.", en: "They surely must be hungry." }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Er wird wohl zu Hause sein.' — When is this about?",
        options: ["The future", "The present (assumption)", "The past", "A wish"],
        correctIndex: 1,
        explanation: "'werden + wohl' signals an assumption about the PRESENT. He's probably at home RIGHT NOW."
      }
    ]
  }
};
