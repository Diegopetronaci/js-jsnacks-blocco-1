//Scrivi una funzione che accetti una stringa come
//argomento e la ritorni girata(es.Ciao -> oaiC)

/* var parola = "ciao";
console.log(parola);
var spelling = parola.split("");
console.log(spelling);
var specchio = spelling.reverse();
console.log(specchio); */

function parolaSpeculare(parola) {
    var spelling = parola.split("");
    var specchio = spelling.reverse();
    var risultato = specchio.join("");
    return risultato;
}

console.log(parolaSpeculare("parola"));