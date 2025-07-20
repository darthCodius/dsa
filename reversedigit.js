function reverseDigit(num) {
  let rev = 0;
  let numCopy = num;
  num = Math.abs(num);
  while (num > 0) {
    let last = num % 10;
    rev = 10 * rev + last;
    num = Math.floor(num / 10);
  }
  return numCopy < 0 ? -rev : rev;
}

console.log(reverseDigit(1212));
console.log(reverseDigit(-1212));
