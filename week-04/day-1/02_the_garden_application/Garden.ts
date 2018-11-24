import { Plant } from './Plant';
import { Flower } from './Flower';
import { Tree } from './Tree';


export class Garden {
  name: string;
  plants: Plant[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addFlower(flower: Flower): void {
    this.plants.push(flower);
  }

  addTree(tree: Tree): void {
    this.plants.push(tree);
  }

  print(): void {
    for (let i: number = 0; i < this.plants.length; i++) {
      if (this.plants[i] instanceof Tree && this.plants[i].needsWater()) {
        console.log(`The ${this.plants[i].getColor()} tree needs water.`);
      } else if (this.plants[i] instanceof Tree && !this.plants[i].needsWater()) {
        console.log(`The ${this.plants[i].getColor()} tree doesn't need water.`);
      } else if (this.plants[i] instanceof Flower && this.plants[i].needsWater()) {
        console.log(`The ${this.plants[i].getColor()} flower needs water.`);
      } else {
        console.log(`The ${this.plants[i].getColor()} flower doesn't need water.`);
      }
    } 
    console.log('');
      
  }

  water(amount: number): void {
    console.log(`Watering with ${amount}.`);
    let counter: number = 0;
    this.plants.forEach((e) => {
      if (e.needsWater) {
        counter ++;
      }
    });
    this.plants.forEach((e) => {
      if (e.needsWater) {
        e.water(amount / counter);
      }
    });
    this.print();
  }
}
