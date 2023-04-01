//SWITCH
//switch naredbu koristimo kada imamo slucajeve koji preciziraju vrednost

// switch (izraz) {
//   case vrednost1:
//     //blok koda za izvrsavanje u slucaju da je === vrednosti
//     break;
//   case vrednost2:
//     break;
//   default:
// }

//break se ne sme izostaviti na kraju nekog slucaja osim default

let broj = +prompt("unesite neki broj");
switch (broj) {
  case 12:
    console.log("uneli ste broj" + broj);
    break;
  case 15:
    console.log("uneli ste broj" + broj);
    break;
  default:
    console.log("niste uneli broj");
}
