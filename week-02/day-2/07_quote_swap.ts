'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(arr: string[]): string {
  let temp: string = arr[2];
  arr[2] = arr[5];
  arr[5] = temp;
  let wordsWithSpaces: string = '';
  for (let i: number = 0; i < arr.length; i++) {
    wordsWithSpaces = wordsWithSpaces + arr[i] + ' ';
  }
  return wordsWithSpaces;
}

console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."

export = quoteSwap;
