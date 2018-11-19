import { Person } from './Person';

export class Mentor extends Person {
   protected level: string;

  constructor (name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }

  introduce(): void {
    console.log(`Hi, I am ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }

  getGoal(): void {
    console.log('Educate brilliant junior software developers.');
  }
}
