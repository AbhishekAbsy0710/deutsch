// ── German Tongue Twisters (Zungenbrecher) ──────────────────
export interface TongueTwister {
  id: string;
  text: string;
  translation: string;
  difficulty: "easy" | "medium" | "hard";
  targetSounds: string[];
  tip: string;
}

export const tongueTwisters: TongueTwister[] = [
  // ── Easy ──
  {
    id: "zt-01",
    text: "Fischers Fritz fischt frische Fische, frische Fische fischt Fischers Fritz.",
    translation: "Fischer's Fritz catches fresh fish, fresh fish catches Fischer's Fritz.",
    difficulty: "easy",
    targetSounds: ["f", "sch", "fr"],
    tip: "Focus on the F-to-SCH transition. Keep your lips relaxed.",
  },
  {
    id: "zt-02",
    text: "Blaukraut bleibt Blaukraut und Brautkleid bleibt Brautkleid.",
    translation: "Red cabbage stays red cabbage and wedding dress stays wedding dress.",
    difficulty: "easy",
    targetSounds: ["bl", "br", "au"],
    tip: "The challenge is switching between BL and BR clusters quickly.",
  },
  {
    id: "zt-03",
    text: "Wenn Fliegen hinter Fliegen fliegen, fliegen Fliegen Fliegen nach.",
    translation: "When flies fly behind flies, flies follow flies.",
    difficulty: "easy",
    targetSounds: ["fl", "ie"],
    tip: "Keep the FL cluster crisp. The word Fliegen changes meaning based on context.",
  },
  {
    id: "zt-04",
    text: "Zwischen zwei Zwetschgenzweigen zwitschern zwei Schwalben.",
    translation: "Between two plum branches, two swallows are chirping.",
    difficulty: "easy",
    targetSounds: ["zw", "sch", "ts"],
    tip: "German Z is always a TS sound. Practice the ZW cluster slowly first.",
  },
  // ── Medium ──
  {
    id: "zt-05",
    text: "In Ulm, um Ulm und um Ulm herum.",
    translation: "In Ulm, around Ulm and all around Ulm.",
    difficulty: "medium",
    targetSounds: ["um", "ulm"],
    tip: "The difficulty is the repetitive ULM-UM pattern. Keep the L clear.",
  },
  {
    id: "zt-06",
    text: "Zehn zahme Ziegen zogen zehn Zentner Zucker zum Zoo.",
    translation: "Ten tame goats pulled ten hundredweight of sugar to the zoo.",
    difficulty: "medium",
    targetSounds: ["z", "ts"],
    tip: "Every Z is TS. Practice: Tsehn tsahme Tsiegen tsogen...",
  },
  {
    id: "zt-07",
    text: "Esel essen Nesseln nicht, Nesseln essen Esel nicht.",
    translation: "Donkeys don't eat nettles, nettles don't eat donkeys.",
    difficulty: "medium",
    targetSounds: ["e", "n", "ss"],
    tip: "Focus on the short E in Esel versus the short E in Nesseln.",
  },
  {
    id: "zt-08",
    text: "Der Potsdamer Postkutscher putzt den Potsdamer Postkutschkasten.",
    translation: "The Potsdam stagecoach driver cleans the Potsdam stagecoach box.",
    difficulty: "medium",
    targetSounds: ["p", "st", "k"],
    tip: "Chain of plosives. Keep each P and K sharp without aspiration.",
  },
  {
    id: "zt-09",
    text: "Wenn Hexen hinter Hexen hexen, hexen Hexen Hexen nach.",
    translation: "When witches bewitch behind witches, witches bewitch witches in turn.",
    difficulty: "medium",
    targetSounds: ["h", "x", "ch"],
    tip: "The X in Hexen is a KS sound. Keep the H aspirated at the start.",
  },
  // ── Hard ──
  {
    id: "zt-10",
    text: "Brautkleid bleibt Brautkleid und Blaukraut bleibt Blaukraut. Auch Braunkraut bleibt Braunkraut und Krautblatt bleibt Krautblatt.",
    translation: "Wedding dress stays wedding dress and red cabbage stays red cabbage. Also brown cabbage stays brown cabbage and cabbage leaf stays cabbage leaf.",
    difficulty: "hard",
    targetSounds: ["br", "bl", "kr", "au"],
    tip: "Extended version. The brain fights the BR/BL/KR switches. Slow down at Braunkraut.",
  },
  {
    id: "zt-11",
    text: "Der Whiskymixer mixt den Whisky mit dem Whiskymixer. Mit dem Whiskymixer mixt der Whiskymixer den Whisky.",
    translation: "The whisky mixer mixes the whisky with the whisky mixer. With the whisky mixer, the whisky mixer mixes the whisky.",
    difficulty: "hard",
    targetSounds: ["w", "x", "ks"],
    tip: "German W is a V sound. The challenge is W-V plus the KS in Mixer.",
  },
  {
    id: "zt-12",
    text: "Schnecken erschrecken, wenn Schnecken an Schnecken schlecken, weil zum Schrecken vieler Schnecken Schnecken nicht schmecken.",
    translation: "Snails are scared when snails lick snails, because to the horror of many snails, snails don't taste good.",
    difficulty: "hard",
    targetSounds: ["schn", "schl", "schm", "schr"],
    tip: "Four different SCH-clusters. Each one positions the tongue differently after the SCH.",
  },
  {
    id: "zt-13",
    text: "Es klapperten die Klapperschlangen, bis ihre Klappern schlapper klangen.",
    translation: "The rattlesnakes rattled until their rattles sounded more feeble.",
    difficulty: "hard",
    targetSounds: ["kl", "schl", "pp"],
    tip: "The PP is a genuine double stop. Hold the closure briefly before releasing.",
  },
  {
    id: "zt-14",
    text: "Allergischer Algerier, algerischer Allergiker.",
    translation: "Allergic Algerian, Algerian allergy sufferer.",
    difficulty: "hard",
    targetSounds: ["al", "er", "isch"],
    tip: "The -isch and -ier endings fight each other. Isolate each word first.",
  },
  {
    id: "zt-15",
    text: "Wer gegen Aluminium minimal immun ist, ist Aluminium-Minimum-Immuner.",
    translation: "Whoever is minimally immune to aluminum is an aluminum-minimum-immune person.",
    difficulty: "hard",
    targetSounds: ["m", "n", "ium"],
    tip: "The M-N-M pattern at speed makes the brain stutter. Practice the -ium ending clearly.",
  },
];
