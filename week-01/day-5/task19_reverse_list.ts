export{}

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`


// with bult in method

let numList = [3, 4, 5, 6, 7];
numList = numList.reverse();
console.log(numList);

// with temp array and a loop

let numList2 = [3, 4, 5, 6, 7];
let temp = [];
let length = numList2.length;

for (let i = 0; i < length; i++) {
  temp[i] = numList2.pop();
}

console.log(temp);
