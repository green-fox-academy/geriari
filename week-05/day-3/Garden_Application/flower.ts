import { Plant } from "./plant";

export class Flower extends Plant {
  constructor(color: string) {
    super();
    this.color = color;
  }

  needsWater(): boolean {
    return this.currentWaterAmount < 5;
  }

  water(waterAmount: number): void {
    this.currentWaterAmount += waterAmount * 0.75;
  }
}
