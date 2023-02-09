interface Car {
  brand: string,
  color: string,
  doors: number,
  honk(): void,
  turnOff(): void,
  speedUp(meters:number): void,
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
  speedUp(meters: number): void {
    console.log(`Car status: Speeding up for ${meters}...`);
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

const gol = new Car('volkswagen', 'silver', 4)

gol.speedUp(590);
gol.speedDown();
gol.turn('left');
gol.speedUp(190);
gol.speedDown();
gol.turn('right');
gol.speedUp(1490);
gol.speedDown();
gol.turn('right');
gol.speedUp(390);
gol.speedDown();
gol.stop();

gol.speedUp(290);
gol.speedDown();
gol.turn('right');
gol.speedUp(2190);
gol.speedDown();
gol.turn('left');
gol.speedUp(390);
gol.speedDown();
gol.turn('right');
gol.speedUp(90);
gol.speedDown();
gol.stop();
