import { StringedInstrument } from './stringed_instrument';

export class ElectricGuitar extends StringedInstrument {
  constructor(numOfStr: number = 6) {
    super();
    super.name = 'Electric Guitar';
    super.numberOfStrings = numOfStr;
  }

  sound(): string {
    return 'Twang';
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings} stringed instrument that goes ${this.sound()}.`);
  }
}
