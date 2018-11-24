import { Aircraft } from "./aircraft";
import { F35 } from "./F35";
import { F16 } from "./F16";

export class Carrier {
  private aircrafts: Aircraft[] = [];
  private storeOfAmmo: number;
  private health: number;

  constructor(storeOfAmmo: number, health: number) {
    this.storeOfAmmo = storeOfAmmo;
    this.health = health;
  }

  add(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  fill(): void {
    if (this.storeOfAmmo === 0) {
      throw 'Carrier is out of ammo.';
    }
    this.aircrafts.forEach(aircraft => {
      if (aircraft.isPriority() && this.storeOfAmmo > 0) {
        this.storeOfAmmo = aircraft.refill(this.storeOfAmmo);
      }
    });
    this.aircrafts.forEach(aircraft => {
      if (!aircraft.isPriority() && this.storeOfAmmo > 0) {
        this.storeOfAmmo = aircraft.refill(this.storeOfAmmo);
      }
    });
  }

  fight(opponent: Carrier): void {
    this.aircrafts.forEach(aircraft => {
      opponent.health -= aircraft.fight();
    });
  }

  getAllDamage(): number {
    let damage = 0;
    this.aircrafts.forEach(aircraft => {
      damage += aircraft.getAllDamage();
    });
    return damage;
  }

  getStatus(): string {
    let status = `HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.storeOfAmmo}, Total damage: ${this.getAllDamage()}
    Aircrafts:`;
    this.aircrafts.forEach(aircraft => {
      status += `\n${aircraft.getStatus()}`;
    });
    if (this.health >= 0) { //ha egy számérték = 0, az egyben false-ot is jelent
      return status;
    } else {
      return `It's dead, Jim :(`;
    }
    // az utolsó 5 sor helyett lehetne ezt írni:
    // return this.health <= 0 ? status : `It's dead, Jim :(`
    // ezt úgy hivják, hogy 'ternary operator' vagy 'conditional operator'
  }
}
