import { Lesson } from "./lessons";

// ===== A1 FINAL GAPS =====
export const lessonsA1Final: Record<string, Lesson> = {
  "la1_23": {
    id: "la1_23",
    title: "Reading Signs (Schilder in Deutschland)",
    module: "A1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "der Eingang", phonetic: "ayn-gang", meaning: "entrance", example: { de: "Der Eingang ist dort.", en: "The entrance is there." } },
          { word: "der Ausgang", phonetic: "ows-gang", meaning: "exit", example: { de: "Wo ist der Ausgang?", en: "Where is the exit?" } },
          { word: "der Notausgang", phonetic: "noht-ows-gang", meaning: "emergency exit", example: { de: "Notausgang nicht blockieren!", en: "Don't block the emergency exit!" } },
          { word: "Drücken", phonetic: "drü-ken", meaning: "push (on doors)", example: { de: "Tür: Drücken →", en: "Door: Push →" } },
          { word: "Ziehen", phonetic: "tsee-en", meaning: "pull (on doors)", example: { de: "Tür: ← Ziehen", en: "Door: ← Pull" } },
          { word: "Außer Betrieb", phonetic: "ow-ser be-treep", meaning: "out of order", example: { de: "Aufzug außer Betrieb.", en: "Elevator out of order." } },
          { word: "Besetzt / Frei", phonetic: "be-zetst / fry", meaning: "occupied / free (toilets)", example: { de: "Rot = besetzt, Grün = frei", en: "Red = occupied, Green = free" } },
          { word: "Rauchen verboten", phonetic: "row-khen fer-boh-ten", meaning: "no smoking", example: { de: "Hier ist Rauchen verboten.", en: "Smoking is forbidden here." } },
          { word: "Kasse", phonetic: "kas-se", meaning: "checkout / cashier", example: { de: "Bitte an der Kasse bezahlen.", en: "Please pay at the checkout." } },
          { word: "Vorsicht!", phonetic: "for-zikht", meaning: "caution! / watch out!", example: { de: "Vorsicht, Stufe!", en: "Caution, step!" } }
        ]
      },
      {
        type: "grammar",
        title: "Signs You See EVERY Day",
        explanation: "German signs are everywhere. Knowing these words will save you from embarrassment (pushing a 'pull' door!) and help you navigate any building.",
        examples: [
          { de: "Erdgeschoss (EG) = ground floor (NOT 1st floor!)", en: "1. OG = first floor ABOVE ground" },
          { de: "WC / Toiletten = restrooms", en: "Damen = Women, Herren = Men" },
          { de: "Pfand = deposit (return bottles here)", en: "Pfandautomat = bottle return machine" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "You see a sign on a door that says 'Ziehen'. What do you do?",
        options: ["Push the door", "Pull the door", "The door is locked", "Ring the bell"],
        correctIndex: 1,
        explanation: "Ziehen = Pull, Drücken = Push. This is the #1 sign tourists get wrong!"
      }
    ]
  },
  "la1_24": {
    id: "la1_24",
    title: "The 'halb' Trap & 24-Hour Clock",
    module: "A1",
    blocks: [
      {
        type: "grammar",
        title: "The Biggest Time Trap: 'halb'",
        explanation: "'Halb drei' does NOT mean 3:30! It means 'half TO three' = 2:30! This trips up EVERY English speaker. Germans think of the COMING hour, not the past hour.",
        examples: [
          { de: "halb drei = 2:30 (half to three, NOT half past three!)", en: "⚠️ This is the #1 mistake foreigners make!" },
          { de: "halb acht = 7:30 (half to eight)", en: "Think: halfway TO 8 o'clock" },
          { de: "halb eins = 12:30 (half to one)", en: "Think: halfway TO 1 o'clock" }
        ]
      },
      {
        type: "grammar",
        title: "Viertel vor / Viertel nach",
        explanation: "'Viertel vor' = quarter TO, 'Viertel nach' = quarter PAST. These work like English.",
        examples: [
          { de: "Viertel nach drei = 3:15", en: "Quarter past three ✅ (same as English)" },
          { de: "Viertel vor vier = 3:45", en: "Quarter to four ✅ (same as English)" },
          { de: "fünf vor halb vier = 3:25", en: "Five to half four — getting complex!" }
        ]
      },
      {
        type: "grammar",
        title: "24-Hour Clock (Der Standard!)",
        explanation: "Germans use the 24-hour clock in ALL official contexts: train schedules, appointments, TV, stores. You MUST understand it.",
        examples: [
          { de: "13:00 = ein Uhr / dreizehn Uhr", en: "1:00 PM" },
          { de: "15:30 = halb vier / fünfzehn Uhr dreißig", en: "3:30 PM" },
          { de: "20:00 = acht Uhr abends / zwanzig Uhr", en: "8:00 PM" },
          { de: "0:00 = Mitternacht / null Uhr", en: "midnight" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Your German friend says: 'Treffen wir uns um halb sieben?' What time?",
        options: ["7:30", "6:30", "6:00", "7:00"],
        correctIndex: 1,
        explanation: "'Halb sieben' = half TO seven = 6:30. NOT 7:30! This is the most important time rule in German."
      }
    ]
  }
};

// ===== A2 FINAL GAPS =====
export const lessonsA2Final: Record<string, Lesson> = {
  "la2_46": {
    id: "la2_46",
    title: "denn vs. weil (Two Words for 'because')",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Both Mean 'because' — Different Word Order!",
        explanation: "'Weil' sends the verb to the END (subordinate clause). 'Denn' keeps NORMAL word order (V2). Same meaning, different grammar!",
        examples: [
          { de: "Ich bleibe zu Hause, WEIL ich krank BIN.", en: "weil → verb at the END" },
          { de: "Ich bleibe zu Hause, DENN ich BIN krank.", en: "denn → normal V2 word order" },
          { de: "Sie lernt Deutsch, WEIL sie in Berlin WOHNT.", en: "weil = subordinating conjunction" },
          { de: "Sie lernt Deutsch, DENN sie WOHNT in Berlin.", en: "denn = coordinating conjunction" }
        ]
      },
      {
        type: "grammar",
        title: "When to Use Which?",
        explanation: "'Weil' is more common in speech. 'Denn' sounds slightly more formal/written. In the Goethe exam, you MUST know both and the word order difference.",
        examples: [
          { de: "Spoken: Warum? — Weil ich müde bin.", en: "Weil is the answer to 'warum?' in conversation" },
          { de: "Written: Er kam nicht, denn er war krank.", en: "Denn is more common in writing" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "Which sentence is correct?",
        options: [
          "Ich gehe nicht, weil ich bin müde.",
          "Ich gehe nicht, weil ich müde bin.",
          "Ich gehe nicht, denn ich müde bin.",
          "Ich gehe nicht, weil müde ich bin."
        ],
        correctIndex: 1,
        explanation: "After 'weil', the verb goes to the END: 'weil ich müde BIN'. After 'denn', the verb stays in position 2."
      }
    ]
  },
  "la2_47": {
    id: "la2_47",
    title: "Paired Conjunctions (entweder...oder, weder...noch)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Two-Part Conjunctions",
        explanation: "German has conjunction PAIRS that work together. The most important ones at A2 are 'entweder...oder' and 'nicht nur...sondern auch'.",
        examples: [
          { de: "Entweder du kommst mit, oder du bleibst hier.", en: "Either you come along, or you stay here." },
          { de: "Nicht nur Deutsch, sondern auch Englisch.", en: "Not only German, but also English." },
          { de: "Weder Kaffee noch Tee. (= keins von beiden)", en: "Neither coffee nor tea." },
          { de: "Sowohl mein Bruder als auch meine Schwester.", en: "Both my brother and my sister." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "entweder...oder", phonetic: "ent-vay-der...oh-der", meaning: "either...or", example: { de: "Entweder heute oder morgen.", en: "Either today or tomorrow." } },
          { word: "weder...noch", phonetic: "vay-der...nokh", meaning: "neither...nor", example: { de: "Weder Fleisch noch Fisch.", en: "Neither meat nor fish." } },
          { word: "nicht nur...sondern auch", phonetic: "nikht noor...zon-dern owkh", meaning: "not only...but also", example: { de: "Nicht nur billig, sondern auch gut!", en: "Not only cheap, but also good!" } },
          { word: "sowohl...als auch", phonetic: "zo-vohl...als owkh", meaning: "both...and", example: { de: "Sowohl Kinder als auch Erwachsene.", en: "Both children and adults." } },
          { word: "zwar...aber", phonetic: "tsvar...ah-ber", meaning: "admittedly...but", example: { de: "Es ist zwar teuer, aber gut.", en: "It's admittedly expensive, but good." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Entweder wir gehen ins Kino, ",
        sentenceAfter: " wir bleiben zu Hause.",
        missingWord: "oder",
        translation: "Either we go to the cinema, or we stay home."
      }
    ]
  },
  "la2_48": {
    id: "la2_48",
    title: "Formal Letters & Emails (Briefe & E-Mails)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "German Letter Format",
        explanation: "German formal letters/emails follow STRICT rules. Using the wrong greeting or closing is a serious social mistake, especially with officials, landlords, or employers.",
        examples: [
          { de: "Formal: Sehr geehrte Frau Schmidt, ...", en: "Dear Mrs. Schmidt, (you DON'T know them)" },
          { de: "Formal: Sehr geehrter Herr Müller, ...", en: "Dear Mr. Müller," },
          { de: "Unknown recipient: Sehr geehrte Damen und Herren, ...", en: "Dear Sir or Madam," },
          { de: "Closing: Mit freundlichen Grüßen, [Name]", en: "Yours sincerely, [Name]" }
        ]
      },
      {
        type: "grammar",
        title: "Semi-Formal & Informal",
        explanation: "Use different greetings depending on how well you know the person.",
        examples: [
          { de: "Semi-formal: Liebe Frau Schmidt, / Lieber Herr Müller,", en: "Dear (warm) — when you've met them" },
          { de: "Informal: Hallo Maria! / Hi Thomas!", en: "For friends and close colleagues" },
          { de: "Semi-formal close: Viele Grüße / Beste Grüße", en: "Best regards (warm but professional)" },
          { de: "Informal close: Liebe Grüße / LG", en: "Love/warm regards (friends)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Sehr geehrte/r", phonetic: "zair ge-air-te/er", meaning: "Dear (very formal)", example: { de: "Sehr geehrte Frau Dr. Weber,", en: "For officials, unknown people, first contact" } },
          { word: "Mit freundlichen Grüßen", phonetic: "mit froynt-li-khen grü-sen", meaning: "Yours sincerely", example: { de: "...Mit freundlichen Grüßen, Max Müller", en: "Standard formal closing" } },
          { word: "Liebe/Lieber", phonetic: "lee-be/lee-ber", meaning: "Dear (warm/friendly)", example: { de: "Liebe Anna,", en: "For people you know" } },
          { word: "Viele/Beste Grüße", phonetic: "fee-le/bes-te grü-se", meaning: "Best regards", example: { de: "Beste Grüße, Thomas", en: "Semi-formal closing" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "You're writing to a government office (Amt) you've never contacted. What greeting do you use?",
        options: ["Hallo!", "Liebe Damen und Herren,", "Sehr geehrte Damen und Herren,", "Hi!"],
        correctIndex: 2,
        explanation: "'Sehr geehrte Damen und Herren' is the ONLY acceptable greeting for unknown formal contacts. Using 'Hallo' with a government office is considered rude."
      }
    ]
  },
  "la2_49": {
    id: "la2_49",
    title: "At the Bank & Post Office (Bank & Post)",
    module: "A2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "das Konto", phonetic: "kon-toh", meaning: "bank account", example: { de: "Ich möchte ein Konto eröffnen.", en: "I'd like to open an account." } },
          { word: "die Überweisung", phonetic: "ü-ber-vy-zoong", meaning: "bank transfer", example: { de: "Ich mache eine Überweisung.", en: "I'm making a bank transfer." } },
          { word: "der Geldautomat", phonetic: "gelt-ow-toh-maht", meaning: "ATM", example: { de: "Wo ist der nächste Geldautomat?", en: "Where is the nearest ATM?" } },
          { word: "die EC-Karte", phonetic: "ay-tsay-kar-te", meaning: "debit card (German)", example: { de: "Kann ich mit EC-Karte zahlen?", en: "Can I pay with debit card?" } },
          { word: "das Paket", phonetic: "pa-ket", meaning: "package/parcel", example: { de: "Ich möchte ein Paket nach Indien schicken.", en: "I'd like to send a package to India." } },
          { word: "die Briefmarke", phonetic: "breef-mar-ke", meaning: "stamp", example: { de: "Zwei Briefmarken für Postkarten, bitte.", en: "Two stamps for postcards, please." } },
          { word: "der Briefkasten", phonetic: "breef-kas-ten", meaning: "mailbox (yellow in Germany!)", example: { de: "Der Briefkasten ist gelb.", en: "The mailbox is yellow (in Germany)." } },
          { word: "abheben", phonetic: "ap-hay-ben", meaning: "to withdraw (money)", example: { de: "Ich möchte 100 Euro abheben.", en: "I'd like to withdraw 100 euros." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Guten Tag, ich bin neu hier und möchte gerne ein Girokonto eröffnen. Was brauche ich dafür?",
        translation: "Good day, I'm new here and would like to open a checking account. What do I need for that?",
        phonetic: "goo-ten tahk, ikh bin noy heer oont möch-te gair-ne ayn gee-ro-kon-toh er-öf-nen. vas brow-khe ikh da-für?",
        tip: "You need your passport, Meldebescheinigung (registration certificate), and often proof of income to open a German bank account."
      },
      {
        type: "quiz-mcq",
        question: "You need to send money to someone's bank account. What do you need to do?",
        options: ["Eine Briefmarke kaufen", "Eine Überweisung machen", "Ein Paket schicken", "Geld abheben"],
        correctIndex: 1,
        explanation: "Überweisung = bank transfer. Germany LOVES bank transfers — they're used for rent, bills, and payments much more than in other countries."
      }
    ]
  },
  "la2_50": {
    id: "la2_50",
    title: "Renting an Apartment (Wohnung mieten)",
    module: "A2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Miete", phonetic: "mee-te", meaning: "rent (monthly)", example: { de: "Die Miete kostet 800 Euro.", en: "The rent costs 800 euros." } },
          { word: "die Kaution", phonetic: "kow-tsee-ohn", meaning: "deposit (usually 3× rent)", example: { de: "Die Kaution beträgt drei Monatsmieten.", en: "The deposit is three months' rent." } },
          { word: "der Vermieter", phonetic: "fer-mee-ter", meaning: "landlord", example: { de: "Der Vermieter wohnt nebenan.", en: "The landlord lives next door." } },
          { word: "der Mieter", phonetic: "mee-ter", meaning: "tenant", example: { de: "Ich bin der neue Mieter.", en: "I'm the new tenant." } },
          { word: "der Mietvertrag", phonetic: "meet-fer-trahk", meaning: "lease/rental contract", example: { de: "Unterschreiben Sie den Mietvertrag.", en: "Sign the rental contract." } },
          { word: "die Nebenkosten", phonetic: "nay-ben-kos-ten", meaning: "utility costs (on top of rent)", example: { de: "Miete 700€ + 200€ Nebenkosten.", en: "Rent €700 + €200 utilities." } },
          { word: "die Warmmiete", phonetic: "varm-mee-te", meaning: "warm rent (incl. heating)", example: { de: "Warmmiete: 900 Euro.", en: "Warm rent: €900 (rent + heating)." } },
          { word: "die Kaltmiete", phonetic: "kalt-mee-te", meaning: "cold rent (excl. heating)", example: { de: "Kaltmiete: 700 Euro.", en: "Cold rent: €700 (rent only, no heating)." } }
        ]
      },
      {
        type: "grammar",
        title: "Understanding German Rental Listings",
        explanation: "German apartment listings have specific abbreviations you MUST understand to avoid surprises.",
        examples: [
          { de: "2 Zi., Kü., Bad = 2 Zimmer, Küche, Bad", en: "2 rooms, kitchen, bathroom" },
          { de: "KM = Kaltmiete (without heating)", en: "Cold rent — heating costs extra!" },
          { de: "WM = Warmmiete (with heating)", en: "Warm rent — heating included" },
          { de: "NK = Nebenkosten (utilities)", en: "Additional costs on top of rent" }
        ]
      },
      {
        type: "quiz-mcq",
        question: "An apartment listing says 'KM: 650€, NK: 200€'. How much do you actually pay per month?",
        options: ["€650", "€200", "€850", "€450"],
        correctIndex: 2,
        explanation: "KM (Kaltmiete) + NK (Nebenkosten) = total monthly cost. €650 + €200 = €850 per month."
      }
    ]
  }
};
