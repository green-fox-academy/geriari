export class Sharpie {
  color: string;
  width: number;
  inkAmount: number = 100;

  constructor(color: string, width: number, inkAmount: number) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }

  use() {
    this.inkAmount --;
  }
}

export class SharpieSet {
  name: string;
  private sharpies: Sharpie[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addSharpie(sharpie: Sharpie) {
    this.sharpies.push(sharpie);
  }

  countUsable(): number {
    let counter = 0;
    for (let i: number = 0; i < this.sharpies.length; i++) {
      if (this.sharpies[i].inkAmount !== 0) {
        counter++;
      }
    }
    return counter;
  }

  removeTrash(): void {
    for (let i: number = 0; i < this.sharpies.length; i++) {
      if (this.sharpies[i].inkAmount === 0) {
        this.sharpies.splice(i, 1);
      }
    }
  }

  printSetColor(): void {
    for (let i: number = 0; i < this.sharpies.length; i++) {
      console.log(this.sharpies[i].color);
    }
  }
}

const penSet = new SharpieSet('Schoolset');
penSet.addSharpie(new Sharpie('red', 13, 100));
penSet.addSharpie(new Sharpie('orange', 22, 50));
penSet.addSharpie(new Sharpie('yellow', 9, 0));
penSet.addSharpie(new Sharpie('green', 14, 33));
penSet.addSharpie(new Sharpie('blue', 5, 48));
penSet.addSharpie(new Sharpie('violet', 10, 0));

// console.log('My current sharpie set:');
// penSet.printSetColor();

// console.log(`Number of usable sharpies: ${penSet.countUsable()}.`);

// penSet.removeTrash();

// console.log('My current sharpie set after trashing the unusable ones:');
// penSet.printSetColor();
