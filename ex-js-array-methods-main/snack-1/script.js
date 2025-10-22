

// Stampa in console tutti i nomi
const names = ['Edoardo', 'Simone', 'Francesco'];

console.log("--- Ciclo 'for' con dichiarazione 'const' per i nomi ---");

for (let i = 0; i < names.length; i++) {
  // Dichiarazione 'const' per il nome corrente
  const name = names[i]; 
  
  // Utilizzo della variabile 'name'
  console.log(`Nome: ${name}`);
}
// Risultato: 'Edoardo', 'Simone', 'Francesco'

//questo è con il foreach
names.forEach(function(name, index) {

  console.log(name);
});