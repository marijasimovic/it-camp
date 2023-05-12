const prom1 = "sta ako se data recenica ispise u \n dva odvojena reda";
console.log(prom1);

const prom2 =
  "sta ako zelimo da se data recenica ispise u dva odvojena reda kada kucamo \
ali njen prikaz ce izgledati u jednom redu";
console.log(prom2);
// const prom3 =
//   "sta ako zelimo da se data recenica ispise u dva odvojena reda kada kucamo
// ali njen prikaz ce izgledati u jednom redu";

let br1 = 7;
let br2 = 13;
let zbir = br1 + br2;
console.log("zbir brojeva " + 7 + " i " + 13 + " je " + zbir);

//resenje preko back-ticks

console.log(`zbir brojeva ${br1} i ${br2} je ${br1 + br2}`);

//zapisivanje stringa u vise redova je ispravna sintaksa kroz back-ticks navode

let recenica = "zelimo da rec 'promenljivo' zamenimo sa recju 'lepse'";

//replace()metoda menja specifican karakter ili niz karaktera sa nekim drugim(koji saljemo kroz argument)
//console.log(recenica.replace("promenljivo", "lepse"));
let recenica2 = recenica.replace("promenljivo", "lepse");
console.log(recenica);

let recenica3 =
  "zelimo da rec 'promenljivo' zamenimo sa recju 'lepse'.sta ako se rec promenljivo nadje na jos nekom mestu ";

let recenica4 = recenica3.replace("promenljivo", "lepse");
console.log(recenica4);

//replace metoda menja samo prvi pronadjeni argument u datom stringu
//regular expression menja argument gde god dodje
let recenica5 = recenica3.replace(/promenljivo/g, "lepse");
console.log(recenica5);

let recenica6 =
  "zelimo da rec 'promenljivO' zamenimo sa recju 'lepse'.sta ako se rec promenljivo nadje na jos nekom mestu ";

let recenica7 = recenica3.replace(/promenljivo/gi, "lepse");
console.log(recenica7);

//toUpperCase() metoda pretvara ceo string u velika slova bez obzira kako je predhodno ispisano

console.log("data recenica treba biti ispisana velikim slovima".toUpperCase());
//toLowerCase() metoda pretvara ceo string u velika slova bez obzira kako je predhodno ispisano

console.log("data recenica treba biti ispisana velikim slovima".toLowerCase());

//concat()spaja 2 ili vise stringova
//mozemo da spojimo onoliko stringova koliko hocemo
let a = "prvi deo ";
let b = " nase recenice";
let b2 = " .";
let c = a.concat(b, b2);
console.log(c);

//sve metode vezane za stringove prave novi string,ne vrsi se modifikacija postojeceg

function duzina(recenica) {
  if (recenica.length > 9) {
    return recenica.replace(/a/g, "b");
  } else {
    return "recenica je nedovoljna za ispitivanje";
  }
}
console.log(duzina("Recenica za modifikaciju"));
