import Client from "./Client";
import Item from "./Item";
import Order from "./Order";

const item1 = new Item('batatinhas fritas', 11);
const item2 = new Item('burgão', 33);
const client = new Client('Marcola');
const order = new Order(client, [item1, item2], 'cash', 0.2);

console.log(order.total());
console.log(order.totalWithDiscount());
console.log(order.client.name);
console.log(order.paymentMethod);
