const addProperty = (obj, key, value) => {
  const newKey = key;
  obj[newKey] = value;
  return obj;
}

const myObj = {
  name: 'Victor',
  lastname: 'Figueiredo',
  birthYear: 2001,
}

console.log(addProperty(myObj, 'age', 21));
