const isSunny = true;
if (isSunny === true) {
  console.log("suncano je");
} else {
  console.log("nije suncano");
}

//POSTOJI 8 FALSY VREDNOSTI I TO SU:

//false
//""
//0
//-0
//0n
//NaN
//undefined
//null

function vrednost() {
  const userInput = prompt("unesite poruku");
  if (userInput) {
    return "truthy";
  } else {
    return "falsy";
  }
}
console.log(vrednost());

function vrednost2() {
  const userInput = +prompt("unesite broj");
  if (userInput) {
    return "truthy";
  } else {
    return "falsy";
  }
}
console.log(vrednost2());

let recenica = "";
while (!recenica) {
  recenica = prompt("unesite recenicu");
}
console.log(recenica);
