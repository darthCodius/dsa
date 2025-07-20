function pattern4(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j + i >= n - 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    console.log(row);
  }
}

pattern4(5);
