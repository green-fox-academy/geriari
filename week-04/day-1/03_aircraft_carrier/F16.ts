import { Aircraft } from './Aircraft';

export class F16 extends Aircraft {
  constructor(name) {
    super(name);
    this.maxAmmo = 8;
    this.baseDamage = 30;
  }
}
