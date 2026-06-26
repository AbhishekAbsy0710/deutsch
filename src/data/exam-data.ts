export interface ExamQuestion {
  question: string;
  options?: string[];
  correctIndex?: number;
  correctAnswer?: string;
  type: "mcq" | "fill";
}

export interface ExamReading {
  title: string;
  text: string;
  questions: ExamQuestion[];
}

export interface ExamListening {
  title: string;
  /** Lines to be spoken via TTS sequentially */
  lines: { speaker: string; text: string }[];
  questions: ExamQuestion[];
}

export interface ExamWriting {
  prompt: string;
  minWords: number;
  maxWords: number;
  hints: string[];
}

export interface ExamSection {
  lesen: ExamReading[];
  hoeren: ExamListening[];
  schreiben: ExamWriting;
  grammatik: ExamQuestion[];
}

export interface MockExam {
  id: string;
  level: string;
  title: string;
  timeLimitMinutes: number;
  passThreshold: number;
  sectionMinimum: number;
  sections: ExamSection;
}

export const mockExams: MockExam[] = [
  // ── B1 Mock Exam ───────────────────────────────────────
  {
    id: "b1-mock-1",
    level: "B1",
    title: "Goethe-Zertifikat B1 — Mock 1",
    timeLimitMinutes: 45,
    passThreshold: 60,
    sectionMinimum: 45,
    sections: {
      lesen: [
        {
          title: "Eine E-Mail vom Vermieter",
          text: `Sehr geehrte Mieterinnen und Mieter,

ich möchte Sie darüber informieren, dass ab dem 1. März die Hausordnung in einigen Punkten geändert wird. Die wichtigsten Änderungen betreffen die Ruhezeiten und die Nutzung des Gemeinschaftsgartens.

Die Ruhezeiten gelten nun von 22 Uhr bis 7 Uhr morgens (bisher 23 Uhr bis 6 Uhr). In dieser Zeit sind laute Musik, Fernsehen bei offenen Fenstern und Gartenarbeit nicht erlaubt.

Der Gemeinschaftsgarten darf weiterhin von allen Mietern genutzt werden. Allerdings bitte ich Sie, den Garten nach der Nutzung sauber zu hinterlassen. Grillen ist nur am Wochenende und an Feiertagen erlaubt, und zwar bis maximal 21 Uhr.

Die Mülltonnen werden ab sofort jeden Montag und Donnerstag geleert. Bitte stellen Sie Ihren Müll am Vorabend heraus.

Bei Fragen stehe ich Ihnen gern zur Verfügung.

Mit freundlichen Grüßen
Klaus Berger`,
          questions: [
            { question: "Ab wann gelten die neuen Ruhezeiten?", options: ["Ab 1. Januar", "Ab 1. März", "Ab 1. April"], correctIndex: 1, type: "mcq" },
            { question: "Wann beginnt die Ruhezeit nach der neuen Regelung?", options: ["21 Uhr", "22 Uhr", "23 Uhr"], correctIndex: 1, type: "mcq" },
            { question: "Wann darf man grillen?", options: ["Jeden Tag bis 21 Uhr", "Am Wochenende und Feiertagen bis 21 Uhr", "Nur im Sommer"], correctIndex: 1, type: "mcq" },
            { question: "Wann werden die Mülltonnen geleert?", options: ["Montag und Freitag", "Montag und Donnerstag", "Mittwoch und Samstag"], correctIndex: 1, type: "mcq" },
          ],
        },
        {
          title: "Anzeige: Deutschkurs",
          text: `Sprachschule „Wortschatz" – Neue Kurse ab April!

Intensivkurs Deutsch B1: Montag bis Freitag, 9:00–12:30 Uhr
Dauer: 8 Wochen | Preis: 480 Euro (Lehrbuch inklusive)
Voraussetzung: Abgeschlossene A2-Stufe

Abendkurs Deutsch B2: Dienstag und Donnerstag, 18:30–20:30 Uhr
Dauer: 16 Wochen | Preis: 560 Euro (Lehrbuch nicht inklusive)
Voraussetzung: Abgeschlossene B1-Stufe

Alle Kurse finden in unseren Räumen in der Mozartstraße 12 statt. Kostenlose Einstufungstests jeden Samstag von 10–13 Uhr. Anmeldung online oder persönlich.

Besonderheit: Alle Kursteilnehmer erhalten kostenlosen Zugang zu unserer Online-Lernplattform!`,
          questions: [
            { question: "Wie lange dauert der B1-Intensivkurs?", options: ["4 Wochen", "8 Wochen", "16 Wochen"], correctIndex: 1, type: "mcq" },
            { question: "Ist das Lehrbuch beim B2-Kurs inklusive?", options: ["Ja", "Nein", "Nur für Frühbucher"], correctIndex: 1, type: "mcq" },
            { question: "Wann kann man einen Einstufungstest machen?", options: ["Montag bis Freitag", "Nur online", "Jeden Samstag"], correctIndex: 2, type: "mcq" },
          ],
        },
      ],
      hoeren: [
        {
          title: "Ansage im Supermarkt",
          lines: [
            { speaker: "Ansage", text: "Liebe Kundinnen und Kunden, wir möchten Sie auf unser heutiges Sonderangebot aufmerksam machen." },
            { speaker: "Ansage", text: "Frische Erdbeeren aus der Region, normalerweise drei Euro neunundneunzig, heute nur zwei Euro neunundvierzig pro Schale." },
            { speaker: "Ansage", text: "Außerdem erhalten Sie heute zwanzig Prozent Rabatt auf alle Molkereiprodukte." },
            { speaker: "Ansage", text: "Bitte beachten Sie: Unser Geschäft schließt heute ausnahmsweise bereits um achtzehn Uhr." },
          ],
          questions: [
            { question: "Wie viel kosten die Erdbeeren heute?", options: ["1,99 Euro", "2,49 Euro", "3,99 Euro"], correctIndex: 1, type: "mcq" },
            { question: "Worauf gibt es 20% Rabatt?", options: ["Obst", "Molkereiprodukte", "Alles"], correctIndex: 1, type: "mcq" },
            { question: "Wann schließt das Geschäft heute?", options: ["17 Uhr", "18 Uhr", "20 Uhr"], correctIndex: 1, type: "mcq" },
          ],
        },
      ],
      schreiben: {
        prompt: "Sie haben eine Einladung zu einer Geburtstagsfeier von Ihrem Freund Tim bekommen. Die Party ist am Samstag um 19 Uhr bei Tim zu Hause. Schreiben Sie eine E-Mail an Tim: Bedanken Sie sich für die Einladung, sagen Sie zu, fragen Sie, ob Sie etwas mitbringen sollen, und fragen Sie nach der Adresse.",
        minWords: 60,
        maxWords: 120,
        hints: ["Start with 'Lieber Tim,'", "Use phrases: 'Vielen Dank für...', 'Ich komme sehr gern!', 'Soll ich etwas mitbringen?'", "End with 'Liebe Grüße, [Name]'"],
      },
      grammatik: [
        { question: "Ich ___ gestern einen langen Spaziergang gemacht.", correctAnswer: "habe", type: "fill" },
        { question: "Das ist der Mann, ___ ich gestern getroffen habe.", correctAnswer: "den", type: "fill" },
        { question: "Wenn ich mehr Zeit ___, würde ich mehr lesen.", correctAnswer: "hätte", type: "fill" },
        { question: "___ du mir bitte helfen?", correctAnswer: "Kannst", type: "fill" },
        { question: "Er interessiert sich ___ Musik.", correctAnswer: "für", type: "fill" },
        { question: "Ich freue mich ___ deinen Besuch.", correctAnswer: "auf", type: "fill" },
        { question: "Sie hat mich gefragt, ___ ich morgen kommen kann.", correctAnswer: "ob", type: "fill" },
        { question: "Das Buch, ___ auf dem Tisch liegt, gehört mir.", correctAnswer: "das", type: "fill" },
        { question: "Er ist nach Berlin gefahren, ___ er dort Freunde hat.", correctAnswer: "weil", type: "fill" },
        { question: "Ich bin ___ als mein Bruder.", correctAnswer: "älter", type: "fill" },
      ],
    },
  },

  // ── B2 Mock Exam ───────────────────────────────────────
  {
    id: "b2-mock-1",
    level: "B2",
    title: "Goethe-Zertifikat B2 — Mock 1",
    timeLimitMinutes: 60,
    passThreshold: 60,
    sectionMinimum: 45,
    sections: {
      lesen: [
        {
          title: "Homeoffice: Fluch oder Segen?",
          text: `Die Debatte um das Homeoffice hat seit der Pandemie eine neue Dimension erreicht. Was anfangs als Notlösung galt, hat sich für viele Arbeitnehmer zu einer dauerhaften Präferenz entwickelt. Laut einer Studie des ifo-Instituts möchten 70 Prozent der Befragten auch nach der Pandemie zumindest teilweise von zu Hause aus arbeiten.

Die Vorteile liegen auf der Hand: Arbeitnehmer sparen durchschnittlich 40 Minuten Pendelzeit pro Tag, berichten von höherer Zufriedenheit und schätzen die Flexibilität bei der Kinderbetreuung. Unternehmen wiederum können Büroflächen reduzieren und profitieren Studien zufolge von einer um 13 Prozent gestiegenen Produktivität.

Doch die Kehrseite wird zunehmend sichtbar. Psychologen warnen vor dem sogenannten „Zoom-Fatigue", einer Erschöpfung durch endlose Videokonferenzen. Zudem berichten 45 Prozent der Homeoffice-Nutzer von Schwierigkeiten, Arbeits- und Privatleben zu trennen — ein Phänomen, das Arbeitsmediziner als „Entgrenzung" bezeichnen.

Besonders problematisch ist die Situation für Berufseinsteiger: Ihnen fehlt der informelle Wissenstransfer am Kaffeeautomaten, das beiläufige Lernen von erfahrenen Kollegen und die Möglichkeit, ein berufliches Netzwerk aufzubauen.`,
          questions: [
            { question: "Wie viel Prozent möchten weiterhin teilweise im Homeoffice arbeiten?", options: ["45%", "60%", "70%"], correctIndex: 2, type: "mcq" },
            { question: "Was bedeutet 'Entgrenzung' im Text?", options: ["Verlust der Staatsgrenze", "Schwierigkeit, Arbeit und Privatleben zu trennen", "Auflösung von Unternehmensstrukturen"], correctIndex: 1, type: "mcq" },
            { question: "Um wie viel Prozent ist die Produktivität laut Studien gestiegen?", options: ["7%", "13%", "25%"], correctIndex: 1, type: "mcq" },
            { question: "Warum ist Homeoffice für Berufseinsteiger besonders problematisch?", options: ["Sie haben kein schnelles Internet", "Ihnen fehlt informeller Wissenstransfer", "Sie verdienen weniger"], correctIndex: 1, type: "mcq" },
          ],
        },
      ],
      hoeren: [
        {
          title: "Interview: Nachhaltiges Reisen",
          lines: [
            { speaker: "Moderator", text: "Frau Schneider, Sie sind Expertin für nachhaltigen Tourismus. Was empfehlen Sie Reisenden, die ihren ökologischen Fußabdruck reduzieren möchten?" },
            { speaker: "Expertin", text: "Zunächst einmal: Der größte Hebel ist die Wahl des Transportmittels. Ein Flug von Frankfurt nach Mallorca verursacht etwa vierhundertfünfzig Kilogramm CO2 pro Person. Die gleiche Strecke mit dem Zug würde nur rund fünfzig Kilogramm verursachen." },
            { speaker: "Moderator", text: "Aber nicht jedes Ziel ist mit dem Zug erreichbar." },
            { speaker: "Expertin", text: "Das stimmt. In solchen Fällen empfehle ich, den CO2-Ausstoß zu kompensieren und dafür länger am Ziel zu bleiben, statt mehrere Kurztrips im Jahr zu machen. Eine zweiwöchige Reise hat pro Tag einen deutlich geringeren ökologischen Fußabdruck als fünf Wochenendtrips." },
            { speaker: "Moderator", text: "Und was ist mit der Unterkunft?" },
            { speaker: "Expertin", text: "Hotels mit Umweltzertifikaten sind ein guter Anhaltspunkt. Aber auch kleine Pensionen und Ferienwohnungen sind oft nachhaltiger als große Hotelketten, weil sie lokale Wirtschaftskreisläufe stärken." },
          ],
          questions: [
            { question: "Wie viel CO2 verursacht ein Flug Frankfurt–Mallorca pro Person?", options: ["250 kg", "350 kg", "450 kg"], correctIndex: 2, type: "mcq" },
            { question: "Was empfiehlt die Expertin statt Kurztrips?", options: ["Gar nicht reisen", "Länger am Ziel bleiben", "Nur mit dem Auto fahren"], correctIndex: 1, type: "mcq" },
            { question: "Warum sind kleine Pensionen oft nachhaltiger?", options: ["Sie sind billiger", "Sie stärken lokale Wirtschaftskreisläufe", "Sie haben weniger Zimmer"], correctIndex: 1, type: "mcq" },
          ],
        },
      ],
      schreiben: {
        prompt: "In einem Online-Forum wird diskutiert, ob soziale Medien mehr Vorteile oder Nachteile für die Gesellschaft haben. Schreiben Sie einen Forumsbeitrag (~150 Wörter), in dem Sie Ihre Meinung dazu äußern. Geben Sie mindestens ein Argument für und ein Argument gegen soziale Medien. Beziehen Sie sich auf eigene Erfahrungen.",
        minWords: 120,
        maxWords: 180,
        hints: ["Structure: Einleitung → Pro-Argument → Contra-Argument → Fazit", "Use B2 connectors: 'einerseits...andererseits', 'darüber hinaus', 'im Gegensatz dazu'", "Include a personal example"],
      },
      grammatik: [
        { question: "Die Maßnahmen, ___ die Regierung beschlossen hat, sind umstritten.", correctAnswer: "die", type: "fill" },
        { question: "Er handelte so, als ___ er nichts davon gewusst.", correctAnswer: "hätte", type: "fill" },
        { question: "___ der steigenden Mieten ziehen viele Menschen aufs Land.", correctAnswer: "Angesichts", type: "fill" },
        { question: "Das Projekt konnte trotz ___ Schwierigkeiten erfolgreich abgeschlossen werden.", correctAnswer: "aller", type: "fill" },
        { question: "Es ist wichtig, ___ man regelmäßig Sport treibt.", correctAnswer: "dass", type: "fill" },
        { question: "Der Bericht, ___ in der Zeitung veröffentlicht wurde, enthält Fehler.", correctAnswer: "der", type: "fill" },
        { question: "Je höher die Temperatur steigt, ___ mehr Eis schmilzt.", correctAnswer: "desto", type: "fill" },
        { question: "Die Studentin wurde gebeten, ___ Arbeit bis Freitag abzugeben.", correctAnswer: "ihre", type: "fill" },
        { question: "Nicht ___ die Qualität, sondern auch der Preis spielt eine Rolle.", correctAnswer: "nur", type: "fill" },
        { question: "Er sprach so leise, ___ ihn niemand verstehen konnte.", correctAnswer: "dass", type: "fill" },
      ],
    },
  },

  // ── C1 Mock Exam ───────────────────────────────────────
  {
    id: "c1-mock-1",
    level: "C1",
    title: "Goethe-Zertifikat C1 — Mock 1",
    timeLimitMinutes: 75,
    passThreshold: 60,
    sectionMinimum: 45,
    sections: {
      lesen: [
        {
          title: "Die Zukunft der Innenstädte",
          text: `Der Strukturwandel der deutschen Innenstädte hat sich durch die Pandemie dramatisch beschleunigt. Einzelhandelsflächen stehen leer, traditionelle Kaufhäuser schließen, und selbst in Premiumlagen finden sich zunehmend Leerstände. Die Urbanistin Prof. Dr. Meier-Braun spricht von einer „Krise der Monokultur" — jahrzehntelang seien Innenstädte primär auf den Einzelhandel ausgerichtet worden, ohne alternative Nutzungskonzepte zu entwickeln.

Dabei liegt in dieser Krise auch eine Chance: Städte wie Mannheim und Wuppertal experimentieren mit der Umwidmung ehemaliger Geschäftsflächen in Co-Working-Spaces, urbane Werkstätten und soziokulturelle Zentren. In Hannover wurde ein ganzes Einkaufszentrum in einen Campus für Start-ups, eine Bibliothek und eine Markthalle für regionale Produkte umgewandelt — ein Modell, das bundesweit Nachahmung findet.

Kritiker warnen jedoch vor einer Gentrifizierung durch die Hintertür: Wenn ehemalige Ladenflächen in hochpreisige Gastronomie und Boutique-Hotels umgewandelt werden, profitieren davon vor allem einkommensstarke Bevölkerungsgruppen. Der Stadtsoziologe Holm betont, dass die Transformation nur dann nachhaltig gelingen könne, wenn sie explizit partizipativ gestaltet werde — unter Einbeziehung derjenigen, die die Innenstädte tatsächlich bewohnen und nutzen.

Entscheidend wird letztlich sein, ob es den Kommunen gelingt, einen funktionalen Mix zu schaffen, der Wohnen, Arbeiten, Kultur und Nahversorgung miteinander verbindet — und der resilient genug ist, um auch künftigen Krisen standzuhalten.`,
          questions: [
            { question: "Was versteht Prof. Meier-Braun unter 'Krise der Monokultur'?", options: ["Mangel an kultureller Vielfalt", "Einseitige Ausrichtung der Innenstädte auf Einzelhandel", "Verlust traditioneller Landwirtschaft"], correctIndex: 1, type: "mcq" },
            { question: "Was wurde in Hannover aus einem Einkaufszentrum?", options: ["Ein Wohnkomplex", "Ein Campus mit Start-ups, Bibliothek und Markthalle", "Ein Museum"], correctIndex: 1, type: "mcq" },
            { question: "Wovor warnt Stadtsoziologe Holm?", options: ["Vor zu hohen Baukosten", "Vor Gentrifizierung durch die Hintertür", "Vor dem Verlust von Parkplätzen"], correctIndex: 1, type: "mcq" },
            { question: "Was muss laut Text für eine nachhaltige Transformation geschehen?", options: ["Mehr Geld investieren", "Partizipative Gestaltung unter Einbeziehung der Bewohner", "Alle Geschäfte digitalisieren"], correctIndex: 1, type: "mcq" },
          ],
        },
      ],
      hoeren: [
        {
          title: "Podiumsdiskussion: KI in der Medizin",
          lines: [
            { speaker: "Moderator", text: "Professor Schmidt, Sie forschen seit zehn Jahren zum Einsatz künstlicher Intelligenz in der medizinischen Diagnostik. Wie bewerten Sie den aktuellen Stand?" },
            { speaker: "Professor", text: "Die Fortschritte sind beeindruckend. In der Dermatologie beispielsweise erreichen KI-Systeme bei der Erkennung von Hautkrebs inzwischen eine Trefferquote von fünfundneunzig Prozent — das übertrifft den Durchschnitt erfahrener Dermatologen, die bei etwa siebenundachtzig Prozent liegen." },
            { speaker: "Moderator", text: "Bedeutet das, dass wir bald keine Ärzte mehr brauchen?" },
            { speaker: "Professor", text: "Keineswegs. Die KI ist ein Werkzeug, kein Ersatz. Sie kann bei der Vorauswahl und Mustererkennung unterstützen, aber die endgültige Diagnose, die Kommunikation mit dem Patienten und die therapeutische Entscheidung bleiben menschliche Aufgaben. Was uns aber besorgen sollte, ist die Datenschutzproblematik: Diese Systeme benötigen Millionen von Patientendaten zum Training." },
            { speaker: "Moderator", text: "Ein ethisches Dilemma." },
            { speaker: "Professor", text: "In der Tat. Wir stehen vor der Herausforderung, den medizinischen Fortschritt mit dem Schutz der Privatsphäre in Einklang zu bringen. Hier bedarf es eines verbindlichen regulatorischen Rahmens auf europäischer Ebene." },
          ],
          questions: [
            { question: "Wie hoch ist die Trefferquote der KI bei Hautkrebserkennung?", options: ["87%", "92%", "95%"], correctIndex: 2, type: "mcq" },
            { question: "Was bleibt laut Professor Schmidt menschliche Aufgabe?", options: ["Mustererkennung", "Diagnose, Patientenkommunikation, therapeutische Entscheidung", "Datensammlung"], correctIndex: 1, type: "mcq" },
            { question: "Welches ethische Problem sieht der Professor?", options: ["Arbeitsplatzverlust", "Datenschutz bei Patientendaten", "Kosten der Technologie"], correctIndex: 1, type: "mcq" },
          ],
        },
      ],
      schreiben: {
        prompt: "Ein Unternehmen plant, alle Mitarbeiter zur Rückkehr ins Büro zu verpflichten und Homeoffice abzuschaffen. Schreiben Sie eine differenzierte Stellungnahme (~200 Wörter): Erörtern Sie die Argumente beider Seiten, beziehen Sie aktuelle Entwicklungen ein und formulieren Sie einen eigenen begründeten Vorschlag.",
        minWords: 180,
        maxWords: 250,
        hints: ["Use Funktionsverbgefüge: 'in Betracht ziehen', 'zur Diskussion stehen'", "Use nominalized style for academic register", "Include Konjunktiv II for hypothetical scenarios"],
      },
      grammatik: [
        { question: "Die ___ der Regierung vorgeschlagenen Maßnahmen stoßen auf Kritik.", correctAnswer: "von", type: "fill" },
        { question: "Es wäre ___, die Komplexität des Problems zu unterschätzen.", correctAnswer: "verfehlt", type: "fill" },
        { question: "Infolge ___ zunehmenden Automatisierung gehen Arbeitsplätze verloren.", correctAnswer: "der", type: "fill" },
        { question: "Der Bericht, auf ___ Sie sich beziehen, ist veraltet.", correctAnswer: "den", type: "fill" },
        { question: "Die Frage, ___ eine technologische Lösung ausreicht, bleibt offen.", correctAnswer: "ob", type: "fill" },
        { question: "Er sprach, als ___ er alles verstanden.", correctAnswer: "hätte", type: "fill" },
        { question: "___ der Tatsache, dass die Studie Schwächen aufweist, sind die Ergebnisse relevant.", correctAnswer: "Trotz", type: "fill" },
        { question: "Es ___ sich nicht leugnen, dass Veränderungen notwendig sind.", correctAnswer: "lässt", type: "fill" },
        { question: "Die Teilnehmer wurden gebeten, sich ___ Ende des Monats anzumelden.", correctAnswer: "bis", type: "fill" },
        { question: "Wenngleich die Resultate ___ sind, bedarf es weiterer Forschung.", correctAnswer: "vielversprechend", type: "fill" },
      ],
    },
  },

  // ── A1 Mock Exam ───────────────────────────────────────
  {
    id: "a1-mock-1",
    level: "A1",
    title: "Goethe-Zertifikat A1: Start Deutsch 1",
    timeLimitMinutes: 45,
    passThreshold: 60,
    sectionMinimum: 45,
    sections: {
      lesen: [
        {
          title: "E-Mail von einem Freund",
          text: "Liebe Anna, wie geht es dir? Ich bin jetzt in München. Das Wetter ist schön und warm. Morgen gehe ich ins Museum. Am Freitag komme ich zurück nach Berlin. Wir können dann zusammen Kaffee trinken. Viele Grüße, Tom",
          questions: [
            { question: "Wo ist Tom jetzt?", options: ["Berlin", "München", "Hamburg"], correctIndex: 1, type: "mcq" },
            { question: "Was macht Tom morgen?", options: ["Er trinkt Kaffee", "Er geht ins Museum", "Er fährt nach Berlin"], correctIndex: 1, type: "mcq" },
            { question: "Wann kommt Tom zurück?", options: ["Morgen", "Am Freitag", "Am Sonntag"], correctIndex: 1, type: "mcq" },
          ],
        },
        {
          title: "Supermarkt-Anzeige",
          text: "ALDI Sonderangebote: Äpfel 1,50€/kg. Milch 0,99€/Liter. Brot 2,10€. Öffnungszeiten: Montag bis Samstag, 8:00 - 20:00 Uhr. Sonntag geschlossen.",
          questions: [
            { question: "Wie viel kosten die Äpfel?", options: ["0,99€", "1,50€", "2,10€"], correctIndex: 1, type: "mcq" },
            { question: "Wann ist der Supermarkt geschlossen?", options: ["Samstag", "Sonntag", "Montag"], correctIndex: 1, type: "mcq" },
          ],
        },
      ],
      hoeren: [
        {
          title: "Am Bahnhof",
          lines: [
            { speaker: "Ansage", text: "Achtung bitte. Der Zug nach Hamburg fährt heute von Gleis sieben ab. Abfahrt um vierzehn Uhr dreißig." },
          ],
          questions: [
            { question: "Wohin fährt der Zug?", options: ["München", "Hamburg", "Berlin"], correctIndex: 1, type: "mcq" },
            { question: "Von welchem Gleis fährt der Zug?", options: ["Gleis 5", "Gleis 7", "Gleis 9"], correctIndex: 1, type: "mcq" },
          ],
        },
      ],
      schreiben: {
        prompt: "Schreiben Sie eine kurze E-Mail an einen Freund. Schreiben Sie: Wie geht es Ihnen? Was machen Sie am Wochenende? Laden Sie den Freund zum Essen ein.",
        minWords: 30,
        maxWords: 60,
        hints: ["Anrede (Liebe/r...)", "Frage nach dem Befinden", "Wochenendpläne", "Einladung", "Gruß"],
      },
      grammatik: [
        { question: "Ich ___ aus Deutschland.", options: ["komme", "kommst", "kommen", "kommt"], correctIndex: 0, type: "mcq" },
        { question: "Das ___ mein Bruder.", options: ["ist", "sind", "bist", "seid"], correctIndex: 0, type: "mcq" },
        { question: "___ du Kaffee oder Tee?", options: ["Möchtest", "Möchte", "Möchten", "Möchtet"], correctIndex: 0, type: "mcq" },
        { question: "Wir gehen ___ Supermarkt.", options: ["in den", "in der", "in das", "in die"], correctIndex: 0, type: "mcq" },
        { question: "Die Kinder spielen ___ Garten.", options: ["im", "in", "ins", "in die"], correctIndex: 0, type: "mcq" },
        { question: "___ heißt du?", options: ["Wie", "Was", "Wo", "Wer"], correctIndex: 0, type: "mcq" },
        { question: "Meine Schwester ___ gern Bücher.", options: ["liest", "lest", "lesen", "lese"], correctIndex: 0, type: "mcq" },
        { question: "Er ___ jeden Tag zur Arbeit.", options: ["fährt", "fahrt", "fahren", "fährst"], correctIndex: 0, type: "mcq" },
      ],
    },
  },

  // ── A2 Mock Exam ───────────────────────────────────────
  {
    id: "a2-mock-1",
    level: "A2",
    title: "Goethe-Zertifikat A2: Fit in Deutsch",
    timeLimitMinutes: 60,
    passThreshold: 60,
    sectionMinimum: 45,
    sections: {
      lesen: [
        {
          title: "Wohnungsanzeige",
          text: "3-Zimmer-Wohnung in Berlin-Mitte. 75 m², 3. Stock, Balkon, Einbauküche. Miete: 850€ warm. Kaution: 2 Monatsmieten. Ab sofort frei. Haustiere erlaubt. Kontakt: Frau Meyer, Tel. 030-5551234.",
          questions: [
            { question: "Wie groß ist die Wohnung?", options: ["50 m²", "75 m²", "100 m²"], correctIndex: 1, type: "mcq" },
            { question: "Was ist in der Miete enthalten?", options: ["Nur Kaltmiete", "Warmmiete", "Strom"], correctIndex: 1, type: "mcq" },
            { question: "Sind Haustiere erlaubt?", options: ["Ja", "Nein", "Nur Katzen"], correctIndex: 0, type: "mcq" },
          ],
        },
        {
          title: "Urlaubspostkarte",
          text: "Liebe Oma, wir sind seit drei Tagen auf Mallorca. Das Hotel ist sehr schön und hat einen Pool. Gestern haben wir eine Bootsfahrt gemacht. Das Essen hier ist fantastisch — wir essen jeden Abend frischen Fisch. Morgen wollen wir in die Altstadt fahren. Bis bald! Deine Lisa",
          questions: [
            { question: "Wo ist Lisa?", options: ["In Berlin", "Auf Mallorca", "In München"], correctIndex: 1, type: "mcq" },
            { question: "Was haben sie gestern gemacht?", options: ["Eine Bootsfahrt", "Eingekauft", "Am Strand gelegen"], correctIndex: 0, type: "mcq" },
            { question: "Was wollen sie morgen machen?", options: ["Schwimmen", "In die Altstadt fahren", "Nach Hause fliegen"], correctIndex: 1, type: "mcq" },
          ],
        },
      ],
      hoeren: [
        {
          title: "Telefonat mit dem Arzt",
          lines: [
            { speaker: "Sprechstundenhilfe", text: "Praxis Doktor Weber, guten Tag." },
            { speaker: "Patient", text: "Guten Tag, ich möchte gern einen Termin machen." },
            { speaker: "Sprechstundenhilfe", text: "Was fehlt Ihnen denn?" },
            { speaker: "Patient", text: "Ich habe seit zwei Tagen starke Halsschmerzen und Fieber." },
            { speaker: "Sprechstundenhilfe", text: "Können Sie morgen um zehn Uhr kommen?" },
            { speaker: "Patient", text: "Ja, das passt mir gut. Vielen Dank." },
          ],
          questions: [
            { question: "Was hat der Patient?", options: ["Kopfschmerzen", "Halsschmerzen und Fieber", "Bauchschmerzen"], correctIndex: 1, type: "mcq" },
            { question: "Wann ist der Termin?", options: ["Heute", "Morgen um 10 Uhr", "Nächste Woche"], correctIndex: 1, type: "mcq" },
          ],
        },
      ],
      schreiben: {
        prompt: "Sie möchten einen Deutschkurs besuchen. Schreiben Sie eine E-Mail an die Sprachschule. Fragen Sie nach: Wann beginnt der Kurs? Wie viel kostet der Kurs? Welche Materialien brauchen Sie?",
        minWords: 40,
        maxWords: 80,
        hints: ["Formelle Anrede", "Grund der E-Mail", "Drei Fragen", "Höfliche Schlussformel"],
      },
      grammatik: [
        { question: "Gestern ___ ich ins Kino gegangen.", options: ["bin", "habe", "war", "hatte"], correctIndex: 0, type: "mcq" },
        { question: "Er hat das Buch schon ___.", options: ["gelesen", "lesen", "gelest", "las"], correctIndex: 0, type: "mcq" },
        { question: "Ich muss morgen früh ___.", options: ["aufstehen", "aufstehe", "aufgestanden", "stehe auf"], correctIndex: 0, type: "mcq" },
        { question: "Der Film, ___ wir gestern gesehen haben, war gut.", options: ["den", "der", "das", "dem"], correctIndex: 0, type: "mcq" },
        { question: "Wenn es regnet, ___ ich zu Hause.", options: ["bleibe", "bleiben", "bleibt", "bleibst"], correctIndex: 0, type: "mcq" },
        { question: "Das Buch gehört ___ Frau.", options: ["der", "die", "den", "dem"], correctIndex: 0, type: "mcq" },
        { question: "Er interessiert sich ___ Sport.", options: ["für", "an", "auf", "über"], correctIndex: 0, type: "mcq" },
        { question: "Ich bin ___ als mein Bruder.", options: ["älter", "alt", "älteste", "alten"], correctIndex: 0, type: "mcq" },
      ],
    },
  },

  // ── B1 Mock Exam #2 ───────────────────────────────────
  {
    id: "b1-mock-2",
    level: "B1",
    title: "Goethe-Zertifikat B1: Übungstest 2",
    timeLimitMinutes: 90,
    passThreshold: 60,
    sectionMinimum: 45,
    sections: {
      lesen: [
        {
          title: "Zeitungsartikel: Homeoffice",
          text: "Immer mehr Deutsche arbeiten von zu Hause aus. Eine Studie des Bundesarbeitsministeriums zeigt, dass 40 Prozent der Beschäftigten mindestens einmal pro Woche im Homeoffice arbeiten. Die Vorteile sind klar: Man spart Pendelzeit und kann flexibler arbeiten. Allerdings berichten viele Arbeitnehmer auch von Nachteilen: Die Grenze zwischen Arbeit und Freizeit verschwimmt, und manche fühlen sich isoliert. Experten empfehlen eine Mischung aus Büro- und Heimarbeit.",
          questions: [
            { question: "Wie viel Prozent arbeiten im Homeoffice?", options: ["20%", "40%", "60%"], correctIndex: 1, type: "mcq" },
            { question: "Was ist ein Nachteil des Homeoffice?", options: ["Man spart Zeit", "Die Grenze zur Freizeit verschwimmt", "Man hat mehr Kollegen"], correctIndex: 1, type: "mcq" },
            { question: "Was empfehlen Experten?", options: ["Nur Büro", "Nur Homeoffice", "Eine Mischung"], correctIndex: 2, type: "mcq" },
          ],
        },
      ],
      hoeren: [
        {
          title: "Radiointerview: Ehrenamt",
          lines: [
            { speaker: "Moderator", text: "Frau Klein, Sie engagieren sich ehrenamtlich bei der Tafel. Warum?" },
            { speaker: "Frau Klein", text: "Ich finde es wichtig, Menschen in schwierigen Situationen zu helfen. Bei der Tafel verteilen wir Lebensmittel an Bedürftige." },
            { speaker: "Moderator", text: "Wie oft sind Sie dort?" },
            { speaker: "Frau Klein", text: "Jeden Samstag, von neun bis dreizehn Uhr. Es sind etwa zwanzig Ehrenamtliche, die regelmäßig mithelfen." },
          ],
          questions: [
            { question: "Wo engagiert sich Frau Klein?", options: ["Im Krankenhaus", "Bei der Tafel", "In der Schule"], correctIndex: 1, type: "mcq" },
            { question: "Wie oft hilft sie?", options: ["Jeden Tag", "Jeden Samstag", "Einmal im Monat"], correctIndex: 1, type: "mcq" },
          ],
        },
      ],
      schreiben: {
        prompt: "Sie haben eine Einladung zu einer Geburtstagsfeier bekommen. Leider können Sie nicht kommen. Schreiben Sie eine Nachricht: Bedanken Sie sich für die Einladung. Erklären Sie, warum Sie nicht kommen können. Schlagen Sie ein anderes Treffen vor.",
        minWords: 60,
        maxWords: 120,
        hints: ["Dank", "Begründung", "Alternativvorschlag", "Höfliche Formulierungen"],
      },
      grammatik: [
        { question: "Obwohl es regnete, ___ wir spazieren.", options: ["gingen", "gehen", "gegangen", "ging"], correctIndex: 0, type: "mcq" },
        { question: "Er fragte mich, ob ich morgen kommen ___.", options: ["könne", "kann", "könnte", "konnte"], correctIndex: 2, type: "mcq" },
        { question: "Das ist der Mann, ___ Auto vor dem Haus steht.", options: ["dessen", "dem", "den", "der"], correctIndex: 0, type: "mcq" },
        { question: "Je mehr man übt, ___ besser wird man.", options: ["desto", "als", "wie", "so"], correctIndex: 0, type: "mcq" },
        { question: "Anstatt zu lernen, ___ er den ganzen Tag fern.", options: ["sah", "sieht", "gesehen", "schaute"], correctIndex: 0, type: "mcq" },
        { question: "Nachdem er ___ hatte, ging er ins Bett.", options: ["gegessen", "essen", "aß", "isst"], correctIndex: 0, type: "mcq" },
        { question: "Sie bat mich, leiser zu ___.", options: ["sprechen", "spreche", "spricht", "gesprochen"], correctIndex: 0, type: "mcq" },
        { question: "Wäre ich reich, ___ ich um die Welt reisen.", options: ["würde", "werde", "wollte", "sollte"], correctIndex: 0, type: "mcq" },
      ],
    },
  },

  // ── B2 Mock Exam #2 ───────────────────────────────────
  {
    id: "b2-mock-2",
    level: "B2",
    title: "Goethe-Zertifikat B2: Übungstest 2",
    timeLimitMinutes: 120,
    passThreshold: 60,
    sectionMinimum: 45,
    sections: {
      lesen: [
        {
          title: "Essay: Künstliche Intelligenz im Alltag",
          text: "Die rasante Entwicklung künstlicher Intelligenz wirft grundlegende Fragen auf. Sprachassistenten wie Alexa und Siri sind längst Teil unseres Alltags geworden. Doch der Einsatz von KI reicht weit über Sprachsteuerung hinaus: In der Medizin analysieren Algorithmen Röntgenbilder schneller und oft präziser als erfahrene Ärzte. In der Landwirtschaft optimieren KI-Systeme den Einsatz von Düngemitteln. Kritiker warnen jedoch vor der zunehmenden Abhängigkeit von Technologie und fordern transparentere Algorithmen sowie eine stärkere Regulierung durch den Gesetzgeber.",
          questions: [
            { question: "Was können KI-Algorithmen in der Medizin?", options: ["Operationen durchführen", "Röntgenbilder analysieren", "Medikamente verschreiben"], correctIndex: 1, type: "mcq" },
            { question: "Was fordern Kritiker?", options: ["Mehr KI-Einsatz", "Transparentere Algorithmen und Regulierung", "Abschaffung von KI"], correctIndex: 1, type: "mcq" },
          ],
        },
      ],
      hoeren: [
        {
          title: "Vortrag: Nachhaltiger Konsum",
          lines: [
            { speaker: "Referentin", text: "Meine Damen und Herren, das Thema nachhaltiger Konsum betrifft uns alle. Der durchschnittliche Deutsche produziert jährlich etwa 450 Kilogramm Hausmüll." },
            { speaker: "Referentin", text: "Studien zeigen, dass bewusste Kaufentscheidungen den ökologischen Fußabdruck um bis zu 30 Prozent reduzieren können. Dazu gehören: regionale Produkte bevorzugen, Verpackungsmüll vermeiden und auf langlebige Güter setzen." },
            { speaker: "Referentin", text: "Besonders interessant ist der Trend zum ‚Sharing Economy' — statt Dinge zu besitzen, werden sie geteilt. Carsharing, Bibliotheken der Dinge und Repair-Cafés sind Beispiele für diese Bewegung." },
          ],
          questions: [
            { question: "Wie viel Hausmüll produziert ein Deutscher pro Jahr?", options: ["200 kg", "450 kg", "700 kg"], correctIndex: 1, type: "mcq" },
            { question: "Um wie viel kann bewusster Konsum den Fußabdruck senken?", options: ["10%", "30%", "50%"], correctIndex: 1, type: "mcq" },
            { question: "Was ist ein Beispiel für Sharing Economy?", options: ["Online-Shopping", "Carsharing", "Fast Fashion"], correctIndex: 1, type: "mcq" },
          ],
        },
      ],
      schreiben: {
        prompt: "Schreiben Sie einen Forumsbeitrag zum Thema: 'Sollte Homeoffice ein Recht für alle Arbeitnehmer sein?' Nehmen Sie Stellung, nennen Sie Argumente für und gegen, und geben Sie Ihre persönliche Meinung.",
        minWords: 120,
        maxWords: 200,
        hints: ["Einleitung mit These", "Pro-Argumente", "Contra-Argumente", "Persönliche Stellungnahme", "Schlussfolgerung"],
      },
      grammatik: [
        { question: "Es lässt sich nicht ___, dass die Digitalisierung unseren Alltag verändert hat.", options: ["leugnen", "leugnend", "geleugnet", "leugne"], correctIndex: 0, type: "mcq" },
        { question: "Hätte ich das gewusst, ___ ich anders gehandelt.", options: ["hätte", "habe", "wäre", "würde"], correctIndex: 0, type: "mcq" },
        { question: "Der Antrag ist bis ___ Ende des Monats einzureichen.", options: ["spätestens", "frühestens", "mindestens", "wenigstens"], correctIndex: 0, type: "mcq" },
        { question: "Aufgrund ___ wirtschaftlichen Lage steigen die Preise.", options: ["der", "die", "dem", "den"], correctIndex: 0, type: "mcq" },
        { question: "Die Studie, auf ___ Ergebnisse sich die Forscher stützen, ist umstritten.", options: ["deren", "denen", "die", "dessen"], correctIndex: 0, type: "mcq" },
        { question: "Sofern keine Einwände ___ werden, gilt der Vorschlag als angenommen.", options: ["erhoben", "erheben", "erhebt", "erhob"], correctIndex: 0, type: "mcq" },
        { question: "___ der steigenden Mieten ziehen viele aufs Land.", options: ["Angesichts", "Trotz", "Wegen", "Aufgrund"], correctIndex: 0, type: "mcq" },
        { question: "Es ___ darauf hingewiesen, dass die Daten vertraulich sind.", options: ["sei", "ist", "wird", "wurde"], correctIndex: 0, type: "mcq" },
      ],
    },
  },

  // ── C1 Mock Exam #2 ───────────────────────────────────
  {
    id: "c1-mock-2",
    level: "C1",
    title: "Goethe-Zertifikat C1: Übungstest 2",
    timeLimitMinutes: 150,
    passThreshold: 60,
    sectionMinimum: 45,
    sections: {
      lesen: [
        {
          title: "Feuilleton: Architektur und Identität",
          text: "Die Debatte um den Wiederaufbau des Berliner Stadtschlosses offenbart einen tiefen Riss in der deutschen Erinnerungskultur. Befürworter argumentieren, die historische Fassade stelle eine Versöhnung mit der preußischen Geschichte dar und schließe eine städtebauliche Wunde. Gegner hingegen sehen darin eine nostalgische Verklärung und fordern zeitgenössische Architektur, die Brüche sichtbar macht, statt sie zu überdecken. Der Architektursoziologe Werner Sewing spricht von einer ‚architektonischen Amnesie', wenn historische Rekonstruktionen die komplexe Geschichte eines Ortes auf eine einzige Epoche reduzieren.",
          questions: [
            { question: "Worum geht es in der Debatte?", options: ["Neubauprojekte in München", "Wiederaufbau des Berliner Stadtschlosses", "Modernisierung des Bundestags"], correctIndex: 1, type: "mcq" },
            { question: "Was kritisieren die Gegner?", options: ["Die hohen Kosten", "Nostalgische Verklärung statt zeitgenössischer Architektur", "Den Standort"], correctIndex: 1, type: "mcq" },
            { question: "Was meint Werner Sewing mit 'architektonischer Amnesie'?", options: ["Vergessen von Bauplänen", "Reduktion komplexer Geschichte auf eine Epoche", "Abriss historischer Gebäude"], correctIndex: 1, type: "mcq" },
          ],
        },
      ],
      hoeren: [
        {
          title: "Podiumsdiskussion: Datenschutz im digitalen Zeitalter",
          lines: [
            { speaker: "Moderator", text: "Die Europäische Datenschutzgrundverordnung ist seit 2018 in Kraft. Professor Hoffmann, hat sie die erhofften Wirkungen erzielt?" },
            { speaker: "Professor", text: "Teilweise ja. Das Bewusstsein für den Schutz personenbezogener Daten ist gestiegen. Allerdings klaffen Anspruch und Wirklichkeit nach wie vor auseinander. Viele Unternehmen behandeln den Datenschutz als lästige Pflichtübung, statt ihn als integralen Bestandteil ihrer Unternehmenskultur zu begreifen." },
            { speaker: "Unternehmerin", text: "Ich möchte dem entgegenhalten, dass die bürokratischen Anforderungen gerade für kleine und mittlere Unternehmen eine erhebliche Belastung darstellen. Ein Friseurgeschäft muss dieselben Dokumentationspflichten erfüllen wie ein Datenkonzern — das ist unverhältnismäßig." },
            { speaker: "Professor", text: "Ein berechtigter Einwand. Die Lösung liegt meines Erachtens in einer risikoadäquaten Abstufung der Pflichten, nicht in einer pauschalen Aufweichung der Standards." },
          ],
          questions: [
            { question: "Seit wann gilt die DSGVO?", options: ["2016", "2018", "2020"], correctIndex: 1, type: "mcq" },
            { question: "Was kritisiert die Unternehmerin?", options: ["Zu wenig Datenschutz", "Unverhältnismäßige Bürokratie für KMU", "Fehlende Strafen"], correctIndex: 1, type: "mcq" },
            { question: "Was schlägt der Professor vor?", options: ["Abschaffung der DSGVO", "Risikoadäquate Abstufung der Pflichten", "Strengere Strafen"], correctIndex: 1, type: "mcq" },
          ],
        },
      ],
      schreiben: {
        prompt: "Verfassen Sie einen Aufsatz: 'Inwieweit verändert die Digitalisierung unser Verständnis von Privatheit?' Erörtern Sie die Problematik, gehen Sie auf verschiedene Perspektiven ein und formulieren Sie ein begründetes Fazit.",
        minWords: 180,
        maxWords: 280,
        hints: ["Begriffliche Klärung", "Verschiedene Perspektiven", "Konkrete Beispiele", "Abwägung", "Begründetes Fazit"],
      },
      grammatik: [
        { question: "Es ___ einer grundlegenden Reform, um die Probleme zu lösen.", options: ["bedarf", "bedürft", "bedarft", "bedurfe"], correctIndex: 0, type: "mcq" },
        { question: "Unbeschadet der Tatsache, dass die Verhandlungen ___ sind, bleibt Diplomatie das Ziel.", options: ["gescheitert", "scheitern", "scheiterten", "gescheiternd"], correctIndex: 0, type: "mcq" },
        { question: "Die Ergebnisse lassen sich insofern relativieren, ___ die Stichprobe nicht repräsentativ war.", options: ["als", "dass", "weil", "da"], correctIndex: 0, type: "mcq" },
        { question: "Der ___ Paradigmenwechsel hat weitreichende Konsequenzen.", options: ["eingeleitete", "einleitende", "einleitete", "eingeleitende"], correctIndex: 0, type: "mcq" },
        { question: "___ der zunehmenden Globalisierung stehen viele Branchen unter Druck.", options: ["Infolge", "Trotz", "Wegen", "Aufgrund"], correctIndex: 0, type: "mcq" },
        { question: "Er ___ darauf hin, dass die Frist bereits verstrichen sei.", options: ["wies", "weist", "wiest", "gewiesen"], correctIndex: 0, type: "mcq" },
        { question: "Die Geschäftsführung sieht sich mit dem Vorwurf der fahrlässigen Buchhaltung ___.", options: ["konfrontiert", "konfrontierend", "konfrontieren", "konfrontiere"], correctIndex: 0, type: "mcq" },
        { question: "Es sei ___ hingewiesen, dass sämtliche Angaben ohne Gewähr erfolgen.", options: ["darauf", "daran", "dabei", "dafür"], correctIndex: 0, type: "mcq" },
      ],
    },
  },

  // ── C2 Mock Exam ───────────────────────────────────────
  {
    id: "c2-mock-1",
    level: "C2",
    title: "Großes Deutsches Sprachdiplom (GDS)",
    timeLimitMinutes: 180,
    passThreshold: 60,
    sectionMinimum: 50,
    sections: {
      lesen: [
        {
          title: "Literaturkritik: Kafkas 'Die Verwandlung'",
          text: "Kafkas Novelle 'Die Verwandlung' lässt sich nicht auf eine einzige Deutungsebene reduzieren. Die Verwandlung Gregor Samsas in ein 'ungeheueres Ungeziefer' ist Metapher für Entfremdung, Identitätsverlust und die Absurdität der bürgerlichen Existenz gleichermaßen. Bemerkenswert ist die narrative Perspektive: Obwohl die Situation grotesk ist, wird sie von der Familie mit bürokratischer Nüchternheit behandelt. Die eigentliche Tragödie liegt nicht in der Metamorphose selbst, sondern in der schleichenden Gleichgültigkeit der Angehörigen, die Gregor letztlich wie ein lästiges Inventarstück entsorgen. Adorno hat in diesem Zusammenhang von der 'Wörtlichkeit des Grauens' gesprochen — Kafka verwende das Phantastische gerade nicht als Flucht, sondern als Entlarvung der Normalität.",
          questions: [
            { question: "Was ist Gregors Verwandlung laut dem Text?", options: ["Nur eine Krankheitsmetapher", "Metapher für Entfremdung, Identitätsverlust und Absurdität", "Ein Traum"], correctIndex: 1, type: "mcq" },
            { question: "Wo liegt die 'eigentliche Tragödie'?", options: ["In der Verwandlung selbst", "In der Gleichgültigkeit der Familie", "Im Tod Gregors"], correctIndex: 1, type: "mcq" },
            { question: "Was meint Adorno mit 'Wörtlichkeit des Grauens'?", options: ["Kafka schreibt Horrorgeschichten", "Das Phantastische entlarvt die Normalität", "Kafka verwendet komplizierte Wörter"], correctIndex: 1, type: "mcq" },
          ],
        },
        {
          title: "Akademischer Aufsatz: Sprachphilosophie",
          text: "Wittgensteins Diktum 'Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt' wird häufig als Beleg für einen linguistischen Determinismus herangezogen, obwohl sich der Tractatus weit differenzierter liest. Wittgenstein unterscheidet präzise zwischen dem, was sich sagen lässt, und dem, was sich zeigt. Ethik, Ästhetik und das Mystische gehören für ihn in den Bereich des Unsagbaren — nicht weil sie unwichtig wären, sondern weil die Sprache dort an ihre propositionalen Grenzen stößt. Heidegger hingegen fasst die Sprache selbst als 'Haus des Seins' auf und postuliert, dass wir nicht die Sprache sprechen, sondern die Sprache uns spricht.",
          questions: [
            { question: "Was unterscheidet Wittgenstein?", options: ["Sprache und Schrift", "Das Sagbare und das Zeigbare", "Deutsche und englische Sprache"], correctIndex: 1, type: "mcq" },
            { question: "Warum sind Ethik und Ästhetik 'unsagbar'?", options: ["Weil sie unwichtig sind", "Weil Sprache dort an propositionale Grenzen stößt", "Weil Wittgenstein sie nicht versteht"], correctIndex: 1, type: "mcq" },
            { question: "Was ist Heideggers Position zur Sprache?", options: ["Sprache ist ein Werkzeug", "Die Sprache spricht uns", "Sprache ist unwichtig"], correctIndex: 1, type: "mcq" },
          ],
        },
      ],
      hoeren: [
        {
          title: "Universitätsvorlesung: Soziolinguistik",
          lines: [
            { speaker: "Professorin", text: "Die Diglossie-Situation im deutschsprachigen Raum — also das Nebeneinander von Standardsprache und Dialekt — ist keineswegs homogen. Während in der Deutschschweiz die Mundart in nahezu allen Alltagssituationen die Kommunikationssprache darstellt, wird in Norddeutschland der Dialekt zunehmend als Marker geringer Bildung stigmatisiert." },
            { speaker: "Professorin", text: "Labov hat in seinen New Yorker Studien gezeigt, dass Sprachvariation systematisch mit sozialer Schichtung korreliert. Übertragen auf den deutschen Kontext bedeutet das: Die Wahl zwischen 'Ich habe' und 'I hob' ist keine rein linguistische, sondern eine zutiefst soziale Entscheidung." },
          ],
          questions: [
            { question: "Was ist Diglossie?", options: ["Zweisprachigkeit", "Nebeneinander von Standard und Dialekt", "Eine Sprachstörung"], correctIndex: 1, type: "mcq" },
            { question: "Wie wird Dialekt in Norddeutschland wahrgenommen?", options: ["Als Zeichen von Bildung", "Als Stigma geringer Bildung", "Als neutral"], correctIndex: 1, type: "mcq" },
            { question: "Was hat Labov gezeigt?", options: ["Sprache verändert sich nicht", "Sprachvariation korreliert mit sozialer Schichtung", "Dialekte sterben aus"], correctIndex: 1, type: "mcq" },
          ],
        },
      ],
      schreiben: {
        prompt: "Verfassen Sie einen wissenschaftlichen Essay zum Thema: 'Inwiefern determiniert Sprache unser Denken? Erörtern Sie die Sapir-Whorf-Hypothese unter Berücksichtigung neuerer kognitionswissenschaftlicher Erkenntnisse.' Verwenden Sie einen angemessenen akademischen Stil, beziehen Sie sich auf konkrete Forschungsergebnisse und entwickeln Sie eine differenzierte eigene Position.",
        minWords: 250,
        maxWords: 400,
        hints: ["Begriffliche Eingrenzung", "Starke vs. schwache Variante", "Empirische Evidenz (Boroditsky, Pinker)", "Kritische Würdigung", "Differenzierte Eigenposition", "Akademischer Stil"],
      },
      grammatik: [
        { question: "Die ___ Maßnahmen zeitigten nicht die erhoffte Wirkung.", options: ["ergriffenen", "ergreifenden", "ergriffende", "ergreifene"], correctIndex: 0, type: "mcq" },
        { question: "Ungeachtet ___ Proteste wurde das Gesetz verabschiedet.", options: ["der", "die", "den", "dem"], correctIndex: 0, type: "mcq" },
        { question: "Der Befund ___ sich mit früheren Studien.", options: ["deckt", "decke", "deckend", "gedeckt"], correctIndex: 0, type: "mcq" },
        { question: "Es ___ sich von selbst, dass diese Regelung Ausnahmen zulässt.", options: ["versteht", "verstehe", "verstanden", "verstehend"], correctIndex: 0, type: "mcq" },
        { question: "Die ___ Kontroverse lässt sich nicht auf einfache Formeln reduzieren.", options: ["anhaltende", "anhaltene", "angehaltene", "anhaltete"], correctIndex: 0, type: "mcq" },
        { question: "Man ___ es für verfehlt, die Ursache auf einen einzigen Faktor zurückzuführen.", options: ["hielte", "halte", "hält", "hielt"], correctIndex: 0, type: "mcq" },
        { question: "Der Sachverhalt, ___ der Beschuldigte sich zu verantworten hat, ist eindeutig.", options: ["für den", "wofür", "für dessen", "dessen"], correctIndex: 0, type: "mcq" },
        { question: "___ Erachtens ist eine differenziertere Betrachtung vonnöten.", options: ["Meines", "Meinem", "Mein", "Meiner"], correctIndex: 0, type: "mcq" },
      ],
    },
  },
];

export function getExamsByLevel(level: string): MockExam[] {
  return mockExams.filter(e => e.level === level);
}

export function getExamById(id: string): MockExam | undefined {
  return mockExams.find(e => e.id === id);
}
