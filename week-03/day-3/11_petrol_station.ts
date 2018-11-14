// Create a Station and a Car classes
// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

class Station {
  stationID: number;
  gasAmount: number;

  constructor(stationID: number, gasAmount: number) {
    this.stationID = stationID;
    this.gasAmount = gasAmount;
  }

  refill(car: Car) {
    this.gasAmount -= (car.capacity - car.carGasAmount);
    car.carGasAmount = car.capacity;
  }
}

class Car {
  licensePlate: string;
  carGasAmount: number;
  capacity: number;

  constructor(licensePlate: string, carGasAmount: number, capacity: number) {
    this.licensePlate = licensePlate;
    this.carGasAmount = carGasAmount;
    this.capacity = capacity;
  }
}

const OMV115 = new Station(115, 1000);
const myCar = new Car('NNX-075', 25, 50);

console.log(`Gas amount of station ${OMV115.stationID} before refill: ${OMV115.gasAmount}.`);
console.log(`Gas amount of car ${myCar.licensePlate} before refill: ${myCar.carGasAmount}.`);

OMV115.refill(myCar);

console.log(`Gas amount of station ${OMV115.stationID} after refill: ${OMV115.gasAmount}.`);
console.log(`Gas amount of car ${myCar.licensePlate} after refill: ${myCar.carGasAmount}.`);
