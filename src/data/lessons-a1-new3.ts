import { Lesson } from "./lessons";

export const lessonsA1New3: Record<string, Lesson> = {
  "la1_16": {
    id: "la1_16",
    title: "Formal vs. Informal (du / Sie)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "When to Use du vs. Sie",
        explanation: "This is THE most important social rule in German. 'Du' = informal (friends, family, children). 'Sie' = formal (strangers, colleagues, authority). Getting this wrong can be offensive!",
        examples: [
          { de: "Wie heißt du? (informal)", en: "What's your name? (to a friend)" },
          { de: "Wie heißen Sie? (formal)", en: "What's your name? (to a stranger/boss)" },
          { de: "Kannst du mir helfen? (du)", en: "Can you help me? (informal)" },
          { de: "Können Sie mir helfen? (Sie)", en: "Can you help me? (formal)" }
        ]
      },
      {
        type: "grammar",
        title: "The 'Sie' Rule",
        explanation: "'Sie' (formal you) ALWAYS uses the same conjugation as 'sie' (they) and is ALWAYS capitalized in writing. The older or more senior person offers the 'du'.",
        examples: [
          { de: "Herr Schmidt, woher kommen Sie?", en: "Mr. Schmidt, where are you from?" },
          { de: "Frau Müller, sprechen Sie Englisch?", en: "Mrs. Müller, do you speak English?" },
          { de: "Wollen wir uns duzen? (offering du)", en: "Shall we use 'du' with each other?" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Herr", phonetic: "hair", meaning: "Mr.", example: { de: "Guten Tag, Herr Schmidt.", en: "Good day, Mr. Schmidt." } },
          { word: "Frau", phonetic: "frow", meaning: "Mrs./Ms.", example: { de: "Auf Wiedersehen, Frau Müller.", en: "Goodbye, Mrs. Müller." } },
          { word: "duzen", phonetic: "doo-tsen", meaning: "to use 'du'", example: { de: "Wir duzen uns.", en: "We use 'du' with each other." } },
          { word: "siezen", phonetic: "zee-tsen", meaning: "to use 'Sie'", example: { de: "Ich sieze meinen Chef.", en: "I use 'Sie' with my boss." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "You meet your friend's 60-year-old mother for the first time. What do you use?",
        options: ["du", "Sie", "ihr", "It doesn't matter"],
        correctIndex: 1,
        explanation: "Always use 'Sie' with adults you don't know well, especially older people. Wait until THEY offer the 'du'."
      }
    ]
  },
  "la1_17": {
    id: "la1_17",
    title: "Apologizing & Polite Expressions",
    module: "A1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "Entschuldigung", phonetic: "ent-shool-di-goong", meaning: "Excuse me / Sorry", example: { de: "Entschuldigung, wo ist die Toilette?", en: "Excuse me, where is the toilet?" } },
          { word: "Es tut mir leid.", phonetic: "es toot meer lyt", meaning: "I'm sorry. (sincere)", example: { de: "Es tut mir wirklich leid.", en: "I'm really sorry." } },
          { word: "Kein Problem!", phonetic: "kyn pro-blem", meaning: "No problem!", example: { de: "A: Entschuldigung! — B: Kein Problem!", en: "A: Sorry! — B: No problem!" } },
          { word: "Macht nichts!", phonetic: "makht nikhts", meaning: "Never mind! / No worries!", example: { de: "A: Tut mir leid! — B: Macht nichts!", en: "A: I'm sorry! — B: Never mind!" } },
          { word: "Bitte schön!", phonetic: "bit-te shön", meaning: "You're welcome! / Here you go!", example: { de: "A: Danke! — B: Bitte schön!", en: "A: Thanks! — B: You're welcome!" } },
          { word: "Gern geschehen!", phonetic: "gairn ge-shay-en", meaning: "My pleasure!", example: { de: "A: Vielen Dank! — B: Gern geschehen!", en: "A: Many thanks! — B: My pleasure!" } }
        ]
      },
      {
        type: "grammar",
        title: "Entschuldigung vs. Es tut mir leid",
        explanation: "'Entschuldigung' = quick sorry / excuse me (bumping into someone, getting attention). 'Es tut mir leid' = deeper sorry (you feel genuinely bad). Both are essential!",
        examples: [
          { de: "Entschuldigung! (bumped someone)", en: "Sorry! (quick, minor)" },
          { de: "Es tut mir leid, dass ich zu spät bin.", en: "I'm sorry that I'm late. (genuine)" },
          { de: "Tut mir leid, das wusste ich nicht.", en: "Sorry, I didn't know that." }
        ]
      },
      {
        type: "speaking",
        phrase: "Entschuldigung, es tut mir leid, dass ich zu spät komme.",
        translation: "Excuse me, I'm sorry that I'm coming late.",
        phonetic: "ent-shool-di-goong, es toot meer lyt, das ikh tsoo shpät kom-me",
        tip: "Germans value punctuality highly! Always apologize if you're late."
      },
      {
        type: "quiz-mcq",
        question: "Your friend drops their phone and you accidentally step on it. Which is more appropriate?",
        options: ["Entschuldigung!", "Es tut mir leid!", "Bitte schön!", "Kein Problem!"],
        correctIndex: 1,
        explanation: "'Es tut mir leid' shows genuine remorse for something more serious than a minor bump."
      }
    ]
  },
  "la1_18": {
    id: "la1_18",
    title: "Asking for Help & Survival Phrases",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "Essential Survival German",
        explanation: "These are the phrases that will save you in Germany even if you know NOTHING else. Memorize these on day one!",
        examples: [
          { de: "Sprechen Sie Englisch?", en: "Do you speak English?" },
          { de: "Ich verstehe nicht.", en: "I don't understand." },
          { de: "Können Sie das bitte wiederholen?", en: "Can you please repeat that?" },
          { de: "Können Sie bitte langsamer sprechen?", en: "Can you please speak more slowly?" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Ich verstehe nicht.", phonetic: "ikh fer-shtay-e nikht", meaning: "I don't understand.", example: { de: "Entschuldigung, ich verstehe nicht.", en: "Sorry, I don't understand." } },
          { word: "Wie bitte?", phonetic: "vee bit-te", meaning: "Pardon? / Come again?", example: { de: "Wie bitte? Noch einmal, bitte.", en: "Pardon? One more time, please." } },
          { word: "Was bedeutet das?", phonetic: "vas be-doy-tet das", meaning: "What does that mean?", example: { de: "Was bedeutet 'Feierabend'?", en: "What does 'Feierabend' mean?" } },
          { word: "Wo ist die Toilette?", phonetic: "vo ist dee toy-let-te", meaning: "Where is the toilet?", example: { de: "Entschuldigung, wo ist die Toilette?", en: "Excuse me, where is the toilet?" } },
          { word: "Ich brauche Hilfe.", phonetic: "ikh brow-khe hil-fe", meaning: "I need help.", example: { de: "Bitte, ich brauche Hilfe!", en: "Please, I need help!" } },
          { word: "Wie sagt man...?", phonetic: "vee zahkt man", meaning: "How do you say...?", example: { de: "Wie sagt man 'thank you' auf Deutsch?", en: "How do you say 'thank you' in German?" } }
        ]
      },
      {
        type: "speaking",
        phrase: "Entschuldigung, sprechen Sie Englisch? Ich lerne noch Deutsch.",
        translation: "Excuse me, do you speak English? I'm still learning German.",
        phonetic: "ent-shool-di-goong, shpre-khen zee eng-lish? ikh lair-ne nokh doytsh",
        tip: "Most Germans under 40 speak English, but they LOVE when you try German first!"
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Können Sie bitte langsamer ",
        sentenceAfter: "?",
        missingWord: "sprechen",
        translation: "Can you please speak more slowly?"
      }
    ]
  }
};
