const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
const evenFor = [];
for (let i = 0; i < nums.length; i++) {
  const num = nums[i];         // prendo l’elemento corrente
  if (num % 2 === 0) {         // controllo se è pari
    evenFor.push(num);         // lo aggiungo al nuovo array
  }
}
console.log(evenFor);
// Risultato: [2, 8, 4, 12]

//cicle foreach
const evenForEach = [];
nums.forEach(num => {
  if (num % 2 === 0) {
    evenForEach.push(num);
  }
});
console.log(evenForEach);