// ── Dictation Data ───────────────────────────────────────
export interface DictationSentence {
  id: string;
  level: string;
  text: string;
  translation: string;
  category: string;
}

export const dictationSentences: DictationSentence[] = [
  // A1
  { id: "d-a1-01", level: "A1", text: "Ich trinke gern Kaffee.", translation: "I like to drink coffee.", category: "daily" },
  { id: "d-a1-02", level: "A1", text: "Mein Name ist Anna.", translation: "My name is Anna.", category: "introduction" },
  { id: "d-a1-03", level: "A1", text: "Das Wetter ist heute schön.", translation: "The weather is nice today.", category: "weather" },
  { id: "d-a1-04", level: "A1", text: "Wo ist die Toilette, bitte?", translation: "Where is the toilet, please?", category: "asking" },
  { id: "d-a1-05", level: "A1", text: "Ich komme aus Indien.", translation: "I come from India.", category: "introduction" },
  { id: "d-a1-06", level: "A1", text: "Der Hund ist sehr groß.", translation: "The dog is very big.", category: "description" },
  { id: "d-a1-07", level: "A1", text: "Wie viel kostet das?", translation: "How much does that cost?", category: "shopping" },
  { id: "d-a1-08", level: "A1", text: "Ich wohne in Berlin.", translation: "I live in Berlin.", category: "introduction" },
  { id: "d-a1-09", level: "A1", text: "Die Kinder spielen im Garten.", translation: "The children are playing in the garden.", category: "daily" },
  { id: "d-a1-10", level: "A1", text: "Entschuldigung, sprechen Sie Englisch?", translation: "Excuse me, do you speak English?", category: "asking" },

  // A2
  { id: "d-a2-01", level: "A2", text: "Gestern habe ich einen Film gesehen.", translation: "Yesterday I watched a movie.", category: "past" },
  { id: "d-a2-02", level: "A2", text: "Können Sie das bitte wiederholen?", translation: "Can you please repeat that?", category: "asking" },
  { id: "d-a2-03", level: "A2", text: "Ich muss morgen früh aufstehen.", translation: "I have to get up early tomorrow.", category: "daily" },
  { id: "d-a2-04", level: "A2", text: "Der Zug nach München fährt um acht Uhr ab.", translation: "The train to Munich departs at eight o'clock.", category: "travel" },
  { id: "d-a2-05", level: "A2", text: "Ich hätte gern ein Stück Apfelkuchen.", translation: "I would like a piece of apple cake.", category: "food" },
  { id: "d-a2-06", level: "A2", text: "Wir haben am Wochenende eine Party gemacht.", translation: "We had a party on the weekend.", category: "past" },
  { id: "d-a2-07", level: "A2", text: "Könnten Sie mir bitte helfen?", translation: "Could you please help me?", category: "polite" },
  { id: "d-a2-08", level: "A2", text: "Das Restaurant ist um die Ecke links.", translation: "The restaurant is around the corner on the left.", category: "directions" },

  // B1
  { id: "d-b1-01", level: "B1", text: "Obwohl es regnet, gehe ich spazieren.", translation: "Although it's raining, I'm going for a walk.", category: "complex" },
  { id: "d-b1-02", level: "B1", text: "Ich würde gern wissen, wann der nächste Kurs beginnt.", translation: "I would like to know when the next course starts.", category: "polite" },
  { id: "d-b1-03", level: "B1", text: "Nachdem ich gefrühstückt hatte, bin ich zur Arbeit gefahren.", translation: "After I had eaten breakfast, I drove to work.", category: "narrative" },
  { id: "d-b1-04", level: "B1", text: "Meiner Meinung nach sollte man mehr Sport treiben.", translation: "In my opinion, one should do more sports.", category: "opinion" },
  { id: "d-b1-05", level: "B1", text: "Je mehr man übt, desto besser wird man.", translation: "The more you practice, the better you become.", category: "proverb" },
  { id: "d-b1-06", level: "B1", text: "Wenn ich Zeit hätte, würde ich nach Japan reisen.", translation: "If I had time, I would travel to Japan.", category: "konjunktiv" },
  { id: "d-b1-07", level: "B1", text: "Er hat mich gefragt, ob ich morgen kommen kann.", translation: "He asked me whether I can come tomorrow.", category: "indirect" },
  { id: "d-b1-08", level: "B1", text: "Die Wohnung, die wir besichtigt haben, war leider zu teuer.", translation: "The apartment that we viewed was unfortunately too expensive.", category: "relative" },

  // B2
  { id: "d-b2-01", level: "B2", text: "Es lässt sich nicht leugnen, dass die Digitalisierung unseren Alltag verändert hat.", translation: "It cannot be denied that digitalization has changed our everyday life.", category: "academic" },
  { id: "d-b2-02", level: "B2", text: "Angesichts der steigenden Mieten ziehen immer mehr Menschen aufs Land.", translation: "In view of rising rents, more and more people are moving to the countryside.", category: "news" },
  { id: "d-b2-03", level: "B2", text: "Hätte ich das vorher gewusst, wäre ich anders vorgegangen.", translation: "Had I known that before, I would have proceeded differently.", category: "konjunktiv" },
  { id: "d-b2-04", level: "B2", text: "Der Antrag muss bis spätestens Ende des Monats eingereicht werden.", translation: "The application must be submitted by the end of the month at the latest.", category: "formal" },
  { id: "d-b2-05", level: "B2", text: "Obwohl die Ergebnisse vielversprechend sind, bedarf es weiterer Forschung.", translation: "Although the results are promising, further research is needed.", category: "academic" },
  { id: "d-b2-06", level: "B2", text: "Die Frage, inwieweit soziale Medien die öffentliche Meinung beeinflussen, bleibt umstritten.", translation: "The question of to what extent social media influence public opinion remains controversial.", category: "academic" },

  // C1
  { id: "d-c1-01", level: "C1", text: "Die von der Regierung vorgeschlagenen Maßnahmen stoßen in der Bevölkerung auf breite Ablehnung.", translation: "The measures proposed by the government are meeting with widespread rejection among the population.", category: "news" },
  { id: "d-c1-02", level: "C1", text: "Es wäre verfehlt, die Komplexität des Problems auf eine einzige Ursache zurückzuführen.", translation: "It would be misguided to attribute the complexity of the problem to a single cause.", category: "academic" },
  { id: "d-c1-03", level: "C1", text: "Infolge der zunehmenden Automatisierung stehen zahlreiche Arbeitsplätze auf dem Spiel.", translation: "As a result of increasing automation, numerous jobs are at stake.", category: "formal" },
  { id: "d-c1-04", level: "C1", text: "Nichtsdestotrotz bleibt die Frage offen, ob eine rein technologische Lösung den gesellschaftlichen Anforderungen gerecht werden kann.", translation: "Nevertheless, the question remains open whether a purely technological solution can meet societal requirements.", category: "academic" },

  // ── Additional A1 ──
  { id: "d-a1-11", level: "A1", text: "Ich esse gern Brot mit Käse.", translation: "I like to eat bread with cheese.", category: "food" },
  { id: "d-a1-12", level: "A1", text: "Heute ist Montag.", translation: "Today is Monday.", category: "daily" },
  { id: "d-a1-13", level: "A1", text: "Meine Schwester heißt Maria.", translation: "My sister's name is Maria.", category: "family" },
  { id: "d-a1-14", level: "A1", text: "Ich lerne Deutsch.", translation: "I am learning German.", category: "daily" },
  { id: "d-a1-15", level: "A1", text: "Das Auto ist blau.", translation: "The car is blue.", category: "description" },
  { id: "d-a1-16", level: "A1", text: "Wir gehen in die Schule.", translation: "We go to school.", category: "daily" },
  { id: "d-a1-17", level: "A1", text: "Die Katze schläft auf dem Sofa.", translation: "The cat sleeps on the sofa.", category: "daily" },
  { id: "d-a1-18", level: "A1", text: "Ich habe zwei Brüder.", translation: "I have two brothers.", category: "family" },
  { id: "d-a1-19", level: "A1", text: "Bitte, ein Glas Wasser.", translation: "Please, a glass of water.", category: "ordering" },
  { id: "d-a1-20", level: "A1", text: "Es ist halb drei.", translation: "It is half past two.", category: "time" },

  // ── Additional A2 ──
  { id: "d-a2-09", level: "A2", text: "Letztes Jahr bin ich nach Spanien geflogen.", translation: "Last year I flew to Spain.", category: "travel" },
  { id: "d-a2-10", level: "A2", text: "Ich habe meinen Schlüssel verloren.", translation: "I lost my key.", category: "daily" },
  { id: "d-a2-11", level: "A2", text: "Am Wochenende gehe ich oft ins Kino.", translation: "On weekends I often go to the cinema.", category: "hobbies" },
  { id: "d-a2-12", level: "A2", text: "Mein Bruder arbeitet als Ingenieur.", translation: "My brother works as an engineer.", category: "work" },
  { id: "d-a2-13", level: "A2", text: "Ich mache mir Sorgen um die Prüfung.", translation: "I am worried about the exam.", category: "feelings" },
  { id: "d-a2-14", level: "A2", text: "Die Apotheke ist neben dem Supermarkt.", translation: "The pharmacy is next to the supermarket.", category: "directions" },
  { id: "d-a2-15", level: "A2", text: "Wir haben gestern Abend Pizza bestellt.", translation: "We ordered pizza last evening.", category: "food" },
  { id: "d-a2-16", level: "A2", text: "Darf ich das Fenster aufmachen?", translation: "May I open the window?", category: "polite" },
  { id: "d-a2-17", level: "A2", text: "Er hat mir zum Geburtstag ein Buch geschenkt.", translation: "He gave me a book for my birthday.", category: "past" },
  { id: "d-a2-18", level: "A2", text: "Die Straßenbahn kommt alle zehn Minuten.", translation: "The tram comes every ten minutes.", category: "transport" },
  { id: "d-a2-19", level: "A2", text: "Ich möchte einen Termin beim Arzt machen.", translation: "I would like to make an appointment with the doctor.", category: "daily" },
  { id: "d-a2-20", level: "A2", text: "Heute Abend koche ich für meine Freunde.", translation: "This evening I am cooking for my friends.", category: "daily" },

  // ── Additional B1 ──
  { id: "d-b1-09", level: "B1", text: "Seitdem ich Sport treibe, fühle ich mich viel besser.", translation: "Since I started exercising, I feel much better.", category: "health" },
  { id: "d-b1-10", level: "B1", text: "Es ist wichtig, dass man regelmäßig Pausen macht.", translation: "It is important that one takes regular breaks.", category: "advice" },
  { id: "d-b1-11", level: "B1", text: "Der Film, den wir gestern gesehen haben, war sehr spannend.", translation: "The movie that we saw yesterday was very exciting.", category: "relative" },
  { id: "d-b1-12", level: "B1", text: "Falls es morgen regnet, bleiben wir zu Hause.", translation: "If it rains tomorrow, we will stay home.", category: "conditional" },
  { id: "d-b1-13", level: "B1", text: "Ich interessiere mich sehr für deutsche Geschichte.", translation: "I am very interested in German history.", category: "interests" },
  { id: "d-b1-14", level: "B1", text: "Anstatt fernzusehen, sollte man lieber ein Buch lesen.", translation: "Instead of watching TV, one should rather read a book.", category: "opinion" },
  { id: "d-b1-15", level: "B1", text: "Die Besprechung wurde auf nächste Woche verschoben.", translation: "The meeting was postponed to next week.", category: "work" },
  { id: "d-b1-16", level: "B1", text: "Ich habe mich bei drei verschiedenen Firmen beworben.", translation: "I applied to three different companies.", category: "work" },
  { id: "d-b1-17", level: "B1", text: "Während meines Studiums habe ich als Kellner gearbeitet.", translation: "During my studies, I worked as a waiter.", category: "narrative" },
  { id: "d-b1-18", level: "B1", text: "Er hat sich daran gewöhnt, früh aufzustehen.", translation: "He has gotten used to getting up early.", category: "daily" },
  { id: "d-b1-19", level: "B1", text: "Die Vorteile überwiegen die Nachteile bei Weitem.", translation: "The advantages far outweigh the disadvantages.", category: "opinion" },
  { id: "d-b1-20", level: "B1", text: "Trotz des schlechten Wetters sind viele Leute gekommen.", translation: "Despite the bad weather, many people came.", category: "narrative" },

  // ── Additional B2 ──
  { id: "d-b2-07", level: "B2", text: "Aufgrund der wirtschaftlichen Lage ist die Arbeitslosenquote gestiegen.", translation: "Due to the economic situation, the unemployment rate has risen.", category: "news" },
  { id: "d-b2-08", level: "B2", text: "Es wird zunehmend deutlich, dass herkömmliche Methoden nicht mehr ausreichen.", translation: "It is becoming increasingly clear that conventional methods are no longer sufficient.", category: "academic" },
  { id: "d-b2-09", level: "B2", text: "Die Einkommenssteuererklärung muss bis zum 31. Juli abgegeben werden.", translation: "The income tax return must be submitted by July 31st.", category: "formal" },
  { id: "d-b2-10", level: "B2", text: "Wäre ich an Ihrer Stelle, würde ich den Vertrag nicht unterschreiben.", translation: "If I were in your place, I would not sign the contract.", category: "konjunktiv" },
  { id: "d-b2-11", level: "B2", text: "Die Aufenthaltserlaubnis wurde um zwei Jahre verlängert.", translation: "The residence permit was extended by two years.", category: "bureaucracy" },
  { id: "d-b2-12", level: "B2", text: "Die Studie belegt eindrücklich den Zusammenhang zwischen Ernährung und Gesundheit.", translation: "The study impressively demonstrates the connection between nutrition and health.", category: "academic" },
  { id: "d-b2-13", level: "B2", text: "Unter der Voraussetzung, dass alle Beteiligten zustimmen, kann das Projekt beginnen.", translation: "Provided that all parties agree, the project can begin.", category: "formal" },
  { id: "d-b2-14", level: "B2", text: "Sofern keine Einwände erhoben werden, gilt der Vorschlag als angenommen.", translation: "Unless objections are raised, the proposal is considered accepted.", category: "formal" },
  { id: "d-b2-15", level: "B2", text: "Er machte sich Vorwürfe, nicht früher gehandelt zu haben.", translation: "He reproached himself for not having acted sooner.", category: "narrative" },
  { id: "d-b2-16", level: "B2", text: "Die Verhandlungen zwischen den Tarifpartnern gestalten sich schwierig.", translation: "The negotiations between the collective bargaining partners are proving difficult.", category: "news" },
  { id: "d-b2-17", level: "B2", text: "Infolgedessen hat die Bundesregierung ein Hilfspaket verabschiedet.", translation: "As a result, the federal government has adopted an aid package.", category: "news" },
  { id: "d-b2-18", level: "B2", text: "Anrufbeantworter: Bitte hinterlassen Sie Ihren Namen und Ihre Rückrufnummer nach dem Signalton.", translation: "Answering machine: Please leave your name and callback number after the tone.", category: "phone" },
  { id: "d-b2-19", level: "B2", text: "Weder die Opposition noch die Regierung konnte sich auf einen Kompromiss einigen.", translation: "Neither the opposition nor the government could agree on a compromise.", category: "politics" },
  { id: "d-b2-20", level: "B2", text: "Der Sachverständige wies darauf hin, dass die Infrastruktur dringend modernisiert werden müsse.", translation: "The expert pointed out that the infrastructure urgently needs to be modernized.", category: "formal" },

  // ── Additional C1 ──
  { id: "d-c1-05", level: "C1", text: "Es bedarf einer grundlegenden Neuausrichtung der Bildungspolitik, um den Herausforderungen des 21. Jahrhunderts gerecht zu werden.", translation: "A fundamental reorientation of education policy is needed to meet the challenges of the 21st century.", category: "academic" },
  { id: "d-c1-06", level: "C1", text: "Die Ergebnisse lassen sich insofern relativieren, als die Stichprobe nicht repräsentativ war.", translation: "The results can be put into perspective insofar as the sample was not representative.", category: "academic" },
  { id: "d-c1-07", level: "C1", text: "Angesichts der Tatsache, dass fossile Brennstoffe endlich sind, müssen erneuerbare Energien stärker gefördert werden.", translation: "Given the fact that fossil fuels are finite, renewable energies must be more strongly promoted.", category: "academic" },
  { id: "d-c1-08", level: "C1", text: "Der Paradigmenwechsel in der Klimaforschung hat weitreichende Konsequenzen für die internationale Politik.", translation: "The paradigm shift in climate research has far-reaching consequences for international politics.", category: "news" },
  { id: "d-c1-09", level: "C1", text: "Unbeschadet der Tatsache, dass die Verhandlungen gescheitert sind, bleibt die diplomatische Lösung das erklärte Ziel.", translation: "Notwithstanding the fact that negotiations have failed, the diplomatic solution remains the stated goal.", category: "politics" },
  { id: "d-c1-10", level: "C1", text: "Aus sprachwissenschaftlicher Sicht ist die Unterscheidung zwischen Dialekt und Sprache keineswegs trivial.", translation: "From a linguistic perspective, the distinction between dialect and language is by no means trivial.", category: "academic" },
  { id: "d-c1-11", level: "C1", text: "Die Geschäftsführung sieht sich mit dem Vorwurf der fahrlässigen Buchhaltung konfrontiert.", translation: "The management is confronted with the accusation of negligent accounting.", category: "business" },
  { id: "d-c1-12", level: "C1", text: "Vorlesungsankündigung: Die Sprechstunde von Professor Müller entfällt diese Woche ersatzlos.", translation: "Lecture announcement: Professor Müller's office hours are cancelled without replacement this week.", category: "university" },
  { id: "d-c1-13", level: "C1", text: "Es sei darauf hingewiesen, dass sämtliche Angaben ohne Gewähr erfolgen.", translation: "It should be noted that all information is provided without guarantee.", category: "formal" },
  { id: "d-c1-14", level: "C1", text: "Die Wechselwirkung zwischen technologischem Fortschritt und gesellschaftlichem Wandel ist nach wie vor unzureichend erforscht.", translation: "The interaction between technological progress and societal change is still insufficiently researched.", category: "academic" },
  { id: "d-c1-15", level: "C1", text: "Hinsichtlich der Datenschutzgrundverordnung sind Unternehmen verpflichtet, personenbezogene Daten besonders zu schützen.", translation: "With regard to the GDPR, companies are obliged to particularly protect personal data.", category: "legal" },
  { id: "d-c1-16", level: "C1", text: "Der Zusammenbruch der Lieferketten hat die Verwundbarkeit der globalisierten Wirtschaft offengelegt.", translation: "The collapse of supply chains has exposed the vulnerability of the globalized economy.", category: "news" },
];


