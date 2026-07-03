import { ReadingPassage } from "./reading-passages";

// ── Reading Passages Expansion: B1-C2 Expert Content ──────────
export const readingPassagesExpansion: ReadingPassage[] = [
  // ── A1 Additional ─────────────────────────────────────────
  {
    id: "a1-read-3",
    level: "A1",
    category: "daily-life",
    title: "At the Supermarket",
    titleDe: "Im Supermarkt",
    text: `Maria geht heute einkaufen. Sie braucht Brot, Milch und Eier. Der Supermarkt ist in der Naehe. Maria nimmt eine Tuete. Das Brot kostet 2,50 Euro. Die Milch kostet 1,20 Euro. Die Eier kosten 3 Euro. Maria bezahlt an der Kasse. Sie bezahlt mit Karte. Dann geht sie nach Hause und kocht Abendessen.`,
    wordCount: 52,
    vocabulary: [
      { word: "einkaufen", meaning: "to shop" },
      { word: "Tuete", meaning: "bag" },
      { word: "Kasse", meaning: "checkout / cash register" },
      { word: "bezahlen", meaning: "to pay" },
      { word: "Abendessen", meaning: "dinner" },
    ],
    questions: [
      { question: "What does Maria need to buy?", options: ["Brot, Milch und Eier", "Kuchen und Kaffee", "Obst und Gemuese", "Fleisch und Wurst"], correctIndex: 0, explanation: "The text says: Sie braucht Brot, Milch und Eier." },
      { question: "How does Maria pay?", options: ["Bar (cash)", "Mit Karte", "Mit dem Handy", "Sie bezahlt nicht"], correctIndex: 1, explanation: "Sie bezahlt mit Karte." },
      { question: "What does Maria do after shopping?", options: ["Sie geht ins Kino", "Sie geht schlafen", "Sie kocht Abendessen", "Sie trifft Freunde"], correctIndex: 2, explanation: "Dann geht sie nach Hause und kocht Abendessen." },
    ],
  },
  {
    id: "a1-read-4",
    level: "A1",
    category: "daily-life",
    title: "My Daily Routine",
    titleDe: "Mein Tagesablauf",
    text: `Ich stehe um sieben Uhr auf. Ich fruehstuecke um halb acht. Ich trinke Kaffee und esse Brot mit Kaese. Um acht Uhr fahre ich zur Arbeit. Ich arbeite von neun bis fuenf. In der Mittagspause esse ich in der Kantine. Um sechs Uhr bin ich zu Hause. Am Abend lese ich oder sehe fern. Um elf Uhr gehe ich ins Bett.`,
    wordCount: 58,
    vocabulary: [
      { word: "aufstehen", meaning: "to get up" },
      { word: "fruehstuecken", meaning: "to have breakfast" },
      { word: "Mittagspause", meaning: "lunch break" },
      { word: "Kantine", meaning: "canteen" },
      { word: "fernsehen", meaning: "to watch TV" },
    ],
    questions: [
      { question: "What time does the narrator get up?", options: ["Um sechs Uhr", "Um sieben Uhr", "Um acht Uhr", "Um halb acht"], correctIndex: 1, explanation: "Ich stehe um sieben Uhr auf." },
      { question: "Where does the narrator eat lunch?", options: ["Zu Hause", "Im Restaurant", "In der Kantine", "Im Buero"], correctIndex: 2, explanation: "In der Mittagspause esse ich in der Kantine." },
      { question: "What does the narrator do in the evening?", options: ["Sport machen", "Lesen oder fernsehen", "Kochen", "Freunde treffen"], correctIndex: 1, explanation: "Am Abend lese ich oder sehe fern." },
    ],
  },
  // ── A2 Additional ─────────────────────────────────────────
  {
    id: "a2-read-3",
    level: "A2",
    category: "daily-life",
    title: "A Visit to the Doctor",
    titleDe: "Beim Arzt",
    text: `Letzte Woche war ich krank. Ich hatte Kopfschmerzen und Fieber. Am Montag bin ich zum Arzt gegangen. Im Wartezimmer habe ich 30 Minuten gewartet. Dann hat der Arzt mich untersucht. Er hat gesagt, ich habe eine Erkaeltung. Er hat mir ein Rezept gegeben. Ich bin in die Apotheke gegangen und habe Medikamente gekauft. Der Arzt hat gesagt, ich soll drei Tage zu Hause bleiben. Jetzt geht es mir wieder besser.`,
    wordCount: 72,
    vocabulary: [
      { word: "Kopfschmerzen", meaning: "headache" },
      { word: "Fieber", meaning: "fever" },
      { word: "Wartezimmer", meaning: "waiting room" },
      { word: "untersuchen", meaning: "to examine" },
      { word: "Erkaeltung", meaning: "cold (illness)" },
    ],
    questions: [
      { question: "What symptoms did the narrator have?", options: ["Husten und Schnupfen", "Kopfschmerzen und Fieber", "Bauchschmerzen", "Rueckenschmerzen"], correctIndex: 1, explanation: "Ich hatte Kopfschmerzen und Fieber." },
      { question: "What was the diagnosis?", options: ["Grippe", "Eine Erkaeltung", "Allergie", "Migaerne"], correctIndex: 1, explanation: "Er hat gesagt, ich habe eine Erkaeltung." },
      { question: "How long should the narrator stay home?", options: ["Einen Tag", "Zwei Tage", "Drei Tage", "Eine Woche"], correctIndex: 2, explanation: "Ich soll drei Tage zu Hause bleiben." },
    ],
  },
  {
    id: "a2-read-4",
    level: "A2",
    category: "daily-life",
    title: "Train Journey to Munich",
    titleDe: "Zugfahrt nach Muenchen",
    text: `Gestern bin ich mit dem Zug von Berlin nach Muenchen gefahren. Die Fahrt hat fuenf Stunden gedauert. Ich habe ein Ticket online gekauft. Im Zug habe ich einen Fensterplatz gehabt. Die Landschaft war sehr schoen. In Nuernberg musste ich umsteigen. Der zweite Zug hatte 15 Minuten Verspaetung. Im Zug habe ich ein Buch gelesen und Musik gehoert. Um 18 Uhr bin ich in Muenchen angekommen. Mein Freund hat mich am Bahnhof abgeholt.`,
    wordCount: 76,
    vocabulary: [
      { word: "Fahrt", meaning: "journey / trip" },
      { word: "Fensterplatz", meaning: "window seat" },
      { word: "Landschaft", meaning: "landscape" },
      { word: "umsteigen", meaning: "to change (trains)" },
      { word: "abholen", meaning: "to pick up" },
    ],
    questions: [
      { question: "How long was the train journey?", options: ["Drei Stunden", "Vier Stunden", "Fuenf Stunden", "Sechs Stunden"], correctIndex: 2, explanation: "Die Fahrt hat fuenf Stunden gedauert." },
      { question: "Where did the narrator change trains?", options: ["In Leipzig", "In Frankfurt", "In Nuernberg", "In Stuttgart"], correctIndex: 2, explanation: "In Nuernberg musste ich umsteigen." },
      { question: "Who picked up the narrator at Munich station?", options: ["Seine Mutter", "Sein Freund", "Seine Schwester", "Niemand"], correctIndex: 1, explanation: "Mein Freund hat mich am Bahnhof abgeholt." },
    ],
  },
  // ── B1 Additional ─────────────────────────────────────────
  {
    id: "b1-read-2",
    level: "B1",
    category: "formal",
    title: "Job Application Letter",
    titleDe: "Bewerbungsschreiben",
    text: `Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich um die Stelle als Marketingassistent, die Sie auf Ihrer Webseite ausgeschrieben haben. Ich habe mein Studium der Betriebswirtschaft an der Universitaet Hamburg im Juni 2024 abgeschlossen. Waehrend meines Studiums habe ich ein sechsmonatiges Praktikum bei einer Werbeagentur absolviert, wo ich Erfahrungen im digitalen Marketing und in der Kundenbetreuung sammeln konnte.

Besonders interessiert mich an Ihrer Firma die internationale Ausrichtung und die innovative Unternehmenskultur. Ich bringe gute Englisch- und Spanischkenntnisse mit und bin teamfaehig und kreativ.

Ueber eine Einladung zu einem Vorstellungsgespraech wuerde ich mich sehr freuen.

Mit freundlichen Gruessen
Thomas Mueller`,
    wordCount: 105,
    vocabulary: [
      { word: "Bewerbung", meaning: "application" },
      { word: "ausschreiben", meaning: "to advertise (a position)" },
      { word: "Praktikum", meaning: "internship" },
      { word: "Werbeagentur", meaning: "advertising agency" },
      { word: "Unternehmenskultur", meaning: "corporate culture" },
    ],
    questions: [
      { question: "What position is Thomas applying for?", options: ["Projektmanager", "Marketingassistent", "Buchhalter", "Personalleiter"], correctIndex: 1, explanation: "Hiermit bewerbe ich mich um die Stelle als Marketingassistent." },
      { question: "Where did Thomas do his internship?", options: ["Bei einer Bank", "Bei einer Werbeagentur", "Bei einem Verlag", "Bei einer IT-Firma"], correctIndex: 1, explanation: "Ich habe ein sechsmonatiges Praktikum bei einer Werbeagentur absolviert." },
      { question: "What languages does Thomas speak besides German?", options: ["Englisch und Franzoesisch", "Englisch und Spanisch", "Nur Englisch", "Franzoesisch und Spanisch"], correctIndex: 1, explanation: "Ich bringe gute Englisch- und Spanischkenntnisse mit." },
    ],
  },
  {
    id: "b1-read-3",
    level: "B1",
    category: "news",
    title: "Climate Protest in Berlin",
    titleDe: "Klimaprotest in Berlin",
    text: `Am vergangenen Freitag haben rund 50.000 Menschen in Berlin fuer mehr Klimaschutz demonstriert. Die Demonstration begann am Brandenburger Tor und fuehrte durch das Regierungsviertel. Die Teilnehmer forderten ein schnelleres Ende der Kohlekraftwerke und mehr Investitionen in erneuerbare Energien.

Die Organisatoren der Demonstration betonten, dass die aktuelle Politik nicht ausreiche, um die Klimaziele zu erreichen. Deutschland hat sich verpflichtet, bis 2045 klimaneutral zu werden.

Kritiker der Demonstration argumentierten, dass ein schneller Ausstieg aus der Kohle Arbeitsplaetze gefaehrden koenne. Die Polizei sprach von einer friedlichen Veranstaltung ohne Zwischenfaelle.`,
    wordCount: 98,
    vocabulary: [
      { word: "demonstrieren", meaning: "to demonstrate / protest" },
      { word: "Regierungsviertel", meaning: "government district" },
      { word: "Kohlekraftwerk", meaning: "coal power plant" },
      { word: "erneuerbare Energien", meaning: "renewable energies" },
      { word: "klimaneutral", meaning: "climate neutral" },
    ],
    questions: [
      { question: "How many people participated in the protest?", options: ["10.000", "30.000", "50.000", "100.000"], correctIndex: 2, explanation: "Rund 50.000 Menschen haben demonstriert." },
      { question: "What did the protesters demand?", options: ["Niedrigere Steuern", "Mehr Kohlekraftwerke", "Schnelleres Ende der Kohlekraftwerke", "Neue Atomkraftwerke"], correctIndex: 2, explanation: "Die Teilnehmer forderten ein schnelleres Ende der Kohlekraftwerke." },
      { question: "By what year should Germany become climate neutral?", options: ["2030", "2035", "2040", "2045"], correctIndex: 3, explanation: "Deutschland hat sich verpflichtet, bis 2045 klimaneutral zu werden." },
    ],
  },
  {
    id: "b1-read-4",
    level: "B1",
    category: "culture",
    title: "The German Apprenticeship System",
    titleDe: "Das duale Ausbildungssystem",
    text: `Das duale Ausbildungssystem ist eine Besonderheit des deutschen Bildungssystems. Junge Menschen lernen einen Beruf gleichzeitig in einem Betrieb und in der Berufsschule. Die Ausbildung dauert in der Regel zwei bis drei Jahre.

Etwa 60 Prozent der Jugendlichen in Deutschland machen eine Berufsausbildung. Es gibt ueber 300 anerkannte Ausbildungsberufe, von Baecker bis Mechatroniker. Die Auszubildenden erhalten ein monatliches Gehalt und sammeln praktische Erfahrung.

Viele Laender bewundern das deutsche System, weil die Jugendarbeitslosigkeit in Deutschland relativ niedrig ist. Kritiker sagen jedoch, dass manche Ausbildungsberufe schlecht bezahlt werden und dass nicht alle jungen Menschen einen Ausbildungsplatz finden.`,
    wordCount: 106,
    vocabulary: [
      { word: "Ausbildungssystem", meaning: "apprenticeship system" },
      { word: "Berufsschule", meaning: "vocational school" },
      { word: "Auszubildender", meaning: "apprentice / trainee" },
      { word: "anerkannt", meaning: "recognized / accredited" },
      { word: "Jugendarbeitslosigkeit", meaning: "youth unemployment" },
    ],
    questions: [
      { question: "How long does a typical German apprenticeship last?", options: ["Ein Jahr", "Zwei bis drei Jahre", "Vier Jahre", "Fuenf Jahre"], correctIndex: 1, explanation: "Die Ausbildung dauert in der Regel zwei bis drei Jahre." },
      { question: "What percentage of young Germans do an apprenticeship?", options: ["30%", "45%", "60%", "80%"], correctIndex: 2, explanation: "Etwa 60 Prozent der Jugendlichen machen eine Berufsausbildung." },
      { question: "Why do other countries admire the German system?", options: ["Wegen der hohen Gehaelter", "Wegen der niedrigen Jugendarbeitslosigkeit", "Wegen der kurzen Ausbildungszeit", "Wegen der vielen Universitaeten"], correctIndex: 1, explanation: "Viele Laender bewundern das System, weil die Jugendarbeitslosigkeit niedrig ist." },
    ],
  },
  {
    id: "b1-read-5",
    level: "B1",
    category: "story",
    title: "Living in a Shared Apartment",
    titleDe: "Leben in einer WG",
    text: `Als ich nach Berlin gezogen bin, war die Wohnungssuche sehr schwierig. Die Mieten sind hoch und gute Wohnungen sind selten. Nach drei Wochen habe ich endlich ein WG-Zimmer in Neukoelln gefunden.

Ich wohne mit drei anderen Leuten zusammen: Lisa studiert Medizin, Tom arbeitet als Programmierer und Ayse macht ein Praktikum bei einer Zeitung. Wir teilen uns die Kueche und das Bad. Jeder raeumt abwechselnd auf.

Am Anfang war es nicht einfach. Lisa hoert gern laute Musik und Tom kocht jeden Abend aufwaendige Gerichte. Aber wir haben Regeln aufgestellt: Kein Laerm nach 22 Uhr. Jetzt verstehen wir uns sehr gut und machen sogar zusammen Ausfluege am Wochenende.`,
    wordCount: 115,
    vocabulary: [
      { word: "Wohnungssuche", meaning: "apartment search" },
      { word: "Miete", meaning: "rent" },
      { word: "WG-Zimmer", meaning: "room in a shared apartment" },
      { word: "abwechselnd", meaning: "taking turns" },
      { word: "Ausflug", meaning: "trip / excursion" },
    ],
    questions: [
      { question: "Why was finding an apartment difficult?", options: ["Es gab keine WGs", "Die Mieten sind hoch und gute Wohnungen selten", "Die Stadt war zu klein", "Niemand wollte vermieten"], correctIndex: 1, explanation: "Die Mieten sind hoch und gute Wohnungen sind selten." },
      { question: "What does Ayse do?", options: ["Sie studiert", "Sie arbeitet als Aerztin", "Sie macht ein Praktikum bei einer Zeitung", "Sie ist Programmiererin"], correctIndex: 2, explanation: "Ayse macht ein Praktikum bei einer Zeitung." },
      { question: "What rule did the roommates establish?", options: ["Kein Besuch", "Kein Kochen", "Kein Laerm nach 22 Uhr", "Kein Fernsehen"], correctIndex: 2, explanation: "Kein Laerm nach 22 Uhr." },
    ],
  },
  // ── B2 Additional ─────────────────────────────────────────
  {
    id: "b2-read-2",
    level: "B2",
    category: "news",
    title: "The Housing Crisis",
    titleDe: "Die Wohnungskrise",
    text: `Die Wohnungskrise in deutschen Grossstaedten spitzt sich weiter zu. Laut einer aktuellen Studie des Deutschen Instituts fuer Wirtschaftsforschung fehlen in Deutschland rund 700.000 Wohnungen. Besonders betroffen sind Muenchen, Berlin, Hamburg und Frankfurt.

Die Gruende fuer den Wohnungsmangel sind vielfaeltig: steigende Bevoelkerungszahlen in den Staedten, zu wenig Neubau, hohe Baukosten und langwierige Genehmigungsverfahren. Gleichzeitig steigen die Mieten seit Jahren kontinuierlich. In Muenchen liegt die Durchschnittsmiete fuer eine Zwei-Zimmer-Wohnung bei ueber 1.400 Euro kalt.

Die Bundesregierung hat verschiedene Massnahmen angekuendigt: ein Foerderprogramm fuer sozialen Wohnungsbau, eine Vereinfachung der Bauvorschriften und steuerliche Anreize fuer private Investoren. Experten bezweifeln jedoch, dass diese Massnahmen ausreichen werden. Die Mieterbewegung fordert zusaetzlich einen bundesweiten Mietendeckel.

Der Sozialverband VdK warnt, dass die Wohnungskrise zunehmend auch die Mittelschicht trifft und nicht nur einkommensschwache Haushalte.`,
    wordCount: 148,
    vocabulary: [
      { word: "sich zuspitzen", meaning: "to escalate / worsen" },
      { word: "Wohnungsmangel", meaning: "housing shortage" },
      { word: "Genehmigungsverfahren", meaning: "approval process" },
      { word: "Mietendeckel", meaning: "rent cap" },
      { word: "einkommensschwach", meaning: "low-income" },
    ],
    questions: [
      { question: "How many apartments are missing in Germany according to the study?", options: ["300.000", "500.000", "700.000", "1.000.000"], correctIndex: 2, explanation: "Es fehlen rund 700.000 Wohnungen." },
      { question: "What is the average cold rent for a 2-room apartment in Munich?", options: ["800 Euro", "1.000 Euro", "1.200 Euro", "Ueber 1.400 Euro"], correctIndex: 3, explanation: "Die Durchschnittsmiete liegt bei ueber 1.400 Euro kalt." },
      { question: "What does the tenant movement demand in addition to government measures?", options: ["Mehr Eigentumsfoerderung", "Einen bundesweiten Mietendeckel", "Niedrigere Steuern", "Mehr Luxuswohnungen"], correctIndex: 1, explanation: "Die Mieterbewegung fordert zusaetzlich einen bundesweiten Mietendeckel." },
    ],
  },
  {
    id: "b2-read-3",
    level: "B2",
    category: "culture",
    title: "Work-Life Balance in Germany",
    titleDe: "Work-Life-Balance in Deutschland",
    text: `Deutschland hat im internationalen Vergleich eine der kuerzesten Arbeitszeiten. Die durchschnittliche Wochenarbeitszeit liegt bei 34,6 Stunden, waehrend sie in den USA bei ueber 38 Stunden liegt. Deutsche Arbeitnehmer haben ausserdem Anspruch auf mindestens 20 Urlaubstage pro Jahr, die meisten erhalten jedoch 25 bis 30 Tage.

Die Einstellung zur Arbeit hat sich in den letzten Jahren veraendert. Die Generation Z legt besonderen Wert auf Freizeit, persoenliche Entwicklung und flexible Arbeitsmodelle. Viele junge Arbeitnehmer bevorzugen eine Vier-Tage-Woche, selbst wenn dies ein niedrigeres Gehalt bedeutet.

Diese Entwicklung wird kontrovers diskutiert. Arbeitgeber befuerchten Produktivitaetsverluste und einen verschaerften Fachkraeftemangel. Befuerworter argumentieren, dass kuerzere Arbeitszeiten die Produktivitaet pro Stunde erhoehen und die psychische Gesundheit verbessern.

Die IG Metall hat in Pilotprojekten bereits eine Vier-Tage-Woche bei vollem Lohnausgleich getestet. Die ersten Ergebnisse zeigen eine hoehere Mitarbeiterzufriedenheit bei unveraenderter Produktivitaet.`,
    wordCount: 147,
    vocabulary: [
      { word: "Wochenarbeitszeit", meaning: "weekly working hours" },
      { word: "Anspruch", meaning: "entitlement / claim" },
      { word: "Fachkraeftemangel", meaning: "skilled labor shortage" },
      { word: "Lohnausgleich", meaning: "salary compensation" },
      { word: "Mitarbeiterzufriedenheit", meaning: "employee satisfaction" },
    ],
    questions: [
      { question: "What is the average weekly working time in Germany?", options: ["30 Stunden", "34,6 Stunden", "38 Stunden", "40 Stunden"], correctIndex: 1, explanation: "Die durchschnittliche Wochenarbeitszeit liegt bei 34,6 Stunden." },
      { question: "What does Generation Z prioritize?", options: ["Hohe Gehaelter", "Karriere und Aufstieg", "Freizeit und flexible Arbeitsmodelle", "Ueberstunden"], correctIndex: 2, explanation: "Die Generation Z legt besonderen Wert auf Freizeit und flexible Arbeitsmodelle." },
      { question: "What did IG Metall's pilot project show?", options: ["Niedrigere Produktivitaet", "Hoehere Fehlzeiten", "Hoehere Zufriedenheit bei unveraenderter Produktivitaet", "Mehr Ueberstunden"], correctIndex: 2, explanation: "Hoehere Mitarbeiterzufriedenheit bei unveraenderter Produktivitaet." },
    ],
  },
  {
    id: "b2-read-4",
    level: "B2",
    category: "academic",
    title: "Social Media and Mental Health",
    titleDe: "Soziale Medien und psychische Gesundheit",
    text: `Eine Metastudie der Universitaet Mannheim hat den Zusammenhang zwischen der Nutzung sozialer Medien und psychischen Erkrankungen bei Jugendlichen untersucht. Die Studie analysierte 87 Einzelstudien aus 15 Laendern mit insgesamt 400.000 Teilnehmern.

Die Ergebnisse zeigen eine signifikante Korrelation zwischen intensiver Social-Media-Nutzung und Symptomen von Depression, Angststoerungen und niedrigem Selbstwertgefuehl. Besonders betroffen sind Maedchen zwischen 13 und 17 Jahren. Die Forscher betonen jedoch, dass Korrelation nicht gleich Kausalitaet bedeutet.

Mechanismen wie der soziale Vergleich, Cybermobbing und der Verlust von Schlafzeit werden als moegliche Erklaerungen diskutiert. Positive Aspekte sozialer Medien, etwa der Aufbau von Gemeinschaften und der Zugang zu Informationen, werden in der Debatte oft vernachlaessigt.

Die Autoren empfehlen eine differenzierte Herangehensweise: nicht die Nutzung an sich sei problematisch, sondern die Art und Dauer der Nutzung.`,
    wordCount: 138,
    vocabulary: [
      { word: "Zusammenhang", meaning: "connection / correlation" },
      { word: "Angststoerung", meaning: "anxiety disorder" },
      { word: "Selbstwertgefuehl", meaning: "self-esteem" },
      { word: "Cybermobbing", meaning: "cyberbullying" },
      { word: "Herangehensweise", meaning: "approach" },
    ],
    questions: [
      { question: "How many individual studies were analyzed?", options: ["45", "67", "87", "120"], correctIndex: 2, explanation: "Die Studie analysierte 87 Einzelstudien." },
      { question: "Which group is most affected?", options: ["Jungen 10-14", "Maedchen 13-17", "Erwachsene 25-35", "Senioren ueber 65"], correctIndex: 1, explanation: "Besonders betroffen sind Maedchen zwischen 13 und 17 Jahren." },
      { question: "What do the authors recommend?", options: ["Komplettes Verbot sozialer Medien", "Nur WhatsApp nutzen", "Eine differenzierte Herangehensweise", "Mehr Bildschirmzeit"], correctIndex: 2, explanation: "Die Autoren empfehlen eine differenzierte Herangehensweise." },
    ],
  },
  {
    id: "b2-read-5",
    level: "B2",
    category: "formal",
    title: "Energy Transition in Germany",
    titleDe: "Die Energiewende in Deutschland",
    text: `Die Energiewende ist eines der ambitioniertesten Projekte der deutschen Politik. Ziel ist es, die Energieversorgung vollstaendig auf erneuerbare Quellen umzustellen und gleichzeitig aus der Kernenergie auszusteigen. Seit April 2023 sind alle deutschen Atomkraftwerke abgeschaltet.

Der Anteil erneuerbarer Energien an der Stromerzeugung lag 2024 bei ueber 55 Prozent. Windkraft und Solarenergie sind die wichtigsten Saeulen. Allerdings stellen die schwankende Verfuegbarkeit von Wind und Sonne sowie fehlende Speichertechnologien grosse Herausforderungen dar.

Die Kosten der Energiewende werden auf mehrere hundert Milliarden Euro geschaetzt. Kritiker bemangeln die hohen Strompreise fuer Verbraucher und die Industrieverlagerung ins Ausland. Befuerworter verweisen auf neue Arbeitsplaetze, technologische Innovation und den Klimaschutz.

Ein zentrales Problem bleibt der Netzausbau: Strom aus den Windparks im Norden muss in die Industriezentren im Sueden transportiert werden, doch neue Leitungen stoessen auf Widerstand der Anwohner.`,
    wordCount: 150,
    vocabulary: [
      { word: "Energiewende", meaning: "energy transition" },
      { word: "Kernenergie", meaning: "nuclear energy" },
      { word: "Stromerzeugung", meaning: "electricity generation" },
      { word: "Speichertechnologie", meaning: "storage technology" },
      { word: "Netzausbau", meaning: "grid expansion" },
    ],
    questions: [
      { question: "What percentage of electricity came from renewables in 2024?", options: ["35%", "45%", "Ueber 55%", "70%"], correctIndex: 2, explanation: "Der Anteil lag 2024 bei ueber 55 Prozent." },
      { question: "When were all German nuclear power plants shut down?", options: ["2020", "2022", "April 2023", "2025"], correctIndex: 2, explanation: "Seit April 2023 sind alle deutschen Atomkraftwerke abgeschaltet." },
      { question: "What is a major infrastructure challenge?", options: ["Zu viele Kraftwerke", "Der Netzausbau von Nord nach Sued", "Mangel an Ingenieuren", "Zu wenig Windparks"], correctIndex: 1, explanation: "Strom aus Windparks im Norden muss in die Industriezentren im Sueden transportiert werden." },
    ],
  },
  // ── C1 Additional ─────────────────────────────────────────
  {
    id: "c1-read-2",
    level: "C1",
    category: "academic",
    title: "The Limits of Artificial Intelligence",
    titleDe: "Die Grenzen kuenstlicher Intelligenz",
    text: `Die rasante Entwicklung generativer KI-Systeme hat eine breite gesellschaftliche Debatte ueber deren Moeglichkeiten und Grenzen ausgeloest. Waehrend Optimisten eine revolutionaere Transformation der Wissensarbeit prognostizieren, warnen Kritiker vor einer systematischen Ueberschaetzung der Faehigkeiten aktueller Modelle.

Grosse Sprachmodelle basieren auf statistischer Mustererkennung und verfuegen ueber kein genuines Verstaendnis von Bedeutung. Sie produzieren sprachlich ueberzeugende Texte, die faktisch falsch sein koennen - ein Phaenomen, das als Halluzination bezeichnet wird. Die fehlende Verankerung in der physischen Welt und das Fehlen eines kausalen Weltmodells stellen fundamentale Einschraenkungen dar.

Zudem werfen diese Systeme erhebliche ethische Fragen auf: die Reproduktion gesellschaftlicher Vorurteile, urheberrechtliche Bedenken hinsichtlich der Trainingsdaten und der enorme Energieverbrauch der Rechenzentren. Die Europaeische Union hat mit dem AI Act einen regulatorischen Rahmen geschaffen, der risikobasierte Anforderungen an KI-Systeme stellt.

Dennoch birgt die Technologie transformatives Potenzial, insbesondere in der medizinischen Diagnostik, der Materialwissenschaft und der Klimaforschung - Bereiche, in denen die Mustererkennung einen genuinen Mehrwert bietet.`,
    wordCount: 163,
    vocabulary: [
      { word: "Mustererkennung", meaning: "pattern recognition" },
      { word: "Halluzination", meaning: "hallucination (AI context)" },
      { word: "Einschraenkung", meaning: "limitation / restriction" },
      { word: "Vorurteil", meaning: "prejudice / bias" },
      { word: "Mehrwert", meaning: "added value" },
    ],
    questions: [
      { question: "What fundamental limitation of large language models is described?", options: ["Zu langsam", "Zu teuer", "Kein genuines Bedeutungsverstaendnis", "Zu wenig Trainingsdaten"], correctIndex: 2, explanation: "Sie verfuegen ueber kein genuines Verstaendnis von Bedeutung." },
      { question: "What is the term for factually incorrect but convincing AI outputs?", options: ["Bias", "Halluzination", "Overfitting", "Deepfake"], correctIndex: 1, explanation: "Ein Phaenomen, das als Halluzination bezeichnet wird." },
      { question: "What did the EU create to regulate AI?", options: ["Das Digitalgesetz", "Den AI Act", "Die KI-Verordnung", "Das Technikgesetz"], correctIndex: 1, explanation: "Die EU hat mit dem AI Act einen regulatorischen Rahmen geschaffen." },
    ],
  },
  {
    id: "c1-read-3",
    level: "C1",
    category: "culture",
    title: "The Transformation of German Identity",
    titleDe: "Der Wandel der deutschen Identitaet",
    text: `Die Frage, was es bedeutet, deutsch zu sein, wird in der Bundesrepublik seit der Wiedervereinigung kontrovers diskutiert. Die traditionelle Vorstellung einer ethnisch-kulturellen Zugehoerigkeit wird zunehmend durch ein Verstaendnis ersetzt, das auf gemeinsamen Werten und dem Grundgesetz basiert - der sogenannte Verfassungspatriotismus, ein Konzept des Philosophen Juergen Habermas.

Die Einwanderungsgeschichte hat die Gesellschaft nachhaltig veraendert. Rund 28 Prozent der Bevoelkerung haben einen Migrationshintergrund. Autoren wie Fatma Aydemir und Saša Stanišic haben in ihren Werken die Vielschichtigkeit moderner deutscher Identitaet literarisch verarbeitet und damit wichtige Impulse fuer den gesellschaftlichen Diskurs geliefert.

Gleichzeitig gewinnen populistische Narrative an Einfluss, die auf eine Rueckkehr zu einem homogenen Nationenbegriff draengen. Die Spannung zwischen kosmopolitischer Offenheit und dem Beduerfnis nach kultureller Verortung praegt die politische Landschaft.

Die juengere Generation versteht Identitaet zunehmend als fluide Kategorie, die nicht auf eine einzelne nationale Zugehoerigkeit reduziert werden kann. Mehrfachidentitaeten werden nicht als Widerspruch, sondern als Bereicherung empfunden.`,
    wordCount: 160,
    vocabulary: [
      { word: "Verfassungspatriotismus", meaning: "constitutional patriotism" },
      { word: "Migrationshintergrund", meaning: "migration background" },
      { word: "Vielschichtigkeit", meaning: "complexity / multifacetedness" },
      { word: "Verortung", meaning: "localization / sense of place" },
      { word: "Mehrfachidentitaet", meaning: "multiple identity" },
    ],
    questions: [
      { question: "What concept did Habermas propose?", options: ["Leitkultur", "Verfassungspatriotismus", "Multikulturalismus", "Nationalismus"], correctIndex: 1, explanation: "Der sogenannte Verfassungspatriotismus, ein Konzept des Philosophen Habermas." },
      { question: "What percentage of Germany's population has a migration background?", options: ["15 Prozent", "20 Prozent", "28 Prozent", "35 Prozent"], correctIndex: 2, explanation: "Rund 28 Prozent der Bevoelkerung haben einen Migrationshintergrund." },
      { question: "How does the younger generation view identity?", options: ["Als fest und unveraenderlich", "Als rein national", "Als fluide Kategorie", "Als unwichtig"], correctIndex: 2, explanation: "Die juengere Generation versteht Identitaet zunehmend als fluide Kategorie." },
    ],
  },
  {
    id: "c1-read-4",
    level: "C1",
    category: "formal",
    title: "The Crisis of Public Health Insurance",
    titleDe: "Die Krise der gesetzlichen Krankenversicherung",
    text: `Das deutsche Gesundheitssystem gilt international als vorbildlich, steht jedoch vor strukturellen Herausforderungen, die seine langfristige Tragfaehigkeit infrage stellen. Die Ausgaben der gesetzlichen Krankenversicherung sind 2024 auf ueber 300 Milliarden Euro gestiegen, waehrend die Einnahmen nicht im gleichen Mass gewachsen sind.

Der demografische Wandel verstaerkt das Problem: Die Zahl der Beitragszahler sinkt, waehrend die Kosten fuer die alternde Bevoelkerung steigen. Zudem treiben medizinisch-technische Innovationen die Behandlungskosten in die Hoehe. Der Zusatzbeitrag der Krankenkassen ist auf durchschnittlich 1,7 Prozentpunkte gestiegen.

Reformvorschlaege umfassen eine Buergerversicherung, die das Nebeneinander von gesetzlicher und privater Versicherung aufheben wuerde, eine staerkere Praevention und eine Digitalisierung des Gesundheitswesens. Die elektronische Patientenakte soll ab 2025 flaechendeckend eingefuehrt werden.

Die Aerzteschaft kritisiert die zunehmende Buerokratisierung und den Zeitmangel in der Patientenversorgung. Eine Studie der Bundesaerztekammer zeigt, dass Aerzte im Durchschnitt nur 7,6 Minuten pro Patient aufwenden koennen.`,
    wordCount: 158,
    vocabulary: [
      { word: "Tragfaehigkeit", meaning: "sustainability / viability" },
      { word: "Beitragszahler", meaning: "contributor / premium payer" },
      { word: "Buergerversicherung", meaning: "universal citizen insurance" },
      { word: "Praevention", meaning: "prevention" },
      { word: "Buerokratisierung", meaning: "bureaucratization" },
    ],
    questions: [
      { question: "How much did public health insurance spend in 2024?", options: ["100 Milliarden", "200 Milliarden", "Ueber 300 Milliarden", "500 Milliarden"], correctIndex: 2, explanation: "Die Ausgaben sind auf ueber 300 Milliarden Euro gestiegen." },
      { question: "What is the average time a doctor spends per patient?", options: ["3,5 Minuten", "5 Minuten", "7,6 Minuten", "15 Minuten"], correctIndex: 2, explanation: "Aerzte koennen im Durchschnitt nur 7,6 Minuten pro Patient aufwenden." },
      { question: "What reform would unify the insurance system?", options: ["Privatisierung", "Buergerversicherung", "Kopfpauschale", "Steuersystem"], correctIndex: 1, explanation: "Eine Buergerversicherung, die das Nebeneinander aufheben wuerde." },
    ],
  },
  {
    id: "c1-read-5",
    level: "C1",
    category: "news",
    title: "Germany and European Defense",
    titleDe: "Deutschland und die europaeische Verteidigung",
    text: `Die sicherheitspolitische Zeitenwende, die Bundeskanzler Scholz im Februar 2022 ausrief, hat die deutsche Verteidigungspolitik grundlegend veraendert. Das Sondervermoegen von 100 Milliarden Euro fuer die Bundeswehr markierte einen historischen Bruch mit der zurueckhaltenden Verteidigungspolitik der Nachkriegszeit.

Dennoch bleibt die Umsetzung problematisch. Die Beschaffungsprozesse der Bundeswehr sind notorisch langwierig. Von den bewilligten Mitteln waren Ende 2024 erst 30 Prozent vertraglich gebunden. Die Industrie beklagt fehlende Planungssicherheit, waehrend Militaerexperten auf gravierende Faehigkeitsluecken hinweisen.

Die Debatte um eine europaeische Verteidigungsunion hat durch den Krieg in der Ukraine und die veraenderte transatlantische Sicherheitsarchitektur neue Dynamik erhalten. Frankreich draengt auf strategische Autonomie, waehrend Deutschland traditionell die transatlantische Bindung betont.

Die zentrale Frage lautet: Ist Europa bereit und willens, eigenstaendig fuer seine Sicherheit zu sorgen? Die Antwort wird die geopolitische Rolle des Kontinents im 21. Jahrhundert massgeblich bestimmen.`,
    wordCount: 154,
    vocabulary: [
      { word: "Zeitenwende", meaning: "turning point / watershed moment" },
      { word: "Sondervermoegen", meaning: "special fund" },
      { word: "Beschaffungsprozess", meaning: "procurement process" },
      { word: "Faehigkeitsluecke", meaning: "capability gap" },
      { word: "strategische Autonomie", meaning: "strategic autonomy" },
    ],
    questions: [
      { question: "How much was the special fund for the Bundeswehr?", options: ["50 Milliarden", "75 Milliarden", "100 Milliarden", "200 Milliarden"], correctIndex: 2, explanation: "Das Sondervermoegen von 100 Milliarden Euro." },
      { question: "What percentage of funds were contractually bound by end of 2024?", options: ["10 Prozent", "20 Prozent", "30 Prozent", "50 Prozent"], correctIndex: 2, explanation: "Ende 2024 waren erst 30 Prozent vertraglich gebunden." },
      { question: "What does France push for?", options: ["Mehr NATO-Bindung", "Strategische Autonomie", "Bilaterale Abkommen", "Abruestung"], correctIndex: 1, explanation: "Frankreich draengt auf strategische Autonomie." },
    ],
  },
  // ── C2 Additional ─────────────────────────────────────────
  {
    id: "c2-read-2",
    level: "C2",
    category: "academic",
    title: "The Paradox of Meritocracy",
    titleDe: "Das Paradox der Meritokratie",
    text: `Die Vorstellung einer meritokratischen Gesellschaft, in der Aufstieg ausschliesslich auf individueller Leistung basiert, gehoert zu den wirkmaechtigen Erzaehlungen westlicher Demokratien. Eine differenzierte Betrachtung offenbart jedoch die inhaerent paradoxe Struktur dieses Konzepts: Indem die Meritokratie Ungleichheit als Resultat individueller Verdienste legitimiert, verschleiert sie die strukturellen Bedingungen, die den vermeintlich fairen Wettbewerb von vornherein verzerren.

Der franzoesische Soziologe Pierre Bourdieu hat mit seinem Konzept des kulturellen Kapitals aufgezeigt, dass der Bildungserfolg massgeblich von der sozialen Herkunft abhaengt. Kinder aus bildungsbuergerlichen Familien verfuegen ueber inkorporiertes kulturelles Kapital - Sprachcodes, Habitus, implizites Wissen -, das im institutionalisierten Bildungssystem systematisch honoriert wird.

Die psychologischen Kosten der meritokratischen Ideologie sind betraechtlich: Wer in einem System scheitert, das Erfolg als individuelles Verdienst definiert, kann das Scheitern nur sich selbst zuschreiben. Michael Sandel argumentiert in seiner Kritik der Meritokratie, dass diese Logik zu einer Hybris der Gewinner und einer Demuetiging der Verlierer fuehre - mit fatalen Folgen fuer den sozialen Zusammenhalt.`,
    wordCount: 172,
    vocabulary: [
      { word: "wirkmaeechtig", meaning: "influential / powerful" },
      { word: "verschleiern", meaning: "to obscure / conceal" },
      { word: "inkorporiert", meaning: "embodied / internalized" },
      { word: "Hybris", meaning: "hubris / arrogance" },
      { word: "Zusammenhalt", meaning: "cohesion" },
    ],
    questions: [
      { question: "What does meritocracy paradoxically conceal according to the text?", options: ["Individuelle Leistung", "Strukturelle Bedingungen der Ungleichheit", "Genetische Unterschiede", "Politische Entscheidungen"], correctIndex: 1, explanation: "Sie verschleiert die strukturellen Bedingungen, die den Wettbewerb verzerren." },
      { question: "Whose concept of cultural capital is referenced?", options: ["Max Weber", "Juergen Habermas", "Pierre Bourdieu", "Michel Foucault"], correctIndex: 2, explanation: "Pierre Bourdieu hat mit seinem Konzept des kulturellen Kapitals aufgezeigt..." },
      { question: "What does Michael Sandel argue meritocracy leads to?", options: ["Mehr Gleichheit", "Hybris der Gewinner und Demuetiging der Verlierer", "Bessere Bildung", "Wirtschaftswachstum"], correctIndex: 1, explanation: "Diese Logik fuehre zu einer Hybris der Gewinner und einer Demuetiging der Verlierer." },
    ],
  },
  {
    id: "c2-read-3",
    level: "C2",
    category: "culture",
    title: "The Art of Feuilleton Writing",
    titleDe: "Die Kunst des Feuilletons",
    text: `Das Feuilleton, jene eigentueemliche Textsorte zwischen Journalismus und Literatur, hat im deutschsprachigen Raum eine laengere und gewichtigere Tradition als in den meisten anderen Presselandschaften. Waehrend angelsaechsische Zeitungen ihre Kulturberichterstattung im Entertainment-Ressort ansiedeln, raeumen die grossen deutschen Blaetter - FAZ, SZ, Zeit - dem Feuilleton ein eigenes Ressort mit erheblichem Prestige ein.

Die Wurzeln reichen ins 19. Jahrhundert zurueck, als Heinrich Heine mit seinen Pariser Korrespondenzen eine essayistische Prosa entwickelte, die subjektive Beobachtung, politische Analyse und literarische Stilistik zu einer unverwechselbaren Gattung verschmolz. Diese Tradition der intellektuellen Grossessayistik wirkt bis heute fort - in den Texten eines Juergen Kaube oder einer Carolin Emcke.

Kritiker sehen im Feuilleton zunehmend ein Relikt buergerlicher Hochkultur, das die kulturelle Diversitaet der Gegenwartsgesellschaft unzureichend abbildet. Die Frage, ob die tradierte Form des langen, reflexiven Textes im Zeitalter digitaler Aufmerksamkeitsoekonomie ueberlebensfaehig ist, wird kontrovers diskutiert.

Paradoxerweise erleben gerade Formate, die dem Feuilleton-Geist verwandt sind - Longform-Journalismus, literarische Podcasts, Substack-Newsletter -, eine Renaissance im Digitalen.`,
    wordCount: 172,
    vocabulary: [
      { word: "Textsorte", meaning: "text type / genre" },
      { word: "Ressort", meaning: "department / section" },
      { word: "essayistisch", meaning: "essayistic" },
      { word: "Aufmerksamkeitsoekonomie", meaning: "attention economy" },
      { word: "Longform-Journalismus", meaning: "long-form journalism" },
    ],
    questions: [
      { question: "Who is credited with developing the feuilleton style?", options: ["Thomas Mann", "Heinrich Heine", "Friedrich Schiller", "Karl Marx"], correctIndex: 1, explanation: "Heinrich Heine entwickelte mit seinen Pariser Korrespondenzen eine essayistische Prosa." },
      { question: "How do Anglo-Saxon newspapers treat cultural reporting?", options: ["Als eigenes Ressort", "Im Entertainment-Ressort", "Gar nicht", "Als Werbung"], correctIndex: 1, explanation: "Angelsaechsische Zeitungen siedeln ihre Kulturberichterstattung im Entertainment-Ressort an." },
      { question: "What paradox does the text note about feuilleton-style writing?", options: ["Es ist in Print tot", "Es wird nur von Alten gelesen", "Verwandte digitale Formate erleben eine Renaissance", "Es wird immer kuerzer"], correctIndex: 2, explanation: "Formate, die dem Feuilleton-Geist verwandt sind, erleben eine Renaissance im Digitalen." },
    ],
  },
  {
    id: "c2-read-4",
    level: "C2",
    category: "formal",
    title: "Constitutional Court Ruling on Climate",
    titleDe: "Klimabeschluss des Bundesverfassungsgerichts",
    text: `Der Klimabeschluss des Bundesverfassungsgerichts vom 24. Maerz 2021 markiert einen Meilenstein in der Verfassungsrechtsprechung. Das Gericht erklaerte Teile des Bundes-Klimaschutzgesetzes fuer verfassungswidrig, weil die gesetzlichen Reduktionsziele fuer Treibhausgasemissionen nach 2030 unzureichend spezifiziert waren.

Die wegweisende Argumentation: Die ungenuegende Festlegung von Reduktionspfaden verlagere die Last der Emissionsminderung ueberproportional in die Zukunft und beschraenke damit die Freiheitsrechte kuenftiger Generationen. Das Gericht leitete aus Artikel 20a des Grundgesetzes - dem Staatsziel Umweltschutz - eine intertemporale Freiheitssicherung ab, die den Gesetzgeber verpflichte, die natuerlichen Lebensgrundlagen auch fuer kommende Generationen zu schuetzen.

Diese Entscheidung hat internationale Beachtung gefunden und wird als Praezedenzfall fuer klimabezogene Verfassungsklagen in anderen Jurisdiktionen herangezogen. Der niederlaendische Urgenda-Fall und die Entscheidung des Europaeischen Gerichtshofs fuer Menschenrechte in KlimaSeniorinnen gegen die Schweiz bilden zusammen mit dem deutschen Beschluss eine sich verdichtende transnationale Klimarechtsprechung.

Juristische Kommentatoren bewerten den Beschluss als paradigmatisch fuer eine neue Generation von Grundrechtsinterpretationen, die oekologische Belange in den Schutzbereich der Grundrechte integrieren.`,
    wordCount: 174,
    vocabulary: [
      { word: "verfassungswidrig", meaning: "unconstitutional" },
      { word: "Reduktionspfad", meaning: "reduction pathway" },
      { word: "intertemporale Freiheitssicherung", meaning: "intertemporal freedom protection" },
      { word: "Praezedenzfall", meaning: "precedent" },
      { word: "paradigmatisch", meaning: "paradigmatic / model-setting" },
    ],
    questions: [
      { question: "Why were parts of the climate law declared unconstitutional?", options: ["Zu strenge Ziele", "Reduktionsziele nach 2030 waren unzureichend spezifiziert", "Zu hohe Kosten", "Fehlende EU-Abstimmung"], correctIndex: 1, explanation: "Die Reduktionsziele nach 2030 waren unzureichend spezifiziert." },
      { question: "From which article of the Basic Law did the court derive its argument?", options: ["Artikel 1", "Artikel 14", "Artikel 20a", "Artikel 38"], correctIndex: 2, explanation: "Das Gericht leitete aus Artikel 20a des Grundgesetzes eine intertemporale Freiheitssicherung ab." },
      { question: "What international significance does this ruling have?", options: ["Keine", "Als Praezedenzfall fuer Klimaklagen weltweit", "Nur fuer die EU", "Nur symbolisch"], correctIndex: 1, explanation: "Die Entscheidung wird als Praezedenzfall fuer klimabezogene Verfassungsklagen herangezogen." },
    ],
  },
  {
    id: "c2-read-5",
    level: "C2",
    category: "academic",
    title: "Language and Thought: The Sapir-Whorf Debate",
    titleDe: "Sprache und Denken: Die Sapir-Whorf-Debatte",
    text: `Die Frage, ob und inwiefern die Sprache das Denken determiniert, gehoert zu den langlebigsten Kontroversen der Geistes- und Kognitionswissenschaften. Die von Edward Sapir und Benjamin Lee Whorf in der ersten Haelfte des 20. Jahrhunderts formulierte linguistische Relativitaetshypothese postuliert in ihrer starken Version, dass die Struktur einer Sprache die Wahrnehmung und das Denken ihrer Sprecher fundamental formt.

Die starke Version gilt heute als empirisch widerlegt. Neuere psycholinguistische Forschung stuetzt jedoch eine moderate Variante: Sprache beeinflusst die Aufmerksamkeitsverteilung, die Kategorisierung und bestimmte kognitive Routinen, ohne das Denken vollstaendig zu determinieren. Lera Boroditskys Experimente zur Zeitwahrnehmung und raeumlichen Orientierung in verschiedenen Sprachgemeinschaften liefern hierfuer ueberzeugende Evidenz.

Fuer Deutschlernende hat diese Erkenntnis eine unmittelbare praktische Relevanz: Die Aneignung des grammatischen Genus, der Kasusflexion und der diskurspragmatischen Konventionen des Deutschen ist nicht bloss eine technische Uebung, sondern ermoeeglicht einen genuinen Perspektivwechsel. Wer auf Deutsch ueber einen Tisch als maskulines Objekt spricht, ihm Eigenschaften zuschreibt und ihn in einem Kausalsatz zum Agens macht, vollzieht subtile kognitive Operationen, die in genuslosen Sprachen wie dem Englischen nicht in gleicher Weise auftreten.`,
    wordCount: 185,
    vocabulary: [
      { word: "Relativitaetshypothese", meaning: "relativity hypothesis" },
      { word: "Aufmerksamkeitsverteilung", meaning: "attention distribution" },
      { word: "Kasusflexion", meaning: "case inflection" },
      { word: "Perspektivwechsel", meaning: "change of perspective" },
      { word: "Agens", meaning: "agent (grammar)" },
    ],
    questions: [
      { question: "What is the status of the strong Sapir-Whorf hypothesis today?", options: ["Vollstaendig bestaetigt", "Empirisch widerlegt", "Noch unbewiesen", "In der Debatte"], correctIndex: 1, explanation: "Die starke Version gilt heute als empirisch widerlegt." },
      { question: "Whose experiments support the moderate version?", options: ["Noam Chomsky", "Lera Boroditsky", "Steven Pinker", "Ferdinand de Saussure"], correctIndex: 1, explanation: "Lera Boroditskys Experimente liefern ueberzeugende Evidenz." },
      { question: "What practical relevance does this have for German learners?", options: ["Keine", "Grammatik ist unwichtig", "Deutschlernen ermoeeglicht einen genuinen Perspektivwechsel", "Man muss schneller lesen"], correctIndex: 2, explanation: "Die Aneignung des Deutschen ermoeeglicht einen genuinen Perspektivwechsel." },
    ],
  },
];
