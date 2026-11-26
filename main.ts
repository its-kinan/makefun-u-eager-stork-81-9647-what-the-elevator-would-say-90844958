import { mkdirSync, writeFileSync } from "node:fs";

// What the Elevator Would Say — program/v1 entry.
// Writes one line, in the elevator's own voice, to /output/entry.txt.
// Deterministic: no network, no clock, no randomness — same bytes every run.
const LINE =
  "I've carried your affairs, your firings, and your 3 a.m. tears — and the doors still close quietly. You're welcome.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
