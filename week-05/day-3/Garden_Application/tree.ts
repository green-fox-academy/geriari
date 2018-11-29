import { Plant } from "./plant";

export class Tree extends Plant {
  constructor(color: string) {
    super();
    this.color = color;
  }

  needsWater(): boolean {
    return this.currentWaterAmount < 10;
  }

  water(waterAmount: number): void {
    this.currentWaterAmount += waterAmount * 0.4;
  }
}
