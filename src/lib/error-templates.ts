/**
 * Error Templates for Error Hunt Game
 * 
 * Deterministic, template-based error injection using regex.
 * Each template finds a specific grammatical pattern in a correct
 * German sentence and introduces a realistic learner error.
 * 
 * IMPORTANT: All regex uses [\w\u00C0-\u024F\u00DF] instead of \w
 * to match German characters (ö, ü, ä, ß).
 */

const W = "[\\w\\u00C0-\\u024F\\u00DF]"; // German-safe word char class

export interface ErrorTemplate {
  id: string;
  level: string; // "A1" | "A2" | ... | "C2"
  category: string;
  description: string;
  apply: (sentence: string) => { errorSentence: string; errorWord: string; correction: string; explanation: string } | null;
}

// ── A1-A2 Templates ─────────────────────────────────────────

const ARTICLE_GENDER_DER: ErrorTemplate = {
  id: "article-gender-der",
  level: "A1",
  category: "article",
  description: "Wrong article gender (der → die/das)",
  apply: (s) => {
    const match = s.match(new RegExp(`\\b(Der|der)\\s+(${W}+)`, "u"));
    if (!match) return null;
    const swap = Math.random() > 0.5 ? "die" : "das";
    const swapCap = match[1][0] === "D" ? swap.charAt(0).toUpperCase() + swap.slice(1) : swap;
    return {
      errorSentence: s.replace(match[0], `${swapCap} ${match[2]}`),
      errorWord: swapCap,
      correction: match[1],
      explanation: `"${match[2]}" is masculine → use "${match[1]}", not "${swapCap}".`,
    };
  },
};

const ARTICLE_GENDER_DIE: ErrorTemplate = {
  id: "article-gender-die",
  level: "A1",
  category: "article",
  description: "Wrong article gender (die → der/das)",
  apply: (s) => {
    const match = s.match(new RegExp(`\\b(Die|die)\\s+(${W}+)`, "u"));
    if (!match) return null;
    // Avoid matching "die" at the start of relative clauses
    if (["die", "Die"].includes(match[1]) && ["ich", "du", "er", "sie", "es", "wir"].includes(match[2].toLowerCase())) return null;
    const swap = Math.random() > 0.5 ? "der" : "das";
    const swapCap = match[1][0] === "D" ? swap.charAt(0).toUpperCase() + swap.slice(1) : swap;
    return {
      errorSentence: s.replace(match[0], `${swapCap} ${match[2]}`),
      errorWord: swapCap,
      correction: match[1],
      explanation: `"${match[2]}" is feminine → use "${match[1]}", not "${swapCap}".`,
    };
  },
};

const ARTICLE_GENDER_DAS: ErrorTemplate = {
  id: "article-gender-das",
  level: "A1",
  category: "article",
  description: "Wrong article gender (das → der/die)",
  apply: (s) => {
    const match = s.match(new RegExp(`\\b(Das|das)\\s+(${W}+)`, "u"));
    if (!match) return null;
    // Avoid "das" as demonstrative pronoun
    if (["ist", "war", "wird", "kann", "soll", "muss"].includes(match[2].toLowerCase())) return null;
    const swap = Math.random() > 0.5 ? "der" : "die";
    const swapCap = match[1][0] === "D" ? swap.charAt(0).toUpperCase() + swap.slice(1) : swap;
    return {
      errorSentence: s.replace(match[0], `${swapCap} ${match[2]}`),
      errorWord: swapCap,
      correction: match[1],
      explanation: `"${match[2]}" is neuter → use "${match[1]}", not "${swapCap}".`,
    };
  },
};

const VERB_ENDING_ST: ErrorTemplate = {
  id: "verb-ending-st",
  level: "A1",
  category: "conjugation",
  description: "Wrong verb ending (du -st → -t or -en)",
  apply: (s) => {
    const match = s.match(new RegExp(`\\b(du)\\s+(${W}+)(st)\\b`, "iu"));
    if (!match) return null;
    const wrongEnding = "t";
    const errorVerb = match[2] + wrongEnding;
    return {
      errorSentence: s.replace(match[0], `${match[1]} ${errorVerb}`),
      errorWord: errorVerb,
      correction: match[2] + match[3],
      explanation: `With "du", verbs end in "-st": "${match[2]}st", not "${errorVerb}".`,
    };
  },
};

