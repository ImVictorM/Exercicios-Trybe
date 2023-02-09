class tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string | null = null;

  constructor(
    brand: string, 
    size: number, 
    resolution: string, 
    connections: string[]
  ) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  public turnOn = () => {
    console.log(this._brand, this._size, this._resolution, this._connections);
  }

  public get connectedTo(): string | null {
    return this._connectedTo;
  }

  public set connectedTo(value: string | null) {
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
};

const myTv = new tv('ASUS', 32, 'Full HD', ['HDMI']);
myTv.turnOn();
console.log(myTv.connectedTo);
myTv.connectedTo = 'HDMI';
console.log(myTv.connectedTo);
myTv.connectedTo = 'Bluetooth';
console.log(myTv.connectedTo);
