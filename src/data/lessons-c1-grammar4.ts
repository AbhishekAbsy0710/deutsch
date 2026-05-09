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
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Das ist ein nicht ",
        sentenceAfter: " Problem. (unterschätzen)",
        missingWord: "zu unterschätzendes",
        translation: "That is a problem not to be underestimated."
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
      },
      {
        type: "flashcard",
        cards: [
          { word: "angewiesen auf (+ Akk)", phonetic: "an-ge-vee-zen owf", meaning: "dependent on", example: { de: "Wir sind auf Spenden angewiesen.", en: "We are dependent on donations." } },
          { word: "maßgeblich für (+ Akk)", phonetic: "mahs-gayb-likh für", meaning: "decisive / instrumental for", example: { de: "Ihre Forschung war maßgeblich für den Durchbruch.", en: "Her research was instrumental to the breakthrough." } },
          { word: "bewandert in (+ Dat)", phonetic: "be-van-dert in", meaning: "versed / skilled in", example: { de: "Er ist in der klassischen Musik sehr bewandert.", en: "He is very well-versed in classical music." } },
          { word: "befugt zu (+ Dat)", phonetic: "be-fookt tsoo", meaning: "authorized to", example: { de: "Nur der Direktor ist zur Unterschrift befugt.", en: "Only the director is authorized to sign." } },
          { word: "zurückzuführen auf (+ Akk)", phonetic: "tsoo-rük-tsoo-fü-ren owf", meaning: "attributable to", example: { de: "Der Erfolg ist auf harte Arbeit zurückzuführen.", en: "The success is attributable to hard work." } }
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
      },
      {
        type: "quiz-mcq",
        question: "Which of the following is correct?",
        options: [
          "Weder er hat angerufen, noch er hat geschrieben.",
          "Weder hat er angerufen, noch hat er geschrieben.",
          "Weder hat er angerufen, noch er hat geschrieben.",
          "Weder er hat angerufen, noch hat er geschrieben."
        ],
        correctIndex: 1,
        explanation: "When starting with 'weder' and 'noch', the conjugated verb must immediately follow in position 2. So it's 'weder hat er' and 'noch hat er'."
      }
    ]
  }
};
