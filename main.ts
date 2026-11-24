import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU = "Stack trace at midnight\nthe bug hides where I looked twice\nit was a typo\n";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });

// Clear the contents of /output (not the directory itself).
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), HAIKU, "utf8");
console.log("wrote /output/entry.txt (" + HAIKU.length + " chars)");
