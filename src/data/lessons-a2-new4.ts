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
          { word: "Das finde ich nicht.", phonetic: "das fin-de ikh nikht", meaning: "I don't think so.", example: { de: "Das finde ich nicht richtig.", en: "I don't think that's right." } }
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
          { word: "Gerne!", phonetic: "gair-ne", meaning: "Gladly! / Sure!", example: { de: "Ja, sehr gerne!", en: "Yes, very gladly!" } }
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
          { word: "Auf Wiederhören!", phonetic: "owf vee-der-hö-ren", meaning: "Goodbye! (on phone)", example: { de: "Danke, auf Wiederhören!", en: "Thanks, goodbye! (phone only)" } }
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
          { word: "außerdem", phonetic: "ow-ser-dem", meaning: "besides / moreover", example: { de: "Ich habe keine Zeit. Außerdem bin ich müde.", en: "I have no time. Besides, I'm tired." } }
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
