//JS GLOBALNE METODE//

//Globalne metode mozemo primeniti na bilo koji tip podataka:

//Pomenucemo najpoznatije globalne metode:

//1. Number()
//2.parseFloat()
//3.parseInt()

//1. Number() vraca broj dobijen konvertovanjem elementa

console.log(Number("string")); //NaN
console.log(Number("7")); //7
console.log(Number("7 55")); //NaN
console.log(Number("  7  ")); //7

console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number([1, 2])); //NaN
console.log(Number([])); //0

//2.parseFloat()-metoda vraca realan broj sa decimalnim zapisom
console.log(parseFloat("string")); //NaN
console.log(parseFloat("7")); //7
console.log(parseFloat("7.55")); //7.55
console.log(parseFloat("  7  ")); //7
console.log(parseFloat("  7  55 ")); //7
console.log(parseFloat("   ddbjdb 7  55 ")); //NaN
console.log(parseFloat(" 3jjcjmnd 7  55 ")); //3
console.log(parseFloat(true)); //NaN
console.log(parseFloat(false)); //NaN
console.log(parseFloat([1, 2])); //1
console.log(parseFloat([])); //NaN
console.log(parseFloat({})); //NaN

//3.parseInt()-vraca ceo broj
console.log(parseInt("string")); //NaN
console.log(parseInt("7")); //7
console.log(parseInt("7.55")); //7;
console.log(parseInt("7.95")); //7;
console.log(parseInt("  9  ")); //7
console.log(parseInt("  4  55 ")); //7
console.log(parseInt("   ddbjdb 7  55 ")); //NaN
console.log(parseInt(" 3jjcjmnd 7  55 ")); //3
console.log(parseInt(true)); //NaN
console.log(parseInt(false)); //NaN
console.log(parseInt([1, 2])); //1
console.log(parseInt([])); //NaN
console.log(parseInt({})); //NaN

//napraviti funkciju koja vraca
//a) km u m
//b)m u km
//c) inch u cm

//a)

function kmToM(kilometri) {
  let metar = kilometar * 1000;
  return metar;
}
console.log(kmToM(1.5));
