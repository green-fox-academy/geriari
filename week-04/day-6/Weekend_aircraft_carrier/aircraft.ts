export abstract class Aircraft {
  protected maxAmmo: number;
  protected baseDamage: number;
  protected currentAmmo: number = 0;

  constructor(maxAmmo: number, baseDamage: number) {
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
  }

  fight(): number {
    const damage: number = this.baseDamage * this.currentAmmo;
    this.currentAmmo = 0;
    return damage;
  }

  refill(ammoToFill: number): number {
    let remainingAmmo: number = 0;
    if (ammoToFill + this.currentAmmo > this.maxAmmo) {
      remainingAmmo = ammoToFill - (this.maxAmmo - this.currentAmmo);
      this.currentAmmo = this.maxAmmo;
    } else {
      this.currentAmmo += ammoToFill;
    }
    return remainingAmmo;
  }

  getType(): string {
    return this.constructor.name; //visszaadja a klassz nevét, amiből van a példány
  }

  getStatus(): string {
    return `Type ${this.getType()}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.baseDamage * this.currentAmmo}`;
  }

  isPriority(): boolean {
    return this.getType() === 'F35';
  }

  getAllDamage(): number {
    return this.baseDamage * this.currentAmmo;
  }
}
