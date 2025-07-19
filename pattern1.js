function pattern1() {
  for (let i = 0; i < 6; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
}

pattern1();
