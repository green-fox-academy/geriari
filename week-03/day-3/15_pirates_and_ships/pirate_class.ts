export class Pirate {
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
