import { Lesson } from "./lessons";

export const lessonsB1Final: Record<string, Lesson> = {
  "lb1_66": {
    id: "lb1_66",
    title: "Futur II — Past Assumptions (Er wird wohl gegangen sein)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Guessing About Completed Actions",
        explanation: "Futur II = werden + Partizip II + haben/sein. It expresses ASSUMPTIONS about things that have already happened. 'Er wird wohl schon gegangen sein.' = 'He has probably already left.' (I'm guessing!). It's NOT about the future — it's about guessing what already happened.",
        examples: [
          { de: "Er wird das Buch gelesen haben. (= He has probably read the book.)", en: "Assumption about a completed action" },
          { de: "Sie wird wohl schon nach Hause gegangen sein.", en: "She has probably already gone home." },
          { de: "Er wird das sicher vergessen haben.", en: "He has surely forgotten that." },
          { de: "Sie werden den Zug wohl verpasst haben.", en: "They probably missed the train." }
        ]
      },
      {
        type: "grammar",
        title: "Futur I vs. Futur II",
        explanation: "Futur I (werden + Infinitiv) = assumption about NOW. Futur II (werden + PP + haben/sein) = assumption about something COMPLETED.",
        examples: [
          { de: "Futur I: Er wird wohl krank SEIN. (= He is probably sick NOW)", en: "Assumption about present" },
          { de: "Futur II: Er wird wohl krank GEWESEN SEIN. (= He was probably sick.)", en: "Assumption about past" },
          { de: "Futur I: Sie wird noch im Büro ARBEITEN.", en: "She's probably still working." },
          { de: "Futur II: Sie wird schon nach Hause GEGANGEN SEIN.", en: "She has probably already gone home." }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'He has probably already eaten.' — Which is the correct Futur II?",
        options: [
          "Er wird essen.",
          "Er wird wohl schon gegessen haben.",
          "Er hat wohl schon gegessen.",
          "Er würde essen."
        ],
        correctIndex: 1,
        explanation: "Futur II = werden + Partizip II + haben/sein. 'Gegessen haben' = to have eaten. Option C (Perfekt + wohl) is also correct in spoken German, but Futur II is the formal grammar form."
      }
    ]
  },
  "lb1_67": {
    id: "lb1_67",
    title: "Erweiterte Partizipien (Extended Participial Phrases)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Compressing Relative Clauses Into Adjective Phrases",
        explanation: "In formal/written German, a whole relative clause can be compressed into an extended participial phrase BEFORE the noun. This is very common in newspapers and academic texts. You need to RECOGNIZE it at B1 (you'll see it in Lesen texts).",
        examples: [
          { de: "Long: Das Buch, das von dem Autor geschrieben wurde, ist gut.", en: "The book that was written by the author is good." },
          { de: "Short: Das von dem Autor geschriebene Buch ist gut.", en: "The book written by the author is good." },
          { de: "Long: Die Frau, die neben mir sitzt, heißt Maria.", en: "The woman who sits next to me is called Maria." },
          { de: "Short: Die neben mir sitzende Frau heißt Maria.", en: "The woman sitting next to me is called Maria." }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Die gestern vom Chef geschriebene E-Mail' — What does this mean?",
        options: [
          "The boss who wrote the email yesterday",
          "The email that was written by the boss yesterday",
          "The boss's email writer from yesterday",
          "Yesterday the boss wrote an email"
        ],
        correctIndex: 1,
        explanation: "Extended Partizip II: 'die gestern vom Chef geschriebene E-Mail' = 'the email that was written by the boss yesterday'. All the info comes BEFORE the noun."
      }
    ]
  },
  "lb1_68": {
    id: "lb1_68",
    title: "Komparativ & Superlativ mit Adjektivdeklination",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Comparative/Superlative WITH Adjective Endings",
        explanation: "At A2 you learned 'größer' and 'am größten'. At B1, you need to USE them as adjectives before nouns — which means adding declension endings ON TOP of the comparative/superlative. 'Ein größerER Mann' (a taller man), 'der größTE Mann' (the tallest man).",
        examples: [
          { de: "ein großer Mann → ein größerer Mann (Komparativ + Deklination)", en: "a big man → a bigger man" },
          { de: "der große Mann → der größte Mann (Superlativ + Deklination)", en: "the big man → the biggest man" },
          { de: "eine schöne Stadt → eine schönere Stadt → die schönste Stadt", en: "a beautiful city → a more beautiful city → the most beautiful city" },
          { de: "mit einem besseren Ergebnis (Dat, neut, indefinite)", en: "with a better result" }
        ]
      },
      {
        type: "grammar",
        title: "Vergleichssätze (Comparison Clauses)",
        explanation: "Three patterns for comparing: so...wie (equal), -er...als (not equal), je...desto (proportional).",
        examples: [
          { de: "Er ist so groß wie ich. (= equal)", en: "He is as tall as me." },
          { de: "Er ist größer als ich. (= unequal)", en: "He is taller than me." },
          { de: "Er ist nicht so alt wie sie. (= unequal, softer)", en: "He is not as old as her." },
          { de: "Das ist genauso wichtig wie das andere.", en: "That is just as important as the other." }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'I need a bigger apartment.' — Which is correct?",
        options: [
          "Ich brauche eine größer Wohnung.",
          "Ich brauche eine größere Wohnung.",
          "Ich brauche einen größeren Wohnung.",
          "Ich brauche die größte Wohnung."
        ],
        correctIndex: 1,
        explanation: "Komparativ 'größer' + Deklination: Akkusativ, feminin, indefinite = -e. So: 'eine größerE Wohnung'."
      }
    ]
  },
  "lb1_69": {
    id: "lb1_69",
    title: "Falsche Freunde (False Friends: German ≠ English)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "aktuell", phonetic: "ak-too-el", meaning: "current, up-to-date (NOT 'actual'!)", example: { de: "Die aktuellen Nachrichten. (= current news)", en: "Actual = eigentlich/tatsächlich" } },
          { word: "bekommen", phonetic: "be-ko-men", meaning: "to receive, to get (NOT 'to become'!)", example: { de: "Ich bekomme einen Brief. (= I receive a letter)", en: "To become = werden" } },
          { word: "der Chef", phonetic: "shef", meaning: "boss (NOT 'chef/cook'!)", example: { de: "Mein Chef ist streng. (= My boss is strict)", en: "Chef/cook = Koch" } },
          { word: "das Gift", phonetic: "gift", meaning: "poison (NOT 'gift/present'!)", example: { de: "Vorsicht, Gift! (= Careful, poison!)", en: "Gift = Geschenk" } },
          { word: "die Fabrik", phonetic: "fa-breek", meaning: "factory (NOT 'fabric'!)", example: { de: "Er arbeitet in einer Fabrik. (= factory)", en: "Fabric = Stoff" } },
          { word: "eventuell", phonetic: "eh-ven-too-el", meaning: "possibly, perhaps (NOT 'eventually'!)", example: { de: "Eventuell komme ich morgen. (= Maybe I'll come)", en: "Eventually = schließlich" } },
          { word: "sensibel", phonetic: "zen-zee-bel", meaning: "sensitive (NOT 'sensible'!)", example: { de: "Sie ist sehr sensibel. (= She's very sensitive)", en: "Sensible = vernünftig" } },
          { word: "die Rente", phonetic: "ren-te", meaning: "pension (NOT 'rent'!)", example: { de: "Er geht in Rente. (= He's retiring)", en: "Rent = Miete" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Ich bekomme ein Geschenk.' — What does this mean?",
        options: [
          "I become a gift.",
          "I receive a present.",
          "I buy a present.",
          "I give a present."
        ],
        correctIndex: 1,
        explanation: "'Bekommen' = to RECEIVE (not 'to become'!). This is the #1 false friend trap. 'I receive a present.'"
      }
    ]
  },
  "lb1_70": {
    id: "lb1_70",
    title: "Exam Schreiben Teil 2: Stellungnahme (Opinion Text)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Writing an Opinion Text (~80 words)",
        explanation: "In Schreiben Teil 2, you read a short online statement/forum post and must write your opinion (~80 words). Structure: 1) State the topic, 2) Give your position, 3) Support with reasons/experience, 4) Conclude.",
        examples: [
          { de: "Einleitung: 'In dem Forumsbeitrag geht es um das Thema...'", en: "Introduction: The forum post is about the topic..." },
          { de: "Position: 'Ich bin der Meinung, dass... / Meiner Meinung nach...'", en: "Position: I believe that..." },
          { de: "Begründung: 'Dafür gibt es mehrere Gründe. Erstens... Zweitens...'", en: "Reasoning: There are several reasons. First... Second..." },
          { de: "Erfahrung: 'Aus meiner eigenen Erfahrung kann ich sagen, dass...'", en: "Experience: From my own experience..." },
          { de: "Schluss: 'Zusammenfassend denke ich, dass...'", en: "Conclusion: In summary, I think that..." }
        ]
      },
      {
        type: "speaking",
        phrase: "In dem Forumsbeitrag geht es um das Thema 'Handyverbot in der Schule'. Ich bin der Meinung, dass Handys im Unterricht stören. Erstens können sich die Schüler nicht konzentrieren. Zweitens ist es unhöflich gegenüber dem Lehrer. Aus meiner Erfahrung kann ich sagen, dass man ohne Handy besser lernt. Deshalb bin ich für ein Handyverbot im Unterricht.",
        translation: "The forum post is about the topic 'phone ban in schools'. I believe phones are disruptive in class. First, students can't concentrate. Second, it's rude to the teacher. From my experience, I can say that you learn better without a phone. Therefore I am for a phone ban in class.",
        phonetic: "in daim fo-rooms-by-trahk gayt es oom das tay-ma...",
        tip: "MUST-HAVES: 1) Reference the forum post, 2) State your position clearly, 3) Give at least 2 reasons, 4) Personal experience, 5) Conclusion. Write ~80 words."
      }
    ]
  },
  "lb1_71": {
    id: "lb1_71",
    title: "Exam Schreiben Teil 3: Kurze formelle Nachricht (40 words)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "The Quick Formal Message",
        explanation: "Schreiben Teil 3 is SHORT (~40 words). You write a formal mini-message: apologize for an absence, reschedule an appointment, confirm something, or cancel a registration. Keep it brief and polite.",
        examples: [
          { de: "Entschuldigung: 'Leider kann ich am Montag nicht zum Kurs kommen, weil ich krank bin. Können wir den Termin auf nächste Woche verschieben?'", en: "Apology + reschedule" },
          { de: "Absage: 'Leider muss ich den Termin am 15. Mai absagen. Wäre es möglich, einen neuen Termin zu vereinbaren?'", en: "Cancellation + request new date" },
          { de: "Bestätigung: 'Hiermit bestätige ich meine Anmeldung zum Deutschkurs ab dem 1. Juni.'", en: "Confirmation of registration" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Leider muss ich absagen.", phonetic: "ly-der moos ikh ap-zah-gen", meaning: "Unfortunately I must cancel.", example: { de: "Leider muss ich den Termin absagen.", en: "Unfortunately I must cancel the appointment." } },
          { word: "Ich möchte mich entschuldigen.", phonetic: "ikh möch-te mikh ent-shool-di-gen", meaning: "I would like to apologize.", example: { de: "Ich möchte mich für mein Fehlen entschuldigen.", en: "I'd like to apologize for my absence." } },
          { word: "Wäre es möglich,...?", phonetic: "vay-re es mö-glikh", meaning: "Would it be possible...?", example: { de: "Wäre es möglich, den Termin zu verschieben?", en: "Would it be possible to reschedule?" } },
          { word: "Hiermit bestätige ich...", phonetic: "heer-mit be-shtay-ti-ge ikh", meaning: "I hereby confirm...", example: { de: "Hiermit bestätige ich meine Teilnahme.", en: "I hereby confirm my participation." } },
          { word: "die Absage", phonetic: "ap-zah-ge", meaning: "cancellation", example: { de: "Ich muss Ihnen leider eine Absage schicken.", en: "I unfortunately have to send you a cancellation." } }
        ]
      }
    ]
  },
  "lb1_72": {
    id: "lb1_72",
    title: "Exam Sprechen Teil 3: Feedback & Questions",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Reacting to Your Partner's Presentation",
        explanation: "After your partner presents their topic, you MUST: 1) Give positive feedback, 2) Ask at least one question, 3) Add your own experience. Then your partner does the same for YOUR presentation. This tests your INTERACTION ability.",
        examples: [
          { de: "Feedback: 'Danke für deine interessante Präsentation!'", en: "Thanks for your interesting presentation!" },
          { de: "Frage: 'Du hast gesagt, dass... Könntest du das genauer erklären?'", en: "You said that... Could you explain that more?" },
          { de: "Eigene Erfahrung: 'Bei mir ist das ähnlich / anders...'", en: "For me it's similar / different..." },
          { de: "Zusatz: 'Ich möchte noch hinzufügen, dass...'", en: "I'd like to add that..." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Danke für deinen Vortrag.", phonetic: "dan-ke für dy-nen for-trahk", meaning: "Thanks for your presentation.", example: { de: "Danke für deinen interessanten Vortrag.", en: "Thanks for your interesting talk." } },
          { word: "Ich hätte noch eine Frage.", phonetic: "ikh het-te nokh ay-ne frah-ge", meaning: "I would have one more question.", example: { de: "Ich hätte noch eine Frage zu deinem Thema.", en: "I have a question about your topic." } },
          { word: "Wie ist das in deinem Heimatland?", phonetic: "vee ist das in dy-nem hy-maht-lant", meaning: "How is that in your home country?", example: { de: "Du hast über Umwelt gesprochen. Wie ist das in deinem Heimatland?", en: "You talked about the environment. How is that in your country?" } },
          { word: "Da stimme ich dir zu.", phonetic: "da shtim-me ikh deer tsoo", meaning: "I agree with you on that.", example: { de: "Da stimme ich dir völlig zu.", en: "I completely agree with you." } },
          { word: "Ich sehe das ein bisschen anders.", phonetic: "ikh zay-e das ayn bis-khen an-ders", meaning: "I see it a bit differently.", example: { de: "Ich sehe das ein bisschen anders, weil...", en: "I see it a bit differently, because..." } }
        ]
      }
    ]
  },
  "lb1_73": {
    id: "lb1_73",
    title: "Exam Lesen: Reading Text Types (Blog, Anzeige, Leserbrief)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "The 5 Lesen Task Types",
        explanation: "Each Lesen task uses a DIFFERENT text type. Knowing what to expect helps you read strategically.",
        examples: [
          { de: "Teil 1: Blogbeitrag / Korrespondenz (6 Richtig/Falsch)", en: "Blog post or personal correspondence — everyday language" },
          { de: "Teil 2: Zeitungsartikel / Bericht (6 Multiple-Choice)", en: "News article — formal language, opinions, arguments" },
          { de: "Teil 3: Anzeigen zuordnen (7 Aufgaben, 9 Anzeigen)", en: "Match short ads to people — scanning for key details" },
          { de: "Teil 4: Leserbriefe (7 Richtig/Falsch)", en: "Reader's letters — identify opinions and positions" },
          { de: "Teil 5: Regelungen / Anweisungen (4 Multiple-Choice)", en: "Rules/regulations — formal instructions (Hausordnung etc.)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "der Blogbeitrag", phonetic: "blog-by-trahk", meaning: "blog post", example: { de: "Lies den Blogbeitrag und beantworte die Fragen.", en: "Read the blog post and answer the questions." } },
          { word: "die Anzeige / das Inserat", phonetic: "an-tsy-ge", meaning: "advertisement / classified ad", example: { de: "Welche Anzeige passt zu welcher Person?", en: "Which ad matches which person?" } },
          { word: "der Leserbrief", phonetic: "lay-zer-breef", meaning: "reader's letter / letter to the editor", example: { de: "In dem Leserbrief geht es um das Thema Bildung.", en: "The reader's letter is about education." } },
          { word: "die Hausordnung", phonetic: "hows-ord-noong", meaning: "house rules", example: { de: "Die Hausordnung verbietet Haustiere.", en: "The house rules prohibit pets." } },
          { word: "die Regelung", phonetic: "ray-ge-loong", meaning: "regulation / rule", example: { de: "Laut der Regelung darf man hier nicht rauchen.", en: "According to the rule, smoking is not allowed here." } },
          { word: "Richtig oder Falsch?", phonetic: "rikh-tikh oh-der falsh", meaning: "True or false?", example: { de: "Entscheide: Richtig, Falsch, oder steht nicht im Text.", en: "Decide: True, False, or not stated in the text." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "In Lesen Teil 3, what strategy should you use?",
        options: [
          "Read all ads carefully word by word.",
          "First read what each person NEEDS, then SCAN ads for matching keywords.",
          "Guess based on the ad titles.",
          "Skip this section — it's too hard."
        ],
        correctIndex: 1,
        explanation: "Teil 3 strategy: 1) Read person descriptions first, 2) Underline KEY requirements (time, location, price), 3) Scan ads for matches. One person will have NO matching ad!"
      }
    ]
  },
  "lb1_74": {
    id: "lb1_74",
    title: "Bureaucracy Survival Vocab (Formular, Zeugnis, Antrag)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "das Formular", phonetic: "for-moo-lahr", meaning: "form (to fill out)", example: { de: "Bitte füllen Sie das Formular aus.", en: "Please fill out the form." } },
          { word: "ausfüllen", phonetic: "ows-fül-len", meaning: "to fill out", example: { de: "Können Sie mir helfen, das Formular auszufüllen?", en: "Can you help me fill out the form?" } },
          { word: "unterschreiben", phonetic: "oon-ter-shry-ben", meaning: "to sign", example: { de: "Bitte unterschreiben Sie hier.", en: "Please sign here." } },
          { word: "die Unterschrift", phonetic: "oon-ter-shrift", meaning: "signature", example: { de: "Hier fehlt Ihre Unterschrift.", en: "Your signature is missing here." } },
          { word: "das Zeugnis", phonetic: "tsoyg-nis", meaning: "certificate / report card / reference", example: { de: "Ich brauche mein Schulzeugnis.", en: "I need my school report card." } },
          { word: "die Bestätigung", phonetic: "be-shtay-ti-goong", meaning: "confirmation", example: { de: "Ich brauche eine Bestätigung der Anmeldung.", en: "I need a confirmation of registration." } },
          { word: "der Antrag", phonetic: "an-trahk", meaning: "application / request (official)", example: { de: "Ich muss einen Antrag stellen.", en: "I have to submit an application." } },
          { word: "genehmigen / ablehnen", phonetic: "ge-nay-mi-gen / ap-lay-nen", meaning: "to approve / to reject", example: { de: "Mein Antrag wurde genehmigt / abgelehnt.", en: "My application was approved / rejected." } },
          { word: "einreichen", phonetic: "ayn-ry-khen", meaning: "to submit (documents)", example: { de: "Bitte reichen Sie die Unterlagen bis Freitag ein.", en: "Please submit the documents by Friday." } },
          { word: "der Nachweis", phonetic: "nakh-vys", meaning: "proof / evidence / verification", example: { de: "Ich brauche einen Nachweis über mein Einkommen.", en: "I need proof of my income." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Guten Tag, ich möchte meinen Aufenthaltstitel verlängern. Welches Formular muss ich ausfüllen? Welche Nachweise brauche ich? Kann ich die Unterlagen auch per E-Mail einreichen?",
        translation: "Good day, I'd like to extend my residence permit. Which form do I need to fill out? What proof do I need? Can I also submit the documents by email?",
        phonetic: "goo-ten tahk, ikh möch-te my-nen owf-ent-halts-tee-tel fer-leng-ern...",
        tip: "At any Amt, always ask: 1) Welche Formulare? (which forms), 2) Welche Nachweise/Unterlagen? (which proof), 3) Bis wann? (by when), 4) Kann ich das online machen? (can I do it online)"
      }
    ]
  },
  "lb1_75": {
    id: "lb1_75",
    title: "Indefinitpronomen (jemand, niemand, jeder, alle, mancher)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Referring to People/Things in General",
        explanation: "Indefinitpronomen refer to unspecified people or things. At B1 you need the full set AND their case changes. 'Jemand' (someone) → 'jemanden' (Akk) → 'jemandem' (Dat). 'Niemand' follows the same pattern. 'Jeder/jede/jedes' declines like 'dieser'.",
        examples: [
          { de: "Jemand hat angerufen. (= Someone called.)", en: "Nominative" },
          { de: "Ich habe jemanden gesehen. (= I saw someone.)", en: "Akkusativ" },
          { de: "Ich habe niemandem davon erzählt. (= I told nobody about it.)", en: "Dativ" },
          { de: "Jeder muss das verstehen. (= Everyone must understand.)", en: "Jeder = every/each" },
          { de: "Alle waren einverstanden. (= Everyone agreed.)", en: "Alle = all/everyone (plural)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "jemand / niemand", phonetic: "yay-mant / nee-mant", meaning: "someone / nobody", example: { de: "Kennt jemand einen guten Arzt? — Niemand weiß es.", en: "Does anyone know a good doctor? — Nobody knows." } },
          { word: "jeder / jede / jedes", phonetic: "yay-der", meaning: "every / each", example: { de: "Jeder Schüler muss die Prüfung machen.", en: "Every student must take the exam." } },
          { word: "alle", phonetic: "al-le", meaning: "all / everyone (plural)", example: { de: "Alle haben die Aufgabe gemacht.", en: "Everyone did the task." } },
          { word: "mancher / manche / manches", phonetic: "man-kher", meaning: "some / certain (selective)", example: { de: "Manche Leute denken anders.", en: "Some people think differently." } },
          { word: "etwas / nichts", phonetic: "et-vas / nikhts", meaning: "something / nothing", example: { de: "Ich möchte etwas sagen. Es gibt nichts zu tun.", en: "I'd like to say something. There's nothing to do." } },
          { word: "irgendwer / irgendwo / irgendwann", phonetic: "eer-gent-vair", meaning: "somebody / somewhere / sometime", example: { de: "Irgendwer muss das gemacht haben!", en: "Somebody must have done that!" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'I told nobody about it.' — Which is correct?",
        options: [
          "Ich habe niemand davon erzählt.",
          "Ich habe niemandem davon erzählt.",
          "Ich habe niemanden davon erzählt.",
          "Ich habe keinem davon erzählt."
        ],
        correctIndex: 1,
        explanation: "'Erzählen' takes Dativ (erzählen + Dat person). Niemand in Dativ = niemandeM. In spoken German, endings are often dropped, but the correct written form is 'niemandem'."
      }
    ]
  },
  "lb1_76": {
    id: "lb1_76",
    title: "Genitiv-Relativpronomen: dessen & deren (whose)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Saying 'Whose' in German Relative Clauses",
        explanation: "When a relative clause shows POSSESSION ('the man whose car...'), use the genitive relative pronoun: 'dessen' (masc/neut) or 'deren' (fem/plural). The noun AFTER dessen/deren has NO article! 'Der Mann, dessen Auto gestohlen wurde...' (NOT: dessen das Auto).",
        examples: [
          { de: "Der Mann, dessen Auto gestohlen wurde, ist traurig.", en: "The man whose car was stolen is sad. (dessen = masc)" },
          { de: "Die Frau, deren Tasche verschwunden ist, sucht sie.", en: "The woman whose bag disappeared is looking for it. (deren = fem)" },
          { de: "Das Kind, dessen Eltern arbeiten, ist allein zu Hause.", en: "The child whose parents work is home alone. (dessen = neut)" },
          { de: "Die Leute, deren Häuser renoviert werden, müssen umziehen.", en: "The people whose houses are being renovated must move. (deren = plural)" }
        ]
      },
      {
        type: "grammar",
        title: "dessen/deren: Key Rules",
        explanation: "1) dessen = masculine/neuter singular, deren = feminine singular + ALL plurals. 2) No article after dessen/deren! 'Dessen Auto' NOT 'dessen das Auto'. 3) The verb still goes to the END of the relative clause.",
        examples: [
          { de: "✅ Der Kollege, dessen Büro neben meinem liegt, ist nett.", en: "CORRECT: No article after dessen" },
          { de: "❌ Der Kollege, dessen das Büro neben meinem liegt...", en: "WRONG: Never 'dessen das'!" },
          { de: "Die Stadt, deren Name ich vergessen habe, war schön.", en: "The city whose name I forgot was beautiful." },
          { de: "Tip: deren looks like 'der' (fem Gen) + 'en'", en: "Memory aid: 'der' → 'deren' for feminine" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'The woman whose daughter lives in Berlin' — Which is correct?",
        options: [
          "Die Frau, dessen Tochter in Berlin lebt...",
          "Die Frau, deren Tochter in Berlin lebt...",
          "Die Frau, die deren Tochter in Berlin lebt...",
          "Die Frau, wessen Tochter in Berlin lebt..."
        ],
        correctIndex: 1,
        explanation: "'Die Frau' is feminine → genitive relative pronoun = 'deren'. 'Deren Tochter' (whose daughter). No extra article needed."
      }
    ]
  },
  "lb1_77": {
    id: "lb1_77",
    title: "Modalpartikeln (doch, mal, halt, eben, ja, eigentlich)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "The 'Flavoring' Words That Make You Sound Natural",
        explanation: "Modalpartikeln are small, often untranslatable words that add emotional nuance to a sentence. Germans use them CONSTANTLY. Without them, your German sounds robotic. They don't change the factual meaning — they change the TONE. At B1 you should RECOGNIZE and USE the 6 most important ones.",
        examples: [
          { de: "Das ist ja interessant! (= surprise: 'Oh, that IS interesting!')", en: "ja = expressing surprise/acknowledgment" },
          { de: "Komm doch mal vorbei! (= friendly invitation: 'Do come by!')", en: "doch = encouragement, mal = casualness" },
          { de: "Das ist halt so. (= accepting reality: 'That's just how it is.')", en: "halt/eben = 'that's just the way it is'" },
          { de: "Was machst du eigentlich beruflich? (= casual curiosity: 'So what do you actually do?')", en: "eigentlich = 'by the way' / 'actually'" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "ja", phonetic: "yah", meaning: "expresses surprise or shared knowledge", example: { de: "Das ist ja toll! / Du weißt ja, dass...", en: "That's great! (surprise) / You know that..." } },
          { word: "doch", phonetic: "dokh", meaning: "encouragement, contradiction, emphasis", example: { de: "Komm doch mit! / Das stimmt doch nicht!", en: "Come along! / That's not true! (contradiction)" } },
          { word: "mal", phonetic: "mahl", meaning: "softens requests, makes them casual", example: { de: "Kannst du mal helfen? / Schau mal!", en: "Can you help (for a sec)? / Look!" } },
          { word: "halt / eben", phonetic: "halt / ay-ben", meaning: "acceptance: 'just the way it is'", example: { de: "So ist das eben. / Das ist halt schwierig.", en: "That's just how it is. / It's just difficult." } },
          { word: "eigentlich", phonetic: "ay-gent-likh", meaning: "actually / by the way (casual topic shift)", example: { de: "Was machst du eigentlich heute Abend?", en: "What are you actually doing tonight?" } },
          { word: "denn", phonetic: "den", meaning: "curiosity/interest in questions", example: { de: "Was ist denn passiert? / Wie heißt du denn?", en: "What happened? (showing interest)" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which sentence sounds the MOST natural (native-like)?",
        options: [
          "Kannst du helfen?",
          "Kannst du mal helfen?",
          "Können Sie helfen bitte?",
          "Hilf mir."
        ],
        correctIndex: 1,
        explanation: "'Mal' softens the request and makes it sound casual and friendly. Without 'mal', the sentence sounds abrupt. Germans add 'mal' to almost every casual request — it's the secret to sounding natural!"
      }
    ]
  },
  "lb1_78": {
    id: "lb1_78",
    title: "Charaktereigenschaften (Personality Traits & Descriptions)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Describing People's Personalities at B1",
        explanation: "CEFR B1 requires you to describe character, personality, and behavior in detail. This goes beyond A2 basics (nett, freundlich) to nuanced traits needed for exam speaking/writing tasks (e.g., describing a colleague, a friend, or yourself in Sprechen Teil 2).",
        examples: [
          { de: "Sie ist sehr zuverlässig und pünktlich.", en: "She is very reliable and punctual." },
          { de: "Er ist ehrgeizig, aber manchmal ungeduldig.", en: "He is ambitious, but sometimes impatient." },
          { de: "Meine Kollegin ist sehr hilfsbereit und tolerant.", en: "My colleague is very helpful and tolerant." },
          { de: "Er kann manchmal egoistisch und stur sein.", en: "He can sometimes be selfish and stubborn." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "zuverlässig", phonetic: "tsoo-fer-les-ikh", meaning: "reliable / dependable", example: { de: "Auf ihn kann man sich verlassen — er ist sehr zuverlässig.", en: "You can rely on him — he's very dependable." } },
          { word: "ehrlich", phonetic: "air-likh", meaning: "honest", example: { de: "Sei ehrlich: Was denkst du wirklich?", en: "Be honest: What do you really think?" } },
          { word: "geduldig / ungeduldig", phonetic: "ge-dool-dikh", meaning: "patient / impatient", example: { de: "Lehrer müssen geduldig sein.", en: "Teachers must be patient." } },
          { word: "ehrgeizig", phonetic: "air-gy-tsikh", meaning: "ambitious", example: { de: "Sie ist sehr ehrgeizig und will Karriere machen.", en: "She's very ambitious and wants a career." } },
          { word: "fleißig / faul", phonetic: "fly-sikh / fowl", meaning: "hardworking / lazy", example: { de: "Er ist fleißig im Unterricht, aber zu Hause etwas faul.", en: "He's hardworking in class, but a bit lazy at home." } },
          { word: "stur / hartnäckig", phonetic: "shtoor", meaning: "stubborn / persistent", example: { de: "Sie ist manchmal stur, aber das hilft bei Verhandlungen.", en: "She's sometimes stubborn, but that helps in negotiations." } },
          { word: "großzügig / geizig", phonetic: "grohs-tsü-gikh / gy-tsikh", meaning: "generous / stingy", example: { de: "Er ist sehr großzügig mit seinem Geld.", en: "He is very generous with his money." } },
          { word: "selbstbewusst / schüchtern", phonetic: "zelpst-be-voost / shükh-tern", meaning: "confident / shy", example: { de: "Sie wirkt selbstbewusst, ist aber eigentlich schüchtern.", en: "She seems confident, but is actually shy." } },
          { word: "verantwortungsvoll", phonetic: "fer-ant-vor-toongs-fol", meaning: "responsible", example: { de: "Ein guter Mitarbeiter ist verantwortungsvoll.", en: "A good employee is responsible." } },
          { word: "neugierig / aufgeschlossen", phonetic: "noy-gee-rikh", meaning: "curious / open-minded", example: { de: "Sie ist neugierig und aufgeschlossen gegenüber neuen Kulturen.", en: "She's curious and open-minded towards new cultures." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which pair of adjectives are OPPOSITES?",
        options: [
          "ehrlich — großzügig",
          "geduldig — ungeduldig",
          "fleißig — ehrgeizig",
          "zuverlässig — selbstbewusst"
        ],
        correctIndex: 1,
        explanation: "geduldig (patient) ↔ ungeduldig (impatient) are direct opposites. The 'un-' prefix negates the adjective — a very productive B1 pattern."
      }
    ]
  },
  "lb1_79": {
    id: "lb1_79",
    title: "Adjektive als Nomen (Nominalized Adjectives: der Deutsche)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "When Adjectives Become Nouns",
        explanation: "In German, adjectives can be used AS nouns — but they KEEP their adjective endings! 'Der Deutsche' (the German man), 'eine Deutsche' (a German woman), 'die Deutschen' (the Germans). The ending changes with the article and case, just like any adjective. This is critical for B1 because it appears constantly in reading texts.",
        examples: [
          { de: "der Deutsche / ein Deutscher (masc, Nom)", en: "the German man / a German man" },
          { de: "die Deutsche / eine Deutsche (fem, Nom)", en: "the German woman / a German woman" },
          { de: "die Deutschen (plural)", en: "the Germans (all of them)" },
          { de: "ein Deutscher → eines Deutschen (Gen) → einem Deutschen (Dat) → einen Deutschen (Akk)", en: "Case changes like a regular adjective" }
        ]
      },
      {
        type: "grammar",
        title: "Common Nominalized Adjectives at B1",
        explanation: "Many everyday German words are actually nominalized adjectives. They ALL follow adjective declension. Memorize the pattern: with 'der/die/das' → weak ending (-e/-en). With 'ein/eine' → strong ending (-er/-es/-e).",
        examples: [
          { de: "der/die Angestellte → ein Angestellter / eine Angestellte", en: "the employee" },
          { de: "der/die Jugendliche → ein Jugendlicher / eine Jugendliche", en: "the young person / teenager" },
          { de: "der/die Erwachsene → ein Erwachsener / eine Erwachsene", en: "the adult" },
          { de: "der/die Verwandte → ein Verwandter / eine Verwandte", en: "the relative (family)" },
          { de: "der/die Bekannte → ein Bekannter / eine Bekannte", en: "the acquaintance" },
          { de: "das Gute / etwas Gutes / nichts Neues", en: "the good thing / something good / nothing new" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'I met a German (man) yesterday.' — Which is correct?",
        options: [
          "Ich habe gestern einen Deutsche getroffen.",
          "Ich habe gestern einen Deutschen getroffen.",
          "Ich habe gestern ein Deutscher getroffen.",
          "Ich habe gestern der Deutsche getroffen."
        ],
        correctIndex: 1,
        explanation: "'A German man' = ein Deutscher (Nom). In Akkusativ with 'einen' → 'einen Deutschen'. The weak ending (-en) follows the definite-style article 'einen'. This is WHY nominalized adjectives are tricky — they change like adjectives, not like regular nouns!"
      }
    ]
  },
  "lb1_80": {
    id: "lb1_80",
    title: "Wortbildung (Word Formation: Suffixes, Prefixes & Compounds)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Decoding Unknown Words — The #1 Reading Strategy",
        explanation: "German builds long words from smaller parts. At B1, you WILL see unknown compound nouns in Lesen. The trick: read from RIGHT to LEFT. The LAST word = the base noun (it gives the gender and meaning category). Everything before it = modifiers. 'Krankenversicherung' = Kranken + Versicherung → a Versicherung (insurance) for Kranke (sick people) = health insurance.",
        examples: [
          { de: "Reiserücktrittsversicherung → Versicherung (fem) für Reiserücktritt", en: "Travel cancellation insurance → Read from RIGHT" },
          { de: "Arbeitslosengeld → Geld (neut) für Arbeitslose", en: "Unemployment money/benefits" },
          { de: "Aufenthaltserlaubnis → Erlaubnis (fem) für Aufenthalt", en: "Residence permit" },
          { de: "Straßenbahnhaltestelle → Stelle, wo die Straßenbahn hält", en: "Tram stop" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "-ung (→ die)", phonetic: "oong", meaning: "turns verbs into feminine nouns (process/result)", example: { de: "üben → die Übung, einladen → die Einladung, entscheiden → die Entscheidung", en: "practice → exercise, invite → invitation, decide → decision" } },
          { word: "-heit / -keit (→ die)", phonetic: "hyt / kyt", meaning: "turns adjectives into feminine nouns (quality/state)", example: { de: "frei → die Freiheit, möglich → die Möglichkeit, gesund → die Gesundheit", en: "free → freedom, possible → possibility, healthy → health" } },
          { word: "-lich", phonetic: "likh", meaning: "turns nouns into adjectives (related to)", example: { de: "Monat → monatlich, Tag → täglich, Beruf → beruflich", en: "month → monthly, day → daily, profession → professional" } },
          { word: "-bar", phonetic: "bahr", meaning: "= 'can be done' (like English -able)", example: { de: "machen → machbar, erreichen → erreichbar, essen → essbar", en: "doable, reachable, edible" } },
          { word: "un- (prefix)", phonetic: "oon", meaning: "negates adjectives (like English un-/in-)", example: { de: "möglich → unmöglich, freundlich → unfreundlich, zufrieden → unzufrieden", en: "possible → impossible, friendly → unfriendly" } },
          { word: "ver- / be- / ent- (inseparable)", phonetic: "fer / be / ent", meaning: "change verb meaning, always stay attached", example: { de: "stehen → verstehen, suchen → besuchen, schuldigen → entschuldigen", en: "stand → understand, search → visit, excuse" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Die Arbeitslosenversicherung' — What gender is it and why?",
        options: [
          "der — because Arbeitslose is masculine",
          "die — because Versicherung (the LAST word) is feminine",
          "das — because compound nouns are always neuter",
          "die — because all long words are feminine"
        ],
        correctIndex: 1,
        explanation: "The LAST word in a compound determines the gender. Versicherung = die (feminine). So: DIE Arbeitslosenversicherung. Always look at the rightmost component!"
      }
    ]
  },
  "lb1_81": {
    id: "lb1_81",
    title: "Redewendungen & Alltagsausdrücke (Common German Idioms)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Everyday Idioms You'll Hear in Hören & Sprechen",
        explanation: "German idioms appear in listening tasks and natural conversation. You don't need to produce them all, but you MUST understand them. They often can't be translated word-for-word.",
        examples: [
          { de: "Ich drücke dir die Daumen! (= I'll keep my fingers crossed for you!)", en: "NOT: I press your thumbs!" },
          { de: "Das ist mir Wurst. / Das ist mir egal. (= I don't care.)", en: "Literally: That is sausage to me." },
          { de: "Schwein haben (= to be lucky)", en: "Literally: to have pig (but means luck!)" },
          { de: "Auf keinen Fall! / Auf jeden Fall! (= No way! / Absolutely!)", en: "Very common emphasis phrases" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Ich drücke dir die Daumen!", phonetic: "ikh drü-ke deer dee dow-men", meaning: "I'll keep my fingers crossed!", example: { de: "Morgen hast du Prüfung? Ich drücke dir die Daumen!", en: "You have your exam tomorrow? Good luck!" } },
          { word: "Das ist mir egal / Wurst.", phonetic: "das ist meer ay-gahl", meaning: "I don't care.", example: { de: "Welche Farbe? — Das ist mir egal.", en: "Which color? — I don't care." } },
          { word: "Auf keinen Fall!", phonetic: "owf ky-nen fal", meaning: "No way! / Absolutely not!", example: { de: "Soll ich das Fenster öffnen? — Auf keinen Fall, es ist zu kalt!", en: "Should I open the window? — No way, it's too cold!" } },
          { word: "Auf jeden Fall!", phonetic: "owf yay-den fal", meaning: "Absolutely! / Definitely!", example: { de: "Kommst du zur Party? — Auf jeden Fall!", en: "Are you coming to the party? — Definitely!" } },
          { word: "Quatsch! / So ein Quatsch!", phonetic: "kvatsh", meaning: "Nonsense! / Rubbish!", example: { de: "Das stimmt nicht! So ein Quatsch!", en: "That's not true! What nonsense!" } },
          { word: "Na ja... / Naja...", phonetic: "nah yah", meaning: "Well... (hesitation/concession)", example: { de: "Na ja, das ist vielleicht nicht so einfach.", en: "Well, that's perhaps not so easy." } },
          { word: "Keine Ahnung!", phonetic: "ky-ne ah-noong", meaning: "No idea! / I have no clue!", example: { de: "Wo ist der Bahnhof? — Keine Ahnung!", en: "Where's the train station? — No idea!" } },
          { word: "Es lohnt sich.", phonetic: "es lohnt zikh", meaning: "It's worth it.", example: { de: "Der Film ist lang, aber es lohnt sich.", en: "The film is long, but it's worth it." } },
          { word: "Ich bin dran. / Du bist dran.", phonetic: "ikh bin drahn", meaning: "It's my turn. / It's your turn.", example: { de: "Wer ist dran? — Du bist dran!", en: "Whose turn is it? — It's your turn!" } },
          { word: "Das kommt darauf an.", phonetic: "das komt da-rowf ahn", meaning: "It depends.", example: { de: "Ist das teuer? — Das kommt darauf an.", en: "Is it expensive? — It depends." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "'Ich drücke dir die Daumen' — What does this mean?",
        options: [
          "I'm pressing your thumbs (massage)",
          "I'm keeping my fingers crossed for you (good luck!)",
          "I'm pointing at you with my thumb",
          "I'm giving you a thumbs up"
        ],
        correctIndex: 1,
        explanation: "Germans 'press thumbs' instead of 'crossing fingers'. Both mean wishing someone luck! You'll hear this constantly before exams, job interviews, and important events."
      }
    ]
  }
};
