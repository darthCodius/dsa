function largestNumber(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
}

console.log(largestNumber([-21, -2, 12, 11, 7, 54, 32, 31, 123, 555, 42, 12]));
