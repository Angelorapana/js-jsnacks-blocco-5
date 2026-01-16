const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

nums.find((numeriPari) =>{
    for (let i = 0; i < nums.length; i++) {
        const risultato = nums[i];

    if (nums[i] % 2 === 0) {
        console.log(risultato)
    }
}});

//stampa il risultato 6 volte perchè per ogni numero parte un ciclo come fare affinche venga atampato un solo risultato?