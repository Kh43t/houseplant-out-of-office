// The Houseplant Out-of-Office — main.ts
// Writes one out-of-office auto-reply, as if sent by a houseplant,
// to /output/entry.txt. Deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

// The line, exactly as submitted (no trailing newline):
// a fern by the window, unwatered since March, with a growth plan.
// Verified: 113 characters, 115 bytes — inside the gate's 1–120 range.
const ENTRY =
  "Out of office: I'm the fern by the window — unwatered since March and still the only one here with a growth plan.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
