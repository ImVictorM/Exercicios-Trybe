interface Dog {
  _name: string,
  _breed: string,
  _age: number,
  bark(): string
}

class Dog {
  constructor(name: string, breed: string, age: number) {
    this._name = name;
    this._breed = breed;
    this._age = age;
  };
  bark(): string {
    return `${this._name} says: woof woof!!`
  }
}

const roger = new Dog('Roger', 'Airedale Terrier', 7);
console.log(roger.bark());
