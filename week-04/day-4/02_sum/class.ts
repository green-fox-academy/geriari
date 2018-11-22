export class Sum {
  numbers: number[] = [];

  constructor (numbers: number[]) {
    this.numbers = numbers;
  }

  sum() {
    let sum: number = 0;
    this.numbers.forEach((e) => {
      sum += e;
    })
    return sum;
  }
}
