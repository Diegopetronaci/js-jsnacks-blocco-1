//Crea 10 oggetti che rappresentano una zucchina,
//indicando per ognuna varietà, peso e lunghezza.

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
        lunghezza: 20
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

//Calcola quanto pesano tutte le zucchine.

var sommaPeso = []

for (var i = 0; i < zucchine.length; i++) {
    var pesoSingolo = zucchine[i].peso
    sommaPeso.push(pesoSingolo)
}
console.log(sommaPeso);

//da rivedere e provare a fare processo con ciclo for non abbreviato
var total = 0;
for (var i = 0; i < sommaPeso.length; i++) {
    total += sommaPeso[i];
} 

console.log(total);



