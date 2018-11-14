export { };

// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

class Sharpie {
  color: string;
  width: number;
  inkAmount: number = 100;

  constructor(clr: string, wdth: number) {
    this.color = clr;
    this.width = wdth;
  }

  use() {
    this.inkAmount--;
  }
}

class SharpieSet {
  sharpies: Sharpie[] = [];

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

  }
}

let sharpie1 = new Sharpie('red', 13);
console.log(sharpie1);
sharpie1.use();
console.log(sharpie1);
