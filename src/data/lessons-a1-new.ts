import { Lesson } from "./lessons";

export const lessonsA1New: Record<string, Lesson> = {
  "la1_01": {
    id: "la1_01",
    title: "Possessive Pronouns (Full Table)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "All Possessive Pronouns",
        explanation: "Possessive pronouns (my, your, his, her...) work like 'ein/eine'. They take the same endings depending on gender and case. Here are all of them in Nominative.",
        examples: [
          { de: "mein (my), dein (your informal)", en: "ich → mein, du → dein" },
          { de: "sein (his/its), ihr (her)", en: "er → sein, sie → ihr" },
          { de: "unser (our), euer (your plural)", en: "wir → unser, ihr → euer" },
          { de: "ihr (their), Ihr (your formal)", en: "sie → ihr, Sie → Ihr" }
        ]
      },
      {
        type: "grammar",
        title: "Endings by Gender",
        explanation: "Possessive pronouns follow the same pattern as 'ein': no ending for masculine/neuter, '-e' for feminine/plural.",
        examples: [
          { de: "mein Vater (der), mein Kind (das)", en: "No ending for masc/neuter" },
          { de: "meine Mutter (die), meine Eltern (pl)", en: "'-e' ending for feminine/plural" },
          { de: "meinen Bruder (Akkusativ)", en: "'-en' ending for masculine accusative" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "sein", phonetic: "zyne", meaning: "his / its", example: { de: "Das ist sein Hund.", en: "That is his dog." } },
          { word: "ihr", phonetic: "eer", meaning: "her / their", example: { de: "Das ist ihr Auto.", en: "That is her car." } },
          { word: "unser", phonetic: "oon-zer", meaning: "our", example: { de: "Das ist unser Haus.", en: "That is our house." } },
          { word: "euer", phonetic: "oy-er", meaning: "your (plural)", example: { de: "Ist das euer Hund?", en: "Is that your (all's) dog?" } },
          { word: "Ihr", phonetic: "eer", meaning: "your (formal)", example: { de: "Ist das Ihr Auto?", en: "Is that your car? (formal)" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "How do you say 'her mother' in German? (die Mutter)",
        options: ["sein Mutter", "ihr Mutter", "ihre Mutter", "ihren Mutter"],
        correctIndex: 2,
        explanation: "'Mutter' is feminine (die), so the possessive needs the '-e' ending: ihre Mutter."
      }
    ]
  },
  "la1_02": {
    id: "la1_02",
    title: "Separable Verbs Intro",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "What Are Separable Verbs?",
        explanation: "Many German verbs have a prefix (auf-, an-, ein-, mit-, aus-, zu-). In a main clause, the prefix detaches and goes to the END of the sentence. Think of it as breaking a verb in two pieces.",
        examples: [
          { de: "aufstehen → Ich stehe um 7 Uhr auf.", en: "I get up at 7 o'clock." },
          { de: "anrufen → Ich rufe dich morgen an.", en: "I'll call you tomorrow." },
          { de: "einkaufen → Sie kauft im Supermarkt ein.", en: "She shops at the supermarket." }
        ]
      },
      {
        type: "grammar",
        title: "With Modal Verbs: No Separation!",
        explanation: "When a separable verb is used with a modal verb, it stays together as one word at the end.",
        examples: [
          { de: "Ich muss früh aufstehen.", en: "I have to get up early. (stays together)" },
          { de: "Kannst du mich anrufen?", en: "Can you call me? (stays together)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "aufstehen", phonetic: "owf-shtay-en", meaning: "to get up", example: { de: "Ich stehe um sechs Uhr auf.", en: "I get up at six o'clock." } },
          { word: "anrufen", phonetic: "an-roo-fen", meaning: "to call (phone)", example: { de: "Ruf mich bitte an!", en: "Please call me!" } },
          { word: "einkaufen", phonetic: "ayn-kow-fen", meaning: "to go shopping", example: { de: "Wir kaufen heute ein.", en: "We're shopping today." } },
          { word: "mitkommen", phonetic: "mit-kom-men", meaning: "to come along", example: { de: "Kommst du mit?", en: "Are you coming along?" } },
          { word: "zumachen", phonetic: "tsoo-makh-en", meaning: "to close", example: { de: "Mach bitte die Tür zu!", en: "Please close the door!" } },
          { word: "aufmachen", phonetic: "owf-makh-en", meaning: "to open", example: { de: "Mach das Fenster auf!", en: "Open the window!" } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Wann stehst du morgens ",
        sentenceAfter: "?",
        missingWord: "auf",
        translation: "When do you get up in the morning?"
      }
    ]
  },
  "la1_03": {
    id: "la1_03",
    title: "Ordinal Numbers & Dates",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "Ordinal Numbers (erste, zweite, dritte...)",
        explanation: "To make ordinal numbers (1st, 2nd, 3rd...), add '-te' to numbers 1-19 and '-ste' to 20+. Exceptions: erste (1st), dritte (3rd), siebte (7th), achte (8th).",
        examples: [
          { de: "1. = erste, 2. = zweite, 3. = dritte", en: "1st, 2nd, 3rd (irregular)" },
          { de: "4. = vierte, 5. = fünfte, 6. = sechste", en: "4th, 5th, 6th (add -te)" },
          { de: "20. = zwanzigste, 21. = einundzwanzigste", en: "20th, 21st (add -ste)" }
        ]
      },
      {
        type: "grammar",
        title: "Saying Dates",
        explanation: "For dates, use 'am' + ordinal number + '-en'. To ask: 'Welches Datum ist heute?' or 'Der Wievielte ist heute?'",
        examples: [
          { de: "Heute ist der dritte Mai.", en: "Today is the 3rd of May." },
          { de: "Ich habe am zwölften April Geburtstag.", en: "My birthday is on the 12th of April." },
          { de: "Wir fahren am ersten Juni.", en: "We're leaving on the 1st of June." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "der Erste", phonetic: "airs-te", meaning: "the first", example: { de: "Heute ist der Erste.", en: "Today is the first." } },
          { word: "der Dritte", phonetic: "drit-te", meaning: "the third", example: { de: "Am dritten März.", en: "On the third of March." } },
          { word: "das Datum", phonetic: "dah-toom", meaning: "the date", example: { de: "Welches Datum ist heute?", en: "What is today's date?" } },
          { word: "der Geburtstag", phonetic: "ge-boorts-tahk", meaning: "the birthday", example: { de: "Wann hast du Geburtstag?", en: "When is your birthday?" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "How do you say 'on the 5th of October'?",
        options: ["am fünf Oktober", "am fünften Oktober", "am fünfte Oktober", "in fünf Oktober"],
        correctIndex: 1,
        explanation: "'am' requires the dative ending '-en' on the ordinal: am fünften Oktober."
      }
    ]
  },
  "la1_04": {
    id: "la1_04",
    title: "Dative Verbs (helfen, gefallen)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "Verbs That Need Dative",
        explanation: "Some German verbs always take a Dative object instead of Accusative. The most important ones: helfen (to help), gefallen (to please/like), gehören (to belong to), danken (to thank), antworten (to answer).",
        examples: [
          { de: "Ich helfe dir. (NOT: Ich helfe dich)", en: "I help you." },
          { de: "Das Buch gefällt mir.", en: "I like the book. (Literally: The book pleases to-me.)" },
          { de: "Das Auto gehört meinem Vater.", en: "The car belongs to my father." }
        ]
      },
      {
        type: "grammar",
        title: "Dative Personal Pronouns",
        explanation: "You already know accusative pronouns (mich, dich). Here are the dative ones:",
        examples: [
          { de: "mir (to me), dir (to you)", en: "ich → mir, du → dir" },
          { de: "ihm (to him/it), ihr (to her)", en: "er → ihm, sie → ihr" },
          { de: "uns (to us), euch (to you all)", en: "wir → uns, ihr → euch" },
          { de: "ihnen (to them), Ihnen (to you formal)", en: "sie → ihnen, Sie → Ihnen" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "mir", phonetic: "meer", meaning: "to me (dative)", example: { de: "Hilf mir bitte!", en: "Help me please!" } },
          { word: "dir", phonetic: "deer", meaning: "to you (dative)", example: { de: "Ich danke dir.", en: "I thank you." } },
          { word: "ihm", phonetic: "eem", meaning: "to him/it (dative)", example: { de: "Ich helfe ihm.", en: "I help him." } },
          { word: "gefallen", phonetic: "ge-fal-len", meaning: "to please / to like", example: { de: "Gefällt dir das?", en: "Do you like that?" } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Kannst du ",
        sentenceAfter: " bitte helfen?",
        missingWord: "mir",
        translation: "Can you please help me?"
      }
    ]
  },
  "la1_05": {
    id: "la1_05",
    title: "\"es gibt\" (There is / There are)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "Es gibt + Accusative",
        explanation: "'Es gibt' means 'there is' or 'there are'. It NEVER changes form (always 'gibt', never 'geben'). It is ALWAYS followed by the Accusative case.",
        examples: [
          { de: "Es gibt einen Park hier.", en: "There is a park here." },
          { de: "Es gibt viele Restaurants.", en: "There are many restaurants." },
          { de: "Gibt es hier eine Bank?", en: "Is there a bank here?" },
          { de: "Was gibt es zum Essen?", en: "What is there to eat?" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "es gibt", phonetic: "es gipt", meaning: "there is / there are", example: { de: "Es gibt ein Problem.", en: "There is a problem." } },
          { word: "Gibt es...?", phonetic: "gipt es", meaning: "Is there...?", example: { de: "Gibt es hier ein Hotel?", en: "Is there a hotel here?" } }
        ]
      },
      {
        type: "listening",
        phrase: "In meiner Stadt gibt es viele Parks und ein großes Kino.",
        translation: "In my city there are many parks and a big cinema.",
        speed: "normal"
      },
      {
        type: "quiz-mcq",
        question: "Which is correct? (der Supermarkt = masculine)",
        options: ["Es gibt der Supermarkt.", "Es gibt einen Supermarkt.", "Es gibt ein Supermarkt.", "Es gibt dem Supermarkt."],
        correctIndex: 1,
        explanation: "'Es gibt' always takes Accusative. Masculine 'ein' becomes 'einen' in Accusative."
      }
    ]
  },
  "la1_06": {
    id: "la1_06",
    title: "\"man\" — General Statements",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "The Pronoun 'man'",
        explanation: "'man' is an indefinite pronoun meaning 'one', 'you' (general), or 'people'. It always takes the er/sie/es verb form (3rd person singular). It is NOT the English word 'man'!",
        examples: [
          { de: "Hier spricht man Deutsch.", en: "People speak German here." },
          { de: "Man kann hier gut essen.", en: "You can eat well here." },
          { de: "Wie schreibt man das?", en: "How do you spell that?" },
          { de: "Man darf hier nicht rauchen.", en: "One is not allowed to smoke here." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "man", phonetic: "man", meaning: "one / you (general) / people", example: { de: "Man sagt das so.", en: "People say it like that." } },
          { word: "Man muss...", phonetic: "man moos", meaning: "One must... / You have to...", example: { de: "Man muss eine Fahrkarte kaufen.", en: "You have to buy a ticket." } },
          { word: "Man kann...", phonetic: "man kan", meaning: "One can... / You can...", example: { de: "Man kann hier parken.", en: "You can park here." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Wie sagt man das auf Deutsch?",
        translation: "How do you say that in German?",
        phonetic: "vee zahkt man das owf doytsh",
        tip: "This is one of the most useful sentences for a learner!"
      },
      {
        type: "quiz-fill",
        sentenceBefore: "In Deutschland trinkt ",
        sentenceAfter: " viel Kaffee.",
        missingWord: "man",
        translation: "In Germany people drink a lot of coffee."
      }
    ]
  },
  "la1_07": {
    id: "la1_07",
    title: "Weather (Das Wetter)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "Talking About Weather",
        explanation: "Weather expressions use 'es' (it) as the subject. The verb is always 3rd person singular.",
        examples: [
          { de: "Wie ist das Wetter? / Wie ist das Wetter heute?", en: "How is the weather? / How is the weather today?" },
          { de: "Es regnet. / Es schneit.", en: "It is raining. / It is snowing." },
          { de: "Es ist sonnig / bewölkt / windig.", en: "It is sunny / cloudy / windy." },
          { de: "Es ist warm / kalt / heiß.", en: "It is warm / cold / hot." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Sonne", phonetic: "zon-ne", meaning: "the sun", example: { de: "Die Sonne scheint.", en: "The sun is shining." } },
          { word: "der Regen", phonetic: "ray-gen", meaning: "the rain", example: { de: "Es gibt viel Regen.", en: "There is a lot of rain." } },
          { word: "der Schnee", phonetic: "shnay", meaning: "the snow", example: { de: "Im Winter gibt es Schnee.", en: "In winter there is snow." } },
          { word: "der Wind", phonetic: "vint", meaning: "the wind", example: { de: "Heute ist es sehr windig.", en: "Today it is very windy." } },
          { word: "sonnig", phonetic: "zon-nikh", meaning: "sunny", example: { de: "Es ist sonnig und warm.", en: "It is sunny and warm." } },
          { word: "bewölkt", phonetic: "be-völkt", meaning: "cloudy", example: { de: "Heute ist es bewölkt.", en: "Today it is cloudy." } },
          { word: "regnen", phonetic: "rayg-nen", meaning: "to rain", example: { de: "Es regnet seit Stunden.", en: "It has been raining for hours." } },
          { word: "schneien", phonetic: "shny-en", meaning: "to snow", example: { de: "Im Dezember schneit es oft.", en: "In December it often snows." } }
        ]
      },
      {
        type: "listening",
        phrase: "Heute ist es sonnig, aber morgen regnet es.",
        translation: "Today it is sunny, but tomorrow it will rain.",
        speed: "normal"
      },
      {
        type: "quiz-mcq",
        question: "How do you say 'It is snowing'?",
        options: ["Es regnet.", "Es schneit.", "Es ist kalt.", "Es windet."],
        correctIndex: 1,
        explanation: "'schneien' means 'to snow'. 'Es schneit' = It is snowing."
      }
    ]
  }
};
