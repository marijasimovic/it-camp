const zbirKvadrata = function (a, b) {
  if (a === b) {
    return "povrsina je " + a ** 2;
  } else {
    return a * b;
  }
};
//console.log(zbirKvadrata(4, 5));

const kvadratBroja = (a) => {
  return a ** 2;
};
//console.log(kvadratBroja(4));
//ako arrow function im a samo jedqan paramertar nije neophodno da ga stavljamo u zagradu
//ako funkcija vraca neki jednostavan izraz (predhodno nije bilo dodatnog koda)mozemo izostaviti{} i return

//const kvadratBroja2 = (a) => a ** 2;

const broj = (a) => {
  if (a > 0) {
    return "unet je pozitivan broj";
  } else if (a < 0) {
    return "uneli ste negativan broj";
  } else if (a === 0) {
    return "uneta je nula";
  } else if (isNaN(a)) {
    return "uneta vrednost nije broj";
  }
};
a = prompt("unesite broj");
console.log(broj(a));
