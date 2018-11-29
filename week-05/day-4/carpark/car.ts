import { readFromFile, writeToFile, appendToFile } from './fileio';

export class Car {
  private licensePlate: string;
  private manufactureYear: number;
  private hasParkingTicket: number;
  
  constructor(licensePlate: string, manufactureYear: number, hasParkingTicket: number) {
    this.licensePlate = licensePlate;
    this.manufactureYear = manufactureYear;
    this.hasParkingTicket = hasParkingTicket;
  }

  getLicensePlate() {
    return this.licensePlate;
  }

  getManufactureYear() {
    return this.manufactureYear;
  }

  getHasParkingTicket() {
    return this.hasParkingTicket;
  }
}
