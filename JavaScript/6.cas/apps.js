const br1 = +prompt("unesite prvi broj");
const br2 = +prompt("unesite drugi broj");
if (isNaN(br1) || isNaN(br2)) {
  console.log("uneti brojevi moraju biti ispravni");
} else if (br1 <= 0 || br2 <= 0) {
  console.log("brojevi moraju biti pozitivni");
} else if (br1 === br2) {
  console.log("povrsina kvadrata je" + br1 * br2);
} else if (br1 != br2) {
  console.log("povrsina pravougaonika je " + br1 * br2);
}
const x = +prompt("unesite prvi broj");
const y = +prompt("unesite drugi broj");
switch (y) {
  case 0:
    console.log("deljenje nulom nije moguce");
    break;
  default:
    console.log("kolicnik je " + x / y);
}
