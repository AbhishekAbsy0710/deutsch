import { Lesson } from "./lessons";

export const lessonsC1Grammar4: Record<string, Lesson> = {
  "c1-g21": {
    id: "c1-g21",
    title: "Das Gerundivum (zu + Partizip I)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "The Passive Participle Attribute",
        explanation: "The Gerundivum is a highly formal structure used to express necessity or possibility in the passive voice, packed into an adjective. It is formed with 'zu' + Partizip I + Adjective Ending.",
        examples: [
          { de: "das zu lösende Problem", en: "= das Problem, das gelöst werden muss (the problem to be solved)" },
          { de: "die nicht zu unterschätzende Gefahr", en: "= die Gefahr, die nicht unterschätzt werden darf (the danger not to be underestimated)" },
          { de: "ein schwer zu verstehender Text", en: "= ein Text, der schwer zu verstehen ist (a hard-to-understand text)" },
        ]
      },
      {
        type: "grammar",
        title: "Usage in Academic Texts",
        explanation: "This structure is pervasive in academic and legal texts to make sentences extremely compact.",
        examples: [
          { de: "Wir widmen uns nun der noch zu klärenden Frage.", en: "We now dedicate ourselves to the question that still needs to be clarified." },
        ]
      }
    ]
  },
  "c1-g22": {
    id: "c1-g22",
    title: "Adjektive mit Präpositionen (Advanced)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "High-Level Prepositional Adjectives",
        explanation: "At B1/B2 you learned 'stolz auf' or 'interessiert an'. C1 requires much more sophisticated adjective-preposition combinations.",
        examples: [
          { de: "angewiesen auf (+ Akk)", en: "dependent on (Wir sind auf Ihre Hilfe angewiesen.)" },
          { de: "maßgeblich für (+ Akk)", en: "decisive/instrumental for (Das war maßgeblich für den Erfolg.)" },
          { de: "bewandert in (+ Dat)", en: "versed/skilled in (Er ist in der Literatur sehr bewandert.)" },
          { de: "befugt zu (+ Dat)", en: "authorized to (Sie sind nicht dazu befugt.)" },
          { de: "zurückzuführen auf (+ Akk)", en: "attributable to (Der Fehler ist auf mangelnde Planung zurückzuführen.)" },
        ]
      }
    ]
  },
  "c1-g23": {
    id: "c1-g23",
    title: "Zweiteilige Konnektoren: Word Order Inversion",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Advanced Inversion Rules",
        explanation: "Two-part connectors (sowohl...als auch, weder...noch) were introduced in B2, but C1 tests your ability to correctly invert the subject and verb when placing the connector at position 1.",
        examples: [
          { de: "Weder hat er sich entschuldigt, noch hat er den Schaden bezahlt.", en: "Neither did he apologize, nor did he pay for the damage. (Notice: Verb immediately follows 'weder' and 'noch'.)" },
          { de: "Zwar ist das Konzept gut, aber an der Umsetzung mangelt es.", en: "Admittedly the concept is good, but it is lacking in execution." },
          { de: "Je mehr wir lernen, desto besser verstehen wir die Welt.", en: "The more we learn, the better we understand the world. (Je + Nebensatz, desto + Hauptsatz mit Inversion)" },
        ]
      }
    ]
  }
};
