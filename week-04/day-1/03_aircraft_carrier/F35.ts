import { Aircraft } from './Aircraft';

export class F35 extends Aircraft {
  constructor(name) {
    super(name);
    this.maxAmmo = 12;
    this.baseDamage = 50;
  }
}
