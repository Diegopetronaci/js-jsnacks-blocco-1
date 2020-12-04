//Scrivi una funzione che accetti tre argomenti:
//un array e due numeri(“a” più piccolo di “b” e “b” grande al
//massimo quanto il numero di elementi dell’array).
//La funzione ritornerà un nuovo array con i valori che
//hanno la posizione compresa tra “a” e “b”


function Anonymous(array, a , b) {
    /* var bho = a < b;
    var bhobho = b < array.length */
    if (a < b && b < array.length) {
        array.push(a);
    }
}

var bho = 1;
var bhobho = 100;
var vuota = [];

var anonima = Anonymous(vuota, bho, bhobho);
console.log(anonima);