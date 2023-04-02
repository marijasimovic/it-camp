//ispisati brojeve od 1 do 10 u konzoli
//console.log(1);
//console.log(2);
//console.log(3);
//console.log(4);
//console.log(5);
//console.log(6);
//console.log(7);
//console.log(8);
//console.log(9);
//console.log(10);

//for petlja
//for (statment1; statment2; stantmen3) {
//blok koda za izvrsavanje

//statment 1 predstavlja definisanje
//statment 2 uslov
//statment 3 promena vrednosti
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 1; i <= 10; i++) {
  if (i != 3 && i != 5) {
    console.log(i);
  }
}
//continue koristimo kada zelimo da izbegnemo neki slucaj i da se osvrnemo

for (i = 1; i < 11; i++) {
  if (i === 2 || i === 5) {
    continue;
  } else {
    console.log(i);
  }
}

//break koristimo kada zelimo da prekinemo petlju

for (i = 1; i < 11; i++) {
  if (i % 7 === 0) {
    break;
  } else {
    console.log(i);
  }
}
for (a = 2; a < 21; a++) {
  if (a % 2 === 0) {
    console.log(a);
  }
}
for (a = 2; a < 21; a += 2) {
  console.log(a);
}
