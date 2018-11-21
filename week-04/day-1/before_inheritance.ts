class Person {
  name: string;
  age: number;
  gender: string;
  
  introduce(): void {
    console.log(`Hi, I am ${this.name}, a ${this.age} year old ${this.gender}.`);
  }

  getGoal(): void {
    console.log('My goal is: Live for the moment!');
  }

  constructor (name = 'Jane Doe', age = 30, gender = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Student {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number = 0;
  
  introduce(): void {
    console.log(`Hi, I am ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  getGoal(): void {
    console.log('Be a junior software developer.');
  }

  skipDays(numberOfDays): void {
    this.skippedDays += numberOfDays;
  }

  constructor (name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'The School of Life') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
  }
}

class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string;
  
  introduce(): void {
    console.log(`Hi, I am ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }

  getGoal(): void {
    console.log('Educate brilliant junior software developers.');
  }

  constructor (name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }
}

class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number = 0;
  
  introduce(): void {
    console.log(`Hi, I am ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  getGoal(): void {
    console.log('Hire brilliant junior software developers.');
  }

  hire(): void {
    this.hiredStudents ++;
  }

  constructor (name = 'Jane Doe', age = 30, gender = 'female', company = 'Google') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
  }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}
