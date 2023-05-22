// Domaci zadaci:
// 1. Prebrojavanje reči
// Napiši funkciju koja prima jedan string kao argument i vraća broj reči u tom stringu. Pretpostavi da su reči odvojene samo jednim razmakom. Na primer, za ulazni string "Ovo je primer." funkcija treba da vrati broj 3.

// 2. Obrtanje stringa
// Napiši funkciju koja prima jedan string kao argument i vraća taj string u obrnutom redosledu. Na primer, za ulazni string "hello" funkcija treba da vrati "olleh".

// 3.	Prebrojati koliko ima znakova koji su cifre u unetom stringu.

//1.

function funkcija(recenica) {
  niz1 = recenica.split(" ");
  return niz1.length;
}
console.log(funkcija("dobar dan"));

//2.
function funkcija1(nesto) {
  let nesto2 = "";
  for (i = nesto.length - 1; i >= 0; i--) {
    nesto2 += nesto[i];
  }
  return nesto2;
}
console.log(funkcija1("ajsa"));

//3.

function funkcija2(tekst) {
  let brojac = 0;
  for (i = 0; i < tekst.length; i++) {
    if (!isNaN(tekst[i]) && tekst[i] !== " ") {
      brojac++;
    }
  }
  return brojac;
}
console.log(funkcija2("nestoo"));
console.log(funkcija2("nesto4556so"));
