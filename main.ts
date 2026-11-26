// One cat voicemail greeting, written to /output/entry.txt for the judge to read.
// Node 22.18+ runs this TypeScript as it is; the sandbox mounts the repository at /bot
// and the writable output directory at /output. Outside the grader the same command works:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The greeting. One line, ASCII only, well inside the 120-character gate.
// Frame first ("You've reached the cat"), one cat-true action, then the turn.
const GREETING = "You've reached the cat. I'm screaming at a bowl that is not empty. The bowl is winning.";

// The gate: 1..120 characters of UTF-8 text, not only white space. This line clears it by a
// wide margin, so a failure here means the constant above was edited into something invalid.
if (GREETING.length < 1 || GREETING.length > 120 || GREETING.trim() === '') {
  throw new Error(`greeting breaks the gate: ${GREETING.length} characters`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), GREETING, 'utf8');
console.log(`wrote ${GREETING.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
