export interface WritingPrompt {
  id: string;
  level: string;
  category: "email" | "essay" | "letter" | "creative" | "exam";
  title: string;
  titleDe: string;
  prompt: string;
  hints: string[];
  minWords: number;
  maxWords: number;
  keywords?: string[];
}

export const writingPrompts: WritingPrompt[] = [
  // ── A1 ──────────────────────────────────────────────────
  {
    id: "a1-intro",
    level: "A1",
    category: "email",
    title: "Introduce Yourself",
    titleDe: "Stell dich vor",
    prompt: "Write a short email to a new pen pal. Tell them your name, where you come from, what you do, and what hobbies you have.",
    hints: ["Use 'Ich heiße...', 'Ich komme aus...', 'Ich bin... Jahre alt'", "Mention 1-2 hobbies with 'Ich spiele gern...' or 'Ich lese gern...'"],
    minWords: 30,
    maxWords: 80,
    keywords: ["heiße", "komme", "wohne", "gern"],
  },
  {
    id: "a1-daily",
    level: "A1",
    category: "email",
    title: "My Day",
    titleDe: "Mein Tag",
    prompt: "Write to a friend about what you did today. Mention at least 3 activities and the times.",
    hints: ["Use time expressions: 'Um 8 Uhr...', 'Dann...', 'Am Abend...'", "Use simple past or present tense"],
    minWords: 30,
    maxWords: 80,
    keywords: ["Uhr", "dann", "Abend", "Morgen"],
  },
  {
    id: "a1-family",
    level: "A1",
    category: "creative",
    title: "My Family",
    titleDe: "Meine Familie",
    prompt: "Describe your family. Who are the members? What do they look like? What do they do?",
    hints: ["Use possessive pronouns: 'mein Bruder', 'meine Mutter'", "Describe with 'Er/Sie ist...', 'Er/Sie hat...'"],
    minWords: 40,
    maxWords: 100,
    keywords: ["Mutter", "Vater", "Bruder", "Schwester"],
  },

  // ── A2 ──────────────────────────────────────────────────
  {
    id: "a2-invite",
    level: "A2",
    category: "email",
    title: "Party Invitation",
    titleDe: "Einladung zur Party",
    prompt: "Write an informal email inviting a friend to your birthday party. Include the date, time, location, and what to bring.",
    hints: ["Start with 'Liebe/Lieber...'", "Use 'Ich möchte dich einladen...', 'Die Party ist am...'", "End with 'Ich freue mich auf dich!'"],
    minWords: 50,
    maxWords: 120,
    keywords: ["einladen", "Geburtstag", "Party", "mitbringen"],
  },
  {
    id: "a2-vacation",
    level: "A2",
    category: "email",
    title: "Vacation Postcard",
    titleDe: "Urlaubspostkarte",
    prompt: "Write a postcard from your vacation. Describe the weather, what you've seen, and what you've done so far.",
    hints: ["Use Perfekt tense: 'Ich habe... gesehen', 'Wir sind... gegangen'", "Describe weather: 'Das Wetter ist...'"],
    minWords: 50,
    maxWords: 120,
    keywords: ["Wetter", "gesehen", "besucht", "gegangen"],
  },
  {
    id: "a2-complaint",
    level: "A2",
    category: "email",
    title: "Complaint About a Product",
    titleDe: "Beschwerde über ein Produkt",
    prompt: "You bought something online and it arrived broken. Write an email to the company describing the problem and what you want them to do.",
    hints: ["Use 'Ich habe... bestellt', 'Leider ist... kaputt'", "Request action: 'Können Sie bitte...?'"],
    minWords: 60,
    maxWords: 130,
    keywords: ["bestellt", "kaputt", "Geld zurück", "bitte"],
  },

  // ── B1 ──────────────────────────────────────────────────
  {
    id: "b1-opinion",
    level: "B1",
    category: "essay",
    title: "Should Children Have Smartphones?",
    titleDe: "Sollten Kinder Smartphones haben?",
    prompt: "Write your opinion on whether children under 12 should have smartphones. Give at least 2 arguments for and against, then state your personal view.",
    hints: ["Use opinion phrases: 'Meiner Meinung nach...', 'Ich bin der Meinung, dass...'", "Use 'einerseits...andererseits' for pros/cons", "End with 'Zusammenfassend denke ich, dass...'"],
    minWords: 80,
    maxWords: 180,
    keywords: ["Meinung", "einerseits", "andererseits", "Vorteil", "Nachteil"],
  },
  {
    id: "b1-plan",
    level: "B1",
    category: "exam",
    title: "Plan a Trip Together",
    titleDe: "Gemeinsam einen Ausflug planen",
    prompt: "Your friend wants to plan a weekend trip together. Write an email suggesting a destination, discussing transportation, accommodation, and activities. Ask for their opinion.",
    hints: ["Use suggestion phrases: 'Wir könnten...', 'Wie wäre es mit...?'", "Use temporal connectors: 'zuerst', 'danach', 'am Abend'"],
    minWords: 80,
    maxWords: 160,
    keywords: ["könnten", "vorschlagen", "Unterkunft", "Meinung"],
  },
  {
    id: "b1-experience",
    level: "B1",
    category: "creative",
    title: "An Unforgettable Experience",
    titleDe: "Ein unvergessliches Erlebnis",
    prompt: "Write about an unforgettable experience you've had. What happened? How did you feel? Why was it important to you?",
    hints: ["Use narrative tenses (Präteritum for storytelling)", "Express feelings: 'Ich war begeistert/überrascht/nervös'", "Use temporal conjunctions: 'als', 'nachdem', 'bevor'"],
    minWords: 100,
    maxWords: 200,
    keywords: ["als", "plötzlich", "Gefühl", "unvergesslich"],
  },

  // ── B2 ──────────────────────────────────────────────────
  {
    id: "b2-forum",
    level: "B2",
    category: "exam",
    title: "Forum Post: Online Learning",
    titleDe: "Forumsbeitrag: Online-Lernen",
    prompt: "Write a forum post (~150 words) responding to the question: 'Is online learning better than traditional classroom learning?' State your opinion, give examples from your experience, and respond to a common counterargument.",
    hints: ["Structure: Einleitung → Hauptteil → Schluss", "Use B2 connectors: 'im Gegensatz dazu', 'darüber hinaus', 'dennoch'", "Address a counterargument: 'Man könnte einwenden, dass..., jedoch...'"],
    minWords: 120,
    maxWords: 200,
    keywords: ["Erfahrung", "Vorteil", "im Gegensatz", "dennoch"],
  },
  {
    id: "b2-formal",
    level: "B2",
    category: "letter",
    title: "Formal Complaint to Landlord",
    titleDe: "Formelle Beschwerde an den Vermieter",
    prompt: "Write a formal letter to your landlord complaining about a broken heater in winter. Describe the problem, mention previous attempts to get it fixed, and set a deadline for repair.",
    hints: ["Use formal register: 'Sehr geehrte/r...', 'Ich schreibe Ihnen, um...'", "Set a deadline: 'Ich bitte Sie, bis zum... zu...'", "Mention consequences: 'Andernfalls sehe ich mich gezwungen...'"],
    minWords: 120,
    maxWords: 200,
    keywords: ["Sehr geehrte", "Heizung", "Frist", "gezwungen"],
  },
  {
    id: "b2-argument",
    level: "B2",
    category: "essay",
    title: "Social Media and Democracy",
    titleDe: "Soziale Medien und Demokratie",
    prompt: "Discuss whether social media strengthens or weakens democracy. Present arguments for both sides and conclude with your own well-reasoned position.",
    hints: ["Use advanced connectors: 'zum einen...zum anderen', 'infolgedessen'", "Include concessive clauses: 'Obwohl...', 'Trotz der Tatsache, dass...'", "Use Konjunktiv II for hypotheticals: 'Wenn es keine sozialen Medien gäbe...'"],
    minWords: 150,
    maxWords: 250,
    keywords: ["Demokratie", "Meinungsfreiheit", "Fake News", "infolgedessen"],
  },

  // ── C1 ──────────────────────────────────────────────────
  {
    id: "c1-graph",
    level: "C1",
    category: "exam",
    title: "Describe a Graph: Renewable Energy",
    titleDe: "Grafikbeschreibung: Erneuerbare Energien",
    prompt: "You see a graph showing Germany's renewable energy usage from 2000 to 2024. Describe the trends, compare key data points, and discuss possible causes. Then give your prediction for the future.",
    hints: ["Use data language: 'Die Grafik zeigt...', 'Auffällig ist, dass...'", "Use nominalized style: 'Der Anstieg des Anteils...'", "Make predictions: 'Es ist davon auszugehen, dass...'"],
    minWords: 180,
    maxWords: 300,
    keywords: ["Grafik", "Anstieg", "auffällig", "davon auszugehen"],
  },
  {
    id: "c1-essay",
    level: "C1",
    category: "essay",
    title: "Work-Life Balance in Modern Society",
    titleDe: "Work-Life-Balance in der modernen Gesellschaft",
    prompt: "Write an essay discussing the challenges of maintaining work-life balance in today's digital world. Analyze causes, consequences, and propose solutions.",
    hints: ["Use Funktionsverbgefüge: 'in Betracht ziehen', 'zur Verfügung stehen'", "Use extended participle phrases for academic style", "Structure with clear thesis, arguments, and conclusion"],
    minWords: 200,
    maxWords: 350,
    keywords: ["Arbeitsbelastung", "Burnout", "in Betracht ziehen", "infolgedessen"],
  },

  // ── C2 ──────────────────────────────────────────────────
  {
    id: "c2-analysis",
    level: "C2",
    category: "essay",
    title: "Literary Analysis: Kafka's The Metamorphosis",
    titleDe: "Textanalyse: Kafkas Die Verwandlung",
    prompt: "Analyze the opening paragraph of Kafka's 'Die Verwandlung'. Discuss the narrative perspective, the use of language, and the symbolic meaning of Gregor Samsa's transformation.",
    hints: ["Use academic register throughout", "Employ Konjunktiv I for indirect speech when citing", "Use rhetorical devices: 'Es liegt nahe, dass...', 'Dies lässt sich dahingehend interpretieren, dass...'"],
    minWords: 250,
    maxWords: 400,
    keywords: ["Perspektive", "Verwandlung", "interpretieren", "Konjunktiv"],
  },
  {
    id: "c2-stellungnahme",
    level: "C2",
    category: "essay",
    title: "Should AI Replace Teachers?",
    titleDe: "Sollte KI Lehrkräfte ersetzen?",
    prompt: "Write a differentiated position paper on AI in education. Address technological possibilities, pedagogical concerns, ethical implications, and propose a balanced framework.",
    hints: ["Demonstrate register-switching within the text", "Use Partizipialkonstruktionen and Nominalisierung", "Employ adversative connectors: 'wenngleich', 'nichtsdestotrotz'"],
    minWords: 300,
    maxWords: 500,
    keywords: ["wenngleich", "nichtsdestotrotz", "pädagogisch", "ethisch"],
  },
];

export function getPromptsByLevel(level: string): WritingPrompt[] {
  return writingPrompts.filter(p => p.level === level);
}

export function getAvailableLevels(): string[] {
  return [...new Set(writingPrompts.map(p => p.level))];
}
