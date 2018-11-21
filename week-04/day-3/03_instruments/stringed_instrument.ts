import { Instrument } from './instrument';

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;
  abstract sound();
}
