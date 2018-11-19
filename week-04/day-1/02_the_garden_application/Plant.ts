export class Plant {
  protected color: string;
  protected waterLevel: number;

  constructor(color: string, waterLevel: number) {
    this.color = color;
    this.waterLevel = waterLevel;    
  }

  getColor(): string {
    return this.color;
  }

  getWaterLevel(): number {
    return this.waterLevel;
  }

  needsWater(): boolean {
    return true;
  }

  water(water: number): void {
    this.waterLevel+= water;
  }
}
