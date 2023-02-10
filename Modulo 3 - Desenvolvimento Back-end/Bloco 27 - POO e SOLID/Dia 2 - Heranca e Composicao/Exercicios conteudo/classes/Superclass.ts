export default class Superclass {
  public isSuper?: boolean = true;

  constructor(isSuper?: boolean) {
    if (isSuper !== undefined) {
      this.isSuper = isSuper;
    };
  }
  
  public sayHello(): void {
    console.log('Olá, mundo!');
  };
};

