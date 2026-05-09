import { Lesson } from "./lessons";

export const lessonsC1Dach: Record<string, Lesson> = {
  "c1-d1": {
    id: "c1-d1",
    title: "DACH-Region: Austriazismen (Austria)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Standard Austrian German",
        explanation: "In C1 listening exams, you will hear speakers from Austria. You must know standard Austrian vocabulary (Austriazismen), which differs from Germany's standard German.",
        examples: [
          { de: "der Jänner / der Feber", en: "January / February (Germany: Januar / Februar)" },
          { de: "die Matura", en: "High school diploma (Germany: das Abitur)" },
          { de: "der Kasten", en: "Closet / Wardrobe (Germany: der Schrank)" },
          { de: "der Topfen", en: "Quark cheese (Germany: der Quark)" },
          { de: "das Spital", en: "Hospital (Germany: das Krankenhaus)" },
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "der Jänner", phonetic: "yen-ner", meaning: "January (Austria)", example: { de: "Im Jänner fahre ich oft Ski.", en: "In January I often go skiing." } },
          { word: "die Matura", phonetic: "ma-too-ra", meaning: "high school diploma (Austria/Switzerland)", example: { de: "Sie hat ihre Matura mit Auszeichnung bestanden.", en: "She passed her Matura with honors." } },
          { word: "der Topfen", phonetic: "top-fen", meaning: "quark cheese (Austria/Bavaria)", example: { de: "Topfenstrudel ist eine österreichische Spezialität.", en: "Topfenstrudel is an Austrian specialty." } },
          { word: "das Spital", phonetic: "shpi-tahl", meaning: "hospital (Austria/Switzerland)", example: { de: "Er musste nach dem Unfall ins Spital.", en: "He had to go to the hospital after the accident." } },
          { word: "die Stiege", phonetic: "shtee-ge", meaning: "stairs / staircase (Austria)", example: { de: "Gehen Sie die Stiege hinauf.", en: "Go up the stairs." } },
          { word: "der Paradeiser", phonetic: "pa-ra-dy-zer", meaning: "tomato (Austria)", example: { de: "Ich hätte gerne ein Kilo Paradeiser.", en: "I would like a kilo of tomatoes." } },
          { word: "der Erdapfel", phonetic: "airt-ap-fel", meaning: "potato (Austria)", example: { de: "Heute gibt es Erdäpfelgulasch.", en: "Today there is potato goulash." } },
          { word: "das Sackerl", phonetic: "za-kerl", meaning: "plastic/paper bag (Austria)", example: { de: "Brauchen Sie ein Sackerl für Ihren Einkauf?", en: "Do you need a bag for your purchase?" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "If an Austrian asks you for a 'Sackerl' to put their 'Paradeiser' in, what do they want?",
        options: [
          "A bag for their potatoes",
          "A box for their apples",
          "A bag for their tomatoes",
          "A bowl for their cheese"
        ],
        correctIndex: 2,
        explanation: "'Sackerl' = bag (Tüte), and 'Paradeiser' = tomatoes (Tomaten). 'Erdäpfel' are potatoes."
      }
    ]
  },
  "c1-d2": {
    id: "c1-d2",
    title: "DACH-Region: Helvetismen (Switzerland)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Standard Swiss German",
        explanation: "Swiss High German (Helvetismen) is also tested at C1. Note: This is NOT Swiss dialect (Schwiizerdütsch), but the official written standard in Switzerland.",
        examples: [
          { de: "das Velo", en: "Bicycle (Germany: das Fahrrad)" },
          { de: "das Billett", en: "Ticket (Germany: die Fahrkarte)" },
          { de: "parkieren", en: "To park (Germany: parken)" },
          { de: "grillieren", en: "To grill/barbecue (Germany: grillen)" },
          { de: "das Natel", en: "Mobile phone (Germany: das Handy)" },
        ]
      },
      {
        type: "cultural-note",
        title: "Swiss Spelling Exception",
        content: "In Switzerland, the letter 'ß' (Eszett) does not exist! They always write 'ss'. So 'Straße' is 'Strasse', and 'Fußball' is 'Fussball'.",
        emoji: "🇨🇭"
      },
      {
        type: "flashcard",
        cards: [
          { word: "das Velo", phonetic: "vay-lo", meaning: "bicycle (Switzerland)", example: { de: "Er fährt mit dem Velo zur Arbeit.", en: "He rides his bike to work." } },
          { word: "das Billett", phonetic: "bil-yet", meaning: "ticket (Switzerland)", example: { de: "Haben Sie schon ein Billett für den Zug gekauft?", en: "Have you bought a ticket for the train yet?" } },
          { word: "parkieren", phonetic: "par-kee-ren", meaning: "to park (Switzerland)", example: { de: "Hier dürfen Sie nicht parkieren.", en: "You are not allowed to park here." } },
          { word: "das Perron", phonetic: "pe-rong", meaning: "train platform (Switzerland)", example: { de: "Der Zug fährt auf Perron 3 ein.", en: "The train is arriving at platform 3." } },
          { word: "der Pneu", phonetic: "pnö", meaning: "tire (Switzerland)", example: { de: "Ich muss die Pneus an meinem Auto wechseln.", en: "I need to change the tires on my car." } },
          { word: "der Poulet", phonetic: "poo-lay", meaning: "chicken (Switzerland)", example: { de: "Gestern gab es Poulet mit Reis.", en: "Yesterday we had chicken with rice." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ich muss noch ein ",
        sentenceAfter: " für den Zug kaufen, bevor er auf dem Perron einfährt.",
        missingWord: "Billett",
        translation: "I still need to buy a ticket for the train before it arrives at the platform."
      }
    ]
  },
  "c1-d3": {
    id: "c1-d3",
    title: "DACH-Region: Regionalismen in Deutschland",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Regional Words within Germany",
        explanation: "Even within Germany, vocabulary varies widely by region. The classic example is the word for a bread roll, which changes entirely depending on where you are.",
        examples: [
          { de: "das Brötchen", en: "Bread roll (Standard, mostly North/West)" },
          { de: "die Semmel", en: "Bread roll (Bavaria, Austria)" },
          { de: "der Weck / das Weckle", en: "Bread roll (Baden-Württemberg, Southwest)" },
          { de: "die Schrippe", en: "Bread roll (Berlin/Brandenburg)" },
          { de: "Moin", en: "Hello / Good morning (Northern Germany)" },
          { de: "Servus", en: "Hello / Goodbye (Bavaria, Austria)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Semmel", phonetic: "ze-mel", meaning: "bread roll (Bavaria/Austria)", example: { de: "Ich hätte gerne drei Kaisersemmeln.", en: "I would like three Kaiser rolls." } },
          { word: "die Schrippe", phonetic: "shri-pe", meaning: "bread roll (Berlin)", example: { de: "Zwei Schrippen bitte!", en: "Two rolls, please!" } },
          { word: "Moin", phonetic: "moyn", meaning: "Hello (North)", example: { de: "Moin moin! Wie geht's?", en: "Hello! How are you?" } },
          { word: "Servus", phonetic: "zair-voos", meaning: "Hello/Goodbye (South)", example: { de: "Servus, schön dich zu sehen!", en: "Hello, nice to see you!" } },
          { word: "das Viertel vor / dreiviertel", phonetic: "feer-tel for / dry-feer-tel", meaning: "quarter to (Time)", example: { de: "Es ist dreiviertel acht. (19:45 in East/South)", en: "It is a quarter to eight." } },
          { word: "der Metzger / Fleischer / Schlachter", phonetic: "mets-ger / fly-sher / shlakh-ter", meaning: "butcher (South/West vs. East vs. North)", example: { de: "Ich gehe zum Metzger.", en: "I'm going to the butcher." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "If you are in Berlin and want a bread roll, what should you ask for?",
        options: [
          "Eine Semmel",
          "Ein Weckle",
          "Eine Schrippe",
          "Ein Rundstück"
        ],
        correctIndex: 2,
        explanation: "In Berlin, a bread roll is called 'die Schrippe'. 'Semmel' is Bavarian, 'Weckle' is Swabian (Stuttgart area), and 'Rundstück' is from Hamburg."
      }
    ]
  }
};
