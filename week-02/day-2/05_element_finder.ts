'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

function containsSeven(list: number[]): string {
  let contains: boolean = false;
  for (let i: number = 0; i < list.length; i++) {
    if (list[i] === 7) {
      contains = true;
      break;
    }
  }
  if (contains) {
    return 'Hoorray';
  } else {
    return 'Noooooo';
  }
}

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
console.log(containsSeven(numbers));

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

function containsSeven2(list: number[]): string {
  let index: number = list.indexOf(7);
  if (index === -1) {
    return 'Noooooo';
  } else {
    return 'Hoorray';
  }
}

console.log(containsSeven2(numbers));

export = containsSeven;
