const fs = require('fs');

// We can just parse lessons.ts and see what's actually in it.
const content = fs.readFileSync('./src/data/lessons.ts', 'utf8');
console.log("Includes lessonsC2Lit?", content.includes("...lessonsC2Lit"));
console.log("Includes lessonsC2Pro?", content.includes("...lessonsC2Pro"));
console.log("Includes lessonsC2Dialects?", content.includes("...lessonsC2Dialects"));
console.log("Includes lessonsC2Idioms?", content.includes("...lessonsC2Idioms"));
console.log("Includes lessonsC2Style?", content.includes("...lessonsC2Style"));

// Let's also check if the files exist in the filesystem.
const files = fs.readdirSync('./src/data');
const c2Files = files.filter(f => f.startsWith('lessons-c2'));
console.log("C2 files present:", c2Files);
