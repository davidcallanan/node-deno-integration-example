import { shuffleString } from "@-/shuffle";
import { camelCase } from "@-/case";
import readlineFactory from "readline";

const readline = readlineFactory.createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Type in an interesting sentence: ", (sentence) => {
  const newSentence = camelCase(sentence.split(" ").map(word => shuffleString(word)).join(" "));
  console.log("You're sentence has been scrambled and camel-cased!");
  console.log(newSentence);
  readline.close();
});
