//math.min(x,z,y......n)-vraca najmanji broj
console.log(Math.min(3, 4, 5));

//math.max(x,z,y......n)-vraca najveci  broj

console.log(Math.max(3, 4, 5));

console.log(Math.min.apply(null, [1, 3, 5, -9, 6, -7]));

const niz = [1, 3, 5, -9, 6, -7];

function getMax(arr) {
  let max = arr[0];
  for (let i = o; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

//math.random() vraca nam random broj izmedju 0 i 1(ne ukljucuje se 1)
console.log(Math.random());

//0 ili 1
console.log(Math.round(Math.random()));

//izmedju 0 i 20
console.log(Math.round(Math.random() * 20));

//50 i 100
console.log(Math.round(Math.random() * 50) + 50);


//Kreirati funkciju koja radi sledece:
// Koristeci prompt uneti 5 imena radnika, potom od njih napraviti niz i izvrsiti sledece:
// Najpre od postojecih imena kreirati email adrese, tako sto cete na ime dodati "@gmail.com", i
// te nove adrese smestiti u novi niz, a potom napraviti da se na svaki klik na dugme "Prikazi"
// prikazuje alert-a u kome je ispisana neka od adresa u nizu. Bitno: na svaki klik treba da izlazi
// drugacija adresa, to uraditi koristeci random generisanje.
// Funkcija se poziva odmah pri pokretanju programa.

function funkcija(){
    radnik1.split()=prompt("unesite ime prvog radnika")
    radnik2.split()=prompt("unesite ime prvog radnika")  
    radnik3.split()=prompt("unesite ime prvog radnika") 
     radnik4.split()=prompt("unesite ime prvog radnika") 
      radnik5.split()=prompt("unesite ime prvog radnika")
}




//napraviti funkciju koja izracunava obim kruga na osnovu poluprecnika(parametra) o=2*r*PI

function izracunajObimKruga(poluprecnik) {
     obim = 2 * poluprecnik * Math.PI;
    return obim;
  }
  console.log(izracunajObimKruga(5))