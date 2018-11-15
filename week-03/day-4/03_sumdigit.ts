// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigit(num: number): number {
  if (num < 10) {
    return num;
  } else {
    return num % 10 + sumDigit(Math.floor(num / 10));
  }
}

console.log(sumDigit(2018));
