// The battery's last text to its charger — one line, for a make.fun contest.
// A phone battery at 1% sends its final message: dramatic, specific, doomed.

import { mkdirSync, writeFileSync } from "node:fs";

const message =
  "Battery at 1%: tell the charger I saved my last percent just to say this — I spent my whole life at 100% for a human who only ever noticed me at 5%.";

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", message + "\n", "utf8");
console.log(message);
