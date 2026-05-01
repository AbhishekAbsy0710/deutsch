import { Lesson } from "./lessons";

export const lessonsC2Pro: Record<string, Lesson> = {
  "c2-p1": {
    id: "c2-p1",
    title: "The Boardroom: High-Stakes Negotiations",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "Executive German",
        emoji: "💼",
        content: "Business German at the B2/C1 level is about politeness and clarity. At the C2 level, you need to know how to navigate power dynamics, hostile takeovers, and intense boardroom negotiations without ever breaking formal register."
      },
      {
        type: "grammar",
        title: "Key Strategies",
        explanation: "Corporate German relies heavily on the passive voice and nominal style.",
        examples: [
          { de: "Es wurde versäumt, uns zu informieren.", en: "It was neglected to inform us. (Passive of deflection)" },
          { de: "Die Implementierung ist unabdingbar.", en: "The implementation is indispensable. (Nominal style for authority)" }
        ]
      },
      {
        type: "example-dialogue",
        title: "A tense board meeting",
        context: "Discussing poor quarterly results.",
        lines: [
          { speaker: "CEO", de: "Angesichts der defizitären Quartalszahlen sehe ich mich gezwungen, harte Einschnitte vorzunehmen.", en: "Given the deficit-ridden quarterly figures, I feel compelled to make harsh cuts." },
          { speaker: "CFO", de: "Wir müssen jedoch festhalten, dass diese Entwicklung auf externe Marktschwankungen zurückzuführen ist.", en: "We must, however, note that this development is due to external market fluctuations." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "defizitär", phonetic: "/ˌdefiˈtsiːtɛːɐ/", meaning: "loss-making / deficit-ridden", example: { de: "Die Sparte ist defizitär.", en: "The division is operating at a loss." } },
          { word: "unabdingbar", phonetic: "/ˈʊnʔapˌdɪŋbaːɐ/", meaning: "indispensable / imperative", example: { de: "Das ist absolut unabdingbar.", en: "That is absolutely imperative." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "If a German CEO says they agree 'unter Vorbehalt', what does it mean?",
        options: ["They agree completely", "They agree, but with reservations or conditions", "They aggressively disagree", "They do not care"],
        correctIndex: 1,
        explanation: "'Unter Vorbehalt' means 'with reservations' or 'subject to change/conditions'. It is a classic corporate hedge."
      }
    ]
  },
  "c2-p2": {
    id: "c2-p2",
    title: "Juristendeutsch (Legal German)",
    module: "C2",
    blocks: [
      {
        type: "grammar",
        title: "Juristendeutsch",
        explanation: "Legal German is notoriously difficult. It relies on sentences that span entire paragraphs, archaic vocabulary, and highly specific definitions.",
        examples: [
          { de: "Treu und Glauben", en: "Good faith (A vague legal concept courts interpret)" },
          { de: "Es ist nicht unüblich...", en: "It is not uncommon... (Double negative)" }
        ]
      },
      {
        type: "example-dialogue",
        title: "Contract Excerpt",
        context: "A standard liability clause.",
        lines: [
          { speaker: "Vertrag", de: "Der Auftragnehmer haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit.", en: "The contractor is liable without limitation for intent and gross negligence." },
          { speaker: "Vertrag", de: "Für einfache Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten.", en: "For simple negligence, the contractor is only liable in the event of a breach of material contractual obligations." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Fahrlässigkeit", phonetic: "/ˈfaːɐ̯lɛsɪçkaɪ̯t/", meaning: "negligence", example: { de: "Grobe Fahrlässigkeit.", en: "Gross negligence." } },
          { word: "der Vorsatz", phonetic: "/ˈfoːɐ̯zats/", meaning: "intent / premeditation", example: { de: "Mit Vorsatz handeln.", en: "To act with intent." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "In German contract law, what is 'grobe Fahrlässigkeit'?",
        options: ["Slight mistake", "Gross negligence", "Premeditated murder", "Breach of contract"],
        correctIndex: 1,
        explanation: "'Grobe Fahrlässigkeit' translates to 'gross negligence', meaning a severe lack of care or responsibility."
      }
    ]
  },
  "c2-p3": {
    id: "c2-p3",
    title: "Defending a Thesis (Disputation)",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "The Disputation",
        emoji: "🎓",
        content: "Defending a Master's or PhD thesis in Germany requires an extreme level of politeness combined with unyielding academic rigor. You must be able to respectfully dismantle someone else's argument while protecting your own."
      },
      {
        type: "example-dialogue",
        title: "The Defense",
        context: "A PhD student answering a professor's critique.",
        lines: [
          { speaker: "Professor", de: "Ihre Methodik scheint mir an dieser Stelle methodische Schwächen aufzuweisen.", en: "Your methodology seems to show methodological weaknesses at this point." },
          { speaker: "Doktorand", de: "Ich teile Ihre Bedenken hinsichtlich der Stichprobengröße, jedoch wurde dieser Limitation entgegengewirkt.", en: "I share your concerns regarding the sample size, however, this limitation was counteracted." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Prämisse", phonetic: "/pʁɛˈmɪsə/", meaning: "premise", example: { de: "Eine falsche Prämisse.", en: "A false premise." } },
          { word: "tragfähig", phonetic: "/ˈtʁaːkˌfɛːɪç/", meaning: "viable / sustainable", example: { de: "Das Argument ist tragfähig.", en: "The argument is viable." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "If a professor says an argument is 'nur bedingt tragfähig', what do they mean?",
        options: ["It is absolutely correct", "It is completely wrong", "It is only partially viable/convincing", "It is very heavy"],
        correctIndex: 2,
        explanation: "'Nur bedingt' means 'only to a limited extent', and 'tragfähig' means 'viable'. It's a polite, academic way to say an argument is weak."
      }
    ]
  },
  "c2-p4": {
    id: "c2-p4",
    title: "Medical & Technical Journals",
    module: "C2",
    blocks: [
      {
        type: "grammar",
        title: "Fachsprache (Jargon)",
        explanation: "Doctors use Latin roots (Appendizitis instead of Blinddarmentzündung). Engineers use massive compound nouns.",
        examples: [
          { de: "die Hypertonie", en: "High blood pressure (Medical jargon for Bluthochdruck)" },
          { de: "die Sollbruchstelle", en: "Predetermined breaking point (Engineering term)" }
        ]
      },
      {
        type: "example-dialogue",
        title: "Engineering Report",
        context: "An analysis of a mechanical failure.",
        lines: [
          { speaker: "Bericht", de: "Die Materialermüdung an der Sollbruchstelle wurde durch eine überproportionale Krafteinwirkung induziert.", en: "Material fatigue at the predetermined breaking point was induced by disproportionate force exertion." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Materialermüdung", phonetic: "/maˈteʁi̯aːlʔɛɐ̯ˌmyːdʊŋ/", meaning: "material fatigue", example: { de: "Es gab Materialermüdung.", en: "There was material fatigue." } },
          { word: "induzieren", phonetic: "/ɪnduˈtsiːʁən/", meaning: "to induce", example: { de: "Das Problem wurde induziert.", en: "The problem was induced." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What is a 'Sollbruchstelle' in engineering?",
        options: ["A strong foundation", "A predetermined breaking point designed to fail safely", "A type of glue", "A measurement tool"],
        correctIndex: 1,
        explanation: "A 'Sollbruchstelle' is a specifically engineered weak point designed to break under stress to protect the rest of the machine."
      }
    ]
  },
  "c2-p5": {
    id: "c2-p5",
    title: "Diplomacy & PR: The Public Apology",
    module: "C2",
    blocks: [
      {
        type: "cultural-note",
        title: "The Art of the Non-Apology",
        emoji: "🎤",
        content: "Public Relations requires walking a tightrope. You must sound empathetic without ever using words that could invite a lawsuit (like Schuld / guilt)."
      },
      {
        type: "example-dialogue",
        title: "Press Release",
        context: "A company addresses a data leak.",
        lines: [
          { speaker: "Sprecher", de: "Wir bedauern die entstandenen Unannehmlichkeiten zutiefst.", en: "We deeply regret the inconvenience caused." },
          { speaker: "Sprecher", de: "Wir werden den Sachverhalt lückenlos aufklären.", en: "We will clarify the facts of the matter completely." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "bedauern", phonetic: "/bəˈdaʊ̯ɐn/", meaning: "to regret", example: { de: "Wir bedauern das sehr.", en: "We regret that very much." } },
          { word: "schonungslos", phonetic: "/ˈʃoːnʊŋsˌloːs/", meaning: "ruthless / sparing nothing", example: { de: "Schonungslose Aufklärung.", en: "Ruthless clarification." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Why do companies say 'Wir bedauern' instead of 'Wir sind schuld'?",
        options: ["It sounds louder", "It is shorter", "It expresses regret without admitting legal guilt", "They don't know the word 'schuld'"],
        correctIndex: 2,
        explanation: "'Bedauern' means 'to regret'. It shows empathy but, unlike 'Schuld' (guilt), does not constitute a legal admission of fault."
      }
    ]
  }
};
