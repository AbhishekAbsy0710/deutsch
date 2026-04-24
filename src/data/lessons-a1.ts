import { Lesson } from "./lessons";

export const lessonsA1: Record<string, Lesson> = {
  "l13": {
    id: "l13",
    title: "Personal Pronouns",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "Subject Pronouns (Nominative)",
        explanation: "German pronouns depend on who is speaking and whether the situation is formal. Note that 'sie' can mean 'she', 'they', or 'you (formal)' depending on capitalization and the verb ending.",
        examples: [
          { de: "ich, du", en: "I, you (informal singular)" },
          { de: "er, sie, es", en: "he, she, it" },
          { de: "wir, ihr", en: "we, you (informal plural / y'all)" },
          { de: "sie, Sie", en: "they, you (formal singular & plural)" },
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "ich", phonetic: "ikh", meaning: "I", example: { de: "Ich lerne.", en: "I am learning." } },
          { word: "du", phonetic: "doo", meaning: "you (informal)", example: { de: "Du lernst.", en: "You are learning." } },
          { word: "er", phonetic: "air", meaning: "he", example: { de: "Er lernt.", en: "He is learning." } },
          { word: "sie", phonetic: "zee", meaning: "she / they", example: { de: "Sie lernt. / Sie lernen.", en: "She is learning. / They are learning." } },
          { word: "es", phonetic: "es", meaning: "it", example: { de: "Es regnet.", en: "It is raining." } },
          { word: "wir", phonetic: "veer", meaning: "we", example: { de: "Wir lernen.", en: "We are learning." } },
          { word: "ihr", phonetic: "eer", meaning: "you (plural/y'all)", example: { de: "Ihr lernt.", en: "You all are learning." } },
          { word: "Sie", phonetic: "zee", meaning: "you (formal)", example: { de: "Sie lernen.", en: "You (formal) are learning." } },
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which pronoun is used to address a group of friends?",
        options: ["wir", "Sie", "ihr", "du"],
        correctIndex: 2,
        explanation: "'ihr' is the plural informal 'you' (like y'all or you guys). 'Sie' is formal, 'du' is singular informal."
      }
    ]
  },
  "l14": {
    id: "l14",
    title: "Regular Verbs (Present Tense)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "Verb Conjugation Rules",
        explanation: "Most German verbs end in '-en' (e.g., machen). To conjugate, remove the '-en' to get the stem (mach-), and add the correct ending: -e, -st, -t, -en, -t, -en.",
        examples: [
          { de: "ich mach-e", en: "I make/do" },
          { de: "du mach-st", en: "you make/do" },
          { de: "er/sie/es mach-t", en: "he/she/it makes/does" },
          { de: "wir mach-en", en: "we make/do" },
          { de: "ihr mach-t", en: "you all make/do" },
          { de: "sie/Sie mach-en", en: "they/you (formal) make/do" }
        ]
      },
      {
        type: "conjugation-drill",
        verb: "machen",
        translation: "to make / to do",
        tense: "Present",
        pronouns: ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"],
        correctForms: ["mache", "machst", "macht", "machen", "macht", "machen"],
        hint: "Follow the rule: -e, -st, -t, -en, -t, -en"
      },
      {
        type: "flashcard",
        cards: [
          { word: "lernen", phonetic: "lair-nen", meaning: "to learn", example: { de: "Ich lerne Deutsch.", en: "I am learning German." } },
          { word: "spielen", phonetic: "shpee-len", meaning: "to play", example: { de: "Wir spielen Fußball.", en: "We are playing football." } },
          { word: "gehen", phonetic: "gay-en", meaning: "to go", example: { de: "Sie gehen nach Hause.", en: "They go home." } },
          { word: "trinken", phonetic: "trin-ken", meaning: "to drink", example: { de: "Er trinkt Wasser.", en: "He drinks water." } },
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Du ",
        sentenceAfter: " sehr gut Deutsch.",
        missingWord: "lernst",
        translation: "You learn German very well."
      }
    ]
  },
  "l15": {
    id: "l15",
    title: "Irregular Verbs: haben & sein",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "The two most important verbs",
        explanation: "'haben' (to have) and 'sein' (to be) are completely irregular and must be memorized. They are also used to form past tenses later.",
        examples: [
          { de: "haben: habe, hast, hat, haben, habt, haben", en: "To have" },
          { de: "sein: bin, bist, ist, sind, seid, sind", en: "To be" }
        ]
      },
      {
        type: "conjugation-drill",
        verb: "haben",
        translation: "to have",
        tense: "Present",
        pronouns: ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"],
        correctForms: ["habe", "hast", "hat", "haben", "habt", "haben"]
      },
      {
        type: "listening",
        phrase: "Ich habe einen Hund und er ist sehr klein.",
        translation: "I have a dog and he is very small.",
        speed: "normal"
      },
      {
        type: "quiz-mcq",
        question: "How do you say 'We are'?",
        options: ["Wir haben", "Wir seid", "Wir sind", "Wir bin"],
        correctIndex: 2,
        explanation: "'sind' is the 'wir' (we) form of 'sein'."
      }
    ]
  },
  "l16": {
    id: "l16",
    title: "Nouns & Gender (der, die, das)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "The Three Genders",
        explanation: "Every German noun has a grammatical gender: masculine (der), feminine (die), or neuter (das). Gender doesn't always follow logic, so ALWAYS learn the noun with its article.",
        examples: [
          { de: "der Tisch", en: "the table (masculine)" },
          { de: "die Tür", en: "the door (feminine)" },
          { de: "das Fenster", en: "the window (neuter)" },
          { de: "das Mädchen", en: "the girl (neuter - because of the -chen ending!)" }
        ]
      },
      {
        type: "grammar",
        title: "Capitalization Rule",
        explanation: "In German, ALL nouns are capitalized. Always.",
        examples: [
          { de: "das Haus (the house)", en: "Noun, capitalized" },
          { de: "schön (beautiful)", en: "Adjective, lowercase" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "der Mann", phonetic: "man", meaning: "the man", gender: "der", example: { de: "Der Mann ist groß.", en: "The man is tall." } },
          { word: "die Frau", phonetic: "frow", meaning: "the woman", gender: "die", example: { de: "Die Frau ist nett.", en: "The woman is nice." } },
          { word: "das Kind", phonetic: "kint", meaning: "the child", gender: "das", example: { de: "Das Kind spielt.", en: "The child plays." } },
        ]
      },
      {
        type: "quiz-mcq",
        question: "Why is 'Mädchen' (girl) neuter (das) instead of feminine (die)?",
        options: ["Because girls are neuter.", "Because all words ending in -chen are neuter.", "It is an exception with no rule.", "Because it comes from English."],
        correctIndex: 1,
        explanation: "Any noun ending in the diminutive suffix '-chen' or '-lein' is automatically neuter (das)."
      }
    ]
  },
  "l17": {
    id: "l17",
    title: "Plurals",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "Plural Forms",
        explanation: "Unlike English (which mostly just adds 's'), German has multiple ways to make a noun plural: adding -e, -er, -n/-en, -s, or an Umlaut. However, the plural definite article is ALWAYS 'die'.",
        examples: [
          { de: "der Hund -> die Hunde", en: "Adds -e" },
          { de: "das Kind -> die Kinder", en: "Adds -er" },
          { de: "die Frau -> die Frauen", en: "Adds -en" },
          { de: "der Apfel -> die Äpfel", en: "Adds an Umlaut" },
          { de: "das Auto -> die Autos", en: "Adds -s (usually for foreign words)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Bücher", phonetic: "bü-kher", meaning: "the books", example: { de: "Die Bücher sind schwer.", en: "The books are heavy." } },
          { word: "die Männer", phonetic: "men-ner", meaning: "the men", example: { de: "Die Männer arbeiten.", en: "The men are working." } },
          { word: "die Autos", phonetic: "ow-tohs", meaning: "the cars", example: { de: "Die Autos sind schnell.", en: "The cars are fast." } },
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ein Kind, zwei ",
        sentenceAfter: ".",
        missingWord: "Kinder",
        translation: "One child, two children."
      }
    ]
  },
  "l18": {
    id: "l18",
    title: "Indefinite Articles (ein, eine)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "A / An",
        explanation: "The indefinite article (a/an) depends on the gender of the noun. Masculine and neuter use 'ein'. Feminine uses 'eine'. There is no plural indefinite article (just like in English).",
        examples: [
          { de: "ein Mann (der)", en: "a man" },
          { de: "eine Frau (die)", en: "a woman" },
          { de: "ein Kind (das)", en: "a child" },
          { de: "Kinder", en: "children (no article)" }
        ]
      },
      {
        type: "listening",
        phrase: "Ich sehe ein Haus und eine Katze.",
        translation: "I see a house and a cat.",
        speed: "normal"
      },
      {
        type: "quiz-mcq",
        question: "Which article do you use for 'Tisch' (der Tisch)?",
        options: ["ein", "eine", "einer", "eines"],
        correctIndex: 0,
        explanation: "Because Tisch is masculine (der), it takes 'ein' in the nominative case."
      }
    ]
  },
  "l19": {
    id: "l19",
    title: "Negation (nicht vs kein)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "Nicht vs Kein",
        explanation: "German has two words for 'not'. 'Kein' is used to negate NOUNS that have an indefinite article (ein/eine) or no article. 'Nicht' is used to negate verbs, adjectives, or nouns with a definite article.",
        examples: [
          { de: "Ich habe ein Auto. -> Ich habe kein Auto.", en: "I don't have a car. (Negating 'ein')" },
          { de: "Ich schwimme. -> Ich schwimme nicht.", en: "I am not swimming. (Negating a verb)" },
          { de: "Das Auto ist neu. -> Das Auto ist nicht neu.", en: "The car is not new. (Negating an adjective)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "kein", phonetic: "kyne", meaning: "no / none (masc/neut)", example: { de: "Das ist kein Hund.", en: "That is not a dog." } },
          { word: "keine", phonetic: "ky-nuh", meaning: "no / none (fem/plural)", example: { de: "Ich habe keine Zeit.", en: "I have no time." } },
          { word: "nicht", phonetic: "nikht", meaning: "not", example: { de: "Das stimmt nicht.", en: "That is not true." } },
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Das ist ",
        sentenceAfter: " Problem.",
        missingWord: "kein",
        translation: "That is not a problem. (Das Problem)"
      }
    ]
  },
  "l20": {
    id: "l20",
    title: "The Nominative Case",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "The Subject of the Sentence",
        explanation: "German uses 'Cases' to show what role a noun plays in a sentence. The Nominative case is the easiest: it is used for the SUBJECT of the sentence (the person/thing doing the action).",
        examples: [
          { de: "[Der Hund] schläft.", en: "The dog sleeps. (Dog is the subject)" },
          { de: "[Die Katze] frisst.", en: "The cat eats. (Cat is the subject)" },
          { de: "[Das Kind] spielt.", en: "The child plays." }
        ]
      },
      {
        type: "grammar",
        title: "Predicate Nominative",
        explanation: "The verb 'sein' (to be) acts like an equals sign. Both sides of the sentence are in the Nominative case.",
        examples: [
          { de: "[Der Mann] ist [ein Lehrer].", en: "The man is a teacher." }
        ]
      },
      {
        type: "speaking",
        phrase: "Der Apfel ist rot.",
        translation: "The apple is red.",
        phonetic: "dair ap-fel ist roht",
        tip: "'Der Apfel' is the subject, so it is in the Nominative case."
      }
    ]
  },
  "l21": {
    id: "l21",
    title: "The Accusative Case (Direct Object)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "The Direct Object",
        explanation: "When a noun is receiving the action of a verb (the direct object), it must be in the Accusative case. In Accusative, ONLY the masculine article changes. 'der' becomes 'den', and 'ein' becomes 'einen'.",
        examples: [
          { de: "Der Hund (Nom) sieht den Ball (Acc).", en: "The dog sees the ball." },
          { de: "Ich habe einen Bruder (Acc).", en: "I have a brother." },
          { de: "Ich sehe die Katze (Acc).", en: "I see the cat. ('die' doesn't change)" },
          { de: "Er isst das Brot (Acc).", en: "He eats the bread. ('das' doesn't change)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "den", phonetic: "den", meaning: "the (masculine accusative)", example: { de: "Ich sehe den Mann.", en: "I see the man." } },
          { word: "einen", phonetic: "eye-nen", meaning: "a/an (masculine accusative)", example: { de: "Ich habe einen Hund.", en: "I have a dog." } },
          { word: "mich", phonetic: "mikh", meaning: "me (accusative)", example: { de: "Siehst du mich?", en: "Do you see me?" } },
          { word: "dich", phonetic: "dikh", meaning: "you (accusative)", example: { de: "Ich liebe dich.", en: "I love you." } },
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which sentence is grammatically correct? (Der Apfel = masculine)",
        options: ["Ich esse der Apfel.", "Ich esse den Apfel.", "Ich esse das Apfel.", "Ich esse die Apfel."],
        correctIndex: 1,
        explanation: "'Ich' is the subject (Nominative). The apple is being eaten, so it's the direct object (Accusative). Masculine 'der' becomes 'den'."
      }
    ]
  },
  "l22": {
    id: "l22",
    title: "Accusative Prepositions",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "Prepositions that force Accusative",
        explanation: "Certain prepositions ALWAYS force the following noun into the Accusative case, regardless of its role in the sentence. Memorize the acronym DOGFU (durch, ohne, gegen, für, um).",
        examples: [
          { de: "für (for) — Das ist für den Mann.", en: "This is for the man." },
          { de: "ohne (without) — Ich trinke Kaffee ohne Zucker.", en: "I drink coffee without sugar." },
          { de: "gegen (against) — Er spielt gegen den Meister.", en: "He plays against the champion." },
          { de: "durch (through) — Wir gehen durch den Park.", en: "We walk through the park." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "für", phonetic: "für", meaning: "for", example: { de: "Das Geschenk ist für dich.", en: "The gift is for you." } },
          { word: "ohne", phonetic: "oh-nuh", meaning: "without", example: { de: "Ohne mich!", en: "Without me!" } },
          { word: "gegen", phonetic: "gay-gen", meaning: "against / around (time)", example: { de: "Gegen 8 Uhr.", en: "Around 8 o'clock." } },
          { word: "durch", phonetic: "doorkh", meaning: "through", example: { de: "Durch den Wald.", en: "Through the forest." } },
          { word: "um", phonetic: "oom", meaning: "around / at (time)", example: { de: "Um 8 Uhr.", en: "At 8 o'clock." } },
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Dieses Geschenk ist ",
        sentenceAfter: " dich.",
        missingWord: "für",
        translation: "This gift is for you."
      }
    ]
  },
  "l23": {
    id: "l23",
    title: "Family Vocabulary",
    module: "A1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Familie", phonetic: "fa-mee-lee-uh", meaning: "the family", example: { de: "Meine Familie ist groß.", en: "My family is big." } },
          { word: "der Vater", phonetic: "fah-ter", meaning: "the father", example: { de: "Mein Vater heißt Thomas.", en: "My father is named Thomas." } },
          { word: "die Mutter", phonetic: "moot-ter", meaning: "the mother", example: { de: "Meine Mutter arbeitet heute.", en: "My mother is working today." } },
          { word: "die Eltern", phonetic: "el-tern", meaning: "the parents (plural)", example: { de: "Meine Eltern wohnen in Berlin.", en: "My parents live in Berlin." } },
          { word: "der Bruder", phonetic: "broo-der", meaning: "the brother", example: { de: "Ich habe einen Bruder.", en: "I have a brother." } },
          { word: "die Schwester", phonetic: "shves-ter", meaning: "the sister", example: { de: "Meine Schwester studiert.", en: "My sister is studying." } },
          { word: "das Kind", phonetic: "kint", meaning: "the child", example: { de: "Das Kind spielt.", en: "The child plays." } },
          { word: "der Sohn", phonetic: "zohn", meaning: "the son", example: { de: "Er ist mein Sohn.", en: "He is my son." } },
          { word: "die Tochter", phonetic: "tokh-ter", meaning: "the daughter", example: { de: "Sie ist meine Tochter.", en: "She is my daughter." } },
        ]
      },
      {
        type: "grammar",
        title: "Possessive Pronouns (mein / dein)",
        explanation: "'mein' (my) and 'dein' (your) act just like 'ein'. They take the ending of the noun's gender.",
        examples: [
          { de: "mein Vater (der)", en: "my father" },
          { de: "meine Mutter (die)", en: "my mother" },
          { de: "mein Kind (das)", en: "my child" },
          { de: "meine Eltern (plural)", en: "my parents" }
        ]
      },
      {
        type: "listening",
        phrase: "Ich habe einen Bruder und zwei Schwestern.",
        translation: "I have one brother and two sisters.",
        speed: "normal"
      }
    ]
  },
  "l24": {
    id: "l24",
    title: "Food & Drink",
    module: "A1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "das Wasser", phonetic: "vas-ser", meaning: "the water", example: { de: "Ich trinke Wasser.", en: "I drink water." } },
          { word: "das Brot", phonetic: "broht", meaning: "the bread", example: { de: "Ich esse gern Brot.", en: "I like to eat bread." } },
          { word: "der Apfel", phonetic: "ap-fel", meaning: "the apple", example: { de: "Der Apfel ist grün.", en: "The apple is green." } },
          { word: "der Kaffee", phonetic: "ka-fay", meaning: "the coffee", example: { de: "Kaffee mit Milch, bitte.", en: "Coffee with milk, please." } },
          { word: "die Milch", phonetic: "milkh", meaning: "the milk", example: { de: "Die Milch ist kalt.", en: "The milk is cold." } },
          { word: "das Fleisch", phonetic: "flysh", meaning: "the meat", example: { de: "Ich esse kein Fleisch.", en: "I don't eat meat." } },
          { word: "das Gemüse", phonetic: "ge-mü-zuh", meaning: "the vegetables", example: { de: "Gemüse ist gesund.", en: "Vegetables are healthy." } },
          { word: "essen", phonetic: "es-sen", meaning: "to eat", example: { de: "Wir essen Pizza.", en: "We are eating pizza." } },
          { word: "trinken", phonetic: "trin-ken", meaning: "to drink", example: { de: "Was trinkst du?", en: "What are you drinking?" } },
        ]
      },
      {
        type: "conjugation-drill",
        verb: "essen",
        translation: "to eat",
        tense: "Present",
        pronouns: ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"],
        correctForms: ["esse", "isst", "isst", "essen", "esst", "essen"],
        hint: "Note the vowel shift for du and er/sie/es: e changes to i."
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Zum Frühstück ",
        sentenceAfter: " ich Kaffee.",
        missingWord: "trinke",
        translation: "For breakfast I drink coffee."
      }
    ]
  },
  "l25": {
    id: "l25",
    title: "Telling Time",
    module: "A1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Uhr", phonetic: "oor", meaning: "the clock / o'clock", example: { de: "Es ist drei Uhr.", en: "It is three o'clock." } },
          { word: "die Stunde", phonetic: "shtoon-duh", meaning: "the hour", example: { de: "Eine Stunde hat 60 Minuten.", en: "An hour has 60 minutes." } },
          { word: "die Minute", phonetic: "mi-noo-tuh", meaning: "the minute", example: { de: "Warte eine Minute.", en: "Wait one minute." } },
          { word: "spät", phonetic: "shpayt", meaning: "late", example: { de: "Wie spät ist es?", en: "How late is it? (What time is it?)" } },
          { word: "halb", phonetic: "halp", meaning: "half", example: { de: "Es ist halb acht.", en: "It is half past seven. (Literally: halfway to eight)" } },
          { word: "Viertel nach", phonetic: "feer-tel nakh", meaning: "quarter past", example: { de: "Es ist Viertel nach drei.", en: "It is quarter past three." } },
          { word: "Viertel vor", phonetic: "feer-tel for", meaning: "quarter to", example: { de: "Es ist Viertel vor vier.", en: "It is quarter to four." } },
        ]
      },
      {
        type: "grammar",
        title: "How to tell time",
        explanation: "To ask 'What time is it?', say 'Wie spät ist es?' (How late is it?). Note: 'halb' (half) in German refers to the upcoming hour, not the past hour! 'halb acht' means 7:30.",
        examples: [
          { de: "Es ist drei Uhr. (3:00)", en: "It is 3 o'clock." },
          { de: "Es ist Viertel nach drei. (3:15)", en: "It is quarter past three." },
          { de: "Es ist halb vier. (3:30)", en: "It is half past three (halfway to four)." },
          { de: "Es ist Viertel vor vier. (3:45)", en: "It is quarter to four." }
        ]
      },
      {
        type: "quiz-mcq",
        question: "If it is 5:30, what do you say in German?",
        options: ["halb fünf", "fünf halb", "halb sechs", "sechs halb"],
        correctIndex: 2,
        explanation: "'halb' always looks forward to the next hour. So 5:30 is halfway to 6: 'halb sechs'."
      }
    ]
  },
  "l26": {
    id: "l26",
    title: "Hobbies & Free Time",
    module: "A1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "das Hobby", phonetic: "ho-bee", meaning: "the hobby", example: { de: "Was ist dein Hobby?", en: "What is your hobby?" } },
          { word: "die Freizeit", phonetic: "fry-tsyt", meaning: "free time", example: { de: "In meiner Freizeit lese ich.", en: "In my free time, I read." } },
          { word: "lesen", phonetic: "lay-zen", meaning: "to read", example: { de: "Ich lese ein Buch.", en: "I am reading a book." } },
          { word: "Musik hören", phonetic: "moo-zeek hö-ren", meaning: "to listen to music", example: { de: "Ich höre gern Musik.", en: "I like listening to music." } },
          { word: "Kino", phonetic: "kee-no", meaning: "cinema / movies", gender: "das", example: { de: "Wir gehen ins Kino.", en: "We are going to the movies." } },
          { word: "spielen", phonetic: "shpee-len", meaning: "to play", example: { de: "Ich spiele Gitarre.", en: "I play guitar." } },
          { word: "gern", phonetic: "gairn", meaning: "gladly / like to", example: { de: "Ich koche gern.", en: "I like to cook." } },
        ]
      },
      {
        type: "grammar",
        title: "Using 'gern' (to like to do something)",
        explanation: "In English, you use a verb like 'to like' (I like reading). In German, you just use the main verb and add the adverb 'gern' (gladly).",
        examples: [
          { de: "Ich schwimme.", en: "I swim." },
          { de: "Ich schwimme gern.", en: "I like swimming. (Literally: I swim gladly.)" },
          { de: "Ich tanze nicht gern.", en: "I don't like dancing." }
        ]
      },
      {
        type: "listening",
        phrase: "In meiner Freizeit spiele ich gern Fußball.",
        translation: "In my free time I like to play football.",
        speed: "normal"
      }
    ]
  },
  "l27": {
    id: "l27",
    title: "Professions & Work",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "Professions & Gender",
        explanation: "Professions in German always specify the gender of the worker. To make a profession feminine, you usually add '-in' to the end of the masculine form.",
        examples: [
          { de: "der Lehrer / die Lehrerin", en: "the teacher" },
          { de: "der Arzt / die Ärztin", en: "the doctor (note the Umlaut!)" },
          { de: "der Student / die Studentin", en: "the university student" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "arbeiten", phonetic: "ar-by-ten", meaning: "to work", example: { de: "Ich arbeite heute.", en: "I am working today." } },
          { word: "der Beruf", phonetic: "be-roof", meaning: "the profession / job", example: { de: "Was bist du von Beruf?", en: "What is your profession?" } },
          { word: "das Büro", phonetic: "bü-ro", meaning: "the office", example: { de: "Ich arbeite im Büro.", en: "I work in the office." } },
          { word: "der Chef / die Chefin", phonetic: "shef", meaning: "the boss", example: { de: "Mein Chef ist nett.", en: "My boss is nice." } },
        ]
      },
      {
        type: "grammar",
        title: "Stating your profession",
        explanation: "Unlike English, you DO NOT use an article (a/an) when stating your profession in German.",
        examples: [
          { de: "Ich bin Lehrer. (NOT 'Ich bin ein Lehrer')", en: "I am a teacher." },
          { de: "Sie ist Ärztin.", en: "She is a doctor." }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ich arbeite als Ingenieur. Was bist du von ",
        sentenceAfter: "?",
        missingWord: "Beruf",
        translation: "I work as an engineer. What is your profession?"
      }
    ]
  },
  "l28": {
    id: "l28",
    title: "Question Words (W-Fragen)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "The W-Words",
        explanation: "German question words (almost) all start with W. Be careful: 'Wer' means Who, and 'Wo' means Where! It's confusing for English speakers.",
        examples: [
          { de: "Wer?", en: "Who?" },
          { de: "Was?", en: "What?" },
          { de: "Wann?", en: "When?" },
          { de: "Wo?", en: "Where?" },
          { de: "Warum?", en: "Why?" },
          { de: "Wie?", en: "How?" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Wer?", phonetic: "vair", meaning: "Who?", example: { de: "Wer ist das?", en: "Who is that?" } },
          { word: "Was?", phonetic: "vas", meaning: "What?", example: { de: "Was machst du?", en: "What are you doing?" } },
          { word: "Wann?", phonetic: "van", meaning: "When?", example: { de: "Wann kommst du?", en: "When are you coming?" } },
          { word: "Wo?", phonetic: "vo", meaning: "Where?", example: { de: "Wo wohnst du?", en: "Where do you live?" } },
          { word: "Warum?", phonetic: "va-room", meaning: "Why?", example: { de: "Warum weinst du?", en: "Why are you crying?" } },
          { word: "Wie?", phonetic: "vee", meaning: "How?", example: { de: "Wie heißt du?", en: "How are you called? (What is your name?)" } },
        ]
      },
      {
        type: "quiz-mcq",
        question: "Translate: 'Where is the station?'",
        options: ["Wer ist der Bahnhof?", "Was ist der Bahnhof?", "Wo ist der Bahnhof?", "Wann ist der Bahnhof?"],
        correctIndex: 2,
        explanation: "'Wo' means 'Where'. 'Wer' means 'Who'."
      }
    ]
  },
  "l29": {
    id: "l29",
    title: "Sentence Structure (V2 Rule)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "The Golden Rule: Verb in Position 2",
        explanation: "In a normal German statement, the conjugated verb MUST be in the second position. It doesn't matter if the first position is a subject, a time, or a place. The verb is always the anchor at position 2.",
        examples: [
          { de: "[Ich] [spiele] am Montag Fußball.", en: "I play football on Monday." },
          { de: "[Am Montag] [spiele] ich Fußball.", en: "On Monday play I football." },
          { de: "[Fußball] [spiele] ich am Montag.", en: "Football play I on Monday." }
        ]
      },
      {
        type: "grammar",
        title: "Yes/No Questions",
        explanation: "To ask a yes/no question, simply move the verb to Position 1.",
        examples: [
          { de: "[Du] [bist] müde. (Statement)", en: "You are tired." },
          { de: "[Bist] [du] müde? (Question)", en: "Are you tired?" }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Heute ",
        sentenceAfter: " ich ins Kino.",
        missingWord: "gehe",
        translation: "Today I am going to the movies."
      }
    ]
  },
  "l30": {
    id: "l30",
    title: "Modal Verbs (können, müssen, wollen)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "How Modal Verbs Work",
        explanation: "Modal verbs change the mood of a sentence (can, must, want to). When you use a modal verb, it goes in Position 2 and kicks the MAIN verb to the very end of the sentence in its infinitive (dictionary) form.",
        examples: [
          { de: "Ich spiele Fußball. (I play football)", en: "Normal sentence" },
          { de: "Ich [will] Fußball [spielen]. (I want to play football)", en: "Modal pushes main verb to end." },
          { de: "Ich [kann] Fußball [spielen]. (I can play football)", en: "Modal pushes main verb to end." },
          { de: "Ich [muss] Fußball [spielen]. (I must play football)", en: "Modal pushes main verb to end." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "können", phonetic: "kön-nen", meaning: "can / to be able to", example: { de: "Ich kann schwimmen.", en: "I can swim." } },
          { word: "müssen", phonetic: "müs-sen", meaning: "must / to have to", example: { de: "Ich muss gehen.", en: "I have to go." } },
          { word: "wollen", phonetic: "vol-len", meaning: "to want to", example: { de: "Er will schlafen.", en: "He wants to sleep." } },
          { word: "dürfen", phonetic: "dür-fen", meaning: "to be allowed to / may", example: { de: "Darf ich fragen?", en: "May I ask?" } },
          { word: "sollen", phonetic: "zol-len", meaning: "should / supposed to", example: { de: "Du sollst lernen.", en: "You should learn." } },
          { word: "mögen", phonetic: "mö-gen", meaning: "to like", example: { de: "Ich mag Pizza.", en: "I like Pizza." } },
        ]
      },
      {
        type: "conjugation-drill",
        verb: "können",
        translation: "can / to be able to",
        tense: "Present",
        pronouns: ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"],
        correctForms: ["kann", "kannst", "kann", "können", "könnt", "können"],
        hint: "Notice that 'ich' and 'er/sie/es' forms are identical and have no ending."
      },
      {
        type: "listening",
        phrase: "Ich muss heute arbeiten, aber ich will schlafen.",
        translation: "I have to work today, but I want to sleep.",
        speed: "normal"
      }
    ]
  }
};
