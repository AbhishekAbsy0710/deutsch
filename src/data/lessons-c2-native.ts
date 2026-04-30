import { Lesson } from "./lessons";

export const lessonsC2Native: Record<string, Lesson> = {
  "c2-n1": {
    id: "c2-n1",
    title: "Interjektionen (The Sounds Germans Make)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Filling the Silence",
        explanation: "Native speakers use specific sounds to express complex emotions without using actual words. If you use these, you sound instantly native.",
        examples: [
          { de: "Tja...", en: "Well... / What can you do? (Expresses resignation or mild schadenfreude)" },
          { de: "Naja...", en: "Well... / I guess... (Expresses doubt or hesitation)" },
          { de: "Ach so!", en: "Oh, I see! / Oh, I get it now! (The ultimate lightbulb moment sound)" },
          { de: "Hä?", en: "Huh? / What? (Very colloquial way to say 'Ich verstehe nicht')" },
        ]
      }
    ]
  },
  "c2-n2": {
    id: "c2-n2",
    title: "Umgangssprache & Jugendsprache (Slang)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Street German",
        explanation: "Textbooks never teach you how Germans actually speak on the street. You must understand slang to survive in a German city.",
        examples: [
          { de: "krass", en: "crazy / intense / extreme (Can be good or bad)" },
          { de: "geil", en: "awesome / cool (Literally means 'horny', but used constantly for 'great')" },
          { de: "Alter / Digga", en: "Dude / Bro" },
          { de: "Läuft bei dir.", en: "Things are going well for you. / You're doing great." },
        ]
      }
    ]
  },
  "c2-n3": {
    id: "c2-n3",
    title: "Chat-Sprache (Texting Abbreviations)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "WhatsApp in German",
        explanation: "When texting, Germans use specific acronyms that you won't find in formal abbreviation dictionaries.",
        examples: [
          { de: "LG (Liebe Grüße)", en: "Kind regards (Used constantly at the end of texts/emails)" },
          { de: "WE (Wochenende)", en: "Weekend (Schönes WE!)" },
          { de: "mMn (meiner Meinung nach)", en: "IMO (in my opinion)" },
          { de: "vllt (vielleicht)", en: "maybe / perhaps" },
        ]
      }
    ]
  },
  "c2-n4": {
    id: "c2-n4",
    title: "Onomatopoesie (Animal Sounds & Noises)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "German Animals",
        explanation: "Animals speak German too! Animal noises are completely different in German and are essential for cultural fluency, reading comics, or talking to children.",
        examples: [
          { de: "Wau-Wau / Kläff", en: "Woof (Dog)" },
          { de: "Miau / Schnurr", en: "Meow / Purr (Cat)" },
          { de: "Kikeriki", en: "Cock-a-doodle-doo (Rooster)" },
          { de: "I-aah", en: "Hee-haw (Donkey)" },
        ]
      },
      {
        type: "grammar",
        title: "Human Noises",
        explanation: "Humans also make universally understood sounds, but they are spelled and pronounced differently in German.",
        examples: [
          { de: "Aua / Autsch", en: "Ouch!" },
          { de: "Puh", en: "Phew (Relief or exhaustion)" },
          { de: "Hatschi", en: "Achoo (Sneezing)" },
        ]
      }
    ]
  },
  "c2-n5": {
    id: "c2-n5",
    title: "Alltags-Fluchen (Everyday Frustrations)",
    module: "C1",
    blocks: [
      {
        type: "grammar",
        title: "Mild Swearing",
        explanation: "Sometimes things go wrong. Here is how Germans express frustration without being overly offensive.",
        examples: [
          { de: "So ein Mist!", en: "Darn it! / Crap! (Literally: Such manure!)" },
          { de: "Quatsch!", en: "Nonsense! / Bullshit!" },
          { de: "Spinnst du?", en: "Are you crazy? / Are you out of your mind?" },
          { de: "So ein Pech!", en: "What bad luck!" },
        ]
      }
    ]
  }
};
