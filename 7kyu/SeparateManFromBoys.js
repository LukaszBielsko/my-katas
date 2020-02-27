function menFromBoys(arr) {
  let evens = [];
  let odds = [];

  arr.forEach(element => {
    element % 2 === 0 ? evens.push(element) : odds.push(element);
  });

  console.log(evens.sort((a, b) => a - b));
  console.log(odds.sort((a, b) => b - a));

  return [...new Set(evens.concat(odds))];
}

console.log(menFromBoys([2222, 43, 95, 90, 122, 37]));
// console.log(menFromBoys([14, 17, 7, 3]));
/* 

  Test.assertSimilar(menFromBoys([2,43,95,90,37]), [2,90,95,43,37]);


let odds;
let even;

check array for ods and even
  push to corresponding array

sort even ascending
sort odds descending

join the array
remove duplicates with set maybe



Return an array/list where Even numbers come first then odds

Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

Array/list size is at least *4*** .

Array/list numbers could be a mixture of positives , negatives .

Have no fear , It is guaranteed that no Zeroes will exists . !alt

Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

*/
