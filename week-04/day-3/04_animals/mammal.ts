import { Animal } from "./animal";

export class Mammal extends Animal {
  constructor(name: string, age?: number) {
    super(name, age);
  }

  breed(): string {
    return 'pushing miniature versions out';
  }
}