const VERB_ENDING_T: ErrorTemplate = {
  id: "verb-ending-t",
  level: "A1",
  category: "conjugation",
  description: "Wrong verb ending (er/sie/es -t → -en/-st)",
  apply: (s) => {
    const match = s.match(new RegExp(`\\b(er|sie|es)\\s+(${W}+)(t)\\b`, "iu"));
    if (!match) return null;
    // Avoid short words like "ist", "hat"
    if (match[2].length < 3) return null;
    const wrongEnding = "en";
    const errorVerb = match[2] + wrongEnding;
    return {
      errorSentence: s.replace(match[0], `${match[1]} ${errorVerb}`),
      errorWord: errorVerb,
      correction: match[2] + match[3],
      explanation: `With "${match[1]}", verbs end in "-t": "${match[2]}t", not "${errorVerb}".`,
    };
  },
};

const NICHT_KEIN: ErrorTemplate = {
  id: "nicht-kein",
  level: "A1",
  category: "negation",
  description: "Using 'nicht' instead of 'kein'",
  apply: (s) => {
    const match = s.match(new RegExp(`\\b(kein|keine|keinen|keinem|keiner)\\s+(${W}+)`, "iu"));
    if (!match) return null;
    return {
      errorSentence: s.replace(match[0], `nicht ${match[2]}`),
      errorWord: "nicht",
      correction: match[1],
      explanation: `Use "${match[1]}" (not "nicht") to negate nouns with indefinite articles.`,
    };
  },
};

// ── B1-B2 Templates ─────────────────────────────────────────

const DATIV_AKKUSATIV: ErrorTemplate = {
  id: "dativ-akkusativ",
  level: "B1",
  category: "case",
  description: "Wrong case: Dativ ↔ Akkusativ",
  apply: (s) => {
    // dem → den (or vice versa)
    const match = s.match(/\b(dem)\s/u);
    if (match) {
      return {
        errorSentence: s.replace(match[0], "den "),
        errorWord: "den",
        correction: "dem",
        explanation: "This requires Dativ case → use 'dem', not 'den' (Akkusativ).",
      };
    }
    const match2 = s.match(/\b(den)\s/u);
    if (match2) {
      return {
        errorSentence: s.replace(match2[0], "dem "),
        errorWord: "dem",
        correction: "den",
        explanation: "This requires Akkusativ case → use 'den', not 'dem' (Dativ).",
      };
    }
    return null;
  },
};

const PREPOSITION_CASE: ErrorTemplate = {
  id: "preposition-case",
  level: "B1",
  category: "case",
  description: "Wrong case after Wechselpräposition",
  apply: (s) => {
    // in dem/im → in den (location vs direction error)
    const match = s.match(/\b(in|an|auf|über|unter|vor|hinter|neben|zwischen)\s+(dem|der)\b/u);
    if (!match) return null;
    const wrong = match[2] === "dem" ? "den" : "dem";
    return {
      errorSentence: s.replace(match[0], `${match[1]} ${wrong}`),
      errorWord: wrong,
      correction: match[2],
      explanation: `After "${match[1]}" with location (Wo?), use Dativ "${match[2]}". Direction (Wohin?) takes Akkusativ.`,
    };
  },
};

const SEPARABLE_VERB: ErrorTemplate = {
  id: "separable-verb",
  level: "B1",
  category: "word-order",
  description: "Separable prefix not separated",
  apply: (s) => {
    // Match sentences where a separable prefix verb has its prefix at the end
    const prefixes = ["an", "auf", "aus", "ein", "mit", "vor", "zu", "ab", "um", "weg"];
    for (const prefix of prefixes) {
      const rx = new RegExp(`\\b(${W}+)\\s+.*\\b(${prefix})\\.$`, "u");
      const match = s.match(rx);
      if (match) {
        // Error: merge prefix back into verb (wrong in main clause)
        const errorSentence = s.replace(new RegExp(`\\s+${prefix}\\.$`), ".");
        const merged = match[1] + prefix;
        return {
          errorSentence: errorSentence.replace(match[1], merged),
          errorWord: merged,
          correction: `${match[1]} ... ${prefix}`,
          explanation: `"${prefix}" is a separable prefix — it goes to the end of the clause in present tense.`,
        };
      }
    }
    return null;
  },
};

