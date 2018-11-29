import { Plant } from "./plant";

export class Garden {
  protected plants: Plant[] = [];

  addPlant(plant: Plant): void {
    this.plants.push(plant);
  }

  water(waterAmount: number): void {
    let counter: number = 0;
    this.plants.forEach(e => {
      if (e.needsWater()) {
        counter ++;
      }
    });
    this.plants.forEach(e => {
      if (e.needsWater()) {
        e.water(waterAmount / counter);
      }
    });
    this.print();
  }

  print(): void {
    this.plants.forEach(e => {
      if (e.needsWater()) {
        console.log(`The ${e.getColor()} ${e.constructor.name} needs water.`);
      } else {
        console.log(`The ${e.getColor()} ${e.constructor.name} doesn't need water.`);
      }
    });
  }
}
