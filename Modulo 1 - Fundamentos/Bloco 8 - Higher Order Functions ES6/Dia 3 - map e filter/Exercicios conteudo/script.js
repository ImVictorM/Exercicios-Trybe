const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const productsObj = products.map((product, index) => {
  return {
    [product]: prices[index]
  }
});

console.log(productsObj);