function pattern(n) {
  let output = "";

  for (let index = 0; index < n; index++) {
    for (let i = 0; i <= index; i++) {
      output += index + 1;
    }
    if (index === n - 1) break;
    output += "\n";
  }

  return output;
}

console.log(pattern(4));

/* 
  declare variable 
  loop n times
    in each loop concatenate a row containing n numbers with n being number of the current row
    each row has to end with \n
    in each loop create another loop with index being the end of the loop 

*/

/* 
###Task: You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
####Rules/Note:

If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
###Pattern:

1
22
333
....
.....
nnnnnn
*/