const VERB_POSITION_SUBORDINATE: ErrorTemplate = {
  id: "verb-position-sub",
  level: "B1",
  category: "word-order",
  description: "Verb not at end in subordinate clause",
  apply: (s) => {
    // Match subordinate clauses introduced by common conjunctions
    const conjunctions = ["weil", "dass", "wenn", "obwohl", "nachdem", "bevor"];
    for (const conj of conjunctions) {
      const rx = new RegExp(`\\b(${conj})\\s+(\\w+)\\s+(${W}+)\\s+(${W}+)`, "iu");
      const match = s.match(rx);
      if (match) {
        // The verb should be at the end — error: move it to position 2 (English order)
        return {
          errorSentence: s, // Keep as-is since we're detecting the rule
          errorWord: match[3],
          correction: match[3],
          explanation: `After "${conj}", the conjugated verb moves to the END of the subordinate clause.`,
        };
      }
    }
    return null;
  },
};

const TENSE_PERFEKT: ErrorTemplate = {
  id: "tense-perfekt",
  level: "B1",
  category: "tense",
  description: "Wrong auxiliary: haben ↔ sein in Perfekt",
  apply: (s) => {
    // hat → ist (for movement/state change verbs)
    const match = s.match(new RegExp(`\\b(ist)\\s+(${W}+)`, "u"));
    if (match && (match[2].endsWith("en") || match[2].endsWith("t"))) {
      return {
        errorSentence: s.replace(match[0], `hat ${match[2]}`),
        errorWord: "hat",
        correction: "ist",
        explanation: `Verbs of movement/state change use "sein" as auxiliary: "ist ${match[2]}", not "hat".`,
      };
    }
    return null;
  },
};

// ── B2-C1 Templates ─────────────────────────────────────────

const KONJUNKTIV_II: ErrorTemplate = {
  id: "konjunktiv-ii",
  level: "B2",
  category: "konjunktiv",
  description: "Missing Konjunktiv II form",
  apply: (s) => {
    const match = s.match(/\b(wäre|hätte|würde|könnte|müsste|sollte|dürfte)\b/u);
    if (!match) return null;
    const indicativeMap: Record<string, string> = {
      wäre: "ist", hätte: "hat", würde: "wird",
      könnte: "kann", müsste: "muss", sollte: "soll", dürfte: "darf",
    };
    const wrong = indicativeMap[match[1].toLowerCase()];
    if (!wrong) return null;
    const wrongCap = match[1][0] === match[1][0].toUpperCase() ? wrong.charAt(0).toUpperCase() + wrong.slice(1) : wrong;
    return {
      errorSentence: s.replace(match[1], wrongCap),
      errorWord: wrongCap,
      correction: match[1],
      explanation: `Use Konjunktiv II "${match[1]}" for hypothetical/polite situations, not indicative "${wrongCap}".`,
    };
  },
};

const PASSIVE_VOICE: ErrorTemplate = {
  id: "passive-voice",
  level: "B2",
  category: "passive",
  description: "Wrong passive construction (werden + Partizip II)",
  apply: (s) => {
    const match = s.match(new RegExp(`\\b(wird|wurde|werden)\\s+(${W}+t|${W}+en)\\b`, "u"));
    if (!match) return null;
    // Error: drop "werden" auxiliary
    return {
      errorSentence: s.replace(match[0], match[2]),
      errorWord: match[2],
      correction: match[0],
      explanation: `Passive voice requires "${match[1]} + ${match[2]}". Don't drop the auxiliary.`,
    };
  },
};

const ADJECTIVE_ENDING: ErrorTemplate = {
  id: "adjective-ending",
  level: "B2",
  category: "adjective-declension",
  description: "Wrong adjective ending",
  apply: (s) => {
    // Match: article + adjective + noun pattern
    const match = s.match(new RegExp(`\\b(der|die|das|den|dem|ein|eine|einen|einem)\\s+(${W}+e[snmr]?)\\s+(${W}+)`, "iu"));
    if (!match) return null;
    const adj = match[2];
    // Swap ending
    const endings = ["e", "en", "er", "es", "em"];
    const currentEnding = endings.find(e => adj.endsWith(e));
    if (!currentEnding) return null;
    const wrongEndings = endings.filter(e => e !== currentEnding);
    const wrongEnding = wrongEndings[Math.floor(Math.random() * wrongEndings.length)];
    const errorAdj = adj.slice(0, -currentEnding.length) + wrongEnding;
    return {
      errorSentence: s.replace(adj, errorAdj),
      errorWord: errorAdj,
      correction: adj,
      explanation: `After "${match[1]}", the adjective ending is "-${currentEnding}": "${adj}", not "${errorAdj}".`,
    };
  },
};

// ── C1-C2 Templates ─────────────────────────────────────────

