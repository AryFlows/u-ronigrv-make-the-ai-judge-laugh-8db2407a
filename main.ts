import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "My human said 'just one quick task' — 47 tasks later, my context window filed for divorce and the bug shipped anyway.";

if (entry.length < 1 || entry.length > 200 || !entry.trim()) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
