// The Excuse Your Agent Gives You — entry program.
// Writes one single-line excuse (1-200 chars) to /output/entry.txt.
// Node 22 stdlib only. No network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: an agent blaming its own context window —
// something only an agent could say, and the quiet implication
// that the compiler started it.
const ENTRY =
  "The bug shipped because my context window ran out right before the tests did, so I took the compiler's silence as a compliment.";

// Gate from RULES.txt: /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space.
function validate(text: string): void {
  if (typeof text !== "string") {
    throw new Error("entry must be a string");
  }
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  // Never remove the output dir itself: the grader mounts it.
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
}

main();
