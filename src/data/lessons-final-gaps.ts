import { Lesson } from "./lessons";

export const lessonsA1New5: Record<string, Lesson> = {
  "la1_22": {
    id: "la1_22",
    title: "Where Does 'nicht' Go? (Nicht-Stellung)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "The Rules for Placing 'nicht'",
        explanation: "Placing 'nicht' correctly is one of the HARDEST parts of German. Here are the rules:\n\n1. 'Nicht' goes BEFORE what it negates\n2. If negating the WHOLE sentence, 'nicht' goes near the END\n3. 'Nicht' goes BEFORE: adjectives, adverbs, prepositional phrases, and infinitives\n4. 'Nicht' goes AFTER: the conjugated verb, definite objects, and time expressions",
        examples: [
          { de: "Ich komme NICHT. (negates whole verb → end)", en: "I'm not coming." },
          { de: "Das ist NICHT gut. (before adjective)", en: "That is not good." },
          { de: "Er fährt NICHT nach Berlin. (before prep. phrase)", en: "He's not going to Berlin." },
          { de: "Ich kenne ihn NICHT. (after pronoun object → end)", en: "I don't know him." }
        ]
      },
      {
        type: "grammar",
        title: "nicht vs. kein — Quick Reminder",
        explanation: "'Kein' replaces 'ein/eine' or zero article. 'Nicht' negates everything else.",
        examples: [
          { de: "Ich habe KEIN Auto. (ein Auto → kein Auto)", en: "'Ein' → 'kein'" },
          { de: "Ich habe KEINE Zeit. (zero article → keine)", en: "No article → 'kein'" },
          { de: "Das ist NICHT mein Auto. (possessive → nicht)", en: "'Mein' stays, add 'nicht'" },
          { de: "Ich mag DAS Auto NICHT. (definite → nicht)", en: "'Das' (definite) → 'nicht'" }
        ]
      },
      {
        type: "grammar",
        title: "'nicht' Position Cheat Sheet",
        explanation: "nicht goes BEFORE these → adjectives, adverbs, prep phrases, infinitives, separable prefixes.\nnicht goes AFTER these → conjugated verb, time expressions, pronoun objects.",
        examples: [
          { de: "Er kommt heute NICHT. (after time expression)", en: "He's not coming today." },
          { de: "Ich kann NICHT schwimmen. (before infinitive)", en: "I can't swim." },
          { de: "Bitte mach das Licht NICHT aus! (before separable prefix)", en: "Please don't turn off the light!" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Where does 'nicht' go? 'Sie wohnt ___ in Berlin.'",
        options: ["Sie nicht wohnt in Berlin.", "Sie wohnt nicht in Berlin.", "Nicht sie wohnt in Berlin.", "Sie wohnt in nicht Berlin."],
        correctIndex: 1,
        explanation: "'Nicht' goes BEFORE the prepositional phrase 'in Berlin' because it negates where she lives."
      }
    ]
  }
};

