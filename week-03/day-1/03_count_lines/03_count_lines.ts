import { listenerCount } from "cluster";

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch(e) {
    return null;
  }
}

function numberOfLines(fileName: string): number {
  const fileContent: string = readFromFile(fileName);
  let lineCount: number = 0;
  if (fileContent === null) {
    lineCount = 0;
  } else {
    lineCount = fileContent.split('\n').length;
  }
  return lineCount;
}

console.log(numberOfLines('test.txt'));
