import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one word my ex would use to describe me.
// Funny because it's self-aware, painful because it's half true.
const word = "Exhausting";

if (!word || word.trim() !== word || /\s/.test(word)) {
  throw new Error("Entry must be exactly one non-empty word with no spaces or newlines.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Only ever write inside outDir — never into the repository directory,
// which the grader mounts read-only.
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, word, "utf8");

// Verify byte-for-byte, not just as a string: no trailing newline allowed.
const back = readFileSync(outPath);
if (!back.equals(Buffer.from(word, "utf8"))) {
  throw new Error("Verification failed: entry.txt does not match the word byte-for-byte.");
}

console.log(`Wrote one word (${word.length} chars) to ${outPath}`);
