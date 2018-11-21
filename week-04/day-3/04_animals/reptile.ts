import { Animal } from "./animal";

export class Reptile extends Animal {
  constructor(name: string, age?: number) {
    super(name, age);
  }

  breed(): string {
    return 'laying eggs';
  }
}
