// Create Student and Teacher classes
// Student
// learn()
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer()

class Student {
  name: string;
  knowledgeLevel: number = 0;
  
  constructor(name: string) {
    this.name = name;
  }

  learn() {
    this.knowledgeLevel++;
  }

  questionTeacher(teacherName: Teacher, question: string): void {
    console.log(teacherName.answer());
  }
}

class Teacher {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  teach(studentName: Student): void {
    studentName.learn();
  }

  answer(): string {
    return 'I don\'t know.';
  }
}

const peti = new Student('Peti');
const laci = new Student('Laci');

const bence = new Teacher('Bence');
const gabor = new Teacher('Gábor');

peti.questionTeacher(bence, 'What is love?');
console.log(peti.knowledgeLevel);
bence.teach(peti);
console.log(peti.knowledgeLevel);
