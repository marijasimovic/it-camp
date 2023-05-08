// Domaci zadaci:
// 1. Napraviti funkciju koja vraca zbir kvadrata dva broja. Ako se izostavi drugi argument, funkcija ga racuna kao 0.

// 2. Napraviti funkciju koja vraca aritmeticku sredinu 3 broja. Sa defaultnim vrednostima.

// 3. Napraviti funkciju povrsina koja uzima dve vrednosti.
// Ako su te dve vrednosti jednake da vraca povrsinu kvadrata uz odredjenu poruku,
// dok ako su razlicite vrednosti da vraca povrsinu pravougaonika uz odredjenu poruku.

const broj1 = prompt("Unesite prvi broj: ");
const broj2 = prompt("Unesite drugi broj: ");
const broj3 = prompt("Unesite treci broj: ");
function zbir1(a, b) {
  if (a == null) {
    a = 0;
  }
  if (b == null) {
    b = 0;
  }
  return a ** 2 + b ** 2;
}

function aSredina(prvibr = 2, drugibr = 3, trecibr = 4) {
  return (prvibr + drugibr + trecibr) / 3;
}
console.log(aSredina(broj1, broj2, broj3));

function povrsina(a, b) {
  if (a === b) {
    return a ** 2;
  }
  if (a != b) {
    return a * b;
  }
}
