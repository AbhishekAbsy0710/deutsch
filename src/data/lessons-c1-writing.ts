import { Lesson } from "./lessons";

export const lessonsC1Writing: Record<string, Lesson> = {
  "c1-w1": {
    id: "c1-w1",
    title: "Academic Writing: Essay Structure",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "The Standard Essay Structure",
        explanation: "German academic essays (Aufsatz/Erörterung) follow a rigid structure: Einleitung (Introduction), Hauptteil (Main body), and Schluss (Conclusion). C1 exams grade heavily on how clearly you separate these sections.",
        examples: [
          { de: "Einleitung", en: "Hooks the reader, states the theme, ends with the core question." },
          { de: "Hauptteil", en: "Presents arguments with the TEA structure (Thema, Erklärung, Argument/Beispiel)." },
          { de: "Schluss", en: "Summarizes, answers the core question, gives an outlook (Ausblick)." },
        ]
      },
      {
        type: "grammar",
        title: "Redemittel: Einleitung",
        explanation: "Use these fixed phrases to introduce your topic professionally.",
        examples: [
          { de: "In der heutigen Zeit wird oft darüber diskutiert, ob...", en: "Nowadays it is often discussed whether..." },
          { de: "Ein hochaktuelles Thema, das immer wieder für Debatten sorgt, ist...", en: "A highly topical issue that repeatedly causes debate is..." },
          { de: "Dies führt zu der Frage, inwiefern...", en: "This leads to the question of to what extent..." },
        ]
      },
      {
        type: "summary",
        points: [
          "Always separate Einleitung, Hauptteil, and Schluss with paragraphs.",
          "Never start arguing in the Einleitung.",
          "Use high-level Redemittel to frame the discussion."
        ]
      }
    ]
  },
  "c1-w2": {
    id: "c1-w2",
    title: "Textzusammenfassung (Text Summary)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Rules of a Zusammenfassung",
        explanation: "Summarizing a text at C1 level requires extreme objectivity. You must use Konjunktiv I for indirect speech, never use 'ich', and reduce the text to its absolute core arguments.",
        examples: [
          { de: "Der Autor behauptet, dass...", en: "The author claims that..." },
          { de: "Zusammenfassend lässt sich sagen, dass...", en: "In summary, it can be said that..." },
        ]
      },
      {
        type: "grammar",
        title: "Avoiding Plagiarism (Paraphrasing)",
        explanation: "You will lose points if you copy sentences from the original text. You must paraphrase using synonyms, Nominalisierung, and structural changes.",
        examples: [
          { de: "Original: Viele Menschen kaufen online ein, weil es bequem ist.", en: "Many people shop online because it is convenient." },
          { de: "Paraphrase: Aufgrund der Bequemlichkeit erfreut sich der Online-Handel großer Beliebtheit.", en: "Due to convenience, online retail enjoys great popularity." },
        ]
      },
      {
        type: "summary",
        points: [
          "Never use 'ich' or state your own opinion in a summary.",
          "Use Konjunktiv I to report the author's claims.",
          "Paraphrase everything—never copy whole sentences."
        ]
      }
    ]
  },
  "c1-w3": {
    id: "c1-w3",
    title: "Erörterung (Discursive Essay)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Linear vs. Dialectical",
        explanation: "In a 'lineare Erörterung', you only argue one side. In a 'dialektische Erörterung' (standard for C1), you must present both pros and cons before reaching a synthesis.",
        examples: [
          { de: "Einerseits... andererseits...", en: "On the one hand... on the other hand..." },
          { de: "Dafür spricht, dass...", en: "An argument for this is that..." },
          { de: "Ein weiteres Argument dagegen ist...", en: "Another argument against it is..." },
        ]
      },
      {
        type: "grammar",
        title: "The Sanduhr-Prinzip (Hourglass Principle)",
        explanation: "When structuring a dialectical essay, start with the strongest argument of the side you DISAGREE with, work down to its weakest argument. Then, pivot to the side you AGREE with, starting with the weakest argument and ending with your strongest.",
        examples: [
          { de: "Pivot phrase: Trotz dieser Argumente überwiegen für mich die Vorteile.", en: "Despite these arguments, for me the advantages outweigh the disadvantages." },
        ]
      },
      {
        type: "summary",
        points: [
          "Dialectical essays require both pros and cons.",
          "Use the hourglass structure for maximum rhetorical impact.",
          "Save your strongest argument for the very end of the Hauptteil."
        ]
      }
    ]
  },
  "c1-w4": {
    id: "c1-w4",
    title: "Kommentar & Stellungnahme",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "What is a Stellungnahme?",
        explanation: "Unlike an objective summary, a Stellungnahme is your personal, reasoned opinion on a topic. It is highly subjective, but must be written in a formal, convincing register.",
        examples: [
          { de: "Ich vertrete den Standpunkt, dass...", en: "I take the position that..." },
          { de: "Meines Erachtens ist es unumgänglich, dass...", en: "In my opinion it is unavoidable that..." },
        ]
      },
      {
        type: "grammar",
        title: "Refuting Counterarguments",
        explanation: "A strong Stellungnahme anticipates counterarguments and destroys them.",
        examples: [
          { de: "Zwar wird oft behauptet, dass [X], jedoch zeigt die Realität, dass [Y].", en: "Although it is often claimed that [X], reality shows that [Y]." },
          { de: "Man mag einwenden, dass..., aber das greift zu kurz.", en: "One might object that..., but that falls short." },
        ]
      },
      {
        type: "summary",
        points: [
          "A Stellungnahme is subjective but formal.",
          "Use 'Meines Erachtens' instead of 'Ich denke'.",
          "Acknowledge counterarguments only to refute them."
        ]
      }
    ]
  },
  "c1-w5": {
    id: "c1-w5",
    title: "Wissenschaftliches Schreiben",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Academic Hedging",
        explanation: "In science, nothing is 100% certain. Academic writing uses 'hedging' to soften claims and make them more defensible.",
        examples: [
          { de: "Die Ergebnisse deuten darauf hin, dass...", en: "The results indicate that..." },
          { de: "Es ist davon auszugehen, dass...", en: "It can be assumed that..." },
          { de: "Dies lässt vermuten, dass...", en: "This suggests that..." },
        ]
      },
      {
        type: "grammar",
        title: "The Passive & Man",
        explanation: "Academic writing avoids 'ich' and 'wir' completely. Instead, it uses the passive voice, Passiversatzformen (sich lassen), or 'man'.",
        examples: [
          { de: "In dieser Arbeit wird untersucht...", en: "In this paper it is investigated..." },
          { de: "Daraus lässt sich schließen, dass...", en: "From this it can be concluded that..." },
          { de: "Man kann beobachten, dass...", en: "One can observe that..." },
        ]
      },
      {
        type: "summary",
        points: [
          "Avoid 'ich' — use the passive or 'man'.",
          "Hedge your claims using verbs like 'deuten', 'vermuten', 'ausgehen'.",
          "Use 'sich lassen + Infinitiv' as an elegant passive alternative."
        ]
      }
    ]
  },
  "c1-w6": {
    id: "c1-w6",
    title: "Textanalyse (Argumentative Texts)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Analyzing Structure",
        explanation: "In a C1 exam, you may need to analyze how an author builds their argument. You need specific vocabulary to describe rhetorical strategies.",
        examples: [
          { de: "Der Autor stützt seine These auf...", en: "The author supports his thesis on..." },
          { de: "Zur Untermauerung seiner Argumentation führt er an, dass...", en: "To underpin his argumentation he cites that..." },
          { de: "Er veranschaulicht dies anhand eines Beispiels.", en: "He illustrates this using an example." },
        ]
      },
      {
        type: "grammar",
        title: "Identifying Bias & Tone",
        explanation: "You must be able to describe the tone (ironisch, sachlich, provokant) and identify if the author is biased.",
        examples: [
          { de: "Der Artikel ist polemisch verfasst.", en: "The article is written polemically." },
          { de: "Die Wortwahl verrät eine deutliche Voreingenommenheit.", en: "The choice of words reveals a clear bias." },
        ]
      },
      {
        type: "summary",
        points: [
          "Use verbs like 'stützen', 'untermauern', 'veranschaulichen'.",
          "Analyze not just WHAT is said, but HOW it is constructed.",
          "Identify the author's tone and potential biases."
        ]
      }
    ]
  },
  "c1-w7": {
    id: "c1-w7",
    title: "Textanalyse (Informative Texts)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Describing Data & Charts",
        explanation: "Often, informative texts are accompanied by graphics (Grafiken, Schaubilder). You must be able to describe trends accurately.",
        examples: [
          { de: "Die Grafik zeigt die Entwicklung von...", en: "The graphic shows the development of..." },
          { de: "Die Zahl der Arbeitslosen ist drastisch gesunken.", en: "The number of unemployed has dropped drastically." },
          { de: "Es ist ein deutlicher Aufwärtstrend zu verzeichnen.", en: "A clear upward trend can be observed." },
        ]
      },
      {
        type: "grammar",
        title: "Comparing Data Points",
        explanation: "Use advanced comparative structures to contrast different data sets.",
        examples: [
          { de: "Im Gegensatz zu 2010 hat sich der Wert verdoppelt.", en: "In contrast to 2010, the value has doubled." },
          { de: "Während X stagniert, verzeichnet Y ein starkes Wachstum.", en: "While X stagnates, Y records strong growth." },
        ]
      },
      {
        type: "summary",
        points: [
          "Know the verbs for rising (steigen, wachsen) and falling (sinken, fallen).",
          "Use 'verzeichnen' (to record/observe) for formal data reporting.",
          "Master comparative structures (Im Gegensatz zu, Während)."
        ]
      }
    ]
  },
  "c1-w8": {
    id: "c1-w8",
    title: "Formal Correspondence at C1 Level",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "The C1 Formal Email",
        explanation: "Whether writing to a professor, a government agency, or a business partner, your tone must be flawless. Any grammatical mistake in a formal email severely damages your credibility.",
        examples: [
          { de: "Sehr geehrte(r) Frau/Herr [Name],", en: "Dear Ms./Mr. [Name]," },
          { de: "Ich wende mich an Sie bezüglich (+ Genitiv)...", en: "I am writing to you regarding..." },
          { de: "Mit der Bitte um Kenntnisnahme...", en: "With the request that you take note..." },
        ]
      },
      {
        type: "grammar",
        title: "Making Polite Requests",
        explanation: "Never use the imperative in formal correspondence. Use Konjunktiv II or formal nouns.",
        examples: [
          { de: "Ich wäre Ihnen sehr dankbar, wenn Sie... könnten.", en: "I would be very grateful if you could..." },
          { de: "Dürfte ich Sie bitten, mir ... zuzusenden?", en: "May I ask you to send me...?" },
        ]
      },
      {
        type: "summary",
        points: [
          "Use 'Sehr geehrte(r)' for formal openings.",
          "Always use 'bezüglich' + Genitiv instead of 'über'.",
          "Wrap requests in Konjunktiv II to maximize politeness."
        ]
      }
    ]
  }
};
