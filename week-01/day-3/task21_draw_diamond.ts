'use strict';
export { };

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let lineCount: number = 11;
let halfLineCount: number = lineCount / 2 + 1;
let currentSpace: string = '';
let currentStar: string = '*';

for (let i: number = 1; i < halfLineCount; i++) {
  currentSpace = currentSpace + " ";
}

for (let j: number = 1; j < halfLineCount; j++) {
  console.log(currentSpace + currentStar);
  currentStar = currentStar + '**';
  currentSpace = currentSpace.slice(0, -1);
}

currentStar = currentStar.slice(0, -2);
currentSpace = currentSpace + ' ';

for (let k: number = 1; k < halfLineCount -1; k++) {
  currentStar = currentStar.slice(0, -2);
  currentSpace = currentSpace + ' ';
  console.log(currentSpace + currentStar);
}
