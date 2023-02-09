class tv {
  private brand: string;
  private size: number;
  private resolution: string;
  private connections: string[];
  private connectedTo: string | null = null;

  constructor(
    brand: string, 
    size: number, 
    resolution: string, 
    connections: string[]
  ) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  public turnOn = () => {
    console.log(this.brand, this.size, this.resolution, this.connections);
  }
};

const myTv = new tv('ASUS', 32, 'Full HD', ['HDMI']);
myTv.turnOn();
