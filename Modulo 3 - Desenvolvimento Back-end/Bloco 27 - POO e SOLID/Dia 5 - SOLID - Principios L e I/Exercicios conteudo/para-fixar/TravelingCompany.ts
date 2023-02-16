import Company from './Company';
import Passenger from './Passenger';

export default class TravelingCompany extends Company {
  AddToFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Add(passenger);
    }
  }

  RemoveFromFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Remove(passenger);
    }
  }
}
