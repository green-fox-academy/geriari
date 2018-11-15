import { Pirate } from './pirate_class';

export class Ship {
  name: string;
  captain: Pirate;
  crew: Pirate[] = [];

  constructor(name: string) {
    this.name = name;
  }

  fillShip(captain: Pirate): void {
    this.captain = captain;
    let numOfPirate: number = Math.floor(Math.random() * 10) + 1;
    for (let i: number = 1; i <= numOfPirate; i++) {
      this.crew.push(new Pirate(i.toString()));
    }
  }
  
  printShip(): void {
    console.log(`Ship name: ${this.name}`);
    console.log(`Captain of this ship: ${this.captain.name}`);
    console.log(`Captain has consumed ${this.captain.numberOfDrinks} units of rum.`);
    if (!this.captain.alive) {
      console.log('He is dead.');
    } else if (this.captain.numberOfDrinks > 4) {
      console.log('He is passed out.');      
    } else console.log('He is alive and kickin\'.');
    let sumConsumedRum: number = 0;
    let sumPassedOut: number = 0;
    let sumAlive: number = 0;
    for (let i: number = 0; i < this.crew.length; i++) {
      sumConsumedRum += this.crew[i].numberOfDrinks;
      if (this.crew[i].numberOfDrinks > 4) {
        sumPassedOut++;
      }
      if (this.crew[i].alive) {
        sumAlive++;
      }
    }
    console.log(`The ship has a crew of ${this.crew.length}.`);
    console.log(`${sumAlive} of them are alive, ${sumPassedOut - this.crew.length + sumAlive} passed out.`);
    console.log(`They consumed ${sumConsumedRum} units of rum altogether.`);
  }

  battle(otherShip: Ship): boolean {
    let thisPoint: number = 0;
    let otherPoint: number = 0;
    for (let i: number = 0; i < this.crew.length; i++) {
      if (this.crew[i].alive) {
        thisPoint++;
      }
    }
    for (let j: number = 0; j < otherShip.crew.length; j++) {
      if (otherShip.crew[j].alive) {
        otherPoint++;
      }
    }
    thisPoint -= this.captain.numberOfDrinks;
    otherPoint -= otherShip.captain.numberOfDrinks;
    return (thisPoint > otherPoint);

  
  }
}
