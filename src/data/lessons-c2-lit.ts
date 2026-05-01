import { Lesson } from "./lessons";

export const lessonsC2Lit: Record<string, Lesson> = {
  "c2-l1": {
    id: "c2-l1",
    title: "Classic Literature: Goethe & Schiller",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "Reading the Masters",
        emoji: "📖",
        content: "Johann Wolfgang von Goethe and Friedrich Schiller are the absolute titans of German literature. Their works (Faust, Die Räuber, Wilhelm Tell) define the Weimarer Klassik period. At the C2 level, you should be able to read and understand the archaic, poetic German used in the 18th and 19th centuries."
      },
      {
        type: "grammar",
        title: "Key Features of Classic Literature",
        explanation: "Poetry and classic plays use specific archaic structures.",
        examples: [
          { de: "Des Vaters Haus (Genitiv vorangestellt)", en: "The father's house (Archaic genitive order)" },
          { de: "Ich geh' (Elision)", en: "I go (Dropping the e for rhythm)" }
        ]
      },
      {
        type: "example-dialogue",
        title: "Goethe: Faust I",
        context: "Faust reflects on his useless academic studies.",
        lines: [
          { speaker: "Faust", de: "Habe nun, ach! Philosophie, Juristerei und Medizin, Und leider auch Theologie! Durchaus studiert, mit heißem Bemühn.", en: "I have now, alas, studied philosophy, law, medicine, and unfortunately also theology, thoroughly with ardent effort." },
          { speaker: "Faust", de: "Da steh ich nun, ich armer Tor! Und bin so klug als wie zuvor.", en: "Here I stand now, poor fool! And am as wise as I was before." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "das Bemühen", phonetic: "/bəˈmyːən/", meaning: "effort / endeavor", example: { de: "Mit heißem Bemühn.", en: "With ardent effort." } },
          { word: "der Tor", phonetic: "/toːɐ̯/", meaning: "fool / simpleton", example: { de: "Ich armer Tor!", en: "I poor fool!" } },
          { word: "das Antlitz", phonetic: "/ˈantlɪts/", meaning: "face / countenance (archaic)", example: { de: "Sein Antlitz war ernst.", en: "His countenance was serious." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What does the archaic word 'Antlitz' mean in modern German?",
        options: ["Das Gesicht", "Der Körper", "Die Seele", "Der Verstand"],
        correctIndex: 0,
        explanation: "'Antlitz' is a highly poetic and archaic word for 'Gesicht' (face)."
      }
    ]
  },
  "c2-l2": {
    id: "c2-l2",
    title: "20th Century Lit: Kafka & Brecht",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "Modernism & The Absurd",
        emoji: "🎭",
        content: "While Goethe represents classical beauty, the 20th century in German literature is defined by existential dread (Kafka) and political alienation (Brecht). Kafka is known for 'Die Verwandlung' and Brecht for the 'Verfremdungseffekt' in theater."
      },
      {
        type: "example-dialogue",
        title: "Kafka: Die Verwandlung",
        context: "The famous opening sentence.",
        lines: [
          { speaker: "Erzähler", de: "Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt.", en: "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a monstrous vermin." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "das Ungeziefer", phonetic: "/ˈʊnɡəˌtsiːfɐ/", meaning: "vermin / pest", example: { de: "Ein ungeheures Ungeziefer.", en: "A monstrous vermin." } },
          { word: "die Verfremdung", phonetic: "/fɛɐ̯ˈfʁɛmdʊŋ/", meaning: "alienation", example: { de: "Der Verfremdungseffekt ist typisch für Brecht.", en: "The alienation effect is typical for Brecht." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which author is famous for a cold, bureaucratic writing style describing surreal nightmares?",
        options: ["Goethe", "Schiller", "Kafka", "Brecht"],
        correctIndex: 2,
        explanation: "Franz Kafka's signature style pairs a cold, bureaucratic tone with absurd, nightmarish scenarios."
      }
    ]
  },
  "c2-l3": {
    id: "c2-l3",
    title: "Historical Speeches & Rhetoric",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "The Weight of History",
        emoji: "🎙️",
        content: "Understanding modern Germany requires understanding its political rhetoric. Speeches have shaped the nation through its darkest and brightest eras."
      },
      {
        type: "grammar",
        title: "Rhetorical Devices",
        explanation: "Speeches rely on specific literary devices.",
        examples: [
          { de: "Die Anapher", en: "Anaphora (Repeating words at the start of sentences)" },
          { de: "Der Euphemismus", en: "Euphemism (Using harmless words to mask realities)" }
        ]
      },
      {
        type: "example-dialogue",
        title: "Richard von Weizsäcker (8. Mai 1985)",
        context: "A historic speech on the end of WWII.",
        lines: [
          { speaker: "Weizsäcker", de: "Der 8. Mai war ein Tag der Befreiung. Er hat uns alle befreit von dem menschenverachtenden System der nationalsozialistischen Gewaltherrschaft.", en: "May 8 was a day of liberation. It liberated all of us from the inhuman system of the National Socialist tyranny." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Befreiung", phonetic: "/bəˈfʁaɪ̯ʊŋ/", meaning: "liberation", example: { de: "Ein Tag der Befreiung.", en: "A day of liberation." } },
          { word: "menschenverachtend", phonetic: "/ˈmɛnʃn̩fɛɐ̯ˌʔaxtn̩t/", meaning: "inhuman / despicable", example: { de: "Ein menschenverachtendes System.", en: "An inhuman system." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What does 'menschenverachtend' literally translate to?",
        options: ["Human-loving", "Human-despising (inhuman)", "Mankind", "Power-hungry"],
        correctIndex: 1,
        explanation: "'Menschen' (humans) + 'verachtend' (despising). It is used to describe systems or ideologies that treat human life with extreme cruelty."
      }
    ]
  },
  "c2-l4": {
    id: "c2-l4",
    title: "Poetic Register & Archaic Structures",
    module: "C2",
    blocks: [
      {
        type: "grammar",
        title: "Archaic Grammar Rules",
        explanation: "Poetry often drops letters or adds archaic endings for rhythm.",
        examples: [
          { de: "im Walde (Dativ-e)", en: "in the forest (Archaic Dative ending)" },
          { de: "Röslein rot (Adjektiv nachgestellt)", en: "Little rose red (Post-positioned adjective)" }
        ]
      },
      {
        type: "example-dialogue",
        title: "Rilke: Der Panther",
        context: "A famous poem about a panther in a zoo.",
        lines: [
          { speaker: "Rilke", de: "Sein Blick ist vom Vorübergehn der Stäbe so müd geworden, dass er nichts mehr hält.", en: "His gaze, from the passing of the bars, has become so tired that it holds nothing anymore." },
          { speaker: "Rilke", de: "Ihm ist, als ob es tausend Stäbe gäbe und hinter tausend Stäben keine Welt.", en: "It seems to him there are a thousand bars, and behind a thousand bars no world." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "der Stab", phonetic: "/ʃtaːp/", meaning: "bar / rod", example: { de: "Die Stäbe des Käfigs.", en: "The bars of the cage." }, plural: "die Stäbe" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Why do older texts write 'im Walde' instead of 'im Wald'?",
        options: ["It is plural", "It is an archaic Dative 'e' ending", "It is feminine", "It is a spelling mistake"],
        correctIndex: 1,
        explanation: "Historically, the Dative case added an 'e' to masculine and neuter nouns."
      }
    ]
  }
};
