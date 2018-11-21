import { StringedInstrument } from './stringed_instrument';

export class BassGuitar extends StringedInstrument {
  constructor(numOfStr: number = 4) {
    super();
    super.name = 'Bass Guitar';
    super.numberOfStrings = numOfStr;
  }

  sound(): string {
    return 'Duum - duum - duum';
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings} stringed instrument that goes ${this.sound()}.`);
  }

}