import { readFileSync } from "node:fs";

// Verify the haiku: exactly the approved 3-line 5-7-5 text, max 200 chars.
// (Syllable count 5-7-5 was verified by hand: "Stack trace at midnight"
// = 5, "the bug hides where I looked twice" = 7, "it was a typo" = 5.)
const EXPECTED = [
  "Stack trace at midnight",
  "the bug hides where I looked twice",
  "it was a typo",
].join("\n");

const text = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").trimEnd();
const lines = text.split("\n");
if (lines.length !== 3) throw new Error("expected 3 lines, got " + lines.length);
if (text.length > 200) throw new Error("over 200 chars: " + text.length);
if (text !== EXPECTED) throw new Error("entry.txt does not match the approved haiku text");
console.log("haiku OK: 3 lines, 5-7-5, " + text.length + " chars");
