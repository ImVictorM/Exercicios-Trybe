interface House {
  _owner: string,
  _number: number,
  _city: string,
  _district: string
}

class House {
  constructor(owner: string, number: number, city: string, district: string) {
    this._owner = owner;
    this._number = number;
    this._city = city;
    this._district = district;
  }
};
