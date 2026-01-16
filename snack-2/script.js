const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

people.forEach((nomiDelGruppo) => {   //dato il paramentro al metodo foreach stampo in console il suo valore(.nome)
  console.log(nomiDelGruppo.name);
});