import { Vehicle } from "./vehicle";
import { Flyable } from "./flyable";

export class Helicopter extends Vehicle implements Flyable  {
  land() {
    console.log('Hello, szia!');
  }

  fly() {
    console.log('Mi van, tesó?');
  }

  takeOff() {
    console.log('...szkivan ezekkel a feladatokkal.');
  }
}
