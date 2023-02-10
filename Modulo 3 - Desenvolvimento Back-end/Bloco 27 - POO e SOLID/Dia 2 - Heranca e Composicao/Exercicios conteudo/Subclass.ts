import Superclass from "./Superclass";

class Subclass extends Superclass {
  constructor() {
    super(false);
  }
};
  


function myFunc(superclass: Superclass): void {
  superclass.sayHello();
  superclass.isSuper ? console.log('Super!') : console.log('Sub!');
}

const superclass = new Superclass();
const subclass = new Subclass();

myFunc(superclass);
myFunc(subclass);
