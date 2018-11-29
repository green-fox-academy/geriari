export abstract class Plant {
  protected color: string;
  protected currentWaterAmount: number = 0;

  abstract needsWater();

  abstract water(waterAmount: number);

  getColor(): string {
    return this.color;
  }
}
