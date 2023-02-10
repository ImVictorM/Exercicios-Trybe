import Person from "./Person";

class student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(
    name: string,
    birthDate: Date,
  ) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._examsGrades = [];
    this._assignmentsGrades = [];
  };

  get enrollment() {
    return this._enrollment;
  };

  set enrollment(value: string) {
    if (value.length < 15) {
      throw new Error('Enrollment must be greater or equal to 16 characters');
    }
    this._enrollment = value;
  };

  get assignmentsGrades() {
    return this._assignmentsGrades;
  };

  set assignmentsGrades(value: number[]) {
    if (value.length > 1) {
      throw new Error('Assignments must be lower than or equal to 2');
    }
    this._assignmentsGrades = value;
  };

  get examsGrades() {
    return this._examsGrades;
  };

  set examsGrades(value: number[]) {
    if (value.length > 3) {
      throw new Error('Exams must be lower than or equal to 4');
    }
    this._examsGrades = value;
  };

  public sumGrades(): number {
    const total = this._examsGrades.reduce((acc, curr) => acc += curr);
    return total;
  }

  public sumAverageGrade(): number {
    const testsSum = this.sumGrades();
    const avg = testsSum / this._examsGrades.length;
    return avg;
  }

  private generateEnrollment(): string {
    let enrollment = '';
    const CHARACTERS = 'qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM';
    for (let index = 0; enrollment.length <= 15; index += 1) {
      var character = CHARACTERS[Math.floor(Math.random()*CHARACTERS.length)];
      enrollment += character
    }
    return enrollment;
  }
}

// testes
const student1 = new student('student 1', new Date('2001-04-04'));
const student2 = new student('student 2', new Date('2005-04-04'));
const student3 = new student('student 3', new Date('2002-04-04'));
const student4 = new student('student 4', new Date('2007-04-04'));
const student5 = new student('student 5', new Date('2004-04-04'));

console.log(student1.enrollment);
console.log(student2.birthDate);
console.log(student3.assignmentsGrades);
console.log(student4.examsGrades);
console.log(student5.name);

// error cases
// console.log(student1.enrollment = 'a');
// console.log(student1.enrollment = '12345678912345678');
// console.log(student3.assignmentsGrades = [2, 4, 6]);
// console.log(student4.examsGrades = [1, 4, 5, 6, 7]);
// console.log(student5.name = 'a');

