function starpattern1(n) {
  if (n < 0 || typeof n !== "number" || isNaN(n)) return null;
  for (let i = 0; i < n; i++) {
    let star = "";
    for (let j = 0; j < n; j++) {
      star = star + " *";
    }
    console.log(star);
  }
}

starpattern1(5);
