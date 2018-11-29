import { appendToFile, readFromFile, writeToFile } from './fileio';
import { Car } from './car';
import { writeFile } from 'fs';

export class CarPark {
  cars: Car[] = [];

  addCar(car: Car) {
    this.cars.push(car);
  }

  addCarToFile(car: Car, fileName: string) {
    appendToFile(fileName, `\n${car.getLicensePlate()},${car.getManufactureYear()},${car.getHasParkingTicket()}`);
  }

  removeCar(licensePlate: string, fileName: string) {
    this.cars.forEach((e, i) => {
      if (e.getLicensePlate() === licensePlate) {
        this.cars.splice(i, 1);
      }
    });
    let fileContent = readFromFile(fileName);
    if (fileContent !== null) {
      let tempArray: string[][] = fileContent.split('\n').map(e => {
        return e.split(',');
      });
      tempArray.forEach((e, i) => {
        if (e[0] === licensePlate) {
          tempArray.splice(i, 1);
        }
      });
      let tempString: string = '';
      tempArray.forEach(e => {
        tempString += e[0] + ',' + e[1] + ',' + e[2] + '\n';
      });
      writeToFile(fileName, tempString);
    }
  }
}