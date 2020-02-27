function total(arr) {
  let total = 0;
  arr.forEach((el, index) => (isPrime(index) ? (total += el) : null));
  return total;
}

function isPrime(number) {
  if (number === 1 || number === 0) return false;
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

console.log(total([1, 2, 3, 4]));
console.log(isPrime(0));
