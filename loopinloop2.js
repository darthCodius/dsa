function loopinloop2() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
      console.log(i, j);
    }
  }
}

loopinloop2();
