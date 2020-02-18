function sumOfMinimums(arr) {
  let sum;
  arr.forEach(el => (sum += Math.min(...el)));
  return sum;
}

// return arr.reduce((p, c) => p + Math.min(...c), 0);

/* 
Given an 2D array of size m * n. Your task is to find the sum of minimum value in each row.

For Example:

[
  [1, 2, 3, 4, 5], 
  [5, 6, 7, 8, 9], 
  [20, 21, 34, 56, 100]
]
So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26

Note: You will be always given non-empty array containing Positive values.
*/
