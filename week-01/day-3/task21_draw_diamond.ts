'use strict';

let lineCount: number = 11;
let halfLineCount: number = lineCount / 2 + 1;
let oneSpace: string = " ";
let twoStars: string = "**";
let currentSpace: string = "";
let currentStar: string = "*";
let currentSpaceNumber: number = halfLineCount - 1;
let currentStarNumber: number = 1;

//initialize currentSpaceNumber
for (let i: number = 1; i <= currentSpaceNumber; i++) {
    currentSpace = currentSpace + " ";
}

for (let j: number = 1; j <= halfLineCount; j++) {
    console.log(currentSpace + currentStar);
    currentStar = currentStar + twoStars;
    currentSpace = currentSpace.slice(0, -1);
}

currentStar = currentStar.slice(0, -2);

for (let k: number = 1; k <= halfLineCount - 1; k++) {
    currentStar = currentStar.slice(0, -2);
    currentSpace = currentSpace + oneSpace;
    console.log(currentSpace + currentStar);
}

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