import { Lesson } from "./lessons";

export const lessonsB1Vocab1: Record<string, Lesson> = {
  "lb1_32": {
    id: "lb1_32",
    title: "Job Application & Interview (Bewerbung)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Bewerbung", phonetic: "be-vair-boong", meaning: "application", example: { de: "Ich schicke meine Bewerbung per E-Mail.", en: "I send my application by email." } },
          { word: "der Lebenslauf", phonetic: "lay-bens-lowf", meaning: "CV / résumé", example: { de: "Mein Lebenslauf hat drei Seiten.", en: "My CV has three pages." } },
          { word: "das Anschreiben", phonetic: "an-shry-ben", meaning: "cover letter", example: { de: "Das Anschreiben muss persönlich sein.", en: "The cover letter must be personal." } },
          { word: "das Vorstellungsgespräch", phonetic: "for-shtel-loongs-ge-shprekh", meaning: "job interview", example: { de: "Ich habe morgen ein Vorstellungsgespräch.", en: "I have a job interview tomorrow." } },
          { word: "die Qualifikation", phonetic: "kva-li-fi-ka-tsee-ohn", meaning: "qualification", example: { de: "Welche Qualifikationen bringen Sie mit?", en: "What qualifications do you bring?" } },
          { word: "die Berufserfahrung", phonetic: "be-roofs-er-fah-roong", meaning: "work experience", example: { de: "Ich habe fünf Jahre Berufserfahrung.", en: "I have five years of work experience." } },
          { word: "das Gehalt / der Lohn", phonetic: "ge-halt / lohn", meaning: "salary / wage", example: { de: "Was sind Ihre Gehaltsvorstellungen?", en: "What are your salary expectations?" } },
          { word: "die Stelle / die Position", phonetic: "shtel-le", meaning: "position / job", example: { de: "Ich bewerbe mich um diese Stelle.", en: "I'm applying for this position." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Sehr geehrte Frau Müller, ich bewerbe mich um die Stelle als Projektmanager. Ich bringe drei Jahre Berufserfahrung mit und spreche fließend Deutsch und Englisch.",
        translation: "Dear Mrs. Müller, I am applying for the position of project manager. I bring three years of work experience and speak German and English fluently.",
        phonetic: "zair ge-air-te frow mül-ler, ikh be-vair-be mikh oom dee shtel-le als pro-yekt-ma-na-jer...",
        tip: "In German applications, ALWAYS use 'Sehr geehrte/r' and be formal. Include your Berufserfahrung and Qualifikationen."
      },
      {
        type: "quiz-mcq",
        question: "In a German job interview, what do they typically ask first?",
        options: ["How much money do you want?", "Erzählen Sie etwas über sich. (Tell us about yourself.)", "Can you start tomorrow?", "Do you like our company?"],
        correctIndex: 1,
        explanation: "'Erzählen Sie etwas über sich' is the classic German interview opener. Prepare a 2-minute self-introduction covering education, experience, and motivation."
      }
    ]
  },
  "lb1_33": {
    id: "lb1_33",
    title: "Workplace Communication (Büroalltag)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Besprechung / das Meeting", phonetic: "be-shpre-khoong", meaning: "meeting", example: { de: "Um zehn haben wir eine Besprechung.", en: "At ten we have a meeting." } },
          { word: "die Frist / die Deadline", phonetic: "frist", meaning: "deadline", example: { de: "Die Frist ist nächsten Freitag.", en: "The deadline is next Friday." } },
          { word: "die Überstunde", phonetic: "ü-ber-shtoon-de", meaning: "overtime", example: { de: "Ich mache heute Überstunden.", en: "I'm working overtime today." } },
          { word: "der Feierabend", phonetic: "fy-er-ah-bent", meaning: "end of workday", example: { de: "Schönen Feierabend!", en: "Have a nice evening! (after work)" } },
          { word: "die Zusammenarbeit", phonetic: "tsoo-za-men-ar-byt", meaning: "collaboration / teamwork", example: { de: "Die Zusammenarbeit war sehr gut.", en: "The collaboration was very good." } },
          { word: "die Fortbildung", phonetic: "fort-bil-doong", meaning: "continuing education / training", example: { de: "Ich mache eine Fortbildung.", en: "I'm doing continuing education." } }
        ]
      },
      {
        type: "grammar",
        title: "Office Email Phrases",
        explanation: "Essential phrases for professional German emails at work.",
        examples: [
          { de: "Anbei finden Sie... (Attached you will find...)", en: "For attachments" },
          { de: "Bezüglich Ihrer Anfrage... (Regarding your inquiry...)", en: "For responding to requests" },
          { de: "Ich möchte Sie darüber informieren, dass...", en: "I would like to inform you that..." },
          { de: "Für Rückfragen stehe ich Ihnen gerne zur Verfügung.", en: "I'm happy to answer any questions." }
        ]
      }
    ]
  },
  "lb1_34": {
    id: "lb1_34",
    title: "Education System (Bildungssystem)",
    module: "B1",
    blocks: [
      {
        type: "grammar",
        title: "The German School System",
        explanation: "Germany's education system is unique. After primary school (Grundschule, 4 years), children are separated into three tracks. Understanding this is essential for B1 discussions about education.",
        examples: [
          { de: "Grundschule (1-4. Klasse) → alle Kinder zusammen", en: "Primary school — all children together" },
          { de: "Hauptschule → practical track, ends after 9th grade", en: "Often leads to Ausbildung (apprenticeship)" },
          { de: "Realschule → intermediate track, ends after 10th grade", en: "More academic, leads to vocational training" },
          { de: "Gymnasium → academic track, ends with Abitur (12/13th grade)", en: "Leads to university (Universität)" }
        ]
      },
      {
        type: "flashcard",
        cards: [
          { word: "die Ausbildung", phonetic: "ows-bil-doong", meaning: "apprenticeship / vocational training", example: { de: "Er macht eine Ausbildung als Koch.", en: "He's doing an apprenticeship as a chef." } },
          { word: "das Abitur", phonetic: "ah-bi-toor", meaning: "high school diploma (Gymnasium)", example: { de: "Sie hat dieses Jahr Abitur gemacht.", en: "She graduated this year." } },
          { word: "das Studium", phonetic: "shtoo-dee-oom", meaning: "university studies", example: { de: "Mein Studium dauert vier Jahre.", en: "My studies last four years." } },
          { word: "das Praktikum", phonetic: "prak-ti-koom", meaning: "internship", example: { de: "Ich mache ein Praktikum bei Siemens.", en: "I'm doing an internship at Siemens." } },
          { word: "der Abschluss", phonetic: "ap-shloos", meaning: "degree / diploma / graduation", example: { de: "Welchen Abschluss hast du?", en: "What degree do you have?" } },
          { word: "die Weiterbildung", phonetic: "vy-ter-bil-doong", meaning: "further education / upskilling", example: { de: "Weiterbildung ist sehr wichtig.", en: "Continuing education is very important." } }
        ]
      }
    ]
  },
  "lb1_35": {
    id: "lb1_35",
    title: "Health & Wellness Deep Dive (Gesundheit)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Diagnose", phonetic: "dee-ag-noh-ze", meaning: "diagnosis", example: { de: "Die Diagnose war nicht schlimm.", en: "The diagnosis wasn't bad." } },
          { word: "die Behandlung", phonetic: "be-hand-loong", meaning: "treatment", example: { de: "Die Behandlung dauert sechs Wochen.", en: "The treatment lasts six weeks." } },
          { word: "die Therapie", phonetic: "te-ra-pee", meaning: "therapy", example: { de: "Er braucht eine Physiotherapie.", en: "He needs physiotherapy." } },
          { word: "das Symptom", phonetic: "zümp-tohm", meaning: "symptom", example: { de: "Was sind Ihre Symptome?", en: "What are your symptoms?" } },
          { word: "die Nebenwirkung", phonetic: "nay-ben-vir-koong", meaning: "side effect", example: { de: "Das Medikament hat Nebenwirkungen.", en: "The medication has side effects." } },
          { word: "die Untersuchung", phonetic: "oon-ter-zoo-khoong", meaning: "examination / checkup", example: { de: "Ich habe eine Untersuchung beim Arzt.", en: "I have a checkup at the doctor." } },
          { word: "die Überweisung", phonetic: "ü-ber-vy-zoong", meaning: "referral (medical)", example: { de: "Der Hausarzt hat mir eine Überweisung gegeben.", en: "The GP gave me a referral." } },
          { word: "die Krankenversicherung", phonetic: "kran-ken-fer-zi-khe-roong", meaning: "health insurance", example: { de: "In Deutschland braucht man eine Krankenversicherung.", en: "In Germany you need health insurance." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Guten Tag, ich habe seit drei Tagen starke Kopfschmerzen und Fieber. Können Sie mich bitte untersuchen?",
        translation: "Good day, I've had severe headaches and fever for three days. Can you please examine me?",
        phonetic: "goo-ten tahk, ikh hah-be zyt dry tah-gen shtar-ke kopf-shmer-tsen oont fee-ber...",
        tip: "At the doctor, always describe: 1) Was fehlt Ihnen? (symptoms), 2) Seit wann? (how long), 3) Wie stark? (how severe)"
      }
    ]
  },
  "lb1_36": {
    id: "lb1_36",
    title: "Mental Health & Stress (Psychische Gesundheit)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "der Stress", phonetic: "shtres", meaning: "stress", example: { de: "Ich habe zu viel Stress bei der Arbeit.", en: "I have too much stress at work." } },
          { word: "das Burnout", phonetic: "burn-owt", meaning: "burnout", example: { de: "Burnout ist eine ernste Krankheit.", en: "Burnout is a serious illness." } },
          { word: "die Entspannung", phonetic: "ent-shpan-oong", meaning: "relaxation", example: { de: "Yoga hilft bei der Entspannung.", en: "Yoga helps with relaxation." } },
          { word: "die Depression", phonetic: "de-pre-see-ohn", meaning: "depression", example: { de: "Depression ist behandelbar.", en: "Depression is treatable." } },
          { word: "die Work-Life-Balance", phonetic: "vörk-lyf-ba-lans", meaning: "work-life balance", example: { de: "Eine gute Work-Life-Balance ist wichtig.", en: "Good work-life balance is important." } },
          { word: "sich überfordert fühlen", phonetic: "ü-ber-for-dert", meaning: "to feel overwhelmed", example: { de: "Ich fühle mich überfordert.", en: "I feel overwhelmed." } }
        ]
      },
      {
        type: "grammar",
        title: "Talking About Feelings (Advanced)",
        explanation: "B1 requires expressing complex emotions beyond 'happy/sad'. Use these patterns to discuss mental well-being.",
        examples: [
          { de: "Ich fühle mich gestresst / überfordert / ausgebrannt.", en: "I feel stressed / overwhelmed / burnt out." },
          { de: "Es fällt mir schwer, mich zu entspannen.", en: "It's hard for me to relax." },
          { de: "Ich brauche eine Auszeit.", en: "I need a break / time out." },
          { de: "Man sollte sich Zeit für sich nehmen.", en: "One should take time for oneself." }
        ]
      }
    ]
  },
  "lb1_37": {
    id: "lb1_37",
    title: "Healthy Lifestyle (Gesunde Lebensweise)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Ernährung", phonetic: "er-nay-roong", meaning: "nutrition / diet", example: { de: "Eine gesunde Ernährung ist wichtig.", en: "A healthy diet is important." } },
          { word: "die Vorsorge", phonetic: "for-zor-ge", meaning: "preventive care", example: { de: "Gehen Sie regelmäßig zur Vorsorge!", en: "Go for regular preventive checkups!" } },
          { word: "vegetarisch / vegan", phonetic: "ve-ge-tah-rish / vay-gahn", meaning: "vegetarian / vegan", example: { de: "Ich ernähre mich vegetarisch.", en: "I eat vegetarian." } },
          { word: "die Sucht", phonetic: "zookht", meaning: "addiction", example: { de: "Rauchen ist eine Sucht.", en: "Smoking is an addiction." } },
          { word: "das Wohlbefinden", phonetic: "vohl-be-fin-den", meaning: "well-being", example: { de: "Sport fördert das Wohlbefinden.", en: "Exercise promotes well-being." } },
          { word: "sich ernähren", phonetic: "zikh er-nay-ren", meaning: "to eat / nourish oneself", example: { de: "Wie ernähren Sie sich?", en: "How do you eat? (What's your diet?)" } }
        ]
      },
      {
        type: "quiz-mcq",
        question: "A common B1 Sprechen topic: 'Ist vegetarische Ernährung gesünder?' How do you structure your answer?",
        options: [
          "Just say yes or no.",
          "Einerseits...andererseits + personal experience + conclusion.",
          "List 10 vegetables.",
          "Talk about something else."
        ],
        correctIndex: 1,
        explanation: "B1 presentations need STRUCTURE: 1) Einerseits (pro), andererseits (contra), 2) personal experience, 3) conclusion with opinion."
      }
    ]
  },
  "lb1_38": {
    id: "lb1_38",
    title: "Insurance & Social System (Sozialversicherung)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Krankenversicherung", phonetic: "kran-ken-fer-zi-khe-roong", meaning: "health insurance", example: { de: "Die GKV (gesetzliche Krankenversicherung) ist Pflicht.", en: "Public health insurance is mandatory." } },
          { word: "die Rentenversicherung", phonetic: "ren-ten-fer-zi-khe-roong", meaning: "pension insurance", example: { de: "Die Rentenversicherung sichert das Alter ab.", en: "Pension insurance secures old age." } },
          { word: "das Arbeitslosengeld", phonetic: "ar-byts-loh-zen-gelt", meaning: "unemployment benefits", example: { de: "Er bekommt Arbeitslosengeld.", en: "He receives unemployment benefits." } },
          { word: "die Pflegeversicherung", phonetic: "pflay-ge-fer-zi-khe-roong", meaning: "long-term care insurance", example: { de: "Pflegeversicherung ist in Deutschland Pflicht.", en: "Long-term care insurance is mandatory in Germany." } },
          { word: "das Sozialamt", phonetic: "zo-tsee-ahl-amt", meaning: "social welfare office", example: { de: "Das Sozialamt hilft in Notlagen.", en: "The welfare office helps in emergencies." } },
          { word: "der Beitrag", phonetic: "by-trahk", meaning: "contribution / premium", example: { de: "Die Beiträge werden vom Gehalt abgezogen.", en: "Contributions are deducted from salary." } }
        ]
      },
      {
        type: "grammar",
        title: "Germany's 5 Pillars of Social Insurance",
        explanation: "Every employee in Germany pays into five mandatory insurance systems. Understanding these is essential for anyone living/working in Germany.",
        examples: [
          { de: "1. Krankenversicherung (Gesundheit)", en: "Health insurance" },
          { de: "2. Rentenversicherung (Alter)", en: "Pension insurance" },
          { de: "3. Arbeitslosenversicherung (Arbeitslosigkeit)", en: "Unemployment insurance" },
          { de: "4. Pflegeversicherung (Pflege im Alter)", en: "Long-term care insurance" },
          { de: "5. Unfallversicherung (Arbeitsunfälle)", en: "Accident insurance" }
        ]
      }
    ]
  },
  "lb1_39": {
    id: "lb1_39",
    title: "Bureaucracy Deep Dive (Behörden & Visa)",
    module: "B1",
    blocks: [
      {
        type: "flashcard",
        cards: [
          { word: "die Ausländerbehörde", phonetic: "ows-len-der-be-hör-de", meaning: "foreigners' registration office", example: { de: "Ich habe einen Termin bei der Ausländerbehörde.", en: "I have an appointment at the immigration office." } },
          { word: "der Aufenthaltstitel", phonetic: "owf-ent-halts-tee-tel", meaning: "residence permit", example: { de: "Mein Aufenthaltstitel läuft bald ab.", en: "My residence permit expires soon." } },
          { word: "die Aufenthaltsgenehmigung", phonetic: "owf-ent-halts-ge-nay-mi-goong", meaning: "residence permission", example: { de: "Ich brauche eine Aufenthaltsgenehmigung.", en: "I need a residence permission." } },
          { word: "das Visum (pl. Visa)", phonetic: "vee-zoom", meaning: "visa", example: { de: "Mein Visum wurde genehmigt.", en: "My visa was approved." } },
          { word: "die Einbürgerung", phonetic: "yn-bür-ge-roong", meaning: "naturalization (citizenship)", example: { de: "Nach 8 Jahren kann man die Einbürgerung beantragen.", en: "After 8 years you can apply for citizenship." } },
          { word: "beantragen", phonetic: "be-an-trah-gen", meaning: "to apply for (officially)", example: { de: "Ich möchte einen neuen Ausweis beantragen.", en: "I'd like to apply for a new ID card." } },
          { word: "verlängern", phonetic: "fer-leng-ern", meaning: "to extend / renew", example: { de: "Ich muss mein Visum verlängern.", en: "I need to extend my visa." } },
          { word: "die Gebühr", phonetic: "ge-bür", meaning: "fee / charge", example: { de: "Die Gebühr beträgt 50 Euro.", en: "The fee is 50 euros." } }
        ]
      },
      {
        type: "speaking",
        phrase: "Guten Tag, ich möchte meinen Aufenthaltstitel verlängern. Welche Unterlagen brauche ich dafür?",
        translation: "Good day, I'd like to extend my residence permit. What documents do I need for that?",
        phonetic: "goo-ten tahk, ikh möch-te my-nen owf-ent-halts-tee-tel fer-leng-ern. vel-khe oon-ter-lah-gen brow-khe ikh da-für?",
        tip: "Always bring: 1) Valid passport, 2) Current Aufenthaltstitel, 3) Proof of income, 4) Proof of health insurance, 5) Meldebescheinigung."
      }
    ]
  }
};
