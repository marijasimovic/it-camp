let broj2 = +prompt("unesite prvi broj");
let broj3 = +prompt("unesite drugi broj");
if (isNaN(broj2) || isNaN(broj3)) {
  console.log("niste uneli vrednosti");
} else if (broj2 > broj3) {
  while (broj2 <= broj3) {
    console.log(broj2);
    broj2++;
  }
} else if (broj2 > broj1) {
  while (broj3 <= broj2) {
    console.log(broj3);
    broj3++;
  }
} else {
  console.log("uneli ste iste brojeve");
}
