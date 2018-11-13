export{}

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc = ["Arthur", "Boe", "Chloe"];

function swapArrayElements(array: string[], swap1: number, swap2: number) {
  let tmp = array[swap1];
  array[swap1] = array[swap2];
  array[swap2] = tmp;
}

console.log(abc);
swapArrayElements(abc, 0, 2);
console.log(abc);
