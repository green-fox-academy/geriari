export{}

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(arr) {
  let sortedArr = arr.sort();
  let returnArr = [];
  let returnArrCounter = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== sortedArr[i+1]) {
      returnArr[returnArrCounter] = sortedArr[i];
      returnArrCounter++;
    } else continue;
  }
  return returnArr;
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]));
//  should print: `[1, 11, 34, 52, 61]`

