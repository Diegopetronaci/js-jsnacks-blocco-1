//Scrivi una funzione che accetti tre argomenti:
//un array e due numeri
//(“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”


function mySplice(array, a , b) {
    /* if (a < b && b <= array.length) {
        array.push(a);
    } */

    var improvvisata = [];

    for (var i = 0; i < array.length; i++) {
        if (a < i && i < b) {
            improvvisata.push(array[i]);
        }
        
    }
    return improvvisata;
}

var a = Number(prompt("inserisci un numero da 0 a 9"));
var b = Number(prompt("inserisci un numero da 0 a 9"));

var numeri = [1,2,3,4,5,6,7,8,9,10];
console.log(numeri);

var arrNuova = mySplice(numeri, a, b);

console.log(arrNuova);

//da completare con verifica per non far mettere b minore di a
