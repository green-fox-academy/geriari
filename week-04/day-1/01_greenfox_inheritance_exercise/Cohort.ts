import { Person } from './Person';
import { Student } from './Student';
import { Mentor } from './Mentor';

export class Cohort {
  protected name: string;
  protected students: Student[] = [];
  protected mentors: Mentor[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addMentor(mentor: Mentor): void {
    this.mentors.push(mentor);
  }

  info(): void {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
    
  }
}
