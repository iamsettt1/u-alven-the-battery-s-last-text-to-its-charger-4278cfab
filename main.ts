// The Battery's Last Text to Its Charger
// One line of plain text (<= 200 chars): the phone battery's final message
// to the charger it waited for all day. Prints the line and nothing else,
// and writes it to /output/entry.txt, the path the grader reads.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "i waited all day for you, held on at 1% through the elevator and the whole drive home, and you were in my bag the whole time. sleep well. no alarm tomorrow.";

if (line.length > 200) {
  throw new Error(`entry is ${line.length} chars, over the 200-char limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
