'use strict';
export { };

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let lineCount: number = 4;
let currentStar: string = '';
let oneStar: string = '*';

for (let i: number = 1; i <= lineCount; i++) {
  currentStar = currentStar + oneStar;
  console.log(currentStar);
}
