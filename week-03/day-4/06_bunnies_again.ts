// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function numberOfEars(numberOfLines: number): number {
  if (numberOfLines <= 1) {
    return 2;
  } else {
    return 3 - numberOfLines % 2 + numberOfEars(numberOfLines - 1);
  }
}

console.log(numberOfEars(5));
