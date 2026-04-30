import { Lesson } from "./lessons";

export const lessonsC1Grammar2: Record<string, Lesson> = {
  "c1-g6": {
    id: "c1-g6",
    title: "Konjunktiv I Mastery in Academic Contexts",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Konjunktiv I in Academic Writing",
        explanation: "While B2 introduces Konjunktiv I for indirect speech in news, C1 demands active use in academic writing to maintain objectivity. When citing sources or summarizing research, Konjunktiv I distances you from the claim, showing you are reporting, not necessarily agreeing.",
        examples: [
          { de: "Müller behauptet, die Daten seien unvollständig.", en: "Müller claims the data is incomplete." },
          { de: "Die Studie zeigt, der Effekt wirke sich langfristig aus.", en: "The study shows the effect has a long-term impact." },
        ]
      },
      {
        type: "grammar",
        title: "The Fallback Rule (Ersatzform)",
        explanation: "If the Konjunktiv I form is identical to the indicative (normal present tense), you MUST switch to Konjunktiv II to avoid confusion. This happens frequently with 'wir' and 'sie' (plural).",
        examples: [
          { de: "Sie sagen, sie haben Zeit. (Indicative/Ambiguous)", en: "They say they have time." },
          { de: "Sie sagen, sie hätten Zeit. (Konjunktiv II as fallback)", en: "They say they have time (reported)." },
          { de: "Die Forscher betonen, sie fänden keine Belege.", en: "The researchers emphasize they found no evidence. (finden -> fänden)" },
        ]
      },
      {
        type: "cultural-note",
        title: "The Language of Journalism",
        content: "If you read the FAZ, SZ, or Zeit, you will see Konjunktiv I in almost every paragraph. It's the hallmark of objective German journalism. Without it, a journalist sounds like they are expressing their personal opinion.",
        emoji: "📰"
      },
      {
        type: "summary",
        points: [
          "Konjunktiv I creates academic/journalistic distance.",
          "Use the stem + -e, -est, -e, -en, -et, -en.",
          "If Konjunktiv I looks exactly like the normal present tense, switch to Konjunktiv II."
        ]
      }
    ]
  },
  "c1-g7": {
    id: "c1-g7",
    title: "Erweiterte Partizipialattribute",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Extended Participle Phrases",
        explanation: "In C1 formal writing, relative clauses are often compressed into massive adjectives placed BEFORE the noun. This is called an 'Erweitertes Partizipialattribut' and is infamous for making German sentences incredibly dense.",
        examples: [
          { de: "Relativsatz: Das Haus, das vor zehn Jahren von meinem Großvater gebaut wurde, ist schön.", en: "The house, which was built 10 years ago by my grandfather, is beautiful." },
          { de: "Partizipialattribut: Das vor zehn Jahren von meinem Großvater gebaute Haus ist schön.", en: "The 10-years-ago-by-my-grandfather-built house is beautiful." },
        ]
      },
      {
        type: "grammar",
        title: "Partizip I vs. Partizip II",
        explanation: "Use Partizip I (Infinitive + 'd') for active, ongoing processes. Use Partizip II (ge- form) for passive or completed processes.",
        examples: [
          { de: "Der schnell fahrende Zug (aktiv/jetzt)", en: "The fast-driving train" },
          { de: "Das kürzlich veröffentlichte Buch (passiv/abgeschlossen)", en: "The recently published book" },
          { de: "Die sich schnell entwickelnde Technologie", en: "The rapidly developing technology" },
        ]
      },
      {
        type: "grammar",
        title: "Decoding the Monster",
        explanation: "To read these structures, look at the article (der/die/das), skip all the inserted information, find the Participle + Noun at the end, and then translate the middle part as a relative clause.",
        examples: [
          { de: "Eine [von vielen Experten scharf kritisierte] Entscheidung", en: "A decision [which was sharply criticized by many experts]" },
        ]
      },
      {
        type: "summary",
        points: [
          "Partizipialattribute compress relative clauses into adjectives.",
          "They are framed between the article and the noun.",
          "Partizip I = active/ongoing. Partizip II = passive/completed."
        ]
      }
    ]
  },
  "c1-g8": {
    id: "c1-g8",
    title: "Nomen-Verb-Verbindungen: Advanced",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "The Core C1 FVG",
        explanation: "Funktionsverbgefüge (FVG) combine a 'hollow' verb with a noun to sound more formal than a simple verb. At C1, you must actively use these in exams and professional environments.",
        examples: [
          { de: "eine Entscheidung treffen (entscheiden)", en: "to make a decision" },
          { de: "einen Antrag stellen (beantragen)", en: "to submit an application" },
          { de: "in Erwägung ziehen (erwägen)", en: "to take into consideration" },
          { de: "zur Verfügung stehen (verfügbar sein)", en: "to be available" },
        ]
      },
      {
        type: "grammar",
        title: "Action vs. State FVG",
        explanation: "Many FVG come in pairs: one describes an action (putting something into a state), the other describes being in that state. They usually pair with verbs like bringen/kommen or setzen/stehen.",
        examples: [
          { de: "Aktion: etwas in Gefahr bringen", en: "to put something in danger" },
          { de: "Zustand: in Gefahr schweben / sein", en: "to be in danger" },
          { de: "Aktion: ein Thema zur Sprache bringen", en: "to bring up a topic" },
          { de: "Zustand: zur Sprache kommen", en: "to be discussed" },
        ]
      },
      {
        type: "summary",
        points: [
          "FVG elevate your register to C1/Business level.",
          "Memorize them as fixed chunks, including the preposition.",
          "Pay attention to the difference between action-FVG and state-FVG."
        ]
      }
    ]
  },
  "c1-g9": {
    id: "c1-g9",
    title: "Subjunctive Fixed Expressions",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Fossilized Konjunktiv I",
        explanation: "German has several fixed phrases that use Konjunktiv I. These are archaic remnants that survive as high-level connectors and idioms.",
        examples: [
          { de: "Es sei denn, dass...", en: "Unless..." },
          { de: "Wie dem auch sei...", en: "Be that as it may / Anyway..." },
          { de: "Gott sei Dank!", en: "Thank God!" },
        ]
      },
      {
        type: "grammar",
        title: "Sei es... sei es...",
        explanation: "This elegant C1 structure translates to 'whether it be... or...'. It is used to present alternative examples that both lead to the same conclusion.",
        examples: [
          { de: "Sei es aus Liebe, sei es aus Angst, er tat es.", en: "Whether out of love or out of fear, he did it." },
          { de: "Jeder muss helfen, sei es durch Geldspenden, sei es durch aktive Mitarbeit.", en: "Everyone must help, be it through financial donations or active participation." },
        ]
      },
      {
        type: "cultural-note",
        title: "Sounding Sophisticated",
        content: "Dropping a 'wie dem auch sei' into a C1 speaking exam instantly signals to the examiner that you have mastered advanced, idiomatic sentence framing.",
        emoji: "🎩"
      },
      {
        type: "summary",
        points: [
          "Es sei denn = Unless.",
          "Wie dem auch sei = Be that as it may.",
          "Sei es [X], sei es [Y] = Whether it be [X] or [Y]."
        ]
      }
    ]
  },
  "c1-g10": {
    id: "c1-g10",
    title: "Advanced Negation",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Beyond 'nicht' and 'kein'",
        explanation: "At C1, standard negation sounds repetitive. Advanced German uses lexical negation (adverbs and prefixes) to express absolute or nuanced negation.",
        examples: [
          { de: "keineswegs", en: "by no means / not at all" },
          { de: "mitnichten", en: "not at all (very formal/literary)" },
          { de: "nicht im Geringsten", en: "not in the slightest" },
          { de: "alles andere als", en: "anything but" },
        ]
      },
      {
        type: "grammar",
        title: "Usage Examples",
        explanation: "These negation particles usually replace 'nicht' directly in the sentence, adding extreme emphasis.",
        examples: [
          { de: "Das ist keineswegs bewiesen.", en: "That is by no means proven." },
          { de: "Er war alles andere als begeistert.", en: "He was anything but thrilled." },
          { de: "Das stört mich nicht im Geringsten.", en: "That doesn't bother me in the slightest." },
        ]
      },
      {
        type: "grammar",
        title: "Double Negation as Affirmation",
        explanation: "German academic writing sometimes uses double negation (Litotes) as a stylistic device to express cautious affirmation.",
        examples: [
          { de: "Es ist nicht unwahrscheinlich, dass...", en: "It is not unlikely that..." },
          { de: "Die Ergebnisse sind nicht unbedeutend.", en: "The results are not insignificant." },
        ]
      },
      {
        type: "summary",
        points: [
          "Replace 'nicht' with 'keineswegs' or 'alles andere als' for emphasis.",
          "'Mitnichten' is very formal.",
          "Double negation ('nicht un-') is used for cautious, academic statements."
        ]
      }
    ]
  },
  "c1-g11": {
    id: "c1-g11",
    title: "Textreferenz (Textual Cohesion)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Erstere and Letztere",
        explanation: "When referring back to two previously mentioned items, German uses 'erstere' (the former) and 'letztere' (the latter). These must be declined like adjectives based on the gender of the noun they refer to.",
        examples: [
          { de: "Wir bieten Tee und Kaffee an. Ersterer ist grün, letzterer ist schwarz.", en: "We offer tea and coffee. The former is green, the latter is black." },
          { de: "Zwischen Auto und Bahn wähle ich letztere.", en: "Between a car and the train, I choose the latter." },
        ]
      },
      {
        type: "grammar",
        title: "Demonstrative Pronouns for Cohesion",
        explanation: "Instead of repeating nouns or using simple pronouns (er/sie/es), formal German relies heavily on 'dieser/diese/dieses' and 'jener/jene/jenes' (that one) to link sentences.",
        examples: [
          { de: "Viele Fehler wurden gemacht. Diese führten zur Krise.", en: "Many mistakes were made. These led to the crisis." },
          { de: "Der Vorschlag der Opposition wurde abgelehnt, jener der Regierung angenommen.", en: "The opposition's proposal was rejected, that of the government accepted." },
        ]
      },
      {
        type: "summary",
        points: [
          "Erstere/r/s = the former. Letztere/r/s = the latter.",
          "Decline them like adjectives based on the noun they replace.",
          "Use jener/jene/jenes to mean 'that of / those of'."
        ]
      }
    ]
  },
  "c1-g12": {
    id: "c1-g12",
    title: "Verbalperiphrasen (Modal Alternatives)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "What are Verbalperiphrasen?",
        explanation: "These are verbs that function similarly to modal verbs. They take 'zu + Infinitive' and express nuance without using standard modals like können or müssen.",
        examples: [
          { de: "scheinen zu + Infinitiv", en: "to seem to / appear to" },
          { de: "drohen zu + Infinitiv", en: "to threaten to / to be in danger of" },
          { de: "pflegen zu + Infinitiv", en: "to be accustomed to / usually do" },
          { de: "verstehen zu + Infinitiv", en: "to know how to" },
        ]
      },
      {
        type: "grammar",
        title: "Nuance in Context",
        explanation: "'Drohen zu' often doesn't mean a literal threat, but rather an imminent negative event. 'Pflegen zu' is a highly formal way of expressing a habit.",
        examples: [
          { de: "Das Projekt droht zu scheitern.", en: "The project is in danger of failing." },
          { de: "Der Direktor pflegt um 8 Uhr zu kommen.", en: "The director is accustomed to arriving at 8 o'clock." },
          { de: "Sie versteht es, Menschen zu überzeugen.", en: "She knows how to convince people." },
        ]
      },
      {
        type: "summary",
        points: [
          "Verbalperiphrasen add elegant nuance to verbs.",
          "They always require 'zu + Infinitive'.",
          "drohen = danger of, pflegen = habit, scheinen = appearance."
        ]
      }
    ]
  },
  "c1-g13": {
    id: "c1-g13",
    title: "Abtönungspartikeln Extended",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Advanced Flavor Particles",
        explanation: "Building on the basic Modalpartikeln (doch, mal, ja), C1 introduces particles that heavily shade the speaker's attitude or emotional state.",
        examples: [
          { de: "bloß / nur", en: "Warning or exasperation (in questions)" },
          { de: "ruhig", en: "Encouragement / giving permission" },
          { de: "schließlich", en: "Justification (after all)" },
        ]
      },
      {
        type: "grammar",
        title: "Contextual Examples",
        explanation: "These particles completely change the tone of a command or question.",
        examples: [
          { de: "Was hast du bloß getan?", en: "What on earth have you done? (Exasperation)" },
          { de: "Komm ruhig herein!", en: "Go ahead and come in! (Encouragement/No pressure)" },
          { de: "Ich helfe dir, du bist schließlich mein Bruder.", en: "I'll help you, you are my brother after all. (Justification)" },
        ]
      },
      {
        type: "summary",
        points: [
          "bloß/nur adds 'on earth' to questions or serves as a warning.",
          "ruhig encourages someone to do something without worry.",
          "schließlich justifies a statement ('after all')."
        ]
      }
    ]
  },
  "c1-g14": {
    id: "c1-g14",
    title: "Advanced Mittelfeld Word Order",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "TeKaMoLo Revisited",
        explanation: "You know TeKaMoLo (Temporal, Kausal, Modal, Lokal). At C1, you must manage complex sentences where prepositional objects, pronouns, and adverbs all crowd the 'Mittelfeld' (the space between the conjugated verb and the end of the sentence).",
        examples: [
          { de: "Der Chef hat [ihm] [gestern] [aus Wut] [die Unterlagen] [auf den Tisch] geworfen.", en: "The boss threw the documents on the table at him yesterday out of anger." },
        ]
      },
      {
        type: "grammar",
        title: "The Pronoun Rule",
        explanation: "Pronouns ALWAYS precede nouns, regardless of cases. If there are two pronouns, Accusative precedes Dative (unlike nouns, where Dative precedes Accusative).",
        examples: [
          { de: "Ich gebe dem Mann den Brief. (Dativ Noun -> Akkusativ Noun)", en: "I give the man the letter." },
          { de: "Ich gebe ihn ihm. (Akkusativ Pronoun -> Dativ Pronoun)", en: "I give it to him." },
          { de: "Ich gebe ihm den Brief. (Pronoun -> Noun)", en: "I give him the letter." },
        ]
      },
      {
        type: "grammar",
        title: "Nicht-Placement C1",
        explanation: "In complex sentences, 'nicht' is placed right before the element it negates. If it negates the whole sentence, it goes to the end, but BEFORE prepositional phrases indicating direction/location.",
        examples: [
          { de: "Er ist gestern nicht nach Berlin gefahren.", en: "He didn't travel to Berlin yesterday." },
          { de: "Nicht er ist gefahren, sondern sie.", en: "He didn't drive, she did." },
        ]
      },
      {
        type: "summary",
        points: [
          "Pronouns beat nouns.",
          "Pronouns: Akkusativ -> Dativ.",
          "Nouns: Dativ -> Akkusativ.",
          "TeKaMoLo applies to the adverbial blocks in between."
        ]
      }
    ]
  },
  "c1-g15": {
    id: "c1-g15",
    title: "Nomen-Verb-Verbindungen Part 2",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "More High-Frequency FVG",
        explanation: "Expanding your FVG repertoire is the fastest way to pass the C1 writing exam. Here is the second batch of essential academic and business FVG.",
        examples: [
          { de: "Einfluss nehmen auf (+ Akk)", en: "to influence (beeinflussen)" },
          { de: "Bezug nehmen auf (+ Akk)", en: "to refer to (sich beziehen auf)" },
          { de: "eine Forderung stellen", en: "to make a demand (fordern)" },
          { de: "Kritik üben an (+ Dat)", en: "to criticize (kritisieren)" },
        ]
      },
      {
        type: "grammar",
        title: "Passiv with FVG",
        explanation: "FVG are frequently used in the passive voice in formal texts. Because the verb is 'hollow', the noun becomes the subject of the passive sentence.",
        examples: [
          { de: "Aktiv: Wir müssen Kritik an dem System üben.", en: "We must criticize the system." },
          { de: "Passiv: Es muss Kritik an dem System geübt werden.", en: "Criticism must be leveled at the system." },
          { de: "Aktiv: Sie trafen eine Entscheidung.", en: "They made a decision." },
          { de: "Passiv: Eine Entscheidung wurde getroffen.", en: "A decision was made." },
        ]
      },
      {
        type: "summary",
        points: [
          "Kritik üben, Einfluss nehmen, Bezug nehmen are vital for C1.",
          "When converting FVG to passive, the noun becomes the subject.",
          "FVG make passive sentences sound even more bureaucratic and formal."
        ]
      }
    ]
  }
};
