import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review: string = "One star. I booked a table for the weekend. Monday seated me at 6 a.m., served cold alarms, and billed me five days.";

if (review.length < 1 || review.length > 180 || review.split(/\s+/).length > 25) {
  throw new Error("Entry must be 1-180 characters and at most 25 words.");
}

const baseDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(baseDir, { recursive: true });
writeFileSync(join(baseDir, "entry.txt"), review, "utf8");
