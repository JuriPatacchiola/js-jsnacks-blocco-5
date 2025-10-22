const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
const authorsFor = [];
for (let i = 0; i < posts.length; i++) {
  const post = posts[i];            // prendo l’elemento corrente
  authorsFor.push(post.author);     // estraggo il nome e lo aggiungo al nuovo array
}
console.log(authorsFor);
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']