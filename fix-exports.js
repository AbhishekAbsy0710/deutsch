const fs = require('fs');
const path = require('path');

const filesToFix = [
  'lessons-c2-lit.ts',
  'lessons-c2-dialects.ts',
  'lessons-c2-pro.ts',
  'lessons-c2-idioms.ts',
  'lessons-c2-style.ts'
];

const dataDir = path.join(__dirname, 'src', 'data');

filesToFix.forEach(file => {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace: export const name: Lesson[] = [
  // With: export const name: Record<string, Lesson> = {
  content = content.replace(/export const (lessonsC2[A-Z][a-z]+): Lesson\[\] = \[/, 'export const $1: Record<string, Lesson> = {');
  
  // Now we need to convert the array syntax to object syntax.
  // Find each `{ \n    id: "..."` and prepend `"..." : `
  content = content.replace(/\{\s*id:\s*"([^"]+)",/g, '"$1": {\n    id: "$1",');
  
  // And the final `];` to `};`
  content = content.replace(/\];\s*$/, '};\n');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
});
