import { Lesson } from "./lessons";

export const lessonsB1Comm: Record<string, Lesson> = {
  "lb1_48": {
    id: "lb1_48",
    title: "Expressing Agreement & Disagreement",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "Da stimme ich dir/Ihnen zu.", phonetic: "da shtim-me ikh tsoo", meaning: "I agree with you.", example: { de: "Da stimme ich dir völlig zu.", en: "I completely agree with you." } },
          { word: "Da bin ich anderer Meinung.", phonetic: "da bin ikh an-de-rer my-noong", meaning: "I have a different opinion.", example: { de: "Da bin ich leider anderer Meinung.", en: "I'm afraid I have a different opinion." } },
          { word: "Das sehe ich genauso.", phonetic: "das zay-e ikh ge-now-zo", meaning: "I see it exactly the same way.", example: { de: "Das sehe ich genauso wie du.", en: "I see it exactly like you do." } },
          { word: "Das stimmt, aber...", phonetic: "das shtimt, ah-ber", meaning: "That's true, but...", example: { de: "Das stimmt, aber man muss auch bedenken...", en: "That's true, but one must also consider..." } },
          { word: "Da muss ich widersprechen.", phonetic: "da moos ikh vee-der-shpre-khen", meaning: "I must disagree.", example: { de: "Da muss ich dir leider widersprechen.", en: "I'm afraid I must disagree with you." } },
          { word: "Genau! / Richtig!", phonetic: "ge-now / rikh-tikh", meaning: "Exactly! / Right!", example: { de: "Genau, das denke ich auch!", en: "Exactly, I think so too!" } },
          { word: "Ich bin der gleichen Meinung.", phonetic: "ikh bin dair gly-khen my-noong", meaning: "I am of the same opinion.", example: { de: "Ich bin der gleichen Meinung wie du.", en: "I am of the same opinion as you." } },
          { word: "Da haben Sie recht.", phonetic: "da hah-ben zee rekht", meaning: "You are right there.", example: { de: "Ja, da haben Sie völlig recht.", en: "Yes, you are completely right there." } },
          { word: "Das ist völlig falsch.", phonetic: "das ist fül-likh falsh", meaning: "That is completely wrong.", example: { de: "Nein, das ist völlig falsch.", en: "No, that is completely wrong." } },
          { word: "Das sehe ich ganz anders.", phonetic: "das zay-e ikh gants an-ders", meaning: "I see that completely differently.", example: { de: "Das sehe ich ganz anders als du.", en: "I see that completely differently than you." } }
        ]
      },
      {
        type: "grammar",
        title: "Levels of Agreement/Disagreement",
        explanation: "German has degrees of politeness for disagreement. The softer you are, the more 'B1-appropriate' you sound.",
        examples: [
          { de: "Strong agree: Da bin ich völlig deiner Meinung!", en: "I completely share your opinion!" },
          { de: "Partial agree: Da hast du teilweise recht, aber...", en: "You're partly right, but..." },
          { de: "Soft disagree: Ich sehe das ein bisschen anders.", en: "I see it a bit differently." },
          { de: "Strong disagree: Da bin ich komplett anderer Meinung.", en: "I completely disagree." }
        ]
      }
    ]
  },
  "lb1_49": {
    id: "lb1_49",
    title: "Giving Advice & Making Suggestions",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "Du solltest...", phonetic: "doo zol-test", meaning: "You should...", example: { de: "Du solltest mehr schlafen.", en: "You should sleep more." } },
          { word: "An deiner Stelle würde ich...", phonetic: "an dy-ner shtel-le", meaning: "In your place, I would...", example: { de: "An deiner Stelle würde ich zum Arzt gehen.", en: "In your place, I would go to the doctor." } },
          { word: "Wie wäre es mit...?", phonetic: "vee vay-re es mit", meaning: "How about...?", example: { de: "Wie wäre es mit einem Spaziergang?", en: "How about a walk?" } },
          { word: "Ich schlage vor, dass...", phonetic: "ikh shlah-ge for", meaning: "I suggest that...", example: { de: "Ich schlage vor, dass wir morgen anfangen.", en: "I suggest that we start tomorrow." } },
          { word: "Ich würde dir empfehlen,...", phonetic: "ikh vür-de dir emp-fay-len", meaning: "I would recommend...", example: { de: "Ich würde dir empfehlen, mehr zu üben.", en: "I would recommend you practice more." } },
          { word: "Vielleicht solltest du...", phonetic: "fee-lykht zol-test doo", meaning: "Maybe you should...", example: { de: "Vielleicht solltest du ihn anrufen.", en: "Maybe you should call him." } },
          { word: "Es wäre besser, wenn...", phonetic: "es vay-re bes-ser ven", meaning: "It would be better if...", example: { de: "Es wäre besser, wenn du wartest.", en: "It would be better if you waited." } },
          { word: "Warum versuchst du nicht...?", phonetic: "vah-room fer-zookhst doo nikht", meaning: "Why don't you try...?", example: { de: "Warum versuchst du nicht, ihn zu fragen?", en: "Why don't you try to ask him?" } },
          { word: "Mein Rat wäre...", phonetic: "myn raht vay-re", meaning: "My advice would be...", example: { de: "Mein Rat wäre, früh zu buchen.", en: "My advice would be to book early." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which is the MOST polite way to give advice?",
        options: [
          "Du musst zum Arzt!",
          "Geh zum Arzt!",
          "An deiner Stelle würde ich zum Arzt gehen.",
          "Du bist krank. Arzt. Jetzt."
        ],
        correctIndex: 2,
        explanation: "'An deiner Stelle würde ich...' (In your place I would...) is the most polite because it uses Konjunktiv II and positions the advice as what YOU would do, not telling them what to do."
      }
    ]
  },
  "lb1_50": {
    id: "lb1_50",
    title: "Making Formal Complaints (Sich beschweren)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "sich beschweren über (+ Acc)", phonetic: "zikh be-shvay-ren", meaning: "to complain about", example: { de: "Ich möchte mich beschweren.", en: "I would like to make a complaint." } },
          { word: "Das ist nicht akzeptabel.", phonetic: "das ist nikht ak-tsep-tah-bel", meaning: "That is not acceptable.", example: { de: "Dieser Service ist nicht akzeptabel.", en: "This service is not acceptable." } },
          { word: "Ich bin damit nicht zufrieden.", phonetic: "ikh bin da-mit nikht tsoo-free-den", meaning: "I am not satisfied with this.", example: { de: "Ich bin mit dem Ergebnis nicht zufrieden.", en: "I am not satisfied with the result." } },
          { word: "Ich erwarte eine Lösung.", phonetic: "ikh er-var-te", meaning: "I expect a solution.", example: { de: "Ich erwarte eine schnelle Lösung.", en: "I expect a quick solution." } },
          { word: "die Beschwerde", phonetic: "be-shvair-de", meaning: "complaint (noun)", example: { de: "Ich möchte eine formelle Beschwerde einreichen.", en: "I'd like to file a formal complaint." } },
          { word: "Ich fordere mein Geld zurück.", phonetic: "ikh for-de-re myn gelt tsoo-rük", meaning: "I demand my money back.", example: { de: "Der Artikel ist kaputt, ich fordere mein Geld zurück.", en: "The item is broken, I demand my money back." } },
          { word: "Das ist eine Unverschämtheit.", phonetic: "das ist eye-ne oon-fer-shaimt-hyt", meaning: "That is an outrage / impudence.", example: { de: "So lange zu warten ist eine Unverschämtheit.", en: "Waiting so long is an outrage." } },
          { word: "Ich werde mich beim Chef beschweren.", phonetic: "ikh vair-de mikh bym shef be-shvay-ren", meaning: "I will complain to the boss.", example: { de: "Wenn Sie mir nicht helfen, werde ich mich beim Chef beschweren.", en: "If you don't help me, I will complain to the boss." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Sehr geehrte Damen und Herren, ich möchte mich über die Lieferung vom 15. April beschweren. Das Produkt ist beschädigt angekommen. Ich erwarte eine Erstattung oder einen kostenlosen Ersatz.",
        translation: "Dear Sir or Madam, I would like to complain about the delivery from April 15th. The product arrived damaged. I expect a refund or a free replacement.",
        phonetic: "zair ge-air-te dah-men oont hair-ren...",
        tip: "Structure: 1) Greeting, 2) What happened, 3) What's wrong, 4) What you expect. Stay formal but firm."
      }
    ]
  },
  "lb1_51": {
    id: "lb1_51",
    title: "Discussing Pros & Cons (Vorteile & Nachteile)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "der Vorteil", phonetic: "for-tyle", meaning: "advantage", example: { de: "Ein Vorteil ist, dass...", en: "An advantage is that..." } },
          { word: "der Nachteil", phonetic: "nakh-tyle", meaning: "disadvantage", example: { de: "Ein Nachteil ist, dass...", en: "A disadvantage is that..." } },
          { word: "Einerseits...andererseits...", phonetic: "ay-ner-zyts...an-de-rer-zyts", meaning: "On the one hand...on the other...", example: { de: "Einerseits ist es praktisch, andererseits teuer.", en: "On the one hand it's practical, on the other expensive." } },
          { word: "Dafür spricht...", phonetic: "da-für shprikht", meaning: "In favor of this...", example: { de: "Dafür spricht, dass es günstig ist.", en: "In favor: it's affordable." } },
          { word: "Dagegen spricht...", phonetic: "da-gay-gen shprikht", meaning: "Against this...", example: { de: "Dagegen spricht, dass es viel Zeit kostet.", en: "Against: it costs a lot of time." } },
          { word: "Abwägen", phonetic: "ap-vay-gen", meaning: "to weigh up / consider", example: { de: "Man muss die Vor- und Nachteile abwägen.", en: "One must weigh the pros and cons." } },
          { word: "Ein weiteres Argument ist...", phonetic: "ayn vy-te-res ar-goo-ment ist", meaning: "Another argument is...", example: { de: "Ein weiteres Argument ist der Preis.", en: "Another argument is the price." } },
          { word: "Auf der einen Seite... auf der anderen Seite...", phonetic: "owf dair ay-nen zy-te... owf dair an-de-ren zy-te", meaning: "On the one side... on the other side...", example: { de: "Auf der einen Seite gut, auf der anderen schlecht.", en: "On the one side good, on the other bad." } },
          { word: "Ein wichtiger Punkt ist...", phonetic: "ayn vikh-ti-ger poonkt ist", meaning: "An important point is...", example: { de: "Ein wichtiger Punkt ist die Gesundheit.", en: "An important point is health." } }
        ]
      },
      {
        type: "grammar",
        title: "The B1 Argumentation Framework",
        explanation: "For the Sprechen presentation, use this exact structure to discuss any topic.",
        examples: [
          { de: "1. Einleitung: 'Ich möchte über das Thema X sprechen.'", en: "Introduction" },
          { de: "2. Vorteile: 'Ein Vorteil ist... / Dafür spricht...'", en: "Pros" },
          { de: "3. Nachteile: 'Ein Nachteil ist... / Dagegen spricht...'", en: "Cons" },
          { de: "4. Meinung: 'Meiner Meinung nach...'", en: "Your opinion" },
          { de: "5. Schluss: 'Zusammenfassend kann man sagen...'", en: "Conclusion" }
        ]
      }
    ]
  },
  "lb1_52": {
    id: "lb1_52",
    title: "Narrating Events & Stories (Erzählen)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "zuerst / zunächst", phonetic: "tsoo-airst", meaning: "first / at first", example: { de: "Zuerst bin ich aufgestanden.", en: "First I got up." } },
          { word: "dann / danach", phonetic: "dan / da-nakh", meaning: "then / after that", example: { de: "Dann habe ich gefrühstückt.", en: "Then I had breakfast." } },
          { word: "plötzlich", phonetic: "plöts-likh", meaning: "suddenly", example: { de: "Plötzlich klingelte das Telefon.", en: "Suddenly the phone rang." } },
          { word: "schließlich / zum Schluss", phonetic: "shlees-likh", meaning: "finally / in the end", example: { de: "Schließlich haben wir das Problem gelöst.", en: "Finally we solved the problem." } },
          { word: "inzwischen / währenddessen", phonetic: "in-tsvi-shen", meaning: "meanwhile / in the meantime", example: { de: "Inzwischen hat er angerufen.", en: "Meanwhile he called." } },
          { word: "Es war einmal...", phonetic: "es var ayn-mahl", meaning: "Once upon a time...", example: { de: "Es war einmal ein König...", en: "Once upon a time there was a king..." } },
          { word: "Kurz darauf", phonetic: "koorts da-rowf", meaning: "Shortly after", example: { de: "Kurz darauf fing es an zu regnen.", en: "Shortly after, it started to rain." } },
          { word: "Schließlich und endlich", phonetic: "shlees-likh oont ent-likh", meaning: "Finally and at last", example: { de: "Schließlich und endlich haben wir es geschafft.", en: "Finally and at last we made it." } },
          { word: "Im Anschluss daran", phonetic: "im an-shloos da-ran", meaning: "Following that / subsequently", example: { de: "Im Anschluss daran gingen wir nach Hause.", en: "Following that we went home." } }
        ]
      },
      {
        type: "grammar",
        title: "Sequencing a Story",
        explanation: "Use these time markers to structure a coherent narrative. Mix Präteritum (written) and Perfekt (spoken) depending on context.",
        examples: [
          { de: "Zuerst... → Dann... → Danach... → Plötzlich... → Schließlich...", en: "First → Then → After that → Suddenly → Finally" },
          { de: "Am Anfang war alles ruhig. Plötzlich hörte ich ein Geräusch.", en: "At the beginning everything was calm. Suddenly I heard a noise." }
        ]
      }
    ]
  },
  "lb1_53": {
    id: "lb1_53",
    title: "Describing Dreams, Hopes & Plans",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "Ich träume davon,...zu...", phonetic: "ikh troy-me da-fon", meaning: "I dream of...-ing", example: { de: "Ich träume davon, eine Weltreise zu machen.", en: "I dream of traveling the world." } },
          { word: "Ich hoffe, dass...", phonetic: "ikh hof-fe", meaning: "I hope that...", example: { de: "Ich hoffe, dass ich die Prüfung bestehe.", en: "I hope I pass the exam." } },
          { word: "Ich habe vor,...zu...", phonetic: "ikh hah-be for", meaning: "I plan to...", example: { de: "Ich habe vor, nach Deutschland zu ziehen.", en: "I plan to move to Germany." } },
          { word: "Mein Ziel ist es,...zu...", phonetic: "myn tseel ist es", meaning: "My goal is to...", example: { de: "Mein Ziel ist es, fließend Deutsch zu sprechen.", en: "My goal is to speak German fluently." } },
          { word: "Ich wünsche mir...", phonetic: "ikh vün-she meer", meaning: "I wish for...", example: { de: "Ich wünsche mir mehr Freizeit.", en: "I wish for more free time." } },
          { word: "die Zukunft", phonetic: "tsoo-koonft", meaning: "the future", example: { de: "In Zukunft möchte ich selbstständig arbeiten.", en: "In the future I want to work independently." } },
          { word: "Ich nehme mir vor,...", phonetic: "ikh nay-me meer for", meaning: "I resolve to...", example: { de: "Ich nehme mir vor, gesünder zu essen.", en: "I resolve to eat healthier." } },
          { word: "Es ist mein größter Wunsch...", phonetic: "es ist myn grös-ter voonsh", meaning: "It is my greatest wish...", example: { de: "Es ist mein größter Wunsch, Arzt zu werden.", en: "It is my greatest wish to become a doctor." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ich habe ",
        sentenceAfter: ", nächstes Jahr nach Japan zu reisen.",
        missingWord: "vor",
        translation: "I plan to travel to Japan next year."
      }
    ]
  },
  "lb1_54": {
    id: "lb1_54",
    title: "Giving a Structured Presentation (Präsentation)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Presentation Phrases — Your Toolkit",
        explanation: "These phrases are ESSENTIAL for the Sprechen exam, Part 2 (Presentation). Memorize this structure and you'll always have something to say.",
        examples: [
          { de: "OPENING: 'Ich möchte über das Thema ... sprechen.'", en: "I would like to speak about the topic..." },
          { de: "STRUCTURE: 'Zuerst sage ich etwas über..., dann...'", en: "First I'll say something about..., then..." },
          { de: "PERSONAL: 'In meinem Heimatland / Aus meiner Erfahrung...'", en: "In my home country / From my experience..." },
          { de: "PROS/CONS: 'Ein Vorteil/Nachteil ist...'", en: "An advantage/disadvantage is..." },
          { de: "OPINION: 'Meiner Meinung nach... / Ich finde, dass...'", en: "In my opinion... / I think that..." },
          { de: "CONCLUSION: 'Zusammenfassend kann man sagen, dass...'", en: "In summary, one can say that..." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Ich möchte über...sprechen.", phonetic: "ikh mökh-te ü-ber...shpre-khen", meaning: "I'd like to talk about...", example: { de: "Ich möchte über gesunde Ernährung sprechen.", en: "I'd like to talk about healthy eating." } },
          { word: "Zusammenfassend kann man sagen...", phonetic: "tsoo-za-men-fas-sent", meaning: "In summary, one can say...", example: { de: "Zusammenfassend kann man sagen, dass es Vor- und Nachteile gibt.", en: "In summary, there are pros and cons." } },
          { word: "Haben Sie / Hast du noch Fragen?", phonetic: "hah-ben zee nokh frah-gen", meaning: "Do you have any questions?", example: { de: "Vielen Dank. Haben Sie noch Fragen?", en: "Thank you. Any questions?" } },
          { word: "Das führt mich zum nächsten Punkt.", phonetic: "das fürt mikh tsoom naykh-sten poonkt", meaning: "That brings me to the next point.", example: { de: "Das führt mich zum nächsten Punkt: den Kosten.", en: "That brings me to the next point: the costs." } },
          { word: "Um ein Beispiel zu nennen...", phonetic: "oom ayn by-shpeel tsoo nen-nen", meaning: "To give an example...", example: { de: "Um ein Beispiel zu nennen: In meiner Stadt...", en: "To give an example: In my city..." } },
          { word: "Ich bedanke mich für Ihre Aufmerksamkeit.", phonetic: "ikh be-dang-ke mikh für ee-re owf-mairk-zam-kyt", meaning: "I thank you for your attention.", example: { de: "Ich bedanke mich für Ihre Aufmerksamkeit.", en: "I thank you for your attention." } }
        ]
      }
    ]
  },
  "lb1_55": {
    id: "lb1_55",
    title: "Negotiating & Compromise (Verhandeln)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "Können wir uns darauf einigen?", phonetic: "kö-nen veer oons da-rowf ay-ni-gen", meaning: "Can we agree on this?", example: { de: "Können wir uns auf Samstag einigen?", en: "Can we agree on Saturday?" } },
          { word: "Wäre es möglich, dass...?", phonetic: "vay-re es mö-glikh", meaning: "Would it be possible that...?", example: { de: "Wäre es möglich, dass wir den Termin verschieben?", en: "Would it be possible to postpone the appointment?" } },
          { word: "Ich bin bereit,...", phonetic: "ikh bin be-ryt", meaning: "I am willing to...", example: { de: "Ich bin bereit, einen Kompromiss zu finden.", en: "I'm willing to find a compromise." } },
          { word: "der Kompromiss", phonetic: "kom-pro-mis", meaning: "compromise", example: { de: "Lass uns einen Kompromiss finden.", en: "Let's find a compromise." } },
          { word: "Das kommt darauf an.", phonetic: "das komt da-rowf an", meaning: "That depends.", example: { de: "Das kommt darauf an, wie viel es kostet.", en: "That depends on how much it costs." } },
          { word: "Könnten Sie mir entgegenkommen?", phonetic: "kön-ten zee meer ent-gay-gen-ko-men", meaning: "Could you meet me halfway?", example: { de: "Könnten Sie mir beim Preis entgegenkommen?", en: "Could you meet me halfway on the price?" } },
          { word: "Das ist mein letztes Angebot.", phonetic: "das ist myn lets-tes an-ge-boht", meaning: "That is my final offer.", example: { de: "Tut mir leid, das ist mein letztes Angebot.", en: "Sorry, that is my final offer." } },
          { word: "Wir müssen einen Mittelweg finden.", phonetic: "veer müs-sen ay-nen mit-tel-vayk fin-den", meaning: "We need to find a middle ground.", example: { de: "Wir müssen einen Mittelweg finden, der für beide passt.", en: "We need to find a middle ground that works for both." } }
        ]
      },
      {
        type: "grammar",
        title: "Polite Negotiation Phrases",
        explanation: "In the Sprechen exam 'Planning Together' task, you MUST negotiate and reach an agreement. These phrases help.",
        examples: [
          { de: "Einverstanden! / Abgemacht!", en: "Agreed! / Deal!" },
          { de: "Ich hätte einen anderen Vorschlag...", en: "I would have a different suggestion..." },
          { de: "Was hältst du von...? / Was halten Sie von...?", en: "What do you think of...?" },
          { de: "Das wäre auch eine Möglichkeit.", en: "That would also be a possibility." }
        ]
      }
    ]
  },
  "lb1_56": {
    id: "lb1_56",
    title: "Expressing Conditions & Consequences",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "Wenn...dann...", phonetic: "ven...dan", meaning: "If...then...", example: { de: "Wenn du lernst, dann bestehst du.", en: "If you study, then you'll pass." } },
          { word: "Falls...", phonetic: "fals", meaning: "In case...", example: { de: "Falls es Probleme gibt, rufen Sie mich an.", en: "In case there are problems, call me." } },
          { word: "Unter der Bedingung, dass...", phonetic: "oon-ter dair be-ding-oong", meaning: "On the condition that...", example: { de: "Unter der Bedingung, dass du pünktlich bist.", en: "On the condition that you're on time." } },
          { word: "Im Falle von...", phonetic: "im fal-le fon", meaning: "In the event of...", example: { de: "Im Falle von Feuer, verlassen Sie das Gebäude.", en: "In case of fire, leave the building." } },
          { word: "sofern", phonetic: "zo-fairn", meaning: "provided that / as long as", example: { de: "Sofern das Wetter gut ist, gehen wir raus.", en: "Provided the weather is good, we'll go out." } },
          { word: "Es sei denn, dass...", phonetic: "es zy den das", meaning: "Unless...", example: { de: "Wir gehen spazieren. Es sei denn, dass es regnet.", en: "We go for a walk. Unless it rains." } },
          { word: "Andernfalls...", phonetic: "an-dern-fals", meaning: "Otherwise...", example: { de: "Zieh dich warm an. Andernfalls wirst du krank.", en: "Dress warmly. Otherwise you will get sick." } },
          { word: "Vorausgesetzt, dass...", phonetic: "fo-rows-ge-zetst das", meaning: "Provided that...", example: { de: "Vorausgesetzt, dass ich Zeit habe, komme ich.", en: "Provided that I have time, I will come." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which is the FORMAL way to say 'If problems arise, call me'?",
        options: [
          "Wenn Probleme, ruf an.",
          "Falls es zu Problemen kommen sollte, kontaktieren Sie mich bitte.",
          "Probleme? Anruf!",
          "Weil Probleme, Telefon."
        ],
        correctIndex: 1,
        explanation: "'Falls es zu Problemen kommen sollte' uses Konjunktiv II (sollte) for politeness, making it the most formal option."
      }
    ]
  },
  "lb1_57": {
    id: "lb1_57",
    title: "Circumlocution (Talking Around a Word)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "When You Don't Know the Word",
        explanation: "B1 = independent user. That means you can COMMUNICATE even when you don't know the exact word. Circumlocution strategies help you describe something without knowing its name.",
        examples: [
          { de: "Das ist ein Ding/Gerät, mit dem man...", en: "It's a thing/device that you use to..." },
          { de: "Es ist so ähnlich wie...", en: "It's similar to..." },
          { de: "Ich meine das Gegenteil von...", en: "I mean the opposite of..." },
          { de: "Das ist eine Person, die...", en: "It's a person who..." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Das ist ein Ding, mit dem man...", phonetic: "das ist ayn ding, mit daim man", meaning: "It's a thing you use to...", example: { de: "Das ist ein Ding, mit dem man Flaschen öffnet. (= Flaschenöffner)", en: "It's a thing you use to open bottles. (= bottle opener)" } },
          { word: "Wie heißt das nochmal?", phonetic: "vee hyst das nokh-mahl", meaning: "What's that called again?", example: { de: "Wie heißt das nochmal auf Deutsch?", en: "What's that called again in German?" } },
          { word: "Ich meine...", phonetic: "ikh my-ne", meaning: "I mean...", example: { de: "Ich meine das, was man zum Kochen braucht.", en: "I mean the thing you need for cooking." } },
          { word: "Es sieht aus wie...", phonetic: "es zeet ows vee", meaning: "It looks like...", example: { de: "Es sieht aus wie ein kleiner Computer.", en: "It looks like a small computer." } },
          { word: "Das Wort fällt mir gerade nicht ein.", phonetic: "das vort fält meer ge-rah-de nikht yn", meaning: "I can't think of the word right now.", example: { de: "Das Wort fällt mir gerade nicht ein, aber es ist rot.", en: "I can't think of the word right now, but it is red." } },
          { word: "Es dient dazu,...", phonetic: "es deent da-tsoo", meaning: "It serves to...", example: { de: "Es dient dazu, Wasser zu kochen.", en: "It serves to boil water." } },
          { word: "Man benutzt es für...", phonetic: "man be-nootst es für", meaning: "One uses it for...", example: { de: "Man benutzt es für die Arbeit.", en: "One uses it for work." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "You forgot the word 'Kühlschrank' (refrigerator). How do you describe it?",
        options: [
          "Das kalte Ding in der Küche.",
          "Es ist ein großes Gerät in der Küche, in dem man Lebensmittel kalt aufbewahrt.",
          "Kühl... äh... Schrank...",
          "I don't know the word."
        ],
        correctIndex: 1,
        explanation: "Use a relative clause to describe the function: 'Ein Gerät, in dem man Lebensmittel kalt aufbewahrt.' This shows B1-level communication skill."
      }
    ]
  }
};
