export { };

// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

class Animal {
  name: string;
  hunger: number = 50;
  thirst: number = 50;

  constructor(name: string) {
    this.name = name;
  }

  eat(): void {
    this.hunger--;
  }

  drink(): void {
    this.thirst--;
  }

  play(): void {
    this.hunger++;
    this.thirst++;
  }
}

class Farm {
  name: string;
  inhabitants: Animal[] = [];
  freeslots: number;

  constructor(name: string, freeslots: number) {
    this.freeslots = freeslots;
  }

  breed(animal: Animal): boolean {
    if (this.freeslots > 0) {
      this.inhabitants.push(animal);
      this.freeslots--;
      return true;
    } else {
      console.log('No more free slots');
      return false;
    }
  }

  slaughter(): void {
    let leasthunger = this.inhabitants[0].hunger;
    let index: number = 0;
    for (let i: number = 0; i < this.inhabitants.length; i++) {
      if (this.inhabitants[i].hunger < leasthunger) {
        leasthunger = this.inhabitants[i].hunger;
        index = i;
      }
    }
    this.inhabitants.splice(index, 1);
    this.freeslots++;
  }
}

const farm = new Farm('Illatos út', 6);

farm.breed(new Animal('cica'));
farm.breed(new Animal('kutya'));
farm.breed(new Animal('hörcsög'));
farm.breed(new Animal('görény'));
farm.breed(new Animal('nyuszi'));

farm.inhabitants[1].eat();
farm.inhabitants[2].play();
farm.inhabitants[3].drink();

console.log('Farm inhabitants before slaughter:');
console.log(farm.inhabitants);

farm.slaughter();

console.log('Farm inhabitants after slaughter:');
console.log(farm.inhabitants);
