'use strict';

let lineCount: number = 6;

let topAndBottom: string = "";
let middle: string = "";

//initialize topAndBottom
for (let i: number = 1; i <= lineCount; i++) {
    topAndBottom = topAndBottom + "%";
}

//initialize middle
middle = "%";
for (let j: number = 1; j <= lineCount -2; j++) {
    middle = middle + " ";
}
middle = middle + "%";

//print to console
console.log(topAndBottom);
for (let k: number = 1; k <= lineCount -2; k++) {
    console.log(middle);
}
console.log(topAndBottom);

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