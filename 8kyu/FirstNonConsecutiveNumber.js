function firstNonConsecutive(arr) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index + 1] === undefined) return null;
    // because of arr[index + 1] I have to check for undefined above
    // best solution does not have to do it due to not ever going further than last index
    if (arr[index + 1] - arr[index] !== 1) {
      return arr[index + 1];
    }
  }
  return null;
}

// way more succinct than mine
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}

/* 
Your task is to find the first element of an array that is not consecutive.

  E.g.If we have an array[1, 2, 3, 4, 6, 7, 8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers.The numbers will also all be unique and in ascending order.The numbers could be positive or negative and the first non - consecutive could be either too!
*/

const first = firstNonConsecutive([0, 1, 4]);

console.log("");
console.log("first", first);