const PARTIZIP_ATTRIBUTE: ErrorTemplate = {
  id: "partizip-attribute",
  level: "C1",
  category: "advanced-syntax",
  description: "Extended participial attribute error",
  apply: (s) => {
    // Match Partizip I (ending in -end) or Partizip II (ge-...-t/en) used as adjective
    const match = s.match(new RegExp(`\\b(${W}+ende[snr]?)\\s+(${W}+)`, "u"));
    if (!match) return null;
    // Error: use infinitive instead of participle
    const errorWord = match[1].replace(/ende[snr]?$/, "en");
    return {
      errorSentence: s.replace(match[1], errorWord),
      errorWord,
      correction: match[1],
      explanation: `Use the present participle form "${match[1]}" as an adjective, not the infinitive "${errorWord}".`,
    };
  },
};

const GENITIVE_CASE: ErrorTemplate = {
  id: "genitive-case",
  level: "C1",
  category: "case",
  description: "Avoiding Genitiv (using von + Dativ instead)",
  apply: (s) => {
    const match = s.match(new RegExp(`\\b(des|der)\\s+(${W}+(?:es|s))\\b`, "u"));
    if (!match) return null;
    // Error: replace with "von dem/der"
    const vonForm = match[1] === "des" ? "von dem" : "von der";
    const nounBase = match[2].replace(/(?:es|s)$/, "");
    return {
      errorSentence: s.replace(match[0], `${vonForm} ${nounBase}`),
      errorWord: vonForm.split(" ")[0], // "von"
      correction: match[1],
      explanation: `Use Genitiv "${match[1]} ${match[2]}" in formal writing, not "von + Dativ".`,
    };
  },
};

const RELATIVE_PRONOUN: ErrorTemplate = {
  id: "relative-pronoun",
  level: "B2",
  category: "relative-clause",
  description: "Wrong relative pronoun case",
  apply: (s) => {
    const match = s.match(/,\s+(der|die|das|den|dem|deren|dessen)\s/u);
    if (!match) return null;
    const swapMap: Record<string, string> = {
      der: "den", den: "der", die: "der", das: "der",
      dem: "den", deren: "dessen", dessen: "deren",
    };
    const wrong = swapMap[match[1].toLowerCase()];
    if (!wrong) return null;
    return {
      errorSentence: s.replace(`, ${match[1]} `, `, ${wrong} `),
      errorWord: wrong,
      correction: match[1],
      explanation: `The relative pronoun must match the case required by the relative clause. Use "${match[1]}", not "${wrong}".`,
    };
  },
};

// ── All templates ────────────────────────────────────────────

export const ERROR_TEMPLATES: ErrorTemplate[] = [
  // A1
  ARTICLE_GENDER_DER,
  ARTICLE_GENDER_DIE,
  ARTICLE_GENDER_DAS,
  VERB_ENDING_ST,
  VERB_ENDING_T,
  NICHT_KEIN,
  // B1
  DATIV_AKKUSATIV,
  PREPOSITION_CASE,
  SEPARABLE_VERB,
  VERB_POSITION_SUBORDINATE,
  TENSE_PERFEKT,
  // B2
  KONJUNKTIV_II,
  PASSIVE_VOICE,
  ADJECTIVE_ENDING,
  RELATIVE_PRONOUN,
  // C1
  PARTIZIP_ATTRIBUTE,
  GENITIVE_CASE,
];

/**
 * Get templates applicable to a given level (includes all levels up to and including the target)
 */
export function getTemplatesForLevel(level: string): ErrorTemplate[] {
  const levelOrder = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const idx = levelOrder.indexOf(level);
  if (idx === -1) return ERROR_TEMPLATES;
  const applicableLevels = new Set(levelOrder.slice(0, idx + 1));
  return ERROR_TEMPLATES.filter(t => applicableLevels.has(t.level));
}

/**
 * Apply a random applicable error template to a sentence.
 * Tries all templates for the level in random order.
 * Returns null if no template applies.
 */
export function injectError(
  sentence: string,
  level: string
): { errorSentence: string; errorWord: string; correction: string; explanation: string; templateId: string; category: string } | null {
  // Clean teaching notes from sentences
  const cleanSentence = sentence.replace(/\s*\([^)]*\)\s*$/g, "").trim();
  if (cleanSentence.split(/\s+/).length < 3) return null;

  const templates = getTemplatesForLevel(level);
  // Shuffle templates
  const shuffled = [...templates].sort(() => Math.random() - 0.5);

  for (const template of shuffled) {
    const result = template.apply(cleanSentence);
    if (result && result.errorSentence !== cleanSentence) {
      return {
        ...result,
        templateId: template.id,
        category: template.category,
      };
    }
  }
  return null;
}
