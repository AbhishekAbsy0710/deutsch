import { readingPassagesA1A2 } from "./reading-passages-a1a2";
import { readingPassagesB1B2 } from "./reading-passages-b1b2";
import { readingPassagesC1C2 } from "./reading-passages-c1c2";

export interface ReadingPassage {
  id: string;
  level: string;
  category: "daily-life" | "news" | "culture" | "story" | "formal" | "academic";
  title: string;
  titleDe: string;
  text: string;
  wordCount: number;
  vocabulary: { word: string; meaning: string; }[];
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export const readingPassages: ReadingPassage[] = [
  // ── A1 ──────────────────────────────────────────────────
  {
    id: "a1-read-1",
    level: "A1",
    category: "daily-life",
    title: "At the Café",
    titleDe: "Im Café",
    text: `Anna geht heute ins Café. Sie bestellt einen Kaffee und ein Stück Kuchen. Der Kaffee kostet 3,50 Euro und der Kuchen kostet 4,20 Euro. Anna sitzt am Fenster und liest ein Buch. Es ist Samstag und das Wetter ist schön. Anna ist glücklich. Um drei Uhr geht sie nach Hause.`,
    wordCount: 47,
    vocabulary: [
      { word: "bestellt", meaning: "orders" },
      { word: "Stück", meaning: "piece" },
      { word: "Fenster", meaning: "window" },
      { word: "glücklich", meaning: "happy" },
    ],
    questions: [
      {
        question: "Was bestellt Anna?",
        options: ["Tee und Kuchen", "Kaffee und Kuchen", "Kaffee und Brot"],
        correctIndex: 1,
        explanation: "Anna bestellt einen Kaffee und ein Stück Kuchen.",
      },
      {
        question: "Wie viel kostet der Kaffee?",
        options: ["4,20 Euro", "3,00 Euro", "3,50 Euro"],
        correctIndex: 2,
        explanation: "Der Kaffee kostet 3,50 Euro.",
      },
      {
        question: "Welcher Tag ist es?",
        options: ["Sonntag", "Samstag", "Montag"],
        correctIndex: 1,
        explanation: "Es ist Samstag.",
      },
    ],
  },
  {
    id: "a1-read-2",
    level: "A1",
    category: "daily-life",
    title: "My Morning",
    titleDe: "Mein Morgen",
    text: `Ich stehe um 7 Uhr auf. Zuerst dusche ich und dann frühstücke ich. Ich esse Brot mit Käse und trinke Orangensaft. Um 8 Uhr fahre ich mit dem Bus zur Arbeit. Die Busfahrt dauert 20 Minuten. Meine Kollegin Maria sagt: 'Guten Morgen!' Ich sage: 'Guten Morgen, Maria! Wie geht es dir?' Sie antwortet: 'Gut, danke!'`,
    wordCount: 52,
    vocabulary: [
      { word: "aufstehen", meaning: "to get up" },
      { word: "frühstücken", meaning: "to have breakfast" },
      { word: "Busfahrt", meaning: "bus ride" },
      { word: "dauert", meaning: "takes/lasts" },
    ],
    questions: [
      {
        question: "Wann steht die Person auf?",
        options: ["Um 6 Uhr", "Um 7 Uhr", "Um 8 Uhr"],
        correctIndex: 1,
        explanation: "Die Person steht um 7 Uhr auf.",
      },
      {
        question: "Was isst die Person zum Frühstück?",
        options: ["Brot mit Käse", "Müsli mit Milch", "Eier mit Toast"],
        correctIndex: 0,
        explanation: "Die Person isst Brot mit Käse.",
      },
      {
        question: "Wie lange dauert die Busfahrt?",
        options: ["10 Minuten", "30 Minuten", "20 Minuten"],
        correctIndex: 2,
        explanation: "Die Busfahrt dauert 20 Minuten.",
      },
    ],
  },

  // ── A2 ──────────────────────────────────────────────────
  {
    id: "a2-read-1",
    level: "A2",
    category: "daily-life",
    title: "Looking for an Apartment",
    titleDe: "Wohnungssuche",
    text: `Seit zwei Wochen suche ich eine neue Wohnung. Gestern habe ich eine Anzeige im Internet gefunden: '2-Zimmer-Wohnung, 55 qm, Altbau, Balkon, 650 Euro kalt." Die Wohnung liegt in der Schillerstraße, direkt neben einer U-Bahn-Station. Ich habe sofort eine E-Mail geschrieben und heute Morgen hat der Vermieter geantwortet. Am Donnerstag um 16 Uhr kann ich die Wohnung besichtigen. Ich bin aufgeregt, weil die Wohnung perfekt klingt! Hoffentlich gefällt sie mir auch in Wirklichkeit.`,
    wordCount: 78,
    vocabulary: [
      { word: "Anzeige", meaning: "advertisement/listing" },
      { word: "Altbau", meaning: "old building (pre-1949)" },
      { word: "kalt", meaning: "cold rent (without utilities)" },
      { word: "besichtigen", meaning: "to view/inspect" },
      { word: "aufgeregt", meaning: "excited" },
    ],
    questions: [
      {
        question: "Wie groß ist die Wohnung?",
        options: ["45 qm", "55 qm", "65 qm"],
        correctIndex: 1,
        explanation: "Die Wohnung hat 55 Quadratmeter.",
      },
      {
        question: "Was bedeutet '650 Euro kalt'?",
        options: ["Miete mit Heizung", "Miete ohne Nebenkosten", "Miete mit allem"],
        correctIndex: 1,
        explanation: "'Kalt' bedeutet ohne Nebenkosten (Heizung, Wasser, etc.).",
      },
      {
        question: "Wann kann die Person die Wohnung besichtigen?",
        options: ["Mittwoch um 14 Uhr", "Donnerstag um 16 Uhr", "Freitag um 10 Uhr"],
        correctIndex: 1,
        explanation: "Am Donnerstag um 16 Uhr kann die Person die Wohnung besichtigen.",
      },
    ],
  },
  {
    id: "a2-read-2",
    level: "A2",
    category: "culture",
    title: "Recycling in Germany",
    titleDe: "Mülltrennung in Deutschland",
    text: `In Deutschland ist Mülltrennung sehr wichtig. Es gibt verschiedene Tonnen: Die gelbe Tonne ist für Plastik und Verpackungen. Die blaue Tonne ist für Papier und Karton. Die braune oder grüne Tonne ist für Bioabfall — also Essensreste und Gartenabfall. Die graue Tonne ist für Restmüll. Außerdem gibt es Glascontainer für weißes, grünes und braunes Glas. Wenn man falsch trennt, kann es eine Strafe geben. Viele Ausländer finden das am Anfang kompliziert, aber nach ein paar Wochen wird es normal.`,
    wordCount: 82,
    vocabulary: [
      { word: "Mülltrennung", meaning: "waste separation/recycling" },
      { word: "Tonnen", meaning: "bins" },
      { word: "Verpackungen", meaning: "packaging" },
      { word: "Restmüll", meaning: "residual waste" },
      { word: "Strafe", meaning: "fine/penalty" },
    ],
    questions: [
      {
        question: "Wofür ist die gelbe Tonne?",
        options: ["Papier", "Plastik und Verpackungen", "Bioabfall"],
        correctIndex: 1,
        explanation: "Die gelbe Tonne ist für Plastik und Verpackungen.",
      },
      {
        question: "Was passiert, wenn man falsch trennt?",
        options: ["Nichts", "Man bekommt eine Strafe", "Die Nachbarn helfen"],
        correctIndex: 1,
        explanation: "Wenn man falsch trennt, kann es eine Strafe geben.",
      },
      {
        question: "Welche Arten von Glas werden getrennt?",
        options: ["Nur klares Glas", "Weißes, grünes und braunes Glas", "Nur Flaschen"],
        correctIndex: 1,
        explanation: "Es gibt Glascontainer für weißes, grünes und braunes Glas.",
      },
    ],
  },

  // ── B1 ──────────────────────────────────────────────────
  {
    id: "b1-read-1",
    level: "B1",
    category: "news",
    title: "Working from Home",
    titleDe: "Homeoffice in Deutschland",
    text: `Seit der Pandemie arbeiten viele Deutsche regelmäßig von zu Hause. Laut einer aktuellen Studie nutzen etwa 25 Prozent der Beschäftigten mindestens einmal pro Woche das Homeoffice. Besonders in der IT-Branche und im Finanzsektor ist die Quote hoch.

Die Vorteile liegen auf der Hand: Man spart Zeit beim Pendeln, kann flexibler arbeiten und hat oft eine bessere Work-Life-Balance. Andererseits berichten viele Arbeitnehmer von Einsamkeit und Schwierigkeiten, Arbeit und Privatleben zu trennen. Manche vermissen den persönlichen Kontakt zu Kollegen.

Experten empfehlen eine Mischung: Zwei bis drei Tage im Büro und zwei Tage zu Hause. So könne man die Vorteile beider Modelle nutzen. Allerdings gibt es in Deutschland noch kein generelles Recht auf Homeoffice — anders als in den Niederlanden, wo Arbeitnehmer seit 2023 einen gesetzlichen Anspruch darauf haben.`,
    wordCount: 130,
    vocabulary: [
      { word: "Beschäftigten", meaning: "employees" },
      { word: "Pendeln", meaning: "commuting" },
      { word: "Einsamkeit", meaning: "loneliness" },
      { word: "Anspruch", meaning: "entitlement/claim" },
    ],
    questions: [
      {
        question: "Wie viel Prozent der Beschäftigten nutzen Homeoffice mindestens einmal pro Woche?",
        options: ["15 Prozent", "25 Prozent", "40 Prozent"],
        correctIndex: 1,
        explanation: "Etwa 25 Prozent der Beschäftigten nutzen mindestens einmal pro Woche das Homeoffice.",
      },
      {
        question: "Was ist laut dem Text ein Nachteil vom Homeoffice?",
        options: ["Höhere Kosten", "Einsamkeit", "Weniger Produktivität"],
        correctIndex: 1,
        explanation: "Viele Arbeitnehmer berichten von Einsamkeit.",
      },
      {
        question: "Was empfehlen Experten?",
        options: ["Nur im Büro arbeiten", "Nur zu Hause arbeiten", "Eine Mischung aus Büro und Homeoffice"],
        correctIndex: 2,
        explanation: "Experten empfehlen eine Mischung: 2-3 Tage Büro, 2 Tage zu Hause.",
      },
      {
        question: "Welches Land hat ein Recht auf Homeoffice?",
        options: ["Deutschland", "Die Niederlande", "Österreich"],
        correctIndex: 1,
        explanation: "In den Niederlanden haben Arbeitnehmer seit 2023 einen gesetzlichen Anspruch auf Homeoffice.",
      },
    ],
  },

  // ── B2 ──────────────────────────────────────────────────
  {
    id: "b2-read-1",
    level: "B2",
    category: "news",
    title: "The 9-Euro-Ticket Experiment",
    titleDe: "Das 9-Euro-Ticket Experiment",
    text: `Im Sommer 2022 führte die Bundesregierung als Reaktion auf steigende Energiepreise das sogenannte 9-Euro-Ticket ein. Drei Monate lang konnten Fahrgäste für nur neun Euro pro Monat den gesamten öffentlichen Nahverkehr in Deutschland nutzen — Busse, Straßenbahnen, U-Bahnen und Regionalzüge inklusive.

Das Ergebnis war bemerkenswert: Rund 52 Millionen Tickets wurden verkauft. Besonders Menschen mit geringem Einkommen profitierten davon, da ihnen der Zugang zu Mobilität ermöglicht wurde, den sie sich sonst nicht hätten leisten können. Gleichzeitig stiegen die Fahrgastzahlen im Nahverkehr deutlich an, was wiederum zu überfüllten Zügen führte — insbesondere auf touristischen Strecken.

Kritiker bemängelten, dass das Ticket zwar populär, aber klimapolitisch wenig wirksam gewesen sei. Studien zeigten, dass nur ein kleiner Teil der Fahrten Autofahrten ersetzte — die meisten waren zusätzliche Reisen. Zudem fehlte es vielen ländlichen Regionen an einem ausreichenden Nahverkehrsangebot, um überhaupt vom Ticket zu profitieren.

Als Nachfolger wurde im Mai 2023 das Deutschlandticket für 49 Euro monatlich eingeführt, das allerdings den Fernverkehr weiterhin ausschließt.`,
    wordCount: 170,
    vocabulary: [
      { word: "Nahverkehr", meaning: "local/public transport" },
      { word: "bemerkenswert", meaning: "remarkable" },
      { word: "bemängelten", meaning: "criticized/objected" },
      { word: "wirksam", meaning: "effective" },
      { word: "ausschließt", meaning: "excludes" },
    ],
    questions: [
      {
        question: "Warum wurde das 9-Euro-Ticket eingeführt?",
        options: ["Wegen der Klimakrise", "Wegen steigender Energiepreise", "Wegen eines Streiks"],
        correctIndex: 1,
        explanation: "Das Ticket wurde als Reaktion auf steigende Energiepreise eingeführt.",
      },
      {
        question: "Was war ein Problem mit dem Ticket?",
        options: ["Niemand kaufte es", "Es war zu teuer", "Die Züge waren überfüllt"],
        correctIndex: 2,
        explanation: "Die Fahrgastzahlen stiegen so stark, dass es zu überfüllten Zügen kam.",
      },
      {
        question: "Was kritisierten Experten am Ticket?",
        options: ["Es war zu teuer für Studierende", "Es ersetzte kaum Autofahrten", "Es galt nur in Großstädten"],
        correctIndex: 1,
        explanation: "Nur ein kleiner Teil der Fahrten ersetzte tatsächlich Autofahrten.",
      },
      {
        question: "Was kostet das Nachfolger-Ticket?",
        options: ["29 Euro", "49 Euro", "69 Euro"],
        correctIndex: 1,
        explanation: "Das Deutschlandticket kostet 49 Euro monatlich.",
      },
    ],
  },

  // ── C1 ──────────────────────────────────────────────────
  {
    id: "c1-read-1",
    level: "C1",
    category: "academic",
    title: "The Decline of Local Newspapers",
    titleDe: "Das Zeitungssterben in Deutschland",
    text: `Das Zeitungssterben in Deutschland hat sich in den vergangenen zwei Jahrzehnten dramatisch beschleunigt. Während im Jahr 2000 noch über 23 Millionen Tageszeitungen täglich verkauft wurden, lag die Auflage 2023 bei lediglich 12,4 Millionen — ein Rückgang um nahezu die Hälfte. Besonders betroffen sind Lokalzeitungen, die für die demokratische Grundversorgung mit Informationen eine kaum zu überschätzende Rolle spielen.

Die Ursachen sind vielschichtig: Zum einen hat die Digitalisierung dazu geführt, dass insbesondere jüngere Leserinnen und Leser Nachrichten überwiegend über soziale Medien und Online-Portale konsumieren. Zum anderen sind die Werbeeinnahmen — traditionell die wirtschaftliche Grundlage des Printjournalismus — massiv ins Internet abgewandert, allen voran zu Plattformen wie Google und Meta.

Die Konsequenzen dieses Strukturwandels reichen weit über die Medienbranche hinaus. In sogenannten 'Nachrichtenwüsten' — Regionen, in denen keine lokale Zeitung mehr erscheint — sinkt nachweislich die Wahlbeteiligung, steigt die Korruption in der Kommunalpolitik und verschlechtert sich die Qualität der öffentlichen Verwaltung. Der Kommunikationswissenschaftler Horst Pöttker spricht in diesem Zusammenhang von einem 'demokratischen Blindflug'.

Verschiedene Lösungsansätze werden diskutiert: staatliche Presseförderung nach skandinavischem Vorbild, gemeinnütziger Journalismus, genossenschaftliche Modelle oder die Einführung einer Plattformabgabe, mit der Tech-Konzerne zur Finanzierung journalistischer Inhalte beitragen müssten. Ob diese Maßnahmen ausreichen, um den Niedergang aufzuhalten, bleibt indes fraglich.`,
    wordCount: 200,
    vocabulary: [
      { word: "Auflage", meaning: "circulation/print run" },
      { word: "Grundversorgung", meaning: "basic provision" },
      { word: "vielschichtig", meaning: "multifaceted" },
      { word: "Nachrichtenwüsten", meaning: "news deserts" },
      { word: "Presseförderung", meaning: "press subsidies" },
    ],
    questions: [
      {
        question: "Um wie viel ist die Zeitungsauflage seit 2000 zurückgegangen?",
        options: ["Um ein Drittel", "Um nahezu die Hälfte", "Um zwei Drittel"],
        correctIndex: 1,
        explanation: "Die Auflage sank von 23 Millionen auf 12,4 Millionen — nahezu die Hälfte.",
      },
      {
        question: "Was ist eine 'Nachrichtenwüste'?",
        options: ["Eine Region mit vielen Zeitungen", "Eine Region ohne lokale Zeitung", "Ein Wüstengebiet in Nordafrika"],
        correctIndex: 1,
        explanation: "Nachrichtenwüsten sind Regionen, in denen keine lokale Zeitung mehr erscheint.",
      },
      {
        question: "Was passiert in Nachrichtenwüsten laut dem Text?",
        options: ["Die Wirtschaft wächst", "Die Wahlbeteiligung sinkt", "Mehr Zeitungen erscheinen"],
        correctIndex: 1,
        explanation: "In Nachrichtenwüsten sinkt die Wahlbeteiligung und steigt die Korruption.",
      },
      {
        question: "Was ist eine 'Plattformabgabe'?",
        options: ["Eine Steuer auf Zeitungen", "Eine Gebühr, die Tech-Konzerne zahlen", "Ein Abo für Soziale Medien"],
        correctIndex: 1,
        explanation: "Eine Plattformabgabe würde Tech-Konzerne zur Finanzierung journalistischer Inhalte verpflichten.",
      },
    ],
  },

  // ── C2 ──────────────────────────────────────────────────
  {
    id: "c2-read-1",
    level: "C2",
    category: "academic",
    title: "Language and Identity",
    titleDe: "Sprache und Identität: Gendergerechte Sprache",
    text: `Die Debatte um gendergerechte Sprache hat sich in den vergangenen Jahren zu einem der polarisierendsten gesellschaftspolitischen Diskurse im deutschsprachigen Raum entwickelt. Befürworterinnen und Befürworter argumentieren, die sprachliche Sichtbarmachung aller Geschlechter sei nicht nur ein Gebot der Gleichstellung, sondern beeinflusse nachweislich die kognitive Repräsentation: Wer 'Ärzte' höre, denke primär an Männer; wer 'Ärztinnen und Ärzte' höre, aktiviere ein diverseres mentales Bild. Psycholinguistische Studien, etwa die vielzitierte Untersuchung von Stahlberg und Sczesny (2001), stützen diese These mit empirischen Daten.

Kritikerinnen und Kritiker hingegen verweisen auf die Lesbarkeit und den ästhetischen Verfall, den Gendersternchen, Doppelpunkte und Binnen-I mit sich brächten. Der Sprachwissenschaftler Peter Eisenberg etwa bezeichnete das Gendern als 'Eingriff in das Sprachsystem, der linguistisch nicht zu rechtfertigen ist" und verwies darauf, dass das generische Maskulinum keineswegs eine semantische, sondern lediglich eine grammatische Kategorie darstelle — ein Argument, das freilich die pragmatische Dimension von Sprache außer Acht lässt.

Bemerkenswert ist, dass die offizielle Haltung gespalten bleibt: Während der Rat für deutsche Rechtschreibung Genderzeichen innerhalb von Wörtern explizit nicht in das amtliche Regelwerk aufgenommen hat, verwenden zahlreiche Universitäten, Medien und öffentliche Institutionen sie selbstverständlich. Dieser Widerspruch zwischen Norm und Praxis spiegelt die tiefgreifende Unsicherheit wider, mit der die Gesellschaft dem Wandel ihrer Kommunikationsformen begegnet.

Die Frage, ob und wie Sprache die Wirklichkeit nicht nur abbildet, sondern aktiv formt, bleibt letztlich eine erkenntnistheoretische — und damit eine, die sich einer einfachen Beantwortung entzieht.`,
    wordCount: 230,
    vocabulary: [
      { word: "polarisierend", meaning: "polarizing" },
      { word: "Sichtbarmachung", meaning: "making visible/representation" },
      { word: "generisches Maskulinum", meaning: "generic masculine" },
      { word: "amtliches Regelwerk", meaning: "official regulations" },
      { word: "erkenntnistheoretisch", meaning: "epistemological" },
    ],
    questions: [
      {
        question: "Was zeigen psycholinguistische Studien laut dem Text?",
        options: [
          "Gendern macht Texte unlesbar",
          "Sprachliche Formen beeinflussen die kognitive Repräsentation",
          "Das generische Maskulinum ist neutral"
        ],
        correctIndex: 1,
        explanation: "Studien zeigen, dass sprachliche Formen die kognitive Repräsentation beeinflussen — z.B. an wen man bei 'Ärzte' denkt.",
      },
      {
        question: "Was kritisiert Peter Eisenberg am Gendern?",
        options: [
          "Es sei ein linguistisch nicht zu rechtfertigender Eingriff ins Sprachsystem",
          "Es sei zu teuer umzusetzen",
          "Es benachteilige Männer"
        ],
        correctIndex: 0,
        explanation: "Eisenberg bezeichnete Gendern als 'Eingriff in das Sprachsystem, der linguistisch nicht zu rechtfertigen ist'.",
      },
      {
        question: "Wie ist die Haltung des Rats für deutsche Rechtschreibung?",
        options: [
          "Er empfiehlt Genderzeichen ausdrücklich",
          "Er hat Genderzeichen in Wörtern nicht ins amtliche Regelwerk aufgenommen",
          "Er hat Genderzeichen verboten"
        ],
        correctIndex: 1,
        explanation: "Der Rat hat Genderzeichen innerhalb von Wörtern nicht in das amtliche Regelwerk aufgenommen.",
      },
      {
        question: "Welche Grundfrage bleibt laut dem Text offen?",
        options: [
          "Ob Gendern Pflicht werden sollte",
          "Ob Sprache die Wirklichkeit nur abbildet oder aktiv formt",
          "Ob Deutsch einfacher werden sollte"
        ],
        correctIndex: 1,
        explanation: "Die erkenntnistheoretische Frage, ob Sprache die Wirklichkeit abbildet oder aktiv formt, bleibt offen.",
      },
    ],
  },
  ...readingPassagesA1A2,
  ...readingPassagesB1B2,
  ...readingPassagesC1C2,
];

export function getPassagesByLevel(level: string): ReadingPassage[] {
  return readingPassages.filter(p => p.level === level);
}
