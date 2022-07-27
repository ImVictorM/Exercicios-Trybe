function sum (...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(sum(10, 20, 30, 40, 50));
console.log(sum(10, 4));
console.log(sum());
