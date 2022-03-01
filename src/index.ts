import { completeSentence } from "./utils/gpt-3";
import { readFile } from "./utils/file";

const prompt = process.argv[2] || readFile("sample.txt");

completeSentence(prompt).then((result) => {
  console.log(result);
});
