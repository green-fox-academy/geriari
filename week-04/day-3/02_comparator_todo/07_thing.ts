import { Comparable } from './comparable';

class Thing implements Comparable {
    name: string;
    completed: boolean;

    constructor(name: string){
      this.name = name;
    }

    public complete() {
      this.completed = true;
    }

    public compareTo(other: Thing): number {
      if (this.completed && other.completed || !this.completed && !other.completed) {
        return 0;
      } else if (this.completed && !other.completed) {
        return -1;
      } else {
        return 1;
      }
    }

    public print() {
      if (this.completed) {
        return('[x] ' + this.name);
      } else {
        return('[ ] ' + this.name);
      }
    }
}

export { Thing };
