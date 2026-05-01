import { Lesson } from "./lessons";

export const lessonsC2Idioms: Record<string, Lesson> = {
  "c2-i1": {
    id: "c2-i1",
    title: "Loriot & Kabarett (German Humor)",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "Yes, German Humor Exists",
        emoji: "🎭",
        content: "Vicco von Bülow (Loriot) is the undisputed king of German comedy. His sketches from the 70s and 80s are embedded in the cultural DNA. Quotes from his sketches are treated like proverbs."
      },
      {
        type: "grammar",
        title: "Kabarett vs. Comedy",
        explanation: "German 'Kabarett' is a form of highly political, intellectual stand-up comedy focusing on satire and social criticism, different from standard slapstick comedy.",
        examples: [
          { de: "Früher war mehr Lametta.", en: "There used to be more tinsel. (Used when complaining that things used to be better)" },
          { de: "Ein Leben ohne Mops ist möglich, aber sinnlos.", en: "A life without a pug is possible, but pointless." }
        ]
      },
      {
        type: "example-dialogue",
        title: "The Noodle Sketch",
        context: "A classic Loriot exchange.",
        lines: [
          { speaker: "Hildegard", de: "Bitte sag mir, was du wirklich denkst.", en: "Please tell me what you really think." },
          { speaker: "Müller", de: "Ich denke, dass wir eine sehr glückliche Ehe führen.", en: "I think that we have a very happy marriage." },
          { speaker: "Hildegard", de: "Warum hast du dann eine Nudel im Gesicht?", en: "Then why do you have a noodle on your face?" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "das Kabarett", phonetic: "/kabaˈʁɛt/", meaning: "political satire comedy", example: { de: "Wir gehen ins Kabarett.", en: "We are going to the cabaret (comedy club)." } },
          { word: "sinnlos", phonetic: "/ˈzɪnloːs/", meaning: "pointless / senseless", example: { de: "Es ist sinnlos.", en: "It is pointless." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What is 'Kabarett' in Germany?",
        options: ["A burlesque dance show", "Political and social satire comedy", "A type of beer hall", "A drama theater"],
        correctIndex: 1,
        explanation: "German 'Kabarett' is a specific genre of intellectual, political satire."
      }
    ]
  },
  "c2-i2": {
    id: "c2-i2",
    title: "Tatort Culture",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "Sunday Night at 8:15 PM",
        emoji: "📺",
        content: "For over 50 years, millions of Germans have gathered every Sunday evening at 20:15 to watch 'Tatort' (Crime Scene). To understand watercooler talk on Monday mornings, you must understand Tatort."
      },
      {
        type: "grammar",
        title: "Tatort Vocabulary",
        explanation: "The vocabulary of murder and investigation.",
        examples: [
          { de: "Die Spurensicherung (Spusi)", en: "Forensics / CSI" },
          { de: "Die Leiche", en: "The corpse" }
        ]
      },
      {
        type: "example-dialogue",
        title: "At the crime scene",
        context: "Detectives examining a body.",
        lines: [
          { speaker: "Kommissar Thiel", de: "Todeszeitpunkt?", en: "Time of death?" },
          { speaker: "Gerichtsmediziner", de: "Zwischen Mitternacht und zwei Uhr morgens. Keine Anzeichen für einen Kampf.", en: "Between midnight and 2 AM. No signs of a struggle." },
          { speaker: "Kommissar Thiel", de: "Gut, rufen Sie die Spusi. Ich spreche mit der Witwe.", en: "Good, call forensics. I'll speak to the widow." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Spurensicherung", phonetic: "/ˈʃpuːʁənˌzɪçəʁʊŋ/", meaning: "forensics (colloquial: Spusi)", example: { de: "Ruf die Spusi!", en: "Call forensics!" } },
          { word: "die Leiche", phonetic: "/ˈlaɪ̯çə/", meaning: "corpse / dead body", example: { de: "Wo ist die Leiche?", en: "Where is the body?" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "If a detective asks for the 'Spusi', who are they calling?",
        options: ["The suspect", "Forensics (Spurensicherung)", "The victim", "The lawyer"],
        correctIndex: 1,
        explanation: "'Spusi' is a colloquial abbreviation for 'Spurensicherung', which is the forensics team."
      }
    ]
  },
  "c2-i3": {
    id: "c2-i3",
    title: "Untranslatable Words",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "A Word for Everything",
        emoji: "🧩",
        content: "Because German allows infinite noun compounding, it has created words for incredibly specific emotions and situations that require entire sentences to explain in English."
      },
      {
        type: "grammar",
        title: "C2 Untranslatables",
        explanation: "Mastering these shows you understand the German psyche.",
        examples: [
          { de: "Verschlimmbessern", en: "To make something worse while trying to improve it." },
          { de: "Fremdschämen", en: "To feel intense secondhand embarrassment for someone else." }
        ]
      },
      {
        type: "example-dialogue",
        title: "Discussing a failed project",
        context: "Two colleagues chatting.",
        lines: [
          { speaker: "Anna", de: "Der Chef hat versucht, den Prozess zu optimieren.", en: "The boss tried to optimize the process." },
          { speaker: "Lukas", de: "Ja, und er hat das System komplett verschlimmbessert.", en: "Yes, and he completely 'worsened-it-while-improving'." },
          { speaker: "Anna", de: "Ich musste im Meeting echtes Fremdschämen ertragen.", en: "I had to endure real secondhand embarrassment in the meeting." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "verschlimmbessern", phonetic: "/fɛɐ̯ˈʃlɪmˌbɛsɐn/", meaning: "to worsen while trying to fix", example: { de: "Das hast du verschlimmbessert.", en: "You made it worse by trying to fix it." } },
          { word: "das Fremdschämen", phonetic: "/ˈfʁɛmtˌʃɛːmən/", meaning: "secondhand embarrassment", example: { de: "Ein Moment zum Fremdschämen.", en: "A cringe moment." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What does it mean if you 'verschlimmbessern' a situation?",
        options: ["You successfully fix it", "You ignore it", "You try to fix it, but actually make it worse", "You laugh at it"],
        correctIndex: 2,
        explanation: "Ver-schlimm (worsen) - bessern (improve). It means to make something worse in an attempt to make it better."
      }
    ]
  },
  "c2-i4": {
    id: "c2-i4",
    title: "Wortspiele (Wordplay & Puns)",
    module: "C2",
    blocks: [
      {
        type: "grammar",
        title: "The Double Meaning (Teekesselchen)",
        explanation: "German has many words with double meanings. Puns in German usually rely on taking a metaphorical phrase completely literally.",
        examples: [
          { de: "Egal wie dicht du bist, Goethe war Dichter.", en: "No matter how drunk (dicht) you are, Goethe was a poet (Dichter = more drunk / poet)." },
          { de: "Was essen Autos am liebsten? Parkplätzchen.", en: "What do cars like to eat? Parking cookies (Plätzchen = cookies / small parking spots)." }
        ]
      },
      {
        type: "example-dialogue",
        title: "Two friends joking",
        context: "A terrible dad joke.",
        lines: [
          { speaker: "Max", de: "Ich habe gestern ein Buch über Anti-Gravitation gelesen.", en: "I read a book about anti-gravity yesterday." },
          { speaker: "Tom", de: "Und?", en: "And?" },
          { speaker: "Max", de: "Ich konnte es einfach nicht aus der Hand legen!", en: "I just couldn't put it down!" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "dicht", phonetic: "/dɪçt/", meaning: "drunk (slang) / dense", example: { de: "Er ist total dicht.", en: "He is completely drunk." } },
          { word: "der Dichter", phonetic: "/ˈdɪçtɐ/", meaning: "poet", example: { de: "Goethe war ein Dichter.", en: "Goethe was a poet." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "In the joke 'Egal wie dicht du bist, Goethe war Dichter', what is the pun on 'Dichter'?",
        options: ["It means 'sober' and 'writer'", "It means 'more drunk' and 'poet'", "It means 'thicker' and 'smarter'", "It means 'taller' and 'author'"],
        correctIndex: 1,
        explanation: "'Dicht' is slang for drunk. 'Dichter' is the comparative form (more drunk), but it is also the noun for 'poet'."
      }
    ]
  },
  "c2-i5": {
    id: "c2-i5",
    title: "Extreme Sarcasm & Complaining",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "Meckern auf hohem Niveau",
        emoji: "🙄",
        content: "Germans love to complain. It is considered a national sport. If a German isn't complaining, they might be ill. C2 speakers use dripping sarcasm or ironic praise instead of getting angry."
      },
      {
        type: "grammar",
        title: "The Art of Sarcasm",
        explanation: "How to insult someone by praising them.",
        examples: [
          { de: "Das hast du ja mal wieder toll hingekriegt.", en: "You really managed to do that great again. (Meaning: You ruined it.)" },
          { de: "Herzlichen Glückwunsch!", en: "Congratulations! (Said when someone drops a glass)." }
        ]
      },
      {
        type: "example-dialogue",
        title: "At the train station",
        context: "The train is delayed by 80 minutes.",
        lines: [
          { speaker: "Passagier 1", de: "Die Deutsche Bahn ist heute wieder pünktlich wie ein Schweizer Uhrwerk.", en: "The Deutsche Bahn is punctual like a Swiss clock today." },
          { speaker: "Passagier 2", de: "Na toll. Da hätte ich auch gleich zu Fuß gehen können.", en: "Well, great. I might as well have walked." },
          { speaker: "Passagier 1", de: "Meckern nützt ja nix. Gehen wir einen Kaffee trinken?", en: "Complaining doesn't help. Shall we go drink a coffee?" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "meckern", phonetic: "/ˈmɛkɐn/", meaning: "to complain / gripe", example: { de: "Hör auf zu meckern!", en: "Stop complaining!" } },
          { word: "hinkriegen", phonetic: "/ˈhɪnˌkʁiːɡn̩/", meaning: "to manage / pull off", example: { de: "Wie hast du das hingekriegt?", en: "How did you manage that?" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "If someone drops a plate and breaks it, what might a sarcastic German say?",
        options: ["Oh nein!", "Herzlichen Glückwunsch!", "Ich helfe dir.", "Gute Besserung!"],
        correctIndex: 1,
        explanation: "It is a common sarcastic trope in Germany to shout 'Herzlichen Glückwunsch!' (Congratulations!) when someone drops and breaks something."
      }
    ]
  }
};
