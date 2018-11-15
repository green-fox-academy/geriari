// Create a recursive function called `refactorio`
// that returns it's input's factorial

function refactorio(n: number): number {
  if (n <= 1) {
    return n;
  } else {
    return n * refactorio (n - 1);
  }
}

console.log(refactorio(5));
