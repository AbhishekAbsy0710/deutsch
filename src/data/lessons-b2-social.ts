import { Lesson } from "./lessons";

export const lessonsB2Social: Record<string, Lesson> = {
  "b2-so1": {
    id: "b2-so1",
    title: "Dating & Flirting",
    module: "B2",
    blocks: [
      {
        type: "cultural-note",
        title: "Dating in DACH",
        content: "Germans are notoriously direct, which translates to their dating culture. 'Ghosting' is less common than in the US, but small talk is also kept to a minimum. A classic first date involves taking a walk (Spazieren gehen) or grabbing a coffee/beer.",
        emoji: "🍻"
      },
      {
        type: "vocabulary",
        word: "jemanden ansprechen",
        translation: "to approach/hit on someone",
        example: "Ich habe mich nicht getraut, sie anzusprechen.",
        audioUrl: "",
        phonetic: "ˈanˌʃpʁɛçən"
      },
      {
        type: "vocabulary",
        word: "der Flirt",
        translation: "the flirt",
        example: "Es war nur ein kurzer Flirt auf der Party.",
        audioUrl: "",
        phonetic: "flœːɐ̯t"
      },
      {
        type: "vocabulary",
        word: "verknallt sein",
        translation: "to have a crush",
        example: "Ich glaube, ich bin ein bisschen in ihn verknallt.",
        audioUrl: "",
        phonetic: "fɛɐ̯ˈknalt"
      },
      {
        type: "vocabulary",
        word: "sich verabreden",
        translation: "to make a date/appointment",
        example: "Wollen wir uns auf einen Kaffee verabreden?",
        audioUrl: "",
        phonetic: "fɛɐ̯ˈʔapʁeːdən"
      },
      {
        type: "example-dialogue",
        title: "At the Bar",
        context: "Two people striking up a conversation at a crowded bar.",
        lines: [
          { speaker: "Max", de: "Ist der Platz hier noch frei?", en: "Is this seat taken?" },
          { speaker: "Anna", de: "Nein, setz dich gern.", en: "No, feel free to sit." },
          { speaker: "Max", de: "Danke. Ich bin übrigens Max. Darf ich dich auf ein Getränk einladen?", en: "Thanks. I'm Max, by the way. Can I buy you a drink?" },
          { speaker: "Anna", de: "Sehr gern, ich nehme ein Radler.", en: "I'd love that, I'll take a Radler (shandy)." }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ich habe mich nicht getraut, ihn ",
        sentenceAfter: " (to approach).",
        missingWord: "anzusprechen",
        translation: "I didn't dare to approach him."
      }
    ]
  },
  "b2-so2": {
    id: "b2-so2",
    title: "Clubbing & Nightlife",
    module: "B2",
    blocks: [
      {
        type: "cultural-note",
        title: "Feierabendbier & Clubs",
        content: "The 'Feierabendbier' (after-work beer) is a sacred tradition. When clubbing (especially in Berlin techno clubs), the door policy can be strict. The key is to dress casually (often in black) and stay quiet in line.",
        emoji: "🪩"
      },
      {
        type: "vocabulary",
        word: "der Türsteher",
        translation: "the bouncer",
        example: "Der Türsteher hat uns nicht reingelassen.",
        audioUrl: "",
        phonetic: "ˈtyːɐ̯ˌʃteːɐ"
      },
      {
        type: "vocabulary",
        word: "die Schlange",
        translation: "the line / queue",
        example: "Wir standen zwei Stunden in der Schlange.",
        audioUrl: "",
        phonetic: "ˈʃlaŋə"
      },
      {
        type: "vocabulary",
        word: "einen Kater haben",
        translation: "to have a hangover",
        example: "Ich trinke heute nichts, ich will morgen keinen Kater haben.",
        audioUrl: "",
        phonetic: "ˈkaːtɐ"
      },
      {
        type: "quiz-mcq",
        question: "If you drank too much yesterday, what do you have today?",
        options: ["eine Katze", "einen Kater", "einen Hund"],
        correctIndex: 1,
        explanation: "'Einen Kater haben' is the German idiom for having a hangover (literally: to have a tomcat)."
      }
    ]
  },
  "b2-so3": {
    id: "b2-so3",
    title: "WG-Leben & Wohnen (Shared Living)",
    module: "B2",
    blocks: [
      {
        type: "cultural-note",
        title: "The WG (Wohngemeinschaft)",
        content: "Living in a WG (Wohngemeinschaft) is extremely common for students and young professionals in Germany. A key feature of any WG is the 'Putzplan' (cleaning schedule), which is taken very seriously. The 'Zweck-WG' is purely for sharing costs, while other WGs involve cooking and hanging out together.",
        emoji: "🧹"
      },
      {
        type: "vocabulary",
        word: "der Putzplan",
        translation: "cleaning schedule",
        example: "Wer ist diese Woche auf dem Putzplan dran?",
        audioUrl: "",
        phonetic: "ˈpʊtsˌplaːn"
      },
      {
        type: "vocabulary",
        word: "der Mitbewohner / die Mitbewohnerin",
        translation: "roommate",
        example: "Mein Mitbewohner hat gestern gekocht.",
        audioUrl: "",
        phonetic: "ˈmɪtbəˌvoːnɐ"
      },
      {
        type: "vocabulary",
        word: "die Nebenkosten (Pl.)",
        translation: "additional utility costs",
        example: "Sind Strom und Internet in den Nebenkosten enthalten?",
        audioUrl: "",
        phonetic: "ˈneːbənˌkɔstn̩"
      },
      {
        type: "vocabulary",
        word: "die Kaution",
        translation: "security deposit",
        example: "Die Kaution beträgt drei Monatsmieten.",
        audioUrl: "",
        phonetic: "kaʊ̯ˈt͡si̯oːn"
      },
      {
        type: "example-dialogue",
        title: "WG Casting",
        context: "Interviewing for a room in a shared apartment.",
        lines: [
          { speaker: "Lisa", de: "Wir suchen jemanden, der auch mal abends ein Bier mit uns trinkt. Keine reine Zweck-WG.", en: "We're looking for someone who also drinks a beer with us in the evening sometimes. Not just a utility-WG." },
          { speaker: "Tom", de: "Das klingt super. Und wie regelt ihr das mit dem Putzen?", en: "That sounds great. And how do you handle cleaning?" },
          { speaker: "Lisa", de: "Wir haben einen strikten Putzplan. Jede Woche ist jemand anderes dran.", en: "We have a strict cleaning schedule. Every week it's someone else's turn." }
        ]
      }
    ]
  },
  "b2-so4": {
    id: "b2-so4",
    title: "Behördengänge & Bürokratie",
    module: "B2",
    blocks: [
      {
        type: "cultural-note",
        title: "German Bureaucracy",
        content: "German bureaucracy is famous for being paper-heavy and thorough. 'Der Papierkram' (paperwork) is a major part of living here. Appointments (Termine) at the Bürgeramt often need to be booked weeks in advance. Always bring printed documents, rarely digital copies.",
        emoji: "🗂️"
      },
      {
        type: "vocabulary",
        word: "der Papierkram",
        translation: "paperwork",
        example: "Ich hasse den ganzen Papierkram für die Steuererklärung.",
        audioUrl: "",
        phonetic: "paˈpiːɐ̯ˌkʁaːm"
      },
      {
        type: "vocabulary",
        word: "die Anmeldung",
        translation: "registration (of address)",
        example: "Du musst die Anmeldung beim Bürgeramt innerhalb von zwei Wochen machen.",
        audioUrl: "",
        phonetic: "ˈanˌmɛldʊŋ"
      },
      {
        type: "vocabulary",
        word: "das Formular ausfüllen",
        translation: "to fill out the form",
        example: "Bitte füllen Sie dieses Formular in Druckbuchstaben aus.",
        audioUrl: "",
        phonetic: "fɔʁmuˈlaːɐ̯ ˈaʊ̯sˌfʏlən"
      },
      {
        type: "vocabulary",
        word: "die Frist einhalten",
        translation: "to meet the deadline",
        example: "Es ist wichtig, die Frist einzuhalten, sonst droht ein Bußgeld.",
        audioUrl: "",
        phonetic: "fʁɪst ˈaɪ̯nˌhaltn̩"
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Vergiss nicht, das ",
        sentenceAfter: " rechtzeitig auszufüllen.",
        missingWord: "Formular",
        translation: "Don't forget to fill out the form on time."
      }
    ]
  },
  "b2-so5": {
    id: "b2-so5",
    title: "Vereinsleben & Stammtisch",
    module: "B2",
    blocks: [
      {
        type: "cultural-note",
        title: "Vereine",
        content: "Germany is a nation of clubs (Vereine). There are over 600,000 registered associations (e.V. - eingetragener Verein), ranging from sports and gardening to dog breeding and choir. Joining a Verein is one of the best ways to integrate and make German friends.",
        emoji: "⚽"
      },
      {
        type: "vocabulary",
        word: "der Verein",
        translation: "club / association",
        example: "Er ist seit zehn Jahren Mitglied im Fußballverein.",
        audioUrl: "",
        phonetic: "fɛɐ̯ˈʔaɪ̯n"
      },
      {
        type: "vocabulary",
        word: "der Stammtisch",
        translation: "regulars' table / regular get-together",
        example: "Wir treffen uns jeden Freitag zum Stammtisch in der Kneipe.",
        audioUrl: "",
        phonetic: "ˈʃtamˌtɪʃ"
      },
      {
        type: "vocabulary",
        word: "ehrenamtlich",
        translation: "voluntary / unpaid",
        example: "Sie arbeitet ehrenamtlich im Tierheim.",
        audioUrl: "",
        phonetic: "ˈeːʁənˌʔamtlɪç"
      },
      {
        type: "vocabulary",
        word: "der Vorstand",
        translation: "board of directors / chairman",
        example: "Der Vorstand wird alle zwei Jahre neu gewählt.",
        audioUrl: "",
        phonetic: "ˈfoːɐ̯ˌʃtant"
      },
      {
        type: "quiz-mcq",
        question: "What does 'e.V.' stand for in German club names?",
        options: ["einfacher Verein", "eingetragener Verein", "echter Verein"],
        correctIndex: 1,
        explanation: "e.V. stands for 'eingetragener Verein' (registered association), indicating it is legally recognized."
      }
    ]
  },
  "b2-so6": {
    id: "b2-so6",
    title: "Smalltalk & Networking",
    module: "B2",
    blocks: [
      {
        type: "cultural-note",
        title: "Smalltalk in Germany",
        content: "Smalltalk isn't a natural strength of many Germans. 'Wie geht's?' is often treated as a genuine question rather than a polite greeting. However, networking is becoming increasingly important. Stick to safe topics like weather, vacation, and work, and avoid personal questions initially.",
        emoji: "🤝"
      },
      {
        type: "vocabulary",
        word: "Kontakte knüpfen",
        translation: "to make contacts / network",
        example: "Auf der Konferenz konnte sie viele wichtige Kontakte knüpfen.",
        audioUrl: "",
        phonetic: "kɔnˈtaktə ˈknʏp͡fn̩"
      },
      {
        type: "vocabulary",
        word: "der Eisbrecher",
        translation: "icebreaker",
        example: "Ein Kompliment über das Essen ist ein guter Eisbrecher.",
        audioUrl: "",
        phonetic: "ˈaɪ̯sˌbʁɛçɐ"
      },
      {
        type: "vocabulary",
        word: "oberflächlich",
        translation: "superficial",
        example: "Amerikanischer Smalltalk wirkt auf manche Deutsche oft oberflächlich.",
        audioUrl: "",
        phonetic: "ˈoːbɐˌflɛçlɪç"
      },
      {
        type: "vocabulary",
        word: "die Visitenkarte",
        translation: "business card",
        example: "Darf ich Ihnen meine Visitenkarte geben?",
        audioUrl: "",
        phonetic: "viˈziːtn̩ˌkaʁtə"
      },
      {
        type: "example-dialogue",
        title: "Networking Event",
        context: "Two professionals meeting at a conference.",
        lines: [
          { speaker: "Herr Schmidt", de: "Hallo, ich bin Markus Schmidt von TechCorp. Sind Sie auch das erste Mal auf dieser Messe?", en: "Hello, I'm Markus Schmidt from TechCorp. Is this also your first time at this trade fair?" },
          { speaker: "Frau Müller", de: "Guten Tag, Julia Müller. Nein, ich bin schon zum dritten Mal hier. Die Vorträge dieses Jahr sind wirklich spannend.", en: "Good day, Julia Müller. No, this is my third time here. The presentations this year are really exciting." },
          { speaker: "Herr Schmidt", de: "Absolut. Dürfte ich Ihnen meine Visitenkarte geben? Vielleicht können wir uns später über das Thema KI austauschen.", en: "Absolutely. May I give you my business card? Perhaps we can exchange thoughts on AI later." }
        ]
      }
    ]
  }
};
