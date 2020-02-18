function infected(s) {
  let total = 0;
  let infected = 0;

  const splitted = s.split("X");
  splitted.forEach(el => {
    if (el.includes("1")) infected += el.length;
    total += el.length;
  });

  if (!total) return 0;
  const percentage = (100 * infected) / total;
  return percentage;
}

console.log(infected("XXXXX"));

/* 

start: map1 = "01000000X000X011X0X"
end:   map1 = "11111111X000X111X0X"
total = 15
infected = 11
percentage = 100*11/15 = 73.33333333333333

*/
