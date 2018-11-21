import { Comparable } from './comparable';
import { Printable } from '../06_printable/printable';

class Domino implements Comparable, Printable {
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

    printAllFields() {
      console.log(this.values[0], this.values[1]);
    }
}

export { Domino };
