import { Lesson } from "./lessons";

export const lessonsB1Grammar2: Record<string, Lesson> = {
  "lb1_09": {
    id: "lb1_09",
    title: "Temporal Conjunctions I (nachdem, bevor, während)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Sequencing Events in Time",
        explanation: "These conjunctions describe the TIME relationship between two events. They create subordinate clauses (verb at end). The key trick: 'nachdem' requires a TENSE SHIFT — the subordinate clause must be one tense FURTHER in the past.",
        examples: [
          { de: "Nachdem ich gegessen hatte, ging ich spazieren.", en: "After I had eaten, I went for a walk. (Plusquamperfekt → Präteritum)" },
          { de: "Nachdem er angekommen ist, hat er angerufen.", en: "After he arrived, he called. (Perfekt → Perfekt/Präsens)" },
          { de: "Bevor ich schlafe, lese ich ein Buch.", en: "Before I sleep, I read a book." },
          { de: "Während ich kochte, hörte er Musik.", en: "While I was cooking, he listened to music." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "nachdem", phonetic: "nakh-daim", meaning: "after (+ tense shift!)", example: { de: "Nachdem sie gefrühstückt hatte, fuhr sie los.", en: "After she had breakfast, she left." } },
          { word: "bevor / ehe", phonetic: "be-for / ay-e", meaning: "before", example: { de: "Bevor du gehst, ruf mich an.", en: "Before you leave, call me." } },
          { word: "während", phonetic: "vay-rent", meaning: "while / during", example: { de: "Während ich arbeite, darf niemand stören.", en: "While I work, nobody may disturb." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Nachdem er die Prüfung ____ ____, feierte er.' Fill the blanks.",
        options: ["bestand hat", "bestanden hatte", "bestehen wird", "bestanden hat"],
        correctIndex: 1,
        explanation: "'nachdem' requires a tense shift. Main clause is Präteritum (feierte), so subordinate must be Plusquamperfekt (bestanden hatte)."
      }
    ]
  },
  "lb1_10": {
    id: "lb1_10",
    title: "Temporal Conjunctions II (seitdem, bis, sobald)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Since, Until, As Soon As",
        explanation: "More time conjunctions for B1. These express duration, endpoints, and immediate sequences.",
        examples: [
          { de: "Seitdem ich in Deutschland lebe, spreche ich besser Deutsch.", en: "Since I've been living in Germany, I speak better German." },
          { de: "Warte, bis ich fertig bin!", en: "Wait until I'm finished!" },
          { de: "Sobald er kommt, fangen wir an.", en: "As soon as he comes, we'll start." },
          { de: "Solange du hier bist, bin ich glücklich.", en: "As long as you're here, I'm happy." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "seitdem / seit", phonetic: "zyt-daim", meaning: "since (time)", example: { de: "Seit ich ihn kenne, bin ich glücklich.", en: "Since I've known him, I'm happy." } },
          { word: "bis", phonetic: "bis", meaning: "until", example: { de: "Bleib hier, bis der Regen aufhört.", en: "Stay here until the rain stops." } },
          { word: "sobald", phonetic: "zo-balt", meaning: "as soon as", example: { de: "Sobald ich Zeit habe, rufe ich an.", en: "As soon as I have time, I'll call." } },
          { word: "solange", phonetic: "zo-lang-e", meaning: "as long as", example: { de: "Solange du lernst, darfst du bleiben.", en: "As long as you study, you may stay." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "",
        sentenceAfter: " ich das Ergebnis bekomme, sage ich dir Bescheid.",
        missingWord: "Sobald",
        translation: "As soon as I get the result, I'll let you know."
      }
    ]
  },
  "lb1_11": {
    id: "lb1_11",
    title: "Causal Conjunctions (da, weil, nämlich, deshalb)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Four Ways to Say 'Because/Therefore'",
        explanation: "At A2 you learned 'weil' and 'denn'. At B1, add 'da' (since/because — more written/formal) and 'nämlich' (you see/namely — explains reason AFTER the fact). Plus 'deshalb/deswegen' for results.",
        examples: [
          { de: "Da es regnete, blieben wir zu Hause. (= da ≈ since)", en: "'da' = since/because (more formal, often at start)" },
          { de: "Weil es regnete, blieben wir zu Hause.", en: "'weil' = because (neutral)" },
          { de: "Wir blieben zu Hause. Es regnete nämlich.", en: "'nämlich' goes INSIDE the main clause, after verb" },
          { de: "Es regnete. Deshalb blieben wir zu Hause.", en: "'deshalb' = therefore (main clause, verb position 2)" }
        ]
      },
      {
        type: "grammar",
        title: "Word Order Differences",
        explanation: "'weil' and 'da' → subordinate clause (verb at END). 'denn' → main clause (normal V2 word order). 'nämlich' → adverb INSIDE main clause. 'deshalb/deswegen/darum/daher' → Position 1, verb immediately after.",
        examples: [
          { de: "..., weil ich müde BIN. (verb at end)", en: "subordinating conjunction" },
          { de: "..., denn ich BIN müde. (normal order)", en: "coordinating conjunction" },
          { de: "Ich BIN nämlich müde. (nämlich inside clause)", en: "adverb — not at start!" },
          { de: "Deshalb BIN ich müde. (verb right after)", en: "adverb in Position 1" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Where does 'nämlich' go in a sentence?",
        options: ["At the beginning", "At the end", "After the conjugated verb, inside the clause", "Before 'weil'"],
        correctIndex: 2,
        explanation: "'Nämlich' is an adverb that goes AFTER the verb, INSIDE the main clause. NEVER at the start! 'Er ist nämlich krank.' ✅ 'Nämlich ist er krank.' ❌"
      }
    ]
  },
  "lb1_12": {
    id: "lb1_12",
    title: "Concessive Conjunctions (obwohl, trotzdem, dennoch)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Saying 'Although' and 'Nevertheless'",
        explanation: "'Obwohl' (although) creates a subordinate clause — verb at end. 'Trotzdem' and 'dennoch' (nevertheless) are adverbs in main clauses — they take Position 1 with verb in Position 2.",
        examples: [
          { de: "Obwohl es regnet, gehe ich spazieren.", en: "Although it's raining, I go for a walk. (verb at end)" },
          { de: "Es regnet. Trotzdem gehe ich spazieren.", en: "It's raining. Nevertheless, I go for a walk. (V2)" },
          { de: "Er ist müde, dennoch arbeitet er weiter.", en: "He's tired, nevertheless he keeps working." }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "",
        sentenceAfter: " ich krank bin, gehe ich zur Arbeit.",
        missingWord: "Obwohl",
        translation: "Although I'm sick, I go to work."
      }
    ]
  },
  "lb1_13": {
    id: "lb1_13",
    title: "Conditional Clauses (wenn, falls, sonst)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Real vs. Unreal Conditions",
        explanation: "At B1, you distinguish between REAL conditions (if X happens → Y happens, Indikativ) and UNREAL conditions (if X were to happen → Y would happen, Konjunktiv II).",
        examples: [
          { de: "REAL: Wenn es morgen regnet, bleibe ich zu Hause.", en: "If it rains tomorrow, I'll stay home. (possible)" },
          { de: "UNREAL: Wenn ich reich wäre, würde ich reisen.", en: "If I were rich, I would travel. (not real)" },
          { de: "REAL: Falls du Hilfe brauchst, ruf mich an.", en: "In case you need help, call me." },
          { de: "Beeil dich, sonst verpasst du den Zug!", en: "Hurry, otherwise you'll miss the train!" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "wenn", phonetic: "ven", meaning: "if / whenever", example: { de: "Wenn du willst, können wir gehen.", en: "If you want, we can go." } },
          { word: "falls", phonetic: "fals", meaning: "in case / if (less likely)", example: { de: "Falls es Probleme gibt, ruf an.", en: "In case there are problems, call." } },
          { word: "sonst / andernfalls", phonetic: "zonst", meaning: "otherwise / or else", example: { de: "Lern Deutsch, sonst verstehst du nichts!", en: "Learn German, otherwise you won't understand anything!" } },
          { word: "vorausgesetzt, dass", phonetic: "for-ows-ge-zetst", meaning: "provided that", example: { de: "Vorausgesetzt, dass du kommst, machen wir eine Party.", en: "Provided that you come, we'll have a party." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which expresses an UNREAL condition?",
        options: [
          "Wenn es regnet, bleibe ich hier.",
          "Falls du kommst, bring Kuchen mit.",
          "Wenn ich fliegen könnte, würde ich nach Japan reisen.",
          "Sonst verpassen wir den Zug."
        ],
        correctIndex: 2,
        explanation: "Konjunktiv II ('könnte', 'würde') signals an unreal/hypothetical condition. Flying is not possible, so it's unreal."
      }
    ]
  },
  "lb1_14": {
    id: "lb1_14",
    title: "Consecutive Clauses (so...dass, sodass)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Result Clauses: 'so...that'",
        explanation: "'So...dass' and 'sodass' express a RESULT or consequence. 'So' intensifies an adjective/adverb, 'dass' introduces the result clause.",
        examples: [
          { de: "Er war so müde, dass er sofort einschlief.", en: "He was so tired that he fell asleep immediately." },
          { de: "Es regnete stark, sodass wir nicht rausgehen konnten.", en: "It rained heavily, so that we couldn't go out." },
          { de: "Sie sprach so leise, dass niemand sie hörte.", en: "She spoke so quietly that nobody heard her." }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Der Film war so langweilig, ",
        sentenceAfter: " ich eingeschlafen bin.",
        missingWord: "dass",
        translation: "The movie was so boring that I fell asleep."
      }
    ]
  },
  "lb1_15": {
    id: "lb1_15",
    title: "ohne...zu / (an)statt...zu (Without / Instead of doing)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Infinitive Clauses with Prepositions",
        explanation: "These create infinitive clauses expressing absence of an action (ohne...zu) or an alternative action (anstatt/statt...zu). No subject in the infinitive clause — it shares the subject of the main clause.",
        examples: [
          { de: "Er ging, ohne ein Wort zu sagen.", en: "He left without saying a word." },
          { de: "Sie lernte, ohne Pausen zu machen.", en: "She studied without taking breaks." },
          { de: "Anstatt zu lernen, spielte er Videospiele.", en: "Instead of studying, he played video games." },
          { de: "Statt zu arbeiten, liegt er auf dem Sofa.", en: "Instead of working, he lies on the sofa." }
        ]
      },
      {
        type: "grammar",
        title: "Compare: ohne...zu vs. ohne dass",
        explanation: "If the two clauses have DIFFERENT subjects, you MUST use 'ohne dass' (with a full clause) instead of 'ohne...zu'.",
        examples: [
          { de: "Same subject: Er ging, ohne zu bezahlen. ✅", en: "He left without paying." },
          { de: "Different subjects: Er ging, ohne dass sie es bemerkte. ✅", en: "He left without her noticing." },
          { de: "Different subjects: Er ging, ohne sie zu bemerken. ❌ (ambiguous)", en: "Wrong — subjects must match for ohne...zu!" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'She left without saying goodbye.' →",
        options: [
          "Sie ging, ohne Tschüss zu sagen.",
          "Sie ging, ohne dass sie Tschüss sagt.",
          "Sie ging, ohne Tschüss sagen.",
          "Sie ging, dass sie nicht Tschüss sagte."
        ],
        correctIndex: 0,
        explanation: "Same subject (sie) → use 'ohne...zu + Infinitiv'. 'ohne Tschüss zu sagen' is correct."
      }
    ]
  },
  "lb1_16": {
    id: "lb1_16",
    title: "Double Infinitive with Modals (Perfekt of Modals)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "The Most Complex Structure in German",
        explanation: "When a modal verb is used with another verb in Perfekt, the modal stays as an INFINITIVE (not Partizip II!). This creates a 'double infinitive' at the end: ...habe + [Infinitiv] + [Modal-Infinitiv].",
        examples: [
          { de: "Ich habe das machen müssen.", en: "I had to do that. (NOT: Ich habe das machen gemusst.)" },
          { de: "Sie hat nicht kommen können.", en: "She wasn't able to come." },
          { de: "Er hat gehen wollen.", en: "He wanted to go." },
          { de: "Wir haben das nicht sagen dürfen.", en: "We weren't allowed to say that." }
        ]
      },
      {
        type: "grammar",
        title: "In Subordinate Clauses: Verb Order Flip",
        explanation: "In a subordinate clause with double infinitive, the auxiliary (hat/hatte) moves BEFORE the double infinitive, not to the end!",
        examples: [
          { de: "Normal: ..., dass er das machen musste.", en: "Simple past modal in subordinate clause" },
          { de: "Double inf: ..., dass er das HAT machen müssen.", en: "hat BEFORE the double infinitive!" },
          { de: "NOT: ..., dass er das machen müssen hat. ❌", en: "WRONG order!" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Ich habe das nicht machen ____.' — Which form of 'können'?",
        options: ["gekonnt", "können", "konnte", "könnte"],
        correctIndex: 1,
        explanation: "With another verb, modal verbs use the INFINITIVE form in Perfekt, not Partizip II. So it's 'habe machen KÖNNEN' (double infinitive), not 'habe machen gekonnt'."
      }
    ]
  }
};
