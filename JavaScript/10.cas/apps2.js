let d = +prompt("unesite duzinu");
let s = +prompt("unesite sirinu");
let r = +prompt("unesite rastojanje");

let o = 2 * d + 2 * s + 8 * r;
if (isNaN(d) || isNaN(s) || isNaN(r)) {
  console.log("niste uneli vrednosti");
} else if (90 < d || d > 120 || 45 < s || s > 90 || 2 < r || r > 10) {
  console.log("niste uneli prave brojeve");
} else {
  console.log(o);
}

//osnove o stringovima

const recenica = "necemo matematicke zadatke";
console.log(recenica);
console.log(recenica[0]);

//za izracunavanje duzine stringa se koristi length:
const duzina = recenica.length;
console.log(duzina);
console.log(duzina - 1);
