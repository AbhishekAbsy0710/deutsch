import { Lesson } from "./lessons";

export const lessonsB1Exam: Record<string, Lesson> = {
  "lb1_58": {
    id: "lb1_58",
    title: "Exam Sprechen: Planning Together (Gemeinsam planen)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "Exam Task: Plan an Event Together",
        explanation: "In Sprechen Part 1, you and a partner must plan something together (a party, trip, visit, gift). You'll see a task card with questions to discuss (When? Where? What to bring? etc.). You MUST interact — make suggestions, react, agree/disagree, and reach a decision.",
        examples: [
          { de: "Vorschlag: 'Ich schlage vor, dass wir am Samstag...'", en: "Suggestion: I suggest we..." },
          { de: "Reaktion: 'Das ist eine gute Idee!' / 'Ja, das finde ich gut!'", en: "Reacting positively" },
          { de: "Gegenvorschlag: 'Ich hätte einen anderen Vorschlag...'", en: "Counter-suggestion" },
          { de: "Einigung: 'OK, dann machen wir das so!'", en: "Agreement: OK, let's do it that way!" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Was meinst du / Was meinen Sie?", phonetic: "vas mynst doo", meaning: "What do you think?", example: { de: "Was meinst du, sollen wir am Samstag oder Sonntag?", en: "What do you think, should we on Saturday or Sunday?" } },
          { word: "Wie wäre es, wenn wir...?", phonetic: "vee vay-re es, ven veer", meaning: "How would it be if we...?", example: { de: "Wie wäre es, wenn wir Pizza bestellen?", en: "How about we order pizza?" } },
          { word: "Das klingt gut, aber...", phonetic: "das klingt goot, ah-ber", meaning: "That sounds good, but...", example: { de: "Das klingt gut, aber ich kann am Samstag nicht.", en: "That sounds good, but I can't on Saturday." } },
          { word: "Wer kümmert sich um...?", phonetic: "vair küm-mert zikh oom", meaning: "Who takes care of...?", example: { de: "Wer kümmert sich um die Getränke?", en: "Who takes care of the drinks?" } },
          { word: "Sollen wir...?", phonetic: "zol-len veer", meaning: "Should we...?", example: { de: "Sollen wir ein Geschenk kaufen?", en: "Should we buy a gift?" } },
          { word: "Abgemacht! / Einverstanden!", phonetic: "ap-ge-makht", meaning: "Deal! / Agreed!", example: { de: "OK, abgemacht! Dann sehen wir uns am Samstag.", en: "OK, deal! Then we'll see each other Saturday." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Ich schlage vor, dass wir am Samstagnachmittag in den Park gehen. Was meinst du? Sollen wir etwas zu essen mitbringen?",
        translation: "I suggest we go to the park on Saturday afternoon. What do you think? Should we bring something to eat?",
        phonetic: "ikh shlah-ge for, das veer am zams-tahk-nakh-mi-tahk in dayn park gay-en...",
        tip: "Always make a suggestion, then ASK your partner's opinion. The exam tests INTERACTION, not monologue."
      }
    ]
  },
  "lb1_59": {
    id: "lb1_59",
    title: "Exam Sprechen: Presentation Structure (Thema präsentieren)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "The 5-Part Presentation Blueprint",
        explanation: "In Sprechen Part 2, you present a topic for ~3–4 minutes. Follow this EXACT structure to always score well.",
        examples: [
          { de: "1. EINLEITUNG: 'Mein Thema ist... Ich möchte darüber sprechen, weil...'", en: "Introduction: My topic is... I'd like to talk about it because..." },
          { de: "2. EIGENE ERFAHRUNG: 'In meinem Heimatland... / Persönlich habe ich die Erfahrung gemacht, dass...'", en: "Personal experience" },
          { de: "3. VORTEILE: 'Ein Vorteil ist... / Dafür spricht...'", en: "Advantages" },
          { de: "4. NACHTEILE: 'Andererseits... / Ein Nachteil ist... / Dagegen spricht...'", en: "Disadvantages" },
          { de: "5. MEINUNG + SCHLUSS: 'Meiner Meinung nach... / Zusammenfassend...'", en: "Opinion + Conclusion" }
        ]
      },
      {
        type: "grammar",
        title: "Example: Topic 'Online Shopping'",
        explanation: "Here's how the 5-part structure looks in practice with a real exam topic.",
        examples: [
          { de: "1. Mein Thema ist 'Online-Shopping'. Es ist ein aktuelles Thema, weil immer mehr Menschen online einkaufen.", en: "Introduction" },
          { de: "2. In meinem Heimatland kaufen viele Leute online ein. Ich persönlich bestelle auch oft bei Amazon.", en: "Personal experience" },
          { de: "3. Ein Vorteil ist, dass man bequem von zu Hause einkaufen kann. Außerdem sind die Preise oft günstiger.", en: "Advantages" },
          { de: "4. Andererseits kann man die Produkte nicht anfassen. Außerdem schadet es den lokalen Geschäften.", en: "Disadvantages" },
          { de: "5. Meiner Meinung nach ist Online-Shopping praktisch, aber man sollte auch lokale Geschäfte unterstützen.", en: "Opinion + Conclusion" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Mein Thema ist...", phonetic: "myn tay-ma ist", meaning: "My topic is...", example: { de: "Mein Thema ist 'Soziale Medien'.", en: "My topic is 'Social Media'." } },
          { word: "In meinem Heimatland...", phonetic: "in my-nem hy-maht-lant", meaning: "In my home country...", example: { de: "In meinem Heimatland ist das anders.", en: "In my home country it's different." } },
          { word: "Aus meiner Erfahrung...", phonetic: "ows my-ner er-fah-roong", meaning: "From my experience...", example: { de: "Aus meiner Erfahrung kann ich sagen, dass...", en: "From my experience I can say that..." } },
          { word: "Abschließend möchte ich sagen...", phonetic: "ap-shlee-sent", meaning: "In closing, I'd like to say...", example: { de: "Abschließend möchte ich sagen, dass...", en: "In closing, I'd like to say that..." } }
        ]
      }
    ]
  },
  "lb1_60": {
    id: "lb1_60",
    title: "Exam Schreiben: Structured Email/Essay",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "B1 Schreiben: The Structured Email",
        explanation: "The B1 writing exam requires you to write a semi-formal or formal email (~80 words). You'll get a situation + 3 bullet points you MUST address. Structure: greeting → intro → point 1 → point 2 → point 3 → closing.",
        examples: [
          { de: "Formal: 'Sehr geehrte Damen und Herren, / Sehr geehrte Frau...'", en: "Formal greeting" },
          { de: "Semi-formal: 'Liebe Frau Müller, / Lieber Herr Schmidt,'", en: "Semi-formal greeting" },
          { de: "Closing formal: 'Mit freundlichen Grüßen'", en: "Formal sign-off" },
          { de: "Closing semi-formal: 'Viele Grüße / Herzliche Grüße'", en: "Semi-formal sign-off" }
        ]
      },
      {
        type: "grammar",
        title: "Email Structure Template",
        explanation: "Follow this template for EVERY B1 Schreiben task. It guarantees you address all points and sound structured.",
        examples: [
          { de: "Betreff: [Topic]\nSehr geehrte/r...,\nich schreibe Ihnen, weil...\n[Punkt 1]\n[Punkt 2]\n[Punkt 3]\nIch würde mich freuen, von Ihnen zu hören.\nMit freundlichen Grüßen\n[Ihr Name]", en: "Subject → Greeting → Reason → 3 Points → Closing → Sign-off" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "Ich schreibe Ihnen, weil...", phonetic: "ikh shry-be ee-nen, vyl", meaning: "I'm writing to you because...", example: { de: "Ich schreibe Ihnen, weil ich mich für den Kurs anmelden möchte.", en: "I'm writing because I'd like to register for the course." } },
          { word: "Ich möchte Sie bitten,...", phonetic: "ikh möch-te zee bit-ten", meaning: "I would like to ask you to...", example: { de: "Ich möchte Sie bitten, mir die Unterlagen zu schicken.", en: "I'd like to ask you to send me the documents." } },
          { word: "Könnten Sie mir bitte mitteilen,...", phonetic: "kön-ten zee meer bit-te mit-ty-len", meaning: "Could you please let me know...", example: { de: "Könnten Sie mir bitte mitteilen, wann der Kurs beginnt?", en: "Could you please let me know when the course starts?" } },
          { word: "Ich würde mich freuen,...", phonetic: "ikh vür-de mikh froy-en", meaning: "I would be happy to...", example: { de: "Ich würde mich über eine Antwort freuen.", en: "I would appreciate a response." } },
          { word: "Mit freundlichen Grüßen", phonetic: "mit froynt-li-khen grü-sen", meaning: "Kind regards (formal)", example: { de: "Mit freundlichen Grüßen, Max Mustermann", en: "Kind regards, Max Mustermann" } }
        ]
      }
    ]
  },
  "lb1_61": {
    id: "lb1_61",
    title: "Reading Newspaper Articles (Zeitungsartikel lesen)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Überschrift", phonetic: "ü-ber-shrift", meaning: "headline", example: { de: "Lies zuerst die Überschrift!", en: "Read the headline first!" } },
          { word: "die Zusammenfassung", phonetic: "tsoo-za-men-fas-oong", meaning: "summary", example: { de: "Schreibe eine kurze Zusammenfassung.", en: "Write a short summary." } },
          { word: "der Artikel", phonetic: "ar-ti-kel", meaning: "article", example: { de: "Laut einem Artikel in der ZEIT...", en: "According to an article in die ZEIT..." } },
          { word: "der Bericht", phonetic: "be-rikht", meaning: "report", example: { de: "Der Bericht informiert über...", en: "The report informs about..." } },
          { word: "laut (+ Dat)", phonetic: "lowt", meaning: "according to", example: { de: "Laut einer Studie...", en: "According to a study..." } },
          { word: "berichten über (+ Acc)", phonetic: "be-rikh-ten", meaning: "to report on", example: { de: "Die Zeitung berichtet über den Skandal.", en: "The newspaper reports on the scandal." } },
          { word: "die Umfrage", phonetic: "oom-frah-ge", meaning: "survey / poll", example: { de: "Laut einer Umfrage finden 70% der Deutschen...", en: "According to a survey, 70% of Germans find..." } }
        ]
      },
      {
        type: "grammar",
        title: "Reading Strategy: SQ3R for German",
        explanation: "For the B1 Lesen exam, use this strategy: 1) Read the questions FIRST, 2) Skim the text for key words, 3) Read relevant sections carefully, 4) Eliminate wrong answers.",
        examples: [
          { de: "Tip 1: Lies die Fragen ZUERST, dann den Text.", en: "Read questions first, then the text." },
          { de: "Tip 2: Suche Schlüsselwörter (keywords) im Text.", en: "Search for keywords in the text." },
          { de: "Tip 3: Achte auf Negationen (nicht, kein, nie).", en: "Watch for negations — they flip meaning!" }
        ]
      }
    ]
  },
  "lb1_62": {
    id: "lb1_62",
    title: "Understanding Radio & TV News (Nachrichten verstehen)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Nachrichten", phonetic: "nakh-rikh-ten", meaning: "the news", example: { de: "Hast du die Nachrichten gehört?", en: "Did you hear the news?" } },
          { word: "die Sendung", phonetic: "zen-doong", meaning: "broadcast / show", example: { de: "Die Sendung beginnt um 20 Uhr.", en: "The show starts at 8 PM." } },
          { word: "der Moderator / die Moderatorin", phonetic: "mo-de-rah-tor", meaning: "presenter / host", example: { de: "Der Moderator stellt Fragen.", en: "The host asks questions." } },
          { word: "das Interview", phonetic: "in-ter-vyoo", meaning: "interview", example: { de: "Im Interview sagte der Minister...", en: "In the interview, the minister said..." } },
          { word: "die Durchsage", phonetic: "doorkh-zah-ge", meaning: "announcement (public)", example: { de: "Bitte beachten Sie die Durchsage.", en: "Please pay attention to the announcement." } },
          { word: "live / in Echtzeit", phonetic: "lyf / in ekht-tsyt", meaning: "live / in real time", example: { de: "Die Sendung wird live übertragen.", en: "The show is broadcast live." } }
        ]
      },
      {
        type: "grammar",
        title: "Listening Strategy for B1",
        explanation: "The Hören exam plays recordings TWICE. Strategy: 1st listen for GENERAL meaning, 2nd listen for SPECIFIC answers.",
        examples: [
          { de: "1. Hören: Worum geht es? (What's it about?)", en: "First listen: general topic" },
          { de: "2. Hören: Spezifische Infos (names, numbers, times)", en: "Second listen: specific details" },
          { de: "Tipp: Achte auf Signalwörter wie 'aber', 'allerdings', 'trotzdem'", en: "Listen for contrast words — they signal the KEY information!" }
        ]
      }
    ]
  },
  "lb1_63": {
    id: "lb1_63",
    title: "Telephone & Voicemail (Telefonieren)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "Guten Tag, hier spricht...", phonetic: "heer shprikht", meaning: "Hello, this is...", example: { de: "Guten Tag, hier spricht Max Müller.", en: "Hello, this is Max Müller speaking." } },
          { word: "Könnte ich bitte Herrn/Frau...sprechen?", phonetic: "kön-te ikh bit-te", meaning: "Could I speak to Mr./Mrs...?", example: { de: "Könnte ich bitte Frau Schmidt sprechen?", en: "Could I speak to Mrs. Schmidt?" } },
          { word: "Ich rufe an wegen...", phonetic: "ikh roo-fe an vay-gen", meaning: "I'm calling about...", example: { de: "Ich rufe an wegen meines Termins.", en: "I'm calling about my appointment." } },
          { word: "die Mailbox / der Anrufbeantworter", phonetic: "mayl-boks", meaning: "voicemail", example: { de: "Bitte sprechen Sie nach dem Ton.", en: "Please speak after the tone." } },
          { word: "zurückrufen", phonetic: "tsoo-rük-roo-fen", meaning: "to call back", example: { de: "Können Sie mich bitte zurückrufen?", en: "Can you please call me back?" } },
          { word: "verbinden mit", phonetic: "fer-bin-den mit", meaning: "to connect/transfer to", example: { de: "Ich verbinde Sie mit Frau Meier.", en: "I'll connect you with Mrs. Meier." } },
          { word: "Einen Moment bitte.", phonetic: "ay-nen mo-ment bit-te", meaning: "One moment please.", example: { de: "Einen Moment bitte, ich schaue nach.", en: "One moment please, I'll check." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Guten Tag, hier spricht Abhishek Kumar. Ich rufe an wegen meines Termins am Montag. Leider muss ich den Termin verschieben. Könnten Sie mich bitte zurückrufen? Meine Nummer ist 0176-12345678. Vielen Dank.",
        translation: "Good day, this is Abhishek Kumar. I'm calling about my appointment on Monday. Unfortunately I need to reschedule. Could you please call me back? My number is 0176-12345678. Thank you.",
        phonetic: "goo-ten tahk, heer shprikht ab-hi-shek ku-mar...",
        tip: "Voicemail structure: 1) Name, 2) Reason, 3) Request, 4) Phone number, 5) Thank you."
      }
    ]
  },
  "lb1_64": {
    id: "lb1_64",
    title: "Job & Apartment Ads — Decoding Real Listings",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "VB (Verhandlungsbasis)", phonetic: "fer-hand-loongs-bah-zis", meaning: "negotiable (price)", example: { de: "500€ VB = 500€, aber verhandelbar.", en: "500€ negotiable." } },
          { word: "ab sofort", phonetic: "ap zo-fort", meaning: "available immediately", example: { de: "Wohnung ab sofort frei.", en: "Apartment available immediately." } },
          { word: "die Provision", phonetic: "pro-vi-zee-ohn", meaning: "broker's commission", example: { de: "Provisionsfrei = no broker fee.", en: "No commission." } },
          { word: "die Kaution", phonetic: "kow-tsee-ohn", meaning: "security deposit", example: { de: "Kaution: 3 Monatsmieten.", en: "Deposit: 3 months' rent." } },
          { word: "KM (Kaltmiete)", phonetic: "kalt-mee-te", meaning: "cold rent (without utilities)", example: { de: "KM 600€ + NK 150€ = WM 750€.", en: "Base rent + utilities = warm rent." } },
          { word: "NK (Nebenkosten)", phonetic: "nay-ben-kos-ten", meaning: "utilities / additional costs", example: { de: "NK beinhalten Wasser und Heizung.", en: "Utilities include water and heating." } },
          { word: "WM (Warmmiete)", phonetic: "varm-mee-te", meaning: "warm rent (with utilities)", example: { de: "WM 750€ alles inklusive.", en: "Total rent 750€ all inclusive." } },
          { word: "EBK (Einbauküche)", phonetic: "ayn-bow-kü-khe", meaning: "fitted kitchen", example: { de: "2-Zi-Wohnung mit EBK.", en: "2-room apartment with fitted kitchen." } },
          { word: "Zi (Zimmer)", phonetic: "tsim-mer", meaning: "room(s)", example: { de: "3 Zi, 80 m², 5. OG.", en: "3 rooms, 80 sqm, 5th floor." } },
          { word: "TZ / VZ (Teilzeit / Vollzeit)", phonetic: "tyl-tsyt / fol-tsyt", meaning: "part-time / full-time", example: { de: "Stelle in VZ oder TZ möglich.", en: "Position available full-time or part-time." } }
        ]
      },
      {
        type: "grammar",
        title: "Reading a Real Apartment Ad",
        explanation: "German apartment ads use many abbreviations. Here's a real example decoded.",
        examples: [
          { de: "3-Zi-Whg, 75 m², 2. OG, EBK, Blk, KM 650€ + NK 200€, 3 MM Ktn, provisionsfrei, ab 01.06.", en: "3-room apt, 75sqm, 2nd floor, fitted kitchen, balcony, rent 650€ + 200€ utilities, 3-month deposit, no commission, available June 1st." }
        ]
      }
    ]
  },
  "lb1_65": {
    id: "lb1_65",
    title: "German Office Culture (Bürokultur)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "der Feierabend", phonetic: "fy-er-ah-bent", meaning: "end of workday (sacred concept!)", example: { de: "Um 17 Uhr ist Feierabend.", en: "At 5 PM, work is OVER. (don't contact after!)" } },
          { word: "die Mittagspause", phonetic: "mi-tahks-pow-ze", meaning: "lunch break", example: { de: "Die Mittagspause dauert eine Stunde.", en: "The lunch break lasts one hour." } },
          { word: "der Betriebsrat", phonetic: "be-treeps-raht", meaning: "works council (employee representation)", example: { de: "Der Betriebsrat vertritt die Arbeitnehmer.", en: "The works council represents employees." } },
          { word: "die Elternzeit", phonetic: "el-tern-tsyt", meaning: "parental leave", example: { de: "In Deutschland gibt es bis zu 3 Jahre Elternzeit.", en: "In Germany there's up to 3 years parental leave." } },
          { word: "der Urlaub", phonetic: "oor-lowp", meaning: "vacation / paid leave", example: { de: "Ich habe 30 Tage Urlaub im Jahr.", en: "I have 30 days vacation per year." } },
          { word: "die Gleitzeit", phonetic: "glyt-tsyt", meaning: "flextime", example: { de: "Wir haben Gleitzeit von 7 bis 10 Uhr.", en: "We have flextime from 7 to 10 AM." } },
          { word: "die Probezeit", phonetic: "proh-be-tsyt", meaning: "probation period", example: { de: "Die Probezeit beträgt 6 Monate.", en: "The probation period is 6 months." } },
          { word: "die Kündigung", phonetic: "kün-di-goong", meaning: "termination / notice", example: { de: "Die Kündigungsfrist beträgt 4 Wochen.", en: "The notice period is 4 weeks." } }
        ]
      },
      {
        type: "grammar",
        title: "Cultural Tips for the German Workplace",
        explanation: "Understanding these unwritten rules is essential for anyone working in Germany.",
        examples: [
          { de: "Pünktlichkeit: 5 Minuten zu früh = pünktlich. Pünktlich = zu spät!", en: "Being on time means being 5 minutes early." },
          { de: "Feierabend: Germans separate work and private life strictly.", en: "Don't email after hours!" },
          { de: "Du vs. Sie: Always use 'Sie' until offered 'du' ('Duzen anbieten').", en: "Only the senior person offers the informal 'du'." },
          { de: "Krankmeldung: Call in sick BEFORE work starts, get Attest after 3 days.", en: "Doctor's note required after 3 sick days." }
        ]
      }
    ]
  }
};
