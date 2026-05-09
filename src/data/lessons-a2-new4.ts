import { Lesson } from "./lessons";

export const lessonsA2New4: Record<string, Lesson> = {
  "la2_24": {
    id: "la2_24",
    title: "Expressing Opinions (Meinungen)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "How to Say What You Think",
        explanation: "Germans love opinions! Use these starters to share yours. 'Ich finde' and 'Ich glaube' are the most common at A2 level.",
        examples: [
          { de: "Ich finde das gut / schlecht / interessant.", en: "I find that good / bad / interesting." },
          { de: "Ich glaube, dass er recht hat.", en: "I believe that he is right." },
          { de: "Ich denke, wir sollten gehen.", en: "I think we should go." },
          { de: "Meiner Meinung nach ist das falsch.", en: "In my opinion, that is wrong." }
        ]
      },
      {
        type: "grammar",
        title: "Agreeing & Disagreeing",
        explanation: "You need to know how to agree, disagree, and partially agree.",
        examples: [
          { de: "Ja, genau! / Stimmt! / Da hast du recht!", en: "Agreeing: Yes exactly! / Right! / You're right!" },
          { de: "Das finde ich nicht. / Ich bin anderer Meinung.", en: "Disagreeing: I don't think so. / I have a different opinion." },
          { de: "Ja, aber... / Einerseits..., andererseits...", en: "Partial: Yes, but... / On one hand..., on the other..." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Ich finde...", phonetic: "ikh fin-de", meaning: "I find / I think...", example: { de: "Ich finde den Film langweilig.", en: "I find the movie boring." } },
          { word: "Ich glaube...", phonetic: "ikh glow-be", meaning: "I believe / I think...", example: { de: "Ich glaube, es regnet morgen.", en: "I think it will rain tomorrow." } },
          { word: "Stimmt!", phonetic: "shtimt", meaning: "That's right! / Correct!", example: { de: "Ja, das stimmt.", en: "Yes, that's correct." } },
          { word: "Ich bin einverstanden.", phonetic: "ikh bin ayn-fer-shtan-den", meaning: "I agree.", example: { de: "Ich bin damit einverstanden.", en: "I agree with that." } },
          { word: "Das finde ich nicht.", phonetic: "das fin-de ikh nikht", meaning: "I don't think so.", example: { de: "Das finde ich nicht richtig.", en: "I don't think that's right." } },
          { word: "Meiner Meinung nach...", phonetic: "my-ner my-noong nakh", meaning: "In my opinion...", example: { de: "Meiner Meinung nach ist das falsch.", en: "In my opinion, that is wrong." } },
          { word: "Ich denke...", phonetic: "ikh den-ke", meaning: "I think...", example: { de: "Ich denke, wir sollten gehen.", en: "I think we should go." } },
          { word: "Genau!", phonetic: "ge-now", meaning: "Exactly!", example: { de: "Genau! Das sehe ich auch so.", en: "Exactly! I see it that way too." } },
          { word: "Da hast du recht.", phonetic: "da hast doo rekht", meaning: "You are right there.", example: { de: "Ja, da hast du recht.", en: "Yes, you are right about that." } },
          { word: "Das sehe ich auch so.", phonetic: "das zay-e ikh owkh zo", meaning: "I see it the same way.", example: { de: "Das sehe ich auch so.", en: "I agree (see it that way too)." } },
          { word: "Das sehe ich anders.", phonetic: "das zay-e ikh an-ders", meaning: "I see it differently.", example: { de: "Nein, das sehe ich ganz anders.", en: "No, I see that completely differently." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "How do you politely disagree with someone?",
        options: ["Nein, du bist dumm!", "Das finde ich nicht.", "Du hast unrecht.", "Niemals!"],
        correctIndex: 1,
        explanation: "'Das finde ich nicht' is the polite, standard way to express disagreement in German."
      }
    ]
  },
  "la2_25": {
    id: "la2_25",
    title: "Making Plans & Suggestions",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Suggesting Activities",
        explanation: "Use these structures to invite someone, suggest doing something, or make plans.",
        examples: [
          { de: "Wollen wir ins Kino gehen?", en: "Shall we go to the cinema?" },
          { de: "Hast du Lust auf einen Kaffee?", en: "Do you feel like a coffee?" },
          { de: "Lass uns morgen etwas machen!", en: "Let's do something tomorrow!" },
          { de: "Wie wäre es mit einem Spaziergang?", en: "How about a walk?" }
        ]
      },
      {
        type: "grammar",
        title: "Accepting & Declining",
        explanation: "How to say yes, no, or 'maybe' to a plan.",
        examples: [
          { de: "Ja, gerne! / Klar! / Super Idee!", en: "Yes, gladly! / Sure! / Great idea!" },
          { de: "Tut mir leid, ich kann leider nicht.", en: "I'm sorry, unfortunately I can't." },
          { de: "Ich habe leider schon etwas vor.", en: "Unfortunately I already have plans." },
          { de: "Vielleicht, ich muss noch schauen.", en: "Maybe, I still need to check." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Hast du Lust...?", phonetic: "hast doo loost", meaning: "Do you feel like...?", example: { de: "Hast du Lust, schwimmen zu gehen?", en: "Do you feel like going swimming?" } },
          { word: "Wollen wir...?", phonetic: "vol-len veer", meaning: "Shall we...?", example: { de: "Wollen wir essen gehen?", en: "Shall we go eat?" } },
          { word: "Lass uns...", phonetic: "las oons", meaning: "Let's...", example: { de: "Lass uns ein Eis essen!", en: "Let's eat ice cream!" } },
          { word: "Ich habe etwas vor.", phonetic: "ikh hah-be et-vas for", meaning: "I have plans.", example: { de: "Samstag habe ich leider etwas vor.", en: "Saturday I unfortunately have plans." } },
          { word: "Gerne!", phonetic: "gair-ne", meaning: "Gladly! / Sure!", example: { de: "Ja, sehr gerne!", en: "Yes, very gladly!" } },
          { word: "Wie wäre es mit...", phonetic: "vee vä-re es mit", meaning: "How about...", example: { de: "Wie wäre es mit einem Kaffee?", en: "How about a coffee?" } },
          { word: "Abgemacht!", phonetic: "ap-ge-makht", meaning: "Agreed! / It's a deal!", example: { de: "Morgen um acht? Abgemacht!", en: "Tomorrow at eight? Agreed!" } },
          { word: "Passt es dir...?", phonetic: "past es deer", meaning: "Does it suit you...?", example: { de: "Passt es dir am Freitag?", en: "Does Friday suit you?" } },
          { word: "Ich schlage vor...", phonetic: "ikh shlah-ge for", meaning: "I suggest...", example: { de: "Ich schlage vor, wir gehen ins Kino.", en: "I suggest we go to the cinema." } },
          { word: "sich treffen", phonetic: "zikh tref-fen", meaning: "to meet up", example: { de: "Wollen wir uns morgen treffen?", en: "Shall we meet up tomorrow?" } },
          { word: "der Vorschlag", phonetic: "for-shlahk", meaning: "the suggestion", example: { de: "Das ist ein guter Vorschlag.", en: "That is a good suggestion." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Hey, hast du am Wochenende Lust, ins Kino zu gehen?",
        translation: "Hey, do you feel like going to the cinema this weekend?",
        phonetic: "hey, hast doo am vo-khen-en-de loost, ins kee-no tsoo gay-en",
        tip: "This is how real Germans make plans with friends!"
      }
    ]
  },
  "la2_26": {
    id: "la2_26",
    title: "On the Phone (Am Telefon)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Phone Etiquette in Germany",
        explanation: "In Germany, when you answer the phone, you say your LAST NAME (not 'Hello'!). Business calls always use 'Sie'. Key phone phrases are essential for daily life.",
        examples: [
          { de: "Schmidt. (when answering)", en: "Germans answer with their surname!" },
          { de: "Guten Tag, hier spricht Anna Müller.", en: "Good day, this is Anna Müller speaking." },
          { de: "Kann ich bitte mit Herrn Schmidt sprechen?", en: "May I please speak with Mr. Schmidt?" },
          { de: "Einen Moment bitte, ich verbinde Sie.", en: "One moment please, I'll connect you." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "anrufen", phonetic: "an-roo-fen", meaning: "to call (phone)", example: { de: "Ich rufe dich später an.", en: "I'll call you later." } },
          { word: "der Anruf", phonetic: "an-roof", meaning: "the phone call", example: { de: "Ich habe einen Anruf verpasst.", en: "I missed a call." } },
          { word: "zurückrufen", phonetic: "tsoo-rük-roo-fen", meaning: "to call back", example: { de: "Können Sie mich zurückrufen?", en: "Can you call me back?" } },
          { word: "die Mailbox", phonetic: "mayl-boks", meaning: "voicemail", example: { de: "Bitte sprechen Sie auf die Mailbox.", en: "Please leave a message." } },
          { word: "Auf Wiederhören!", phonetic: "owf vee-der-hö-ren", meaning: "Goodbye! (on phone)", example: { de: "Danke, auf Wiederhören!", en: "Thanks, goodbye! (phone only)" } },
          { word: "verbinden", phonetic: "fer-bin-den", meaning: "to connect", example: { de: "Ich verbinde Sie mit Herrn Meyer.", en: "I'll connect you with Mr. Meyer." } },
          { word: "die Nachricht", phonetic: "nakh-rikht", meaning: "the message", example: { de: "Ich möchte eine Nachricht hinterlassen.", en: "I'd like to leave a message." } },
          { word: "hinterlassen", phonetic: "hin-ter-las-sen", meaning: "to leave (a message)", example: { de: "Kann ich eine Nachricht hinterlassen?", en: "Can I leave a message?" } },
          { word: "wählen", phonetic: "väh-len", meaning: "to dial / choose", example: { de: "Sie haben die falsche Nummer gewählt.", en: "You dialed the wrong number." } },
          { word: "besetzt", phonetic: "be-zetst", meaning: "busy / occupied", example: { de: "Die Leitung ist leider besetzt.", en: "The line is unfortunately busy." } },
          { word: "der Apparat", phonetic: "ap-pa-raht", meaning: "the telephone / device", example: { de: "Bleiben Sie bitte am Apparat.", en: "Please stay on the line." } },
          { word: "die Vorwahl", phonetic: "for-vahl", meaning: "the area code", example: { de: "Wie ist die Vorwahl von Berlin?", en: "What is the area code for Berlin?" } }
        ]
      },
      {
        type: "speaking",
        phrase: "Guten Tag, hier spricht Maria Garcia. Kann ich bitte mit Frau Müller sprechen?",
        translation: "Good day, this is Maria Garcia speaking. May I please speak with Mrs. Müller?",
        phonetic: "goo-ten tahk, heer shprikht ma-ree-a gar-tsee-a. kan ikh bit-te mit frow mü-ler shpre-khen",
        tip: "'Auf Wiederhören' is the phone version of 'Auf Wiedersehen' — 'hearing' instead of 'seeing'!"
      },
      {
        type: "quiz-mcq",
        question: "How do Germans typically answer the phone?",
        options: ["Hallo?", "Guten Tag!", "With their last name", "Wer ist da?"],
        correctIndex: 2,
        explanation: "Germans answer the phone by stating their last name: 'Schmidt.' or 'Hier Schmidt.'"
      }
    ]
  },
  "la2_27": {
    id: "la2_27",
    title: "Connecting Words (Konnektoren)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Story Sequencing Words",
        explanation: "To tell stories or describe processes, you need sequencing words. These are adverbs that go in Position 1 or 3.",
        examples: [
          { de: "Zuerst dusche ich. Dann frühstücke ich.", en: "First I shower. Then I eat breakfast." },
          { de: "Danach gehe ich zur Arbeit.", en: "After that I go to work." },
          { de: "Zum Schluss mache ich das Licht aus.", en: "Finally, I turn off the light." }
        ]
      },
      {
        type: "grammar",
        title: "Cause & Consequence Connectors",
        explanation: "These adverbs explain WHY or WHAT HAPPENED NEXT. They cause INVERSION (verb comes right after).",
        examples: [
          { de: "Es regnet. Deshalb bleibe ich zu Hause.", en: "It's raining. Therefore I stay at home." },
          { de: "Er ist krank. Trotzdem geht er zur Arbeit.", en: "He is sick. Nevertheless, he goes to work." },
          { de: "Ich habe kein Geld. Deswegen kann ich nicht kommen.", en: "I have no money. That's why I can't come." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "zuerst", phonetic: "tsoo-airst", meaning: "first", example: { de: "Zuerst lerne ich, dann spiele ich.", en: "First I study, then I play." } },
          { word: "dann / danach", phonetic: "dan / da-nakh", meaning: "then / after that", example: { de: "Ich esse, danach schlafe ich.", en: "I eat, then I sleep." } },
          { word: "zum Schluss", phonetic: "tsoom shloos", meaning: "finally / in the end", example: { de: "Zum Schluss gehen wir nach Hause.", en: "Finally we go home." } },
          { word: "deshalb", phonetic: "des-halp", meaning: "therefore / that's why", example: { de: "Ich bin müde, deshalb gehe ich schlafen.", en: "I'm tired, therefore I go to sleep." } },
          { word: "trotzdem", phonetic: "trots-dem", meaning: "nevertheless / still", example: { de: "Es ist kalt, trotzdem gehe ich raus.", en: "It's cold, but I still go outside." } },
          { word: "außerdem", phonetic: "ow-ser-dem", meaning: "besides / moreover", example: { de: "Ich habe keine Zeit. Außerdem bin ich müde.", en: "I have no time. Besides, I'm tired." } },
          { word: "schließlich", phonetic: "shlees-likh", meaning: "finally / eventually", example: { de: "Schließlich haben wir das Ziel erreicht.", en: "Finally we reached the goal." } },
          { word: "vorher", phonetic: "for-hair", meaning: "beforehand / previously", example: { de: "Ich muss vorher noch einkaufen.", en: "I have to shop beforehand." } },
          { word: "nachher", phonetic: "nakh-hair", meaning: "afterwards / later", example: { de: "Wir können nachher darüber sprechen.", en: "We can talk about it afterwards." } },
          { word: "deswegen", phonetic: "des-vay-gen", meaning: "because of that", example: { de: "Ich war krank, deswegen war ich nicht da.", en: "I was sick, because of that I wasn't there." } },
          { word: "darum", phonetic: "dah-room", meaning: "therefore", example: { de: "Es regnet, darum bleiben wir hier.", en: "It's raining, therefore we stay here." } },
          { word: "folglich", phonetic: "folk-likh", meaning: "consequently", example: { de: "Ich habe gelernt, folglich bin ich vorbereitet.", en: "I studied, consequently I am prepared." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Es regnet stark. ",
        sentenceAfter: " nehme ich einen Regenschirm mit.",
        missingWord: "Deshalb",
        translation: "It's raining hard. Therefore I take an umbrella."
      }
    ]
  }
};
