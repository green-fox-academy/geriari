import { Plant } from './Plant';

export class Garden {
  name: string;
  plants: Plant[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addFlower(color, waterLevel): void {

  }

  addTree(color, waterLevel): void {

  }

  print(name: string): void {
    console.log(`The ${this.name} garden has these plants:`);
    console.log();    
  }

  water(amount: number): void {
    //water the plants
    print(this.name);
  }
}
