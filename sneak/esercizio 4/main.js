//Scrivi una funzione che fonda due array(con lo stesso
//numero di elementi) prendendo alternativamente gli
//elementi da uno e dall’altro
//es. [a, b, c], [1, 2, 3]→[a, 1, b, 2, c, 3].

var lettere = ["a", "b", "c", "d", "e", "f"];
var numeri = [1, 2, 3, 4, 5, 6];

var arrayRisultato = [];


var l = Math.min(lettere.length, numeri.length);

var i = 0;
for (i = 0; i < l; i++) {
    arrayRisultato.push(lettere[i], numeri[i]);
}

arrayRisultato.push(...lettere.slice(l), ...numeri.slice(l));



console.log(arrayRisultato);