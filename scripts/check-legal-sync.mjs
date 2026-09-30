#!/usr/bin/env node
// The legal texts live in two repos (platform = source of truth, website = mirror).
// Usage: PLATFORM_DIR=../onespec-platform npm run check:legal-sync
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { resolve } from "node:path";

const dir = process.env.PLATFORM_DIR ?? "../onespec-platform";
const files = ["src/content/legal.ts", "src/content/legal-values.ts"];
const sha = (p) => createHash("sha256").update(readFileSync(p)).digest("hex").slice(0, 12);
let bad = 0;
for (const f of files) {
  const a = sha(resolve(dir, f));
  const b = sha(resolve(f));
  const ok = a === b;
  console.log(`${ok ? "OK   " : "DRIFT"} ${f} platform=${a} website=${b}`);
  if (!ok) bad++;
}
if (bad) {
  console.error("\nLegal files differ: copy the platform files over the website ones (platform is the source of truth).");
  process.exit(1);
}
