//Neku poruku u JavaScriptu mozemo napisati na vise nacina:

//1.innerHTML

naslov = document.getElementById("naslov");
naslov.innerHTML = "Prvi nacin";
//2. document.writw- obicno se koristi za testiranje koda

//3.alert()-upozorenje korisniku

alert("jos jedan nacin");

//4. console.log()-prikazivanje nekih informacija u konzoli.Najcesce koricen metod
console.log("poruka u konzoli");

//JavaScript nazivi promenljivih :

// Ime promenljive u JavaSriptu moze poceti:
//1.velika ili mala slova

// 2.$ (dolar)

//3. _(donja crta)

//broj ne moze biti na prvom mestu,ali moze biti sadrzan u nazivu promenljive

//JavaScript je case sensitive- razlkikuje velika i mala slova

// a = 10;
//console.log(A); error
// console.log(a);

//Zapisivanje promenljivih sastavljenih od vise reci:

//vecernji termin- ne moze razmak
vecernji_termin = 19.3; // Underscore
vecernjiTermin = 19.3; //najcesce koriscen - Lower Camel Case
VecernjiTermin = 19.3; //Upper Camel Case

//deklaracija     i     inicijalizacija
//postoje 4 nacina za deklarisanje promenljivih u JavaScriptu

//1.koriscenje var rezervisane reci(keyword).Vise je ranije bila koriscena
var a; //deklarisanje promenljive
a = 10; // inicijalizacija promenljive
//console.log(a);

//kroz jednu liniju koda mozemo izvrsiti deklaraciju i inicijalizaciju
var a = 10;

//2.koriscenjem let rezervisane reci(keyword) promenljive koje su sklone menjanju vrednosti

//let b;//deklarisanje
//b=14;//inicijalizacija
//console.log(a)

//3. koriscenje const rezervisane reci(keyword) na ovaj nacin deklarisemo promenljive koje se ne menjaju

//nije moguca posebna deklaracija i inicijalizacija za promenljive preko const
//const c;
//c=20;
const c = 20;
console.log(c);

//4. koriscenjem nicega
d = 5;
console.log(5);

//varijable(promenljive) u JavaScriptu predstavlja kontejnere za skladistenje vrednosti
