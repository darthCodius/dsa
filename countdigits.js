function countDigits(num) {
  if (num == 0) return 1;
  if (num < 0) num = Math.abs(num);
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count = count + 1;
  }
  return count;
}

console.log(countDigits(0));
console.log(countDigits(231));
console.log(countDigits(-92112));
