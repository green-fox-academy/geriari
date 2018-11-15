import { Pirate } from './pirate_class';

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
