import { Lesson } from "./lessons";

export const lessonsA2New7: Record<string, Lesson> = {
  "la2_39": {
    id: "la2_39",
    title: "Infinitive with 'zu' (Infinitiv mit zu)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "zu + Infinitive Clauses",
        explanation: "Many verbs require 'zu' before an infinitive. 'Zu' goes directly before the infinitive at the END of the clause. For separable verbs, 'zu' goes BETWEEN the prefix and the verb.",
        examples: [
          { de: "Ich versuche, pünktlich zu kommen.", en: "I try to come on time." },
          { de: "Es ist wichtig, Deutsch zu lernen.", en: "It is important to learn German." },
          { de: "Ich habe keine Zeit, heute einzukaufen.", en: "I have no time to go shopping today. (ein-zu-kaufen)" },
          { de: "Er hat vergessen, mich anzurufen.", en: "He forgot to call me. (an-zu-rufen)" }
        ]
      },
      {
        type: "grammar",
        title: "Verbs That Need 'zu'",
        explanation: "Common verbs that trigger 'zu + infinitive': versuchen, beginnen, anfangen, aufhören, hoffen, planen, vergessen, vorhaben. Modals (können, müssen, etc.) do NOT use 'zu'!",
        examples: [
          { de: "Ich hoffe, dich bald zu sehen.", en: "I hope to see you soon." },
          { de: "Wir planen, nach Berlin zu fahren.", en: "We plan to go to Berlin." },
          { de: "Hör auf, so laut zu sein!", en: "Stop being so loud!" },
          { de: "ABER: Ich KANN schwimmen. (kein 'zu'!)", en: "BUT: I can swim. (no 'zu' with modals!)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "versuchen, ... zu", phonetic: "fer-zoo-khen", meaning: "to try to...", example: { de: "Ich versuche, mehr Sport zu machen.", en: "I try to do more sport." } },
          { word: "anfangen, ... zu", phonetic: "an-fang-en", meaning: "to start to...", example: { de: "Es fängt an zu regnen.", en: "It starts to rain." } },
          { word: "aufhören, ... zu", phonetic: "owf-hö-ren", meaning: "to stop ...-ing", example: { de: "Ich höre auf zu rauchen.", en: "I stop smoking." } },
          { word: "vergessen, ... zu", phonetic: "fer-ges-sen", meaning: "to forget to...", example: { de: "Vergiss nicht, die Tür abzuschließen!", en: "Don't forget to lock the door!" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which sentence is correct?",
        options: [
          "Ich versuche zu pünktlich kommen.",
          "Ich versuche, pünktlich zu kommen.",
          "Ich versuche, pünktlich kommen zu.",
          "Ich versuche pünktlich zu kommen."
        ],
        correctIndex: 1,
        explanation: "'zu' goes directly before the infinitive at the end. A comma separates the zu-clause from the main clause."
      }
    ]
  },
  "la2_40": {
    id: "la2_40",
    title: "Purpose Clauses (um...zu / damit)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "um...zu = in order to",
        explanation: "Use 'um...zu' to express PURPOSE — why you do something. 'Um' starts the clause, 'zu + infinitive' ends it. The subjects of both clauses MUST be the same person.",
        examples: [
          { de: "Ich lerne Deutsch, um in Deutschland zu arbeiten.", en: "I learn German (in order) to work in Germany." },
          { de: "Er geht ins Fitnessstudio, um fit zu bleiben.", en: "He goes to the gym (in order) to stay fit." },
          { de: "Ich spare Geld, um ein Auto zu kaufen.", en: "I save money (in order) to buy a car." }
        ]
      },
      {
        type: "grammar",
        title: "damit = so that (different subjects)",
        explanation: "When the subjects are DIFFERENT, use 'damit' instead of 'um...zu'. 'Damit' is a subordinating conjunction — verb goes to the end.",
        examples: [
          { de: "Ich koche, damit meine Familie essen kann.", en: "I cook so that my family can eat. (different subjects!)" },
          { de: "Er spricht langsam, damit ich ihn verstehe.", en: "He speaks slowly so that I understand him." },
          { de: "VERGLEICH: Ich lerne, um zu bestehen. (same subject)", en: "COMPARE: I study to pass. (same subject → um...zu)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "um...zu + Infinitiv", phonetic: "oom...tsoo", meaning: "in order to (same subject)", example: { de: "Ich jogge, um gesund zu bleiben.", en: "I jog to stay healthy." } },
          { word: "damit", phonetic: "da-mit", meaning: "so that (different subjects)", example: { de: "Ich erkläre es, damit du es verstehst.", en: "I explain it so that you understand." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ich lerne Deutsch, ",
        sentenceAfter: " in Deutschland zu arbeiten.",
        missingWord: "um",
        translation: "I learn German in order to work in Germany."
      }
    ]
  },
  "la2_41": {
    id: "la2_41",
    title: "Diminutives & Word Endings (-chen, -lein, -ung, -keit)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Making Things Small: -chen & -lein",
        explanation: "Adding '-chen' or '-lein' makes a noun smaller/cuter AND always changes the gender to NEUTER (das). The root vowel often gets an umlaut (a→ä, o→ö, u→ü).",
        examples: [
          { de: "das Brot → das Brötchen (bread → bread roll)", en: "Very common! You'll order Brötchen daily in Germany." },
          { de: "das Mädchen (das Mäd-chen, from 'die Magd')", en: "That's why 'girl' is neuter in German!" },
          { de: "das Haus → das Häuschen (house → little house)", en: "The umlaut: a → ä" },
          { de: "der Hund → das Hündchen (dog → little doggy)", en: "Always neuter with -chen!" }
        ]
      },
      {
        type: "grammar",
        title: "Predicting Gender with Suffixes",
        explanation: "Certain endings ALWAYS have the same gender. Learning these rules helps you guess the gender of unknown nouns correctly!",
        examples: [
          { de: "-chen / -lein → IMMER das (neuter)", en: "das Brötchen, das Fräulein" },
          { de: "-ung → IMMER die (feminine)", en: "die Wohnung, die Rechnung, die Übung" },
          { de: "-keit / -heit → IMMER die (feminine)", en: "die Möglichkeit, die Gesundheit" },
          { de: "-er → MEISTENS der (masculine)", en: "der Lehrer, der Computer, der Koffer" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "das Brötchen", phonetic: "brööt-khen", meaning: "bread roll (little bread)", example: { de: "Zwei Brötchen, bitte!", en: "Two bread rolls, please!" } },
          { word: "das Mädchen", phonetic: "met-khen", meaning: "girl (always neuter!)", example: { de: "Das Mädchen heißt Lisa.", en: "The girl is called Lisa." } },
          { word: "die -ung", phonetic: "-oong", meaning: "feminine ending (always!)", example: { de: "Wohnung, Rechnung, Übung, Zeitung", en: "apartment, bill, exercise, newspaper" } },
          { word: "die -keit / -heit", phonetic: "-kyt / -hyt", meaning: "feminine ending (always!)", example: { de: "Möglichkeit, Gesundheit, Freiheit", en: "possibility, health, freedom" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What gender is 'das Kätzchen' (kitten)?",
        options: ["der (masculine, because der Kater)", "die (feminine, because die Katze)", "das (neuter, because -chen)", "Depends on the cat's gender"],
        correctIndex: 2,
        explanation: "ALL nouns with -chen are NEUTER (das), regardless of the original noun's gender. die Katze → das Kätzchen."
      }
    ]
  }
};
