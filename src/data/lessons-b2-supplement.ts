import { Lesson } from "./lessons";

export const lessonsB2Supplement: Record<string, Lesson> = {
  "lb2_66": {
    id: "lb2_66",
    title: "Umwelt & Nachhaltigkeit (Environment & Sustainability)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Aspekte B2 — Umwelt als Prüfungsthema",
        explanation: "Environment and sustainability (Umwelt und Nachhaltigkeit) are among the most common B2 exam topics. You need vocabulary for discussing pollution, conservation, recycling, and environmental policy.",
        examples: [
          { de: "Der Umweltschutz ist eine globale Aufgabe.", en: "Environmental protection is a global task." },
          { de: "Wir müssen unseren ökologischen Fußabdruck reduzieren.", en: "We must reduce our ecological footprint." },
          { de: "Artensterben bedroht das Gleichgewicht der Natur.", en: "Species extinction threatens the balance of nature." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "der Umweltschutz", phonetic: "um-velt-shoots", meaning: "environmental protection", example: { de: "Umweltschutz geht uns alle an.", en: "Environmental protection concerns all of us." } },
          { word: "die Nachhaltigkeit", phonetic: "nakh-hal-tikh-kyt", meaning: "sustainability", example: { de: "Nachhaltigkeit muss in allen Bereichen umgesetzt werden.", en: "Sustainability must be implemented in all areas." } },
          { word: "der ökologische Fußabdruck", phonetic: "ö-ko-lo-gi-she foos-ap-drook", meaning: "ecological footprint", example: { de: "Wie kann man seinen ökologischen Fußabdruck verkleinern?", en: "How can one reduce their ecological footprint?" } },
          { word: "das Artensterben", phonetic: "ar-ten-shter-ben", meaning: "species extinction", example: { de: "Das Artensterben hat dramatisch zugenommen.", en: "Species extinction has increased dramatically." } },
          { word: "die Mülltrennung", phonetic: "mül-tre-noong", meaning: "waste separation / recycling sorting", example: { de: "In Deutschland ist Mülltrennung Pflicht.", en: "In Germany, waste separation is mandatory." } },
          { word: "die Abholzung", phonetic: "ap-hol-tsoong", meaning: "deforestation", example: { de: "Die Abholzung des Regenwaldes muss gestoppt werden.", en: "Deforestation of the rainforest must be stopped." } },
          { word: "die Luftverschmutzung", phonetic: "luft-fer-shmoo-tsoong", meaning: "air pollution", example: { de: "Luftverschmutzung verursacht Atemwegserkrankungen.", en: "Air pollution causes respiratory diseases." } },
          { word: "das Ökosystem", phonetic: "ö-ko-züs-tem", meaning: "ecosystem", example: { de: "Ökosysteme sind empfindlich und vernetzt.", en: "Ecosystems are sensitive and interconnected." } },
          { word: "die Einwegverpackung", phonetic: "ayn-vek-fer-pa-koong", meaning: "single-use packaging", example: { de: "Einwegverpackungen sollen verboten werden.", en: "Single-use packaging should be banned." } },
          { word: "biologisch abbaubar", phonetic: "bee-o-lo-gish ap-bow-bar", meaning: "biodegradable", example: { de: "Dieses Material ist biologisch abbaubar.", en: "This material is biodegradable." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Angesichts der Klimakrise bin ich der Überzeugung, dass jeder Einzelne seinen Beitrag zum Umweltschutz leisten muss.",
        translation: "In view of the climate crisis, I am convinced that every individual must contribute to environmental protection.",
        phonetic: "an-ge-zikhts dair klee-ma-kree-ze bin ikh dair ü-ber-tsoy-goong das yay-der ayn-tsel-ne zy-nen by-trahk tsum um-velt-shoots lys-ten mus",
        tip: "Combines 'angesichts' (B2 Genitiv preposition) + strong opinion phrase — top-level B2 sentence."
      }
    ]
  },
  "lb2_67": {
    id: "lb2_67",
    title: "Bildung & Erziehung (Education & Upbringing)",
    module: "B2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "das Schulsystem", phonetic: "shool-züs-tem", meaning: "school system", example: { de: "Das deutsche Schulsystem hat drei Schularten nach der Grundschule.", en: "The German school system has three school types after primary school." } },
          { word: "das Gymnasium", phonetic: "güm-nah-zee-um", meaning: "academic secondary school", example: { de: "Das Gymnasium führt zum Abitur.", en: "The Gymnasium leads to the Abitur (university entrance qualification)." } },
          { word: "die Hochschule", phonetic: "hokh-shoo-le", meaning: "university / college", example: { de: "An deutschen Hochschulen gibt es keine Studiengebühren.", en: "At German universities there are no tuition fees." } },
          { word: "die Weiterbildung", phonetic: "vy-ter-bil-doong", meaning: "continuing education / further training", example: { de: "Lebenslanges Lernen erfordert ständige Weiterbildung.", en: "Lifelong learning requires constant further training." } },
          { word: "der Bildungsabschluss", phonetic: "bil-doongs-ap-shloos", meaning: "educational qualification", example: { de: "Welchen Bildungsabschluss haben Sie?", en: "What educational qualification do you have?" } },
          { word: "die Chancengleichheit", phonetic: "shan-sen-glaykh-hyt", meaning: "equal opportunities", example: { de: "Chancengleichheit im Bildungssystem ist das Ziel.", en: "Equal opportunities in the education system is the goal." } },
          { word: "die Lehrplanreform", phonetic: "lair-plan-re-form", meaning: "curriculum reform", example: { de: "Die Lehrplanreform berücksichtigt digitale Kompetenzen.", en: "The curriculum reform takes digital skills into account." } },
          { word: "das duale Ausbildungssystem", phonetic: "doo-ah-le ows-bil-doongs-züs-tem", meaning: "dual vocational training system", example: { de: "Das duale Ausbildungssystem ist ein Vorbild weltweit.", en: "The dual training system is a role model worldwide." } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "What is the 'duale Ausbildungssystem'?",
        options: ["Two university degrees", "A system combining school + workplace training", "Online and offline learning", "Primary and secondary education"],
        correctIndex: 1,
        explanation: "Germany's dual system combines theoretical learning at a Berufsschule (vocational school) with practical training at a company — widely admired internationally."
      }
    ]
  },
  "lb2_68": {
    id: "lb2_68",
    title: "Gefühle & Beziehungen (Feelings & Relationships)",
    module: "B2",
    blocks: [
      {
        type: "grammar",
        title: "Aspekte B2 Kap. 9 — Mit viel Gefühl",
        explanation: "At B2, you need vocabulary to discuss complex emotional states, interpersonal relationships, and psychological dynamics — not just basic emotions like 'happy' or 'sad'.",
        examples: [
          { de: "Vertrauen ist die Grundlage jeder Beziehung.", en: "Trust is the foundation of every relationship." },
          { de: "Eifersucht kann eine Beziehung zerstören.", en: "Jealousy can destroy a relationship." },
          { de: "Er empfindet tiefe Zuneigung für sie.", en: "He feels deep affection for her." }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Zuneigung", phonetic: "tsoo-ny-goong", meaning: "affection", example: { de: "Er zeigte ihr seine Zuneigung.", en: "He showed her his affection." } },
          { word: "die Eifersucht", phonetic: "ay-fer-zookht", meaning: "jealousy", example: { de: "Eifersucht ist ein Zeichen von Unsicherheit.", en: "Jealousy is a sign of insecurity." } },
          { word: "das Vertrauen", phonetic: "fer-trow-en", meaning: "trust", example: { de: "Vertrauen muss man sich verdienen.", en: "Trust has to be earned." } },
          { word: "die Geborgenheit", phonetic: "ge-bor-gen-hyt", meaning: "security / sense of safety", example: { de: "Kinder brauchen Geborgenheit.", en: "Children need a sense of security." } },
          { word: "die Sehnsucht", phonetic: "zayn-zookht", meaning: "longing / yearning", example: { de: "Er hat Sehnsucht nach seiner Heimat.", en: "He yearns for his homeland." } },
          { word: "die Enttäuschung", phonetic: "ent-toy-shoong", meaning: "disappointment", example: { de: "Die Enttäuschung war groß.", en: "The disappointment was great." } },
          { word: "die Empathie", phonetic: "em-pa-tee", meaning: "empathy", example: { de: "Empathie ist die Fähigkeit, sich in andere hineinzuversetzen.", en: "Empathy is the ability to put oneself in others' shoes." } },
          { word: "die Versöhnung", phonetic: "fer-zö-noong", meaning: "reconciliation", example: { de: "Nach dem Streit kam es zur Versöhnung.", en: "After the argument, there was reconciliation." } },
          { word: "sich verlieben in + Akk", phonetic: "zikh fer-lee-ben in", meaning: "to fall in love with", example: { de: "Sie hat sich in ihren Kollegen verliebt.", en: "She fell in love with her colleague." } },
          { word: "einsam", phonetic: "ayn-zahm", meaning: "lonely", example: { de: "Trotz vieler Kontakte fühlt sie sich einsam.", en: "Despite many contacts, she feels lonely." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Ich bin der Meinung, dass Empathie eine der wichtigsten Eigenschaften ist, die man in zwischenmenschlichen Beziehungen braucht.",
        translation: "I am of the opinion that empathy is one of the most important qualities needed in interpersonal relationships.",
        phonetic: "ikh bin dair my-noong das em-pa-tee ay-ne dair vikh-tikh-sten ay-gen-shaf-ten ist dee man in tsvi-shen-mensh-li-khen be-tsee-oong-en browkht",
        tip: "Use 'eine der wichtigsten' (one of the most important) — a strong B2 superlative construction."
      }
    ]
  },
  "lb2_69": {
    id: "lb2_69",
    title: "Konsum & Werbung (Consumerism & Advertising)",
    module: "B2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "der Konsum", phonetic: "kon-zoom", meaning: "consumption / consumerism", example: { de: "Übermäßiger Konsum schadet der Umwelt.", en: "Excessive consumption harms the environment." } },
          { word: "die Werbung", phonetic: "ver-boong", meaning: "advertising", example: { de: "Werbung beeinflusst unser Kaufverhalten.", en: "Advertising influences our buying behavior." } },
          { word: "der Verbraucher / die Verbraucherin", phonetic: "fer-brow-kher", meaning: "consumer", example: { de: "Verbraucher haben ein Recht auf Transparenz.", en: "Consumers have a right to transparency." } },
          { word: "das Kaufverhalten", phonetic: "kowf-fer-hal-ten", meaning: "buying/purchasing behavior", example: { de: "Das Kaufverhalten hat sich durch Online-Shopping verändert.", en: "Buying behavior has changed through online shopping." } },
          { word: "die Wegwerfgesellschaft", phonetic: "vek-verf-ge-zel-shaft", meaning: "throwaway society", example: { de: "Wir leben in einer Wegwerfgesellschaft.", en: "We live in a throwaway society." } },
          { word: "der Markenname", phonetic: "mar-ken-nah-me", meaning: "brand name", example: { de: "Markennamen beeinflussen die Kaufentscheidung.", en: "Brand names influence the purchase decision." } },
          { word: "die Manipulation", phonetic: "ma-ni-poo-la-tsee-ohn", meaning: "manipulation", example: { de: "Werbung kann eine Form der Manipulation sein.", en: "Advertising can be a form of manipulation." } },
          { word: "nachhaltig einkaufen", phonetic: "nakh-hal-tikh ayn-kow-fen", meaning: "to shop sustainably", example: { de: "Immer mehr Menschen versuchen, nachhaltig einzukaufen.", en: "More and more people try to shop sustainably." } }
        ]
      },
      {
        type: "quiz-fill",
        sentenceBefore: "Wir leben in einer ",
        sentenceAfter: ", in der Produkte nach kurzem Gebrauch weggeworfen werden.",
        missingWord: "Wegwerfgesellschaft",
        translation: "We live in a throwaway society, in which products are discarded after brief use."
      }
    ]
  },
  "lb2_70": {
    id: "lb2_70",
    title: "Mobilität & Verkehr (Mobility & Transport)",
    module: "B2",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "der öffentliche Nahverkehr (ÖPNV)", phonetic: "öf-fent-li-khe nah-fer-kair", meaning: "public transport", example: { de: "Der ÖPNV muss ausgebaut werden.", en: "Public transport must be expanded." } },
          { word: "der Pendler / die Pendlerin", phonetic: "pend-ler", meaning: "commuter", example: { de: "Millionen Pendler fahren täglich zur Arbeit.", en: "Millions of commuters travel to work daily." } },
          { word: "das Verkehrsaufkommen", phonetic: "fer-kairs-owf-ko-men", meaning: "traffic volume", example: { de: "Das Verkehrsaufkommen in Großstädten ist enorm.", en: "Traffic volume in major cities is enormous." } },
          { word: "die Fahrgemeinschaft", phonetic: "far-ge-myn-shaft", meaning: "carpool", example: { de: "Fahrgemeinschaften reduzieren den CO2-Ausstoß.", en: "Carpools reduce CO2 emissions." } },
          { word: "das Carsharing", phonetic: "kar-sheh-ring", meaning: "car sharing", example: { de: "Carsharing ist in Großstädten sehr beliebt.", en: "Car sharing is very popular in major cities." } },
          { word: "die Verkehrswende", phonetic: "fer-kairs-ven-de", meaning: "transport transition", example: { de: "Die Verkehrswende erfordert massive Investitionen.", en: "The transport transition requires massive investments." } },
          { word: "der Stau", phonetic: "shtow", meaning: "traffic jam", example: { de: "Im Berufsverkehr gibt es oft stundenlangen Stau.", en: "During rush hour, there are often hours-long traffic jams." } },
          { word: "die Radinfrastruktur", phonetic: "raht-in-fra-shtrook-toor", meaning: "cycling infrastructure", example: { de: "Kopenhagen hat eine vorbildliche Radinfrastruktur.", en: "Copenhagen has exemplary cycling infrastructure." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Um das Verkehrsaufkommen zu reduzieren, sollten wir den öffentlichen Nahverkehr attraktiver gestalten und gleichzeitig die Radinfrastruktur ausbauen.",
        translation: "In order to reduce traffic volume, we should make public transport more attractive and simultaneously expand cycling infrastructure.",
        phonetic: "um das fer-kairs-owf-ko-men tsoo re-doo-tsee-ren zol-ten veer den öf-fent-li-khen nah-fer-kair at-rak-tee-ver ge-shtal-ten unt glaykh-tsy-tikh dee raht-in-fra-shtrook-toor ows-bow-en",
        tip: "Uses 'Um...zu' (purpose) + 'gleichzeitig' (simultaneously) — great B2 sentence structure."
      }
    ]
  }
};
