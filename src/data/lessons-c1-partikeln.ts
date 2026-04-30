import { Lesson } from "./lessons";

export const lessonsC1Partikeln: Record<string, Lesson> = {
  "c1-mp1": {
    id: "c1-mp1",
    title: "Modalpartikeln: doch & mal",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "What Are Modalpartikeln?",
        explanation: "Modalpartikeln are tiny words (doch, mal, ja, halt, eben, schon, eigentlich, wohl) that add emotion, attitude, or nuance to a sentence. They don't change the meaning — they change the FEELING. Without them, you sound like a textbook. With them, you sound German.",
        examples: [
          { de: "Komm her!", en: "Come here! (neutral/commanding)" },
          { de: "Komm mal her!", en: "Come here for a sec! (softer, friendlier)" },
          { de: "Das ist gut.", en: "That is good. (flat statement)" },
          { de: "Das ist ja gut!", en: "Oh, that's good! (surprised/pleased)" },
        ]
      },
      {
        type: "cultural-note",
        title: "The Secret to Sounding Native",
        content: "Germans use Modalpartikeln in almost every spoken sentence. They're rarely taught in textbooks, but they're the #1 marker of natural speech. A sentence without them sounds robotic or foreign. Start adding them and Germans will immediately notice your fluency jump.",
        emoji: "🗝️"
      },
      {
        type: "grammar",
        title: "'doch' — Contradiction & Emphasis",
        explanation: "'Doch' is the most versatile Modalpartikel. It can mean 'actually', 'but really', or express surprise/contradiction. It's also the famous answer to negative questions (unlike English, German has a word for 'yes, actually!').",
        examples: [
          { de: "Du sprichst kein Deutsch? — Doch!", en: "You don't speak German? — Yes I do! (contradicting)" },
          { de: "Das ist doch klar!", en: "That's obvious! (emphasis — 'come on, you know this')" },
          { de: "Komm doch mit!", en: "Come along! (encouraging, persuading)" },
          { de: "Das war doch gestern, oder?", en: "That was yesterday, wasn't it? (seeking confirmation)" },
        ]
      },
      {
        type: "grammar",
        title: "'mal' — Making Things Casual",
        explanation: "'Mal' (short for 'einmal') softens requests and commands, making them sound friendlier and less demanding. It's the difference between a boss giving orders and a friend asking nicely.",
        examples: [
          { de: "Gib mir das Buch!", en: "Give me the book! (commanding)" },
          { de: "Gib mir mal das Buch.", en: "Hand me the book, would you? (casual)" },
          { de: "Schau mal!", en: "Look! / Check this out! (drawing attention)" },
          { de: "Kannst du mal helfen?", en: "Can you help for a sec? (casual request)" },
        ]
      },
      {
        type: "example-dialogue",
        title: "Friends Making Weekend Plans",
        context: "Two friends deciding what to do on Saturday.",
        lines: [
          { speaker: "Lisa", de: "Hast du am Samstag mal Zeit?", en: "Do you have time on Saturday? (casual)" },
          { speaker: "Tom", de: "Ja, eigentlich schon. Warum?", en: "Yeah, actually I do. Why?" },
          { speaker: "Lisa", de: "Komm doch mit ins Kino!", en: "Come to the cinema with us!" },
          { speaker: "Tom", de: "Ach, das ist ja eine gute Idee!", en: "Oh, that's a great idea!" },
          { speaker: "Lisa", de: "Schau mal, der neue Film läuft um 20 Uhr.", en: "Look, the new film is showing at 8 PM." },
          { speaker: "Tom", de: "Perfekt! Ich komme doch gerne mit.", en: "Perfect! I'd love to come along." }
        ]
      },
      {
        type: "summary",
        points: [
          "'doch' contradicts, emphasizes, encourages, or seeks confirmation",
          "'mal' softens everything — use it to sound friendly, not demanding",
          "'Doch!' is the unique German 'yes' that contradicts a negative question",
          "Start adding 'mal' to every request you make — instant fluency boost"
        ]
      },
      {
        type: "quiz-mcq",
        question: "Someone says 'Du magst kein Bier?' but you DO like beer. How do you respond?",
        options: ["Ja!", "Nein!", "Doch!", "Mal!"],
        correctIndex: 2,
        explanation: "'Doch' is the unique German word that means 'yes, actually!' when contradicting a negative statement or question."
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Kannst du ",
        sentenceAfter: " das Fenster aufmachen?",
        missingWord: "mal",
        translation: "Can you open the window (for a sec)?"
      },
      {
        type: "quiz-mcq",
        question: "What does 'Schau mal!' mean?",
        options: ["Look away!", "Look once!", "Look! / Check this out!", "Don't look!"],
        correctIndex: 2,
        explanation: "'Schau mal' is one of the most common German phrases. 'mal' here softens it into a casual 'hey, check this out!' rather than a strict command."
      },
      {
        type: "speaking",
        phrase: "Komm doch mal vorbei!",
        translation: "Come by sometime! (casual invitation)",
        phonetic: "kom dohkh mahl for-bye",
        tip: "Notice how 'doch' + 'mal' together make this super casual and friendly — a very natural German invitation."
      }
    ]
  },
  "c1-mp2": {
    id: "c1-mp2",
    title: "Modalpartikeln: ja & eben/halt",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "'ja' as a Modalpartikel (NOT meaning 'yes')",
        explanation: "When 'ja' appears in the MIDDLE of a sentence (not as an answer), it expresses shared knowledge, surprise, or emphasis. It signals 'as you know' or 'wow!' depending on context and intonation.",
        examples: [
          { de: "Das ist ja toll!", en: "That's great! (surprised reaction)" },
          { de: "Du weißt ja, wie er ist.", en: "You know how he is. (shared knowledge)" },
          { de: "Das ist ja unglaublich!", en: "That's incredible! (astonishment)" },
          { de: "Sei ja vorsichtig!", en: "Be careful! (warning/emphasis)" },
        ]
      },
      {
        type: "grammar",
        title: "'eben' & 'halt' — Accepting Reality",
        explanation: "'Eben' and 'halt' are nearly identical. They express resignation or acceptance — 'that's just how it is.' 'Halt' is slightly more southern German/casual, 'eben' is more universal. Both signal 'there's nothing you can do about it.'",
        examples: [
          { de: "Das ist eben so.", en: "That's just how it is. (acceptance)" },
          { de: "Er ist halt so.", en: "He's just like that. (resignation)" },
          { de: "Dann musst du eben warten.", en: "Then you'll just have to wait." },
          { de: "Ich bin halt müde.", en: "I'm just tired. (what can you do?)" },
        ]
      },
      {
        type: "example-dialogue",
        title: "Reacting to Bad Weather",
        context: "Friends planned an outdoor BBQ but it's raining.",
        lines: [
          { speaker: "Sarah", de: "Es regnet ja schon wieder!", en: "It's raining AGAIN! (frustrated surprise)" },
          { speaker: "Max", de: "Ja, das Wetter ist halt so im April.", en: "Yeah, the weather's just like that in April." },
          { speaker: "Sarah", de: "Aber wir wollten doch grillen!", en: "But we wanted to barbecue!" },
          { speaker: "Max", de: "Dann grillen wir eben drinnen.", en: "Then we'll just grill inside." },
          { speaker: "Sarah", de: "Das ist ja eigentlich auch gemütlich.", en: "That's actually cozy too, come to think of it." }
        ]
      },
      {
        type: "cultural-note",
        title: "Regional Differences: eben vs halt",
        content: "In northern Germany, you'll hear 'eben' more. In Bavaria, Austria, and Switzerland, 'halt' dominates. In everyday speech across Germany, both are understood everywhere. Using 'halt' gives you a slightly warmer, more southern vibe.",
        emoji: "🗺️"
      },
      {
        type: "summary",
        points: [
          "'ja' in mid-sentence = surprise ('Das ist ja toll!') or shared knowledge ('Du weißt ja...')",
          "'eben' and 'halt' = acceptance/resignation — 'that's just how it is'",
          "'halt' is more southern/casual, 'eben' is more universal",
          "'Sei ja vorsichtig!' — 'ja' as emphasis/warning"
        ]
      },
      {
        type: "quiz-mcq",
        question: "What does 'ja' express in: 'Das ist ja unglaublich!'?",
        options: ["Agreement (yes)", "Surprise/astonishment", "A question", "Negation"],
        correctIndex: 1,
        explanation: "When 'ja' appears in the middle of a sentence, it expresses surprise or emphasis — not 'yes'. Here it means 'Wow, that's incredible!'"
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Er ist ",
        sentenceAfter: " so. Man kann nichts machen.",
        missingWord: "eben",
        translation: "He's just like that. You can't do anything about it."
      },
      {
        type: "speaking",
        phrase: "Das ist ja eine Überraschung!",
        translation: "What a surprise! (genuine astonishment)",
        phonetic: "das ist yah eye-nuh ue-ber-ra-shung",
        tip: "Stress 'ja' slightly to convey the surprise. Without 'ja', the sentence is flat. With it, you sound genuinely surprised."
      }
    ]
  },
  "c1-mp3": {
    id: "c1-mp3",
    title: "Modalpartikeln: eigentlich, wohl & schon",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "'eigentlich' — Actually / To Be Honest",
        explanation: "'Eigentlich' softens statements, introduces a slight contradiction, or signals 'well, if I'm being honest...' It makes you sound thoughtful and nuanced rather than blunt.",
        examples: [
          { de: "Eigentlich wollte ich zu Hause bleiben.", en: "Actually, I wanted to stay home." },
          { de: "Wie heißt du eigentlich?", en: "What's your name, by the way?" },
          { de: "Eigentlich hast du recht.", en: "Actually, you're right. (reluctant admission)" },
          { de: "Das ist eigentlich ganz einfach.", en: "It's actually quite simple." },
        ]
      },
      {
        type: "grammar",
        title: "'wohl' — Probably / I Suppose",
        explanation: "'Wohl' expresses probability, assumption, or uncertainty. It's softer than 'wahrscheinlich' (probably) and adds a personal-guess quality to your statement.",
        examples: [
          { de: "Er ist wohl krank.", en: "He's probably sick. (my guess)" },
          { de: "Das wird wohl stimmen.", en: "That's probably true." },
          { de: "Du fühlst dich wohl nicht gut?", en: "You're not feeling well, I suppose?" },
          { de: "Sie hat wohl recht.", en: "She's probably right." },
        ]
      },
      {
        type: "grammar",
        title: "'schon' — Emphasis & Reassurance (NOT 'already')",
        explanation: "As a Modalpartikel, 'schon' doesn't mean 'already.' It expresses confidence, reassurance, or concession. It says 'trust me' or 'I know, but...'",
        examples: [
          { de: "Das wird schon klappen.", en: "It'll work out. (don't worry)" },
          { de: "Ja schon, aber...", en: "Sure, but... (conceding a point)" },
          { de: "Du schaffst das schon!", en: "You'll manage! (encouraging)" },
          { de: "Das stimmt schon, aber...", en: "That's true, but... (partial agreement)" },
        ]
      },
      {
        type: "example-dialogue",
        title: "Nervous Before a Job Interview",
        context: "A friend is anxious about an upcoming job interview.",
        lines: [
          { speaker: "Anna", de: "Ich bin so nervös! Was ist, wenn ich alles vergesse?", en: "I'm so nervous! What if I forget everything?" },
          { speaker: "Lukas", de: "Das wird schon klappen!", en: "It'll work out! (reassuring)" },
          { speaker: "Anna", de: "Ja schon, aber die stellen bestimmt schwere Fragen.", en: "Sure, but they'll definitely ask tough questions." },
          { speaker: "Lukas", de: "Du bist eigentlich gut vorbereitet.", en: "You're actually well prepared." },
          { speaker: "Anna", de: "Sie suchen wohl jemanden mit mehr Erfahrung...", en: "They're probably looking for someone with more experience..." },
          { speaker: "Lukas", de: "Ach, du schaffst das schon! Du bist doch die Beste!", en: "Come on, you'll manage! You're the best!" }
        ]
      },
      {
        type: "summary",
        points: [
          "'eigentlich' = 'actually/to be honest' — softens, redirects, or adds nuance",
          "'wohl' = 'probably/I suppose' — personal guess, softer than 'wahrscheinlich'",
          "'schon' ≠ 'already' here! It means 'don't worry' or 'sure, but...'",
          "Combine them: 'Das ist eigentlich schon richtig' = 'That's actually right, I suppose'"
        ]
      },
      {
        type: "quiz-mcq",
        question: "What does 'schon' mean in: 'Das wird schon klappen'?",
        options: ["Already", "Don't worry, it will", "Never", "Quickly"],
        correctIndex: 1,
        explanation: "As a Modalpartikel, 'schon' expresses reassurance — 'it'll work out, don't worry.' It does NOT mean 'already' here."
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Er ist ",
        sentenceAfter: " zu Hause.",
        missingWord: "wohl",
        translation: "He's probably at home."
      },
      {
        type: "speaking",
        phrase: "Eigentlich wollte ich das nicht sagen.",
        translation: "Actually, I didn't want to say that.",
        phonetic: "eye-gent-likh vol-tuh ikh das nikht zah-gen",
        tip: "'Eigentlich' at the start signals a soft contradiction or admission — very common in real conversation."
      }
    ]
  },
  "c1-mp4": {
    id: "c1-mp4",
    title: "Modalpartikeln: Combining Like a Native",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Stacking Modalpartikeln",
        explanation: "Native speakers often stack 2-3 Modalpartikeln in one sentence. This sounds natural in German but would be impossible to translate directly. The order matters: typically doch/ja come first, then mal/eben/halt, then schon.",
        examples: [
          { de: "Komm doch mal vorbei!", en: "Come visit sometime! (warm invitation)" },
          { de: "Das ist ja wohl nicht dein Ernst!", en: "You CAN'T be serious! (shocked disbelief)" },
          { de: "Sag halt einfach mal nein.", en: "Just say no for once." },
          { de: "Das habe ich dir doch schon mal gesagt!", en: "I've told you that before! (frustrated reminder)" },
        ]
      },
      {
        type: "grammar",
        title: "Quick Reference: All 8 Modalpartikeln",
        explanation: "Here's your cheat sheet for all the Modalpartikeln covered. Remember: they NEVER appear at the start of a main clause (except 'eigentlich').",
        examples: [
          { de: "doch", en: "contradiction, emphasis, encouragement" },
          { de: "mal", en: "softener, makes requests casual" },
          { de: "ja", en: "surprise, shared knowledge, warning" },
          { de: "halt / eben", en: "resignation, 'that's just how it is'" },
          { de: "eigentlich", en: "actually, to be honest, by the way" },
          { de: "wohl", en: "probably, I suppose" },
          { de: "schon", en: "reassurance, concession" },
        ]
      },
      {
        type: "example-dialogue",
        title: "A Typical German Conversation (Stacked Partikeln)",
        context: "Notice how almost every sentence has 1-2 Modalpartikeln — THIS is how Germans actually talk.",
        lines: [
          { speaker: "Maria", de: "Hast du eigentlich schon gegessen?", en: "Have you actually eaten yet, by the way?" },
          { speaker: "Paul", de: "Nee, ich hatte halt keine Zeit.", en: "Nah, I just didn't have time." },
          { speaker: "Maria", de: "Komm, wir bestellen doch mal was!", en: "Come on, let's order something!" },
          { speaker: "Paul", de: "Das ist ja eigentlich eine gute Idee.", en: "That's actually a good idea, come to think of it." },
          { speaker: "Maria", de: "Pizza wird wohl das Schnellste sein.", en: "Pizza is probably the fastest." },
          { speaker: "Paul", de: "Ja schon, aber ich wollte eigentlich mal was Gesundes essen.", en: "Sure, but I actually wanted to eat something healthy for once." },
          { speaker: "Maria", de: "Na dann bestell halt einen Salat dazu!", en: "Well then just order a salad with it!" }
        ]
      },
      {
        type: "summary",
        points: [
          "Stack 2-3 Partikeln naturally: 'doch mal', 'ja wohl', 'halt einfach mal'",
          "Order: doch/ja → mal/eben/halt → schon",
          "Native speakers use Partikeln in nearly EVERY sentence",
          "Practice by adding ONE Partikel to sentences you already know"
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which sentence sounds MOST natural in spoken German?",
        options: [
          "Kannst du das Fenster öffnen?",
          "Kannst du mal das Fenster aufmachen?",
          "Öffne das Fenster!",
          "Bitte öffnen Sie das Fenster."
        ],
        correctIndex: 1,
        explanation: "Option 2 uses 'mal' (casual softener) and 'aufmachen' (colloquial for öffnen) — this is how a friend would actually ask in everyday German."
      },
      {
        type: "quiz-mcq",
        question: "What does 'Das ist ja wohl nicht dein Ernst!' express?",
        options: ["Polite agreement", "Shocked disbelief", "Casual question", "Formal request"],
        correctIndex: 1,
        explanation: "'ja wohl nicht' stacked together expresses strong disbelief/outrage — 'You CAN'T be serious!' The 'ja' adds surprise, 'wohl' adds 'surely', 'nicht' negates."
      },
      {
        type: "speaking",
        phrase: "Das habe ich dir doch schon mal gesagt!",
        translation: "I've already told you that! (frustrated reminder)",
        phonetic: "das hah-buh ikh deer dohkh shohn mahl geh-zahkt",
        tip: "Three Partikeln stacked: 'doch' (emphasis), 'schon' (already/before), 'mal' (at some point). This is peak native German."
      }
    ]
  },
};
