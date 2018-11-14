// Create a Pirate class. While you can add other fields and methods, you must have these methods:-

// drinkSomeRum() - intoxicates the Pirate some
// howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
// 0 to 4 times, "Pour me anudder!"
// else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
// If you manage to get this far, then you can try to do the following. - die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in he's dead. - brawl(x) - where pirate fights another pirate (if that other pirate is alive) and there's a 1/3 chance, 1 dies, the other dies or they both pass out.

// And... if you get that far...

// Add a parrot.

class Pirate {
  name: string;
  numberOfDrinks: number = 0;
  alive: boolean = true;

  constructor(name: string) {
    this.name = name;
  }

  drinkSomeRum(): string {
    if (this.alive) {
      this.numberOfDrinks++;
      return 'Thanks, mate!'
    } else {
      return 'He\'s dead.';
    }
  }

  howsItGoingMate(): string {
    if (!this.alive) {
      return 'He\'s dead.';
    } else if (this.numberOfDrinks < 5) {
      return 'Pour me anudder!';
    } else {
      return 'Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?';
    }
  }

  die(): void {
    this.alive = false;
  }

  brawl(otherPirate: Pirate): void {
    if (otherPirate.alive && this.alive) {
      const fightResult: number = Math.floor(Math.random() * 3) + 1;
      if (fightResult < 3) {
        otherPirate.alive = false;
      }
      if (fightResult > 1) {
        this.alive = false;
      }
    }
  }
}

const jack = new Pirate('Jack');
const morgan = new Pirate('Morgan');

console.log(jack);
console.log(jack.drinkSomeRum());
jack.drinkSomeRum();
jack.drinkSomeRum();
console.log(jack.howsItGoingMate());
jack.drinkSomeRum();
jack.drinkSomeRum();
console.log(jack.howsItGoingMate());
console.log('--- Before fight ---');
console.log(jack);
console.log(morgan);
jack.brawl(morgan);
console.log('--- After fight ---');
console.log(jack);
console.log(morgan);
