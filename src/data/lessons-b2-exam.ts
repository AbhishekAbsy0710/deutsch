import { Lesson } from "./lessons";

export const lessonsB2Exam: Record<string, Lesson> = {
  "lb2_45": {
    id: "lb2_45",
    title: "B2 Lesen Teil 1 — Matching Headings to Paragraphs",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Goethe B2 Lesen: Teil 1 Strategy",
        explanation: "In Lesen Teil 1, you get a long text with 4 paragraphs and must match 7 headings to them (3 are distractors). Strategy: (1) Read ALL headings first and underline key words. (2) Read each paragraph and identify its MAIN IDEA. (3) Watch for synonyms — headings rarely use the exact same words as the text. (4) Check distractors — they may be partly true but miss the main point.",
        examples: [
          { de: "Text uses: 'Die Nachfrage nach Bio-Produkten steigt.'", en: "The text says: Demand for organic products is rising." },
          { de: "Correct heading: 'Immer mehr Verbraucher greifen zu Bio.'", en: "Heading uses synonyms: More and more consumers choose organic." },
          { de: "Distractor: 'Bio-Produkte sind teurer.' — True, but not the MAIN point.", en: "The distractor is factually correct but doesn't capture the paragraph's focus." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Überschrift", phonetic: "ü-ber-shrift", meaning: "heading / title", example: { de: "Ordnen Sie die Überschriften den Abschnitten zu.", en: "Assign the headings to the paragraphs." } },
          { word: "der Abschnitt", phonetic: "ap-shnit", meaning: "paragraph / section", example: { de: "Lesen Sie jeden Abschnitt sorgfältig.", en: "Read each paragraph carefully." } },
          { word: "zuordnen", phonetic: "tsoo-ord-nen", meaning: "to assign / to match", example: { de: "Ordnen Sie die Überschriften zu.", en: "Match the headings." } },
          { word: "der Hauptgedanke", phonetic: "howpt-ge-dan-ke", meaning: "main idea", example: { de: "Was ist der Hauptgedanke dieses Abschnitts?", en: "What is the main idea of this paragraph?" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "In B2 Lesen Teil 1, what is the biggest trap?",
        options: ["Headings that are completely wrong", "Headings that are partially true but don't capture the main idea", "Headings that are too short", "Headings written in informal German"],
        correctIndex: 1,
        explanation: "Distractors are designed to be partially true — they mention details from the text but miss the central point. Always ask: 'Does this heading capture the MAIN idea?'"
      }
    ]
  },
  "lb2_46": {
    id: "lb2_46",
    title: "B2 Lesen Teil 2 — Multiple-Choice on Complex Texts",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Goethe B2 Lesen: Teil 2 Strategy",
        explanation: "In Teil 2, you read a complex argumentative text (article, commentary, essay) and answer 5 multiple-choice questions. Strategy: (1) Read questions FIRST. (2) Locate the relevant text passage for each question. (3) The correct answer is often a PARAPHRASE, not a word-for-word match. (4) If two answers seem correct, the one that is MORE PRECISE wins.",
        examples: [
          { de: "Question: Was kritisiert der Autor?", en: "What does the author criticize?" },
          { de: "Text: 'Die Regierung hat es versäumt, rechtzeitig zu handeln.'", en: "The government failed to act in time." },
          { de: "Answer: 'Der Autor kritisiert das verspätete Handeln der Regierung.'", en: "The correct answer paraphrases the text." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Kernaussage", phonetic: "kern-ows-zah-ge", meaning: "core statement / key message", example: { de: "Was ist die Kernaussage des Textes?", en: "What is the key message of the text?" } },
          { word: "die Textstelle", phonetic: "tekst-shtel-le", meaning: "text passage", example: { de: "Markieren Sie die relevante Textstelle.", en: "Mark the relevant text passage." } },
          { word: "paraphrasieren", phonetic: "pa-ra-fra-zee-ren", meaning: "to paraphrase", example: { de: "Die Antwort paraphrasiert den Originaltext.", en: "The answer paraphrases the original text." } },
          { word: "umformulieren", phonetic: "um-for-moo-lee-ren", meaning: "to rephrase / reformulate", example: { de: "Die richtige Antwort formuliert den Text um.", en: "The correct answer rephrases the text." } }
        ]
      }
    ]
  },
  "lb2_47": {
    id: "lb2_47",
    title: "B2 Lesen Teil 3 & 4 — Opinions & Arguments",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Goethe B2: Reading Opinions & Commentaries",
        explanation: "Teil 3: Multiple people express views — match opinions to people. Teil 4: Read a commentary and decide if statements are richtig/falsch. Key skill: distinguishing between FACTS and OPINIONS in a text.",
        examples: [
          { de: "Fact: 'Die Arbeitslosigkeit liegt bei 5%.'", en: "Unemployment is at 5%. (verifiable)" },
          { de: "Opinion: 'Die Regierung sollte mehr investieren.'", en: "The government should invest more. (value judgment)" },
          { de: "Indirect opinion: 'Es bleibt fraglich, ob die Maßnahmen ausreichen.'", en: "It remains questionable whether the measures are sufficient. (disguised opinion)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Tatsache", phonetic: "taht-za-khe", meaning: "fact", example: { de: "Das ist eine Tatsache, keine Meinung.", en: "That is a fact, not an opinion." } },
          { word: "die Ansicht", phonetic: "an-zikht", meaning: "view / opinion", example: { de: "Meiner Ansicht nach ist das richtig.", en: "In my view, that is correct." } },
          { word: "der Kommentar", phonetic: "ko-men-tar", meaning: "commentary / opinion piece", example: { de: "Der Kommentar vertritt eine klare Position.", en: "The commentary takes a clear position." } },
          { word: "fragwürdig / fraglich", phonetic: "frahk-vür-dikh / frahk-likh", meaning: "questionable / doubtful", example: { de: "Diese Behauptung ist fragwürdig.", en: "This claim is questionable." } }
        ]
      }
    ]
  },
  "lb2_48": {
    id: "lb2_48",
    title: "B2 Hören — Radio, Interviews & Discussions",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Goethe B2 Hören: Strategy for All Parts",
        explanation: "B2 Hören has 4 parts (~40 min): Part 1: Interview/report with MC questions (heard ONCE). Part 2: Radio report (heard ONCE). Part 3: Conversation/discussion (heard ONCE). Part 4: Short statements (heard TWICE). Strategy: Read ALL questions BEFORE listening. Underline key words. Make notes during listening. Trust your first instinct.",
        examples: [
          { de: "Before listening: Underline question keywords.", en: "What, who, when, why — know what to listen FOR." },
          { de: "During: Note key words, not full sentences.", en: "Abbreviate. Speed over perfection." },
          { de: "After: Choose answers quickly. Don't overthink.", en: "If unsure, go with your gut. Don't leave blanks." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Radiosendung", phonetic: "rah-dee-oh-zen-doong", meaning: "radio broadcast", example: { de: "Hören Sie die Radiosendung und beantworten Sie die Fragen.", en: "Listen to the radio broadcast and answer the questions." } },
          { word: "das Interview", phonetic: "in-ter-vyoo", meaning: "interview", example: { de: "Im Interview äußerte sich der Experte zum Thema.", en: "In the interview, the expert commented on the topic." } },
          { word: "die Diskussionsrunde", phonetic: "dis-koo-see-ohns-roon-de", meaning: "discussion panel / roundtable", example: { de: "Die Diskussionsrunde behandelte das Thema Bildung.", en: "The panel discussed the topic of education." } },
          { word: "richtig/falsch", phonetic: "rikh-tikh/falsh", meaning: "true/false", example: { de: "Entscheiden Sie: Ist die Aussage richtig oder falsch?", en: "Decide: Is the statement true or false?" } }
        ]
      }
    ]
  },
  "lb2_49": {
    id: "lb2_49",
    title: "B2 Schreiben Teil 1 — Forum Post (Forumsbeitrag)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Goethe B2 Schreiben: The Forum Post (~150 words)",
        explanation: "In Teil 1, you write a post in an online forum on a social topic. You must: (1) State your position clearly. (2) Give reasons with examples. (3) Respond to a specific comment in the forum. (4) Use B2 connectors and argumentation. Structure: Einleitung → These → Begründung → Beispiel → Schluss.",
        examples: [
          { de: "Einleitung: Dieses Thema ist in unserer Gesellschaft sehr aktuell.", en: "Opening: This topic is very current in our society." },
          { de: "These: Ich bin der Meinung, dass...", en: "Thesis: I am of the opinion that..." },
          { de: "Begründung: Der Grund dafür ist, dass... / Das liegt daran, dass...", en: "Reasoning: The reason for this is that..." },
          { de: "Beispiel: Ein gutes Beispiel hierfür ist...", en: "Example: A good example of this is..." },
          { de: "Schluss: Zusammenfassend lässt sich sagen, dass...", en: "Conclusion: In summary, it can be said that..." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "der Forumsbeitrag", phonetic: "fo-rooms-by-trahk", meaning: "forum post", example: { de: "Schreiben Sie einen Forumsbeitrag zum Thema.", en: "Write a forum post on the topic." } },
          { word: "Ich bin der Auffassung, dass...", phonetic: "ikh bin dair owf-fas-soong", meaning: "I am of the view that... (B2 opinion)", example: { de: "Ich bin der Auffassung, dass Homeoffice produktiver ist.", en: "I am of the view that working from home is more productive." } },
          { word: "Das liegt daran, dass...", phonetic: "das leekt da-ran das", meaning: "That is because... (B2 reasoning)", example: { de: "Das liegt daran, dass man sich besser konzentrieren kann.", en: "That is because one can concentrate better." } },
          { word: "Ein gutes Beispiel hierfür ist...", phonetic: "ayn goo-tes by-shpeel heer-für ist", meaning: "A good example of this is...", example: { de: "Ein gutes Beispiel hierfür ist Schweden.", en: "A good example of this is Sweden." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "",
        sentenceAfter: " lässt sich sagen, dass die Vorteile überwiegen.",
        missingWord: "Zusammenfassend",
        translation: "In summary, it can be said that the advantages outweigh the disadvantages."
      }
    ]
  },
  "lb2_50": {
    id: "lb2_50",
    title: "B2 Schreiben Teil 2 — Formal Email (Formelle Nachricht)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Goethe B2 Schreiben: The Formal Message (~100 words)",
        explanation: "In Teil 2, you write a formal email in a professional context (complaint, request, inquiry). You must: (1) Use formal register (Sie-Form). (2) Follow German business email conventions. (3) Be clear and concise. Structure: Anrede → Bezug → Anliegen → Bitte/Forderung → Grußformel.",
        examples: [
          { de: "Anrede: Sehr geehrte Damen und Herren,", en: "Salutation: Dear Sir or Madam," },
          { de: "Bezug: Ich beziehe mich auf Ihre Anzeige vom...", en: "Reference: I refer to your advertisement from..." },
          { de: "Anliegen: Hiermit möchte ich Ihnen mitteilen, dass...", en: "Purpose: I hereby wish to inform you that..." },
          { de: "Bitte: Ich wäre Ihnen dankbar, wenn Sie...", en: "Request: I would be grateful if you..." },
          { de: "Grußformel: Mit freundlichen Grüßen", en: "Closing: Kind regards" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Sehr geehrte/r...", phonetic: "zair ge-ehr-te", meaning: "Dear... (formal)", example: { de: "Sehr geehrte Frau Schmidt,", en: "Dear Mrs. Schmidt," } },
          { word: "Hiermit möchte ich...", phonetic: "heer-mit möch-te ikh", meaning: "I hereby wish to...", example: { de: "Hiermit möchte ich mich beschweren über...", en: "I hereby wish to complain about..." } },
          { word: "Ich wäre Ihnen dankbar, wenn...", phonetic: "ikh veh-re ee-nen dank-bar ven", meaning: "I would be grateful if...", example: { de: "Ich wäre Ihnen dankbar, wenn Sie mir die Unterlagen zusenden könnten.", en: "I would be grateful if you could send me the documents." } },
          { word: "Mit freundlichen Grüßen", phonetic: "mit froynt-li-khen grü-sen", meaning: "Kind regards (formal closing)", example: { de: "Mit freundlichen Grüßen, Max Müller", en: "Kind regards, Max Müller" } }
        ]
      }
    ]
  },
  "lb2_51": {
    id: "lb2_51",
    title: "B2 Sprechen Teil 1 & 2 — Presentation & Discussion",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Goethe B2 Sprechen: Präsentation + Diskussion",
        explanation: "Teil 1: Short presentation on a topic (~4 min). Teil 2: Discussion with partner based on the presentation. Structure your presentation: (1) Introduction + thesis, (2) Arguments for, (3) Arguments against, (4) Own conclusion. During discussion: React to partner, ask follow-up questions, agree/disagree politely.",
        examples: [
          { de: "Einleitung: Ich möchte heute über das Thema ... sprechen.", en: "Introduction: I would like to talk about the topic of ... today." },
          { de: "Überleitung: Einerseits ... andererseits ...", en: "Transition: On the one hand ... on the other hand ..." },
          { de: "Schluss: Abschließend bin ich der Meinung, dass...", en: "Conclusion: In conclusion, I am of the opinion that..." },
          { de: "Reagieren: Das ist ein interessanter Punkt. Allerdings...", en: "Responding: That's an interesting point. However..." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Ich möchte folgende Aspekte ansprechen...", phonetic: "ikh möch-te fol-gen-de as-pek-te an-shpre-khen", meaning: "I would like to address the following aspects...", example: { de: "Ich möchte folgende Aspekte ansprechen: erstens die Kosten, zweitens die Qualität.", en: "I'd like to address the following aspects: first the costs, second the quality." } },
          { word: "Da bin ich ganz Ihrer Meinung.", phonetic: "da bin ikh gants ee-rer my-noong", meaning: "I completely agree with you on that.", example: { de: "Da bin ich ganz Ihrer Meinung.", en: "I completely agree with you on that." } },
          { word: "Da muss ich Ihnen leider widersprechen.", phonetic: "da mus ikh ee-nen ly-der vee-der-shpre-khen", meaning: "I'm afraid I have to disagree with you.", example: { de: "Da muss ich Ihnen leider widersprechen.", en: "I'm afraid I have to disagree." } },
          { word: "Ich sehe das etwas anders.", phonetic: "ikh zay-uh das et-vas an-ders", meaning: "I see that somewhat differently.", example: { de: "Ich sehe das etwas anders, und zwar...", en: "I see that somewhat differently, namely..." } }
        ]
      }
    ]
  },
  "lb2_52": {
    id: "lb2_52",
    title: "B2 Sprechen Teil 3 — Negotiation (Gemeinsam verhandeln)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Goethe B2 Sprechen: Negotiation with Partner",
        explanation: "In Teil 3, you negotiate a solution with your partner (e.g., planning an event, making a decision). You must: (1) Make proposals, (2) Respond to your partner's ideas, (3) Find a compromise, (4) Summarize the agreement. Key: Don't just present your ideas — INTERACT with your partner.",
        examples: [
          { de: "Vorschlag: Ich schlage vor, dass wir...", en: "I suggest that we..." },
          { de: "Alternative: Wir könnten auch... / Eine andere Möglichkeit wäre...", en: "We could also... / Another option would be..." },
          { de: "Kompromiss: Wie wäre es, wenn wir einen Kompromiss finden?", en: "How about if we find a compromise?" },
          { de: "Zusammenfassung: Dann sind wir uns also einig, dass...", en: "So we agree that..." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Ich schlage vor, dass...", phonetic: "ikh shlah-ge for das", meaning: "I suggest that...", example: { de: "Ich schlage vor, dass wir uns morgen treffen.", en: "I suggest that we meet tomorrow." } },
          { word: "Wären Sie damit einverstanden?", phonetic: "veh-ren zee da-mit ayn-fer-shtan-den", meaning: "Would you agree with that?", example: { de: "Wir könnten es so machen. Wären Sie damit einverstanden?", en: "We could do it that way. Would you agree?" } },
          { word: "Einigen wir uns auf...", phonetic: "ay-ni-gen veer uns owf", meaning: "Let's agree on...", example: { de: "Einigen wir uns auf einen Termin nächste Woche.", en: "Let's agree on an appointment next week." } },
          { word: "Das klingt nach einem guten Kompromiss.", phonetic: "das klingt nakh ay-nem goo-ten kom-pro-mis", meaning: "That sounds like a good compromise.", example: { de: "Das klingt nach einem guten Kompromiss. Einverstanden!", en: "That sounds like a good compromise. Agreed!" } }
        ]
      },
      {
        type: "speaking",
        phrase: "Ich verstehe Ihren Einwand. Wie wäre es, wenn wir einen Kompromiss finden und sowohl Ihre als auch meine Vorschläge berücksichtigen?",
        translation: "I understand your objection. How about if we find a compromise and consider both your and my suggestions?",
        phonetic: "ikh fer-shtay-uh ee-ren ayn-vant vee veh-re es ven veer ay-nen kom-pro-mis fin-den unt zo-vohl ee-re als owkh my-ne for-shleh-ge be-rük-zikh-ti-gen",
        tip: "This is a model negotiation sentence — shows empathy + compromise-seeking."
      }
    ]
  }
};
