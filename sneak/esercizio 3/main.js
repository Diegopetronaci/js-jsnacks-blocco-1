//Crea 10 oggetti che rappresentano una zucchina.
//Dividi in due array separati le zucchine che misurano
//meno o più di 15cm.
//Infine stampa separatamente quanto pesano i due gruppi
//di zucchine

var zucchine = [
    {
        varieta: "Italiana",
        peso: 5,
        lunghezza: 25
    },
    {
        varieta: "Messicana",
        peso: 7,
        lunghezza: 35
    },
    {
        varieta: "Faenzana",
        peso: 3,
        lunghezza: 15
    },
    {
        varieta: "Equadoriana",
        peso: 6,
        lunghezza: 30
    },
    {
        varieta: "Francese",
        peso: 4,
        lunghezza: 20
    },
    {
        varieta: "Peruviana",
        peso: 2,
        lunghezza: 10
    },
    {
        varieta: "Africana",
        peso: 9,
        lunghezza: 45
    },
    {
        varieta: "Tedesca",
        peso: 8,
        lunghezza: 40
    },
    {
        varieta: "Giapponese",
        peso: 10,
        lunghezza: 50
    },
    {
        varieta: "Cinese",
        peso: 1,
        lunghezza: 5
    },

]

console.log(zucchine);


var piccoleZucchine = [];
var grandiZucchine = [];

zucchine.forEach(e => {
    e.lunghezza
    console.log(e.lunghezza);

    if (e.lunghezza <= 15) {
        piccoleZucchine.push(e.lunghezza);
    } else {
        grandiZucchine.push(e.lunghezza) 
    }
});

console.log(piccoleZucchine);
console.log(grandiZucchine);

var totalPiccole = 0;
for (var i = 0; i < piccoleZucchine.length; i += 1) {
    totalPiccole += piccoleZucchine[i];
}
console.log(totalPiccole);

var totalGrandi = 0;
for (var i = 0; i < grandiZucchine.length; i += 1) {
    totalGrandi += grandiZucchine[i];
}
console.log(totalGrandi);
