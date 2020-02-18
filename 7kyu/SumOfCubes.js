// function sumCubes(num) {
//   let sum = 0;
//   for (let index = 0; index < num; index++) {
//     sum += Math.pow(index + 1, 3);
//   }

//   return sum;
// }

// recursion, baby
function sumCubes(num) {
  if (num === 1) {
    // base case - will return on the very bottom (or top on the stack)
    return num;
  }
  return num ** 3 + sumCubes(num - 1);
}

console.log(sumCubes(7));
// console.log(sumCubes(1));
/* 

Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples:

sumCubes(2) // 9
// sum of the cubes of 1 and 2 is 1 + 8


*/
