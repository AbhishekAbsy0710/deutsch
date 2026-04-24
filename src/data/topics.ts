export type TopicStep = {
  prompt: string;
  hints: string[];
  successResponse: string;
  correction: { fix: string; explanation: string };
  vocab?: { de: string; en: string }[];
};

export type Topic = {
  id: string;
  title: string;
  icon: string;
  category: "situations" | "grammar" | "vocabulary";
  description: string;
  steps: TopicStep[];
  outro: string;
};

export const CATEGORIES = [
  { id: "situations" as const, label: "Real-Life Situations", icon: "🌍" },
  { id: "grammar" as const, label: "Grammar Concepts", icon: "📐" },
  { id: "vocabulary" as const, label: "Vocabulary Themes", icon: "📚" },
];

export const TOPICS: Topic[] = [
  // ===== SITUATIONS =====
  {
    id: "supermarkt", title: "Am Supermarkt", icon: "🛒", category: "situations",
    description: "Buy groceries at a German supermarket.",
    outro: "🏆 You can now survive a German supermarket trip!",
    steps: [
      { prompt: "Willkommen im Supermarkt! 🛒\n\nYou need apples. Ask the shopkeeper!", hints: ["äpfel","apfel","möchte","hätte","brauche"], successResponse: "Sehr gut! 🎉\n\n\"Wie viele?\" (How many?) — Tell them you want three.", correction: { fix: "Ich hätte gerne Äpfel, bitte.", explanation: "'Ich hätte gerne...' is the polite way to request items." }, vocab: [{ de: "Ich hätte gerne...", en: "I would like..." }, { de: "die Äpfel", en: "apples" }] },
      { prompt: "", hints: ["drei","3"], successResponse: "Perfekt! 🍎🍎🍎 \"Kommt sofort!\"\n\nNow ask how much it costs.", correction: { fix: "Drei Äpfel, bitte.", explanation: "drei=3. Just say the number + item!" }, vocab: [{ de: "drei", en: "three" }] },
      { prompt: "", hints: ["kosten","kostet","preis","wie viel","wieviel"], successResponse: "\"Das macht €2.50.\" 💰\n\nSay you'd like to pay.", correction: { fix: "Was kostet das?", explanation: "'Was kostet das?' = 'What does it cost?'" }, vocab: [{ de: "Was kostet das?", en: "What does it cost?" }] },
      { prompt: "", hints: ["zahlen","bezahlen","karte","bar","euro"], successResponse: "\"Danke, schönen Tag noch!\" 😊\n\nSay goodbye!", correction: { fix: "Ich möchte bitte zahlen.", explanation: "'zahlen' = to pay." }, vocab: [{ de: "zahlen", en: "to pay" }] },
      { prompt: "", hints: ["tschüss","wiedersehen","tag","danke","bye"], successResponse: "Wunderbar! You completed the supermarket! 🎊", correction: { fix: "Tschüss! / Auf Wiedersehen!", explanation: "'Tschüss' = casual bye. 'Auf Wiedersehen' = formal." }, vocab: [{ de: "Tschüss", en: "Bye" }] },
    ]
  },
  {
    id: "cafe", title: "Im Café", icon: "☕", category: "situations",
    description: "Order coffee and cake at a German café.",
    outro: "🏆 You can now order at a German café!",
    steps: [
      { prompt: "Willkommen im Café! ☕\n\n\"Was darf es sein?\" — Order a coffee!", hints: ["kaffee","möchte","hätte","bitte","trinken"], successResponse: "\"Einen Kaffee, gerne!\" ☕\n\n\"Mit Milch und Zucker?\" — How do you respond?", correction: { fix: "Einen Kaffee, bitte.", explanation: "Masculine nouns use 'einen' as accusative object." }, vocab: [{ de: "der Kaffee", en: "coffee" }, { de: "Was darf es sein?", en: "What would you like?" }] },
      { prompt: "", hints: ["milch","zucker","schwarz","ohne","mit","ja","nein"], successResponse: "\"Kommt sofort!\" ☕\n\nYou see cakes. Order a piece!", correction: { fix: "Mit Milch, ohne Zucker, bitte.", explanation: "'mit'=with, 'ohne'=without." }, vocab: [{ de: "mit / ohne", en: "with / without" }] },
      { prompt: "", hints: ["kuchen","torte","stück","schokolade"], successResponse: "\"Ein Stück Kuchen!\" 🍰\n\nAsk for the bill!", correction: { fix: "Ein Stück Kuchen, bitte.", explanation: "'Ein Stück' = a piece." }, vocab: [{ de: "der Kuchen", en: "cake" }, { de: "ein Stück", en: "a piece" }] },
      { prompt: "", hints: ["rechnung","zahlen","bezahlen"], successResponse: "\"€4.80.\" 💶 Say thanks and goodbye!", correction: { fix: "Die Rechnung, bitte.", explanation: "'Die Rechnung' = the bill." }, vocab: [{ de: "die Rechnung", en: "the bill" }] },
      { prompt: "", hints: ["danke","tschüss","wiedersehen","stimmt"], successResponse: "Wunderbar! Café scenario complete! ☕🍰", correction: { fix: "Danke schön! Tschüss!", explanation: "'Stimmt so' = keep the change." }, vocab: [{ de: "Stimmt so", en: "Keep the change" }] },
    ]
  },
  {
    id: "bahnhof", title: "Am Bahnhof", icon: "🚂", category: "situations",
    description: "Buy a train ticket and find your platform.",
    outro: "🏆 You can now navigate a German train station!",
    steps: [
      { prompt: "Am Bahnhof! 🚂\n\nYou need a ticket to Berlin. Ask for one!", hints: ["fahrkarte","ticket","berlin","nach"], successResponse: "✅ \"Einfach oder hin und zurück?\" (One-way or round trip?)", correction: { fix: "Eine Fahrkarte nach Berlin, bitte.", explanation: "'Fahrkarte' = ticket. 'nach' = to (cities)." }, vocab: [{ de: "die Fahrkarte", en: "ticket" }, { de: "nach", en: "to" }] },
      { prompt: "", hints: ["zurück","hin und zurück","einfach"], successResponse: "\"€45.\" 💶\n\nAsk which platform!", correction: { fix: "Hin und zurück, bitte.", explanation: "'Hin und zurück' = round trip." }, vocab: [{ de: "hin und zurück", en: "round trip" }] },
      { prompt: "", hints: ["gleis","bahnsteig","welch","wo","fährt"], successResponse: "\"Gleis 7, 14:30.\" 🕝\n\nAsk someone if this is the right train!", correction: { fix: "Von welchem Gleis fährt der Zug?", explanation: "'Gleis' = platform. 'Zug' = train." }, vocab: [{ de: "das Gleis", en: "platform" }, { de: "der Zug", en: "train" }] },
      { prompt: "", hints: ["richtig","zug","ist das","entschuldigung","stimmt"], successResponse: "\"Ja, der Zug nach Berlin!\" 🚂✅ Enjoy your trip!", correction: { fix: "Entschuldigung, ist das der Zug nach Berlin?", explanation: "'Entschuldigung' = excuse me — essential for strangers!" }, vocab: [{ de: "Entschuldigung", en: "Excuse me" }] },
    ]
  },
  // ===== GRAMMAR =====
  {
    id: "articles", title: "Der, Die, Das", icon: "📐", category: "grammar",
    description: "Master German articles and noun genders.",
    outro: "🏆 You're getting the hang of German articles!",
    steps: [
      { prompt: "German has 3 genders: der (masculine), die (feminine), das (neuter).\n\n🧔 der Mann = the man\n👩 die Frau = the woman\n🏠 das Haus = the house\n\nWhat article goes with 'Hund' (dog)? (Hint: animals are often masculine)", hints: ["der","der hund"], successResponse: "Richtig! 🐕 DER Hund!\n\nNow: What about 'Katze' (cat)? (Hint: words ending in -e are usually feminine)", correction: { fix: "der Hund", explanation: "Most male animals use 'der'. Always learn the article WITH the noun!" }, vocab: [{ de: "der Hund", en: "the dog" }, { de: "der Mann", en: "the man" }] },
      { prompt: "", hints: ["die","die katze"], successResponse: "Perfekt! 🐱 DIE Katze!\n\nWhat about 'Kind' (child)? (Hint: it's neuter)", correction: { fix: "die Katze", explanation: "Words ending in -e are usually feminine (die)." }, vocab: [{ de: "die Katze", en: "the cat" }, { de: "die Frau", en: "the woman" }] },
      { prompt: "", hints: ["das","das kind"], successResponse: "Genau! 👶 DAS Kind!\n\nNow plural: ALL plurals use 'die'. What's 'the dogs'?", correction: { fix: "das Kind", explanation: "Neuter nouns often have no obvious pattern — memorize them!" }, vocab: [{ de: "das Kind", en: "the child" }, { de: "das Haus", en: "the house" }] },
      { prompt: "", hints: ["die","die hunde","hunde"], successResponse: "Perfekt! die Hunde! 🐕🐕\n\nTrick question: 'Mädchen' (girl) — der, die, or das?", correction: { fix: "die Hunde", explanation: "ALL plural nouns use 'die', regardless of singular gender!" }, vocab: [{ de: "die (plural)", en: "the (for all plurals)" }] },
      { prompt: "", hints: ["das","das mädchen"], successResponse: "Ja! DAS Mädchen! Even though it means 'girl', -chen makes it neuter! 🎓", correction: { fix: "das Mädchen", explanation: "Words ending in -chen or -lein are ALWAYS neuter (das), even 'Mädchen' (girl)!" }, vocab: [{ de: "-chen / -lein", en: "diminutive → always das" }] },
    ]
  },
  {
    id: "verb-present", title: "Present Tense Verbs", icon: "🔄", category: "grammar",
    description: "Conjugate regular verbs in present tense.",
    outro: "🏆 You can now conjugate regular German verbs!",
    steps: [
      { prompt: "German verbs change based on who's doing the action.\n\nPattern for 'machen' (to do/make):\nich mache, du machst, er/sie macht\n\nHow do you say 'I play' using 'spielen'?", hints: ["ich spiele","spiele"], successResponse: "Richtig! ich spiele! 🎮\n\nNow: 'you play' (informal)?", correction: { fix: "ich spiele", explanation: "For 'ich', remove -en and add -e: spielen → spiele" }, vocab: [{ de: "ich spiele", en: "I play" }, { de: "spielen", en: "to play" }] },
      { prompt: "", hints: ["du spielst","spielst"], successResponse: "Perfekt! du spielst! 🎯\n\nNow: 'he plays'?", correction: { fix: "du spielst", explanation: "For 'du', remove -en and add -st: spielen → spielst" }, vocab: [{ de: "du spielst", en: "you play" }] },
      { prompt: "", hints: ["er spielt","sie spielt","spielt"], successResponse: "Genau! er/sie spielt! ✅\n\nNow try 'wir' (we): 'we play'?", correction: { fix: "er spielt / sie spielt", explanation: "For 'er/sie/es', remove -en and add -t" }, vocab: [{ de: "er/sie spielt", en: "he/she plays" }] },
      { prompt: "", hints: ["wir spielen","spielen"], successResponse: "'wir spielen' = same as infinitive! 🎓\n\nFull conjugation mastered! Now try: 'I learn' (lernen)?", correction: { fix: "wir spielen", explanation: "'wir' and 'sie' (they) always match the infinitive form!" }, vocab: [{ de: "wir spielen", en: "we play" }] },
      { prompt: "", hints: ["ich lerne","lerne"], successResponse: "Perfekt! ich lerne! You're learning how to say you're learning! 🤯🎉", correction: { fix: "ich lerne", explanation: "Same pattern: lernen → ich lerne, du lernst, er lernt" }, vocab: [{ de: "ich lerne", en: "I learn" }, { de: "lernen", en: "to learn" }] },
    ]
  },
  {
    id: "cases", title: "Accusative Case", icon: "🎯", category: "grammar",
    description: "Learn when and how articles change.",
    outro: "🏆 You understand the accusative case basics!",
    steps: [
      { prompt: "In German, 'der' changes to 'den' when it's the OBJECT of a sentence.\n\nSubject: Der Hund ist groß. (The dog is big)\nObject: Ich sehe deN Hund. (I see the dog)\n\nOnly masculine changes! Fill in: Ich kaufe ___ Apfel. (I buy the apple)", hints: ["den","den apfel"], successResponse: "Richtig! 'den Apfel'! 🍎\n\nFeminine stays the same: Ich sehe ___ Katze.", correction: { fix: "den Apfel", explanation: "der → den in accusative. Only masculine articles change!" }, vocab: [{ de: "der → den", en: "masculine accusative change" }] },
      { prompt: "", hints: ["die","die katze"], successResponse: "Genau! 'die' doesn't change! 🐱\n\nNeuter also stays: Ich kaufe ___ Buch. (the book)", correction: { fix: "die Katze", explanation: "Feminine (die) stays 'die' in accusative — no change!" }, vocab: [{ de: "die → die", en: "feminine doesn't change" }] },
      { prompt: "", hints: ["das","das buch"], successResponse: "Perfekt! 'das' stays 'das'! 📖\n\nNow with 'ein': Ich habe ein___ Hund. (I have a dog)", correction: { fix: "das Buch", explanation: "Neuter (das) stays 'das' in accusative — no change!" }, vocab: [{ de: "das → das", en: "neuter doesn't change" }] },
      { prompt: "", hints: ["einen","einen hund"], successResponse: "Ja! 'einen Hund'! ein → einen for masculine objects! 🎓", correction: { fix: "einen Hund", explanation: "ein → einen in accusative (masculine only). eine/ein stay the same." }, vocab: [{ de: "ein → einen", en: "a (masc. accusative)" }] },
    ]
  },
  // ===== VOCABULARY =====
  {
    id: "food", title: "Essen & Trinken", icon: "🍕", category: "vocabulary",
    description: "Essential food and drink vocabulary.",
    outro: "🏆 You know essential food vocabulary!",
    steps: [
      { prompt: "Let's learn food! 🍕\n\ndas Brot = bread 🍞\ndie Butter = butter 🧈\nder Käse = cheese 🧀\n\nHow do you say 'I would like bread and cheese'?", hints: ["brot","käse","möchte","hätte"], successResponse: "Lecker! (Delicious!) 🧀🍞\n\nNow drinks: das Wasser = water, der Saft = juice.\n\nAsk for a glass of water!", correction: { fix: "Ich hätte gerne Brot und Käse.", explanation: "und = and. Food items keep their article in conversation." }, vocab: [{ de: "das Brot", en: "bread" }, { de: "der Käse", en: "cheese" }, { de: "die Butter", en: "butter" }] },
      { prompt: "", hints: ["wasser","glas","trinken"], successResponse: "\"Ein Glas Wasser, bitte!\" 💧\n\nNew words: das Fleisch = meat, der Fisch = fish, das Gemüse = vegetables\n\nSay 'I eat fish'.", correction: { fix: "Ein Glas Wasser, bitte.", explanation: "'Ein Glas' = a glass. Useful for ordering drinks!" }, vocab: [{ de: "das Wasser", en: "water" }, { de: "der Saft", en: "juice" }, { de: "ein Glas", en: "a glass" }] },
      { prompt: "", hints: ["fisch","esse","essen"], successResponse: "\"Ich esse Fisch\" 🐟\n\nDessert time! das Eis = ice cream, der Kuchen = cake.\n\nSay 'I would like ice cream'!", correction: { fix: "Ich esse Fisch.", explanation: "essen = to eat. ich esse, du isst, er isst." }, vocab: [{ de: "das Fleisch", en: "meat" }, { de: "der Fisch", en: "fish" }, { de: "das Gemüse", en: "vegetables" }] },
      { prompt: "", hints: ["eis","möchte","hätte"], successResponse: "\"Ein Eis, bitte!\" 🍦 Guten Appetit! You know your food vocab! 🎉", correction: { fix: "Ich hätte gerne ein Eis.", explanation: "das Eis = ice cream. Also means 'ice'!" }, vocab: [{ de: "das Eis", en: "ice cream" }, { de: "der Kuchen", en: "cake" }] },
    ]
  },
  {
    id: "colors", title: "Farben", icon: "🎨", category: "vocabulary",
    description: "Learn colors and use them to describe things.",
    outro: "🏆 You can describe things by color in German!",
    steps: [
      { prompt: "Die Farben! 🎨\n\nrot = red 🔴, blau = blue 🔵, grün = green 🟢\ngelb = yellow 🟡, schwarz = black ⚫, weiß = white ⚪\n\nWhat color is the sky? 'Der Himmel ist ___'", hints: ["blau"], successResponse: "Richtig! Der Himmel ist blau! 🔵\n\nWhat color is grass? 'Das Gras ist ___'", correction: { fix: "blau", explanation: "blau = blue. Colors come AFTER 'ist' when describing." }, vocab: [{ de: "rot / blau / grün", en: "red / blue / green" }, { de: "gelb / schwarz / weiß", en: "yellow / black / white" }] },
      { prompt: "", hints: ["grün"], successResponse: "Genau! Das Gras ist grün! 🟢\n\nNow describe: 'a red car' = 'ein rot___ Auto'", correction: { fix: "grün", explanation: "grün = green." }, vocab: [{ de: "der Himmel", en: "the sky" }, { de: "das Gras", en: "the grass" }] },
      { prompt: "", hints: ["rotes","rot"], successResponse: "Ein rotes Auto! 🚗 (neuter = -es ending)\n\nWhat's your favorite color? 'Meine Lieblingsfarbe ist ___'", correction: { fix: "ein rotes Auto", explanation: "Before neuter nouns: rot → rotes. Adjective endings change by gender!" }, vocab: [{ de: "ein rotes Auto", en: "a red car" }, { de: "die Lieblingsfarbe", en: "favorite color" }] },
      { prompt: "", hints: ["blau","rot","grün","gelb","schwarz","weiß","lila","orange","rosa"], successResponse: "Schön! 🎨 You can now talk about colors! Farben-Meister! 🏅", correction: { fix: "Meine Lieblingsfarbe ist blau.", explanation: "Just say any color — this is your personal answer!" }, vocab: [{ de: "Meine Lieblingsfarbe ist...", en: "My favorite color is..." }] },
    ]
  },
  {
    id: "family", title: "Die Familie", icon: "👨‍👩‍👧‍👦", category: "vocabulary",
    description: "Family members and relationships.",
    outro: "🏆 You can talk about your family in German!",
    steps: [
      { prompt: "Die Familie! 👨‍👩‍👧‍👦\n\ndie Mutter = mother, der Vater = father\nder Bruder = brother, die Schwester = sister\n\nSay 'I have a brother'.", hints: ["bruder","habe","ich habe"], successResponse: "Super! 'Ich habe einen Bruder!' 👦\n\nNew: die Großmutter = grandmother, der Großvater = grandfather\n\nSay 'My grandmother is nice' (nett).", correction: { fix: "Ich habe einen Bruder.", explanation: "'haben' = to have. 'einen' because Bruder is masculine accusative." }, vocab: [{ de: "die Mutter / der Vater", en: "mother / father" }, { de: "der Bruder / die Schwester", en: "brother / sister" }] },
      { prompt: "", hints: ["großmutter","nett","meine"], successResponse: "\"Meine Großmutter ist nett!\" 👵❤️\n\ndie Tante = aunt, der Onkel = uncle\n\nAsk 'Do you have siblings?' (Geschwister)", correction: { fix: "Meine Großmutter ist nett.", explanation: "'meine' = my (for feminine). 'mein' for masculine/neuter." }, vocab: [{ de: "die Großmutter", en: "grandmother" }, { de: "der Großvater", en: "grandfather" }] },
      { prompt: "", hints: ["geschwister","hast du","haben sie"], successResponse: "\"Hast du Geschwister?\" — Great question! 👫\n\nSay 'I have two sisters and one brother'.", correction: { fix: "Hast du Geschwister?", explanation: "'Geschwister' = siblings (plural, no singular form!)." }, vocab: [{ de: "die Geschwister", en: "siblings" }, { de: "die Tante / der Onkel", en: "aunt / uncle" }] },
      { prompt: "", hints: ["schwester","bruder","zwei","ein"], successResponse: "Perfekt! 👨‍👩‍👧‍👦 You can now talk about your whole family! 🎉", correction: { fix: "Ich habe zwei Schwestern und einen Bruder.", explanation: "zwei Schwestern (plural feminine). einen Bruder (accusative masculine)." }, vocab: [{ de: "zwei Schwestern", en: "two sisters" }, { de: "einen Bruder", en: "a brother (acc.)" }] },
    ]
  },
];
