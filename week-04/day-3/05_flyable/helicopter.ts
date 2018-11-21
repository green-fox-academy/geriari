import { Vehicle } from "./vehicle";
import { Flyable } from "./flyable";

export class Helicopter extends Vehicle implements Flyable  {
  constructor(property1: string, property2: number, property3: number) {
    super();
    super.field1 = property1;
    super.field2 = property2;
    super.field3 = property3;
  }
  
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
