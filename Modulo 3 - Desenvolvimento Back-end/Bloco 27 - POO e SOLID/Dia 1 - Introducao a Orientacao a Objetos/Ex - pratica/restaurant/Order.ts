import Client from "./Client"
import Item from "./Item";

export default class Order {
  private _client: Client;
  private _items : Item[];
  private _paymentMethod: 'card' | 'cash';
  public _discount?: 0.1 | 0.2 | 0.3;

  constructor(
    client: Client, 
    items: Item[], 
    paymentMethod: 'card' | 'cash', 
    discount?: 0.1 | 0.2 | 0.3
  ) {
    this._client = client
    this._items = items
    this._paymentMethod = paymentMethod
    this._discount = discount
  }

  get paymentMethod(): 'card' | 'cash' {
    return this._paymentMethod;
  }

  get client(): Client {
    return this._client;
  }

  public total(): number {
    return this._items.reduce((acc, item) => acc += item.price, 0);
  }

  public totalWithDiscount(): number {
    const total = this.total();
    if (this._discount) {
      return total - (total * this._discount);
    }
    throw new Error('You don\'t have a discount');
  }
}
