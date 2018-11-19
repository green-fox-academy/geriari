import { Aircraft } from "./Aircraft";

export class Carrier {
  protected name: string;
  protected aircrafts: Aircraft[] = [];
  protected ammoStore: number;
  protected healthPoint: number;

  constructor(name: string, ammoStore: number, healthPoint: number) {
    this.name = name;
    this.ammoStore = ammoStore;
    this.healthPoint = healthPoint;
  }

  addAircraft(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  fill(): void {
    if (this.ammoStore === 0) {
      //
    }
    let sumAmmoNeeded: number = 0;
    this.aircrafts.forEach((e) => {
      sumAmmoNeeded += e.getAmmoNeeded(); 
    });
    if (sumAmmoNeeded <= this.ammoStore) {
      this.aircrafts.forEach((e) => {
        e.refill(this.ammoStore);
      });
    } else {
      this.aircrafts.forEach((e) => {
        if (e.isPriority) {
          e.refill(this.ammoStore);
        }
      });
    }
  }

  getStatus(): string {
    if (this.healthPoint === 0) {
      return 'It\'s dead Jim :(';
    } else {
      return `HP: ${this.healthPoint}, Aircraft count: ${this.aircrafts.length}, Ammo storage: ${this.ammoStore}, Total damage:`
    }
  }
}
