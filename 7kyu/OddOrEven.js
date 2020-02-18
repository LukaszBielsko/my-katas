// function oddOrEven(array) {
//   if (array.length === 0) return "even";
//   const sum = array.reduce((acc, cur) => acc + cur);
//   if (sum % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}

/*
Task:
Given a list of numbers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Example:
odd_or_even([0])          ==  "even"
odd_or_even([0, 1, 4])    ==  "odd"
odd_or_even([0, -1, -5])  ==  "even"

*/

console.log(oddOrEven([0]) === "even");
console.log(oddOrEven([1]) === "odd");
console.log(oddOrEven([]) === "even");

console.log(oddOrEven([0, 1, 5]) === "even");
console.log(oddOrEven([0, 1, 3]) === "even");
console.log(oddOrEven([1023, 1, 2]) === "even");

console.log(oddOrEven([0, -1, -5]) === "even");
console.log(oddOrEven([0, -1, -3]) === "even");
console.log(oddOrEven([-1023, 1, -2]) === "even");

console.log(oddOrEven([0, 1, 2]) === "odd");
console.log(oddOrEven([0, 1, 4]) === "odd");
console.log(oddOrEven([1023, 1, 3]) === "odd");

console.log(oddOrEven([0, -1, 2]) === "odd");
console.log(oddOrEven([0, 1, -4]) === "odd");
console.log(oddOrEven([-1023, -1, 3]) === "odd");
