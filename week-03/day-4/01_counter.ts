// Write a recursive function that takes one parameter: n and counts down from n.

function counter(num: number): number {
  if (num <= 1) { //base case
    console.log(1);
  }
  else {
    console.log(num);
    return counter(num - 1);
  }
}

counter(6);
