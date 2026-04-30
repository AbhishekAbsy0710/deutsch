import { Lesson } from "./lessons";

export const lessonsC1Grammar: Record<string, Lesson> = {
  "c1-g1": {
    id: "c1-g1",
    title: "Nominalisierung Advanced",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Turning Verbs & Adjectives into Nouns",
        explanation: "At C1 level, you must master the academic/formal writing style. Nominalisierung transforms verbal sentences into noun-heavy ones. This is the standard in German newspapers, academic papers, and formal reports.",
        examples: [
          { de: "Verbal: Man diskutierte über das Thema.", en: "They discussed the topic." },
          { de: "Nominal: Die Diskussion über das Thema war lang.", en: "The discussion about the topic was long." },
          { de: "Verbal: Weil die Bevölkerung wächst...", en: "Because the population is growing..." },
          { de: "Nominal: Aufgrund des Bevölkerungswachstums...", en: "Due to population growth..." },
        ]
      },
      {
        type: "grammar",
        title: "Common Nominalisierung Patterns",
        explanation: "Most verbs can be turned into nouns using these suffixes: -ung (most common), -keit/-heit (from adjectives), -nis, -tion. The resulting noun is ALWAYS feminine for -ung, -keit, -heit, -tion and neuter for -nis.",
        examples: [
          { de: "entwickeln → die Entwicklung", en: "to develop → development (-ung)" },
          { de: "möglich → die Möglichkeit", en: "possible → possibility (-keit)" },
          { de: "frei → die Freiheit", en: "free → freedom (-heit)" },
          { de: "erlauben → die Erlaubnis", en: "to allow → permission (-nis)" },
        ]
      },
      {
        type: "cultural-note",
        title: "Why Germans Love Nominal Style",
        content: "German academic and business writing is heavily nominalized. Where English might say 'We need to improve how we communicate,' German formal style prefers 'Die Verbesserung der Kommunikation ist erforderlich.' If you want to work or study in Germany, mastering this style is non-negotiable.",
        emoji: "🎓"
      },
      {
        type: "summary",
        points: [
          "-ung is the most common nominalizer (die Bedeutung, die Erfahrung, die Entwicklung)",
          "-keit/-heit turn adjectives into nouns (die Möglichkeit, die Freiheit)",
          "Nominal style = formal German. Verbal style = casual German.",
          "Practice converting your spoken sentences into nominal form for writing"
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Die ",
        sentenceAfter: " der Wirtschaft ist wichtig.",
        missingWord: "Entwicklung",
        translation: "The development of the economy is important."
      },
      {
        type: "quiz-mcq",
        question: "Which is the FORMAL (nominal) version of 'Man muss die Umwelt schützen'?",
        options: [
          "Der Umweltschutz ist notwendig.",
          "Man schützt die Umwelt.",
          "Die Umwelt wird geschützt.",
          "Wir schützen die Umwelt gern."
        ],
        correctIndex: 0,
        explanation: "'Der Umweltschutz' nominalizes the verbal phrase 'die Umwelt schützen' into a single compound noun — classic German formal style."
      }
    ]
  },
  "c1-g2": {
    id: "c1-g2",
    title: "Funktionsverbgefüge",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Function Verb Constructions",
        explanation: "Funktionsverbgefüge (FVG) are fixed combinations of a 'light' verb + a noun that TOGETHER express an action. The verb alone has little meaning — the noun carries the content. These are essential in formal and academic German.",
        examples: [
          { de: "eine Frage stellen (NOT: fragen)", en: "to ask a question (lit: to place a question)" },
          { de: "eine Entscheidung treffen (NOT: entscheiden)", en: "to make a decision (lit: to meet a decision)" },
          { de: "Kritik üben (NOT: kritisieren)", en: "to criticize (lit: to practice criticism)" },
          { de: "in Betracht ziehen", en: "to consider (lit: to pull into consideration)" },
        ]
      },
      {
        type: "grammar",
        title: "Most Important FVG for C1",
        explanation: "These appear constantly in news, academic texts, and formal speech. Learn them as fixed phrases.",
        examples: [
          { de: "zur Verfügung stehen/stellen", en: "to be available / to make available" },
          { de: "in Anspruch nehmen", en: "to make use of / to claim" },
          { de: "Einfluss nehmen auf", en: "to influence (lit: to take influence on)" },
          { de: "in Kauf nehmen", en: "to accept (a negative consequence)" },
          { de: "zum Ausdruck bringen", en: "to express (lit: to bring to expression)" },
          { de: "unter Druck setzen", en: "to pressure (lit: to put under pressure)" },
        ]
      },
      {
        type: "example-dialogue",
        title: "In a Business Meeting",
        context: "A manager discussing a new project with their team.",
        lines: [
          { speaker: "Chef", de: "Wir müssen eine Entscheidung treffen.", en: "We need to make a decision." },
          { speaker: "Anna", de: "Ich möchte einen Vorschlag zur Diskussion stellen.", en: "I'd like to put a suggestion up for discussion." },
          { speaker: "Chef", de: "Bitte, nehmen Sie Bezug auf die Zahlen.", en: "Please, refer to the numbers." },
          { speaker: "Anna", de: "Die Daten stehen Ihnen zur Verfügung.", en: "The data is available to you." },
          { speaker: "Chef", de: "Gut. Wir nehmen das Risiko in Kauf.", en: "Good. We'll accept the risk." }
        ]
      },
      {
        type: "summary",
        points: [
          "FVG = light verb + noun — the noun carries the meaning",
          "They sound MORE formal than simple verbs (entscheiden → eine Entscheidung treffen)",
          "Essential for business German, academic writing, and news",
          "Learn them as fixed phrases — don't try to construct them logically"
        ]
      },
      {
        type: "quiz-mcq",
        question: "What is the formal FVG equivalent of 'fragen'?",
        options: ["eine Frage stellen", "eine Frage machen", "eine Frage geben", "eine Frage nehmen"],
        correctIndex: 0,
        explanation: "'Eine Frage stellen' is the correct FVG. You 'stellen' (place/pose) a question in German, not 'machen' or 'geben'."
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Die Firma muss eine ",
        sentenceAfter: " treffen.",
        missingWord: "Entscheidung",
        translation: "The company must make a decision."
      }
    ]
  },
  "c1-g3": {
    id: "c1-g3",
    title: "Register & Stilebenen",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Four Registers of German",
        explanation: "German has distinct formality levels. Mixing them sounds awkward — like wearing a tuxedo to a BBQ. At C1, you must recognize AND switch between registers appropriately.",
        examples: [
          { de: "Umgangssprache: Ich hab keinen Bock.", en: "Colloquial: I don't feel like it." },
          { de: "Standardsprache: Ich habe keine Lust.", en: "Standard: I don't feel like it." },
          { de: "Gehobene Sprache: Ich verspüre kein Verlangen.", en: "Elevated: I feel no desire." },
          { de: "Amtssprache: Es besteht kein Interesse.", en: "Official: There is no interest." },
        ]
      },
      {
        type: "grammar",
        title: "Colloquial vs. Standard Equivalents",
        explanation: "Real Germans use colloquial forms constantly. Here are key differences you MUST know to understand native speakers and to choose the right register yourself.",
        examples: [
          { de: "Standard: nicht → Umgang: nich/net", en: "Not → nah/nope" },
          { de: "Standard: etwas → Umgang: was", en: "Something → somethin'" },
          { de: "Standard: einmal → Umgang: mal", en: "Once → just" },
          { de: "Standard: weil + Verb am Ende → Umgang: weil + V2", en: "Because (verb-final) → Because (verb-2nd, spoken)" },
        ]
      },
      {
        type: "cultural-note",
        title: "The 'weil' Controversy",
        content: "In spoken German, many people say 'weil' with verb in position 2 (like 'denn'): 'Ich gehe, weil ich bin müde.' Grammatically 'wrong' but universally used. In written/formal German, ALWAYS put the verb at the end: 'Ich gehe, weil ich müde bin.' Knowing both makes you sound native.",
        emoji: "⚡"
      },
      {
        type: "summary",
        points: [
          "4 registers: Umgangssprache → Standardsprache → Gehoben → Amtssprache",
          "Use Standard in writing, Umgangssprache with friends, Gehoben in presentations",
          "Recognize colloquial forms (nich, was, mal) even if you write formally",
          "'weil' + V2 is spoken German — 'weil' + verb-final is written German"
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which register is 'Ich hab keinen Bock' in?",
        options: ["Amtssprache (official)", "Gehobene Sprache (elevated)", "Standardsprache (standard)", "Umgangssprache (colloquial)"],
        correctIndex: 3,
        explanation: "'Keinen Bock haben' is very colloquial/slang. It would never appear in formal writing. The standard equivalent is 'keine Lust haben'."
      },
      {
        type: "speaking",
        phrase: "Ich hätte gerne eine Auskunft, bitte.",
        translation: "I would like some information, please. (formal register)",
        phonetic: "ikh het-tuh gair-nuh eye-nuh ows-koonft bi-tuh",
        tip: "This is polite/formal register. Among friends you'd just say 'Weißt du was darüber?' (Do you know anything about it?)"
      }
    ]
  },
  "c1-g4": {
    id: "c1-g4",
    title: "Redewendungen & Idioms",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Essential German Idioms",
        explanation: "Idioms (Redewendungen) are fixed phrases whose meaning can't be guessed from the individual words. Germans use them constantly in everyday speech. Here are the most common ones you'll actually hear.",
        examples: [
          { de: "Ich verstehe nur Bahnhof.", en: "I don't understand anything. (lit: I only understand train station)" },
          { de: "Das ist nicht mein Bier.", en: "That's not my problem. (lit: That's not my beer)" },
          { de: "Da steppt der Bär!", en: "It's going to be a great party! (lit: The bear dances there)" },
          { de: "Ich drücke dir die Daumen!", en: "I'll keep my fingers crossed for you! (lit: I press my thumbs)" },
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Schwein haben", phonetic: "shvine hah-ben", meaning: "to be lucky (lit: to have pig)", example: { de: "Da hast du aber Schwein gehabt!", en: "You were really lucky!" } },
          { word: "jemandem auf den Keks gehen", phonetic: "yeh-man-dem owf dayn kayks gay-en", meaning: "to annoy someone (lit: to walk on someone's cookie)", example: { de: "Du gehst mir auf den Keks!", en: "You're getting on my nerves!" } },
          { word: "den Nagel auf den Kopf treffen", phonetic: "dayn nah-gel owf dayn kopf tre-fen", meaning: "to hit the nail on the head", example: { de: "Damit hast du den Nagel auf den Kopf getroffen.", en: "You hit the nail on the head with that." } },
          { word: "Tomaten auf den Augen haben", phonetic: "to-mah-ten owf dayn ow-gen hah-ben", meaning: "to be oblivious (lit: to have tomatoes on your eyes)", example: { de: "Hast du Tomaten auf den Augen?", en: "Are you blind? Can't you see?" } },
        ]
      },
      {
        type: "example-dialogue",
        title: "Friends Chatting After an Exam",
        context: "Using idioms naturally in conversation.",
        lines: [
          { speaker: "Kai", de: "Wie war die Prüfung?", en: "How was the exam?" },
          { speaker: "Lena", de: "Ich verstehe nur Bahnhof! Die war so schwer.", en: "I didn't understand a thing! It was so hard." },
          { speaker: "Kai", de: "Ich drücke dir die Daumen für die Ergebnisse!", en: "I'll keep my fingers crossed for your results!" },
          { speaker: "Lena", de: "Naja, vielleicht habe ich Schwein gehabt.", en: "Well, maybe I got lucky." },
          { speaker: "Kai", de: "Ach, das ist doch nicht dein Bier — warte erstmal ab!", en: "Don't worry about it — just wait and see!" }
        ]
      },
      {
        type: "summary",
        points: [
          "Germans press thumbs (Daumen drücken) instead of crossing fingers",
          "'Schwein haben' = to be lucky — pigs are lucky in German culture!",
          "Learn idioms as complete phrases, never translate word-by-word",
          "Using even 2-3 idioms correctly will impress native speakers"
        ]
      },
      {
        type: "quiz-mcq",
        question: "What does 'Ich verstehe nur Bahnhof' mean?",
        options: ["I love trains", "I only know the train station", "I don't understand anything", "I want to go to the station"],
        correctIndex: 2,
        explanation: "This famous idiom means 'I don't understand anything at all.' It has nothing to do with actual train stations!"
      },
      {
        type: "quiz-mcq",
        question: "How do Germans wish someone good luck?",
        options: ["Ich kreuze die Finger!", "Ich drücke dir die Daumen!", "Ich halte die Hände!", "Ich ziehe den Hut!"],
        correctIndex: 1,
        explanation: "Germans press their thumbs (Daumen drücken) for luck. 'Crossing fingers' is the English equivalent but NOT used in German."
      },
      {
        type: "speaking",
        phrase: "Ich drücke dir die Daumen!",
        translation: "I'll keep my fingers crossed for you!",
        phonetic: "ikh droo-kuh deer dee dow-men",
        tip: "This is one of the most useful idioms. Use it anytime someone has an exam, interview, or important event."
      }
    ]
  },
  "c1-g5": {
    id: "c1-g5",
    title: "Colloquial German (Umgangssprache)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "How Germans ACTUALLY Talk",
        explanation: "Textbook German and real spoken German are quite different. At C1, you need to understand (and use) colloquial forms. Here are the most important differences.",
        examples: [
          { de: "Textbook: Ich habe es nicht verstanden.", en: "Real: Hab's nich verstanden." },
          { de: "Textbook: Was ist denn los?", en: "Real: Was'n los?" },
          { de: "Textbook: Hast du etwas?", en: "Real: Haste was?" },
          { de: "Textbook: Weißt du, was ich meine?", en: "Real: Weißte, was ich mein?" },
        ]
      },
      {
        type: "grammar",
        title: "Common Spoken Contractions",
        explanation: "Germans contract words constantly in speech. Recognizing these is essential for understanding native speakers.",
        examples: [
          { de: "hast du → haste", en: "do you have" },
          { de: "ist das → is'das / isses", en: "is it" },
          { de: "einmal → mal", en: "once / just" },
          { de: "etwas → was", en: "something" },
          { de: "haben wir → ham wir", en: "we have" },
          { de: "ich weiß nicht → weiß nich / keine Ahnung", en: "I don't know / no idea" },
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "keine Ahnung", phonetic: "ky-nuh ah-nung", meaning: "no idea (most common 'I don't know')", example: { de: "Keine Ahnung, wo er ist.", en: "No idea where he is." } },
          { word: "krass", phonetic: "krahss", meaning: "wow / intense / crazy (youth slang)", example: { de: "Das ist echt krass!", en: "That's really crazy/awesome!" } },
          { word: "geil", phonetic: "gyle", meaning: "awesome / cool (very common, informal)", example: { de: "Das Essen war echt geil!", en: "The food was really awesome!" } },
          { word: "Quatsch", phonetic: "kvatsh", meaning: "nonsense / rubbish", example: { de: "Ach, Quatsch! Das stimmt doch nicht.", en: "Nonsense! That's not true." } },
        ]
      },
      {
        type: "cultural-note",
        title: "When NOT to Use Colloquial German",
        content: "Never use Umgangssprache in: job interviews, university papers, formal emails, speaking to elderly people you don't know, or government offices. In those situations, switch to Standardsprache. The ability to switch registers is the true sign of fluency.",
        emoji: "⚠️"
      },
      {
        type: "summary",
        points: [
          "Real German ≠ Textbook German — contractions are everywhere",
          "'Keine Ahnung' is used far more than 'Ich weiß nicht'",
          "Words like 'krass', 'geil', 'Quatsch' are daily vocabulary",
          "Master BOTH registers: formal for writing, colloquial for speaking"
        ]
      },
      {
        type: "quiz-mcq",
        question: "What is the colloquial form of 'Hast du etwas?'",
        options: ["Habst du was?", "Haste was?", "Hast du mal?", "Haben Sie etwas?"],
        correctIndex: 1,
        explanation: "'Haste' contracts 'hast du', and 'was' replaces 'etwas' — both are standard spoken contractions."
      },
      {
        type: "speaking",
        phrase: "Keine Ahnung, frag mal den anderen.",
        translation: "No idea, ask the other one.",
        phonetic: "ky-nuh ah-nung, frahk mahl dayn an-de-ren",
        tip: "This casual response is far more natural than 'Ich weiß es leider nicht.' Use it with friends and colleagues."
      }
    ]
  },
};
