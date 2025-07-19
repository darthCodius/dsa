function pattern2(n) {
  if (n < 0) return -1;
  for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (i + 1);
    }
    console.log(row);
  }
}

pattern2(5);

pattern2(-5);
