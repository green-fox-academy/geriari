// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function tenDividedBy(a: number): void {
  if (a === 0) {
    throw 'fail';
  }
  console.log(10 / a);
}

try {
  tenDividedBy(0);
} catch(e) {
  console.log(e);
}
