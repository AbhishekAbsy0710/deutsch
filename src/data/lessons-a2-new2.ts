import { Lesson } from "./lessons";

export const lessonsA2New2: Record<string, Lesson> = {
  "la2_09": {
    id: "la2_09",
    title: "Emotions & Feelings (Gefühle)",
    module: "A2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "glücklich", phonetic: "glük-likh", meaning: "happy", example: { de: "Ich bin sehr glücklich.", en: "I am very happy." } },
          { word: "traurig", phonetic: "trow-rikh", meaning: "sad", example: { de: "Warum bist du traurig?", en: "Why are you sad?" } },
          { word: "wütend", phonetic: "vü-tent", meaning: "angry", example: { de: "Er ist wütend auf mich.", en: "He is angry at me." } },
          { word: "müde", phonetic: "mü-de", meaning: "tired", example: { de: "Ich bin so müde.", en: "I am so tired." } },
          { word: "Angst haben", phonetic: "angst hah-ben", meaning: "to be afraid", example: { de: "Ich habe Angst vor Spinnen.", en: "I'm afraid of spiders." } },
          { word: "aufgeregt", phonetic: "owf-ge-raykt", meaning: "excited / nervous", example: { de: "Ich bin total aufgeregt!", en: "I'm totally excited!" } },
          { word: "zufrieden", phonetic: "tsoo-free-den", meaning: "satisfied / content", example: { de: "Ich bin zufrieden mit dem Ergebnis.", en: "I'm satisfied with the result." } },
          { word: "sich ärgern", phonetic: "zikh air-gern", meaning: "to be annoyed", example: { de: "Ich ärgere mich über das Wetter.", en: "I'm annoyed about the weather." } },
          { word: "gelangweilt", phonetic: "ge-lang-vylt", meaning: "bored", example: { de: "Mir ist sehr gelangweilt.", en: "I am very bored." } },
          { word: "nervös", phonetic: "ner-vös", meaning: "nervous", example: { de: "Vor der Prüfung bin ich nervös.", en: "Before the exam I am nervous." } },
          { word: "überrascht", phonetic: "ü-ber-rasht", meaning: "surprised", example: { de: "Ich war total überrascht.", en: "I was totally surprised." } },
          { word: "enttäuscht", phonetic: "ent-toysht", meaning: "disappointed", example: { de: "Sie ist sehr enttäuscht.", en: "She is very disappointed." } },
          { word: "entspannt", phonetic: "ent-shpant", meaning: "relaxed", example: { de: "Im Urlaub bin ich entspannt.", en: "On vacation I am relaxed." } },
          { word: "stolz", phonetic: "shtolts", meaning: "proud", example: { de: "Ich bin stolz auf dich.", en: "I am proud of you." } }
        ]
      },
      {
        type: "grammar",
        title: "Expressing How You Feel",
        explanation: "Use 'sein' + adjective, or specific verbs. Many emotions use reflexive verbs or Dative constructions.",
        examples: [
          { de: "Mir ist langweilig.", en: "I'm bored. (Dative!)" },
          { de: "Mir ist kalt / warm.", en: "I'm cold / warm. (Dative!)" },
          { de: "Ich freue mich!", en: "I'm happy! (reflexive)" },
          { de: "Er hat Angst.", en: "He is afraid. (haben + noun)" }
        ]
      },
      {
        type: "speaking",
        phrase: "Wie fühlst du dich heute?",
        translation: "How do you feel today?",
        phonetic: "vee fülst doo dikh hoy-te",
        tip: "A great conversation starter! Answer with 'Mir geht es gut/schlecht' or 'Ich fühle mich...'."
      },
      {
        type: "quiz-mcq",
        question: "How do you say 'I'm bored' in German?",
        options: ["Ich bin langweilig.", "Mir ist langweilig.", "Ich habe langweilig.", "Ich langweilig bin."],
        correctIndex: 1,
        explanation: "'Mir ist langweilig' (Dative). 'Ich bin langweilig' means 'I AM boring'!"
      }
    ]
  },
  "la2_10": {
    id: "la2_10",
    title: "Sports & Fitness (Sport & Fitness)",
    module: "A2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "der Fußball", phonetic: "foos-bal", meaning: "football/soccer", example: { de: "Ich spiele gern Fußball.", en: "I like playing football." } },
          { word: "schwimmen", phonetic: "shvim-men", meaning: "to swim", example: { de: "Ich schwimme jeden Samstag.", en: "I swim every Saturday." } },
          { word: "laufen / joggen", phonetic: "low-fen / jog-gen", meaning: "to run / jog", example: { de: "Ich jogge im Park.", en: "I jog in the park." } },
          { word: "das Fitnessstudio", phonetic: "fit-nes-shtoo-dee-oh", meaning: "the gym", example: { de: "Ich gehe ins Fitnessstudio.", en: "I go to the gym." } },
          { word: "die Mannschaft", phonetic: "man-shaft", meaning: "the team", example: { de: "Unsere Mannschaft hat gewonnen!", en: "Our team won!" } },
          { word: "trainieren", phonetic: "tray-nee-ren", meaning: "to train / work out", example: { de: "Ich trainiere dreimal pro Woche.", en: "I train three times per week." } },
          { word: "das Spiel", phonetic: "shpeel", meaning: "the game / match", example: { de: "Das Spiel beginnt um 20 Uhr.", en: "The game starts at 8 pm." } },
          { word: "das Stadion", phonetic: "shta-dee-on", meaning: "the stadium", example: { de: "Wir gehen am Samstag ins Stadion.", en: "We are going to the stadium on Saturday." } },
          { word: "der Verein", phonetic: "fer-ayn", meaning: "the club / association", example: { de: "Er ist in einem Tennisverein.", en: "He is in a tennis club." } },
          { word: "gewinnen", phonetic: "ge-vin-nen", meaning: "to win", example: { de: "Wer wird das Spiel gewinnen?", en: "Who will win the game?" } },
          { word: "verlieren", phonetic: "fer-lee-ren", meaning: "to lose", example: { de: "Wir haben leider verloren.", en: "We unfortunately lost." } },
          { word: "das Tor", phonetic: "tohr", meaning: "the goal", example: { de: "Er hat ein Tor geschossen!", en: "He scored a goal!" } },
          { word: "der Trainer", phonetic: "tray-ner", meaning: "the coach", example: { de: "Unser Trainer ist sehr streng.", en: "Our coach is very strict." } },
          { word: "das Training", phonetic: "tray-ning", meaning: "the practice / training", example: { de: "Das Training fängt gleich an.", en: "Practice starts soon." } }
        ]
      },
      {
        type: "grammar",
        title: "Talking About Sports",
        explanation: "Use 'spielen' for ball sports and games. Use 'machen/treiben' for sports in general. Use the verb itself for activities like swimming, running.",
        examples: [
          { de: "Ich spiele Tennis / Fußball / Basketball.", en: "I play tennis/football/basketball." },
          { de: "Ich mache Sport / Yoga / Pilates.", en: "I do sports/yoga/pilates." },
          { de: "Ich fahre Rad / Ski.", en: "I cycle / ski. (fahren for vehicle sports)" }
        ]
      },
      {
        type: "listening",
        phrase: "Am Wochenende spiele ich Fußball und danach gehe ich ins Fitnessstudio.",
        translation: "On the weekend I play football and afterwards I go to the gym.",
        speed: "normal"
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ich ",
        sentenceAfter: " dreimal pro Woche im Fitnessstudio.",
        missingWord: "trainiere",
        translation: "I train three times per week at the gym."
      }
    ]
  },
  "la2_11": {
    id: "la2_11",
    title: "At the Restaurant (Im Restaurant)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Restaurant Phrases You Must Know",
        explanation: "In Germany, you usually seat yourself unless there's a 'Bitte warten' sign. To call the waiter, say 'Entschuldigung!' — never snap your fingers!",
        examples: [
          { de: "Einen Tisch für zwei, bitte.", en: "A table for two, please." },
          { de: "Die Speisekarte, bitte.", en: "The menu, please." },
          { de: "Ich hätte gern das Schnitzel.", en: "I would like the schnitzel." },
          { de: "Die Rechnung, bitte.", en: "The check/bill, please." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Speisekarte", phonetic: "shpy-ze-kar-te", meaning: "the menu", example: { de: "Kann ich die Speisekarte haben?", en: "Can I have the menu?" } },
          { word: "bestellen", phonetic: "be-shtel-len", meaning: "to order", example: { de: "Möchten Sie bestellen?", en: "Would you like to order?" } },
          { word: "die Rechnung", phonetic: "rekh-noong", meaning: "the bill/check", example: { de: "Zahlen bitte!", en: "Check please!" } },
          { word: "das Trinkgeld", phonetic: "trink-gelt", meaning: "the tip", example: { de: "Trinkgeld ist in Deutschland üblich.", en: "Tipping is common in Germany." } },
          { word: "die Vorspeise", phonetic: "for-shpy-ze", meaning: "the appetizer/starter", example: { de: "Als Vorspeise nehme ich die Suppe.", en: "As a starter I'll have the soup." } },
          { word: "das Hauptgericht", phonetic: "howpt-ge-rikht", meaning: "the main course", example: { de: "Das Hauptgericht ist Fisch.", en: "The main course is fish." } },
          { word: "die Nachspeise", phonetic: "nakh-shpy-ze", meaning: "the dessert", example: { de: "Gibt es Eis als Nachspeise?", en: "Is there ice cream for dessert?" } },
          { word: "das Getränk", phonetic: "ge-trenk", meaning: "the beverage / drink", example: { de: "Was möchten Sie als Getränk?", en: "What would you like for a drink?" } },
          { word: "der Kellner", phonetic: "kel-ner", meaning: "the waiter", example: { de: "Der Kellner bringt das Essen.", en: "The waiter brings the food." } },
          { word: "reservieren", phonetic: "re-zer-vee-ren", meaning: "to reserve", example: { de: "Ich möchte einen Tisch reservieren.", en: "I want to reserve a table." } },
          { word: "schmecken", phonetic: "shmek-ken", meaning: "to taste good", example: { de: "Hat es Ihnen geschmeckt?", en: "Did it taste good to you?" } },
          { word: "bezahlen", phonetic: "be-tsah-len", meaning: "to pay", example: { de: "Wir möchten bitte bezahlen.", en: "We would like to pay please." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Entschuldigung, ich hätte gern ein Wasser und das Tagesgericht.",
        translation: "Excuse me, I would like a water and the daily special.",
        phonetic: "ent-shool-di-goong, ikh het-te gairn ayn vas-ser oont das tah-ges-ge-rikht",
        tip: "In Germany, tipping 5-10% is normal. Say the total amount you want to pay: 'Stimmt so!' (keep the change)."
      },
      {
        type: "quiz-mcq",
        question: "How do you ask for the bill in a German restaurant?",
        options: ["Die Speisekarte, bitte.", "Die Rechnung, bitte.", "Das Trinkgeld, bitte.", "Der Tisch, bitte."],
        correctIndex: 1,
        explanation: "'Die Rechnung, bitte' or simply 'Zahlen, bitte!' (Pay, please!) to ask for the bill."
      }
    ]
  },
  "la2_12": {
    id: "la2_12",
    title: "At the Doctor (Beim Arzt)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Medical Phrases",
        explanation: "At the doctor, you need to describe symptoms, show your insurance card (Versichertenkarte), and understand basic instructions.",
        examples: [
          { de: "Ich habe Kopfschmerzen / Bauchschmerzen.", en: "I have a headache / stomachache." },
          { de: "Mir ist schwindelig / übel.", en: "I feel dizzy / nauseous." },
          { de: "Ich habe seit drei Tagen Fieber.", en: "I've had a fever for three days." },
          { de: "Haben Sie Ihre Versichertenkarte?", en: "Do you have your insurance card?" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "der Termin", phonetic: "ter-meen", meaning: "the appointment", example: { de: "Ich brauche einen Termin.", en: "I need an appointment." } },
          { word: "das Rezept", phonetic: "re-tsept", meaning: "the prescription", example: { de: "Der Arzt gibt mir ein Rezept.", en: "The doctor gives me a prescription." } },
          { word: "die Tablette", phonetic: "ta-blet-te", meaning: "the pill/tablet", example: { de: "Nehmen Sie dreimal täglich eine Tablette.", en: "Take one pill three times daily." } },
          { word: "das Fieber", phonetic: "fee-ber", meaning: "the fever", example: { de: "Ich habe 38 Grad Fieber.", en: "I have a 38-degree fever." } },
          { word: "die Erkältung", phonetic: "er-kel-toong", meaning: "the cold (illness)", example: { de: "Ich habe eine starke Erkältung.", en: "I have a bad cold." } },
          { word: "die Versichertenkarte", phonetic: "fer-zi-kher-ten-kar-te", meaning: "insurance card", example: { de: "Ihre Versichertenkarte bitte.", en: "Your insurance card, please." } },
          { word: "die Schmerzen", phonetic: "shmer-tsen", meaning: "the pain", example: { de: "Wo haben Sie Schmerzen?", en: "Where do you have pain?" } },
          { word: "der Husten", phonetic: "hoos-ten", meaning: "the cough", example: { de: "Ich habe Husten und Schnupfen.", en: "I have a cough and a runny nose." } },
          { word: "der Schnupfen", phonetic: "shnoop-fen", meaning: "the runny nose", example: { de: "Er hat einen starken Schnupfen.", en: "He has a bad runny nose." } },
          { word: "die Spritze", phonetic: "shprit-se", meaning: "the injection/shot", example: { de: "Sie bekommen eine Spritze.", en: "You're getting a shot." } },
          { word: "untersuchen", phonetic: "oon-ter-zoo-khen", meaning: "to examine", example: { de: "Der Arzt untersucht mich.", en: "The doctor is examining me." } },
          { word: "gute Besserung", phonetic: "goo-te bes-se-roong", meaning: "get well soon", example: { de: "Gute Besserung!", en: "Get well soon!" } }
        ]
      },
      {
        type: "speaking",
        phrase: "Guten Tag, ich hätte gern einen Termin. Ich habe starke Kopfschmerzen.",
        translation: "Good day, I would like an appointment. I have a bad headache.",
        phonetic: "goo-ten tahk, ikh het-te gairn ay-nen ter-meen. ikh hah-be shtar-ke kopf-shmair-tsen",
        tip: "In Germany, always bring your Versichertenkarte to the doctor!"
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ich habe seit gestern ",
        sentenceAfter: ".",
        missingWord: "Fieber",
        translation: "I have had a fever since yesterday."
      }
    ]
  },
  "la2_13": {
    id: "la2_13",
    title: "Public Transportation (Öffentliche Verkehrsmittel)",
    module: "A2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Straßenbahn", phonetic: "shtrah-sen-bahn", meaning: "the tram/streetcar", example: { de: "Die Straßenbahn kommt alle 10 Minuten.", en: "The tram comes every 10 minutes." } },
          { word: "die U-Bahn", phonetic: "oo-bahn", meaning: "the subway/underground", example: { de: "Ich fahre mit der U-Bahn.", en: "I take the subway." } },
          { word: "die Haltestelle", phonetic: "hal-te-shtel-le", meaning: "the stop (bus/tram)", example: { de: "Die nächste Haltestelle ist Marienplatz.", en: "The next stop is Marienplatz." } },
          { word: "der Fahrplan", phonetic: "fahr-plahn", meaning: "the schedule/timetable", example: { de: "Schau mal auf den Fahrplan.", en: "Check the timetable." } },
          { word: "umsteigen", phonetic: "oom-shty-gen", meaning: "to transfer/change", example: { de: "Sie müssen am Hauptbahnhof umsteigen.", en: "You have to transfer at the main station." } },
          { word: "die Einzelfahrkarte", phonetic: "ayn-tsel-fahr-kar-te", meaning: "single ticket", example: { de: "Eine Einzelfahrkarte, bitte.", en: "A single ticket, please." } },
          { word: "die Tageskarte", phonetic: "tah-ges-kar-te", meaning: "day pass", example: { de: "Eine Tageskarte ist günstiger.", en: "A day pass is cheaper." } },
          { word: "der Bus", phonetic: "boos", meaning: "the bus", example: { de: "Ich warte auf den Bus.", en: "I am waiting for the bus." } },
          { word: "die S-Bahn", phonetic: "es-bahn", meaning: "the suburban train", example: { de: "Die S-Bahn ist sehr schnell.", en: "The S-Bahn is very fast." } },
          { word: "der Automat", phonetic: "ow-to-maht", meaning: "the ticket machine", example: { de: "Der Fahrkartenautomat ist kaputt.", en: "The ticket machine is broken." } },
          { word: "entwerten", phonetic: "ent-vair-ten", meaning: "to validate (a ticket)", example: { de: "Vergessen Sie nicht, das Ticket zu entwerten.", en: "Don't forget to validate the ticket." } },
          { word: "der Kontrolleur", phonetic: "kon-tro-lör", meaning: "the ticket inspector", example: { de: "Der Kontrolleur kommt!", en: "The inspector is coming!" } }
        ]
      },
      {
        type: "grammar",
        title: "Navigating Public Transport",
        explanation: "German public transport runs on an honor system. You MUST validate (entwerten) your ticket! Inspectors (Kontrolleure) can fine you €60 if caught without a ticket.",
        examples: [
          { de: "Welche Linie fährt zum Bahnhof?", en: "Which line goes to the station?" },
          { de: "Muss ich umsteigen?", en: "Do I have to transfer?" },
          { de: "Nächster Halt: Alexanderplatz.", en: "Next stop: Alexanderplatz." }
        ]
      },
      {
        type: "listening",
        phrase: "Entschuldigung, welche U-Bahn fährt zum Hauptbahnhof?",
        translation: "Excuse me, which subway goes to the main station?",
        speed: "normal"
      },
      {
        type: "quiz-mcq",
        question: "What does 'umsteigen' mean?",
        options: ["To get off", "To buy a ticket", "To transfer/change lines", "To validate a ticket"],
        correctIndex: 2,
        explanation: "'umsteigen' means to transfer or change between lines/trains."
      }
    ]
  },
  "la2_14": {
    id: "la2_14",
    title: "Emergency Situations (Notfälle)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Emergency Numbers & Key Phrases",
        explanation: "In Germany, the emergency number is 112 (fire & ambulance) and 110 (police). Know these phrases — they could save a life!",
        examples: [
          { de: "Hilfe! Rufen Sie einen Krankenwagen!", en: "Help! Call an ambulance!" },
          { de: "Es gibt einen Unfall!", en: "There is an accident!" },
          { de: "Wo ist das nächste Krankenhaus?", en: "Where is the nearest hospital?" },
          { de: "Ich brauche die Polizei!", en: "I need the police!" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Hilfe!", phonetic: "hil-fe", meaning: "Help!", example: { de: "Hilfe! Hilfe!", en: "Help! Help!" } },
          { word: "der Notfall", phonetic: "noht-fal", meaning: "the emergency", example: { de: "Das ist ein Notfall!", en: "This is an emergency!" } },
          { word: "der Krankenwagen", phonetic: "kran-ken-vah-gen", meaning: "the ambulance", example: { de: "Der Krankenwagen kommt.", en: "The ambulance is coming." } },
          { word: "die Feuerwehr", phonetic: "foy-er-vair", meaning: "the fire department", example: { de: "Die Feuerwehr löscht das Feuer.", en: "The fire dept puts out the fire." } },
          { word: "der Unfall", phonetic: "oon-fal", meaning: "the accident", example: { de: "Es gab einen Unfall.", en: "There was an accident." } },
          { word: "Vorsicht!", phonetic: "for-zikht", meaning: "Caution! / Watch out!", example: { de: "Vorsicht, die Straße ist glatt!", en: "Careful, the road is slippery!" } },
          { word: "die Polizei", phonetic: "po-li-tsy", meaning: "the police", example: { de: "Rufen Sie die Polizei!", en: "Call the police!" } },
          { word: "brennen", phonetic: "bren-nen", meaning: "to burn / be on fire", example: { de: "Das Haus brennt!", en: "The house is on fire!" } },
          { word: "sich verletzen", phonetic: "zikh fer-let-sen", meaning: "to injure oneself", example: { de: "Ich habe mich verletzt.", en: "I injured myself." } },
          { word: "bluten", phonetic: "bloo-ten", meaning: "to bleed", example: { de: "Mein Finger blutet.", en: "My finger is bleeding." } },
          { word: "gefährlich", phonetic: "ge-fair-likh", meaning: "dangerous", example: { de: "Das ist sehr gefährlich.", en: "That is very dangerous." } },
          { word: "der Dieb", phonetic: "deeb", meaning: "the thief", example: { de: "Der Dieb hat meine Tasche gestohlen.", en: "The thief stole my bag." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Bitte rufen Sie sofort den Krankenwagen! Die Nummer ist 112.",
        translation: "Please call the ambulance immediately! The number is 112.",
        phonetic: "bit-te roo-fen zee zo-fort den kran-ken-vah-gen! dee noom-mer ist ayns-ayns-tsvy",
        tip: "112 works everywhere in the EU, not just Germany!"
      },
      {
        type: "quiz-mcq",
        question: "What is the emergency number for fire & ambulance in Germany?",
        options: ["911", "110", "112", "999"],
        correctIndex: 2,
        explanation: "112 is for fire & ambulance. 110 is for police. 112 works across all of Europe!"
      }
    ]
  },
  "la2_15": {
    id: "la2_15",
    title: "Informal Emails & Making Appointments",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Writing Informal Emails/Messages",
        explanation: "Informal emails to friends start with 'Lieber...' (masc) or 'Liebe...' (fem) and end with 'Liebe Grüße' (Love/Best regards).",
        examples: [
          { de: "Lieber Max, / Liebe Anna,", en: "Dear Max, / Dear Anna," },
          { de: "Wie geht es dir? Mir geht es gut.", en: "How are you? I'm doing well." },
          { de: "Liebe Grüße / Viele Grüße / Bis bald!", en: "Best regards / Many regards / See you soon!" }
        ]
      },
      {
        type: "grammar",
        title: "Making & Changing Appointments",
        explanation: "Key phrases for scheduling by phone or email.",
        examples: [
          { de: "Ich möchte einen Termin vereinbaren.", en: "I would like to make an appointment." },
          { de: "Geht es am Montag um 10 Uhr?", en: "Is Monday at 10 o'clock possible?" },
          { de: "Ich muss leider absagen / verschieben.", en: "I unfortunately have to cancel / reschedule." },
          { de: "Können wir den Termin auf Dienstag verschieben?", en: "Can we move the appointment to Tuesday?" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "der Termin", phonetic: "ter-meen", meaning: "the appointment", example: { de: "Wann ist der nächste Termin?", en: "When is the next appointment?" } },
          { word: "vereinbaren", phonetic: "fer-ayn-bah-ren", meaning: "to arrange / schedule", example: { de: "Können wir einen Termin vereinbaren?", en: "Can we arrange an appointment?" } },
          { word: "absagen", phonetic: "ap-zah-gen", meaning: "to cancel", example: { de: "Ich muss leider absagen.", en: "I unfortunately have to cancel." } },
          { word: "verschieben", phonetic: "fer-shee-ben", meaning: "to reschedule / postpone", example: { de: "Wir verschieben den Termin.", en: "We're postponing the appointment." } },
          { word: "bestätigen", phonetic: "be-shtä-ti-gen", meaning: "to confirm", example: { de: "Können Sie den Termin bestätigen?", en: "Can you confirm the appointment?" } },
          { word: "der Betreff", phonetic: "be-tref", meaning: "the subject (of an email)", example: { de: "Was ist der Betreff der E-Mail?", en: "What is the subject of the email?" } },
          { word: "die Anrede", phonetic: "an-ray-de", meaning: "the greeting / salutation", example: { de: "Die formelle Anrede ist 'Sehr geehrte(r)'.", en: "The formal salutation is 'Sehr geehrte(r)'." } },
          { word: "die Grußformel", phonetic: "groos-for-mel", meaning: "the complimentary close", example: { de: "Die Grußformel am Ende ist 'Mit freundlichen Grüßen'.", en: "The complimentary close at the end is 'Mit freundlichen Grüßen'." } },
          { word: "pünktlich", phonetic: "pünkt-likh", meaning: "punctual / on time", example: { de: "Bitte seien Sie pünktlich.", en: "Please be on time." } },
          { word: "sich verspäten", phonetic: "zikh fer-shpay-ten", meaning: "to be late / delayed", example: { de: "Ich verspäte mich um 10 Minuten.", en: "I will be 10 minutes late." } },
          { word: "dringend", phonetic: "dring-ent", meaning: "urgent", example: { de: "Es ist sehr dringend.", en: "It is very urgent." } },
          { word: "passen", phonetic: "pas-sen", meaning: "to suit / fit", example: { de: "Passt es Ihnen am Freitag?", en: "Does Friday suit you?" } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Ich möchte einen Termin ",
        sentenceAfter: ".",
        missingWord: "vereinbaren",
        translation: "I would like to make an appointment."
      }
    ]
  },
  "la2_16": {
    id: "la2_16",
    title: "Simple Past of Modal Verbs (Präteritum)",
    module: "A2",
    blocks: [
      {
        type: "grammar",
        title: "Modal Verbs in the Simple Past",
        explanation: "Germans use the simple past (Präteritum) for modal verbs in speech — NOT the Perfekt. All modals lose their umlaut in the past and add '-te' endings like regular verbs.",
        examples: [
          { de: "können → konnte: Ich konnte nicht kommen.", en: "I couldn't come." },
          { de: "müssen → musste: Er musste arbeiten.", en: "He had to work." },
          { de: "wollen → wollte: Sie wollte schlafen.", en: "She wanted to sleep." },
          { de: "dürfen → durfte: Wir durften nicht rauchen.", en: "We weren't allowed to smoke." },
          { de: "sollen → sollte: Ich sollte mehr lernen.", en: "I should have studied more." }
        ]
      },
      {
        type: "conjugation-drill",
        verb: "können (Präteritum)",
        translation: "could / was able to",
        tense: "Past",
        pronouns: ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"],
        correctForms: ["konnte", "konntest", "konnte", "konnten", "konntet", "konnten"],
        hint: "Drop the umlaut: können → konnte. Endings: -e, -est, -e, -en, -et, -en"
      },
      {
        type: "flashcard",
        cards: [
          { word: "konnte", phonetic: "kon-te", meaning: "could / was able to", example: { de: "Ich konnte ihn nicht verstehen.", en: "I couldn't understand him." } },
          { word: "musste", phonetic: "moos-te", meaning: "had to", example: { de: "Wir mussten früh aufstehen.", en: "We had to get up early." } },
          { word: "wollte", phonetic: "vol-te", meaning: "wanted to", example: { de: "Er wollte nach Hause gehen.", en: "He wanted to go home." } },
          { word: "durfte", phonetic: "door-fte", meaning: "was allowed to", example: { de: "Ich durfte nicht mitspielen.", en: "I wasn't allowed to play along." } },
          { word: "sollte", phonetic: "zol-te", meaning: "was supposed to / should", example: { de: "Du solltest das nicht machen.", en: "You shouldn't do that." } },
          { word: "mochte", phonetic: "mokh-te", meaning: "liked to", example: { de: "Als Kind mochte ich Schokolade.", en: "As a child I liked chocolate." } },
          { word: "wusste", phonetic: "voos-te", meaning: "knew", example: { de: "Ich wusste das nicht.", en: "I didn't know that." } },
          { word: "hatte", phonetic: "hat-te", meaning: "had", example: { de: "Wir hatten viel Spaß.", en: "We had a lot of fun." } },
          { word: "war", phonetic: "var", meaning: "was", example: { de: "Ich war gestern im Kino.", en: "I was at the movies yesterday." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Gestern ",
        sentenceAfter: " ich nicht zur Arbeit gehen.",
        missingWord: "konnte",
        translation: "Yesterday I couldn't go to work."
      }
    ]
  }
};
