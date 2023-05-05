let username = "";
while (username.length < 6) {
  username = prompt("unesite ispravan username");
  console.log(username, username.length);
}

//dry

//funkcije predstavljaju deo koda koji ce se izvrsiti samo kad ih pozovemo.
//Koristimo ih da bi nas kod bio reusable(isti kod resava vise problema slicnog tipa)

//funkciju mozemo napraviti na 2 nacina

//1.function keyword
//2.arrow function

function myFunc() {
  //kod unutar funkcije
}

const myFunc2 = () => {
  //kod
};

function greeting(parametar1, parametar2) {
  console.log("zdravo");
}
greeting();

//prilikom definisanja funkcije mozemo joj proslediti parametre koji su joj neophodni za izvrsavanje koda date funkcije
//dok prilikom pozivanja funkcije to sto saljemo funkciji se zovu argumenti

function greeting2(ime) {
  console.log("zdravo" + ime);
}
greeting2("dddd");

//napisati funkciju koja nam vraca zbir 3 i 5

function zbir() {
  const prom1 = 3;
  const prom2 = 5;
  return prom1 + prom2;
  //console.log("nesto");
  const newn = "zdravo";
}

function zbir1(broj1, broj2) {
  return broj1 + broj2;
}
