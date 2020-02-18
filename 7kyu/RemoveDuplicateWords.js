function removeDuplicateWords(s) {
  const splittedOnSpace = s.split(" ");
  const noDuplicateWordsSet = new Set(splittedOnSpace);
  const noDuplicateWordsArray = Array.from(noDuplicateWordsSet);
  const nodDuplicateWordsString = noDuplicateWordsArray.join(" ");
  return nodDuplicateWordsString;
}

// clever but not very readable
// const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

/* 
Your task is to remove all duplicate words from a string, 
leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/
