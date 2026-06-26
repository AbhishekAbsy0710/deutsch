import { DictationSentence, ComprehensionDialogue } from "./listening-data";

// ── Additional Dictation Sentences (B2-C2) ──────────────────
export const dictationSentencesExpanded: DictationSentence[] = [
  // B2
  { id: "d-b2-ex-01", level: "B2", text: "Trotz der wirtschaftlichen Schwierigkeiten bleibt die Arbeitslosenquote niedrig.", translation: "Despite economic difficulties, the unemployment rate remains low.", category: "news" },
  { id: "d-b2-ex-02", level: "B2", text: "Es wäre wünschenswert, dass sich mehr junge Menschen politisch engagieren.", translation: "It would be desirable for more young people to get politically involved.", category: "konjunktiv" },
  { id: "d-b2-ex-03", level: "B2", text: "Der Einfluss sozialer Medien auf die Meinungsbildung wird häufig unterschätzt.", translation: "The influence of social media on opinion formation is often underestimated.", category: "academic" },
  { id: "d-b2-ex-04", level: "B2", text: "Sowohl die Qualität als auch der Preis spielen bei der Kaufentscheidung eine Rolle.", translation: "Both quality and price play a role in the purchase decision.", category: "formal" },
  { id: "d-b2-ex-05", level: "B2", text: "Die Studie kommt zu dem Ergebnis, dass regelmäßige Bewegung das Demenzrisiko senkt.", translation: "The study concludes that regular exercise reduces the risk of dementia.", category: "science" },

  // C1
  { id: "d-c1-ex-01", level: "C1", text: "Die zunehmende Fragmentierung des öffentlichen Diskurses stellt die Demokratie vor neue Herausforderungen.", translation: "The increasing fragmentation of public discourse poses new challenges for democracy.", category: "academic" },
  { id: "d-c1-ex-02", level: "C1", text: "Inwiefern die Digitalisierung zu einer Vertiefung oder Überwindung sozialer Ungleichheiten beiträgt, bleibt umstritten.", translation: "The extent to which digitalization contributes to deepening or overcoming social inequalities remains disputed.", category: "academic" },
  { id: "d-c1-ex-03", level: "C1", text: "Die Verhandlungsparteien konnten sich nach zähem Ringen auf einen Kompromiss einigen.", translation: "The negotiating parties were able to agree on a compromise after tough negotiations.", category: "news" },
  { id: "d-c1-ex-04", level: "C1", text: "Es bedarf eines grundlegenden Umdenkens in der Gesellschaft, um den Klimawandel wirksam zu bekämpfen.", translation: "A fundamental rethinking in society is needed to effectively combat climate change.", category: "formal" },
  { id: "d-c1-ex-05", level: "C1", text: "Der Beschuldigte hat gegen den Strafbefehl fristgerecht Einspruch eingelegt.", translation: "The accused lodged an objection against the penal order within the deadline.", category: "legal" },
  { id: "d-c1-ex-06", level: "C1", text: "Die Korrelation zwischen Bildungsniveau und Lebenserwartung ist statistisch signifikant.", translation: "The correlation between education level and life expectancy is statistically significant.", category: "science" },
  { id: "d-c1-ex-07", level: "C1", text: "Unbeschadet der geltenden Vorschriften behalten sich die Vertragsparteien das Recht auf Nachverhandlungen vor.", translation: "Without prejudice to the applicable regulations, the contracting parties reserve the right to renegotiate.", category: "legal" },

  // C2
  { id: "d-c2-ex-01", level: "C2", text: "Die epistemologische Grundlegung des Konstruktivismus erhebt den Anspruch, die Dichotomie von Subjekt und Objekt zu überwinden.", translation: "The epistemological foundation of constructivism claims to overcome the dichotomy of subject and object.", category: "philosophy" },
  { id: "d-c2-ex-02", level: "C2", text: "Die Ambivalenz des Fortschrittsbegriffs manifestiert sich in der dialektischen Spannung zwischen technologischer Innovation und ökologischer Zerstörung.", translation: "The ambivalence of the concept of progress manifests in the dialectical tension between technological innovation and ecological destruction.", category: "philosophy" },
  { id: "d-c2-ex-03", level: "C2", text: "Wenngleich die empirische Evidenz für einen kausalen Zusammenhang spricht, verbietet sich eine vorschnelle Generalisierung.", translation: "Although empirical evidence suggests a causal connection, hasty generalization is not permissible.", category: "academic" },
  { id: "d-c2-ex-04", level: "C2", text: "Die hermeneutische Auslegung des Textes offenbart Bedeutungsschichten, die sich einer oberflächlichen Lektüre entziehen.", translation: "The hermeneutic interpretation of the text reveals layers of meaning that elude superficial reading.", category: "literary" },
  { id: "d-c2-ex-05", level: "C2", text: "Der Feuilleton-Artikel oszilliert geschickt zwischen ironischer Distanz und empathischer Anteilnahme.", translation: "The Feuilleton article skillfully oscillates between ironic distance and empathetic compassion.", category: "literary" },
  { id: "d-c2-ex-06", level: "C2", text: "Es obliegt dem Gesetzgeber, den Spannungsbogen zwischen individueller Freiheit und kollektiver Verantwortung verfassungskonform aufzulösen.", translation: "It is incumbent upon the legislator to resolve the tension between individual freedom and collective responsibility in a constitutionally compliant manner.", category: "legal" },
  { id: "d-c2-ex-07", level: "C2", text: "Die phänomenologische Reduktion suspendiert die natürliche Einstellung, um die intentionale Struktur des Bewusstseins freizulegen.", translation: "The phenomenological reduction suspends the natural attitude in order to reveal the intentional structure of consciousness.", category: "philosophy" },
  { id: "d-c2-ex-08", level: "C2", text: "Sein proustianischer Erzählstil, der mäandernd zwischen Erinnerung und Reflexion pendelt, mutet dem Leser Geduld und Konzentration zu.", translation: "His Proustian narrative style, meandering between memory and reflection, demands patience and concentration from the reader.", category: "literary" },
];


