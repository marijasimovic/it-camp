const br1 = +prompt("unesite prvi broj");
const br2 = +prompt("unesite drugi broj");
if (isNaN(br1) || isNaN(br2)) {
  console.log("unesite korektne brojeve");
} else if (br1 > br2) {
  console.log("prvi broj je veci");
} else if (br2 > br1) {
  console.log("drugi broj je veci");
} else if (br1 === br2) {
  console.log("uneli ste iste brojeve");
}

switch (new Date().getDay()) {
  case 0:
  case 6:
    console.log("vikend");
    break;

  default: {
    console.log("radni dan");
  }
}
let n = +prompt("unesite broj");
let p = -1;
let s = 0;
for (i = 0; i < n; i += 5) {
  s += i;
  p += 1;
}
console.log(s);
console.log(p);
