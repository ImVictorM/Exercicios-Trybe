import Company from './Company';
import Flight from './Flight';
import ShippedItem from './ShippedItem';
import Passenger from './Passenger';

export default class ShippingCompany extends Company {
  AddToFlight(flightNum:number, item:ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Add(item);
    }
  }
  RemoveToFlight(flightNum:number, item:ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) {
      currentFlight.Remove(item);
    }
  }
}
