// ── Cultural Knowledge: DACH differences, register, humor ──────

export interface CulturalNote {
  id: string;
  title: string;
  titleDe: string;
  category: "dach-differences" | "register" | "humor" | "history" | "customs";
  level: string;
  content: string;
  examples?: { text: string; meaning: string; region?: string; }[];
  quiz?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export const culturalNotes: CulturalNote[] = [
  // ── DACH Differences ──────────────────────────────────
  {
    id: "dach-greetings",
    title: "Greetings across DACH",
    titleDe: "Begrüßung in D-A-CH",
    category: "dach-differences",
    level: "B1",
    content: "In Germany, you typically say «Guten Tag» or «Hallo». In Bavaria and Austria, «Grüß Gott» is the standard greeting. In Switzerland, «Grüezi» (formal) or «Hoi» (informal) are used. In northern Germany, «Moin» is common — and can mean both hello and goodbye!",
    examples: [
      { text: "Moin Moin!", meaning: "Hello! (Northern Germany)", region: "Norddeutschland" },
      { text: "Grüß Gott!", meaning: "Hello (formal, Bavaria/Austria)", region: "Bayern/Österreich" },
      { text: "Grüezi mitenand!", meaning: "Hello everyone! (Switzerland)", region: "Schweiz" },
      { text: "Servus!", meaning: "Hi / Bye (Bavaria, Austria)", region: "Bayern/Österreich" },
    ],
    quiz: [
      { question: "Which greeting is typically used in Switzerland?", options: ["Moin", "Grüezi", "Tach"], correctIndex: 1, explanation: "Grüezi is the standard Swiss German formal greeting." },
    ],
  },
  {
    id: "dach-food-words",
    title: "Food vocabulary differences",
    titleDe: "Essen: D-A-CH Unterschiede",
    category: "dach-differences",
    level: "B1",
    content: "Many everyday food words differ between Germany, Austria, and Switzerland. Knowing these differences shows a deeper understanding of German-speaking cultures.",
    examples: [
      { text: "Brötchen / Semmel / Brötli", meaning: "bread roll", region: "D / A / CH" },
      { text: "Kartoffel / Erdapfel / Härdöpfel", meaning: "potato", region: "D / A / CH" },
      { text: "Sahne / Obers / Rahm", meaning: "cream", region: "D / A / CH" },
      { text: "Tomate / Paradeiser / Tomate", meaning: "tomato", region: "D / A / CH" },
      { text: "Aprikose / Marille / Aprikose", meaning: "apricot", region: "D / A / CH" },
      { text: "Pfannkuchen / Palatschinke / Crêpe", meaning: "pancake/crêpe", region: "D / A / CH" },
      { text: "Hackfleisch / Faschiertes / Gehacktes", meaning: "minced meat", region: "D / A / CH" },
    ],
    quiz: [
      { question: "What is a «Semmel»?", options: ["A type of sausage", "A bread roll (Austrian)", "A dessert"], correctIndex: 1, explanation: "Semmel is the Austrian word for Brötchen (bread roll)." },
      { question: "What is «Obers» in Austrian German?", options: ["Beer", "Cream", "Butter"], correctIndex: 1, explanation: "Obers = Sahne (cream) in Austrian German." },
    ],
  },
  {
    id: "dach-months-swiss",
    title: "Swiss German specialties",
    titleDe: "Schweizerdeutsch-Besonderheiten",
    category: "dach-differences",
    level: "B2",
    content: "Swiss German (Schweizerdeutsch) is not just an accent — it's a family of distinct Alemannic dialects. Swiss Standard German (Schweizer Hochdeutsch) also differs from Standard German in vocabulary, spelling, and even grammar.",
    examples: [
      { text: "parkieren (CH) vs. parken (D)", meaning: "to park", region: "CH vs. D" },
      { text: "Velo (CH) vs. Fahrrad (D)", meaning: "bicycle", region: "CH vs. D" },
      { text: "Natel (CH) vs. Handy (D)", meaning: "mobile phone", region: "CH vs. D" },
      { text: "Billett (CH) vs. Fahrkarte (D)", meaning: "ticket", region: "CH vs. D" },
      { text: "Estrich (CH) = Dachboden (D)", meaning: "attic", region: "CH vs. D" },
      { text: "grillieren (CH) vs. grillen (D)", meaning: "to barbecue", region: "CH vs. D" },
    ],
    quiz: [
      { question: "What does «Velo» mean in Swiss German?", options: ["Car", "Train", "Bicycle"], correctIndex: 2, explanation: "Velo = Fahrrad = bicycle." },
    ],
  },
  {
    id: "dach-austrian-german",
    title: "Austrian German (Österreichisches Deutsch)",
    titleDe: "Österreichisches Deutsch",
    category: "dach-differences",
    level: "B2",
    content: "Austrian German is an official variety of the German language recognized by the EU. It has its own dictionary (Österreichisches Wörterbuch) and distinct features in vocabulary, pronunciation, and even grammar — e.g., «das Cola» (neuter) instead of «die Cola» (feminine) in Germany.",
    examples: [
      { text: "Jänner (A) vs. Januar (D)", meaning: "January", region: "A vs. D" },
      { text: "Matura (A) vs. Abitur (D)", meaning: "high school final exam", region: "A vs. D" },
      { text: "Beisl (A) vs. Kneipe (D)", meaning: "pub", region: "A vs. D" },
      { text: "Sackerl (A) vs. Tüte (D)", meaning: "bag", region: "A vs. D" },
      { text: "Schlagobers (A) vs. Schlagsahne (D)", meaning: "whipped cream", region: "A vs. D" },
      { text: "heuer (A) vs. dieses Jahr (D)", meaning: "this year", region: "A vs. D" },
    ],
    quiz: [
      { question: "What is «Matura» in Austrian German?", options: ["University degree", "High school diploma/final exam", "Driving license"], correctIndex: 1, explanation: "Matura = Abitur = high school final exam." },
    ],
  },

  // ── Register & Formality ──────────────────────────────────
  {
    id: "register-duzen-siezen",
    title: "Du vs. Sie: When to switch",
    titleDe: "Duzen und Siezen",
    category: "register",
    level: "B1",
    content: "Mastering the du/Sie distinction is crucial. Generally: use «Sie» with strangers, colleagues (until offered «du»), officials, and older people. Use «du» with friends, family, children, and fellow students. In many modern companies, «du» is now standard. The person with higher status (older person, boss) offers the «du» first — never assume it.",
    examples: [
      { text: "Können Sie mir bitte helfen?", meaning: "Can you help me please? (formal)" },
      { text: "Kannst du mir bitte helfen?", meaning: "Can you help me please? (informal)" },
      { text: "Wollen wir uns duzen?", meaning: "Shall we use 'du' with each other?" },
      { text: "Wir sind hier per du.", meaning: "We use 'du' here (company culture)." },
    ],
    quiz: [
      { question: "Who offers the «du» first?", options: ["The younger person", "The person with higher status", "Anyone can"], correctIndex: 1, explanation: "The person with higher status (older, boss) offers the du first." },
    ],
  },
  {
    id: "register-formal-writing",
    title: "Formal vs. Informal Writing",
    titleDe: "Formelles vs. informelles Schreiben",
    category: "register",
    level: "B2",
    content: "German has distinct register conventions. Formal letters start with «Sehr geehrte/r...» and end with «Mit freundlichen Grüßen». Semi-formal uses «Liebe/r...» and «Viele Grüße». Informal uses «Hey/Hallo» and «LG» (Liebe Grüße). In formal writing, never use abbreviations, emoji, or exclamation marks after greetings.",
    examples: [
      { text: "Sehr geehrte Damen und Herren,", meaning: "Dear Sir or Madam, (very formal)" },
      { text: "Sehr geehrte Frau Müller,", meaning: "Dear Ms. Müller, (formal)" },
      { text: "Liebe Frau Müller,", meaning: "Dear Ms. Müller, (semi-formal)" },
      { text: "Hallo Anna,", meaning: "Hello Anna, (informal)" },
      { text: "Mit freundlichen Grüßen", meaning: "Yours sincerely (formal close)" },
      { text: "Hochachtungsvoll", meaning: "Respectfully (very formal, rare today)" },
    ],
    quiz: [
      { question: "Which closing is appropriate for a formal business letter?", options: ["LG", "Tschüss", "Mit freundlichen Grüßen"], correctIndex: 2, explanation: "Mit freundlichen Grüßen is the standard formal closing." },
    ],
  },
  {
    id: "register-konjunktiv-politeness",
    title: "Konjunktiv II for Politeness",
    titleDe: "Konjunktiv II als Höflichkeitsform",
    category: "register",
    level: "B2",
    content: "German uses Konjunktiv II extensively for polite requests, not just hypothetical situations. «Könnten Sie...» is far more polite than «Können Sie...». This goes beyond simple requests: «Ich würde meinen» (I would say) softens opinions, and «Es wäre schön, wenn...» (It would be nice if...) makes suggestions gentler.",
    examples: [
      { text: "Könnten Sie mir bitte sagen, wo der Ausgang ist?", meaning: "Could you please tell me where the exit is?" },
      { text: "Hätten Sie einen Moment Zeit?", meaning: "Would you have a moment?" },
      { text: "Ich würde vorschlagen, dass wir...", meaning: "I would suggest that we..." },
      { text: "Wäre es möglich, den Termin zu verschieben?", meaning: "Would it be possible to reschedule the appointment?" },
      { text: "Dürfte ich Sie kurz stören?", meaning: "Might I briefly disturb you?" },
    ],
    quiz: [
      { question: "Which is more polite?", options: ["Geben Sie mir das Buch.", "Könnten Sie mir bitte das Buch geben?", "Gib mir das Buch."], correctIndex: 1, explanation: "Konjunktiv II + bitte is the most polite form." },
    ],
  },

  // ── German Humor & Culture ──────────────────────────────────
  {
    id: "humor-wortspiele",
    title: "German Wordplay (Wortspiele)",
    titleDe: "Deutsche Wortspiele",
    category: "humor",
    level: "C1",
    content: "German humor often relies on wordplay (Wortspiele), compound nouns, and the literal/figurative meaning gap. Understanding these shows deep mastery of the language.",
    examples: [
      { text: "Was sagt ein Gen, wenn es ein anderes Gen trifft? — «Hallo Gen!» (= Hallogen)", meaning: "Chemistry pun: «Hallo Gen» sounds like «Halogen»" },
      { text: "Warum können Geister so schlecht lügen? — Weil man durch sie hindurchsehen kann.", meaning: "You can see through ghosts / see through their lies" },
      { text: "Was liegt am Strand und spricht undeutlich? — Eine Nuschel (= Muschel)", meaning: "A pun on Muschel (clam) and nuscheln (to mumble)" },
      { text: "Zwei Zahnstocher laufen durch den Wald. Da kommt ein Igel vorbei. Sagt der eine: «Oh, ich wusste gar nicht, dass hier ein Bus fährt!»", meaning: "A hedgehog looks like a bus to toothpicks (quills = passengers)" },
    ],
  },
  {
    id: "culture-punctuality",
    title: "German Punctuality & Directness",
    titleDe: "Pünktlichkeit und Direktheit",
    category: "customs",
    level: "B1",
    content: "Germans value Pünktlichkeit (punctuality) highly. Being 5 minutes late to a business meeting is considered rude. For social events, «akademisches Viertel» (academic quarter = 15 min late) is sometimes acceptable. German directness (Direktheit) can seem blunt to outsiders — saying «Das ist falsch» (That's wrong) is not rude in German culture, it's efficient. Feedback is given directly: «Das hat mir nicht gefallen» (I didn't like that) is perfectly normal.",
    examples: [
      { text: "Das geht so nicht.", meaning: "That won't work like that. (direct, not rude)" },
      { text: "Da muss ich widersprechen.", meaning: "I have to disagree. (normal in discussion)" },
      { text: "Pünktlich wie die Maurer", meaning: "Punctual as bricklayers (they start/stop exactly on time)" },
      { text: "Fünf Minuten vor der Zeit ist des Deutschen Pünktlichkeit.", meaning: "Five minutes early is German punctuality. (proverb)" },
    ],
    quiz: [
      { question: "What does «akademisches Viertel» mean?", options: ["University campus", "Starting 15 minutes late is acceptable", "A quarter of the grade"], correctIndex: 1, explanation: "It means events may start 15 minutes after the stated time." },
    ],
  },
  {
    id: "culture-bureaucracy",
    title: "German Bureaucracy (Bürokratie)",
    titleDe: "Deutsche Bürokratie",
    category: "customs",
    level: "B2",
    content: "Germany is famous for its bureaucracy. The Einwohnermeldeamt (residents' registration office) is your first stop when moving — you must register within 14 days (Anmeldung). The Bürgeramt handles many civic services. Appointments (Termine) are essential — walk-ins are often impossible. Key documents: Personalausweis (ID card), Meldebescheinigung (registration certificate), Steueridentifikationsnummer (tax ID).",
    examples: [
      { text: "Anmeldung", meaning: "Residence registration (mandatory within 14 days)" },
      { text: "Wohnsitz anmelden", meaning: "To register your residence" },
      { text: "Einen Termin vereinbaren", meaning: "To make an appointment" },
      { text: "Das Formular ausfüllen", meaning: "To fill out the form" },
      { text: "Eine Beglaubigung brauchen", meaning: "To need a certified copy" },
    ],
    quiz: [
      { question: "How quickly must you register after moving to a new address in Germany?", options: ["1 month", "14 days", "3 months"], correctIndex: 1, explanation: "You must register (Anmeldung) within 14 days." },
    ],
  },
  {
    id: "culture-recycling",
    title: "Mülltrennung & Pfand",
    titleDe: "Mülltrennung und Pfandsystem",
    category: "customs",
    level: "B1",
    content: "Germany has one of the world's most complex recycling systems. Households typically have 4-6 different bins: Restmüll (general waste), Biomüll (organic), Papier (paper), Gelber Sack/Tonne (packaging), and sometimes Glas (glass) containers sorted by color. The Pfand system charges a deposit (usually 25 cents) on plastic bottles and cans — return them at Pfandautomaten in supermarkets.",
    examples: [
      { text: "Restmüll", meaning: "General/residual waste (gray bin)" },
      { text: "Gelber Sack", meaning: "Yellow bag for packaging waste" },
      { text: "Pfandautomat", meaning: "Deposit return machine in supermarkets" },
      { text: "Wertstoffhof", meaning: "Recycling center for special waste" },
      { text: "Einwegpfand (25 Cent)", meaning: "One-way bottle deposit (25 cents)" },
    ],
    quiz: [
      { question: "What is the «Gelber Sack» for?", options: ["Food waste", "Packaging (plastics, cans, tetra packs)", "Paper and cardboard"], correctIndex: 1, explanation: "The Gelber Sack is for packaging waste." },
    ],
  },
  {
    id: "culture-sonntagsruhe",
    title: "Sonntagsruhe (Sunday Rest)",
    titleDe: "Sonntagsruhe",
    category: "customs",
    level: "B1",
    content: "In Germany, Sunday is a legally protected rest day (Sonntagsruhe). Most shops are closed. Doing noisy activities like mowing the lawn, drilling, or even washing your car can result in complaints from neighbors or fines. This concept extends to Ruhezeiten (quiet hours), typically 10 PM to 6 AM on weekdays and all day Sunday.",
    examples: [
      { text: "Sonntagsruhe einhalten", meaning: "To observe Sunday quiet hours" },
      { text: "Ruhezeiten von 22 bis 6 Uhr", meaning: "Quiet hours from 10 PM to 6 AM" },
      { text: "Mittagsruhe (13-15 Uhr)", meaning: "Afternoon quiet time (varies by region)" },
      { text: "Ladenschlussgesetz", meaning: "Shop closing law" },
    ],
    quiz: [
      { question: "What is «Sonntagsruhe»?", options: ["A holiday", "A legal requirement for Sunday rest/quiet", "A type of sleep"], correctIndex: 1, explanation: "Sonntagsruhe is the legally protected Sunday rest — shops close, and noisy activities are prohibited." },
    ],
  },

  // ── History & Society ──────────────────────────────────
  {
    id: "history-reunification",
    title: "German Reunification",
    titleDe: "Die Wiedervereinigung",
    category: "history",
    level: "C1",
    content: "The fall of the Berlin Wall on November 9, 1989 (der Mauerfall) led to German reunification (die Wiedervereinigung) on October 3, 1990 — now Germany's national holiday (Tag der Deutschen Einheit). The process involved the «Zwei-plus-Vier-Vertrag» (Two Plus Four Agreement) between the two Germanys and the four Allied powers. Key terms: Ostalgie (nostalgia for East Germany), Solidaritätszuschlag (solidarity surcharge to fund reconstruction), «Wende» (the turn — referring to the political change).",
    examples: [
      { text: "der Mauerfall", meaning: "The fall of the Berlin Wall (November 9, 1989)" },
      { text: "die Wiedervereinigung", meaning: "Reunification (October 3, 1990)" },
      { text: "Tag der Deutschen Einheit", meaning: "Day of German Unity (national holiday)" },
      { text: "Ostalgie", meaning: "Nostalgia for East Germany (Ost + Nostalgie)" },
      { text: "die Wende", meaning: "The turn/change (political transformation)" },
    ],
    quiz: [
      { question: "When is Tag der Deutschen Einheit?", options: ["November 9", "October 3", "January 1"], correctIndex: 1, explanation: "October 3 is the Day of German Unity." },
      { question: "What does «Ostalgie» mean?", options: ["Eastern food", "Nostalgia for East Germany", "An Eastern holiday"], correctIndex: 1, explanation: "Ostalgie = Ost (East) + Nostalgie (nostalgia) — longing for aspects of former East Germany." },
    ],
  },
  {
    id: "history-grundgesetz",
    title: "The Grundgesetz (Basic Law)",
    titleDe: "Das Grundgesetz",
    category: "history",
    level: "C1",
    content: "Germany's Grundgesetz (Basic Law) was established on May 23, 1949. Article 1: «Die Würde des Menschen ist unantastbar» (Human dignity is inviolable) — considered the most important sentence in German law. The Grundgesetz was intentionally called «Basic Law» instead of «Constitution» (Verfassung) because reunification was still a goal. Key institutions: Bundesverfassungsgericht (Federal Constitutional Court), Bundestag (parliament), Bundesrat (federal council).",
    examples: [
      { text: "Die Würde des Menschen ist unantastbar.", meaning: "Human dignity is inviolable. (Art. 1)" },
      { text: "Alle Menschen sind vor dem Gesetz gleich.", meaning: "All people are equal before the law. (Art. 3)" },
      { text: "Jeder hat das Recht, seine Meinung frei zu äußern.", meaning: "Everyone has the right to freely express their opinion. (Art. 5)" },
    ],
    quiz: [
      { question: "What is Article 1 of the Grundgesetz?", options: ["Freedom of speech", "Human dignity is inviolable", "Right to work"], correctIndex: 1, explanation: "Art. 1: Die Würde des Menschen ist unantastbar." },
    ],
  },
];

export function getCulturalNotesByCategory(category: CulturalNote["category"]): CulturalNote[] {
  return culturalNotes.filter(n => n.category === category);
}

export function getCulturalNotesByLevel(level: string): CulturalNote[] {
  return culturalNotes.filter(n => n.level === level);
}
