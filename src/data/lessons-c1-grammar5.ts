import { Lesson } from "./lessons";

export const lessonsC1Grammar5: Record<string, Lesson> = {
  "c1-g24": {
    id: "c1-g24",
    title: "Konditionalsätze ohne 'wenn'",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Dropping 'wenn'",
        explanation: "In formal writing and high-level speech, you can drop 'wenn' in conditional sentences. When you do this, the verb of the subordinate clause moves to Position 1.",
        examples: [
          { de: "Wenn ich Zeit hätte, würde ich kommen. -> Hätte ich Zeit, würde ich kommen.", en: "If I had time, I would come." },
          { de: "Wenn das Wetter besser wäre, gingen wir spazieren. -> Wäre das Wetter besser, gingen wir spazieren.", en: "If the weather were better, we would go for a walk." },
          { de: "Wenn Sie Fragen haben, melden Sie sich. -> Haben Sie Fragen, melden Sie sich.", en: "If you have questions, get in touch." },
        ]
      },
      {
        type: "grammar",
        title: "Stylistic Note",
        explanation: "This structure sounds extremely elegant and native-like. It is common in business correspondence and literature.",
        examples: [
          { de: "Sollten Sie weitere Informationen benötigen, stehen wir Ihnen zur Verfügung.", en: "Should you require further information, we are at your disposal. (Very common formal email phrase)" },
        ]
      }
    ]
  },
  "c1-g25": {
    id: "c1-g25",
    title: "Irreale Vergleichssätze (als / als ob)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Als ob / Als wenn (As if)",
        explanation: "To compare something unreal, use 'als ob' or 'als wenn' with Konjunktiv II. The verb goes to the END of the clause.",
        examples: [
          { de: "Er tut so, als ob er der Chef wäre.", en: "He acts as if he were the boss." },
          { de: "Es sieht so aus, als wenn es gleich regnen würde.", en: "It looks as if it's going to rain soon." },
        ]
      },
      {
        type: "grammar",
        title: "Als (As if - Advanced Word Order)",
        explanation: "You can drop 'ob' and just use 'als'. But be careful: when you drop 'ob', the verb moves to position 2, immediately after 'als'.",
        examples: [
          { de: "Er tut so, als wäre er der Chef.", en: "He acts as if he were the boss." },
          { de: "Es sieht so aus, als würde es gleich regnen.", en: "It looks as if it's going to rain soon." },
        ]
      }
    ]
  },
  "c1-g26": {
    id: "c1-g26",
    title: "Passiversatz: 'sein zu' + Infinitiv",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "The 'sein zu' Construction",
        explanation: "Along with 'sich lassen' and '-bar/-lich', German uses 'sein + zu + Infinitiv' to replace the passive. It expresses possibility or necessity.",
        examples: [
          { de: "Das Problem ist schwer zu lösen.", en: "= Das Problem kann schwer gelöst werden. (Possibility: The problem is hard to solve.)" },
          { de: "Die Rechnung ist bis Freitag zu bezahlen.", en: "= Die Rechnung muss bis Freitag bezahlt werden. (Necessity: The bill must be paid by Friday.)" },
        ]
      },
      {
        type: "cultural-note",
        title: "Authority in Text",
        content: "'Die Rechnung ist zu bezahlen' sounds much more official and detached than 'Sie müssen die Rechnung bezahlen'. You will see this constantly in contracts and official letters.",
        emoji: "📜"
      }
    ]
  },
  "c1-g27": {
    id: "c1-g27",
    title: "Advanced Rules for 'es'",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Es als Platzhalter (Placeholder)",
        explanation: "When 'es' is just a placeholder in Position 1 to delay the real subject, it MUST be dropped if anything else takes Position 1.",
        examples: [
          { de: "Es kommen viele Gäste. -> Viele Gäste kommen. (NOT: Viele Gäste kommen es.)", en: "Many guests are coming." },
          { de: "Es wurde gestern viel getanzt. -> Gestern wurde viel getanzt.", en: "There was a lot of dancing yesterday." },
        ]
      },
      {
        type: "grammar",
        title: "Obligatorisches 'es' (Mandatory)",
        explanation: "When 'es' is the actual grammatical subject (weather, impersonal expressions), it can NEVER be dropped, even if it moves out of Position 1.",
        examples: [
          { de: "Es regnet heute. -> Heute regnet es. (NOT: Heute regnet.)", en: "It is raining today." },
          { de: "Es geht mir gut. -> Mir geht es gut.", en: "I am doing well." },
          { de: "Es gibt ein Problem. -> Hier gibt es ein Problem.", en: "There is a problem here." },
        ]
      }
    ]
  }
};
