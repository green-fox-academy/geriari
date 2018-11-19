import { Person } from './Person';

export class Student extends Person {
  protected previousOrganization: string;
  protected skippedDays: number = 0;
  

  constructor (name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'The School of Life') {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
  }

  introduce(): void {
    console.log(`Hi, I am ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  getGoal(): void {
    console.log('Be a junior software developer.');
  }

  skipDays(numberOfDays): void {
    this.skippedDays += numberOfDays;
  }
}
