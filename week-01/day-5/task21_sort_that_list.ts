export { }

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

function bubble(arr: number[]): number[] {
  for (let i: number = arr.length - 2; i >= 0; i--) {
    for (let j: number = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp: number = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      } else {
        continue;
      }
    }
  }
  return arr;
}

function advancedBubble(arr: number[], descending: boolean): number[] {
  for (let i: number = arr.length - 2; i >= 0; i--) {
    for (let j: number = 0; j <= i; j++) {
      if (!descending && arr[j] > arr[j + 1] || descending && arr[j] < arr[j + 1]) {
        let temp: number = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      } else {
        continue;
      }
    }
  }
  return arr;
}

//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]
