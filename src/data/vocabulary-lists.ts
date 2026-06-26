// ── Vocabulary Lists: Curated words organized by CEFR level and topic ──────

export interface VocabularyWord {
  word: string;
  article?: "der" | "die" | "das";
  plural?: string;
  meaning: string;
  example: string;
  exampleTranslation: string;
  collocations?: string[];
  level: string;
  topic: string;
}

export interface VocabularyTopic {
  id: string;
  name: string;
  nameDe: string;
  level: string;
  words: VocabularyWord[];
}

export const vocabularyTopics: VocabularyTopic[] = [
  // ── A1 Topics ──────────────────────────────────────────
  {
    id: "a1-greetings",
    name: "Greetings & Basics",
    nameDe: "Begrüßung & Grundlagen",
    level: "A1",
    words: [
      { word: "Guten Morgen", meaning: "Good morning", example: "Guten Morgen, wie geht es Ihnen?", exampleTranslation: "Good morning, how are you?", level: "A1", topic: "greetings" },
      { word: "Auf Wiedersehen", meaning: "Goodbye (formal)", example: "Auf Wiedersehen, bis morgen!", exampleTranslation: "Goodbye, see you tomorrow!", level: "A1", topic: "greetings" },
      { word: "Tschüss", meaning: "Bye (informal)", example: "Tschüss, bis bald!", exampleTranslation: "Bye, see you soon!", level: "A1", topic: "greetings" },
      { word: "bitte", meaning: "please / you're welcome", example: "Kann ich bitte einen Kaffee haben?", exampleTranslation: "Can I please have a coffee?", level: "A1", topic: "greetings" },
      { word: "danke", meaning: "thank you", example: "Danke für die Hilfe!", exampleTranslation: "Thanks for the help!", level: "A1", topic: "greetings" },
      { word: "Entschuldigung", meaning: "excuse me / sorry", example: "Entschuldigung, wo ist der Bahnhof?", exampleTranslation: "Excuse me, where is the train station?", level: "A1", topic: "greetings" },
      { word: "ja", meaning: "yes", example: "Ja, das stimmt.", exampleTranslation: "Yes, that's right.", level: "A1", topic: "greetings" },
      { word: "nein", meaning: "no", example: "Nein, das ist falsch.", exampleTranslation: "No, that is wrong.", level: "A1", topic: "greetings" },
      { word: "vielleicht", meaning: "maybe", example: "Vielleicht komme ich morgen.", exampleTranslation: "Maybe I'll come tomorrow.", level: "A1", topic: "greetings" },
      { word: "natürlich", meaning: "of course", example: "Natürlich helfe ich dir!", exampleTranslation: "Of course I'll help you!", level: "A1", topic: "greetings" },
    ],
  },
  {
    id: "a1-family",
    name: "Family",
    nameDe: "Familie",
    level: "A1",
    words: [
      { word: "Mutter", article: "die", plural: "Mütter", meaning: "mother", example: "Meine Mutter heißt Anna.", exampleTranslation: "My mother's name is Anna.", level: "A1", topic: "family" },
      { word: "Vater", article: "der", plural: "Väter", meaning: "father", example: "Mein Vater arbeitet als Lehrer.", exampleTranslation: "My father works as a teacher.", level: "A1", topic: "family" },
      { word: "Bruder", article: "der", plural: "Brüder", meaning: "brother", example: "Ich habe einen Bruder.", exampleTranslation: "I have a brother.", level: "A1", topic: "family" },
      { word: "Schwester", article: "die", plural: "Schwestern", meaning: "sister", example: "Meine Schwester ist 15 Jahre alt.", exampleTranslation: "My sister is 15 years old.", level: "A1", topic: "family" },
      { word: "Kind", article: "das", plural: "Kinder", meaning: "child", example: "Das Kind spielt im Garten.", exampleTranslation: "The child plays in the garden.", level: "A1", topic: "family" },
      { word: "Großvater", article: "der", plural: "Großväter", meaning: "grandfather", example: "Mein Großvater ist 80 Jahre alt.", exampleTranslation: "My grandfather is 80 years old.", level: "A1", topic: "family" },
      { word: "Großmutter", article: "die", plural: "Großmütter", meaning: "grandmother", example: "Meine Großmutter kocht sehr gut.", exampleTranslation: "My grandmother cooks very well.", level: "A1", topic: "family" },
      { word: "Ehemann", article: "der", plural: "Ehemänner", meaning: "husband", example: "Ihr Ehemann kommt aus Berlin.", exampleTranslation: "Her husband comes from Berlin.", level: "A1", topic: "family" },
      { word: "Ehefrau", article: "die", plural: "Ehefrauen", meaning: "wife", example: "Seine Ehefrau ist Ärztin.", exampleTranslation: "His wife is a doctor.", level: "A1", topic: "family" },
      { word: "Eltern", meaning: "parents", example: "Meine Eltern wohnen in Hamburg.", exampleTranslation: "My parents live in Hamburg.", level: "A1", topic: "family" },
    ],
  },
  {
    id: "a1-food",
    name: "Food & Drink",
    nameDe: "Essen & Trinken",
    level: "A1",
    words: [
      { word: "Brot", article: "das", plural: "Brote", meaning: "bread", example: "Ich esse Brot zum Frühstück.", exampleTranslation: "I eat bread for breakfast.", level: "A1", topic: "food" },
      { word: "Wasser", article: "das", meaning: "water", example: "Kann ich ein Glas Wasser haben?", exampleTranslation: "Can I have a glass of water?", level: "A1", topic: "food" },
      { word: "Kaffee", article: "der", meaning: "coffee", example: "Ich trinke morgens immer Kaffee.", exampleTranslation: "I always drink coffee in the morning.", level: "A1", topic: "food" },
      { word: "Fleisch", article: "das", meaning: "meat", example: "Ich esse kein Fleisch.", exampleTranslation: "I don't eat meat.", level: "A1", topic: "food" },
      { word: "Gemüse", article: "das", meaning: "vegetables", example: "Gemüse ist gesund.", exampleTranslation: "Vegetables are healthy.", level: "A1", topic: "food" },
      { word: "Obst", article: "das", meaning: "fruit", example: "Ich kaufe frisches Obst.", exampleTranslation: "I buy fresh fruit.", level: "A1", topic: "food" },
      { word: "Reis", article: "der", meaning: "rice", example: "Wir essen heute Reis mit Gemüse.", exampleTranslation: "We're eating rice with vegetables today.", level: "A1", topic: "food" },
      { word: "Suppe", article: "die", plural: "Suppen", meaning: "soup", example: "Die Suppe ist heiß.", exampleTranslation: "The soup is hot.", level: "A1", topic: "food" },
      { word: "Kuchen", article: "der", plural: "Kuchen", meaning: "cake", example: "Der Kuchen schmeckt sehr gut.", exampleTranslation: "The cake tastes very good.", level: "A1", topic: "food" },
      { word: "Tee", article: "der", meaning: "tea", example: "Möchtest du Tee oder Kaffee?", exampleTranslation: "Would you like tea or coffee?", level: "A1", topic: "food" },
    ],
  },

  // ── A2 Topics ──────────────────────────────────────────
  {
    id: "a2-travel",
    name: "Travel",
    nameDe: "Reisen",
    level: "A2",
    words: [
      { word: "Flughafen", article: "der", plural: "Flughäfen", meaning: "airport", example: "Der Flughafen ist weit vom Zentrum.", exampleTranslation: "The airport is far from the center.", level: "A2", topic: "travel", collocations: ["am Flughafen ankommen"] },
      { word: "Gepäck", article: "das", meaning: "luggage", example: "Mein Gepäck ist noch nicht da.", exampleTranslation: "My luggage hasn't arrived yet.", level: "A2", topic: "travel" },
      { word: "Reisepass", article: "der", plural: "Reisepässe", meaning: "passport", example: "Vergiss deinen Reisepass nicht!", exampleTranslation: "Don't forget your passport!", level: "A2", topic: "travel" },
      { word: "Unterkunft", article: "die", plural: "Unterkünfte", meaning: "accommodation", example: "Wir suchen eine günstige Unterkunft.", exampleTranslation: "We're looking for affordable accommodation.", level: "A2", topic: "travel" },
      { word: "Sehenswürdigkeit", article: "die", plural: "Sehenswürdigkeiten", meaning: "sight/attraction", example: "Welche Sehenswürdigkeiten gibt es hier?", exampleTranslation: "What sights are there here?", level: "A2", topic: "travel" },
      { word: "umsteigen", meaning: "to change (trains/buses)", example: "In München müssen Sie umsteigen.", exampleTranslation: "In Munich you have to change.", level: "A2", topic: "travel" },
      { word: "Verspätung", article: "die", plural: "Verspätungen", meaning: "delay", example: "Der Zug hat 20 Minuten Verspätung.", exampleTranslation: "The train has a 20-minute delay.", level: "A2", topic: "travel", collocations: ["Verspätung haben"] },
      { word: "buchen", meaning: "to book", example: "Ich möchte ein Zimmer buchen.", exampleTranslation: "I'd like to book a room.", level: "A2", topic: "travel", collocations: ["einen Flug buchen", "ein Hotel buchen"] },
      { word: "Abfahrt", article: "die", plural: "Abfahrten", meaning: "departure", example: "Die Abfahrt ist um 8:30 Uhr.", exampleTranslation: "The departure is at 8:30.", level: "A2", topic: "travel" },
      { word: "Ankunft", article: "die", plural: "Ankünfte", meaning: "arrival", example: "Die Ankunft in Berlin ist um 12 Uhr.", exampleTranslation: "Arrival in Berlin is at 12.", level: "A2", topic: "travel" },
    ],
  },
  {
    id: "a2-health",
    name: "Health",
    nameDe: "Gesundheit",
    level: "A2",
    words: [
      { word: "Arzt", article: "der", plural: "Ärzte", meaning: "doctor", example: "Ich muss zum Arzt gehen.", exampleTranslation: "I have to go to the doctor.", level: "A2", topic: "health", collocations: ["zum Arzt gehen", "einen Termin beim Arzt haben"] },
      { word: "Apotheke", article: "die", plural: "Apotheken", meaning: "pharmacy", example: "Die Apotheke ist um die Ecke.", exampleTranslation: "The pharmacy is around the corner.", level: "A2", topic: "health" },
      { word: "Tablette", article: "die", plural: "Tabletten", meaning: "pill/tablet", example: "Nehmen Sie drei Tabletten pro Tag.", exampleTranslation: "Take three tablets per day.", level: "A2", topic: "health", collocations: ["Tabletten nehmen", "Tabletten verschreiben"] },
      { word: "Husten", article: "der", meaning: "cough", example: "Ich habe einen starken Husten.", exampleTranslation: "I have a bad cough.", level: "A2", topic: "health" },
      { word: "Krankenhaus", article: "das", plural: "Krankenhäuser", meaning: "hospital", example: "Er liegt im Krankenhaus.", exampleTranslation: "He is in the hospital.", level: "A2", topic: "health" },
      { word: "gesund", meaning: "healthy", example: "Obst essen ist gesund.", exampleTranslation: "Eating fruit is healthy.", level: "A2", topic: "health" },
      { word: "Schmerzen", meaning: "pain", example: "Ich habe Schmerzen im Rücken.", exampleTranslation: "I have pain in my back.", level: "A2", topic: "health", collocations: ["Schmerzen haben", "Kopfschmerzen", "Bauchschmerzen"] },
      { word: "Krankschreibung", article: "die", meaning: "sick note", example: "Ich brauche eine Krankschreibung.", exampleTranslation: "I need a sick note.", level: "A2", topic: "health" },
      { word: "Versicherung", article: "die", plural: "Versicherungen", meaning: "insurance", example: "Haben Sie eine Krankenversicherung?", exampleTranslation: "Do you have health insurance?", level: "A2", topic: "health" },
      { word: "Rezept", article: "das", plural: "Rezepte", meaning: "prescription", example: "Der Arzt hat mir ein Rezept gegeben.", exampleTranslation: "The doctor gave me a prescription.", level: "A2", topic: "health" },
    ],
  },

  // ── B1 Topics ──────────────────────────────────────────
  {
    id: "b1-environment",
    name: "Environment",
    nameDe: "Umwelt",
    level: "B1",
    words: [
      { word: "Umweltschutz", article: "der", meaning: "environmental protection", example: "Umweltschutz ist heute wichtiger denn je.", exampleTranslation: "Environmental protection is more important than ever today.", level: "B1", topic: "environment" },
      { word: "Klimawandel", article: "der", meaning: "climate change", example: "Der Klimawandel betrifft alle Länder.", exampleTranslation: "Climate change affects all countries.", level: "B1", topic: "environment" },
      { word: "erneuerbar", meaning: "renewable", example: "Erneuerbare Energien sind die Zukunft.", exampleTranslation: "Renewable energies are the future.", level: "B1", topic: "environment", collocations: ["erneuerbare Energien"] },
      { word: "Abfall", article: "der", plural: "Abfälle", meaning: "waste/rubbish", example: "Bitte den Abfall trennen!", exampleTranslation: "Please separate the waste!", level: "B1", topic: "environment", collocations: ["Abfall trennen", "Abfall vermeiden"] },
      { word: "Verschmutzung", article: "die", meaning: "pollution", example: "Die Verschmutzung der Flüsse ist ein großes Problem.", exampleTranslation: "River pollution is a big problem.", level: "B1", topic: "environment" },
      { word: "nachhaltig", meaning: "sustainable", example: "Wir brauchen nachhaltige Lösungen.", exampleTranslation: "We need sustainable solutions.", level: "B1", topic: "environment", collocations: ["nachhaltige Entwicklung"] },
      { word: "Treibhauseffekt", article: "der", meaning: "greenhouse effect", example: "CO₂ verstärkt den Treibhauseffekt.", exampleTranslation: "CO₂ intensifies the greenhouse effect.", level: "B1", topic: "environment" },
      { word: "Artensterben", article: "das", meaning: "species extinction", example: "Das Artensterben beschleunigt sich.", exampleTranslation: "Species extinction is accelerating.", level: "B1", topic: "environment" },
      { word: "Recycling", article: "das", meaning: "recycling", example: "Recycling spart Rohstoffe.", exampleTranslation: "Recycling saves raw materials.", level: "B1", topic: "environment" },
      { word: "Verbrauch", article: "der", meaning: "consumption", example: "Wir müssen unseren Energieverbrauch senken.", exampleTranslation: "We need to reduce our energy consumption.", level: "B1", topic: "environment", collocations: ["Energieverbrauch", "Wasserverbrauch"] },
    ],
  },
  {
    id: "b1-work",
    name: "Work & Career",
    nameDe: "Arbeit & Beruf",
    level: "B1",
    words: [
      { word: "Bewerbung", article: "die", plural: "Bewerbungen", meaning: "job application", example: "Ich schreibe gerade eine Bewerbung.", exampleTranslation: "I'm writing a job application right now.", level: "B1", topic: "work", collocations: ["eine Bewerbung schreiben", "sich bewerben um"] },
      { word: "Vorstellungsgespräch", article: "das", plural: "Vorstellungsgespräche", meaning: "job interview", example: "Morgen habe ich ein Vorstellungsgespräch.", exampleTranslation: "Tomorrow I have a job interview.", level: "B1", topic: "work" },
      { word: "Gehalt", article: "das", plural: "Gehälter", meaning: "salary", example: "Das Gehalt wird am Ende des Monats gezahlt.", exampleTranslation: "The salary is paid at the end of the month.", level: "B1", topic: "work" },
      { word: "Überstunden", meaning: "overtime", example: "Ich mache diese Woche viele Überstunden.", exampleTranslation: "I'm doing a lot of overtime this week.", level: "B1", topic: "work", collocations: ["Überstunden machen"] },
      { word: "kündigen", meaning: "to resign / to fire", example: "Er hat seine Stelle gekündigt.", exampleTranslation: "He resigned from his job.", level: "B1", topic: "work", collocations: ["eine Stelle kündigen", "jemandem kündigen"] },
      { word: "Kollege", article: "der", plural: "Kollegen", meaning: "colleague", example: "Mein Kollege hilft mir immer.", exampleTranslation: "My colleague always helps me.", level: "B1", topic: "work" },
      { word: "Arbeitsvertrag", article: "der", plural: "Arbeitsverträge", meaning: "employment contract", example: "Lesen Sie den Arbeitsvertrag sorgfältig.", exampleTranslation: "Read the employment contract carefully.", level: "B1", topic: "work" },
      { word: "Praktikum", article: "das", plural: "Praktika", meaning: "internship", example: "Ich mache ein Praktikum bei Siemens.", exampleTranslation: "I'm doing an internship at Siemens.", level: "B1", topic: "work", collocations: ["ein Praktikum machen"] },
      { word: "Teilzeit", article: "die", meaning: "part-time", example: "Sie arbeitet in Teilzeit.", exampleTranslation: "She works part-time.", level: "B1", topic: "work" },
      { word: "Selbstständig", meaning: "self-employed", example: "Er ist seit 5 Jahren selbstständig.", exampleTranslation: "He's been self-employed for 5 years.", level: "B1", topic: "work" },
    ],
  },

  // ── B2 Topics ──────────────────────────────────────────
  {
    id: "b2-politics",
    name: "Politics & Society",
    nameDe: "Politik & Gesellschaft",
    level: "B2",
    words: [
      { word: "Wahlrecht", article: "das", meaning: "right to vote / suffrage", example: "Das Wahlrecht ab 16 wird diskutiert.", exampleTranslation: "Voting rights from age 16 is being discussed.", level: "B2", topic: "politics" },
      { word: "Grundgesetz", article: "das", meaning: "Basic Law (German constitution)", example: "Artikel 1 des Grundgesetzes schützt die Menschenwürde.", exampleTranslation: "Article 1 of the Basic Law protects human dignity.", level: "B2", topic: "politics" },
      { word: "Bundestag", article: "der", meaning: "German parliament", example: "Der Bundestag hat das Gesetz verabschiedet.", exampleTranslation: "The Bundestag passed the law.", level: "B2", topic: "politics", collocations: ["im Bundestag abstimmen"] },
      { word: "Koalition", article: "die", plural: "Koalitionen", meaning: "coalition", example: "Die Koalitionsverhandlungen dauern Wochen.", exampleTranslation: "Coalition negotiations take weeks.", level: "B2", topic: "politics" },
      { word: "Gleichberechtigung", article: "die", meaning: "equal rights / equality", example: "Gleichberechtigung ist ein Grundrecht.", exampleTranslation: "Equal rights are a fundamental right.", level: "B2", topic: "politics" },
      { word: "Flüchtling", article: "der", plural: "Flüchtlinge", meaning: "refugee", example: "Deutschland hat viele Flüchtlinge aufgenommen.", exampleTranslation: "Germany has taken in many refugees.", level: "B2", topic: "politics" },
      { word: "Steuern", meaning: "taxes", example: "Die Steuern sind in Deutschland relativ hoch.", exampleTranslation: "Taxes in Germany are relatively high.", level: "B2", topic: "politics", collocations: ["Steuern zahlen", "Steuern erhöhen"] },
      { word: "Bürgerinitiative", article: "die", plural: "Bürgerinitiativen", meaning: "citizens' initiative", example: "Die Bürgerinitiative sammelt Unterschriften.", exampleTranslation: "The citizens' initiative is collecting signatures.", level: "B2", topic: "politics" },
      { word: "Lobbyismus", article: "der", meaning: "lobbying", example: "Lobbyismus beeinflusst die Politik.", exampleTranslation: "Lobbying influences politics.", level: "B2", topic: "politics" },
      { word: "Meinungsfreiheit", article: "die", meaning: "freedom of expression", example: "Meinungsfreiheit hat auch Grenzen.", exampleTranslation: "Freedom of expression also has limits.", level: "B2", topic: "politics" },
    ],
  },
  {
    id: "b2-science",
    name: "Science & Technology",
    nameDe: "Wissenschaft & Technik",
    level: "B2",
    words: [
      { word: "Forschung", article: "die", meaning: "research", example: "Die Forschung hat große Fortschritte gemacht.", exampleTranslation: "Research has made great progress.", level: "B2", topic: "science", collocations: ["Forschung betreiben", "Grundlagenforschung"] },
      { word: "Künstliche Intelligenz", article: "die", meaning: "artificial intelligence", example: "Künstliche Intelligenz verändert viele Berufe.", exampleTranslation: "AI is changing many professions.", level: "B2", topic: "science" },
      { word: "Algorithmus", article: "der", plural: "Algorithmen", meaning: "algorithm", example: "Der Algorithmus bestimmt, was du siehst.", exampleTranslation: "The algorithm determines what you see.", level: "B2", topic: "science" },
      { word: "Studie", article: "die", plural: "Studien", meaning: "study (research)", example: "Eine aktuelle Studie zeigt, dass...", exampleTranslation: "A recent study shows that...", level: "B2", topic: "science", collocations: ["eine Studie durchführen", "laut einer Studie"] },
      { word: "Erkenntnis", article: "die", plural: "Erkenntnisse", meaning: "finding / insight", example: "Neue Erkenntnisse widersprechen der alten Theorie.", exampleTranslation: "New findings contradict the old theory.", level: "B2", topic: "science", collocations: ["zu der Erkenntnis kommen"] },
      { word: "Datenschutz", article: "der", meaning: "data protection", example: "Datenschutz ist in der EU streng geregelt.", exampleTranslation: "Data protection is strictly regulated in the EU.", level: "B2", topic: "science" },
      { word: "Quantencomputer", article: "der", plural: "Quantencomputer", meaning: "quantum computer", example: "Quantencomputer könnten die Verschlüsselung brechen.", exampleTranslation: "Quantum computers could break encryption.", level: "B2", topic: "science" },
      { word: "Hypothese", article: "die", plural: "Hypothesen", meaning: "hypothesis", example: "Die Hypothese muss noch überprüft werden.", exampleTranslation: "The hypothesis still needs to be tested.", level: "B2", topic: "science", collocations: ["eine Hypothese aufstellen"] },
      { word: "Experiment", article: "das", plural: "Experimente", meaning: "experiment", example: "Das Experiment hat das Ergebnis bestätigt.", exampleTranslation: "The experiment confirmed the result.", level: "B2", topic: "science", collocations: ["ein Experiment durchführen"] },
      { word: "Gutachten", article: "das", plural: "Gutachten", meaning: "expert report/opinion", example: "Das Gutachten empfiehlt weitere Untersuchungen.", exampleTranslation: "The expert report recommends further investigations.", level: "B2", topic: "science" },
    ],
  },

  // ── C1 Topics ──────────────────────────────────────────
  {
    id: "c1-academic",
    name: "Academic & Philosophy",
    nameDe: "Akademisch & Philosophie",
    level: "C1",
    words: [
      { word: "Abhandlung", article: "die", plural: "Abhandlungen", meaning: "treatise / academic paper", example: "Seine Abhandlung über Ethik wurde viel zitiert.", exampleTranslation: "His treatise on ethics was widely cited.", level: "C1", topic: "academic" },
      { word: "Paradigmenwechsel", article: "der", meaning: "paradigm shift", example: "Die Digitalisierung bewirkt einen Paradigmenwechsel.", exampleTranslation: "Digitalization is causing a paradigm shift.", level: "C1", topic: "academic" },
      { word: "implizit", meaning: "implicit", example: "Die Kritik war implizit, aber deutlich.", exampleTranslation: "The criticism was implicit but clear.", level: "C1", topic: "academic" },
      { word: "Korrelation", article: "die", plural: "Korrelationen", meaning: "correlation", example: "Korrelation bedeutet nicht Kausalität.", exampleTranslation: "Correlation does not mean causation.", level: "C1", topic: "academic" },
      { word: "Diskurs", article: "der", plural: "Diskurse", meaning: "discourse", example: "Der öffentliche Diskurs wird immer polarisierter.", exampleTranslation: "Public discourse is becoming increasingly polarized.", level: "C1", topic: "academic" },
      { word: "Ambivalenz", article: "die", meaning: "ambivalence", example: "Seine Ambivalenz gegenüber der Moderne prägt sein Werk.", exampleTranslation: "His ambivalence toward modernity characterizes his work.", level: "C1", topic: "academic" },
      { word: "obsolet", meaning: "obsolete", example: "Diese Methode ist inzwischen obsolet.", exampleTranslation: "This method is now obsolete.", level: "C1", topic: "academic" },
      { word: "Prämisse", article: "die", plural: "Prämissen", meaning: "premise", example: "Die Prämisse des Arguments ist fragwürdig.", exampleTranslation: "The premise of the argument is questionable.", level: "C1", topic: "academic" },
      { word: "kausal", meaning: "causal", example: "Ein kausaler Zusammenhang konnte nicht nachgewiesen werden.", exampleTranslation: "A causal connection could not be established.", level: "C1", topic: "academic", collocations: ["kausaler Zusammenhang"] },
      { word: "Synthese", article: "die", plural: "Synthesen", meaning: "synthesis", example: "Die Synthese beider Ansätze ist vielversprechend.", exampleTranslation: "The synthesis of both approaches is promising.", level: "C1", topic: "academic" },
    ],
  },
  {
    id: "c1-bureaucracy",
    name: "Bureaucracy & Administration",
    nameDe: "Bürokratie & Verwaltung",
    level: "C1",
    words: [
      { word: "Antragstellung", article: "die", meaning: "application process", example: "Die Antragstellung ist sehr aufwendig.", exampleTranslation: "The application process is very time-consuming.", level: "C1", topic: "bureaucracy", collocations: ["einen Antrag stellen"] },
      { word: "Bescheid", article: "der", plural: "Bescheide", meaning: "official notice/decision", example: "Ich warte noch auf den Bescheid.", exampleTranslation: "I'm still waiting for the official notice.", level: "C1", topic: "bureaucracy", collocations: ["einen Bescheid erhalten", "Bescheid geben"] },
      { word: "Zuständigkeit", article: "die", meaning: "jurisdiction / responsibility", example: "Das fällt nicht in meine Zuständigkeit.", exampleTranslation: "That doesn't fall under my responsibility.", level: "C1", topic: "bureaucracy" },
      { word: "Genehmigung", article: "die", plural: "Genehmigungen", meaning: "permission / permit", example: "Die Baugenehmigung wurde erteilt.", exampleTranslation: "The building permit was granted.", level: "C1", topic: "bureaucracy", collocations: ["eine Genehmigung erteilen", "eine Genehmigung beantragen"] },
      { word: "Verordnung", article: "die", plural: "Verordnungen", meaning: "regulation / ordinance", example: "Die neue Verordnung tritt am 1. Januar in Kraft.", exampleTranslation: "The new regulation takes effect on January 1st.", level: "C1", topic: "bureaucracy", collocations: ["in Kraft treten"] },
      { word: "Sachbearbeiter", article: "der", plural: "Sachbearbeiter", meaning: "case worker / clerk", example: "Der Sachbearbeiter bearbeitet Ihren Fall.", exampleTranslation: "The case worker is handling your case.", level: "C1", topic: "bureaucracy" },
      { word: "Einspruch", article: "der", plural: "Einsprüche", meaning: "objection / appeal", example: "Gegen den Bescheid kann Einspruch erhoben werden.", exampleTranslation: "An objection can be raised against the decision.", level: "C1", topic: "bureaucracy", collocations: ["Einspruch erheben", "Einspruch einlegen"] },
      { word: "Frist", article: "die", plural: "Fristen", meaning: "deadline / time limit", example: "Die Frist für die Abgabe endet morgen.", exampleTranslation: "The deadline for submission ends tomorrow.", level: "C1", topic: "bureaucracy", collocations: ["eine Frist einhalten", "eine Frist versäumen"] },
    ],
  },

  // ── C2 Topics ──────────────────────────────────────────
  {
    id: "c2-literary",
    name: "Literary & Elevated",
    nameDe: "Literarisch & Gehoben",
    level: "C2",
    words: [
      { word: "anmuten", meaning: "to appear / to seem (literary)", example: "Das mutet seltsam an.", exampleTranslation: "That seems strange.", level: "C2", topic: "literary" },
      { word: "erörtern", meaning: "to discuss / to examine (formal)", example: "Wir müssen diese Frage eingehend erörtern.", exampleTranslation: "We need to examine this question thoroughly.", level: "C2", topic: "literary", collocations: ["eine Frage erörtern", "ein Problem erörtern"] },
      { word: "unweigerlich", meaning: "inevitably / invariably", example: "Dies führt unweigerlich zu Konflikten.", exampleTranslation: "This inevitably leads to conflicts.", level: "C2", topic: "literary" },
      { word: "innewohnen", meaning: "to be inherent in", example: "Dem System wohnt eine Ungerechtigkeit inne.", exampleTranslation: "An injustice is inherent in the system.", level: "C2", topic: "literary" },
      { word: "verheißen", meaning: "to promise / to herald (literary)", example: "Die Zeichen verheißen nichts Gutes.", exampleTranslation: "The signs don't bode well.", level: "C2", topic: "literary" },
      { word: "widerspiegeln", meaning: "to reflect / to mirror", example: "Der Roman widerspiegelt die Gesellschaft seiner Zeit.", exampleTranslation: "The novel reflects the society of its time.", level: "C2", topic: "literary" },
      { word: "befremdlich", meaning: "disconcerting / strange", example: "Sein Verhalten war äußerst befremdlich.", exampleTranslation: "His behavior was extremely disconcerting.", level: "C2", topic: "literary" },
      { word: "sich gebärden", meaning: "to behave / to act (often negatively)", example: "Er gebärdete sich wie ein Verrückter.", exampleTranslation: "He was acting like a madman.", level: "C2", topic: "literary" },
      { word: "sinnieren", meaning: "to muse / to ponder", example: "Sie sinnierte über den Sinn des Lebens.", exampleTranslation: "She mused about the meaning of life.", level: "C2", topic: "literary" },
      { word: "unumwunden", meaning: "frankly / without reservation", example: "Er sagte unumwunden seine Meinung.", exampleTranslation: "He stated his opinion frankly.", level: "C2", topic: "literary" },
    ],
  },
  {
    id: "c2-idiomatic",
    name: "Idiomatic & Register",
    nameDe: "Idiomatisch & Register",
    level: "C2",
    words: [
      { word: "gang und gäbe", meaning: "common practice / par for the course", example: "Das ist in Deutschland gang und gäbe.", exampleTranslation: "That's common practice in Germany.", level: "C2", topic: "idiomatic" },
      { word: "ausschlaggebend", meaning: "decisive / determining", example: "Der ausschlaggebende Faktor war der Preis.", exampleTranslation: "The decisive factor was the price.", level: "C2", topic: "idiomatic" },
      { word: "an den Tag legen", meaning: "to display / to exhibit", example: "Er legte großes Engagement an den Tag.", exampleTranslation: "He displayed great commitment.", level: "C2", topic: "idiomatic" },
      { word: "zumal", meaning: "especially since / all the more so", example: "Das ist problematisch, zumal keine Alternative besteht.", exampleTranslation: "That's problematic, especially since no alternative exists.", level: "C2", topic: "idiomatic" },
      { word: "in Anbetracht", meaning: "in view of / considering", example: "In Anbetracht der Umstände war die Reaktion angemessen.", exampleTranslation: "In view of the circumstances, the reaction was appropriate.", level: "C2", topic: "idiomatic" },
      { word: "Sachverhalt", article: "der", plural: "Sachverhalte", meaning: "facts of the matter / state of affairs", example: "Der Sachverhalt ist komplizierter als gedacht.", exampleTranslation: "The state of affairs is more complicated than thought.", level: "C2", topic: "idiomatic" },
      { word: "unter Umständen", meaning: "under certain circumstances / possibly", example: "Das kann unter Umständen zu Problemen führen.", exampleTranslation: "That can possibly lead to problems.", level: "C2", topic: "idiomatic" },
      { word: "herausragend", meaning: "outstanding / exceptional", example: "Ihre Leistung war herausragend.", exampleTranslation: "Her performance was outstanding.", level: "C2", topic: "idiomatic" },
    ],
  },
];

// ── Helper functions ──────────────────────────────────────
export function getVocabByLevel(level: string): VocabularyTopic[] {
  return vocabularyTopics.filter(t => t.level === level);
}

export function getAllWords(): VocabularyWord[] {
  return vocabularyTopics.flatMap(t => t.words);
}

export function getWordsByTopic(topic: string): VocabularyWord[] {
  return vocabularyTopics.filter(t => t.words[0]?.topic === topic).flatMap(t => t.words);
}
