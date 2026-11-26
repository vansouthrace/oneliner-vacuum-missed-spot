import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Vacuum's Funniest Excuse — the excuse a robot vacuum gives
// for missing a spot.
const ENTRY =
  "My sensors say that spot is haunted. I am a vacuum, not an exorcist.";
const MAX_CHARS = 120;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${ENTRY.length}`);
}
// The gate also rejects whitespace-only text, so check that explicitly.
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
