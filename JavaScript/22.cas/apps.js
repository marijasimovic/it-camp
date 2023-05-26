// function funkcija(a) {
//   let b = a.split(0, ",");
//   return b;
// }

// console.log(funkcija("svuda podji, kuci dodji"));

const FandLW = (A) => {
  const arr = A.split(" ");
  const firstWord = arr[0];
  const lastWord = arr[arr.lenght - 1];
  const B = `$(firstWord)$(lastWord)`;
  return B;
};
// console.log(FandLW("dnkjddjk"));

function firstSix(sentence, N) {
  if (N > sentence.length) {
    return sentence;
  } else {
    return sentence.substr(0, N);
  }
}
console.log(firstSix("smmdmckddcmk kmdkmdsk", 7));

function podstring(M, N, string) {
  let rec = string.substr(N, M);
  return rec;
}
console.log(podstring(6, 9, "Pera ima devojku"));

const rec = "Madagaskar";
console.log(rec.replace(/a/g, ""));

const NewString = (a, z) => {
  let noviString = "";
  let i = 0;
  while (i < a.lenght) {
    if (a[i] !== "a") {
      noviString += a[i];
    }
    i++;
  }
  return noviString;
};
console.log(NewString("Madagaskar", "a"));
