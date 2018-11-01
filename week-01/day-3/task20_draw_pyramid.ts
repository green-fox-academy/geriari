'use strict';

let lineCount: number = 4;
let oneSpace: string = " ";
let twoStars: string = "**";
let currentSpace: string = "";
let currentStar: string = "*";
let currentSpaceNumber: number = lineCount - 1;
let currentStarNumber: number = 1;

//initialize currentSpaceNumber
for (let i: number = 1; i <= currentSpaceNumber; i++) {
    currentSpace = currentSpace + " ";
}

for (let j: number = 1; j <= lineCount; j++) {
    console.log(currentSpace + currentStar);
    currentStar = currentStar + twoStars;
    currentSpace = currentSpace.slice(0, -1);
}
// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is