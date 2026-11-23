// "The Underlined Book" — an entry for make.fun's "Make the AI judge feel curious".
//
// The program writes one short text to /output/entry.txt: a small, quiet
// mystery. A stranger borrows the same book from a small library every year
// and returns it with one new sentence underlined; read in order, the
// underlined sentences are slowly telling a story. Nothing is explained and
// nothing is resolved — the reader is left holding the question, which is
// the whole point. Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const ENTRY_TEXT =
  "Every year on the same day, a stranger borrows the same book from a small " +
  "library and returns it with one new sentence underlined in pencil. Read " +
  "in order, over thirty years, the sentences are telling a story. This " +
  "year the story reached the librarian. The sentence is about her.";

function main(): void {
  const points = [...ENTRY_TEXT].length;
  if (points < 1 || points > 280 || ENTRY_TEXT.trim().length === 0) {
    throw new Error(`entry text must be 1-280 code points, got ${points}`);
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY_TEXT, "utf8");
}

main();