// ── Comprehension Dialogues ──────────────────────────────
export interface DialogueLine {
  speaker: string;
  text: string;
}

export interface ComprehensionDialogue {
  id: string;
  level: string;
  title: string;
  titleDe: string;
  category: string;
  lines: DialogueLine[];
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export const comprehensionDialogues: ComprehensionDialogue[] = [
  // ── A1 ──
  {
    id: "cd-a1-01",
    level: "A1",
    title: "At the bakery",
    titleDe: "In der Bäckerei",
    category: "daily",
    lines: [
      { speaker: "Verkäuferin", text: "Guten Morgen! Was darf es sein?" },
      { speaker: "Kunde", text: "Guten Morgen! Ich hätte gern zwei Brötchen und ein Brot, bitte." },
      { speaker: "Verkäuferin", text: "Sehr gern. Darf es sonst noch etwas sein?" },
      { speaker: "Kunde", text: "Ja, haben Sie auch Croissants?" },
      { speaker: "Verkäuferin", text: "Natürlich! Die kosten ein Euro fünfzig pro Stück." },
      { speaker: "Kunde", text: "Dann nehme ich zwei Croissants, bitte." },
      { speaker: "Verkäuferin", text: "Alles klar. Das macht zusammen sieben Euro zwanzig." },
      { speaker: "Kunde", text: "Hier, bitte. Stimmt so." },
      { speaker: "Verkäuferin", text: "Vielen Dank! Einen schönen Tag noch!" },
    ],
    questions: [
      { question: "Was kauft der Kunde?", options: ["Nur Brot", "Brötchen, Brot und Croissants", "Kuchen und Kaffee"], correctIndex: 1, explanation: "Der Kunde kauft zwei Brötchen, ein Brot und zwei Croissants." },
      { question: "Wie viel kosten die Croissants pro Stück?", options: ["1,20 Euro", "1,50 Euro", "2,00 Euro"], correctIndex: 1, explanation: "Die Croissants kosten 1,50 Euro pro Stück." },
      { question: "Wie viel bezahlt der Kunde insgesamt?", options: ["5,20 Euro", "6,50 Euro", "7,20 Euro"], correctIndex: 2, explanation: "Der Kunde bezahlt insgesamt 7,20 Euro." },
    ],
  },

  // ── A2 ──
  {
    id: "cd-a2-01",
    level: "A2",
    title: "Train announcement",
    titleDe: "Durchsage am Bahnhof",
    category: "travel",
    lines: [
      { speaker: "Ansage", text: "Achtung an Gleis fünf. Der ICE 587 nach Hamburg Hauptbahnhof über Hannover hat voraussichtlich zwanzig Minuten Verspätung. Wir bitten um Ihr Verständnis." },
      { speaker: "Ansage", text: "Der Regionalexpress RE 3 nach Potsdam fährt heute ausnahmsweise von Gleis sieben statt Gleis drei ab." },
      { speaker: "Ansage", text: "Reisende nach Frankfurt am Main steigen bitte in den ICE 1523 auf Gleis zwölf. Abfahrt in fünf Minuten." },
    ],
    questions: [
      { question: "Wie viel Verspätung hat der ICE 587?", options: ["10 Minuten", "20 Minuten", "30 Minuten"], correctIndex: 1, explanation: "Der ICE 587 hat voraussichtlich 20 Minuten Verspätung." },
      { question: "Von welchem Gleis fährt der RE 3 heute ab?", options: ["Gleis 3", "Gleis 5", "Gleis 7"], correctIndex: 2, explanation: "Der RE 3 fährt heute ausnahmsweise von Gleis 7 ab." },
      { question: "Wohin fährt der ICE 1523?", options: ["Hamburg", "Potsdam", "Frankfurt am Main"], correctIndex: 2, explanation: "Der ICE 1523 fährt nach Frankfurt am Main." },
    ],
  },

  // ── B1 ──
  {
    id: "cd-b1-01",
    level: "B1",
    title: "Phone call with the landlord",
    titleDe: "Telefonat mit dem Vermieter",
    category: "housing",
    lines: [
      { speaker: "Mieter", text: "Guten Tag, Herr Müller. Hier spricht Fischer. Ich rufe an, weil es ein Problem mit der Heizung gibt." },
      { speaker: "Vermieter", text: "Guten Tag, Herr Fischer. Was genau ist denn das Problem?" },
      { speaker: "Mieter", text: "Die Heizung im Wohnzimmer funktioniert seit drei Tagen nicht mehr. Es wird einfach nicht warm." },
      { speaker: "Vermieter", text: "Das tut mir leid. Haben Sie schon versucht, das Thermostat höher zu stellen?" },
      { speaker: "Mieter", text: "Ja, natürlich. Ich habe alles versucht. Ich glaube, es ist ein technisches Problem." },
      { speaker: "Vermieter", text: "Gut, dann schicke ich morgen einen Techniker vorbei. Passt Ihnen der Vormittag, so zwischen neun und zwölf?" },
      { speaker: "Mieter", text: "Morgen Vormittag ist leider schlecht. Ginge es auch am Nachmittag?" },
      { speaker: "Vermieter", text: "Hmm, dann sagen wir Donnerstag Vormittag. Wäre das in Ordnung?" },
      { speaker: "Mieter", text: "Ja, Donnerstag passt mir gut. Vielen Dank, Herr Müller." },
    ],
    questions: [
      { question: "Was ist das Problem?", options: ["Das Wasser funktioniert nicht", "Die Heizung funktioniert nicht", "Die Tür ist kaputt"], correctIndex: 1, explanation: "Die Heizung im Wohnzimmer funktioniert seit drei Tagen nicht." },
      { question: "Warum kann der Mieter morgen Vormittag nicht?", options: ["Er ist krank", "Es passt ihm nicht (keine Details)", "Er hat einen Arzttermin"], correctIndex: 1, explanation: "Er sagt nur 'Morgen Vormittag ist leider schlecht' — kein Grund wird genannt." },
      { question: "Wann kommt der Techniker?", options: ["Morgen Nachmittag", "Donnerstag Vormittag", "Freitag Nachmittag"], correctIndex: 1, explanation: "Sie einigen sich auf Donnerstag Vormittag." },
    ],
  },

  // ── B2 ──
  {
    id: "cd-b2-01",
    level: "B2",
    title: "Radio news report",
    titleDe: "Radionachricht",
    category: "news",
    lines: [
      { speaker: "Sprecher", text: "Und nun zu den Nachrichten. Die Bundesregierung hat heute ein neues Klimaschutzpaket vorgestellt. Demnach sollen die CO2-Emissionen bis 2035 um 65 Prozent gegenüber dem Niveau von 1990 gesenkt werden." },
      { speaker: "Sprecher", text: "Kernpunkte des Pakets sind ein beschleunigter Ausbau erneuerbarer Energien, ein Verbot neuer Ölheizungen ab 2026 und eine Erhöhung der CO2-Steuer auf 55 Euro pro Tonne." },
      { speaker: "Sprecher", text: "Umweltverbände begrüßten die Maßnahmen grundsätzlich, kritisierten jedoch, dass sie nicht weit genug gingen. Der Vorsitzende des BUND nannte das Paket einen Schritt in die richtige Richtung, der aber noch deutlich ambitionierter hätte ausfallen müssen." },
      { speaker: "Sprecher", text: "Die Industrie hingegen warnte vor den wirtschaftlichen Folgen. Der Bundesverband der Deutschen Industrie bezeichnete die geplante Steuererhöhung als wettbewerbsgefährdend." },
    ],
    questions: [
      { question: "Um wie viel Prozent sollen die CO2-Emissionen bis 2035 sinken?", options: ["45 Prozent", "55 Prozent", "65 Prozent"], correctIndex: 2, explanation: "Die Emissionen sollen um 65 Prozent gesenkt werden." },
      { question: "Was passiert ab 2026?", options: ["Neue Ölheizungen werden verboten", "Die CO2-Steuer wird abgeschafft", "Alle Autos müssen elektrisch sein"], correctIndex: 0, explanation: "Ab 2026 sollen neue Ölheizungen verboten werden." },
      { question: "Was kritisieren die Umweltverbände?", options: ["Das Paket ist zu streng", "Das Paket geht nicht weit genug", "Das Paket ist zu teuer"], correctIndex: 1, explanation: "Umweltverbände kritisieren, dass die Maßnahmen nicht weit genug gehen." },
      { question: "Was befürchtet die Industrie?", options: ["Arbeitsplatzverluste", "Negative Auswirkungen auf die Wettbewerbsfähigkeit", "Höhere Löhne"], correctIndex: 1, explanation: "Die Industrie bezeichnet die Steuererhöhung als 'wettbewerbsgefährdend'." },
    ],
  },

  // ── C1 ──
  {
    id: "cd-c1-01",
    level: "C1",
    title: "University lecture excerpt",
    titleDe: "Auszug aus einer Vorlesung",
    category: "academic",
    lines: [
      { speaker: "Professor", text: "Kommen wir nun zum zentralen Aspekt der heutigen Vorlesung: der Frage, inwieweit sprachliche Strukturen unser Denken determinieren." },
      { speaker: "Professor", text: "Die sogenannte Sapir-Whorf-Hypothese postuliert in ihrer starken Variante, dass die Sprache, die wir sprechen, unsere Wahrnehmung der Wirklichkeit grundlegend formt. Ein oft zitiertes Beispiel sind die angeblich zahlreichen Wörter für Schnee in den Inuit-Sprachen." },
      { speaker: "Professor", text: "Neuere Forschungen haben diese starke Variante weitgehend widerlegt. Allerdings stützen empirische Studien durchaus die schwache Variante — dass Sprache gewisse kognitive Tendenzen begünstigt, ohne das Denken vollständig zu bestimmen." },
      { speaker: "Professor", text: "Pinker hat in diesem Zusammenhang argumentiert, dass Gedanken in einem sprachunabhängigen 'Mentalese' kodiert werden. Die Gegenposition vertritt Boroditsky, die in Experimenten zeigen konnte, dass Sprecher verschiedener Sprachen tatsächlich unterschiedlich über Zeit und Raum denken." },
    ],
    questions: [
      { question: "Was besagt die starke Variante der Sapir-Whorf-Hypothese?", options: ["Sprache beeinflusst das Denken leicht", "Sprache determiniert unser Denken grundlegend", "Sprache und Denken sind unabhängig"], correctIndex: 1, explanation: "Die starke Variante postuliert, dass Sprache unsere Wahrnehmung grundlegend formt." },
      { question: "Was sagen neuere Forschungen?", options: ["Die starke Variante ist bestätigt", "Die starke Variante ist widerlegt, die schwache wird gestützt", "Beide Varianten sind widerlegt"], correctIndex: 1, explanation: "Die starke Variante wurde widerlegt, empirische Studien stützen aber die schwache Variante." },
      { question: "Was ist Pinkers Position?", options: ["Sprache formt das Denken", "Gedanken werden sprachunabhängig kodiert", "Es gibt kein Denken ohne Sprache"], correctIndex: 1, explanation: "Pinker argumentiert, dass Gedanken in einem sprachunabhängigen 'Mentalese' kodiert werden." },
    ],
  },

  // ── Additional B1 ──
  {
    id: "cd-b1-02",
    level: "B1",
    title: "At the doctor",
    titleDe: "Beim Arzt",
    category: "health",
    lines: [
      { speaker: "Arzt", text: "Guten Tag, was führt Sie zu mir?" },
      { speaker: "Patient", text: "Ich habe seit drei Tagen starke Kopfschmerzen und mir ist schwindelig." },
      { speaker: "Arzt", text: "Haben Sie Fieber oder andere Beschwerden?" },
      { speaker: "Patient", text: "Nein, kein Fieber. Aber ich schlafe schlecht und bin sehr müde." },
      { speaker: "Arzt", text: "Trinken Sie genug Wasser? Das könnte mit Dehydrierung zusammenhängen." },
      { speaker: "Patient", text: "Ehrlich gesagt, ich trinke meistens nur Kaffee." },
      { speaker: "Arzt", text: "Ich empfehle Ihnen, mindestens zwei Liter Wasser am Tag zu trinken. Ich verschreibe Ihnen auch ein Schmerzmittel." },
    ],
    questions: [
      { question: "Was sind die Symptome des Patienten?", options: ["Fieber und Husten", "Kopfschmerzen und Schwindel", "Bauchschmerzen"], correctIndex: 1, explanation: "Der Patient hat Kopfschmerzen und Schwindel." },
      { question: "Was empfiehlt der Arzt?", options: ["Eine Operation", "Mehr Wasser trinken", "Sport treiben"], correctIndex: 1, explanation: "Der Arzt empfiehlt mindestens zwei Liter Wasser pro Tag." },
    ],
  },
  {
    id: "cd-b1-03",
    level: "B1",
    title: "Parent-teacher conference",
    titleDe: "Elternabend",
    category: "school",
    lines: [
      { speaker: "Lehrerin", text: "Frau Schmidt, schön, dass Sie kommen konnten. Ich möchte über Lenas Leistungen sprechen." },
      { speaker: "Mutter", text: "Natürlich. Wie läuft es denn in der Schule?" },
      { speaker: "Lehrerin", text: "In Mathematik ist Lena sehr stark, aber in Deutsch hat sie Schwierigkeiten mit der Rechtschreibung." },
      { speaker: "Mutter", text: "Das stimmt, sie liest leider nicht so gern zu Hause." },
      { speaker: "Lehrerin", text: "Vielleicht könnten Sie ihr Bücher kaufen, die sie interessieren? Comics zum Beispiel sind ein guter Anfang." },
      { speaker: "Mutter", text: "Das ist eine gute Idee. Ich werde es versuchen." },
    ],
    questions: [
      { question: "In welchem Fach hat Lena Probleme?", options: ["Mathematik", "Deutsch", "Englisch"], correctIndex: 1, explanation: "Lena hat Schwierigkeiten mit der Rechtschreibung in Deutsch." },
      { question: "Was schlägt die Lehrerin vor?", options: ["Nachhilfe", "Bücher kaufen, die Lena interessieren", "Mehr Hausaufgaben"], correctIndex: 1, explanation: "Die Lehrerin schlägt vor, interessante Bücher wie Comics zu kaufen." },
    ],
  },

  // ── Additional B2 ──
  {
    id: "cd-b2-02",
    level: "B2",
    title: "Insurance phone call",
    titleDe: "Versicherungsgespräch",
    category: "bureaucracy",
    lines: [
      { speaker: "Mitarbeiterin", text: "Guten Tag, hier ist die Allianz Versicherung. Mein Name ist Frau Weber. Was kann ich für Sie tun?" },
      { speaker: "Kunde", text: "Guten Tag. Ich hatte letzte Woche einen Wasserschaden in meiner Wohnung und möchte diesen melden." },
      { speaker: "Mitarbeiterin", text: "Das tut mir leid. Können Sie mir bitte Ihre Versicherungsnummer nennen?" },
      { speaker: "Kunde", text: "Ja, die lautet VN-4823-7591." },
      { speaker: "Mitarbeiterin", text: "Danke. Wann genau ist der Schaden entstanden und was ist passiert?" },
      { speaker: "Kunde", text: "Am Dienstag, dem 15. Juni. Eine Leitung unter dem Waschbecken ist geplatzt, und das Wasser hat den Parkett-Boden beschädigt." },
      { speaker: "Mitarbeiterin", text: "Haben Sie den Schaden bereits dokumentiert? Wir brauchen Fotos und idealerweise einen Kostenvoranschlag." },
      { speaker: "Kunde", text: "Fotos habe ich, den Kostenvoranschlag lasse ich gerade erstellen." },
      { speaker: "Mitarbeiterin", text: "Gut. Bitte senden Sie alles per E-Mail an schaden@allianz.de. Wir bearbeiten Ihren Fall innerhalb von zehn Werktagen." },
    ],
    questions: [
      { question: "Was ist passiert?", options: ["Ein Autounfall", "Ein Wasserschaden", "Ein Einbruch"], correctIndex: 1, explanation: "Eine Leitung ist geplatzt und hat den Boden beschädigt." },
      { question: "Welche Unterlagen werden benötigt?", options: ["Nur die Versicherungsnummer", "Fotos und ein Kostenvoranschlag", "Ein Polizeibericht"], correctIndex: 1, explanation: "Die Versicherung braucht Fotos und einen Kostenvoranschlag." },
      { question: "Wie lange dauert die Bearbeitung?", options: ["Sofort", "Innerhalb von zehn Werktagen", "Ein Monat"], correctIndex: 1, explanation: "Der Fall wird innerhalb von zehn Werktagen bearbeitet." },
    ],
  },
  {
    id: "cd-b2-03",
    level: "B2",
    title: "Job interview",
    titleDe: "Bewerbungsgespräch",
    category: "work",
    lines: [
      { speaker: "Personalchef", text: "Frau Yilmaz, erzählen Sie uns bitte, warum Sie sich bei uns beworben haben." },
      { speaker: "Bewerberin", text: "Ich verfolge die Entwicklung Ihres Unternehmens seit Langem. Besonders die Nachhaltigkeitsstrategie hat mich überzeugt." },
      { speaker: "Personalchef", text: "Und welche Erfahrungen bringen Sie mit?" },
      { speaker: "Bewerberin", text: "In meiner aktuellen Position habe ich drei Jahre lang das Marketing-Team geleitet und den Umsatz um zwanzig Prozent gesteigert." },
      { speaker: "Personalchef", text: "Beeindruckend. Wie gehen Sie mit stressigen Situationen um?" },
      { speaker: "Bewerberin", text: "Ich priorisiere Aufgaben und kommuniziere offen im Team. In meiner letzten Position hatten wir ein Projekt mit sehr knapper Deadline, das wir trotzdem erfolgreich abgeschlossen haben." },
      { speaker: "Personalchef", text: "Sehr gut. Wann könnten Sie bei uns anfangen?" },
      { speaker: "Bewerberin", text: "Nach meiner Kündigungsfrist, also ab dem ersten September." },
    ],
    questions: [
      { question: "Warum hat sich die Bewerberin beworben?", options: ["Wegen des Gehalts", "Wegen der Nachhaltigkeitsstrategie", "Wegen der Nähe zur Wohnung"], correctIndex: 1, explanation: "Sie war von der Nachhaltigkeitsstrategie des Unternehmens überzeugt." },
      { question: "Um wie viel hat sie den Umsatz gesteigert?", options: ["10%", "20%", "30%"], correctIndex: 1, explanation: "Sie hat den Umsatz um zwanzig Prozent gesteigert." },
      { question: "Wann könnte sie anfangen?", options: ["Sofort", "Ab dem 1. September", "Nächstes Jahr"], correctIndex: 1, explanation: "Sie kann nach ihrer Kündigungsfrist ab dem 1. September anfangen." },
    ],
  },

  // ── Additional C1 ──
  {
    id: "cd-c1-02",
    level: "C1",
    title: "Team meeting",
    titleDe: "Unternehmensmeeting",
    category: "business",
    lines: [
      { speaker: "Projektleiter", text: "Kolleginnen und Kollegen, ich möchte heute den Stand des Q3-Projekts besprechen. Wir liegen derzeit zwei Wochen hinter dem Zeitplan." },
      { speaker: "Entwicklerin", text: "Das liegt hauptsächlich an der Schnittstellenmigration. Die alte API war nicht so gut dokumentiert wie angenommen." },
      { speaker: "Projektleiter", text: "Verstehe. Wie schätzen Sie den Mehraufwand ein?" },
      { speaker: "Entwicklerin", text: "Realistisch gesehen brauchen wir noch drei bis vier Wochen für die Migration. Danach sollte die Integration deutlich schneller gehen." },
      { speaker: "Vertriebsleiter", text: "Das ist problematisch. Der Kunde erwartet eine Demo am 15. Oktober. Können wir eine reduzierte Version zeigen?" },
      { speaker: "Projektleiter", text: "Das wäre eine Option. Frau Berger, wäre ein Minimal Viable Product bis dahin machbar?" },
      { speaker: "Entwicklerin", text: "Wenn wir den Reporting-Teil zunächst ausklammern, ja. Die Kernfunktionalität wäre bis Mitte Oktober einsatzbereit." },
      { speaker: "Projektleiter", text: "Gut, dann machen wir das so. Ich informiere den Kunden über den angepassten Umfang." },
    ],
    questions: [
      { question: "Wie weit liegt das Projekt hinter dem Plan?", options: ["Eine Woche", "Zwei Wochen", "Einen Monat"], correctIndex: 1, explanation: "Das Projekt liegt zwei Wochen hinter dem Zeitplan." },
      { question: "Was verursacht die Verzögerung?", options: ["Personalmangel", "Schlechte API-Dokumentation", "Budgetkürzungen"], correctIndex: 1, explanation: "Die alte API war nicht gut dokumentiert, was die Migration verzögert." },
      { question: "Was wird für die Demo vorgeschlagen?", options: ["Die Demo verschieben", "Eine reduzierte Version ohne Reporting zeigen", "Das Projekt abbrechen"], correctIndex: 1, explanation: "Sie werden ein MVP ohne den Reporting-Teil zeigen." },
    ],
  },
  {
    id: "cd-c1-03",
    level: "C1",
    title: "Panel discussion on urban development",
    titleDe: "Podiumsdiskussion über Stadtentwicklung",
    category: "academic",
    lines: [
      { speaker: "Moderator", text: "Herzlich willkommen zu unserer Podiumsdiskussion zum Thema nachhaltige Stadtentwicklung. Frau Professor Schneider, wie bewerten Sie die aktuelle Situation?" },
      { speaker: "Professorin", text: "Die Verdichtung der Innenstädte führt zu einer zunehmenden Flächenkonkurrenz. Wir stehen vor dem Dilemma, einerseits bezahlbaren Wohnraum zu schaffen und andererseits Grünflächen zu erhalten." },
      { speaker: "Stadtrat", text: "Als Kommunalpolitiker muss ich betonen, dass wir in den letzten fünf Jahren dreitausend neue Sozialwohnungen gebaut haben. Das reicht aber bei Weitem nicht aus." },
      { speaker: "Architektin", text: "Ich plädiere für einen integrativen Ansatz: Vertikale Gärten, begrünte Fassaden und gemischte Nutzungskonzepte können den Zielkonflikt entschärfen." },
      { speaker: "Professorin", text: "Das stimmt grundsätzlich, aber solche Lösungen sind kostenintensiv und setzen politischen Willen voraus, der in vielen Kommunen schlichtweg fehlt." },
    ],
    questions: [
      { question: "Was ist das zentrale Dilemma?", options: ["Mehr Straßen oder mehr Parks", "Bezahlbarer Wohnraum vs. Grünflächen", "Tourismus vs. Wohnen"], correctIndex: 1, explanation: "Das Dilemma ist der Konflikt zwischen Wohnungsbau und Grünflächenerhalt." },
      { question: "Was schlägt die Architektin vor?", options: ["Abriss alter Gebäude", "Vertikale Gärten und gemischte Nutzungskonzepte", "Umzug aufs Land"], correctIndex: 1, explanation: "Sie plädiert für vertikale Gärten, begrünte Fassaden und Mischnutzung." },
      { question: "Was kritisiert die Professorin?", options: ["Die Kosten und fehlenden politischen Willen", "Zu viele Grünflächen", "Die Architektur"], correctIndex: 1, explanation: "Sie weist darauf hin, dass die Lösungen kostenintensiv sind und politischer Wille fehlt." },
    ],
  },
];

export function getDictationByLevel(level: string): DictationSentence[] {
  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
  return dictationSentences.filter(s => levels.indexOf(s.level) <= levels.indexOf(level));
}

export function getDialoguesByLevel(level: string): ComprehensionDialogue[] {
  return comprehensionDialogues.filter(d => d.level === level);
}
