// math metods

//sintaksa za bilo koju matematicku metodu je sledeca:
//Math.method(number)

//Number to Intiger

//postoje 4 razlicite metode za dobijanje celog broja slanjem broja sa decimalnim zapisom

//Math.round(x)-vraca blizi ceo broj broju x

console.log(Math.round(3.123334));

//math.ceil(x) vraca sledeci ceo broj
console.log(Math.ceil(3.123334));
console.log(Math.ceil(-3.123334));

//Math.floor(x)- vraca predhodni ceo broj
console.log(Math.floor(3.123334));
console.log(Math.floor(-3.123334));

//Math.trunc(x)-vraca ceo broj odstranjujuci ostatak
console.log(Math.trunc(3.123334));
console.log(Math.trunc(-3.123334));

//Math.sign- vraca :
//1 ako je x pozitivan broj
//0 ako je x nula
//-1 ako je x negativan  broj
console.log(Math.sign(34));
console.log(Math.sign(-34));
console.log(Math.sign(0));

//math.pow(x,y)-vraca x stepenovan brojem y

console.log(Math.pow(2, 3));

//math.sqrt(x) koren od x

console.log(Math.sqrt(36));

//math.sin- sinus u radijanima

console.log(Math.sin(Math.PI / 2));

//math.cos kosinus
console.log(Math.cos(Math.PI));
