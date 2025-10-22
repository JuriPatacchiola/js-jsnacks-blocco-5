const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
let studentFound = null; // inizialmente nessuno

for (let i = 0; i < students.length; i++) {
  const student = students[i]; // prendo lo studente corrente
  if (student.id === 2) {      // controllo se l'id è 2
    studentFound = student;
    break;                     // esco dal ciclo, trovato!
  }
}

console.log(studentFound);
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }