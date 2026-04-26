import { Lesson } from "./lessons";

export const lessonsA1New4: Record<string, Lesson> = {
  "la1_19": {
    id: "la1_19",
    title: "Large Numbers (100–1.000.000)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "Numbers Beyond 100",
        explanation: "German uses PERIODS for thousands (1.000) and COMMAS for decimals (3,50 €) — the OPPOSITE of English! Numbers are written as one word up to a million.",
        examples: [
          { de: "hundert (100), zweihundert (200), dreihundert (300)", en: "Pattern: number + hundert" },
          { de: "tausend (1.000), zweitausend (2.000)", en: "Pattern: number + tausend" },
          { de: "eine Million (1.000.000)", en: "eine Million (feminine!)" },
          { de: "dreihundertfünfundsechzig (365)", en: "Three hundred five-and-sixty" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "hundert", phonetic: "hoon-dert", meaning: "100", example: { de: "Das kostet hundert Euro.", en: "That costs 100 euros." } },
          { word: "tausend", phonetic: "tow-zent", meaning: "1,000", example: { de: "Zweitausend Kilometer.", en: "Two thousand kilometers." } },
          { word: "zehntausend", phonetic: "tsayn-tow-zent", meaning: "10,000", example: { de: "Berlin hat zehntausend Restaurants.", en: "Berlin has ten thousand restaurants." } },
          { word: "eine Million", phonetic: "ay-ne mil-yohn", meaning: "1,000,000", example: { de: "Berlin hat vier Millionen Einwohner.", en: "Berlin has four million inhabitants." } },
          { word: "3,50 €", phonetic: "dry oy-ro fünf-tsikh", meaning: "€3.50", example: { de: "Das macht drei Euro fünfzig.", en: "That's three euros fifty." } }
        ]
      },
      {
        type: "listening",
        phrase: "Meine Telefonnummer ist null eins sieben eins, drei vier fünf sechs sieben acht neun.",
        translation: "My phone number is 0171-3456789.",
        speed: "slow"
      },
      {
        type: "quiz-mcq",
        question: "How do you write '1,500' in German number format?",
        options: ["1,500", "1.500", "1 500", "1500,"],
        correctIndex: 1,
        explanation: "German uses a PERIOD as thousands separator: 1.500. The comma is for decimals: 1,50 €."
      }
    ]
  },
  "la1_20": {
    id: "la1_20",
    title: "Common Irregular Verbs (Reference)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "The 20 Most Important Strong Verbs",
        explanation: "These verbs change their stem vowel in the du/er forms. You MUST memorize these — they appear in every conversation.",
        examples: [
          { de: "fahren → du fährst, er fährt (a→ä)", en: "to drive/travel" },
          { de: "lesen → du liest, er liest (e→ie)", en: "to read" },
          { de: "sprechen → du sprichst, er spricht (e→i)", en: "to speak" },
          { de: "nehmen → du nimmst, er nimmt (e→i)", en: "to take" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "essen → isst", phonetic: "es-sen → ist", meaning: "to eat → he eats", example: { de: "Er isst gern Pizza.", en: "He likes eating pizza." } },
          { word: "geben → gibt", phonetic: "gay-ben → gipt", meaning: "to give → he gives", example: { de: "Sie gibt mir das Buch.", en: "She gives me the book." } },
          { word: "sehen → sieht", phonetic: "zay-en → zeet", meaning: "to see → he sees", example: { de: "Er sieht den Film.", en: "He sees the movie." } },
          { word: "schlafen → schläft", phonetic: "shlah-fen → shleft", meaning: "to sleep → he sleeps", example: { de: "Das Kind schläft.", en: "The child sleeps." } },
          { word: "laufen → läuft", phonetic: "low-fen → loyft", meaning: "to run/walk → he runs", example: { de: "Er läuft schnell.", en: "He runs fast." } },
          { word: "tragen → trägt", phonetic: "trah-gen → trekt", meaning: "to carry/wear → he wears", example: { de: "Sie trägt ein Kleid.", en: "She wears a dress." } },
          { word: "wissen → weiß", phonetic: "vis-sen → vys", meaning: "to know (facts) → he knows", example: { de: "Er weiß das nicht.", en: "He doesn't know that." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What is 'er ___' for the verb 'sprechen'?",
        options: ["sprecht", "spricht", "sprichst", "spreche"],
        correctIndex: 1,
        explanation: "sprechen changes e→i in the er/sie/es form: er spricht."
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Er ",
        sentenceAfter: " gern Bücher.",
        missingWord: "liest",
        translation: "He likes reading books."
      }
    ]
  },
  "la1_21": {
    id: "la1_21",
    title: "Compound Nouns (Wortbildung)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "How German Builds Words",
        explanation: "German creates new words by gluing existing words together. The LAST word determines the gender and meaning category. This is your superpower for guessing unknown words!",
        examples: [
          { de: "Hand + Schuh = der Handschuh (glove)", en: "hand + shoe = glove!" },
          { de: "Kühl + Schrank = der Kühlschrank (refrigerator)", en: "cool + cabinet = fridge!" },
          { de: "Kranken + Haus = das Krankenhaus (hospital)", en: "sick + house = hospital!" },
          { de: "Schlaf + Zimmer = das Schlafzimmer (bedroom)", en: "sleep + room = bedroom!" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "der Handschuh", phonetic: "hant-shoo", meaning: "glove (hand-shoe)", example: { de: "Wo sind meine Handschuhe?", en: "Where are my gloves?" } },
          { word: "das Flugzeug", phonetic: "flook-tsoyk", meaning: "airplane (fly-thing)", example: { de: "Das Flugzeug fliegt.", en: "The airplane flies." } },
          { word: "der Staubsauger", phonetic: "shtowp-zow-ger", meaning: "vacuum cleaner (dust-sucker)", example: { de: "Ich brauche den Staubsauger.", en: "I need the vacuum cleaner." } },
          { word: "die Geburtstagsparty", phonetic: "ge-boorts-tahks-par-tee", meaning: "birthday party", example: { de: "Kommst du zur Geburtstagsparty?", en: "Are you coming to the birthday party?" } },
          { word: "das Ausländeramt", phonetic: "ows-len-der-amt", meaning: "foreigners' office", example: { de: "Ich muss zum Ausländeramt.", en: "I have to go to the foreigners' office." } }
        ]
      },
      {
        type: "grammar",
        title: "The Gender Rule",
        explanation: "The LAST word in a compound always determines the gender. Learn this rule and you'll never be confused!",
        examples: [
          { de: "die Tür (door) → die Haustür (front door, fem)", en: "die Tür is last → feminine" },
          { de: "der Platz (place) → der Parkplatz (parking space, masc)", en: "der Platz is last → masculine" },
          { de: "das Haus (house) → das Rathaus (town hall, neut)", en: "das Haus is last → neuter" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What gender is 'Krankenhaus'? (Hint: das Haus)",
        options: ["der (masculine)", "die (feminine)", "das (neuter)", "Depends on context"],
        correctIndex: 2,
        explanation: "The LAST word determines gender: das Haus → das Krankenhaus (neuter)."
      }
    ]
  }
};
