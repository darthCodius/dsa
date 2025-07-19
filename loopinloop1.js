function loopinloop1() {
  for (let i = 0; i < 3; i++) {
    let str = "";
    for (let j = 0; j < 5; j++) {
      str = str + (j + 1);
    }
    console.log(str);
  }
}

loopinloop1();
