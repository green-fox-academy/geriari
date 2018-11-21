import { Animal } from "./animal";
import { Flyable } from "../05_flyable/flyable";

export class Bird extends Animal implements Flyable{
  constructor(name: string, age?: number) {
    super(name, age);
  }

  breed(): string {
    return 'laying eggs';
  }

  land() {
    console.log(`${this.constructor.name} has landed successfully.`);
  }

  fly() {
    console.log(`${this.constructor.name} is flying.`);
  }

  takeOff() {
    console.log(`${this.constructor.name} has taken off succesfully`);
  }
}