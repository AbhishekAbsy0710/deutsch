import { Lesson } from "./lessons";

export const lessonsC1Grammar6: Record<string, Lesson> = {
  "c1-g28": {
    id: "c1-g28",
    title: "Partizipialkonstruktionen (Satzwertige Partizipien)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Shortening Sentences with Participles",
        explanation: "At the absolute highest level of written German (C1/C2), entire subordinate clauses (started with nachdem, weil, or während) are compressed into a single participle phrase at the beginning of the sentence.",
        examples: [
          { de: "Nachdem er in Berlin angekommen war, ging er ins Hotel. -> In Berlin angekommen, ging er ins Hotel.", en: "Having arrived in Berlin, he went to the hotel." },
          { de: "Weil er vom Regen durchnässt war, fror er. -> Vom Regen durchnässt, fror er.", en: "Soaked by the rain, he was freezing." },
          { de: "Laut lachend verließ sie den Raum. (= Während sie laut lachte...)", en: "Laughing loudly, she left the room." },
        ]
      },
      {
        type: "grammar",
        title: "Rule of the Subject",
        explanation: "This construction is ONLY grammatically legal if the subject of the participle phrase and the subject of the main clause are exactly the same person or thing.",
        examples: [
          { de: "Erschöpft von der Arbeit, schlief er sofort ein.", en: "Exhausted from work, he immediately fell asleep." },
        ]
      }
    ]
  },
  "c1-g29": {
    id: "c1-g29",
    title: "Generalisierende Konzessivsätze (auch immer)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "The 'However/Whatever' Construction",
        explanation: "To express that a circumstance has no influence on the main action ('no matter what/how'), C1 German uses combinations of W-words with 'auch (immer)' or 'noch so'.",
        examples: [
          { de: "Wie schwer es auch sein mag, wir geben nicht auf.", en: "However hard it may be, we won't give up." },
          { de: "Was auch immer passiert, ich stehe zu dir.", en: "Whatever happens, I stand by you." },
          { de: "Woher sie auch kommen mag, sie ist hier willkommen.", en: "Wherever she may come from, she is welcome here." },
          { de: "Er kann noch so laut schreien, niemand hört ihn.", en: "No matter how loud he screams, nobody hears him." },
        ]
      }
    ]
  },
  "c1-g30": {
    id: "c1-g30",
    title: "Stilmittel (Rhetorical Devices)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Rhetoric for Essays and Analysis",
        explanation: "To pass C1 literature or essay tasks, you must be able to identify and use classical German stylistic devices.",
        examples: [
          { de: "Die Alliteration: 'Milch macht müde Männer munter.'", en: "Words starting with the same consonant." },
          { de: "Die Hyperbel (Übertreibung): 'Ich habe dir das schon tausendmal gesagt!'", en: "Exaggeration." },
          { de: "Der Euphemismus: 'Er ist von uns gegangen.' (statt: Er ist gestorben)", en: "A polite/mild expression for something harsh." },
          { de: "Die rhetorische Frage: 'Wer hätte das gedacht?'", en: "A question not meant to be answered." },
        ]
      }
    ]
  },
  "c1-g31": {
    id: "c1-g31",
    title: "Archaische Formen: Dativ-e & Fugen-s",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Das Fugen-s (The Glue 's')",
        explanation: "When creating compound nouns, German often inserts an 's' (or 'es', 'n', 'en', 'er') as linguistic glue. There is no strict logical rule; it's based on phonetic flow and history.",
        examples: [
          { de: "Die Liebe + der Brief = der Liebesbrief", en: "love letter" },
          { de: "Die Schönheit + das Ideal = das Schönheitsideal", en: "beauty ideal" },
          { de: "Die Geburt + der Tag = der Geburtstag", en: "birthday" },
        ]
      },
      {
        type: "cultural-note",
        title: "Der archaische Dativ-e",
        content: "In old German, masculine and neuter nouns took an '-e' in the Dative case. This is completely dead in modern German, EXCEPT in fixed idioms that survive to this day. You must recognize them at C1.",
        emoji: "⚔️"
      },
      {
        type: "grammar",
        title: "Dativ-e Examples",
        explanation: "These phrases are frozen in time and must be learned as fixed vocabulary chunks.",
        examples: [
          { de: "zu Hause / nach Hause", en: "at home / to home" },
          { de: "auf dem Lande", en: "in the countryside (poetic/formal)" },
          { de: "im Grunde genommen", en: "basically / fundamentally" },
          { de: "am Rande", en: "on the edge / by the way" },
        ]
      }
    ]
  }
};
