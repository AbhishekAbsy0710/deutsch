import { Lesson } from "./lessons";

export const lessonsA2New: Record<string, Lesson> = {
  "la2_01": {
    id: "la2_01",
    title: "Subordinate Clauses (weil, dass, wenn)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "The Verb Goes to the END!",
        explanation: "When you use 'weil' (because), 'dass' (that), or 'wenn' (when/if), the conjugated verb moves to the VERY END of the clause. This is the #1 rule of German subordinate clauses.",
        examples: [
          { de: "Ich lerne Deutsch, weil ich in Berlin wohne.", en: "I learn German because I live in Berlin. (wohne → end)" },
          { de: "Ich weiß, dass er krank ist.", en: "I know that he is sick. (ist → end)" },
          { de: "Wenn es regnet, bleibe ich zu Hause.", en: "When it rains, I stay at home. (regnet → end)" }
        ]
      },
      {
        type: "grammar",
        title: "Comma + Conjunction + ... + VERB",
        explanation: "Always put a comma before weil/dass/wenn. If the subordinate clause comes FIRST, the main clause starts with the verb (inverted order).",
        examples: [
          { de: "Ich bleibe, weil es regnet.", en: "Normal order: main clause first" },
          { de: "Weil es regnet, bleibe ich.", en: "Inverted: subordinate first → verb immediately after comma" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "weil", phonetic: "vyl", meaning: "because", example: { de: "Ich bin müde, weil ich nicht geschlafen habe.", en: "I'm tired because I didn't sleep." } },
          { word: "dass", phonetic: "das", meaning: "that", example: { de: "Ich glaube, dass er recht hat.", en: "I believe that he is right." } },
          { word: "wenn", phonetic: "ven", meaning: "when / if", example: { de: "Wenn du kommst, rufe mich an.", en: "When you come, call me." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ich bleibe zu Hause, weil ich krank ",
        sentenceAfter: ".",
        missingWord: "bin",
        translation: "I stay at home because I am sick."
      }
    ]
  },
  "la2_02": {
    id: "la2_02",
    title: "Reflexive Verbs (sich freuen, sich waschen)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "What Are Reflexive Verbs?",
        explanation: "Reflexive verbs have 'sich' (oneself) and describe actions you do to yourself. The reflexive pronoun changes based on the subject: mich, dich, sich, uns, euch, sich.",
        examples: [
          { de: "Ich wasche mich. (I wash myself)", en: "ich → mich" },
          { de: "Du freust dich. (You are happy)", en: "du → dich" },
          { de: "Er/Sie setzt sich. (He/She sits down)", en: "er/sie/es → sich" },
          { de: "Wir treffen uns. (We meet [each other])", en: "wir → uns" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "sich freuen", phonetic: "zikh froy-en", meaning: "to be happy / glad", example: { de: "Ich freue mich auf das Wochenende.", en: "I'm looking forward to the weekend." } },
          { word: "sich waschen", phonetic: "zikh va-shen", meaning: "to wash oneself", example: { de: "Ich wasche mir die Hände.", en: "I wash my hands." } },
          { word: "sich setzen", phonetic: "zikh zet-sen", meaning: "to sit down", example: { de: "Bitte setzen Sie sich!", en: "Please sit down!" } },
          { word: "sich fühlen", phonetic: "zikh fü-len", meaning: "to feel", example: { de: "Ich fühle mich gut.", en: "I feel good." } },
          { word: "sich anziehen", phonetic: "zikh an-tsee-en", meaning: "to get dressed", example: { de: "Ich ziehe mich an.", en: "I get dressed." } }
        ]
      },
      {
        type: "listening",
        phrase: "Ich freue mich sehr, dass du kommst!",
        translation: "I'm very happy that you're coming!",
        speed: "normal"
      },
      {
        type: "quiz-mcq",
        question: "Complete: 'Er fühlt ___ heute nicht gut.'",
        options: ["mich", "dich", "sich", "uns"],
        correctIndex: 2,
        explanation: "For er/sie/es, the reflexive pronoun is always 'sich'."
      }
    ]
  },
  "la2_03": {
    id: "la2_03",
    title: "Inseparable Verb Prefixes",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Prefixes That NEVER Separate",
        explanation: "Unlike separable verbs (auf-, an-, ein-), these prefixes NEVER detach: be-, emp-, ent-, er-, ge-, miss-, ver-, zer-. They also DON'T add 'ge-' in the past participle!",
        examples: [
          { de: "verstehen → Ich verstehe das. (NOT: Ich stehe das ver)", en: "to understand" },
          { de: "bekommen → Ich bekomme einen Brief. (NOT: Ich komme einen Brief be)", en: "to receive (NOT 'become'!)" },
          { de: "Past: verstanden (NOT ge-verstanden)", en: "No 'ge-' prefix in Perfekt!" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "verstehen", phonetic: "fer-shtay-en", meaning: "to understand", example: { de: "Ich verstehe dich nicht.", en: "I don't understand you." } },
          { word: "bekommen", phonetic: "be-kom-men", meaning: "to receive / get", example: { de: "Was bekommst du?", en: "What are you getting?" } },
          { word: "erzählen", phonetic: "er-tsay-len", meaning: "to tell (a story)", example: { de: "Erzähl mir alles!", en: "Tell me everything!" } },
          { word: "vergessen", phonetic: "fer-ges-sen", meaning: "to forget", example: { de: "Ich habe das vergessen.", en: "I forgot that." } },
          { word: "bezahlen", phonetic: "be-tsah-len", meaning: "to pay", example: { de: "Wer bezahlt?", en: "Who is paying?" } },
          { word: "entschuldigen", phonetic: "ent-shool-di-gen", meaning: "to excuse / apologize", example: { de: "Entschuldigen Sie bitte!", en: "Excuse me please!" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What is the past participle of 'verstehen'?",
        options: ["geverstanden", "verstanden", "gevestanden", "vergestanden"],
        correctIndex: 1,
        explanation: "Inseparable verbs do NOT add 'ge-' in the Perfekt: verstanden (not ge-verstanden)."
      },
      {
        type: "speaking",
        phrase: "Entschuldigung, ich habe das nicht verstanden.",
        translation: "Sorry, I didn't understand that.",
        phonetic: "ent-shool-di-goong, ikh hah-be das nikht fer-shtan-den",
        tip: "One of the most useful sentences! Practice this one a lot."
      }
    ]
  },
  "la2_04": {
    id: "la2_04",
    title: "Verbs with Two Objects (Dative + Accusative)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Giving, Showing, Telling — Two Objects",
        explanation: "Some verbs need TWO objects: WHO receives (Dative) and WHAT is given (Accusative). The order is usually: Dative person BEFORE Accusative thing.",
        examples: [
          { de: "Ich gebe dem Mann (Dat) das Buch (Akk).", en: "I give the man the book." },
          { de: "Sie zeigt mir (Dat) die Stadt (Akk).", en: "She shows me the city." },
          { de: "Er schenkt seiner Frau (Dat) Blumen (Akk).", en: "He gives his wife flowers." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "geben", phonetic: "gay-ben", meaning: "to give", example: { de: "Gib mir bitte das Salz.", en: "Please give me the salt." } },
          { word: "zeigen", phonetic: "tsy-gen", meaning: "to show", example: { de: "Können Sie mir den Weg zeigen?", en: "Can you show me the way?" } },
          { word: "schenken", phonetic: "shen-ken", meaning: "to give (as gift)", example: { de: "Was schenkst du ihr?", en: "What are you giving her?" } },
          { word: "erklären", phonetic: "er-klä-ren", meaning: "to explain", example: { de: "Erklär mir das bitte!", en: "Please explain that to me!" } },
          { word: "empfehlen", phonetic: "emp-fay-len", meaning: "to recommend", example: { de: "Was empfehlen Sie mir?", en: "What do you recommend to me?" } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Kannst du ",
        sentenceAfter: " bitte das Buch geben?",
        missingWord: "mir",
        translation: "Can you please give me the book?"
      },
      {
        type: "listening",
        phrase: "Ich schenke meiner Mutter zum Geburtstag Blumen.",
        translation: "I'm giving my mother flowers for her birthday.",
        speed: "normal"
      }
    ]
  },
  "la2_05": {
    id: "la2_05",
    title: "Demonstrative Pronouns (dieser, jeder, alle)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "dieser / diese / dieses (this)",
        explanation: "'Dieser' (this/these) follows the same endings as the definite article (der/die/das). It changes for gender, number, and case.",
        examples: [
          { de: "Dieser Mann ist nett. (der → dieser)", en: "This man is nice." },
          { de: "Diese Frau ist meine Lehrerin. (die → diese)", en: "This woman is my teacher." },
          { de: "Dieses Buch ist gut. (das → dieses)", en: "This book is good." },
          { de: "Diese Kinder spielen. (die pl → diese)", en: "These children are playing." }
        ]
      },
      {
        type: "grammar",
        title: "jeder / alle / einige / manche",
        explanation: "More useful determiners: jeder (every/each), alle (all), einige (some), manche (some/certain).",
        examples: [
          { de: "Jeder Mensch ist anders.", en: "Every person is different." },
          { de: "Alle Kinder spielen gern.", en: "All children like to play." },
          { de: "Einige Leute sind nett.", en: "Some people are nice." },
          { de: "Manche Tage sind schwer.", en: "Some days are hard." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "dieser", phonetic: "dee-zer", meaning: "this (masc)", example: { de: "Dieser Film ist toll!", en: "This movie is great!" } },
          { word: "jeder", phonetic: "yay-der", meaning: "every / each", example: { de: "Jeden Tag lerne ich.", en: "I study every day." } },
          { word: "alle", phonetic: "al-le", meaning: "all / everyone", example: { de: "Alle sind eingeladen.", en: "Everyone is invited." } },
          { word: "einige", phonetic: "ay-ni-ge", meaning: "some / a few", example: { de: "Einige Fragen habe ich.", en: "I have some questions." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Fill in: '___ Buch ist sehr interessant.' (das Buch = neuter)",
        options: ["Dieser", "Diese", "Dieses", "Diesen"],
        correctIndex: 2,
        explanation: "Neuter nouns in Nominative take 'dieses' (like 'das' → 'dieses')."
      }
    ]
  },
  "la2_06": {
    id: "la2_06",
    title: "Indirect Questions (ob & W-Words)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Polite Questions with 'ob' (whether/if)",
        explanation: "To ask politely or report a question, embed it in a main clause. Yes/No questions use 'ob' (whether/if). The verb goes to the END, just like with weil/dass.",
        examples: [
          { de: "Direct: Kommt er morgen?", en: "Is he coming tomorrow?" },
          { de: "Indirect: Ich weiß nicht, ob er morgen kommt.", en: "I don't know whether he's coming tomorrow." },
          { de: "Können Sie mir sagen, ob das Geschäft offen ist?", en: "Can you tell me whether the shop is open?" }
        ]
      },
      {
        type: "grammar",
        title: "Indirect W-Questions",
        explanation: "For questions with W-words (wo, wann, warum...), use the same W-word but send the verb to the end.",
        examples: [
          { de: "Direct: Wo ist die Bank?", en: "Where is the bank?" },
          { de: "Indirect: Wissen Sie, wo die Bank ist?", en: "Do you know where the bank is?" },
          { de: "Ich frage mich, warum er nicht kommt.", en: "I wonder why he's not coming." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "ob", phonetic: "op", meaning: "whether / if", example: { de: "Ich weiß nicht, ob das stimmt.", en: "I don't know if that's correct." } },
          { word: "Wissen Sie, ...?", phonetic: "vis-sen zee", meaning: "Do you know...?", example: { de: "Wissen Sie, wo der Bahnhof ist?", en: "Do you know where the station is?" } },
          { word: "Können Sie mir sagen, ...?", phonetic: "kö-nen zee meer zah-gen", meaning: "Can you tell me...?", example: { de: "Können Sie mir sagen, wann der Zug kommt?", en: "Can you tell me when the train comes?" } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Wissen Sie, ",
        sentenceAfter: " der Supermarkt ist?",
        missingWord: "wo",
        translation: "Do you know where the supermarket is?"
      }
    ]
  },
  "la2_07": {
    id: "la2_07",
    title: "Daily Routines (Tagesablauf)",
    module: "A2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "aufwachen", phonetic: "owf-va-khen", meaning: "to wake up", example: { de: "Ich wache um 6 Uhr auf.", en: "I wake up at 6 o'clock." } },
          { word: "duschen", phonetic: "doo-shen", meaning: "to shower", example: { de: "Ich dusche jeden Morgen.", en: "I shower every morning." } },
          { word: "frühstücken", phonetic: "frü-shtü-ken", meaning: "to eat breakfast", example: { de: "Was frühstückst du?", en: "What do you eat for breakfast?" } },
          { word: "zur Arbeit gehen", phonetic: "tsoor ar-byt gay-en", meaning: "to go to work", example: { de: "Ich gehe um 8 zur Arbeit.", en: "I go to work at 8." } },
          { word: "Mittagessen", phonetic: "mit-tahk-es-sen", meaning: "lunch", example: { de: "Um 12 Uhr esse ich Mittag.", en: "At 12 I eat lunch." } },
          { word: "Feierabend", phonetic: "fy-er-ah-bent", meaning: "end of work day", example: { de: "Um 17 Uhr habe ich Feierabend.", en: "I finish work at 5 pm." } },
          { word: "ins Bett gehen", phonetic: "ins bet gay-en", meaning: "to go to bed", example: { de: "Ich gehe um 23 Uhr ins Bett.", en: "I go to bed at 11 pm." } }
        ]
      },
      {
        type: "grammar",
        title: "Time Expressions for Daily Life",
        explanation: "Use these time markers to describe your routine: morgens (in the morning), mittags (at noon), nachmittags (in the afternoon), abends (in the evening), nachts (at night).",
        examples: [
          { de: "Morgens trinke ich Kaffee.", en: "In the morning I drink coffee." },
          { de: "Nachmittags arbeite ich.", en: "In the afternoon I work." },
          { de: "Abends koche ich.", en: "In the evening I cook." }
        ]
      },
      {
        type: "speaking",
        phrase: "Jeden Morgen stehe ich um sieben Uhr auf und dusche.",
        translation: "Every morning I get up at seven o'clock and shower.",
        phonetic: "yay-den mor-gen shtay-e ikh oom zee-ben oor owf oont doo-she",
        tip: "Practice describing YOUR actual daily routine!"
      },
      {
        type: "quiz-mcq",
        question: "What does 'Feierabend' mean?",
        options: ["Holiday", "Weekend", "End of the work day", "Party evening"],
        correctIndex: 2,
        explanation: "'Feierabend' literally means 'celebration evening' but refers to the end of the work day — a very German concept!"
      }
    ]
  },
  "la2_08": {
    id: "la2_08",
    title: "Animals & Nature (Tiere & Natur)",
    module: "A2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "der Hund", phonetic: "hoont", meaning: "the dog", gender: "m", example: { de: "Der Hund ist treu.", en: "The dog is loyal." } },
          { word: "die Katze", phonetic: "kat-se", meaning: "the cat", gender: "f", example: { de: "Die Katze schläft gern.", en: "The cat likes to sleep." } },
          { word: "der Vogel", phonetic: "foh-gel", meaning: "the bird", gender: "m", example: { de: "Der Vogel singt.", en: "The bird is singing." } },
          { word: "der Baum", phonetic: "bowm", meaning: "the tree", gender: "m", example: { de: "Der Baum ist groß.", en: "The tree is big." } },
          { word: "die Blume", phonetic: "bloo-me", meaning: "the flower", gender: "f", example: { de: "Die Blumen sind schön.", en: "The flowers are beautiful." } },
          { word: "das Pferd", phonetic: "pfairt", meaning: "the horse", gender: "n", example: { de: "Das Pferd läuft schnell.", en: "The horse runs fast." } },
          { word: "der Fisch", phonetic: "fish", meaning: "the fish", gender: "m", example: { de: "Der Fisch schwimmt.", en: "The fish swims." } },
          { word: "die Kuh", phonetic: "koo", meaning: "the cow", gender: "f", example: { de: "Die Kuh gibt Milch.", en: "The cow gives milk." } }
        ]
      },
      {
        type: "grammar",
        title: "Talking About Pets & Animals",
        explanation: "Use 'haben' to say you own a pet, and adjectives to describe animals.",
        examples: [
          { de: "Ich habe einen Hund.", en: "I have a dog. (Accusative!)" },
          { de: "Hast du ein Haustier?", en: "Do you have a pet?" },
          { de: "Meine Katze heißt Luna.", en: "My cat is called Luna." }
        ]
      },
      {
        type: "listening",
        phrase: "Wir haben zwei Hunde und eine Katze zu Hause.",
        translation: "We have two dogs and a cat at home.",
        speed: "normal"
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Hast du ein ",
        sentenceAfter: "?",
        missingWord: "Haustier",
        translation: "Do you have a pet?"
      }
    ]
  }
};
