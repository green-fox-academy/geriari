export{}

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let matrix = [];
let size = 6;

for (let row = 0; row < size; row++) {
  matrix[row] = [];
  for (let col = 0; col < size; col++) {
    if (col + row === size - 1) {
      matrix[row][col] = 1;
    } else {
      matrix[row][col] = 0;
    }
  }
}

console.log(matrix);