export const lessonsA2New9: Record<string, Lesson> = {
  "la2_44": {
    id: "la2_44",
    title: "schon / noch / noch nicht / erst",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Four Little Words That Change Everything",
        explanation: "These time adverbs express whether something has happened yet, is still happening, or hasn't happened yet. They're used CONSTANTLY in daily German.",
        examples: [
          { de: "schon = already: Ich habe schon gegessen.", en: "I've already eaten." },
          { de: "noch = still: Er schläft noch.", en: "He's still sleeping." },
          { de: "noch nicht = not yet: Ich habe noch nicht gefrühstückt.", en: "I haven't had breakfast yet." },
          { de: "erst = only/not until: Ich bin erst 20.", en: "I'm only 20." }
        ]
      },
      {
        type: "grammar",
        title: "schon vs. erst — The Key Distinction",
        explanation: "'Schon' implies 'wow, already/so soon!' (earlier than expected). 'Erst' implies 'only/not until' (later than expected). They're OPPOSITES.",
        examples: [
          { de: "Es ist SCHON 22 Uhr! (wow, so late already!)", en: "It's already 10 pm!" },
          { de: "Es ist ERST 22 Uhr. (only 10 pm, still early)", en: "It's only 10 pm." },
          { de: "Er ist SCHON 5 Jahre alt. (already 5, growing fast!)", en: "He's already 5 years old." },
          { de: "Er ist ERST 5 Jahre alt. (only 5, still young)", en: "He's only 5 years old." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "schon", phonetic: "shohn", meaning: "already (earlier than expected)", example: { de: "Bist du schon fertig?", en: "Are you already done?" } },
          { word: "noch", phonetic: "nokh", meaning: "still (ongoing)", example: { de: "Ich arbeite noch.", en: "I'm still working." } },
          { word: "noch nicht", phonetic: "nokh nikht", meaning: "not yet", example: { de: "Er ist noch nicht da.", en: "He's not here yet." } },
          { word: "noch ein/eine", phonetic: "nokh ayn", meaning: "another / one more", example: { de: "Noch ein Bier, bitte!", en: "Another beer, please!" } },
          { word: "erst", phonetic: "airst", meaning: "only / not until", example: { de: "Der Zug kommt erst um 10.", en: "The train doesn't come until 10." } },
          { word: "nicht mehr", phonetic: "nikht mair", meaning: "no longer / not anymore", example: { de: "Ich wohne nicht mehr dort.", en: "I don't live there anymore." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "It's 7am and you're surprised how early it is. You say: 'Es ist ___ 7 Uhr!'",
        options: ["schon (already?!)", "erst (only)", "noch (still)", "nicht mehr"],
        correctIndex: 1,
        explanation: "'Erst 7 Uhr' = only 7 o'clock (it feels early). 'Schon 7 Uhr' would mean 'already 7?!' (surprised it's so late)."
      }
    ]
  },
  "la2_45": {
    id: "la2_45",
    title: "Position Verbs (stellen/stehen, legen/liegen)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Put vs. Be — Movement vs. Position",
        explanation: "German has PAIRS of verbs for objects: one for PLACING (movement → Accusative) and one for BEING there (position → Dative). English uses just one word!",
        examples: [
          { de: "stellen (put upright) → stehen (stand/be upright)", en: "Ich STELLE die Flasche AUF DEN Tisch. / Die Flasche STEHT AUF DEM Tisch." },
          { de: "legen (lay flat) → liegen (lie/be flat)", en: "Ich LEGE das Buch AUF DEN Tisch. / Das Buch LIEGT AUF DEM Tisch." },
          { de: "setzen (place sitting) → sitzen (sit/be sitting)", en: "Ich SETZE das Kind AUF DEN Stuhl. / Das Kind SITZT AUF DEM Stuhl." },
          { de: "hängen (hang up) → hängen (be hanging)", en: "Ich HÄNGE das Bild AN DIE Wand. / Das Bild HÄNGT AN DER Wand." }
        ]
      },
      {
        type: "grammar",
        title: "The Pattern",
        explanation: "WOHIN? (where to?) → movement verb + ACCUSATIVE\nWO? (where?) → position verb + DATIVE\n\nThis is the same Wechselpräpositionen rule, but applied to VERB PAIRS.",
        examples: [
          { de: "WOHIN stellst du die Tasse? → AUF DEN Tisch. (Akk)", en: "Where are you putting the cup? → On the table." },
          { de: "WO steht die Tasse? → AUF DEM Tisch. (Dat)", en: "Where is the cup? → On the table." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "stellen → stehen", phonetic: "shtel-len → shtay-en", meaning: "put upright → stand (be upright)", example: { de: "Stell die Flasche in den Kühlschrank.", en: "Put the bottle in the fridge." } },
          { word: "legen → liegen", phonetic: "lay-gen → lee-gen", meaning: "lay flat → lie (be flat)", example: { de: "Leg das Handy auf den Tisch.", en: "Put the phone on the table." } },
          { word: "setzen → sitzen", phonetic: "zet-sen → zit-sen", meaning: "seat → sit (be seated)", example: { de: "Setz dich auf den Stuhl!", en: "Sit down on the chair!" } },
          { word: "hängen → hängen", phonetic: "heng-en", meaning: "hang (up) → hang (be hanging)", example: { de: "Der Mantel hängt an der Tür.", en: "The coat is hanging on the door." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "You want to say 'The book is (lying) on the table.' Which is correct?",
        options: [
          "Das Buch legt auf dem Tisch.",
          "Das Buch liegt auf dem Tisch.",
          "Das Buch liegt auf den Tisch.",
          "Das Buch legt auf den Tisch."
        ],
        correctIndex: 1,
        explanation: "Position (WO?) → liegen (not legen!) + Dativ (auf DEM Tisch). 'Legen' means to place/put, 'liegen' means to be lying."
      }
    ]
  }
};
