function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) count++;
  }
  return count;
}

console.log(countNegatives([21, 32, 2, -2, 1]));
console.log(countNegatives([11, 5, -12, -32, 14]));
console.log(countNegatives([11, -5, -12, -32, -14]));
console.log(countNegatives([11, 5, 14]));
