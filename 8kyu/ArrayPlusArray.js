function arrayPlusArray(arr1, arr2) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr1.reduce(reducer) + arr2.reduce(reducer); //something went wrong
}

function arrayPlusArray2(arr1, arr2) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr1.concat(arr2).reduce(reducer);
}

function arrayPlusArray3(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}
