//Scrivi una funzione che accetti tre argomenti:
//un array e due numeri
//(“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”


function splice(array, a , b) {
    /* if (a < b && b <= array.length) {
        array.push(a);
    } */


    
}

a = Number(prompt("inserisci un numero da 1 a 9"));

var numeri = [1,2,3,4,5,6,7,8,9,10];
console.log(numeri);

var arrNuova = numeri.splice(a, numeri.length);

console.log(arrNuova);

