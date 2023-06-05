//Domaci zadaci:
// 1.
// a=int(input('Unesite prvu potencijalnu stranicu pravougaonika: '))
// b=int(input('Unesite drugu potencijalnu stranicu pravougaonika: '))
// c=int(input('Unesite trecu potencijalnu stranicu pravougaonika: '))
// d=int(input('Unesite cetvrtu potencijalnu stranicu pravougaonika: '))

// 2. Unesite broj sekundi koji zelite pretvoriti u sate, minute i sekunde:

// 1 sat ima 60 minuta
// 1 sat ima 60*60 = 3600 sekundi
// 1 minut ima 60 sekundi

// 123
const first = () => {
  const a = +prompt("unesite prvu stranicu");
  const b = +prompt("unesite drugu stranicu");
  const c = +prompt("unesite trecu stranicu");
  const d = +prompt("unesite cetvrtu stranicu");
  if (
    ((a === b) === c) === d ||
    (a === b && c === d) ||
    (a === c && b === d) ||
    (a === d && b === c)
  ) {
    return "Moguce je formirati pravougaonik";
  } else {
    return "nije moguce";
  }
};
// console.log(first());

const second = () => {
  const brSek = +prompt("unesite broj sekundi");
  const sati = Math.floor(brSek / 3600);
  const minuti = Math.floor((brSek % 3600) / 60);
  const sekunde = brSek % 60;
  return `${sati}h ${minuti}m ${sekunde}s`;
};
console.log(second());
