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

const date = new Date('2005-05-10');
const person = new Person('jorge henrique', date);

person.name = 'jão';
person.birthDate = new Date('2021-05-10');

console.log(person.birthDate);
console.log(person.name);
