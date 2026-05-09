import { Lesson } from "./lessons";

export const lessonsA2: Record<string, Lesson> = {
  "l31": {
    id: "l31",
    title: "The Dative Case (Indirect Object)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "The Indirect Object",
        explanation: "The Dative case is used for the 'receiver' of an action (the indirect object). In English, we usually say 'to' or 'for' someone. In German, the Dative case changes the articles completely. Masculine 'der' becomes 'dem', Neuter 'das' becomes 'dem', Feminine 'die' becomes 'der', and Plural 'die' becomes 'den' (plus an '-n' on the noun).",
        examples: [
          { de: "Ich gebe dem Mann das Buch.", en: "I give the book TO the man. (der -> dem)" },
          { de: "Er hilft der Frau.", en: "He helps the woman. (die -> der)" },
          { de: "Das Auto gehört dem Kind.", en: "The car belongs to the child. (das -> dem)" },
          { de: "Wir danken den Eltern.", en: "We thank the parents. (die -> den + n)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "dem", phonetic: "dem", meaning: "to the (masc/neut dative)", example: { de: "Ich helfe dem Hund.", en: "I help the dog." } },
          { word: "der", phonetic: "dair", meaning: "to the (fem dative)", example: { de: "Ich antworte der Lehrerin.", en: "I answer the teacher." } },
          { word: "den", phonetic: "den", meaning: "to the (plural dative)", example: { de: "Ich gebe den Kindern Geld.", en: "I give the children money." } },
          { word: "helfen", phonetic: "hel-fen", meaning: "to help (+ Dative)", example: { de: "Kannst du mir helfen?", en: "Can you help me?" } },
          { word: "danken", phonetic: "dan-ken", meaning: "to thank (+ Dative)", example: { de: "Ich danke dir.", en: "I thank you." } },
          { word: "gehören", phonetic: "ge-hö-ren", meaning: "to belong to (+ Dative)", example: { de: "Das Haus gehört mir.", en: "The house belongs to me." } },
          { word: "antworten", phonetic: "ant-vor-ten", meaning: "to answer (+ Dative)", example: { de: "Er antwortet dem Lehrer.", en: "He answers the teacher." } },
          { word: "gefallen", phonetic: "ge-fal-len", meaning: "to please / to like (+ Dative)", example: { de: "Das Buch gefällt mir.", en: "I like the book. (The book pleases me.)" } },
          { word: "schmecken", phonetic: "shmek-ken", meaning: "to taste good to (+ Dative)", example: { de: "Die Suppe schmeckt mir.", en: "The soup tastes good to me." } },
          { word: "passen", phonetic: "pas-sen", meaning: "to fit (+ Dative)", example: { de: "Die Hose passt mir nicht.", en: "The pants don't fit me." } },
          { word: "gratulieren", phonetic: "gra-too-lee-ren", meaning: "to congratulate (+ Dative)", example: { de: "Ich gratuliere dir zum Geburtstag.", en: "I congratulate you on your birthday." } },
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which case is used for the person receiving something?",
        options: ["Nominative", "Accusative", "Dative", "Genitive"],
        correctIndex: 2,
        explanation: "The Dative case is used for the receiver or beneficiary of an action."
      }
    ]
  },
  "l32": {
    id: "l32",
    title: "Dative Prepositions",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Prepositions that FORCE Dative",
        explanation: "Just like some prepositions force Accusative (DOGFU), there are prepositions that ALWAYS force Dative. Memorize this list: aus, bei, mit, nach, seit, von, zu.",
        examples: [
          { de: "mit (with) — Ich komme mit dem Zug.", en: "I come with the train." },
          { de: "aus (out of/from) — Er trinkt aus der Flasche.", en: "He drinks from the bottle." },
          { de: "bei (at/near) — Ich wohne bei meiner Mutter.", en: "I live at my mother's." },
          { de: "nach (after/to) — Nach dem Essen schlafe ich.", en: "After the meal I sleep." },
          { de: "seit (since/for) — Seit einem Jahr lerne ich Deutsch.", en: "For a year I've been learning German." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "mit", phonetic: "mit", meaning: "with", example: { de: "Ich fahre mit dem Auto.", en: "I travel by car." } },
          { word: "aus", phonetic: "ows", meaning: "out of / from", example: { de: "Ich komme aus der USA.", en: "I come from the USA." } },
          { word: "bei", phonetic: "by", meaning: "at / near (a person/company)", example: { de: "Ich arbeite bei BMW.", en: "I work at BMW." } },
          { word: "nach", phonetic: "nakh", meaning: "after / to (cities/countries)", example: { de: "Wir fliegen nach Berlin.", en: "We fly to Berlin." } },
          { word: "seit", phonetic: "zyt", meaning: "since / for (time)", example: { de: "Seit einem Monat.", en: "For one month." } },
          { word: "von", phonetic: "fon", meaning: "from / of", example: { de: "Das Geschenk ist von meinem Vater.", en: "The gift is from my father." } },
          { word: "zu", phonetic: "tsoo", meaning: "to (a place/person)", example: { de: "Ich gehe zum Arzt.", en: "I go to the doctor." } },
          { word: "gegenüber", phonetic: "gay-gen-ü-ber", meaning: "opposite / across from", example: { de: "Die Bank ist gegenüber dem Bahnhof.", en: "The bank is opposite the station." } },
          { word: "außer", phonetic: "ow-ser", meaning: "except for / besides", example: { de: "Alle außer mir sind hier.", en: "Everyone except me is here." } },
        ]
      },
      {
        type: "listening",
        phrase: "Ich fahre mit dem Auto zur Arbeit.",
        translation: "I drive by car to work.",
        speed: "normal"
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Trinkst du Kaffee ",
        sentenceAfter: " Milch?",
        missingWord: "mit",
        translation: "Do you drink coffee with milk?"
      }
    ]
  },
  "l33": {
    id: "l33",
    title: "Two-Way Prepositions",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Wechselpräpositionen (Accusative or Dative?)",
        explanation: "Some prepositions can take BOTH Accusative and Dative depending on the action. The rule is simple: Motion/Direction = Accusative (Where to?). Static/Location = Dative (Where at?).",
        examples: [
          { de: "in (into) — Ich gehe in den Park (Acc).", en: "I am going into the park (Movement)." },
          { de: "in (inside) — Ich bin im Park (Dat).", en: "I am in the park (Static location)." },
          { de: "auf (onto) — Die Katze springt auf den Tisch (Acc).", en: "The cat jumps onto the table." },
          { de: "auf (on top of) — Die Katze schläft auf dem Tisch (Dat).", en: "The cat sleeps on the table." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "in", phonetic: "in", meaning: "in / into", example: { de: "Wir sind im Kino.", en: "We are in the cinema." } },
          { word: "an", phonetic: "an", meaning: "at / on (vertical)", example: { de: "Das Bild hängt an der Wand.", en: "The picture hangs on the wall." } },
          { word: "auf", phonetic: "owf", meaning: "on (horizontal)", example: { de: "Das Buch liegt auf dem Tisch.", en: "The book lies on the table." } },
          { word: "über", phonetic: "ü-ber", meaning: "over / above", example: { de: "Die Lampe ist über dem Tisch.", en: "The lamp is above the table." } },
          { word: "unter", phonetic: "oon-ter", meaning: "under", example: { de: "Der Hund ist unter dem Tisch.", en: "The dog is under the table." } },
          { word: "vor", phonetic: "for", meaning: "in front of / before", example: { de: "Das Auto steht vor dem Haus.", en: "The car is in front of the house." } },
          { word: "hinter", phonetic: "hin-ter", meaning: "behind", example: { de: "Der Garten ist hinter dem Haus.", en: "The garden is behind the house." } },
          { word: "neben", phonetic: "nay-ben", meaning: "next to", example: { de: "Ich sitze neben dir.", en: "I sit next to you." } },
          { word: "zwischen", phonetic: "tsvi-shen", meaning: "between", example: { de: "Der Stuhl steht zwischen den Tischen.", en: "The chair is between the tables." } },
          { word: "liegen", phonetic: "lee-gen", meaning: "to lie (location - Dative)", example: { de: "Das Buch liegt auf dem Tisch.", en: "The book is lying on the table." } },
          { word: "legen", phonetic: "lay-gen", meaning: "to lay/put (motion - Accusative)", example: { de: "Ich lege das Buch auf den Tisch.", en: "I lay the book onto the table." } },
          { word: "stehen", phonetic: "shtay-en", meaning: "to stand (location - Dative)", example: { de: "Die Lampe steht in der Ecke.", en: "The lamp stands in the corner." } },
          { word: "stellen", phonetic: "shtel-len", meaning: "to place upright (motion - Acc)", example: { de: "Ich stelle die Lampe in die Ecke.", en: "I place the lamp into the corner." } },
        ]
      },
      {
        type: "quiz-mcq",
        question: "Choose the correct case for: 'Ich lege das Buch auf ___ Tisch.' (I lay the book onto the table)",
        options: ["dem (Dative)", "den (Accusative)", "der (Dative)", "das (Accusative)"],
        correctIndex: 1,
        explanation: "Because there is movement (laying it onto the table), you use Accusative. Tisch is masculine, so 'den Tisch'."
      }
    ]
  },
  "l34": {
    id: "l34",
    title: "Separable Verbs",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Trennbare Verben",
        explanation: "Many German verbs have a prefix (like auf-, ein-, mit-, an-). When you conjugate a separable verb in a normal sentence, the prefix breaks off and goes to the VERY END of the sentence.",
        examples: [
          { de: "einkaufen (to shop) -> Ich kaufe heute im Supermarkt ein.", en: "I shop today in the supermarket." },
          { de: "aufstehen (to wake up) -> Ich stehe jeden Tag um 7 Uhr auf.", en: "I wake up every day at 7 o'clock." },
          { de: "anrufen (to call) -> Ich rufe dich später an.", en: "I will call you later." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "einkaufen", phonetic: "yn-kow-fen", meaning: "to shop (for groceries)", example: { de: "Er kauft im Markt ein.", en: "He shops at the market." } },
          { word: "aufstehen", phonetic: "owf-shtay-en", meaning: "to wake up / stand up", example: { de: "Wann stehst du auf?", en: "When do you wake up?" } },
          { word: "anrufen", phonetic: "an-roo-fen", meaning: "to call (by phone)", example: { de: "Ruf mich an!", en: "Call me!" } },
          { word: "mitkommen", phonetic: "mit-kom-men", meaning: "to come along", example: { de: "Kommst du mit?", en: "Are you coming along?" } },
          { word: "fernsehen", phonetic: "fairn-zay-en", meaning: "to watch TV", example: { de: "Abends sehe ich fern.", en: "In the evening I watch TV." } },
          { word: "abfahren", phonetic: "ap-fah-ren", meaning: "to depart", example: { de: "Der Zug fährt um 8 Uhr ab.", en: "The train departs at 8." } },
          { word: "ankommen", phonetic: "an-kom-men", meaning: "to arrive", example: { de: "Wann kommen wir an?", en: "When do we arrive?" } },
          { word: "einsteigen", phonetic: "yn-shty-gen", meaning: "to board / get in", example: { de: "Bitte steigen Sie ein.", en: "Please get in." } },
          { word: "aussteigen", phonetic: "ows-shty-gen", meaning: "to get off / out", example: { de: "Wir steigen am Bahnhof aus.", en: "We get off at the station." } },
          { word: "aufmachen", phonetic: "owf-ma-khen", meaning: "to open", example: { de: "Mach bitte das Fenster auf.", en: "Please open the window." } },
          { word: "zumachen", phonetic: "tsoo-ma-khen", meaning: "to close", example: { de: "Mach bitte die Tür zu.", en: "Please close the door." } },
          { word: "abholen", phonetic: "ap-ho-len", meaning: "to pick up", example: { de: "Ich hole dich am Bahnhof ab.", en: "I'll pick you up at the station." } },
        ]
      },
      {
        type: "listening",
        phrase: "Ich stehe früh auf und kaufe Brot ein.",
        translation: "I wake up early and buy bread.",
        speed: "slow"
      }
    ]
  },
  "l35": {
    id: "l35",
    title: "The Perfekt Tense (with haben)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "The Conversational Past Tense",
        explanation: "Germans rarely use the simple past tense in speech. Instead, they use the 'Perfekt'. It is built using 'haben' or 'sein' at Position 2, and the Past Participle (usually starts with ge-) at the VERY END of the sentence.",
        examples: [
          { de: "Ich kaufe ein Auto. (Present)", en: "I buy a car." },
          { de: "Ich habe ein Auto gekauft. (Perfekt)", en: "I bought a car. (Literally: I have a car bought.)" },
          { de: "Er spielt Fußball. -> Er hat Fußball gespielt.", en: "He played football." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "gespielt", phonetic: "ge-shpeelt", meaning: "played", example: { de: "Wir haben Karten gespielt.", en: "We played cards." } },
          { word: "gekauft", phonetic: "ge-kowft", meaning: "bought", example: { de: "Ich habe Milch gekauft.", en: "I bought milk." } },
          { word: "gemacht", phonetic: "ge-makht", meaning: "made / done", example: { de: "Was hast du gemacht?", en: "What did you do?" } },
          { word: "gesagt", phonetic: "ge-zakt", meaning: "said", example: { de: "Wer hat das gesagt?", en: "Who said that?" } },
          { word: "gearbeitet", phonetic: "ge-ar-by-tet", meaning: "worked", example: { de: "Ich habe gestern viel gearbeitet.", en: "I worked a lot yesterday." } },
          { word: "gelernt", phonetic: "ge-lairnt", meaning: "learned / studied", example: { de: "Hast du für den Test gelernt?", en: "Did you study for the test?" } },
          { word: "geholt", phonetic: "ge-hohlt", meaning: "fetched / got", example: { de: "Ich habe das Auto geholt.", en: "I fetched the car." } },
          { word: "gewohnt", phonetic: "ge-vohnt", meaning: "lived (resided)", example: { de: "Ich habe in Berlin gewohnt.", en: "I lived in Berlin." } },
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Gestern ",
        sentenceAfter: " ich Pizza gegessen.",
        missingWord: "habe",
        translation: "Yesterday I ate pizza."
      }
    ]
  },
  "l36": {
    id: "l36",
    title: "The Perfekt Tense (with sein)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "When to use 'sein' instead of 'haben'",
        explanation: "Most verbs use 'haben' to form the past tense. However, verbs of MOVEMENT (going, running, traveling) or a CHANGE OF STATE (waking up, dying) use 'sein' (to be) instead.",
        examples: [
          { de: "Ich bin nach Berlin geflogen.", en: "I flew to Berlin. (Literally: I am to Berlin flown.)" },
          { de: "Er ist gestern angekommen.", en: "He arrived yesterday." },
          { de: "Wir sind zu Hause geblieben.", en: "We stayed at home. (Exception: bleiben uses sein!)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "gegangen", phonetic: "ge-gang-en", meaning: "went (sein)", example: { de: "Ich bin ins Kino gegangen.", en: "I went to the cinema." } },
          { word: "gefahren", phonetic: "ge-fah-ren", meaning: "drove / traveled (sein)", example: { de: "Wir sind nach Rom gefahren.", en: "We drove to Rome." } },
          { word: "gekommen", phonetic: "ge-kom-men", meaning: "came (sein)", example: { de: "Wann bist du gekommen?", en: "When did you come?" } },
          { word: "geblieben", phonetic: "ge-blee-ben", meaning: "stayed (sein)", example: { de: "Ich bin zu Hause geblieben.", en: "I stayed at home." } },
          { word: "geflogen", phonetic: "ge-floh-gen", meaning: "flew (sein)", example: { de: "Wir sind nach Spanien geflogen.", en: "We flew to Spain." } },
          { word: "gelaufen", phonetic: "ge-low-fen", meaning: "ran/walked (sein)", example: { de: "Er ist schnell gelaufen.", en: "He ran fast." } },
          { word: "gewesen", phonetic: "ge-vay-zen", meaning: "been (sein)", example: { de: "Ich bin in Paris gewesen.", en: "I have been in Paris." } },
          { word: "passiert", phonetic: "pas-seert", meaning: "happened (sein)", example: { de: "Was ist passiert?", en: "What happened?" } },
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which auxiliary verb is used for 'schwimmen' (to swim) in the Perfekt?",
        options: ["haben", "sein", "werden", "können"],
        correctIndex: 1,
        explanation: "Swimming is a verb of motion/movement from A to B, so it uses 'sein' (Ich bin geschwommen)."
      }
    ]
  },
  "l37": {
    id: "l37",
    title: "Irregular Past Participles",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Strong Verbs",
        explanation: "Irregular (strong) verbs do not end in '-t' in the past participle. They usually end in '-en' and often change their core vowel.",
        examples: [
          { de: "trinken -> hat getrunken", en: "drank" },
          { de: "essen -> hat gegessen", en: "ate" },
          { de: "finden -> hat gefunden", en: "found" },
          { de: "sprechen -> hat gesprochen", en: "spoke" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "gegessen", phonetic: "ge-ges-sen", meaning: "ate", example: { de: "Ich habe den Apfel gegessen.", en: "I ate the apple." } },
          { word: "getrunken", phonetic: "ge-troon-ken", meaning: "drank", example: { de: "Er hat Kaffee getrunken.", en: "He drank coffee." } },
          { word: "gefunden", phonetic: "ge-foon-den", meaning: "found", example: { de: "Wir haben den Schlüssel gefunden.", en: "We found the key." } },
          { word: "geschrieben", phonetic: "ge-shree-ben", meaning: "wrote", example: { de: "Sie hat einen Brief geschrieben.", en: "She wrote a letter." } },
          { word: "gesprochen", phonetic: "ge-shpro-khen", meaning: "spoke", example: { de: "Hast du mit ihm gesprochen?", en: "Did you speak with him?" } },
          { word: "gelesen", phonetic: "ge-lay-zen", meaning: "read", example: { de: "Ich habe das Buch gelesen.", en: "I read the book." } },
          { word: "gesehen", phonetic: "ge-zay-en", meaning: "seen", example: { de: "Hast du den Film gesehen?", en: "Have you seen the movie?" } },
          { word: "geschlafen", phonetic: "ge-shlah-fen", meaning: "slept", example: { de: "Ich habe gut geschlafen.", en: "I slept well." } },
          { word: "getroffen", phonetic: "ge-trof-fen", meaning: "met", example: { de: "Ich habe Freunde getroffen.", en: "I met friends." } },
          { word: "genommen", phonetic: "ge-nom-men", meaning: "taken", example: { de: "Er hat das Geld genommen.", en: "He took the money." } },
          { word: "gegeben", phonetic: "ge-gay-ben", meaning: "given", example: { de: "Sie hat mir ein Geschenk gegeben.", en: "She gave me a present." } },
        ]
      },
      {
        type: "listening",
        phrase: "Ich habe heute morgen Kaffee getrunken.",
        translation: "I drank coffee this morning.",
        speed: "normal"
      }
    ]
  },
  "l38": {
    id: "l38",
    title: "Simple Past of Haben and Sein",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Präteritum (Simple Past)",
        explanation: "Even though Germans use the Perfekt (I have done) for most past verbs in speech, they DO use the simple past for 'haben' and 'sein' because it is much faster to say 'Ich war' (I was) than 'Ich bin gewesen' (I have been).",
        examples: [
          { de: "sein -> war: ich war, du warst, er war, wir waren, ihr wart, sie waren", en: "I was, you were..." },
          { de: "haben -> hatte: ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten", en: "I had, you had..." }
        ]
      },
      {
        type: "conjugation-drill",
        verb: "sein (Präteritum)",
        translation: "was / were",
        tense: "Past",
        pronouns: ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"],
        correctForms: ["war", "warst", "war", "waren", "wart", "waren"],
        hint: "This is exactly like English 'was' and 'were'."
      },
      {
        type: "conjugation-drill",
        verb: "haben (Präteritum)",
        translation: "had",
        tense: "Past",
        pronouns: ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"],
        correctForms: ["hatte", "hattest", "hatte", "hatten", "hattet", "hatten"]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Gestern ",
        sentenceAfter: " ich keine Zeit.",
        missingWord: "hatte",
        translation: "Yesterday I had no time."
      }
    ]
  },
  "l39": {
    id: "l39",
    title: "The Imperative (Commands)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Giving Orders",
        explanation: "The imperative is used for commands ('Stop!', 'Listen!'). In German, it changes depending on who you are talking to: du (informal), ihr (plural), or Sie (formal).",
        examples: [
          { de: "Formal (Sie): Trinken Sie! Gehen Sie!", en: "Verb + Sie. Very easy!" },
          { de: "Plural (ihr): Trinkt! Geht!", en: "Just use the normal 'ihr' conjugation and drop the pronoun." },
          { de: "Informal (du): Trink! Geh!", en: "Take the 'du' form and drop the '-st' ending AND the pronoun." }
        ]
      },
      {
        type: "speaking",
        phrase: "Komm her!",
        translation: "Come here! (informal)",
        phonetic: "kom hair",
        tip: "This is the 'du' form. Notice we dropped the '-st' from kommst."
      },
      {
        type: "flashcard",
        cards: [
          { word: "Hör auf!", phonetic: "höhr owf", meaning: "Stop it!", example: { de: "Hör auf zu weinen!", en: "Stop crying!" } },
          { word: "Pass auf!", phonetic: "pas owf", meaning: "Watch out! / Pay attention!", example: { de: "Pass auf das Auto auf!", en: "Watch out for the car!" } },
          { word: "Warten Sie!", phonetic: "var-ten zee", meaning: "Wait! (formal)", example: { de: "Warten Sie hier, bitte.", en: "Wait here, please." } },
        ]
      }
    ]
  },
  "l40": {
    id: "l40",
    title: "Comparison of Adjectives",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Komparativ & Superlativ",
        explanation: "To compare things, German adds '-er' (more) and 'am ...-sten' (most). Many short adjectives with a, o, or u also get an Umlaut.",
        examples: [
          { de: "schnell -> schneller -> am schnellsten", en: "fast -> faster -> fastest" },
          { de: "klein -> kleiner -> am kleinsten", en: "small -> smaller -> smallest" },
          { de: "kalt -> kälter -> am kältesten", en: "cold -> colder -> coldest (notice the Umlaut!)" },
          { de: "gut -> besser -> am besten", en: "good -> better -> best (Irregular)" },
          { de: "viel -> mehr -> am meisten", en: "much -> more -> most (Irregular)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "besser", phonetic: "bes-ser", meaning: "better", example: { de: "Mein Auto ist besser.", en: "My car is better." } },
          { word: "am besten", phonetic: "am bes-ten", meaning: "best", example: { de: "Er spielt am besten.", en: "He plays best." } },
          { word: "mehr", phonetic: "mair", meaning: "more", example: { de: "Ich brauche mehr Zeit.", en: "I need more time." } },
          { word: "lieber", phonetic: "lee-ber", meaning: "prefer / rather", example: { de: "Ich trinke lieber Tee.", en: "I prefer to drink tea." } },
          { word: "größer", phonetic: "grö-ser", meaning: "bigger", example: { de: "Mein Haus ist größer.", en: "My house is bigger." } },
          { word: "kleiner", phonetic: "kly-ner", meaning: "smaller", example: { de: "Dein Hund ist kleiner.", en: "Your dog is smaller." } },
          { word: "älter", phonetic: "el-ter", meaning: "older", example: { de: "Sie ist älter als ich.", en: "She is older than me." } },
          { word: "jünger", phonetic: "yüng-er", meaning: "younger", example: { de: "Er ist jünger.", en: "He is younger." } },
          { word: "teurer", phonetic: "toy-rer", meaning: "more expensive", example: { de: "Das ist teurer.", en: "That is more expensive." } },
          { word: "billiger", phonetic: "bil-li-ger", meaning: "cheaper", example: { de: "Das T-Shirt ist billiger.", en: "The T-shirt is cheaper." } },
          { word: "höher", phonetic: "hö-er", meaning: "higher", example: { de: "Der Berg ist höher.", en: "The mountain is higher." } },
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ein Flugzeug ist ",
        sentenceAfter: " als ein Auto.",
        missingWord: "schneller",
        translation: "An airplane is faster than a car."
      }
    ]
  },
  "l41": {
    id: "l41",
    title: "Conjunctions (und, oder, aber)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Coordinating Conjunctions",
        explanation: "ADUSO stands for Aber (but), Denn (because), Und (and), Sondern (but rather), Oder (or). These conjunctions join two main clauses and DO NOT change the word order. They occupy 'Position 0'.",
        examples: [
          { de: "Ich bin müde, ABER ich lerne.", en: "I am tired, but I learn." },
          { de: "Ich esse, DENN ich habe Hunger.", en: "I eat, because I am hungry." },
          { de: "Er kommt nicht aus England, SONDERN er kommt aus Irland.", en: "He doesn't come from England, but rather he comes from Ireland." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "und", phonetic: "oont", meaning: "and", example: { de: "Max und Anna", en: "Max and Anna" } },
          { word: "oder", phonetic: "oh-der", meaning: "or", example: { de: "Kaffee oder Tee?", en: "Coffee or tea?" } },
          { word: "aber", phonetic: "ah-ber", meaning: "but", example: { de: "Klein, aber fein.", en: "Small, but nice." } },
          { word: "denn", phonetic: "den", meaning: "because / for", example: { de: "Ich bleibe, denn es regnet.", en: "I am staying because it is raining." } },
          { word: "sondern", phonetic: "zon-dern", meaning: "but rather (after a negative)", example: { de: "Nicht rot, sondern blau.", en: "Not red, but rather blue." } },
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which 'but' is used to correct a negative statement? (e.g. It's not a dog, BUT a cat)",
        options: ["aber", "denn", "sondern", "oder"],
        correctIndex: 2,
        explanation: "'sondern' is used to offer an alternative to a negative statement. 'aber' just means but/however."
      }
    ]
  },
  "l42": {
    id: "l42",
    title: "Travel & Transportation",
    module: "A2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "der Zug", phonetic: "tsook", meaning: "the train", example: { de: "Der Zug hat Verspätung.", en: "The train is delayed." } },
          { word: "das Flugzeug", phonetic: "flook-tsoyk", meaning: "the airplane", example: { de: "Das Flugzeug fliegt nach Paris.", en: "The plane flies to Paris." } },
          { word: "der Flughafen", phonetic: "flook-hah-fen", meaning: "the airport", example: { de: "Wie komme ich zum Flughafen?", en: "How do I get to the airport?" } },
          { word: "der Bahnhof", phonetic: "bahn-hof", meaning: "the train station", example: { de: "Der Bahnhof ist in der Nähe.", en: "The station is nearby." } },
          { word: "die Fahrkarte", phonetic: "fahr-kar-te", meaning: "the ticket (for transit)", example: { de: "Ich brauche eine Fahrkarte.", en: "I need a ticket." } },
          { word: "das Gepäck", phonetic: "ge-pek", meaning: "luggage", example: { de: "Wo ist mein Gepäck?", en: "Where is my luggage?" } },
          { word: "das Gleis", phonetic: "glys", meaning: "the track / platform", example: { de: "Der Zug fährt auf Gleis 3 ab.", en: "The train departs from track 3." } },
          { word: "der Bahnsteig", phonetic: "bahn-shtyk", meaning: "the platform", example: { de: "Bitte treten Sie zurück vom Bahnsteig.", en: "Please step back from the platform." } },
          { word: "die Haltestelle", phonetic: "hal-te-shtel-le", meaning: "the bus/tram stop", example: { de: "Wo ist die nächste Haltestelle?", en: "Where is the next stop?" } },
          { word: "die Verspätung", phonetic: "fer-shpay-toong", meaning: "the delay", example: { de: "Der Zug hat zehn Minuten Verspätung.", en: "The train has a 10-minute delay." } },
          { word: "der Fahrplan", phonetic: "fahr-plahn", meaning: "the schedule/timetable", example: { de: "Schau auf den Fahrplan.", en: "Look at the timetable." } },
          { word: "der Koffer", phonetic: "kof-fer", meaning: "the suitcase", example: { de: "Mein Koffer ist sehr schwer.", en: "My suitcase is very heavy." } },
        ]
      },
      {
        type: "grammar",
        title: "Using 'mit' for transportation",
        explanation: "To say you travel 'by' a vehicle, use 'mit' + Dative case.",
        examples: [
          { de: "mit dem Auto", en: "by car" },
          { de: "mit dem Zug", en: "by train" },
          { de: "mit dem Bus", en: "by bus" },
          { de: "zu Fuß", en: "on foot (Exception: never 'mit dem Fuß'!)" }
        ]
      },
      {
        type: "listening",
        phrase: "Entschuldigung, wie komme ich zum Bahnhof?",
        translation: "Excuse me, how do I get to the train station?",
        speed: "normal"
      }
    ]
  },
  "l43": {
    id: "l43",
    title: "Shopping & Clothes",
    module: "A2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Kleidung", phonetic: "kly-doong", meaning: "the clothes", example: { de: "Ich brauche neue Kleidung.", en: "I need new clothes." } },
          { word: "die Hose", phonetic: "ho-zuh", meaning: "the pants", example: { de: "Die Hose ist zu groß.", en: "The pants are too big." } },
          { word: "das Hemd", phonetic: "hemt", meaning: "the shirt", example: { de: "Das Hemd ist weiß.", en: "The shirt is white." } },
          { word: "der Schuh", phonetic: "shoo", meaning: "the shoe", example: { de: "Meine Schuhe sind schwarz.", en: "My shoes are black." } },
          { word: "die Jacke", phonetic: "yak-ke", meaning: "the jacket", example: { de: "Zieh die Jacke an.", en: "Put the jacket on." } },
          { word: "der Pullover", phonetic: "pool-o-ver", meaning: "the sweater", example: { de: "Der Pullover ist warm.", en: "The sweater is warm." } },
          { word: "das Kleid", phonetic: "klyt", meaning: "the dress", example: { de: "Das Kleid ist wunderschön.", en: "The dress is beautiful." } },
          { word: "der Rock", phonetic: "rok", meaning: "the skirt", example: { de: "Sie trägt einen kurzen Rock.", en: "She is wearing a short skirt." } },
          { word: "kaufen", phonetic: "kow-fen", meaning: "to buy", example: { de: "Ich kaufe das.", en: "I buy that." } },
          { word: "kosten", phonetic: "kos-ten", meaning: "to cost", example: { de: "Wie viel kostet das?", en: "How much does that cost?" } },
          { word: "teuer", phonetic: "toy-er", meaning: "expensive", example: { de: "Das ist sehr teuer.", en: "That is very expensive." } },
          { word: "billig", phonetic: "bil-likh", meaning: "cheap", example: { de: "Das T-Shirt ist billig.", en: "The T-shirt is cheap." } },
          { word: "die Größe", phonetic: "grö-se", meaning: "the size", example: { de: "Haben Sie das in Größe M?", en: "Do you have this in size M?" } },
          { word: "anprobieren", phonetic: "an-pro-bee-ren", meaning: "to try on", example: { de: "Kann ich die Hose anprobieren?", en: "Can I try the pants on?" } },
        ]
      },
      {
        type: "speaking",
        phrase: "Wie viel kostet das?",
        translation: "How much does that cost?",
        phonetic: "vee feel kos-tet das",
        tip: "A crucial phrase for shopping in Germany or Austria."
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Das Hemd ist sehr schön, aber leider zu ",
        sentenceAfter: ".",
        missingWord: "teuer",
        translation: "The shirt is very nice, but unfortunately too expensive."
      }
    ]
  },
  "l44": {
    id: "l44",
    title: "Health & Body Parts",
    module: "A2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "der Kopf", phonetic: "kopf", meaning: "the head", example: { de: "Mein Kopf tut weh.", en: "My head hurts." } },
          { word: "der Bauch", phonetic: "bowkh", meaning: "the stomach", example: { de: "Ich habe Bauchschmerzen.", en: "I have a stomachache." } },
          { word: "der Arm", phonetic: "arm", meaning: "the arm", example: { de: "Mein Arm tut weh.", en: "My arm hurts." } },
          { word: "das Bein", phonetic: "byn", meaning: "the leg", example: { de: "Er hat sich das Bein gebrochen.", en: "He broke his leg." } },
          { word: "der Hals", phonetic: "hals", meaning: "the neck/throat", example: { de: "Ich habe Halsschmerzen.", en: "I have a sore throat." } },
          { word: "der Arzt", phonetic: "artst", meaning: "the doctor", example: { de: "Ich muss zum Arzt gehen.", en: "I have to go to the doctor." } },
          { word: "das Krankenhaus", phonetic: "kran-ken-hows", meaning: "the hospital", example: { de: "Er ist im Krankenhaus.", en: "He is in the hospital." } },
          { word: "krank", phonetic: "krank", meaning: "sick", example: { de: "Ich bin heute krank.", en: "I am sick today." } },
          { word: "gesund", phonetic: "ge-zoont", meaning: "healthy", example: { de: "Bleiben Sie gesund!", en: "Stay healthy!" } },
          { word: "die Apotheke", phonetic: "a-po-tay-kuh", meaning: "the pharmacy", example: { de: "Ich brauche Medizin aus der Apotheke.", en: "I need medicine from the pharmacy." } },
          { word: "das Fieber", phonetic: "fee-ber", meaning: "the fever", example: { de: "Das Kind hat Fieber.", en: "The child has a fever." } },
          { word: "die Schmerzen", phonetic: "shmer-tsen", meaning: "the pain", example: { de: "Haben Sie Schmerzen?", en: "Do you have pain?" } },
          { word: "das Medikament", phonetic: "me-di-ka-ment", meaning: "the medicine", example: { de: "Nehmen Sie dieses Medikament.", en: "Take this medicine." } },
          { word: "das Rezept", phonetic: "re-tsept", meaning: "the prescription / recipe", example: { de: "Der Arzt gibt mir ein Rezept.", en: "The doctor gives me a prescription." } },
        ]
      },
      {
        type: "grammar",
        title: "Expressing Pain",
        explanation: "To say something hurts in German, use the verb 'weh tun' (to do pain). It's a separable verb.",
        examples: [
          { de: "Mein Fuß tut weh.", en: "My foot hurts. (Literally: My foot does pain.)" },
          { de: "Meine Augen tun weh.", en: "My eyes hurt." }
        ]
      },
      {
        type: "listening",
        phrase: "Ich bin krank und mein Kopf tut weh.",
        translation: "I am sick and my head hurts.",
        speed: "normal"
      }
    ]
  },
  "l45": {
    id: "l45",
    title: "Adjective Declensions (Intro)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "The Hardest Topic in German",
        explanation: "When an adjective comes BEFORE a noun, it changes its ending based on Gender, Case, and Article Type. This takes years to master, but the most important rule is the 'e/en' rule after definite articles (der/die/das).",
        examples: [
          { de: "In Nominative, add '-e': der gute Mann, die schöne Frau, das kleine Kind.", en: "" },
          { de: "In ALL Plural and ALL Dative/Genitive cases, just add '-en': den guten Männern, mit der schönen Frau.", en: "" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which ending does the adjective get in: 'das schön___ Haus' (the beautiful house)?",
        options: ["-er", "-en", "-e", "-es"],
        correctIndex: 2,
        explanation: "After a definite article (der, die, das) in Nominative, the adjective takes an '-e' (das schöne Haus)."
      },
      {
        type: "speaking",
        phrase: "Das ist ein schönes Haus.",
        translation: "That is a beautiful house.",
        phonetic: "das ist yne shö-nes hows",
        tip: "Notice that after 'ein' for a neuter word, the adjective takes the '-es' ending to show that the noun is neuter (das)."
      }
    ]
  }
};
