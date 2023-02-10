export default class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate; 
  }

  get name() {
    return this._name;
  };

  get birthDate() {
    return this._birthDate;
  };

  set name(updatedName: string) {
    if (updatedName.length < 2) {
      throw new Error('"name" must be greater than 3');
    }
    this._name = updatedName;
  };

  set birthDate(updatedBirthDate: Date) {
    const now = new Date();
    const birthDateIsValid = updatedBirthDate < now;
    const age =  now.getFullYear() - updatedBirthDate.getFullYear();
    if (!birthDateIsValid || age > 120) {
      throw new Error('Invalid bith date');
    }
    this._birthDate = updatedBirthDate;
  };
}

// testes
const date = new Date('2005-05-10');
const person1 = new Person('jorge Henrique', date);
const person2 = new Person('Roberta Suarez', date);

person1.name = 'jão';
person1.birthDate = new Date('2021-05-10');
person2.name = 'robertinha'
person2.birthDate = new Date('2021-05-10');

// console.log(person1.birthDate);
// console.log(person1.name);
// console.log(person2.birthDate);
// console.log(person2.name);

