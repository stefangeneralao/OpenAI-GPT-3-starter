import fs from "fs";

export const readFile = (fileName: string) => {
  return fs.readFileSync(fileName, "utf8");
};
