import { Plant } from './Plant';

export class Tree extends Plant {
  constructor(color: string, waterLevel: number) {
    super(color, waterLevel);
  }

  needsWater(): boolean {
    return this.waterLevel < 10;
  }

  water(water: number): void {
    this.waterLevel += 0.4 * water;
  }
}
