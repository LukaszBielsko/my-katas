// function diagonalSum(matrix) {
//   let sum = 0;
//   for (let index = 0; index < matrix.length; index++) {
//     sum += matrix[index][index]
//   }
//   return sum;
// }

function diagonalSum(matrix) {
  // current is an element of an array, in our case it's array
  // so we can take out the value of that array[index]
  // clever :)
  return matrix.reduce((acc, current, index) => acc + current[index], 0);
}

let arr = [
  [5, 9, 1, 0],
  [8, 7, 2, 3],
  [1, 4, 1, 9],
  [2, 3, 8, 2]
];
console.log(diagonalSum(arr));

/* 

Given a square matrix (i.e. an array of subarrays), find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on...

Examples
array = [[1, 2],
         [3, 4]]

diagonal sum: 1 + 4 = 5
array = [[5, 9, 1, 0],
         [8, 7, 2, 3],
         [1, 4, 1, 9],
         [2, 3, 8, 2]]

diagonal sum: 5 + 7 + 1 + 2 = 15

*/
