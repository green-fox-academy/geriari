import { Reservation } from './reservation';

let reservation = new Reservation();

for (let i: number = 0; i < 10; i++) {
  console.log(`Booking# ${reservation.getCodeBooking()} for ${reservation.getDowBooking()}`);
}