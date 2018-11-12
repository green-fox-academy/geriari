'use strict';
export { };

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 6;

let topAndBottom: string = '';
let middle: string = '';

for (let i: number = 1; i <= lineCount; i++) {
  topAndBottom = topAndBottom + "%";
}

middle = '%';
for (let j: number = 1; j <= lineCount -2; j++) {
  middle = middle + ' ';
}
middle = middle + '%';

console.log(topAndBottom);
for (let k: number = 1; k <= lineCount -2; k++) {
  console.log(middle);
}
console.log(topAndBottom);
