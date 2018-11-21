import { Reservationy } from './reservationy'
import { lstat } from 'fs';

export class Reservation implements Reservationy {
  getDowBooking(): string {
    let daysOfTheWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    return daysOfTheWeek[Math.floor(Math.random() * 7)];
  }
  getCodeBooking(): string {
    let numbersAndLetters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let code: string[] = [];
    for (let i: number = 0; i < 8; i++) {
      code.push(numbersAndLetters[Math.floor(Math.random() * 36)]);
    }
    return code.join('');
  }
}
