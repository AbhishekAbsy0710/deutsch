import { Lesson } from "./lessons";

export const lessonsA2New3: Record<string, Lesson> = {
  "la2_17": {
    id: "la2_17",
    title: "Months, Seasons & Calendar",
    module: "A2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "der Januar", phonetic: "ya-noo-ar", meaning: "January", example: { de: "Im Januar ist es kalt.", en: "In January it is cold." } },
          { word: "der Februar", phonetic: "fay-broo-ar", meaning: "February", example: { de: "Im Februar ist Karneval.", en: "In February is carnival." } },
          { word: "der März", phonetic: "merts", meaning: "March", example: { de: "Im März wird es wärmer.", en: "In March it gets warmer." } },
          { word: "der April", phonetic: "a-pril", meaning: "April", example: { de: "April, April!", en: "April fools!" } },
          { word: "der Mai", phonetic: "my", meaning: "May", example: { de: "Im Mai blühen die Blumen.", en: "In May the flowers bloom." } },
          { word: "der Juni", phonetic: "yoo-nee", meaning: "June", example: { de: "Im Juni beginnt der Sommer.", en: "In June summer begins." } }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "der Frühling", phonetic: "frü-ling", meaning: "spring", example: { de: "Im Frühling ist alles grün.", en: "In spring everything is green." } },
          { word: "der Sommer", phonetic: "zom-mer", meaning: "summer", example: { de: "Im Sommer schwimme ich.", en: "In summer I swim." } },
          { word: "der Herbst", phonetic: "hairpst", meaning: "autumn/fall", example: { de: "Im Herbst fallen die Blätter.", en: "In autumn the leaves fall." } },
          { word: "der Winter", phonetic: "vin-ter", meaning: "winter", example: { de: "Im Winter schneit es.", en: "In winter it snows." } }
        ]
      },
      {
        type: "grammar",
        title: "Using 'im' with Months & Seasons",
        explanation: "Always use 'im' (= in dem) before months and seasons. All months are masculine (der).",
        examples: [
          { de: "Im Juli fahre ich nach Spanien.", en: "In July I'm going to Spain." },
          { de: "Im Winter ist es dunkel.", en: "In winter it is dark." },
          { de: "Mein Geburtstag ist im Oktober.", en: "My birthday is in October." }
        ]
      },
      {
        type: "quiz-mcq",
        question: "How do you say 'in March' in German?",
        options: ["in März", "am März", "im März", "zum März"],
        correctIndex: 2,
        explanation: "Always use 'im' (in dem) with months and seasons: im März, im Sommer."
      }
    ]
  },
  "la2_18": {
    id: "la2_18",
    title: "School & Education (Schule & Bildung)",
    module: "A2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Schule", phonetic: "shoo-le", meaning: "the school", example: { de: "Ich gehe zur Schule.", en: "I go to school." } },
          { word: "die Klasse", phonetic: "klas-se", meaning: "the class/grade", example: { de: "In welcher Klasse bist du?", en: "What grade are you in?" } },
          { word: "der Lehrer / die Lehrerin", phonetic: "lay-rer / lay-re-rin", meaning: "the teacher (m/f)", example: { de: "Mein Lehrer ist nett.", en: "My teacher is nice." } },
          { word: "der Schüler / die Schülerin", phonetic: "shü-ler / shü-le-rin", meaning: "the student (m/f)", example: { de: "Die Schüler lernen Deutsch.", en: "The students learn German." } },
          { word: "die Prüfung", phonetic: "prü-foong", meaning: "the exam/test", example: { de: "Morgen habe ich eine Prüfung.", en: "Tomorrow I have an exam." } },
          { word: "die Hausaufgabe", phonetic: "hows-owf-gah-be", meaning: "the homework", example: { de: "Hast du die Hausaufgaben gemacht?", en: "Did you do the homework?" } },
          { word: "die Universität", phonetic: "oo-ni-ver-zi-tät", meaning: "the university", example: { de: "Ich studiere an der Universität.", en: "I study at the university." } },
          { word: "der Kurs", phonetic: "koors", meaning: "the course", example: { de: "Ich mache einen Deutschkurs.", en: "I'm taking a German course." } }
        ]
      },
      {
        type: "grammar",
        title: "Education Phrases",
        explanation: "Use 'lernen' for learning/studying in general and at school. Use 'studieren' ONLY for university studies.",
        examples: [
          { de: "Ich lerne Deutsch. (general)", en: "I am learning German." },
          { de: "Er studiert Medizin. (university)", en: "He studies medicine." },
          { de: "Sie macht ein Praktikum.", en: "She is doing an internship." }
        ]
      },
      {
        type: "listening",
        phrase: "Ich besuche einen Deutschkurs und mache nächste Woche eine Prüfung.",
        translation: "I attend a German course and have an exam next week.",
        speed: "normal"
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ich ",
        sentenceAfter: " Medizin an der Universität.",
        missingWord: "studiere",
        translation: "I study medicine at the university."
      }
    ]
  },
  "la2_19": {
    id: "la2_19",
    title: "Media & Technology (Medien & Technik)",
    module: "A2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "das Handy", phonetic: "hen-dee", meaning: "the mobile phone", example: { de: "Wo ist mein Handy?", en: "Where is my phone?" } },
          { word: "der Computer", phonetic: "kom-pyoo-ter", meaning: "the computer", example: { de: "Ich arbeite am Computer.", en: "I work on the computer." } },
          { word: "das Internet", phonetic: "in-ter-net", meaning: "the internet", example: { de: "Hast du Internet?", en: "Do you have internet?" } },
          { word: "die E-Mail", phonetic: "ee-mayl", meaning: "the email", example: { de: "Ich schicke dir eine E-Mail.", en: "I'll send you an email." } },
          { word: "das Passwort", phonetic: "pas-vort", meaning: "the password", example: { de: "Wie ist das WLAN-Passwort?", en: "What is the WiFi password?" } },
          { word: "die Nachricht", phonetic: "nakh-rikht", meaning: "the message/news", example: { de: "Hast du meine Nachricht gelesen?", en: "Did you read my message?" } },
          { word: "die Zeitung", phonetic: "tsy-toong", meaning: "the newspaper", example: { de: "Ich lese die Zeitung.", en: "I read the newspaper." } },
          { word: "das Fernsehen", phonetic: "fairn-zay-en", meaning: "television", example: { de: "Was kommt heute im Fernsehen?", en: "What's on TV today?" } }
        ]
      },
      {
        type: "grammar",
        title: "Digital Communication Phrases",
        explanation: "Common expressions for everyday digital life in Germany.",
        examples: [
          { de: "Wie ist das WLAN-Passwort?", en: "What is the WiFi password?" },
          { de: "Kannst du mir eine Nachricht schicken?", en: "Can you send me a message?" },
          { de: "Ich habe kein Netz.", en: "I have no signal/reception." },
          { de: "Mein Akku ist leer.", en: "My battery is dead." }
        ]
      },
      {
        type: "speaking",
        phrase: "Entschuldigung, wie ist das WLAN-Passwort hier?",
        translation: "Excuse me, what is the WiFi password here?",
        phonetic: "ent-shool-di-goong, vee ist das vee-lahn-pas-vort heer",
        tip: "In Germany, WiFi is called 'WLAN' (pronounced 'Vee-Lahn')!"
      },
      {
        type: "quiz-mcq",
        question: "What is 'Handy' in German?",
        options: ["Handbag", "Glove", "Mobile phone", "Handyman"],
        correctIndex: 2,
        explanation: "'Handy' is a false friend! In German it means 'mobile phone', not 'handy/useful'."
      }
    ]
  },
  "la2_20": {
    id: "la2_20",
    title: "Furniture & Household (Möbel & Haushalt)",
    module: "A2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "der Tisch", phonetic: "tish", meaning: "the table", gender: "m", example: { de: "Das Essen steht auf dem Tisch.", en: "The food is on the table." } },
          { word: "der Stuhl", phonetic: "shtool", meaning: "the chair", gender: "m", example: { de: "Setz dich auf den Stuhl.", en: "Sit on the chair." } },
          { word: "das Bett", phonetic: "bet", meaning: "the bed", gender: "n", example: { de: "Das Bett ist bequem.", en: "The bed is comfortable." } },
          { word: "der Schrank", phonetic: "shrank", meaning: "the wardrobe/cabinet", gender: "m", example: { de: "Die Kleidung ist im Schrank.", en: "The clothes are in the wardrobe." } },
          { word: "der Kühlschrank", phonetic: "kül-shrank", meaning: "the refrigerator", gender: "m", example: { de: "Die Milch ist im Kühlschrank.", en: "The milk is in the fridge." } },
          { word: "die Waschmaschine", phonetic: "vash-ma-shee-ne", meaning: "the washing machine", gender: "f", example: { de: "Wo ist die Waschmaschine?", en: "Where is the washing machine?" } },
          { word: "das Sofa", phonetic: "zoh-fa", meaning: "the sofa/couch", gender: "n", example: { de: "Ich sitze auf dem Sofa.", en: "I sit on the sofa." } },
          { word: "der Spiegel", phonetic: "shpee-gel", meaning: "the mirror", gender: "m", example: { de: "Schau in den Spiegel!", en: "Look in the mirror!" } }
        ]
      },
      {
        type: "grammar",
        title: "Location with Furniture (Dative!)",
        explanation: "When saying WHERE something IS, use Dative. When saying WHERE you PUT something, use Accusative.",
        examples: [
          { de: "Das Buch liegt auf dem Tisch. (wo? → Dativ)", en: "The book is lying on the table." },
          { de: "Ich lege das Buch auf den Tisch. (wohin? → Akk)", en: "I put the book on the table." },
          { de: "Die Katze sitzt unter dem Stuhl.", en: "The cat sits under the chair." }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Die Milch ist im ",
        sentenceAfter: ".",
        missingWord: "Kühlschrank",
        translation: "The milk is in the refrigerator."
      },
      {
        type: "listening",
        phrase: "Kannst du bitte den Tisch decken? Die Teller sind im Schrank.",
        translation: "Can you please set the table? The plates are in the cabinet.",
        speed: "normal"
      }
    ]
  },
  "la2_21": {
    id: "la2_21",
    title: "Futur I — Talking About the Future",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "werden + Infinitive",
        explanation: "To talk about the future formally, use 'werden' (conjugated) + the infinitive at the END. However, in everyday speech, Germans usually use present tense + time word (Ich fahre morgen...).",
        examples: [
          { de: "Ich werde morgen kommen.", en: "I will come tomorrow." },
          { de: "Er wird nächstes Jahr studieren.", en: "He will study next year." },
          { de: "Wir werden das schaffen!", en: "We will manage that!" }
        ]
      },
      {
        type: "conjugation-drill",
        verb: "werden (Futur-Hilfsverb)",
        translation: "will (future helper)",
        tense: "Present",
        pronouns: ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"],
        correctForms: ["werde", "wirst", "wird", "werden", "werdet", "werden"],
        hint: "Irregular! ich werde, du wirst, er wird..."
      },
      {
        type: "flashcard",
        cards: [
          { word: "werden", phonetic: "vair-den", meaning: "will / to become", example: { de: "Es wird regnen.", en: "It will rain." } },
          { word: "bald", phonetic: "balt", meaning: "soon", example: { de: "Ich werde bald kommen.", en: "I will come soon." } },
          { word: "nächstes Jahr", phonetic: "nekh-stes yahr", meaning: "next year", example: { de: "Nächstes Jahr werde ich reisen.", en: "Next year I will travel." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which sentence is correct for 'She will learn German'?",
        options: ["Sie werde Deutsch lernen.", "Sie wird Deutsch lernen.", "Sie werden Deutsch lernen.", "Sie wirst Deutsch lernen."],
        correctIndex: 1,
        explanation: "For sie (she), 'werden' conjugates to 'wird': Sie wird Deutsch lernen."
      }
    ]
  },
  "la2_22": {
    id: "la2_22",
    title: "Basic Relative Clauses (Relativsätze)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Relative Pronouns = Article Forms",
        explanation: "A relative clause gives extra info about a noun. The relative pronoun (der/die/das) matches the gender of the noun AND takes the case required by its role in the clause. The verb goes to the END.",
        examples: [
          { de: "Der Mann, DER dort steht, ist mein Vater.", en: "The man WHO is standing there is my father. (der = Nom masc)" },
          { de: "Die Frau, DIE ich kenne, ist nett.", en: "The woman WHOM I know is nice. (die = Akk fem)" },
          { de: "Das Buch, DAS auf dem Tisch liegt, ist gut.", en: "The book THAT is lying on the table is good. (das = Nom neut)" }
        ]
      },
      {
        type: "grammar",
        title: "Relative Pronoun Table (Nom/Akk)",
        explanation: "At A2, focus on Nominative and Accusative relative pronouns. They look identical to the definite articles except for the plural accusative.",
        examples: [
          { de: "Nominativ: der / die / das / die (pl)", en: "who / that (subject of relative clause)" },
          { de: "Akkusativ: den / die / das / die (pl)", en: "whom / that (object of relative clause)" },
          { de: "Die Kinder, DIE im Garten spielen, sind laut.", en: "The children who play in the garden are loud." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "der (Relativpronomen)", phonetic: "dair", meaning: "who/that (masc nom)", example: { de: "Der Hund, der bellt, ist klein.", en: "The dog that barks is small." } },
          { word: "den (Relativpronomen)", phonetic: "den", meaning: "whom/that (masc acc)", example: { de: "Der Film, den ich gesehen habe, war toll.", en: "The movie that I saw was great." } },
          { word: "die (Relativpronomen)", phonetic: "dee", meaning: "who/that (fem/pl)", example: { de: "Die Frau, die dort wohnt, ist Ärztin.", en: "The woman who lives there is a doctor." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Das ist der Mann, ",
        sentenceAfter: " ich gestern getroffen habe.",
        missingWord: "den",
        translation: "That is the man whom I met yesterday."
      }
    ]
  },
  "la2_23": {
    id: "la2_23",
    title: "Polite Requests (Konjunktiv II Intro)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "würde + Infinitive (would)",
        explanation: "To make polite requests or say what you 'would' do, use 'würde' + infinitive. This is the 'safe' form for politeness. You already know 'Ich hätte gern...' — now learn the full pattern.",
        examples: [
          { de: "Ich würde gern einen Kaffee bestellen.", en: "I would like to order a coffee." },
          { de: "Würden Sie mir bitte helfen?", en: "Would you please help me?" },
          { de: "Ich würde lieber zu Hause bleiben.", en: "I would rather stay at home." }
        ]
      },
      {
        type: "grammar",
        title: "hätte / wäre / könnte (Fixed Polite Forms)",
        explanation: "For haben, sein, and können, use the direct Konjunktiv II forms instead of 'würde': hätte (would have), wäre (would be), könnte (could).",
        examples: [
          { de: "Ich hätte gern ein Bier.", en: "I would like a beer." },
          { de: "Das wäre toll!", en: "That would be great!" },
          { de: "Könnten Sie das bitte wiederholen?", en: "Could you please repeat that?" },
          { de: "Wenn ich Zeit hätte, würde ich kommen.", en: "If I had time, I would come." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "würde", phonetic: "vür-de", meaning: "would", example: { de: "Ich würde gern helfen.", en: "I would like to help." } },
          { word: "hätte", phonetic: "het-te", meaning: "would have", example: { de: "Ich hätte gern mehr Zeit.", en: "I would like more time." } },
          { word: "wäre", phonetic: "vä-re", meaning: "would be", example: { de: "Das wäre super!", en: "That would be great!" } },
          { word: "könnte", phonetic: "kön-te", meaning: "could", example: { de: "Könntest du mir helfen?", en: "Could you help me?" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "How do you politely say 'Could you please help me?' (formal)?",
        options: ["Können Sie mir helfen?", "Könnten Sie mir bitte helfen?", "Würden Sie helfen mir?", "Helfen Sie mir können?"],
        correctIndex: 1,
        explanation: "'Könnten Sie mir bitte helfen?' uses the polite Konjunktiv II form of 'können'."
      }
    ]
  }
};
