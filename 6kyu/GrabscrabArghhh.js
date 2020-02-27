function grabscrab(jumble, scrab) {
  let matched = [];

  const jumbledWord = jumble.split("");

  scrab.forEach(scrabWord => {
    let counter = 0;
    const words = scrabWord.split("");
    words.forEach(letter => {
      if (jumbledWord.includes(letter)) {
        counter += 1;
      }
      if (
        jumbledWord.length === counter &&
        jumbledWord.length === words.length
      ) {
        matched.push(words.join(""));
      }
    });
  });

  return matched;
}

console.log(grabscrab("abca", ["abcc", "boboo"]));

// check for  one letter in word
// console.log("word".includes("w"));

// check for two letters in a word
// const word = "some".split("");
// const jumble = "meos".split("");

// word.forEach(letter => {
//   for (let index = 0; index < jumble.length; index++) {
//     if (letter === jumble[index]) {

//     }
//   }
// });

// let counter = 0;
// jumble.forEach(letter => {
//   if (word.includes(letter)) {
//     counter += 1;
//   }
//   if (word.length - 1 === counter) {
//     console.log("match");
//   }
//   console.log(counter);
// });

// grabscrab("some", ["emos"]);
/* 

Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

For example:

grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].

Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

Good luck!
*/
