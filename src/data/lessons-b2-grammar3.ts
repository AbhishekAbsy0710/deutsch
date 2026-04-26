import { Lesson } from "./lessons";

export const lessonsB2Grammar3: Record<string, Lesson> = {
  "lb2_17": {
    id: "lb2_17",
    title: "Kausale Konnektoren B2 (Cause & Reason)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Beyond 'weil' and 'deshalb'",
        explanation: "At B2, you need sophisticated cause-and-effect connectors. These are divided by type: Nebensatz-Konnektoren (verb at end) vs. Hauptsatz-Konnektoren (verb in position 2 or inversed). Mixing both types makes your writing sound natural.",
        examples: [
          { de: "aufgrund + Genitiv: Aufgrund des Wetters blieb er zu Hause.", en: "Due to the weather, he stayed at home." },
          { de: "infolgedessen: Es regnete stark. Infolgedessen wurde das Spiel abgesagt.", en: "It rained heavily. As a result, the game was cancelled." },
          { de: "demzufolge: Er hat die Prüfung bestanden. Demzufolge kann er sich einschreiben.", en: "He passed the exam. Consequently, he can enroll." },
          { de: "nämlich: Er kam zu spät, er hatte nämlich den Bus verpasst.", en: "He arrived late — he had missed the bus, you see." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "infolgedessen", phonetic: "in-fol-ge-des-sen", meaning: "as a result / consequently", example: { de: "Die Kosten stiegen. Infolgedessen mussten Stellen gestrichen werden.", en: "Costs rose. Consequently, positions had to be cut." } },
          { word: "demzufolge", phonetic: "dem-tsoo-fol-ge", meaning: "according to that / consequently", example: { de: "Die Studie zeigt, dass... Demzufolge müssen wir handeln.", en: "The study shows that... Consequently, we must act." } },
          { word: "aufgrund + Genitiv", phonetic: "owf-groont", meaning: "due to / on account of", example: { de: "Aufgrund technischer Probleme verspätet sich der Zug.", en: "Due to technical problems, the train is delayed." } },
          { word: "zumal", phonetic: "tsoo-mahl", meaning: "especially since / particularly as", example: { de: "Das ist wichtig, zumal die Zeit drängt.", en: "That is important, especially since time is pressing." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Die Inflation stieg stark. ",
        sentenceAfter: " mussten viele Unternehmen die Preise erhöhen.",
        missingWord: "Infolgedessen",
        translation: "Inflation rose sharply. As a result, many companies had to raise prices."
      }
    ]
  },
  "lb2_18": {
    id: "lb2_18",
    title: "Konditionale Konnektoren B2 (Conditions)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Beyond 'wenn' — Advanced Conditional Connectors",
        explanation: "B2 requires more precise conditional expressions than simple 'wenn'. These connectors add nuance: some set strict prerequisites, others express unlikely conditions, and some restrict the condition.",
        examples: [
          { de: "sofern: Sofern Sie die Unterlagen einreichen, bearbeiten wir Ihren Antrag.", en: "Provided that you submit the documents, we will process your application." },
          { de: "vorausgesetzt, dass: Vorausgesetzt, dass alle zustimmen, können wir beginnen.", en: "Provided that everyone agrees, we can begin." },
          { de: "es sei denn: Ich komme morgen, es sei denn, es regnet.", en: "I'll come tomorrow, unless it rains." },
          { de: "falls: Falls Sie Fragen haben, rufen Sie uns an.", en: "In case you have questions, call us." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "sofern", phonetic: "zo-fern", meaning: "provided that / insofar as", example: { de: "Sofern das Budget es erlaubt, werden wir expandieren.", en: "Provided the budget allows, we will expand." } },
          { word: "vorausgesetzt, (dass)", phonetic: "for-ows-ge-zetst", meaning: "provided that / on the condition that", example: { de: "Vorausgesetzt, Sie haben Erfahrung, können Sie sich bewerben.", en: "Provided you have experience, you can apply." } },
          { word: "es sei denn", phonetic: "es zay den", meaning: "unless", example: { de: "Wir treffen uns um 8, es sei denn, du hast andere Pläne.", en: "We'll meet at 8, unless you have other plans." } },
          { word: "falls", phonetic: "fals", meaning: "in case / if (less certain than wenn)", example: { de: "Falls es Probleme gibt, melden Sie sich.", en: "In case there are problems, get in touch." } },
          { word: "unter der Bedingung, dass", phonetic: "oon-ter dair be-ding-oong", meaning: "on the condition that", example: { de: "Ich helfe dir, unter der Bedingung, dass du auch etwas tust.", en: "I'll help you, on the condition that you also do something." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which connector means 'unless'?",
        options: ["sofern", "vorausgesetzt", "es sei denn", "falls"],
        correctIndex: 2,
        explanation: "'es sei denn' = unless. It negates the condition: 'I'll do X, unless Y happens.'"
      }
    ]
  },
  "lb2_19": {
    id: "lb2_19",
    title: "Konzessive Konnektoren B2 (Concession & Contrast)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Beyond 'trotzdem' — Saying 'Even Though / Nevertheless'",
        explanation: "Concessive connectors express that something happens DESPITE an opposing factor. At B2, upgrade from 'trotzdem' and 'obwohl' to more sophisticated alternatives.",
        examples: [
          { de: "gleichwohl: Er war müde. Gleichwohl arbeitete er weiter.", en: "He was tired. Nevertheless, he continued working." },
          { de: "nichtsdestotrotz: Es gibt Probleme. Nichtsdestotrotz machen wir weiter.", en: "There are problems. Nonetheless, we continue." },
          { de: "ungeachtet + Genitiv: Ungeachtet der Risiken investierte er.", en: "Regardless of the risks, he invested." },
          { de: "wenn auch: Wenn auch schwierig, so ist das Ziel erreichbar.", en: "Even if difficult, the goal is achievable." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "gleichwohl", phonetic: "glaykh-vohl", meaning: "nevertheless / nonetheless (literary)", example: { de: "Die Lage ist ernst. Gleichwohl gibt es Hoffnung.", en: "The situation is serious. Nevertheless, there is hope." } },
          { word: "nichtsdestotrotz", phonetic: "nikhts-des-to-trots", meaning: "nonetheless / notwithstanding", example: { de: "Das Projekt ist teuer. Nichtsdestotrotz lohnt es sich.", en: "The project is expensive. Nonetheless, it's worth it." } },
          { word: "ungeachtet + Genitiv", phonetic: "oon-ge-akh-tet", meaning: "regardless of / irrespective of", example: { de: "Ungeachtet der Kritik setzte sie ihren Plan um.", en: "Regardless of the criticism, she implemented her plan." } },
          { word: "wenn auch / wenngleich", phonetic: "ven owkh / ven-glaykh", meaning: "even though / albeit", example: { de: "Wenngleich das Risiko hoch ist, müssen wir es versuchen.", en: "Even though the risk is high, we must try." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Die Verhandlungen waren schwierig. ",
        sentenceAfter: " konnte man sich auf einen Kompromiss einigen.",
        missingWord: "Nichtsdestotrotz",
        translation: "The negotiations were difficult. Nonetheless, they were able to agree on a compromise."
      }
    ]
  },
  "lb2_20": {
    id: "lb2_20",
    title: "Temporale Konnektoren B2 (Advanced Time Connectors)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Precise Time Relationships",
        explanation: "B2 requires precise temporal connectors beyond 'nachdem/bevor'. These express the exact timing relationship between two events.",
        examples: [
          { de: "ehe (= bevor, but more formal): Ehe Sie gehen, unterschreiben Sie bitte.", en: "Before you leave, please sign." },
          { de: "kaum dass: Kaum dass er angekommen war, klingelte das Telefon.", en: "No sooner had he arrived than the phone rang." },
          { de: "solange: Solange es Probleme gibt, können wir nicht starten.", en: "As long as there are problems, we can't start." },
          { de: "bis: Warte, bis ich fertig bin.", en: "Wait until I'm done." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "ehe", phonetic: "ay-uh", meaning: "before (formal / literary)", example: { de: "Ehe wir beginnen, möchte ich etwas klarstellen.", en: "Before we begin, I'd like to clarify something." } },
          { word: "kaum dass", phonetic: "kowm das", meaning: "no sooner ... than / hardly ... when", example: { de: "Kaum dass die Sonne aufging, machten wir uns auf den Weg.", en: "No sooner had the sun risen than we set off." } },
          { word: "solange", phonetic: "zo-lang-uh", meaning: "as long as", example: { de: "Solange du hier bist, fühle ich mich sicher.", en: "As long as you're here, I feel safe." } },
          { word: "inzwischen / währenddessen", phonetic: "in-tsvi-shen / veh-rent-des-sen", meaning: "meanwhile / in the meantime", example: { de: "Er arbeitet. Währenddessen kocht sie.", en: "He works. Meanwhile, she cooks." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Kaum dass er die Nachricht gelesen hatte, rief er seinen Chef an.' — What does this mean?",
        options: ["He didn't read the message.", "He rarely reads messages.", "No sooner had he read the message than he called his boss.", "He almost read the message."],
        correctIndex: 2,
        explanation: "'Kaum dass' = 'No sooner ... than' — it emphasizes immediate succession of two events."
      }
    ]
  },
  "lb2_21": {
    id: "lb2_21",
    title: "Konsekutive & Finale Konnektoren B2",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Result & Purpose Connectors",
        explanation: "Konsekutive Konnektoren express RESULTS. Finale Konnektoren express PURPOSE. Knowing the difference is critical for B2 writing — examiners look for precise connector usage.",
        examples: [
          { de: "RESULT: Er war so müde, dass er einschlief. (so...dass)", en: "He was so tired that he fell asleep." },
          { de: "RESULT: Es regnete stark, sodass das Spiel ausfiel.", en: "It rained heavily, so that the game was cancelled." },
          { de: "PURPOSE: Ich lerne Deutsch, damit ich in Deutschland arbeiten kann.", en: "I'm learning German so that I can work in Germany." },
          { de: "PURPOSE: Ich lerne Deutsch, um in Deutschland zu arbeiten.", en: "I'm learning German in order to work in Germany." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "sodass / so dass", phonetic: "zo-das", meaning: "so that (result)", example: { de: "Die Straßen waren glatt, sodass es viele Unfälle gab.", en: "The roads were slippery, so there were many accidents." } },
          { word: "folglich", phonetic: "folk-likh", meaning: "consequently / therefore", example: { de: "Die Nachfrage sank. Folglich mussten Preise gesenkt werden.", en: "Demand fell. Consequently, prices had to be lowered." } },
          { word: "damit", phonetic: "da-mit", meaning: "so that (purpose, different subjects)", example: { de: "Ich erkläre es, damit du es verstehst.", en: "I explain it so that you understand." } },
          { word: "um ... zu + Infinitiv", phonetic: "um tsoo", meaning: "in order to (purpose, same subject)", example: { de: "Er spart, um ein Haus zu kaufen.", en: "He saves in order to buy a house." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which is the correct PURPOSE connector for: 'Ich lerne, ___ gute Noten zu bekommen.'",
        options: ["sodass", "folglich", "um", "infolgedessen"],
        correctIndex: 2,
        explanation: "'um ... zu' is for purpose (same subject). 'sodass' is for result. Big difference!"
      }
    ]
  },
  "lb2_22": {
    id: "lb2_22",
    title: "Modale & Instrumentale Konnektoren",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "How & By What Means — indem, dadurch dass, wobei",
        explanation: "These connectors express the METHOD or MANNER in which something is done. 'indem' is the most important — it tells you HOW an action is performed.",
        examples: [
          { de: "indem: Man lernt, indem man übt.", en: "One learns BY practicing." },
          { de: "dadurch, dass: Dadurch, dass er viel liest, verbessert er sein Deutsch.", en: "By reading a lot, he improves his German." },
          { de: "wobei: Er hilft im Haushalt, wobei er am liebsten kocht.", en: "He helps in the household, whereby he likes cooking most." },
          { de: "auf diese Weise: Auf diese Weise können wir Zeit sparen.", en: "In this way, we can save time." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "indem", phonetic: "in-dem", meaning: "by (doing) / by means of", example: { de: "Du kannst helfen, indem du zuhörst.", en: "You can help by listening." } },
          { word: "dadurch, dass", phonetic: "da-durkh das", meaning: "by the fact that / through", example: { de: "Dadurch, dass er trainiert, wird er stärker.", en: "By training, he becomes stronger." } },
          { word: "wobei", phonetic: "vo-bay", meaning: "whereby / although / in which", example: { de: "Das Projekt ist fast fertig, wobei einige Details noch fehlen.", en: "The project is almost done, although some details are still missing." } },
          { word: "insofern", phonetic: "in-zo-fern", meaning: "insofar / in that respect", example: { de: "Das ist insofern wichtig, als es alle betrifft.", en: "That is important insofar as it affects everyone." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Man kann die Umwelt schützen, ",
        sentenceAfter: " man weniger Plastik verwendet.",
        missingWord: "indem",
        translation: "One can protect the environment by using less plastic."
      }
    ]
  },
  "lb2_23": {
    id: "lb2_23",
    title: "Adversative Konnektoren (Contrast & Opposition)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Precise Contrast — Beyond 'aber'",
        explanation: "B2 requires nuanced contrast connectors that distinguish between direct opposition, partial contrast, restriction, and unexpected contrast.",
        examples: [
          { de: "hingegen: Er ist optimistisch. Seine Frau hingegen ist skeptisch.", en: "He is optimistic. His wife, on the other hand, is skeptical." },
          { de: "vielmehr: Das ist kein Fehler, vielmehr eine Chance.", en: "That's not a mistake; rather, it's an opportunity." },
          { de: "stattdessen: Wir fahren nicht nach Italien. Stattdessen bleiben wir hier.", en: "We're not going to Italy. Instead, we're staying here." },
          { de: "dagegen: Er liebt Sport. Sie dagegen bevorzugt Lesen.", en: "He loves sport. She, by contrast, prefers reading." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "hingegen", phonetic: "hin-gay-gen", meaning: "on the other hand / by contrast", example: { de: "München ist teuer. Berlin hingegen ist günstiger.", en: "Munich is expensive. Berlin, on the other hand, is cheaper." } },
          { word: "vielmehr", phonetic: "feel-mair", meaning: "rather / on the contrary", example: { de: "Es ist keine Kritik, vielmehr ein Vorschlag.", en: "It's not criticism; rather, it's a suggestion." } },
          { word: "stattdessen", phonetic: "shtat-des-sen", meaning: "instead (of that)", example: { de: "Er wollte reisen. Stattdessen musste er arbeiten.", en: "He wanted to travel. Instead, he had to work." } },
          { word: "im Gegensatz zu + Dat", phonetic: "im gay-gen-zats tsoo", meaning: "in contrast to / unlike", example: { de: "Im Gegensatz zu seinem Bruder ist er ruhig.", en: "In contrast to his brother, he is quiet." } },
          { word: "einerseits ... andererseits", phonetic: "ay-ner-zyts ... an-de-rer-zyts", meaning: "on the one hand ... on the other hand", example: { de: "Einerseits ist es günstig, andererseits ist die Qualität schlecht.", en: "On the one hand it's cheap, on the other hand the quality is poor." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Im ",
        sentenceAfter: " zu seinen Kollegen arbeitet er sehr schnell.",
        missingWord: "Gegensatz",
        translation: "In contrast to his colleagues, he works very fast."
      }
    ]
  },
  "lb2_24": {
    id: "lb2_24",
    title: "Konnektoren-Masterclass — Combining for B2 Writing",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Putting It All Together",
        explanation: "A B2-level text uses connectors from ALL categories in a single argument. Here's a model paragraph that combines kausal, konzessiv, konsekutiv, adversativ, and final connectors.",
        examples: [
          { de: "Aufgrund der steigenden Energiepreise (kausal) stehen viele Unternehmen unter Druck.", en: "Due to rising energy prices, many companies are under pressure." },
          { de: "Nichtsdestotrotz (konzessiv) investieren einige Firmen in erneuerbare Energien.", en: "Nevertheless, some companies invest in renewable energy." },
          { de: "Folglich (konsekutiv) sinken ihre langfristigen Kosten.", en: "Consequently, their long-term costs decrease." },
          { de: "Im Gegensatz dazu (adversativ) zögern andere noch.", en: "In contrast, others are still hesitating." },
          { de: "Um (final) wettbewerbsfähig zu bleiben, müssen alle handeln.", en: "In order to remain competitive, everyone must act." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "zusammenfassend", phonetic: "tsoo-za-men-fas-sent", meaning: "in summary / to sum up", example: { de: "Zusammenfassend lässt sich sagen, dass...", en: "In summary, it can be said that..." } },
          { word: "abschließend", phonetic: "ap-shlee-sent", meaning: "in conclusion / finally", example: { de: "Abschließend möchte ich betonen, dass...", en: "In conclusion, I would like to emphasize that..." } },
          { word: "insgesamt", phonetic: "ins-ge-zamt", meaning: "overall / altogether", example: { de: "Insgesamt bin ich mit dem Ergebnis zufrieden.", en: "Overall, I am satisfied with the result." } },
          { word: "letzten Endes", phonetic: "lets-ten en-des", meaning: "ultimately / in the end", example: { de: "Letzten Endes kommt es auf die Qualität an.", en: "Ultimately, it comes down to quality." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Zusammenfassend lässt sich sagen, dass die Digitalisierung sowohl Chancen als auch Risiken mit sich bringt.",
        translation: "In summary, it can be said that digitalization brings both opportunities and risks.",
        phonetic: "tsoo-za-men-fas-sent lest zikh zah-gen das dee di-gi-ta-li-zee-roong zo-vohl shan-sen als owkh ri-zi-ken mit zikh bringt",
        tip: "This is a perfect closing sentence for a B2 Schreiben essay."
      }
    ]
  }
};
