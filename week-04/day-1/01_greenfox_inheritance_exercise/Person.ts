export class Person {
  protected name: string;
  protected age: number;
  protected gender: string;
  
  constructor (name = 'Jane Doe', age = 30, gender = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce(): void {
    console.log(`Hi, I am ${this.name}, a ${this.age} year old ${this.gender}.`);
  }

  getGoal(): void {
    console.log('My goal is: Live for the moment!');
  }

}
