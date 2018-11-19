import { Plant } from './Plant';

export class Flower extends Plant {
  constructor(color: string, waterLevel: number) {
    super(color, waterLevel);
  }

  needsWater(): boolean {
    return this.waterLevel < 5;
  }

  water(water: number): void {
    this.waterLevel+= 0.75 * water;
  }
}
