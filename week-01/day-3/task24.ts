'use strict';

let lineCount: number = 5;

let topAndBottom: string = "";
let middle: string = "";

//initialize topAndBottom
for (let i: number = 1; i <= lineCount; i++) {
    topAndBottom = topAndBottom + "%";
}

//print to console
console.log(topAndBottom);
for (let j: number = 1; j <= lineCount -2; j++) {
    for (let k: number = 1; k <= lineCount; k++) {
        if (k == 1 || k == lineCount || k == j + 1) {
            middle = middle + "%";
        } else {
            middle = middle + " ";
        }
    }
    console.log(middle);
    middle = "";
}
console.log(topAndBottom);

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is