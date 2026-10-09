// Every language must carry the same changelog entries, in the same order as CHANGELOG_META (index = entry).
import { readFileSync, readdirSync } from "node:fs";

const cfg = readFileSync(new URL("../src/lib/site-config.ts", import.meta.url), "utf8");
const versions = [...cfg.matchAll(/version: "([\d.]+)"/g)].map((m) => m[1]);
let bad = 0;
for (const f of readdirSync(new URL("../messages/", import.meta.url))) {
  const d = JSON.parse(readFileSync(new URL(`../messages/${f}`, import.meta.url), "utf8"));
  const got = (d.changelog ?? []).map((e) => e.version);
  if (JSON.stringify(got) !== JSON.stringify(versions)) {
    bad++;
    console.error(`${f}: changelog ${got.join(",")} ≠ CHANGELOG_META ${versions.join(",")}`);
  }
}
if (bad) process.exit(1);
console.log(`changelog in sync (${versions.length} entries, ${readdirSync(new URL("../messages/", import.meta.url)).length} languages)`);
