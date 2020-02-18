function createPhoneNumber(numbers) {
  // divide array into three parts depending on the given pattern
  // interpolate those parts into a string
  const divide = (array, start, end) => array.slice(start, end).join("");

  const firstPart = divide(numbers, 0, 3);
  const secondPart = divide(numbers, 3, 6);
  const thirdPart = divide(numbers, 6);
  return `(${firstPart}) ${secondPart}-${thirdPart}`;
}

const number = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log("number", number);

/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!


*/
