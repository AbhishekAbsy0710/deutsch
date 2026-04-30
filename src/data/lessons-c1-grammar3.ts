import { Lesson } from "./lessons";

export const lessonsC1Grammar3: Record<string, Lesson> = {
  "c1-g16": {
    id: "c1-g16",
    title: "Advanced Genitive Prepositions",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "The C1 Preposition Arsenal",
        explanation: "At B2 you learned 'wegen', 'trotz', and 'hinsichtlich'. C1 requires mastery of highly formal Genitive prepositions used in law, journalism, and academia.",
        examples: [
          { de: "zwecks (+ Gen)", en: "for the purpose of (Zwecks besserer Planung...)" },
          { de: "mangels (+ Gen)", en: "for lack of (Mangels Beweisen wurde er freigesprochen.)" },
          { de: "zugunsten (+ Gen)", en: "in favor of (Er trat zugunsten seines Sohnes zurück.)" },
          { de: "infolge (+ Gen)", en: "as a result of (Infolge des Sturms fiel der Strom aus.)" },
          { de: "ungeachtet (+ Gen)", en: "despite / regardless of (Ungeachtet der Risiken...)" },
        ]
      },
      {
        type: "cultural-note",
        title: "Dativ fallback",
        content: "When these prepositions are used with a naked plural noun (no article/adjective to show the Genitive), German grammar rules dictate you must fallback to Dativ. Example: 'mangels Beweisen' (Dativ) instead of 'mangels Beweise' (Genitiv without article).",
        emoji: "🤓"
      }
    ]
  },
  "c1-g17": {
    id: "c1-g17",
    title: "Pronominaladverbien als Korrelate",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "The Placeholder 'Da-'",
        explanation: "Many verbs require a preposition (z.B. 'hoffen auf'). When the object of that preposition is an entire Nebensatz (dass-Satz or zu-Infinitiv), you MUST insert a placeholder (Korrelat) in the main clause.",
        examples: [
          { de: "Ich hoffe darauf, dass er bald kommt.", en: "I am hoping (for it) that he comes soon." },
          { de: "Es hängt davon ab, ob es regnet.", en: "It depends (on it) whether it rains." },
          { de: "Wir bestehen darauf, den Vertrag zu kündigen.", en: "We insist (on it) on terminating the contract." },
        ]
      },
      {
        type: "grammar",
        title: "When to drop the Korrelat",
        explanation: "In spoken language, the Korrelat is often dropped if the verb's connection to the dass-Satz is obvious. However, in C1 writing, omitting it is considered poor style.",
        examples: [
          { de: "Wir freuen uns (darüber), dass du da bist.", en: "We are happy that you are here." },
        ]
      }
    ]
  },
  "c1-g18": {
    id: "c1-g18",
    title: "Präpositional-Attribute",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Nouns Taking Prepositions",
        explanation: "Just as verbs take fixed prepositions (warten auf), nouns derived from those verbs also take the exact same prepositions. These are called Präpositional-Attribute.",
        examples: [
          { de: "Die Hoffnung auf (+ Akk)", en: "The hope for..." },
          { de: "Der Glaube an (+ Akk)", en: "The belief in..." },
          { de: "Die Freude über (+ Akk)", en: "The joy about... (past/present)" },
          { de: "Das Interesse an (+ Dat)", en: "The interest in..." },
        ]
      },
      {
        type: "grammar",
        title: "Usage in Nominal Style",
        explanation: "In C1 formal writing (Nominalstil), you will frequently chain these noun-preposition blocks together to form extremely dense sentences.",
        examples: [
          { de: "Das Interesse der Bevölkerung an der Lösung des Problems ist groß.", en: "The population's interest in the solution of the problem is great." },
        ]
      }
    ]
  },
  "c1-g19": {
    id: "c1-g19",
    title: "Advanced Indefinitpronomen",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Jegliche, Sämtliche, Manche",
        explanation: "Move beyond 'alle' and 'viele' to express absolute totality or specific vagueness.",
        examples: [
          { de: "sämtliche", en: "all / absolutely every single one (stronger than alle: Sämtliche Flüge wurden gestrichen.)" },
          { de: "jegliche(r/s)", en: "any / whatsoever (often used with negation or doubt: Mir fehlt jegliche Motivation.)" },
          { de: "manch ein(er)", en: "many a... (Manch einer würde jetzt aufgeben.)" },
        ]
      },
      {
        type: "grammar",
        title: "Irgend- Compounds",
        explanation: "Adding 'irgend-' creates a sense of complete randomness or indifference.",
        examples: [
          { de: "irgendwer", en: "anyone at all (Irgendwer muss es ja tun.)" },
          { de: "irgendwelche", en: "any random (Hast du irgendwelche Fragen?)" },
        ]
      }
    ]
  },
  "c1-g20": {
    id: "c1-g20",
    title: "Semantic Prefixes (ver-, zer-, ent-, er-)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Decoding Inseparable Prefixes",
        explanation: "At C1, you will encounter thousands of verbs. You can guess their meaning by understanding the semantic logic of inseparable prefixes.",
        examples: [
          { de: "zer- = destruction / breaking apart", en: "zerstören (destroy), zerreißen (tear apart), zerbrechen (break into pieces)" },
          { de: "ent- = removal / taking away", en: "entdecken (uncover/discover), entfernen (remove), entkräften (weaken)" },
        ]
      },
      {
        type: "grammar",
        title: "The versatile 'ver-' and 'er-'",
        explanation: "Some prefixes have multiple, very different meanings. 'ver-' can mean doing something wrongly. 'er-' can mean achieving a result, or a fatal end.",
        examples: [
          { de: "ver- = doing something wrongly", en: "sich verlaufen (get lost walking), sich vertippen (make a typo), sich verrechnen (miscalculate)" },
          { de: "er- = reaching a goal / fatal outcome", en: "erarbeiten (work to achieve), ertrinken (drown), erschießen (shoot to death)" },
        ]
      }
    ]
  }
};
