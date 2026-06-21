export interface DailyWord {
  word: string;
  article?: string;
  meaning: string;
  phonetic?: string;
  example: { de: string; en: string };
  level: string;
  category: string;
}

// 60 curated interesting German words — cycles through them
export const DAILY_WORDS: DailyWord[] = [
  { word: "Fernweh", meaning: "longing for far-off places", phonetic: "FERN-vay", example: { de: "Ich habe Fernweh und möchte die Welt sehen.", en: "I have wanderlust and want to see the world." }, level: "B1", category: "Feelings" },
  { word: "Gemütlichkeit", meaning: "coziness, warmth, friendliness", phonetic: "geh-MOOT-lish-kite", example: { de: "Die Gemütlichkeit dieses Cafés ist wunderbar.", en: "The coziness of this café is wonderful." }, level: "B1", category: "Culture" },
  { word: "Schmetterling", article: "der", meaning: "butterfly", phonetic: "SHMET-ter-ling", example: { de: "Ein Schmetterling fliegt durch den Garten.", en: "A butterfly flies through the garden." }, level: "A2", category: "Nature" },
  { word: "Handschuh", article: "der", meaning: "glove (literally: hand-shoe)", phonetic: "HANT-shoo", example: { de: "Vergiss deine Handschuhe nicht, es ist kalt!", en: "Don't forget your gloves, it's cold!" }, level: "A2", category: "Clothing" },
  { word: "Schadenfreude", meaning: "pleasure from someone's misfortune", phonetic: "SHAH-den-froy-deh", example: { de: "Schadenfreude ist keine schöne Eigenschaft.", en: "Schadenfreude is not a nice trait." }, level: "B2", category: "Feelings" },
  { word: "Zeitgeist", article: "der", meaning: "spirit of the times", phonetic: "TSYTE-guyst", example: { de: "Der Zeitgeist verändert sich schnell.", en: "The spirit of the times changes quickly." }, level: "C1", category: "Culture" },
  { word: "Kühlschrank", article: "der", meaning: "refrigerator (literally: cool-closet)", phonetic: "KOOL-shrank", example: { de: "Der Kühlschrank ist fast leer.", en: "The fridge is almost empty." }, level: "A1", category: "Home" },
  { word: "Ohrwurm", article: "der", meaning: "catchy song (literally: ear-worm)", phonetic: "OAR-vurm", example: { de: "Dieses Lied ist ein totaler Ohrwurm!", en: "This song is a total earworm!" }, level: "B1", category: "Fun" },
  { word: "Wanderlust", meaning: "desire to travel/hike", phonetic: "VAN-der-loost", example: { de: "Die Wanderlust treibt mich in die Berge.", en: "Wanderlust drives me to the mountains." }, level: "A2", category: "Travel" },
  { word: "Staubsauger", article: "der", meaning: "vacuum cleaner (literally: dust-sucker)", phonetic: "SHTAUB-zow-ger", example: { de: "Kannst du bitte den Staubsauger holen?", en: "Can you please get the vacuum?" }, level: "A2", category: "Home" },
  { word: "Fremdschämen", meaning: "secondhand embarrassment", phonetic: "FREMT-shay-men", example: { de: "Ich musste mich total fremdschämen.", en: "I felt so embarrassed for them." }, level: "B2", category: "Feelings" },
  { word: "Fingerspitzengefühl", meaning: "intuitive sensitivity (literally: fingertip feeling)", phonetic: "FING-er-shpit-sen-geh-fool", example: { de: "Diese Situation braucht Fingerspitzengefühl.", en: "This situation needs tact." }, level: "C1", category: "Skills" },
  { word: "Eichhörnchen", article: "das", meaning: "squirrel", phonetic: "EYCH-hurn-shen", example: { de: "Das Eichhörnchen sammelt Nüsse.", en: "The squirrel collects nuts." }, level: "A2", category: "Nature" },
  { word: "Torschlusspanik", meaning: "fear of diminishing opportunities", phonetic: "TOR-shloos-pah-nik", example: { de: "Mit 30 hatte sie Torschlusspanik.", en: "At 30, she felt panic about missed opportunities." }, level: "C1", category: "Feelings" },
  { word: "Backpfeifengesicht", article: "das", meaning: "a face that needs a slap", phonetic: "BAK-pfy-fen-geh-zisht", example: { de: "Er hat ein echtes Backpfeifengesicht.", en: "He has a truly punchable face." }, level: "C2", category: "Slang" },
  { word: "Frühling", article: "der", meaning: "spring (season)", phonetic: "FROO-ling", example: { de: "Im Frühling blühen die Blumen.", en: "In spring, the flowers bloom." }, level: "A1", category: "Nature" },
  { word: "Kummerspeck", article: "der", meaning: "weight gained from emotional eating (literally: grief-bacon)", phonetic: "KOO-mer-shpek", example: { de: "Nach der Trennung hatte er Kummerspeck.", en: "After the breakup, he gained emotional weight." }, level: "C1", category: "Fun" },
  { word: "Glühwein", article: "der", meaning: "mulled wine", phonetic: "GLOO-vine", example: { de: "Auf dem Weihnachtsmarkt trinken wir Glühwein.", en: "At the Christmas market, we drink mulled wine." }, level: "A2", category: "Food" },
  { word: "Lebensabschnittsgefährte", article: "der", meaning: "life-phase companion (a partner, not necessarily forever)", phonetic: "LAY-bens-ab-shnits-geh-fair-teh", example: { de: "Er ist mein Lebensabschnittsgefährte.", en: "He's my partner for this phase of life." }, level: "C2", category: "Relationships" },
  { word: "Feierabend", article: "der", meaning: "end of workday / leisure time after work", phonetic: "FY-er-ah-bent", example: { de: "Endlich Feierabend! Lass uns ein Bier trinken.", en: "Finally done with work! Let's have a beer." }, level: "A2", category: "Work" },
  { word: "Sehenswürdigkeit", meaning: "tourist attraction (literally: sight-worthiness)", phonetic: "ZAY-ens-vur-dikh-kite", example: { de: "Das Brandenburger Tor ist eine berühmte Sehenswürdigkeit.", en: "The Brandenburg Gate is a famous tourist attraction." }, level: "A2", category: "Travel" },
  { word: "Innerer Schweinehund", meaning: "inner laziness (literally: inner pig-dog)", phonetic: "IN-er-er SHVY-neh-hoont", example: { de: "Ich muss meinen inneren Schweinehund überwinden.", en: "I need to overcome my inner laziness." }, level: "B2", category: "Fun" },
  { word: "Weltschmerz", article: "der", meaning: "world-weariness, existential sadness", phonetic: "VELT-shmerts", example: { de: "Manchmal überkommt mich der Weltschmerz.", en: "Sometimes world-weariness overcomes me." }, level: "C1", category: "Feelings" },
  { word: "Schnappsidee", meaning: "a crazy idea (one you'd only have while drunk)", phonetic: "SHNAPS-ee-day", example: { de: "Das war doch eine Schnappsidee!", en: "That was a crazy idea!" }, level: "B2", category: "Fun" },
  { word: "Krankenhaus", article: "das", meaning: "hospital (literally: sick-house)", phonetic: "KRAN-ken-house", example: { de: "Er liegt seit einer Woche im Krankenhaus.", en: "He's been in the hospital for a week." }, level: "A1", category: "Health" },
  { word: "Drachenfutter", article: "das", meaning: "gift for angry partner (literally: dragon-food)", phonetic: "DRAH-ken-foo-ter", example: { de: "Er hat Blumen als Drachenfutter gekauft.", en: "He bought flowers as a peace offering." }, level: "C1", category: "Fun" },
  { word: "Brustwarze", meaning: "nipple (literally: breast-wart)", phonetic: "BROOST-var-tseh", example: { de: "Das Wort 'Brustwarze' klingt lustig.", en: "The word 'Brustwarze' sounds funny." }, level: "B1", category: "Body" },
  { word: "Schnapsleiche", meaning: "someone passed out drunk (literally: schnapps-corpse)", phonetic: "SHNAPS-ly-sheh", example: { de: "Nach der Party gab es viele Schnapsleichen.", en: "After the party, there were many passed-out people." }, level: "C2", category: "Slang" },
  { word: "Erfahrung", meaning: "experience", phonetic: "air-FAH-roong", example: { de: "Aus Erfahrung wird man klug.", en: "Experience makes you wise." }, level: "A2", category: "Life" },
  { word: "Verschlimmbessern", meaning: "to make worse while trying to improve", phonetic: "fair-SHLIM-bess-ern", example: { de: "Er hat die Situation nur verschlimmbessert.", en: "He only made the situation worse trying to fix it." }, level: "C1", category: "Fun" },
  { word: "Wald", article: "der", meaning: "forest", phonetic: "VALT", example: { de: "Wir gehen am Wochenende im Wald spazieren.", en: "We go for walks in the forest on weekends." }, level: "A1", category: "Nature" },
  { word: "Doppelgänger", article: "der", meaning: "look-alike, twin stranger", phonetic: "DOP-el-geng-er", example: { de: "Ich habe meinen Doppelgänger in Berlin gesehen!", en: "I saw my doppelgänger in Berlin!" }, level: "B1", category: "Fun" },
  { word: "Geschwindigkeitsbegrenzung", meaning: "speed limit", phonetic: "geh-SHVIN-dikh-kites-beh-gren-tsoong", example: { de: "Auf der Autobahn gibt es oft keine Geschwindigkeitsbegrenzung.", en: "On the Autobahn, there's often no speed limit." }, level: "B2", category: "Travel" },
  { word: "Treppenwitz", article: "der", meaning: "comeback you think of too late (literally: staircase-joke)", phonetic: "TREP-en-vits", example: { de: "Mir fiel der perfekte Treppenwitz erst zu Hause ein.", en: "I only thought of the perfect comeback at home." }, level: "C1", category: "Fun" },
  { word: "Frühstück", article: "das", meaning: "breakfast (literally: early-piece)", phonetic: "FROO-shtook", example: { de: "Was möchtest du zum Frühstück?", en: "What would you like for breakfast?" }, level: "A1", category: "Food" },
  { word: "Donaudampfschifffahrt", meaning: "Danube steamship journey", phonetic: "DOH-now-dampf-shif-fahrt", example: { de: "Die Donaudampfschifffahrt ist sehr romantisch.", en: "The Danube steamship journey is very romantic." }, level: "C2", category: "Fun" },
  { word: "Geburtstag", article: "der", meaning: "birthday (literally: birth-day)", phonetic: "geh-BOORTS-tahg", example: { de: "Herzlichen Glückwunsch zum Geburtstag!", en: "Happy birthday!" }, level: "A1", category: "Life" },
  { word: "Kopfkino", article: "das", meaning: "vivid imagination (literally: head-cinema)", phonetic: "KOPF-kee-no", example: { de: "Ich hatte sofort Kopfkino!", en: "I immediately had a vivid mental image!" }, level: "B2", category: "Fun" },
  { word: "Schildkröte", meaning: "turtle (literally: shield-toad)", phonetic: "SHILT-kruh-teh", example: { de: "Die Schildkröte ist sehr langsam.", en: "The turtle is very slow." }, level: "A2", category: "Nature" },
  { word: "Zugzwang", article: "der", meaning: "forced to make a move (from chess)", phonetic: "TSOOK-tsvang", example: { de: "Er war im Zugzwang und musste handeln.", en: "He was in a bind and had to act." }, level: "C1", category: "Culture" },
  { word: "Nachtwandler", article: "der", meaning: "sleepwalker (literally: night-walker)", phonetic: "NAKHT-vand-ler", example: { de: "Als Kind war ich ein Nachtwandler.", en: "As a child, I was a sleepwalker." }, level: "B1", category: "Health" },
  { word: "Wunderkind", article: "das", meaning: "child prodigy", phonetic: "VOON-der-kint", example: { de: "Mozart war ein musikalisches Wunderkind.", en: "Mozart was a musical child prodigy." }, level: "B1", category: "Culture" },
  { word: "Pantoffelheldin", meaning: "woman who rules at home (literally: slipper-heroine)", phonetic: "pan-TOF-el-hel-din", example: { de: "Sie ist die Pantoffelheldin zu Hause.", en: "She's the boss at home." }, level: "C2", category: "Fun" },
  { word: "Blümchenkaffee", article: "der", meaning: "very weak coffee (literally: little-flower-coffee)", phonetic: "BLOOM-shen-kaf-ay", example: { de: "Dieser Kaffee ist ja Blümchenkaffee!", en: "This coffee is way too weak!" }, level: "C1", category: "Food" },
  { word: "Abenteuer", article: "das", meaning: "adventure", phonetic: "AH-ben-toy-er", example: { de: "Das Leben ist ein großes Abenteuer.", en: "Life is a great adventure." }, level: "A2", category: "Life" },
  { word: "Sitzfleisch", article: "das", meaning: "ability to sit through something boring (literally: sit-meat)", phonetic: "ZITS-flysh", example: { de: "Für diese Prüfung braucht man Sitzfleisch.", en: "For this exam, you need patience to sit through it." }, level: "C1", category: "Fun" },
  { word: "Regenschirm", article: "der", meaning: "umbrella (literally: rain-shield)", phonetic: "RAY-gen-shirm", example: { de: "Nimm einen Regenschirm mit, es regnet!", en: "Take an umbrella, it's raining!" }, level: "A1", category: "Weather" },
  { word: "Stammtisch", article: "der", meaning: "regulars' table at a bar", phonetic: "SHTAM-tish", example: { de: "Jeden Donnerstag treffen wir uns am Stammtisch.", en: "Every Thursday we meet at the regulars' table." }, level: "B1", category: "Culture" },
  { word: "Kuddelmuddel", article: "das", meaning: "mess, chaos", phonetic: "KOO-del-moo-del", example: { de: "In meinem Zimmer herrscht Kuddelmuddel.", en: "My room is a total mess." }, level: "B2", category: "Fun" },
  { word: "Fledermaus", meaning: "bat (literally: flutter-mouse)", phonetic: "FLAY-der-mouse", example: { de: "Die Fledermaus fliegt nachts.", en: "The bat flies at night." }, level: "A2", category: "Nature" },
  { word: "Querdenker", article: "der", meaning: "lateral thinker, nonconformist", phonetic: "KVAIR-den-ker", example: { de: "Einstein war ein echter Querdenker.", en: "Einstein was a true lateral thinker." }, level: "B2", category: "Skills" },
  { word: "Kindergarten", article: "der", meaning: "kindergarten (literally: children-garden)", phonetic: "KIN-der-gar-ten", example: { de: "Mein Sohn geht in den Kindergarten.", en: "My son goes to kindergarten." }, level: "A1", category: "Education" },
  { word: "Schnäppchenjäger", article: "der", meaning: "bargain hunter", phonetic: "SHNEP-shen-yay-ger", example: { de: "Meine Mutter ist eine echte Schnäppchenjägerin.", en: "My mother is a real bargain hunter." }, level: "B2", category: "Shopping" },
  { word: "Lebensmüde", meaning: "tired of life / recklessly daring", phonetic: "LAY-bens-moo-deh", example: { de: "Bist du lebensmüde? Das ist gefährlich!", en: "Are you crazy? That's dangerous!" }, level: "B2", category: "Feelings" },
  { word: "Zweisamkeit", meaning: "togetherness of two people", phonetic: "TSVY-zahm-kite", example: { de: "Wir genießen unsere Zweisamkeit.", en: "We enjoy our time together as a couple." }, level: "C1", category: "Relationships" },
  { word: "Tollpatsch", article: "der", meaning: "clumsy person", phonetic: "TOL-patsh", example: { de: "Er ist ein richtiger Tollpatsch!", en: "He's such a klutz!" }, level: "B1", category: "Fun" },
  { word: "Reisefieber", article: "das", meaning: "travel excitement (literally: travel-fever)", phonetic: "RY-zeh-fee-ber", example: { de: "Vor jeder Reise habe ich Reisefieber.", en: "Before every trip, I get travel excitement." }, level: "B1", category: "Travel" },
  { word: "Besserwisser", article: "der", meaning: "know-it-all", phonetic: "BESS-er-vis-er", example: { de: "Sei kein Besserwisser!", en: "Don't be a know-it-all!" }, level: "B1", category: "Fun" },
  { word: "Augenblick", article: "der", meaning: "moment (literally: eye-blink)", phonetic: "OW-gen-blik", example: { de: "Einen Augenblick bitte!", en: "One moment, please!" }, level: "A2", category: "Time" },
  { word: "Luftschloss", article: "das", meaning: "pipe dream (literally: air-castle)", phonetic: "LOOFT-shloss", example: { de: "Das ist nur ein Luftschloss, keine echte Idee.", en: "That's just a pipe dream, not a real idea." }, level: "C1", category: "Fun" },
];

/**
 * Get today's word based on the date.
 * Cycles through the list — same word for everyone on the same day.
 */
export function getTodaysWord(): DailyWord {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );
  return DAILY_WORDS[dayOfYear % DAILY_WORDS.length];
}
