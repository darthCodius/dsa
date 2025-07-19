const getIndex = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) return i;
  }
  return -1;
};

console.log(getIndex([21, 32, 2, -2, 1], 2));
console.log(getIndex([11, 5, -12, -32, 14], -32));
