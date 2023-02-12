import Employee from "./interfaces/Employee";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Person implements Employee {
  private _registration: string;
  private _admissionDate: Date;
  private _subject: Subject;
  private _salary: number;

  constructor(
    name: string,
    birthDate: Date,
    subject: Subject,
    salary: number
  ) {
    super(name, birthDate);
    this._subject = subject;
    this.subject = this._subject;
    this._salary = salary;
    this.salary = this._salary;
    this._registration = this.generateRegistration();
    this._admissionDate = new Date();
  };

  get registration() { return this._registration; };
  get admissionDate() { return this._admissionDate; };
  get subject() { return this._subject; };
  get salary() { return this._salary; };

  set subject(newSubject: Subject) {
    this._subject = newSubject;
  };
  set salary(value: number) {
    if (value < 0) {
      throw new Error('"salary" can\'t be negative');
    }
    this._salary = value;
  };
  set admissionDate(value: Date) {
    const now = new Date();
    if (value > now) {
      throw new Error('"admission date" must be a valid date');
    }
    this._admissionDate = value;
  };
  set registration(value: string) {
    if (value.toString().length < 16) {
      throw new Error('"Registration" characteres must be greater or equal to 16');
    };
    this._registration = value;
  };

  public generateRegistration(): string {
    let registration = '';
    const numbers = '1234567890';
    for (let index = 0; registration.length <= 15; index += 1) {
      const number = numbers[Math.floor(Math.random()*numbers.length)];
      registration += number
    };
    return registration;
  };
}

// testes

// const mathSub = new Subject('math');
// const historySub = new Subject('history');
// const philosophySub = new Subject('philosofy');

// const teacher1 = new Teacher('Robert', new Date('1990-04-23'), mathSub, 1200);
// const teacher2 = new Teacher('Maria', new Date('1999-04-22'), historySub, 1700);
// const teacher3 = new Teacher('Lambo', new Date('2020-04-23'), philosophySub, 10000);

// console.log(teacher1.salary = -1200);
// console.log(teacher2.admissionDate = new Date('2030-04-04'));
// console.log(teacher3.registration = '123456789012345');