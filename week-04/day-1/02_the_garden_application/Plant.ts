export class Plant {
  protected color: string;
  protected waterLevel: number;

  constructor(color: string, waterLevel: number) {
    this.color = color;
    this.waterLevel = waterLevel;    
  }
}