// ── Additional Comprehension Dialogues ──────────────────────
export const comprehensionDialoguesExpanded: ComprehensionDialogue[] = [
  // ── A1 ──
  {
    id: "cd-a1-ex-01",
    level: "A1",
    title: "At the pharmacy",
    titleDe: "In der Apotheke",
    category: "daily",
    lines: [
      { speaker: "Apothekerin", text: "Guten Tag! Wie kann ich Ihnen helfen?" },
      { speaker: "Kunde", text: "Guten Tag. Ich habe Kopfschmerzen. Haben Sie etwas dagegen?" },
      { speaker: "Apothekerin", text: "Ja, natürlich. Ich empfehle Ihnen Aspirin. Nehmen Sie eine Tablette mit Wasser." },
      { speaker: "Kunde", text: "Wie oft soll ich die Tablette nehmen?" },
      { speaker: "Apothekerin", text: "Maximal drei Tabletten pro Tag. Nicht auf leeren Magen." },
      { speaker: "Kunde", text: "Was kostet das?" },
      { speaker: "Apothekerin", text: "Das kostet vier Euro fünfzig." },
      { speaker: "Kunde", text: "Gut, ich nehme es. Danke!" },
    ],
    questions: [
      { question: "Was hat der Kunde?", options: ["Bauchschmerzen", "Kopfschmerzen", "Fieber"], correctIndex: 1, explanation: "Der Kunde sagt: Ich habe Kopfschmerzen." },
      { question: "Wie viele Tabletten darf man maximal nehmen?", options: ["Eine", "Zwei", "Drei pro Tag"], correctIndex: 2, explanation: "Maximal drei Tabletten pro Tag." },
    ],
  },
  {
    id: "cd-a1-ex-02",
    level: "A1",
    title: "Asking for directions",
    titleDe: "Nach dem Weg fragen",
    category: "daily",
    lines: [
      { speaker: "Tourist", text: "Entschuldigung, wie komme ich zum Bahnhof?" },
      { speaker: "Passant", text: "Gehen Sie hier geradeaus, dann die zweite Straße links." },
      { speaker: "Tourist", text: "Die zweite links? Ist es weit?" },
      { speaker: "Passant", text: "Nein, ungefähr zehn Minuten zu Fuß." },
      { speaker: "Tourist", text: "Und gibt es dort eine U-Bahn-Station?" },
      { speaker: "Passant", text: "Ja, direkt am Bahnhof. Die U-Bahn-Station heißt Hauptbahnhof." },
      { speaker: "Tourist", text: "Vielen Dank!" },
      { speaker: "Passant", text: "Gern geschehen!" },
    ],
    questions: [
      { question: "Wohin will der Tourist?", options: ["Zum Flughafen", "Zum Bahnhof", "Zum Hotel"], correctIndex: 1, explanation: "Der Tourist fragt: Wie komme ich zum Bahnhof?" },
      { question: "Wie weit ist es?", options: ["5 Minuten", "10 Minuten", "20 Minuten"], correctIndex: 1, explanation: "Ungefähr zehn Minuten zu Fuß." },
    ],
  },

  // ── A2 ──
  {
    id: "cd-a2-ex-01",
    level: "A2",
    title: "At the restaurant",
    titleDe: "Im Restaurant bestellen",
    category: "daily",
    lines: [
      { speaker: "Kellner", text: "Guten Abend! Haben Sie reserviert?" },
      { speaker: "Gast", text: "Ja, auf den Namen Müller, für zwei Personen." },
      { speaker: "Kellner", text: "Ah ja, hier bitte. Möchten Sie schon etwas trinken?" },
      { speaker: "Gast", text: "Ich hätte gern ein Glas Weißwein und ein Wasser ohne Kohlensäure." },
      { speaker: "Kellner", text: "Sehr gern. Hier ist die Speisekarte." },
      { speaker: "Gast", text: "Was empfehlen Sie heute?" },
      { speaker: "Kellner", text: "Das Wiener Schnitzel ist heute besonders gut. Mit Kartoffelsalat." },
      { speaker: "Gast", text: "Das klingt gut. Einmal das Schnitzel und einmal die Gemüsesuppe, bitte." },
      { speaker: "Kellner", text: "Kommt sofort!" },
    ],
    questions: [
      { question: "Auf welchen Namen ist die Reservierung?", options: ["Schmidt", "Müller", "Fischer"], correctIndex: 1, explanation: "Auf den Namen Müller." },
      { question: "Was empfiehlt der Kellner?", options: ["Fisch", "Wiener Schnitzel", "Pizza"], correctIndex: 1, explanation: "Der Kellner empfiehlt das Wiener Schnitzel." },
      { question: "Was trinkt der Gast?", options: ["Bier und Saft", "Rotwein und Wasser", "Weißwein und Wasser ohne Kohlensäure"], correctIndex: 2, explanation: "Ein Glas Weißwein und ein Wasser ohne Kohlensäure." },
    ],
  },
  {
    id: "cd-a2-ex-02",
    level: "A2",
    title: "At the post office",
    titleDe: "Auf der Post",
    category: "daily",
    lines: [
      { speaker: "Kunde", text: "Guten Tag! Ich möchte dieses Paket nach Frankreich schicken." },
      { speaker: "Mitarbeiterin", text: "Guten Tag. Wie schwer ist das Paket?" },
      { speaker: "Kunde", text: "Ungefähr zwei Kilo." },
      { speaker: "Mitarbeiterin", text: "In Ordnung. Möchten Sie es als Standardversand oder Expressversand schicken?" },
      { speaker: "Kunde", text: "Was ist der Unterschied?" },
      { speaker: "Mitarbeiterin", text: "Standard dauert fünf bis sieben Tage und kostet 9,50 Euro. Express dauert zwei Tage und kostet 16 Euro." },
      { speaker: "Kunde", text: "Standard reicht. Und ich brauche noch fünf Briefmarken für Postkarten nach Indien." },
      { speaker: "Mitarbeiterin", text: "International? Das sind 1,10 Euro pro Briefmarke. Das macht zusammen 15 Euro." },
    ],
    questions: [
      { question: "Wohin schickt der Kunde das Paket?", options: ["Nach Indien", "Nach Frankreich", "Nach Spanien"], correctIndex: 1, explanation: "Er möchte das Paket nach Frankreich schicken." },
      { question: "Welchen Versand wählt der Kunde?", options: ["Express", "Standard", "Einschreiben"], correctIndex: 1, explanation: "Standard reicht." },
    ],
  },

  // ── B1 ──
  {
    id: "cd-b1-ex-01",
    level: "B1",
    title: "Job interview",
    titleDe: "Vorstellungsgespräch",
    category: "work",
    lines: [
      { speaker: "Personalchefin", text: "Guten Tag, Herr Weber. Schön, dass Sie da sind. Bitte setzen Sie sich." },
      { speaker: "Bewerber", text: "Vielen Dank für die Einladung." },
      { speaker: "Personalchefin", text: "Sie haben sich für die Stelle als Marketingassistent beworben. Erzählen Sie mir bitte etwas über sich." },
      { speaker: "Bewerber", text: "Ich habe Betriebswirtschaft studiert und vor zwei Monaten meinen Abschluss gemacht. Während des Studiums habe ich ein Praktikum bei einer Werbeagentur gemacht." },
      { speaker: "Personalchefin", text: "Interessant. Was haben Sie dort gemacht?" },
      { speaker: "Bewerber", text: "Ich habe bei der Planung von Social-Media-Kampagnen geholfen und Marktanalysen erstellt." },
      { speaker: "Personalchefin", text: "Warum möchten Sie bei uns arbeiten?" },
      { speaker: "Bewerber", text: "Ihre Firma ist bekannt für innovative Produkte. Ich möchte gern in einem kreativen Team arbeiten und meine Marketingkenntnisse weiterentwickeln." },
      { speaker: "Personalchefin", text: "Sehr gut. Können Sie uns ab dem 1. März anfangen?" },
      { speaker: "Bewerber", text: "Ja, das passt sehr gut." },
    ],
    questions: [
      { question: "Für welche Stelle hat sich Herr Weber beworben?", options: ["Verkaufsleiter", "Marketingassistent", "Grafikdesigner"], correctIndex: 1, explanation: "Die Stelle als Marketingassistent." },
      { question: "Was hat Herr Weber im Praktikum gemacht?", options: ["Kunden beraten", "Social-Media-Kampagnen und Marktanalysen", "Webseiten programmiert"], correctIndex: 1, explanation: "Social-Media-Kampagnen geplant und Marktanalysen erstellt." },
      { question: "Wann kann Herr Weber anfangen?", options: ["Sofort", "Ab dem 1. März", "Ab dem 1. April"], correctIndex: 1, explanation: "Ab dem 1. März." },
    ],
  },
  {
    id: "cd-b1-ex-02",
    level: "B1",
    title: "At the doctor",
    titleDe: "Beim Arzt",
    category: "health",
    lines: [
      { speaker: "Ärztin", text: "Guten Tag, Herr Keller. Was führt Sie zu mir?" },
      { speaker: "Patient", text: "Ich habe seit einer Woche Rückenschmerzen. Besonders morgens nach dem Aufstehen." },
      { speaker: "Ärztin", text: "Haben Sie schwer gehoben oder Sport gemacht?" },
      { speaker: "Patient", text: "Ja, ich bin umgezogen und habe viele Kisten getragen." },
      { speaker: "Ärztin", text: "Das erklärt es wahrscheinlich. Lassen Sie mich untersuchen... Hier tut es weh?" },
      { speaker: "Patient", text: "Ja, genau da. Und der Schmerz zieht bis ins linke Bein." },
      { speaker: "Ärztin", text: "Das deutet auf eine Muskelverspannung hin. Ich verschreibe Ihnen ein Schmerzmittel und Physiotherapie. Wenn es nach zwei Wochen nicht besser wird, machen wir ein MRT." },
      { speaker: "Patient", text: "Darf ich weiter arbeiten?" },
      { speaker: "Ärztin", text: "Ja, aber vermeiden Sie schweres Heben. Ich schreibe Sie für drei Tage krank." },
    ],
    questions: [
      { question: "Was hat Herr Keller?", options: ["Kopfschmerzen", "Rückenschmerzen", "Halsschmerzen"], correctIndex: 1, explanation: "Er hat seit einer Woche Rückenschmerzen." },
      { question: "Was ist die wahrscheinliche Ursache?", options: ["Zu viel Sport", "Der Umzug und das Kistentragen", "Eine Erkältung"], correctIndex: 1, explanation: "Er ist umgezogen und hat viele Kisten getragen." },
      { question: "Was verschreibt die Ärztin?", options: ["Nur Ruhe", "Schmerzmittel und Physiotherapie", "Eine Operation"], correctIndex: 1, explanation: "Ein Schmerzmittel und Physiotherapie." },
    ],
  },

  // ── B2 ──
  {
    id: "cd-b2-ex-01",
    level: "B2",
    title: "Debate on social media",
    titleDe: "Diskussion über soziale Medien",
    category: "debate",
    lines: [
      { speaker: "Moderator", text: "Heute diskutieren wir die Frage: Sollte die Nutzung sozialer Medien für Kinder unter 14 verboten werden? Frau Lehmann, Sie sind dafür." },
      { speaker: "Frau Lehmann", text: "Ja, absolut. Studien zeigen, dass exzessive Nutzung sozialer Medien zu Angststörungen, Schlafproblemen und Cybermobbing bei Kindern führt. Kinder sind noch nicht in der Lage, die Risiken einzuschätzen." },
      { speaker: "Herr Klein", text: "Da muss ich widersprechen. Ein Verbot ist unrealistisch und bevormundend. Stattdessen sollten wir Medienkompetenz in den Schulen unterrichten. Kinder müssen lernen, verantwortungsvoll mit digitalen Medien umzugehen." },
      { speaker: "Frau Lehmann", text: "Medienkompetenz allein reicht nicht. Die Algorithmen sind so gestaltet, dass sie süchtig machen. Selbst Erwachsene können sich dem kaum entziehen." },
      { speaker: "Herr Klein", text: "Dann sollten wir die Plattformen regulieren, nicht die Kinder bestrafen. Die EU könnte strengere Datenschutzregeln für Minderjährige einführen." },
      { speaker: "Moderator", text: "Vielen Dank für die interessante Diskussion." },
    ],
    questions: [
      { question: "Was ist Frau Lehmanns Position?", options: ["Soziale Medien für Kinder erlauben", "Soziale Medien für Kinder unter 14 verbieten", "Nur bestimmte Plattformen verbieten"], correctIndex: 1, explanation: "Sie ist für ein Verbot für Kinder unter 14." },
      { question: "Was schlägt Herr Klein als Alternative vor?", options: ["Höhere Strafen", "Medienkompetenz in Schulen", "Soziale Medien abschalten"], correctIndex: 1, explanation: "Er will Medienkompetenz in den Schulen unterrichten." },
      { question: "Was sagt Frau Lehmann über die Algorithmen?", options: ["Sie sind harmlos", "Sie machen süchtig", "Sie helfen beim Lernen"], correctIndex: 1, explanation: "Die Algorithmen sind so gestaltet, dass sie süchtig machen." },
    ],
  },
  {
    id: "cd-b2-ex-02",
    level: "B2",
    title: "Negotiation at work",
    titleDe: "Gehaltsverhandlung",
    category: "work",
    lines: [
      { speaker: "Mitarbeiterin", text: "Vielen Dank, dass Sie sich Zeit nehmen, Herr Braun. Ich möchte gern über mein Gehalt sprechen." },
      { speaker: "Chef", text: "Natürlich, Frau Schulz. Was haben Sie sich vorgestellt?" },
      { speaker: "Mitarbeiterin", text: "Ich bin jetzt seit drei Jahren im Unternehmen. In dieser Zeit habe ich zwei große Projekte erfolgreich geleitet und unser Team hat seine Ziele immer übertroffen. Ich würde mir eine Gehaltserhöhung von 10 Prozent wünschen." },
      { speaker: "Chef", text: "Ich schätze Ihre Leistung sehr. Allerdings ist das aktuelle Wirtschaftsumfeld schwierig. 10 Prozent kann ich leider nicht anbieten. Wie wäre es mit 5 Prozent und einem zusätzlichen Homeoffice-Tag?" },
      { speaker: "Mitarbeiterin", text: "Ich verstehe die Situation. Könnten wir uns auf 7 Prozent einigen? Das wäre für mich ein wichtiges Zeichen der Wertschätzung." },
      { speaker: "Chef", text: "6 Prozent und der zusätzliche Homeoffice-Tag — das ist mein letztes Angebot." },
      { speaker: "Mitarbeiterin", text: "Einverstanden. Vielen Dank!" },
    ],
    questions: [
      { question: "Was wünscht sich Frau Schulz ursprünglich?", options: ["5 Prozent Erhöhung", "10 Prozent Erhöhung", "Eine Beförderung"], correctIndex: 1, explanation: "Sie wünscht sich eine Gehaltserhöhung von 10 Prozent." },
      { question: "Worauf einigen sie sich?", options: ["10 Prozent", "7 Prozent und Homeoffice", "6 Prozent und ein Homeoffice-Tag"], correctIndex: 2, explanation: "6 Prozent und der zusätzliche Homeoffice-Tag." },
    ],
  },

  // ── C1 ──
  {
    id: "cd-c1-ex-01",
    level: "C1",
    title: "University lecture excerpt",
    titleDe: "Vorlesungsausschnitt: Soziologie",
    category: "academic",
    lines: [
      { speaker: "Professor", text: "Wenn wir über soziale Ungleichheit sprechen, müssen wir zunächst zwischen horizontaler und vertikaler Ungleichheit unterscheiden." },
      { speaker: "Professor", text: "Vertikale Ungleichheit bezieht sich auf Unterschiede in Einkommen, Vermögen und Status — also die klassische Schichtung der Gesellschaft in Ober-, Mittel- und Unterschicht." },
      { speaker: "Professor", text: "Horizontale Ungleichheit hingegen betrifft Unterschiede, die nicht hierarchisch geordnet sind — etwa Geschlecht, Ethnie oder Region. Diese Dimensionen können sich überlagern, was wir als Intersektionalität bezeichnen." },
      { speaker: "Studentin", text: "Professor Meier, bedeutet Intersektionalität, dass eine schwarze Frau aus der Arbeiterklasse dreifach benachteiligt ist?" },
      { speaker: "Professor", text: "Nicht ganz. Intersektionalität bedeutet nicht einfach eine Addition von Benachteiligungen. Die verschiedenen Kategorien interagieren miteinander und erzeugen spezifische Erfahrungen, die sich nicht auf die Summe der Einzelteile reduzieren lassen." },
    ],
    questions: [
      { question: "Was ist vertikale Ungleichheit?", options: ["Unterschiede zwischen Geschlechtern", "Unterschiede in Einkommen, Vermögen und Status", "Unterschiede zwischen Regionen"], correctIndex: 1, explanation: "Vertikale Ungleichheit bezieht sich auf Einkommen, Vermögen und Status." },
      { question: "Was bedeutet Intersektionalität?", options: ["Addition von Benachteiligungen", "Verschiedene Ungleichheitskategorien interagieren miteinander", "Nur Geschlecht ist wichtig"], correctIndex: 1, explanation: "Die Kategorien interagieren und erzeugen spezifische Erfahrungen." },
    ],
  },
  {
    id: "cd-c1-ex-02",
    level: "C1",
    title: "Panel discussion on AI",
    titleDe: "Podiumsdiskussion über KI",
    category: "debate",
    lines: [
      { speaker: "Moderatorin", text: "Willkommen zur Podiumsdiskussion zum Thema: Wird Künstliche Intelligenz Arbeitsplätze vernichten oder schaffen?" },
      { speaker: "Informatikerin", text: "Die historische Erfahrung zeigt, dass technologische Revolutionen zwar kurzfristig Arbeitsplätze zerstören, langfristig aber mehr neue Berufe entstehen. Das wird bei der KI nicht anders sein." },
      { speaker: "Soziologe", text: "Da bin ich skeptischer. Der entscheidende Unterschied ist die Geschwindigkeit des Wandels. Frühere Revolutionen dauerten Jahrzehnte — KI verändert Berufsbilder innerhalb weniger Jahre. Die Gesellschaft hat nicht genug Zeit, sich anzupassen." },
      { speaker: "Unternehmerin", text: "In meinem Unternehmen setzen wir KI ein, um repetitive Aufgaben zu automatisieren. Dadurch können sich unsere Mitarbeiter auf kreativere und strategischere Aufgaben konzentrieren. Kein einziger Arbeitsplatz ist weggefallen." },
      { speaker: "Soziologe", text: "Das mag für Ihr hochqualifiziertes Team gelten. Aber was ist mit den Millionen von Sachbearbeitern, Buchhaltern und Lkw-Fahrern, deren Tätigkeiten fast vollständig automatisierbar sind?" },
      { speaker: "Informatikerin", text: "Genau deshalb brauchen wir massive Investitionen in Umschulung und lebenslanges Lernen. Die Politik muss jetzt handeln." },
    ],
    questions: [
      { question: "Was sagt die Informatikerin über historische Erfahrungen?", options: ["Technologie vernichtet immer Arbeitsplätze", "Langfristig entstehen mehr neue Berufe", "KI ist völlig anders"], correctIndex: 1, explanation: "Langfristig entstehen mehr neue Berufe." },
      { question: "Was ist der Hauptunterschied laut dem Soziologen?", options: ["Die Kosten", "Die Geschwindigkeit des Wandels", "Die Art der Technologie"], correctIndex: 1, explanation: "Die Geschwindigkeit des Wandels — KI verändert Berufe innerhalb weniger Jahre." },
      { question: "Was fordert die Informatikerin?", options: ["KI verbieten", "Investitionen in Umschulung", "Weniger Technologie"], correctIndex: 1, explanation: "Massive Investitionen in Umschulung und lebenslanges Lernen." },
    ],
  },

  // ── C2 ──
  {
    id: "cd-c2-ex-01",
    level: "C2",
    title: "Philosophical discussion",
    titleDe: "Philosophisches Gespräch: Freiheit",
    category: "academic",
    lines: [
      { speaker: "Philosophin", text: "Die Frage nach der Willensfreiheit ist eine der ältesten und zugleich aktuellsten der Philosophie. Die Neurowissenschaften behaupten zunehmend, dass unsere Entscheidungen durch neuronale Prozesse determiniert sind, bevor wir sie bewusst erleben." },
      { speaker: "Theologe", text: "Wenn das stimmte, wäre jede Form von moralischer Verantwortung hinfällig. Denn Verantwortung setzt voraus, dass der Handelnde auch anders hätte handeln können." },
      { speaker: "Philosophin", text: "Nicht unbedingt. Die kompatibilistische Position — vertreten etwa von Harry Frankfurt — argumentiert, dass Freiheit nicht bedeutet, unbeeinflusst zu handeln, sondern in Übereinstimmung mit seinen reflektierten Wünschen zweiter Ordnung." },
      { speaker: "Theologe", text: "Das klingt elegant, löst aber das Problem nur scheinbar. Denn woher kommen die Wünsche zweiter Ordnung? Sind auch sie nicht determiniert?" },
      { speaker: "Philosophin", text: "Da berühren wir den Kern der Debatte. Letztlich mündet jede Position in ein ungelöstes Problem — sei es der Regress beim Kompatibilismus, die Unerklärlichkeit des libertarischen Indeterminismus oder die Kontraintuitivität des harten Determinismus." },
    ],
    questions: [
      { question: "Was behaupten die Neurowissenschaften laut der Philosophin?", options: ["Menschen sind völlig frei", "Entscheidungen sind durch neuronale Prozesse determiniert", "Moral ist angeboren"], correctIndex: 1, explanation: "Entscheidungen sind durch neuronale Prozesse determiniert, bevor wir sie bewusst erleben." },
      { question: "Was ist die kompatibilistische Position?", options: ["Freiheit existiert nicht", "Freiheit bedeutet, gemäß reflektierter Wünsche zu handeln", "Freiheit ist ein Geschenk Gottes"], correctIndex: 1, explanation: "Freiheit bedeutet, in Übereinstimmung mit reflektierten Wünschen zweiter Ordnung zu handeln." },
      { question: "Was ist der Einwand des Theologen?", options: ["Kompatibilismus ist zu einfach", "Woher kommen die Wünsche zweiter Ordnung — sind sie nicht auch determiniert?", "Freiheit ist offensichtlich"], correctIndex: 1, explanation: "Auch die Wünsche zweiter Ordnung könnten determiniert sein." },
    ],
  },
];
