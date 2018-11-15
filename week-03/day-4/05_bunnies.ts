// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function numberOfEars(numberOfBunnies: number): number {
  if (numberOfBunnies <= 1) {
    return 2;
  } else {
    return 2 + numberOfEars(numberOfBunnies - 1);
  }
}

console.log(numberOfEars(23));
