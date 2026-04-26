import { Lesson } from "./lessons";

export const lessonsA2New5: Record<string, Lesson> = {
  "la2_28": {
    id: "la2_28",
    title: "False Friends & Tricky Words",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Words That LOOK English But Aren't",
        explanation: "German and English share roots, so many words look similar but mean completely different things. These 'false friends' cause the most embarrassing mistakes!",
        examples: [
          { de: "Gift = POISON (not a present → das Geschenk)", en: "⚠️ Never say 'Ich habe ein Gift für dich!'" },
          { de: "bekommen = to RECEIVE (not become → werden)", en: "⚠️ 'Ich bekomme Kaffee' = I receive coffee" },
          { de: "Chef = BOSS (not a cook → der Koch)", en: "⚠️ 'Mein Chef ist nett' = My boss is nice" },
          { de: "Handy = MOBILE PHONE (not handy → praktisch)", en: "⚠️ 'Wo ist mein Handy?' = Where is my phone?" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "das Gift", phonetic: "gift", meaning: "POISON (not gift!)", example: { de: "Vorsicht, das ist Gift!", en: "Careful, that is poison!" } },
          { word: "bekommen", phonetic: "be-kom-men", meaning: "to RECEIVE (not become!)", example: { de: "Ich bekomme einen Brief.", en: "I receive a letter." } },
          { word: "der Chef", phonetic: "shef", meaning: "the BOSS (not chef!)", example: { de: "Mein Chef ist streng.", en: "My boss is strict." } },
          { word: "das Gymnasium", phonetic: "gym-nah-zee-oom", meaning: "academic HIGH SCHOOL (not gym!)", example: { de: "Ich gehe auf das Gymnasium.", en: "I go to the academic high school." } },
          { word: "die Fabrik", phonetic: "fa-breek", meaning: "FACTORY (not fabric!)", example: { de: "In der Fabrik arbeiten 200 Leute.", en: "200 people work in the factory." } },
          { word: "das Rezept", phonetic: "re-tsept", meaning: "RECIPE or PRESCRIPTION", example: { de: "Hast du ein Rezept für Kuchen?", en: "Do you have a recipe for cake?" } },
          { word: "aktuell", phonetic: "ak-too-el", meaning: "CURRENT (not actual!)", example: { de: "Das ist die aktuelle Situation.", en: "That is the current situation." } },
          { word: "sensibel", phonetic: "zen-zee-bel", meaning: "SENSITIVE (not sensible!)", example: { de: "Er ist sehr sensibel.", en: "He is very sensitive." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Your German friend says 'Ich habe ein Gift für dich.' What did they say?",
        options: ["I have a gift for you!", "I have poison for you!", "I got something for you!", "I want to give you something!"],
        correctIndex: 1,
        explanation: "'Gift' means POISON in German! A present is 'Geschenk'. This is the most dangerous false friend!"
      },
      {
        type: "speaking",
        phrase: "Können Sie mir sagen, wo ich ein Geschenk für meinen Chef kaufen kann?",
        translation: "Can you tell me where I can buy a gift for my boss?",
        phonetic: "kö-nen zee meer zah-gen, vo ikh ayn ge-shenk für my-nen shef kow-fen kan",
        tip: "Geschenk = gift, Chef = boss. Two false friends in one sentence!"
      }
    ]
  },
  "la2_29": {
    id: "la2_29",
    title: "Modal Particles (doch, mal, ja, halt)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "The Secret to Sounding German",
        explanation: "Modal particles are tiny words that add EMOTION and NUANCE. They don't translate directly but they're in EVERY German sentence. Without them, you sound like a robot!",
        examples: [
          { de: "Komm mal her! (casual 'come here')", en: "'mal' softens a command → friendly request" },
          { de: "Das ist ja toll! (wow, that's great!)", en: "'ja' adds surprise/emphasis" },
          { de: "Das stimmt doch nicht! (that's NOT true!)", en: "'doch' adds contradiction/insistence" },
          { de: "Das ist halt so. (that's just how it is)", en: "'halt' = resigned acceptance" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "mal", phonetic: "mahl", meaning: "softener (casual/friendly)", example: { de: "Schau mal! / Sag mal! / Komm mal!", en: "Look! / Tell me! / Come here!" } },
          { word: "doch", phonetic: "dokh", meaning: "contradicts / insists", example: { de: "A: Du kommst nicht. — B: Doch!", en: "A: You're not coming. — B: Yes I AM!" } },
          { word: "ja", phonetic: "yah", meaning: "emphasizes (obviously!)", example: { de: "Du weißt ja, dass...", en: "You know (of course) that..." } },
          { word: "halt", phonetic: "halt", meaning: "just / simply (resigned)", example: { de: "Ich bin halt müde.", en: "I'm just tired (can't help it)." } },
          { word: "eben", phonetic: "ay-ben", meaning: "exactly / just (that's it)", example: { de: "Das ist eben so.", en: "That's just how it is." } },
          { word: "denn", phonetic: "den", meaning: "so/then (curiosity)", example: { de: "Was machst du denn hier?", en: "What are you doing here (then)?" } }
        ]
      },
      {
        type: "grammar",
        title: "The Power of 'doch'",
        explanation: "'Doch' is the word that doesn't exist in English. It means 'yes!' when someone says something negative. It also adds emphasis like 'but/however/actually'.",
        examples: [
          { de: "A: Du sprichst kein Deutsch. — B: Doch!", en: "A: You don't speak German. — B: Yes I do!" },
          { de: "Komm doch mit!", en: "Come along! (encouraging)" },
          { de: "Das war doch gut!", en: "That was good! (wasn't it?)" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Someone says 'Du magst keinen Kaffee.' But you DO like coffee. What do you say?",
        options: ["Ja!", "Nein!", "Doch!", "Stimmt!"],
        correctIndex: 2,
        explanation: "'Doch!' contradicts a negative statement. Ja/Nein can't do this — only 'doch' can!"
      }
    ]
  },
  "la2_30": {
    id: "la2_30",
    title: "Filling Out Forms (Formulare)",
    module: "A2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "der Vorname", phonetic: "for-nah-me", meaning: "first name", example: { de: "Vorname: Maria", en: "First name: Maria" } },
          { word: "der Nachname / Familienname", phonetic: "nakh-nah-me", meaning: "last name / family name", example: { de: "Nachname: García", en: "Last name: García" } },
          { word: "das Geburtsdatum", phonetic: "ge-boorts-dah-toom", meaning: "date of birth", example: { de: "Geburtsdatum: 15.03.1990", en: "Date of birth: 15/03/1990" } },
          { word: "der Geburtsort", phonetic: "ge-boorts-ort", meaning: "place of birth", example: { de: "Geburtsort: Madrid", en: "Place of birth: Madrid" } },
          { word: "die Staatsangehörigkeit", phonetic: "shtahts-an-ge-hö-rikh-kyt", meaning: "nationality / citizenship", example: { de: "Staatsangehörigkeit: spanisch", en: "Nationality: Spanish" } },
          { word: "der Familienstand", phonetic: "fa-mee-lee-en-shtant", meaning: "marital status", example: { de: "Familienstand: ledig / verheiratet", en: "Marital status: single / married" } },
          { word: "die Unterschrift", phonetic: "oon-ter-shrift", meaning: "signature", example: { de: "Bitte hier Ihre Unterschrift.", en: "Your signature here, please." } },
          { word: "die Anschrift / Adresse", phonetic: "an-shrift", meaning: "address", example: { de: "Anschrift: Berliner Str. 15, 10115 Berlin", en: "Address format: Street #, ZIP City" } }
        ]
      },
      {
        type: "grammar",
        title: "German Address Format",
        explanation: "German addresses are written DIFFERENTLY from English: Street + Number, then ZIP + City. The ZIP code (Postleitzahl/PLZ) comes BEFORE the city.",
        examples: [
          { de: "Berliner Straße 15", en: "Street name + house number" },
          { de: "10115 Berlin", en: "PLZ (5 digits) + City" },
          { de: "Deutschland", en: "Country (if international)" }
        ]
      },
      {
        type: "grammar",
        title: "German Date Format",
        explanation: "Germany uses DD.MM.YYYY with periods — NOT slashes and NOT month-first like the US!",
        examples: [
          { de: "15.03.1990 (15. März 1990)", en: "Day.Month.Year" },
          { de: "01.01.2025 (1. Januar 2025)", en: "1st January 2025" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "On a German form, what does 'Familienstand: ledig' mean?",
        options: ["Legal status: pending", "Marital status: single", "Family name: Ledig", "Family status: separated"],
        correctIndex: 1,
        explanation: "'Familienstand' = marital status. 'ledig' = single, 'verheiratet' = married, 'geschieden' = divorced."
      }
    ]
  },
  "la2_31": {
    id: "la2_31",
    title: "Living in Germany (Kultur & Alltag)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Essential Cultural Rules",
        explanation: "Germany has unwritten rules that EVERY resident must know. Breaking these can cause real problems or social friction!",
        examples: [
          { de: "Anmeldung: Register your address within 14 days!", en: "Go to the Bürgeramt — required by law!" },
          { de: "Pfand: Return bottles for deposit money.", en: "€0.25 per bottle at the Pfandautomat" },
          { de: "Ruhezeit: No loud noise 22:00–06:00 and all day Sunday!", en: "No drilling, loud music, or laundry noise" },
          { de: "Barzahlung: Many shops are cash-only!", en: "Always carry cash (Bargeld)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Anmeldung", phonetic: "an-mel-doong", meaning: "address registration", example: { de: "Ich muss meine Anmeldung machen.", en: "I have to register my address." } },
          { word: "das Pfand", phonetic: "pfant", meaning: "bottle deposit", example: { de: "Diese Flasche hat 25 Cent Pfand.", en: "This bottle has a 25-cent deposit." } },
          { word: "die Ruhezeit", phonetic: "roo-e-tsyt", meaning: "quiet hours", example: { de: "Sonntag ist Ruhetag!", en: "Sunday is a rest day!" } },
          { word: "das Bargeld", phonetic: "bar-gelt", meaning: "cash", example: { de: "Nur Barzahlung! Keine Karte.", en: "Cash only! No card." } },
          { word: "die Mülltrennung", phonetic: "mül-tren-noong", meaning: "waste separation/recycling", example: { de: "In Deutschland trennt man den Müll.", en: "In Germany you separate your trash." } },
          { word: "der Feiertag", phonetic: "fy-er-tahk", meaning: "public holiday", example: { de: "Am Feiertag sind die Geschäfte zu.", en: "On public holidays the shops are closed." } },
          { word: "das Bürgeramt", phonetic: "bür-ger-amt", meaning: "citizens' office", example: { de: "Ich habe einen Termin beim Bürgeramt.", en: "I have an appointment at the citizens' office." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Entschuldigung, wo kann ich meine Anmeldung machen? Ich bin neu in der Stadt.",
        translation: "Excuse me, where can I register my address? I'm new in the city.",
        phonetic: "ent-shool-di-goong, vo kan ikh my-ne an-mel-doong ma-khen? ikh bin noy in dair shtat",
        tip: "The Anmeldung is the FIRST thing you must do after moving to a German city. Without it, you can't open a bank account or get a phone contract!"
      },
      {
        type: "quiz-mcq",
        question: "What is 'Pfand'?",
        options: ["A type of bread", "A bottle deposit system", "A parking fine", "A type of insurance"],
        correctIndex: 1,
        explanation: "Pfand is the bottle deposit system. You pay extra when buying drinks and get it back by returning bottles to the Pfandautomat at the supermarket."
      }
    ]
  }
};
