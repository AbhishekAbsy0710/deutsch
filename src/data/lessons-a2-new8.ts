import { Lesson } from "./lessons";

export const lessonsA2New8: Record<string, Lesson> = {
  "la2_42": {
    id: "la2_42",
    title: "'als' vs 'wenn' (When in the Past)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "The Two Words for 'When'",
        explanation: "Both 'als' and 'wenn' mean 'when', but they are NOT interchangeable! This is one of the most tested topics at A2.",
        examples: [
          { de: "ALS ich ein Kind war, spielte ich gern. (ONE TIME, PAST)", en: "When I was a child, I liked to play." },
          { de: "WENN es regnet, bleibe ich zu Hause. (EVERY TIME / FUTURE)", en: "When(ever) it rains, I stay home." },
          { de: "WENN ich nach Hause komme, esse ich. (EVERY TIME)", en: "When I come home, I eat." }
        ]
      },
      {
        type: "grammar",
        title: "The Rule",
        explanation: "ALS = ONE specific event in the PAST (happened once). WENN = REPEATED events (past, present, or future) OR conditions (if). Both send the verb to the END.",
        examples: [
          { de: "Als ich 18 wurde, bin ich nach Berlin gezogen.", en: "When I turned 18, I moved to Berlin. (one time → als)" },
          { de: "Immer wenn ich Musik höre, bin ich glücklich.", en: "Whenever I listen to music, I'm happy. (every time → wenn)" },
          { de: "Wenn du kommst, ruf mich an.", en: "When/if you come, call me. (future → wenn)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "als", phonetic: "als", meaning: "when (one past event)", example: { de: "Als ich klein war...", en: "When I was little..." } },
          { word: "wenn", phonetic: "ven", meaning: "when(ever) / if", example: { de: "Wenn ich Zeit habe...", en: "When I have time..." } },
          { word: "(immer) wenn", phonetic: "im-mer ven", meaning: "whenever (emphasizes repetition)", example: { de: "Immer wenn er kam, brachte er Blumen mit.", en: "Whenever he came, he brought flowers." } },
          { word: "damals", phonetic: "dah-mahls", meaning: "back then", example: { de: "Damals hatten wir kein Internet.", en: "Back then we didn't have internet." } },
          { word: "früher", phonetic: "frü-er", meaning: "in the past / earlier", example: { de: "Früher war alles anders.", en: "In the past everything was different." } },
          { word: "oft", phonetic: "oft", meaning: "often", example: { de: "Ich bin oft nach Berlin gefahren.", en: "I often traveled to Berlin." } },
          { word: "manchmal", phonetic: "manch-mahl", meaning: "sometimes", example: { de: "Manchmal, wenn es regnet...", en: "Sometimes, when it rains..." } },
          { word: "plötzlich", phonetic: "plöts-likh", meaning: "suddenly", example: { de: "Als wir aßen, klingelte plötzlich das Telefon.", en: "When we were eating, the phone suddenly rang." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'___ ich gestern nach Hause kam, war niemand da.' Which word fits?",
        options: ["wenn", "als", "wann", "ob"],
        correctIndex: 1,
        explanation: "Gestern = yesterday. A specific, one-time past event → always 'als'. 'Wenn' would mean 'every time I came home yesterday' (doesn't make sense)."
      }
    ]
  },
  "la2_43": {
    id: "la2_43",
    title: "Temporal Prepositions (seit, vor, nach, in)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Time Prepositions with Dative",
        explanation: "seit, vor, nach all take DATIVE. They express different time relationships.",
        examples: [
          { de: "seit = since/for (ongoing): Ich wohne seit drei Jahren hier.", en: "I've been living here for three years. (still ongoing!)" },
          { de: "vor = ago: Ich bin vor zwei Wochen angekommen.", en: "I arrived two weeks ago." },
          { de: "nach = after: Nach dem Essen gehe ich spazieren.", en: "After the meal I go for a walk." },
          { de: "in = in (future): In zwei Tagen fliege ich.", en: "In two days I'm flying." }
        ]
      },
      {
        type: "grammar",
        title: "seit vs. vor — The Key Difference",
        explanation: "'Seit' = started in the past AND STILL HAPPENING NOW (present tense!). 'Vor' = happened in the past, it's DONE (past tense).",
        examples: [
          { de: "Ich lerne SEIT einem Jahr Deutsch. (still learning!)", en: "I've been learning German for a year." },
          { de: "VOR einem Jahr habe ich angefangen. (finished action)", en: "One year ago I started." },
          { de: "Sie wohnt SEIT 2020 in Berlin. (still lives there)", en: "She's been living in Berlin since 2020." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "seit + Dativ", phonetic: "zyt", meaning: "since / for (ongoing)", example: { de: "Seit wann lernst du Deutsch?", en: "Since when have you been learning German?" } },
          { word: "vor + Dativ", phonetic: "for", meaning: "ago / before", example: { de: "Vor einer Stunde.", en: "An hour ago." } },
          { word: "nach + Dativ", phonetic: "nakh", meaning: "after", example: { de: "Nach der Arbeit.", en: "After work." } },
          { word: "am + Tag", phonetic: "am", meaning: "on (days/dates)", example: { de: "Am Montag. Am 15. Mai.", en: "On Monday. On May 15th." } },
          { word: "um + Uhrzeit", phonetic: "oom", meaning: "at (clock time)", example: { de: "Um 8 Uhr.", en: "At 8 o'clock." } },
          { word: "in + Dativ", phonetic: "in", meaning: "in (future time)", example: { de: "In einer Woche.", en: "In one week." } },
          { word: "während (+ Genitiv)", phonetic: "väh-rent", meaning: "during", example: { de: "Während des Urlaubs...", en: "During the vacation..." } },
          { word: "bis (+ Akk)", phonetic: "bis", meaning: "until", example: { de: "Ich arbeite bis 17 Uhr.", en: "I work until 5 pm." } },
          { word: "von ... bis ...", phonetic: "fon ... bis ...", meaning: "from ... to ...", example: { de: "Wir haben von Montag bis Freitag geöffnet.", en: "We are open from Monday to Friday." } },
          { word: "ab (+ Dativ)", phonetic: "ap", meaning: "from (future start)", example: { de: "Ab morgen esse ich gesünder.", en: "From tomorrow on I will eat healthier." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Ich wohne ___ fünf Jahren in München.' (I've been living in Munich for five years - still living there)",
        options: ["vor", "seit", "nach", "in"],
        correctIndex: 1,
        explanation: "'Seit' because the action is STILL ONGOING (still living there). 'Vor fünf Jahren' would mean '5 years ago' (finished action)."
      }
    ]
  }
};
