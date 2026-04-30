import { Lesson } from "./lessons";

export const lessonsC1Exam: Record<string, Lesson> = {
  "c1-e1": {
    id: "c1-e1",
    title: "Goethe C1 Lesen (Reading Comprehension)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "The Goethe C1 Reading Exam",
        explanation: "The C1 reading section tests your ability to quickly extract information from long, complex texts (often 800+ words). You have 70 minutes for 3 tasks.",
        examples: [
          { de: "Teil 1: Lückentext", en: "Fill in the blanks (tests vocabulary, prepositions, connectors)." },
          { de: "Teil 2: Textzuordnung", en: "Match statements to paragraphs." },
          { de: "Teil 3: Multiple Choice", en: "Answer detailed questions about a long, academic text." },
        ]
      },
      {
        type: "grammar",
        title: "Strategy: Scanning and Skimming",
        explanation: "Do not read every word. Read the first and last sentence of each paragraph to grasp the structure (Skimming). Then look for keywords from the questions (Scanning). Pay extreme attention to synonyms—the exact words from the question will almost never appear in the text.",
        examples: [
          { de: "Question: Die Studie kritisiert den Mangel an Förderung.", en: "The study criticizes the lack of funding." },
          { de: "Text: Die Forscher bemängeln die unzureichende finanzielle Unterstützung.", en: "The researchers complain about the insufficient financial support." },
        ]
      }
    ]
  },
  "c1-e2": {
    id: "c1-e2",
    title: "Goethe C1 Hören (Listening Comprehension)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "The Goethe C1 Listening Exam",
        explanation: "The listening exam (approx. 40 minutes) features natural speaking speed, background noise, hesitations, and dialect features. You will hear an interview, a radio feature, and a lecture/presentation.",
        examples: [
          { de: "Teil 1: Notizen machen", en: "Take notes while listening to a phone call or brief report." },
          { de: "Teil 2: Radio-Interview", en: "Multiple choice questions based on a long interview." },
          { de: "Teil 3: Vortrag (Lecture)", en: "Determine if statements are true or false." },
        ]
      },
      {
        type: "cultural-note",
        title: "Signal Words in Listening",
        content: "Pay attention to connectors like 'jedoch' (however), 'zwar... aber' (admittedly... but), and 'dennoch' (nevertheless). They signal a pivot in the speaker's argument, which is exactly where the test designers hide the trap answers.",
        emoji: "🎧"
      }
    ]
  },
  "c1-e3": {
    id: "c1-e3",
    title: "Goethe C1 Schreiben (Writing)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "The Goethe C1 Writing Exam",
        explanation: "You have 80 minutes to complete two tasks. The first is an essay based on a graph, the second is a formal email. Register and structure are graded heavily.",
        examples: [
          { de: "Aufgabe 1: Erörterung (ca. 200 Wörter)", en: "Discursive essay based on a graph and two opinions." },
          { de: "Aufgabe 2: Formelle Nachricht (ca. 100 Wörter)", en: "Formal email, e.g., apologizing to a professor or complaining to an agency." },
        ]
      },
      {
        type: "grammar",
        title: "The Graph Essay Structure",
        explanation: "1. Einleitung (Hook). 2. Grafikbeschreibung (Describe the main trend, don't list all numbers). 3. Argumentation (Discuss the two given opinions, add your own). 4. Schluss (Conclusion).",
        examples: [
          { de: "Die vorliegende Grafik veranschaulicht...", en: "The graph at hand illustrates..." },
          { de: "Während Person A behauptet, dass..., vertritt Person B die Ansicht, dass...", en: "While Person A claims that..., Person B takes the view that..." },
        ]
      }
    ]
  },
  "c1-e4": {
    id: "c1-e4",
    title: "Goethe C1 Sprechen (Speaking)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "The Goethe C1 Speaking Exam",
        explanation: "You take this exam with a partner (15 minutes total). You must give a monologue (presentation) and engage in a dialogue (debate/negotiation).",
        examples: [
          { de: "Teil 1: Vortrag (3-4 Min)", en: "Give a short presentation on a given topic using provided bullet points." },
          { de: "Teil 2: Diskussion (6-8 Min)", en: "Debate a topic with your partner, exchange arguments, and try to reach a conclusion." },
        ]
      },
      {
        type: "grammar",
        title: "Winning the Discussion",
        explanation: "Do not just state your opinion. You must react to your partner. Use 'Strukturierungswörter' to buy time to think.",
        examples: [
          { de: "Da muss ich Ihnen leider widersprechen, denn...", en: "I unfortunately have to disagree with you there, because..." },
          { de: "Das ist ein interessanter Punkt. Dennoch denke ich, dass...", en: "That is an interesting point. Nevertheless, I think that..." },
          { de: "Lassen Sie uns festhalten, dass...", en: "Let us conclude that..." },
        ]
      }
    ]
  },
  "c1-e5": {
    id: "c1-e5",
    title: "TestDaF Vorbereitung",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "TestDaF vs. Goethe",
        explanation: "The TestDaF is strictly academic, designed for university admission in Germany. Topics are always related to student life, university bureaucracy, or scientific research.",
        examples: [
          { de: "Niveaustufen", en: "TDN 3 (B2), TDN 4 (B2/C1 boundary - usually required for uni), TDN 5 (C1+)" },
        ]
      },
      {
        type: "grammar",
        title: "The Digital TestDaF",
        explanation: "The modern TestDaF is done on a computer. The speaking section involves talking to the screen in 7 different scenarios (e.g., leaving a voicemail for a professor, advising a fellow student based on a graph).",
        examples: [
          { de: "Scenario 1: Rat geben", en: "Give advice to a friend." },
          { de: "Scenario 4: Grafik beschreiben", en: "Describe a graph to an audience." },
          { de: "Scenario 6: Hypothese aufstellen", en: "Formulate a hypothesis based on data." },
        ]
      }
    ]
  },
  "c1-e6": {
    id: "c1-e6",
    title: "C1 Abschluss — Gesamtwiederholung",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Congratulations! (Herzlichen Glückwunsch!)",
        explanation: "You have reached the end of the C1 curriculum. You are now equipped with the vocabulary, grammar, and structural knowledge to communicate at an advanced, near-native level in German.",
        examples: [
          { de: "Ihr Deutsch ist nun fließend und differenziert.", en: "Your German is now fluent and nuanced." },
        ]
      },
      {
        type: "summary",
        points: [
          "You mastered Nominalisierung and Funktionsverbgefüge.",
          "You can navigate Konjunktiv I and academic writing.",
          "You are prepared for the Goethe C1 and TestDaF exams.",
          "Viel Erfolg auf Ihrem weiteren Weg!"
        ]
      }
    ]
  }
};
