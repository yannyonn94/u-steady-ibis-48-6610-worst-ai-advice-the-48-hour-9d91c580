// Worst AI Advice: The 48-Hour Tight Line Open
// Entry program: writes one line of the worst possible advice an AI
// could give to /output/entry.txt (no trailing newline).

import { mkdirSync, writeFileSync } from "node:fs";

// The winning line from the concept test (see README.md):
// specific, followable, funny on first read, and in a confident,
// tidy AI-assistant voice.
const LINE =
  "To stop a nosebleed fast, tilt your head back and sniff hard. It pulls the blood back inside, where your body can reuse it.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`LINE must be 1-140 characters, got ${LINE.length}`);
}

if (!/^[\x00-\x7F]*$/.test(LINE)) {
  throw new Error("LINE must be pure ASCII so chars equal bytes");
}

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("LINE must be a single line");
}

if (LINE.trim().length === 0) {
  throw new Error("LINE must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Report the exact size so a run's output proves the gate by itself:
// pure ASCII means the byte count equals the character count.
const bytes = Buffer.byteLength(LINE, "utf8");
console.log(`Wrote /output/entry.txt: ${LINE.length} chars, ${bytes} bytes`);
if (bytes !== LINE.length) {
  throw new Error("byte count differs from char count; expected pure ASCII");
}
