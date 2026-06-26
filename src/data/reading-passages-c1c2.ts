import { ReadingPassage } from "./reading-passages";

export const readingPassagesC1C2: ReadingPassage[] = [
  // ── C1 ──────────────────────────────────────────────────
  {
    id: "c1-read-new-1",
    level: "C1",
    category: "academic",
    title: "The Paradox of Choice",
    titleDe: "Das Paradox der Wahl",
    text: `In modernen Gesellschaften verfügen Konsumenten über eine noch nie dagewesene Auswahl an Produkten und Dienstleistungen. Der amerikanische Psychologe Barry Schwartz argumentiert in seinem vielbeachteten Werk 'The Paradox of Choice', dass diese Fülle an Möglichkeiten uns nicht glücklicher macht, sondern im Gegenteil zu Überforderung, Entscheidungsangst und Unzufriedenheit führt.

Das Phänomen lässt sich an einem klassischen Experiment veranschaulichen: In einem Supermarkt wurden an einem Stand 24 verschiedene Marmeladensorten angeboten, an einem anderen nur sechs. Obwohl der Stand mit 24 Sorten mehr Aufmerksamkeit erregte, kauften zehnmal mehr Menschen am Stand mit nur sechs Sorten. Die überwältigende Auswahl führte dazu, dass viele Kunden gar keine Entscheidung trafen.

Schwartz unterscheidet zwischen 'Maximierern' — Menschen, die immer die bestmögliche Option suchen — und 'Satisfizierern', die sich mit einer hinreichend guten Wahl zufriedengeben. Maximierer treffen zwar objektiv oft bessere Entscheidungen, sind aber subjektiv unzufriedener, weil sie ständig grübeln, ob eine andere Wahl nicht doch besser gewesen wäre.

Die gesellschaftspolitischen Implikationen sind weitreichend: Sollten Unternehmen und Institutionen die Auswahl bewusst begrenzen? Das Konzept des 'Nudging' — entwickelt von Richard Thaler und Cass Sunstein — schlägt vor, die 'Architektur der Wahl' so zu gestalten, dass Menschen zu besseren Entscheidungen gelenkt werden, ohne ihre Wahlfreiheit einzuschränken. Dies wird inzwischen von zahlreichen Regierungen weltweit in der Gesundheitspolitik, bei Rentensparprogrammen und im Umweltschutz eingesetzt.`,
    wordCount: 220,
    vocabulary: [
      { word: "dagewesene", meaning: "unprecedented" },
      { word: "Überforderung", meaning: "overwhelm" },
      { word: "veranschaulichen", meaning: "to illustrate" },
      { word: "hinreichend", meaning: "sufficient" },
      { word: "grübeln", meaning: "to ruminate/brood" },
      { word: "Implikationen", meaning: "implications" },
    ],
    questions: [
      { question: "Was geschah im Marmeladen-Experiment?", options: ["Mehr Sorten führten zu mehr Käufen", "Weniger Sorten führten zu zehnmal mehr Käufen", "Die Auswahl spielte keine Rolle"], correctIndex: 1, explanation: "Zehnmal mehr Menschen kauften am Stand mit nur sechs Sorten." },
      { question: "Was unterscheidet Maximierer von Satisfizierern?", options: ["Maximierer geben mehr Geld aus", "Maximierer suchen die bestmögliche Option, sind aber unzufriedener", "Satisfizierer treffen bessere Entscheidungen"], correctIndex: 1, explanation: "Maximierer suchen die beste Option, sind aber subjektiv unzufriedener." },
      { question: "Was ist 'Nudging'?", options: ["Werbung für Produkte", "Gestaltung der Wahlarchitektur ohne Einschränkung der Freiheit", "Verbote bestimmter Produkte"], correctIndex: 1, explanation: "Nudging lenkt Menschen zu besseren Entscheidungen, ohne ihre Wahlfreiheit einzuschränken." },
      { question: "In welchen Bereichen wird Nudging eingesetzt?", options: ["Nur in der Werbung", "Gesundheitspolitik, Rente und Umweltschutz", "Nur im Supermarkt"], correctIndex: 1, explanation: "In der Gesundheitspolitik, bei Rentensparprogrammen und im Umweltschutz." },
    ],
  },
  {
    id: "c1-read-new-2",
    level: "C1",
    category: "news",
    title: "Germany's Demographic Challenge",
    titleDe: "Deutschlands demografische Herausforderung",
    text: `Deutschland steht vor einer der gravierendsten demografischen Herausforderungen seiner Geschichte. Die Geburtenrate liegt seit Jahrzehnten deutlich unter dem Bestanderhaltungsniveau von 2,1 Kindern pro Frau — im Jahr 2023 bei lediglich 1,35. Gleichzeitig steigt die Lebenserwartung kontinuierlich. Die Folge: Die Gesellschaft altert rapide, und der Anteil der Erwerbstätigen an der Gesamtbevölkerung sinkt.

Die wirtschaftlichen Konsequenzen sind bereits spürbar. Der Fachkräftemangel hat sich zu einem strukturellen Problem entwickelt, das nahezu alle Branchen betrifft — von der Pflege über die IT-Branche bis zum Handwerk. Bis 2035 werden voraussichtlich sieben Millionen Arbeitskräfte fehlen, wenn keine Gegenmaßnahmen ergriffen werden.

Um den Arbeitskräftebedarf zu decken, setzt die Bundesregierung auf mehrere Strategien: Das im Juni 2023 verabschiedete Fachkräfteeinwanderungsgesetz erleichtert qualifizierten Arbeitskräften aus Drittstaaten den Zugang zum deutschen Arbeitsmarkt erheblich. Zudem sollen die Erwerbsbeteiligung von Frauen und Älteren gesteigert sowie die Digitalisierung und Automatisierung vorangetrieben werden.

Kritiker bemängeln jedoch, dass diese Maßnahmen nicht ausreichen. Der Ökonom Marcel Fratzscher vom Deutschen Institut für Wirtschaftsforschung betont: 'Wir brauchen einen fundamentalen Wandel in der Arbeitskultur — weg von der Präsenzpflicht, hin zu Ergebnisorientierung und lebenslangem Lernen."

Die demografische Wende wird Deutschland in den kommenden Jahrzehnten tiefgreifend verändern und zwingt die Gesellschaft, grundlegende Fragen zu Rente, Gesundheitsversorgung und Zuwanderung neu zu verhandeln.`,
    wordCount: 225,
    vocabulary: [
      { word: "Bestanderhaltungsniveau", meaning: "replacement level (fertility)" },
      { word: "Erwerbstätigen", meaning: "working population" },
      { word: "Fachkräftemangel", meaning: "skilled worker shortage" },
      { word: "Gegenmaßnahmen", meaning: "countermeasures" },
      { word: "Drittstaaten", meaning: "third countries (non-EU)" },
      { word: "Präsenzpflicht", meaning: "mandatory physical presence" },
    ],
    questions: [
      { question: "Wie hoch war die Geburtenrate 2023?", options: ["1,35", "1,80", "2,10"], correctIndex: 0, explanation: "Im Jahr 2023 bei lediglich 1,35 Kindern pro Frau." },
      { question: "Wie viele Arbeitskräfte werden bis 2035 fehlen?", options: ["3 Millionen", "5 Millionen", "7 Millionen"], correctIndex: 2, explanation: "Bis 2035 werden voraussichtlich sieben Millionen Arbeitskräfte fehlen." },
      { question: "Was fordert Marcel Fratzscher?", options: ["Mehr Zuwanderung", "Einen fundamentalen Wandel in der Arbeitskultur", "Höhere Renten"], correctIndex: 1, explanation: "Ein fundamentaler Wandel — weg von Präsenzpflicht, hin zu Ergebnisorientierung." },
    ],
  },
  {
    id: "c1-read-new-3",
    level: "C1",
    category: "culture",
    title: "The Power of the German Feuilleton",
    titleDe: "Die Macht des deutschen Feuilletons",
    text: `Das Feuilleton — der Kulturteil einer Zeitung — genießt in Deutschland einen Stellenwert, der in vielen anderen Ländern seinesgleichen sucht. Während in angelsächsischen Medien Kultur oft als unterhaltungsnahes Beiwerk behandelt wird, nimmt das Feuilleton in deutschen Qualitätszeitungen wie der FAZ, der Süddeutschen Zeitung oder der ZEIT eine zentrale intellektuelle Funktion ein.

Ein Feuilleton-Artikel in der FAZ kann eine gesellschaftliche Debatte auslösen. Als Botho Strauß 1993 seinen Essay 'Anschwellender Bocksgesang' in der ZEIT veröffentlichte, wurde wochenlang über den Zustand der deutschen Demokratie diskutiert. Jürgen Habermas und Peter Sloterdijk trugen 1999 ihren philosophischen Disput über Gentechnik und Menschenzucht öffentlich im Feuilleton aus — ein Streit, der als 'Sloterdijk-Habermas-Debatte' in die Geistesgeschichte einging.

Diese Tradition hat historische Wurzeln. Bereits im 19. Jahrhundert nutzten Intellektuelle wie Heinrich Heine das Feuilleton als Medium für politische und gesellschaftliche Kritik, die in anderen Rubriken der Zensur zum Opfer gefallen wäre. Die literarische Form des Feuilletons — essayistisch, reflektierend, stilistisch anspruchsvoll — ist selbst ein Ausdruck der deutschen Hochkultur-Tradition.

Doch das Feuilleton befindet sich im Wandel. In Zeiten sinkender Auflagen und digitaler Kurzatmigkeit stellt sich die Frage, ob lange, anspruchsvolle Texte über Philosophie, Literatur und Kunst noch ein Publikum finden. Optimisten verweisen darauf, dass gerade in einer Welt voller Oberflächlichkeit das Bedürfnis nach Tiefe und Reflexion wächst.`,
    wordCount: 215,
    vocabulary: [
      { word: "Stellenwert", meaning: "status/importance" },
      { word: "seinesgleichen sucht", meaning: "is unparalleled" },
      { word: "Geistesgeschichte", meaning: "intellectual history" },
      { word: "Zensur", meaning: "censorship" },
      { word: "Kurzatmigkeit", meaning: "breathlessness (fig: short attention span)" },
      { word: "Oberflächlichkeit", meaning: "superficiality" },
    ],
    questions: [
      { question: "Was ist das Feuilleton?", options: ["Die Sportseite einer Zeitung", "Der Kulturteil einer Zeitung", "Die Wirtschaftsseite"], correctIndex: 1, explanation: "Das Feuilleton ist der Kulturteil einer Zeitung." },
      { question: "Worüber stritten Habermas und Sloterdijk?", options: ["Über Klimapolitik", "Über Gentechnik und Menschenzucht", "Über Literaturkritik"], correctIndex: 1, explanation: "Sie trugen einen Disput über Gentechnik und Menschenzucht aus." },
      { question: "Was ist die aktuelle Herausforderung des Feuilletons?", options: ["Zu wenig Themen", "Sinkende Auflagen und digitale Kurzatmigkeit", "Zu viele Autoren"], correctIndex: 1, explanation: "Sinkende Auflagen und digitale Kurzatmigkeit bedrohen das Format." },
    ],
  },
  {
    id: "c1-read-new-4",
    level: "C1",
    category: "formal",
    title: "Legal Text: Tenant Rights",
    titleDe: "Rechtstext: Mieterschutz in Deutschland",
    text: `Das deutsche Mietrecht zählt zu den mieterfreundlichsten der Welt. Grundlage ist das Bürgerliche Gesetzbuch (BGB), insbesondere die §§ 535 bis 580a, die das Mietverhältnis umfassend regeln.

Ein zentraler Grundsatz ist der Kündigungsschutz. Der Vermieter kann das Mietverhältnis nur aus berechtigtem Interesse kündigen. Als berechtigtes Interesse gelten: erhebliche Vertragsverletzungen durch den Mieter (z.B. wiederholte Nichtzahlung der Miete), Eigenbedarf des Vermieters oder wirtschaftliche Verwertung des Grundstücks, sofern dem Vermieter andernfalls erhebliche Nachteile entstünden.

Die Kündigungsfristen sind nach Mietdauer gestaffelt: Bei einer Mietdauer bis zu fünf Jahren beträgt die Kündigungsfrist drei Monate, bei fünf bis acht Jahren sechs Monate und bei einer Mietdauer von über acht Jahren neun Monate. Dem Mieter steht unabhängig von der Wohndauer stets eine dreimonatige Kündigungsfrist zu.

Mieterhöhungen unterliegen strengen Regularien. Der Vermieter kann die Miete bis zur ortsüblichen Vergleichsmiete anheben, jedoch innerhalb von drei Jahren um maximal 20 Prozent (in angespannten Wohnungsmärkten 15 Prozent). Die sogenannte Mietpreisbremse begrenzt zudem bei Neuvermietungen die zulässige Miete auf zehn Prozent über der ortsüblichen Vergleichsmiete.

Die Kaution darf maximal drei Nettokaltmieten betragen und muss vom Vermieter getrennt von seinem Vermögen auf einem speziellen Konto angelegt werden.`,
    wordCount: 205,
    vocabulary: [
      { word: "Kündigungsschutz", meaning: "protection against eviction" },
      { word: "Eigenbedarf", meaning: "personal use/need (landlord)" },
      { word: "gestaffelt", meaning: "staggered/graduated" },
      { word: "Regularien", meaning: "regulations" },
      { word: "Nettokaltmieten", meaning: "net cold rents (excluding utilities)" },
    ],
    questions: [
      { question: "Wann darf ein Vermieter kündigen?", options: ["Jederzeit", "Nur bei berechtigtem Interesse", "Nach 10 Jahren"], correctIndex: 1, explanation: "Der Vermieter kann nur aus berechtigtem Interesse kündigen." },
      { question: "Wie lang ist die Kündigungsfrist bei 6 Jahren Mietdauer?", options: ["3 Monate", "6 Monate", "9 Monate"], correctIndex: 1, explanation: "Bei 5 bis 8 Jahren beträgt die Frist 6 Monate." },
      { question: "Wie hoch darf die Kaution maximal sein?", options: ["Eine Monatsmiete", "Zwei Monatsmieten", "Drei Nettokaltmieten"], correctIndex: 2, explanation: "Die Kaution darf maximal drei Nettokaltmieten betragen." },
    ],
  },
  {
    id: "c1-read-new-5",
    level: "C1",
    category: "academic",
    title: "The Neuroscience of Bilingualism",
    titleDe: "Die Neurowissenschaft der Zweisprachigkeit",
    text: `Lange Zeit galt Zweisprachigkeit in der Erziehung als problematisch — man befürchtete Sprachverwirrung und kognitive Nachteile. Die neurowissenschaftliche Forschung der letzten zwei Jahrzehnte hat diese Annahme gründlich widerlegt und zeigt im Gegenteil, dass Bilingualismus das Gehirn in vielerlei Hinsicht stärkt.

Bildgebende Verfahren wie die funktionelle Magnetresonanztomografie (fMRT) zeigen, dass beim Sprechen einer Sprache die andere nicht einfach 'abgeschaltet' wird. Vielmehr sind beide Sprachen permanent aktiv, und das Gehirn muss ständig die nicht benötigte Sprache unterdrücken. Dieser permanente Kontrollmechanismus — vergleichbar mit einem mentalen Muskeltraining — stärkt die sogenannten exekutiven Funktionen: Aufmerksamkeitskontrolle, Arbeitsgedächtnis und kognitive Flexibilität.

Besonders bemerkenswert ist die Auswirkung auf das Altern. Studien der York University in Toronto zeigen, dass zweisprachige Personen im Durchschnitt vier bis fünf Jahre später an Demenz erkranken als einsprachige. Dies gilt unabhängig von Bildungsniveau, Einkommen und Lebensstil — die kognitive Reserve, die durch lebenslange Zweisprachigkeit aufgebaut wird, scheint einen schützenden Effekt auszuüben.

Allerdings warnen Forscher vor voreiligen Schlüssen. Die methodischen Herausforderungen in diesem Forschungsfeld sind erheblich: Bilingualismus ist keine einheitliche Kategorie — die Effekte hängen ab vom Alter des Spracherwerbs, der Häufigkeit der Nutzung, der typologischen Distanz zwischen den Sprachen und zahlreichen sozioökonomischen Faktoren.`,
    wordCount: 210,
    vocabulary: [
      { word: "widerlegt", meaning: "refuted" },
      { word: "Bildgebende Verfahren", meaning: "imaging techniques" },
      { word: "unterdrücken", meaning: "to suppress" },
      { word: "exekutive Funktionen", meaning: "executive functions" },
      { word: "kognitive Reserve", meaning: "cognitive reserve" },
      { word: "voreilige Schlüsse", meaning: "premature conclusions" },
    ],
    questions: [
      { question: "Was stärkt die ständige Sprachunterdrückung?", options: ["Das Sprachzentrum", "Die exekutiven Funktionen", "Das Langzeitgedächtnis"], correctIndex: 1, explanation: "Der Kontrollmechanismus stärkt Aufmerksamkeit, Arbeitsgedächtnis und kognitive Flexibilität." },
      { question: "Wie wirkt sich Zweisprachigkeit auf Demenz aus?", options: ["Kein Effekt", "4-5 Jahre späterer Krankheitsbeginn", "Doppelt so hohes Risiko"], correctIndex: 1, explanation: "Zweisprachige erkranken 4-5 Jahre später an Demenz." },
      { question: "Wovor warnen Forscher?", options: ["Vor Zweisprachigkeit bei Kindern", "Vor voreiligen Schlüssen wegen methodischer Herausforderungen", "Vor zu vielen Sprachen"], correctIndex: 1, explanation: "Die methodischen Herausforderungen sind erheblich." },
    ],
  },
  {
    id: "c1-read-new-6",
    level: "C1",
    category: "news",
    title: "The Future of the German Auto Industry",
    titleDe: "Die Zukunft der deutschen Automobilindustrie",
    text: `Die deutsche Automobilindustrie — jahrzehntelang das Rückgrat der exportorientierten Wirtschaft — steht vor einem epochalen Umbruch. Der Übergang vom Verbrennungsmotor zum Elektroantrieb stellt Hersteller wie Volkswagen, BMW und Mercedes-Benz vor Herausforderungen, die in ihrer Tragweite mit der Industrialisierung vergleichbar sind.

Die Zahlen verdeutlichen die Dimension: Die Automobilbranche beschäftigt in Deutschland direkt und indirekt rund 780.000 Menschen. Viele davon arbeiten in Bereichen, die mit der Elektromobilität überflüssig werden — etwa in der Getriebe- und Abgastechnik. Experten schätzen, dass bis 2030 allein bei den Zulieferern bis zu 300.000 Arbeitsplätze wegfallen könnten.

Gleichzeitig drängen chinesische Hersteller wie BYD mit konkurrenzfähigen und preisgünstigen Elektroautos auf den europäischen Markt. Ihre Vorteile: vertikale Integration der Lieferkette, günstigere Batterieproduktion und ein jahrelanger Vorsprung in der Massenproduktion von E-Fahrzeugen. Die deutsche Premiumstrategie — technisch anspruchsvoll, aber teuer — gerät unter Druck.

Die Bundesregierung versucht gegenzusteuern: Subventionen für Batterieforschung, Ausbau der Ladeinfrastruktur und steuerliche Anreize für Elektrofahrzeuge. Doch viele Branchenkenner bezweifeln, ob diese Maßnahmen ausreichen, um die Wettbewerbsfähigkeit langfristig zu sichern. Das Grundproblem sei nicht die Technologie, sondern die Geschwindigkeit des Wandels — und die Bereitschaft einer konservativen Branche, sich neu zu erfinden.`,
    wordCount: 210,
    vocabulary: [
      { word: "epochaler Umbruch", meaning: "epoch-making upheaval" },
      { word: "Tragweite", meaning: "magnitude/scope" },
      { word: "überflüssig", meaning: "redundant" },
      { word: "vertikale Integration", meaning: "vertical integration" },
      { word: "gegensteuern", meaning: "to counteract" },
    ],
    questions: [
      { question: "Wie viele Menschen beschäftigt die Autobranche in Deutschland?", options: ["Rund 400.000", "Rund 780.000", "Über 1 Million"], correctIndex: 1, explanation: "Die Branche beschäftigt direkt und indirekt rund 780.000 Menschen." },
      { question: "Was ist der Vorteil chinesischer Hersteller?", options: ["Besseres Design", "Günstigere Produktion und Vorsprung bei E-Fahrzeugen", "Mehr Tradition"], correctIndex: 1, explanation: "Günstigere Batterieproduktion und Vorsprung in der Massenproduktion." },
      { question: "Was ist laut Branchenkennern das Grundproblem?", options: ["Fehlende Technologie", "Die Geschwindigkeit des Wandels und Bereitschaft zur Neuerfindung", "Zu hohe Steuern"], correctIndex: 1, explanation: "Die Geschwindigkeit des Wandels und die Bereitschaft, sich neu zu erfinden." },
    ],
  },
  {
    id: "c1-read-new-7",
    level: "C1",
    category: "culture",
    title: "Kafka and the Absurdity of Bureaucracy",
    titleDe: "Kafka und die Absurdität der Bürokratie",
    text: `Franz Kafka hat mit Werken wie 'Der Prozess' und 'Das Schloss' eine literarische Welt geschaffen, die so prägend war, dass sein Name zum Adjektiv geworden ist: 'kafkaesk' beschreibt Situationen, in denen der Einzelne einer undurchschaubaren, übermächtigen Bürokratie ausgeliefert ist — eine Erfahrung, die viele Menschen auch heute noch machen.

In 'Der Prozess' (1925 posthum veröffentlicht) wird der Bankprokurist Josef K. eines Morgens verhaftet, ohne zu erfahren, welches Vergehen ihm vorgeworfen wird. Der gesamte Roman schildert seinen vergeblichen Versuch, das Wesen der Anklage zu verstehen und sich zu verteidigen. Die Gerichtsinstanzen sind labyrinthisch, die Richter unsichtbar, die Regeln unverständlich. Am Ende wird Josef K. hingerichtet — 'wie ein Hund', wie er selbst sagt.

Kafkas Werk lässt sich auf mehreren Ebenen interpretieren: als Kritik an der bürokratischen Moderne, als existenzialistische Parabel über die Sinnlosigkeit menschlichen Strebens, als prophetische Vision totalitärer Systeme oder als Ausdruck persönlicher Ängste eines Mannes, der zeitlebens unter dem übermächtigen Vater und der Entfremdung vom eigenen Körper litt.

Bemerkenswert ist, dass Kafka zu Lebzeiten weitgehend unbekannt blieb. Erst sein Freund Max Brod, der Kafkas testamentarischen Wunsch, alle Manuskripte zu verbrennen, missachtete, machte die Werke der Öffentlichkeit zugänglich. Ohne Brods Ungehorsam wäre eines der bedeutendsten literarischen Œuvres des 20. Jahrhunderts unwiederbringlich verloren.`,
    wordCount: 215,
    vocabulary: [
      { word: "kafkaesk", meaning: "Kafkaesque (absurdly bureaucratic)" },
      { word: "undurchschaubar", meaning: "inscrutable/impenetrable" },
      { word: "posthum", meaning: "posthumously" },
      { word: "Parabel", meaning: "parable" },
      { word: "Entfremdung", meaning: "alienation" },
      { word: "unwiederbringlich", meaning: "irretrievably" },
    ],
    questions: [
      { question: "Was bedeutet 'kafkaesk'?", options: ["Lustig und unterhaltsam", "Einer undurchschaubaren Bürokratie ausgeliefert", "Romantisch und poetisch"], correctIndex: 1, explanation: "Kafkaesk beschreibt undurchschaubare, übermächtige Bürokratie." },
      { question: "Was passiert mit Josef K. in 'Der Prozess'?", options: ["Er wird freigesprochen", "Er erfährt nie sein Vergehen und wird hingerichtet", "Er wird Richter"], correctIndex: 1, explanation: "Er erfährt nie sein Vergehen und wird am Ende hingerichtet." },
      { question: "Was wollte Kafka mit seinen Manuskripten geschehen lassen?", options: ["Sie veröffentlichen", "Sie verbrennen", "Sie übersetzen"], correctIndex: 1, explanation: "Kafka wollte, dass alle Manuskripte verbrannt werden." },
    ],
  },
  {
    id: "c1-read-new-8",
    level: "C1",
    category: "academic",
    title: "Social Media and Democracy",
    titleDe: "Soziale Medien und die Demokratie",
    text: `Die Frage, ob soziale Medien die Demokratie stärken oder untergraben, gehört zu den drängendsten Debatten der politischen Wissenschaft. Die anfängliche Euphorie — soziale Netzwerke als demokratisierende Kraft, die jedem eine Stimme gibt — ist einer nüchterneren Betrachtung gewichen.

Einerseits ermöglichen Plattformen wie Twitter, Facebook und Instagram politische Partizipation jenseits traditioneller Gatekeepers. Bürger können sich unmittelbar informieren, vernetzen und mobilisieren. Die Protestbewegungen des Arabischen Frühlings oder Fridays for Future wären ohne soziale Medien kaum denkbar gewesen. Marginalisierte Gruppen erhalten eine Plattform, die ihnen in klassischen Medien oft verwehrt blieb.

Andererseits begünstigen die Algorithmen sozialer Netzwerke die Bildung von Filterblasen und Echokammern, in denen Nutzer vorwiegend Inhalte konsumieren, die ihre bestehenden Überzeugungen bestätigen. Dies kann zu einer Fragmentierung des öffentlichen Diskurses führen — einer Entwicklung, die den demokratischen Konsens bedroht. Hinzu kommt die gezielte Verbreitung von Desinformation und die Möglichkeit ausländischer Einflussnahme auf Wahlen.

Die Politikwissenschaftlerin Nadia Urbinati argumentiert, dass soziale Medien die 'plebiszitäre' Dimension der Demokratie stärken — die direkte Stimmungsäußerung des Volkes —, gleichzeitig aber die deliberative Komponente schwächen: das reflektierte, argumentbasierte Abwägen unterschiedlicher Positionen, das für eine funktionsfähige Demokratie unerlässlich ist.`,
    wordCount: 200,
    vocabulary: [
      { word: "untergraben", meaning: "to undermine" },
      { word: "Gatekeepers", meaning: "gatekeepers" },
      { word: "Filterblasen", meaning: "filter bubbles" },
      { word: "Desinformation", meaning: "disinformation" },
      { word: "plebiszitär", meaning: "plebiscitary" },
      { word: "deliberativ", meaning: "deliberative" },
    ],
    questions: [
      { question: "Was ermöglichen soziale Medien positiv?", options: ["Bessere Unterhaltung", "Partizipation und Mobilisierung jenseits traditioneller Medien", "Höhere Einnahmen für Medien"], correctIndex: 1, explanation: "Sie ermöglichen Partizipation und Mobilisierung jenseits traditioneller Gatekeepers." },
      { question: "Was sind Echokammern?", options: ["Räume für Musik", "Umgebungen, in denen nur bestätigende Meinungen konsumiert werden", "Chatgruppen"], correctIndex: 1, explanation: "Nutzer konsumieren vorwiegend Inhalte, die ihre bestehenden Überzeugungen bestätigen." },
      { question: "Was schwächen soziale Medien laut Urbinati?", options: ["Die direkte Demokratie", "Die deliberative Komponente", "Das Wahlsystem"], correctIndex: 1, explanation: "Sie schwächen das reflektierte, argumentbasierte Abwägen — die deliberative Komponente." },
    ],
  },
  {
    id: "c1-read-new-9",
    level: "C1",
    category: "news",
    title: "Burnout: The Illness of Our Time",
    titleDe: "Burnout: Die Krankheit unserer Zeit",
    text: `Die Zahl der Krankschreibungen aufgrund psychischer Erkrankungen hat sich in Deutschland seit dem Jahr 2000 verdreifacht. Burnout — das Gefühl des totalen Ausgebranntseins — ist dabei zur Volkskrankheit avanciert, auch wenn die medizinische Klassifikation nach wie vor umstritten ist.

Die Weltgesundheitsorganisation (WHO) definiert Burnout seit 2019 als 'Syndrom, das aus chronischem Arbeitsstress resultiert, der nicht erfolgreich bewältigt wird". Die drei Kerndimensionen sind emotionale Erschöpfung, Depersonalisierung (ein zynisches oder distanziertes Verhältnis zur eigenen Arbeit) und reduzierte Leistungsfähigkeit.

Die Ursachen sind vielschichtig. Auf individueller Ebene trifft es häufig hochmotivierte, perfektionistische Menschen, die sich übermäßig mit ihrer Arbeit identifizieren. Auf struktureller Ebene spielen ständige Erreichbarkeit, zunehmende Arbeitsverdichtung und die Auflösung der Grenzen zwischen Berufs- und Privatleben eine entscheidende Rolle.

Arbeitspsychologen betonen zunehmend, dass Burnout kein individuelles Versagen darstellt, sondern ein Symptom dysfunktionaler Arbeitsstrukturen ist. Der Soziologe Hartmut Rosa sieht im Burnout eine Konsequenz der 'Beschleunigungsgesellschaft': Je schneller sich alles dreht, desto wahrscheinlicher wird es, dass Menschen den Anschluss verlieren und innerlich ausbrennen.

Die Prävention erfordert daher Maßnahmen auf beiden Ebenen: individuelle Resilienzstärkung durch Achtsamkeitstraining, klare Grenzsetzung und Selbstfürsorge — aber auch organisatorische Veränderungen wie realistische Arbeitszeitmodelle, ein wertschätzendes Führungsverhalten und die Enttabuisierung psychischer Gesundheit am Arbeitsplatz.`,
    wordCount: 225,
    vocabulary: [
      { word: "Ausgebranntseins", meaning: "being burned out" },
      { word: "avanciert", meaning: "advanced/risen to" },
      { word: "Depersonalisierung", meaning: "depersonalization" },
      { word: "Arbeitsverdichtung", meaning: "work intensification" },
      { word: "Beschleunigungsgesellschaft", meaning: "acceleration society" },
      { word: "Enttabuisierung", meaning: "destigmatization" },
    ],
    questions: [
      { question: "Wie hat sich die Zahl der Krankschreibungen wegen psychischer Erkrankungen entwickelt?", options: ["Verdoppelt seit 2010", "Verdreifacht seit 2000", "Gleichgeblieben"], correctIndex: 1, explanation: "Die Zahl hat sich seit 2000 verdreifacht." },
      { question: "Was sind die drei Kerndimensionen von Burnout?", options: ["Stress, Angst, Depression", "Erschöpfung, Depersonalisierung, reduzierte Leistungsfähigkeit", "Müdigkeit, Kopfschmerzen, Schlaflosigkeit"], correctIndex: 1, explanation: "Emotionale Erschöpfung, Depersonalisierung und reduzierte Leistungsfähigkeit." },
      { question: "Was sieht Hartmut Rosa als Ursache?", options: ["Globalisierung", "Die Beschleunigungsgesellschaft", "Soziale Medien"], correctIndex: 1, explanation: "Burnout ist eine Konsequenz der Beschleunigungsgesellschaft." },
    ],
  },

  // ── C2 ──────────────────────────────────────────────────
  {
    id: "c2-read-new-1",
    level: "C2",
    category: "academic",
    title: "Hannah Arendt and the Banality of Evil",
    titleDe: "Hannah Arendt und die Banalität des Bösen",
    text: `Als Hannah Arendt 1961 für die Zeitschrift 'The New Yorker' den Prozess gegen Adolf Eichmann in Jerusalem beobachtete, erwartete sie ein Monster — einen fanatischen Antisemiten, der von Hass getrieben die systematische Vernichtung der europäischen Juden organisiert hatte. Stattdessen sah sie einen bürokratischen Beamten, der sich in der Sprache der Verwaltung ausdrückte, in Klischees dachte und beteuerte, lediglich Befehle ausgeführt zu haben.

Aus dieser Diskrepanz zwischen der Enormität der Verbrechen und der Gewöhnlichkeit des Täters entwickelte Arendt ihr berühmtes Konzept der 'Banalität des Bösen'. Ihre These war nicht, wie häufig missverstanden, dass das Böse banal sei, sondern dass es keiner außergewöhnlichen Bösartigkeit bedürfe, um an den furchtbarsten Verbrechen mitzuwirken. Vielmehr genüge eine bestimmte Form der Gedankenlosigkeit — die Unfähigkeit oder Unwilligkeit, die Perspektive eines anderen einzunehmen und die Konsequenzen des eigenen Handelns zu durchdenken.

Diese Analyse provozierte einen Sturm der Entrüstung, nicht zuletzt, weil Arendt in ihrem Bericht auch die Rolle der jüdischen Räte (Judenräte) thematisierte, die bei der Deportation kooperiert hatten — ein Vorwurf, der ihr den Vorwurf des Opfer-Täter-Umkehrung einbrachte.

Die philosophische Tragweite ihrer Analyse reicht jedoch weit über den historischen Kontext hinaus. In einer Welt, in der technologische Systeme es zunehmend ermöglichen, moralische Verantwortung zu diffundieren — man denke an Drohnenkriege, algorithmische Entscheidungssysteme oder die Entpersönlichung digitaler Kommunikation —, gewinnt Arendts Warnung vor der Gedankenlosigkeit eine erschreckende Aktualität. Ihr Postulat, dass eigenständiges Denken die letzte Bastion gegen das Böse darstellt, ist heute relevanter denn je.`,
    wordCount: 250,
    vocabulary: [
      { word: "beteuerte", meaning: "asserted/protested" },
      { word: "Diskrepanz", meaning: "discrepancy" },
      { word: "Bösartigkeit", meaning: "malice" },
      { word: "Gedankenlosigkeit", meaning: "thoughtlessness" },
      { word: "Entrüstung", meaning: "indignation/outrage" },
      { word: "diffundieren", meaning: "to diffuse" },
    ],
    questions: [
      { question: "Was erwartete Arendt von Eichmann?", options: ["Einen Philosophen", "Ein fanatisches Monster", "Einen normalen Beamten"], correctIndex: 1, explanation: "Sie erwartete ein Monster, einen fanatischen Antisemiten." },
      { question: "Was bedeutet die 'Banalität des Bösen'?", options: ["Das Böse ist harmlos", "Es braucht keine außergewöhnliche Bösartigkeit für furchtbare Verbrechen", "Böse Menschen sind dumm"], correctIndex: 1, explanation: "Es bedarf keiner besonderen Bösartigkeit — Gedankenlosigkeit genügt." },
      { question: "Warum ist Arendts Analyse heute relevant?", options: ["Wegen neuer historischer Funde", "Weil technologische Systeme moralische Verantwortung diffundieren", "Weil es mehr Kriege gibt"], correctIndex: 1, explanation: "Drohnenkriege, Algorithmen und digitale Entpersönlichung diffundieren moralische Verantwortung." },
      { question: "Was provozierte besondere Kritik?", options: ["Ihre Verteidigung Eichmanns", "Ihre Thematisierung der Rolle der Judenräte", "Ihre Ablehnung des Prozesses"], correctIndex: 1, explanation: "Die Thematisierung der Rolle der jüdischen Räte provozierte einen Sturm der Entrüstung." },
    ],
  },
  {
    id: "c2-read-new-2",
    level: "C2",
    category: "culture",
    title: "Thomas Mann and the German Bourgeoisie",
    titleDe: "Thomas Mann und das deutsche Bürgertum",
    text: `Mit den 'Buddenbrooks' schuf Thomas Mann 1901 nicht nur seinen literarischen Durchbruch, sondern auch das definitive Porträt des deutschen Bürgertums — seiner Werte, seiner Selbstgewissheit und seines unaufhaltsamen Niedergangs. Der Untertitel 'Verfall einer Familie' könnte ebenso gut als Diagnose einer ganzen Gesellschaftsschicht gelesen werden.

Über vier Generationen verfolgt Mann den Niedergang einer Lübecker Kaufmannsdynastie. Was in der ersten Generation noch solides kaufmännisches Geschick, hanseatische Nüchternheit und bürgerliche Pflichterfüllung ist, weicht in der zweiten einem wachsenden Unbehagen, in der dritten einer Hinwendung zur Kunst — und in der vierten dem physischen Verfall. Die Dialektik ist unerbittlich: Je kultivierter und reflektierter die Figuren werden, desto unfähiger sind sie, in der rauen Welt des Handels zu bestehen.

Mann selbst war die Verkörperung dieses Spannungsfeldes. Als Sohn einer Lübecker Patrizierfamilie und einer brasilianischen Mutter vereinigte er bürgerliche Disziplin mit künstlerischer Sensibilität — eine Spannung, die sein gesamtes Werk durchzieht. In 'Tonio Kröger' formuliert er das Dilemma paradigmatisch: Der Künstler sehnt sich nach der Wärme des bürgerlichen Lebens, das er durch sein Künstlertum unwiderruflich verloren hat.

Manns literarische Leistung besteht nicht zuletzt darin, dass er diese Analyse mit solcher stilistischen Meisterschaft und ironischer Distanz vortrug, dass sein Werk sowohl als Hommage an das Bürgertum als auch als dessen Grabrede gelesen werden kann — und dass diese Ambivalenz keineswegs ein Mangel ist, sondern vielmehr der Kern seiner Kunst.`,
    wordCount: 235,
    vocabulary: [
      { word: "Selbstgewissheit", meaning: "self-assurance" },
      { word: "Niedergang", meaning: "decline/downfall" },
      { word: "hanseatisch", meaning: "Hanseatic (relating to the historic trading league)" },
      { word: "Nüchternheit", meaning: "sobriety/pragmatism" },
      { word: "unerbittlich", meaning: "relentless/unyielding" },
      { word: "Grabrede", meaning: "funeral oration/eulogy" },
    ],
    questions: [
      { question: "Was beschreibt der Untertitel der Buddenbrooks?", options: ["Aufstieg einer Familie", "Verfall einer Familie", "Reise einer Familie"], correctIndex: 1, explanation: "Der Untertitel lautet 'Verfall einer Familie'." },
      { question: "Was passiert mit den Generationen in den Buddenbrooks?", options: ["Sie werden immer reicher", "Je kultivierter sie werden, desto unfähiger sind sie im Handel", "Sie wandern aus"], correctIndex: 1, explanation: "Je kultivierter die Figuren werden, desto unfähiger sind sie in der Geschäftswelt." },
      { question: "Was macht Manns Werk laut dem Text besonders?", options: ["Es ist sehr lang", "Es kann als Hommage und als Grabrede zugleich gelesen werden", "Es ist autobiografisch"], correctIndex: 1, explanation: "Es kann sowohl als Hommage an das Bürgertum als auch als dessen Grabrede gelesen werden." },
    ],
  },
  {
    id: "c2-read-new-3",
    level: "C2",
    category: "academic",
    title: "The Frankfurt School and Critical Theory",
    titleDe: "Die Frankfurter Schule und die Kritische Theorie",
    text: `Die Frankfurter Schule — das am Institut für Sozialforschung in Frankfurt am Main in den 1920er-Jahren begründete Projekt einer kritischen Gesellschaftstheorie — gehört zu den einflussreichsten intellektuellen Strömungen des 20. Jahrhunderts. Ihre Denker — Max Horkheimer, Theodor W. Adorno, Herbert Marcuse, Erich Fromm und später Jürgen Habermas — verknüpften marxistische Gesellschaftskritik mit Psychoanalyse, Soziologie und Kulturkritik zu einer neuartigen Synthese.

Das zentrale Anliegen war die Frage, warum die von Marx prophezeite Revolution ausgeblieben war und warum die Arbeiterklasse stattdessen autoritären Bewegungen wie dem Faschismus zugeströmt war. Die 'Dialektik der Aufklärung' (1944), verfasst von Horkheimer und Adorno im amerikanischen Exil, lieferte eine radikale Antwort: Die Aufklärung selbst — das Projekt der Vernunft, das den Menschen aus der Unmündigkeit befreien sollte — habe sich in ihr Gegenteil verkehrt. Die instrumentelle Vernunft, die die Natur beherrschen wollte, habe schließlich auch den Menschen zum Objekt degradiert. Auschwitz sei nicht ein Rückfall in die Barbarei, sondern die konsequente Weiterführung der instrumentellen Rationalität.

Adornos berühmtes Diktum — 'Nach Auschwitz ein Gedicht zu schreiben, ist barbarisch" — fasst die Erschütterung zusammen, die das gesamte Projekt der Kritischen Theorie durchzieht: den Zweifel, ob Kultur nach dem zivilisatorischen Bruch noch die humanisierende Funktion erfüllen kann, die man ihr zuschrieb.

Die zweite Generation der Frankfurter Schule, verkörpert durch Jürgen Habermas, versuchte aus dieser Aporie herauszufinden, indem sie das Projekt der Aufklärung nicht aufgab, sondern reformulierte: nicht als instrumentelle, sondern als kommunikative Vernunft — als herrschaftsfreien Diskurs, in dem das bessere Argument zählt.`,
    wordCount: 250,
    vocabulary: [
      { word: "Strömungen", meaning: "currents/movements" },
      { word: "Anliegen", meaning: "concern/objective" },
      { word: "instrumentelle Vernunft", meaning: "instrumental reason" },
      { word: "Unmündigkeit", meaning: "immaturity (Kant: inability to use own understanding)" },
      { word: "zivilisatorischer Bruch", meaning: "civilizational rupture" },
      { word: "Aporie", meaning: "aporia (irresolvable logical contradiction)" },
    ],
    questions: [
      { question: "Was war das zentrale Anliegen der Frankfurter Schule?", options: ["Wirtschaftswachstum zu fördern", "Warum die Revolution ausblieb und Menschen dem Faschismus folgten", "Neue politische Parteien zu gründen"], correctIndex: 1, explanation: "Warum die Revolution ausblieb und die Arbeiterklasse dem Faschismus zuströmte." },
      { question: "Was argumentieren Horkheimer und Adorno über die Aufklärung?", options: ["Sie war erfolgreich", "Sie hat sich in ihr Gegenteil verkehrt", "Sie war nie wichtig"], correctIndex: 1, explanation: "Die Aufklärung hat sich in ihr Gegenteil verkehrt — instrumentelle Vernunft degradiert den Menschen." },
      { question: "Wie versuchte Habermas die Aporie zu lösen?", options: ["Er lehnte die Aufklärung ab", "Er formulierte sie als kommunikative Vernunft um", "Er kehrte zu Marx zurück"], correctIndex: 1, explanation: "Er reformulierte die Aufklärung als kommunikative, nicht instrumentelle Vernunft." },
    ],
  },
  {
    id: "c2-read-new-4",
    level: "C2",
    category: "news",
    title: "The Ethics of Genetic Engineering",
    titleDe: "Die Ethik der Gentechnik",
    text: `Mit der Entwicklung der CRISPR-Cas9-Technologie — einer molekularen 'Schere', die präzise Eingriffe ins Erbgut ermöglicht — hat die Gentechnik eine Schwelle überschritten, die die Menschheit vor Entscheidungen von beispielloser Tragweite stellt. Was einst Science-Fiction war, ist heute technisch möglich: die gezielte Veränderung des menschlichen Genoms.

In der somatischen Gentherapie, bei der nur die Zellen eines einzelnen Patienten verändert werden, besteht weitgehender ethischer Konsens. Sie verspricht Heilung für bislang unheilbare Erbkrankheiten wie Mukoviszidose, Sichelzellanämie und bestimmte Formen der Blindheit. Erste Therapien sind bereits zugelassen.

Grundlegend anders verhält es sich mit Eingriffen in die Keimbahn — Veränderungen also, die an zukünftige Generationen weitergegeben werden. Als der chinesische Wissenschaftler He Jiankui 2018 die Geburt der ersten genveränderten Kinder verkündete, reagierte die wissenschaftliche Gemeinschaft mit nahezu einhelligem Entsetzen. He hatte das CCR5-Gen modifiziert, um die Zwillinge Lulu und Nana angeblich gegen HIV resistent zu machen — ein Eingriff, dessen langfristige Folgen unabsehbar sind.

Die bioethische Debatte kreist um mehrere Kernfragen: Wo verläuft die Grenze zwischen Therapie und Enhancement — zwischen der Heilung von Krankheiten und der 'Verbesserung' des Menschen? Wer entscheidet über das Genom zukünftiger Menschen, die nicht um ihre Zustimmung gefragt werden können? Und birgt die Technologie nicht die Gefahr einer neuen Eugenik, in der sich wohlhabende Eltern 'Designer-Babys' leisten können?

Der Deutsche Ethikrat empfiehlt ein internationales Moratorium für Keimbahneingriffe am Menschen, bis die Risiken besser verstanden und ein gesellschaftlicher Konsens hergestellt ist.`,
    wordCount: 245,
    vocabulary: [
      { word: "Erbgut", meaning: "genetic material/genome" },
      { word: "Schwelle", meaning: "threshold" },
      { word: "somatische Gentherapie", meaning: "somatic gene therapy" },
      { word: "Keimbahn", meaning: "germline" },
      { word: "Eugenik", meaning: "eugenics" },
      { word: "Moratorium", meaning: "moratorium" },
    ],
    questions: [
      { question: "Was ermöglicht CRISPR-Cas9?", options: ["Neue Medikamente", "Präzise Eingriffe ins Erbgut", "Bessere Diagnostik"], correctIndex: 1, explanation: "CRISPR-Cas9 ermöglicht präzise Eingriffe ins Erbgut." },
      { question: "Warum ist der Keimbahneingriff besonders umstritten?", options: ["Er ist zu teuer", "Veränderungen werden an zukünftige Generationen weitergegeben", "Er funktioniert nicht"], correctIndex: 1, explanation: "Veränderungen in der Keimbahn werden an zukünftige Generationen weitergegeben." },
      { question: "Was empfiehlt der Deutsche Ethikrat?", options: ["Ein Verbot aller Gentechnik", "Ein Moratorium für Keimbahneingriffe", "Sofortige Anwendung"], correctIndex: 1, explanation: "Ein internationales Moratorium bis Risiken besser verstanden sind." },
    ],
  },
  {
    id: "c2-read-new-5",
    level: "C2",
    category: "culture",
    title: "Wittgenstein's Language Games",
    titleDe: "Wittgensteins Sprachspiele",
    text: `Ludwig Wittgensteins 'Philosophische Untersuchungen' (posthum 1953 veröffentlicht) markieren einen der radikalsten Brüche in der Geschichte der Philosophie — umso bemerkenswerter, als Wittgenstein damit sein eigenes früheres Hauptwerk, den 'Tractatus Logico-Philosophicus' (1921), widerrief.

Im 'Tractatus' hatte Wittgenstein eine Bildtheorie der Sprache vertreten: Sätze seien logische Bilder der Wirklichkeit, und die Struktur der Sprache spiegle die Struktur der Welt wider. Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt — so lautet einer der berühmtesten Sätze der Philosophiegeschichte.

In den 'Untersuchungen' verwirft Wittgenstein diese Auffassung vollständig. Sprache, so argumentiert er nun, funktioniert nicht wie ein Abbild der Realität, sondern wie ein Werkzeug — oder genauer: wie eine Vielzahl verschiedener Werkzeuge, die in unterschiedlichen Kontexten unterschiedliche Funktionen erfüllen. Die Bedeutung eines Wortes ist nicht ein festes Ding, auf das es sich bezieht, sondern sein Gebrauch in der Sprache. Diesen Gebrauch nennt Wittgenstein 'Sprachspiel'.

Für die Sprachwissenschaft und die Sprachdidaktik hat diese Einsicht weitreichende Konsequenzen. Wenn die Bedeutung eines Wortes durch seinen Gebrauch in einer Sprachgemeinschaft konstituiert wird, dann kann man eine Sprache nicht allein durch das Lernen von Vokabeln und Grammatikregeln beherrschen. Man muss die Lebensform verstehen, in die die Sprache eingebettet ist — die sozialen Praktiken, kulturellen Konventionen und impliziten Regeln, die den Sprachgebrauch prägen.

Für Deutschlernende bedeutet dies: Wer die Sprache wirklich beherrschen will, muss nicht nur wissen, was 'doch' als Partikel grammatisch bedeutet, sondern in welchen Situationen ein Deutscher 'doch' verwendet — und was er damit zwischen den Zeilen sagt.`,
    wordCount: 260,
    vocabulary: [
      { word: "widerrief", meaning: "recanted/revoked" },
      { word: "Bildtheorie", meaning: "picture theory" },
      { word: "verwirft", meaning: "rejects/discards" },
      { word: "Abbild", meaning: "representation/image" },
      { word: "konstituiert", meaning: "constituted" },
      { word: "Lebensform", meaning: "form of life" },
    ],
    questions: [
      { question: "Was hat Wittgenstein in den 'Untersuchungen' widerrufen?", options: ["Alles", "Seine eigene Bildtheorie der Sprache aus dem Tractatus", "Die Bedeutung von Logik"], correctIndex: 1, explanation: "Er widerrief seine Bildtheorie der Sprache aus dem Tractatus." },
      { question: "Was bestimmt die Bedeutung eines Wortes laut dem späten Wittgenstein?", options: ["Die Definition im Wörterbuch", "Sein Gebrauch in der Sprache", "Seine Etymologie"], correctIndex: 1, explanation: "Die Bedeutung eines Wortes ist sein Gebrauch in der Sprache." },
      { question: "Was folgt daraus für Sprachlernende?", options: ["Vokabeln reichen aus", "Man muss die Lebensform und kulturellen Praktiken verstehen", "Grammatik ist unwichtig"], correctIndex: 1, explanation: "Man muss die Lebensform verstehen, in die die Sprache eingebettet ist." },
    ],
  },
  {
    id: "c2-read-new-6",
    level: "C2",
    category: "formal",
    title: "Constitutional Court on Freedom of Expression",
    titleDe: "Bundesverfassungsgericht zur Meinungsfreiheit",
    text: `Die Meinungsfreiheit, verankert in Artikel 5 Absatz 1 des Grundgesetzes, gilt als eines der fundamentalsten Grundrechte der demokratischen Ordnung. Das Bundesverfassungsgericht hat in seiner jahrzehntelangen Rechtsprechung die Konturen dieses Rechts mit bemerkenswerter Differenziertheit herausgearbeitet.

Grundlegend ist die Unterscheidung zwischen Meinungsäußerungen und Tatsachenbehauptungen. Meinungen — subjektive Werturteile, die weder wahr noch falsch sein können — genießen weiten Schutz. Tatsachenbehauptungen hingegen sind an der Realität überprüfbar und fallen nur dann unter den Schutz des Artikels 5, wenn sie zur Meinungsbildung beitragen. Bewusst unwahre Tatsachenbehauptungen sind nicht geschützt.

In der sogenannten Lüth-Entscheidung von 1958 — einem Meilenstein der deutschen Verfassungsrechtsprechung — stellte das Gericht klar, dass die Grundrechte nicht nur Abwehrrechte gegen den Staat sind, sondern eine 'objektive Wertordnung' darstellen, die in alle Bereiche des Rechts ausstrahlt. Dies bedeutet, dass auch in privatrechtlichen Streitigkeiten — etwa einer Klage wegen Verleumdung — die Meinungsfreiheit berücksichtigt werden muss.

Die Abwägung zwischen Meinungsfreiheit einerseits und dem Persönlichkeitsrecht andererseits gehört zu den anspruchsvollsten Aufgaben der deutschen Rechtsprechung. Das Gericht hat hierzu eine elaborierte Kasuistik entwickelt, die Faktoren wie den Kontext der Äußerung, die Person des Betroffenen (Privatperson vs. Person des öffentlichen Lebens), die Form der Äußerung und den Beitrag zum öffentlichen Diskurs berücksichtigt. Satire und Karikatur genießen dabei einen besonders weiten Schutzbereich — solange sie die Menschenwürde nicht antasten.`,
    wordCount: 235,
    vocabulary: [
      { word: "verankert", meaning: "enshrined/anchored" },
      { word: "Konturen", meaning: "contours/outlines" },
      { word: "Differenziertheit", meaning: "nuanced sophistication" },
      { word: "Abwehrrechte", meaning: "defensive rights (against the state)" },
      { word: "Kasuistik", meaning: "casuistry/case-based analysis" },
      { word: "Menschenwürde", meaning: "human dignity" },
    ],
    questions: [
      { question: "Was unterscheidet das Gericht bei Artikel 5?", options: ["Meinungen und Tatsachenbehauptungen", "Öffentliche und private Äußerungen", "Schriftliche und mündliche Äußerungen"], correctIndex: 0, explanation: "Grundlegend ist die Unterscheidung zwischen Meinungsäußerungen und Tatsachenbehauptungen." },
      { question: "Was besagt die Lüth-Entscheidung?", options: ["Grundrechte gelten nur gegenüber dem Staat", "Grundrechte strahlen als Wertordnung in alle Rechtsbereiche aus", "Meinungsfreiheit hat keine Grenzen"], correctIndex: 1, explanation: "Grundrechte stellen eine objektive Wertordnung dar, die in alle Bereiche ausstrahlt." },
      { question: "Wann verliert Satire ihren Schutz?", options: ["Bei politischer Kritik", "Wenn sie die Menschenwürde antastet", "Bei Übertreibung"], correctIndex: 1, explanation: "Satire ist geschützt, solange sie die Menschenwürde nicht antastet." },
    ],
  },
];
