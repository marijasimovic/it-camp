//za ekstraktovanje(uzimanje jednog karaktera )mozemo iskoristiti jedan od 3 nacina

//charAt(index)metoda koja zauzima jedan argument(argument predstavlja index)i vraca nam karakter koji zauzima tu poziciju
//charCodeAt(index)metoda koja zauzima jedan argument(argument predstavlja index)i vraca nam kod karaktera koji zauzima tu poziciju
//strin(index)nacin pristupa nekom karakteru iz stringa

let recenica = "recenica za uzimanje karaktera";

console.log(recenica.charAt(4));
console.log(recenica.charCodeAt(4));
console.log(recenica[4]);

console.log(recenica.charAt(100)); //rezultat karaktera koji ne postoji daje prazan string
console.log(recenica[100]); //undefined

//za ekstraktovanje(uzimanje nekoliko karaktera )mozemo iskoristiti jedan od 3 nacina

//slice()metoda nam vraca deo stringa.ona ima 2 argumenta,prvi je pocetni index za uzimanje isecka,drugi je index do kojeg idemo
//drugi argument se ne ukljucuje i on nije obavezan ,ako nga izostavimo dobicemo string od prvog argumenta do kraja
//slice metoda omogucava koriscenje negativnih indeksa

console.log(recenica.slice(12, 20));
console.log(recenica.slice(12));
console.log(recenica.slice(-10, -1));

//substring()metoda nam vraca deo stringa.ona ima 2 argumenta,prvi je pocetni index za uzimanje isecka,drugi je index do kojeg idemo
//drugi argument se ne ukljucuje i on nije obavezan
//ne omogucava negativnne brojeeve
console.log(recenica.substring(12, 20));
console.log(recenica.substring(12));

////substr()metoda nam vraca deo stringa.ona ima 2 argumenta,prvi je pocetni index za uzimanje isecka,drugi je index do kojeg idemo
//drugi argument se ne ukljucuje i on nije obavezan

console.log(recenica.substr(3, 10));

//split() metoda nam sluzi da string pretvorimo u niz od jednog ili vise elemta

//ako split metodu primenimo na string bez da posaljemo argument dobicemo niz od samo jednog elementa(cela recenica je taj element)
console.log(recenica.split());

console.log(recenica.split(" ")); //svaka rec predstavlja jedan element niza

console.log(recenica.split("")); //svaki karakter jedan element niza

function najduzaRec(string) {
  const nizReci = string.split(" ");
  let najduzaRec = nizReci[0];
  for (let i = 0; i < nizReci.lenght; i++) {
    if (nizReci[i].lenght > najduzaRec.lenght) {
      najduzaRec = nizReci[i];
    }
  }
  return najduzaRec.lenght;
}
console.log(najduzaRec(recenica));
