// Definiamo un Array con numeri da 1 a 6 oppure genera 6 numeri in modo casuale con math.random 
const numeriArray = [1,2,3,4,5,6];

// Da qui otteniamo due Const per ottenere due numeri casuali
const random = numeriArray[Math.floor(Math.random() * numeriArray.length)];
const random2 = numeriArray[Math.floor(Math.random() * numeriArray.length)];

// Da qui riutiliziamo le due const scritte sopra e le cambiamo nome
const player1 = random;
console.log("Player 1 ha ottenuto dai dadi:", player1);

const player2 =  random2;
console.log("Il computer ha ottenuto dai dadi:", player2);

// if , if else per dare il risultato del vincitore 
if (player1 === player2 ) {
    alert ('Pareggio');
} else if (player1 > player2) {
    alert ('Ha vinto Player 1');
} else if (player2 > player1) {
    alert ('Ha vinto il Computer');
}