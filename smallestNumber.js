function smallestNumber(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) smallest = arr[i];
  }
  return smallest;
}

console.log(smallestNumber([-21, -2, 12, 11, 7, 54, 32, 31, 123, 555, 42, 12]));
