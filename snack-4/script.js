const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

posts.map((nomiautori) => {    //introduco il metodo
  let {author} = posts          // mi prendo i dati
  let gruppoNomi = nomiautori.author   // li assegno a una variabile
  console.log(gruppoNomi);    //stampo la nuova variabile
});