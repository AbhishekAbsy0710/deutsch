import { Lesson } from "./lessons";

export const lessonsC1Slang: Record<string, Lesson> = {
  "c1-sl1": {
    id: "c1-sl1",
    title: "Internet Slang & Texting",
    module: "C1",
    blocks: [
      {
        type: "cultural-note",
        title: "German Text-Speak (Chatsprache)",
        content: "Germans text using heavy abbreviations and English loanwords. Forget standard German—here, everything is shortened. For example, 'vllt' stands for 'vielleicht' (maybe), and 'digga' is used universally for 'bro' or 'dude'.",
        emoji: "📱"
      },
      {
        type: "vocabulary",
        word: "Digga / Dicker",
        translation: "bro / dude",
        example: "Digga, was machst du da?",
        audioUrl: "",
        phonetic: "dɪ.ɡa"
      },
      {
        type: "vocabulary",
        word: "vllt (vielleicht)",
        translation: "maybe",
        example: "Ich komme vllt später.",
        audioUrl: "",
        phonetic: "faɪ̯.laɪ̯çt"
      },
      {
        type: "vocabulary",
        word: "mMn (meiner Meinung nach)",
        translation: "imo (in my opinion)",
        example: "Das ist mMn keine gute Idee.",
        audioUrl: "",
        phonetic: "ɛm.ɛm.ɛn"
      },
      {
        type: "vocabulary",
        word: "kp (kein Plan)",
        translation: "no idea / idk",
        example: "Hast du das gesehen? - Ne, kp.",
        audioUrl: "",
        phonetic: "ka.pe"
      },
      {
        type: "vocabulary",
        word: "cringe / wild",
        translation: "cringey / crazy",
        example: "Die Situation war komplett wild.",
        audioUrl: "",
        phonetic: "kʁɪnt͡ʃ"
      },
      {
        type: "example-dialogue",
        title: "Texting in the Group Chat",
        context: "Two friends planning the evening over WhatsApp.",
        lines: [
          { speaker: "Jan", de: "Kommst du heute Abend?", en: "Are you coming tonight?" },
          { speaker: "Leo", de: "kp digga, bin mega müde. vllt später.", en: "idk bro, I'm super tired. maybe later." },
          { speaker: "Jan", de: "Ach komm, wird wild!", en: "Oh come on, it'll be crazy!" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What does the abbreviation 'mMn' stand for?",
        options: ["mit meiner Nachricht", "meiner Meinung nach", "morgen Mittag"],
        correctIndex: 1,
        explanation: "'mMn' stands for 'meiner Meinung nach', which translates to 'in my opinion' (imo)."
      }
    ]
  },
  "c1-sl2": {
    id: "c1-sl2",
    title: "Jugendsprache (Youth Slang)",
    module: "C1",
    blocks: [
      {
        type: "cultural-note",
        title: "Jugendwort des Jahres",
        content: "Every year, Germany votes on the 'Youth Word of the Year'. These words are heavily influenced by TikTok, gaming, and hip hop. Using them incorrectly makes you sound 'cringe', but understanding them is essential for modern pop culture.",
        emoji: "🧢"
      },
      {
        type: "vocabulary",
        word: "bodenlos",
        translation: "terrible / out of line (lit: bottomless)",
        example: "Das Essen in der Mensa war heute bodenlos.",
        audioUrl: "",
        phonetic: "boː.dən.loːs"
      },
      {
        type: "vocabulary",
        word: "Macher",
        translation: "a go-getter / someone who gets things done",
        example: "Er redet nicht viel, er ist ein Macher.",
        audioUrl: "",
        phonetic: "ma.xɐ"
      },
      {
        type: "vocabulary",
        word: "sus",
        translation: "suspicious",
        example: "Das klingt irgendwie sus.",
        audioUrl: "",
        phonetic: "zʊs"
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Sein Verhalten gestern war komplett ",
        sentenceAfter: " (terrible).",
        missingWord: "bodenlos",
        translation: "His behavior yesterday was completely out of line."
      }
    ]
  }
};
