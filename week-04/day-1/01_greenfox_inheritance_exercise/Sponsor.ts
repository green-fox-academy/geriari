import { Person } from './Person';

export class Sponsor extends Person {
  protected company: string;
  protected hiredStudents: number = 0;

  constructor (name = 'Jane Doe', age = 30, gender = 'female', company = 'Google') {
    super(name, age, gender);
    this.company = company;
  }

  introduce(): void {
    console.log(`Hi, I am ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  getGoal(): void {
    console.log('Hire brilliant junior software developers.');
  }

  hire(): void {
    this.hiredStudents ++;
  }
}
