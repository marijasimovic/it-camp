// includes() metoda vraca boolen(true ili false) u zavisnosti da li ase argument nalazi u stringu na kojem se primenljuje metoda ili ne
//opciono,drugi argument predstavlja poziciju od koje cemo traziti dati argument u stringu

const recenica = "dobar dan!";
console.log(recenica.includes("vece"));
console.log(recenica.includes("dan"));

//match() nam vraca niz.u zavisnosti od toga u kom obliku smo poslali argument,dobijamo razlicite nizove
const recenica2 = "na koliko ste casova bili danas";
console.log(recenica2.match("a")); //niz sa informacijama vezano za argument i string
console.log(recenica2.match(/a/g)); //niz sa elementima iste vrednosti
console.log(recenica2.match(/adfv/g)); //ako posaljemo argument koji se ne nalazi u stringu dobijamo null

//ponasanje match
// console.log("ko osvaja je rec koju trazimo".match(/ko osvaja/g));
// console.log(
//   "ko osvaja je rec koju trazimo.Dakle,ko osvaja".match(/ko osvaja/g)
// );
// console.log("dobro vece".match(/ko osvaja/g));

const zadatak = (recenica) => {
  if (!recenica.match(/ko osvaja/g)) {
    return "nismo pronaasli";
  } else if (recenica.match(/ko osvaja/g).length === 1) {
    return recenica.indexOf("ko osvaja");
  } else {
    return `pozicije pojavljivanja ${recenica.indexOf(
      "ko osvaja"
    )};\n pozicije pojavljivanja2 ${recenica.lastIndexOf("ko osvaja")} `;
  }
};

console.log(zadatak("ko osvaja ligu sampiona"));
console.log(zadatak("Ko osvaja ligu sampiona"));
