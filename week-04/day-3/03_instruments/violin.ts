import { StringedInstrument } from './stringed_instrument';

export class Violin extends StringedInstrument {
  constructor(numOfStr: number = 4) {
    super();
    super.name = 'Violin';
    super.numberOfStrings = numOfStr;
  }

  sound(): string {
    return 'Screech';
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings} stringed instrument that goes ${this.sound()}.`);
  }
}