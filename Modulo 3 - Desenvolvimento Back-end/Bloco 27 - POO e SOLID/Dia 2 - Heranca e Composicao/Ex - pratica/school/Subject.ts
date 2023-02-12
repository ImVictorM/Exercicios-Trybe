export default class Subject {
  constructor(
    private _name: string,
  ) {}

  get name() {
    return this._name;
  };

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('"name" must be at least 3 characteres long');
    }
    this._name = value;
  }
}

// tests

const mathSub = new Subject('math');
const historySub = new Subject('history');
const philosophySub = new Subject('philosofy');

console.log(mathSub.name);
console.log(historySub.name = 'as');
console.log(philosophySub.name = 'asf');
