import { Lesson } from "./lessons";

export const lessonsA0: Record<string, Lesson> = {
  "l1": {
    id: "l1",
    title: "Alphabet & Sounds",
    module: "A0",
    blocks: [
      {
        type: "grammar",
        title: "German Alphabet & Special Characters",
        explanation: "German uses the Latin alphabet like English, but adds four special letters: ä, ö, ü (the Umlauts) and ß (the Eszett or 'scharfes S'). The 'ß' is unique to German and is pronounced like a sharp 's' (as in 'snake'). Note: 'ß' is never used at the beginning of a word.",
        examples: [
          { de: "ä — Äpfel (apples)", en: "Sounds like 'eh' in 'bed'" },
          { de: "ö — schön (beautiful)", en: "Round your lips and say 'er'" },
          { de: "ü — über (over)", en: "Round your lips and say 'ee'" },
          { de: "ß — groß (big)", en: "Sounds exactly like 'ss'" },
        ]
      },
      {
        type: "grammar",
        title: "Diphthongs (Vowel Combinations)",
        explanation: "When certain vowels are combined, they make a completely new sound. These are crucial for correct pronunciation.",
        examples: [
          { de: "ei / ai — zwei, Mai", en: "Sounds like 'eye'" },
          { de: "ie — Sie, Bier", en: "Sounds like 'ee' in 'see'" },
          { de: "eu / äu — neun, Häuser", en: "Sounds like 'oy' in 'boy'" },
          { de: "au — Haus, Auto", en: "Sounds like 'ow' in 'cow'" },
        ]
      },
      {
        type: "listening",
        phrase: "Die Häuser sind groß.",
        translation: "The houses are big.",
        speed: "normal"
      },
      {
        type: "flashcard",
        cards: [
          { word: "groß", phonetic: "grohs", meaning: "big / large", example: { de: "Das Haus ist sehr groß.", en: "The house is very big." } },
          { word: "neu", phonetic: "noy", meaning: "new", example: { de: "Das Auto ist neu.", en: "The car is new." } },
          { word: "zwei", phonetic: "tsvye", meaning: "two", example: { de: "Ich habe zwei Äpfel.", en: "I have two apples." } },
        ]
      },
      {
        type: "quiz-mcq",
        question: "How do you pronounce the combination 'ie' in German (like in 'Bier')?",
        options: ["Like 'eye'", "Like 'ee'", "Like 'oy'", "Like 'ay'"],
        correctIndex: 1,
        explanation: "'ie' sounds like a long 'e' (ee) in English. Conversely, 'ei' sounds like 'eye'."
      }
    ]
  },
  "l2": {
    id: "l2",
    title: "Pronunciation Rules",
    module: "A0",
    blocks: [
      {
        type: "grammar",
        title: "Consonant Rules",
        explanation: "Some German consonants sound different from English. Memorize these key rules:",
        examples: [
          { de: "W = V", en: "Wasser sounds like 'Vasser'" },
          { de: "V = F", en: "Vater sounds like 'Fater'" },
          { de: "Z = TS", en: "Zwei sounds like 'Tsvye'" },
          { de: "J = Y", en: "Ja sounds like 'Ya'" },
          { de: "S = Z", en: "Sonne sounds like 'Zonne' (when at the start of a word)" }
        ]
      },
      {
        type: "grammar",
        title: "The 'ch', 'sch', and 'sp/st' sounds",
        explanation: "The 'ch' sound changes depending on the vowel before it. 'sch' is just like English 'sh'. 'sp' and 'st' at the start of a word sound like 'shp' and 'sht'.",
        examples: [
          { de: "ch (soft) — ich, mich", en: "Like a cat hissing, used after i, e, ä, ö, ü" },
          { de: "ch (hard) — ach, Buch", en: "Like a guttural throat clearing, used after a, o, u" },
          { de: "sch — Schule", en: "Like 'sh' in 'shoe'" },
          { de: "sp/st — Sport, Stadt", en: "Like 'shp' and 'sht'" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Wasser", phonetic: "vas-ser", meaning: "water", gender: "das", example: { de: "Ich trinke Wasser.", en: "I drink water." } },
          { word: "Vater", phonetic: "fah-ter", meaning: "father", gender: "der", example: { de: "Mein Vater ist nett.", en: "My father is nice." } },
          { word: "ich", phonetic: "ikh", meaning: "I", example: { de: "Ich lerne Deutsch.", en: "I am learning German." } },
        ]
      },
      {
        type: "listening",
        phrase: "Ich trinke Wasser.",
        translation: "I am drinking water.",
        speed: "normal"
      },
      {
        type: "speaking",
        phrase: "Die Sonne und das Wasser",
        translation: "The sun and the water",
        phonetic: "dee zon-nuh oont das vas-ser",
        tip: "Remember that S at the beginning sounds like Z, and W sounds like V."
      }
    ]
  },
  "l3": {
    id: "l3",
    title: "Greetings & Farewells",
    module: "A0",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "Hallo", phonetic: "ha-loh", meaning: "Hello", example: { de: "Hallo, wie geht es dir?", en: "Hello, how are you?" } },
          { word: "Guten Morgen", phonetic: "goo-ten mor-gen", meaning: "Good morning", example: { de: "Guten Morgen, Herr Schmidt.", en: "Good morning, Mr. Schmidt." } },
          { word: "Guten Tag", phonetic: "goo-ten tahk", meaning: "Good day / Hello (formal)", example: { de: "Guten Tag, Frau Müller.", en: "Good day, Ms. Müller." } },
          { word: "Guten Abend", phonetic: "goo-ten ah-bent", meaning: "Good evening", example: { de: "Guten Abend zusammen.", en: "Good evening everyone." } },
          { word: "Gute Nacht", phonetic: "goo-tuh nakht", meaning: "Good night", example: { de: "Gute Nacht, schlaf gut.", en: "Good night, sleep well." } },
          { word: "Tschüss", phonetic: "chüss", meaning: "Goodbye (informal)", example: { de: "Tschüss, bis dann!", en: "Bye, see you then!" } },
          { word: "Auf Wiedersehen", phonetic: "owf vee-der-zayn", meaning: "Goodbye (formal)", example: { de: "Auf Wiedersehen, danke.", en: "Goodbye, thank you." } },
          { word: "Bis bald", phonetic: "bis balt", meaning: "See you soon", example: { de: "Tschüss, bis bald!", en: "Bye, see you soon!" } },
        ]
      },
      {
        type: "grammar",
        title: "Regional Greetings",
        explanation: "Depending on where you are in the German-speaking world, you will hear different greetings.",
        examples: [
          { de: "Moin", en: "Used in Northern Germany for 'hello' at any time of day." },
          { de: "Servus", en: "Used in Bavaria (South Germany) and Austria for both 'hello' and 'goodbye'." },
          { de: "Grüezi", en: "Used in Switzerland for 'hello'." }
        ]
      },
      {
        type: "speaking",
        phrase: "Guten Tag, auf Wiedersehen!",
        translation: "Good day, goodbye!",
        phonetic: "goo-ten tahk, owf vee-der-zayn",
        tip: "Notice that 'Tag' is pronounced more like 'Tahk' at the end of the word."
      },
      {
        type: "quiz-mcq",
        question: "Which greeting would you use late at night when going to sleep?",
        options: ["Guten Abend", "Gute Nacht", "Guten Morgen", "Guten Tag"],
        correctIndex: 1,
        explanation: "'Gute Nacht' means good night and is only used when parting to go to sleep. 'Guten Abend' is used for greeting in the evening."
      }
    ]
  },
  "l4": {
    id: "l4",
    title: "Numbers 1-20",
    module: "A0",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "eins", phonetic: "ayns", meaning: "one", example: { de: "Nummer eins.", en: "Number one." } },
          { word: "zwei", phonetic: "tsvye", meaning: "two", example: { de: "Ich habe zwei.", en: "I have two." } },
          { word: "drei", phonetic: "dry", meaning: "three", example: { de: "Wir sind drei.", en: "We are three." } },
          { word: "vier", phonetic: "feer", meaning: "four", example: { de: "Vier Personen.", en: "Four people." } },
          { word: "fünf", phonetic: "fünf", meaning: "five", example: { de: "Fünf Euro.", en: "Five Euros." } },
          { word: "sechs", phonetic: "zex", meaning: "six", example: { de: "Sechs Uhr.", en: "Six o'clock." } },
          { word: "sieben", phonetic: "zee-ben", meaning: "seven", example: { de: "Sieben Tage.", en: "Seven days." } },
          { word: "acht", phonetic: "akht", meaning: "eight", example: { de: "Acht Kinder.", en: "Eight children." } },
          { word: "neun", phonetic: "noyn", meaning: "nine", example: { de: "Neun Katzen.", en: "Nine cats." } },
          { word: "zehn", phonetic: "tsayn", meaning: "ten", example: { de: "Zehn Hunde.", en: "Ten dogs." } },
          { word: "elf", phonetic: "elf", meaning: "eleven", example: { de: "Elf Spieler.", en: "Eleven players." } },
          { word: "zwölf", phonetic: "zvölf", meaning: "twelve", example: { de: "Zwölf Monate.", en: "Twelve months." } },
        ]
      },
      {
        type: "grammar",
        title: "Numbers 13-19",
        explanation: "Numbers 13 through 19 are formed simply by taking the base number and adding 'zehn' (ten). Note the slight spelling changes for 16 and 17.",
        examples: [
          { de: "13 = drei + zehn = dreizehn", en: "" },
          { de: "14 = vier + zehn = vierzehn", en: "" },
          { de: "16 = sech(s) + zehn = sechzehn (drops the s)", en: "" },
          { de: "17 = sieb(en) + zehn = siebzehn (drops the en)", en: "" },
        ]
      },
      {
        type: "listening",
        phrase: "Ich habe zwei Brüder und drei Schwestern.",
        translation: "I have two brothers and three sisters.",
        speed: "normal"
      },
      {
        type: "quiz-mcq",
        question: "How do you say 16 in German?",
        options: ["sechszehn", "sechzehn", "sechszig", "sechzig"],
        correctIndex: 1,
        explanation: "16 is 'sechzehn'. It drops the 's' from 'sechs'."
      }
    ]
  },
  "l5": {
    id: "l5",
    title: "Numbers 20-100",
    module: "A0",
    blocks: [
      {
        type: "grammar",
        title: "Tens (20, 30, 40...)",
        explanation: "Tens are mostly formed by adding '-zig' to the base number. Pay attention to 20 (zwanzig) and 30 (dreißig, which uses ß instead of z).",
        examples: [
          { de: "20 = zwanzig", en: "" },
          { de: "30 = dreißig", en: "" },
          { de: "40 = vierzig", en: "" },
          { de: "50 = fünfzig", en: "" },
          { de: "100 = hundert", en: "" }
        ]
      },
      {
        type: "grammar",
        title: "Compound Numbers (21-99)",
        explanation: "In German, compound numbers are read BACKWARDS. You say the single digit first, then 'und' (and), then the tens digit. It is all written as one word.",
        examples: [
          { de: "21 = ein + und + zwanzig = einundzwanzig", en: "one and twenty" },
          { de: "34 = vier + und + dreißig = vierunddreißig", en: "four and thirty" },
          { de: "99 = neun + und + neunzig = neunundneunzig", en: "nine and ninety" },
        ]
      },
      {
        type: "listening",
        phrase: "Das kostet fünfundvierzig Euro.",
        translation: "That costs forty-five Euros.",
        speed: "slow"
      },
      {
        type: "quiz-mcq",
        question: "How do you say '52' in German?",
        options: ["fünfzigundzwei", "zweifünfzig", "zweiundfünfzig", "fünfundzwanzig"],
        correctIndex: 2,
        explanation: "You read the single digit first: zwei-und-fünfzig (two and fifty)."
      }
    ]
  },
  "l6": {
    id: "l6",
    title: "Days of the Week",
    module: "A0",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "Montag", phonetic: "mon-tahk", meaning: "Monday", gender: "der", example: { de: "Heute ist Montag.", en: "Today is Monday." } },
          { word: "Dienstag", phonetic: "deen-stahk", meaning: "Tuesday", gender: "der", example: { de: "Dienstag arbeite ich.", en: "I work on Tuesday." } },
          { word: "Mittwoch", phonetic: "mit-vokh", meaning: "Wednesday", gender: "der", example: { de: "Mittwoch ist die Mitte der Woche.", en: "Wednesday is the middle of the week." } },
          { word: "Donnerstag", phonetic: "don-ners-tahk", meaning: "Thursday", gender: "der", example: { de: "Morgen ist Donnerstag.", en: "Tomorrow is Thursday." } },
          { word: "Freitag", phonetic: "fry-tahk", meaning: "Friday", gender: "der", example: { de: "Endlich Freitag!", en: "Finally Friday!" } },
          { word: "Samstag", phonetic: "zams-tahk", meaning: "Saturday", gender: "der", example: { de: "Samstag habe ich frei.", en: "I have Saturday off." } },
          { word: "Sonntag", phonetic: "zon-tahk", meaning: "Sunday", gender: "der", example: { de: "Sonntag ist Ruhetag.", en: "Sunday is a day of rest." } },
          { word: "die Woche", phonetic: "vo-khe", meaning: "the week", gender: "die", example: { de: "Eine Woche hat sieben Tage.", en: "A week has seven days." } },
          { word: "das Wochenende", phonetic: "vo-khen-en-duh", meaning: "the weekend", gender: "das", example: { de: "Schönes Wochenende!", en: "Have a nice weekend!" } },
        ]
      },
      {
        type: "grammar",
        title: "Using 'am' with days",
        explanation: "To say 'ON a day' in German, you use the preposition 'am' (a contraction of an + dem). Also, all days of the week are masculine ('der').",
        examples: [
          { de: "Ich spiele am Montag Fußball.", en: "I play football on Monday." },
          { de: "Am Wochenende schlafe ich.", en: "On the weekend I sleep." }
        ]
      },
      {
        type: "speaking",
        phrase: "Am Freitag habe ich Zeit.",
        translation: "On Friday I have time.",
        phonetic: "am fry-tahk ha-buh ikh tsyte",
        tip: "Remember the verb must always be in the SECOND position. 'Am Freitag' takes position 1, so 'habe' takes position 2."
      },
      {
        type: "quiz-fill",
        sentenceBefore: "",
        sentenceAfter: " Wochenende habe ich frei.",
        missingWord: "Am",
        translation: "On the weekend I am free."
      }
    ]
  },
  "l7": {
    id: "l7",
    title: "Months & Seasons",
    module: "A0",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "Januar", phonetic: "ya-noo-ar", meaning: "January", gender: "der", example: { de: "Januar ist kalt.", en: "January is cold." } },
          { word: "Februar", phonetic: "fay-broo-ar", meaning: "February", gender: "der", example: { de: "Mein Geburtstag ist im Februar.", en: "My birthday is in February." } },
          { word: "März", phonetic: "merts", meaning: "March", gender: "der", example: { de: "Im März beginnt der Frühling.", en: "Spring begins in March." } },
          { word: "Frühling", phonetic: "früh-ling", meaning: "Spring", gender: "der", example: { de: "Der Frühling ist schön.", en: "Spring is beautiful." } },
          { word: "Sommer", phonetic: "zom-mer", meaning: "Summer", gender: "der", example: { de: "Im Sommer ist es heiß.", en: "In summer it is hot." } },
          { word: "Herbst", phonetic: "herpst", meaning: "Autumn / Fall", gender: "der", example: { de: "Der Herbst ist bunt.", en: "Autumn is colorful." } },
          { word: "Winter", phonetic: "vin-ter", meaning: "Winter", gender: "der", example: { de: "Ich mag den Winter.", en: "I like winter." } },
        ]
      },
      {
        type: "grammar",
        title: "Using 'im' with months and seasons",
        explanation: "While days use 'am', months and seasons use 'im' (in + dem) to say 'IN a month/season'. All months and seasons are masculine ('der').",
        examples: [
          { de: "im Januar", en: "in January" },
          { de: "im Sommer", en: "in Summer" },
          { de: "Im Dezember schneit es.", en: "It snows in December." }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which preposition do you use for Months and Seasons?",
        options: ["am", "um", "im", "in"],
        correctIndex: 2,
        explanation: "Months and seasons use 'im' (im Mai, im Herbst). Days use 'am' (am Montag)."
      }
    ]
  },
  "l8": {
    id: "l8",
    title: "Colors",
    module: "A0",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "rot", phonetic: "roht", meaning: "red", example: { de: "Der Apfel ist rot.", en: "The apple is red." } },
          { word: "blau", phonetic: "bl-ow", meaning: "blue", example: { de: "Der Himmel ist blau.", en: "The sky is blue." } },
          { word: "grün", phonetic: "grün", meaning: "green", example: { de: "Das Gras ist grün.", en: "The grass is green." } },
          { word: "gelb", phonetic: "gelp", meaning: "yellow", example: { de: "Die Sonne ist gelb.", en: "The sun is yellow." } },
          { word: "schwarz", phonetic: "shvarts", meaning: "black", example: { de: "Die Katze ist schwarz.", en: "The cat is black." } },
          { word: "weiß", phonetic: "vyce", meaning: "white", example: { de: "Schnee ist weiß.", en: "Snow is white." } },
          { word: "braun", phonetic: "brown", meaning: "brown", example: { de: "Der Hund ist braun.", en: "The dog is brown." } },
          { word: "grau", phonetic: "grow", meaning: "gray", example: { de: "Die Wolke ist grau.", en: "The cloud is gray." } },
        ]
      },
      {
        type: "grammar",
        title: "Adjectives as Predicates",
        explanation: "When a color (or any adjective) comes AFTER the verb 'sein' (to be), it does not change its ending. This is the easiest way to use adjectives.",
        examples: [
          { de: "Das Auto ist rot.", en: "The car is red. (NOT rotes)" },
          { de: "Die Blumen sind gelb.", en: "The flowers are yellow. (NOT gelbe)" }
        ]
      },
      {
        type: "listening",
        phrase: "Der Himmel ist blau und die Sonne ist gelb.",
        translation: "The sky is blue and the sun is yellow.",
        speed: "normal"
      }
    ]
  },
  "l9": {
    id: "l9",
    title: "Essential Phrases",
    module: "A0",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "bitte", phonetic: "bi-tuh", meaning: "please / you're welcome", example: { de: "Ein Wasser, bitte.", en: "A water, please." } },
          { word: "danke", phonetic: "dan-kuh", meaning: "thank you", example: { de: "Danke schön!", en: "Thank you very much!" } },
          { word: "Entschuldigung", phonetic: "ent-shool-di-gung", meaning: "Excuse me / Sorry", example: { de: "Entschuldigung, wo ist der Bahnhof?", en: "Excuse me, where is the train station?" } },
          { word: "ja", phonetic: "yah", meaning: "yes", example: { de: "Ja, genau.", en: "Yes, exactly." } },
          { word: "nein", phonetic: "nine", meaning: "no", example: { de: "Nein, danke.", en: "No, thank you." } },
          { word: "Hilfe", phonetic: "hil-fuh", meaning: "help", gender: "die", example: { de: "Hilfe! Ich brauche Hilfe.", en: "Help! I need help." } },
          { word: "genau", phonetic: "ge-now", meaning: "exactly", example: { de: "Ja, genau!", en: "Yes, exactly!" } },
          { word: "alles klar", phonetic: "al-les klahr", meaning: "alright / understood", example: { de: "Alles klar, bis morgen.", en: "Alright, see you tomorrow." } },
        ]
      },
      {
        type: "grammar",
        title: "The magic word 'Bitte'",
        explanation: "'Bitte' is incredibly versatile in German. It has 4 main meanings depending on the context.",
        examples: [
          { de: "Ein Bier, bitte.", en: "Please (Request)" },
          { de: "- Danke. - Bitte!", en: "You're welcome (Response to thanks)" },
          { de: "Hier, bitte.", en: "Here you go (Handing something over)" },
          { de: "Wie bitte?", en: "Pardon? / What did you say? (Asking to repeat)" }
        ]
      },
      {
        type: "listening",
        phrase: "Entschuldigung, ich brauche Hilfe.",
        translation: "Excuse me, I need help.",
        speed: "slow"
      }
    ]
  },
  "l10": {
    id: "l10",
    title: "Self Introduction",
    module: "A0",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "heißen", phonetic: "hy-sen", meaning: "to be called", example: { de: "Ich heiße Anna.", en: "I am called Anna." } },
          { word: "kommen", phonetic: "kom-men", meaning: "to come", example: { de: "Ich komme aus Spanien.", en: "I come from Spain." } },
          { word: "wohnen", phonetic: "voh-nen", meaning: "to live (reside)", example: { de: "Ich wohne in Berlin.", en: "I live in Berlin." } },
          { word: "sein", phonetic: "zayn", meaning: "to be", example: { de: "Ich bin 25 Jahre alt.", en: "I am 25 years old." } },
          { word: "alt", phonetic: "alt", meaning: "old", example: { de: "Wie alt bist du?", en: "How old are you?" } },
        ]
      },
      {
        type: "grammar",
        title: "Introducing yourself",
        explanation: "The standard way to introduce yourself involves 4 sentences. Note that in German, you 'are' years old (sein), just like in English, but the verb for living is 'wohnen' (to reside).",
        examples: [
          { de: "Ich heiße...", en: "My name is... (I am called...)" },
          { de: "Ich komme aus...", en: "I am from... (I come from...)" },
          { de: "Ich wohne in...", en: "I live in..." },
          { de: "Ich bin [20] Jahre alt.", en: "I am 20 years old." }
        ]
      },
      {
        type: "conjugation-drill",
        verb: "sein",
        translation: "to be",
        tense: "Present",
        pronouns: ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"],
        correctForms: ["bin", "bist", "ist", "sind", "seid", "sind"],
        hint: "This is the most irregular verb in German. Memorize it!"
      },
      {
        type: "speaking",
        phrase: "Ich heiße Max und ich komme aus Deutschland.",
        translation: "My name is Max and I come from Germany.",
        phonetic: "ikh hy-suh max oont ikh kom-muh ows doytsh-lant",
        tip: "Remember that 'und' is pronounced like 'oont'."
      }
    ]
  },
  "l11": {
    id: "l11",
    title: "Countries & Languages",
    module: "A0",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "Deutschland", phonetic: "doytsh-lant", meaning: "Germany", example: { de: "Ich wohne in Deutschland.", en: "I live in Germany." } },
          { word: "Österreich", phonetic: "ö-ster-rykh", meaning: "Austria", example: { de: "Wien ist in Österreich.", en: "Vienna is in Austria." } },
          { word: "die Schweiz", phonetic: "dee shvyts", meaning: "Switzerland", example: { de: "Ich komme aus der Schweiz.", en: "I come from Switzerland." } },
          { word: "Deutsch", phonetic: "doytsh", meaning: "German (language)", example: { de: "Ich spreche Deutsch.", en: "I speak German." } },
          { word: "Englisch", phonetic: "eng-lish", meaning: "English (language)", example: { de: "Sprichst du Englisch?", en: "Do you speak English?" } },
          { word: "sprechen", phonetic: "shpre-khen", meaning: "to speak", example: { de: "Er spricht sehr gut Deutsch.", en: "He speaks German very well." } },
        ]
      },
      {
        type: "grammar",
        title: "Countries with Articles",
        explanation: "Most countries in German have NO article (e.g., Deutschland, Spanien, Italien). However, a few exceptions require a feminine or plural article.",
        examples: [
          { de: "Ich komme aus Deutschland.", en: "No article needed." },
          { de: "Ich komme aus der Schweiz.", en: "Feminine exception (the Switzerland)." },
          { de: "Ich komme aus der Türkei.", en: "Feminine exception (the Turkey)." },
          { de: "Ich komme aus den USA.", en: "Plural exception (the USA)." }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ich komme aus ",
        sentenceAfter: " Schweiz.",
        missingWord: "der",
        translation: "I come from Switzerland."
      }
    ]
  },
  "l12": {
    id: "l12",
    title: "Classroom Phrases",
    module: "A0",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "verstehen", phonetic: "fer-shtay-en", meaning: "to understand", example: { de: "Ich verstehe das nicht.", en: "I don't understand that." } },
          { word: "wiederholen", phonetic: "vee-der-ho-len", meaning: "to repeat", example: { de: "Können Sie das wiederholen?", en: "Can you repeat that?" } },
          { word: "die Frage", phonetic: "dee fra-guh", meaning: "the question", gender: "die", example: { de: "Ich habe eine Frage.", en: "I have a question." } },
          { word: "bedeuten", phonetic: "be-doy-ten", meaning: "to mean", example: { de: "Was bedeutet dieses Wort?", en: "What does this word mean?" } },
          { word: "das Wort", phonetic: "das vort", meaning: "the word", gender: "das", example: { de: "Das Wort ist neu.", en: "The word is new." } },
        ]
      },
      {
        type: "grammar",
        title: "Crucial Survival Phrases",
        explanation: "These phrases will save you when you are talking to a German tutor or speaker and don't know what to do.",
        examples: [
          { de: "Ich verstehe (das) nicht.", en: "I don't understand (that)." },
          { de: "Wie sagt man 'apple' auf Deutsch?", en: "How do you say 'apple' in German?" },
          { de: "Was bedeutet 'Tschüss'?", en: "What does 'Tschüss' mean?" },
          { de: "Sprechen Sie bitte langsamer.", en: "Please speak slower." }
        ]
      },
      {
        type: "listening",
        phrase: "Können Sie das bitte wiederholen?",
        translation: "Can you please repeat that?",
        speed: "normal"
      },
      {
        type: "speaking",
        phrase: "Ich habe eine Frage.",
        translation: "I have a question.",
        phonetic: "ikh ha-buh eye-nuh fra-guh",
        tip: "Pronounce the final 'e' in 'Frage' like a short 'uh' sound."
      }
    ]
  }
};
