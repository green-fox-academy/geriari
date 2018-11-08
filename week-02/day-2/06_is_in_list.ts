'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(list: number[]): boolean {
  let numbersToCheck: number[] = [4, 8, 12, 16];
  let contains: boolean;
  for (let i: number = 0; i < numbersToCheck.length; i++) {
    let found = list.find(function(element) {
      return element === numbersToCheck[i];
    });
    if (found === undefined) {
      contains = false;
      break;
    } else {
      contains = true;
    }
  }
  return contains;
}

console.log(checkNums(listOfNumbers));

export = checkNums;
