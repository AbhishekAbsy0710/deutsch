import { Lesson } from "./lessons";

export const lessonsB2Grammar1: Record<string, Lesson> = {
  "lb2_01": {
    id: "lb2_01",
    title: "Konjunktiv I — Indirect Speech (Indirekte Rede)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Reporting What Others Said",
        explanation: "Konjunktiv I is used in formal German (news, reports, academic writing) to report what someone else said without confirming it's true. It signals: 'This is their claim, not mine.' Formation: take the infinitive stem + endings (-e, -est, -e, -en, -et, -en).",
        examples: [
          { de: "Direct: Der Minister sagt: 'Ich bin zufrieden.'", en: "The minister says: 'I am satisfied.'" },
          { de: "Indirect: Der Minister sagt, er SEI zufrieden.", en: "The minister says he IS (reportedly) satisfied." },
          { de: "Direct: Sie sagt: 'Ich habe keine Zeit.'", en: "She says: 'I have no time.'" },
          { de: "Indirect: Sie sagt, sie HABE keine Zeit.", en: "She says she HAS (reportedly) no time." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "er/sie sei", phonetic: "zay", meaning: "he/she is (reportedly)", example: { de: "Er sagt, er sei krank.", en: "He says he is (reportedly) sick." } },
          { word: "er/sie habe", phonetic: "hah-be", meaning: "he/she has (reportedly)", example: { de: "Sie sagt, sie habe das Buch gelesen.", en: "She says she has read the book." } },
          { word: "er/sie könne", phonetic: "kön-ne", meaning: "he/she can (reportedly)", example: { de: "Er meint, er könne das allein schaffen.", en: "He claims he can manage it alone." } },
          { word: "er/sie wolle", phonetic: "vol-le", meaning: "he/she wants (reportedly)", example: { de: "Die Partei sagt, sie wolle Steuern senken.", en: "The party says it wants to lower taxes." } },
          { word: "er/sie müsse", phonetic: "müs-se", meaning: "he/she must (reportedly)", example: { de: "Der Arzt sagt, ich müsse mehr Sport treiben.", en: "The doctor says I must do more sport." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "How do you report: Der Chef sagt: 'Ich bin mit dem Ergebnis zufrieden.'",
        options: ["Der Chef sagt, er ist zufrieden.", "Der Chef sagt, er sei zufrieden.", "Der Chef sagt, er wäre zufrieden.", "Der Chef sagt, er war zufrieden."],
        correctIndex: 1,
        explanation: "'sei' is the Konjunktiv I of 'sein'. It signals indirect speech — you're reporting what the boss said."
      },
      {
        type: "speaking",
        phrase: "Laut dem Bericht sei die Wirtschaft um 3% gewachsen.",
        translation: "According to the report, the economy has grown by 3%.",
        phonetic: "lowt dem be-rikht zay dee virt-shaft um dry pro-tsent ge-vak-sen",
        tip: "You'll hear Konjunktiv I constantly in German news (Tagesschau, ZDF). 'Laut' + Dative is a key news expression."
      }
    ]
  },
  "lb2_02": {
    id: "lb2_02",
    title: "Konjunktiv I — All Tenses & Replacement Rules",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Konjunktiv I in Perfekt & Futur + The Replacement Rule",
        explanation: "Konjunktiv I exists in three tenses: Präsens (sei/habe), Perfekt (habe gemacht / sei gegangen), and Futur (werde machen). CRITICAL RULE: When Konjunktiv I looks identical to the Indikativ (e.g., 'sie haben' = 'sie haben'), replace it with Konjunktiv II ('sie hätten').",
        examples: [
          { de: "Perfekt: Er sagt, er habe das gemacht.", en: "He says he did/has done that." },
          { de: "Futur: Sie sagt, sie werde morgen kommen.", en: "She says she will come tomorrow." },
          { de: "Replacement: Die Leute sagen, sie hätten kein Geld. (NOT: sie haben)", en: "The people say they have no money. (hätten replaces haben because Konj I = Indikativ)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "er habe ... gemacht", phonetic: "hah-be ge-makht", meaning: "he has (reportedly) done", example: { de: "Er sagt, er habe den Brief geschrieben.", en: "He says he wrote the letter." } },
          { word: "sie werde ... kommen", phonetic: "vair-de ko-men", meaning: "she will (reportedly) come", example: { de: "Sie sagt, sie werde morgen kommen.", en: "She says she will come tomorrow." } },
          { word: "sie hätten (replacement)", phonetic: "het-ten", meaning: "they have (reportedly) — Konj II replaces Konj I", example: { de: "Sie behaupten, sie hätten nichts gewusst.", en: "They claim they didn't know anything." } },
          { word: "Laut + Dativ", phonetic: "lowt", meaning: "according to", example: { de: "Laut einer Studie sei das Risiko gering.", en: "According to a study, the risk is low." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Die Zeugen sagen, sie ",
        sentenceAfter: " nichts gesehen.",
        missingWord: "hätten",
        translation: "The witnesses say they didn't see anything. (hätten replaces haben because Konj I 'haben' = Indikativ)"
      }
    ]
  },
  "lb2_03": {
    id: "lb2_03",
    title: "Passiversatzformen — Alternatives to the Passive",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Three Ways to Avoid 'werden + Partizip II'",
        explanation: "Native speakers often replace the formal passive ('wird gemacht') with shorter, more elegant alternatives. These are called Passiversatzformen and are essential for B2 writing.",
        examples: [
          { de: "1. sein + zu + Infinitiv: Das ist leicht zu verstehen.", en: "= Das kann leicht verstanden werden. (That can be easily understood.)" },
          { de: "2. sich lassen + Infinitiv: Das lässt sich machen.", en: "= Das kann gemacht werden. (That can be done.)" },
          { de: "3. -bar / -lich Adjektive: Das Problem ist lösbar.", en: "= Das Problem kann gelöst werden. (The problem is solvable.)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "sein + zu + Infinitiv", phonetic: "zayn tsoo", meaning: "must/can be done (passive alternative)", example: { de: "Die Aufgabe ist bis morgen zu erledigen.", en: "The task must be completed by tomorrow." } },
          { word: "sich lassen + Infinitiv", phonetic: "zikh las-sen", meaning: "can be done (passive alternative)", example: { de: "Das Fenster lässt sich nicht öffnen.", en: "The window can't be opened." } },
          { word: "machbar", phonetic: "makh-bar", meaning: "doable / feasible", example: { de: "Das Projekt ist durchaus machbar.", en: "The project is certainly feasible." } },
          { word: "lösbar", phonetic: "lös-bar", meaning: "solvable", example: { de: "Jedes Problem ist lösbar.", en: "Every problem is solvable." } },
          { word: "verständlich", phonetic: "fer-shtent-likh", meaning: "understandable", example: { de: "Die Erklärung war leicht verständlich.", en: "The explanation was easily understandable." } },
          { word: "erkennbar", phonetic: "er-ken-bar", meaning: "recognizable / detectable", example: { de: "Der Unterschied ist kaum erkennbar.", en: "The difference is barely detectable." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which is the Passiversatzform for: 'Das Problem kann gelöst werden'?",
        options: ["Das Problem ist lösbar.", "Das Problem löst sich.", "Das Problem wird lösbar.", "Das Problem hat gelöst."],
        correctIndex: 0,
        explanation: "'-bar' adjectives replace 'kann ... werden'. lösbar = can be solved."
      },
      {
        type: "listening",
        phrase: "Das lässt sich leider nicht ändern.",
        translation: "Unfortunately, that can't be changed.",
        speed: "normal"
      }
    ]
  },
  "lb2_04": {
    id: "lb2_04",
    title: "Erweiterte Partizipialattribute (Extended Participle Phrases)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Compressing Relative Clauses into Adjective Phrases",
        explanation: "In formal/written German, relative clauses are often compressed into participial attributes placed BETWEEN the article and noun. This is one of the hardest B2 structures but makes your writing sound very academic.",
        examples: [
          { de: "Relative clause: Der Student, der aus China kommt, lernt Deutsch.", en: "The student who comes from China learns German." },
          { de: "Partizipialattribut: Der aus China kommende Student lernt Deutsch.", en: "The from-China-coming student learns German." },
          { de: "Relative clause: Das Auto, das gestern repariert wurde, fährt wieder.", en: "The car that was repaired yesterday drives again." },
          { de: "Partizipialattribut: Das gestern reparierte Auto fährt wieder.", en: "The yesterday-repaired car drives again." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "der ankommende Zug", phonetic: "an-ko-men-de tsook", meaning: "the arriving train", example: { de: "Der in München ankommende Zug hat Verspätung.", en: "The train arriving in Munich is delayed." } },
          { word: "die veröffentlichte Studie", phonetic: "fer-öf-fent-likh-te", meaning: "the published study", example: { de: "Die kürzlich veröffentlichte Studie zeigt...", en: "The recently published study shows..." } },
          { word: "das betroffene Gebiet", phonetic: "be-trof-fe-ne", meaning: "the affected area", example: { de: "Das vom Hochwasser betroffene Gebiet ist groß.", en: "The area affected by flooding is large." } },
          { word: "die steigende Nachfrage", phonetic: "shtay-gen-de", meaning: "the rising demand", example: { de: "Die weltweit steigende Nachfrage nach Energie...", en: "The globally rising demand for energy..." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Convert: 'Das Buch, das von Kafka geschrieben wurde, ist berühmt.'",
        options: ["Das von Kafka geschriebene Buch ist berühmt.", "Das Kafka geschrieben Buch ist berühmt.", "Das geschriebenes von Kafka Buch ist berühmt.", "Das Buch geschrieben von Kafka ist berühmt."],
        correctIndex: 0,
        explanation: "The entire phrase 'von Kafka geschrieben' goes between article 'Das' and noun 'Buch'. The Partizip II 'geschrieben' gets adjective ending '-e' (neuter nominative after 'das')."
      }
    ]
  },
  "lb2_05": {
    id: "lb2_05",
    title: "Nominalisierung — From Verbal to Nominal Style",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Making Your Writing Sound Academic",
        explanation: "Nominalisierung means converting verbs/adjectives into nouns to create denser, more formal sentences. This is essential for B2 Schreiben and understanding German academic/business texts. Common patterns: verb → noun (-ung, -tion, -heit, -keit, -nis).",
        examples: [
          { de: "Verbal: Man muss das Problem lösen.", en: "One must solve the problem." },
          { de: "Nominal: Die Lösung des Problems ist notwendig.", en: "The solution of the problem is necessary." },
          { de: "Verbal: Die Bevölkerung wächst schnell.", en: "The population is growing quickly." },
          { de: "Nominal: Das schnelle Wachstum der Bevölkerung...", en: "The rapid growth of the population..." },
          { de: "Verbal: Er entschied, nach Berlin zu ziehen.", en: "He decided to move to Berlin." },
          { de: "Nominal: Seine Entscheidung, nach Berlin zu ziehen...", en: "His decision to move to Berlin..." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Lösung (lösen)", phonetic: "lö-zoong", meaning: "the solution (to solve)", example: { de: "Wir suchen eine Lösung für das Problem.", en: "We're looking for a solution to the problem." } },
          { word: "die Entwicklung (entwickeln)", phonetic: "ent-vik-loong", meaning: "the development (to develop)", example: { de: "Die Entwicklung neuer Technologien...", en: "The development of new technologies..." } },
          { word: "die Entscheidung (entscheiden)", phonetic: "ent-shy-doong", meaning: "the decision (to decide)", example: { de: "Die Entscheidung des Gerichts war überraschend.", en: "The court's decision was surprising." } },
          { word: "die Verbesserung (verbessern)", phonetic: "fer-bes-se-roong", meaning: "the improvement (to improve)", example: { de: "Die Verbesserung der Luftqualität...", en: "The improvement of air quality..." } },
          { word: "die Bedeutung (bedeuten)", phonetic: "be-doy-toong", meaning: "the meaning/significance (to mean)", example: { de: "Die Bedeutung dieser Entdeckung ist enorm.", en: "The significance of this discovery is enormous." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Die ",
        sentenceAfter: " des Klimawandels erfordert internationale Zusammenarbeit.",
        missingWord: "Bekämpfung",
        translation: "The combating of climate change requires international cooperation. (bekämpfen → Bekämpfung)"
      }
    ]
  },
  "lb2_06": {
    id: "lb2_06",
    title: "Verbalisierung — From Nominal Back to Verbal Style",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "When Nominal Style Gets Too Heavy",
        explanation: "Verbalisierung is the reverse: converting noun phrases back into clauses. This is needed when the nominal style becomes too dense or unclear. Key transformations: Noun + Genitiv → Nebensatz with dass/weil/wenn.",
        examples: [
          { de: "Nominal: Nach dem Erhalt des Briefes...", en: "After receipt of the letter..." },
          { de: "Verbal: Nachdem er den Brief erhalten hatte...", en: "After he had received the letter..." },
          { de: "Nominal: Wegen der Schließung der Fabrik...", en: "Because of the closure of the factory..." },
          { de: "Verbal: Weil die Fabrik geschlossen wurde...", en: "Because the factory was closed..." },
          { de: "Nominal: Trotz der hohen Kosten...", en: "Despite the high costs..." },
          { de: "Verbal: Obwohl die Kosten hoch sind...", en: "Although the costs are high..." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "wegen + Genitiv → weil + Nebensatz", phonetic: "vay-gen → vayl", meaning: "because of → because", example: { de: "Wegen des Regens → Weil es regnet", en: "Because of the rain → Because it rains" } },
          { word: "trotz + Genitiv → obwohl + Nebensatz", phonetic: "trots → ob-vohl", meaning: "despite → although", example: { de: "Trotz des Erfolgs → Obwohl er Erfolg hatte", en: "Despite the success → Although he had success" } },
          { word: "während + Genitiv → während + Nebensatz", phonetic: "veh-rent", meaning: "during → while", example: { de: "Während des Studiums → Während er studierte", en: "During his studies → While he was studying" } },
          { word: "nach + Dativ → nachdem + Nebensatz", phonetic: "nakh → nakh-dem", meaning: "after (noun) → after (clause)", example: { de: "Nach der Prüfung → Nachdem er die Prüfung bestanden hatte", en: "After the exam → After he had passed the exam" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Convert to verbal style: 'Wegen der Verspätung des Zuges verpasste sie den Termin.'",
        options: ["Weil der Zug Verspätung hatte, verpasste sie den Termin.", "Der Zug hat Verspätung und sie verpasste den Termin.", "Trotz der Verspätung verpasste sie den Termin.", "Als der Zug kam, verpasste sie den Termin."],
        correctIndex: 0,
        explanation: "'Wegen + Genitiv' → 'Weil + Nebensatz'. The noun 'Verspätung' becomes a clause: 'der Zug Verspätung hatte'."
      }
    ]
  },
  "lb2_07": {
    id: "lb2_07",
    title: "Genitiv Advanced — Prepositions & Formal Usage",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Genitiv Prepositions You Must Know for B2",
        explanation: "At B2, you need to master Genitiv prepositions beyond 'wegen' and 'trotz'. These are essential for formal writing and are tested in the Schreiben module. Many students avoid them — but they're what separates B1 from B2.",
        examples: [
          { de: "innerhalb der Stadt (within the city)", en: "Used for spatial/temporal boundaries" },
          { de: "außerhalb des Gebäudes (outside the building)", en: "Opposite of innerhalb" },
          { de: "angesichts der Krise (in view of the crisis)", en: "Formal: considering/given" },
          { de: "hinsichtlich der Qualität (regarding the quality)", en: "Formal: with regard to" },
          { de: "infolge des Unfalls (as a result of the accident)", en: "Consequence-focused" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "innerhalb + Genitiv", phonetic: "in-ner-halb", meaning: "within / inside of", example: { de: "Innerhalb eines Jahres hat sich viel verändert.", en: "Within a year, a lot has changed." } },
          { word: "außerhalb + Genitiv", phonetic: "ow-ser-halb", meaning: "outside of", example: { de: "Außerhalb der Öffnungszeiten ist das Büro geschlossen.", en: "Outside of business hours, the office is closed." } },
          { word: "angesichts + Genitiv", phonetic: "an-ge-zikhts", meaning: "in view of / considering", example: { de: "Angesichts der steigenden Preise müssen wir sparen.", en: "Considering the rising prices, we need to save." } },
          { word: "hinsichtlich + Genitiv", phonetic: "hin-zikht-likh", meaning: "with regard to / regarding", example: { de: "Hinsichtlich Ihrer Bewerbung möchte ich Ihnen mitteilen...", en: "Regarding your application, I would like to inform you..." } },
          { word: "infolge + Genitiv", phonetic: "in-fol-ge", meaning: "as a result of / due to", example: { de: "Infolge des Sturms wurden Bäume entwurzelt.", en: "As a result of the storm, trees were uprooted." } },
          { word: "anhand + Genitiv", phonetic: "an-hant", meaning: "on the basis of / by means of", example: { de: "Anhand der Daten können wir Folgendes feststellen...", en: "On the basis of the data, we can determine the following..." } },
          { word: "aufgrund + Genitiv", phonetic: "owf-groont", meaning: "due to / on account of", example: { de: "Aufgrund des schlechten Wetters fällt das Fest aus.", en: "Due to the bad weather, the festival is cancelled." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "",
        sentenceAfter: " der aktuellen Lage müssen wir neue Maßnahmen ergreifen.",
        missingWord: "Angesichts",
        translation: "In view of the current situation, we must take new measures."
      },
      {
        type: "listening",
        phrase: "Hinsichtlich Ihrer Anfrage können wir Ihnen leider keine Auskunft geben.",
        translation: "Regarding your inquiry, unfortunately we cannot provide you with any information.",
        speed: "normal"
      }
    ]
  },
  "lb2_08": {
    id: "lb2_08",
    title: "Konjunktiv I — Practice with Newspaper Headlines",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Reading German News Like a Native",
        explanation: "In German newspapers (Süddeutsche Zeitung, Die Zeit, Spiegel), Konjunktiv I is everywhere. Key signal words: 'laut' (according to), 'zufolge' (according to), 'angeblich' (allegedly). Practice reading these structures to prepare for B2 Lesen.",
        examples: [
          { de: "Laut Regierung sei die Lage unter Kontrolle.", en: "According to the government, the situation is under control." },
          { de: "Einem Bericht zufolge hätten die Verhandlungen begonnen.", en: "According to a report, negotiations have begun." },
          { de: "Der Verdächtige habe angeblich das Land verlassen.", en: "The suspect allegedly left the country." },
          { de: "Die Ministerin betonte, man müsse schnell handeln.", en: "The minister emphasized that one must act quickly." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "laut + Dativ", phonetic: "lowt", meaning: "according to", example: { de: "Laut der Polizei gebe es keine Verletzten.", en: "According to the police, there are no injuries." } },
          { word: "zufolge + Dativ", phonetic: "tsoo-fol-ge", meaning: "according to (postposition)", example: { de: "Berichten zufolge sei ein Erdbeben aufgetreten.", en: "According to reports, an earthquake has occurred." } },
          { word: "angeblich", phonetic: "an-geb-likh", meaning: "allegedly / reportedly", example: { de: "Er habe angeblich den Vertrag unterschrieben.", en: "He allegedly signed the contract." } },
          { word: "behaupten", phonetic: "be-howp-ten", meaning: "to claim / to assert", example: { de: "Der Zeuge behauptet, er habe nichts gesehen.", en: "The witness claims he saw nothing." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which sentence correctly uses Konjunktiv I for news reporting?",
        options: [
          "Laut der Polizei ist der Täter geflohen.",
          "Laut der Polizei sei der Täter geflohen.",
          "Laut der Polizei wäre der Täter geflohen.",
          "Laut der Polizei war der Täter geflohen."
        ],
        correctIndex: 1,
        explanation: "'sei geflohen' is Konjunktiv I Perfekt — the correct form for reporting news. 'wäre' would be Konjunktiv II (hypothetical), and plain 'ist' is Indikativ (stating fact)."
      }
    ]
  }
};
