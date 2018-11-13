'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let black: string = '%';
let white: string = ' ';
let row: string = '';

for (let i: number = 1; i <= 8; i++) {
  for (let j: number = 1; j <= 4; j++) {
    if (i % 2 !== 0) {
      row = row + white + black;
    } else {
      row = row + black + white;
    }
  }
  console.log(row);
  row = '';
}
