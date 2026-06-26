/**
 * German phonetics guide — IPA mappings and pronunciation tips
 * for difficult German sounds, organized by challenge category.
 */

export interface PhonemeGuide {
  sound: string;
  ipa: string;
  examples: { word: string; ipa: string; meaning: string }[];
  mouthTip: string;
  commonMistake: string;
}

export const germanPhonemes: PhonemeGuide[] = [
  // ── Umlauts ──
  {
    sound: "ü (long)",
    ipa: "/yː/",
    examples: [
      { word: "über", ipa: "/ˈyːbɐ/", meaning: "over/about" },
      { word: "Tür", ipa: "/tyːɐ̯/", meaning: "door" },
      { word: "grün", ipa: "/ɡʁyːn/", meaning: "green" },
    ],
    mouthTip: "Say 'ee' (like 'feet') but round your lips as if saying 'oo'. Keep tongue forward.",
    commonMistake: "English speakers say /uː/ (oo) — lips are right but tongue is too far back.",
  },
  {
    sound: "ö (long)",
    ipa: "/øː/",
    examples: [
      { word: "schön", ipa: "/ʃøːn/", meaning: "beautiful" },
      { word: "Vögel", ipa: "/ˈføːɡl̩/", meaning: "birds" },
      { word: "böse", ipa: "/ˈbøːzə/", meaning: "angry/evil" },
    ],
    mouthTip: "Say 'eh' (like 'bed') but round your lips. It's between 'eh' and 'oh'.",
    commonMistake: "English speakers say /oʊ/ (oh) — this is too back and rounded.",
  },
  {
    sound: "ä (long)",
    ipa: "/ɛː/",
    examples: [
      { word: "Mädchen", ipa: "/ˈmɛːtçən/", meaning: "girl" },
      { word: "Käse", ipa: "/ˈkɛːzə/", meaning: "cheese" },
      { word: "spät", ipa: "/ʃpɛːt/", meaning: "late" },
    ],
    mouthTip: "Like English 'bed' but held longer. Mouth more open than 'e'.",
    commonMistake: "Often confused with short 'e' — ä is more open.",
  },

  // ── CH sounds ──
  {
    sound: "ch (ich-Laut)",
    ipa: "/ç/",
    examples: [
      { word: "ich", ipa: "/ɪç/", meaning: "I" },
      { word: "nicht", ipa: "/nɪçt/", meaning: "not" },
      { word: "Milch", ipa: "/mɪlç/", meaning: "milk" },
    ],
    mouthTip: "Like a sharp whisper of 'h' in 'huge'. Tongue near palate, air flows through narrow gap. After e, i, ä, ö, ü, consonants.",
    commonMistake: "English speakers say /ʃ/ (sh) or /k/ — it should be softer, like whispering 'yee'.",
  },
  {
    sound: "ch (ach-Laut)",
    ipa: "/x/",
    examples: [
      { word: "Buch", ipa: "/buːx/", meaning: "book" },
      { word: "Nacht", ipa: "/naxt/", meaning: "night" },
      { word: "noch", ipa: "/nɔx/", meaning: "still/yet" },
    ],
    mouthTip: "Like clearing your throat gently. Tongue is at the back of the mouth. After a, o, u, au.",
    commonMistake: "English speakers often skip it entirely or say /k/. It's a sustained friction, not a stop.",
  },

  // ── R sound ──
  {
    sound: "r (uvular)",
    ipa: "/ʁ/",
    examples: [
      { word: "rot", ipa: "/ʁoːt/", meaning: "red" },
      { word: "Reis", ipa: "/ʁaɪ̯s/", meaning: "rice" },
      { word: "Straße", ipa: "/ˈʃtʁaːsə/", meaning: "street" },
    ],
    mouthTip: "Gargle gently — the back of your tongue vibrates against your uvula. Much further back than English 'r'.",
    commonMistake: "English speakers use the tip of the tongue. German 'r' is in the throat.",
  },
  {
    sound: "r (vocalic -er)",
    ipa: "/ɐ/",
    examples: [
      { word: "Wasser", ipa: "/ˈvasɐ/", meaning: "water" },
      { word: "Lehrer", ipa: "/ˈleːʁɐ/", meaning: "teacher" },
      { word: "besser", ipa: "/ˈbɛsɐ/", meaning: "better" },
    ],
    mouthTip: "At the end of words/syllables, 'r' becomes a soft 'uh' sound. Don't roll it.",
    commonMistake: "English speakers pronounce the 'r' — in German it becomes a vowel-like /ɐ/.",
  },

  // ── S / Z / SCH ──
  {
    sound: "z / ts",
    ipa: "/ts/",
    examples: [
      { word: "Zug", ipa: "/tsuːk/", meaning: "train" },
      { word: "Zeit", ipa: "/tsaɪ̯t/", meaning: "time" },
      { word: "Katze", ipa: "/ˈkatsə/", meaning: "cat" },
    ],
    mouthTip: "Like 'ts' in 'cats' but at the START of the word. Quick release.",
    commonMistake: "English speakers say /z/ (like 'zoo'). German 'z' is ALWAYS /ts/.",
  },
  {
    sound: "sch",
    ipa: "/ʃ/",
    examples: [
      { word: "Schule", ipa: "/ˈʃuːlə/", meaning: "school" },
      { word: "schwer", ipa: "/ʃveːɐ̯/", meaning: "difficult" },
      { word: "Flasche", ipa: "/ˈflaʃə/", meaning: "bottle" },
    ],
    mouthTip: "Same as English 'sh'. Lips rounded and pushed forward.",
    commonMistake: "Watch out: 'sp' and 'st' at word starts are pronounced /ʃp/ and /ʃt/.",
  },
  {
    sound: "ß (Eszett)",
    ipa: "/s/",
    examples: [
      { word: "Straße", ipa: "/ˈʃtʁaːsə/", meaning: "street" },
      { word: "groß", ipa: "/ɡʁoːs/", meaning: "big" },
      { word: "heißen", ipa: "/ˈhaɪ̯sn̩/", meaning: "to be called" },
    ],
    mouthTip: "Always voiceless 's' (like 'snake'). Never buzzy like English 'z'. Appears after long vowels.",
    commonMistake: "ß is NOT a 'B' — it's a sharp 's'. After long vowels and diphthongs.",
  },

  // ── Special ──
  {
    sound: "w",
    ipa: "/v/",
    examples: [
      { word: "Wasser", ipa: "/ˈvasɐ/", meaning: "water" },
      { word: "wo", ipa: "/voː/", meaning: "where" },
      { word: "Wein", ipa: "/vaɪ̯n/", meaning: "wine" },
    ],
    mouthTip: "German 'w' = English 'v'. Top teeth on lower lip, voiced.",
    commonMistake: "English speakers say /w/ (like 'water'). In German it's always /v/.",
  },
  {
    sound: "v",
    ipa: "/f/ or /v/",
    examples: [
      { word: "Vater", ipa: "/ˈfaːtɐ/", meaning: "father (v=/f/)" },
      { word: "Vase", ipa: "/ˈvaːzə/", meaning: "vase (v=/v/)" },
      { word: "Klavier", ipa: "/klaˈviːɐ̯/", meaning: "piano (v=/v/)" },
    ],
    mouthTip: "In native German words: /f/. In foreign loanwords: /v/.",
    commonMistake: "No consistent rule — you must learn which words use which sound.",
  },
  {
    sound: "Knacklaut (glottal stop)",
    ipa: "/ʔ/",
    examples: [
      { word: "beachten", ipa: "/bəˈʔaxtn̩/", meaning: "to observe" },
      { word: "Verein", ipa: "/fɛɐ̯ˈʔaɪ̯n/", meaning: "club/association" },
      { word: "Theater", ipa: "/teˈʔaːtɐ/", meaning: "theater" },
    ],
    mouthTip: "A tiny pause/catch before vowels at syllable boundaries. Like the pause in 'uh-oh'.",
    commonMistake: "English speakers run vowels together. German separates them with a glottal stop.",
  },
];

/** Quick-lookup: which phonemes are hardest for English speakers */
export const hardestSounds = ["ü (long)", "ö (long)", "ch (ich-Laut)", "r (uvular)", "z / ts"];

export function getPhonemeBySound(sound: string): PhonemeGuide | undefined {
  return germanPhonemes.find(p => p.sound === sound);
}
