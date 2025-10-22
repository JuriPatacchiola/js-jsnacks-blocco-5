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

// Recupera la classe dello studente 'Marco Lanci'
let studentClass = null;

for (let i = 0; i < students.length; i++) {
  const student = students[i]; // prendo lo studente corrente
  if (student.name === 'Marco Lanci') {
    studentClass = student.class;
    break; // trovato, esco dal ciclo
  }
}

console.log(studentClass);
// Risultato: '3C'

// con cicle foreach

let studentClassFE = null;

students.forEach(student => {
  if (student.name === 'Marco Lanci') {
    studentClassFE = student.class;
  }
});

console.log(studentClassFE);