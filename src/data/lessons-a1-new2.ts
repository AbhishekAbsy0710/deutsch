import { Lesson } from "./lessons";

export const lessonsA1New2: Record<string, Lesson> = {
  "la1_08": {
    id: "la1_08",
    title: "Housing & Rooms (Wohnen)",
    module: "A1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Wohnung", phonetic: "voh-noong", meaning: "the apartment", example: { de: "Meine Wohnung ist klein.", en: "My apartment is small." } },
          { word: "das Haus", phonetic: "hows", meaning: "the house", example: { de: "Das Haus ist groß.", en: "The house is big." } },
          { word: "die Küche", phonetic: "kü-khe", meaning: "the kitchen", example: { de: "Ich koche in der Küche.", en: "I cook in the kitchen." } },
          { word: "das Wohnzimmer", phonetic: "vohn-tsim-mer", meaning: "the living room", example: { de: "Wir sitzen im Wohnzimmer.", en: "We sit in the living room." } },
          { word: "das Schlafzimmer", phonetic: "shlahf-tsim-mer", meaning: "the bedroom", example: { de: "Das Schlafzimmer ist oben.", en: "The bedroom is upstairs." } },
          { word: "das Badezimmer", phonetic: "bah-de-tsim-mer", meaning: "the bathroom", example: { de: "Das Badezimmer ist klein.", en: "The bathroom is small." } },
          { word: "der Balkon", phonetic: "bal-kohn", meaning: "the balcony", example: { de: "Wir haben einen Balkon.", en: "We have a balcony." } },
          { word: "der Garten", phonetic: "gar-ten", meaning: "the garden", example: { de: "Die Kinder spielen im Garten.", en: "The children play in the garden." } }
        ]
      },
      {
        type: "grammar",
        title: "Describing Where You Live",
        explanation: "Use 'wohnen' (to live/reside) and 'leben' (to live/be alive). To describe rooms, use 'es gibt' or 'haben'.",
        examples: [
          { de: "Ich wohne in Berlin.", en: "I live in Berlin." },
          { de: "Meine Wohnung hat drei Zimmer.", en: "My apartment has three rooms." },
          { de: "Es gibt eine große Küche.", en: "There is a big kitchen." }
        ]
      },
      {
        type: "listening",
        phrase: "Ich wohne in einer kleinen Wohnung mit zwei Zimmern.",
        translation: "I live in a small apartment with two rooms.",
        speed: "normal"
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ich koche gern in der ",
        sentenceAfter: ".",
        missingWord: "Küche",
        translation: "I like cooking in the kitchen."
      }
    ]
  },
  "la1_09": {
    id: "la1_09",
    title: "Shopping & Prices (Einkaufen)",
    module: "A1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "das Geschäft", phonetic: "ge-sheft", meaning: "the shop/store", example: { de: "Das Geschäft ist geschlossen.", en: "The shop is closed." } },
          { word: "der Preis", phonetic: "prys", meaning: "the price", example: { de: "Was ist der Preis?", en: "What is the price?" } },
          { word: "das Geld", phonetic: "gelt", meaning: "the money", example: { de: "Ich habe kein Geld.", en: "I have no money." } },
          { word: "bezahlen", phonetic: "be-tsah-len", meaning: "to pay", example: { de: "Wo kann ich bezahlen?", en: "Where can I pay?" } },
          { word: "die Kasse", phonetic: "kas-se", meaning: "the cash register/checkout", example: { de: "Bitte gehen Sie zur Kasse.", en: "Please go to the checkout." } },
          { word: "der Euro", phonetic: "oy-ro", meaning: "the euro", example: { de: "Das kostet fünf Euro.", en: "That costs five euros." } }
        ]
      },
      {
        type: "grammar",
        title: "Asking About Prices",
        explanation: "The key phrases for shopping are 'Was kostet...?' (What does... cost?) and 'Wie viel kostet...?' (How much does... cost?). Use 'Ich hätte gern...' for polite requests.",
        examples: [
          { de: "Was kostet das?", en: "What does that cost?" },
          { de: "Wie viel kosten die Äpfel?", en: "How much do the apples cost?" },
          { de: "Ich hätte gern zwei Brötchen.", en: "I would like two bread rolls." },
          { de: "Das macht zusammen 5,50 Euro.", en: "That's 5.50 euros altogether." }
        ]
      },
      {
        type: "speaking",
        phrase: "Ich hätte gern ein Kilo Äpfel, bitte.",
        translation: "I would like one kilo of apples, please.",
        phonetic: "ikh het-te gairn ayn kee-lo ep-fel bit-te",
        tip: "'Ich hätte gern' is the polite way to say 'I would like' when buying something."
      },
      {
        type: "quiz-mcq",
        question: "How do you politely say 'I would like...' when shopping?",
        options: ["Ich will...", "Ich hätte gern...", "Gib mir...", "Ich brauche..."],
        correctIndex: 1,
        explanation: "'Ich hätte gern...' is the polite shopping phrase. 'Ich will' sounds demanding."
      }
    ]
  },
  "la1_10": {
    id: "la1_10",
    title: "Directions & Places",
    module: "A1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "links", phonetic: "links", meaning: "left", example: { de: "Gehen Sie links.", en: "Go left." } },
          { word: "rechts", phonetic: "rekhts", meaning: "right", example: { de: "Die Bank ist rechts.", en: "The bank is on the right." } },
          { word: "geradeaus", phonetic: "ge-rah-de-ows", meaning: "straight ahead", example: { de: "Gehen Sie geradeaus.", en: "Go straight ahead." } },
          { word: "die Straße", phonetic: "shtrah-se", meaning: "the street", example: { de: "Die Straße ist lang.", en: "The street is long." } },
          { word: "die Apotheke", phonetic: "a-po-tay-ke", meaning: "the pharmacy", example: { de: "Wo ist die Apotheke?", en: "Where is the pharmacy?" } },
          { word: "die Post", phonetic: "post", meaning: "the post office", example: { de: "Die Post ist am Marktplatz.", en: "The post office is at the market square." } },
          { word: "der Bahnhof", phonetic: "bahn-hohf", meaning: "the train station", example: { de: "Wie komme ich zum Bahnhof?", en: "How do I get to the train station?" } }
        ]
      },
      {
        type: "grammar",
        title: "Asking for Directions",
        explanation: "Use 'Entschuldigung' (Excuse me) to start, then ask with 'Wo ist...?' or 'Wie komme ich zu/zum/zur...?'",
        examples: [
          { de: "Entschuldigung, wo ist der Bahnhof?", en: "Excuse me, where is the train station?" },
          { de: "Wie komme ich zum Krankenhaus?", en: "How do I get to the hospital?" },
          { de: "Gehen Sie die erste Straße links.", en: "Take the first street on the left." },
          { de: "Es ist gleich um die Ecke.", en: "It's right around the corner." }
        ]
      },
      {
        type: "listening",
        phrase: "Gehen Sie geradeaus, dann die zweite Straße rechts.",
        translation: "Go straight ahead, then the second street on the right.",
        speed: "slow"
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Entschuldigung, wie komme ich ",
        sentenceAfter: " Bahnhof?",
        missingWord: "zum",
        translation: "Excuse me, how do I get to the train station?"
      }
    ]
  },
  "la1_11": {
    id: "la1_11",
    title: "Describing People",
    module: "A1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "groß", phonetic: "grohs", meaning: "tall / big", example: { de: "Er ist sehr groß.", en: "He is very tall." } },
          { word: "klein", phonetic: "klyn", meaning: "short / small", example: { de: "Sie ist klein.", en: "She is short." } },
          { word: "die Haare", phonetic: "hah-re", meaning: "the hair", example: { de: "Sie hat lange Haare.", en: "She has long hair." } },
          { word: "die Augen", phonetic: "ow-gen", meaning: "the eyes", example: { de: "Er hat blaue Augen.", en: "He has blue eyes." } },
          { word: "dünn", phonetic: "dün", meaning: "thin / slim", example: { de: "Er ist groß und dünn.", en: "He is tall and thin." } },
          { word: "freundlich", phonetic: "froynt-likh", meaning: "friendly", example: { de: "Sie ist sehr freundlich.", en: "She is very friendly." } },
          { word: "nett", phonetic: "net", meaning: "nice", example: { de: "Er ist ein netter Mann.", en: "He is a nice man." } },
          { word: "lustig", phonetic: "loos-tikh", meaning: "funny", example: { de: "Mein Bruder ist lustig.", en: "My brother is funny." } }
        ]
      },
      {
        type: "grammar",
        title: "Describing Appearance & Personality",
        explanation: "Use 'sein' (to be) + adjective for qualities, and 'haben' (to have) + noun for physical features.",
        examples: [
          { de: "Er ist groß und sportlich.", en: "He is tall and athletic." },
          { de: "Sie hat lange, braune Haare.", en: "She has long, brown hair." },
          { de: "Er hat grüne Augen.", en: "He has green eyes." },
          { de: "Sie ist sehr freundlich und lustig.", en: "She is very friendly and funny." }
        ]
      },
      {
        type: "speaking",
        phrase: "Mein Vater ist groß und hat kurze, graue Haare.",
        translation: "My father is tall and has short, gray hair.",
        phonetic: "myn fah-ter ist grohs oont hat koort-se grow-e hah-re",
        tip: "Practice combining 'sein' for qualities with 'haben' for features."
      },
      {
        type: "quiz-mcq",
        question: "How do you say 'She has blue eyes'?",
        options: ["Sie ist blaue Augen.", "Sie hat blaue Augen.", "Sie haben blaue Augen.", "Sie blaue Augen hat."],
        correctIndex: 1,
        explanation: "Physical features use 'haben' (to have): Sie hat blaue Augen."
      }
    ]
  },
  "la1_12": {
    id: "la1_12",
    title: "Celebrations & Invitations",
    module: "A1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "der Geburtstag", phonetic: "ge-boorts-tahk", meaning: "the birthday", example: { de: "Herzlichen Glückwunsch zum Geburtstag!", en: "Happy birthday!" } },
          { word: "Weihnachten", phonetic: "vy-nakh-ten", meaning: "Christmas", example: { de: "Frohe Weihnachten!", en: "Merry Christmas!" } },
          { word: "Ostern", phonetic: "oh-stern", meaning: "Easter", example: { de: "Frohe Ostern!", en: "Happy Easter!" } },
          { word: "feiern", phonetic: "fy-ern", meaning: "to celebrate", example: { de: "Wir feiern heute.", en: "We are celebrating today." } },
          { word: "das Geschenk", phonetic: "ge-shenk", meaning: "the gift/present", example: { de: "Das ist ein Geschenk für dich.", en: "That is a gift for you." } },
          { word: "die Einladung", phonetic: "ayn-lah-doong", meaning: "the invitation", example: { de: "Danke für die Einladung!", en: "Thanks for the invitation!" } },
          { word: "die Party", phonetic: "par-tee", meaning: "the party", example: { de: "Kommst du zur Party?", en: "Are you coming to the party?" } }
        ]
      },
      {
        type: "grammar",
        title: "Congratulations & Wishes",
        explanation: "Germans have specific phrases for different occasions. Learn these key expressions:",
        examples: [
          { de: "Herzlichen Glückwunsch!", en: "Congratulations! (general)" },
          { de: "Alles Gute zum Geburtstag!", en: "All the best for your birthday!" },
          { de: "Frohes neues Jahr!", en: "Happy New Year!" },
          { de: "Viel Spaß!", en: "Have fun!" }
        ]
      },
      {
        type: "listening",
        phrase: "Ich lade dich zu meiner Geburtstagsparty ein. Kommst du?",
        translation: "I'm inviting you to my birthday party. Are you coming?",
        speed: "normal"
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Herzlichen Glückwunsch zum ",
        sentenceAfter: "!",
        missingWord: "Geburtstag",
        translation: "Happy birthday!"
      }
    ]
  },
  "la1_13": {
    id: "la1_13",
    title: "Expressing Likes & Preferences",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "gern → lieber → am liebsten",
        explanation: "'gern' (gladly/like to) has comparative forms just like adjectives. Use these to express preferences for ACTIVITIES.",
        examples: [
          { de: "Ich schwimme gern.", en: "I like swimming." },
          { de: "Ich spiele lieber Fußball.", en: "I prefer playing football." },
          { de: "Am liebsten koche ich.", en: "Most of all, I like cooking." }
        ]
      },
      {
        type: "grammar",
        title: "mögen vs gefallen vs schmecken",
        explanation: "For THINGS: 'mögen' (general liking), 'gefallen' (visual/aesthetic, + Dative), 'schmecken' (taste, + Dative).",
        examples: [
          { de: "Ich mag Kaffee.", en: "I like coffee. (general)" },
          { de: "Das Kleid gefällt mir.", en: "I like the dress. (It pleases me)" },
          { de: "Die Pizza schmeckt mir gut.", en: "The pizza tastes good to me." },
          { de: "Ich mag keine Spinnen.", en: "I don't like spiders." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "gern(e)", phonetic: "gairn(e)", meaning: "gladly / like to", example: { de: "Ich lese gern.", en: "I like reading." } },
          { word: "lieber", phonetic: "lee-ber", meaning: "prefer / rather", example: { de: "Ich trinke lieber Tee.", en: "I prefer drinking tea." } },
          { word: "am liebsten", phonetic: "am leeb-sten", meaning: "most of all / favorite", example: { de: "Am liebsten esse ich Pizza.", en: "Most of all I like eating pizza." } },
          { word: "mögen", phonetic: "mö-gen", meaning: "to like (things)", example: { de: "Magst du Schokolade?", en: "Do you like chocolate?" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "How do you say 'I prefer reading'?",
        options: ["Ich lese gern.", "Ich lese lieber.", "Ich lese am liebsten.", "Ich mag lesen."],
        correctIndex: 1,
        explanation: "'lieber' is the comparative of 'gern' — it means 'prefer' or 'rather'."
      }
    ]
  },
  "la1_14": {
    id: "la1_14",
    title: "At the Supermarket (Im Supermarkt)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "Useful Supermarket Phrases",
        explanation: "At the bakery counter or deli, you need to order by weight or quantity. Use 'Ich hätte gern...' (I would like) and specify amounts.",
        examples: [
          { de: "Ich hätte gern 500 Gramm Käse.", en: "I would like 500 grams of cheese." },
          { de: "Ein Pfund Tomaten, bitte.", en: "One pound of tomatoes, please." },
          { de: "Drei Brötchen, bitte.", en: "Three bread rolls, please." },
          { de: "Ist das alles? — Ja, das ist alles.", en: "Is that everything? — Yes, that's everything." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "das Brötchen", phonetic: "bröt-khen", meaning: "the bread roll", example: { de: "Zwei Brötchen, bitte.", en: "Two bread rolls, please." } },
          { word: "die Bäckerei", phonetic: "bek-ker-eye", meaning: "the bakery", example: { de: "Ich kaufe Brot in der Bäckerei.", en: "I buy bread at the bakery." } },
          { word: "das Stück", phonetic: "shtük", meaning: "the piece", example: { de: "Ein Stück Kuchen, bitte.", en: "A piece of cake, please." } },
          { word: "die Tüte", phonetic: "tü-te", meaning: "the bag", example: { de: "Brauchen Sie eine Tüte?", en: "Do you need a bag?" } },
          { word: "das Gramm", phonetic: "gram", meaning: "gram", example: { de: "200 Gramm Schinken.", en: "200 grams of ham." } },
          { word: "die Flasche", phonetic: "fla-she", meaning: "the bottle", example: { de: "Eine Flasche Wasser, bitte.", en: "A bottle of water, please." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Guten Tag, ich hätte gern drei Brötchen und ein Stück Kuchen.",
        translation: "Good day, I would like three bread rolls and a piece of cake.",
        phonetic: "goo-ten tahk, ikh het-te gairn dry bröt-khen oont ayn shtük koo-khen",
        tip: "Always greet the seller first with 'Guten Tag' before ordering!"
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ich hätte gern 200 ",
        sentenceAfter: " Käse, bitte.",
        missingWord: "Gramm",
        translation: "I would like 200 grams of cheese, please."
      }
    ]
  },
  "la1_15": {
    id: "la1_15",
    title: "Basic Commands (Imperativ Intro)",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "Giving Simple Commands",
        explanation: "The imperative is used for requests and instructions. It has 3 forms depending on who you're talking to. Always add 'bitte' (please) to be polite!",
        examples: [
          { de: "Formal (Sie): Kommen Sie bitte!", en: "Please come! (verb + Sie)" },
          { de: "Informal (du): Komm bitte!", en: "Please come! (drop -st and pronoun)" },
          { de: "Plural (ihr): Kommt bitte!", en: "Please come! (ihr-form without pronoun)" }
        ]
      },
      {
        type: "grammar",
        title: "Important Everyday Commands",
        explanation: "These are commands you'll hear every day in Germany — in shops, on the street, and at home.",
        examples: [
          { de: "Warten Sie bitte! / Warte bitte!", en: "Please wait!" },
          { de: "Helfen Sie mir bitte! / Hilf mir bitte!", en: "Please help me! (hilf = irregular!)" },
          { de: "Sprechen Sie bitte langsam.", en: "Please speak slowly." },
          { de: "Schreiben Sie das bitte auf.", en: "Please write that down." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Komm!", phonetic: "kom", meaning: "Come! (du)", example: { de: "Komm her!", en: "Come here!" } },
          { word: "Geh!", phonetic: "gay", meaning: "Go! (du)", example: { de: "Geh nach Hause!", en: "Go home!" } },
          { word: "Warte!", phonetic: "var-te", meaning: "Wait! (du)", example: { de: "Warte auf mich!", en: "Wait for me!" } },
          { word: "Hör zu!", phonetic: "hör tsoo", meaning: "Listen! (du)", example: { de: "Hör bitte zu!", en: "Please listen!" } },
          { word: "bitte", phonetic: "bit-te", meaning: "please", example: { de: "Hilf mir bitte!", en: "Please help me!" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "How do you politely tell your boss (formal) to wait?",
        options: ["Warte!", "Wartet!", "Warten Sie bitte!", "Warte bitte!"],
        correctIndex: 2,
        explanation: "For formal situations, use the verb + 'Sie' + 'bitte': Warten Sie bitte!"
      }
    ]
  }
};
