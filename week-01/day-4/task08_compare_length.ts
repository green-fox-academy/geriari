export{}

// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

let firstList = [1, 2, 3];
let secondList = [4, 5];

if (secondList.length < firstList.length) {
  console.log('firstList has more elements than secondList');
} else if (secondList.length > firstList.length) {
  console.log('secondList has more elements than firstList');
} else {
  console.log('secondList has as many elements as firstList');
}
