import { Lesson } from "./lessons";

export const lessonsB2Comm: Record<string, Lesson> = {
  "lb2_53": {
    id: "lb2_53",
    title: "Argumentation — These, Antithese, Synthese",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Building a B2-Level Argument",
        explanation: "German B2 argumentation follows the dialectical model: These (thesis — your position), Antithese (counter-argument — the opposing view), Synthese (synthesis — your balanced conclusion). This structure is expected in both Schreiben and Sprechen.",
        examples: [
          { de: "These: Meiner Meinung nach sollte Homeoffice zur Norm werden.", en: "Thesis: In my opinion, working from home should become the norm." },
          { de: "Antithese: Andererseits argumentieren Kritiker, dass die Teamarbeit leidet.", en: "Antithesis: On the other hand, critics argue that teamwork suffers." },
          { de: "Synthese: Insgesamt überwiegen die Vorteile, vorausgesetzt, klare Regeln gelten.", en: "Synthesis: Overall, the advantages outweigh, provided clear rules apply." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Ich vertrete die Ansicht, dass...", phonetic: "ikh fer-tray-te dee an-zikht das", meaning: "I hold the view that...", example: { de: "Ich vertrete die Ansicht, dass Bildung der Schlüssel ist.", en: "I hold the view that education is the key." } },
          { word: "Dagegen lässt sich einwenden, dass...", phonetic: "da-gay-gen lest zikh ayn-ven-den das", meaning: "Against this, one can object that...", example: { de: "Dagegen lässt sich einwenden, dass die Kosten hoch sind.", en: "Against this, one can object that the costs are high." } },
          { word: "Abwägen der Vor- und Nachteile", phonetic: "ap-veh-gen dair for unt nakh-ty-le", meaning: "weighing the pros and cons", example: { de: "Nach Abwägen der Vor- und Nachteile komme ich zu dem Schluss...", en: "After weighing the pros and cons, I come to the conclusion..." } },
          { word: "Alles in allem", phonetic: "al-les in al-lem", meaning: "all in all / all things considered", example: { de: "Alles in allem halte ich das für eine gute Idee.", en: "All in all, I consider that a good idea." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Nach sorgfältigem ",
        sentenceAfter: " der Argumente bin ich zu dem Schluss gekommen, dass die Vorteile überwiegen.",
        missingWord: "Abwägen",
        translation: "After carefully weighing the arguments, I have come to the conclusion that the advantages outweigh."
      }
    ]
  },
  "lb2_54": {
    id: "lb2_54",
    title: "Debating — Einwände & Gegenargumente",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Politely Disagreeing & Raising Objections",
        explanation: "At B2, you must disagree constructively: acknowledge the other's point, then present your counter-argument. Direct disagreement ('Das stimmt nicht!') is considered rude. Use hedging and diplomatic language.",
        examples: [
          { de: "Schwach: Das stimmt nicht!", en: "Weak: That's not true! (too direct)" },
          { de: "B2-Level: Ich verstehe Ihren Punkt, allerdings sehe ich das anders.", en: "B2: I understand your point; however, I see it differently." },
          { de: "B2-Level: Da muss ich Ihnen leider widersprechen, denn...", en: "B2: I'm afraid I have to disagree, because..." },
          { de: "B2-Level: Das mag stimmen, dennoch sollte man bedenken, dass...", en: "B2: That may be true; nevertheless, one should consider that..." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Ich stimme Ihnen grundsätzlich zu, aber...", phonetic: "ikh shtim-me ee-nen groont-sets-likh tsoo ah-ber", meaning: "I fundamentally agree with you, but...", example: { de: "Ich stimme Ihnen grundsätzlich zu, aber man sollte auch bedenken...", en: "I fundamentally agree, but one should also consider..." } },
          { word: "Das ist ein berechtigter Einwand.", phonetic: "das ist ayn be-rekh-tikh-ter ayn-vant", meaning: "That's a valid objection.", example: { de: "Das ist ein berechtigter Einwand. Allerdings...", en: "That's a valid objection. However..." } },
          { word: "Dem kann ich nicht zustimmen, weil...", phonetic: "dem kan ikh nikht tsoo-shtim-men vayl", meaning: "I can't agree with that because...", example: { de: "Dem kann ich nicht zustimmen, weil die Daten etwas anderes zeigen.", en: "I can't agree because the data shows something different." } },
          { word: "Lassen Sie mich einen anderen Aspekt beleuchten.", phonetic: "las-sen zee mikh ay-nen an-de-ren as-pekt be-loyh-ten", meaning: "Let me shed light on a different aspect.", example: { de: "Lassen Sie mich einen anderen Aspekt beleuchten.", en: "Let me shed light on a different aspect." } }
        ]
      }
    ]
  },
  "lb2_55": {
    id: "lb2_55",
    title: "Presenting — Structured Argumentation for Sprechen",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "B2 Presentation Structure",
        explanation: "A well-structured B2 presentation has 5 parts: (1) Greeting + topic, (2) Overview of structure, (3) Arguments with examples, (4) Personal experience, (5) Conclusion + open question. Use signposting phrases to guide the listener.",
        examples: [
          { de: "1. Ich möchte heute über das Thema ... sprechen.", en: "Today I'd like to talk about the topic of..." },
          { de: "2. Ich werde zunächst ... erläutern, dann ... diskutieren und abschließend ...", en: "First I will explain..., then discuss..., and finally..." },
          { de: "3. Ein wichtiges Argument ist... / Dafür spricht, dass...", en: "An important argument is... / In favor of this..." },
          { de: "4. Aus eigener Erfahrung kann ich sagen, dass...", en: "From my own experience, I can say that..." },
          { de: "5. Abschließend möchte ich betonen, dass...", en: "In conclusion, I would like to emphasize that..." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Ich werde mein Thema in drei Punkte gliedern.", phonetic: "ikh ver-de myn tay-ma in dry poonk-te glee-dern", meaning: "I will structure my topic in three points.", example: { de: "Ich werde mein Thema in drei Punkte gliedern.", en: "I will structure my topic in three points." } },
          { word: "Kommen wir nun zum nächsten Punkt.", phonetic: "ko-men veer noon tsum nekh-sten poonkt", meaning: "Let's now move to the next point.", example: { de: "Kommen wir nun zum nächsten Punkt: die Nachteile.", en: "Let's now move to the next point: the disadvantages." } },
          { word: "Aus eigener Erfahrung...", phonetic: "ows ay-ge-ner er-fah-roong", meaning: "From my own experience...", example: { de: "Aus eigener Erfahrung weiß ich, dass Sport gegen Stress hilft.", en: "From my own experience, I know that sport helps against stress." } },
          { word: "Haben Sie / Hast du dazu noch Fragen?", phonetic: "hah-ben zee da-tsoo nokh frah-gen", meaning: "Do you have any questions about that?", example: { de: "Haben Sie dazu noch Fragen?", en: "Do you have any further questions?" } }
        ]
      }
    ]
  },
  "lb2_56": {
    id: "lb2_56",
    title: "Summarizing — Zusammenfassen & Paraphrasieren",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "How to Summarize Complex Ideas at B2",
        explanation: "Summarizing is a core B2 skill — needed in all four exam modules. Key techniques: (1) Identify the Kernaussage (core message), (2) Use reporting verbs (der Autor betont, die Studie zeigt), (3) Paraphrase — never copy exact words, (4) Keep it shorter than the original.",
        examples: [
          { de: "Der Artikel handelt von... / befasst sich mit...", en: "The article is about... / deals with..." },
          { de: "Die Autorin vertritt die These, dass...", en: "The author argues the thesis that..." },
          { de: "Zusammenfassend geht es darum, dass...", en: "In summary, it's about the fact that..." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "sich befassen mit + Dat", phonetic: "zikh be-fas-sen mit", meaning: "to deal with / to be concerned with", example: { de: "Der Text befasst sich mit dem Thema Nachhaltigkeit.", en: "The text deals with the topic of sustainability." } },
          { word: "die These aufstellen", phonetic: "dee tay-ze owf-shtel-len", meaning: "to put forward a thesis", example: { de: "Der Autor stellt die These auf, dass...", en: "The author puts forward the thesis that..." } },
          { word: "mit anderen Worten", phonetic: "mit an-de-ren vor-ten", meaning: "in other words", example: { de: "Mit anderen Worten: Die Situation ist ernst.", en: "In other words: The situation is serious." } },
          { word: "im Wesentlichen", phonetic: "im ve-zent-li-khen", meaning: "essentially / in essence", example: { de: "Im Wesentlichen geht es um die Frage...", en: "Essentially, it's about the question..." } }
        ]
      }
    ]
  },
  "lb2_57": {
    id: "lb2_57",
    title: "Formal Register — Geschäftssprache & Amtsdeutsch",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Switching Between Registers",
        explanation: "B2 requires switching between informal, formal, and official/administrative (Amtsdeutsch) register. Official German is characterized by: passive voice, nominalization, Genitiv, long compound nouns, and impersonal constructions.",
        examples: [
          { de: "Informal: Ich muss das Formular ausfüllen.", en: "I need to fill out the form." },
          { de: "Formal: Das Formular ist ordnungsgemäß auszufüllen.", en: "The form is to be properly filled out." },
          { de: "Amtsdeutsch: Die Antragsunterlagen sind fristgerecht einzureichen.", en: "The application documents are to be submitted by the deadline." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "ordnungsgemäß", phonetic: "ord-noonks-ge-mehs", meaning: "properly / in due order", example: { de: "Die Unterlagen wurden ordnungsgemäß eingereicht.", en: "The documents were properly submitted." } },
          { word: "fristgerecht", phonetic: "frist-ge-rekht", meaning: "within the deadline / on time", example: { de: "Bitte reichen Sie die Unterlagen fristgerecht ein.", en: "Please submit the documents within the deadline." } },
          { word: "in Kenntnis setzen", phonetic: "in kent-nis zet-sen", meaning: "to inform / to notify", example: { de: "Wir setzen Sie hiermit in Kenntnis, dass...", en: "We hereby notify you that..." } },
          { word: "Bezug nehmen auf + Akk", phonetic: "be-tsook nay-men owf", meaning: "to refer to", example: { de: "Ich nehme Bezug auf Ihr Schreiben vom 15. März.", en: "I refer to your letter of March 15." } },
          { word: "zur Verfügung stellen", phonetic: "tsoor fer-fü-goong shtel-len", meaning: "to provide / to make available", example: { de: "Die Informationen werden Ihnen zur Verfügung gestellt.", en: "The information will be made available to you." } }
        ]
      }
    ]
  },
  "lb2_58": {
    id: "lb2_58",
    title: "Expressing Emotions Precisely — Beyond 'gut' und 'schlecht'",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Emotional Vocabulary for Nuanced Expression",
        explanation: "At B2, you can't just say 'Das finde ich gut/schlecht.' You need precise emotional vocabulary to express surprise, disappointment, enthusiasm, indifference, concern, and outrage.",
        examples: [
          { de: "Instead of 'gut': begeistert, fasziniert, erfreut, zuversichtlich", en: "enthusiastic, fascinated, pleased, confident" },
          { de: "Instead of 'schlecht': enttäuscht, empört, besorgt, frustriert", en: "disappointed, outraged, concerned, frustrated" },
          { de: "Nuance: 'Ich bin etwas besorgt' vs. 'Ich bin zutiefst beunruhigt'", en: "Slight worry vs. deep concern" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "begeistert", phonetic: "be-gy-stert", meaning: "enthusiastic / thrilled", example: { de: "Ich bin begeistert von dieser Idee!", en: "I'm thrilled about this idea!" } },
          { word: "enttäuscht", phonetic: "ent-toysht", meaning: "disappointed", example: { de: "Ich bin zutiefst enttäuscht.", en: "I am deeply disappointed." } },
          { word: "empört", phonetic: "em-pört", meaning: "outraged / indignant", example: { de: "Die Bürger waren empört über die Entscheidung.", en: "The citizens were outraged by the decision." } },
          { word: "gleichgültig", phonetic: "glaykh-gül-tikh", meaning: "indifferent / apathetic", example: { de: "Er war der Sache gegenüber gleichgültig.", en: "He was indifferent to the matter." } },
          { word: "zuversichtlich", phonetic: "tsoo-fer-zikht-likh", meaning: "confident / optimistic", example: { de: "Ich bin zuversichtlich, dass wir das schaffen.", en: "I'm confident that we can manage it." } },
          { word: "beunruhigt", phonetic: "be-oon-roo-ikht", meaning: "worried / concerned", example: { de: "Die Nachricht hat mich beunruhigt.", en: "The news has worried me." } }
        ]
      }
    ]
  },
  "lb2_59": {
    id: "lb2_59",
    title: "Negotiating — Kompromiss, Zugeständnis & Bedingung",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Negotiation Language for Professional Contexts",
        explanation: "B2 negotiation language goes beyond basic suggestions. You need phrases for: making concessions, setting conditions, finding middle ground, and closing agreements.",
        examples: [
          { de: "Zugeständnis: Ich wäre bereit, Ihnen entgegenzukommen, wenn...", en: "Concession: I would be willing to meet you halfway if..." },
          { de: "Bedingung: Unter der Voraussetzung, dass..., könnten wir...", en: "Condition: On the condition that..., we could..." },
          { de: "Kompromiss: Könnten wir uns in der Mitte treffen?", en: "Compromise: Could we meet in the middle?" },
          { de: "Abschluss: Dann sind wir uns einig. Ich fasse zusammen: ...", en: "Closing: Then we agree. Let me summarize: ..." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "entgegenkommen + Dat", phonetic: "ent-gay-gen-ko-men", meaning: "to accommodate / to meet halfway", example: { de: "Wir kommen Ihnen beim Preis entgegen.", en: "We'll accommodate you on the price." } },
          { word: "das Zugeständnis", phonetic: "tsoo-ge-shtent-nis", meaning: "concession", example: { de: "Wir sind zu einem Zugeständnis bereit.", en: "We are prepared to make a concession." } },
          { word: "verhandeln über + Akk", phonetic: "fer-han-deln ü-ber", meaning: "to negotiate about", example: { de: "Wir verhandeln über die Konditionen.", en: "We are negotiating the terms." } },
          { word: "sich einigen auf + Akk", phonetic: "zikh ay-ni-gen owf", meaning: "to agree on", example: { de: "Wir haben uns auf einen Termin geeinigt.", en: "We agreed on a date." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Ich wäre bereit, Ihnen beim Liefertermin entgegenzukommen, unter der Voraussetzung, dass wir uns beim Preis einigen können.",
        translation: "I would be willing to accommodate you on the delivery date, on the condition that we can agree on the price.",
        phonetic: "ikh veh-re be-ryt ee-nen baym lee-fer-ter-meen ent-gay-gen-tsoo-ko-men oon-ter dair for-ows-zet-tsoong das veer uns baym prys ay-ni-gen kö-nen",
        tip: "Combines concession + condition — exactly what B2 examiners look for."
      }
    ]
  }
};
