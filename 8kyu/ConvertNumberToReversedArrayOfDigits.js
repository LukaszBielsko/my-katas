function digitize(n) {
  const parsedToString = n.toString();
  const arrayFromString = parsedToString.split("");
  const reversedArray = arrayFromString.reverse();
  const reversedArrayOfNumbers = reversedArray.map(el => parseInt(el));
  return reversedArrayOfNumbers;
}

function digitize2(n) {
  return String(n)
    .split("")
    .reverse()
    .map(Number);
}

console.log(digitize(1234));
console.log(digitize2(1234));
