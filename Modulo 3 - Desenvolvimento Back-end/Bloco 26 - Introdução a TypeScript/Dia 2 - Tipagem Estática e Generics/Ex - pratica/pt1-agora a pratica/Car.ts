interface Car {
  brand: string,
  color: string,
  doors: number,
  honk(): void,
  turnOff(): void,
  speedUp(): void,
  speedDown(): void,
  stop(): void,
  turn(direction:string): void,
}

class Car {
  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }
  honk(): void {
    console.log('BEEP BEEP!!');
  }
  turnOff(): void {
    console.log('Car status: OFF');
  }
  speedUp(): void {
    console.log('Car status: Speeding up...');
  }
  speedDown(): void {
    console.log('Car status: Slowing down...');
  }
  stop(): void {
    console.log('Car status: Stopped');
  }
  turn(direction: string): void {
    console.log(`Turning ${direction}`);
  }
};