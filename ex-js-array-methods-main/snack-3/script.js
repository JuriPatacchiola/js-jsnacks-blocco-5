const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
const incrementedFor = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];       // prendo l’elemento corrente
  incrementedFor.push(num + 1); // lo incremento e lo aggiungo al nuovo array
}
console.log(incrementedFor);
// Risultato: [3, 9, 5, 8, 3, 88]