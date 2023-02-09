import Client from "./Client"
import Item from "./Item";

class Order {
  private _client: Client;
  private _items : Item[];
  private _paymentMethod: 'card' | 'cash';
  private _discount?: number;

  constructor(
    client: Client, 
    items: Item[], 
    paymentMethod: 'card' | 'cash', 
    discount: number | undefined
  ) {
    this._client = client
    this._items = items
    this._paymentMethod = paymentMethod
    this._discount = discount
  }
}