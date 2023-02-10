import MyInterface from "./MyInterface";

class MyClass implements MyInterface {
  constructor(
    public myNumber: number,
  ) {}

  myFunc(myParam: number): string {
    const sum = myParam + this.myNumber;
    return `Soma total = ${sum}`;
  }
}

const myClass = new MyClass(10);

console.log(myClass.myNumber);
console.log(myClass.myFunc(2));
