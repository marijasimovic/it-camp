// Domaci zadaci:
// 1. Napraviti funkciju koja ocekuje cetvorocifren broj, a vraca broj kojem su zamenjene prva i treca cifra, kao i druga i cetvrta cifra.
// 4752
// 5247

// 2. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

function zameniCifre(broj) {
  var brojString = broj.toString();

  if (brojString.length !== 4) {
    console.log("Uneseni broj nije četveroznamenkast.");
    return;
  }

  var novaCifra1 = brojString[2];
  var novaCifra2 = brojString[3];
  var novaCifra3 = brojString[0];
  var novaCifra4 = brojString[1];

  var noviBroj = parseInt(novaCifra1 + novaCifra2 + novaCifra3 + novaCifra4);

  return noviBroj;
}

var broj = 4752;
var rezultat = zameniCifre(broj);
console.log("Novi broj:", rezultat);

//2.
function nearestTo100(num1, num2) {
  var diff1 = Math.abs(num1 - 100);
  var diff2 = Math.abs(num2 - 100);

  if (diff1 === diff2) {
    return "Both numbers are equidistant from 100.";
  } else if (diff1 < diff2) {
    return num1 + " is nearest to 100.";
  } else {
    return num2 + " is nearest to 100.";
  }
}

var num1 = 85;
var num2 = 110;
var result = nearestTo100(num1, num2);
console.log(result);
