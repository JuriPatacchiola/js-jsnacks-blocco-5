const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
for (let i = 0; i < people.length; i++) {
  const person = people[i];     // assegno l'elemento corrente
  console.log(person.name);     // stampo il nome
}
// Risultato: 'Paolo', 'Giulia', 'Marco'

//con cicle foreach
people.forEach(function(person) {
  console.log(person.name);
});