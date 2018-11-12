'use strict';
export { };

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;
let currentSpace: string = '';
let currentStar: string = '*';

for (let i: number = 1; i < lineCount; i++) {
  currentSpace = currentSpace + " ";
}

for (let j: number = 1; j <= lineCount; j++) {
  console.log(currentSpace + currentStar);
  currentStar = currentStar + '**';
  currentSpace = currentSpace.slice(0, -1);
}
