//OPERATORI U JS
//POSTOJI 6 VRSTA OPERATORA
//1.Aritmeticki
//2.Operatori dodele vrednosti
//3. String
//4.Operatori poredjenja
//5.Logicki
//6.Tipovni(Type)

//1.Aritmeticki

// + sabiranje

console.log(10 + 15);

//- oduzimanje
console.log(10 - 15);

//* mnozenje
console.log(10 * 15);

//stepenovanje
console.log(2 ** 3);

//  / deljenje
console.log(8 / 2);
//%  Modul(ostatak pri deljenju)
console.log(6 % 5);

//parni brojevi:
// x % 2 =0
//neparni brojevi
// x % 2!=0

//++ increment
x = 5;
x++;
console.log(x);

//-- decrement
y = 10;
y--;
console.log(y);

//2.operatori dodele vrednosti

//= dodeljivanje vrednosti promenljivoj
a = 5;

//+=dodavanje nove v rednosti na postojacu

a += 5;
console.log(a);

//-=smanjenje nove v rednosti na postojacu

a -= 7;
console.log(a);

//*= mnozenje nove vrednosti

a *= 3;
console.log(a);

//  /= deljenje
a /= 2;
console.log(a);

// %= ostatak pri deljenju

a %= 2;
console.log(a);

//  **=stepenovanje

a **= 3;
console.log(a);

//3.string

//pored osnovne namene za sabiranje brojeva + sluzi za spajanje stringova

console.log(4 + 4);
console.log("Dobar " + "dan");

//sabiranje broja i stringa je string
console.log(5 + "25");

console.log(25 - "15");

console.log(5 * "5");

//dobijamo naN
console.log(5 - "string");
console.log(5 * "string");

//naN je broj cija vrednost nije korektna
