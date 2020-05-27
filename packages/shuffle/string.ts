import { shuffleArray } from "./array.ts";

export function shuffleString(str: string): string {
  return shuffleArray(str.split("")).join("");
}
