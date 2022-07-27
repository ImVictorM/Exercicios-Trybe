const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];



function flatten(matrix) {
  const matrixToArray = matrix.reduce((array, current) => {
    current.forEach((element) => {
      array.push(element);
    })
    return array;
  }, []);
  return matrixToArray;
}

console.log(flatten(arrays));