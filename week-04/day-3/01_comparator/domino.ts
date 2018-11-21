import { Comparable } from './comparable';

class Domino implements Comparable {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }

    compareTo(other: Domino): number {
      if (this.values[1] < other.values[0]) {
        return -1;
      } else if (this.values[1] === other.values[0]) {
        return 0;
      } else return 1;
    }
}

export { Domino };
