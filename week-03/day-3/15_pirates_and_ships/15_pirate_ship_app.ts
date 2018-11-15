import { Pirate } from './pirate_class';
import { Ship } from './ship_class';

const ship = new Ship('Santa Maria');
const captainJack = new Pirate('Jack');
ship.fillShip(captainJack);

ship.crew[0].drinkSomeRum();
ship.crew[0].drinkSomeRum();
ship.crew[0].drinkSomeRum();
ship.crew[0].drinkSomeRum();
ship.crew[0].drinkSomeRum();
ship.crew[0].drinkSomeRum();

ship.printShip();
