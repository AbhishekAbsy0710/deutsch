import { Lesson } from "./lessons";

export const lessonsB2Grammar2: Record<string, Lesson> = {
  "lb2_09": {
    id: "lb2_09",
    title: "Modaler Infinitiv — sein + zu + Infinitiv",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Must/Can Be Done (Without Passive Voice)",
        explanation: "'sein + zu + Infinitiv' is a compact way to express obligation or possibility without using the passive voice. Context determines whether it means 'must' or 'can'. This structure is extremely common in business, legal, and administrative German.",
        examples: [
          { de: "Die Rechnung ist sofort zu bezahlen.", en: "The bill must be paid immediately. (= muss bezahlt werden)" },
          { de: "Das Ergebnis ist noch zu überprüfen.", en: "The result still needs to be verified. (= muss überprüft werden)" },
          { de: "Die Aufgabe ist leicht zu lösen.", en: "The task can be easily solved. (= kann gelöst werden)" },
          { de: "Das Problem ist nicht zu unterschätzen.", en: "The problem must not be underestimated." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "ist zu beachten", phonetic: "ist tsoo be-akh-ten", meaning: "must be observed/noted", example: { de: "Folgendes ist zu beachten.", en: "The following must be noted." } },
          { word: "ist zu empfehlen", phonetic: "ist tsoo em-pfay-len", meaning: "is to be recommended", example: { de: "Dieses Restaurant ist zu empfehlen.", en: "This restaurant is recommended." } },
          { word: "ist nicht zu übersehen", phonetic: "ist nikht tsoo", meaning: "cannot be overlooked", example: { de: "Der Fortschritt ist nicht zu übersehen.", en: "The progress cannot be overlooked." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Der Antrag ",
        sentenceAfter: " bis Freitag einzureichen.",
        missingWord: "ist",
        translation: "The application must be submitted by Friday."
      }
    ]
  },
  "lb2_10": {
    id: "lb2_10",
    title: "Subjektlose Passivkonstruktionen (Subjectless Passive)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "'Es wird getanzt!' — Passive Without a Subject",
        explanation: "In German, you can form passive sentences without a grammatical subject. These describe activities in general, without specifying who does them. 'Es' is used as a placeholder when the sentence starts with it, but disappears in other positions.",
        examples: [
          { de: "Es wird hier nicht geraucht.", en: "There is no smoking here." },
          { de: "Hier wird nicht geraucht. (no 'es' needed)", en: "Same meaning — 'es' drops when not in first position." },
          { de: "Es wurde viel gelacht.", en: "There was a lot of laughing." },
          { de: "Auf der Party wurde getanzt und gesungen.", en: "At the party there was dancing and singing." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Es wird gearbeitet.", phonetic: "es virt ge-ar-by-tet", meaning: "Work is being done. / There is work going on.", example: { de: "In diesem Büro wird hart gearbeitet.", en: "In this office, people work hard." } },
          { word: "Es wird diskutiert.", phonetic: "es virt dis-koo-teert", meaning: "There is discussion. / People are discussing.", example: { de: "Über das Thema wird viel diskutiert.", en: "The topic is much discussed." } },
          { word: "Es wurde beschlossen.", phonetic: "es vur-de be-shlos-sen", meaning: "It was decided.", example: { de: "Es wurde beschlossen, das Projekt fortzusetzen.", en: "It was decided to continue the project." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "How do you say 'No eating here!' using subjectless passive?",
        options: ["Hier wird nicht gegessen!", "Hier isst man nicht!", "Es ist nicht zu essen!", "Hier essen verboten!"],
        correctIndex: 0,
        explanation: "Subjectless passive: 'Hier wird nicht gegessen!' — the 'Es' drops because 'Hier' takes Position 1."
      }
    ]
  },
  "lb2_11": {
    id: "lb2_11",
    title: "Futur I & II für Vermutungen (Future Tense for Guessing)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Using Future Tense to Express Probability",
        explanation: "In German, Futur I (werden + Infinitiv) and Futur II (werden + Partizip II + haben/sein) are often used NOT for future actions but to express GUESSES and ASSUMPTIONS about present or past events. This is a key B2 nuance.",
        examples: [
          { de: "Er wird wohl krank sein. (Futur I = present guess)", en: "He is probably sick. (NOT: He will be sick)" },
          { de: "Sie wird vermutlich im Büro sein.", en: "She is presumably at the office." },
          { de: "Er wird das wohl vergessen haben. (Futur II = past guess)", en: "He has probably forgotten that." },
          { de: "Sie werden den Zug verpasst haben.", en: "They have probably missed the train." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "wird wohl ... sein", phonetic: "virt vohl zayn", meaning: "is probably... (present guess)", example: { de: "Er wird wohl zu Hause sein.", en: "He is probably at home." } },
          { word: "wird ... haben (Futur II)", phonetic: "virt hah-ben", meaning: "has probably... (past guess)", example: { de: "Sie wird es vergessen haben.", en: "She has probably forgotten it." } },
          { word: "wohl", phonetic: "vohl", meaning: "probably / I suppose", example: { de: "Das wird wohl stimmen.", en: "That's probably true." } },
          { word: "vermutlich", phonetic: "fer-moot-likh", meaning: "presumably", example: { de: "Er wird vermutlich nicht kommen.", en: "He presumably won't come." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Er wird wohl schon gegessen haben.' — What does this mean?",
        options: ["He will eat.", "He is eating.", "He has probably already eaten.", "He should eat."],
        correctIndex: 2,
        explanation: "Futur II + 'wohl' = a guess about a past event. 'wird ... gegessen haben' = has probably eaten."
      }
    ]
  },
  "lb2_12": {
    id: "lb2_12",
    title: "Das Wort 'es' — Placeholder, Subject & Fixed Expressions",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "The Many Faces of 'es'",
        explanation: "'es' has multiple functions in German: (1) real subject (Es regnet), (2) placeholder that disappears (Es kommen viele Leute → Viele Leute kommen), (3) fixed in expressions (Es gibt, Es geht um), (4) correlative 'es' anticipating a dass-clause.",
        examples: [
          { de: "Es regnet. (real subject — can't remove 'es')", en: "It's raining." },
          { de: "Es kommen viele Leute. → Viele Leute kommen. (placeholder)", en: "'Es' drops when position 1 is occupied." },
          { de: "Es gibt keine Alternative. (fixed expression)", en: "There is no alternative." },
          { de: "Es ist wichtig, dass wir pünktlich sind. (correlative)", en: "It is important that we are on time." },
          { de: "Ich finde es gut, dass du kommst. (Akkusativ-es)", en: "I find it good that you're coming." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Es geht um + Akk", phonetic: "es gayt um", meaning: "it's about / it concerns", example: { de: "Es geht um die Zukunft.", en: "It's about the future." } },
          { word: "Es handelt sich um + Akk", phonetic: "es han-delt zikh um", meaning: "it concerns / it's a matter of", example: { de: "Es handelt sich um ein Missverständnis.", en: "It's a misunderstanding." } },
          { word: "Es kommt darauf an", phonetic: "es komt da-rowf an", meaning: "it depends", example: { de: "Es kommt darauf an, wie man es sieht.", en: "It depends on how you see it." } },
          { word: "Es lohnt sich", phonetic: "es lohnt zikh", meaning: "it's worth it", example: { de: "Es lohnt sich, Deutsch zu lernen.", en: "It's worth it to learn German." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "",
        sentenceAfter: " sich herausgestellt, dass die Daten falsch waren.",
        missingWord: "Es hat",
        translation: "It turned out that the data was incorrect."
      }
    ]
  },
  "lb2_13": {
    id: "lb2_13",
    title: "Verben mit Präpositionen — Systematic Mastery",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "The Verb-Preposition Combinations You Must Know",
        explanation: "German verbs often require specific prepositions that don't translate directly from English. At B2, you must know these combinations with their correct cases (Akkusativ or Dativ). Learn them as fixed units.",
        examples: [
          { de: "sich gewöhnen AN + Akk (to get used to)", en: "Ich habe mich an das Klima gewöhnt." },
          { de: "verzichten AUF + Akk (to do without / give up)", en: "Er verzichtet auf Alkohol." },
          { de: "sich beschäftigen MIT + Dat (to deal with / work on)", en: "Sie beschäftigt sich mit dem Thema Nachhaltigkeit." },
          { de: "abhängen VON + Dat (to depend on)", en: "Das hängt vom Wetter ab." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "sich beziehen auf + Akk", phonetic: "zikh be-tsee-en owf", meaning: "to refer to", example: { de: "Ich beziehe mich auf Ihren Brief.", en: "I refer to your letter." } },
          { word: "beitragen zu + Dat", phonetic: "by-trah-gen tsoo", meaning: "to contribute to", example: { de: "Das trägt zur Lösung bei.", en: "That contributes to the solution." } },
          { word: "bestehen aus + Dat", phonetic: "be-shtay-en ows", meaning: "to consist of", example: { de: "Das Team besteht aus fünf Personen.", en: "The team consists of five people." } },
          { word: "sich unterscheiden von + Dat", phonetic: "oon-ter-shy-den fon", meaning: "to differ from", example: { de: "Deutsch unterscheidet sich von Englisch.", en: "German differs from English." } },
          { word: "sich handeln um + Akk", phonetic: "han-deln um", meaning: "to be about / concern", example: { de: "Es handelt sich um eine dringende Angelegenheit.", en: "It concerns an urgent matter." } },
          { word: "sich eignen für + Akk", phonetic: "ayg-nen für", meaning: "to be suitable for", example: { de: "Das eignet sich für Anfänger.", en: "That is suitable for beginners." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Complete: 'Ich muss mich ___ die neue Situation gewöhnen.'",
        options: ["auf", "an", "mit", "von"],
        correctIndex: 1,
        explanation: "'sich gewöhnen AN + Akk' = to get used to. Always learn the preposition with the verb!"
      }
    ]
  },
  "lb2_14": {
    id: "lb2_14",
    title: "Appositionen (Appositives/Parenthetical Additions)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Adding Extra Information Between Commas",
        explanation: "An Apposition is additional information placed right after a noun, set off by commas. The apposition takes the SAME CASE as the noun it refers to. This makes your writing richer and more informative.",
        examples: [
          { de: "Berlin, die Hauptstadt Deutschlands, hat über 3 Millionen Einwohner.", en: "Berlin, the capital of Germany, has over 3 million residents." },
          { de: "Herr Müller, unser neuer Nachbar, kommt aus München.", en: "Mr. Müller, our new neighbor, comes from Munich." },
          { de: "Ich habe Herrn Müller, unsereN neueN NachbarN, eingeladen. (Akkusativ!)", en: "I invited Mr. Müller, our new neighbor. (same case!)" },
          { de: "Goethe, einer der bedeutendsten deutschen Dichter, wurde in Frankfurt geboren.", en: "Goethe, one of the most significant German poets, was born in Frankfurt." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "einer der + Superlativ + Plural", phonetic: "ay-ner dair", meaning: "one of the most...", example: { de: "Einstein, einer der größten Physiker aller Zeiten...", en: "Einstein, one of the greatest physicists of all time..." } },
          { word: "also known as / called", phonetic: "ge-nant", meaning: "genannt (in appositives)", example: { de: "J.W. von Goethe, auch 'der Dichterfürst' genannt,...", en: "Goethe, also called 'the prince of poets'..." } },
          { word: "d.h. (das heißt)", phonetic: "das hayst", meaning: "i.e. (that is)", example: { de: "Der Bund, d.h. die Bundesregierung, entscheidet.", en: "The federation, i.e. the federal government, decides." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Die Donau, ",
        sentenceAfter: ", fließt durch zehn Länder.",
        missingWord: "der zweitlängste Fluss Europas",
        translation: "The Danube, the second-longest river in Europe, flows through ten countries."
      }
    ]
  },
  "lb2_15": {
    id: "lb2_15",
    title: "Subjektive Bedeutung der Modalverben",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "When Modal Verbs Express Opinions, Not Facts",
        explanation: "At B2, modal verbs gain a SUBJECTIVE meaning — they express the speaker's assumption or attitude, not objective ability/obligation. 'Er muss krank sein' doesn't mean he's obligated to be sick — it means 'He must be sick (I'm almost certain).'",
        examples: [
          { de: "müssen (subjektiv): Er muss krank sein. (= Ich bin fast sicher.)", en: "He must be sick. (= I'm almost certain.)" },
          { de: "dürfte (subjektiv): Es dürfte schwierig werden. (= wahrscheinlich)", en: "It's likely to be difficult. (= probably)" },
          { de: "sollen (subjektiv): Er soll sehr reich sein. (= Man sagt, dass...)", en: "He is said to be very rich. (= reportedly)" },
          { de: "wollen (subjektiv): Er will das selbst gesehen haben. (= Er behauptet...)", en: "He claims to have seen it himself. (= He asserts...)" },
          { de: "mag (subjektiv): Das mag sein. (= Vielleicht ist das so.)", en: "That may be. (= Perhaps that's so.)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "dürfte (subjektiv)", phonetic: "dürf-te", meaning: "is likely to / probably", example: { de: "Das dürfte kein Problem sein.", en: "That's probably not a problem." } },
          { word: "soll (subjektiv)", phonetic: "zol", meaning: "is said to / reportedly", example: { de: "Das Hotel soll sehr gut sein.", en: "The hotel is said to be very good." } },
          { word: "will ... haben (subjektiv)", phonetic: "vil hah-ben", meaning: "claims to have", example: { de: "Er will das nicht gewusst haben.", en: "He claims not to have known that." } },
          { word: "kann (subjektiv)", phonetic: "kan", meaning: "could possibly / might", example: { de: "Das kann nicht stimmen.", en: "That can't be right." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What does 'Er soll sehr intelligent sein' mean in its subjective usage?",
        options: ["He should be very intelligent (advice).", "He is said to be very intelligent (hearsay).", "He wants to be very intelligent.", "He must be very intelligent (certainty)."],
        correctIndex: 1,
        explanation: "Subjective 'sollen' = reportedly / it is said that. It conveys hearsay, not obligation."
      }
    ]
  },
  "lb2_16": {
    id: "lb2_16",
    title: "Indirekte Rede — Full Tense System",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Reporting in All Tenses",
        explanation: "Indirect speech in German uses Konjunktiv I across all tenses. At B2, you must handle the full system: Gegenwart (sei/habe), Vergangenheit (habe gemacht/sei gegangen), and Zukunft (werde machen). Combine with reporting verbs: sagen, behaupten, erklären, betonen, mitteilen.",
        examples: [
          { de: "Gegenwart: Er sagt, er lerne Deutsch.", en: "He says he is learning German." },
          { de: "Vergangenheit: Er sagt, er habe Deutsch gelernt.", en: "He says he learned German." },
          { de: "Zukunft: Er sagt, er werde Deutsch lernen.", en: "He says he will learn German." },
          { de: "Mit Modalverb: Er sagt, er könne Deutsch sprechen.", en: "He says he can speak German." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "behaupten", phonetic: "be-howp-ten", meaning: "to claim / to assert", example: { de: "Er behauptet, er habe das Geld bezahlt.", en: "He claims he paid the money." } },
          { word: "erklären", phonetic: "er-kleh-ren", meaning: "to explain / to declare", example: { de: "Die Firma erklärte, sie werde 100 neue Stellen schaffen.", en: "The company declared it would create 100 new jobs." } },
          { word: "betonen", phonetic: "be-toh-nen", meaning: "to emphasize / to stress", example: { de: "Der Sprecher betonte, die Maßnahmen seien notwendig.", en: "The spokesperson emphasized that the measures are necessary." } },
          { word: "mitteilen", phonetic: "mit-ty-len", meaning: "to inform / to communicate", example: { de: "Das Ministerium teilte mit, die Reform werde umgesetzt.", en: "The ministry communicated that the reform would be implemented." } },
          { word: "berichten", phonetic: "be-rikh-ten", meaning: "to report", example: { de: "Die Zeitung berichtet, der Verdächtige sei geflohen.", en: "The newspaper reports that the suspect has fled." } }
        ]
      },
      {
        type: "listening",
        phrase: "Der Präsident erklärte, die Verhandlungen seien erfolgreich gewesen und man werde bald ein Ergebnis vorlegen.",
        translation: "The president declared that the negotiations were successful and that a result would be presented soon.",
        speed: "normal"
      }
    ]
  }
};
