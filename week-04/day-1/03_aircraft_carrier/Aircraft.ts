import { F16 } from './F16'

export class Aircraft {
  protected name: string;
  protected ammo: number = 0;
  protected maxAmmo: number;
  protected baseDamage: number;

  constructor(name) {
    this.name = name;
  }

  refill(amount: number): number {
    if (amount <= this.maxAmmo - this.ammo) {
      this.ammo += amount;
      return 0;
    } else {
      let temp: number = amount - this.maxAmmo + this.ammo
      this.ammo = this.maxAmmo;
      return temp;
    }
  }

  fight(): number {
    let tempAmmo = this.ammo;
    this.ammo = 0;
    return tempAmmo * this.baseDamage;
  }
 
  getType(): string {
    if (this instanceof F16) {
      return 'F16';
    } else {
      return 'F35';
    }
  }

  getStatus(): string {
    return `Type ${this.name}, Ammo: ${this.ammo}, Base damage: ${this.baseDamage}, All damage: ${this.ammo * this.baseDamage}`;
  }

  isPriority(): boolean {
    return this.getType() === 'F35';
  }

  getAmmoNeeded(): number {
    return this.maxAmmo - this.ammo;
  }
}
