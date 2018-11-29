import { CarPark } from './carpark';
import { Car } from './car';
import { appendToFile, readFromFile, writeToFile } from './fileio';

let andrassyGarage = new CarPark();

andrassyGarage.addCarToFile(new Car('NNX-075', 2012, 1), 'cars.csv');

andrassyGarage.removeCar('FUN-432', 'cars.csv');
