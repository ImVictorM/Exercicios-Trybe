interface Flight {
  _origin: string,
  _destination: string,
  _arrival: Date,
  _departure: Date,
}

class Flight {
  constructor(
    origin: string, 
    destination: string, 
    arrival: Date, 
    departure: Date
  ) {
    this._origin = origin;
    this._destination = destination;
    this._arrival = arrival;
    this._departure = departure;
  }
}
