import { Lesson } from "./lessons";

export const lessonsC2Dialects: Record<string, Lesson> = {
  "c2-d1": {
    id: "c2-d1",
    title: "Bayerisch (Bavarian) - Vocabulary & Culture",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "Servus in Bayern!",
        emoji: "🥨",
        content: "Bavarian (Bayerisch) isn't just an accent; to many linguists, it's almost a separate language. If you go to a traditional Munich Wirtshaus or the Oktoberfest, standard Hochdeutsch will immediately mark you as a 'Preiß' (Prussian/Outsider)."
      },
      {
        type: "grammar",
        title: "Key Bavarian Characteristics",
        explanation: "Bavarian heavily shifts vowels and uses unique diminutives.",
        examples: [
          { de: "was ➡️ wos", en: "what (The 'A' shifts to 'O')" },
          { de: "Mädchen ➡️ Madl", en: "girl (Diminutive ends in -l)" }
        ]
      },
      {
        type: "example-dialogue",
        title: "At the Oktoberfest",
        context: "Ordering a drink.",
        lines: [
          { speaker: "Sepp", de: "Servus! Wos wuist tringa? A Maß?", en: "Hello! What do you want to drink? A liter of beer?" },
          { speaker: "Hans", de: "Freilich! Und a Brezn dazua.", en: "Of course! And a pretzel with it." },
          { speaker: "Sepp", de: "Passt scho.", en: "Alright / Sounds good." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "freilich", phonetic: "/ˈfʁaɪ̯lɪç/", meaning: "of course / naturally", example: { de: "Freilich mache ich das.", en: "Of course I'll do that." } },
          { word: "a Maß", phonetic: "/mas/", meaning: "one liter of beer", example: { de: "Noch a Maß, bitte!", en: "Another liter, please!" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "If a Bavarian says 'Passt scho', what do they mean?",
        options: ["The clothing fits well", "It is okay / Don't worry about it", "Hurry up", "I don't understand"],
        correctIndex: 1,
        explanation: "'Passt schon' (or 'Passt scho') is the ultimate Bavarian expression of satisfaction, agreement, or saying 'no problem'."
      }
    ]
  },
  "c2-d2": {
    id: "c2-d2",
    title: "Schwäbisch (Swabian)",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "Wir können alles. Außer Hochdeutsch.",
        emoji: "🏡",
        content: "Swabian (Schwäbisch) is spoken in southwestern Germany. It is famous for being incredibly difficult for outsiders to understand, largely because it heavily alters grammar and pronunciation."
      },
      {
        type: "grammar",
        title: "Key Swabian Characteristics",
        explanation: "Swabians love the '-le' diminutive and change 'st' to 'schp'.",
        examples: [
          { de: "Haus ➡️ Häusle", en: "house (diminutive)" },
          { de: "bist du ➡️ bisch", en: "are you (Sch-ification)" }
        ]
      },
      {
        type: "example-dialogue",
        title: "Over the fence",
        context: "Neighbors chatting.",
        lines: [
          { speaker: "Karl", de: "Hasch du mei Kätzle gseha?", en: "Have you seen my little cat?" },
          { speaker: "Fritz", de: "Noi, die isch net do.", en: "No, she is not here." },
          { speaker: "Karl", de: "Gell, des isch komisch.", en: "Right, that is weird." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "gell?", phonetic: "/ɡɛl/", meaning: "isn't it? / right?", example: { de: "Schönes Wetter heute, gell?", en: "Nice weather today, right?" } },
          { word: "noi", phonetic: "/nɔɪ̯/", meaning: "no (nein)", example: { de: "Noi, danke.", en: "No, thanks." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "How would a Swabian pronounce the word 'bist' (are)?",
        options: ["Bist", "Bisch", "Bin", "Bistli"],
        correctIndex: 1,
        explanation: "Swabians turn 'st' into 'scht', so 'bist' becomes 'bisch'."
      }
    ]
  },
  "c2-d3": {
    id: "c2-d3",
    title: "Plattdeutsch (Low German)",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "Moin! Welcome to the North.",
        emoji: "⚓",
        content: "Plattdeutsch is spoken across northern Germany. Because it didn't participate in the High German consonant shift, Plattdeutsch often sounds closer to English or Dutch."
      },
      {
        type: "grammar",
        title: "English Similarities",
        explanation: "Many words are identical to English.",
        examples: [
          { de: "Water", en: "Water (Wasser)" },
          { de: "Maken", en: "Make (Machen)" }
        ]
      },
      {
        type: "example-dialogue",
        title: "At the Hamburg fish market",
        context: "Buying fish.",
        lines: [
          { speaker: "Fischer", de: "Moin! Wat mokst du hier?", en: "Hello! What are you doing here?" },
          { speaker: "Kunde", de: "Ick will een Fisch köpen.", en: "I want to buy a fish." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Moin", phonetic: "/mɔɪ̯n/", meaning: "Hello / Good morning", example: { de: "Moin Moin!", en: "Hello!" } },
          { word: "schnacken", phonetic: "/ˈʃnakn̩/", meaning: "to chat", example: { de: "Wir haben ein bisschen geschnackt.", en: "We chatted a bit." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "If a Northern German complains about 'Schietwetter', what are they complaining about?",
        options: ["Bad food", "Loud noises", "Terrible, rainy weather", "High prices"],
        correctIndex: 2,
        explanation: "'Schietwetter' literally translates to 'shit weather', and is the standard northern term for cold, rainy, coastal weather."
      }
    ]
  },
  "c2-d4": {
    id: "c2-d4",
    title: "Sächsisch & Kölsch",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "From the Rhine to the East",
        emoji: "🍻",
        content: "Kölsch is spoken in Cologne and is known for turning 'g' into 'j'. Sächsisch is spoken in Saxony and softens all hard consonants ('k' -> 'g')."
      },
      {
        type: "example-dialogue",
        title: "Regional greetings",
        context: "How people sound in different cities.",
        lines: [
          { speaker: "Kölsch", de: "Isch hab disch jään!", en: "I like you! (Ich habe dich gern)" },
          { speaker: "Sächsisch", de: "Gänsefleisch moa dor Goddoruffmacha?", en: "Could you maybe open the trunk? (Können Sie vielleicht mal den Kofferraum aufmachen?)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "jut", phonetic: "/juːt/", meaning: "good (Kölsch for 'gut')", example: { de: "Alles jut!", en: "Everything is good!" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "In the Kölsch dialect, how do they pronounce the letter 'g' at the start of a word?",
        options: ["Like a 'k'", "Like a 'sch'", "Like a 'j' (y-sound)", "Like an 'h'"],
        correctIndex: 2,
        explanation: "In the Rhineland and Cologne, 'g' often turns into a 'j' sound, so 'gut' becomes 'jut'."
      }
    ]
  },
  "c2-d5": {
    id: "c2-d5",
    title: "Berliner Schnauze",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "Ick bin ein Berliner",
        emoji: "🐻",
        content: "The Berlin dialect is famous for its 'Berliner Schnauze' (Berlin snout). It represents a rough, direct, slightly aggressive, but ultimately warm-hearted way of speaking."
      },
      {
        type: "example-dialogue",
        title: "Ordering a Currywurst",
        context: "Late night in Berlin.",
        lines: [
          { speaker: "Kunde", de: "Ick hätt jerne ne Currywurst mit Pommes, wa?", en: "I'd like a Currywurst with fries, alright?" },
          { speaker: "Verkäufer", de: "Mach ick dir jlatt. Willste Ketchup oda Mayo?", en: "I'll make that right away. You want ketchup or mayo?" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "ick", phonetic: "/ɪk/", meaning: "I (ich)", example: { de: "Ick liebe dir.", en: "I love you." } },
          { word: "der Späti", phonetic: "/ˈʃpɛːti/", meaning: "late-night convenience store", example: { de: "Ich gehe zum Späti.", en: "I'm going to the corner store." }, plural: "die Spätis" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What is a 'Späti' in Berlin?",
        options: ["A late bus", "A late-night convenience store (Spätkauf)", "A person who is always late", "A type of beer"],
        correctIndex: 1,
        explanation: "A 'Späti' (short for Spätkauf) is a beloved Berlin institution: a small convenience store that stays open late into the night."
      }
    ]
  }
};
