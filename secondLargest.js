function secondLargest(arr) {
  if (arr.length < 2) return null;
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }
  return {
    firstLargest,
    secondLargest,
  };
}

console.log(secondLargest([-21, -2, 12, 7, 54, 32, , 42, 12]));
console.log(secondLargest([-21]));
console.log(secondLargest([]));
