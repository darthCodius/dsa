function pattern5(n) {
  for (let i = 0; i < n; i++) {
    let val = 1;
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + val;
      val = val === 1 ? 0 : 1;
    }
    console.log(row);
  }
}

pattern5(10);
