const { lessonData } = require('./src/data/lessons');
const fs = require('fs');

let report = '# Curriculum Deep Audit Report\n\n';
let errors = 0;
let warnings = 0;

const totalLessons = Object.keys(lessonData).length;
report += `## 1. Top Level Metrics\n`;
report += `- Total Lessons: ${totalLessons} (Expected: 407)\n`;

if (totalLessons !== 407) {
  report += `  - ❌ ERROR: Total lesson count mismatch!\n`;
  errors++;
} else {
  report += `  - ✅ SUCCESS: Exact lesson count achieved.\n`;
}

// 2. ID and Uniqueness Check
const ids = new Set();
let duplicateIds = [];
Object.values(lessonData).forEach(lesson => {
  if (ids.has(lesson.id)) duplicateIds.push(lesson.id);
  ids.add(lesson.id);
});

report += `\n## 2. ID Uniqueness Check\n`;
if (duplicateIds.length > 0) {
  report += `- ❌ ERROR: Found ${duplicateIds.length} duplicate IDs: ${duplicateIds.join(', ')}\n`;
  errors++;
} else {
  report += `- ✅ SUCCESS: All ${ids.size} IDs are unique.\n`;
}

// 3. Module Distribution
const moduleCounts = {};
Object.values(lessonData).forEach(lesson => {
  moduleCounts[lesson.module] = (moduleCounts[lesson.module] || 0) + 1;
});

report += `\n## 3. Module Distribution\n`;
Object.keys(moduleCounts).sort().forEach(mod => {
  report += `- **${mod}**: ${moduleCounts[mod]} lessons\n`;
});
if (!moduleCounts['C2'] || moduleCounts['C2'] < 30) {
  report += `- ❌ ERROR: C2 module count is ${moduleCounts['C2'] || 0}, expected 30.\n`;
  errors++;
} else {
  report += `- ✅ SUCCESS: C2 expansion is present.\n`;
}

// 4. Structural Integrity Check
report += `\n## 4. Structural Integrity Check (Missing Data)\n`;
let emptyBlocks = 0;
let missingTitles = 0;
let missingModules = 0;
let invalidBlocks = [];

Object.values(lessonData).forEach(lesson => {
  if (!lesson.title) missingTitles++;
  if (!lesson.module) missingModules++;
  if (!lesson.blocks || lesson.blocks.length === 0) {
    emptyBlocks++;
  } else {
    lesson.blocks.forEach((block, index) => {
      if (!block.type) {
        invalidBlocks.push(`Lesson ${lesson.id} - Block ${index} missing type`);
      } else {
        // Check specific types
        if (block.type === 'grammar' && (!block.title || !block.explanation || !block.examples)) invalidBlocks.push(`Lesson ${lesson.id} - Invalid grammar block`);
        if (block.type === 'vocabulary' && (!block.word || !block.translation || !block.phonetic)) invalidBlocks.push(`Lesson ${lesson.id} - Invalid vocab block`);
        if (block.type === 'quiz-mcq' && (!block.question || !block.options || typeof block.correctIndex !== 'number')) invalidBlocks.push(`Lesson ${lesson.id} - Invalid quiz block`);
        if (block.type === 'example-dialogue' && (!block.title || !block.lines)) invalidBlocks.push(`Lesson ${lesson.id} - Invalid dialogue block`);
        if (block.type === 'cultural-note' && (!block.title || !block.content || !block.emoji)) invalidBlocks.push(`Lesson ${lesson.id} - Invalid cultural block`);
        if (block.type === 'flashcard' && (!block.cards || !Array.isArray(block.cards))) invalidBlocks.push(`Lesson ${lesson.id} - Invalid flashcard block`);
      }
    });
  }
});

if (missingTitles > 0) { report += `- ❌ ERROR: ${missingTitles} lessons missing title\n`; errors++; }
if (missingModules > 0) { report += `- ❌ ERROR: ${missingModules} lessons missing module\n`; errors++; }
if (emptyBlocks > 0) { report += `- ❌ ERROR: ${emptyBlocks} lessons have 0 blocks (empty lessons)\n`; errors++; }
if (invalidBlocks.length > 0) { 
  report += `- ❌ ERROR: Found ${invalidBlocks.length} structurally invalid blocks.\n`; 
  errors++; 
  invalidBlocks.slice(0, 5).forEach(e => report += `  - ${e}\n`);
  if (invalidBlocks.length > 5) report += `  - ...and ${invalidBlocks.length - 5} more.\n`;
}

if (missingTitles === 0 && missingModules === 0 && emptyBlocks === 0 && invalidBlocks.length === 0) {
  report += `- ✅ SUCCESS: All 407 lessons have 100% complete data structures.\n`;
}

// 5. Sequence continuity check
report += `\n## 5. Sequence Continuity Check\n`;
const sequenceErrors = [];

// Group IDs by prefix, e.g. "a1-n", "c2-p"
const prefixes = {};
Object.keys(lessonData).forEach(id => {
  const match = id.match(/^([a-z0-9\-]+?)(\d+)$/i);
  if (match) {
    const prefix = match[1];
    const num = parseInt(match[2], 10);
    if (!prefixes[prefix]) prefixes[prefix] = [];
    prefixes[prefix].push(num);
  }
});

Object.keys(prefixes).forEach(prefix => {
  const nums = prefixes[prefix].sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i+1] !== nums[i] + 1 && nums[i+1] !== nums[i]) {
      // Gap detected!
      sequenceErrors.push(`Gap in prefix '${prefix}': jumps from ${nums[i]} to ${nums[i+1]}`);
    }
  }
});

if (sequenceErrors.length > 0) {
  report += `- ⚠️ WARNING: Found ${sequenceErrors.length} potential sequence gaps (this is common when mixing sets, but worth noting):\n`;
  warnings++;
  sequenceErrors.forEach(w => report += `  - ${w}\n`);
} else {
  report += `- ✅ SUCCESS: No sequence gaps detected in numeric suffixes.\n`;
}

report += `\n## Final Verdict\n`;
if (errors === 0) {
  report += `**STATUS: PERFECT 🟢**\nThe curriculum is 100% structurally sound, with exactly 407 complete lessons. Zero fatal errors detected.`;
} else {
  report += `**STATUS: FAILED 🔴**\nFound ${errors} fatal errors that require attention.`;
}

fs.writeFileSync('curriculum_audit.md', report);
console.log('Audit complete. Errors:', errors);
