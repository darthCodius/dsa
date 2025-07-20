function isPalindrome(num) {
  if (num < 0) return false;
  if (num === 1 || num === 0) return true;
  let rev = 0;
  let n = num;
  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  return rev === num;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(1234321));
