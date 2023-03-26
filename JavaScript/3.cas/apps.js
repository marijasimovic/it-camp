//var
var x = 10;
console.log(x);
x = 14;
console.log(x);
var x;
console.log(x);
//za sve promenljive definisane preko var keyword je moguce izvrsiti redekliknaciju(ponovo definisanje promenljive)

//let

let y = 30;
console.log(y);

y = 15;
console.log(y);
//let y;

//za sve promenljive definisane preko let keyword je moguce izvrsiti redekliknaciju(ponovo definisanje promenljive) ali kada govorimo o istom prostoru nece biti moguca rediklaracija(ponovo obezbedjivanje mem u prostoru)

//let i const keyword nam obezbedjuju block scope(dodatni prostor za definisanje promenljivih)

//promenljive definisane preko let ili const keyword su block scope

{
  let y = 50;
  console.log(y);
}

//u nekom block scoru je moguce izvrsiti i redeklinaciju i reinicijalizaciju

//const
const w = 18;
console.log(w);

//u nekom block scoru nije moguce izvrsiti i redeklinaciju i reinicijalizaciju

{
  const w = 90;
  console.log(w);
}

//sve karekteristike koje vaze za promenljivu definisnu preko let vaze i za const keyword kada govorimo block scope

const niz = [12, 13, 14, 15];
console.log(niz);

//postoje metode koje nam dozvoljavaju izmenu nnaseg niza bez obzira sto se radi o promenljivoj
