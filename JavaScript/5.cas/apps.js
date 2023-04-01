//Za komunikaciju sa korisnikom koristimo promt

//const ime = prompt("unesite vase ime:");

//console.log(ime);

//const godine = prompt("unesite broj godina");
//console.log(godine);
//posto je vrednost dobijena preko prompt metode string,trebamo da string pretvorimo u number

//postoje 2 nacina:

//1.Number(string)

//const godina2 = Number(godine);
//console.log(godina2);
//console.log(typeof godina2);

//2. +string

//const godina3 = +godine;
//console.log(godina3);
//console.log(typeof godina3);

//const visina = +prompt("unesite visinu");
//console.log(visina);

//isNaN ispituje da li je vrednost nekog broja not a number
console.log(isNaN("marija"));

const brojGodina = +prompt("unesite broj vasih godina");
if (isNaN(brojGodina)) {
  console.log("niste uneli broj godina");
} else if (brojGodina < 12 && brojGodina > 0) {
  console.log("vi ste dete");
} else if (brojGodina >= 12 && brojGodina < 18) {
  console.log("maloletni ste");
} else if (brojGodina >= 18 && brojGodina < 40) {
  console.log("punoletni ste");
} else if (brojGodina >= 40) {
  console.log("vi ste zrela osoba");
} else {
  console.log("ne moze biti negativan broj");
}
console.log(5 + "4"); //string
console.log(5 - "4"); //1

//prazan string=0
console.log(Number(""));
