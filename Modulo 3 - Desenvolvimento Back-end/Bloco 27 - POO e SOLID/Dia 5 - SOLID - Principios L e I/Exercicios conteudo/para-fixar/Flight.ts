import Passenger from './Passenger';
import ShippedItem from './ShippedItem';

export default class Flight {
  constructor(public num:number, public payload:(Passenger | ShippedItem)[]) { }

  Add(newPayload:Passenger | ShippedItem): void {
    this.payload.push(newPayload); 
  }

  Remove(removedPayload: Passenger | ShippedItem): void {
    const index = this.payload.indexOf(removedPayload, 0);
    if (index > -1) {
      this.payload.splice(index, 1);
    }
  }
}
