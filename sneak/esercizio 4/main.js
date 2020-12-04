//Scrivi una funzione che fonda due array(con lo stesso
//numero di elementi) prendendo alternativamente gli
//elementi da uno e dall’altro
//es. [a, b, c], [1, 2, 3]→[a, 1, b, 2, c, 3].

var lettere = ["a", "b", "c", "d", "e", "f"];
console.log(lettere);
var numeri = [1, 2, 3, 4, 5, 6];
console.log(numeri);

var misto = [];


function unione(array1,array2,array3) {

    
    for (i = 0; i < array3.length; i++) {
        if (array1[i]<array2[i]) {
            array3.push(array1[i]);
            array3.push(array2[i]);
        } else {
            
        }
    }

}

console.log(unione(lettere,numeri,misto));













/* var l = Math.min(lettere.length, numeri.length);

var i = 0;
for (i = 0; i < l; i++) {
    arrayRisultato.push(lettere[i], numeri[i]);
}

arrayRisultato.push(...lettere.slice(l), ...numeri.slice(l));



console.log(arrayRisultato); */